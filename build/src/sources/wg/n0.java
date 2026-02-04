package wg;

import java.util.concurrent.Callable;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ m0 f52417d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Callable f52418e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0(m0 m0Var, Callable callable) {
        this.f52417d = m0Var;
        this.f52418e = callable;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            this.f52417d.t(this.f52418e.call());
        } catch (Exception e10) {
            this.f52417d.s(e10);
        } catch (Throwable th2) {
            this.f52417d.s(new RuntimeException(th2));
        }
    }
}
