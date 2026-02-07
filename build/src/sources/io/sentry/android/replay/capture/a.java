package io.sentry.android.replay.capture;

import android.view.MotionEvent;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import io.sentry.SentryLevel;
import io.sentry.android.replay.capture.h;
import io.sentry.android.replay.s;
import io.sentry.k7;
import io.sentry.l7;
import io.sentry.protocol.x;
import io.sentry.transport.p;
import io.sentry.w0;
import java.util.Date;
import java.util.Deque;
import java.util.List;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicReference;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.properties.ReadWriteProperty;
import kotlin.reflect.KProperty;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements io.sentry.android.replay.capture.h {

    /* renamed from: b  reason: collision with root package name */
    private final k7 f27568b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f27569c;

    /* renamed from: d  reason: collision with root package name */
    private final p f27570d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f27571e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f27572f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f27573g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f27574h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f27575i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f27576j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f27577k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f27578l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f27579m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f27580n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f27581o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f27582p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f27583q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f27584r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f27566t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0385a f27565s = new C0385a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f27567u = 8;

    /* renamed from: io.sentry.android.replay.capture.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0385a {
        public /* synthetic */ C0385a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0385a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f27585a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f27585a;
            this.f27585a = i10 + 1;
            sb2.append(i10);
            Thread thread = new Thread(r10, sb2.toString());
            thread.setDaemon(true);
            return thread;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function0 {
        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final io.sentry.android.replay.util.i invoke() {
            ScheduledExecutorService newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor(new b());
            Intrinsics.checkNotNull(newSingleThreadScheduledExecutor);
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f27568b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27587a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27588b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27589c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27590d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27591e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0386a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27592d;

            public RunnableC0386a(Function0 function0) {
                this.f27592d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27592d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27593d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27594e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27595i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27596o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27597p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27593d = str;
                this.f27594e = obj;
                this.f27595i = obj2;
                this.f27596o = aVar;
                this.f27597p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f27595i;
                io.sentry.android.replay.i p10 = this.f27596o.p();
                if (p10 != null) {
                    p10.E0(this.f27597p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27588b = aVar;
            this.f27589c = str;
            this.f27590d = aVar2;
            this.f27591e = str2;
            this.f27587a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27588b.f27568b.getThreadChecker().a()) {
                this.f27588b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0386a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27588b.f27568b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27587a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27587a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27589c, andSet, obj2, this.f27590d, this.f27591e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27598a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27599b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27600c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27601d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27602e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27603d;

            public RunnableC0387a(Function0 function0) {
                this.f27603d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27603d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27604d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27605e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27606i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27607o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27608p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27604d = str;
                this.f27605e = obj;
                this.f27606i = obj2;
                this.f27607o = aVar;
                this.f27608p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f27606i;
                io.sentry.android.replay.i p10 = this.f27607o.p();
                if (p10 != null) {
                    p10.E0(this.f27608p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27599b = aVar;
            this.f27600c = str;
            this.f27601d = aVar2;
            this.f27602e = str2;
            this.f27598a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27599b.f27568b.getThreadChecker().a()) {
                this.f27599b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27599b.f27568b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27598a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27598a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27600c, andSet, obj2, this.f27601d, this.f27602e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27609a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27610b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27611c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27612d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27613e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27614d;

            public RunnableC0388a(Function0 function0) {
                this.f27614d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27614d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27615d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27616e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27617i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27618o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27619p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27615d = str;
                this.f27616e = obj;
                this.f27617i = obj2;
                this.f27618o = aVar;
                this.f27619p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f27617i;
                io.sentry.android.replay.i p10 = this.f27618o.p();
                if (p10 != null) {
                    p10.E0(this.f27619p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27610b = aVar;
            this.f27611c = str;
            this.f27612d = aVar2;
            this.f27613e = str2;
            this.f27609a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27610b.f27568b.getThreadChecker().a()) {
                this.f27610b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27610b.f27568b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27609a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27609a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27611c, andSet, obj2, this.f27612d, this.f27613e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27620a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27621b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27622c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27623d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0389a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27624d;

            public RunnableC0389a(Function0 function0) {
                this.f27624d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27624d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27625d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27626e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27627i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27628o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f27625d = str;
                this.f27626e = obj;
                this.f27627i = obj2;
                this.f27628o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f27626e;
                s sVar = (s) this.f27627i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f27628o.p();
                if (p10 != null) {
                    p10.E0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f27628o.p();
                if (p11 != null) {
                    p11.E0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f27628o.p();
                if (p12 != null) {
                    p12.E0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f27628o.p();
                if (p13 != null) {
                    p13.E0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f27621b = aVar;
            this.f27622c = str;
            this.f27623d = aVar2;
            this.f27620a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27621b.f27568b.getThreadChecker().a()) {
                this.f27621b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0389a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27621b.f27568b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27620a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27620a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27622c, andSet, obj2, this.f27623d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27629a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27630b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27631c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27632d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0390a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27633d;

            public RunnableC0390a(Function0 function0) {
                this.f27633d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27633d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27634d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27635e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27636i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27637o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f27634d = str;
                this.f27635e = obj;
                this.f27636i = obj2;
                this.f27637o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1180invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1180invoke() {
                Object obj = this.f27635e;
                Date date = (Date) this.f27636i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f27637o.p();
                if (p10 != null) {
                    p10.E0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f27630b = aVar;
            this.f27631c = str;
            this.f27632d = aVar2;
            this.f27629a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27630b.f27568b.getThreadChecker().a()) {
                this.f27630b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0390a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27630b.f27568b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27629a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27629a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27631c, andSet, obj2, this.f27632d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27638a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27639b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27640c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27641d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27642e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0391a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27643d;

            public RunnableC0391a(Function0 function0) {
                this.f27643d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27643d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27644d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27645e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27646i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27647o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27648p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27644d = str;
                this.f27645e = obj;
                this.f27646i = obj2;
                this.f27647o = aVar;
                this.f27648p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1181invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1181invoke() {
                Object obj = this.f27646i;
                io.sentry.android.replay.i p10 = this.f27647o.p();
                if (p10 != null) {
                    p10.E0(this.f27648p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27639b = aVar;
            this.f27640c = str;
            this.f27641d = aVar2;
            this.f27642e = str2;
            this.f27638a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27639b.f27568b.getThreadChecker().a()) {
                this.f27639b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0391a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27639b.f27568b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27638a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27638a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27640c, andSet, obj2, this.f27641d, this.f27642e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f27568b = options;
        this.f27569c = w0Var;
        this.f27570d = dateProvider;
        this.f27571e = replayExecutor;
        this.f27572f = function1;
        this.f27573g = qr.l.a(new c());
        this.f27574h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f27575i = new AtomicBoolean(false);
        this.f27577k = new g(null, this, "", this);
        this.f27578l = new h(null, this, "segment.timestamp", this);
        this.f27579m = new AtomicLong();
        this.f27580n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f27581o = new d(x.f28663e, this, "replay.id", this, "replay.id");
        this.f27582p = new e(-1, this, "segment.id", this, "segment.id");
        this.f27583q = new f(null, this, "replay.type", this, "replay.type");
        this.f27584r = new ConcurrentLinkedDeque();
    }

    public static /* synthetic */ h.c n(a aVar, long j10, Date date, x xVar, int i10, int i11, int i12, int i13, int i14, l7.b bVar, io.sentry.android.replay.i iVar, String str, List list, Deque deque, int i15, Object obj) {
        l7.b bVar2;
        io.sentry.android.replay.i iVar2;
        String str2;
        List list2;
        Deque deque2;
        a aVar2;
        long j11;
        Date date2;
        x xVar2;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        if (obj == null) {
            if ((i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                bVar2 = aVar.v();
            } else {
                bVar2 = bVar;
            }
            if ((i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                iVar2 = aVar.f27576j;
            } else {
                iVar2 = iVar;
            }
            if ((i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                str2 = aVar.w();
            } else {
                str2 = str;
            }
            if ((i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
                list2 = null;
            } else {
                list2 = list;
            }
            if ((i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                deque2 = aVar.f27584r;
                aVar2 = aVar;
                date2 = date;
                xVar2 = xVar;
                i16 = i10;
                i17 = i11;
                i18 = i12;
                i19 = i13;
                i20 = i14;
                j11 = j10;
            } else {
                deque2 = deque;
                aVar2 = aVar;
                j11 = j10;
                date2 = date;
                xVar2 = xVar;
                i16 = i10;
                i17 = i11;
                i18 = i12;
                i19 = i13;
                i20 = i14;
            }
            return aVar2.m(j11, date2, xVar2, i16, i17, i18, i19, i20, bVar2, iVar2, str2, list2, deque2);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: createSegmentInternal");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ScheduledExecutorService r() {
        return (ScheduledExecutorService) this.f27573g.getValue();
    }

    public final void A(s sVar) {
        this.f27577k.setValue(this, f27566t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f27583q.setValue(this, f27566t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f27580n.setValue(this, f27566t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f27581o.getValue(this, f27566t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f27582p.setValue(this, f27566t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f27582p.getValue(this, f27566t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h() {
        j(io.sentry.k.d());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f27572f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f27568b, replayId);
        }
        this.f27576j = iVar;
        z(replayId);
        c(i10);
        if (bVar == null) {
            if (this instanceof m) {
                bVar = l7.b.SESSION;
            } else {
                bVar = l7.b.BUFFER;
            }
        }
        B(bVar);
        j(io.sentry.k.d());
        this.f27579m.set(this.f27570d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void j(Date date) {
        this.f27578l.setValue(this, f27566t[1], date);
    }

    protected final h.c m(long j10, Date currentSegmentTimestamp, x replayId, int i10, int i11, int i12, int i13, int i14, l7.b replayType, io.sentry.android.replay.i iVar, String str, List list, Deque events) {
        Intrinsics.checkNotNullParameter(currentSegmentTimestamp, "currentSegmentTimestamp");
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        return io.sentry.android.replay.capture.h.f27674a.c(this.f27569c, this.f27568b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
    }

    @Override // io.sentry.android.replay.capture.h
    public void o(s recorderConfig) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        A(recorderConfig);
    }

    @Override // io.sentry.android.replay.capture.h
    public void onTouchEvent(MotionEvent event) {
        List a10;
        Intrinsics.checkNotNullParameter(event, "event");
        s s10 = s();
        if (s10 != null && (a10 = this.f27574h.a(event, s10)) != null) {
            CollectionsKt.B(this.f27584r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f27576j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f27584r;
    }

    public final s s() {
        return (s) this.f27577k.getValue(this, f27566t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f27576j;
        if (iVar != null) {
            iVar.close();
        }
        this.f27579m.set(0L);
        j(null);
        x EMPTY_ID = x.f28663e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f27571e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f27579m;
    }

    public l7.b v() {
        return (l7.b) this.f27583q.getValue(this, f27566t[5]);
    }

    protected final String w() {
        return (String) this.f27580n.getValue(this, f27566t[2]);
    }

    public Date x() {
        return (Date) this.f27578l.getValue(this, f27566t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f27575i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f27581o.setValue(this, f27566t[3], xVar);
    }
}
