package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48881a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48882b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.h f48883c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48884d;

    public r(String str, int i10, r5.h hVar, boolean z10) {
        this.f48881a = str;
        this.f48882b = i10;
        this.f48883c = hVar;
        this.f48884d = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f48881a;
    }

    public r5.h c() {
        return this.f48883c;
    }

    public boolean d() {
        return this.f48884d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f48881a + ", index=" + this.f48882b + '}';
    }
}
