/** chunk id: 265422, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => c,
    i: () => o
});
var r = n(397927),
    i = n(367513),
    l = n(951001),
    a = n(366811),
    s = n(652215);

function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    (0, r.ueM)() || (n && l.A.channelListScrollTo(e, t), o && null != t && i.A.updateChatOpen(t, !0), a.A.getState().updatePath(s.BVt.CHANNEL(e, t)))
}

function c(e) {
    (0, r.ueM)() || a.A.getState().updatePath(e)
}