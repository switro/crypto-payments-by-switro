document.addEventListener("DOMContentLoaded", function () {
    if (
        window.wc?.wcBlocksRegistry?.registerPaymentMethod &&
        window.wp?.element &&
        window.wc?.wcSettings
    ) {
        const settings = window.wc.wcSettings["switro_gateway_data"] || {};
        const { createElement } = window.wp.element;

        window.wc.wcBlocksRegistry.registerPaymentMethod({
            name: "switro_gateway",
            label: createElement("span", null, settings.title || "Switro Solana/ETH Wallet"),
            ariaLabel: settings.ariaLabel || "Switro Solana/ETH Wallet",
            supports: {
                features: ["products", "default", "virtual"],
            },
            canMakePayment: () => Promise.resolve(true),
            content: createElement(
                "p",
                null,
                settings.description || "Pay instantly with Switro Solana/ETH Wallet"
            ),
            edit: createElement("p", null, settings.description || "Pay instantly with Switro Solana/ETH Wallet"),
            save: null,
        });

        console.log("[Switro] registered in block checkout");
    }
});
