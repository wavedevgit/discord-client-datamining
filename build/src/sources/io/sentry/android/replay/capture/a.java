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
    private final k7 f29318b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f29319c;

    /* renamed from: d  reason: collision with root package name */
    private final p f29320d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f29321e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f29322f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f29323g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f29324h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f29325i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f29326j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f29327k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f29328l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f29329m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f29330n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f29331o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f29332p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f29333q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f29334r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f29316t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0384a f29315s = new C0384a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f29317u = 8;

    /* renamed from: io.sentry.android.replay.capture.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0384a {
        public /* synthetic */ C0384a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0384a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f29335a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f29335a;
            this.f29335a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f29318b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29337a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29338b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29339c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29340d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29341e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0385a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29342d;

            public RunnableC0385a(Function0 function0) {
                this.f29342d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29342d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29343d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29344e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29345i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29346o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29347p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29343d = str;
                this.f29344e = obj;
                this.f29345i = obj2;
                this.f29346o = aVar;
                this.f29347p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1174invoke();
                return Unit.f32464a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1174invoke() {
                Object obj = this.f29345i;
                io.sentry.android.replay.i p10 = this.f29346o.p();
                if (p10 != null) {
                    p10.E0(this.f29347p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29338b = aVar;
            this.f29339c = str;
            this.f29340d = aVar2;
            this.f29341e = str2;
            this.f29337a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29338b.f29318b.getThreadChecker().a()) {
                this.f29338b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0385a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29338b.f29318b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29337a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29337a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29339c, andSet, obj2, this.f29340d, this.f29341e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29348a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29349b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29350c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29351d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29352e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0386a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29353d;

            public RunnableC0386a(Function0 function0) {
                this.f29353d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29353d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29354d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29355e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29356i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29357o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29358p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29354d = str;
                this.f29355e = obj;
                this.f29356i = obj2;
                this.f29357o = aVar;
                this.f29358p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1175invoke();
                return Unit.f32464a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1175invoke() {
                Object obj = this.f29356i;
                io.sentry.android.replay.i p10 = this.f29357o.p();
                if (p10 != null) {
                    p10.E0(this.f29358p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29349b = aVar;
            this.f29350c = str;
            this.f29351d = aVar2;
            this.f29352e = str2;
            this.f29348a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29349b.f29318b.getThreadChecker().a()) {
                this.f29349b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0386a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29349b.f29318b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29348a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29348a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29350c, andSet, obj2, this.f29351d, this.f29352e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29359a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29360b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29361c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29362d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29363e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29364d;

            public RunnableC0387a(Function0 function0) {
                this.f29364d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29364d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29365d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29366e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29367i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29368o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29369p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29365d = str;
                this.f29366e = obj;
                this.f29367i = obj2;
                this.f29368o = aVar;
                this.f29369p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f32464a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f29367i;
                io.sentry.android.replay.i p10 = this.f29368o.p();
                if (p10 != null) {
                    p10.E0(this.f29369p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29360b = aVar;
            this.f29361c = str;
            this.f29362d = aVar2;
            this.f29363e = str2;
            this.f29359a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29360b.f29318b.getThreadChecker().a()) {
                this.f29360b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29360b.f29318b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29359a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29359a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29361c, andSet, obj2, this.f29362d, this.f29363e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29370a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29371b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29372c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29373d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29374d;

            public RunnableC0388a(Function0 function0) {
                this.f29374d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29374d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29375d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29376e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29377i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29378o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29375d = str;
                this.f29376e = obj;
                this.f29377i = obj2;
                this.f29378o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f32464a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f29376e;
                s sVar = (s) this.f29377i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f29378o.p();
                if (p10 != null) {
                    p10.E0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f29378o.p();
                if (p11 != null) {
                    p11.E0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f29378o.p();
                if (p12 != null) {
                    p12.E0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f29378o.p();
                if (p13 != null) {
                    p13.E0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f29371b = aVar;
            this.f29372c = str;
            this.f29373d = aVar2;
            this.f29370a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29371b.f29318b.getThreadChecker().a()) {
                this.f29371b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29371b.f29318b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29370a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29370a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29372c, andSet, obj2, this.f29373d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29379a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29380b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29381c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29382d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0389a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29383d;

            public RunnableC0389a(Function0 function0) {
                this.f29383d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29383d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29384d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29385e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29386i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29387o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29384d = str;
                this.f29385e = obj;
                this.f29386i = obj2;
                this.f29387o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f32464a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f29385e;
                Date date = (Date) this.f29386i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f29387o.p();
                if (p10 != null) {
                    p10.E0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f29380b = aVar;
            this.f29381c = str;
            this.f29382d = aVar2;
            this.f29379a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29380b.f29318b.getThreadChecker().a()) {
                this.f29380b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0389a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29380b.f29318b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29379a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29379a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29381c, andSet, obj2, this.f29382d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29388a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29389b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29390c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29391d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29392e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0390a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29393d;

            public RunnableC0390a(Function0 function0) {
                this.f29393d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29393d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29394d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29395e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29396i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29397o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29398p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29394d = str;
                this.f29395e = obj;
                this.f29396i = obj2;
                this.f29397o = aVar;
                this.f29398p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f32464a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f29396i;
                io.sentry.android.replay.i p10 = this.f29397o.p();
                if (p10 != null) {
                    p10.E0(this.f29398p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29389b = aVar;
            this.f29390c = str;
            this.f29391d = aVar2;
            this.f29392e = str2;
            this.f29388a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29389b.f29318b.getThreadChecker().a()) {
                this.f29389b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0390a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29389b.f29318b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29388a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29388a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29390c, andSet, obj2, this.f29391d, this.f29392e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f29318b = options;
        this.f29319c = w0Var;
        this.f29320d = dateProvider;
        this.f29321e = replayExecutor;
        this.f29322f = function1;
        this.f29323g = lr.l.a(new c());
        this.f29324h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f29325i = new AtomicBoolean(false);
        this.f29327k = new g(null, this, "", this);
        this.f29328l = new h(null, this, "segment.timestamp", this);
        this.f29329m = new AtomicLong();
        this.f29330n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f29331o = new d(x.f30413e, this, "replay.id", this, "replay.id");
        this.f29332p = new e(-1, this, "segment.id", this, "segment.id");
        this.f29333q = new f(null, this, "replay.type", this, "replay.type");
        this.f29334r = new ConcurrentLinkedDeque();
    }

    public static /* synthetic */ h.c o(a aVar, long j10, Date date, x xVar, int i10, int i11, int i12, int i13, int i14, l7.b bVar, io.sentry.android.replay.i iVar, String str, List list, Deque deque, int i15, Object obj) {
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
                iVar2 = aVar.f29326j;
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
                deque2 = aVar.f29334r;
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
            return aVar2.n(j11, date2, xVar2, i16, i17, i18, i19, i20, bVar2, iVar2, str2, list2, deque2);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: createSegmentInternal");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ScheduledExecutorService r() {
        return (ScheduledExecutorService) this.f29323g.getValue();
    }

    public final void A(s sVar) {
        this.f29327k.setValue(this, f29316t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f29333q.setValue(this, f29316t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f29330n.setValue(this, f29316t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f29331o.getValue(this, f29316t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f29332p.setValue(this, f29316t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f29332p.getValue(this, f29316t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f29322f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f29318b, replayId);
        }
        this.f29326j = iVar;
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
        this.f29329m.set(this.f29320d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i() {
        j(io.sentry.k.d());
    }

    @Override // io.sentry.android.replay.capture.h
    public void j(Date date) {
        this.f29328l.setValue(this, f29316t[1], date);
    }

    @Override // io.sentry.android.replay.capture.h
    public void m(s recorderConfig) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        A(recorderConfig);
    }

    protected final h.c n(long j10, Date currentSegmentTimestamp, x replayId, int i10, int i11, int i12, int i13, int i14, l7.b replayType, io.sentry.android.replay.i iVar, String str, List list, Deque events) {
        Intrinsics.checkNotNullParameter(currentSegmentTimestamp, "currentSegmentTimestamp");
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        return io.sentry.android.replay.capture.h.f29424a.c(this.f29319c, this.f29318b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
    }

    @Override // io.sentry.android.replay.capture.h
    public void onTouchEvent(MotionEvent event) {
        List a10;
        Intrinsics.checkNotNullParameter(event, "event");
        s s10 = s();
        if (s10 != null && (a10 = this.f29324h.a(event, s10)) != null) {
            CollectionsKt.B(this.f29334r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f29326j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f29334r;
    }

    public final s s() {
        return (s) this.f29327k.getValue(this, f29316t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f29326j;
        if (iVar != null) {
            iVar.close();
        }
        this.f29329m.set(0L);
        j(null);
        x EMPTY_ID = x.f30413e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f29321e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f29329m;
    }

    public l7.b v() {
        return (l7.b) this.f29333q.getValue(this, f29316t[5]);
    }

    protected final String w() {
        return (String) this.f29330n.getValue(this, f29316t[2]);
    }

    public Date x() {
        return (Date) this.f29328l.getValue(this, f29316t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f29325i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f29331o.setValue(this, f29316t[3], xVar);
    }
}
