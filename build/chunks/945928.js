/** chunk id: 945928 params = (module,exports,require) **/
n.d(t, {
    Q: () => C
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
    _ = n(791460),
    g = n(53386),
    A = n(585175),
    x = n(338145),
    p = n(299752),
    h = n(180491),
    T = n(903427),
    E = n(509381),
    f = n(985018);
let S = (0, r.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => f.intl.string(f.t.LM3U3k),
        usePredicate: function() {
            let {
                enabledInputProfiles: e
            } = (0, m._)({
                location: "SettingsRendererConfig"
            });
            return e.length > 0
        },
        useSearchTerms: () => [f.intl.string(f.t.nuFtHH), f.intl.string(f.t.VZPR0R), f.intl.string(f.t.cjPbpT)],
        useValue: function() {
            return (0, s.bG)([c.Ay], () => c.Ay.getActiveInputProfile() ?? E.m.CUSTOM)
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
                value: E.m.VOICE_ISOLATION,
                name: f.intl.string(f.t.cjPbpT),
                desc: f.intl.string(f.t.CzhvnE)
            }, {
                value: E.m.STUDIO,
                name: f.intl.string(f.t.VZPR0R),
                desc: f.intl.string(f.t.ZaJksS)
            }, {
                value: E.m.CUSTOM,
                name: f.intl.string(f.t["N/PQjv"]),
                desc: f.intl.string(f.t.SnBmuY)
            }].filter(t => {
                let {
                    value: n
                } = t;
                return e.includes(n)
            })
        }
    }),
    C = (0, r.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function() {
            let e = (0, s.bG)([d.A, c.Ay], () => {
                let e = c.Ay.getInputDeviceId();
                return (d.A.hasEchoCancellation(e) || d.A.hasNoiseSuppression(e) || d.A.hasAutomaticGainControl(e)) && c.Ay.isInputProfileCustom()
            });
            return i.useMemo(() => {
                if (e) return {
                    type: o.lT.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => f.intl.string(f.t["/Whuzi"])
                }
            }, [e])
        },
        buildLayout: () => [S, A.O, x.w, g.h, T.K, p.C, h.m, _.U]
    })