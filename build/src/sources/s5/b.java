package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49182a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.m f49183b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.f f49184c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49185d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49186e;

    public b(String str, r5.m mVar, r5.f fVar, boolean z10, boolean z11) {
        this.f49182a = str;
        this.f49183b = mVar;
        this.f49184c = fVar;
        this.f49185d = z10;
        this.f49186e = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.f(nVar, bVar, this);
    }

    public String b() {
        return this.f49182a;
    }

    public r5.m c() {
        return this.f49183b;
    }

    public r5.f d() {
        return this.f49184c;
    }

    public boolean e() {
        return this.f49186e;
    }

    public boolean f() {
        return this.f49185d;
    }
}
