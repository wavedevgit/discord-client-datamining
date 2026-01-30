/** chunk id: 192867, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(725499);

function o(e) {
    let {
        user: t,
        nickname: n
    } = e, o = null != n;
    return (0, r.jsx)(i.euF, {
        src: t.getAvatarURL(void 0, o ? 16 : 24),
        size: o ? i._3J.SIZE_16 : i._3J.SIZE_24,
        className: o ? a.H : a.tM,
        "aria-hidden": !0
    })
}