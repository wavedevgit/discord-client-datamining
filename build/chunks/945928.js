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
    _ = n(791460),
    g = n(53386),
    A = n(585175),
    x = n(338145),
    h = n(299752),
    p = n(180491),
    f = n(903427),
    T = n(509381),
    S = n(985018);
let E = (0, r.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => S.intl.string(S.t.LM3U3k),
        usePredicate: function() {
            let {
                enabledInputProfiles: e
            } = (0, m._)({
                location: "SettingsRendererConfig"
            });
            return e.length > 0
        },
        useSearchTerms: () => [S.intl.string(S.t.nuFtHH), S.intl.string(S.t.VZPR0R), S.intl.string(S.t.cjPbpT)],
        useValue: function() {
            return (0, s.bG)([c.Ay], () => c.Ay.getActiveInputProfile() ?? T.m.CUSTOM)
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
                value: T.m.VOICE_ISOLATION,
                name: S.intl.string(S.t.cjPbpT),
                desc: S.intl.string(S.t.CzhvnE)
            }, {
                value: T.m.STUDIO,
                name: S.intl.string(S.t.VZPR0R),
                desc: S.intl.string(S.t.ZaJksS)
            }, {
                value: T.m.CUSTOM,
                name: S.intl.string(S.t["N/PQjv"]),
                desc: S.intl.string(S.t.SnBmuY)
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
                    useText: () => S.intl.string(S.t["/Whuzi"])
                }
            }, [e])
        },
        buildLayout: () => [E, A.O, x.w, g.h, f.K, h.C, p.m, _.U]
    })