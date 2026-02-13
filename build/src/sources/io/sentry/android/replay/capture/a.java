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
    private final k7 f29272b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f29273c;

    /* renamed from: d  reason: collision with root package name */
    private final p f29274d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f29275e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f29276f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f29277g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f29278h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f29279i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f29280j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f29281k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f29282l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f29283m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f29284n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f29285o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f29286p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f29287q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f29288r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f29270t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0386a f29269s = new C0386a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f29271u = 8;

    /* renamed from: io.sentry.android.replay.capture.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0386a {
        public /* synthetic */ C0386a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0386a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f29289a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f29289a;
            this.f29289a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f29272b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29291a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29292b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29293c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29294d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29295e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29296d;

            public RunnableC0387a(Function0 function0) {
                this.f29296d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29296d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29297d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29298e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29299i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29300o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29301p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29297d = str;
                this.f29298e = obj;
                this.f29299i = obj2;
                this.f29300o = aVar;
                this.f29301p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f32556a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f29299i;
                io.sentry.android.replay.i p10 = this.f29300o.p();
                if (p10 != null) {
                    p10.z0(this.f29301p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29292b = aVar;
            this.f29293c = str;
            this.f29294d = aVar2;
            this.f29295e = str2;
            this.f29291a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29292b.f29272b.getThreadChecker().a()) {
                this.f29292b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29292b.f29272b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29291a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29291a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29293c, andSet, obj2, this.f29294d, this.f29295e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29302a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29303b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29304c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29305d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29306e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29307d;

            public RunnableC0388a(Function0 function0) {
                this.f29307d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29307d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29308d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29309e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29310i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29311o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29312p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29308d = str;
                this.f29309e = obj;
                this.f29310i = obj2;
                this.f29311o = aVar;
                this.f29312p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f32556a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f29310i;
                io.sentry.android.replay.i p10 = this.f29311o.p();
                if (p10 != null) {
                    p10.z0(this.f29312p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29303b = aVar;
            this.f29304c = str;
            this.f29305d = aVar2;
            this.f29306e = str2;
            this.f29302a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29303b.f29272b.getThreadChecker().a()) {
                this.f29303b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29303b.f29272b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29302a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29302a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29304c, andSet, obj2, this.f29305d, this.f29306e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29313a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29314b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29315c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29316d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29317e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0389a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29318d;

            public RunnableC0389a(Function0 function0) {
                this.f29318d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29318d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29319d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29320e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29321i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29322o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29323p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29319d = str;
                this.f29320e = obj;
                this.f29321i = obj2;
                this.f29322o = aVar;
                this.f29323p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f32556a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f29321i;
                io.sentry.android.replay.i p10 = this.f29322o.p();
                if (p10 != null) {
                    p10.z0(this.f29323p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29314b = aVar;
            this.f29315c = str;
            this.f29316d = aVar2;
            this.f29317e = str2;
            this.f29313a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29314b.f29272b.getThreadChecker().a()) {
                this.f29314b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0389a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29314b.f29272b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29313a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29313a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29315c, andSet, obj2, this.f29316d, this.f29317e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29324a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29325b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29326c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29327d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0390a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29328d;

            public RunnableC0390a(Function0 function0) {
                this.f29328d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29328d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29329d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29330e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29331i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29332o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29329d = str;
                this.f29330e = obj;
                this.f29331i = obj2;
                this.f29332o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f32556a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f29330e;
                s sVar = (s) this.f29331i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f29332o.p();
                if (p10 != null) {
                    p10.z0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f29332o.p();
                if (p11 != null) {
                    p11.z0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f29332o.p();
                if (p12 != null) {
                    p12.z0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f29332o.p();
                if (p13 != null) {
                    p13.z0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f29325b = aVar;
            this.f29326c = str;
            this.f29327d = aVar2;
            this.f29324a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29325b.f29272b.getThreadChecker().a()) {
                this.f29325b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0390a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29325b.f29272b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29324a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29324a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29326c, andSet, obj2, this.f29327d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29333a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29334b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29335c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29336d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0391a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29337d;

            public RunnableC0391a(Function0 function0) {
                this.f29337d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29337d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29338d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29339e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29340i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29341o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29338d = str;
                this.f29339e = obj;
                this.f29340i = obj2;
                this.f29341o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1180invoke();
                return Unit.f32556a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1180invoke() {
                Object obj = this.f29339e;
                Date date = (Date) this.f29340i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f29341o.p();
                if (p10 != null) {
                    p10.z0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f29334b = aVar;
            this.f29335c = str;
            this.f29336d = aVar2;
            this.f29333a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29334b.f29272b.getThreadChecker().a()) {
                this.f29334b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0391a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29334b.f29272b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29333a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29333a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29335c, andSet, obj2, this.f29336d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29342a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29343b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29344c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29345d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29346e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0392a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29347d;

            public RunnableC0392a(Function0 function0) {
                this.f29347d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29347d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29348d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29349e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29350i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29351o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29352p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29348d = str;
                this.f29349e = obj;
                this.f29350i = obj2;
                this.f29351o = aVar;
                this.f29352p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1181invoke();
                return Unit.f32556a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1181invoke() {
                Object obj = this.f29350i;
                io.sentry.android.replay.i p10 = this.f29351o.p();
                if (p10 != null) {
                    p10.z0(this.f29352p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29343b = aVar;
            this.f29344c = str;
            this.f29345d = aVar2;
            this.f29346e = str2;
            this.f29342a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29343b.f29272b.getThreadChecker().a()) {
                this.f29343b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0392a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29343b.f29272b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29342a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29342a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29344c, andSet, obj2, this.f29345d, this.f29346e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f29272b = options;
        this.f29273c = w0Var;
        this.f29274d = dateProvider;
        this.f29275e = replayExecutor;
        this.f29276f = function1;
        this.f29277g = as.l.b(new c());
        this.f29278h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f29279i = new AtomicBoolean(false);
        this.f29281k = new g(null, this, "", this);
        this.f29282l = new h(null, this, "segment.timestamp", this);
        this.f29283m = new AtomicLong();
        this.f29284n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f29285o = new d(x.f30367e, this, "replay.id", this, "replay.id");
        this.f29286p = new e(-1, this, "segment.id", this, "segment.id");
        this.f29287q = new f(null, this, "replay.type", this, "replay.type");
        this.f29288r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f29280j;
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
                deque2 = aVar.f29288r;
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
        return (ScheduledExecutorService) this.f29277g.getValue();
    }

    public final void A(s sVar) {
        this.f29281k.setValue(this, f29270t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f29287q.setValue(this, f29270t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f29284n.setValue(this, f29270t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f29285o.getValue(this, f29270t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f29286p.setValue(this, f29270t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f29286p.getValue(this, f29270t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f29276f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f29272b, replayId);
        }
        this.f29280j = iVar;
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
        i(io.sentry.k.d());
        this.f29283m.set(this.f29274d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i(Date date) {
        this.f29282l.setValue(this, f29270t[1], date);
    }

    @Override // io.sentry.android.replay.capture.h
    public void j() {
        i(io.sentry.k.d());
    }

    protected final h.c m(long j10, Date currentSegmentTimestamp, x replayId, int i10, int i11, int i12, int i13, int i14, l7.b replayType, io.sentry.android.replay.i iVar, String str, List list, Deque events) {
        Intrinsics.checkNotNullParameter(currentSegmentTimestamp, "currentSegmentTimestamp");
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        return io.sentry.android.replay.capture.h.f29378a.c(this.f29273c, this.f29272b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
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
        if (s10 != null && (a10 = this.f29278h.a(event, s10)) != null) {
            CollectionsKt.B(this.f29288r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f29280j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f29288r;
    }

    public final s s() {
        return (s) this.f29281k.getValue(this, f29270t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f29280j;
        if (iVar != null) {
            iVar.close();
        }
        this.f29283m.set(0L);
        i(null);
        x EMPTY_ID = x.f30367e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f29275e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f29283m;
    }

    public l7.b v() {
        return (l7.b) this.f29287q.getValue(this, f29270t[5]);
    }

    protected final String w() {
        return (String) this.f29284n.getValue(this, f29270t[2]);
    }

    public Date x() {
        return (Date) this.f29282l.getValue(this, f29270t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f29279i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f29285o.setValue(this, f29270t[3], xVar);
    }
}
