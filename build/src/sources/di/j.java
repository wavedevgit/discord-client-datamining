package di;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final xg.k f20815d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j() {
        this.f20815d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final xg.k b() {
        return this.f20815d;
    }

    public final void c(Exception exc) {
        xg.k kVar = this.f20815d;
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

    public j(xg.k kVar) {
        this.f20815d = kVar;
    }
}
