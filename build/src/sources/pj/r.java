package pj;

import java.lang.ref.PhantomReference;
import java.lang.ref.ReferenceQueue;
import java.util.Set;
import pj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r extends PhantomReference implements a.InterfaceC0555a {

    /* renamed from: a  reason: collision with root package name */
    private final Set f46038a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f46039b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r(Object obj, ReferenceQueue referenceQueue, Set set, Runnable runnable, q qVar) {
        super(obj, referenceQueue);
        this.f46038a = set;
        this.f46039b = runnable;
    }

    @Override // pj.a.InterfaceC0555a
    public final void a() {
        if (!this.f46038a.remove(this)) {
            return;
        }
        clear();
        this.f46039b.run();
    }
}
