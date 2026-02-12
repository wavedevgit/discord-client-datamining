package com.google.android.renderscript;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Range2d {

    /* renamed from: a  reason: collision with root package name */
    private final int f17117a;

    /* renamed from: b  reason: collision with root package name */
    private final int f17118b;

    /* renamed from: c  reason: collision with root package name */
    private final int f17119c;

    /* renamed from: d  reason: collision with root package name */
    private final int f17120d;

    public final int a() {
        return this.f17118b;
    }

    public final int b() {
        return this.f17120d;
    }

    public final int c() {
        return this.f17117a;
    }

    public final int d() {
        return this.f17119c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Range2d) {
            Range2d range2d = (Range2d) obj;
            return this.f17117a == range2d.f17117a && this.f17118b == range2d.f17118b && this.f17119c == range2d.f17119c && this.f17120d == range2d.f17120d;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f17117a) * 31) + Integer.hashCode(this.f17118b)) * 31) + Integer.hashCode(this.f17119c)) * 31) + Integer.hashCode(this.f17120d);
    }

    public String toString() {
        int i10 = this.f17117a;
        int i11 = this.f17118b;
        int i12 = this.f17119c;
        int i13 = this.f17120d;
        return "Range2d(startX=" + i10 + ", endX=" + i11 + ", startY=" + i12 + ", endY=" + i13 + ")";
    }
}
