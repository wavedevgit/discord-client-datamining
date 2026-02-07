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
    private final Executor f1248a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f1249b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f1250c;

    /* renamed from: d  reason: collision with root package name */
    private int f1251d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f1252e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f1253f;

    /* renamed from: g  reason: collision with root package name */
    private final List f1254g;

    /* renamed from: h  reason: collision with root package name */
    private final Runnable f1255h;

    public FullyDrawnReporter(Executor executor, Function0 reportFullyDrawn) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(reportFullyDrawn, "reportFullyDrawn");
        this.f1248a = executor;
        this.f1249b = reportFullyDrawn;
        this.f1250c = new Object();
        this.f1254g = new ArrayList();
        this.f1255h = new Runnable() { // from class: androidx.activity.w
            @Override // java.lang.Runnable
            public final void run() {
                FullyDrawnReporter.d(FullyDrawnReporter.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(FullyDrawnReporter fullyDrawnReporter) {
        synchronized (fullyDrawnReporter.f1250c) {
            try {
                fullyDrawnReporter.f1252e = false;
                if (fullyDrawnReporter.f1251d == 0 && !fullyDrawnReporter.f1253f) {
                    fullyDrawnReporter.f1249b.invoke();
                    fullyDrawnReporter.b();
                }
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b() {
        synchronized (this.f1250c) {
            try {
                this.f1253f = true;
                for (Function0 function0 : this.f1254g) {
                    function0.invoke();
                }
                this.f1254g.clear();
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean c() {
        boolean z10;
        synchronized (this.f1250c) {
            z10 = this.f1253f;
        }
        return z10;
    }
}
