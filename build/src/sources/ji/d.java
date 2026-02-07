package ji;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f29936d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ ii.d f29937e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f29938i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, ii.d dVar) {
        this.f29938i = eVar;
        this.f29936d = list;
        this.f29937e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f29938i.f29941c;
            if (gVar.b(this.f29936d)) {
                e.d(this.f29938i, this.f29937e);
            } else {
                e.c(this.f29938i, this.f29936d, this.f29937e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f29937e.b(-11);
        }
    }
}
