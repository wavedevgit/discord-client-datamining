package lj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f36251p = new C0485a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f36252a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36253b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36254c;

    /* renamed from: d  reason: collision with root package name */
    private final c f36255d;

    /* renamed from: e  reason: collision with root package name */
    private final d f36256e;

    /* renamed from: f  reason: collision with root package name */
    private final String f36257f;

    /* renamed from: g  reason: collision with root package name */
    private final String f36258g;

    /* renamed from: h  reason: collision with root package name */
    private final int f36259h;

    /* renamed from: i  reason: collision with root package name */
    private final int f36260i;

    /* renamed from: j  reason: collision with root package name */
    private final String f36261j;

    /* renamed from: k  reason: collision with root package name */
    private final long f36262k;

    /* renamed from: l  reason: collision with root package name */
    private final b f36263l;

    /* renamed from: m  reason: collision with root package name */
    private final String f36264m;

    /* renamed from: n  reason: collision with root package name */
    private final long f36265n;

    /* renamed from: o  reason: collision with root package name */
    private final String f36266o;

    /* renamed from: lj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0485a {

        /* renamed from: a  reason: collision with root package name */
        private long f36267a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f36268b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f36269c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f36270d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f36271e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f36272f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f36273g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f36274h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f36275i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f36276j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f36277k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f36278l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f36279m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f36280n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f36281o = "";

        C0485a() {
        }

        public a a() {
            return new a(this.f36267a, this.f36268b, this.f36269c, this.f36270d, this.f36271e, this.f36272f, this.f36273g, this.f36274h, this.f36275i, this.f36276j, this.f36277k, this.f36278l, this.f36279m, this.f36280n, this.f36281o);
        }

        public C0485a b(String str) {
            this.f36279m = str;
            return this;
        }

        public C0485a c(String str) {
            this.f36273g = str;
            return this;
        }

        public C0485a d(String str) {
            this.f36281o = str;
            return this;
        }

        public C0485a e(b bVar) {
            this.f36278l = bVar;
            return this;
        }

        public C0485a f(String str) {
            this.f36269c = str;
            return this;
        }

        public C0485a g(String str) {
            this.f36268b = str;
            return this;
        }

        public C0485a h(c cVar) {
            this.f36270d = cVar;
            return this;
        }

        public C0485a i(String str) {
            this.f36272f = str;
            return this;
        }

        public C0485a j(long j10) {
            this.f36267a = j10;
            return this;
        }

        public C0485a k(d dVar) {
            this.f36271e = dVar;
            return this;
        }

        public C0485a l(String str) {
            this.f36276j = str;
            return this;
        }

        public C0485a m(int i10) {
            this.f36275i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements bj.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f36286d;

        b(int i10) {
            this.f36286d = i10;
        }

        @Override // bj.c
        public int getNumber() {
            return this.f36286d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements bj.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f36292d;

        c(int i10) {
            this.f36292d = i10;
        }

        @Override // bj.c
        public int getNumber() {
            return this.f36292d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements bj.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f36298d;

        d(int i10) {
            this.f36298d = i10;
        }

        @Override // bj.c
        public int getNumber() {
            return this.f36298d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f36252a = j10;
        this.f36253b = str;
        this.f36254c = str2;
        this.f36255d = cVar;
        this.f36256e = dVar;
        this.f36257f = str3;
        this.f36258g = str4;
        this.f36259h = i10;
        this.f36260i = i11;
        this.f36261j = str5;
        this.f36262k = j11;
        this.f36263l = bVar;
        this.f36264m = str6;
        this.f36265n = j12;
        this.f36266o = str7;
    }

    public static C0485a p() {
        return new C0485a();
    }

    public String a() {
        return this.f36264m;
    }

    public long b() {
        return this.f36262k;
    }

    public long c() {
        return this.f36265n;
    }

    public String d() {
        return this.f36258g;
    }

    public String e() {
        return this.f36266o;
    }

    public b f() {
        return this.f36263l;
    }

    public String g() {
        return this.f36254c;
    }

    public String h() {
        return this.f36253b;
    }

    public c i() {
        return this.f36255d;
    }

    public String j() {
        return this.f36257f;
    }

    public int k() {
        return this.f36259h;
    }

    public long l() {
        return this.f36252a;
    }

    public d m() {
        return this.f36256e;
    }

    public String n() {
        return this.f36261j;
    }

    public int o() {
        return this.f36260i;
    }
}
