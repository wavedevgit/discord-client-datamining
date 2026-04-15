/** chunk id: 33006 params = (module,exports,require) **/
let i, l;
n.d(t, {
    A: () => R
}), n(323874), n(14289), n(35956), n(321073);
var a = n(143236),
    r = n(735438),
    s = n.n(r),
    o = n(73153),
    d = n(626584),
    c = n(111162),
    u = n(998218),
    A = n(837921),
    h = n(636401),
    _ = n(84002),
    m = n(313731),
    g = n(546983),
    p = n(613057),
    E = n(652215),
    I = n(264572).Buffer;
try {
    i = A.Ay.requireModule("discord_erlpack")
} catch (e) {
    try {
        i = A.Ay.requireModule("erlpack")
    } catch (e) {}
}
let f = A.Ay.requireModule("discord_rpc").RPCWebSocket,
    C = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    T = new d.A("RPCServer:WSS"),
    N = [];

function S(e) {
    return "function" == typeof e ? e() : e
}

function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = e > 0 ? void 0 : () => {
            if (!S(l.listening)) return;
            let e = l.address().port;
            T.info(`Starting on ${e}`), o.h.dispatch({
                type: "RPC_SERVER_READY",
                port: e
            })
        };
    l.listen(E.xEi + e % E.sJq, "127.0.0.1", t)
}

function v(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        a = null != S(e.headers).origin ? {
            "Access-Control-Allow-Origin": S(e.headers).origin,
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "POST, GET, PUT, PATCH, DELETE",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        } : {};
    n = n ? JSON.stringify(n) : "", i = 200 === i && 0 === n.length ? 204 : i, t.setHeader("Content-Length", I.byteLength(n).toString()), t.setHeader("Content-Type", "application/json"), t.writeHead(i, {
        ...l,
        ...a
    }), t.end(n)
}

function b(e, t, n, i) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    v(e, t, {
        code: l,
        message: i
    }, n)
}
class y extends m.A {
    _socket;
    constructor(e, t, n) {
        if (super("ws", t, n), -1 === ["etf", "json"].indexOf(n)) throw new h.A({
            closeCode: E.YI$.INVALID_ENCODING
        }, `Invalid Encoding: ${n}`);
        if ("etf" === n && null == i) throw new h.A({
            closeCode: E.YI$.INVALID_ENCODING
        }, "Erlpack cannot be used on this client");
        this._socket = e
    }
    send(e) {
        (c.default.isLoggingOverlayEvents || e.cmd !== E.e$_.OVERLAY && e.evt !== E.ZE4.OVERLAY) && T.info(`Socket Emit: ${this.id}`, (0, _.A)(e)), null != i && "etf" === this.encoding ? this._socket.send(i.pack(e), {
            binary: !0
        }) : this._socket.send(JSON.stringify(e))
    }
    close(e, t) {
        this._socket.close(e, t)
    }
}
class O extends m.A {
    _sendCallback;
    _closeCallback;
    constructor(e, t, n, i) {
        if (super("http", n, i), "json" !== i) throw new h.A({
            closeCode: E.YI$.INVALID_ENCODING
        }, `Invalid Encoding: ${i}`);
        this._sendCallback = e, this._closeCallback = t
    }
    send(e) {
        (c.default.isLoggingOverlayEvents || e.cmd !== E.e$_.OVERLAY) && T.info(`Socket Emit: ${this.id}`, e), this._sendCallback(e)
    }
    close(e, t) {
        this._closeCallback(t, e)
    }
}
class L extends a.EventEmitter {
    constructor() {
        super();
        let e = 0;
        (l = f.http.createServer()).on("error", t => {
            T.error(`Error: ${t.message}`), ("EADDRINUSE" === t.code || t.message.includes("EADDRINUSE")) && setTimeout(() => x(++e), 1e3)
        }), l.on("request", this.handleRequest.bind(this)), x(e);
        const t = {
            instanceId: l.instanceId ?? 0,
            server: l
        };
        new f.ws.Server(t).on("connection", e => this.handleConnection(e))
    }
    handleRequest(e, t) {
        let [n, i] = S(e.url).split("?"), l = S(e.method);
        if ("/rpc" === n && "OPTIONS" === l) return void v(e, t, {
            body: ""
        });
        let a = "POST" === l;
        if ("/rpc" === n && ("GET" === l || a)) {
            let n = new URLSearchParams(i),
                l = a ? S(e.headers)["content-type"].split("/")[1] : "json",
                r = function() {
                    let {
                        protocol: e,
                        host: i
                    } = u.A.toURLSafe(n.get("callback") ?? "") ?? {};
                    e === location.protocol && i === location.host ? t.setHeader("Location", n.get("callback")) : t.setHeader("Location", C), t.writeHead(301), t.end()
                },
                s = new O(!a ? r : v.bind(null, e, t), !a ? r : b.bind(null, e, t, 400), Number(n.get("v")), l);
            a ? (0, g.j7)(s, S(e.headers).origin, n.get("client_id")).then(() => {
                let n = "";
                e.on("data", e => n += e), e.on("error", () => b(e, t, 500, "Internal Server Error")), e.on("end", () => this.handleMessage(s, n))
            }).catch(e => {
                let {
                    code: t,
                    message: n
                } = e;
                return s.close(t, n)
            }) : (s.authorization.scopes = [p.kw], this.handleMessage(s, decodeURIComponent(n.get("payload") ?? "")));
            return
        }
        b(e, t, 404, "Not Found")
    }
    handleConnection(e) {
        let t, n = new URLSearchParams(S(e.upgradeReq).url.split("?")[1]),
            i = S(e.upgradeReq).headers.origin ?? "";
        try {
            t = new y(e, Number(n.get("v")), n.get("encoding") ?? "json")
        } catch (t) {
            e.close(t.code, t.message);
            return
        }
        T.info(`Socket Opened: ${t.id}`), e.on("error", e => T.error(`WS Error: ${e.message}`)), e.on("close", (e, n) => {
            T.info(`Socket Closed: ${t.id}, code ${e}, message ${n}`), s().remove(N, e => e === t), this.emit("disconnect", t)
        }), (0, g.j7)(t, i, n.get("client_id")).then(() => {
            N.push(t), e.on("message", e => this.handleMessage(t, e)), this.emit("connect", t)
        }).catch(e => {
            let {
                code: n,
                message: i
            } = e;
            return t.close(n, i)
        })
    }
    handleMessage(e, t) {
        let n;
        try {
            if (null != i && "etf" === e.encoding) n = i.unpack(t);
            else if ("string" == typeof t) n = JSON.parse(t);
            else throw Error()
        } catch (t) {
            e.close(E.YI$.CLOSE_UNSUPPORTED, `Payload not ${e.encoding}`);
            return
        }(c.default.isLoggingOverlayEvents || n.cmd !== E.e$_.OVERLAY) && T.info(`Socket Message: ${e.id}`, (0, _.A)(n)), this.emit("request", e, n)
    }
}
let R = new L