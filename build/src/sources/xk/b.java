package xk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f54879a;

    /* renamed from: b  reason: collision with root package name */
    private final int f54880b;

    public b(int i10, int i11) {
        this.f54879a = i10;
        this.f54880b = i11;
    }

    public final int a() {
        return this.f54880b;
    }

    public final int b() {
        return this.f54879a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f54879a != bVar.f54879a || this.f54880b != bVar.f54880b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f54879a ^ this.f54880b;
    }

    public final String toString() {
        return this.f54879a + "(" + this.f54880b + ')';
    }
}
