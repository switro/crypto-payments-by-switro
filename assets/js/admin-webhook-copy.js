document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('copy-webhook-btn');
    const input = document.querySelector('input.switro-webhook-url');

    if (btn && input) {
        btn.addEventListener('click', function () {
            input.select();
            input.setSelectionRange(0, 99999); // mobile

            try {
                document.execCommand('copy');
                btn.textContent = 'Copied!';
                btn.disabled = true;
                setTimeout(() => {
                    btn.textContent = 'Copy to Clipboard';
                    btn.disabled = false;
                }, 2000);
            } catch (err) {
                console.error('Copy failed:', err);
                btn.textContent = 'Failed to Copy';
            }
        });
    }
});