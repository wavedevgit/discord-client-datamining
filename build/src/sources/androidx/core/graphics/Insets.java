package androidx.core.graphics;

import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Insets {

    /* renamed from: e  reason: collision with root package name */
    public static final Insets f3162e = new Insets(0, 0, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final int f3163a;

    /* renamed from: b  reason: collision with root package name */
    public final int f3164b;

    /* renamed from: c  reason: collision with root package name */
    public final int f3165c;

    /* renamed from: d  reason: collision with root package name */
    public final int f3166d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static android.graphics.Insets a(int i10, int i11, int i12, int i13) {
            return android.graphics.Insets.of(i10, i11, i12, i13);
        }
    }

    private Insets(int i10, int i11, int i12, int i13) {
        this.f3163a = i10;
        this.f3164b = i11;
        this.f3165c = i12;
        this.f3166d = i13;
    }

    public static Insets a(Insets insets, Insets insets2) {
        return c(insets.f3163a + insets2.f3163a, insets.f3164b + insets2.f3164b, insets.f3165c + insets2.f3165c, insets.f3166d + insets2.f3166d);
    }

    public static Insets b(Insets insets, Insets insets2) {
        return c(Math.max(insets.f3163a, insets2.f3163a), Math.max(insets.f3164b, insets2.f3164b), Math.max(insets.f3165c, insets2.f3165c), Math.max(insets.f3166d, insets2.f3166d));
    }

    public static Insets c(int i10, int i11, int i12, int i13) {
        if (i10 == 0 && i11 == 0 && i12 == 0 && i13 == 0) {
            return f3162e;
        }
        return new Insets(i10, i11, i12, i13);
    }

    public static Insets d(Rect rect) {
        return c(rect.left, rect.top, rect.right, rect.bottom);
    }

    public static Insets e(Insets insets, Insets insets2) {
        return c(insets.f3163a - insets2.f3163a, insets.f3164b - insets2.f3164b, insets.f3165c - insets2.f3165c, insets.f3166d - insets2.f3166d);
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
        if (this.f3166d == insets.f3166d && this.f3163a == insets.f3163a && this.f3165c == insets.f3165c && this.f3164b == insets.f3164b) {
            return true;
        }
        return false;
    }

    public android.graphics.Insets g() {
        return a.a(this.f3163a, this.f3164b, this.f3165c, this.f3166d);
    }

    public int hashCode() {
        return (((((this.f3163a * 31) + this.f3164b) * 31) + this.f3165c) * 31) + this.f3166d;
    }

    public String toString() {
        return "Insets{left=" + this.f3163a + ", top=" + this.f3164b + ", right=" + this.f3165c + ", bottom=" + this.f3166d + '}';
    }
}
