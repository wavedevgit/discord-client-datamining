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
    private final f f36749a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final Map f36750b = new LinkedHashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Set f36751c = new LinkedHashSet();

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f36752d;

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
        if (this.f36752d) {
            f(closeable);
            return;
        }
        synchronized (this.f36749a) {
            autoCloseable = (AutoCloseable) this.f36750b.put(key, closeable);
        }
        f(autoCloseable);
    }

    public final void e() {
        if (this.f36752d) {
            return;
        }
        this.f36752d = true;
        synchronized (this.f36749a) {
            try {
                for (AutoCloseable autoCloseable : this.f36750b.values()) {
                    f(autoCloseable);
                }
                for (AutoCloseable autoCloseable2 : this.f36751c) {
                    f(autoCloseable2);
                }
                this.f36751c.clear();
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final AutoCloseable g(String key) {
        AutoCloseable autoCloseable;
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f36749a) {
            autoCloseable = (AutoCloseable) this.f36750b.get(key);
        }
        return autoCloseable;
    }
}
