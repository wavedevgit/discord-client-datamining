package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48590a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48591b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.h f48592c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48593d;

    public r(String str, int i10, s5.h hVar, boolean z10) {
        this.f48590a = str;
        this.f48591b = i10;
        this.f48592c = hVar;
        this.f48593d = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f48590a;
    }

    public s5.h c() {
        return this.f48592c;
    }

    public boolean d() {
        return this.f48593d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f48590a + ", index=" + this.f48591b + '}';
    }
}
