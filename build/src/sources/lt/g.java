package lt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final jt.p f37591a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37592b;

    /* renamed from: c  reason: collision with root package name */
    private final int f37593c;

    public g(jt.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f37591a = pVar;
                    this.f37592b = i10;
                    this.f37593c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public jt.p a() {
        return this.f37591a;
    }

    public int b() {
        return this.f37593c;
    }

    public int c() {
        return this.f37592b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f37591a.equals(gVar.f37591a) && this.f37592b == gVar.f37592b && this.f37593c == gVar.f37593c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f37591a.hashCode() + ((this.f37592b | (this.f37593c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f37591a.name());
        sb2.append(",start-index=");
        sb2.append(this.f37592b);
        sb2.append(",end-index=");
        sb2.append(this.f37593c);
        sb2.append(']');
        return sb2.toString();
    }
}
