package com.google.android.renderscript;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Range2d {

    /* renamed from: a  reason: collision with root package name */
    private final int f16885a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16886b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16887c;

    /* renamed from: d  reason: collision with root package name */
    private final int f16888d;

    public final int a() {
        return this.f16886b;
    }

    public final int b() {
        return this.f16888d;
    }

    public final int c() {
        return this.f16885a;
    }

    public final int d() {
        return this.f16887c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Range2d) {
            Range2d range2d = (Range2d) obj;
            return this.f16885a == range2d.f16885a && this.f16886b == range2d.f16886b && this.f16887c == range2d.f16887c && this.f16888d == range2d.f16888d;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f16885a) * 31) + Integer.hashCode(this.f16886b)) * 31) + Integer.hashCode(this.f16887c)) * 31) + Integer.hashCode(this.f16888d);
    }

    public String toString() {
        int i10 = this.f16885a;
        int i11 = this.f16886b;
        int i12 = this.f16887c;
        int i13 = this.f16888d;
        return "Range2d(startX=" + i10 + ", endX=" + i11 + ", startY=" + i12 + ", endY=" + i13 + ")";
    }
}
