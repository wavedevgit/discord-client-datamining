package ff;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ int f23858d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ e0 f23859e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(e0 e0Var, int i10) {
        this.f23859e = e0Var;
        this.f23858d = i10;
    }

    @Override // java.lang.Runnable
    public final void run() {
        this.f23859e.l(this.f23858d);
    }
}
