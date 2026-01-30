package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r implements xb.h {

    /* renamed from: a  reason: collision with root package name */
    private final o f55511a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55512b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.c f55513c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f55514d;

    /* renamed from: e  reason: collision with root package name */
    private final s f55515e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(o oVar, String str, xb.c cVar, xb.g gVar, s sVar) {
        this.f55511a = oVar;
        this.f55512b = str;
        this.f55513c = cVar;
        this.f55514d = gVar;
        this.f55515e = sVar;
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
        this.f55515e.a(n.a().e(this.f55511a).c(dVar).f(this.f55512b).d(this.f55514d).b(this.f55513c).a(), jVar);
    }
}
