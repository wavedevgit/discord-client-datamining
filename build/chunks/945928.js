/** chunk id: 945928 params = (module,exports,require) **/
n.d(t, {
    Q: () => b
});
var i = n(64700),
    s = n(311907),
    l = n(827343),
    a = n(793574),
    r = n(419954),
    o = n(933297),
    d = n(347481),
    c = n(430452),
    u = n(780964),
    m = n(77735),
    g = n(791460),
    _ = n(53386),
    A = n(585175),
    x = n(338145),
    h = n(299752),
    p = n(180491),
    T = n(903427),
    f = n(509381),
    E = n(985018);
let S = (0, r.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => E.intl.string(E.t.LM3U3k),
        usePredicate: function() {
            let {
                enabledInputProfiles: e
            } = (0, m._)({
                location: "SettingsRendererConfig"
            });
            return e.length > 0
        },
        useSearchTerms: () => [E.intl.string(E.t.nuFtHH), E.intl.string(E.t.VZPR0R), E.intl.string(E.t.cjPbpT)],
        useValue: function() {
            return (0, s.bG)([c.Ay], () => c.Ay.getActiveInputProfile() ?? f.m.CUSTOM)
        },
        setValue: function(e) {
            let t = [a.A.USER_SETTINGS_VOICE_AND_VIDEO];
            l.A.setActiveInputProfile(e, {
                analyticsLocations: t
            })
        },
        useOptions: function() {
            let {
                enabledInputProfiles: e
            } = (0, m.d)({
                location: "InputProfileCategory"
            });
            return [{
                value: f.m.VOICE_ISOLATION,
                name: E.intl.string(E.t.cjPbpT),
                desc: E.intl.string(E.t.CzhvnE)
            }, {
                value: f.m.STUDIO,
                name: E.intl.string(E.t.VZPR0R),
                desc: E.intl.string(E.t.ZaJksS)
            }, {
                value: f.m.CUSTOM,
                name: E.intl.string(E.t["N/PQjv"]),
                desc: E.intl.string(E.t.SnBmuY)
            }].filter(t => {
                let {
                    value: n
                } = t;
                return e.includes(n)
            })
        }
    }),
    b = (0, r.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function() {
            let e = (0, s.bG)([d.A, c.Ay], () => {
                let e = c.Ay.getInputDeviceId();
                return (d.A.hasEchoCancellation(e) || d.A.hasNoiseSuppression(e) || d.A.hasAutomaticGainControl(e)) && c.Ay.isInputProfileCustom()
            });
            return i.useMemo(() => {
                if (e) return {
                    type: o.lT.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => E.intl.string(E.t["/Whuzi"])
                }
            }, [e])
        },
        buildLayout: () => [S, A.O, x.w, _.h, T.K, h.C, p.m, g.U]
    })