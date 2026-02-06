package qv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a extends r {
    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qv.r
    public void j(r rVar) {
        if (rVar instanceof a) {
            super.j(rVar);
            return;
        }
        throw new IllegalArgumentException("Parent of block must also be block (can not be inline)");
    }

    @Override // qv.r
    /* renamed from: m */
    public a f() {
        return (a) super.f();
    }
}
