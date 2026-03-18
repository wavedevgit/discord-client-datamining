/** chunk id: 704724 params = (module,exports,require) **/
e.d(_, {
    J6: () => C,
    Jz: () => R,
    ky: () => S,
    qY: () => n
});
var E = e(873298),
    A = e(632119),
    I = e(444802),
    T = e(93857);
let S = t => null != t && t !== E.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    n = (t, _) => {
        let e = (t => {
            let {
                goreContentNonFriendDm: _,
                goreContentFriendDm: e
            } = T.oQ.getControlledSetting(t) ?? {};
            return {
                goreContentNonFriendDm: S(_) ? _ : (0, I.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: S(e) ? e : (0, I.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: E.TO.BLUR
            }
        })(t);
        T.oQ.updateControlledSetting(t, {
            ...e,
            ..._
        })
    },
    C = t => {
        let {
            teenId: _,
            setting: e,
            isFriend: E = !1
        } = t;
        if (S(e)) return e;
        let I = T.sM.getControlledSetting(_);
        return E ? A.Bb[I] : A.fu[I]
    },
    R = (t, _) => {
        let e, A = (e = T.p7.getControlledSetting(t), {
            explicitContentNonFriendDm: C({
                teenId: t,
                setting: e?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: C({
                teenId: t,
                setting: e?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: E.TO.BLUR
        });
        T.p7.updateControlledSetting(t, {
            ...A,
            ..._
        })
    }