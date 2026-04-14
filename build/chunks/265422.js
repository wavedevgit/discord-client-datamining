/** chunk id: 265422 params = (module,exports,require) **/
n.d(t, {
    a: () => d,
    i: () => o
});
var i = n(397927),
    a = n(367513),
    l = n(951001),
    s = n(366811),
    r = n(652215);

function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.ueM)() || (n && l.A.channelListScrollTo(e, t), o && null != t && a.A.updateChatOpen(t, !0), s.A.getState().updatePath(r.BVt.CHANNEL(e, t)))
}

function d(e) {
    (0, i.ueM)() || s.A.getState().updatePath(e)
}