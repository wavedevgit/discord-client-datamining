package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49249a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49250b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49251c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.m f49252d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f49253e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f49254f;

    /* renamed from: g  reason: collision with root package name */
    private final r5.b f49255g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49256h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49257i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49258j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f49259k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f49263d;

        a(int i10) {
            this.f49263d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f49263d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, r5.b bVar, r5.m mVar, r5.b bVar2, r5.b bVar3, r5.b bVar4, r5.b bVar5, r5.b bVar6, boolean z10, boolean z11) {
        this.f49249a = str;
        this.f49250b = aVar;
        this.f49251c = bVar;
        this.f49252d = mVar;
        this.f49253e = bVar2;
        this.f49254f = bVar3;
        this.f49255g = bVar4;
        this.f49256h = bVar5;
        this.f49257i = bVar6;
        this.f49258j = z10;
        this.f49259k = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f49254f;
    }

    public r5.b c() {
        return this.f49256h;
    }

    public String d() {
        return this.f49249a;
    }

    public r5.b e() {
        return this.f49255g;
    }

    public r5.b f() {
        return this.f49257i;
    }

    public r5.b g() {
        return this.f49251c;
    }

    public r5.m h() {
        return this.f49252d;
    }

    public r5.b i() {
        return this.f49253e;
    }

    public a j() {
        return this.f49250b;
    }

    public boolean k() {
        return this.f49258j;
    }

    public boolean l() {
        return this.f49259k;
    }
}
