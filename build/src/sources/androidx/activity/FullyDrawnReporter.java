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
    private final Executor f945a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f946b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f947c;

    /* renamed from: d  reason: collision with root package name */
    private int f948d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f949e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f950f;

    /* renamed from: g  reason: collision with root package name */
    private final List f951g;

    /* renamed from: h  reason: collision with root package name */
    private final Runnable f952h;

    public FullyDrawnReporter(Executor executor, Function0 reportFullyDrawn) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(reportFullyDrawn, "reportFullyDrawn");
        this.f945a = executor;
        this.f946b = reportFullyDrawn;
        this.f947c = new Object();
        this.f951g = new ArrayList();
        this.f952h = new Runnable() { // from class: androidx.activity.w
            @Override // java.lang.Runnable
            public final void run() {
                FullyDrawnReporter.d(FullyDrawnReporter.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(FullyDrawnReporter fullyDrawnReporter) {
        synchronized (fullyDrawnReporter.f947c) {
            try {
                fullyDrawnReporter.f949e = false;
                if (fullyDrawnReporter.f948d == 0 && !fullyDrawnReporter.f950f) {
                    fullyDrawnReporter.f946b.invoke();
                    fullyDrawnReporter.b();
                }
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b() {
        synchronized (this.f947c) {
            try {
                this.f950f = true;
                for (Function0 function0 : this.f951g) {
                    function0.invoke();
                }
                this.f951g.clear();
                Unit unit = Unit.f31765a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean c() {
        boolean z10;
        synchronized (this.f947c) {
            z10 = this.f950f;
        }
        return z10;
    }
}
