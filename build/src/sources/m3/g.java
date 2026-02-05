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
    private final f f37260a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final Map f37261b = new LinkedHashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Set f37262c = new LinkedHashSet();

    /* renamed from: d  reason: collision with root package name */
    private volatile boolean f37263d;

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
        if (this.f37263d) {
            f(closeable);
            return;
        }
        synchronized (this.f37260a) {
            autoCloseable = (AutoCloseable) this.f37261b.put(key, closeable);
        }
        f(autoCloseable);
    }

    public final void e() {
        if (this.f37263d) {
            return;
        }
        this.f37263d = true;
        synchronized (this.f37260a) {
            try {
                for (AutoCloseable autoCloseable : this.f37261b.values()) {
                    f(autoCloseable);
                }
                for (AutoCloseable autoCloseable2 : this.f37262c) {
                    f(autoCloseable2);
                }
                this.f37262c.clear();
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final AutoCloseable g(String key) {
        AutoCloseable autoCloseable;
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f37260a) {
            autoCloseable = (AutoCloseable) this.f37261b.get(key);
        }
        return autoCloseable;
    }
}
