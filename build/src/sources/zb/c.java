package zb;

import zb.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f55456a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55457b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.d f55458c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55459d;

    /* renamed from: e  reason: collision with root package name */
    private final xb.c f55460e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f55461a;

        /* renamed from: b  reason: collision with root package name */
        private String f55462b;

        /* renamed from: c  reason: collision with root package name */
        private xb.d f55463c;

        /* renamed from: d  reason: collision with root package name */
        private xb.g f55464d;

        /* renamed from: e  reason: collision with root package name */
        private xb.c f55465e;

        @Override // zb.n.a
        public n a() {
            String str = "";
            if (this.f55461a == null) {
                str = " transportContext";
            }
            if (this.f55462b == null) {
                str = str + " transportName";
            }
            if (this.f55463c == null) {
                str = str + " event";
            }
            if (this.f55464d == null) {
                str = str + " transformer";
            }
            if (this.f55465e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f55461a, this.f55462b, this.f55463c, this.f55464d, this.f55465e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // zb.n.a
        n.a b(xb.c cVar) {
            if (cVar != null) {
                this.f55465e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // zb.n.a
        n.a c(xb.d dVar) {
            if (dVar != null) {
                this.f55463c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // zb.n.a
        n.a d(xb.g gVar) {
            if (gVar != null) {
                this.f55464d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // zb.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f55461a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // zb.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f55462b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // zb.n
    public xb.c b() {
        return this.f55460e;
    }

    @Override // zb.n
    xb.d c() {
        return this.f55458c;
    }

    @Override // zb.n
    xb.g e() {
        return this.f55459d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f55456a.equals(nVar.f()) && this.f55457b.equals(nVar.g()) && this.f55458c.equals(nVar.c()) && this.f55459d.equals(nVar.e()) && this.f55460e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // zb.n
    public o f() {
        return this.f55456a;
    }

    @Override // zb.n
    public String g() {
        return this.f55457b;
    }

    public int hashCode() {
        return ((((((((this.f55456a.hashCode() ^ 1000003) * 1000003) ^ this.f55457b.hashCode()) * 1000003) ^ this.f55458c.hashCode()) * 1000003) ^ this.f55459d.hashCode()) * 1000003) ^ this.f55460e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f55456a + ", transportName=" + this.f55457b + ", event=" + this.f55458c + ", transformer=" + this.f55459d + ", encoding=" + this.f55460e + "}";
    }

    private c(o oVar, String str, xb.d dVar, xb.g gVar, xb.c cVar) {
        this.f55456a = oVar;
        this.f55457b = str;
        this.f55458c = dVar;
        this.f55459d = gVar;
        this.f55460e = cVar;
    }
}
