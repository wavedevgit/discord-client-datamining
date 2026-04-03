/** chunk id: 265422 params = (module,exports,require) **/
n.d(t, {
    a: () => d,
    i: () => o
});
var i = n(397927),
    l = n(367513),
    r = n(951001),
    s = n(366811),
    a = n(652215);

function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.ueM)() || (n && r.A.channelListScrollTo(e, t), o && null != t && l.A.updateChatOpen(t, !0), s.A.getState().updatePath(a.BVt.CHANNEL(e, t)))
}

function d(e) {
    (0, i.ueM)() || s.A.getState().updatePath(e)
}