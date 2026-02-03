package di;

import android.util.Log;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Set f21768d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a f21769e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a aVar, Set set) {
        this.f21769e = aVar;
        this.f21768d = set;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            this.f21769e.h(this.f21768d);
        } catch (Exception e10) {
            Log.e("SplitCompat", "Failed to remove from splitcompat storage split that is already installed", e10);
        }
    }
}
