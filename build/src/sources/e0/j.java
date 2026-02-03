package e0;

import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import x.n0;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j implements n0.i {

    /* renamed from: e  reason: collision with root package name */
    public static final a f22540e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final n0.i f22541a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f22542b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22543c;

    /* renamed from: d  reason: collision with root package name */
    private n0.j f22544d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final j a(n0.i iVar) {
            return new j(iVar, null);
        }

        private a() {
        }
    }

    public /* synthetic */ j(n0.i iVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(iVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(j this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        synchronized (this$0.f22542b) {
            try {
                if (this$0.f22544d == null) {
                    y0.l("ScreenFlashWrapper", "apply: pendingListener is null!");
                }
                this$0.e();
                Unit unit = Unit.f33074a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void d() {
        Unit unit;
        synchronized (this.f22542b) {
            try {
                if (this.f22543c) {
                    n0.i iVar = this.f22541a;
                    if (iVar != null) {
                        iVar.clear();
                        unit = Unit.f33074a;
                    } else {
                        unit = null;
                    }
                    if (unit == null) {
                        y0.c("ScreenFlashWrapper", "completePendingScreenFlashClear: screenFlash is null!");
                    }
                } else {
                    y0.l("ScreenFlashWrapper", "completePendingScreenFlashClear: none pending!");
                }
                this.f22543c = false;
                Unit unit2 = Unit.f33074a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void e() {
        synchronized (this.f22542b) {
            try {
                n0.j jVar = this.f22544d;
                if (jVar != null) {
                    jVar.a();
                }
                this.f22544d = null;
                Unit unit = Unit.f33074a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static final j g(n0.i iVar) {
        return f22540e.a(iVar);
    }

    @Override // x.n0.i
    public void a(long j10, n0.j screenFlashListener) {
        Unit unit;
        Intrinsics.checkNotNullParameter(screenFlashListener, "screenFlashListener");
        synchronized (this.f22542b) {
            this.f22543c = true;
            this.f22544d = screenFlashListener;
            Unit unit2 = Unit.f33074a;
        }
        n0.i iVar = this.f22541a;
        if (iVar != null) {
            iVar.a(j10, new n0.j() { // from class: e0.i
                @Override // x.n0.j
                public final void a() {
                    j.c(j.this);
                }
            });
            unit = Unit.f33074a;
        } else {
            unit = null;
        }
        if (unit == null) {
            y0.c("ScreenFlashWrapper", "apply: screenFlash is null!");
            e();
        }
    }

    @Override // x.n0.i
    public void clear() {
        d();
    }

    public final void f() {
        e();
        d();
    }

    public final n0.i h() {
        return this.f22541a;
    }

    private j(n0.i iVar) {
        this.f22541a = iVar;
        this.f22542b = new Object();
    }
}
