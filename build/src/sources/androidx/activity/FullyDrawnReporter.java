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
    private final Executor f919a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f920b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f921c;

    /* renamed from: d  reason: collision with root package name */
    private int f922d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f923e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f924f;

    /* renamed from: g  reason: collision with root package name */
    private final List f925g;

    /* renamed from: h  reason: collision with root package name */
    private final Runnable f926h;

    public FullyDrawnReporter(Executor executor, Function0 reportFullyDrawn) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(reportFullyDrawn, "reportFullyDrawn");
        this.f919a = executor;
        this.f920b = reportFullyDrawn;
        this.f921c = new Object();
        this.f925g = new ArrayList();
        this.f926h = new Runnable() { // from class: androidx.activity.w
            @Override // java.lang.Runnable
            public final void run() {
                FullyDrawnReporter.d(FullyDrawnReporter.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(FullyDrawnReporter fullyDrawnReporter) {
        synchronized (fullyDrawnReporter.f921c) {
            try {
                fullyDrawnReporter.f923e = false;
                if (fullyDrawnReporter.f922d == 0 && !fullyDrawnReporter.f924f) {
                    fullyDrawnReporter.f920b.invoke();
                    fullyDrawnReporter.b();
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b() {
        synchronized (this.f921c) {
            try {
                this.f924f = true;
                for (Function0 function0 : this.f925g) {
                    function0.invoke();
                }
                this.f925g.clear();
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean c() {
        boolean z10;
        synchronized (this.f921c) {
            z10 = this.f924f;
        }
        return z10;
    }
}
