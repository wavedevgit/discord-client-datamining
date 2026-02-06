package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final float f18414a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18415b;

    /* renamed from: c  reason: collision with root package name */
    private final float f18416c;

    /* renamed from: d  reason: collision with root package name */
    private final float f18417d;

    public a(float f10, float f11, float f12, float f13) {
        this.f18414a = f10;
        this.f18415b = f11;
        this.f18416c = f12;
        this.f18417d = f13;
    }

    public final float a() {
        return this.f18416c;
    }

    public final float b() {
        return this.f18417d;
    }

    public final float c() {
        return this.f18415b;
    }

    public final float d() {
        return this.f18414a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f18414a, aVar.f18414a) == 0 && Float.compare(this.f18415b, aVar.f18415b) == 0 && Float.compare(this.f18416c, aVar.f18416c) == 0 && Float.compare(this.f18417d, aVar.f18417d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f18414a) * 31) + Float.hashCode(this.f18415b)) * 31) + Float.hashCode(this.f18416c)) * 31) + Float.hashCode(this.f18417d);
    }

    public String toString() {
        float f10 = this.f18414a;
        float f11 = this.f18415b;
        float f12 = this.f18416c;
        float f13 = this.f18417d;
        return "EdgeInsets(top=" + f10 + ", right=" + f11 + ", bottom=" + f12 + ", left=" + f13 + ")";
    }
}
