package hj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f27532p = new C0352a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f27533a;

    /* renamed from: b  reason: collision with root package name */
    private final String f27534b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27535c;

    /* renamed from: d  reason: collision with root package name */
    private final c f27536d;

    /* renamed from: e  reason: collision with root package name */
    private final d f27537e;

    /* renamed from: f  reason: collision with root package name */
    private final String f27538f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27539g;

    /* renamed from: h  reason: collision with root package name */
    private final int f27540h;

    /* renamed from: i  reason: collision with root package name */
    private final int f27541i;

    /* renamed from: j  reason: collision with root package name */
    private final String f27542j;

    /* renamed from: k  reason: collision with root package name */
    private final long f27543k;

    /* renamed from: l  reason: collision with root package name */
    private final b f27544l;

    /* renamed from: m  reason: collision with root package name */
    private final String f27545m;

    /* renamed from: n  reason: collision with root package name */
    private final long f27546n;

    /* renamed from: o  reason: collision with root package name */
    private final String f27547o;

    /* renamed from: hj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0352a {

        /* renamed from: a  reason: collision with root package name */
        private long f27548a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f27549b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f27550c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f27551d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f27552e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f27553f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f27554g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f27555h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f27556i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f27557j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f27558k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f27559l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f27560m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f27561n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f27562o = "";

        C0352a() {
        }

        public a a() {
            return new a(this.f27548a, this.f27549b, this.f27550c, this.f27551d, this.f27552e, this.f27553f, this.f27554g, this.f27555h, this.f27556i, this.f27557j, this.f27558k, this.f27559l, this.f27560m, this.f27561n, this.f27562o);
        }

        public C0352a b(String str) {
            this.f27560m = str;
            return this;
        }

        public C0352a c(String str) {
            this.f27554g = str;
            return this;
        }

        public C0352a d(String str) {
            this.f27562o = str;
            return this;
        }

        public C0352a e(b bVar) {
            this.f27559l = bVar;
            return this;
        }

        public C0352a f(String str) {
            this.f27550c = str;
            return this;
        }

        public C0352a g(String str) {
            this.f27549b = str;
            return this;
        }

        public C0352a h(c cVar) {
            this.f27551d = cVar;
            return this;
        }

        public C0352a i(String str) {
            this.f27553f = str;
            return this;
        }

        public C0352a j(long j10) {
            this.f27548a = j10;
            return this;
        }

        public C0352a k(d dVar) {
            this.f27552e = dVar;
            return this;
        }

        public C0352a l(String str) {
            this.f27557j = str;
            return this;
        }

        public C0352a m(int i10) {
            this.f27556i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements xi.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27567d;

        b(int i10) {
            this.f27567d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27567d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements xi.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27573d;

        c(int i10) {
            this.f27573d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27573d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements xi.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27579d;

        d(int i10) {
            this.f27579d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27579d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f27533a = j10;
        this.f27534b = str;
        this.f27535c = str2;
        this.f27536d = cVar;
        this.f27537e = dVar;
        this.f27538f = str3;
        this.f27539g = str4;
        this.f27540h = i10;
        this.f27541i = i11;
        this.f27542j = str5;
        this.f27543k = j11;
        this.f27544l = bVar;
        this.f27545m = str6;
        this.f27546n = j12;
        this.f27547o = str7;
    }

    public static C0352a p() {
        return new C0352a();
    }

    public String a() {
        return this.f27545m;
    }

    public long b() {
        return this.f27543k;
    }

    public long c() {
        return this.f27546n;
    }

    public String d() {
        return this.f27539g;
    }

    public String e() {
        return this.f27547o;
    }

    public b f() {
        return this.f27544l;
    }

    public String g() {
        return this.f27535c;
    }

    public String h() {
        return this.f27534b;
    }

    public c i() {
        return this.f27536d;
    }

    public String j() {
        return this.f27538f;
    }

    public int k() {
        return this.f27540h;
    }

    public long l() {
        return this.f27533a;
    }

    public d m() {
        return this.f27537e;
    }

    public String n() {
        return this.f27542j;
    }

    public int o() {
        return this.f27541i;
    }
}
