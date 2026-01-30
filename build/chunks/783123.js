/** chunk id: 783123, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(627968),
    i = n(993401),
    a = n(985018);

function o(e) {
    let {
        isBlocked: t,
        onClick: n,
        size: o = "sm"
    } = e;
    return (0, r.jsx)(i.FD, {
        size: o,
        action: t ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        text: a.intl.string(a.t["UJKH/l"]),
        variant: "primary",
        autoFocus: !0,
        fullWidth: !1,
        onClick: n
    })
}