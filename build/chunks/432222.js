/** chunk id: 432222, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => N,
    w: () => h
});
var l = s(64700),
    n = s(989349),
    a = s.n(n),
    i = s(311907),
    r = s(397927),
    o = s(843472),
    u = s(976860),
    c = s(74114),
    d = s(994500),
    m = s(954571),
    A = s(405269),
    p = s(661191),
    x = s(652215),
    E = s(381941),
    f = s(985018);
let h = "749054660769218631";

function N(e, t) {
    let [s, n] = l.useState(!1), N = l.useCallback(async () => {
        if (!s) {
            n(!0), (0, u.pX)(x.BVt.CHANNEL(x.ME, e.id));
            try {
                await o.A.sendStickers(e.id, [h], "", {
                    location: E.Hx.SEND_WAVE
                })
            } catch (e) {
                e.ok || 429 !== e.status || (0, r.showToast)((0, r.createToast)(f.intl.string(f.t.Whhv4w), r.ToastType.FAILURE))
            }
            m.default.track(x.HAw.WAVE_CTA_CLICKED, {
                source: "DM Channel"
            }), n(!1)
        }
    }, [e.id, s]), S = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot), T = S ? e.getRecipientId() : null, C = (0, i.bG)([d.A], () => null != T && d.A.isFriend(T)), v = (0, i.bG)([d.A], () => null != T && d.A.isIgnored(T)), _ = p.default.extractTimestamp(e.id), g = (0, A.v0)(a()(), a()(_), 18144e5), j = (0, c.l)(e.id);
    return {
        waveShouldShow: S && C && !v && null == t && g && null == j,
        wavePressed: N
    }
}