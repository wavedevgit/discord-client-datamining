/** Chunk was on web.js **/
/** chunk id: 62504, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => c
});
var r = n(64700),
    i = n(554146),
    a = n(771781),
    o = n(826673),
    s = n(367727),
    l = n(49999);

function c() {
    let e = (0, o.JZ)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE);
    return r.useEffect(() => {
        if (!e) return (0, s.Vh)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE), () => {
            (0, a.pd)({
                content: i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE
            }, !1)
        }
    }, [e]), {
        shouldShowNewBadge: !e,
        markNewBadgeAsDismissed: r.useCallback(() => {
            (0, o.Dr)(i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, {
                dismissAction: l.i.TAKE_ACTION
            })
        }, [])
    }
}