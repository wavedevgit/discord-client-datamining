package bn;

import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {
    public static final ByteString a(BufferedSource bufferedSource) {
        Intrinsics.checkNotNullParameter(bufferedSource, "<this>");
        return bufferedSource.f1(bufferedSource.readInt());
    }

    public static final String b(BufferedSource bufferedSource) {
        Intrinsics.checkNotNullParameter(bufferedSource, "<this>");
        return a(bufferedSource).M();
    }

    public static final BufferedSink c(BufferedSink bufferedSink, ByteString bytes) {
        Intrinsics.checkNotNullParameter(bufferedSink, "<this>");
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        bufferedSink.writeInt(bytes.G()).Z1(bytes);
        return bufferedSink;
    }

    public static final BufferedSink d(BufferedSink bufferedSink, String str) {
        Intrinsics.checkNotNullParameter(bufferedSink, "<this>");
        Intrinsics.checkNotNullParameter(str, "str");
        return c(bufferedSink, ByteString.f43166o.g(str));
    }
}
