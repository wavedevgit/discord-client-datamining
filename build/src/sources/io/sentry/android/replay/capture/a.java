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
    private final k7 f29375b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f29376c;

    /* renamed from: d  reason: collision with root package name */
    private final p f29377d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f29378e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f29379f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f29380g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f29381h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f29382i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f29383j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f29384k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f29385l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f29386m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f29387n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f29388o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f29389p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f29390q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f29391r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f29373t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0382a f29372s = new C0382a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f29374u = 8;

    /* renamed from: io.sentry.android.replay.capture.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0382a {
        public /* synthetic */ C0382a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0382a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f29392a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f29392a;
            this.f29392a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f29375b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29394a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29395b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29396c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29397d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29398e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0383a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29399d;

            public RunnableC0383a(Function0 function0) {
                this.f29399d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29399d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29400d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29401e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29402i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29403o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29404p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29400d = str;
                this.f29401e = obj;
                this.f29402i = obj2;
                this.f29403o = aVar;
                this.f29404p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1172invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1172invoke() {
                Object obj = this.f29402i;
                io.sentry.android.replay.i p10 = this.f29403o.p();
                if (p10 != null) {
                    p10.E0(this.f29404p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29395b = aVar;
            this.f29396c = str;
            this.f29397d = aVar2;
            this.f29398e = str2;
            this.f29394a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29395b.f29375b.getThreadChecker().a()) {
                this.f29395b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0383a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29395b.f29375b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29394a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29394a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29396c, andSet, obj2, this.f29397d, this.f29398e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29405a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29406b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29407c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29408d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29409e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0384a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29410d;

            public RunnableC0384a(Function0 function0) {
                this.f29410d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29410d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29411d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29412e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29413i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29414o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29415p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29411d = str;
                this.f29412e = obj;
                this.f29413i = obj2;
                this.f29414o = aVar;
                this.f29415p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1173invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1173invoke() {
                Object obj = this.f29413i;
                io.sentry.android.replay.i p10 = this.f29414o.p();
                if (p10 != null) {
                    p10.E0(this.f29415p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29406b = aVar;
            this.f29407c = str;
            this.f29408d = aVar2;
            this.f29409e = str2;
            this.f29405a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29406b.f29375b.getThreadChecker().a()) {
                this.f29406b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0384a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29406b.f29375b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29405a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29405a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29407c, andSet, obj2, this.f29408d, this.f29409e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29416a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29417b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29418c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29419d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29420e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0385a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29421d;

            public RunnableC0385a(Function0 function0) {
                this.f29421d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29421d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29422d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29423e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29424i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29425o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29426p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29422d = str;
                this.f29423e = obj;
                this.f29424i = obj2;
                this.f29425o = aVar;
                this.f29426p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1174invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1174invoke() {
                Object obj = this.f29424i;
                io.sentry.android.replay.i p10 = this.f29425o.p();
                if (p10 != null) {
                    p10.E0(this.f29426p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29417b = aVar;
            this.f29418c = str;
            this.f29419d = aVar2;
            this.f29420e = str2;
            this.f29416a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29417b.f29375b.getThreadChecker().a()) {
                this.f29417b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0385a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29417b.f29375b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29416a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29416a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29418c, andSet, obj2, this.f29419d, this.f29420e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29427a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29428b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29429c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29430d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0386a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29431d;

            public RunnableC0386a(Function0 function0) {
                this.f29431d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29431d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29432d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29433e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29434i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29435o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29432d = str;
                this.f29433e = obj;
                this.f29434i = obj2;
                this.f29435o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1175invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1175invoke() {
                Object obj = this.f29433e;
                s sVar = (s) this.f29434i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f29435o.p();
                if (p10 != null) {
                    p10.E0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f29435o.p();
                if (p11 != null) {
                    p11.E0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f29435o.p();
                if (p12 != null) {
                    p12.E0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f29435o.p();
                if (p13 != null) {
                    p13.E0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f29428b = aVar;
            this.f29429c = str;
            this.f29430d = aVar2;
            this.f29427a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29428b.f29375b.getThreadChecker().a()) {
                this.f29428b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0386a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29428b.f29375b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29427a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29427a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29429c, andSet, obj2, this.f29430d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29436a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29437b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29438c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29439d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29440d;

            public RunnableC0387a(Function0 function0) {
                this.f29440d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29440d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29441d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29442e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29443i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29444o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29441d = str;
                this.f29442e = obj;
                this.f29443i = obj2;
                this.f29444o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f29442e;
                Date date = (Date) this.f29443i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f29444o.p();
                if (p10 != null) {
                    p10.E0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f29437b = aVar;
            this.f29438c = str;
            this.f29439d = aVar2;
            this.f29436a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29437b.f29375b.getThreadChecker().a()) {
                this.f29437b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29437b.f29375b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29436a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29436a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29438c, andSet, obj2, this.f29439d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29445a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29446b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29447c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29448d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29449e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29450d;

            public RunnableC0388a(Function0 function0) {
                this.f29450d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29450d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29451d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29452e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29453i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29454o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29455p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29451d = str;
                this.f29452e = obj;
                this.f29453i = obj2;
                this.f29454o = aVar;
                this.f29455p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f29453i;
                io.sentry.android.replay.i p10 = this.f29454o.p();
                if (p10 != null) {
                    p10.E0(this.f29455p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29446b = aVar;
            this.f29447c = str;
            this.f29448d = aVar2;
            this.f29449e = str2;
            this.f29445a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29446b.f29375b.getThreadChecker().a()) {
                this.f29446b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29446b.f29375b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29445a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29445a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29447c, andSet, obj2, this.f29448d, this.f29449e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f29375b = options;
        this.f29376c = w0Var;
        this.f29377d = dateProvider;
        this.f29378e = replayExecutor;
        this.f29379f = function1;
        this.f29380g = ir.l.b(new c());
        this.f29381h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f29382i = new AtomicBoolean(false);
        this.f29384k = new g(null, this, "", this);
        this.f29385l = new h(null, this, "segment.timestamp", this);
        this.f29386m = new AtomicLong();
        this.f29387n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f29388o = new d(x.f30470e, this, "replay.id", this, "replay.id");
        this.f29389p = new e(-1, this, "segment.id", this, "segment.id");
        this.f29390q = new f(null, this, "replay.type", this, "replay.type");
        this.f29391r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f29383j;
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
                deque2 = aVar.f29391r;
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
        return (ScheduledExecutorService) this.f29380g.getValue();
    }

    public final void A(s sVar) {
        this.f29384k.setValue(this, f29373t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f29390q.setValue(this, f29373t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f29387n.setValue(this, f29373t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f29388o.getValue(this, f29373t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f29389p.setValue(this, f29373t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f29389p.getValue(this, f29373t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f29379f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f29375b, replayId);
        }
        this.f29383j = iVar;
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
        this.f29386m.set(this.f29377d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i() {
        j(io.sentry.k.d());
    }

    @Override // io.sentry.android.replay.capture.h
    public void j(Date date) {
        this.f29385l.setValue(this, f29373t[1], date);
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
        return io.sentry.android.replay.capture.h.f29481a.c(this.f29376c, this.f29375b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
    }

    @Override // io.sentry.android.replay.capture.h
    public void onTouchEvent(MotionEvent event) {
        List a10;
        Intrinsics.checkNotNullParameter(event, "event");
        s s10 = s();
        if (s10 != null && (a10 = this.f29381h.a(event, s10)) != null) {
            CollectionsKt.B(this.f29391r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f29383j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f29391r;
    }

    public final s s() {
        return (s) this.f29384k.getValue(this, f29373t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f29383j;
        if (iVar != null) {
            iVar.close();
        }
        this.f29386m.set(0L);
        j(null);
        x EMPTY_ID = x.f30470e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f29378e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f29386m;
    }

    public l7.b v() {
        return (l7.b) this.f29390q.getValue(this, f29373t[5]);
    }

    protected final String w() {
        return (String) this.f29387n.getValue(this, f29373t[2]);
    }

    public Date x() {
        return (Date) this.f29385l.getValue(this, f29373t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f29382i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f29388o.setValue(this, f29373t[3], xVar);
    }
}
