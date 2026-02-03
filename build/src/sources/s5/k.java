package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49252a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49253b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49254c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.m f49255d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f49256e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f49257f;

    /* renamed from: g  reason: collision with root package name */
    private final r5.b f49258g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49259h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49260i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49261j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f49262k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f49266d;

        a(int i10) {
            this.f49266d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f49266d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, r5.b bVar, r5.m mVar, r5.b bVar2, r5.b bVar3, r5.b bVar4, r5.b bVar5, r5.b bVar6, boolean z10, boolean z11) {
        this.f49252a = str;
        this.f49253b = aVar;
        this.f49254c = bVar;
        this.f49255d = mVar;
        this.f49256e = bVar2;
        this.f49257f = bVar3;
        this.f49258g = bVar4;
        this.f49259h = bVar5;
        this.f49260i = bVar6;
        this.f49261j = z10;
        this.f49262k = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f49257f;
    }

    public r5.b c() {
        return this.f49259h;
    }

    public String d() {
        return this.f49252a;
    }

    public r5.b e() {
        return this.f49258g;
    }

    public r5.b f() {
        return this.f49260i;
    }

    public r5.b g() {
        return this.f49254c;
    }

    public r5.m h() {
        return this.f49255d;
    }

    public r5.b i() {
        return this.f49256e;
    }

    public a j() {
        return this.f49253b;
    }

    public boolean k() {
        return this.f49261j;
    }

    public boolean l() {
        return this.f49262k;
    }
}
