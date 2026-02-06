package ei;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final yg.k f21530d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j() {
        this.f21530d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final yg.k b() {
        return this.f21530d;
    }

    public final void c(Exception exc) {
        yg.k kVar = this.f21530d;
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

    public j(yg.k kVar) {
        this.f21530d = kVar;
    }
}
