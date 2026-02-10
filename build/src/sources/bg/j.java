package bg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ l f6597d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ j(l lVar, i iVar) {
        this.f6597d = lVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        long a10 = this.f6597d.a();
        if (a10 != -1 && com.google.android.gms.common.util.f.c().a() > a10) {
            l.e(l.b(this.f6597d));
        }
    }
}
