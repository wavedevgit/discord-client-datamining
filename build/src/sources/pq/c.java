package pq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f46165a;

    /* renamed from: b  reason: collision with root package name */
    private int f46166b;

    /* renamed from: c  reason: collision with root package name */
    private int f46167c;

    public c(int i10, int i11, int i12) {
        this.f46165a = i10;
        this.f46166b = i11;
        this.f46167c = i12;
    }

    public int a() {
        return this.f46166b;
    }

    public int b() {
        return this.f46167c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f46165a == cVar.f46165a && this.f46166b == cVar.f46166b && this.f46167c == cVar.f46167c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f46165a * 31) + this.f46166b) * 31) + this.f46167c;
    }
}
