package kj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f31858p = new C0438a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f31859a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31860b;

    /* renamed from: c  reason: collision with root package name */
    private final String f31861c;

    /* renamed from: d  reason: collision with root package name */
    private final c f31862d;

    /* renamed from: e  reason: collision with root package name */
    private final d f31863e;

    /* renamed from: f  reason: collision with root package name */
    private final String f31864f;

    /* renamed from: g  reason: collision with root package name */
    private final String f31865g;

    /* renamed from: h  reason: collision with root package name */
    private final int f31866h;

    /* renamed from: i  reason: collision with root package name */
    private final int f31867i;

    /* renamed from: j  reason: collision with root package name */
    private final String f31868j;

    /* renamed from: k  reason: collision with root package name */
    private final long f31869k;

    /* renamed from: l  reason: collision with root package name */
    private final b f31870l;

    /* renamed from: m  reason: collision with root package name */
    private final String f31871m;

    /* renamed from: n  reason: collision with root package name */
    private final long f31872n;

    /* renamed from: o  reason: collision with root package name */
    private final String f31873o;

    /* renamed from: kj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0438a {

        /* renamed from: a  reason: collision with root package name */
        private long f31874a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f31875b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f31876c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f31877d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f31878e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f31879f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f31880g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f31881h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f31882i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f31883j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f31884k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f31885l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f31886m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f31887n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f31888o = "";

        C0438a() {
        }

        public a a() {
            return new a(this.f31874a, this.f31875b, this.f31876c, this.f31877d, this.f31878e, this.f31879f, this.f31880g, this.f31881h, this.f31882i, this.f31883j, this.f31884k, this.f31885l, this.f31886m, this.f31887n, this.f31888o);
        }

        public C0438a b(String str) {
            this.f31886m = str;
            return this;
        }

        public C0438a c(String str) {
            this.f31880g = str;
            return this;
        }

        public C0438a d(String str) {
            this.f31888o = str;
            return this;
        }

        public C0438a e(b bVar) {
            this.f31885l = bVar;
            return this;
        }

        public C0438a f(String str) {
            this.f31876c = str;
            return this;
        }

        public C0438a g(String str) {
            this.f31875b = str;
            return this;
        }

        public C0438a h(c cVar) {
            this.f31877d = cVar;
            return this;
        }

        public C0438a i(String str) {
            this.f31879f = str;
            return this;
        }

        public C0438a j(long j10) {
            this.f31874a = j10;
            return this;
        }

        public C0438a k(d dVar) {
            this.f31878e = dVar;
            return this;
        }

        public C0438a l(String str) {
            this.f31883j = str;
            return this;
        }

        public C0438a m(int i10) {
            this.f31882i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements aj.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f31893d;

        b(int i10) {
            this.f31893d = i10;
        }

        @Override // aj.c
        public int getNumber() {
            return this.f31893d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements aj.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f31899d;

        c(int i10) {
            this.f31899d = i10;
        }

        @Override // aj.c
        public int getNumber() {
            return this.f31899d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements aj.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f31905d;

        d(int i10) {
            this.f31905d = i10;
        }

        @Override // aj.c
        public int getNumber() {
            return this.f31905d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f31859a = j10;
        this.f31860b = str;
        this.f31861c = str2;
        this.f31862d = cVar;
        this.f31863e = dVar;
        this.f31864f = str3;
        this.f31865g = str4;
        this.f31866h = i10;
        this.f31867i = i11;
        this.f31868j = str5;
        this.f31869k = j11;
        this.f31870l = bVar;
        this.f31871m = str6;
        this.f31872n = j12;
        this.f31873o = str7;
    }

    public static C0438a p() {
        return new C0438a();
    }

    public String a() {
        return this.f31871m;
    }

    public long b() {
        return this.f31869k;
    }

    public long c() {
        return this.f31872n;
    }

    public String d() {
        return this.f31865g;
    }

    public String e() {
        return this.f31873o;
    }

    public b f() {
        return this.f31870l;
    }

    public String g() {
        return this.f31861c;
    }

    public String h() {
        return this.f31860b;
    }

    public c i() {
        return this.f31862d;
    }

    public String j() {
        return this.f31864f;
    }

    public int k() {
        return this.f31866h;
    }

    public long l() {
        return this.f31859a;
    }

    public d m() {
        return this.f31863e;
    }

    public String n() {
        return this.f31868j;
    }

    public int o() {
        return this.f31867i;
    }
}
