package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48567a;

    /* renamed from: b  reason: collision with root package name */
    private final s5.o f48568b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.o f48569c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.b f48570d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f48571e;

    public l(String str, s5.o oVar, s5.o oVar2, s5.b bVar, boolean z10) {
        this.f48567a = str;
        this.f48568b = oVar;
        this.f48569c = oVar2;
        this.f48570d = bVar;
        this.f48571e = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.o(nVar, bVar, this);
    }

    public s5.b b() {
        return this.f48570d;
    }

    public String c() {
        return this.f48567a;
    }

    public s5.o d() {
        return this.f48568b;
    }

    public s5.o e() {
        return this.f48569c;
    }

    public boolean f() {
        return this.f48571e;
    }

    public String toString() {
        return "RectangleShape{position=" + this.f48568b + ", size=" + this.f48569c + '}';
    }
}
