package mi;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f37057d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ li.d f37058e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f37059i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, li.d dVar) {
        this.f37059i = eVar;
        this.f37057d = list;
        this.f37058e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f37059i.f37062c;
            if (gVar.b(this.f37057d)) {
                e.d(this.f37059i, this.f37058e);
            } else {
                e.c(this.f37059i, this.f37057d, this.f37058e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f37058e.b(-11);
        }
    }
}
