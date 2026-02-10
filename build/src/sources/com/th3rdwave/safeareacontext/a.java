package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final float f18554a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18555b;

    /* renamed from: c  reason: collision with root package name */
    private final float f18556c;

    /* renamed from: d  reason: collision with root package name */
    private final float f18557d;

    public a(float f10, float f11, float f12, float f13) {
        this.f18554a = f10;
        this.f18555b = f11;
        this.f18556c = f12;
        this.f18557d = f13;
    }

    public final float a() {
        return this.f18556c;
    }

    public final float b() {
        return this.f18557d;
    }

    public final float c() {
        return this.f18555b;
    }

    public final float d() {
        return this.f18554a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f18554a, aVar.f18554a) == 0 && Float.compare(this.f18555b, aVar.f18555b) == 0 && Float.compare(this.f18556c, aVar.f18556c) == 0 && Float.compare(this.f18557d, aVar.f18557d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f18554a) * 31) + Float.hashCode(this.f18555b)) * 31) + Float.hashCode(this.f18556c)) * 31) + Float.hashCode(this.f18557d);
    }

    public String toString() {
        float f10 = this.f18554a;
        float f11 = this.f18555b;
        float f12 = this.f18556c;
        float f13 = this.f18557d;
        return "EdgeInsets(top=" + f10 + ", right=" + f11 + ", bottom=" + f12 + ", left=" + f13 + ")";
    }
}
