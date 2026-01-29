package fi;

import android.util.Log;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ List f25195d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ ei.d f25196e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f25197i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(e eVar, List list, ei.d dVar) {
        this.f25197i = eVar;
        this.f25195d = list;
        this.f25196e = dVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        g gVar;
        try {
            gVar = this.f25197i.f25200c;
            if (gVar.b(this.f25195d)) {
                e.d(this.f25197i, this.f25196e);
            } else {
                e.c(this.f25197i, this.f25195d, this.f25196e);
            }
        } catch (Exception e10) {
            Log.e("SplitCompat", "Error checking verified files.", e10);
            this.f25196e.b(-11);
        }
    }
}
