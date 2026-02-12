package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float f19442a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19443b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19444c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19445d;

    public c(float f10, float f11, float f12, float f13) {
        this.f19442a = f10;
        this.f19443b = f11;
        this.f19444c = f12;
        this.f19445d = f13;
    }

    public final float a() {
        return this.f19445d;
    }

    public final float b() {
        return this.f19444c;
    }

    public final float c() {
        return this.f19442a;
    }

    public final float d() {
        return this.f19443b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Float.compare(this.f19442a, cVar.f19442a) == 0 && Float.compare(this.f19443b, cVar.f19443b) == 0 && Float.compare(this.f19444c, cVar.f19444c) == 0 && Float.compare(this.f19445d, cVar.f19445d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19442a) * 31) + Float.hashCode(this.f19443b)) * 31) + Float.hashCode(this.f19444c)) * 31) + Float.hashCode(this.f19445d);
    }

    public String toString() {
        float f10 = this.f19442a;
        float f11 = this.f19443b;
        float f12 = this.f19444c;
        float f13 = this.f19445d;
        return "Rect(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }
}
