package wg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ y f52637d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(y yVar) {
        this.f52637d = yVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Object obj;
        e eVar;
        e eVar2;
        obj = this.f52637d.f52639b;
        synchronized (obj) {
            try {
                y yVar = this.f52637d;
                eVar = yVar.f52640c;
                if (eVar != null) {
                    eVar2 = yVar.f52640c;
                    eVar2.a();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
