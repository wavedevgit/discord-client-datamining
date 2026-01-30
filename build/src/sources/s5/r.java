package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48827a;

    /* renamed from: b  reason: collision with root package name */
    private final int f48828b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.h f48829c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f48830d;

    public r(String str, int i10, r5.h hVar, boolean z10) {
        this.f48827a = str;
        this.f48828b = i10;
        this.f48829c = hVar;
        this.f48830d = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f48827a;
    }

    public r5.h c() {
        return this.f48829c;
    }

    public boolean d() {
        return this.f48830d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f48827a + ", index=" + this.f48828b + '}';
    }
}
