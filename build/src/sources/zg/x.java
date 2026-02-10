package zg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ y f56480d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(y yVar) {
        this.f56480d = yVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        e eVar;
        e eVar2;
        obj = this.f56480d.f56482b;
        synchronized (obj) {
            try {
                y yVar = this.f56480d;
                eVar = yVar.f56483c;
                if (eVar != null) {
                    eVar2 = yVar.f56483c;
                    eVar2.a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
