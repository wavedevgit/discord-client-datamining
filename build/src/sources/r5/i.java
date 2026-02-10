package r5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    Object f46165a;

    /* renamed from: b  reason: collision with root package name */
    Object f46166b;

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
        this.f46165a = obj;
        this.f46166b = obj2;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof b2.c)) {
            return false;
        }
        b2.c cVar = (b2.c) obj;
        if (!a(cVar.f6413a, this.f46165a) || !a(cVar.f6414b, this.f46166b)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        int hashCode;
        Object obj = this.f46165a;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        Object obj2 = this.f46166b;
        if (obj2 != null) {
            i10 = obj2.hashCode();
        }
        return hashCode ^ i10;
    }

    public String toString() {
        return "Pair{" + this.f46165a + " " + this.f46166b + "}";
    }
}
