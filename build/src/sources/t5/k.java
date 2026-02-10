package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48551a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48552b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.b f48553c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.o f48554d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.b f48555e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.b f48556f;

    /* renamed from: g  reason: collision with root package name */
    private final s5.b f48557g;

    /* renamed from: h  reason: collision with root package name */
    private final s5.b f48558h;

    /* renamed from: i  reason: collision with root package name */
    private final s5.b f48559i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48560j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f48561k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f48565d;

        a(int i10) {
            this.f48565d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f48565d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, s5.b bVar, s5.o oVar, s5.b bVar2, s5.b bVar3, s5.b bVar4, s5.b bVar5, s5.b bVar6, boolean z10, boolean z11) {
        this.f48551a = str;
        this.f48552b = aVar;
        this.f48553c = bVar;
        this.f48554d = oVar;
        this.f48555e = bVar2;
        this.f48556f = bVar3;
        this.f48557g = bVar4;
        this.f48558h = bVar5;
        this.f48559i = bVar6;
        this.f48560j = z10;
        this.f48561k = z11;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public s5.b b() {
        return this.f48556f;
    }

    public s5.b c() {
        return this.f48558h;
    }

    public String d() {
        return this.f48551a;
    }

    public s5.b e() {
        return this.f48557g;
    }

    public s5.b f() {
        return this.f48559i;
    }

    public s5.b g() {
        return this.f48553c;
    }

    public s5.o h() {
        return this.f48554d;
    }

    public s5.b i() {
        return this.f48555e;
    }

    public a j() {
        return this.f48552b;
    }

    public boolean k() {
        return this.f48560j;
    }

    public boolean l() {
        return this.f48561k;
    }
}
