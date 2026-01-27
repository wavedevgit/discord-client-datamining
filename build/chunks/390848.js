/** Chunk was on web.js **/
/** chunk id: 390848, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    I: () => a
});
var r = n(64700),
    i = n(607272);

function a(e) {
    let {
        userId: t,
        applicationId: n,
        isGameRelationship: a,
        location: o,
        onConfirm: s,
        onCancel: l
    } = e, c = r.useCallback(() => {
        i.A.cancelFriendRequest({
            userId: t,
            applicationId: a ? n : null,
            location: o
        })
    }, [n, a, o, t]);
    return {
        acceptFriendRequest: r.useCallback(() => {
            i.A.maybeConfirmFriendRequestAccept({
                userId: t,
                applicationId: a ? n : null,
                location: o,
                onConfirm: s,
                onCancel: l
            })
        }, [n, a, o, l, s, t]),
        cancelFriendRequest: c
    }
}