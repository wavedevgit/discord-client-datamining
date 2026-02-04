package sq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f49581a;

    /* renamed from: b  reason: collision with root package name */
    private int f49582b;

    /* renamed from: c  reason: collision with root package name */
    private int f49583c;

    public c(int i10, int i11, int i12) {
        this.f49581a = i10;
        this.f49582b = i11;
        this.f49583c = i12;
    }

    public int a() {
        return this.f49582b;
    }

    public int b() {
        return this.f49583c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f49581a == cVar.f49581a && this.f49582b == cVar.f49582b && this.f49583c == cVar.f49583c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f49581a * 31) + this.f49582b) * 31) + this.f49583c;
    }
}
