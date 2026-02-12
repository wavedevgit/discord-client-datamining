package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48552a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48553b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.b f48554c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.o f48555d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.b f48556e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.b f48557f;

    /* renamed from: g  reason: collision with root package name */
    private final s5.b f48558g;

    /* renamed from: h  reason: collision with root package name */
    private final s5.b f48559h;

    /* renamed from: i  reason: collision with root package name */
    private final s5.b f48560i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48561j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f48562k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f48566d;

        a(int i10) {
            this.f48566d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f48566d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, s5.b bVar, s5.o oVar, s5.b bVar2, s5.b bVar3, s5.b bVar4, s5.b bVar5, s5.b bVar6, boolean z10, boolean z11) {
        this.f48552a = str;
        this.f48553b = aVar;
        this.f48554c = bVar;
        this.f48555d = oVar;
        this.f48556e = bVar2;
        this.f48557f = bVar3;
        this.f48558g = bVar4;
        this.f48559h = bVar5;
        this.f48560i = bVar6;
        this.f48561j = z10;
        this.f48562k = z11;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public s5.b b() {
        return this.f48557f;
    }

    public s5.b c() {
        return this.f48559h;
    }

    public String d() {
        return this.f48552a;
    }

    public s5.b e() {
        return this.f48558g;
    }

    public s5.b f() {
        return this.f48560i;
    }

    public s5.b g() {
        return this.f48554c;
    }

    public s5.o h() {
        return this.f48555d;
    }

    public s5.b i() {
        return this.f48556e;
    }

    public a j() {
        return this.f48553b;
    }

    public boolean k() {
        return this.f48561j;
    }

    public boolean l() {
        return this.f48562k;
    }
}
