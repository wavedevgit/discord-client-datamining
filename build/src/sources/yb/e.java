package yb;

import yb.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e extends k {

    /* renamed from: a  reason: collision with root package name */
    private final k.b f54173a;

    /* renamed from: b  reason: collision with root package name */
    private final yb.a f54174b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends k.a {

        /* renamed from: a  reason: collision with root package name */
        private k.b f54175a;

        /* renamed from: b  reason: collision with root package name */
        private yb.a f54176b;

        @Override // yb.k.a
        public k a() {
            return new e(this.f54175a, this.f54176b);
        }

        @Override // yb.k.a
        public k.a b(yb.a aVar) {
            this.f54176b = aVar;
            return this;
        }

        @Override // yb.k.a
        public k.a c(k.b bVar) {
            this.f54175a = bVar;
            return this;
        }
    }

    @Override // yb.k
    public yb.a b() {
        return this.f54174b;
    }

    @Override // yb.k
    public k.b c() {
        return this.f54173a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            k.b bVar = this.f54173a;
            if (bVar != null ? bVar.equals(kVar.c()) : kVar.c() == null) {
                yb.a aVar = this.f54174b;
                if (aVar != null ? aVar.equals(kVar.b()) : kVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        k.b bVar = this.f54173a;
        int i10 = 0;
        if (bVar == null) {
            hashCode = 0;
        } else {
            hashCode = bVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        yb.a aVar = this.f54174b;
        if (aVar != null) {
            i10 = aVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "ClientInfo{clientType=" + this.f54173a + ", androidClientInfo=" + this.f54174b + "}";
    }

    private e(k.b bVar, yb.a aVar) {
        this.f54173a = bVar;
        this.f54174b = aVar;
    }
}
