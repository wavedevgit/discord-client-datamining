package androidx.core.graphics;

import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Insets {

    /* renamed from: e  reason: collision with root package name */
    public static final Insets f3193e = new Insets(0, 0, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final int f3194a;

    /* renamed from: b  reason: collision with root package name */
    public final int f3195b;

    /* renamed from: c  reason: collision with root package name */
    public final int f3196c;

    /* renamed from: d  reason: collision with root package name */
    public final int f3197d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static android.graphics.Insets a(int i10, int i11, int i12, int i13) {
            return android.graphics.Insets.of(i10, i11, i12, i13);
        }
    }

    private Insets(int i10, int i11, int i12, int i13) {
        this.f3194a = i10;
        this.f3195b = i11;
        this.f3196c = i12;
        this.f3197d = i13;
    }

    public static Insets a(Insets insets, Insets insets2) {
        return c(insets.f3194a + insets2.f3194a, insets.f3195b + insets2.f3195b, insets.f3196c + insets2.f3196c, insets.f3197d + insets2.f3197d);
    }

    public static Insets b(Insets insets, Insets insets2) {
        return c(Math.max(insets.f3194a, insets2.f3194a), Math.max(insets.f3195b, insets2.f3195b), Math.max(insets.f3196c, insets2.f3196c), Math.max(insets.f3197d, insets2.f3197d));
    }

    public static Insets c(int i10, int i11, int i12, int i13) {
        if (i10 == 0 && i11 == 0 && i12 == 0 && i13 == 0) {
            return f3193e;
        }
        return new Insets(i10, i11, i12, i13);
    }

    public static Insets d(Rect rect) {
        return c(rect.left, rect.top, rect.right, rect.bottom);
    }

    public static Insets e(Insets insets, Insets insets2) {
        return c(insets.f3194a - insets2.f3194a, insets.f3195b - insets2.f3195b, insets.f3196c - insets2.f3196c, insets.f3197d - insets2.f3197d);
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
        if (this.f3197d == insets.f3197d && this.f3194a == insets.f3194a && this.f3196c == insets.f3196c && this.f3195b == insets.f3195b) {
            return true;
        }
        return false;
    }

    public android.graphics.Insets g() {
        return a.a(this.f3194a, this.f3195b, this.f3196c, this.f3197d);
    }

    public int hashCode() {
        return (((((this.f3194a * 31) + this.f3195b) * 31) + this.f3196c) * 31) + this.f3197d;
    }

    public String toString() {
        return "Insets{left=" + this.f3194a + ", top=" + this.f3195b + ", right=" + this.f3196c + ", bottom=" + this.f3197d + '}';
    }
}
