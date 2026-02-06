package ts;

import java.util.Collection;
import java.util.ServiceLoader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final Collection f50823a = kotlin.sequences.k.Y(kotlin.sequences.k.h(ServiceLoader.load(os.z.class, os.z.class.getClassLoader()).iterator()));

    public static final Collection a() {
        return f50823a;
    }

    public static final void b(Throwable th2) {
        Thread currentThread = Thread.currentThread();
        currentThread.getUncaughtExceptionHandler().uncaughtException(currentThread, th2);
    }
}
