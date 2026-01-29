package th;

import java.io.Closeable;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o implements Closeable {
    public abstract long a();

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract InputStream h(long j10, long j11);

    public final synchronized InputStream l() {
        return h(0L, a());
    }
}
