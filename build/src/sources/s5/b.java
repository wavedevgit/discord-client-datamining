package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48721a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.m f48722b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.f f48723c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48724d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f48725e;

    public b(String str, r5.m mVar, r5.f fVar, boolean z10, boolean z11) {
        this.f48721a = str;
        this.f48722b = mVar;
        this.f48723c = fVar;
        this.f48724d = z10;
        this.f48725e = z11;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.f(nVar, bVar, this);
    }

    public String b() {
        return this.f48721a;
    }

    public r5.m c() {
        return this.f48722b;
    }

    public r5.f d() {
        return this.f48723c;
    }

    public boolean e() {
        return this.f48725e;
    }

    public boolean f() {
        return this.f48724d;
    }
}
