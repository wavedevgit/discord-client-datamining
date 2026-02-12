package xi;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class x implements ij.b {

    /* renamed from: b  reason: collision with root package name */
    private volatile Set f54867b = null;

    /* renamed from: a  reason: collision with root package name */
    private volatile Set f54866a = Collections.newSetFromMap(new ConcurrentHashMap());

    x(Collection collection) {
        this.f54866a.addAll(collection);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x b(Collection collection) {
        return new x((Set) collection);
    }

    private synchronized void d() {
        try {
            for (ij.b bVar : this.f54866a) {
                this.f54867b.add(bVar.get());
            }
            this.f54866a = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void a(ij.b bVar) {
        try {
            if (this.f54867b == null) {
                this.f54866a.add(bVar);
            } else {
                this.f54867b.add(bVar.get());
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // ij.b
    /* renamed from: c */
    public Set get() {
        if (this.f54867b == null) {
            synchronized (this) {
                try {
                    if (this.f54867b == null) {
                        this.f54867b = Collections.newSetFromMap(new ConcurrentHashMap());
                        d();
                    }
                } finally {
                }
            }
        }
        return Collections.unmodifiableSet(this.f54867b);
    }
}
