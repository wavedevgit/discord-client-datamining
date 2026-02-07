package tt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements rt.d {

    /* renamed from: a  reason: collision with root package name */
    private final rt.d f51101a;

    /* renamed from: b  reason: collision with root package name */
    private final rt.d f51102b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(rt.d dVar, rt.d dVar2) {
        this.f51101a = dVar;
        this.f51102b = dVar2;
    }

    @Override // rt.d
    public Object a(rt.c cVar) {
        if (this.f51101a.c(cVar)) {
            return this.f51101a.a(cVar);
        }
        return this.f51102b.a(cVar);
    }

    @Override // rt.d
    public Object b(rt.c cVar, Object obj) {
        if (this.f51101a.c(cVar)) {
            return this.f51101a.a(cVar);
        }
        return this.f51102b.b(cVar, obj);
    }

    @Override // rt.d
    public boolean c(rt.c cVar) {
        if (!this.f51101a.c(cVar) && !this.f51102b.c(cVar)) {
            return false;
        }
        return true;
    }
}
