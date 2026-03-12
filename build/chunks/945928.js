/** chunk id: 945928 params = (module,exports,require) **/
n.d(t, {
    Q: () => f
});
var i = n(64700),
    s = n(311907),
    l = n(827343),
    r = n(793574),
    a = n(419954),
    o = n(933297),
    d = n(347481),
    c = n(430452),
    u = n(780964),
    _ = n(77735),
    m = n(791460),
    g = n(53386),
    A = n(585175),
    h = n(338145),
    x = n(299752),
    p = n(180491),
    T = n(903427),
    E = n(509381),
    C = n(985018);
let S = (0, a.Qx)(u.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => C.intl.string(C.t.LM3U3k),
        usePredicate: function() {
            let {
                enabledInputProfiles: e
            } = (0, _._)({
                location: "SettingsRendererConfig"
            });
            return e.length > 0
        },
        useSearchTerms: () => [C.intl.string(C.t.nuFtHH), C.intl.string(C.t.VZPR0R), C.intl.string(C.t.cjPbpT)],
        useValue: function() {
            return (0, s.bG)([c.Ay], () => c.Ay.getActiveInputProfile() ?? E.m.CUSTOM)
        },
        setValue: function(e) {
            let t = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
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
                name: C.intl.string(C.t.cjPbpT),
                desc: C.intl.string(C.t.CzhvnE)
            }, {
                value: E.m.STUDIO,
                name: C.intl.string(C.t.VZPR0R),
                desc: C.intl.string(C.t.ZaJksS)
            }, {
                value: E.m.CUSTOM,
                name: C.intl.string(C.t["N/PQjv"]),
                desc: C.intl.string(C.t.SnBmuY)
            }].filter(t => {
                let {
                    value: n
                } = t;
                return e.includes(n)
            })
        }
    }),
    f = (0, a.zZ)(u.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function() {
            let e = (0, s.bG)([d.A, c.Ay], () => {
                let e = c.Ay.getInputDeviceId();
                return (d.A.hasEchoCancellation(e) || d.A.hasNoiseSuppression(e) || d.A.hasAutomaticGainControl(e)) && c.Ay.isInputProfileCustom()
            });
            return i.useMemo(() => {
                if (e) return {
                    type: o.lT.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => C.intl.string(C.t["/Whuzi"])
                }
            }, [e])
        },
        buildLayout: () => [S, A.O, h.w, g.h, T.K, x.C, p.m, m.U]
    })