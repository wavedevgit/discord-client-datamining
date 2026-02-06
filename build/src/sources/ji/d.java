package ji;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f29888d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ ii.d f29889e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f29890i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, ii.d dVar) {
        this.f29890i = eVar;
        this.f29888d = list;
        this.f29889e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f29890i.f29893c;
            if (gVar.b(this.f29888d)) {
                e.d(this.f29890i, this.f29889e);
            } else {
                e.c(this.f29890i, this.f29888d, this.f29889e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f29889e.b(-11);
        }
    }
}
