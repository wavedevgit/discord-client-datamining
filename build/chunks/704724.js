/** chunk id: 704724 params = (module,exports,require) **/
A.d(t, {
    J6: () => n,
    Jz: () => R,
    ky: () => I,
    qY: () => S
});
var E = A(873298),
    e = A(632119),
    C = A(444802),
    T = A(93857);
let I = _ => null != _ && _ !== E.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    S = (_, t) => {
        let A = (_ => {
            let {
                goreContentNonFriendDm: t,
                goreContentFriendDm: A
            } = T.oQ.getControlledSetting(_) ?? {};
            return {
                goreContentNonFriendDm: I(t) ? t : (0, C.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: I(A) ? A : (0, C.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: E.TO.BLUR
            }
        })(_);
        T.oQ.updateControlledSetting(_, {
            ...A,
            ...t
        })
    },
    n = _ => {
        let {
            teenId: t,
            setting: A,
            isFriend: E = !1
        } = _;
        if (I(A)) return A;
        let C = T.sM.getControlledSetting(t);
        return E ? e.Bb[C] : e.fu[C]
    },
    R = (_, t) => {
        let A, e = (A = T.p7.getControlledSetting(_), {
            explicitContentNonFriendDm: n({
                teenId: _,
                setting: A?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: n({
                teenId: _,
                setting: A?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: E.TO.BLUR
        });
        T.p7.updateControlledSetting(_, {
            ...e,
            ...t
        })
    }