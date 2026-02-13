package zg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class x implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ y f57049d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(y yVar) {
        this.f57049d = yVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        e eVar;
        e eVar2;
        obj = this.f57049d.f57051b;
        synchronized (obj) {
            try {
                y yVar = this.f57049d;
                eVar = yVar.f57052c;
                if (eVar != null) {
                    eVar2 = yVar.f57052c;
                    eVar2.a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
