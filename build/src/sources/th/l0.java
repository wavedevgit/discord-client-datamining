package th;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final wg.k f49575d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0() {
        this.f49575d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final wg.k b() {
        return this.f49575d;
    }

    public final void c(Exception exc) {
        wg.k kVar = this.f49575d;
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
        this.f49575d = kVar;
    }
}
