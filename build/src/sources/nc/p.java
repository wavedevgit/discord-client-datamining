package nc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    public final int f38838a;

    /* renamed from: b  reason: collision with root package name */
    public final float f38839b;

    public p(int i10, float f10) {
        this.f38838a = i10;
        this.f38839b = f10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && p.class == obj.getClass()) {
            p pVar = (p) obj;
            if (this.f38838a == pVar.f38838a && Float.compare(pVar.f38839b, this.f38839b) == 0) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f38838a) * 31) + Float.floatToIntBits(this.f38839b);
    }
}
