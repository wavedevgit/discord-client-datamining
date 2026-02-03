package mt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final kt.p f39307a;

    /* renamed from: b  reason: collision with root package name */
    private final int f39308b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39309c;

    public g(kt.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f39307a = pVar;
                    this.f39308b = i10;
                    this.f39309c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public kt.p a() {
        return this.f39307a;
    }

    public int b() {
        return this.f39309c;
    }

    public int c() {
        return this.f39308b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f39307a.equals(gVar.f39307a) && this.f39308b == gVar.f39308b && this.f39309c == gVar.f39309c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f39307a.hashCode() + ((this.f39308b | (this.f39309c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f39307a.name());
        sb2.append(",start-index=");
        sb2.append(this.f39308b);
        sb2.append(",end-index=");
        sb2.append(this.f39309c);
        sb2.append(']');
        return sb2.toString();
    }
}
