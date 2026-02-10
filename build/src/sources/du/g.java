package du;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final bu.p f22029a;

    /* renamed from: b  reason: collision with root package name */
    private final int f22030b;

    /* renamed from: c  reason: collision with root package name */
    private final int f22031c;

    public g(bu.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f22029a = pVar;
                    this.f22030b = i10;
                    this.f22031c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public bu.p a() {
        return this.f22029a;
    }

    public int b() {
        return this.f22031c;
    }

    public int c() {
        return this.f22030b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f22029a.equals(gVar.f22029a) && this.f22030b == gVar.f22030b && this.f22031c == gVar.f22031c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f22029a.hashCode() + ((this.f22030b | (this.f22031c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f22029a.name());
        sb2.append(",start-index=");
        sb2.append(this.f22030b);
        sb2.append(",end-index=");
        sb2.append(this.f22031c);
        sb2.append(']');
        return sb2.toString();
    }
}
