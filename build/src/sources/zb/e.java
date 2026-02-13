package zb;

import zb.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e extends k {

    /* renamed from: a  reason: collision with root package name */
    private final k.b f56824a;

    /* renamed from: b  reason: collision with root package name */
    private final zb.a f56825b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends k.a {

        /* renamed from: a  reason: collision with root package name */
        private k.b f56826a;

        /* renamed from: b  reason: collision with root package name */
        private zb.a f56827b;

        @Override // zb.k.a
        public k a() {
            return new e(this.f56826a, this.f56827b);
        }

        @Override // zb.k.a
        public k.a b(zb.a aVar) {
            this.f56827b = aVar;
            return this;
        }

        @Override // zb.k.a
        public k.a c(k.b bVar) {
            this.f56826a = bVar;
            return this;
        }
    }

    @Override // zb.k
    public zb.a b() {
        return this.f56825b;
    }

    @Override // zb.k
    public k.b c() {
        return this.f56824a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            k.b bVar = this.f56824a;
            if (bVar != null ? bVar.equals(kVar.c()) : kVar.c() == null) {
                zb.a aVar = this.f56825b;
                if (aVar != null ? aVar.equals(kVar.b()) : kVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        k.b bVar = this.f56824a;
        int i10 = 0;
        if (bVar == null) {
            hashCode = 0;
        } else {
            hashCode = bVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        zb.a aVar = this.f56825b;
        if (aVar != null) {
            i10 = aVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "ClientInfo{clientType=" + this.f56824a + ", androidClientInfo=" + this.f56825b + "}";
    }

    private e(k.b bVar, zb.a aVar) {
        this.f56824a = bVar;
        this.f56825b = aVar;
    }
}
