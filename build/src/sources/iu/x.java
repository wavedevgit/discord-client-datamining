package iu;

import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x {
    public static final Sink a(File file) {
        return y.b(file);
    }

    public static final Sink b() {
        return z.a();
    }

    public static final BufferedSink c(Sink sink) {
        return z.b(sink);
    }

    public static final BufferedSource d(Source source) {
        return z.c(source);
    }

    public static final boolean e(AssertionError assertionError) {
        return y.c(assertionError);
    }

    public static final Sink f(File file, boolean z10) {
        return y.d(file, z10);
    }

    public static final Sink g(OutputStream outputStream) {
        return y.e(outputStream);
    }

    public static final Sink h(Socket socket) {
        return y.f(socket);
    }

    public static final Source j(File file) {
        return y.h(file);
    }

    public static final Source k(InputStream inputStream) {
        return y.i(inputStream);
    }

    public static final Source l(Socket socket) {
        return y.j(socket);
    }
}
