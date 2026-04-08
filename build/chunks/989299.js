/** chunk id: 989299 params = (module,exports,require) **/
a.d(t, {
    I: () => d,
    O: () => A
});
var n = a(562465),
    s = a(397927),
    r = a(73153),
    l = a(157559),
    i = a(198982),
    c = a(218727),
    u = a(652215),
    o = a(985018);
async function d() {
    if (c.A.shouldFetch) {
        r.h.dispatch({
            type: "RECENT_AVATARS_FETCH_START"
        });
        try {
            let e = await n.Bo.get({
                url: u.Rsh.RECENT_AVATARS,
                rejectWithError: !0
            });
            r.h.dispatch({
                type: "RECENT_AVATARS_FETCH_SUCCESS",
                avatars: e.body.avatars.map(e => {
                    let {
                        storage_hash: t,
                        ...a
                    } = e;
                    return {
                        ...a,
                        storageHash: t
                    }
                })
            })
        } catch (e) {
            r.h.dispatch({
                type: "RECENT_AVATARS_FETCH_FAILURE",
                error: new i.LG(e)
            })
        }
    }
}
async function A(e) {
    try {
        await n.Bo.del({
            url: u.Rsh.RECENT_AVATARS_DELETE(e),
            rejectWithError: !0
        }), await r.h.dispatch({
            type: "RECENT_AVATAR_DELETE",
            avatarId: e
        }), s.ORC.announce(o.intl.string(o.t.YJPieI))
    } catch (e) {
        l.A.show({
            title: o.intl.string(o.t.iufib1),
            body: o.intl.string(o.t["/ZNT+0"])
        })
    }
}