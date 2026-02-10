package hr;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f27654a;

    /* renamed from: b  reason: collision with root package name */
    private int f27655b;

    /* renamed from: c  reason: collision with root package name */
    private int f27656c;

    public c(int i10, int i11, int i12) {
        this.f27654a = i10;
        this.f27655b = i11;
        this.f27656c = i12;
    }

    public int a() {
        return this.f27655b;
    }

    public int b() {
        return this.f27656c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f27654a == cVar.f27654a && this.f27655b == cVar.f27655b && this.f27656c == cVar.f27656c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f27654a * 31) + this.f27655b) * 31) + this.f27656c;
    }
}
