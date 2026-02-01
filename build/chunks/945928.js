/** chunk id: 945928, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Q: () => L
});
var n = i(64700),
    l = i(311907),
    s = i(827343),
    r = i(793574),
    u = i(419954),
    a = i(933297),
    o = i(347481),
    d = i(430452),
    T = i(780964),
    A = i(77735),
    S = i(791460),
    c = i(53386),
    E = i(585175),
    g = i(338145),
    _ = i(77371),
    I = i(772797),
    O = i(180491),
    N = i(903427),
    C = i(509381),
    b = i(985018);
let p = (0, u.Qx)(T.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => b.intl.string(b.t.LM3U3k),
        usePredicate: function() {
            let {
                enabledInputProfiles: t
            } = (0, A._)({
                location: "SettingsRendererConfig"
            });
            return t.length > 0
        },
        useSearchTerms: () => [b.intl.string(b.t.nuFtHH), b.intl.string(b.t.VZPR0R), b.intl.string(b.t.cjPbpT)],
        useValue: function() {
            return (0, l.bG)([d.A], () => {
                var t;
                return null != (t = d.A.getActiveInputProfile()) ? t : C.my.CUSTOM
            })
        },
        setValue: function(t) {
            let e = [r.A.USER_SETTINGS_VOICE_AND_VIDEO];
            s.A.setActiveInputProfile(t, {
                analyticsLocations: e
            })
        },
        useOptions: function() {
            let {
                enabledInputProfiles: t
            } = (0, A.d)({
                location: "InputProfileCategory"
            });
            return [{
                value: C.my.VOICE_ISOLATION,
                name: b.intl.string(b.t.cjPbpT),
                desc: b.intl.string(b.t.CzhvnE)
            }, {
                value: C.my.STUDIO,
                name: b.intl.string(b.t.VZPR0R),
                desc: b.intl.string(b.t.ZaJksS)
            }, {
                value: C.my.CUSTOM,
                name: b.intl.string(b.t["N/PQjv"]),
                desc: b.intl.string(b.t.SnBmuY)
            }].filter(e => {
                let {
                    value: i
                } = e;
                return t.includes(i)
            })
        }
    }),
    L = (0, u.zZ)(T.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function() {
            let t = (0, l.bG)([o.A, d.A], () => {
                let t = d.A.getInputDeviceId();
                return (o.A.hasEchoCancellation(t) || o.A.hasNoiseSuppression(t) || o.A.hasAutomaticGainControl(t)) && d.A.isInputProfileCustom()
            });
            return n.useMemo(() => {
                if (t) return {
                    type: a.W.INLINE_NOTICE,
                    noticeType: "info",
                    useText: () => b.intl.string(b.t["/Whuzi"])
                }
            }, [t])
        },
        buildLayout: () => [p, E.O, g.w, c.h, N.K, _.C, O.m, I.A, S.U]
    })