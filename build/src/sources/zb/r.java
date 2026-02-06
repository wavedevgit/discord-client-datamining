package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r implements xb.h {

    /* renamed from: a  reason: collision with root package name */
    private final o f56098a;

    /* renamed from: b  reason: collision with root package name */
    private final String f56099b;

    /* renamed from: c  reason: collision with root package name */
    private final xb.c f56100c;

    /* renamed from: d  reason: collision with root package name */
    private final xb.g f56101d;

    /* renamed from: e  reason: collision with root package name */
    private final s f56102e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(o oVar, String str, xb.c cVar, xb.g gVar, s sVar) {
        this.f56098a = oVar;
        this.f56099b = str;
        this.f56100c = cVar;
        this.f56101d = gVar;
        this.f56102e = sVar;
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
        this.f56102e.a(n.a().e(this.f56098a).c(dVar).f(this.f56099b).d(this.f56101d).b(this.f56100c).a(), jVar);
    }
}
