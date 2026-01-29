package cs;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f21184a;

    /* renamed from: b  reason: collision with root package name */
    private final int f21185b;

    /* renamed from: c  reason: collision with root package name */
    private ClassLoader f21186c;

    public k3(ClassLoader classLoader) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        this.f21184a = new WeakReference(classLoader);
        this.f21185b = System.identityHashCode(classLoader);
        this.f21186c = classLoader;
    }

    public final void a(ClassLoader classLoader) {
        this.f21186c = classLoader;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof k3) && this.f21184a.get() == ((k3) obj).f21184a.get()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f21185b;
    }

    public String toString() {
        String obj;
        ClassLoader classLoader = (ClassLoader) this.f21184a.get();
        if (classLoader != null && (obj = classLoader.toString()) != null) {
            return obj;
        }
        return "<null>";
    }
}
