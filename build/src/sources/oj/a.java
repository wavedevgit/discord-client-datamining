package oj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f40102p = new C0553a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f40103a;

    /* renamed from: b  reason: collision with root package name */
    private final String f40104b;

    /* renamed from: c  reason: collision with root package name */
    private final String f40105c;

    /* renamed from: d  reason: collision with root package name */
    private final c f40106d;

    /* renamed from: e  reason: collision with root package name */
    private final d f40107e;

    /* renamed from: f  reason: collision with root package name */
    private final String f40108f;

    /* renamed from: g  reason: collision with root package name */
    private final String f40109g;

    /* renamed from: h  reason: collision with root package name */
    private final int f40110h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40111i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40112j;

    /* renamed from: k  reason: collision with root package name */
    private final long f40113k;

    /* renamed from: l  reason: collision with root package name */
    private final b f40114l;

    /* renamed from: m  reason: collision with root package name */
    private final String f40115m;

    /* renamed from: n  reason: collision with root package name */
    private final long f40116n;

    /* renamed from: o  reason: collision with root package name */
    private final String f40117o;

    /* renamed from: oj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0553a {

        /* renamed from: a  reason: collision with root package name */
        private long f40118a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f40119b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f40120c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f40121d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f40122e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f40123f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f40124g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f40125h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f40126i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f40127j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f40128k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f40129l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f40130m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f40131n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f40132o = "";

        C0553a() {
        }

        public a a() {
            return new a(this.f40118a, this.f40119b, this.f40120c, this.f40121d, this.f40122e, this.f40123f, this.f40124g, this.f40125h, this.f40126i, this.f40127j, this.f40128k, this.f40129l, this.f40130m, this.f40131n, this.f40132o);
        }

        public C0553a b(String str) {
            this.f40130m = str;
            return this;
        }

        public C0553a c(String str) {
            this.f40124g = str;
            return this;
        }

        public C0553a d(String str) {
            this.f40132o = str;
            return this;
        }

        public C0553a e(b bVar) {
            this.f40129l = bVar;
            return this;
        }

        public C0553a f(String str) {
            this.f40120c = str;
            return this;
        }

        public C0553a g(String str) {
            this.f40119b = str;
            return this;
        }

        public C0553a h(c cVar) {
            this.f40121d = cVar;
            return this;
        }

        public C0553a i(String str) {
            this.f40123f = str;
            return this;
        }

        public C0553a j(long j10) {
            this.f40118a = j10;
            return this;
        }

        public C0553a k(d dVar) {
            this.f40122e = dVar;
            return this;
        }

        public C0553a l(String str) {
            this.f40127j = str;
            return this;
        }

        public C0553a m(int i10) {
            this.f40126i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements ej.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40137d;

        b(int i10) {
            this.f40137d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40137d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements ej.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40143d;

        c(int i10) {
            this.f40143d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40143d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements ej.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40149d;

        d(int i10) {
            this.f40149d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40149d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f40103a = j10;
        this.f40104b = str;
        this.f40105c = str2;
        this.f40106d = cVar;
        this.f40107e = dVar;
        this.f40108f = str3;
        this.f40109g = str4;
        this.f40110h = i10;
        this.f40111i = i11;
        this.f40112j = str5;
        this.f40113k = j11;
        this.f40114l = bVar;
        this.f40115m = str6;
        this.f40116n = j12;
        this.f40117o = str7;
    }

    public static C0553a p() {
        return new C0553a();
    }

    public String a() {
        return this.f40115m;
    }

    public long b() {
        return this.f40113k;
    }

    public long c() {
        return this.f40116n;
    }

    public String d() {
        return this.f40109g;
    }

    public String e() {
        return this.f40117o;
    }

    public b f() {
        return this.f40114l;
    }

    public String g() {
        return this.f40105c;
    }

    public String h() {
        return this.f40104b;
    }

    public c i() {
        return this.f40106d;
    }

    public String j() {
        return this.f40108f;
    }

    public int k() {
        return this.f40110h;
    }

    public long l() {
        return this.f40103a;
    }

    public d m() {
        return this.f40107e;
    }

    public String n() {
        return this.f40112j;
    }

    public int o() {
        return this.f40111i;
    }
}
