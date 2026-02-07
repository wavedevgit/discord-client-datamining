package ki;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final yg.k f31743d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0() {
        this.f31743d = null;
    }

    public void a(Exception exc) {
        yg.k kVar = this.f31743d;
        if (kVar != null) {
            kVar.d(exc);
        }
    }

    protected abstract void b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final yg.k c() {
        return this.f31743d;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            b();
        } catch (Exception e10) {
            a(e10);
        }
    }

    public u0(yg.k kVar) {
        this.f31743d = kVar;
    }
}
