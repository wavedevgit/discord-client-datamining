package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49291a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49292b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.h f49293c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49294d;

    public r(String str, int i10, r5.h hVar, boolean z10) {
        this.f49291a = str;
        this.f49292b = i10;
        this.f49293c = hVar;
        this.f49294d = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f49291a;
    }

    public r5.h c() {
        return this.f49293c;
    }

    public boolean d() {
        return this.f49294d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f49291a + ", index=" + this.f49292b + '}';
    }
}
