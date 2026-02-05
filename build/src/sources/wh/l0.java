package wh;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final xg.k f53079d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0() {
        this.f53079d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final xg.k b() {
        return this.f53079d;
    }

    public final void c(Exception exc) {
        xg.k kVar = this.f53079d;
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

    public l0(xg.k kVar) {
        this.f53079d = kVar;
    }
}
