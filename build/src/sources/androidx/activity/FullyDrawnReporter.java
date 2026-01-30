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
    private final Executor f794a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f795b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f796c;

    /* renamed from: d  reason: collision with root package name */
    private int f797d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f798e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f799f;

    /* renamed from: g  reason: collision with root package name */
    private final List f800g;

    /* renamed from: h  reason: collision with root package name */
    private final Runnable f801h;

    public FullyDrawnReporter(Executor executor, Function0 reportFullyDrawn) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(reportFullyDrawn, "reportFullyDrawn");
        this.f794a = executor;
        this.f795b = reportFullyDrawn;
        this.f796c = new Object();
        this.f800g = new ArrayList();
        this.f801h = new Runnable() { // from class: androidx.activity.w
            @Override // java.lang.Runnable
            public final void run() {
                FullyDrawnReporter.d(FullyDrawnReporter.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(FullyDrawnReporter fullyDrawnReporter) {
        synchronized (fullyDrawnReporter.f796c) {
            try {
                fullyDrawnReporter.f798e = false;
                if (fullyDrawnReporter.f797d == 0 && !fullyDrawnReporter.f799f) {
                    fullyDrawnReporter.f795b.invoke();
                    fullyDrawnReporter.b();
                }
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b() {
        synchronized (this.f796c) {
            try {
                this.f799f = true;
                for (Function0 function0 : this.f800g) {
                    function0.invoke();
                }
                this.f800g.clear();
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean c() {
        boolean z10;
        synchronized (this.f796c) {
            z10 = this.f799f;
        }
        return z10;
    }
}
