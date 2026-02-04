package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49264a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.m f49265b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.m f49266c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f49267d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49268e;

    public l(String str, r5.m mVar, r5.m mVar2, r5.b bVar, boolean z10) {
        this.f49264a = str;
        this.f49265b = mVar;
        this.f49266c = mVar2;
        this.f49267d = bVar;
        this.f49268e = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.o(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f49267d;
    }

    public String c() {
        return this.f49264a;
    }

    public r5.m d() {
        return this.f49265b;
    }

    public r5.m e() {
        return this.f49266c;
    }

    public boolean f() {
        return this.f49268e;
    }

    public String toString() {
        return "RectangleShape{position=" + this.f49265b + ", size=" + this.f49266c + '}';
    }
}
