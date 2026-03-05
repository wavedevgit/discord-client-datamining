/** chunk id: 989299 params = (module,exports,require) **/
n.d(t, {
    I: () => A,
    O: () => d
});
var a = n(562465),
    l = n(397927),
    i = n(73153),
    s = n(157559),
    r = n(198982),
    c = n(218727),
    o = n(652215),
    u = n(985018);
async function A() {
    if (c.A.shouldFetch) {
        i.h.dispatch({
            type: "RECENT_AVATARS_FETCH_START"
        });
        try {
            let e = await a.Bo.get({
                url: o.Rsh.RECENT_AVATARS,
                rejectWithError: !0
            });
            i.h.dispatch({
                type: "RECENT_AVATARS_FETCH_SUCCESS",
                avatars: e.body.avatars.map(e => {
                    let {
                        storage_hash: t,
                        ...n
                    } = e;
                    return {
                        ...n,
                        storageHash: t
                    }
                })
            })
        } catch (e) {
            i.h.dispatch({
                type: "RECENT_AVATARS_FETCH_FAILURE",
                error: new r.LG(e)
            })
        }
    }
}
async function d(e) {
    try {
        await a.Bo.del({
            url: o.Rsh.RECENT_AVATARS_DELETE(e),
            rejectWithError: !0
        }), await i.h.dispatch({
            type: "RECENT_AVATAR_DELETE",
            avatarId: e
        }), l.ORC.announce(u.intl.string(u.t.YJPieI))
    } catch (e) {
        s.A.show({
            title: u.intl.string(u.t.iufib1),
            body: u.intl.string(u.t["/ZNT+0"])
        })
    }
}