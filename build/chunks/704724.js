/** chunk id: 704724 params = (module,exports,require) **/
e.d(_, {
    J6: () => C,
    Jz: () => R,
    ky: () => T,
    qY: () => n
});
var E = e(873298),
    A = e(632119),
    I = e(444802),
    S = e(93857);
let T = t => null != t && t !== E.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    n = (t, _) => {
        let e = (t => {
            let {
                goreContentNonFriendDm: _,
                goreContentFriendDm: e
            } = S.oQ.getControlledSetting(t) ?? {};
            return {
                goreContentNonFriendDm: T(_) ? _ : (0, I.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: T(e) ? e : (0, I.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: E.TO.BLUR
            }
        })(t);
        S.oQ.updateControlledSetting(t, {
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
        if (T(e)) return e;
        let I = S.sM.getControlledSetting(_);
        return E ? A.Bb[I] : A.fu[I]
    },
    R = (t, _) => {
        let e, A = (e = S.p7.getControlledSetting(t), {
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
        S.p7.updateControlledSetting(t, {
            ...A,
            ..._
        })
    }