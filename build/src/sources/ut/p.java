package ut;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class p implements st.d {

    /* renamed from: a  reason: collision with root package name */
    private final st.d f52006a;

    /* renamed from: b  reason: collision with root package name */
    private final st.d f52007b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(st.d dVar, st.d dVar2) {
        this.f52006a = dVar;
        this.f52007b = dVar2;
    }

    @Override // st.d
    public Object a(st.c cVar) {
        if (this.f52006a.c(cVar)) {
            return this.f52006a.a(cVar);
        }
        return this.f52007b.a(cVar);
    }

    @Override // st.d
    public Object b(st.c cVar, Object obj) {
        if (this.f52006a.c(cVar)) {
            return this.f52006a.a(cVar);
        }
        return this.f52007b.b(cVar, obj);
    }

    @Override // st.d
    public boolean c(st.c cVar) {
        if (!this.f52006a.c(cVar) && !this.f52007b.c(cVar)) {
            return false;
        }
        return true;
    }
}
