package ti;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class x implements ej.b {

    /* renamed from: b  reason: collision with root package name */
    private volatile Set f50754b = null;

    /* renamed from: a  reason: collision with root package name */
    private volatile Set f50753a = Collections.newSetFromMap(new ConcurrentHashMap());

    x(Collection collection) {
        this.f50753a.addAll(collection);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x b(Collection collection) {
        return new x((Set) collection);
    }

    private synchronized void d() {
        try {
            for (ej.b bVar : this.f50753a) {
                this.f50754b.add(bVar.get());
            }
            this.f50753a = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void a(ej.b bVar) {
        try {
            if (this.f50754b == null) {
                this.f50753a.add(bVar);
            } else {
                this.f50754b.add(bVar.get());
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // ej.b
    /* renamed from: c */
    public Set get() {
        if (this.f50754b == null) {
            synchronized (this) {
                try {
                    if (this.f50754b == null) {
                        this.f50754b = Collections.newSetFromMap(new ConcurrentHashMap());
                        d();
                    }
                } finally {
                }
            }
        }
        return Collections.unmodifiableSet(this.f50754b);
    }
}
