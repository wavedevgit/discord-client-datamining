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
    _ = n(77735),
    m = n(791460),
    g = n(53386),
    A = n(585175),
    x = n(338145),
    h = n(299752),
    p = n(180491),
    T = n(903427),
    E = n(509381),
    S = n(985018);
let f = (0, r.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => S.intl.string(S.t.LM3U3k),
        usePredicate: function() {
            let {
                enabledInputProfiles: e
            } = (0, _._)({
                location: "SettingsRendererConfig"
            });
            return e.length > 0
        },
        useSearchTerms: () => [S.intl.string(S.t.nuFtHH), S.intl.string(S.t.VZPR0R), S.intl.string(S.t.cjPbpT)],
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
            } = (0, _.d)({
                location: "InputProfileCategory"
            });
            return [{
                value: E.m.VOICE_ISOLATION,
                name: S.intl.string(S.t.cjPbpT),
                desc: S.intl.string(S.t.CzhvnE)
            }, {
                value: E.m.STUDIO,
                name: S.intl.string(S.t.VZPR0R),
                desc: S.intl.string(S.t.ZaJksS)
            }, {
                value: E.m.CUSTOM,
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
                    useText: () => S.intl.string(S.t["/Whuzi"])
                }
            }, [e])
        },
        buildLayout: () => [f, A.O, x.w, g.h, T.K, h.C, p.m, m.U]
    })