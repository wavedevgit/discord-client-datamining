package ui;

import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class x implements fj.b {

    /* renamed from: b  reason: collision with root package name */
    private volatile Set f51562b = null;

    /* renamed from: a  reason: collision with root package name */
    private volatile Set f51561a = Collections.newSetFromMap(new ConcurrentHashMap());

    x(Collection collection) {
        this.f51561a.addAll(collection);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x b(Collection collection) {
        return new x((Set) collection);
    }

    private synchronized void d() {
        try {
            for (fj.b bVar : this.f51561a) {
                this.f51562b.add(bVar.get());
            }
            this.f51561a = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void a(fj.b bVar) {
        try {
            if (this.f51562b == null) {
                this.f51561a.add(bVar);
            } else {
                this.f51562b.add(bVar.get());
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // fj.b
    /* renamed from: c */
    public Set get() {
        if (this.f51562b == null) {
            synchronized (this) {
                try {
                    if (this.f51562b == null) {
                        this.f51562b = Collections.newSetFromMap(new ConcurrentHashMap());
                        d();
                    }
                } finally {
                }
            }
        }
        return Collections.unmodifiableSet(this.f51562b);
    }
}
