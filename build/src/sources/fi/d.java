package fi;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f24406d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ ei.d f24407e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f24408i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, ei.d dVar) {
        this.f24408i = eVar;
        this.f24406d = list;
        this.f24407e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f24408i.f24411c;
            if (gVar.b(this.f24406d)) {
                e.d(this.f24408i, this.f24407e);
            } else {
                e.c(this.f24408i, this.f24406d, this.f24407e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f24407e.b(-11);
        }
    }
}
