package is;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f30248a;

    /* renamed from: b  reason: collision with root package name */
    private final int f30249b;

    /* renamed from: c  reason: collision with root package name */
    private ClassLoader f30250c;

    public k3(ClassLoader classLoader) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        this.f30248a = new WeakReference(classLoader);
        this.f30249b = System.identityHashCode(classLoader);
        this.f30250c = classLoader;
    }

    public final void a(ClassLoader classLoader) {
        this.f30250c = classLoader;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof k3) && this.f30248a.get() == ((k3) obj).f30248a.get()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f30249b;
    }

    public String toString() {
        String obj;
        ClassLoader classLoader = (ClassLoader) this.f30248a.get();
        if (classLoader != null && (obj = classLoader.toString()) != null) {
            return obj;
        }
        return "<null>";
    }
}
