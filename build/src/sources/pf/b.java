package pf;

import android.os.Process;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final Runnable f43280d;

    public b(Runnable runnable, int i10) {
        this.f43280d = runnable;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Process.setThreadPriority(0);
        this.f43280d.run();
    }
}
