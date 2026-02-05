package xg;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f53842d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Callable f53843e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(m0 m0Var, Callable callable) {
        this.f53842d = m0Var;
        this.f53843e = callable;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            this.f53842d.t(this.f53843e.call());
        } catch (Exception e10) {
            this.f53842d.s(e10);
        } catch (Throwable th2) {
            this.f53842d.s(new RuntimeException(th2));
        }
    }
}
