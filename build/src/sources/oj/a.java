package oj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f40671p = new C0553a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f40672a;

    /* renamed from: b  reason: collision with root package name */
    private final String f40673b;

    /* renamed from: c  reason: collision with root package name */
    private final String f40674c;

    /* renamed from: d  reason: collision with root package name */
    private final c f40675d;

    /* renamed from: e  reason: collision with root package name */
    private final d f40676e;

    /* renamed from: f  reason: collision with root package name */
    private final String f40677f;

    /* renamed from: g  reason: collision with root package name */
    private final String f40678g;

    /* renamed from: h  reason: collision with root package name */
    private final int f40679h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40680i;

    /* renamed from: j  reason: collision with root package name */
    private final String f40681j;

    /* renamed from: k  reason: collision with root package name */
    private final long f40682k;

    /* renamed from: l  reason: collision with root package name */
    private final b f40683l;

    /* renamed from: m  reason: collision with root package name */
    private final String f40684m;

    /* renamed from: n  reason: collision with root package name */
    private final long f40685n;

    /* renamed from: o  reason: collision with root package name */
    private final String f40686o;

    /* renamed from: oj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0553a {

        /* renamed from: a  reason: collision with root package name */
        private long f40687a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f40688b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f40689c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f40690d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f40691e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f40692f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f40693g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f40694h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f40695i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f40696j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f40697k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f40698l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f40699m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f40700n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f40701o = "";

        C0553a() {
        }

        public a a() {
            return new a(this.f40687a, this.f40688b, this.f40689c, this.f40690d, this.f40691e, this.f40692f, this.f40693g, this.f40694h, this.f40695i, this.f40696j, this.f40697k, this.f40698l, this.f40699m, this.f40700n, this.f40701o);
        }

        public C0553a b(String str) {
            this.f40699m = str;
            return this;
        }

        public C0553a c(String str) {
            this.f40693g = str;
            return this;
        }

        public C0553a d(String str) {
            this.f40701o = str;
            return this;
        }

        public C0553a e(b bVar) {
            this.f40698l = bVar;
            return this;
        }

        public C0553a f(String str) {
            this.f40689c = str;
            return this;
        }

        public C0553a g(String str) {
            this.f40688b = str;
            return this;
        }

        public C0553a h(c cVar) {
            this.f40690d = cVar;
            return this;
        }

        public C0553a i(String str) {
            this.f40692f = str;
            return this;
        }

        public C0553a j(long j10) {
            this.f40687a = j10;
            return this;
        }

        public C0553a k(d dVar) {
            this.f40691e = dVar;
            return this;
        }

        public C0553a l(String str) {
            this.f40696j = str;
            return this;
        }

        public C0553a m(int i10) {
            this.f40695i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements ej.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40706d;

        b(int i10) {
            this.f40706d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40706d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements ej.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40712d;

        c(int i10) {
            this.f40712d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40712d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements ej.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f40718d;

        d(int i10) {
            this.f40718d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f40718d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f40672a = j10;
        this.f40673b = str;
        this.f40674c = str2;
        this.f40675d = cVar;
        this.f40676e = dVar;
        this.f40677f = str3;
        this.f40678g = str4;
        this.f40679h = i10;
        this.f40680i = i11;
        this.f40681j = str5;
        this.f40682k = j11;
        this.f40683l = bVar;
        this.f40684m = str6;
        this.f40685n = j12;
        this.f40686o = str7;
    }

    public static C0553a p() {
        return new C0553a();
    }

    public String a() {
        return this.f40684m;
    }

    public long b() {
        return this.f40682k;
    }

    public long c() {
        return this.f40685n;
    }

    public String d() {
        return this.f40678g;
    }

    public String e() {
        return this.f40686o;
    }

    public b f() {
        return this.f40683l;
    }

    public String g() {
        return this.f40674c;
    }

    public String h() {
        return this.f40673b;
    }

    public c i() {
        return this.f40675d;
    }

    public String j() {
        return this.f40677f;
    }

    public int k() {
        return this.f40679h;
    }

    public long l() {
        return this.f40672a;
    }

    public d m() {
        return this.f40676e;
    }

    public String n() {
        return this.f40681j;
    }

    public int o() {
        return this.f40680i;
    }
}
