/** chunk id: 265422 params = (module,exports,require) **/
n.d(t, {
    a: () => d,
    i: () => o
});
var i = n(397927),
    r = n(367513),
    l = n(951001),
    a = n(366811),
    s = n(652215);

function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, i.ueM)() || (n && l.A.channelListScrollTo(e, t), o && null != t && r.A.updateChatOpen(t, !0), a.A.getState().updatePath(s.BVt.CHANNEL(e, t)))
}

function d(e) {
    (0, i.ueM)() || a.A.getState().updatePath(e)
}