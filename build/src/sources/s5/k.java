package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48788a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48789b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f48790c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.m f48791d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f48792e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f48793f;

    /* renamed from: g  reason: collision with root package name */
    private final r5.b f48794g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f48795h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f48796i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48797j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f48798k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f48802d;

        a(int i10) {
            this.f48802d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f48802d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, r5.b bVar, r5.m mVar, r5.b bVar2, r5.b bVar3, r5.b bVar4, r5.b bVar5, r5.b bVar6, boolean z10, boolean z11) {
        this.f48788a = str;
        this.f48789b = aVar;
        this.f48790c = bVar;
        this.f48791d = mVar;
        this.f48792e = bVar2;
        this.f48793f = bVar3;
        this.f48794g = bVar4;
        this.f48795h = bVar5;
        this.f48796i = bVar6;
        this.f48797j = z10;
        this.f48798k = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f48793f;
    }

    public r5.b c() {
        return this.f48795h;
    }

    public String d() {
        return this.f48788a;
    }

    public r5.b e() {
        return this.f48794g;
    }

    public r5.b f() {
        return this.f48796i;
    }

    public r5.b g() {
        return this.f48790c;
    }

    public r5.m h() {
        return this.f48791d;
    }

    public r5.b i() {
        return this.f48792e;
    }

    public a j() {
        return this.f48789b;
    }

    public boolean k() {
        return this.f48797j;
    }

    public boolean l() {
        return this.f48798k;
    }
}
