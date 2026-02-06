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
    public static final a f48449m = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public x3.h f48450a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f48451b;

    /* renamed from: c  reason: collision with root package name */
    private Runnable f48452c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f48453d;

    /* renamed from: e  reason: collision with root package name */
    private long f48454e;

    /* renamed from: f  reason: collision with root package name */
    private final Executor f48455f;

    /* renamed from: g  reason: collision with root package name */
    private int f48456g;

    /* renamed from: h  reason: collision with root package name */
    private long f48457h;

    /* renamed from: i  reason: collision with root package name */
    private x3.g f48458i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f48459j;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f48460k;

    /* renamed from: l  reason: collision with root package name */
    private final Runnable f48461l;

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
        this.f48451b = new Handler(Looper.getMainLooper());
        this.f48453d = new Object();
        this.f48454e = autoCloseTimeUnit.toMillis(j10);
        this.f48455f = autoCloseExecutor;
        this.f48457h = SystemClock.uptimeMillis();
        this.f48460k = new Runnable() { // from class: r3.a
            @Override // java.lang.Runnable
            public final void run() {
                c.f(c.this);
            }
        };
        this.f48461l = new Runnable() { // from class: r3.b
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
        synchronized (this$0.f48453d) {
            try {
                if (SystemClock.uptimeMillis() - this$0.f48457h < this$0.f48454e) {
                    return;
                }
                if (this$0.f48456g != 0) {
                    return;
                }
                Runnable runnable = this$0.f48452c;
                if (runnable != null) {
                    runnable.run();
                    unit = Unit.f32008a;
                } else {
                    unit = null;
                }
                if (unit != null) {
                    x3.g gVar = this$0.f48458i;
                    if (gVar != null && gVar.isOpen()) {
                        gVar.close();
                    }
                    this$0.f48458i = null;
                    Unit unit2 = Unit.f32008a;
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
        this$0.f48455f.execute(this$0.f48461l);
    }

    public final void d() {
        synchronized (this.f48453d) {
            try {
                this.f48459j = true;
                x3.g gVar = this.f48458i;
                if (gVar != null) {
                    gVar.close();
                }
                this.f48458i = null;
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void e() {
        synchronized (this.f48453d) {
            try {
                int i10 = this.f48456g;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f48456g = i11;
                    if (i11 == 0) {
                        if (this.f48458i == null) {
                            return;
                        }
                        this.f48451b.postDelayed(this.f48460k, this.f48454e);
                    }
                    Unit unit = Unit.f32008a;
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
        return this.f48458i;
    }

    public final x3.h i() {
        x3.h hVar = this.f48450a;
        if (hVar != null) {
            return hVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("delegateOpenHelper");
        return null;
    }

    public final x3.g j() {
        synchronized (this.f48453d) {
            this.f48451b.removeCallbacks(this.f48460k);
            this.f48456g++;
            if (!this.f48459j) {
                x3.g gVar = this.f48458i;
                if (gVar != null && gVar.isOpen()) {
                    return gVar;
                }
                x3.g writableDatabase = i().getWritableDatabase();
                this.f48458i = writableDatabase;
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
        return !this.f48459j;
    }

    public final void m(Runnable onAutoClose) {
        Intrinsics.checkNotNullParameter(onAutoClose, "onAutoClose");
        this.f48452c = onAutoClose;
    }

    public final void n(x3.h hVar) {
        Intrinsics.checkNotNullParameter(hVar, "<set-?>");
        this.f48450a = hVar;
    }
}
