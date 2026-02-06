package jv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a extends r {
    @Override // jv.r
    protected void j(r rVar) {
        if (rVar instanceof a) {
            super.j(rVar);
            return;
        }
        throw new IllegalArgumentException("Parent of block must also be block (can not be inline)");
    }

    @Override // jv.r
    /* renamed from: m */
    public a f() {
        return (a) super.f();
    }
}
