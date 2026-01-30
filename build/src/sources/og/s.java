package og;

import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s implements c1 {

    /* renamed from: d  reason: collision with root package name */
    private transient Set f43519d;

    /* renamed from: e  reason: collision with root package name */
    private transient Map f43520e;

    @Override // og.c1
    public final Map b() {
        Map map = this.f43520e;
        if (map == null) {
            Map e10 = e();
            this.f43520e = e10;
            return e10;
        }
        return map;
    }

    @Override // og.c1
    public final Set c() {
        Set set = this.f43519d;
        if (set == null) {
            Set f10 = f();
            this.f43519d = f10;
            return f10;
        }
        return set;
    }

    abstract Map e();

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof c1)) {
            return false;
        }
        return b().equals(((c1) obj).b());
    }

    abstract Set f();

    public final int hashCode() {
        return b().hashCode();
    }

    public final String toString() {
        return ((i) b()).f43139i.toString();
    }
}
