package xq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f54749a;

    /* renamed from: b  reason: collision with root package name */
    private int f54750b;

    /* renamed from: c  reason: collision with root package name */
    private int f54751c;

    public c(int i10, int i11, int i12) {
        this.f54749a = i10;
        this.f54750b = i11;
        this.f54751c = i12;
    }

    public int a() {
        return this.f54750b;
    }

    public int b() {
        return this.f54751c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f54749a == cVar.f54749a && this.f54750b == cVar.f54750b && this.f54751c == cVar.f54751c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f54749a * 31) + this.f54750b) * 31) + this.f54751c;
    }
}
