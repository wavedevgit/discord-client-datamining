package o8;

import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Level;
import java.util.logging.Logger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    static final Logger f41595a = Logger.getLogger(b.class.getName());

    public static void a(Closeable closeable, boolean z10) {
        if (closeable == null) {
            return;
        }
        try {
            closeable.close();
        } catch (IOException e10) {
            if (z10) {
                f41595a.log(Level.WARNING, "IOException thrown while closing Closeable.", (Throwable) e10);
                return;
            }
            throw e10;
        }
    }

    public static void b(InputStream inputStream) {
        try {
            a(inputStream, true);
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }
}
