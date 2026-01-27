/** Chunk was on web.js **/
/** chunk id: 274294, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(562465),
    i = n(582754),
    a = n(157559),
    o = n(198982),
    s = n(652215),
    l = n(985018);

function c(e) {
    let t = new o.LG(e).getAnyErrorMessage();
    a.A.show({
        title: l.intl.string(l.t["328j/I"]),
        body: null != t ? t : l.intl.string(l.t.fEptJP)
    })
}

function u(e) {
    let {
        userId: t,
        applicationId: n,
        onSuccess: i,
        type: a
    } = e;
    return r.Bo.put({
        url: s.Rsh.USER_GAME_RELATIONSHIP(t, n),
        body: {
            type: a
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        i()
    }).catch(e => (c(e), Promise.reject(e)))
}
async function d(e) {
    let {
        userId: t,
        applicationId: n,
        onSuccess: i
    } = e;
    try {
        await r.Bo.del({
            url: s.Rsh.USER_GAME_RELATIONSHIP(t, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }), i()
    } catch (e) {
        c(e)
    }
}
let f = {
    removeGameFriend: async function(e) {
        let {
            userId: t,
            applicationId: n
        } = e;
        await d({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                i.OR.announce(l.intl.string(l.t.zRf8cO))
            }
        })
    },
    acceptGameFriendRequest: function(e) {
        let {
            userId: t,
            applicationId: n
        } = e;
        return u({
            userId: t,
            applicationId: n,
            type: s.eA$.FRIEND,
            onSuccess: () => {
                i.OR.announce(l.intl.string(l.t.taJiuc))
            }
        })
    },
    cancelGameFriendRequest: async function(e) {
        let {
            userId: t,
            applicationId: n
        } = e;
        await d({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                i.OR.announce(l.intl.string(l.t.XMf21q))
            }
        })
    }
}