package okio;

import java.io.Closeable;
import java.io.Flushable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Sink extends Closeable, Flushable {
    @Override // java.io.Closeable, java.lang.AutoCloseable
    void close();

    void flush();

    Timeout timeout();

    void u0(Buffer buffer, long j10);
}
