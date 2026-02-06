package androidx.core.graphics;

import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Insets {

    /* renamed from: e  reason: collision with root package name */
    public static final Insets f3603e = new Insets(0, 0, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    public final int f3604a;

    /* renamed from: b  reason: collision with root package name */
    public final int f3605b;

    /* renamed from: c  reason: collision with root package name */
    public final int f3606c;

    /* renamed from: d  reason: collision with root package name */
    public final int f3607d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static android.graphics.Insets a(int i10, int i11, int i12, int i13) {
            return android.graphics.Insets.of(i10, i11, i12, i13);
        }
    }

    private Insets(int i10, int i11, int i12, int i13) {
        this.f3604a = i10;
        this.f3605b = i11;
        this.f3606c = i12;
        this.f3607d = i13;
    }

    public static Insets a(Insets insets, Insets insets2) {
        return c(insets.f3604a + insets2.f3604a, insets.f3605b + insets2.f3605b, insets.f3606c + insets2.f3606c, insets.f3607d + insets2.f3607d);
    }

    public static Insets b(Insets insets, Insets insets2) {
        return c(Math.max(insets.f3604a, insets2.f3604a), Math.max(insets.f3605b, insets2.f3605b), Math.max(insets.f3606c, insets2.f3606c), Math.max(insets.f3607d, insets2.f3607d));
    }

    public static Insets c(int i10, int i11, int i12, int i13) {
        if (i10 == 0 && i11 == 0 && i12 == 0 && i13 == 0) {
            return f3603e;
        }
        return new Insets(i10, i11, i12, i13);
    }

    public static Insets d(Rect rect) {
        return c(rect.left, rect.top, rect.right, rect.bottom);
    }

    public static Insets e(Insets insets, Insets insets2) {
        return c(insets.f3604a - insets2.f3604a, insets.f3605b - insets2.f3605b, insets.f3606c - insets2.f3606c, insets.f3607d - insets2.f3607d);
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
        if (this.f3607d == insets.f3607d && this.f3604a == insets.f3604a && this.f3606c == insets.f3606c && this.f3605b == insets.f3605b) {
            return true;
        }
        return false;
    }

    public android.graphics.Insets g() {
        return a.a(this.f3604a, this.f3605b, this.f3606c, this.f3607d);
    }

    public int hashCode() {
        return (((((this.f3604a * 31) + this.f3605b) * 31) + this.f3606c) * 31) + this.f3607d;
    }

    public String toString() {
        return "Insets{left=" + this.f3604a + ", top=" + this.f3605b + ", right=" + this.f3606c + ", bottom=" + this.f3607d + '}';
    }
}
