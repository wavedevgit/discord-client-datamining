package yq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f55732a;

    /* renamed from: b  reason: collision with root package name */
    private int f55733b;

    /* renamed from: c  reason: collision with root package name */
    private int f55734c;

    public c(int i10, int i11, int i12) {
        this.f55732a = i10;
        this.f55733b = i11;
        this.f55734c = i12;
    }

    public int a() {
        return this.f55733b;
    }

    public int b() {
        return this.f55734c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f55732a == cVar.f55732a && this.f55733b == cVar.f55733b && this.f55734c == cVar.f55734c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f55732a * 31) + this.f55733b) * 31) + this.f55734c;
    }
}
