package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k0 extends gl {

    /* renamed from: i  reason: collision with root package name */
    private final m0 f45513i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(m0 m0Var, int i10) {
        super(m0Var.size(), i10);
        this.f45513i = m0Var;
    }

    @Override // pg.gl
    protected final Object a(int i10) {
        return this.f45513i.get(i10);
    }
}
