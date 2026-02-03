package qq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f47822a;

    /* renamed from: b  reason: collision with root package name */
    private int f47823b;

    /* renamed from: c  reason: collision with root package name */
    private int f47824c;

    public c(int i10, int i11, int i12) {
        this.f47822a = i10;
        this.f47823b = i11;
        this.f47824c = i12;
    }

    public int a() {
        return this.f47823b;
    }

    public int b() {
        return this.f47824c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f47822a == cVar.f47822a && this.f47823b == cVar.f47823b && this.f47824c == cVar.f47824c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f47822a * 31) + this.f47823b) * 31) + this.f47824c;
    }
}
