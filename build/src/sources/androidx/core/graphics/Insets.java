package androidx.core.graphics;

import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Insets {

    /* renamed from: e  reason: collision with root package name */
    public static final Insets f3149e = new Insets(0, 0, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final int f3150a;

    /* renamed from: b  reason: collision with root package name */
    public final int f3151b;

    /* renamed from: c  reason: collision with root package name */
    public final int f3152c;

    /* renamed from: d  reason: collision with root package name */
    public final int f3153d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static android.graphics.Insets a(int i10, int i11, int i12, int i13) {
            return android.graphics.Insets.of(i10, i11, i12, i13);
        }
    }

    private Insets(int i10, int i11, int i12, int i13) {
        this.f3150a = i10;
        this.f3151b = i11;
        this.f3152c = i12;
        this.f3153d = i13;
    }

    public static Insets a(Insets insets, Insets insets2) {
        return c(insets.f3150a + insets2.f3150a, insets.f3151b + insets2.f3151b, insets.f3152c + insets2.f3152c, insets.f3153d + insets2.f3153d);
    }

    public static Insets b(Insets insets, Insets insets2) {
        return c(Math.max(insets.f3150a, insets2.f3150a), Math.max(insets.f3151b, insets2.f3151b), Math.max(insets.f3152c, insets2.f3152c), Math.max(insets.f3153d, insets2.f3153d));
    }

    public static Insets c(int i10, int i11, int i12, int i13) {
        if (i10 == 0 && i11 == 0 && i12 == 0 && i13 == 0) {
            return f3149e;
        }
        return new Insets(i10, i11, i12, i13);
    }

    public static Insets d(Rect rect) {
        return c(rect.left, rect.top, rect.right, rect.bottom);
    }

    public static Insets e(Insets insets, Insets insets2) {
        return c(insets.f3150a - insets2.f3150a, insets.f3151b - insets2.f3151b, insets.f3152c - insets2.f3152c, insets.f3153d - insets2.f3153d);
    }

    public static Insets f(android.graphics.Insets insets) {
        int i10;
        int i11;
        int i12;
        int i13;
        i10 = insets.left;
        i11 = insets.top;
        i12 = insets.right;
        i13 = insets.bottom;
        return c(i10, i11, i12, i13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || Insets.class != obj.getClass()) {
            return false;
        }
        Insets insets = (Insets) obj;
        if (this.f3153d == insets.f3153d && this.f3150a == insets.f3150a && this.f3152c == insets.f3152c && this.f3151b == insets.f3151b) {
            return true;
        }
        return false;
    }

    public android.graphics.Insets g() {
        return a.a(this.f3150a, this.f3151b, this.f3152c, this.f3153d);
    }

    public int hashCode() {
        return (((((this.f3150a * 31) + this.f3151b) * 31) + this.f3152c) * 31) + this.f3153d;
    }

    public String toString() {
        return "Insets{left=" + this.f3150a + ", top=" + this.f3151b + ", right=" + this.f3152c + ", bottom=" + this.f3153d + '}';
    }
}
