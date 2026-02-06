package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49748a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.m f49749b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.m f49750c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f49751d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49752e;

    public l(String str, r5.m mVar, r5.m mVar2, r5.b bVar, boolean z10) {
        this.f49748a = str;
        this.f49749b = mVar;
        this.f49750c = mVar2;
        this.f49751d = bVar;
        this.f49752e = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.o(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f49751d;
    }

    public String c() {
        return this.f49748a;
    }

    public r5.m d() {
        return this.f49749b;
    }

    public r5.m e() {
        return this.f49750c;
    }

    public boolean f() {
        return this.f49752e;
    }

    public String toString() {
        return "RectangleShape{position=" + this.f49749b + ", size=" + this.f49750c + '}';
    }
}
