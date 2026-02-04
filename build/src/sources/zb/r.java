package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r implements xb.h {

    /* renamed from: a  reason: collision with root package name */
    private final o f55778a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55779b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.c f55780c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55781d;

    /* renamed from: e  reason: collision with root package name */
    private final s f55782e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(o oVar, String str, xb.c cVar, xb.g gVar, s sVar) {
        this.f55778a = oVar;
        this.f55779b = str;
        this.f55780c = cVar;
        this.f55781d = gVar;
        this.f55782e = sVar;
    }

    public static /* synthetic */ void b(Exception exc) {
    }

    @Override // xb.h
    public void a(xb.d dVar) {
        c(dVar, new xb.j() { // from class: zb.q
            @Override // xb.j
            public final void a(Exception exc) {
                r.b(exc);
            }
        });
    }

    public void c(xb.d dVar, xb.j jVar) {
        this.f55782e.a(n.a().e(this.f55778a).c(dVar).f(this.f55779b).d(this.f55781d).b(this.f55780c).a(), jVar);
    }
}
