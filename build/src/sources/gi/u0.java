package gi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final wg.k f26940d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0() {
        this.f26940d = null;
    }

    public void a(Exception exc) {
        wg.k kVar = this.f26940d;
        if (kVar != null) {
            kVar.d(exc);
        }
    }

    protected abstract void b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final wg.k c() {
        return this.f26940d;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            b();
        } catch (Exception e10) {
            a(e10);
        }
    }

    public u0(wg.k kVar) {
        this.f26940d = kVar;
    }
}
