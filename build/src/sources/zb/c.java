package zb;

import zb.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f56059a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56060b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.d f56061c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f56062d;

    /* renamed from: e  reason: collision with root package name */
    private final xb.c f56063e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f56064a;

        /* renamed from: b  reason: collision with root package name */
        private String f56065b;

        /* renamed from: c  reason: collision with root package name */
        private xb.d f56066c;

        /* renamed from: d  reason: collision with root package name */
        private xb.g f56067d;

        /* renamed from: e  reason: collision with root package name */
        private xb.c f56068e;

        @Override // zb.n.a
        public n a() {
            String str = "";
            if (this.f56064a == null) {
                str = " transportContext";
            }
            if (this.f56065b == null) {
                str = str + " transportName";
            }
            if (this.f56066c == null) {
                str = str + " event";
            }
            if (this.f56067d == null) {
                str = str + " transformer";
            }
            if (this.f56068e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f56064a, this.f56065b, this.f56066c, this.f56067d, this.f56068e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.n.a
        n.a b(xb.c cVar) {
            if (cVar != null) {
                this.f56068e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // zb.n.a
        n.a c(xb.d dVar) {
            if (dVar != null) {
                this.f56066c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // zb.n.a
        n.a d(xb.g gVar) {
            if (gVar != null) {
                this.f56067d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // zb.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f56064a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // zb.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f56065b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // zb.n
    public xb.c b() {
        return this.f56063e;
    }

    @Override // zb.n
    xb.d c() {
        return this.f56061c;
    }

    @Override // zb.n
    xb.g e() {
        return this.f56062d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f56059a.equals(nVar.f()) && this.f56060b.equals(nVar.g()) && this.f56061c.equals(nVar.c()) && this.f56062d.equals(nVar.e()) && this.f56063e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.n
    public o f() {
        return this.f56059a;
    }

    @Override // zb.n
    public String g() {
        return this.f56060b;
    }

    public int hashCode() {
        return ((((((((this.f56059a.hashCode() ^ 1000003) * 1000003) ^ this.f56060b.hashCode()) * 1000003) ^ this.f56061c.hashCode()) * 1000003) ^ this.f56062d.hashCode()) * 1000003) ^ this.f56063e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f56059a + ", transportName=" + this.f56060b + ", event=" + this.f56061c + ", transformer=" + this.f56062d + ", encoding=" + this.f56063e + "}";
    }

    private c(o oVar, String str, xb.d dVar, xb.g gVar, xb.c cVar) {
        this.f56059a = oVar;
        this.f56060b = str;
        this.f56061c = dVar;
        this.f56062d = gVar;
        this.f56063e = cVar;
    }
}
