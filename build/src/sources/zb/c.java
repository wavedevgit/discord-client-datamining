package zb;

import zb.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f55472a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55473b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.d f55474c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55475d;

    /* renamed from: e  reason: collision with root package name */
    private final xb.c f55476e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f55477a;

        /* renamed from: b  reason: collision with root package name */
        private String f55478b;

        /* renamed from: c  reason: collision with root package name */
        private xb.d f55479c;

        /* renamed from: d  reason: collision with root package name */
        private xb.g f55480d;

        /* renamed from: e  reason: collision with root package name */
        private xb.c f55481e;

        @Override // zb.n.a
        public n a() {
            String str = "";
            if (this.f55477a == null) {
                str = " transportContext";
            }
            if (this.f55478b == null) {
                str = str + " transportName";
            }
            if (this.f55479c == null) {
                str = str + " event";
            }
            if (this.f55480d == null) {
                str = str + " transformer";
            }
            if (this.f55481e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f55477a, this.f55478b, this.f55479c, this.f55480d, this.f55481e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.n.a
        n.a b(xb.c cVar) {
            if (cVar != null) {
                this.f55481e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // zb.n.a
        n.a c(xb.d dVar) {
            if (dVar != null) {
                this.f55479c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // zb.n.a
        n.a d(xb.g gVar) {
            if (gVar != null) {
                this.f55480d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // zb.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f55477a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // zb.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f55478b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // zb.n
    public xb.c b() {
        return this.f55476e;
    }

    @Override // zb.n
    xb.d c() {
        return this.f55474c;
    }

    @Override // zb.n
    xb.g e() {
        return this.f55475d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f55472a.equals(nVar.f()) && this.f55473b.equals(nVar.g()) && this.f55474c.equals(nVar.c()) && this.f55475d.equals(nVar.e()) && this.f55476e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.n
    public o f() {
        return this.f55472a;
    }

    @Override // zb.n
    public String g() {
        return this.f55473b;
    }

    public int hashCode() {
        return ((((((((this.f55472a.hashCode() ^ 1000003) * 1000003) ^ this.f55473b.hashCode()) * 1000003) ^ this.f55474c.hashCode()) * 1000003) ^ this.f55475d.hashCode()) * 1000003) ^ this.f55476e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f55472a + ", transportName=" + this.f55473b + ", event=" + this.f55474c + ", transformer=" + this.f55475d + ", encoding=" + this.f55476e + "}";
    }

    private c(o oVar, String str, xb.d dVar, xb.g gVar, xb.c cVar) {
        this.f55472a = oVar;
        this.f55473b = str;
        this.f55474c = dVar;
        this.f55475d = gVar;
        this.f55476e = cVar;
    }
}
