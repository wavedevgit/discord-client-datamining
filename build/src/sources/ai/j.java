package ai;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final wg.k f629d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j() {
        this.f629d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final wg.k b() {
        return this.f629d;
    }

    public final void c(Exception exc) {
        wg.k kVar = this.f629d;
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

    public j(wg.k kVar) {
        this.f629d = kVar;
    }
}
