package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48772a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48773b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f48774c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.m f48775d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f48776e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f48777f;

    /* renamed from: g  reason: collision with root package name */
    private final r5.b f48778g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f48779h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f48780i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48781j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f48782k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f48786d;

        a(int i10) {
            this.f48786d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f48786d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, r5.b bVar, r5.m mVar, r5.b bVar2, r5.b bVar3, r5.b bVar4, r5.b bVar5, r5.b bVar6, boolean z10, boolean z11) {
        this.f48772a = str;
        this.f48773b = aVar;
        this.f48774c = bVar;
        this.f48775d = mVar;
        this.f48776e = bVar2;
        this.f48777f = bVar3;
        this.f48778g = bVar4;
        this.f48779h = bVar5;
        this.f48780i = bVar6;
        this.f48781j = z10;
        this.f48782k = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f48777f;
    }

    public r5.b c() {
        return this.f48779h;
    }

    public String d() {
        return this.f48772a;
    }

    public r5.b e() {
        return this.f48778g;
    }

    public r5.b f() {
        return this.f48780i;
    }

    public r5.b g() {
        return this.f48774c;
    }

    public r5.m h() {
        return this.f48775d;
    }

    public r5.b i() {
        return this.f48776e;
    }

    public a j() {
        return this.f48773b;
    }

    public boolean k() {
        return this.f48781j;
    }

    public boolean l() {
        return this.f48782k;
    }
}
