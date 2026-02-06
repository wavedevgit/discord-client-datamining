package nc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    public final int f38790a;

    /* renamed from: b  reason: collision with root package name */
    public final float f38791b;

    public p(int i10, float f10) {
        this.f38790a = i10;
        this.f38791b = f10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && p.class == obj.getClass()) {
            p pVar = (p) obj;
            if (this.f38790a == pVar.f38790a && Float.compare(pVar.f38791b, this.f38791b) == 0) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + this.f38790a) * 31) + Float.floatToIntBits(this.f38791b);
    }
}
