package androidx.lifecycle;

import android.os.Handler;
import androidx.lifecycle.Lifecycle;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l0 {

    /* renamed from: a  reason: collision with root package name */
    private final LifecycleRegistry f4658a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f4659b;

    /* renamed from: c  reason: collision with root package name */
    private a f4660c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final LifecycleRegistry f4661d;

        /* renamed from: e  reason: collision with root package name */
        private final Lifecycle.a f4662e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f4663i;

        public a(LifecycleRegistry registry, Lifecycle.a event) {
            Intrinsics.checkNotNullParameter(registry, "registry");
            Intrinsics.checkNotNullParameter(event, "event");
            this.f4661d = registry;
            this.f4662e = event;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (!this.f4663i) {
                this.f4661d.j(this.f4662e);
                this.f4663i = true;
            }
        }
    }

    public l0(LifecycleOwner provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f4658a = new LifecycleRegistry(provider);
        this.f4659b = new Handler();
    }

    private final void f(Lifecycle.a aVar) {
        a aVar2 = this.f4660c;
        if (aVar2 != null) {
            aVar2.run();
        }
        a aVar3 = new a(this.f4658a, aVar);
        this.f4660c = aVar3;
        Handler handler = this.f4659b;
        Intrinsics.checkNotNull(aVar3);
        handler.postAtFrontOfQueue(aVar3);
    }

    public Lifecycle a() {
        return this.f4658a;
    }

    public void b() {
        f(Lifecycle.a.ON_START);
    }

    public void c() {
        f(Lifecycle.a.ON_CREATE);
    }

    public void d() {
        f(Lifecycle.a.ON_STOP);
        f(Lifecycle.a.ON_DESTROY);
    }

    public void e() {
        f(Lifecycle.a.ON_START);
    }
}
