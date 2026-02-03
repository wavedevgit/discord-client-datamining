package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final float f18035a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18036b;

    /* renamed from: c  reason: collision with root package name */
    private final float f18037c;

    /* renamed from: d  reason: collision with root package name */
    private final float f18038d;

    public c(float f10, float f11, float f12, float f13) {
        this.f18035a = f10;
        this.f18036b = f11;
        this.f18037c = f12;
        this.f18038d = f13;
    }

    public final float a() {
        return this.f18038d;
    }

    public final float b() {
        return this.f18037c;
    }

    public final float c() {
        return this.f18035a;
    }

    public final float d() {
        return this.f18036b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c) {
            c cVar = (c) obj;
            return Float.compare(this.f18035a, cVar.f18035a) == 0 && Float.compare(this.f18036b, cVar.f18036b) == 0 && Float.compare(this.f18037c, cVar.f18037c) == 0 && Float.compare(this.f18038d, cVar.f18038d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f18035a) * 31) + Float.hashCode(this.f18036b)) * 31) + Float.hashCode(this.f18037c)) * 31) + Float.hashCode(this.f18038d);
    }

    public String toString() {
        float f10 = this.f18035a;
        float f11 = this.f18036b;
        float f12 = this.f18037c;
        float f13 = this.f18038d;
        return "Rect(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }
}
