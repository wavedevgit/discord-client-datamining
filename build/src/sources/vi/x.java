package vi;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class x implements gj.b {

    /* renamed from: b  reason: collision with root package name */
    private volatile Set f52470b = null;

    /* renamed from: a  reason: collision with root package name */
    private volatile Set f52469a = Collections.newSetFromMap(new ConcurrentHashMap());

    x(Collection collection) {
        this.f52469a.addAll(collection);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x b(Collection collection) {
        return new x((Set) collection);
    }

    private synchronized void d() {
        try {
            for (gj.b bVar : this.f52469a) {
                this.f52470b.add(bVar.get());
            }
            this.f52469a = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void a(gj.b bVar) {
        try {
            if (this.f52470b == null) {
                this.f52469a.add(bVar);
            } else {
                this.f52470b.add(bVar.get());
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // gj.b
    /* renamed from: c */
    public Set get() {
        if (this.f52470b == null) {
            synchronized (this) {
                try {
                    if (this.f52470b == null) {
                        this.f52470b = Collections.newSetFromMap(new ConcurrentHashMap());
                        d();
                    }
                } finally {
                }
            }
        }
        return Collections.unmodifiableSet(this.f52470b);
    }
}
