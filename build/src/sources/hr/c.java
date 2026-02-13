package hr;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f28223a;

    /* renamed from: b  reason: collision with root package name */
    private int f28224b;

    /* renamed from: c  reason: collision with root package name */
    private int f28225c;

    public c(int i10, int i11, int i12) {
        this.f28223a = i10;
        this.f28224b = i11;
        this.f28225c = i12;
    }

    public int a() {
        return this.f28224b;
    }

    public int b() {
        return this.f28225c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f28223a == cVar.f28223a && this.f28224b == cVar.f28224b && this.f28225c == cVar.f28225c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f28223a * 31) + this.f28224b) * 31) + this.f28225c;
    }
}
