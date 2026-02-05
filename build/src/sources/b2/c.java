package b2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final Object f6091a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f6092b;

    public c(Object obj, Object obj2) {
        this.f6091a = obj;
        this.f6092b = obj2;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (!b.a(cVar.f6091a, this.f6091a) || !b.a(cVar.f6092b, this.f6092b)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        int hashCode;
        Object obj = this.f6091a;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        Object obj2 = this.f6092b;
        if (obj2 != null) {
            i10 = obj2.hashCode();
        }
        return hashCode ^ i10;
    }

    public String toString() {
        return "Pair{" + this.f6091a + " " + this.f6092b + "}";
    }
}
