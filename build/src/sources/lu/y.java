package lu;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.logging.Logger;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okio.Sink;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class y {

    /* renamed from: a */
    private static final Logger f37343a = Logger.getLogger("okio.Okio");

    public static final Sink b(File file) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        return x.g(new FileOutputStream(file, true));
    }

    public static final boolean c(AssertionError assertionError) {
        boolean z10;
        Intrinsics.checkNotNullParameter(assertionError, "<this>");
        if (assertionError.getCause() != null) {
            String message = assertionError.getMessage();
            if (message != null) {
                z10 = StringsKt.V(message, "getsockname failed", false, 2, null);
            } else {
                z10 = false;
            }
            if (z10) {
                return true;
            }
        }
        return false;
    }

    public static final Sink d(File file, boolean z10) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        return x.g(new FileOutputStream(file, z10));
    }

    public static final Sink e(OutputStream outputStream) {
        Intrinsics.checkNotNullParameter(outputStream, "<this>");
        return new b0(outputStream, new Timeout());
    }

    public static final Sink f(Socket socket) {
        Intrinsics.checkNotNullParameter(socket, "<this>");
        j0 j0Var = new j0(socket);
        OutputStream outputStream = socket.getOutputStream();
        Intrinsics.checkNotNullExpressionValue(outputStream, "getOutputStream(...)");
        return j0Var.z(new b0(outputStream, j0Var));
    }

    public static /* synthetic */ Sink g(File file, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        return x.f(file, z10);
    }

    public static final Source h(File file) {
        Intrinsics.checkNotNullParameter(file, "<this>");
        return new p(new FileInputStream(file), Timeout.f44313e);
    }

    public static final Source i(InputStream inputStream) {
        Intrinsics.checkNotNullParameter(inputStream, "<this>");
        return new p(inputStream, new Timeout());
    }

    public static final Source j(Socket socket) {
        Intrinsics.checkNotNullParameter(socket, "<this>");
        j0 j0Var = new j0(socket);
        InputStream inputStream = socket.getInputStream();
        Intrinsics.checkNotNullExpressionValue(inputStream, "getInputStream(...)");
        return j0Var.A(new p(inputStream, j0Var));
    }
}
