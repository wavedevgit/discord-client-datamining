package nc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    public final int f39975a;

    /* renamed from: b  reason: collision with root package name */
    public final float f39976b;

    public p(int i10, float f10) {
        this.f39975a = i10;
        this.f39976b = f10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && p.class == obj.getClass()) {
            p pVar = (p) obj;
            if (this.f39975a == pVar.f39975a && Float.compare(pVar.f39976b, this.f39976b) == 0) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f39975a) * 31) + Float.floatToIntBits(this.f39976b);
    }
}
