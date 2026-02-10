package mj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    private static final a f37129p = new C0537a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f37130a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37131b;

    /* renamed from: c  reason: collision with root package name */
    private final String f37132c;

    /* renamed from: d  reason: collision with root package name */
    private final c f37133d;

    /* renamed from: e  reason: collision with root package name */
    private final d f37134e;

    /* renamed from: f  reason: collision with root package name */
    private final String f37135f;

    /* renamed from: g  reason: collision with root package name */
    private final String f37136g;

    /* renamed from: h  reason: collision with root package name */
    private final int f37137h;

    /* renamed from: i  reason: collision with root package name */
    private final int f37138i;

    /* renamed from: j  reason: collision with root package name */
    private final String f37139j;

    /* renamed from: k  reason: collision with root package name */
    private final long f37140k;

    /* renamed from: l  reason: collision with root package name */
    private final b f37141l;

    /* renamed from: m  reason: collision with root package name */
    private final String f37142m;

    /* renamed from: n  reason: collision with root package name */
    private final long f37143n;

    /* renamed from: o  reason: collision with root package name */
    private final String f37144o;

    /* renamed from: mj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0537a {

        /* renamed from: a  reason: collision with root package name */
        private long f37145a = 0;

        /* renamed from: b  reason: collision with root package name */
        private String f37146b = "";

        /* renamed from: c  reason: collision with root package name */
        private String f37147c = "";

        /* renamed from: d  reason: collision with root package name */
        private c f37148d = c.UNKNOWN;

        /* renamed from: e  reason: collision with root package name */
        private d f37149e = d.UNKNOWN_OS;

        /* renamed from: f  reason: collision with root package name */
        private String f37150f = "";

        /* renamed from: g  reason: collision with root package name */
        private String f37151g = "";

        /* renamed from: h  reason: collision with root package name */
        private int f37152h = 0;

        /* renamed from: i  reason: collision with root package name */
        private int f37153i = 0;

        /* renamed from: j  reason: collision with root package name */
        private String f37154j = "";

        /* renamed from: k  reason: collision with root package name */
        private long f37155k = 0;

        /* renamed from: l  reason: collision with root package name */
        private b f37156l = b.UNKNOWN_EVENT;

        /* renamed from: m  reason: collision with root package name */
        private String f37157m = "";

        /* renamed from: n  reason: collision with root package name */
        private long f37158n = 0;

        /* renamed from: o  reason: collision with root package name */
        private String f37159o = "";

        C0537a() {
        }

        public a a() {
            return new a(this.f37145a, this.f37146b, this.f37147c, this.f37148d, this.f37149e, this.f37150f, this.f37151g, this.f37152h, this.f37153i, this.f37154j, this.f37155k, this.f37156l, this.f37157m, this.f37158n, this.f37159o);
        }

        public C0537a b(String str) {
            this.f37157m = str;
            return this;
        }

        public C0537a c(String str) {
            this.f37151g = str;
            return this;
        }

        public C0537a d(String str) {
            this.f37159o = str;
            return this;
        }

        public C0537a e(b bVar) {
            this.f37156l = bVar;
            return this;
        }

        public C0537a f(String str) {
            this.f37147c = str;
            return this;
        }

        public C0537a g(String str) {
            this.f37146b = str;
            return this;
        }

        public C0537a h(c cVar) {
            this.f37148d = cVar;
            return this;
        }

        public C0537a i(String str) {
            this.f37150f = str;
            return this;
        }

        public C0537a j(long j10) {
            this.f37145a = j10;
            return this;
        }

        public C0537a k(d dVar) {
            this.f37149e = dVar;
            return this;
        }

        public C0537a l(String str) {
            this.f37154j = str;
            return this;
        }

        public C0537a m(int i10) {
            this.f37153i = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b implements cj.c {
        UNKNOWN_EVENT(0),
        MESSAGE_DELIVERED(1),
        MESSAGE_OPEN(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f37164d;

        b(int i10) {
            this.f37164d = i10;
        }

        @Override // cj.c
        public int getNumber() {
            return this.f37164d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c implements cj.c {
        UNKNOWN(0),
        DATA_MESSAGE(1),
        TOPIC(2),
        DISPLAY_NOTIFICATION(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f37170d;

        c(int i10) {
            this.f37170d = i10;
        }

        @Override // cj.c
        public int getNumber() {
            return this.f37170d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum d implements cj.c {
        UNKNOWN_OS(0),
        ANDROID(1),
        IOS(2),
        WEB(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f37176d;

        d(int i10) {
            this.f37176d = i10;
        }

        @Override // cj.c
        public int getNumber() {
            return this.f37176d;
        }
    }

    a(long j10, String str, String str2, c cVar, d dVar, String str3, String str4, int i10, int i11, String str5, long j11, b bVar, String str6, long j12, String str7) {
        this.f37130a = j10;
        this.f37131b = str;
        this.f37132c = str2;
        this.f37133d = cVar;
        this.f37134e = dVar;
        this.f37135f = str3;
        this.f37136g = str4;
        this.f37137h = i10;
        this.f37138i = i11;
        this.f37139j = str5;
        this.f37140k = j11;
        this.f37141l = bVar;
        this.f37142m = str6;
        this.f37143n = j12;
        this.f37144o = str7;
    }

    public static C0537a p() {
        return new C0537a();
    }

    public String a() {
        return this.f37142m;
    }

    public long b() {
        return this.f37140k;
    }

    public long c() {
        return this.f37143n;
    }

    public String d() {
        return this.f37136g;
    }

    public String e() {
        return this.f37144o;
    }

    public b f() {
        return this.f37141l;
    }

    public String g() {
        return this.f37132c;
    }

    public String h() {
        return this.f37131b;
    }

    public c i() {
        return this.f37133d;
    }

    public String j() {
        return this.f37135f;
    }

    public int k() {
        return this.f37137h;
    }

    public long l() {
        return this.f37130a;
    }

    public d m() {
        return this.f37134e;
    }

    public String n() {
        return this.f37139j;
    }

    public int o() {
        return this.f37138i;
    }
}
