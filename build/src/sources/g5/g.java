package g5;

import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g extends Lifecycle {

    /* renamed from: b  reason: collision with root package name */
    public static final g f25736b = new g();

    /* renamed from: c  reason: collision with root package name */
    private static final a f25737c = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements LifecycleOwner {
        a() {
        }

        @Override // androidx.lifecycle.LifecycleOwner
        /* renamed from: a */
        public g getLifecycle() {
            return g.f25736b;
        }
    }

    private g() {
    }

    @Override // androidx.lifecycle.Lifecycle
    public void a(androidx.lifecycle.o oVar) {
        if (oVar instanceof DefaultLifecycleObserver) {
            DefaultLifecycleObserver defaultLifecycleObserver = (DefaultLifecycleObserver) oVar;
            a aVar = f25737c;
            defaultLifecycleObserver.onCreate(aVar);
            defaultLifecycleObserver.onStart(aVar);
            defaultLifecycleObserver.onResume(aVar);
            return;
        }
        throw new IllegalArgumentException((oVar + " must implement androidx.lifecycle.DefaultLifecycleObserver.").toString());
    }

    @Override // androidx.lifecycle.Lifecycle
    public Lifecycle.State b() {
        return Lifecycle.State.f4396p;
    }

    public String toString() {
        return "coil.request.GlobalLifecycle";
    }

    @Override // androidx.lifecycle.Lifecycle
    public void d(androidx.lifecycle.o oVar) {
    }
}
