package nc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    public final int f40057a;

    /* renamed from: b  reason: collision with root package name */
    public final float f40058b;

    public p(int i10, float f10) {
        this.f40057a = i10;
        this.f40058b = f10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && p.class == obj.getClass()) {
            p pVar = (p) obj;
            if (this.f40057a == pVar.f40057a && Float.compare(pVar.f40058b, this.f40058b) == 0) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f40057a) * 31) + Float.floatToIntBits(this.f40058b);
    }
}
