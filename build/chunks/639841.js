/** chunk id: 639841 params = (module,exports,require) **/
var i = n(311907),
    r = n(73153),
    l = n(49463),
    a = n(217222),
    s = n(424728);

function o() {
    s.l.trigger()
}
class d extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(r.h, {
            CONNECTION_OPEN: o
        }, r.A.Early)
    }
    initialize() {
        this.waitFor(l.A, a.A)
    }
}
new d