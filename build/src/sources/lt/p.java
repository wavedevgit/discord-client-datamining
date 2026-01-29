package lt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements jt.d {

    /* renamed from: a  reason: collision with root package name */
    private final jt.d f37670a;

    /* renamed from: b  reason: collision with root package name */
    private final jt.d f37671b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(jt.d dVar, jt.d dVar2) {
        this.f37670a = dVar;
        this.f37671b = dVar2;
    }

    @Override // jt.d
    public boolean a(jt.c cVar) {
        if (!this.f37670a.a(cVar) && !this.f37671b.a(cVar)) {
            return false;
        }
        return true;
    }

    @Override // jt.d
    public Object b(jt.c cVar, Object obj) {
        if (this.f37670a.a(cVar)) {
            return this.f37670a.c(cVar);
        }
        return this.f37671b.b(cVar, obj);
    }

    @Override // jt.d
    public Object c(jt.c cVar) {
        if (this.f37670a.a(cVar)) {
            return this.f37670a.c(cVar);
        }
        return this.f37671b.c(cVar);
    }
}
