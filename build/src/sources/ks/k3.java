package ks;

import java.lang.ref.WeakReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k3 {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f35402a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35403b;

    /* renamed from: c  reason: collision with root package name */
    private ClassLoader f35404c;

    public k3(ClassLoader classLoader) {
        Intrinsics.checkNotNullParameter(classLoader, "classLoader");
        this.f35402a = new WeakReference(classLoader);
        this.f35403b = System.identityHashCode(classLoader);
        this.f35404c = classLoader;
    }

    public final void a(ClassLoader classLoader) {
        this.f35404c = classLoader;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof k3) && this.f35402a.get() == ((k3) obj).f35402a.get()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f35403b;
    }

    public String toString() {
        String obj;
        ClassLoader classLoader = (ClassLoader) this.f35402a.get();
        if (classLoader != null && (obj = classLoader.toString()) != null) {
            return obj;
        }
        return "<null>";
    }
}
