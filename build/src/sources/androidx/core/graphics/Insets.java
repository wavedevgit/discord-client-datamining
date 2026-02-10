package androidx.core.graphics;

import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Insets {

    /* renamed from: e  reason: collision with root package name */
    public static final Insets f3303e = new Insets(0, 0, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final int f3304a;

    /* renamed from: b  reason: collision with root package name */
    public final int f3305b;

    /* renamed from: c  reason: collision with root package name */
    public final int f3306c;

    /* renamed from: d  reason: collision with root package name */
    public final int f3307d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static android.graphics.Insets a(int i10, int i11, int i12, int i13) {
            return android.graphics.Insets.of(i10, i11, i12, i13);
        }
    }

    private Insets(int i10, int i11, int i12, int i13) {
        this.f3304a = i10;
        this.f3305b = i11;
        this.f3306c = i12;
        this.f3307d = i13;
    }

    public static Insets a(Insets insets, Insets insets2) {
        return c(insets.f3304a + insets2.f3304a, insets.f3305b + insets2.f3305b, insets.f3306c + insets2.f3306c, insets.f3307d + insets2.f3307d);
    }

    public static Insets b(Insets insets, Insets insets2) {
        return c(Math.max(insets.f3304a, insets2.f3304a), Math.max(insets.f3305b, insets2.f3305b), Math.max(insets.f3306c, insets2.f3306c), Math.max(insets.f3307d, insets2.f3307d));
    }

    public static Insets c(int i10, int i11, int i12, int i13) {
        if (i10 == 0 && i11 == 0 && i12 == 0 && i13 == 0) {
            return f3303e;
        }
        return new Insets(i10, i11, i12, i13);
    }

    public static Insets d(Rect rect) {
        return c(rect.left, rect.top, rect.right, rect.bottom);
    }

    public static Insets e(Insets insets, Insets insets2) {
        return c(insets.f3304a - insets2.f3304a, insets.f3305b - insets2.f3305b, insets.f3306c - insets2.f3306c, insets.f3307d - insets2.f3307d);
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
        if (this.f3307d == insets.f3307d && this.f3304a == insets.f3304a && this.f3306c == insets.f3306c && this.f3305b == insets.f3305b) {
            return true;
        }
        return false;
    }

    public android.graphics.Insets g() {
        return a.a(this.f3304a, this.f3305b, this.f3306c, this.f3307d);
    }

    public int hashCode() {
        return (((((this.f3304a * 31) + this.f3305b) * 31) + this.f3306c) * 31) + this.f3307d;
    }

    public String toString() {
        return "Insets{left=" + this.f3304a + ", top=" + this.f3305b + ", right=" + this.f3306c + ", bottom=" + this.f3307d + '}';
    }
}
