package h4;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final int f25653a;

    /* renamed from: b  reason: collision with root package name */
    private final int f25654b;

    /* renamed from: c  reason: collision with root package name */
    private final int f25655c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25656d;

    public a(int i10, int i11, int i12, int i13) {
        this.f25653a = i10;
        this.f25654b = i11;
        this.f25655c = i12;
        this.f25656d = i13;
        if (i10 > i12) {
            throw new IllegalArgumentException(("Left must be less than or equal to right, left: " + i10 + ", right: " + i12).toString());
        } else if (i11 <= i13) {
        } else {
            throw new IllegalArgumentException(("top must be less than or equal to bottom, top: " + i11 + ", bottom: " + i13).toString());
        }
    }

    public final Rect a() {
        return new Rect(this.f25653a, this.f25654b, this.f25655c, this.f25656d);
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
        if (this.f25653a == aVar.f25653a && this.f25654b == aVar.f25654b && this.f25655c == aVar.f25655c && this.f25656d == aVar.f25656d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f25653a * 31) + this.f25654b) * 31) + this.f25655c) * 31) + this.f25656d;
    }

    public String toString() {
        return a.class.getSimpleName() + " { [" + this.f25653a + ',' + this.f25654b + ',' + this.f25655c + ',' + this.f25656d + "] }";
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(Rect rect) {
        this(rect.left, rect.top, rect.right, rect.bottom);
        Intrinsics.checkNotNullParameter(rect, "rect");
    }
}
