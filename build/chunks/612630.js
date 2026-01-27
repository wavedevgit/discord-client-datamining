/** Chunk was on web.js **/
/** chunk id: 612630, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(65821);
var r = n(64700),
    i = n(311907),
    a = n(562465),
    o = n(73153),
    s = n(279263),
    l = n(652215);

function c(e) {
    let t = (0, i.bG)([s.A], () => s.A.getNote(e));
    return r.useEffect(() => {
        null == t && u(e)
    }, [t, e]), null != t ? t : {
        loading: !0,
        note: null
    }
}
async function u(e) {
    o.h.dispatch({
        type: "USER_NOTE_LOAD_START",
        userId: e
    });
    try {
        let {
            body: t
        } = await a.Bo.get({
            url: l.Rsh.NOTE(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        if (t.note_user_id !== e) throw Error("Invalid response from server");
        o.h.dispatch({
            type: "USER_NOTE_UPDATE",
            id: e,
            note: t.note
        })
    } catch (t) {
        o.h.dispatch({
            type: "USER_NOTE_UPDATE",
            id: e
        })
    }
}