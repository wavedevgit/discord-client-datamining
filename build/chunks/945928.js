/** chunk id: 945928, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Q: () => m
});
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(793574),
    a = i(419954),
    u = i(933297),
    o = i(347481),
    d = i(430452),
    T = i(780964),
    c = i(77735),
    A = i(791460),
    S = i(53386),
    _ = i(585175),
    E = i(338145),
    g = i(77371),
    I = i(772797),
    O = i(180491),
    C = i(903427),
    N = i(509381),
    b = i(985018);
let p = (0, a.Qx)(T.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => b.intl.string(b.t.LM3U3k),
        usePredicate: function() {
            let {
                enabledInputProfiles: e
            } = (0, c._)({
                location: "SettingsRendererConfig"
            });
            return e.length > 0
        },
        useSearchTerms: () => [b.intl.string(b.t.nuFtHH), b.intl.string(b.t.VZPR0R), b.intl.string(b.t.cjPbpT)],
        useValue: function() {
            return (0, l.bG)([d.A], () => {
                var e;
                return null != (e = d.A.getActiveInputProfile()) ? e : N.my.CUSTOM
            })
        },
        setValue: function(e) {
            let t = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
            s.A.setActiveInputProfile(e, {
                analyticsLocations: t
            })
        },
        useOptions: function() {
            let {
                enabledInputProfiles: e
            } = (0, c.d)({
                location: "InputProfileCategory"
            });
            return [{
                value: N.my.VOICE_ISOLATION,
                name: b.intl.string(b.t.cjPbpT),
                desc: b.intl.string(b.t.CzhvnE)
            }, {
                value: N.my.STUDIO,
                name: b.intl.string(b.t.VZPR0R),
                desc: b.intl.string(b.t.ZaJksS)
            }, {
                value: N.my.CUSTOM,
                name: b.intl.string(b.t["N/PQjv"]),
                desc: b.intl.string(b.t.SnBmuY)
            }].filter(t => {
                let {
                    value: i
                } = t;
                return e.includes(i)
            })
        }
    }),
    m = (0, a.zZ)(T.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function() {
            let e = (0, l.bG)([o.A, d.A], () => {
                let e = d.A.getInputDeviceId();
                return (o.A.hasEchoCancellation(e) || o.A.hasNoiseSuppression(e) || o.A.hasAutomaticGainControl(e)) && d.A.isInputProfileCustom()
            });
            return n.useMemo(() => {
                if (e) return {
                    type: u.W.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => b.intl.string(b.t["/Whuzi"])
                }
            }, [e])
        },
        buildLayout: () => [p, _.O, E.w, S.h, C.K, g.C, O.m, I.A, A.U]
    })