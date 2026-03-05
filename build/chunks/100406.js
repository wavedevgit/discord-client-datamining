/** chunk id: 100406 params = (module,exports,require) **/
n.d(t, {
    CA: () => c,
    NI: () => u,
    cR: () => d
});
var i = n(110259),
    s = n(933681),
    l = n(73153),
    a = n(499785),
    r = n(431144),
    o = n(652215);
async function d() {
    try {
        let e = await a.A.get({
            url: o.Rsh.EMAIL_SETTINGS,
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: e => {
                    let t = e?.body?.initialized;
                    return (0, s.e0)({
                        initialized: t
                    })
                }
            },
            rejectWithError: !0
        });
        return l.h.dispatch({
            type: "EMAIL_SETTINGS_FETCH_SUCCESS",
            settings: e.body
        }), e.body
    } catch {
        l.h.dispatch({
            type: "EMAIL_SETTINGS_FETCH_FAILURE"
        })
    }
}
async function c(e, t) {
    l.h.dispatch({
        type: "EMAIL_SETTINGS_UPDATE",
        updates: {
            [e]: t
        }
    });
    try {
        let n = await a.A.patch({
            url: o.Rsh.EMAIL_SETTINGS,
            body: {
                settings: {
                    categories: {
                        [e]: t
                    }
                }
            },
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: e,
                    value: t
                }
            },
            rejectWithError: !0
        });
        l.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
            settings: n.body
        })
    } catch (e) {
        l.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_FAILURE"
        })
    }
}
async function u() {
    let e = r.Zk.reduce((e, t) => ({
        ...e,
        [t]: !1
    }), {});
    l.h.dispatch({
        type: "EMAIL_SETTINGS_UPDATE",
        updates: e
    });
    try {
        let t = await a.A.patch({
            url: o.Rsh.EMAIL_SETTINGS,
            body: {
                settings: {
                    categories: e
                }
            },
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: {
                    category: "marketing",
                    value: !1
                }
            },
            rejectWithError: !0
        });
        l.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
            settings: t.body
        })
    } catch (e) {
        l.h.dispatch({
            type: "EMAIL_SETTINGS_UPDATE_FAILURE"
        })
    }
}