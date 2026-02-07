package lj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f36299p = new C0485a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f36300a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36301b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36302c;

    /* renamed from: d  reason: collision with root package name */
    private final c f36303d;

    /* renamed from: e  reason: collision with root package name */
    private final d f36304e;

    /* renamed from: f  reason: collision with root package name */
    private final String f36305f;

    /* renamed from: g  reason: collision with root package name */
    private final String f36306g;

    /* renamed from: h  reason: collision with root package name */
    private final int f36307h;

    /* renamed from: i  reason: collision with root package name */
    private final int f36308i;

    /* renamed from: j  reason: collision with root package name */
    private final String f36309j;

    /* renamed from: k  reason: collision with root package name */
    private final long f36310k;

    /* renamed from: l  reason: collision with root package name */
    private final b f36311l;

    /* renamed from: m  reason: collision with root package name */
    private final String f36312m;

    /* renamed from: n  reason: collision with root package name */
    private final long f36313n;

    /* renamed from: o  reason: collision with root package name */
    private final String f36314o;

    /* renamed from: lj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0485a {

        /* renamed from: a  reason: collision with root package name */
        private long f36315a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f36316b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f36317c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f36318d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f36319e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f36320f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f36321g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f36322h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f36323i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f36324j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f36325k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f36326l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f36327m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f36328n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f36329o = "";

        C0485a() {
        }

        public a a() {
            return new a(this.f36315a, this.f36316b, this.f36317c, this.f36318d, this.f36319e, this.f36320f, this.f36321g, this.f36322h, this.f36323i, this.f36324j, this.f36325k, this.f36326l, this.f36327m, this.f36328n, this.f36329o);
        }

        public C0485a b(String str) {
            this.f36327m = str;
            return this;
        }

        public C0485a c(String str) {
            this.f36321g = str;
            return this;
        }

        public C0485a d(String str) {
            this.f36329o = str;
            return this;
        }

        public C0485a e(b bVar) {
            this.f36326l = bVar;
            return this;
        }

        public C0485a f(String str) {
            this.f36317c = str;
            return this;
        }

        public C0485a g(String str) {
            this.f36316b = str;
            return this;
        }

        public C0485a h(c cVar) {
            this.f36318d = cVar;
            return this;
        }

        public C0485a i(String str) {
            this.f36320f = str;
            return this;
        }

        public C0485a j(long j10) {
            this.f36315a = j10;
            return this;
        }

        public C0485a k(d dVar) {
            this.f36319e = dVar;
            return this;
        }

        public C0485a l(String str) {
            this.f36324j = str;
            return this;
        }

        public C0485a m(int i10) {
            this.f36323i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements bj.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f36334d;

        b(int i10) {
            this.f36334d = i10;
        }

        @Override // bj.c
        public int getNumber() {
            return this.f36334d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements bj.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f36340d;

        c(int i10) {
            this.f36340d = i10;
        }

        @Override // bj.c
        public int getNumber() {
            return this.f36340d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements bj.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f36346d;

        d(int i10) {
            this.f36346d = i10;
        }

        @Override // bj.c
        public int getNumber() {
            return this.f36346d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f36300a = j10;
        this.f36301b = str;
        this.f36302c = str2;
        this.f36303d = cVar;
        this.f36304e = dVar;
        this.f36305f = str3;
        this.f36306g = str4;
        this.f36307h = i10;
        this.f36308i = i11;
        this.f36309j = str5;
        this.f36310k = j11;
        this.f36311l = bVar;
        this.f36312m = str6;
        this.f36313n = j12;
        this.f36314o = str7;
    }

    public static C0485a p() {
        return new C0485a();
    }

    public String a() {
        return this.f36312m;
    }

    public long b() {
        return this.f36310k;
    }

    public long c() {
        return this.f36313n;
    }

    public String d() {
        return this.f36306g;
    }

    public String e() {
        return this.f36314o;
    }

    public b f() {
        return this.f36311l;
    }

    public String g() {
        return this.f36302c;
    }

    public String h() {
        return this.f36301b;
    }

    public c i() {
        return this.f36303d;
    }

    public String j() {
        return this.f36305f;
    }

    public int k() {
        return this.f36307h;
    }

    public long l() {
        return this.f36300a;
    }

    public d m() {
        return this.f36304e;
    }

    public String n() {
        return this.f36309j;
    }

    public int o() {
        return this.f36308i;
    }
}
