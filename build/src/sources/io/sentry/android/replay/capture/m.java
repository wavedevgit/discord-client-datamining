package io.sentry.android.replay.capture;

import android.graphics.Bitmap;
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
import io.sentry.w0;
import java.io.File;
import java.util.Date;
import java.util.concurrent.ScheduledExecutorService;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends io.sentry.android.replay.capture.a {

    /* renamed from: y  reason: collision with root package name */
    public static final a f29499y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    public static final int f29500z = 8;

    /* renamed from: v  reason: collision with root package name */
    private final k7 f29501v;

    /* renamed from: w  reason: collision with root package name */
    private final w0 f29502w;

    /* renamed from: x  reason: collision with root package name */
    private final p f29503x;

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
        b() {
            super(1);
        }

        public final void a(h.c segment) {
            Intrinsics.checkNotNullParameter(segment, "segment");
            if (segment instanceof h.c.a) {
                h.c.a aVar = (h.c.a) segment;
                h.c.a.b(aVar, m.this.f29502w, null, 2, null);
                m mVar = m.this;
                mVar.c(mVar.d() + 1);
                m.this.j(aVar.c().i0());
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((h.c) obj);
            return Unit.f33282a;
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
                h.c.a.b((h.c.a) segment, m.this.f29502w, null, 2, null);
                m mVar = m.this;
                mVar.c(mVar.d() + 1);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((h.c) obj);
            return Unit.f33282a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ File f29507e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(File file) {
            super(1);
            this.f29507e = file;
        }

        public final void a(h.c segment) {
            Intrinsics.checkNotNullParameter(segment, "segment");
            if (segment instanceof h.c.a) {
                h.c.a.b((h.c.a) segment, m.this.f29502w, null, 2, null);
            }
            m.this.c(-1);
            io.sentry.util.i.a(this.f29507e);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((h.c) obj);
            return Unit.f33282a;
        }
    }

    public /* synthetic */ m(k7 k7Var, w0 w0Var, p pVar, ScheduledExecutorService scheduledExecutorService, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(k7Var, w0Var, pVar, scheduledExecutorService, (i10 & 16) != 0 ? null : function1);
    }

    private final void I(String str, final Function1 function1) {
        final s s10 = s();
        if (s10 == null) {
            ILogger logger = this.f29501v.getLogger();
            SentryLevel sentryLevel = SentryLevel.DEBUG;
            logger.c(sentryLevel, "Recorder config is not set, not creating segment for task: " + str, new Object[0]);
            return;
        }
        long a10 = this.f29503x.a();
        final Date x10 = x();
        if (x10 == null) {
            return;
        }
        final long time = a10 - x10.getTime();
        final x a11 = a();
        ScheduledExecutorService t10 = t();
        t10.submit(new io.sentry.android.replay.util.j("SessionCaptureStrategy." + str, new Runnable() { // from class: io.sentry.android.replay.capture.i
            @Override // java.lang.Runnable
            public final void run() {
                m.J(m.this, time, x10, a11, s10, function1);
            }
        }));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void J(m mVar, long j10, Date date, x xVar, s sVar, Function1 function1) {
        function1.invoke(io.sentry.android.replay.capture.a.o(mVar, j10, date, xVar, mVar.d(), sVar.c(), sVar.d(), sVar.b(), sVar.a(), null, null, null, null, null, 7936, null));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void K(m mVar, Function2 function2, long j10, s sVar) {
        io.sentry.android.replay.i p10 = mVar.p();
        if (p10 != null) {
            function2.invoke(p10, Long.valueOf(j10));
        }
        Date x10 = mVar.x();
        if (x10 == null) {
            mVar.f29501v.getLogger().c(SentryLevel.DEBUG, "Segment timestamp is not set, not recording frame", new Object[0]);
        } else if (mVar.y().get()) {
            mVar.f29501v.getLogger().c(SentryLevel.DEBUG, "Not capturing segment, because the app is terminating, will be captured on next launch", new Object[0]);
        } else if (sVar == null) {
            mVar.f29501v.getLogger().c(SentryLevel.DEBUG, "Recorder config is not set, not capturing a segment", new Object[0]);
        } else {
            long a10 = mVar.f29503x.a();
            if (a10 - x10.getTime() >= mVar.f29501v.getSessionReplay().r()) {
                h.c o10 = io.sentry.android.replay.capture.a.o(mVar, mVar.f29501v.getSessionReplay().r(), x10, mVar.a(), mVar.d(), sVar.c(), sVar.d(), sVar.b(), sVar.a(), null, null, null, null, null, 7936, null);
                if (o10 instanceof h.c.a) {
                    h.c.a aVar = (h.c.a) o10;
                    h.c.a.b(aVar, mVar.f29502w, null, 2, null);
                    mVar.c(mVar.d() + 1);
                    mVar.j(aVar.c().i0());
                }
            }
            if (a10 - mVar.u().get() >= mVar.f29501v.getSessionReplay().p()) {
                mVar.f29501v.getReplayController().stop();
                mVar.f29501v.getLogger().c(SentryLevel.INFO, "Session replay deadline exceeded (1h), stopping recording", new Object[0]);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void L(m mVar, IScope it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.o(mVar.a());
        String h10 = it.h();
        String str = null;
        if (h10 != null) {
            str = StringsKt.Z0(h10, '.', null, 2, null);
        }
        mVar.C(str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void M(IScope it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.o(x.f30470e);
    }

    @Override // io.sentry.android.replay.capture.a, io.sentry.android.replay.capture.h
    public void b() {
        I("pause", new c());
        super.b();
    }

    @Override // io.sentry.android.replay.capture.h
    public void e(boolean z10, Function1 onSegmentSent) {
        Intrinsics.checkNotNullParameter(onSegmentSent, "onSegmentSent");
        if (this.f29501v.getSessionReplay().u()) {
            this.f29501v.getLogger().c(SentryLevel.DEBUG, "Replay is already running in 'session' mode, not capturing for event", new Object[0]);
        }
        y().set(z10);
    }

    @Override // io.sentry.android.replay.capture.h
    public void f(Bitmap bitmap, final Function2 store) {
        Intrinsics.checkNotNullParameter(store, "store");
        final s s10 = s();
        final long a10 = this.f29503x.a();
        t().submit(new io.sentry.android.replay.util.j("SessionCaptureStrategy.add_frame", new Runnable() { // from class: io.sentry.android.replay.capture.l
            @Override // java.lang.Runnable
            public final void run() {
                m.K(m.this, store, a10, s10);
            }
        }));
    }

    @Override // io.sentry.android.replay.capture.h
    public h g() {
        return this;
    }

    @Override // io.sentry.android.replay.capture.a, io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        super.h(i10, replayId, bVar);
        w0 w0Var = this.f29502w;
        if (w0Var != null) {
            w0Var.o(new b4() { // from class: io.sentry.android.replay.capture.j
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    m.L(m.this, iScope);
                }
            });
        }
    }

    @Override // io.sentry.android.replay.capture.a, io.sentry.android.replay.capture.h
    public void m(s recorderConfig) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        I("onConfigurationChanged", new b());
        super.m(recorderConfig);
    }

    @Override // io.sentry.android.replay.capture.a, io.sentry.android.replay.capture.h
    public void stop() {
        File file;
        io.sentry.android.replay.i p10 = p();
        if (p10 != null) {
            file = p10.D0();
        } else {
            file = null;
        }
        I("stop", new d(file));
        w0 w0Var = this.f29502w;
        if (w0Var != null) {
            w0Var.o(new b4() { // from class: io.sentry.android.replay.capture.k
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    m.M(iScope);
                }
            });
        }
        super.stop();
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService executor, Function1 function1) {
        super(options, w0Var, dateProvider, executor, function1);
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f29501v = options;
        this.f29502w = w0Var;
        this.f29503x = dateProvider;
    }
}
