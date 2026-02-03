package androidx.lifecycle;

import android.os.Handler;
import androidx.lifecycle.Lifecycle;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l0 {

    /* renamed from: a  reason: collision with root package name */
    private final LifecycleRegistry f4520a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f4521b;

    /* renamed from: c  reason: collision with root package name */
    private a f4522c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final LifecycleRegistry f4523d;

        /* renamed from: e  reason: collision with root package name */
        private final Lifecycle.a f4524e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f4525i;

        public a(LifecycleRegistry registry, Lifecycle.a event) {
            Intrinsics.checkNotNullParameter(registry, "registry");
            Intrinsics.checkNotNullParameter(event, "event");
            this.f4523d = registry;
            this.f4524e = event;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (!this.f4525i) {
                this.f4523d.j(this.f4524e);
                this.f4525i = true;
            }
        }
    }

    public l0(LifecycleOwner provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.f4520a = new LifecycleRegistry(provider);
        this.f4521b = new Handler();
    }

    private final void f(Lifecycle.a aVar) {
        a aVar2 = this.f4522c;
        if (aVar2 != null) {
            aVar2.run();
        }
        a aVar3 = new a(this.f4520a, aVar);
        this.f4522c = aVar3;
        Handler handler = this.f4521b;
        Intrinsics.checkNotNull(aVar3);
        handler.postAtFrontOfQueue(aVar3);
    }

    public Lifecycle a() {
        return this.f4520a;
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
