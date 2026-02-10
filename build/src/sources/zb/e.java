package zb;

import zb.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e extends k {

    /* renamed from: a  reason: collision with root package name */
    private final k.b f56255a;

    /* renamed from: b  reason: collision with root package name */
    private final zb.a f56256b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends k.a {

        /* renamed from: a  reason: collision with root package name */
        private k.b f56257a;

        /* renamed from: b  reason: collision with root package name */
        private zb.a f56258b;

        @Override // zb.k.a
        public k a() {
            return new e(this.f56257a, this.f56258b);
        }

        @Override // zb.k.a
        public k.a b(zb.a aVar) {
            this.f56258b = aVar;
            return this;
        }

        @Override // zb.k.a
        public k.a c(k.b bVar) {
            this.f56257a = bVar;
            return this;
        }
    }

    @Override // zb.k
    public zb.a b() {
        return this.f56256b;
    }

    @Override // zb.k
    public k.b c() {
        return this.f56255a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof k) {
            k kVar = (k) obj;
            k.b bVar = this.f56255a;
            if (bVar != null ? bVar.equals(kVar.c()) : kVar.c() == null) {
                zb.a aVar = this.f56256b;
                if (aVar != null ? aVar.equals(kVar.b()) : kVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        k.b bVar = this.f56255a;
        int i10 = 0;
        if (bVar == null) {
            hashCode = 0;
        } else {
            hashCode = bVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        zb.a aVar = this.f56256b;
        if (aVar != null) {
            i10 = aVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "ClientInfo{clientType=" + this.f56255a + ", androidClientInfo=" + this.f56256b + "}";
    }

    private e(k.b bVar, zb.a aVar) {
        this.f56255a = bVar;
        this.f56256b = aVar;
    }
}
