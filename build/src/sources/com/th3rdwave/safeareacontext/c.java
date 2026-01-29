package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float f19420a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19421b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19422c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19423d;

    public c(float f10, float f11, float f12, float f13) {
        this.f19420a = f10;
        this.f19421b = f11;
        this.f19422c = f12;
        this.f19423d = f13;
    }

    public final float a() {
        return this.f19423d;
    }

    public final float b() {
        return this.f19422c;
    }

    public final float c() {
        return this.f19420a;
    }

    public final float d() {
        return this.f19421b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Float.compare(this.f19420a, cVar.f19420a) == 0 && Float.compare(this.f19421b, cVar.f19421b) == 0 && Float.compare(this.f19422c, cVar.f19422c) == 0 && Float.compare(this.f19423d, cVar.f19423d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19420a) * 31) + Float.hashCode(this.f19421b)) * 31) + Float.hashCode(this.f19422c)) * 31) + Float.hashCode(this.f19423d);
    }

    public String toString() {
        float f10 = this.f19420a;
        float f11 = this.f19421b;
        float f12 = this.f19422c;
        float f13 = this.f19423d;
        return "Rect(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }
}
