/** chunk id: 111487, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l,
    g: () => s
});
var r = n(627968);
n(64700);
var i = n(565645),
    a = n(202027),
    o = n(322107);
let s = {
    SMALL: o.EX,
    MEDIUM: o.Y,
    LARGE: o.as
};

function l(e) {
    let {
        emojiId: t,
        emojiName: n,
        defaultComponent: o,
        size: l = s.MEDIUM
    } = e, {
        customEmoji: c,
        unicodeEmoji: u
    } = (0, a.A)(t, n);
    return null == c && null == u ? o : (0, r.jsx)(i.A, {
        emojiName: null != c ? null == c ? void 0 : c.name : n,
        animated: null != c && c.animated,
        emojiId: null == c ? void 0 : c.id,
        autoplay: !0,
        className: l
    })
}