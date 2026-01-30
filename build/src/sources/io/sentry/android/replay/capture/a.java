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
    private final k7 f29391b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f29392c;

    /* renamed from: d  reason: collision with root package name */
    private final p f29393d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f29394e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f29395f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f29396g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f29397h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f29398i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f29399j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f29400k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f29401l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f29402m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f29403n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f29404o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f29405p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f29406q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f29407r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f29389t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0382a f29388s = new C0382a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f29390u = 8;

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
        private int f29408a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f29408a;
            this.f29408a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f29391b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29410a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29411b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29412c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29413d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29414e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0383a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29415d;

            public RunnableC0383a(Function0 function0) {
                this.f29415d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29415d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29416d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29417e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29418i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29419o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29420p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29416d = str;
                this.f29417e = obj;
                this.f29418i = obj2;
                this.f29419o = aVar;
                this.f29420p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1172invoke();
                return Unit.f33298a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1172invoke() {
                Object obj = this.f29418i;
                io.sentry.android.replay.i p10 = this.f29419o.p();
                if (p10 != null) {
                    p10.E0(this.f29420p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29411b = aVar;
            this.f29412c = str;
            this.f29413d = aVar2;
            this.f29414e = str2;
            this.f29410a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29411b.f29391b.getThreadChecker().a()) {
                this.f29411b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0383a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29411b.f29391b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29410a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29410a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29412c, andSet, obj2, this.f29413d, this.f29414e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29421a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29422b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29423c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29424d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29425e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0384a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29426d;

            public RunnableC0384a(Function0 function0) {
                this.f29426d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29426d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29427d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29428e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29429i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29430o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29431p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29427d = str;
                this.f29428e = obj;
                this.f29429i = obj2;
                this.f29430o = aVar;
                this.f29431p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1173invoke();
                return Unit.f33298a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1173invoke() {
                Object obj = this.f29429i;
                io.sentry.android.replay.i p10 = this.f29430o.p();
                if (p10 != null) {
                    p10.E0(this.f29431p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29422b = aVar;
            this.f29423c = str;
            this.f29424d = aVar2;
            this.f29425e = str2;
            this.f29421a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29422b.f29391b.getThreadChecker().a()) {
                this.f29422b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0384a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29422b.f29391b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29421a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29421a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29423c, andSet, obj2, this.f29424d, this.f29425e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29432a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29433b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29434c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29435d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29436e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0385a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29437d;

            public RunnableC0385a(Function0 function0) {
                this.f29437d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29437d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29438d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29439e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29440i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29441o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29442p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29438d = str;
                this.f29439e = obj;
                this.f29440i = obj2;
                this.f29441o = aVar;
                this.f29442p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1174invoke();
                return Unit.f33298a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1174invoke() {
                Object obj = this.f29440i;
                io.sentry.android.replay.i p10 = this.f29441o.p();
                if (p10 != null) {
                    p10.E0(this.f29442p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29433b = aVar;
            this.f29434c = str;
            this.f29435d = aVar2;
            this.f29436e = str2;
            this.f29432a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29433b.f29391b.getThreadChecker().a()) {
                this.f29433b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0385a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29433b.f29391b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29432a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29432a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29434c, andSet, obj2, this.f29435d, this.f29436e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29443a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29444b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29445c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29446d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0386a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29447d;

            public RunnableC0386a(Function0 function0) {
                this.f29447d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29447d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29448d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29449e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29450i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29451o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29448d = str;
                this.f29449e = obj;
                this.f29450i = obj2;
                this.f29451o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1175invoke();
                return Unit.f33298a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1175invoke() {
                Object obj = this.f29449e;
                s sVar = (s) this.f29450i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f29451o.p();
                if (p10 != null) {
                    p10.E0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f29451o.p();
                if (p11 != null) {
                    p11.E0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f29451o.p();
                if (p12 != null) {
                    p12.E0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f29451o.p();
                if (p13 != null) {
                    p13.E0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f29444b = aVar;
            this.f29445c = str;
            this.f29446d = aVar2;
            this.f29443a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29444b.f29391b.getThreadChecker().a()) {
                this.f29444b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0386a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29444b.f29391b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29443a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29443a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29445c, andSet, obj2, this.f29446d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29452a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29453b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29454c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29455d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29456d;

            public RunnableC0387a(Function0 function0) {
                this.f29456d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29456d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29457d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29458e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29459i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29460o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f29457d = str;
                this.f29458e = obj;
                this.f29459i = obj2;
                this.f29460o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f33298a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f29458e;
                Date date = (Date) this.f29459i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f29460o.p();
                if (p10 != null) {
                    p10.E0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f29453b = aVar;
            this.f29454c = str;
            this.f29455d = aVar2;
            this.f29452a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29453b.f29391b.getThreadChecker().a()) {
                this.f29453b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29453b.f29391b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29452a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29452a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29454c, andSet, obj2, this.f29455d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f29461a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f29462b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f29463c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f29464d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f29465e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f29466d;

            public RunnableC0388a(Function0 function0) {
                this.f29466d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f29466d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f29467d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f29468e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f29469i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f29470o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f29471p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f29467d = str;
                this.f29468e = obj;
                this.f29469i = obj2;
                this.f29470o = aVar;
                this.f29471p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f33298a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f29469i;
                io.sentry.android.replay.i p10 = this.f29470o.p();
                if (p10 != null) {
                    p10.E0(this.f29471p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f29462b = aVar;
            this.f29463c = str;
            this.f29464d = aVar2;
            this.f29465e = str2;
            this.f29461a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f29462b.f29391b.getThreadChecker().a()) {
                this.f29462b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f29462b.f29391b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f29461a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f29461a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f29463c, andSet, obj2, this.f29464d, this.f29465e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f29391b = options;
        this.f29392c = w0Var;
        this.f29393d = dateProvider;
        this.f29394e = replayExecutor;
        this.f29395f = function1;
        this.f29396g = ir.l.b(new c());
        this.f29397h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f29398i = new AtomicBoolean(false);
        this.f29400k = new g(null, this, "", this);
        this.f29401l = new h(null, this, "segment.timestamp", this);
        this.f29402m = new AtomicLong();
        this.f29403n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f29404o = new d(x.f30486e, this, "replay.id", this, "replay.id");
        this.f29405p = new e(-1, this, "segment.id", this, "segment.id");
        this.f29406q = new f(null, this, "replay.type", this, "replay.type");
        this.f29407r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f29399j;
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
                deque2 = aVar.f29407r;
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
        return (ScheduledExecutorService) this.f29396g.getValue();
    }

    public final void A(s sVar) {
        this.f29400k.setValue(this, f29389t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f29406q.setValue(this, f29389t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f29403n.setValue(this, f29389t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f29404o.getValue(this, f29389t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f29405p.setValue(this, f29389t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f29405p.getValue(this, f29389t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f29395f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f29391b, replayId);
        }
        this.f29399j = iVar;
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
        this.f29402m.set(this.f29393d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i() {
        j(io.sentry.k.d());
    }

    @Override // io.sentry.android.replay.capture.h
    public void j(Date date) {
        this.f29401l.setValue(this, f29389t[1], date);
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
        return io.sentry.android.replay.capture.h.f29497a.c(this.f29392c, this.f29391b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
    }

    @Override // io.sentry.android.replay.capture.h
    public void onTouchEvent(MotionEvent event) {
        List a10;
        Intrinsics.checkNotNullParameter(event, "event");
        s s10 = s();
        if (s10 != null && (a10 = this.f29397h.a(event, s10)) != null) {
            CollectionsKt.B(this.f29407r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f29399j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f29407r;
    }

    public final s s() {
        return (s) this.f29400k.getValue(this, f29389t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f29399j;
        if (iVar != null) {
            iVar.close();
        }
        this.f29402m.set(0L);
        j(null);
        x EMPTY_ID = x.f30486e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f29394e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f29402m;
    }

    public l7.b v() {
        return (l7.b) this.f29406q.getValue(this, f29389t[5]);
    }

    protected final String w() {
        return (String) this.f29403n.getValue(this, f29389t[2]);
    }

    public Date x() {
        return (Date) this.f29401l.getValue(this, f29389t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f29398i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f29404o.setValue(this, f29389t[3], xVar);
    }
}
