package sj;

import java.lang.ref.ReferenceQueue;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final ReferenceQueue f49644a = new ReferenceQueue();

    /* renamed from: b  reason: collision with root package name */
    private final Set f49645b = Collections.synchronizedSet(new HashSet());

    /* renamed from: sj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0635a {
        void a();
    }

    private a() {
    }

    public static a a() {
        a aVar = new a();
        aVar.b(aVar, new Runnable() { // from class: sj.o
            @Override // java.lang.Runnable
            public final void run() {
            }
        });
        final ReferenceQueue referenceQueue = aVar.f49644a;
        final Set set = aVar.f49645b;
        Thread thread = new Thread(new Runnable() { // from class: sj.p
            @Override // java.lang.Runnable
            public final void run() {
                ReferenceQueue referenceQueue2 = referenceQueue;
                while (!set.isEmpty()) {
                    try {
                        ((r) referenceQueue2.remove()).a();
                    } catch (InterruptedException unused) {
                    }
                }
            }
        }, "MlKitCleaner");
        thread.setDaemon(true);
        thread.start();
        return aVar;
    }

    public InterfaceC0635a b(Object obj, Runnable runnable) {
        r rVar = new r(obj, this.f49644a, this.f49645b, runnable, null);
        this.f49645b.add(rVar);
        return rVar;
    }
}
