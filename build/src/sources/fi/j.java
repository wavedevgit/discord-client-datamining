package fi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final zg.k f22638d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j() {
        this.f22638d = null;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final zg.k b() {
        return this.f22638d;
    }

    public final void c(Exception exc) {
        zg.k kVar = this.f22638d;
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

    public j(zg.k kVar) {
        this.f22638d = kVar;
    }
}
