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
    private final Executor f807a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f808b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f809c;

    /* renamed from: d  reason: collision with root package name */
    private int f810d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f811e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f812f;

    /* renamed from: g  reason: collision with root package name */
    private final List f813g;

    /* renamed from: h  reason: collision with root package name */
    private final Runnable f814h;

    public FullyDrawnReporter(Executor executor, Function0 reportFullyDrawn) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        Intrinsics.checkNotNullParameter(reportFullyDrawn, "reportFullyDrawn");
        this.f807a = executor;
        this.f808b = reportFullyDrawn;
        this.f809c = new Object();
        this.f813g = new ArrayList();
        this.f814h = new Runnable() { // from class: androidx.activity.w
            @Override // java.lang.Runnable
            public final void run() {
                FullyDrawnReporter.d(FullyDrawnReporter.this);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(FullyDrawnReporter fullyDrawnReporter) {
        synchronized (fullyDrawnReporter.f809c) {
            try {
                fullyDrawnReporter.f811e = false;
                if (fullyDrawnReporter.f810d == 0 && !fullyDrawnReporter.f812f) {
                    fullyDrawnReporter.f808b.invoke();
                    fullyDrawnReporter.b();
                }
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void b() {
        synchronized (this.f809c) {
            try {
                this.f812f = true;
                for (Function0 function0 : this.f813g) {
                    function0.invoke();
                }
                this.f813g.clear();
                Unit unit = Unit.f32464a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final boolean c() {
        boolean z10;
        synchronized (this.f809c) {
            z10 = this.f812f;
        }
        return z10;
    }
}
