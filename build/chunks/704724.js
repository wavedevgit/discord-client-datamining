/** chunk id: 704724 params = (module,exports,require) **/
A.d(_, {
    J6: () => O,
    Jz: () => R,
    ky: () => e,
    qY: () => C
});
var I = A(873298),
    T = A(632119),
    S = A(444802),
    t = A(93857);
let e = E => null != E && E !== I.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    C = (E, _) => {
        let A = (E => {
            let {
                goreContentNonFriendDm: _,
                goreContentFriendDm: A
            } = t.oQ.getControlledSetting(E) ?? {};
            return {
                goreContentNonFriendDm: e(_) ? _ : (0, S.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: e(A) ? A : (0, S.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: I.TO.BLUR
            }
        })(E);
        t.oQ.updateControlledSetting(E, {
            ...A,
            ..._
        })
    },
    O = E => {
        let {
            teenId: _,
            setting: A,
            isFriend: I = !1
        } = E;
        if (e(A)) return A;
        let S = t.sM.getControlledSetting(_);
        return I ? T.Bb[S] : T.fu[S]
    },
    R = (E, _) => {
        let A, T = (A = t.p7.getControlledSetting(E), {
            explicitContentNonFriendDm: O({
                teenId: E,
                setting: A?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: O({
                teenId: E,
                setting: A?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: I.TO.BLUR
        });
        t.p7.updateControlledSetting(E, {
            ...T,
            ..._
        })
    }