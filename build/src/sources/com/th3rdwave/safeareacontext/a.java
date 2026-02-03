package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final float f18028a;

    /* renamed from: b  reason: collision with root package name */
    private final float f18029b;

    /* renamed from: c  reason: collision with root package name */
    private final float f18030c;

    /* renamed from: d  reason: collision with root package name */
    private final float f18031d;

    public a(float f10, float f11, float f12, float f13) {
        this.f18028a = f10;
        this.f18029b = f11;
        this.f18030c = f12;
        this.f18031d = f13;
    }

    public final float a() {
        return this.f18030c;
    }

    public final float b() {
        return this.f18031d;
    }

    public final float c() {
        return this.f18029b;
    }

    public final float d() {
        return this.f18028a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f18028a, aVar.f18028a) == 0 && Float.compare(this.f18029b, aVar.f18029b) == 0 && Float.compare(this.f18030c, aVar.f18030c) == 0 && Float.compare(this.f18031d, aVar.f18031d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f18028a) * 31) + Float.hashCode(this.f18029b)) * 31) + Float.hashCode(this.f18030c)) * 31) + Float.hashCode(this.f18031d);
    }

    public String toString() {
        float f10 = this.f18028a;
        float f11 = this.f18029b;
        float f12 = this.f18030c;
        float f13 = this.f18031d;
        return "EdgeInsets(top=" + f10 + ", right=" + f11 + ", bottom=" + f12 + ", left=" + f13 + ")";
    }
}
