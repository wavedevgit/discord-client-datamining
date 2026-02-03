package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float f19053a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19054b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19055c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19056d;

    public c(float f10, float f11, float f12, float f13) {
        this.f19053a = f10;
        this.f19054b = f11;
        this.f19055c = f12;
        this.f19056d = f13;
    }

    public final float a() {
        return this.f19056d;
    }

    public final float b() {
        return this.f19055c;
    }

    public final float c() {
        return this.f19053a;
    }

    public final float d() {
        return this.f19054b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Float.compare(this.f19053a, cVar.f19053a) == 0 && Float.compare(this.f19054b, cVar.f19054b) == 0 && Float.compare(this.f19055c, cVar.f19055c) == 0 && Float.compare(this.f19056d, cVar.f19056d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19053a) * 31) + Float.hashCode(this.f19054b)) * 31) + Float.hashCode(this.f19055c)) * 31) + Float.hashCode(this.f19056d);
    }

    public String toString() {
        float f10 = this.f19053a;
        float f11 = this.f19054b;
        float f12 = this.f19055c;
        float f13 = this.f19056d;
        return "Rect(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }
}
