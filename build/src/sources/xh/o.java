package xh;

import java.io.Closeable;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o implements Closeable {
    public abstract long a();

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract InputStream g(long j10, long j11);

    public final synchronized InputStream k() {
        return g(0L, a());
    }
}
