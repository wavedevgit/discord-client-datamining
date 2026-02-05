package sk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f49728a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49729b;

    public b(int i10, int i11) {
        this.f49728a = i10;
        this.f49729b = i11;
    }

    public final int a() {
        return this.f49729b;
    }

    public final int b() {
        return this.f49728a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f49728a != bVar.f49728a || this.f49729b != bVar.f49729b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f49728a ^ this.f49729b;
    }

    public final String toString() {
        return this.f49728a + "(" + this.f49729b + ')';
    }
}
