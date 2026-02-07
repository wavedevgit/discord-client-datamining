package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class r implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49820a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49821b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.h f49822c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49823d;

    public r(String str, int i10, r5.h hVar, boolean z10) {
        this.f49820a = str;
        this.f49821b = i10;
        this.f49822c = hVar;
        this.f49823d = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.r(nVar, bVar, this);
    }

    public String b() {
        return this.f49820a;
    }

    public r5.h c() {
        return this.f49822c;
    }

    public boolean d() {
        return this.f49823d;
    }

    public String toString() {
        return "ShapePath{name=" + this.f49820a + ", index=" + this.f49821b + '}';
    }
}
