/** chunk id: 704724 params = (module,exports,require) **/
I.d(_, {
    J6: () => e,
    Jz: () => R,
    ky: () => t,
    qY: () => O
});
var A = I(873298),
    S = I(632119),
    T = I(444802),
    C = I(93857);
let t = E => null != E && E !== A.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    O = (E, _) => {
        let I = (E => {
            let {
                goreContentNonFriendDm: _,
                goreContentFriendDm: I
            } = C.oQ.getControlledSetting(E) ?? {};
            return {
                goreContentNonFriendDm: t(_) ? _ : (0, T.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: t(I) ? I : (0, T.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: A.TO.BLUR
            }
        })(E);
        C.oQ.updateControlledSetting(E, {
            ...I,
            ..._
        })
    },
    e = E => {
        let {
            teenId: _,
            setting: I,
            isFriend: A = !1
        } = E;
        if (t(I)) return I;
        let T = C.sM.getControlledSetting(_);
        return A ? S.Bb[T] : S.fu[T]
    },
    R = (E, _) => {
        let I, S = (I = C.p7.getControlledSetting(E), {
            explicitContentNonFriendDm: e({
                teenId: E,
                setting: I?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: e({
                teenId: E,
                setting: I?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: A.TO.BLUR
        });
        C.p7.updateControlledSetting(E, {
            ...S,
            ..._
        })
    }