package wj;

import java.lang.ref.PhantomReference;
import java.lang.ref.ReferenceQueue;
import java.util.Set;
import wj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r extends PhantomReference implements a.InterfaceC0737a {

    /* renamed from: a  reason: collision with root package name */
    private final Set f52831a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f52832b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r(Object obj, ReferenceQueue referenceQueue, Set set, Runnable runnable, q qVar) {
        super(obj, referenceQueue);
        this.f52831a = set;
        this.f52832b = runnable;
    }

    @Override // wj.a.InterfaceC0737a
    public final void a() {
        if (!this.f52831a.remove(this)) {
            return;
        }
        clear();
        this.f52832b.run();
    }
}
