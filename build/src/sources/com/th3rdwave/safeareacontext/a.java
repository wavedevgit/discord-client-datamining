package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final float f19413a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19414b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19415c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19416d;

    public a(float f10, float f11, float f12, float f13) {
        this.f19413a = f10;
        this.f19414b = f11;
        this.f19415c = f12;
        this.f19416d = f13;
    }

    public final float a() {
        return this.f19415c;
    }

    public final float b() {
        return this.f19416d;
    }

    public final float c() {
        return this.f19414b;
    }

    public final float d() {
        return this.f19413a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f19413a, aVar.f19413a) == 0 && Float.compare(this.f19414b, aVar.f19414b) == 0 && Float.compare(this.f19415c, aVar.f19415c) == 0 && Float.compare(this.f19416d, aVar.f19416d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19413a) * 31) + Float.hashCode(this.f19414b)) * 31) + Float.hashCode(this.f19415c)) * 31) + Float.hashCode(this.f19416d);
    }

    public String toString() {
        float f10 = this.f19413a;
        float f11 = this.f19414b;
        float f12 = this.f19415c;
        float f13 = this.f19416d;
        return "EdgeInsets(top=" + f10 + ", right=" + f11 + ", bottom=" + f12 + ", left=" + f13 + ")";
    }
}
