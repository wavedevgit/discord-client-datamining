package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float f18421a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18422b;

    /* renamed from: c  reason: collision with root package name */
    private final float f18423c;

    /* renamed from: d  reason: collision with root package name */
    private final float f18424d;

    public c(float f10, float f11, float f12, float f13) {
        this.f18421a = f10;
        this.f18422b = f11;
        this.f18423c = f12;
        this.f18424d = f13;
    }

    public final float a() {
        return this.f18424d;
    }

    public final float b() {
        return this.f18423c;
    }

    public final float c() {
        return this.f18421a;
    }

    public final float d() {
        return this.f18422b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Float.compare(this.f18421a, cVar.f18421a) == 0 && Float.compare(this.f18422b, cVar.f18422b) == 0 && Float.compare(this.f18423c, cVar.f18423c) == 0 && Float.compare(this.f18424d, cVar.f18424d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f18421a) * 31) + Float.hashCode(this.f18422b)) * 31) + Float.hashCode(this.f18423c)) * 31) + Float.hashCode(this.f18424d);
    }

    public String toString() {
        float f10 = this.f18421a;
        float f11 = this.f18422b;
        float f12 = this.f18423c;
        float f13 = this.f18424d;
        return "Rect(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }
}
