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
    private final Executor f946a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f947b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f948c;

    /* renamed from: d  reason: collision with root package name */
    private int f949d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f950e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f951f;

    /* renamed from: g  reason: collision with root package name */
    private final List f952g;

    /* renamed from: h  reason: collision with root package name */
    private final Runnable f953h;

    public FullyDrawnReporter(Executor executor, Function0 reportFullyDrawn) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(reportFullyDrawn, "reportFullyDrawn");
        this.f946a = executor;
        this.f947b = reportFullyDrawn;
        this.f948c = new Object();
        this.f952g = new ArrayList();
        this.f953h = new Runnable() { // from class: androidx.activity.w
            @Override // java.lang.Runnable
            public final void run() {
                FullyDrawnReporter.d(FullyDrawnReporter.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(FullyDrawnReporter fullyDrawnReporter) {
        synchronized (fullyDrawnReporter.f948c) {
            try {
                fullyDrawnReporter.f950e = false;
                if (fullyDrawnReporter.f949d == 0 && !fullyDrawnReporter.f951f) {
                    fullyDrawnReporter.f947b.invoke();
                    fullyDrawnReporter.b();
                }
                Unit unit = Unit.f32556a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b() {
        synchronized (this.f948c) {
            try {
                this.f951f = true;
                for (Function0 function0 : this.f952g) {
                    function0.invoke();
                }
                this.f952g.clear();
                Unit unit = Unit.f32556a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean c() {
        boolean z10;
        synchronized (this.f948c) {
            z10 = this.f951f;
        }
        return z10;
    }
}
