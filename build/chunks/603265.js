/** chunk id: 603265 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(636401),
    a = n(440454),
    r = n(313731),
    l = n(613057),
    s = n(652215);
class o extends r.A {
    origin;
    frameId;
    postMessageToRPCClient;
    logger;
    postClose;
    onSendingToRPCClient;
    closed;
    constructor({
        origin: e,
        postMessageToRPCClient: t,
        frameId: n,
        version: a,
        encoding: r,
        logger: o,
        postClose: d,
        onSendingToRPCClient: c
    }) {
        if (super(l.z4.POST_MESSAGE, a, r), -1 === ["etf", "json"].indexOf(r)) throw new i.A({
            closeCode: s.YI$.INVALID_ENCODING
        }, `Invalid Encoding: ${r}`);
        if ("etf" === r) throw new i.A({
            closeCode: s.YI$.INVALID_ENCODING
        }, "Erlpack cannot be used on this client");
        this.origin = e, this.postMessageToRPCClient = t, this.frameId = n, this.logger = o, this.postClose = d, this.onSendingToRPCClient = c, this.closed = !1
    }
    send(e) {
        this.onSendingToRPCClient?.(e, this.id), this.postMessageToRPCClient([a.A.FRAME, e], this.origin)
    }
    close(e, t) {
        this.closed || this.postClose(this.origin, {
            code: e,
            message: t
        }, this.postMessageToRPCClient), this.closed = !0
    }
}