package tj;

import java.lang.ref.ReferenceQueue;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final ReferenceQueue f50656a = new ReferenceQueue();

    /* renamed from: b  reason: collision with root package name */
    private final Set f50657b = Collections.synchronizedSet(new HashSet());

    /* renamed from: tj.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0668a {
        void a();
    }

    private a() {
    }

    public static a a() {
        a aVar = new a();
        aVar.b(aVar, new Runnable() { // from class: tj.o
            @Override // java.lang.Runnable
            public final void run() {
            }
        });
        final ReferenceQueue referenceQueue = aVar.f50656a;
        final Set set = aVar.f50657b;
        Thread thread = new Thread(new Runnable() { // from class: tj.p
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

    public InterfaceC0668a b(Object obj, Runnable runnable) {
        r rVar = new r(obj, this.f50656a, this.f50657b, runnable, null);
        this.f50657b.add(rVar);
        return rVar;
    }
}
