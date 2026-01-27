/** Chunk was on web.js **/
/** chunk id: 813827, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    u: () => l
}), n(734808), n(896048), n(65821);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    o = n(324281);
class s extends o.G {
    create(e) {
        let t = {
            clientVersion: 0,
            serverVersion: 0,
            dataVersion: 0
        };
        return globalThis.Object.defineProperty(t, a.$, {
            enumerable: !1,
            value: this
        }), void 0 !== e && (0, i.x)(this, t, e), t
    }
    internalBinaryRead(e, t, n, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + t;
        for (; e.pos < o;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.clientVersion = e.uint32();
                    break;
                case 2:
                    a.serverVersion = e.uint32();
                    break;
                case 3:
                    a.dataVersion = e.uint32();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.f$.onRead : o)(this.typeName, a, t, i, s)
            }
        }
        return a
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.clientVersion && t.tag(1, r.O0.Varint).uint32(e.clientVersion), 0 !== e.serverVersion && t.tag(2, r.O0.Varint).uint32(e.serverVersion), 0 !== e.dataVersion && t.tag(3, r.O0.Varint).uint32(e.dataVersion);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t
    }
    constructor() {
        super("discord_protos.discord_users.v1.Versions", [{
            no: 1,
            name: "client_version",
            kind: "scalar",
            T: 13
        }, {
            no: 2,
            name: "server_version",
            kind: "scalar",
            T: 13
        }, {
            no: 3,
            name: "data_version",
            kind: "scalar",
            T: 13
        }])
    }
}
let l = new s