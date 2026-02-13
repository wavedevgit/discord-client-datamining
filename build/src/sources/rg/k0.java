package rg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k0 extends gl {

    /* renamed from: i  reason: collision with root package name */
    private final m0 f47494i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(m0 m0Var, int i10) {
        super(m0Var.size(), i10);
        this.f47494i = m0Var;
    }

    @Override // rg.gl
    protected final Object a(int i10) {
        return this.f47494i.get(i10);
    }
}
