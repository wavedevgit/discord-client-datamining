package nc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    public final int f39435a;

    /* renamed from: b  reason: collision with root package name */
    public final float f39436b;

    public p(int i10, float f10) {
        this.f39435a = i10;
        this.f39436b = f10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && p.class == obj.getClass()) {
            p pVar = (p) obj;
            if (this.f39435a == pVar.f39435a && Float.compare(pVar.f39436b, this.f39436b) == 0) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f39435a) * 31) + Float.floatToIntBits(this.f39436b);
    }
}
