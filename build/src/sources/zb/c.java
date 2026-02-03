package zb;

import zb.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f55604a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55605b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.d f55606c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55607d;

    /* renamed from: e  reason: collision with root package name */
    private final xb.c f55608e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f55609a;

        /* renamed from: b  reason: collision with root package name */
        private String f55610b;

        /* renamed from: c  reason: collision with root package name */
        private xb.d f55611c;

        /* renamed from: d  reason: collision with root package name */
        private xb.g f55612d;

        /* renamed from: e  reason: collision with root package name */
        private xb.c f55613e;

        @Override // zb.n.a
        public n a() {
            String str = "";
            if (this.f55609a == null) {
                str = " transportContext";
            }
            if (this.f55610b == null) {
                str = str + " transportName";
            }
            if (this.f55611c == null) {
                str = str + " event";
            }
            if (this.f55612d == null) {
                str = str + " transformer";
            }
            if (this.f55613e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f55609a, this.f55610b, this.f55611c, this.f55612d, this.f55613e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.n.a
        n.a b(xb.c cVar) {
            if (cVar != null) {
                this.f55613e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // zb.n.a
        n.a c(xb.d dVar) {
            if (dVar != null) {
                this.f55611c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // zb.n.a
        n.a d(xb.g gVar) {
            if (gVar != null) {
                this.f55612d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // zb.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f55609a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // zb.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f55610b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // zb.n
    public xb.c b() {
        return this.f55608e;
    }

    @Override // zb.n
    xb.d c() {
        return this.f55606c;
    }

    @Override // zb.n
    xb.g e() {
        return this.f55607d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f55604a.equals(nVar.f()) && this.f55605b.equals(nVar.g()) && this.f55606c.equals(nVar.c()) && this.f55607d.equals(nVar.e()) && this.f55608e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.n
    public o f() {
        return this.f55604a;
    }

    @Override // zb.n
    public String g() {
        return this.f55605b;
    }

    public int hashCode() {
        return ((((((((this.f55604a.hashCode() ^ 1000003) * 1000003) ^ this.f55605b.hashCode()) * 1000003) ^ this.f55606c.hashCode()) * 1000003) ^ this.f55607d.hashCode()) * 1000003) ^ this.f55608e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f55604a + ", transportName=" + this.f55605b + ", event=" + this.f55606c + ", transformer=" + this.f55607d + ", encoding=" + this.f55608e + "}";
    }

    private c(o oVar, String str, xb.d dVar, xb.g gVar, xb.c cVar) {
        this.f55604a = oVar;
        this.f55605b = str;
        this.f55606c = dVar;
        this.f55607d = gVar;
        this.f55608e = cVar;
    }
}
