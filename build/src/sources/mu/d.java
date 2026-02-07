package mu;

import java.util.logging.Handler;
import java.util.logging.LogRecord;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d extends Handler {

    /* renamed from: a  reason: collision with root package name */
    public static final d f38353a = new d();

    private d() {
    }

    @Override // java.util.logging.Handler
    public void publish(LogRecord record) {
        int b10;
        Intrinsics.checkNotNullParameter(record, "record");
        c cVar = c.f38350a;
        String loggerName = record.getLoggerName();
        Intrinsics.checkNotNullExpressionValue(loggerName, "record.loggerName");
        b10 = e.b(record);
        String message = record.getMessage();
        Intrinsics.checkNotNullExpressionValue(message, "record.message");
        cVar.a(loggerName, b10, message, record.getThrown());
    }

    @Override // java.util.logging.Handler
    public void close() {
    }

    @Override // java.util.logging.Handler
    public void flush() {
    }
}
