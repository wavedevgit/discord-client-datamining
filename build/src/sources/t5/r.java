package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48591a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48592b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.h f48593c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48594d;

    public r(String str, int i10, s5.h hVar, boolean z10) {
        this.f48591a = str;
        this.f48592b = i10;
        this.f48593c = hVar;
        this.f48594d = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f48591a;
    }

    public s5.h c() {
        return this.f48593c;
    }

    public boolean d() {
        return this.f48594d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f48591a + ", index=" + this.f48592b + '}';
    }
}
