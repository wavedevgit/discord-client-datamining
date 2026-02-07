package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49781a;

    /* renamed from: b  reason: collision with root package name */
    private final a f49782b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49783c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.m f49784d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.b f49785e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f49786f;

    /* renamed from: g  reason: collision with root package name */
    private final r5.b f49787g;

    /* renamed from: h  reason: collision with root package name */
    private final r5.b f49788h;

    /* renamed from: i  reason: collision with root package name */
    private final r5.b f49789i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49790j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f49791k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        STAR(1),
        POLYGON(2);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f49795d;

        a(int i10) {
            this.f49795d = i10;
        }

        public static a d(int i10) {
            a[] values;
            for (a aVar : values()) {
                if (aVar.f49795d == i10) {
                    return aVar;
                }
            }
            return null;
        }
    }

    public k(String str, a aVar, r5.b bVar, r5.m mVar, r5.b bVar2, r5.b bVar3, r5.b bVar4, r5.b bVar5, r5.b bVar6, boolean z10, boolean z11) {
        this.f49781a = str;
        this.f49782b = aVar;
        this.f49783c = bVar;
        this.f49784d = mVar;
        this.f49785e = bVar2;
        this.f49786f = bVar3;
        this.f49787g = bVar4;
        this.f49788h = bVar5;
        this.f49789i = bVar6;
        this.f49790j = z10;
        this.f49791k = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.n(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f49786f;
    }

    public r5.b c() {
        return this.f49788h;
    }

    public String d() {
        return this.f49781a;
    }

    public r5.b e() {
        return this.f49787g;
    }

    public r5.b f() {
        return this.f49789i;
    }

    public r5.b g() {
        return this.f49783c;
    }

    public r5.m h() {
        return this.f49784d;
    }

    public r5.b i() {
        return this.f49785e;
    }

    public a j() {
        return this.f49782b;
    }

    public boolean k() {
        return this.f49790j;
    }

    public boolean l() {
        return this.f49791k;
    }
}
