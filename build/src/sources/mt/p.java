package mt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements kt.d {

    /* renamed from: a  reason: collision with root package name */
    private final kt.d f39386a;

    /* renamed from: b  reason: collision with root package name */
    private final kt.d f39387b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(kt.d dVar, kt.d dVar2) {
        this.f39386a = dVar;
        this.f39387b = dVar2;
    }

    @Override // kt.d
    public Object a(kt.c cVar, Object obj) {
        if (this.f39386a.c(cVar)) {
            return this.f39386a.b(cVar);
        }
        return this.f39387b.a(cVar, obj);
    }

    @Override // kt.d
    public Object b(kt.c cVar) {
        if (this.f39386a.c(cVar)) {
            return this.f39386a.b(cVar);
        }
        return this.f39387b.b(cVar);
    }

    @Override // kt.d
    public boolean c(kt.c cVar) {
        if (!this.f39386a.c(cVar) && !this.f39387b.c(cVar)) {
            return false;
        }
        return true;
    }
}
