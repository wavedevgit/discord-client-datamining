package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48787a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.m f48788b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.m f48789c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.b f48790d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f48791e;

    public l(String str, r5.m mVar, r5.m mVar2, r5.b bVar, boolean z10) {
        this.f48787a = str;
        this.f48788b = mVar;
        this.f48789c = mVar2;
        this.f48790d = bVar;
        this.f48791e = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.o(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f48790d;
    }

    public String c() {
        return this.f48787a;
    }

    public r5.m d() {
        return this.f48788b;
    }

    public r5.m e() {
        return this.f48789c;
    }

    public boolean f() {
        return this.f48791e;
    }

    public String toString() {
        return "RectangleShape{position=" + this.f48788b + ", size=" + this.f48789c + '}';
    }
}
