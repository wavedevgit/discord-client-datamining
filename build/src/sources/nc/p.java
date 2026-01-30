package nc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    public final int f40073a;

    /* renamed from: b  reason: collision with root package name */
    public final float f40074b;

    public p(int i10, float f10) {
        this.f40073a = i10;
        this.f40074b = f10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && p.class == obj.getClass()) {
            p pVar = (p) obj;
            if (this.f40073a == pVar.f40073a && Float.compare(pVar.f40074b, this.f40074b) == 0) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f40073a) * 31) + Float.floatToIntBits(this.f40074b);
    }
}
