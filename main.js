  function setLog(msg) {
      document.getElementById('log').innerText = '送信ログ: ' + msg + ' (' + new Date().toLocaleTimeString() + ')';
    }

    // 1. カスタムイベント
    document.getElementById('btn-custom').addEventListener('click', function() {
      gtag('event', 'test_click', {
        'button_name': 'test_custom_button',
        'page_type': 'verification_page'
      });
      setLog('カスタムイベント (test_click) を送信しました');
    });

    // 2. パラメータ付きイベント
    document.getElementById('btn-param').addEventListener('click', function() {
      gtag('event', 'test_purchase', {
        'transaction_id': 'T_' + Math.floor(Math.random() * 1000000),
        'value': 1500,
        'currency': 'JPY',
        'item_name': '検証用サンプルアイテム'
      });
      setLog('パラメータ付きイベント (test_purchase) を送信しました');
    });

    // 3. ユーザー属性の設定
    document.getElementById('btn-user-prop').addEventListener('click', function() {
      gtag('set', 'user_properties', {
        'user_type': 'tester',
        'test_group': 'group_a'
      });
      gtag('event', 'user_profile_updated');
      setLog('ユーザー属性 (user_type: tester) を設定してイベントを送信しました');
    });
 
