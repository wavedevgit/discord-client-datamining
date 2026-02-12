package mi;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f36489d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ li.d f36490e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f36491i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, li.d dVar) {
        this.f36491i = eVar;
        this.f36489d = list;
        this.f36490e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f36491i.f36494c;
            if (gVar.b(this.f36489d)) {
                e.d(this.f36491i, this.f36490e);
            } else {
                e.c(this.f36491i, this.f36489d, this.f36490e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f36490e.b(-11);
        }
    }
}
