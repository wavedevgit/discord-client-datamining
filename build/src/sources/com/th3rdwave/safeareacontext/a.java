package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final float f19435a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19436b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19437c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19438d;

    public a(float f10, float f11, float f12, float f13) {
        this.f19435a = f10;
        this.f19436b = f11;
        this.f19437c = f12;
        this.f19438d = f13;
    }

    public final float a() {
        return this.f19437c;
    }

    public final float b() {
        return this.f19438d;
    }

    public final float c() {
        return this.f19436b;
    }

    public final float d() {
        return this.f19435a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f19435a, aVar.f19435a) == 0 && Float.compare(this.f19436b, aVar.f19436b) == 0 && Float.compare(this.f19437c, aVar.f19437c) == 0 && Float.compare(this.f19438d, aVar.f19438d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19435a) * 31) + Float.hashCode(this.f19436b)) * 31) + Float.hashCode(this.f19437c)) * 31) + Float.hashCode(this.f19438d);
    }

    public String toString() {
        float f10 = this.f19435a;
        float f11 = this.f19436b;
        float f12 = this.f19437c;
        float f13 = this.f19438d;
        return "EdgeInsets(top=" + f10 + ", right=" + f11 + ", bottom=" + f12 + ", left=" + f13 + ")";
    }
}
