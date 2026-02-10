package vk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f52482a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52483b;

    public b(int i10, int i11) {
        this.f52482a = i10;
        this.f52483b = i11;
    }

    public final int a() {
        return this.f52483b;
    }

    public final int b() {
        return this.f52482a;
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f52482a != bVar.f52482a || this.f52483b != bVar.f52483b) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f52482a ^ this.f52483b;
    }

    public final String toString() {
        return this.f52482a + "(" + this.f52483b + ')';
    }
}
