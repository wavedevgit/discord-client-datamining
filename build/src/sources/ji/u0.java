package ji;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final xg.k f30947d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0() {
        this.f30947d = null;
    }

    public void a(Exception exc) {
        xg.k kVar = this.f30947d;
        if (kVar != null) {
            kVar.d(exc);
        }
    }

    protected abstract void b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final xg.k c() {
        return this.f30947d;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            b();
        } catch (Exception e10) {
            a(e10);
        }
    }

    public u0(xg.k kVar) {
        this.f30947d = kVar;
    }
}
