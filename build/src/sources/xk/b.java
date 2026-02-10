package xk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f54878a;

    /* renamed from: b  reason: collision with root package name */
    private final int f54879b;

    public b(int i10, int i11) {
        this.f54878a = i10;
        this.f54879b = i11;
    }

    public final int a() {
        return this.f54879b;
    }

    public final int b() {
        return this.f54878a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f54878a != bVar.f54878a || this.f54879b != bVar.f54879b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f54878a ^ this.f54879b;
    }

    public final String toString() {
        return this.f54878a + "(" + this.f54879b + ')';
    }
}
