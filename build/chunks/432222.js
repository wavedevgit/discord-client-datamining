/** chunk id: 432222, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => E
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
    x = s(661191),
    h = s(652215),
    p = s(381941),
    f = s(985018);

function E(e, t) {
    let [s, n] = l.useState(!1), E = l.useCallback(async () => {
        if (!s) {
            n(!0), (0, u.pX)(h.BVt.CHANNEL(h.ME, e.id));
            try {
                await o.A.sendStickers(e.id, ["749054660769218631"], "", {
                    location: p.Hx.SEND_WAVE
                })
            } catch (e) {
                e.ok || 429 !== e.status || (0, r.showToast)((0, r.createToast)(f.intl.string(f.t.Whhv4w), r.ToastType.FAILURE))
            }
            m.default.track(h.HAw.WAVE_CTA_CLICKED, {
                source: "DM Channel"
            }), n(!1)
        }
    }, [e.id, s]), N = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot), S = N ? e.getRecipientId() : null, T = (0, i.bG)([d.A], () => null != S && d.A.isFriend(S)), g = (0, i.bG)([d.A], () => null != S && d.A.isIgnored(S)), v = x.default.extractTimestamp(e.id), C = (0, A.v0)(a()(), a()(v), 18144e5), _ = (0, c.l)(e.id);
    return {
        waveShouldShow: N && T && !g && null == t && C && null == _,
        wavePressed: E
    }
}