package fs;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f24561a;

    /* renamed from: b  reason: collision with root package name */
    private final int f24562b;

    /* renamed from: c  reason: collision with root package name */
    private ClassLoader f24563c;

    public k3(ClassLoader classLoader) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        this.f24561a = new WeakReference(classLoader);
        this.f24562b = System.identityHashCode(classLoader);
        this.f24563c = classLoader;
    }

    public final void a(ClassLoader classLoader) {
        this.f24563c = classLoader;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof k3) && this.f24561a.get() == ((k3) obj).f24561a.get()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f24562b;
    }

    public String toString() {
        String obj;
        ClassLoader classLoader = (ClassLoader) this.f24561a.get();
        if (classLoader != null && (obj = classLoader.toString()) != null) {
            return obj;
        }
        return "<null>";
    }
}
