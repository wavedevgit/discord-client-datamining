package th;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final wg.k f50055d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0() {
        this.f50055d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final wg.k b() {
        return this.f50055d;
    }

    public final void c(Exception exc) {
        wg.k kVar = this.f50055d;
        if (kVar != null) {
            kVar.d(exc);
        }
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            a();
        } catch (Exception e10) {
            c(e10);
        }
    }

    public l0(wg.k kVar) {
        this.f50055d = kVar;
    }
}
