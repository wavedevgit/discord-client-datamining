package h4;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f26182a;

    /* renamed from: b  reason: collision with root package name */
    private final int f26183b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26184c;

    /* renamed from: d  reason: collision with root package name */
    private final int f26185d;

    public a(int i10, int i11, int i12, int i13) {
        this.f26182a = i10;
        this.f26183b = i11;
        this.f26184c = i12;
        this.f26185d = i13;
        if (i10 > i12) {
            throw new IllegalArgumentException(("Left must be less than or equal to right, left: " + i10 + ", right: " + i12).toString());
        } else if (i11 <= i13) {
        } else {
            throw new IllegalArgumentException(("top must be less than or equal to bottom, top: " + i11 + ", bottom: " + i13).toString());
        }
    }

    public final Rect a() {
        return new Rect(this.f26182a, this.f26183b, this.f26184c, this.f26185d);
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
        if (!Intrinsics.areEqual(a.class, cls)) {
            return false;
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type androidx.window.core.Bounds");
        a aVar = (a) obj;
        if (this.f26182a == aVar.f26182a && this.f26183b == aVar.f26183b && this.f26184c == aVar.f26184c && this.f26185d == aVar.f26185d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f26182a * 31) + this.f26183b) * 31) + this.f26184c) * 31) + this.f26185d;
    }

    public String toString() {
        return a.class.getSimpleName() + " { [" + this.f26182a + ',' + this.f26183b + ',' + this.f26184c + ',' + this.f26185d + "] }";
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(Rect rect) {
        this(rect.left, rect.top, rect.right, rect.bottom);
        Intrinsics.checkNotNullParameter(rect, "rect");
    }
}
