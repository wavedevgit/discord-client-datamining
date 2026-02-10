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
    public static final a f45925m = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public x3.h f45926a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f45927b;

    /* renamed from: c  reason: collision with root package name */
    private Runnable f45928c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f45929d;

    /* renamed from: e  reason: collision with root package name */
    private long f45930e;

    /* renamed from: f  reason: collision with root package name */
    private final Executor f45931f;

    /* renamed from: g  reason: collision with root package name */
    private int f45932g;

    /* renamed from: h  reason: collision with root package name */
    private long f45933h;

    /* renamed from: i  reason: collision with root package name */
    private x3.g f45934i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f45935j;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f45936k;

    /* renamed from: l  reason: collision with root package name */
    private final Runnable f45937l;

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
        this.f45927b = new Handler(Looper.getMainLooper());
        this.f45929d = new Object();
        this.f45930e = autoCloseTimeUnit.toMillis(j10);
        this.f45931f = autoCloseExecutor;
        this.f45933h = SystemClock.uptimeMillis();
        this.f45936k = new Runnable() { // from class: r3.a
            @Override // java.lang.Runnable
            public final void run() {
                c.f(c.this);
            }
        };
        this.f45937l = new Runnable() { // from class: r3.b
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
        synchronized (this$0.f45929d) {
            try {
                if (SystemClock.uptimeMillis() - this$0.f45933h < this$0.f45930e) {
                    return;
                }
                if (this$0.f45932g != 0) {
                    return;
                }
                Runnable runnable = this$0.f45928c;
                if (runnable != null) {
                    runnable.run();
                    unit = Unit.f31987a;
                } else {
                    unit = null;
                }
                if (unit != null) {
                    x3.g gVar = this$0.f45934i;
                    if (gVar != null && gVar.isOpen()) {
                        gVar.close();
                    }
                    this$0.f45934i = null;
                    Unit unit2 = Unit.f31987a;
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
        this$0.f45931f.execute(this$0.f45937l);
    }

    public final void d() {
        synchronized (this.f45929d) {
            try {
                this.f45935j = true;
                x3.g gVar = this.f45934i;
                if (gVar != null) {
                    gVar.close();
                }
                this.f45934i = null;
                Unit unit = Unit.f31987a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void e() {
        synchronized (this.f45929d) {
            try {
                int i10 = this.f45932g;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f45932g = i11;
                    if (i11 == 0) {
                        if (this.f45934i == null) {
                            return;
                        }
                        this.f45927b.postDelayed(this.f45936k, this.f45930e);
                    }
                    Unit unit = Unit.f31987a;
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
        return this.f45934i;
    }

    public final x3.h i() {
        x3.h hVar = this.f45926a;
        if (hVar != null) {
            return hVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("delegateOpenHelper");
        return null;
    }

    public final x3.g j() {
        synchronized (this.f45929d) {
            this.f45927b.removeCallbacks(this.f45936k);
            this.f45932g++;
            if (!this.f45935j) {
                x3.g gVar = this.f45934i;
                if (gVar != null && gVar.isOpen()) {
                    return gVar;
                }
                x3.g writableDatabase = i().getWritableDatabase();
                this.f45934i = writableDatabase;
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
        return !this.f45935j;
    }

    public final void m(Runnable onAutoClose) {
        Intrinsics.checkNotNullParameter(onAutoClose, "onAutoClose");
        this.f45928c = onAutoClose;
    }

    public final void n(x3.h hVar) {
        Intrinsics.checkNotNullParameter(hVar, "<set-?>");
        this.f45926a = hVar;
    }
}
