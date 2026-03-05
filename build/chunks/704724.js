/** chunk id: 704724 params = (module,exports,require) **/
I.d(_, {
    J6: () => e,
    Jz: () => R,
    ky: () => O,
    qY: () => t
});
var S = I(873298),
    A = I(632119),
    T = I(444802),
    C = I(93857);
let O = E => null != E && E !== S.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    t = (E, _) => {
        let I = (E => {
            let {
                goreContentNonFriendDm: _,
                goreContentFriendDm: I
            } = C.oQ.getControlledSetting(E) ?? {};
            return {
                goreContentNonFriendDm: O(_) ? _ : (0, T.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: O(I) ? I : (0, T.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: S.TO.BLUR
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
            isFriend: S = !1
        } = E;
        if (O(I)) return I;
        let T = C.sM.getControlledSetting(_);
        return S ? A.Bb[T] : A.fu[T]
    },
    R = (E, _) => {
        let I, A = (I = C.p7.getControlledSetting(E), {
            explicitContentNonFriendDm: e({
                teenId: E,
                setting: I?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: e({
                teenId: E,
                setting: I?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: S.TO.BLUR
        });
        C.p7.updateControlledSetting(E, {
            ...A,
            ..._
        })
    }