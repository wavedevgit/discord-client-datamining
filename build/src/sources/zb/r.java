package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r implements xb.h {

    /* renamed from: a  reason: collision with root package name */
    private final o f55643a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55644b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.c f55645c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55646d;

    /* renamed from: e  reason: collision with root package name */
    private final s f55647e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(o oVar, String str, xb.c cVar, xb.g gVar, s sVar) {
        this.f55643a = oVar;
        this.f55644b = str;
        this.f55645c = cVar;
        this.f55646d = gVar;
        this.f55647e = sVar;
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
        this.f55647e.a(n.a().e(this.f55643a).c(dVar).f(this.f55644b).d(this.f55646d).b(this.f55645c).a(), jVar);
    }
}
