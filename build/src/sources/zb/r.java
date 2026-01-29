package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r implements xb.h {

    /* renamed from: a  reason: collision with root package name */
    private final o f55495a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55496b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.c f55497c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55498d;

    /* renamed from: e  reason: collision with root package name */
    private final s f55499e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(o oVar, String str, xb.c cVar, xb.g gVar, s sVar) {
        this.f55495a = oVar;
        this.f55496b = str;
        this.f55497c = cVar;
        this.f55498d = gVar;
        this.f55499e = sVar;
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
        this.f55499e.a(n.a().e(this.f55495a).c(dVar).f(this.f55496b).d(this.f55498d).b(this.f55497c).a(), jVar);
    }
}
