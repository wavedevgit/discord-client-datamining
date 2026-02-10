package androidx.core.graphics;

import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Insets {

    /* renamed from: e  reason: collision with root package name */
    public static final Insets f3300e = new Insets(0, 0, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final int f3301a;

    /* renamed from: b  reason: collision with root package name */
    public final int f3302b;

    /* renamed from: c  reason: collision with root package name */
    public final int f3303c;

    /* renamed from: d  reason: collision with root package name */
    public final int f3304d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static android.graphics.Insets a(int i10, int i11, int i12, int i13) {
            return android.graphics.Insets.of(i10, i11, i12, i13);
        }
    }

    private Insets(int i10, int i11, int i12, int i13) {
        this.f3301a = i10;
        this.f3302b = i11;
        this.f3303c = i12;
        this.f3304d = i13;
    }

    public static Insets a(Insets insets, Insets insets2) {
        return c(insets.f3301a + insets2.f3301a, insets.f3302b + insets2.f3302b, insets.f3303c + insets2.f3303c, insets.f3304d + insets2.f3304d);
    }

    public static Insets b(Insets insets, Insets insets2) {
        return c(Math.max(insets.f3301a, insets2.f3301a), Math.max(insets.f3302b, insets2.f3302b), Math.max(insets.f3303c, insets2.f3303c), Math.max(insets.f3304d, insets2.f3304d));
    }

    public static Insets c(int i10, int i11, int i12, int i13) {
        if (i10 == 0 && i11 == 0 && i12 == 0 && i13 == 0) {
            return f3300e;
        }
        return new Insets(i10, i11, i12, i13);
    }

    public static Insets d(Rect rect) {
        return c(rect.left, rect.top, rect.right, rect.bottom);
    }

    public static Insets e(Insets insets, Insets insets2) {
        return c(insets.f3301a - insets2.f3301a, insets.f3302b - insets2.f3302b, insets.f3303c - insets2.f3303c, insets.f3304d - insets2.f3304d);
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
        if (this.f3304d == insets.f3304d && this.f3301a == insets.f3301a && this.f3303c == insets.f3303c && this.f3302b == insets.f3302b) {
            return true;
        }
        return false;
    }

    public android.graphics.Insets g() {
        return a.a(this.f3301a, this.f3302b, this.f3303c, this.f3304d);
    }

    public int hashCode() {
        return (((((this.f3301a * 31) + this.f3302b) * 31) + this.f3303c) * 31) + this.f3304d;
    }

    public String toString() {
        return "Insets{left=" + this.f3301a + ", top=" + this.f3302b + ", right=" + this.f3303c + ", bottom=" + this.f3304d + '}';
    }
}
