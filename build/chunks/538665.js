/** chunk id: 538665 params = (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(321073);
var i = n(143236),
    l = n(933958),
    a = n(969151),
    r = n(954571),
    s = n(203982),
    o = n(927813),
    d = n(636401),
    c = n(440454),
    u = n(629471),
    A = n(613057),
    h = n(652215);
let _ = 10 * o.A.Millis.SECOND,
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
        super(), s._.subscribe(h.jej.IFRAME_MOUNT, this.handleIFrameMount), s._.subscribe(h.jej.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = n, this.onFrameHandled = i
    }
    disconnectSocket = (() => {
        var e = this;
        return function(t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.emit("disconnect", t, i ? void 0 : n), t.close(n.code, n.message ?? "Unknown");
            let [l] = Array.from(m.entries()).find(e => {
                let [n, i] = e;
                return i === t
            }) ?? [null, null];
            null != l && m.delete(l)
        }
    })();
    handleIFrameMount = e => {
        let {
            id: t
        } = e;
        g.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
            Array.from(l.Ay.getSelfEmbeddedActivities().entries()).forEach(e => {
                let [t, n] = e;
                r.default.track(h.HAw.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                    application_id: t,
                    channel_id: (0, a.H)(n.location),
                    guild_id: (0, a.D)(n.location),
                    timeout_ms: _
                })
            })
        }, _)
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
            code: h.YI$.CLOSE_NORMAL,
            message: "iFrame gone"
        }, !0), m.delete(n))
    };
    handleMessage = (e, t, n) => {
        let i = m.get(t);
        try {
            this.routeEvent(i, t, e, n)
        } catch (e) {
            if (e instanceof d.A && e.errorCode === h.Lw6.INVALID_PAYLOAD) throw e;
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
        let [l, a] = n;
        switch (l) {
            case c.A.HANDSHAKE:
                if (null != e) throw new d.A({
                    closeCode: h.YI$.CLOSE_UNSUPPORTED
                }, "Already connected");
                return this.handleHandshake(t, a, i);
            case c.A.FRAME:
                if (null == e) throw new d.A({
                    closeCode: h.YI$.CLOSE_UNSUPPORTED
                }, "Not connected");
                return this.handleFrame(t, e, a);
            case c.A.CLOSE:
                if (null == e) throw new d.A({
                    closeCode: h.YI$.CLOSE_UNSUPPORTED
                }, "Not connected");
                return this.handleClose(e, a);
            default:
                throw new d.A({
                    closeCode: h.YI$.CLOSE_UNSUPPORTED
                }, "Invalid opcode")
        }
    }
    handleFrame = (e, t, n) => {
        let i;
        if (e !== t.origin) throw new d.A({
            closeCode: h.YI$.INVALID_ORIGIN
        }, "Origin has changed");
        try {
            i = "string" == typeof n ? JSON.parse(n) : n
        } catch (e) {
            throw new d.A({
                closeCode: h.YI$.CLOSE_UNSUPPORTED
            }, "Payload not recognized encoding")
        }
        this.onFrameHandled?.(i, this.logger, t), this.emit("request", t, i)
    };
    handleHandshake = async (e, t, i) => {
        let l;
        null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
        let a = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            a.assert(t, (0, u.A)(a).required().keys({
                v: a.number().min(1).max(1).required(),
                encoding: a.string().equal("json").optional(),
                client_id: a.string().required(),
                frame_id: a.string().required(),
                sdk_version: a.string().optional()
            }))
        } catch (e) {
            throw new d.A({
                closeCode: h.YI$.CLOSE_UNSUPPORTED
            }, e.message)
        }
        let s = t.frame_id;
        if (!g.has(s)) throw this.logger.error(`Unrecognized frame ID ${s}`), new d.A({
            closeCode: h.YI$.CLOSE_UNSUPPORTED
        }, `Unrecognized frame ID ${s}`);
        null != t.sdk_version && r.default.track(h.HAw.ACTIVITY_HANDSHAKE, {
            application_id: t.client_id,
            sdk_version: t.sdk_version
        });
        try {
            l = this.createPostMessageProxySocket({
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
        this.logger.info(`Socket Opened: ${l.id}`);
        try {
            if (await this.validateSocketClient(l, e, t.client_id), !g.has(s)) throw this.logger.error(`Frame ID ${s} no longer exists`), new d.A({
                closeCode: h.YI$.CLOSE_UNSUPPORTED
            }, `Unrecognized frame ID ${s}`);
            m.set(e, l), g.delete(s), l.authorization.scopes.push(A.W_), this.emit("connect", l), this.logger.info(`Socket Validated: ${l.id}`)
        } catch (e) {
            throw this.logger.info(`Socket Closed: ${l.id}, ${e.message}`), e
        }
    };
    handleClose = async (e, t) => {
        let i = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            i.assert(t, (0, u.A)(i).required().keys({
                code: i.number().valid(Object.values(h.YI$)).required(),
                message: i.string().optional()
            }))
        } catch (e) {
            throw new d.A({
                closeCode: h.YI$.CLOSE_UNSUPPORTED
            }, e.message)
        }
        this.disconnectSocket(e, t)
    }
}