package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48857a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.m f48858b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.m f48859c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f48860d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f48861e;

    public l(String str, r5.m mVar, r5.m mVar2, r5.b bVar, boolean z10) {
        this.f48857a = str;
        this.f48858b = mVar;
        this.f48859c = mVar2;
        this.f48860d = bVar;
        this.f48861e = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.o(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f48860d;
    }

    public String c() {
        return this.f48857a;
    }

    public r5.m d() {
        return this.f48858b;
    }

    public r5.m e() {
        return this.f48859c;
    }

    public boolean f() {
        return this.f48861e;
    }

    public String toString() {
        return "RectangleShape{position=" + this.f48858b + ", size=" + this.f48859c + '}';
    }
}
