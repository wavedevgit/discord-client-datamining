package ac;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r implements yb.h {

    /* renamed from: a  reason: collision with root package name */
    private final o f614a;

    /* renamed from: b  reason: collision with root package name */
    private final String f615b;

    /* renamed from: c  reason: collision with root package name */
    private final yb.c f616c;

    /* renamed from: d  reason: collision with root package name */
    private final yb.g f617d;

    /* renamed from: e  reason: collision with root package name */
    private final s f618e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(o oVar, String str, yb.c cVar, yb.g gVar, s sVar) {
        this.f614a = oVar;
        this.f615b = str;
        this.f616c = cVar;
        this.f617d = gVar;
        this.f618e = sVar;
    }

    public static /* synthetic */ void b(Exception exc) {
    }

    @Override // yb.h
    public void a(yb.d dVar) {
        c(dVar, new yb.j() { // from class: ac.q
            @Override // yb.j
            public final void a(Exception exc) {
                r.b(exc);
            }
        });
    }

    public void c(yb.d dVar, yb.j jVar) {
        this.f618e.a(n.a().e(this.f614a).c(dVar).f(this.f615b).d(this.f617d).b(this.f616c).a(), jVar);
    }
}
