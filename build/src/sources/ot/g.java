package ot;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final mt.p f44662a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44663b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44664c;

    public g(mt.p pVar, int i10, int i11) {
        if (pVar != null) {
            if (i10 >= 0) {
                if (i11 > i10) {
                    this.f44662a = pVar;
                    this.f44663b = i10;
                    this.f44664c = i11;
                    return;
                }
                throw new IllegalArgumentException("End index " + i11 + " must be greater than start index " + i10 + " (" + pVar.name() + ")");
            }
            throw new IllegalArgumentException("Negative start index: " + i10 + " (" + pVar.name() + ")");
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public mt.p a() {
        return this.f44662a;
    }

    public int b() {
        return this.f44664c;
    }

    public int c() {
        return this.f44663b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f44662a.equals(gVar.f44662a) && this.f44663b == gVar.f44663b && this.f44664c == gVar.f44664c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f44662a.hashCode() + ((this.f44663b | (this.f44664c << 16)) * 37);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(80);
        sb2.append(g.class.getName());
        sb2.append("[element=");
        sb2.append(this.f44662a.name());
        sb2.append(",start-index=");
        sb2.append(this.f44663b);
        sb2.append(",end-index=");
        sb2.append(this.f44664c);
        sb2.append(']');
        return sb2.toString();
    }
}
