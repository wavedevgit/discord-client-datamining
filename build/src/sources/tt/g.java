package tt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final rt.p f50974a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50975b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50976c;

    public g(rt.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f50974a = pVar;
                    this.f50975b = i10;
                    this.f50976c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public rt.p a() {
        return this.f50974a;
    }

    public int b() {
        return this.f50976c;
    }

    public int c() {
        return this.f50975b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f50974a.equals(gVar.f50974a) && this.f50975b == gVar.f50975b && this.f50976c == gVar.f50976c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f50974a.hashCode() + ((this.f50975b | (this.f50976c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f50974a.name());
        sb2.append(",start-index=");
        sb2.append(this.f50975b);
        sb2.append(",end-index=");
        sb2.append(this.f50976c);
        sb2.append(']');
        return sb2.toString();
    }
}
