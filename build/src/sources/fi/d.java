package fi;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f23998d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ ei.d f23999e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f24000i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, ei.d dVar) {
        this.f24000i = eVar;
        this.f23998d = list;
        this.f23999e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f24000i.f24003c;
            if (gVar.b(this.f23998d)) {
                e.d(this.f24000i, this.f23999e);
            } else {
                e.c(this.f24000i, this.f23998d, this.f23999e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f23999e.b(-11);
        }
    }
}
