/** chunk id: 313869 params = (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(321073);
var s = n(143236),
    i = n(723702),
    l = n(837921),
    o = n(350535),
    r = n(650583);
let a = [],
    d = (e, t, n) => {
        let s = +!(0, i.isWindows)();
        (e !== r.zY.MOUSE_BUTTON || n !== s) && a.forEach(s => s._handleEvent(e, t, n))
    };
class h extends s.EventEmitter {
    combo = [];
    constructor() {
        super(), a.push(this), 1 === a.length && l.Ay.setOnInputEventCallback(d)
    }
    destroy() {
        this.removeAllListeners(), 0 === (a = a.filter(e => e !== this)).length && l.Ay.setOnInputEventCallback(null)
    }
    toString() {
        return (0, o.dI)(this.combo)
    }
    _handleEvent(e, t, n) {
        0 === t ? this.combo = this.combo.filter(t => {
            let [s, i] = t;
            return s !== e || i !== n
        }) : (this.combo.push([e, n, (0, o._$)()]), this.emit("change", this))
    }
}