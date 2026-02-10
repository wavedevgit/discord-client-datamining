package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final float f19434a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19435b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19436c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19437d;

    public a(float f10, float f11, float f12, float f13) {
        this.f19434a = f10;
        this.f19435b = f11;
        this.f19436c = f12;
        this.f19437d = f13;
    }

    public final float a() {
        return this.f19436c;
    }

    public final float b() {
        return this.f19437d;
    }

    public final float c() {
        return this.f19435b;
    }

    public final float d() {
        return this.f19434a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f19434a, aVar.f19434a) == 0 && Float.compare(this.f19435b, aVar.f19435b) == 0 && Float.compare(this.f19436c, aVar.f19436c) == 0 && Float.compare(this.f19437d, aVar.f19437d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19434a) * 31) + Float.hashCode(this.f19435b)) * 31) + Float.hashCode(this.f19436c)) * 31) + Float.hashCode(this.f19437d);
    }

    public String toString() {
        float f10 = this.f19434a;
        float f11 = this.f19435b;
        float f12 = this.f19436c;
        float f13 = this.f19437d;
        return "EdgeInsets(top=" + f10 + ", right=" + f11 + ", bottom=" + f12 + ", left=" + f13 + ")";
    }
}
