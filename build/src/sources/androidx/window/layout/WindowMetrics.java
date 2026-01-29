package androidx.window.layout;

import android.graphics.Rect;
import androidx.core.view.WindowInsetsCompat;
import h4.a;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WindowMetrics {

    /* renamed from: a  reason: collision with root package name */
    private final a f5437a;

    /* renamed from: b  reason: collision with root package name */
    private final WindowInsetsCompat f5438b;

    public WindowMetrics(a _bounds, WindowInsetsCompat _windowInsetsCompat) {
        Intrinsics.checkNotNullParameter(_bounds, "_bounds");
        Intrinsics.checkNotNullParameter(_windowInsetsCompat, "_windowInsetsCompat");
        this.f5437a = _bounds;
        this.f5438b = _windowInsetsCompat;
    }

    public final Rect a() {
        return this.f5437a.a();
    }

    public final WindowInsetsCompat b() {
        return this.f5438b;
    }

    public boolean equals(Object obj) {
        Class<?> cls;
        if (this == obj) {
            return true;
        }
        if (obj != null) {
            cls = obj.getClass();
        } else {
            cls = null;
        }
        if (!Intrinsics.areEqual(WindowMetrics.class, cls)) {
            return false;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type androidx.window.layout.WindowMetrics");
        WindowMetrics windowMetrics = (WindowMetrics) obj;
        if (Intrinsics.areEqual(this.f5437a, windowMetrics.f5437a) && Intrinsics.areEqual(this.f5438b, windowMetrics.f5438b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f5437a.hashCode() * 31) + this.f5438b.hashCode();
    }

    public String toString() {
        return "WindowMetrics( bounds=" + this.f5437a + ", windowInsetsCompat=" + this.f5438b + ')';
    }
}
