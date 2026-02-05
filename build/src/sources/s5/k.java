package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49398a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49399b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49400c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.m f49401d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f49402e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f49403f;

    /* renamed from: g  reason: collision with root package name */
    private final r5.b f49404g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49405h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49406i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49407j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f49408k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f49412d;

        a(int i10) {
            this.f49412d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f49412d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, r5.b bVar, r5.m mVar, r5.b bVar2, r5.b bVar3, r5.b bVar4, r5.b bVar5, r5.b bVar6, boolean z10, boolean z11) {
        this.f49398a = str;
        this.f49399b = aVar;
        this.f49400c = bVar;
        this.f49401d = mVar;
        this.f49402e = bVar2;
        this.f49403f = bVar3;
        this.f49404g = bVar4;
        this.f49405h = bVar5;
        this.f49406i = bVar6;
        this.f49407j = z10;
        this.f49408k = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f49403f;
    }

    public r5.b c() {
        return this.f49405h;
    }

    public String d() {
        return this.f49398a;
    }

    public r5.b e() {
        return this.f49404g;
    }

    public r5.b f() {
        return this.f49406i;
    }

    public r5.b g() {
        return this.f49400c;
    }

    public r5.m h() {
        return this.f49401d;
    }

    public r5.b i() {
        return this.f49402e;
    }

    public a j() {
        return this.f49399b;
    }

    public boolean k() {
        return this.f49407j;
    }

    public boolean l() {
        return this.f49408k;
    }
}
