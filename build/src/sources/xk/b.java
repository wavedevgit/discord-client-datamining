package xk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f55447a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55448b;

    public b(int i10, int i11) {
        this.f55447a = i10;
        this.f55448b = i11;
    }

    public final int a() {
        return this.f55448b;
    }

    public final int b() {
        return this.f55447a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f55447a != bVar.f55447a || this.f55448b != bVar.f55448b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f55447a ^ this.f55448b;
    }

    public final String toString() {
        return this.f55447a + "(" + this.f55448b + ')';
    }
}
