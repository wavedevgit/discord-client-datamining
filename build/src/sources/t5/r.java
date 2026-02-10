package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50658a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50659b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.h f50660c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f50661d;

    public r(String str, int i10, s5.h hVar, boolean z10) {
        this.f50658a = str;
        this.f50659b = i10;
        this.f50660c = hVar;
        this.f50661d = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f50658a;
    }

    public s5.h c() {
        return this.f50660c;
    }

    public boolean d() {
        return this.f50661d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f50658a + ", index=" + this.f50659b + '}';
    }
}
