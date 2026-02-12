package zb;

import zb.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i extends o {

    /* renamed from: a  reason: collision with root package name */
    private final o.c f56289a;

    /* renamed from: b  reason: collision with root package name */
    private final o.b f56290b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends o.a {

        /* renamed from: a  reason: collision with root package name */
        private o.c f56291a;

        /* renamed from: b  reason: collision with root package name */
        private o.b f56292b;

        @Override // zb.o.a
        public o a() {
            return new i(this.f56291a, this.f56292b);
        }

        @Override // zb.o.a
        public o.a b(o.b bVar) {
            this.f56292b = bVar;
            return this;
        }

        @Override // zb.o.a
        public o.a c(o.c cVar) {
            this.f56291a = cVar;
            return this;
        }
    }

    @Override // zb.o
    public o.b b() {
        return this.f56290b;
    }

    @Override // zb.o
    public o.c c() {
        return this.f56289a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            o.c cVar = this.f56289a;
            if (cVar != null ? cVar.equals(oVar.c()) : oVar.c() == null) {
                o.b bVar = this.f56290b;
                if (bVar != null ? bVar.equals(oVar.b()) : oVar.b() == null) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        o.c cVar = this.f56289a;
        int i10 = 0;
        if (cVar == null) {
            hashCode = 0;
        } else {
            hashCode = cVar.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        o.b bVar = this.f56290b;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "NetworkConnectionInfo{networkType=" + this.f56289a + ", mobileSubtype=" + this.f56290b + "}";
    }

    private i(o.c cVar, o.b bVar) {
        this.f56289a = cVar;
        this.f56290b = bVar;
    }
}
