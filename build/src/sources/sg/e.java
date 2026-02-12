package sg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final zg.k f48093d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e() {
        this.f48093d = null;
    }

    public void a(Exception exc) {
        zg.k kVar = this.f48093d;
        if (kVar != null) {
            kVar.d(exc);
        }
    }

    protected abstract void b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.k c() {
        return this.f48093d;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            b();
        } catch (Exception e10) {
            a(e10);
        }
    }

    public e(zg.k kVar) {
        this.f48093d = kVar;
    }
}
