package ff;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ int f25055d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ e0 f25056e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(e0 e0Var, int i10) {
        this.f25056e = e0Var;
        this.f25055d = i10;
    }

    @Override // java.lang.Runnable
    public final void run() {
        this.f25056e.l(this.f25055d);
    }
}
