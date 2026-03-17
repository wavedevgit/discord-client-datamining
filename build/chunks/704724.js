/** chunk id: 704724 params = (module,exports,require) **/
E.d(t, {
    J6: () => C,
    Jz: () => R,
    ky: () => T,
    qY: () => n
});
var e = E(873298),
    A = E(632119),
    I = E(444802),
    S = E(93857);
let T = _ => null != _ && _ !== e.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    n = (_, t) => {
        let E = (_ => {
            let {
                goreContentNonFriendDm: t,
                goreContentFriendDm: E
            } = S.oQ.getControlledSetting(_) ?? {};
            return {
                goreContentNonFriendDm: T(t) ? t : (0, I.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: T(E) ? E : (0, I.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: e.TO.BLUR
            }
        })(_);
        S.oQ.updateControlledSetting(_, {
            ...E,
            ...t
        })
    },
    C = _ => {
        let {
            teenId: t,
            setting: E,
            isFriend: e = !1
        } = _;
        if (T(E)) return E;
        let I = S.sM.getControlledSetting(t);
        return e ? A.Bb[I] : A.fu[I]
    },
    R = (_, t) => {
        let E, A = (E = S.p7.getControlledSetting(_), {
            explicitContentNonFriendDm: C({
                teenId: _,
                setting: E?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: C({
                teenId: _,
                setting: E?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: e.TO.BLUR
        });
        S.p7.updateControlledSetting(_, {
            ...A,
            ...t
        })
    }