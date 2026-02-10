package ac;

import ac.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends n {

    /* renamed from: a  reason: collision with root package name */
    private final o f575a;

    /* renamed from: b  reason: collision with root package name */
    private final String f576b;

    /* renamed from: c  reason: collision with root package name */
    private final yb.d f577c;

    /* renamed from: d  reason: collision with root package name */
    private final yb.g f578d;

    /* renamed from: e  reason: collision with root package name */
    private final yb.c f579e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends n.a {

        /* renamed from: a  reason: collision with root package name */
        private o f580a;

        /* renamed from: b  reason: collision with root package name */
        private String f581b;

        /* renamed from: c  reason: collision with root package name */
        private yb.d f582c;

        /* renamed from: d  reason: collision with root package name */
        private yb.g f583d;

        /* renamed from: e  reason: collision with root package name */
        private yb.c f584e;

        @Override // ac.n.a
        public n a() {
            String str = "";
            if (this.f580a == null) {
                str = " transportContext";
            }
            if (this.f581b == null) {
                str = str + " transportName";
            }
            if (this.f582c == null) {
                str = str + " event";
            }
            if (this.f583d == null) {
                str = str + " transformer";
            }
            if (this.f584e == null) {
                str = str + " encoding";
            }
            if (str.isEmpty()) {
                return new c(this.f580a, this.f581b, this.f582c, this.f583d, this.f584e);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ac.n.a
        n.a b(yb.c cVar) {
            if (cVar != null) {
                this.f584e = cVar;
                return this;
            }
            throw new NullPointerException("Null encoding");
        }

        @Override // ac.n.a
        n.a c(yb.d dVar) {
            if (dVar != null) {
                this.f582c = dVar;
                return this;
            }
            throw new NullPointerException("Null event");
        }

        @Override // ac.n.a
        n.a d(yb.g gVar) {
            if (gVar != null) {
                this.f583d = gVar;
                return this;
            }
            throw new NullPointerException("Null transformer");
        }

        @Override // ac.n.a
        public n.a e(o oVar) {
            if (oVar != null) {
                this.f580a = oVar;
                return this;
            }
            throw new NullPointerException("Null transportContext");
        }

        @Override // ac.n.a
        public n.a f(String str) {
            if (str != null) {
                this.f581b = str;
                return this;
            }
            throw new NullPointerException("Null transportName");
        }
    }

    @Override // ac.n
    public yb.c b() {
        return this.f579e;
    }

    @Override // ac.n
    yb.d c() {
        return this.f577c;
    }

    @Override // ac.n
    yb.g e() {
        return this.f578d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof n) {
            n nVar = (n) obj;
            if (this.f575a.equals(nVar.f()) && this.f576b.equals(nVar.g()) && this.f577c.equals(nVar.c()) && this.f578d.equals(nVar.e()) && this.f579e.equals(nVar.b())) {
                return true;
            }
        }
        return false;
    }

    @Override // ac.n
    public o f() {
        return this.f575a;
    }

    @Override // ac.n
    public String g() {
        return this.f576b;
    }

    public int hashCode() {
        return ((((((((this.f575a.hashCode() ^ 1000003) * 1000003) ^ this.f576b.hashCode()) * 1000003) ^ this.f577c.hashCode()) * 1000003) ^ this.f578d.hashCode()) * 1000003) ^ this.f579e.hashCode();
    }

    public String toString() {
        return "SendRequest{transportContext=" + this.f575a + ", transportName=" + this.f576b + ", event=" + this.f577c + ", transformer=" + this.f578d + ", encoding=" + this.f579e + "}";
    }

    private c(o oVar, String str, yb.d dVar, yb.g gVar, yb.c cVar) {
        this.f575a = oVar;
        this.f576b = str;
        this.f577c = dVar;
        this.f578d = gVar;
        this.f579e = cVar;
    }
}
