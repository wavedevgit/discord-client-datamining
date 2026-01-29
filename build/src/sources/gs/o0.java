package gs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class o0 implements kotlinx.coroutines.d {

    /* renamed from: d  reason: collision with root package name */
    private final n0 f27167d;

    public o0(n0 n0Var) {
        this.f27167d = n0Var;
    }

    @Override // kotlinx.coroutines.d
    public void c(Throwable th2) {
        this.f27167d.dispose();
    }

    public String toString() {
        return "DisposeOnCancel[" + this.f27167d + ']';
    }
}
