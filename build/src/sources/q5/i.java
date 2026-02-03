package q5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    Object f47433a;

    /* renamed from: b  reason: collision with root package name */
    Object f47434b;

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
        this.f47433a = obj;
        this.f47434b = obj2;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b2.c)) {
            return false;
        }
        b2.c cVar = (b2.c) obj;
        if (!a(cVar.f6244a, this.f47433a) || !a(cVar.f6245b, this.f47434b)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        int hashCode;
        Object obj = this.f47433a;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        Object obj2 = this.f47434b;
        if (obj2 != null) {
            i10 = obj2.hashCode();
        }
        return hashCode ^ i10;
    }

    public String toString() {
        return "Pair{" + this.f47433a + " " + this.f47434b + "}";
    }
}
