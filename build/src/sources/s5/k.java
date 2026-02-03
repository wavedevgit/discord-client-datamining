package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48842a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48843b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f48844c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.m f48845d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f48846e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f48847f;

    /* renamed from: g  reason: collision with root package name */
    private final r5.b f48848g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f48849h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f48850i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48851j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f48852k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f48856d;

        a(int i10) {
            this.f48856d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f48856d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, r5.b bVar, r5.m mVar, r5.b bVar2, r5.b bVar3, r5.b bVar4, r5.b bVar5, r5.b bVar6, boolean z10, boolean z11) {
        this.f48842a = str;
        this.f48843b = aVar;
        this.f48844c = bVar;
        this.f48845d = mVar;
        this.f48846e = bVar2;
        this.f48847f = bVar3;
        this.f48848g = bVar4;
        this.f48849h = bVar5;
        this.f48850i = bVar6;
        this.f48851j = z10;
        this.f48852k = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f48847f;
    }

    public r5.b c() {
        return this.f48849h;
    }

    public String d() {
        return this.f48842a;
    }

    public r5.b e() {
        return this.f48848g;
    }

    public r5.b f() {
        return this.f48850i;
    }

    public r5.b g() {
        return this.f48844c;
    }

    public r5.m h() {
        return this.f48845d;
    }

    public r5.b i() {
        return this.f48846e;
    }

    public a j() {
        return this.f48843b;
    }

    public boolean k() {
        return this.f48851j;
    }

    public boolean l() {
        return this.f48852k;
    }
}
