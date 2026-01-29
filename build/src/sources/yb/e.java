package yb;

import yb.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e extends k {

    /* renamed from: a  reason: collision with root package name */
    private final k.b f54157a;

    /* renamed from: b  reason: collision with root package name */
    private final yb.a f54158b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends k.a {

        /* renamed from: a  reason: collision with root package name */
        private k.b f54159a;

        /* renamed from: b  reason: collision with root package name */
        private yb.a f54160b;

        @Override // yb.k.a
        public k a() {
            return new e(this.f54159a, this.f54160b);
        }

        @Override // yb.k.a
        public k.a b(yb.a aVar) {
            this.f54160b = aVar;
            return this;
        }

        @Override // yb.k.a
        public k.a c(k.b bVar) {
            this.f54159a = bVar;
            return this;
        }
    }

    @Override // yb.k
    public yb.a b() {
        return this.f54158b;
    }

    @Override // yb.k
    public k.b c() {
        return this.f54157a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            k.b bVar = this.f54157a;
            if (bVar != null ? bVar.equals(kVar.c()) : kVar.c() == null) {
                yb.a aVar = this.f54158b;
                if (aVar != null ? aVar.equals(kVar.b()) : kVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        k.b bVar = this.f54157a;
        int i10 = 0;
        if (bVar == null) {
            hashCode = 0;
        } else {
            hashCode = bVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        yb.a aVar = this.f54158b;
        if (aVar != null) {
            i10 = aVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "ClientInfo{clientType=" + this.f54157a + ", androidClientInfo=" + this.f54158b + "}";
    }

    private e(k.b bVar, yb.a aVar) {
        this.f54157a = bVar;
        this.f54158b = aVar;
    }
}
