package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50634a;

    /* renamed from: b  reason: collision with root package name */
    private final s5.o f50635b;

    /* renamed from: c  reason: collision with root package name */
    private final s5.o f50636c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.b f50637d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50638e;

    public l(String str, s5.o oVar, s5.o oVar2, s5.b bVar, boolean z10) {
        this.f50634a = str;
        this.f50635b = oVar;
        this.f50636c = oVar2;
        this.f50637d = bVar;
        this.f50638e = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.o(nVar, bVar, this);
    }

    public s5.b b() {
        return this.f50637d;
    }

    public String c() {
        return this.f50634a;
    }

    public s5.o d() {
        return this.f50635b;
    }

    public s5.o e() {
        return this.f50636c;
    }

    public boolean f() {
        return this.f50638e;
    }

    public String toString() {
        return "RectangleShape{position=" + this.f50635b + ", size=" + this.f50636c + '}';
    }
}
