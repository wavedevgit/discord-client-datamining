package sq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f49584a;

    /* renamed from: b  reason: collision with root package name */
    private int f49585b;

    /* renamed from: c  reason: collision with root package name */
    private int f49586c;

    public c(int i10, int i11, int i12) {
        this.f49584a = i10;
        this.f49585b = i11;
        this.f49586c = i12;
    }

    public int a() {
        return this.f49585b;
    }

    public int b() {
        return this.f49586c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f49584a == cVar.f49584a && this.f49585b == cVar.f49585b && this.f49586c == cVar.f49586c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f49584a * 31) + this.f49585b) * 31) + this.f49586c;
    }
}
