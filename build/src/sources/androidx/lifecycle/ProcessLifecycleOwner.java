package androidx.lifecycle;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.a0;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u0000 -2\u00020\u0001:\u0002./B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000f\u0010\u0005\u001a\u00020\u0004H\u0000¢\u0006\u0004\b\u0005\u0010\u0003J\u000f\u0010\u0006\u001a\u00020\u0004H\u0000¢\u0006\u0004\b\u0006\u0010\u0003J\u000f\u0010\u0007\u001a\u00020\u0004H\u0000¢\u0006\u0004\b\u0007\u0010\u0003J\u000f\u0010\b\u001a\u00020\u0004H\u0000¢\u0006\u0004\b\b\u0010\u0003J\u000f\u0010\t\u001a\u00020\u0004H\u0000¢\u0006\u0004\b\t\u0010\u0003J\u000f\u0010\n\u001a\u00020\u0004H\u0000¢\u0006\u0004\b\n\u0010\u0003J\u0017\u0010\r\u001a\u00020\u00042\u0006\u0010\f\u001a\u00020\u000bH\u0000¢\u0006\u0004\b\r\u0010\u000eR\u0016\u0010\u0012\u001a\u00020\u000f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R\u0016\u0010\u0013\u001a\u00020\u000f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0007\u0010\u0011R\u0016\u0010\u0016\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\r\u0010\u0015R\u0016\u0010\u0018\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0017\u0010\u0015R\u0018\u0010\u001c\u001a\u0004\u0018\u00010\u00198\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0014\u0010 \u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u001fR\u0014\u0010$\u001a\u00020!8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\"\u0010#R\u0014\u0010(\u001a\u00020%8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010'R\u0014\u0010,\u001a\u00020)8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b*\u0010+¨\u00060"}, d2 = {"Landroidx/lifecycle/ProcessLifecycleOwner;", "Landroidx/lifecycle/LifecycleOwner;", "<init>", "()V", "", "g", "f", "e", "h", "k", "l", "Landroid/content/Context;", "context", "i", "(Landroid/content/Context;)V", "", "d", "I", "startedCounter", "resumedCounter", "", "Z", "pauseSent", "o", "stopSent", "Landroid/os/Handler;", "p", "Landroid/os/Handler;", "handler", "Landroidx/lifecycle/LifecycleRegistry;", "q", "Landroidx/lifecycle/LifecycleRegistry;", "registry", "Ljava/lang/Runnable;", "r", "Ljava/lang/Runnable;", "delayedPauseRunnable", "Landroidx/lifecycle/a0$a;", "s", "Landroidx/lifecycle/a0$a;", "initializationListener", "Landroidx/lifecycle/Lifecycle;", "getLifecycle", "()Landroidx/lifecycle/Lifecycle;", "lifecycle", "t", "b", "a", "lifecycle-process_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ProcessLifecycleOwner implements LifecycleOwner {

    /* renamed from: t  reason: collision with root package name */
    public static final b f4476t = new b(null);

    /* renamed from: u  reason: collision with root package name */
    private static final ProcessLifecycleOwner f4477u = new ProcessLifecycleOwner();

    /* renamed from: d  reason: collision with root package name */
    private int f4478d;

    /* renamed from: e  reason: collision with root package name */
    private int f4479e;

    /* renamed from: p  reason: collision with root package name */
    private Handler f4482p;

    /* renamed from: i  reason: collision with root package name */
    private boolean f4480i = true;

    /* renamed from: o  reason: collision with root package name */
    private boolean f4481o = true;

    /* renamed from: q  reason: collision with root package name */
    private final LifecycleRegistry f4483q = new LifecycleRegistry(this);

    /* renamed from: r  reason: collision with root package name */
    private final Runnable f4484r = new Runnable() { // from class: androidx.lifecycle.x
        @Override // java.lang.Runnable
        public final void run() {
            ProcessLifecycleOwner.j(ProcessLifecycleOwner.this);
        }
    };

    /* renamed from: s  reason: collision with root package name */
    private final a0.a f4485s = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public static final a f4486a = new a();

        private a() {
        }

        public static final void a(Activity activity, Application.ActivityLifecycleCallbacks callback) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            Intrinsics.checkNotNullParameter(callback, "callback");
            activity.registerActivityLifecycleCallbacks(callback);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final LifecycleOwner a() {
            return ProcessLifecycleOwner.f4477u;
        }

        public final void b(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            ProcessLifecycleOwner.f4477u.i(context);
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends f {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends f {
            final /* synthetic */ ProcessLifecycleOwner this$0;

            a(ProcessLifecycleOwner processLifecycleOwner) {
                this.this$0 = processLifecycleOwner;
            }

            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivityPostResumed(Activity activity) {
                Intrinsics.checkNotNullParameter(activity, "activity");
                this.this$0.f();
            }

            @Override // android.app.Application.ActivityLifecycleCallbacks
            public void onActivityPostStarted(Activity activity) {
                Intrinsics.checkNotNullParameter(activity, "activity");
                this.this$0.g();
            }
        }

        c() {
        }

        @Override // androidx.lifecycle.f, android.app.Application.ActivityLifecycleCallbacks
        public void onActivityCreated(Activity activity, Bundle bundle) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            if (Build.VERSION.SDK_INT < 29) {
                a0.f4502e.b(activity).e(ProcessLifecycleOwner.this.f4485s);
            }
        }

        @Override // androidx.lifecycle.f, android.app.Application.ActivityLifecycleCallbacks
        public void onActivityPaused(Activity activity) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            ProcessLifecycleOwner.this.e();
        }

        @Override // android.app.Application.ActivityLifecycleCallbacks
        public void onActivityPreCreated(Activity activity, Bundle bundle) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            a.a(activity, new a(ProcessLifecycleOwner.this));
        }

        @Override // androidx.lifecycle.f, android.app.Application.ActivityLifecycleCallbacks
        public void onActivityStopped(Activity activity) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            ProcessLifecycleOwner.this.h();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d implements a0.a {
        d() {
        }

        @Override // androidx.lifecycle.a0.a
        public void a() {
        }

        @Override // androidx.lifecycle.a0.a
        public void b() {
            ProcessLifecycleOwner.this.g();
        }

        @Override // androidx.lifecycle.a0.a
        public void onResume() {
            ProcessLifecycleOwner.this.f();
        }
    }

    private ProcessLifecycleOwner() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(ProcessLifecycleOwner processLifecycleOwner) {
        processLifecycleOwner.k();
        processLifecycleOwner.l();
    }

    public static final LifecycleOwner m() {
        return f4476t.a();
    }

    public final void e() {
        int i10 = this.f4479e - 1;
        this.f4479e = i10;
        if (i10 == 0) {
            Handler handler = this.f4482p;
            Intrinsics.checkNotNull(handler);
            handler.postDelayed(this.f4484r, 700L);
        }
    }

    public final void f() {
        int i10 = this.f4479e + 1;
        this.f4479e = i10;
        if (i10 == 1) {
            if (this.f4480i) {
                this.f4483q.j(Lifecycle.a.ON_RESUME);
                this.f4480i = false;
                return;
            }
            Handler handler = this.f4482p;
            Intrinsics.checkNotNull(handler);
            handler.removeCallbacks(this.f4484r);
        }
    }

    public final void g() {
        int i10 = this.f4478d + 1;
        this.f4478d = i10;
        if (i10 == 1 && this.f4481o) {
            this.f4483q.j(Lifecycle.a.ON_START);
            this.f4481o = false;
        }
    }

    @Override // androidx.lifecycle.LifecycleOwner
    public Lifecycle getLifecycle() {
        return this.f4483q;
    }

    public final void h() {
        this.f4478d--;
        l();
    }

    public final void i(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f4482p = new Handler();
        this.f4483q.j(Lifecycle.a.ON_CREATE);
        Context applicationContext = context.getApplicationContext();
        Intrinsics.checkNotNull(applicationContext, "null cannot be cast to non-null type android.app.Application");
        ((Application) applicationContext).registerActivityLifecycleCallbacks(new c());
    }

    public final void k() {
        if (this.f4479e == 0) {
            this.f4480i = true;
            this.f4483q.j(Lifecycle.a.ON_PAUSE);
        }
    }

    public final void l() {
        if (this.f4478d == 0 && this.f4480i) {
            this.f4483q.j(Lifecycle.a.ON_STOP);
            this.f4481o = true;
        }
    }
}
