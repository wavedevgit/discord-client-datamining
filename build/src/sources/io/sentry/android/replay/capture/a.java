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
    private final k7 f27520b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f27521c;

    /* renamed from: d  reason: collision with root package name */
    private final p f27522d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f27523e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f27524f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f27525g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f27526h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f27527i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f27528j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f27529k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f27530l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f27531m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f27532n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f27533o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f27534p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f27535q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f27536r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f27518t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0385a f27517s = new C0385a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f27519u = 8;

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
        private int f27537a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f27537a;
            this.f27537a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f27520b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27539a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27540b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27541c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27542d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27543e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0386a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27544d;

            public RunnableC0386a(Function0 function0) {
                this.f27544d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27544d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27545d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27546e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27547i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27548o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27549p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27545d = str;
                this.f27546e = obj;
                this.f27547i = obj2;
                this.f27548o = aVar;
                this.f27549p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f32008a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f27547i;
                io.sentry.android.replay.i p10 = this.f27548o.p();
                if (p10 != null) {
                    p10.E0(this.f27549p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27540b = aVar;
            this.f27541c = str;
            this.f27542d = aVar2;
            this.f27543e = str2;
            this.f27539a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27540b.f27520b.getThreadChecker().a()) {
                this.f27540b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0386a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27540b.f27520b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27539a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27539a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27541c, andSet, obj2, this.f27542d, this.f27543e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27550a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27551b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27552c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27553d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27554e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27555d;

            public RunnableC0387a(Function0 function0) {
                this.f27555d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27555d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27556d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27557e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27558i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27559o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27560p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27556d = str;
                this.f27557e = obj;
                this.f27558i = obj2;
                this.f27559o = aVar;
                this.f27560p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f32008a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f27558i;
                io.sentry.android.replay.i p10 = this.f27559o.p();
                if (p10 != null) {
                    p10.E0(this.f27560p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27551b = aVar;
            this.f27552c = str;
            this.f27553d = aVar2;
            this.f27554e = str2;
            this.f27550a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27551b.f27520b.getThreadChecker().a()) {
                this.f27551b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27551b.f27520b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27550a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27550a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27552c, andSet, obj2, this.f27553d, this.f27554e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27561a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27562b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27563c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27564d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27565e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27566d;

            public RunnableC0388a(Function0 function0) {
                this.f27566d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27566d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27567d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27568e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27569i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27570o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27571p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27567d = str;
                this.f27568e = obj;
                this.f27569i = obj2;
                this.f27570o = aVar;
                this.f27571p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f32008a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f27569i;
                io.sentry.android.replay.i p10 = this.f27570o.p();
                if (p10 != null) {
                    p10.E0(this.f27571p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27562b = aVar;
            this.f27563c = str;
            this.f27564d = aVar2;
            this.f27565e = str2;
            this.f27561a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27562b.f27520b.getThreadChecker().a()) {
                this.f27562b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27562b.f27520b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27561a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27561a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27563c, andSet, obj2, this.f27564d, this.f27565e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27572a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27573b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27574c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27575d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0389a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27576d;

            public RunnableC0389a(Function0 function0) {
                this.f27576d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27576d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27577d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27578e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27579i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27580o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f27577d = str;
                this.f27578e = obj;
                this.f27579i = obj2;
                this.f27580o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f32008a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f27578e;
                s sVar = (s) this.f27579i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f27580o.p();
                if (p10 != null) {
                    p10.E0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f27580o.p();
                if (p11 != null) {
                    p11.E0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f27580o.p();
                if (p12 != null) {
                    p12.E0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f27580o.p();
                if (p13 != null) {
                    p13.E0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f27573b = aVar;
            this.f27574c = str;
            this.f27575d = aVar2;
            this.f27572a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27573b.f27520b.getThreadChecker().a()) {
                this.f27573b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0389a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27573b.f27520b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27572a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27572a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27574c, andSet, obj2, this.f27575d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27581a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27582b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27583c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27584d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0390a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27585d;

            public RunnableC0390a(Function0 function0) {
                this.f27585d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27585d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27586d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27587e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27588i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27589o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f27586d = str;
                this.f27587e = obj;
                this.f27588i = obj2;
                this.f27589o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1180invoke();
                return Unit.f32008a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1180invoke() {
                Object obj = this.f27587e;
                Date date = (Date) this.f27588i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f27589o.p();
                if (p10 != null) {
                    p10.E0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f27582b = aVar;
            this.f27583c = str;
            this.f27584d = aVar2;
            this.f27581a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27582b.f27520b.getThreadChecker().a()) {
                this.f27582b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0390a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27582b.f27520b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27581a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27581a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27583c, andSet, obj2, this.f27584d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27590a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27591b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27592c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27593d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27594e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0391a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27595d;

            public RunnableC0391a(Function0 function0) {
                this.f27595d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27595d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27596d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27597e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27598i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27599o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27600p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27596d = str;
                this.f27597e = obj;
                this.f27598i = obj2;
                this.f27599o = aVar;
                this.f27600p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1181invoke();
                return Unit.f32008a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1181invoke() {
                Object obj = this.f27598i;
                io.sentry.android.replay.i p10 = this.f27599o.p();
                if (p10 != null) {
                    p10.E0(this.f27600p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27591b = aVar;
            this.f27592c = str;
            this.f27593d = aVar2;
            this.f27594e = str2;
            this.f27590a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27591b.f27520b.getThreadChecker().a()) {
                this.f27591b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0391a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27591b.f27520b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27590a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27590a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27592c, andSet, obj2, this.f27593d, this.f27594e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f27520b = options;
        this.f27521c = w0Var;
        this.f27522d = dateProvider;
        this.f27523e = replayExecutor;
        this.f27524f = function1;
        this.f27525g = qr.l.a(new c());
        this.f27526h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f27527i = new AtomicBoolean(false);
        this.f27529k = new g(null, this, "", this);
        this.f27530l = new h(null, this, "segment.timestamp", this);
        this.f27531m = new AtomicLong();
        this.f27532n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f27533o = new d(x.f28615e, this, "replay.id", this, "replay.id");
        this.f27534p = new e(-1, this, "segment.id", this, "segment.id");
        this.f27535q = new f(null, this, "replay.type", this, "replay.type");
        this.f27536r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f27528j;
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
                deque2 = aVar.f27536r;
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
        return (ScheduledExecutorService) this.f27525g.getValue();
    }

    public final void A(s sVar) {
        this.f27529k.setValue(this, f27518t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f27535q.setValue(this, f27518t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f27532n.setValue(this, f27518t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f27533o.getValue(this, f27518t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f27534p.setValue(this, f27518t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f27534p.getValue(this, f27518t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h() {
        j(io.sentry.k.d());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f27524f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f27520b, replayId);
        }
        this.f27528j = iVar;
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
        this.f27531m.set(this.f27522d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void j(Date date) {
        this.f27530l.setValue(this, f27518t[1], date);
    }

    protected final h.c m(long j10, Date currentSegmentTimestamp, x replayId, int i10, int i11, int i12, int i13, int i14, l7.b replayType, io.sentry.android.replay.i iVar, String str, List list, Deque events) {
        Intrinsics.checkNotNullParameter(currentSegmentTimestamp, "currentSegmentTimestamp");
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        return io.sentry.android.replay.capture.h.f27626a.c(this.f27521c, this.f27520b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
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
        if (s10 != null && (a10 = this.f27526h.a(event, s10)) != null) {
            CollectionsKt.B(this.f27536r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f27528j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f27536r;
    }

    public final s s() {
        return (s) this.f27529k.getValue(this, f27518t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f27528j;
        if (iVar != null) {
            iVar.close();
        }
        this.f27531m.set(0L);
        j(null);
        x EMPTY_ID = x.f28615e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f27523e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f27531m;
    }

    public l7.b v() {
        return (l7.b) this.f27535q.getValue(this, f27518t[5]);
    }

    protected final String w() {
        return (String) this.f27532n.getValue(this, f27518t[2]);
    }

    public Date x() {
        return (Date) this.f27530l.getValue(this, f27518t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f27527i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f27533o.setValue(this, f27518t[3], xVar);
    }
}
