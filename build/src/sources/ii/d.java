package ii;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f27390d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ hi.d f27391e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f27392i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, hi.d dVar) {
        this.f27392i = eVar;
        this.f27390d = list;
        this.f27391e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f27392i.f27395c;
            if (gVar.b(this.f27390d)) {
                e.d(this.f27392i, this.f27391e);
            } else {
                e.c(this.f27392i, this.f27390d, this.f27391e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f27391e.b(-11);
        }
    }
}
