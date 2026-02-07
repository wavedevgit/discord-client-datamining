package yb;

import yb.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e extends k {

    /* renamed from: a  reason: collision with root package name */
    private final k.b f55191a;

    /* renamed from: b  reason: collision with root package name */
    private final yb.a f55192b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends k.a {

        /* renamed from: a  reason: collision with root package name */
        private k.b f55193a;

        /* renamed from: b  reason: collision with root package name */
        private yb.a f55194b;

        @Override // yb.k.a
        public k a() {
            return new e(this.f55193a, this.f55194b);
        }

        @Override // yb.k.a
        public k.a b(yb.a aVar) {
            this.f55194b = aVar;
            return this;
        }

        @Override // yb.k.a
        public k.a c(k.b bVar) {
            this.f55193a = bVar;
            return this;
        }
    }

    @Override // yb.k
    public yb.a b() {
        return this.f55192b;
    }

    @Override // yb.k
    public k.b c() {
        return this.f55191a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            k.b bVar = this.f55191a;
            if (bVar != null ? bVar.equals(kVar.c()) : kVar.c() == null) {
                yb.a aVar = this.f55192b;
                if (aVar != null ? aVar.equals(kVar.b()) : kVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        k.b bVar = this.f55191a;
        int i10 = 0;
        if (bVar == null) {
            hashCode = 0;
        } else {
            hashCode = bVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        yb.a aVar = this.f55192b;
        if (aVar != null) {
            i10 = aVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "ClientInfo{clientType=" + this.f55191a + ", androidClientInfo=" + this.f55192b + "}";
    }

    private e(k.b bVar, yb.a aVar) {
        this.f55191a = bVar;
        this.f55192b = aVar;
    }
}
