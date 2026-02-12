package ki;

import android.util.Log;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ a f31773d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(a aVar) {
        this.f31773d = aVar;
    }

    @Override // java.lang.Runnable
    public final void run() {
        f fVar;
        try {
            fVar = this.f31773d.f31745a;
            fVar.k();
        } catch (Exception e10) {
            Log.e("SplitCompat", "Failed to cleanup splitcompat storage", e10);
        }
    }
}
