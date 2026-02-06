package io.sentry.android.replay.capture;

import android.graphics.Bitmap;
import android.view.MotionEvent;
import io.sentry.ILogger;
import io.sentry.IScope;
import io.sentry.SentryLevel;
import io.sentry.android.replay.capture.h;
import io.sentry.android.replay.s;
import io.sentry.b4;
import io.sentry.k7;
import io.sentry.l7;
import io.sentry.protocol.x;
import io.sentry.transport.p;
import io.sentry.util.b0;
import io.sentry.w0;
import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ScheduledExecutorService;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends io.sentry.android.replay.capture.a {
    public static final a A = new a(null);
    public static final int B = 8;

    /* renamed from: v  reason: collision with root package name */
    private final k7 f27613v;

    /* renamed from: w  reason: collision with root package name */
    private final w0 f27614w;

    /* renamed from: x  reason: collision with root package name */
    private final p f27615x;

    /* renamed from: y  reason: collision with root package name */
    private final b0 f27616y;

    /* renamed from: z  reason: collision with root package name */
    private final List f27617z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f27619e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Function1 function1) {
            super(1);
            this.f27619e = function1;
        }

        public final void a(h.c segment) {
            Intrinsics.checkNotNullParameter(segment, "segment");
            f fVar = f.this;
            fVar.L(fVar.f27617z);
            if (segment instanceof h.c.a) {
                h.c.a aVar = (h.c.a) segment;
                h.c.a.b(aVar, f.this.f27614w, null, 2, null);
                Function1 function1 = this.f27619e;
                Date i02 = aVar.c().i0();
                Intrinsics.checkNotNullExpressionValue(i02, "getTimestamp(...)");
                function1.invoke(i02);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((h.c) obj);
            return Unit.f32008a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function1 {
        c() {
            super(1);
        }

        public final void a(h.c segment) {
            Intrinsics.checkNotNullParameter(segment, "segment");
            if (segment instanceof h.c.a) {
                f.this.f27617z.add(segment);
                f fVar = f.this;
                fVar.c(fVar.d() + 1);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((h.c) obj);
            return Unit.f32008a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {
        d() {
            super(1);
        }

        public final void a(h.c segment) {
            Intrinsics.checkNotNullParameter(segment, "segment");
            if (segment instanceof h.c.a) {
                f.this.f27617z.add(segment);
                f fVar = f.this;
                fVar.c(fVar.d() + 1);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((h.c) obj);
            return Unit.f32008a;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ long f27622d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ f f27623e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f27624i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(long j10, f fVar, Ref.BooleanRef booleanRef) {
            super(1);
            this.f27622d = j10;
            this.f27623e = fVar;
            this.f27624i = booleanRef;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(h.c.a it) {
            Intrinsics.checkNotNullParameter(it, "it");
            if (it.c().i0().getTime() < this.f27622d) {
                f fVar = this.f27623e;
                fVar.c(fVar.d() - 1);
                this.f27623e.P(it.c().j0());
                this.f27624i.element = true;
                return Boolean.TRUE;
            }
            return Boolean.FALSE;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(k7 options, w0 w0Var, p dateProvider, b0 random, ScheduledExecutorService executor, Function1 function1) {
        super(options, w0Var, dateProvider, executor, function1);
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(random, "random");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f27613v = options;
        this.f27614w = w0Var;
        this.f27615x = dateProvider;
        this.f27616y = random;
        this.f27617z = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void L(List list) {
        h.c.a aVar = (h.c.a) CollectionsKt.K(list);
        while (aVar != null) {
            h.c.a.b(aVar, this.f27614w, null, 2, null);
            aVar = (h.c.a) CollectionsKt.K(list);
            Thread.sleep(100L);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void M(f fVar, IScope it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.p(fVar.a());
    }

    private final void N(String str, final Function1 function1) {
        final Date e10;
        Long I;
        final s s10 = s();
        if (s10 == null) {
            ILogger logger = this.f27613v.getLogger();
            SentryLevel sentryLevel = SentryLevel.DEBUG;
            logger.c(sentryLevel, "Recorder config is not set, not creating segment for task: " + str, new Object[0]);
            return;
        }
        long c10 = this.f27613v.getSessionReplay().c();
        long a10 = this.f27615x.a();
        io.sentry.android.replay.i p10 = p();
        if (p10 == null || (I = p10.I()) == null || (e10 = io.sentry.k.e(I.longValue())) == null) {
            e10 = io.sentry.k.e(a10 - c10);
        }
        Intrinsics.checkNotNull(e10);
        final long time = a10 - e10.getTime();
        final x a11 = a();
        ScheduledExecutorService t10 = t();
        t10.submit(new io.sentry.android.replay.util.j("BufferCaptureStrategy." + str, new Runnable() { // from class: io.sentry.android.replay.capture.b
            @Override // java.lang.Runnable
            public final void run() {
                f.O(f.this, time, e10, a11, s10, function1);
            }
        }));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void O(f fVar, long j10, Date date, x xVar, s sVar, Function1 function1) {
        function1.invoke(io.sentry.android.replay.capture.a.n(fVar, j10, date, xVar, fVar.d(), sVar.c(), sVar.d(), sVar.b(), sVar.a(), null, null, null, null, null, 7936, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void P(File file) {
        if (file != null) {
            try {
                if (!file.delete()) {
                    this.f27613v.getLogger().c(SentryLevel.ERROR, "Failed to delete replay segment: %s", file.getAbsolutePath());
                }
            } catch (Throwable th2) {
                this.f27613v.getLogger().a(SentryLevel.ERROR, th2, "Failed to delete replay segment: %s", file.getAbsolutePath());
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Q(f fVar, Function2 function2, long j10) {
        String str;
        io.sentry.android.replay.i p10 = fVar.p();
        if (p10 != null) {
            function2.invoke(p10, Long.valueOf(j10));
        }
        long a10 = fVar.f27615x.a() - fVar.f27613v.getSessionReplay().c();
        io.sentry.android.replay.i p11 = fVar.p();
        if (p11 != null) {
            str = p11.F0(a10);
        } else {
            str = null;
        }
        fVar.C(str);
        fVar.R(fVar.f27617z, a10);
    }

    private final void R(List list, long j10) {
        Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        CollectionsKt.J(list, new e(j10, this, booleanRef));
        if (booleanRef.element) {
            int i10 = 0;
            for (Object obj : list) {
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                ((h.c.a) obj).d(i10);
                i10 = i11;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void S(File file, f fVar) {
        io.sentry.util.i.a(file);
        fVar.c(-1);
    }

    @Override // io.sentry.android.replay.capture.a, io.sentry.android.replay.capture.h
    public void b() {
        N("pause", new d());
        super.b();
    }

    @Override // io.sentry.android.replay.capture.h
    public void e(boolean z10, Function1 onSegmentSent) {
        Intrinsics.checkNotNullParameter(onSegmentSent, "onSegmentSent");
        if (!io.sentry.android.replay.util.k.a(this.f27616y, this.f27613v.getSessionReplay().l())) {
            this.f27613v.getLogger().c(SentryLevel.INFO, "Replay wasn't sampled by onErrorSampleRate, not capturing for event", new Object[0]);
            return;
        }
        w0 w0Var = this.f27614w;
        if (w0Var != null) {
            w0Var.o(new b4() { // from class: io.sentry.android.replay.capture.c
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    f.M(f.this, iScope);
                }
            });
        }
        if (z10) {
            y().set(true);
            this.f27613v.getLogger().c(SentryLevel.DEBUG, "Not capturing replay for crashed event, will be captured on next launch", new Object[0]);
            return;
        }
        N("capture_replay", new b(onSegmentSent));
    }

    @Override // io.sentry.android.replay.capture.h
    public void f(Bitmap bitmap, final Function2 store) {
        Intrinsics.checkNotNullParameter(store, "store");
        final long a10 = this.f27615x.a();
        t().submit(new io.sentry.android.replay.util.j("BufferCaptureStrategy.add_frame", new Runnable() { // from class: io.sentry.android.replay.capture.e
            @Override // java.lang.Runnable
            public final void run() {
                f.Q(f.this, store, a10);
            }
        }));
    }

    @Override // io.sentry.android.replay.capture.h
    public h g() {
        if (y().get()) {
            this.f27613v.getLogger().c(SentryLevel.DEBUG, "Not converting to session mode, because the process is about to terminate", new Object[0]);
            return this;
        }
        m mVar = new m(this.f27613v, this.f27614w, this.f27615x, t(), null, 16, null);
        mVar.A(s());
        mVar.i(d(), a(), l7.b.BUFFER);
        return mVar;
    }

    @Override // io.sentry.android.replay.capture.a, io.sentry.android.replay.capture.h
    public void o(s recorderConfig) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        N("configuration_changed", new c());
        super.o(recorderConfig);
    }

    @Override // io.sentry.android.replay.capture.a, io.sentry.android.replay.capture.h
    public void onTouchEvent(MotionEvent event) {
        Intrinsics.checkNotNullParameter(event, "event");
        super.onTouchEvent(event);
        h.a.h(h.f27626a, q(), this.f27615x.a() - this.f27613v.getSessionReplay().c(), null, 4, null);
    }

    @Override // io.sentry.android.replay.capture.a, io.sentry.android.replay.capture.h
    public void stop() {
        final File file;
        io.sentry.android.replay.i p10 = p();
        if (p10 != null) {
            file = p10.Y();
        } else {
            file = null;
        }
        t().submit(new io.sentry.android.replay.util.j("BufferCaptureStrategy.stop", new Runnable() { // from class: io.sentry.android.replay.capture.d
            @Override // java.lang.Runnable
            public final void run() {
                f.S(file, this);
            }
        }));
        super.stop();
    }
}
