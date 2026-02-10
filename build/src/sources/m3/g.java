package m3;

import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final f f36124a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final Map f36125b = new LinkedHashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Set f36126c = new LinkedHashSet();

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f36127d;

    /* JADX INFO: Access modifiers changed from: private */
    public final void f(AutoCloseable autoCloseable) {
        if (autoCloseable != null) {
            try {
                q1.e.a(autoCloseable);
            } catch (Exception e10) {
                throw new RuntimeException(e10);
            }
        }
    }

    public final void d(String key, AutoCloseable closeable) {
        AutoCloseable autoCloseable;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(closeable, "closeable");
        if (this.f36127d) {
            f(closeable);
            return;
        }
        synchronized (this.f36124a) {
            autoCloseable = (AutoCloseable) this.f36125b.put(key, closeable);
        }
        f(autoCloseable);
    }

    public final void e() {
        if (this.f36127d) {
            return;
        }
        this.f36127d = true;
        synchronized (this.f36124a) {
            try {
                for (AutoCloseable autoCloseable : this.f36125b.values()) {
                    f(autoCloseable);
                }
                for (AutoCloseable autoCloseable2 : this.f36126c) {
                    f(autoCloseable2);
                }
                this.f36126c.clear();
                Unit unit = Unit.f31987a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final AutoCloseable g(String key) {
        AutoCloseable autoCloseable;
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f36124a) {
            autoCloseable = (AutoCloseable) this.f36125b.get(key);
        }
        return autoCloseable;
    }
}
