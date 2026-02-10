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
    private final k7 f27768b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f27769c;

    /* renamed from: d  reason: collision with root package name */
    private final p f27770d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f27771e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f27772f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f27773g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f27774h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f27775i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f27776j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f27777k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f27778l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f27779m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f27780n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f27781o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f27782p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f27783q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f27784r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f27766t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0411a f27765s = new C0411a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f27767u = 8;

    /* renamed from: io.sentry.android.replay.capture.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0411a {
        public /* synthetic */ C0411a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0411a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f27785a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f27785a;
            this.f27785a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f27768b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27787a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27788b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27789c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27790d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27791e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0412a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27792d;

            public RunnableC0412a(Function0 function0) {
                this.f27792d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27792d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27793d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27794e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27795i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27796o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27797p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27793d = str;
                this.f27794e = obj;
                this.f27795i = obj2;
                this.f27796o = aVar;
                this.f27797p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f27795i;
                io.sentry.android.replay.i p10 = this.f27796o.p();
                if (p10 != null) {
                    p10.C0(this.f27797p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27788b = aVar;
            this.f27789c = str;
            this.f27790d = aVar2;
            this.f27791e = str2;
            this.f27787a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27788b.f27768b.getThreadChecker().a()) {
                this.f27788b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0412a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27788b.f27768b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27787a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27787a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27789c, andSet, obj2, this.f27790d, this.f27791e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27798a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27799b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27800c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27801d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27802e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0413a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27803d;

            public RunnableC0413a(Function0 function0) {
                this.f27803d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27803d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27804d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27805e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27806i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27807o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27808p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27804d = str;
                this.f27805e = obj;
                this.f27806i = obj2;
                this.f27807o = aVar;
                this.f27808p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f27806i;
                io.sentry.android.replay.i p10 = this.f27807o.p();
                if (p10 != null) {
                    p10.C0(this.f27808p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27799b = aVar;
            this.f27800c = str;
            this.f27801d = aVar2;
            this.f27802e = str2;
            this.f27798a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27799b.f27768b.getThreadChecker().a()) {
                this.f27799b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0413a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27799b.f27768b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27798a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27798a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27800c, andSet, obj2, this.f27801d, this.f27802e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27809a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27810b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27811c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27812d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27813e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0414a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27814d;

            public RunnableC0414a(Function0 function0) {
                this.f27814d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27814d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27815d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27816e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27817i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27818o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27819p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27815d = str;
                this.f27816e = obj;
                this.f27817i = obj2;
                this.f27818o = aVar;
                this.f27819p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f27817i;
                io.sentry.android.replay.i p10 = this.f27818o.p();
                if (p10 != null) {
                    p10.C0(this.f27819p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27810b = aVar;
            this.f27811c = str;
            this.f27812d = aVar2;
            this.f27813e = str2;
            this.f27809a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27810b.f27768b.getThreadChecker().a()) {
                this.f27810b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0414a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27810b.f27768b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27809a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27809a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27811c, andSet, obj2, this.f27812d, this.f27813e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27820a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27821b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27822c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27823d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0415a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27824d;

            public RunnableC0415a(Function0 function0) {
                this.f27824d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27824d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27825d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27826e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27827i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27828o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f27825d = str;
                this.f27826e = obj;
                this.f27827i = obj2;
                this.f27828o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f27826e;
                s sVar = (s) this.f27827i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f27828o.p();
                if (p10 != null) {
                    p10.C0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f27828o.p();
                if (p11 != null) {
                    p11.C0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f27828o.p();
                if (p12 != null) {
                    p12.C0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f27828o.p();
                if (p13 != null) {
                    p13.C0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f27821b = aVar;
            this.f27822c = str;
            this.f27823d = aVar2;
            this.f27820a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27821b.f27768b.getThreadChecker().a()) {
                this.f27821b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0415a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27821b.f27768b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27820a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27820a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27822c, andSet, obj2, this.f27823d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27829a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27830b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27831c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27832d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0416a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27833d;

            public RunnableC0416a(Function0 function0) {
                this.f27833d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27833d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27834d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27835e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27836i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27837o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f27834d = str;
                this.f27835e = obj;
                this.f27836i = obj2;
                this.f27837o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1180invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1180invoke() {
                Object obj = this.f27835e;
                Date date = (Date) this.f27836i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f27837o.p();
                if (p10 != null) {
                    p10.C0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f27830b = aVar;
            this.f27831c = str;
            this.f27832d = aVar2;
            this.f27829a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27830b.f27768b.getThreadChecker().a()) {
                this.f27830b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0416a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27830b.f27768b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27829a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27829a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27831c, andSet, obj2, this.f27832d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f27838a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f27839b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f27840c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f27841d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f27842e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0417a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f27843d;

            public RunnableC0417a(Function0 function0) {
                this.f27843d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f27843d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f27844d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f27845e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f27846i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f27847o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f27848p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f27844d = str;
                this.f27845e = obj;
                this.f27846i = obj2;
                this.f27847o = aVar;
                this.f27848p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1181invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1181invoke() {
                Object obj = this.f27846i;
                io.sentry.android.replay.i p10 = this.f27847o.p();
                if (p10 != null) {
                    p10.C0(this.f27848p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f27839b = aVar;
            this.f27840c = str;
            this.f27841d = aVar2;
            this.f27842e = str2;
            this.f27838a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f27839b.f27768b.getThreadChecker().a()) {
                this.f27839b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0417a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f27839b.f27768b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f27838a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f27838a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f27840c, andSet, obj2, this.f27841d, this.f27842e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f27768b = options;
        this.f27769c = w0Var;
        this.f27770d = dateProvider;
        this.f27771e = replayExecutor;
        this.f27772f = function1;
        this.f27773g = rr.l.a(new c());
        this.f27774h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f27775i = new AtomicBoolean(false);
        this.f27777k = new g(null, this, "", this);
        this.f27778l = new h(null, this, "segment.timestamp", this);
        this.f27779m = new AtomicLong();
        this.f27780n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f27781o = new d(x.f28863e, this, "replay.id", this, "replay.id");
        this.f27782p = new e(-1, this, "segment.id", this, "segment.id");
        this.f27783q = new f(null, this, "replay.type", this, "replay.type");
        this.f27784r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f27776j;
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
                deque2 = aVar.f27784r;
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
        return (ScheduledExecutorService) this.f27773g.getValue();
    }

    public final void A(s sVar) {
        this.f27777k.setValue(this, f27766t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f27783q.setValue(this, f27766t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f27780n.setValue(this, f27766t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f27781o.getValue(this, f27766t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f27782p.setValue(this, f27766t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f27782p.getValue(this, f27766t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f27772f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f27768b, replayId);
        }
        this.f27776j = iVar;
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
        this.f27779m.set(this.f27770d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i() {
        j(io.sentry.k.d());
    }

    @Override // io.sentry.android.replay.capture.h
    public void j(Date date) {
        this.f27778l.setValue(this, f27766t[1], date);
    }

    protected final h.c m(long j10, Date currentSegmentTimestamp, x replayId, int i10, int i11, int i12, int i13, int i14, l7.b replayType, io.sentry.android.replay.i iVar, String str, List list, Deque events) {
        Intrinsics.checkNotNullParameter(currentSegmentTimestamp, "currentSegmentTimestamp");
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        return io.sentry.android.replay.capture.h.f27874a.c(this.f27769c, this.f27768b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
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
        if (s10 != null && (a10 = this.f27774h.a(event, s10)) != null) {
            CollectionsKt.B(this.f27784r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f27776j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f27784r;
    }

    public final s s() {
        return (s) this.f27777k.getValue(this, f27766t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f27776j;
        if (iVar != null) {
            iVar.close();
        }
        this.f27779m.set(0L);
        j(null);
        x EMPTY_ID = x.f28863e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f27771e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f27779m;
    }

    public l7.b v() {
        return (l7.b) this.f27783q.getValue(this, f27766t[5]);
    }

    protected final String w() {
        return (String) this.f27780n.getValue(this, f27766t[2]);
    }

    public Date x() {
        return (Date) this.f27778l.getValue(this, f27766t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f27775i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f27781o.setValue(this, f27766t[3], xVar);
    }
}
