package zb;

import zb.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f55739a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55740b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.d f55741c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55742d;

    /* renamed from: e  reason: collision with root package name */
    private final xb.c f55743e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f55744a;

        /* renamed from: b  reason: collision with root package name */
        private String f55745b;

        /* renamed from: c  reason: collision with root package name */
        private xb.d f55746c;

        /* renamed from: d  reason: collision with root package name */
        private xb.g f55747d;

        /* renamed from: e  reason: collision with root package name */
        private xb.c f55748e;

        @Override // zb.n.a
        public n a() {
            String str = "";
            if (this.f55744a == null) {
                str = " transportContext";
            }
            if (this.f55745b == null) {
                str = str + " transportName";
            }
            if (this.f55746c == null) {
                str = str + " event";
            }
            if (this.f55747d == null) {
                str = str + " transformer";
            }
            if (this.f55748e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f55744a, this.f55745b, this.f55746c, this.f55747d, this.f55748e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.n.a
        n.a b(xb.c cVar) {
            if (cVar != null) {
                this.f55748e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // zb.n.a
        n.a c(xb.d dVar) {
            if (dVar != null) {
                this.f55746c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // zb.n.a
        n.a d(xb.g gVar) {
            if (gVar != null) {
                this.f55747d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // zb.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f55744a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // zb.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f55745b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // zb.n
    public xb.c b() {
        return this.f55743e;
    }

    @Override // zb.n
    xb.d c() {
        return this.f55741c;
    }

    @Override // zb.n
    xb.g e() {
        return this.f55742d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f55739a.equals(nVar.f()) && this.f55740b.equals(nVar.g()) && this.f55741c.equals(nVar.c()) && this.f55742d.equals(nVar.e()) && this.f55743e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.n
    public o f() {
        return this.f55739a;
    }

    @Override // zb.n
    public String g() {
        return this.f55740b;
    }

    public int hashCode() {
        return ((((((((this.f55739a.hashCode() ^ 1000003) * 1000003) ^ this.f55740b.hashCode()) * 1000003) ^ this.f55741c.hashCode()) * 1000003) ^ this.f55742d.hashCode()) * 1000003) ^ this.f55743e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f55739a + ", transportName=" + this.f55740b + ", event=" + this.f55741c + ", transformer=" + this.f55742d + ", encoding=" + this.f55743e + "}";
    }

    private c(o oVar, String str, xb.d dVar, xb.g gVar, xb.c cVar) {
        this.f55739a = oVar;
        this.f55740b = str;
        this.f55741c = dVar;
        this.f55742d = gVar;
        this.f55743e = cVar;
    }
}
