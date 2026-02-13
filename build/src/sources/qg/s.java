package qg;

import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s implements c1 {

    /* renamed from: d  reason: collision with root package name */
    private transient Set f45494d;

    /* renamed from: e  reason: collision with root package name */
    private transient Map f45495e;

    @Override // qg.c1
    public final Map b() {
        Map map = this.f45495e;
        if (map == null) {
            Map e10 = e();
            this.f45495e = e10;
            return e10;
        }
        return map;
    }

    @Override // qg.c1
    public final Set c() {
        Set set = this.f45494d;
        if (set == null) {
            Set f10 = f();
            this.f45494d = f10;
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
        return ((i) b()).f45114i.toString();
    }
}
