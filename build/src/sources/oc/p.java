package oc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    public final int f38815a;

    /* renamed from: b  reason: collision with root package name */
    public final float f38816b;

    public p(int i10, float f10) {
        this.f38815a = i10;
        this.f38816b = f10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && p.class == obj.getClass()) {
            p pVar = (p) obj;
            if (this.f38815a == pVar.f38815a && Float.compare(pVar.f38816b, this.f38816b) == 0) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f38815a) * 31) + Float.floatToIntBits(this.f38816b);
    }
}
