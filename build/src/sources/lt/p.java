package lt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements jt.d {

    /* renamed from: a  reason: collision with root package name */
    private final jt.d f37686a;

    /* renamed from: b  reason: collision with root package name */
    private final jt.d f37687b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(jt.d dVar, jt.d dVar2) {
        this.f37686a = dVar;
        this.f37687b = dVar2;
    }

    @Override // jt.d
    public boolean a(jt.c cVar) {
        if (!this.f37686a.a(cVar) && !this.f37687b.a(cVar)) {
            return false;
        }
        return true;
    }

    @Override // jt.d
    public Object b(jt.c cVar, Object obj) {
        if (this.f37686a.a(cVar)) {
            return this.f37686a.c(cVar);
        }
        return this.f37687b.b(cVar, obj);
    }

    @Override // jt.d
    public Object c(jt.c cVar) {
        if (this.f37686a.a(cVar)) {
            return this.f37686a.c(cVar);
        }
        return this.f37687b.c(cVar);
    }
}
