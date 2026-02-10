package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float f19441a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19442b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19443c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19444d;

    public c(float f10, float f11, float f12, float f13) {
        this.f19441a = f10;
        this.f19442b = f11;
        this.f19443c = f12;
        this.f19444d = f13;
    }

    public final float a() {
        return this.f19444d;
    }

    public final float b() {
        return this.f19443c;
    }

    public final float c() {
        return this.f19441a;
    }

    public final float d() {
        return this.f19442b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Float.compare(this.f19441a, cVar.f19441a) == 0 && Float.compare(this.f19442b, cVar.f19442b) == 0 && Float.compare(this.f19443c, cVar.f19443c) == 0 && Float.compare(this.f19444d, cVar.f19444d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19441a) * 31) + Float.hashCode(this.f19442b)) * 31) + Float.hashCode(this.f19443c)) * 31) + Float.hashCode(this.f19444d);
    }

    public String toString() {
        float f10 = this.f19441a;
        float f11 = this.f19442b;
        float f12 = this.f19443c;
        float f13 = this.f19444d;
        return "Rect(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }
}
