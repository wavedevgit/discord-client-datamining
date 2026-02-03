package ju;

import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f32317a = new a();

    private a() {
    }

    public final BufferedSink a(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        return x.c(sink);
    }

    public final BufferedSource b(Source source) {
        Intrinsics.checkNotNullParameter(source, "source");
        return x.d(source);
    }

    public final Sink c(File file) {
        Sink g10;
        Intrinsics.checkNotNullParameter(file, "file");
        g10 = y.g(file, false, 1, null);
        return g10;
    }

    public final Sink d(OutputStream outputStream) {
        Intrinsics.checkNotNullParameter(outputStream, "outputStream");
        return x.g(outputStream);
    }

    public final Source e(InputStream inputStream) {
        Intrinsics.checkNotNullParameter(inputStream, "inputStream");
        return x.k(inputStream);
    }
}
