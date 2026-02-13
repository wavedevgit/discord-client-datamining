package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49159a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49160b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.h f49161c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49162d;

    public r(String str, int i10, s5.h hVar, boolean z10) {
        this.f49159a = str;
        this.f49160b = i10;
        this.f49161c = hVar;
        this.f49162d = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f49159a;
    }

    public s5.h c() {
        return this.f49161c;
    }

    public boolean d() {
        return this.f49162d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f49159a + ", index=" + this.f49160b + '}';
    }
}
