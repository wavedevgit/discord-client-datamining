/** chunk id: 117178 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(695497),
    o = n.n(l),
    r = n(313869),
    a = n(451802),
    d = n(723702),
    u = n(837921),
    h = n(650583);
let c = d.isPlatformEmbedded && null != u.Ay.getDiscordUtils().inputCaptureRegisterElement;
class p extends s.PureComponent {
    _input;
    gs;
    _mounted = !1;
    constructor(e) {
        super(e);
        const {
            defaultValue: t
        } = e;
        this.state = {
            codes: t,
            mode: a.E.DEFAULT
        }
    }
    componentDidMount() {
        this._mounted = !0
    }
    componentWillUnmount() {
        this._mounted = !1, this.cleanUp()
    }
    componentDidUpdate(e) {
        this.props.defaultValue !== e.defaultValue && this.setState({
            codes: this.props.defaultValue
        })
    }
    cleanUp() {
        d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
    }
    handleComboChange(e) {
        let {
            mode: t
        } = this.state, {
            onChange: n
        } = this.props;
        t === a.E.RECORDING && (null != n && n(e), this.setState({
            codes: e
        }))
    }
    recordStart = () => {
        d.isPlatformEmbedded && !c && (this.gs = new r.A, this.gs.on("change", this.handleGSChange)), this.setState({
            mode: a.E.RECORDING
        })
    };
    recordEnd = () => {
        this.cleanUp(), this.setState({
            mode: a.E.DEFAULT
        })
    };
    toggleRecordMode = () => {
        this.state.mode === a.E.DEFAULT ? this.recordStart() : this.recordEnd()
    };
    handleComboKeys = (e, t, n) => {
        if (n.preventDefault(), "keydown" === n.type) {
            let e = t.map(e => [h.zY.KEYBOARD_KEY, o()(e), h.g$.BROWSER]),
                {
                    keyCode: i
                } = n;
            null == e.find(e => {
                let [, t] = e;
                return i === t
            }) && e.push([h.zY.KEYBOARD_KEY, i, h.g$.BROWSER]), this.handleComboChange(e)
        }
    };
    handleGSChange = e => {
        if (!1 === this._mounted) return;
        let t = [...e.combo];
        this.handleComboChange(t)
    };
    handleNativeChange = e => {
        e.length > 0 && this.handleComboChange(e), this.recordEnd()
    };
    render() {
        let e, t, {
                codes: n,
                mode: s
            } = this.state,
            {
                disabled: l
            } = this.props;
        return c ? (t = u.Ay.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : d.isPlatformEmbedded || (e = this.handleComboKeys), (0, i.jsx)(a.A, {
            disabled: l,
            value: n,
            mode: s,
            onClick: this.toggleRecordMode,
            onChange: e,
            registerNativeRecorder: t,
            disableOnClickWhileRecording: c
        })
    }
}
let g = p