package zb;

import zb.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i extends o {

    /* renamed from: a  reason: collision with root package name */
    private final o.c f56288a;

    /* renamed from: b  reason: collision with root package name */
    private final o.b f56289b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends o.a {

        /* renamed from: a  reason: collision with root package name */
        private o.c f56290a;

        /* renamed from: b  reason: collision with root package name */
        private o.b f56291b;

        @Override // zb.o.a
        public o a() {
            return new i(this.f56290a, this.f56291b);
        }

        @Override // zb.o.a
        public o.a b(o.b bVar) {
            this.f56291b = bVar;
            return this;
        }

        @Override // zb.o.a
        public o.a c(o.c cVar) {
            this.f56290a = cVar;
            return this;
        }
    }

    @Override // zb.o
    public o.b b() {
        return this.f56289b;
    }

    @Override // zb.o
    public o.c c() {
        return this.f56288a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            o.c cVar = this.f56288a;
            if (cVar != null ? cVar.equals(oVar.c()) : oVar.c() == null) {
                o.b bVar = this.f56289b;
                if (bVar != null ? bVar.equals(oVar.b()) : oVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        o.c cVar = this.f56288a;
        int i10 = 0;
        if (cVar == null) {
            hashCode = 0;
        } else {
            hashCode = cVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        o.b bVar = this.f56289b;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "NetworkConnectionInfo{networkType=" + this.f56288a + ", mobileSubtype=" + this.f56289b + "}";
    }

    private i(o.c cVar, o.b bVar) {
        this.f56288a = cVar;
        this.f56289b = bVar;
    }
}
