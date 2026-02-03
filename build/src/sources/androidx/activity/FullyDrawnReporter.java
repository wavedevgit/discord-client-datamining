package androidx.activity;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FullyDrawnReporter {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f838a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f839b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f840c;

    /* renamed from: d  reason: collision with root package name */
    private int f841d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f842e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f843f;

    /* renamed from: g  reason: collision with root package name */
    private final List f844g;

    /* renamed from: h  reason: collision with root package name */
    private final Runnable f845h;

    public FullyDrawnReporter(Executor executor, Function0 reportFullyDrawn) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(reportFullyDrawn, "reportFullyDrawn");
        this.f838a = executor;
        this.f839b = reportFullyDrawn;
        this.f840c = new Object();
        this.f844g = new ArrayList();
        this.f845h = new Runnable() { // from class: androidx.activity.w
            @Override // java.lang.Runnable
            public final void run() {
                FullyDrawnReporter.d(FullyDrawnReporter.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(FullyDrawnReporter fullyDrawnReporter) {
        synchronized (fullyDrawnReporter.f840c) {
            try {
                fullyDrawnReporter.f842e = false;
                if (fullyDrawnReporter.f841d == 0 && !fullyDrawnReporter.f843f) {
                    fullyDrawnReporter.f839b.invoke();
                    fullyDrawnReporter.b();
                }
                Unit unit = Unit.f33074a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b() {
        synchronized (this.f840c) {
            try {
                this.f843f = true;
                for (Function0 function0 : this.f844g) {
                    function0.invoke();
                }
                this.f844g.clear();
                Unit unit = Unit.f33074a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean c() {
        boolean z10;
        synchronized (this.f840c) {
            z10 = this.f843f;
        }
        return z10;
    }
}
