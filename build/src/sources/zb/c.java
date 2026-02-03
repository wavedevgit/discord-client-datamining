package zb;

import zb.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f55742a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55743b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.d f55744c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55745d;

    /* renamed from: e  reason: collision with root package name */
    private final xb.c f55746e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f55747a;

        /* renamed from: b  reason: collision with root package name */
        private String f55748b;

        /* renamed from: c  reason: collision with root package name */
        private xb.d f55749c;

        /* renamed from: d  reason: collision with root package name */
        private xb.g f55750d;

        /* renamed from: e  reason: collision with root package name */
        private xb.c f55751e;

        @Override // zb.n.a
        public n a() {
            String str = "";
            if (this.f55747a == null) {
                str = " transportContext";
            }
            if (this.f55748b == null) {
                str = str + " transportName";
            }
            if (this.f55749c == null) {
                str = str + " event";
            }
            if (this.f55750d == null) {
                str = str + " transformer";
            }
            if (this.f55751e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f55747a, this.f55748b, this.f55749c, this.f55750d, this.f55751e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.n.a
        n.a b(xb.c cVar) {
            if (cVar != null) {
                this.f55751e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // zb.n.a
        n.a c(xb.d dVar) {
            if (dVar != null) {
                this.f55749c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // zb.n.a
        n.a d(xb.g gVar) {
            if (gVar != null) {
                this.f55750d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // zb.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f55747a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // zb.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f55748b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // zb.n
    public xb.c b() {
        return this.f55746e;
    }

    @Override // zb.n
    xb.d c() {
        return this.f55744c;
    }

    @Override // zb.n
    xb.g e() {
        return this.f55745d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f55742a.equals(nVar.f()) && this.f55743b.equals(nVar.g()) && this.f55744c.equals(nVar.c()) && this.f55745d.equals(nVar.e()) && this.f55746e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.n
    public o f() {
        return this.f55742a;
    }

    @Override // zb.n
    public String g() {
        return this.f55743b;
    }

    public int hashCode() {
        return ((((((((this.f55742a.hashCode() ^ 1000003) * 1000003) ^ this.f55743b.hashCode()) * 1000003) ^ this.f55744c.hashCode()) * 1000003) ^ this.f55745d.hashCode()) * 1000003) ^ this.f55746e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f55742a + ", transportName=" + this.f55743b + ", event=" + this.f55744c + ", transformer=" + this.f55745d + ", encoding=" + this.f55746e + "}";
    }

    private c(o oVar, String str, xb.d dVar, xb.g gVar, xb.c cVar) {
        this.f55742a = oVar;
        this.f55743b = str;
        this.f55744c = dVar;
        this.f55745d = gVar;
        this.f55746e = cVar;
    }
}
