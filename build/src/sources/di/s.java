package di;

import android.util.Log;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Set f20627d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ a f20628e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a aVar, Set set) {
        this.f20628e = aVar;
        this.f20627d = set;
    }

    @Override // java.lang.Runnable
    public final void run() {
        try {
            this.f20628e.h(this.f20627d);
        } catch (Exception e10) {
            Log.e("SplitCompat", "Failed to remove from splitcompat storage split that is already installed", e10);
        }
    }
}
