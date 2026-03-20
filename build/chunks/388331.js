/** chunk id: 388331 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var a = n(179771),
    l = n(397927),
    r = n(827343),
    s = n(401843),
    o = n(793574),
    d = n(15285),
    c = n(905552),
    u = n(442353),
    A = n(616356),
    h = n(430452),
    _ = n(157257),
    m = n(723702),
    g = n(629471),
    p = n(693806),
    E = n(613057),
    I = n(652215);
let f = {
    [I.e$_.TOGGLE_VIDEO]: {
        scope: {
            [E.sm.ALL]: [a.F.RPC, a.F.RPC_VIDEO_WRITE]
        },
        handler() {
            let e = h.Ay.isVideoEnabled();
            null != (0, p.A)() && (e ? r.A.setVideoEnabled(!1) : (0, u.A)(() => r.A.setVideoEnabled(!0), I.BRT.APP))
        }
    },
    [I.e$_.TOGGLE_SCREENSHARE]: {
        scope: {
            [E.sm.ALL]: [a.F.RPC, a.F.RPC_SCREENSHARE_WRITE]
        },
        validation: e => (0, g.A)(e).optional().keys({
            pid: e.number().optional().min(0)
        }),
        handler(e) {
            let {
                args: {
                    pid: t
                }
            } = e, a = A.A.getCurrentUserActiveStream(), r = A.A.getStreamerActiveStreamMetadata(), u = (0, c.A)(d.Ay, _.A), h = (0, p.A)();
            null != h && (null != t && null != r && r.pid !== t && (0, m.isWindows)() ? (0, s.XI)(h.guild_id, h.id, {
                pid: t
            }) : null != a ? (0, s.nO)(!1) : null != t && (0, m.isWindows)() ? (0, s.XI)(h.guild_id, h.id, {
                pid: t
            }) : null != u ? (0, s.XI)(h.guild_id, h.id, {
                pid: u.pid
            }) : (0, l.mMO)(async () => {
                let {
                    default: e
                } = await n.e("96811").then(n.bind(n, 648230));
                return t => (0, i.jsx)(e, {
                    ...t,
                    analyticsLocations: [o.A.RPC]
                })
            }))
        }
    }
}