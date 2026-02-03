package hj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f27006p = new C0349a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f27007a;

    /* renamed from: b  reason: collision with root package name */
    private final String f27008b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27009c;

    /* renamed from: d  reason: collision with root package name */
    private final c f27010d;

    /* renamed from: e  reason: collision with root package name */
    private final d f27011e;

    /* renamed from: f  reason: collision with root package name */
    private final String f27012f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27013g;

    /* renamed from: h  reason: collision with root package name */
    private final int f27014h;

    /* renamed from: i  reason: collision with root package name */
    private final int f27015i;

    /* renamed from: j  reason: collision with root package name */
    private final String f27016j;

    /* renamed from: k  reason: collision with root package name */
    private final long f27017k;

    /* renamed from: l  reason: collision with root package name */
    private final b f27018l;

    /* renamed from: m  reason: collision with root package name */
    private final String f27019m;

    /* renamed from: n  reason: collision with root package name */
    private final long f27020n;

    /* renamed from: o  reason: collision with root package name */
    private final String f27021o;

    /* renamed from: hj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0349a {

        /* renamed from: a  reason: collision with root package name */
        private long f27022a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f27023b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f27024c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f27025d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f27026e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f27027f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f27028g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f27029h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f27030i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f27031j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f27032k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f27033l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f27034m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f27035n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f27036o = "";

        C0349a() {
        }

        public a a() {
            return new a(this.f27022a, this.f27023b, this.f27024c, this.f27025d, this.f27026e, this.f27027f, this.f27028g, this.f27029h, this.f27030i, this.f27031j, this.f27032k, this.f27033l, this.f27034m, this.f27035n, this.f27036o);
        }

        public C0349a b(String str) {
            this.f27034m = str;
            return this;
        }

        public C0349a c(String str) {
            this.f27028g = str;
            return this;
        }

        public C0349a d(String str) {
            this.f27036o = str;
            return this;
        }

        public C0349a e(b bVar) {
            this.f27033l = bVar;
            return this;
        }

        public C0349a f(String str) {
            this.f27024c = str;
            return this;
        }

        public C0349a g(String str) {
            this.f27023b = str;
            return this;
        }

        public C0349a h(c cVar) {
            this.f27025d = cVar;
            return this;
        }

        public C0349a i(String str) {
            this.f27027f = str;
            return this;
        }

        public C0349a j(long j10) {
            this.f27022a = j10;
            return this;
        }

        public C0349a k(d dVar) {
            this.f27026e = dVar;
            return this;
        }

        public C0349a l(String str) {
            this.f27031j = str;
            return this;
        }

        public C0349a m(int i10) {
            this.f27030i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements xi.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27041d;

        b(int i10) {
            this.f27041d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27041d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements xi.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27047d;

        c(int i10) {
            this.f27047d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27047d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements xi.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27053d;

        d(int i10) {
            this.f27053d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27053d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f27007a = j10;
        this.f27008b = str;
        this.f27009c = str2;
        this.f27010d = cVar;
        this.f27011e = dVar;
        this.f27012f = str3;
        this.f27013g = str4;
        this.f27014h = i10;
        this.f27015i = i11;
        this.f27016j = str5;
        this.f27017k = j11;
        this.f27018l = bVar;
        this.f27019m = str6;
        this.f27020n = j12;
        this.f27021o = str7;
    }

    public static C0349a p() {
        return new C0349a();
    }

    public String a() {
        return this.f27019m;
    }

    public long b() {
        return this.f27017k;
    }

    public long c() {
        return this.f27020n;
    }

    public String d() {
        return this.f27013g;
    }

    public String e() {
        return this.f27021o;
    }

    public b f() {
        return this.f27018l;
    }

    public String g() {
        return this.f27009c;
    }

    public String h() {
        return this.f27008b;
    }

    public c i() {
        return this.f27010d;
    }

    public String j() {
        return this.f27012f;
    }

    public int k() {
        return this.f27014h;
    }

    public long l() {
        return this.f27007a;
    }

    public d m() {
        return this.f27011e;
    }

    public String n() {
        return this.f27016j;
    }

    public int o() {
        return this.f27015i;
    }
}
