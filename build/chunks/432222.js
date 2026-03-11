/** chunk id: 432222 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(64700),
    s = n(989349),
    a = n.n(s),
    i = n(311907),
    r = n(397927),
    o = n(843472),
    u = n(976860),
    c = n(74114),
    d = n(994500),
    m = n(954571),
    A = n(405269),
    p = n(661191),
    f = n(652215),
    h = n(381941),
    E = n(985018);

function x(e, t) {
    let [n, s] = l.useState(!1), x = l.useCallback(async () => {
        if (!n) {
            s(!0), (0, u.pX)(f.BVt.CHANNEL(f.ME, e.id));
            try {
                await o.A.sendStickers(e.id, ["749054660769218631"], "", {
                    location: h.Hx.SEND_WAVE
                })
            } catch (e) {
                e.ok || 429 !== e.status || (0, r.showToast)((0, r.createToast)(E.intl.string(E.t.Whhv4w), r.ToastType.FAILURE))
            }
            m.default.track(f.HAw.WAVE_CTA_CLICKED, {
                source: "DM Channel"
            }), s(!1)
        }
    }, [e.id, n]), N = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot), g = N ? e.getRecipientId() : null, T = (0, i.bG)([d.A], () => null != g && d.A.isFriend(g)), v = (0, i.bG)([d.A], () => null != g && d.A.isIgnored(g)), S = p.default.extractTimestamp(e.id), C = (0, A.v0)(a()(), a()(S), 18144e5), _ = (0, c.l)(e.id);
    return {
        waveShouldShow: N && T && !v && null == t && C && null == _,
        wavePressed: x
    }
}