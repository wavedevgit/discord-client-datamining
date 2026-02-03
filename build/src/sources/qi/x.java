package qi;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class x implements bj.b {

    /* renamed from: b  reason: collision with root package name */
    private volatile Set f47740b = null;

    /* renamed from: a  reason: collision with root package name */
    private volatile Set f47739a = Collections.newSetFromMap(new ConcurrentHashMap());

    x(Collection collection) {
        this.f47739a.addAll(collection);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x b(Collection collection) {
        return new x((Set) collection);
    }

    private synchronized void d() {
        try {
            for (bj.b bVar : this.f47739a) {
                this.f47740b.add(bVar.get());
            }
            this.f47739a = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void a(bj.b bVar) {
        try {
            if (this.f47740b == null) {
                this.f47739a.add(bVar);
            } else {
                this.f47740b.add(bVar.get());
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // bj.b
    /* renamed from: c */
    public Set get() {
        if (this.f47740b == null) {
            synchronized (this) {
                try {
                    if (this.f47740b == null) {
                        this.f47740b = Collections.newSetFromMap(new ConcurrentHashMap());
                        d();
                    }
                } finally {
                }
            }
        }
        return Collections.unmodifiableSet(this.f47740b);
    }
}
