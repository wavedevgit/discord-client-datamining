package tt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final rt.p f51022a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51023b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51024c;

    public g(rt.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f51022a = pVar;
                    this.f51023b = i10;
                    this.f51024c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public rt.p a() {
        return this.f51022a;
    }

    public int b() {
        return this.f51024c;
    }

    public int c() {
        return this.f51023b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f51022a.equals(gVar.f51022a) && this.f51023b == gVar.f51023b && this.f51024c == gVar.f51024c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f51022a.hashCode() + ((this.f51023b | (this.f51024c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51022a.name());
        sb2.append(",start-index=");
        sb2.append(this.f51023b);
        sb2.append(",end-index=");
        sb2.append(this.f51024c);
        sb2.append(']');
        return sb2.toString();
    }
}
