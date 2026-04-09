/** chunk id: 538665 params = (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(321073);
var i = n(143236),
    a = n(933958),
    r = n(969151),
    l = n(954571),
    s = n(203982),
    o = n(927813),
    d = n(636401),
    c = n(440454),
    u = n(629471),
    A = n(613057),
    _ = n(652215);
let h = 10 * o.A.Millis.SECOND,
    m = new Map,
    g = new Set,
    p = (e, t, n) => {
        n([c.A.CLOSE, t], e)
    };
class E extends i.EventEmitter {
    validateSocketClient;
    logger;
    createPostMessageProxySocket;
    onFrameHandled;
    handshakeFailureTimeoutId;
    constructor(e, t, n, i) {
        super(), s._.subscribe(_.jej.IFRAME_MOUNT, this.handleIFrameMount), s._.subscribe(_.jej.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = n, this.onFrameHandled = i
    }
    disconnectSocket = (() => {
        var e = this;
        return function(t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.emit("disconnect", t, i ? void 0 : n), t.close(n.code, n.message ?? "Unknown");
            let [a] = Array.from(m.entries()).find(e => {
                let [n, i] = e;
                return i === t
            }) ?? [null, null];
            null != a && m.delete(a)
        }
    })();
    handleIFrameMount = e => {
        let {
            id: t
        } = e;
        g.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
            Array.from(a.Ay.getSelfEmbeddedActivities().entries()).forEach(e => {
                let [t, n] = e;
                l.default.track(_.HAw.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                    application_id: t,
                    channel_id: (0, r.H)(n.location),
                    guild_id: (0, r.D)(n.location),
                    timeout_ms: h
                })
            })
        }, h)
    };
    handleIFrameUnmount = e => {
        let {
            id: t
        } = e;
        g.delete(t);
        let [n, i] = Array.from(m.entries()).find(e => {
            let [n, i] = e;
            return i.frameId === t
        }) ?? [null, null];
        null != i && null != n && (this.disconnectSocket(i, {
            code: _.YI$.CLOSE_NORMAL,
            message: "iFrame gone"
        }, !0), m.delete(n))
    };
    handleMessage = (e, t, n) => {
        let i = m.get(t);
        try {
            this.routeEvent(i, t, e, n)
        } catch (e) {
            if (e instanceof d.A && e.errorCode === _.Lw6.INVALID_PAYLOAD) throw e;
            null != i ? this.disconnectSocket(i, {
                code: e.code,
                message: e.message
            }, !0) : p(t, {
                code: e.code,
                message: e.message
            }, n)
        }
    };
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n)) return void console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
        let [a, r] = n;
        switch (a) {
            case c.A.HANDSHAKE:
                if (null != e) throw new d.A({
                    closeCode: _.YI$.CLOSE_UNSUPPORTED
                }, "Already connected");
                return this.handleHandshake(t, r, i);
            case c.A.FRAME:
                if (null == e) throw new d.A({
                    closeCode: _.YI$.CLOSE_UNSUPPORTED
                }, "Not connected");
                return this.handleFrame(t, e, r);
            case c.A.CLOSE:
                if (null == e) throw new d.A({
                    closeCode: _.YI$.CLOSE_UNSUPPORTED
                }, "Not connected");
                return this.handleClose(e, r);
            default:
                throw new d.A({
                    closeCode: _.YI$.CLOSE_UNSUPPORTED
                }, "Invalid opcode")
        }
    }
    handleFrame = (e, t, n) => {
        let i;
        if (e !== t.origin) throw new d.A({
            closeCode: _.YI$.INVALID_ORIGIN
        }, "Origin has changed");
        try {
            i = "string" == typeof n ? JSON.parse(n) : n
        } catch (e) {
            throw new d.A({
                closeCode: _.YI$.CLOSE_UNSUPPORTED
            }, "Payload not recognized encoding")
        }
        this.onFrameHandled?.(i, this.logger, t), this.emit("request", t, i)
    };
    handleHandshake = async (e, t, i) => {
        let a;
        null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
        let r = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            r.assert(t, (0, u.A)(r).required().keys({
                v: r.number().min(1).max(1).required(),
                encoding: r.string().equal("json").optional(),
                client_id: r.string().required(),
                frame_id: r.string().required(),
                sdk_version: r.string().optional()
            }))
        } catch (e) {
            throw new d.A({
                closeCode: _.YI$.CLOSE_UNSUPPORTED
            }, e.message)
        }
        let s = t.frame_id;
        if (!g.has(s)) throw this.logger.error(`Unrecognized frame ID ${s}`), new d.A({
            closeCode: _.YI$.CLOSE_UNSUPPORTED
        }, `Unrecognized frame ID ${s}`);
        null != t.sdk_version && l.default.track(_.HAw.ACTIVITY_HANDSHAKE, {
            application_id: t.client_id,
            sdk_version: t.sdk_version
        });
        try {
            a = this.createPostMessageProxySocket({
                origin: e,
                postMessageToRPCClient: i,
                frameId: s,
                version: Number(t.v),
                logger: this.logger,
                postClose: p,
                encoding: t.encoding ?? "json"
            })
        } catch (e) {
            throw this.logger.error(`Error opening window socket ${e}`), e
        }
        this.logger.info(`Socket Opened: ${a.id}`);
        try {
            if (await this.validateSocketClient(a, e, t.client_id), !g.has(s)) throw this.logger.error(`Frame ID ${s} no longer exists`), new d.A({
                closeCode: _.YI$.CLOSE_UNSUPPORTED
            }, `Unrecognized frame ID ${s}`);
            m.set(e, a), g.delete(s), a.authorization.scopes.push(A.W_), this.emit("connect", a), this.logger.info(`Socket Validated: ${a.id}`)
        } catch (e) {
            throw this.logger.info(`Socket Closed: ${a.id}, ${e.message}`), e
        }
    };
    handleClose = async (e, t) => {
        let i = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            i.assert(t, (0, u.A)(i).required().keys({
                code: i.number().valid(Object.values(_.YI$)).required(),
                message: i.string().optional()
            }))
        } catch (e) {
            throw new d.A({
                closeCode: _.YI$.CLOSE_UNSUPPORTED
            }, e.message)
        }
        this.disconnectSocket(e, t)
    }
}