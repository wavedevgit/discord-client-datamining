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
    private final k7 f28957b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f28958c;

    /* renamed from: d  reason: collision with root package name */
    private final p f28959d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f28960e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f28961f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f28962g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f28963h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f28964i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f28965j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f28966k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f28967l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f28968m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f28969n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f28970o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f28971p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f28972q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f28973r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f28955t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0385a f28954s = new C0385a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f28956u = 8;

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
        private int f28974a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f28974a;
            this.f28974a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f28957b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28976a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28977b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28978c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28979d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28980e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0386a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28981d;

            public RunnableC0386a(Function0 function0) {
                this.f28981d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28981d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28982d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28983e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28984i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28985o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28986p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28982d = str;
                this.f28983e = obj;
                this.f28984i = obj2;
                this.f28985o = aVar;
                this.f28986p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1175invoke();
                return Unit.f33074a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1175invoke() {
                Object obj = this.f28984i;
                io.sentry.android.replay.i p10 = this.f28985o.p();
                if (p10 != null) {
                    p10.F0(this.f28986p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28977b = aVar;
            this.f28978c = str;
            this.f28979d = aVar2;
            this.f28980e = str2;
            this.f28976a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28977b.f28957b.getThreadChecker().a()) {
                this.f28977b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0386a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28977b.f28957b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28976a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28976a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28978c, andSet, obj2, this.f28979d, this.f28980e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28987a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28988b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28989c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28990d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28991e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28992d;

            public RunnableC0387a(Function0 function0) {
                this.f28992d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28992d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28993d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28994e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28995i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28996o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28997p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28993d = str;
                this.f28994e = obj;
                this.f28995i = obj2;
                this.f28996o = aVar;
                this.f28997p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f33074a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f28995i;
                io.sentry.android.replay.i p10 = this.f28996o.p();
                if (p10 != null) {
                    p10.F0(this.f28997p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28988b = aVar;
            this.f28989c = str;
            this.f28990d = aVar2;
            this.f28991e = str2;
            this.f28987a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28988b.f28957b.getThreadChecker().a()) {
                this.f28988b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28988b.f28957b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28987a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28987a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28989c, andSet, obj2, this.f28990d, this.f28991e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28998a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28999b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29000c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29001d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29002e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29003d;

            public RunnableC0388a(Function0 function0) {
                this.f29003d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29003d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29004d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29005e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29006i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29007o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29008p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29004d = str;
                this.f29005e = obj;
                this.f29006i = obj2;
                this.f29007o = aVar;
                this.f29008p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f33074a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f29006i;
                io.sentry.android.replay.i p10 = this.f29007o.p();
                if (p10 != null) {
                    p10.F0(this.f29008p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28999b = aVar;
            this.f29000c = str;
            this.f29001d = aVar2;
            this.f29002e = str2;
            this.f28998a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28999b.f28957b.getThreadChecker().a()) {
                this.f28999b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28999b.f28957b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28998a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28998a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29000c, andSet, obj2, this.f29001d, this.f29002e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29009a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29010b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29011c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29012d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0389a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29013d;

            public RunnableC0389a(Function0 function0) {
                this.f29013d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29013d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29014d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29015e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29016i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29017o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29014d = str;
                this.f29015e = obj;
                this.f29016i = obj2;
                this.f29017o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f33074a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f29015e;
                s sVar = (s) this.f29016i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f29017o.p();
                if (p10 != null) {
                    p10.F0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f29017o.p();
                if (p11 != null) {
                    p11.F0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f29017o.p();
                if (p12 != null) {
                    p12.F0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f29017o.p();
                if (p13 != null) {
                    p13.F0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f29010b = aVar;
            this.f29011c = str;
            this.f29012d = aVar2;
            this.f29009a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29010b.f28957b.getThreadChecker().a()) {
                this.f29010b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0389a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29010b.f28957b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29009a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29009a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29011c, andSet, obj2, this.f29012d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29018a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29019b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29020c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29021d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0390a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29022d;

            public RunnableC0390a(Function0 function0) {
                this.f29022d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29022d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29023d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29024e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29025i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29026o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29023d = str;
                this.f29024e = obj;
                this.f29025i = obj2;
                this.f29026o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f33074a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f29024e;
                Date date = (Date) this.f29025i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f29026o.p();
                if (p10 != null) {
                    p10.F0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f29019b = aVar;
            this.f29020c = str;
            this.f29021d = aVar2;
            this.f29018a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29019b.f28957b.getThreadChecker().a()) {
                this.f29019b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0390a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29019b.f28957b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29018a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29018a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29020c, andSet, obj2, this.f29021d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29027a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29028b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29029c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29030d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29031e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0391a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29032d;

            public RunnableC0391a(Function0 function0) {
                this.f29032d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29032d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29033d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29034e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29035i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29036o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29037p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29033d = str;
                this.f29034e = obj;
                this.f29035i = obj2;
                this.f29036o = aVar;
                this.f29037p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1180invoke();
                return Unit.f33074a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1180invoke() {
                Object obj = this.f29035i;
                io.sentry.android.replay.i p10 = this.f29036o.p();
                if (p10 != null) {
                    p10.F0(this.f29037p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29028b = aVar;
            this.f29029c = str;
            this.f29030d = aVar2;
            this.f29031e = str2;
            this.f29027a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29028b.f28957b.getThreadChecker().a()) {
                this.f29028b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0391a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29028b.f28957b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29027a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29027a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29029c, andSet, obj2, this.f29030d, this.f29031e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f28957b = options;
        this.f28958c = w0Var;
        this.f28959d = dateProvider;
        this.f28960e = replayExecutor;
        this.f28961f = function1;
        this.f28962g = jr.l.b(new c());
        this.f28963h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f28964i = new AtomicBoolean(false);
        this.f28966k = new g(null, this, "", this);
        this.f28967l = new h(null, this, "segment.timestamp", this);
        this.f28968m = new AtomicLong();
        this.f28969n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f28970o = new d(x.f30052e, this, "replay.id", this, "replay.id");
        this.f28971p = new e(-1, this, "segment.id", this, "segment.id");
        this.f28972q = new f(null, this, "replay.type", this, "replay.type");
        this.f28973r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f28965j;
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
                deque2 = aVar.f28973r;
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
        return (ScheduledExecutorService) this.f28962g.getValue();
    }

    public final void A(s sVar) {
        this.f28966k.setValue(this, f28955t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f28972q.setValue(this, f28955t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f28969n.setValue(this, f28955t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f28970o.getValue(this, f28955t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f28971p.setValue(this, f28955t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f28971p.getValue(this, f28955t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f28961f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f28957b, replayId);
        }
        this.f28965j = iVar;
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
        this.f28968m.set(this.f28959d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i() {
        j(io.sentry.k.d());
    }

    @Override // io.sentry.android.replay.capture.h
    public void j(Date date) {
        this.f28967l.setValue(this, f28955t[1], date);
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
        return io.sentry.android.replay.capture.h.f29063a.c(this.f28958c, this.f28957b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
    }

    @Override // io.sentry.android.replay.capture.h
    public void onTouchEvent(MotionEvent event) {
        List a10;
        Intrinsics.checkNotNullParameter(event, "event");
        s s10 = s();
        if (s10 != null && (a10 = this.f28963h.a(event, s10)) != null) {
            CollectionsKt.B(this.f28973r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f28965j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f28973r;
    }

    public final s s() {
        return (s) this.f28966k.getValue(this, f28955t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f28965j;
        if (iVar != null) {
            iVar.close();
        }
        this.f28968m.set(0L);
        j(null);
        x EMPTY_ID = x.f30052e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f28960e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f28968m;
    }

    public l7.b v() {
        return (l7.b) this.f28972q.getValue(this, f28955t[5]);
    }

    protected final String w() {
        return (String) this.f28969n.getValue(this, f28955t[2]);
    }

    public Date x() {
        return (Date) this.f28967l.getValue(this, f28955t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f28964i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f28970o.setValue(this, f28955t[3], xVar);
    }
}
