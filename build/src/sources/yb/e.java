package yb;

import yb.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e extends k {

    /* renamed from: a  reason: collision with root package name */
    private final k.b f54148a;

    /* renamed from: b  reason: collision with root package name */
    private final yb.a f54149b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends k.a {

        /* renamed from: a  reason: collision with root package name */
        private k.b f54150a;

        /* renamed from: b  reason: collision with root package name */
        private yb.a f54151b;

        @Override // yb.k.a
        public k a() {
            return new e(this.f54150a, this.f54151b);
        }

        @Override // yb.k.a
        public k.a b(yb.a aVar) {
            this.f54151b = aVar;
            return this;
        }

        @Override // yb.k.a
        public k.a c(k.b bVar) {
            this.f54150a = bVar;
            return this;
        }
    }

    @Override // yb.k
    public yb.a b() {
        return this.f54149b;
    }

    @Override // yb.k
    public k.b c() {
        return this.f54148a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            k.b bVar = this.f54148a;
            if (bVar != null ? bVar.equals(kVar.c()) : kVar.c() == null) {
                yb.a aVar = this.f54149b;
                if (aVar != null ? aVar.equals(kVar.b()) : kVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        k.b bVar = this.f54148a;
        int i10 = 0;
        if (bVar == null) {
            hashCode = 0;
        } else {
            hashCode = bVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        yb.a aVar = this.f54149b;
        if (aVar != null) {
            i10 = aVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "ClientInfo{clientType=" + this.f54148a + ", androidClientInfo=" + this.f54149b + "}";
    }

    private e(k.b bVar, yb.a aVar) {
        this.f54148a = bVar;
        this.f54149b = aVar;
    }
}
