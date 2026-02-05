package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49331a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.m f49332b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.f f49333c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49334d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49335e;

    public b(String str, r5.m mVar, r5.f fVar, boolean z10, boolean z11) {
        this.f49331a = str;
        this.f49332b = mVar;
        this.f49333c = fVar;
        this.f49334d = z10;
        this.f49335e = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.f(nVar, bVar, this);
    }

    public String b() {
        return this.f49331a;
    }

    public r5.m c() {
        return this.f49332b;
    }

    public r5.f d() {
        return this.f49333c;
    }

    public boolean e() {
        return this.f49335e;
    }

    public boolean f() {
        return this.f49334d;
    }
}
