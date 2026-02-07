package xq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f54797a;

    /* renamed from: b  reason: collision with root package name */
    private int f54798b;

    /* renamed from: c  reason: collision with root package name */
    private int f54799c;

    public c(int i10, int i11, int i12) {
        this.f54797a = i10;
        this.f54798b = i11;
        this.f54799c = i12;
    }

    public int a() {
        return this.f54798b;
    }

    public int b() {
        return this.f54799c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f54797a == cVar.f54797a && this.f54798b == cVar.f54798b && this.f54799c == cVar.f54799c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f54797a * 31) + this.f54798b) * 31) + this.f54799c;
    }
}
