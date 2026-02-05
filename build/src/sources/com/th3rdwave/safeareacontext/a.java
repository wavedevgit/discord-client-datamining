package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final float f18434a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18435b;

    /* renamed from: c  reason: collision with root package name */
    private final float f18436c;

    /* renamed from: d  reason: collision with root package name */
    private final float f18437d;

    public a(float f10, float f11, float f12, float f13) {
        this.f18434a = f10;
        this.f18435b = f11;
        this.f18436c = f12;
        this.f18437d = f13;
    }

    public final float a() {
        return this.f18436c;
    }

    public final float b() {
        return this.f18437d;
    }

    public final float c() {
        return this.f18435b;
    }

    public final float d() {
        return this.f18434a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f18434a, aVar.f18434a) == 0 && Float.compare(this.f18435b, aVar.f18435b) == 0 && Float.compare(this.f18436c, aVar.f18436c) == 0 && Float.compare(this.f18437d, aVar.f18437d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f18434a) * 31) + Float.hashCode(this.f18435b)) * 31) + Float.hashCode(this.f18436c)) * 31) + Float.hashCode(this.f18437d);
    }

    public String toString() {
        float f10 = this.f18434a;
        float f11 = this.f18435b;
        float f12 = this.f18436c;
        float f13 = this.f18437d;
        return "EdgeInsets(top=" + f10 + ", right=" + f11 + ", bottom=" + f12 + ", left=" + f13 + ")";
    }
}
