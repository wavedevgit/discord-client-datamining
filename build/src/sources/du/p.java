package du;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements bu.d {

    /* renamed from: a  reason: collision with root package name */
    private final bu.d f22109a;

    /* renamed from: b  reason: collision with root package name */
    private final bu.d f22110b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(bu.d dVar, bu.d dVar2) {
        this.f22109a = dVar;
        this.f22110b = dVar2;
    }

    @Override // bu.d
    public boolean a(bu.c cVar) {
        if (!this.f22109a.a(cVar) && !this.f22110b.a(cVar)) {
            return false;
        }
        return true;
    }

    @Override // bu.d
    public Object b(bu.c cVar, Object obj) {
        if (this.f22109a.a(cVar)) {
            return this.f22109a.c(cVar);
        }
        return this.f22110b.b(cVar, obj);
    }

    @Override // bu.d
    public Object c(bu.c cVar) {
        if (this.f22109a.a(cVar)) {
            return this.f22109a.c(cVar);
        }
        return this.f22110b.c(cVar);
    }
}
