/** chunk id: 432222, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => h
});
var n = l(64700),
    s = l(989349),
    a = l.n(s),
    i = l(311907),
    r = l(397927),
    u = l(843472),
    o = l(976860),
    c = l(74114),
    d = l(994500),
    m = l(954571),
    A = l(405269),
    p = l(661191),
    x = l(652215),
    f = l(381941),
    E = l(985018);

function h(e, t) {
    let [l, s] = n.useState(!1), h = n.useCallback(async () => {
        if (!l) {
            s(!0), (0, o.pX)(x.BVt.CHANNEL(x.ME, e.id));
            try {
                await u.A.sendStickers(e.id, ["749054660769218631"], "", {
                    location: f.Hx.SEND_WAVE
                })
            } catch (e) {
                e.ok || 429 !== e.status || (0, r.showToast)((0, r.createToast)(E.intl.string(E.t.Whhv4w), r.ToastType.FAILURE))
            }
            m.default.track(x.HAw.WAVE_CTA_CLICKED, {
                source: "DM Channel"
            }), s(!1)
        }
    }, [e.id, l]), N = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot), S = N ? e.getRecipientId() : null, T = (0, i.bG)([d.A], () => null != S && d.A.isFriend(S)), C = (0, i.bG)([d.A], () => null != S && d.A.isIgnored(S)), v = p.default.extractTimestamp(e.id), g = (0, A.v0)(a()(), a()(v), 18144e5), _ = (0, c.l)(e.id);
    return {
        waveShouldShow: N && T && !C && null == t && g && null == _,
        wavePressed: h
    }
}