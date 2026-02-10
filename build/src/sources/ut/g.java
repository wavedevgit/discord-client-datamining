package ut;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final st.p f51927a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51928b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51929c;

    public g(st.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f51927a = pVar;
                    this.f51928b = i10;
                    this.f51929c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public st.p a() {
        return this.f51927a;
    }

    public int b() {
        return this.f51929c;
    }

    public int c() {
        return this.f51928b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f51927a.equals(gVar.f51927a) && this.f51928b == gVar.f51928b && this.f51929c == gVar.f51929c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f51927a.hashCode() + ((this.f51928b | (this.f51929c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f51927a.name());
        sb2.append(",start-index=");
        sb2.append(this.f51928b);
        sb2.append(",end-index=");
        sb2.append(this.f51929c);
        sb2.append(']');
        return sb2.toString();
    }
}
