package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49135a;

    /* renamed from: b  reason: collision with root package name */
    private final s5.o f49136b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.o f49137c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.b f49138d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49139e;

    public l(String str, s5.o oVar, s5.o oVar2, s5.b bVar, boolean z10) {
        this.f49135a = str;
        this.f49136b = oVar;
        this.f49137c = oVar2;
        this.f49138d = bVar;
        this.f49139e = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.o(nVar, bVar, this);
    }

    public s5.b b() {
        return this.f49138d;
    }

    public String c() {
        return this.f49135a;
    }

    public s5.o d() {
        return this.f49136b;
    }

    public s5.o e() {
        return this.f49137c;
    }

    public boolean f() {
        return this.f49139e;
    }

    public String toString() {
        return "RectangleShape{position=" + this.f49136b + ", size=" + this.f49137c + '}';
    }
}
