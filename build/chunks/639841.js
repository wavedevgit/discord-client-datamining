/** chunk id: 639841 params = (module,exports,require) **/
var i = n(311907),
    a = n(73153),
    r = n(49463),
    l = n(217222),
    s = n(424728);

function o() {
    s.l.trigger()
}
class d extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(a.h, {
            CONNECTION_OPEN: o
        }, a.A.Early)
    }
    initialize() {
        this.waitFor(r.A, l.A)
    }
}
new d