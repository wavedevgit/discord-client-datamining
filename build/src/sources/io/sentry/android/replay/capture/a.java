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
    private final k7 f28376b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f28377c;

    /* renamed from: d  reason: collision with root package name */
    private final p f28378d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f28379e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f28380f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f28381g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f28382h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f28383i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f28384j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f28385k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f28386l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f28387m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f28388n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f28389o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f28390p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f28391q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f28392r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f28374t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0391a f28373s = new C0391a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f28375u = 8;

    /* renamed from: io.sentry.android.replay.capture.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0391a {
        public /* synthetic */ C0391a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0391a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f28393a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f28393a;
            this.f28393a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f28376b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28395a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28396b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28397c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28398d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28399e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0392a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28400d;

            public RunnableC0392a(Function0 function0) {
                this.f28400d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28400d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28401d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28402e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28403i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28404o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28405p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28401d = str;
                this.f28402e = obj;
                this.f28403i = obj2;
                this.f28404o = aVar;
                this.f28405p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f28403i;
                io.sentry.android.replay.i p10 = this.f28404o.p();
                if (p10 != null) {
                    p10.E0(this.f28405p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28396b = aVar;
            this.f28397c = str;
            this.f28398d = aVar2;
            this.f28399e = str2;
            this.f28395a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28396b.f28376b.getThreadChecker().a()) {
                this.f28396b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0392a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28396b.f28376b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28395a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28395a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28397c, andSet, obj2, this.f28398d, this.f28399e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28406a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28407b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28408c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28409d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28410e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0393a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28411d;

            public RunnableC0393a(Function0 function0) {
                this.f28411d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28411d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28412d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28413e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28414i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28415o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28416p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28412d = str;
                this.f28413e = obj;
                this.f28414i = obj2;
                this.f28415o = aVar;
                this.f28416p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f28414i;
                io.sentry.android.replay.i p10 = this.f28415o.p();
                if (p10 != null) {
                    p10.E0(this.f28416p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28407b = aVar;
            this.f28408c = str;
            this.f28409d = aVar2;
            this.f28410e = str2;
            this.f28406a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28407b.f28376b.getThreadChecker().a()) {
                this.f28407b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0393a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28407b.f28376b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28406a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28406a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28408c, andSet, obj2, this.f28409d, this.f28410e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28417a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28418b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28419c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28420d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28421e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0394a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28422d;

            public RunnableC0394a(Function0 function0) {
                this.f28422d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28422d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28423d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28424e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28425i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28426o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28427p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28423d = str;
                this.f28424e = obj;
                this.f28425i = obj2;
                this.f28426o = aVar;
                this.f28427p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f28425i;
                io.sentry.android.replay.i p10 = this.f28426o.p();
                if (p10 != null) {
                    p10.E0(this.f28427p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28418b = aVar;
            this.f28419c = str;
            this.f28420d = aVar2;
            this.f28421e = str2;
            this.f28417a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28418b.f28376b.getThreadChecker().a()) {
                this.f28418b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0394a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28418b.f28376b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28417a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28417a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28419c, andSet, obj2, this.f28420d, this.f28421e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28428a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28429b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28430c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28431d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0395a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28432d;

            public RunnableC0395a(Function0 function0) {
                this.f28432d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28432d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28433d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28434e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28435i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28436o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f28433d = str;
                this.f28434e = obj;
                this.f28435i = obj2;
                this.f28436o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f28434e;
                s sVar = (s) this.f28435i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f28436o.p();
                if (p10 != null) {
                    p10.E0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f28436o.p();
                if (p11 != null) {
                    p11.E0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f28436o.p();
                if (p12 != null) {
                    p12.E0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f28436o.p();
                if (p13 != null) {
                    p13.E0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f28429b = aVar;
            this.f28430c = str;
            this.f28431d = aVar2;
            this.f28428a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28429b.f28376b.getThreadChecker().a()) {
                this.f28429b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0395a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28429b.f28376b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28428a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28428a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28430c, andSet, obj2, this.f28431d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28437a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28438b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28439c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28440d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0396a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28441d;

            public RunnableC0396a(Function0 function0) {
                this.f28441d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28441d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28442d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28443e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28444i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28445o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f28442d = str;
                this.f28443e = obj;
                this.f28444i = obj2;
                this.f28445o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1180invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1180invoke() {
                Object obj = this.f28443e;
                Date date = (Date) this.f28444i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f28445o.p();
                if (p10 != null) {
                    p10.E0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f28438b = aVar;
            this.f28439c = str;
            this.f28440d = aVar2;
            this.f28437a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28438b.f28376b.getThreadChecker().a()) {
                this.f28438b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0396a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28438b.f28376b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28437a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28437a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28439c, andSet, obj2, this.f28440d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28446a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28447b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28448c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28449d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28450e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0397a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28451d;

            public RunnableC0397a(Function0 function0) {
                this.f28451d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28451d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28452d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28453e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28454i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28455o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28456p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28452d = str;
                this.f28453e = obj;
                this.f28454i = obj2;
                this.f28455o = aVar;
                this.f28456p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1181invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1181invoke() {
                Object obj = this.f28454i;
                io.sentry.android.replay.i p10 = this.f28455o.p();
                if (p10 != null) {
                    p10.E0(this.f28456p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28447b = aVar;
            this.f28448c = str;
            this.f28449d = aVar2;
            this.f28450e = str2;
            this.f28446a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28447b.f28376b.getThreadChecker().a()) {
                this.f28447b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0397a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28447b.f28376b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28446a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28446a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28448c, andSet, obj2, this.f28449d, this.f28450e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f28376b = options;
        this.f28377c = w0Var;
        this.f28378d = dateProvider;
        this.f28379e = replayExecutor;
        this.f28380f = function1;
        this.f28381g = or.l.a(new c());
        this.f28382h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f28383i = new AtomicBoolean(false);
        this.f28385k = new g(null, this, "", this);
        this.f28386l = new h(null, this, "segment.timestamp", this);
        this.f28387m = new AtomicLong();
        this.f28388n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f28389o = new d(x.f29471e, this, "replay.id", this, "replay.id");
        this.f28390p = new e(-1, this, "segment.id", this, "segment.id");
        this.f28391q = new f(null, this, "replay.type", this, "replay.type");
        this.f28392r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f28384j;
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
                deque2 = aVar.f28392r;
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
        return (ScheduledExecutorService) this.f28381g.getValue();
    }

    public final void A(s sVar) {
        this.f28385k.setValue(this, f28374t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f28391q.setValue(this, f28374t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f28388n.setValue(this, f28374t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f28389o.getValue(this, f28374t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f28390p.setValue(this, f28374t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f28390p.getValue(this, f28374t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f28380f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f28376b, replayId);
        }
        this.f28384j = iVar;
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
        this.f28387m.set(this.f28378d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i() {
        j(io.sentry.k.d());
    }

    @Override // io.sentry.android.replay.capture.h
    public void j(Date date) {
        this.f28386l.setValue(this, f28374t[1], date);
    }

    protected final h.c m(long j10, Date currentSegmentTimestamp, x replayId, int i10, int i11, int i12, int i13, int i14, l7.b replayType, io.sentry.android.replay.i iVar, String str, List list, Deque events) {
        Intrinsics.checkNotNullParameter(currentSegmentTimestamp, "currentSegmentTimestamp");
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        return io.sentry.android.replay.capture.h.f28482a.c(this.f28377c, this.f28376b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
    }

    @Override // io.sentry.android.replay.capture.h
    public void n(s recorderConfig) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        A(recorderConfig);
    }

    @Override // io.sentry.android.replay.capture.h
    public void onTouchEvent(MotionEvent event) {
        List a10;
        Intrinsics.checkNotNullParameter(event, "event");
        s s10 = s();
        if (s10 != null && (a10 = this.f28382h.a(event, s10)) != null) {
            CollectionsKt.B(this.f28392r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f28384j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f28392r;
    }

    public final s s() {
        return (s) this.f28385k.getValue(this, f28374t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f28384j;
        if (iVar != null) {
            iVar.close();
        }
        this.f28387m.set(0L);
        j(null);
        x EMPTY_ID = x.f29471e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f28379e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f28387m;
    }

    public l7.b v() {
        return (l7.b) this.f28391q.getValue(this, f28374t[5]);
    }

    protected final String w() {
        return (String) this.f28388n.getValue(this, f28374t[2]);
    }

    public Date x() {
        return (Date) this.f28386l.getValue(this, f28374t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f28383i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f28389o.setValue(this, f28374t[3], xVar);
    }
}
