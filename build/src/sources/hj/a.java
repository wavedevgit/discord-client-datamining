package hj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f27721p = new C0362a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f27722a;

    /* renamed from: b  reason: collision with root package name */
    private final String f27723b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27724c;

    /* renamed from: d  reason: collision with root package name */
    private final c f27725d;

    /* renamed from: e  reason: collision with root package name */
    private final d f27726e;

    /* renamed from: f  reason: collision with root package name */
    private final String f27727f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27728g;

    /* renamed from: h  reason: collision with root package name */
    private final int f27729h;

    /* renamed from: i  reason: collision with root package name */
    private final int f27730i;

    /* renamed from: j  reason: collision with root package name */
    private final String f27731j;

    /* renamed from: k  reason: collision with root package name */
    private final long f27732k;

    /* renamed from: l  reason: collision with root package name */
    private final b f27733l;

    /* renamed from: m  reason: collision with root package name */
    private final String f27734m;

    /* renamed from: n  reason: collision with root package name */
    private final long f27735n;

    /* renamed from: o  reason: collision with root package name */
    private final String f27736o;

    /* renamed from: hj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0362a {

        /* renamed from: a  reason: collision with root package name */
        private long f27737a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f27738b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f27739c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f27740d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f27741e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f27742f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f27743g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f27744h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f27745i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f27746j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f27747k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f27748l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f27749m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f27750n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f27751o = "";

        C0362a() {
        }

        public a a() {
            return new a(this.f27737a, this.f27738b, this.f27739c, this.f27740d, this.f27741e, this.f27742f, this.f27743g, this.f27744h, this.f27745i, this.f27746j, this.f27747k, this.f27748l, this.f27749m, this.f27750n, this.f27751o);
        }

        public C0362a b(String str) {
            this.f27749m = str;
            return this;
        }

        public C0362a c(String str) {
            this.f27743g = str;
            return this;
        }

        public C0362a d(String str) {
            this.f27751o = str;
            return this;
        }

        public C0362a e(b bVar) {
            this.f27748l = bVar;
            return this;
        }

        public C0362a f(String str) {
            this.f27739c = str;
            return this;
        }

        public C0362a g(String str) {
            this.f27738b = str;
            return this;
        }

        public C0362a h(c cVar) {
            this.f27740d = cVar;
            return this;
        }

        public C0362a i(String str) {
            this.f27742f = str;
            return this;
        }

        public C0362a j(long j10) {
            this.f27737a = j10;
            return this;
        }

        public C0362a k(d dVar) {
            this.f27741e = dVar;
            return this;
        }

        public C0362a l(String str) {
            this.f27746j = str;
            return this;
        }

        public C0362a m(int i10) {
            this.f27745i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements xi.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27756d;

        b(int i10) {
            this.f27756d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27756d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements xi.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27762d;

        c(int i10) {
            this.f27762d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27762d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements xi.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f27768d;

        d(int i10) {
            this.f27768d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f27768d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f27722a = j10;
        this.f27723b = str;
        this.f27724c = str2;
        this.f27725d = cVar;
        this.f27726e = dVar;
        this.f27727f = str3;
        this.f27728g = str4;
        this.f27729h = i10;
        this.f27730i = i11;
        this.f27731j = str5;
        this.f27732k = j11;
        this.f27733l = bVar;
        this.f27734m = str6;
        this.f27735n = j12;
        this.f27736o = str7;
    }

    public static C0362a p() {
        return new C0362a();
    }

    public String a() {
        return this.f27734m;
    }

    public long b() {
        return this.f27732k;
    }

    public long c() {
        return this.f27735n;
    }

    public String d() {
        return this.f27728g;
    }

    public String e() {
        return this.f27736o;
    }

    public b f() {
        return this.f27733l;
    }

    public String g() {
        return this.f27724c;
    }

    public String h() {
        return this.f27723b;
    }

    public c i() {
        return this.f27725d;
    }

    public String j() {
        return this.f27727f;
    }

    public int k() {
        return this.f27729h;
    }

    public long l() {
        return this.f27722a;
    }

    public d m() {
        return this.f27726e;
    }

    public String n() {
        return this.f27731j;
    }

    public int o() {
        return this.f27730i;
    }
}
