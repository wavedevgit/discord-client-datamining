package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50619a;

    /* renamed from: b  reason: collision with root package name */
    private final a f50620b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.b f50621c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.o f50622d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.b f50623e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.b f50624f;

    /* renamed from: g  reason: collision with root package name */
    private final s5.b f50625g;

    /* renamed from: h  reason: collision with root package name */
    private final s5.b f50626h;

    /* renamed from: i  reason: collision with root package name */
    private final s5.b f50627i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f50628j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f50629k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f50633d;

        a(int i10) {
            this.f50633d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f50633d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, s5.b bVar, s5.o oVar, s5.b bVar2, s5.b bVar3, s5.b bVar4, s5.b bVar5, s5.b bVar6, boolean z10, boolean z11) {
        this.f50619a = str;
        this.f50620b = aVar;
        this.f50621c = bVar;
        this.f50622d = oVar;
        this.f50623e = bVar2;
        this.f50624f = bVar3;
        this.f50625g = bVar4;
        this.f50626h = bVar5;
        this.f50627i = bVar6;
        this.f50628j = z10;
        this.f50629k = z11;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public s5.b b() {
        return this.f50624f;
    }

    public s5.b c() {
        return this.f50626h;
    }

    public String d() {
        return this.f50619a;
    }

    public s5.b e() {
        return this.f50625g;
    }

    public s5.b f() {
        return this.f50627i;
    }

    public s5.b g() {
        return this.f50621c;
    }

    public s5.o h() {
        return this.f50622d;
    }

    public s5.b i() {
        return this.f50623e;
    }

    public a j() {
        return this.f50620b;
    }

    public boolean k() {
        return this.f50628j;
    }

    public boolean l() {
        return this.f50629k;
    }
}
