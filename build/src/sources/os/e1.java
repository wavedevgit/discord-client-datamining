package os;

import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e1 implements n0, n {

    /* renamed from: d  reason: collision with root package name */
    public static final e1 f43548d = new e1();

    private e1() {
    }

    @Override // os.n
    public boolean d(Throwable th2) {
        return false;
    }

    @Override // os.n
    public Job getParent() {
        return null;
    }

    public String toString() {
        return "NonDisposableHandle";
    }

    @Override // os.n0
    public void dispose() {
    }
}
