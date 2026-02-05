package rt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements pt.d {

    /* renamed from: a  reason: collision with root package name */
    private final pt.d f49190a;

    /* renamed from: b  reason: collision with root package name */
    private final pt.d f49191b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(pt.d dVar, pt.d dVar2) {
        this.f49190a = dVar;
        this.f49191b = dVar2;
    }

    @Override // pt.d
    public Object a(pt.c cVar, Object obj) {
        if (this.f49190a.b(cVar)) {
            return this.f49190a.c(cVar);
        }
        return this.f49191b.a(cVar, obj);
    }

    @Override // pt.d
    public boolean b(pt.c cVar) {
        if (!this.f49190a.b(cVar) && !this.f49191b.b(cVar)) {
            return false;
        }
        return true;
    }

    @Override // pt.d
    public Object c(pt.c cVar) {
        if (this.f49190a.b(cVar)) {
            return this.f49190a.c(cVar);
        }
        return this.f49191b.c(cVar);
    }
}
