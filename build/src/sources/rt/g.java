package rt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final pt.p f49111a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49112b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49113c;

    public g(pt.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f49111a = pVar;
                    this.f49112b = i10;
                    this.f49113c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public pt.p a() {
        return this.f49111a;
    }

    public int b() {
        return this.f49113c;
    }

    public int c() {
        return this.f49112b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f49111a.equals(gVar.f49111a) && this.f49112b == gVar.f49112b && this.f49113c == gVar.f49113c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f49111a.hashCode() + ((this.f49112b | (this.f49113c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f49111a.name());
        sb2.append(",start-index=");
        sb2.append(this.f49112b);
        sb2.append(",end-index=");
        sb2.append(this.f49113c);
        sb2.append(']');
        return sb2.toString();
    }
}
