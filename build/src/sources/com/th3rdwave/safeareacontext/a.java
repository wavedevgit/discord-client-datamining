package com.th3rdwave.safeareacontext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final float f19046a;

    /* renamed from: b  reason: collision with root package name */
    private final float f19047b;

    /* renamed from: c  reason: collision with root package name */
    private final float f19048c;

    /* renamed from: d  reason: collision with root package name */
    private final float f19049d;

    public a(float f10, float f11, float f12, float f13) {
        this.f19046a = f10;
        this.f19047b = f11;
        this.f19048c = f12;
        this.f19049d = f13;
    }

    public final float a() {
        return this.f19048c;
    }

    public final float b() {
        return this.f19049d;
    }

    public final float c() {
        return this.f19047b;
    }

    public final float d() {
        return this.f19046a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Float.compare(this.f19046a, aVar.f19046a) == 0 && Float.compare(this.f19047b, aVar.f19047b) == 0 && Float.compare(this.f19048c, aVar.f19048c) == 0 && Float.compare(this.f19049d, aVar.f19049d) == 0;
        }
        return false;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f19046a) * 31) + Float.hashCode(this.f19047b)) * 31) + Float.hashCode(this.f19048c)) * 31) + Float.hashCode(this.f19049d);
    }

    public String toString() {
        float f10 = this.f19046a;
        float f11 = this.f19047b;
        float f12 = this.f19048c;
        float f13 = this.f19049d;
        return "EdgeInsets(top=" + f10 + ", right=" + f11 + ", bottom=" + f12 + ", left=" + f13 + ")";
    }
}
