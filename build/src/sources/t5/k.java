package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49120a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49121b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.b f49122c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.o f49123d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.b f49124e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.b f49125f;

    /* renamed from: g  reason: collision with root package name */
    private final s5.b f49126g;

    /* renamed from: h  reason: collision with root package name */
    private final s5.b f49127h;

    /* renamed from: i  reason: collision with root package name */
    private final s5.b f49128i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49129j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f49130k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f49134d;

        a(int i10) {
            this.f49134d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f49134d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, s5.b bVar, s5.o oVar, s5.b bVar2, s5.b bVar3, s5.b bVar4, s5.b bVar5, s5.b bVar6, boolean z10, boolean z11) {
        this.f49120a = str;
        this.f49121b = aVar;
        this.f49122c = bVar;
        this.f49123d = oVar;
        this.f49124e = bVar2;
        this.f49125f = bVar3;
        this.f49126g = bVar4;
        this.f49127h = bVar5;
        this.f49128i = bVar6;
        this.f49129j = z10;
        this.f49130k = z11;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public s5.b b() {
        return this.f49125f;
    }

    public s5.b c() {
        return this.f49127h;
    }

    public String d() {
        return this.f49120a;
    }

    public s5.b e() {
        return this.f49126g;
    }

    public s5.b f() {
        return this.f49128i;
    }

    public s5.b g() {
        return this.f49122c;
    }

    public s5.o h() {
        return this.f49123d;
    }

    public s5.b i() {
        return this.f49124e;
    }

    public a j() {
        return this.f49121b;
    }

    public boolean k() {
        return this.f49129j;
    }

    public boolean l() {
        return this.f49130k;
    }
}
