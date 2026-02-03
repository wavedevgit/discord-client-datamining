package b2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final Object f6244a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f6245b;

    public c(Object obj, Object obj2) {
        this.f6244a = obj;
        this.f6245b = obj2;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (!b.a(cVar.f6244a, this.f6244a) || !b.a(cVar.f6245b, this.f6245b)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        int hashCode;
        Object obj = this.f6244a;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        Object obj2 = this.f6245b;
        if (obj2 != null) {
            i10 = obj2.hashCode();
        }
        return hashCode ^ i10;
    }

    public String toString() {
        return "Pair{" + this.f6244a + " " + this.f6245b + "}";
    }
}
