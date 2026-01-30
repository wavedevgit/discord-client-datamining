package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48803a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.m f48804b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.m f48805c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f48806d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f48807e;

    public l(String str, r5.m mVar, r5.m mVar2, r5.b bVar, boolean z10) {
        this.f48803a = str;
        this.f48804b = mVar;
        this.f48805c = mVar2;
        this.f48806d = bVar;
        this.f48807e = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.o(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f48806d;
    }

    public String c() {
        return this.f48803a;
    }

    public r5.m d() {
        return this.f48804b;
    }

    public r5.m e() {
        return this.f48805c;
    }

    public boolean f() {
        return this.f48807e;
    }

    public String toString() {
        return "RectangleShape{position=" + this.f48804b + ", size=" + this.f48805c + '}';
    }
}
