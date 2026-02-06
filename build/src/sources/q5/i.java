package q5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    Object f46545a;

    /* renamed from: b  reason: collision with root package name */
    Object f46546b;

    private static boolean a(Object obj, Object obj2) {
        if (obj != obj2) {
            if (obj == null || !obj.equals(obj2)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public void b(Object obj, Object obj2) {
        this.f46545a = obj;
        this.f46546b = obj2;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b2.c)) {
            return false;
        }
        b2.c cVar = (b2.c) obj;
        if (!a(cVar.f6384a, this.f46545a) || !a(cVar.f6385b, this.f46546b)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        int hashCode;
        Object obj = this.f46545a;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        Object obj2 = this.f46546b;
        if (obj2 != null) {
            i10 = obj2.hashCode();
        }
        return hashCode ^ i10;
    }

    public String toString() {
        return "Pair{" + this.f46545a + " " + this.f46546b + "}";
    }
}
