/** chunk id: 509302, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(64700),
    i = n(922590),
    a = n(607272),
    o = n(433880),
    s = n(985018);

function l(e) {
    let {
        user: t
    } = e, n = (0, i.fi)(t.id), l = r.useCallback(e => {
        a.A.acceptFriendRequest({
            userId: t.id,
            applicationId: e.id,
            location: "Context Menu"
        })
    }, [t.id]);
    return (0, o.A)({
        user: t,
        gameRelationships: n,
        menuItemId: "add-game-friend",
        label: s.intl.string(s.t.X76oLM),
        onClick: l
    })
}