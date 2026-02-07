package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49801a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.b f49802b;

    /* renamed from: c  reason: collision with root package name */
    private final r5.b f49803c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.l f49804d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49805e;

    public m(String str, r5.b bVar, r5.b bVar2, r5.l lVar, boolean z10) {
        this.f49801a = str;
        this.f49802b = bVar;
        this.f49803c = bVar2;
        this.f49804d = lVar;
        this.f49805e = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.p(nVar, bVar, this);
    }

    public r5.b b() {
        return this.f49802b;
    }

    public String c() {
        return this.f49801a;
    }

    public r5.b d() {
        return this.f49803c;
    }

    public r5.l e() {
        return this.f49804d;
    }

    public boolean f() {
        return this.f49805e;
    }
}
