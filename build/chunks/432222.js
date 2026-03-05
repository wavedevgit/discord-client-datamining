/** chunk id: 432222, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => f
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
    h = s(381941),
    E = s(985018);

function f(e, t) {
    let [s, n] = l.useState(!1), f = l.useCallback(async () => {
        if (!s) {
            n(!0), (0, u.pX)(x.BVt.CHANNEL(x.ME, e.id));
            try {
                await o.A.sendStickers(e.id, ["749054660769218631"], "", {
                    location: h.Hx.SEND_WAVE
                })
            } catch (e) {
                e.ok || 429 !== e.status || (0, r.showToast)((0, r.createToast)(E.intl.string(E.t.Whhv4w), r.ToastType.FAILURE))
            }
            m.default.track(x.HAw.WAVE_CTA_CLICKED, {
                source: "DM Channel"
            }), n(!1)
        }
    }, [e.id, s]), N = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot), S = N ? e.getRecipientId() : null, v = (0, i.bG)([d.A], () => null != S && d.A.isFriend(S)), T = (0, i.bG)([d.A], () => null != S && d.A.isIgnored(S)), g = p.default.extractTimestamp(e.id), _ = (0, A.v0)(a()(), a()(g), 18144e5), C = (0, c.l)(e.id);
    return {
        waveShouldShow: N && v && !T && null == t && _ && null == C,
        wavePressed: f
    }
}