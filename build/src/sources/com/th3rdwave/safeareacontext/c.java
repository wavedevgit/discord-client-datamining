package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float f18561a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18562b;

    /* renamed from: c  reason: collision with root package name */
    private final float f18563c;

    /* renamed from: d  reason: collision with root package name */
    private final float f18564d;

    public c(float f10, float f11, float f12, float f13) {
        this.f18561a = f10;
        this.f18562b = f11;
        this.f18563c = f12;
        this.f18564d = f13;
    }

    public final float a() {
        return this.f18564d;
    }

    public final float b() {
        return this.f18563c;
    }

    public final float c() {
        return this.f18561a;
    }

    public final float d() {
        return this.f18562b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Float.compare(this.f18561a, cVar.f18561a) == 0 && Float.compare(this.f18562b, cVar.f18562b) == 0 && Float.compare(this.f18563c, cVar.f18563c) == 0 && Float.compare(this.f18564d, cVar.f18564d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f18561a) * 31) + Float.hashCode(this.f18562b)) * 31) + Float.hashCode(this.f18563c)) * 31) + Float.hashCode(this.f18564d);
    }

    public String toString() {
        float f10 = this.f18561a;
        float f11 = this.f18562b;
        float f12 = this.f18563c;
        float f13 = this.f18564d;
        return "Rect(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }
}
