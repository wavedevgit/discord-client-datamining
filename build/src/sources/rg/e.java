package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final yg.k f48903d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e() {
        this.f48903d = null;
    }

    public void a(Exception exc) {
        yg.k kVar = this.f48903d;
        if (kVar != null) {
            kVar.d(exc);
        }
    }

    protected abstract void b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final yg.k c() {
        return this.f48903d;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            b();
        } catch (Exception e10) {
            a(e10);
        }
    }

    public e(yg.k kVar) {
        this.f48903d = kVar;
    }
}
