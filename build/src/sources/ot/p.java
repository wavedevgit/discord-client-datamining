package ot;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements mt.d {

    /* renamed from: a  reason: collision with root package name */
    private final mt.d f44741a;

    /* renamed from: b  reason: collision with root package name */
    private final mt.d f44742b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(mt.d dVar, mt.d dVar2) {
        this.f44741a = dVar;
        this.f44742b = dVar2;
    }

    @Override // mt.d
    public boolean a(mt.c cVar) {
        if (!this.f44741a.a(cVar) && !this.f44742b.a(cVar)) {
            return false;
        }
        return true;
    }

    @Override // mt.d
    public Object b(mt.c cVar, Object obj) {
        if (this.f44741a.a(cVar)) {
            return this.f44741a.c(cVar);
        }
        return this.f44742b.b(cVar, obj);
    }

    @Override // mt.d
    public Object c(mt.c cVar) {
        if (this.f44741a.a(cVar)) {
            return this.f44741a.c(cVar);
        }
        return this.f44742b.c(cVar);
    }
}
