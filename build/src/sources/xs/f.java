package xs;

import kotlinx.coroutines.sync.Mutex;
import ts.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final e0 f54769a = new e0("NO_OWNER");

    /* renamed from: b  reason: collision with root package name */
    private static final e0 f54770b = new e0("ALREADY_LOCKED_BY_OWNER");

    public static final Mutex a(boolean z10) {
        return new e(z10);
    }

    public static /* synthetic */ Mutex b(boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        return a(z10);
    }
}
