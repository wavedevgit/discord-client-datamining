package ds;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f22243a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22244b;

    /* renamed from: c  reason: collision with root package name */
    private ClassLoader f22245c;

    public k3(ClassLoader classLoader) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        this.f22243a = new WeakReference(classLoader);
        this.f22244b = System.identityHashCode(classLoader);
        this.f22245c = classLoader;
    }

    public final void a(ClassLoader classLoader) {
        this.f22245c = classLoader;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof k3) && this.f22243a.get() == ((k3) obj).f22243a.get()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f22244b;
    }

    public String toString() {
        String obj;
        ClassLoader classLoader = (ClassLoader) this.f22243a.get();
        if (classLoader != null && (obj = classLoader.toString()) != null) {
            return obj;
        }
        return "<null>";
    }
}
