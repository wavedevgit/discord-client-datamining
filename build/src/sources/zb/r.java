package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r implements xb.h {

    /* renamed from: a  reason: collision with root package name */
    private final o f56146a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56147b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.c f56148c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f56149d;

    /* renamed from: e  reason: collision with root package name */
    private final s f56150e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(o oVar, String str, xb.c cVar, xb.g gVar, s sVar) {
        this.f56146a = oVar;
        this.f56147b = str;
        this.f56148c = cVar;
        this.f56149d = gVar;
        this.f56150e = sVar;
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
        this.f56150e.a(n.a().e(this.f56146a).c(dVar).f(this.f56147b).d(this.f56149d).b(this.f56148c).a(), jVar);
    }
}
