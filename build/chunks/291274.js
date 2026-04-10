/** chunk id: 291274 params = (module,exports,require) **/
n(321073);
var i = n(311907),
    l = n(73153),
    r = n(253932),
    a = n(461213),
    s = n(927813),
    o = n(652215);
let d = [],
    c = !1;

function u() {
    return d.length >= 4 && d.some(e => e < Date.now() - 3 * s.A.Millis.DAY)
}
class A extends i.Ay.PersistedStore {
    static displayName = "HabitualDNDStore";
    static persistKey = "habitualDND";
    initialize(e) {
        this.waitFor(a.A), null != e && Array.isArray(e.sessionStartsWithDND) && (d = e.sessionStartsWithDND)
    }
    showNagBar() {
        return c
    }
    getState() {
        return {
            sessionStartsWithDND: d
        }
    }
    getTemp() {
        return {
            x: r.CY.getSetting()
        }
    }
}
new A(l.h, {
    POST_CONNECTION_OPEN: function() {
        a.A.getStatus() === o.clD.DND && "0" === r.CY.getSetting() ? (d.push(Date.now()), d = d.filter(e => e > Date.now() - 5 * s.A.Millis.DAY), u() && setTimeout(() => {
            l.h.dispatch({
                type: "HABITUAL_DND_CLEAR"
            })
        }, 15 * s.A.Millis.SECOND)) : d = []
    },
    HABITUAL_DND_CLEAR: function() {
        c = !!u(), d = []
    }
})