package yb;

import yb.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i extends o {

    /* renamed from: a  reason: collision with root package name */
    private final o.c f53939a;

    /* renamed from: b  reason: collision with root package name */
    private final o.b f53940b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends o.a {

        /* renamed from: a  reason: collision with root package name */
        private o.c f53941a;

        /* renamed from: b  reason: collision with root package name */
        private o.b f53942b;

        @Override // yb.o.a
        public o a() {
            return new i(this.f53941a, this.f53942b);
        }

        @Override // yb.o.a
        public o.a b(o.b bVar) {
            this.f53942b = bVar;
            return this;
        }

        @Override // yb.o.a
        public o.a c(o.c cVar) {
            this.f53941a = cVar;
            return this;
        }
    }

    @Override // yb.o
    public o.b b() {
        return this.f53940b;
    }

    @Override // yb.o
    public o.c c() {
        return this.f53939a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            o.c cVar = this.f53939a;
            if (cVar != null ? cVar.equals(oVar.c()) : oVar.c() == null) {
                o.b bVar = this.f53940b;
                if (bVar != null ? bVar.equals(oVar.b()) : oVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        o.c cVar = this.f53939a;
        int i10 = 0;
        if (cVar == null) {
            hashCode = 0;
        } else {
            hashCode = cVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        o.b bVar = this.f53940b;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "NetworkConnectionInfo{networkType=" + this.f53939a + ", mobileSubtype=" + this.f53940b + "}";
    }

    private i(o.c cVar, o.b bVar) {
        this.f53939a = cVar;
        this.f53940b = bVar;
    }
}
