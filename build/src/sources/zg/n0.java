package zg;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f57027d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Callable f57028e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(m0 m0Var, Callable callable) {
        this.f57027d = m0Var;
        this.f57028e = callable;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            this.f57027d.t(this.f57028e.call());
        } catch (Exception e10) {
            this.f57027d.s(e10);
        } catch (Throwable th2) {
            this.f57027d.s(new RuntimeException(th2));
        }
    }
}
