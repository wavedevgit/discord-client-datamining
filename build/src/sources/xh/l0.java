package xh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final yg.k f54666d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0() {
        this.f54666d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final yg.k b() {
        return this.f54666d;
    }

    public final void c(Exception exc) {
        yg.k kVar = this.f54666d;
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

    public l0(yg.k kVar) {
        this.f54666d = kVar;
    }
}
