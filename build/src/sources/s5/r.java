package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48811a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48812b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.h f48813c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48814d;

    public r(String str, int i10, r5.h hVar, boolean z10) {
        this.f48811a = str;
        this.f48812b = i10;
        this.f48813c = hVar;
        this.f48814d = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f48811a;
    }

    public r5.h c() {
        return this.f48813c;
    }

    public boolean d() {
        return this.f48814d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f48811a + ", index=" + this.f48812b + '}';
    }
}
