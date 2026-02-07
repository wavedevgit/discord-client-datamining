package zb;

import zb.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f56107a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56108b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.d f56109c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f56110d;

    /* renamed from: e  reason: collision with root package name */
    private final xb.c f56111e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f56112a;

        /* renamed from: b  reason: collision with root package name */
        private String f56113b;

        /* renamed from: c  reason: collision with root package name */
        private xb.d f56114c;

        /* renamed from: d  reason: collision with root package name */
        private xb.g f56115d;

        /* renamed from: e  reason: collision with root package name */
        private xb.c f56116e;

        @Override // zb.n.a
        public n a() {
            String str = "";
            if (this.f56112a == null) {
                str = " transportContext";
            }
            if (this.f56113b == null) {
                str = str + " transportName";
            }
            if (this.f56114c == null) {
                str = str + " event";
            }
            if (this.f56115d == null) {
                str = str + " transformer";
            }
            if (this.f56116e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f56112a, this.f56113b, this.f56114c, this.f56115d, this.f56116e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.n.a
        n.a b(xb.c cVar) {
            if (cVar != null) {
                this.f56116e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // zb.n.a
        n.a c(xb.d dVar) {
            if (dVar != null) {
                this.f56114c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // zb.n.a
        n.a d(xb.g gVar) {
            if (gVar != null) {
                this.f56115d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // zb.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f56112a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // zb.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f56113b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // zb.n
    public xb.c b() {
        return this.f56111e;
    }

    @Override // zb.n
    xb.d c() {
        return this.f56109c;
    }

    @Override // zb.n
    xb.g e() {
        return this.f56110d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f56107a.equals(nVar.f()) && this.f56108b.equals(nVar.g()) && this.f56109c.equals(nVar.c()) && this.f56110d.equals(nVar.e()) && this.f56111e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.n
    public o f() {
        return this.f56107a;
    }

    @Override // zb.n
    public String g() {
        return this.f56108b;
    }

    public int hashCode() {
        return ((((((((this.f56107a.hashCode() ^ 1000003) * 1000003) ^ this.f56108b.hashCode()) * 1000003) ^ this.f56109c.hashCode()) * 1000003) ^ this.f56110d.hashCode()) * 1000003) ^ this.f56111e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f56107a + ", transportName=" + this.f56108b + ", event=" + this.f56109c + ", transformer=" + this.f56110d + ", encoding=" + this.f56111e + "}";
    }

    private c(o oVar, String str, xb.d dVar, xb.g gVar, xb.c cVar) {
        this.f56107a = oVar;
        this.f56108b = str;
        this.f56109c = dVar;
        this.f56110d = gVar;
        this.f56111e = cVar;
    }
}
