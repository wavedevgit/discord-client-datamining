package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49288a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49289b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.h f49290c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49291d;

    public r(String str, int i10, r5.h hVar, boolean z10) {
        this.f49288a = str;
        this.f49289b = i10;
        this.f49290c = hVar;
        this.f49291d = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f49288a;
    }

    public r5.h c() {
        return this.f49290c;
    }

    public boolean d() {
        return this.f49291d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f49288a + ", index=" + this.f49289b + '}';
    }
}
