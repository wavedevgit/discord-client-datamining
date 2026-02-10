package mi;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f36488d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ li.d f36489e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f36490i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, li.d dVar) {
        this.f36490i = eVar;
        this.f36488d = list;
        this.f36489e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f36490i.f36493c;
            if (gVar.b(this.f36488d)) {
                e.d(this.f36490i, this.f36489e);
            } else {
                e.c(this.f36490i, this.f36488d, this.f36489e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f36489e.b(-11);
        }
    }
}
