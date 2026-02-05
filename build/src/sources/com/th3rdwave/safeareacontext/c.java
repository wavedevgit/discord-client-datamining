package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float f18441a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18442b;

    /* renamed from: c  reason: collision with root package name */
    private final float f18443c;

    /* renamed from: d  reason: collision with root package name */
    private final float f18444d;

    public c(float f10, float f11, float f12, float f13) {
        this.f18441a = f10;
        this.f18442b = f11;
        this.f18443c = f12;
        this.f18444d = f13;
    }

    public final float a() {
        return this.f18444d;
    }

    public final float b() {
        return this.f18443c;
    }

    public final float c() {
        return this.f18441a;
    }

    public final float d() {
        return this.f18442b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Float.compare(this.f18441a, cVar.f18441a) == 0 && Float.compare(this.f18442b, cVar.f18442b) == 0 && Float.compare(this.f18443c, cVar.f18443c) == 0 && Float.compare(this.f18444d, cVar.f18444d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f18441a) * 31) + Float.hashCode(this.f18442b)) * 31) + Float.hashCode(this.f18443c)) * 31) + Float.hashCode(this.f18444d);
    }

    public String toString() {
        float f10 = this.f18441a;
        float f11 = this.f18442b;
        float f12 = this.f18443c;
        float f13 = this.f18444d;
        return "Rect(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }
}
