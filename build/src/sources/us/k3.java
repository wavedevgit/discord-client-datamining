package us;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f51087a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51088b;

    /* renamed from: c  reason: collision with root package name */
    private ClassLoader f51089c;

    public k3(ClassLoader classLoader) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        this.f51087a = new WeakReference(classLoader);
        this.f51088b = System.identityHashCode(classLoader);
        this.f51089c = classLoader;
    }

    public final void a(ClassLoader classLoader) {
        this.f51089c = classLoader;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof k3) && this.f51087a.get() == ((k3) obj).f51087a.get()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f51088b;
    }

    public String toString() {
        String obj;
        ClassLoader classLoader = (ClassLoader) this.f51087a.get();
        if (classLoader != null && (obj = classLoader.toString()) != null) {
            return obj;
        }
        return "<null>";
    }
}
