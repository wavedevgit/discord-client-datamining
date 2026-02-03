package hs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class o0 implements kotlinx.coroutines.d {

    /* renamed from: d  reason: collision with root package name */
    private final n0 f27930d;

    public o0(n0 n0Var) {
        this.f27930d = n0Var;
    }

    @Override // kotlinx.coroutines.d
    public void a(Throwable th2) {
        this.f27930d.dispose();
    }

    public String toString() {
        return "DisposeOnCancel[" + this.f27930d + ']';
    }
}
