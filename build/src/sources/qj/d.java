package qj;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: b  reason: collision with root package name */
    private static volatile d f45430b;

    /* renamed from: a  reason: collision with root package name */
    private final Set f45431a = new HashSet();

    d() {
    }

    public static d a() {
        d dVar;
        d dVar2 = f45430b;
        if (dVar2 == null) {
            synchronized (d.class) {
                try {
                    dVar = f45430b;
                    if (dVar == null) {
                        dVar = new d();
                        f45430b = dVar;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return dVar;
        }
        return dVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set b() {
        Set unmodifiableSet;
        synchronized (this.f45431a) {
            unmodifiableSet = Collections.unmodifiableSet(this.f45431a);
        }
        return unmodifiableSet;
    }
}
