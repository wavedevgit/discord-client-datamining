package li;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final zg.k f35963d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0() {
        this.f35963d = null;
    }

    public void a(Exception exc) {
        zg.k kVar = this.f35963d;
        if (kVar != null) {
            kVar.d(exc);
        }
    }

    protected abstract void b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.k c() {
        return this.f35963d;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            b();
        } catch (Exception e10) {
            a(e10);
        }
    }

    public u0(zg.k kVar) {
        this.f35963d = kVar;
    }
}
