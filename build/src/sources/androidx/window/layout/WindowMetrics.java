package androidx.window.layout;

import android.graphics.Rect;
import androidx.core.view.WindowInsetsCompat;
import h4.a;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WindowMetrics {

    /* renamed from: a  reason: collision with root package name */
    private final a f5450a;

    /* renamed from: b  reason: collision with root package name */
    private final WindowInsetsCompat f5451b;

    public WindowMetrics(a _bounds, WindowInsetsCompat _windowInsetsCompat) {
        Intrinsics.checkNotNullParameter(_bounds, "_bounds");
        Intrinsics.checkNotNullParameter(_windowInsetsCompat, "_windowInsetsCompat");
        this.f5450a = _bounds;
        this.f5451b = _windowInsetsCompat;
    }

    public final Rect a() {
        return this.f5450a.a();
    }

    public final WindowInsetsCompat b() {
        return this.f5451b;
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
        if (Intrinsics.areEqual(this.f5450a, windowMetrics.f5450a) && Intrinsics.areEqual(this.f5451b, windowMetrics.f5451b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f5450a.hashCode() * 31) + this.f5451b.hashCode();
    }

    public String toString() {
        return "WindowMetrics( bounds=" + this.f5450a + ", windowInsetsCompat=" + this.f5451b + ')';
    }
}
