package hj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f27548p = new C0352a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f27549a;

    /* renamed from: b  reason: collision with root package name */
    private final String f27550b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27551c;

    /* renamed from: d  reason: collision with root package name */
    private final c f27552d;

    /* renamed from: e  reason: collision with root package name */
    private final d f27553e;

    /* renamed from: f  reason: collision with root package name */
    private final String f27554f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27555g;

    /* renamed from: h  reason: collision with root package name */
    private final int f27556h;

    /* renamed from: i  reason: collision with root package name */
    private final int f27557i;

    /* renamed from: j  reason: collision with root package name */
    private final String f27558j;

    /* renamed from: k  reason: collision with root package name */
    private final long f27559k;

    /* renamed from: l  reason: collision with root package name */
    private final b f27560l;

    /* renamed from: m  reason: collision with root package name */
    private final String f27561m;

    /* renamed from: n  reason: collision with root package name */
    private final long f27562n;

    /* renamed from: o  reason: collision with root package name */
    private final String f27563o;

    /* renamed from: hj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0352a {

        /* renamed from: a  reason: collision with root package name */
        private long f27564a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f27565b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f27566c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f27567d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f27568e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f27569f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f27570g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f27571h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f27572i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f27573j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f27574k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f27575l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f27576m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f27577n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f27578o = "";

        C0352a() {
        }

        public a a() {
            return new a(this.f27564a, this.f27565b, this.f27566c, this.f27567d, this.f27568e, this.f27569f, this.f27570g, this.f27571h, this.f27572i, this.f27573j, this.f27574k, this.f27575l, this.f27576m, this.f27577n, this.f27578o);
        }

        public C0352a b(String str) {
            this.f27576m = str;
            return this;
        }

        public C0352a c(String str) {
            this.f27570g = str;
            return this;
        }

        public C0352a d(String str) {
            this.f27578o = str;
            return this;
        }

        public C0352a e(b bVar) {
            this.f27575l = bVar;
            return this;
        }

        public C0352a f(String str) {
            this.f27566c = str;
            return this;
        }

        public C0352a g(String str) {
            this.f27565b = str;
            return this;
        }

        public C0352a h(c cVar) {
            this.f27567d = cVar;
            return this;
        }

        public C0352a i(String str) {
            this.f27569f = str;
            return this;
        }

        public C0352a j(long j10) {
            this.f27564a = j10;
            return this;
        }

        public C0352a k(d dVar) {
            this.f27568e = dVar;
            return this;
        }

        public C0352a l(String str) {
            this.f27573j = str;
            return this;
        }

        public C0352a m(int i10) {
            this.f27572i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements xi.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27583d;

        b(int i10) {
            this.f27583d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27583d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements xi.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27589d;

        c(int i10) {
            this.f27589d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27589d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements xi.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27595d;

        d(int i10) {
            this.f27595d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27595d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f27549a = j10;
        this.f27550b = str;
        this.f27551c = str2;
        this.f27552d = cVar;
        this.f27553e = dVar;
        this.f27554f = str3;
        this.f27555g = str4;
        this.f27556h = i10;
        this.f27557i = i11;
        this.f27558j = str5;
        this.f27559k = j11;
        this.f27560l = bVar;
        this.f27561m = str6;
        this.f27562n = j12;
        this.f27563o = str7;
    }

    public static C0352a p() {
        return new C0352a();
    }

    public String a() {
        return this.f27561m;
    }

    public long b() {
        return this.f27559k;
    }

    public long c() {
        return this.f27562n;
    }

    public String d() {
        return this.f27555g;
    }

    public String e() {
        return this.f27563o;
    }

    public b f() {
        return this.f27560l;
    }

    public String g() {
        return this.f27551c;
    }

    public String h() {
        return this.f27550b;
    }

    public c i() {
        return this.f27552d;
    }

    public String j() {
        return this.f27554f;
    }

    public int k() {
        return this.f27556h;
    }

    public long l() {
        return this.f27549a;
    }

    public d m() {
        return this.f27553e;
    }

    public String n() {
        return this.f27558j;
    }

    public int o() {
        return this.f27557i;
    }
}
