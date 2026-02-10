package yh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final zg.k f55649d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0() {
        this.f55649d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.k b() {
        return this.f55649d;
    }

    public final void c(Exception exc) {
        zg.k kVar = this.f55649d;
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

    public l0(zg.k kVar) {
        this.f55649d = kVar;
    }
}
