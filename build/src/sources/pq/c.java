package pq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f46149a;

    /* renamed from: b  reason: collision with root package name */
    private int f46150b;

    /* renamed from: c  reason: collision with root package name */
    private int f46151c;

    public c(int i10, int i11, int i12) {
        this.f46149a = i10;
        this.f46150b = i11;
        this.f46151c = i12;
    }

    public int a() {
        return this.f46150b;
    }

    public int b() {
        return this.f46151c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f46149a == cVar.f46149a && this.f46150b == cVar.f46150b && this.f46151c == cVar.f46151c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f46149a * 31) + this.f46150b) * 31) + this.f46151c;
    }
}
