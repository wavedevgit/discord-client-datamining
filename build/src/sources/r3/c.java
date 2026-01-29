package r3;

import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import java.util.concurrent.Executor;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: m  reason: collision with root package name */
    public static final a f47831m = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public x3.h f47832a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f47833b;

    /* renamed from: c  reason: collision with root package name */
    private Runnable f47834c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f47835d;

    /* renamed from: e  reason: collision with root package name */
    private long f47836e;

    /* renamed from: f  reason: collision with root package name */
    private final Executor f47837f;

    /* renamed from: g  reason: collision with root package name */
    private int f47838g;

    /* renamed from: h  reason: collision with root package name */
    private long f47839h;

    /* renamed from: i  reason: collision with root package name */
    private x3.g f47840i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f47841j;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f47842k;

    /* renamed from: l  reason: collision with root package name */
    private final Runnable f47843l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public c(long j10, TimeUnit autoCloseTimeUnit, Executor autoCloseExecutor) {
        Intrinsics.checkNotNullParameter(autoCloseTimeUnit, "autoCloseTimeUnit");
        Intrinsics.checkNotNullParameter(autoCloseExecutor, "autoCloseExecutor");
        this.f47833b = new Handler(Looper.getMainLooper());
        this.f47835d = new Object();
        this.f47836e = autoCloseTimeUnit.toMillis(j10);
        this.f47837f = autoCloseExecutor;
        this.f47839h = SystemClock.uptimeMillis();
        this.f47842k = new Runnable() { // from class: r3.a
            @Override // java.lang.Runnable
            public final void run() {
                c.f(c.this);
            }
        };
        this.f47843l = new Runnable() { // from class: r3.b
            @Override // java.lang.Runnable
            public final void run() {
                c.c(c.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(c this$0) {
        Unit unit;
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        synchronized (this$0.f47835d) {
            try {
                if (SystemClock.uptimeMillis() - this$0.f47839h < this$0.f47836e) {
                    return;
                }
                if (this$0.f47838g != 0) {
                    return;
                }
                Runnable runnable = this$0.f47834c;
                if (runnable != null) {
                    runnable.run();
                    unit = Unit.f33282a;
                } else {
                    unit = null;
                }
                if (unit != null) {
                    x3.g gVar = this$0.f47840i;
                    if (gVar != null && gVar.isOpen()) {
                        gVar.close();
                    }
                    this$0.f47840i = null;
                    Unit unit2 = Unit.f33282a;
                    return;
                }
                throw new IllegalStateException("onAutoCloseCallback is null but it should have been set before use. Please file a bug against Room at: https://issuetracker.google.com/issues/new?component=413107&template=1096568");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(c this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        this$0.f47837f.execute(this$0.f47843l);
    }

    public final void d() {
        synchronized (this.f47835d) {
            try {
                this.f47841j = true;
                x3.g gVar = this.f47840i;
                if (gVar != null) {
                    gVar.close();
                }
                this.f47840i = null;
                Unit unit = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void e() {
        synchronized (this.f47835d) {
            try {
                int i10 = this.f47838g;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f47838g = i11;
                    if (i11 == 0) {
                        if (this.f47840i == null) {
                            return;
                        }
                        this.f47833b.postDelayed(this.f47842k, this.f47836e);
                    }
                    Unit unit = Unit.f33282a;
                    return;
                }
                throw new IllegalStateException("ref count is 0 or lower but we're supposed to decrement");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Object g(Function1 block) {
        Intrinsics.checkNotNullParameter(block, "block");
        try {
            return block.invoke(j());
        } finally {
            e();
        }
    }

    public final x3.g h() {
        return this.f47840i;
    }

    public final x3.h i() {
        x3.h hVar = this.f47832a;
        if (hVar != null) {
            return hVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("delegateOpenHelper");
        return null;
    }

    public final x3.g j() {
        synchronized (this.f47835d) {
            this.f47833b.removeCallbacks(this.f47842k);
            this.f47838g++;
            if (!this.f47841j) {
                x3.g gVar = this.f47840i;
                if (gVar != null && gVar.isOpen()) {
                    return gVar;
                }
                x3.g writableDatabase = i().getWritableDatabase();
                this.f47840i = writableDatabase;
                return writableDatabase;
            }
            throw new IllegalStateException("Attempting to open already closed database.");
        }
    }

    public final void k(x3.h delegateOpenHelper) {
        Intrinsics.checkNotNullParameter(delegateOpenHelper, "delegateOpenHelper");
        n(delegateOpenHelper);
    }

    public final boolean l() {
        return !this.f47841j;
    }

    public final void m(Runnable onAutoClose) {
        Intrinsics.checkNotNullParameter(onAutoClose, "onAutoClose");
        this.f47834c = onAutoClose;
    }

    public final void n(x3.h hVar) {
        Intrinsics.checkNotNullParameter(hVar, "<set-?>");
        this.f47832a = hVar;
    }
}
