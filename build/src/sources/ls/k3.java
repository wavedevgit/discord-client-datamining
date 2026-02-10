package ls;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f36481a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36482b;

    /* renamed from: c  reason: collision with root package name */
    private ClassLoader f36483c;

    public k3(ClassLoader classLoader) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        this.f36481a = new WeakReference(classLoader);
        this.f36482b = System.identityHashCode(classLoader);
        this.f36483c = classLoader;
    }

    public final void a(ClassLoader classLoader) {
        this.f36483c = classLoader;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof k3) && this.f36481a.get() == ((k3) obj).f36481a.get()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f36482b;
    }

    public String toString() {
        String obj;
        ClassLoader classLoader = (ClassLoader) this.f36481a.get();
        if (classLoader != null && (obj = classLoader.toString()) != null) {
            return obj;
        }
        return "<null>";
    }
}
