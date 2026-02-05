package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final xg.k f47880d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e() {
        this.f47880d = null;
    }

    public void a(Exception exc) {
        xg.k kVar = this.f47880d;
        if (kVar != null) {
            kVar.d(exc);
        }
    }

    protected abstract void b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final xg.k c() {
        return this.f47880d;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            b();
        } catch (Exception e10) {
            a(e10);
        }
    }

    public e(xg.k kVar) {
        this.f47880d = kVar;
    }
}
