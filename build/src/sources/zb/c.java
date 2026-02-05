package zb;

import zb.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f55328a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55329b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.d f55330c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55331d;

    /* renamed from: e  reason: collision with root package name */
    private final xb.c f55332e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f55333a;

        /* renamed from: b  reason: collision with root package name */
        private String f55334b;

        /* renamed from: c  reason: collision with root package name */
        private xb.d f55335c;

        /* renamed from: d  reason: collision with root package name */
        private xb.g f55336d;

        /* renamed from: e  reason: collision with root package name */
        private xb.c f55337e;

        @Override // zb.n.a
        public n a() {
            String str = "";
            if (this.f55333a == null) {
                str = " transportContext";
            }
            if (this.f55334b == null) {
                str = str + " transportName";
            }
            if (this.f55335c == null) {
                str = str + " event";
            }
            if (this.f55336d == null) {
                str = str + " transformer";
            }
            if (this.f55337e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f55333a, this.f55334b, this.f55335c, this.f55336d, this.f55337e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.n.a
        n.a b(xb.c cVar) {
            if (cVar != null) {
                this.f55337e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // zb.n.a
        n.a c(xb.d dVar) {
            if (dVar != null) {
                this.f55335c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // zb.n.a
        n.a d(xb.g gVar) {
            if (gVar != null) {
                this.f55336d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // zb.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f55333a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // zb.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f55334b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // zb.n
    public xb.c b() {
        return this.f55332e;
    }

    @Override // zb.n
    xb.d c() {
        return this.f55330c;
    }

    @Override // zb.n
    xb.g e() {
        return this.f55331d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f55328a.equals(nVar.f()) && this.f55329b.equals(nVar.g()) && this.f55330c.equals(nVar.c()) && this.f55331d.equals(nVar.e()) && this.f55332e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.n
    public o f() {
        return this.f55328a;
    }

    @Override // zb.n
    public String g() {
        return this.f55329b;
    }

    public int hashCode() {
        return ((((((((this.f55328a.hashCode() ^ 1000003) * 1000003) ^ this.f55329b.hashCode()) * 1000003) ^ this.f55330c.hashCode()) * 1000003) ^ this.f55331d.hashCode()) * 1000003) ^ this.f55332e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f55328a + ", transportName=" + this.f55329b + ", event=" + this.f55330c + ", transformer=" + this.f55331d + ", encoding=" + this.f55332e + "}";
    }

    private c(o oVar, String str, xb.d dVar, xb.g gVar, xb.c cVar) {
        this.f55328a = oVar;
        this.f55329b = str;
        this.f55330c = dVar;
        this.f55331d = gVar;
        this.f55332e = cVar;
    }
}
