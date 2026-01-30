/** chunk id: 928588, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
}), n(896048);
let r = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

function i(e) {
    let {
        allowPopups: t
    } = e, n = r;
    return t && (n = [...r, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
}