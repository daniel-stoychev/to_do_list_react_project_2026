
  /* Simple full-page overlay spinner */
  .emp - panel - loading - overlay {
    position: fixed;
    z - index: 99999;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    display: flex;
    align - items: center;
    justify - content: center;
    font - family: sans - serif;
    font - size: 16px;
    color: #333;
}
  .emp - panel - loading - spinner {
    border: 4px solid #eee;
    border - top - color: #c71e31;
    border - radius: 50 %;
    width: 36px;
    height: 36px;
    animation: emp - panel - spin 0.8s linear infinite;
    margin - right: 10px;
}
@keyframes emp - panel - spin {
      to { transform: rotate(360deg); }
}
</style >

    <script>
        (function () {
    const loginBtnSelector      = '.am-asi__btn';
        const logoutBtnSelectorDesktop     = '.am-fs-sb__page-inner';
        const logoutBtnSelectorMobile = '.am-msd__item-inner';
        const logoutSelectors = [logoutBtnSelectorDesktop, logoutBtnSelectorMobile];
        const errorSelector         = '.am-e-error';
        const ameliaPanelSelector   = '.site-content'; // BLOCK ONE WRAPPER
        const checkIntervalMs       = 200;
        const maxRetries            = 50;
        const postAuthDelayLogin    = 2000;
        const postAuthDelayLogout   = 2000;

        let checkInterval = null;
        let retryCount    = 0;

        function setAmeliaPanelVisible(visible) {
        const panel = document.querySelector(ameliaPanelSelector);
        if (!panel) return;
        panel.style.visibility = visible ? 'visible' : 'hidden';
    }

        function showGlobalSpinner(message) {
        if (document.querySelector('.emp-panel-loading-overlay')) return;

        // Hide main content to avoid seeing it load underneath
        setAmeliaPanelVisible(false);

        const overlay = document.createElement('div');
        overlay.className = 'emp-panel-loading-overlay';
        overlay.style.position = 'fixed';
        overlay.style.zIndex = '99999';
        overlay.style.inset = '0';
        overlay.style.background = 'rgba(255,255,255,0.95)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.fontFamily = 'sans-serif';
        overlay.style.fontSize = '16px';
        overlay.style.color = '#333';

        // Container for logo + spinner + text
        const contentWrapper = document.createElement('div');
        contentWrapper.style.display = 'flex';
        contentWrapper.style.flexDirection = 'column';
        contentWrapper.style.alignItems = 'center';
        contentWrapper.style.justifyContent = 'center';

        // Logo image ABOVE spinner
        const logo = document.createElement('img');
        logo.src = 'https://d-wp1.truester.win/wp-content/uploads/2025/07/cropped_logo_corrected.png';
        logo.alt = 'Office Therapy';
        logo.style.maxWidth = '180px';
        logo.style.marginBottom = '20px';

        // Row with spinner + text
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';

        const spinner = document.createElement('div');
        spinner.style.border = '4px solid #eee';
        spinner.style.borderTopColor = '#c71e31'; // your custom color
        spinner.style.borderRadius = '50%';
        spinner.style.width = '36px';
        spinner.style.height = '36px';
        spinner.style.animation = 'emp-panel-spin 0.8s linear infinite';
        spinner.style.marginRight = '10px';

        const text = document.createElement('div');
        text.textContent = message || 'Loading…';

        const style = document.createElement('style');
        style.textContent = '@keyframes emp-panel-spin {to {transform: rotate(360deg); } }';
        document.head.appendChild(style);

        row.appendChild(spinner);
        row.appendChild(text);
        contentWrapper.appendChild(logo);
        contentWrapper.appendChild(row);
        overlay.appendChild(contentWrapper);

        document.body.appendChild(overlay);
    }

        function hideGlobalSpinner() {
        const overlay = document.querySelector('.emp-panel-loading-overlay');
        if (overlay) overlay.remove();
        setAmeliaPanelVisible(true);
    }

        window.addEventListener('click', function (e) {
        // LOGIN
        if (
        e.target &&
        (e.target.classList.contains('am-asi__btn') ||
        e.target.closest(loginBtnSelector))
        ) {
            console.log('[EMP PANEL] Login click detected');
        clearInterval(checkInterval);
        retryCount = 0;

        showGlobalSpinner('Signing you in…');

        checkInterval = setInterval(function () {
            retryCount++;

        const loginBtn = document.querySelector(loginBtnSelector);
        const errorMsg = document.querySelector(errorSelector);

        if (!loginBtn) {
            console.log('[EMP PANEL] Login success. Waiting', postAuthDelayLogin, 'ms before reload');
        clearInterval(checkInterval);
        setTimeout(function () {
            console.log('[EMP PANEL] Reload after login');
        window.location.reload();
                    }, postAuthDelayLogin);
                } else if (errorMsg && errorMsg.offsetParent !== null) {
            console.log('[EMP PANEL] Login error visible. Stopping watcher.');
        clearInterval(checkInterval);
        hideGlobalSpinner();
                } else if (retryCount >= maxRetries) {
            console.log('[EMP PANEL] Login watcher timeout. Stopping.');
        clearInterval(checkInterval);
        hideGlobalSpinner();
                }
            }, checkIntervalMs);
        }

        // LOGOUT
        if (
        e.target &&
        (
        e.target.matches(logoutBtnSelector) ||
        e.target.closest(logoutBtnSelector)
        )
        ) {
            console.log('[EMP PANEL] Logout click detected');
        showGlobalSpinner('Signing you out…');
        setTimeout(function () {
            console.log('[EMP PANEL] Reload after logout');
        window.location.reload();
            }, postAuthDelayLogout);
        }

        // LOGOUT Mobile
        if (
        e.target &&
        (
        e.target.matches(logoutBtnSelectorMobile) ||
        e.target.closest(logoutBtnSelectorMobile)
        )
        ) {
            console.log('[EMP PANEL] Logout click detected');
        showGlobalSpinner('Signing you out…');
        setTimeout(function () {
            console.log('[EMP PANEL] Reload after logout');
        window.location.reload();
            }, postAuthDelayLogout);
        }
    }, true);

        window.addEventListener('load', hideGlobalSpinner);
})();


        if (
        e.target &&
        (
        (e.target.matches(logoutBtnSelector) || e.target.closest(logoutBtnSelector))
        ||
        (e.target.matches(logoutBtnSelectorMobile) || e.target.closest(logoutBtnSelectorMobile))

        )
        ) {
            console.log('[EMP PANEL] Logout click detected');
        showGlobalSpinner('Signing you out…');
        setTimeout(function () {
            console.log('[EMP PANEL] Reload after logout');
        window.location.reload();
            }, postAuthDelayLogout);
        }