package oj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f40103p = new C0553a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f40104a;

    /* renamed from: b  reason: collision with root package name */
    private final String f40105b;

    /* renamed from: c  reason: collision with root package name */
    private final String f40106c;

    /* renamed from: d  reason: collision with root package name */
    private final c f40107d;

    /* renamed from: e  reason: collision with root package name */
    private final d f40108e;

    /* renamed from: f  reason: collision with root package name */
    private final String f40109f;

    /* renamed from: g  reason: collision with root package name */
    private final String f40110g;

    /* renamed from: h  reason: collision with root package name */
    private final int f40111h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40112i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40113j;

    /* renamed from: k  reason: collision with root package name */
    private final long f40114k;

    /* renamed from: l  reason: collision with root package name */
    private final b f40115l;

    /* renamed from: m  reason: collision with root package name */
    private final String f40116m;

    /* renamed from: n  reason: collision with root package name */
    private final long f40117n;

    /* renamed from: o  reason: collision with root package name */
    private final String f40118o;

    /* renamed from: oj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0553a {

        /* renamed from: a  reason: collision with root package name */
        private long f40119a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f40120b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f40121c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f40122d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f40123e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f40124f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f40125g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f40126h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f40127i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f40128j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f40129k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f40130l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f40131m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f40132n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f40133o = "";

        C0553a() {
        }

        public a a() {
            return new a(this.f40119a, this.f40120b, this.f40121c, this.f40122d, this.f40123e, this.f40124f, this.f40125g, this.f40126h, this.f40127i, this.f40128j, this.f40129k, this.f40130l, this.f40131m, this.f40132n, this.f40133o);
        }

        public C0553a b(String str) {
            this.f40131m = str;
            return this;
        }

        public C0553a c(String str) {
            this.f40125g = str;
            return this;
        }

        public C0553a d(String str) {
            this.f40133o = str;
            return this;
        }

        public C0553a e(b bVar) {
            this.f40130l = bVar;
            return this;
        }

        public C0553a f(String str) {
            this.f40121c = str;
            return this;
        }

        public C0553a g(String str) {
            this.f40120b = str;
            return this;
        }

        public C0553a h(c cVar) {
            this.f40122d = cVar;
            return this;
        }

        public C0553a i(String str) {
            this.f40124f = str;
            return this;
        }

        public C0553a j(long j10) {
            this.f40119a = j10;
            return this;
        }

        public C0553a k(d dVar) {
            this.f40123e = dVar;
            return this;
        }

        public C0553a l(String str) {
            this.f40128j = str;
            return this;
        }

        public C0553a m(int i10) {
            this.f40127i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements ej.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40138d;

        b(int i10) {
            this.f40138d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40138d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements ej.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40144d;

        c(int i10) {
            this.f40144d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40144d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements ej.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40150d;

        d(int i10) {
            this.f40150d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40150d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f40104a = j10;
        this.f40105b = str;
        this.f40106c = str2;
        this.f40107d = cVar;
        this.f40108e = dVar;
        this.f40109f = str3;
        this.f40110g = str4;
        this.f40111h = i10;
        this.f40112i = i11;
        this.f40113j = str5;
        this.f40114k = j11;
        this.f40115l = bVar;
        this.f40116m = str6;
        this.f40117n = j12;
        this.f40118o = str7;
    }

    public static C0553a p() {
        return new C0553a();
    }

    public String a() {
        return this.f40116m;
    }

    public long b() {
        return this.f40114k;
    }

    public long c() {
        return this.f40117n;
    }

    public String d() {
        return this.f40110g;
    }

    public String e() {
        return this.f40118o;
    }

    public b f() {
        return this.f40115l;
    }

    public String g() {
        return this.f40106c;
    }

    public String h() {
        return this.f40105b;
    }

    public c i() {
        return this.f40107d;
    }

    public String j() {
        return this.f40109f;
    }

    public int k() {
        return this.f40111h;
    }

    public long l() {
        return this.f40104a;
    }

    public d m() {
        return this.f40108e;
    }

    public String n() {
        return this.f40113j;
    }

    public int o() {
        return this.f40112i;
    }
}
