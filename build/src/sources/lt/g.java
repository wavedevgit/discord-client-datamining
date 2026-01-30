package lt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final jt.p f37607a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37608b;

    /* renamed from: c  reason: collision with root package name */
    private final int f37609c;

    public g(jt.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f37607a = pVar;
                    this.f37608b = i10;
                    this.f37609c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public jt.p a() {
        return this.f37607a;
    }

    public int b() {
        return this.f37609c;
    }

    public int c() {
        return this.f37608b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f37607a.equals(gVar.f37607a) && this.f37608b == gVar.f37608b && this.f37609c == gVar.f37609c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f37607a.hashCode() + ((this.f37608b | (this.f37609c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f37607a.name());
        sb2.append(",start-index=");
        sb2.append(this.f37608b);
        sb2.append(",end-index=");
        sb2.append(this.f37609c);
        sb2.append(']');
        return sb2.toString();
    }
}
