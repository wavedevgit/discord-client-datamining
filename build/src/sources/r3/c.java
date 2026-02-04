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
    public static final a f48355m = new a(null);

    /* renamed from: a  reason: collision with root package name */
    public x3.h f48356a;

    /* renamed from: b  reason: collision with root package name */
    private final Handler f48357b;

    /* renamed from: c  reason: collision with root package name */
    private Runnable f48358c;

    /* renamed from: d  reason: collision with root package name */
    private final Object f48359d;

    /* renamed from: e  reason: collision with root package name */
    private long f48360e;

    /* renamed from: f  reason: collision with root package name */
    private final Executor f48361f;

    /* renamed from: g  reason: collision with root package name */
    private int f48362g;

    /* renamed from: h  reason: collision with root package name */
    private long f48363h;

    /* renamed from: i  reason: collision with root package name */
    private x3.g f48364i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f48365j;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f48366k;

    /* renamed from: l  reason: collision with root package name */
    private final Runnable f48367l;

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
        this.f48357b = new Handler(Looper.getMainLooper());
        this.f48359d = new Object();
        this.f48360e = autoCloseTimeUnit.toMillis(j10);
        this.f48361f = autoCloseExecutor;
        this.f48363h = SystemClock.uptimeMillis();
        this.f48366k = new Runnable() { // from class: r3.a
            @Override // java.lang.Runnable
            public final void run() {
                c.f(c.this);
            }
        };
        this.f48367l = new Runnable() { // from class: r3.b
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
        synchronized (this$0.f48359d) {
            try {
                if (SystemClock.uptimeMillis() - this$0.f48363h < this$0.f48360e) {
                    return;
                }
                if (this$0.f48362g != 0) {
                    return;
                }
                Runnable runnable = this$0.f48358c;
                if (runnable != null) {
                    runnable.run();
                    unit = Unit.f32464a;
                } else {
                    unit = null;
                }
                if (unit != null) {
                    x3.g gVar = this$0.f48364i;
                    if (gVar != null && gVar.isOpen()) {
                        gVar.close();
                    }
                    this$0.f48364i = null;
                    Unit unit2 = Unit.f32464a;
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
        this$0.f48361f.execute(this$0.f48367l);
    }

    public final void d() {
        synchronized (this.f48359d) {
            try {
                this.f48365j = true;
                x3.g gVar = this.f48364i;
                if (gVar != null) {
                    gVar.close();
                }
                this.f48364i = null;
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void e() {
        synchronized (this.f48359d) {
            try {
                int i10 = this.f48362g;
                if (i10 > 0) {
                    int i11 = i10 - 1;
                    this.f48362g = i11;
                    if (i11 == 0) {
                        if (this.f48364i == null) {
                            return;
                        }
                        this.f48357b.postDelayed(this.f48366k, this.f48360e);
                    }
                    Unit unit = Unit.f32464a;
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
        return this.f48364i;
    }

    public final x3.h i() {
        x3.h hVar = this.f48356a;
        if (hVar != null) {
            return hVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("delegateOpenHelper");
        return null;
    }

    public final x3.g j() {
        synchronized (this.f48359d) {
            this.f48357b.removeCallbacks(this.f48366k);
            this.f48362g++;
            if (!this.f48365j) {
                x3.g gVar = this.f48364i;
                if (gVar != null && gVar.isOpen()) {
                    return gVar;
                }
                x3.g writableDatabase = i().getWritableDatabase();
                this.f48364i = writableDatabase;
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
        return !this.f48365j;
    }

    public final void m(Runnable onAutoClose) {
        Intrinsics.checkNotNullParameter(onAutoClose, "onAutoClose");
        this.f48358c = onAutoClose;
    }

    public final void n(x3.h hVar) {
        Intrinsics.checkNotNullParameter(hVar, "<set-?>");
        this.f48356a = hVar;
    }
}
