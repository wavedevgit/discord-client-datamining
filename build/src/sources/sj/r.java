package sj;

import java.lang.ref.PhantomReference;
import java.lang.ref.ReferenceQueue;
import java.util.Set;
import sj.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r extends PhantomReference implements a.InterfaceC0635a {

    /* renamed from: a  reason: collision with root package name */
    private final Set f49702a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f49703b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r(Object obj, ReferenceQueue referenceQueue, Set set, Runnable runnable, q qVar) {
        super(obj, referenceQueue);
        this.f49702a = set;
        this.f49703b = runnable;
    }

    @Override // sj.a.InterfaceC0635a
    public final void a() {
        if (!this.f49702a.remove(this)) {
            return;
        }
        clear();
        this.f49703b.run();
    }
}
