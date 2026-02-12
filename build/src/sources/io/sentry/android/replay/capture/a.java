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
    private final k7 f28704b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f28705c;

    /* renamed from: d  reason: collision with root package name */
    private final p f28706d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f28707e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f28708f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f28709g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f28710h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f28711i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f28712j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f28713k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f28714l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f28715m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f28716n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f28717o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f28718p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f28719q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f28720r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f28702t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0386a f28701s = new C0386a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f28703u = 8;

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
        private int f28721a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f28721a;
            this.f28721a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f28704b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28723a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28724b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28725c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28726d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28727e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28728d;

            public RunnableC0387a(Function0 function0) {
                this.f28728d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28728d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28729d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28730e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28731i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28732o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28733p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28729d = str;
                this.f28730e = obj;
                this.f28731i = obj2;
                this.f28732o = aVar;
                this.f28733p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1176invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1176invoke() {
                Object obj = this.f28731i;
                io.sentry.android.replay.i p10 = this.f28732o.p();
                if (p10 != null) {
                    p10.z0(this.f28733p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28724b = aVar;
            this.f28725c = str;
            this.f28726d = aVar2;
            this.f28727e = str2;
            this.f28723a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28724b.f28704b.getThreadChecker().a()) {
                this.f28724b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28724b.f28704b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28723a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28723a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28725c, andSet, obj2, this.f28726d, this.f28727e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28734a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28735b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28736c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28737d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28738e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28739d;

            public RunnableC0388a(Function0 function0) {
                this.f28739d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28739d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28740d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28741e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28742i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28743o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28744p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28740d = str;
                this.f28741e = obj;
                this.f28742i = obj2;
                this.f28743o = aVar;
                this.f28744p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f28742i;
                io.sentry.android.replay.i p10 = this.f28743o.p();
                if (p10 != null) {
                    p10.z0(this.f28744p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28735b = aVar;
            this.f28736c = str;
            this.f28737d = aVar2;
            this.f28738e = str2;
            this.f28734a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28735b.f28704b.getThreadChecker().a()) {
                this.f28735b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28735b.f28704b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28734a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28734a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28736c, andSet, obj2, this.f28737d, this.f28738e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28745a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28746b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28747c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28748d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28749e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0389a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28750d;

            public RunnableC0389a(Function0 function0) {
                this.f28750d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28750d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28751d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28752e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28753i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28754o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28755p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28751d = str;
                this.f28752e = obj;
                this.f28753i = obj2;
                this.f28754o = aVar;
                this.f28755p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f28753i;
                io.sentry.android.replay.i p10 = this.f28754o.p();
                if (p10 != null) {
                    p10.z0(this.f28755p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28746b = aVar;
            this.f28747c = str;
            this.f28748d = aVar2;
            this.f28749e = str2;
            this.f28745a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28746b.f28704b.getThreadChecker().a()) {
                this.f28746b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0389a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28746b.f28704b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28745a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28745a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28747c, andSet, obj2, this.f28748d, this.f28749e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28756a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28757b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28758c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28759d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0390a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28760d;

            public RunnableC0390a(Function0 function0) {
                this.f28760d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28760d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28761d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28762e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28763i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28764o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f28761d = str;
                this.f28762e = obj;
                this.f28763i = obj2;
                this.f28764o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f28762e;
                s sVar = (s) this.f28763i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f28764o.p();
                if (p10 != null) {
                    p10.z0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f28764o.p();
                if (p11 != null) {
                    p11.z0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f28764o.p();
                if (p12 != null) {
                    p12.z0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f28764o.p();
                if (p13 != null) {
                    p13.z0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f28757b = aVar;
            this.f28758c = str;
            this.f28759d = aVar2;
            this.f28756a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28757b.f28704b.getThreadChecker().a()) {
                this.f28757b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0390a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28757b.f28704b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28756a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28756a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28758c, andSet, obj2, this.f28759d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28765a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28766b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28767c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28768d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0391a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28769d;

            public RunnableC0391a(Function0 function0) {
                this.f28769d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28769d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28770d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28771e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28772i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28773o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f28770d = str;
                this.f28771e = obj;
                this.f28772i = obj2;
                this.f28773o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1180invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1180invoke() {
                Object obj = this.f28771e;
                Date date = (Date) this.f28772i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f28773o.p();
                if (p10 != null) {
                    p10.z0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f28766b = aVar;
            this.f28767c = str;
            this.f28768d = aVar2;
            this.f28765a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28766b.f28704b.getThreadChecker().a()) {
                this.f28766b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0391a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28766b.f28704b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28765a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28765a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28767c, andSet, obj2, this.f28768d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28774a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28775b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28776c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28777d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28778e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0392a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28779d;

            public RunnableC0392a(Function0 function0) {
                this.f28779d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28779d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28780d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28781e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28782i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28783o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28784p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28780d = str;
                this.f28781e = obj;
                this.f28782i = obj2;
                this.f28783o = aVar;
                this.f28784p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1181invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1181invoke() {
                Object obj = this.f28782i;
                io.sentry.android.replay.i p10 = this.f28783o.p();
                if (p10 != null) {
                    p10.z0(this.f28784p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28775b = aVar;
            this.f28776c = str;
            this.f28777d = aVar2;
            this.f28778e = str2;
            this.f28774a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28775b.f28704b.getThreadChecker().a()) {
                this.f28775b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0392a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28775b.f28704b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28774a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28774a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28776c, andSet, obj2, this.f28777d, this.f28778e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f28704b = options;
        this.f28705c = w0Var;
        this.f28706d = dateProvider;
        this.f28707e = replayExecutor;
        this.f28708f = function1;
        this.f28709g = as.l.b(new c());
        this.f28710h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f28711i = new AtomicBoolean(false);
        this.f28713k = new g(null, this, "", this);
        this.f28714l = new h(null, this, "segment.timestamp", this);
        this.f28715m = new AtomicLong();
        this.f28716n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f28717o = new d(x.f29799e, this, "replay.id", this, "replay.id");
        this.f28718p = new e(-1, this, "segment.id", this, "segment.id");
        this.f28719q = new f(null, this, "replay.type", this, "replay.type");
        this.f28720r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f28712j;
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
                deque2 = aVar.f28720r;
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
        return (ScheduledExecutorService) this.f28709g.getValue();
    }

    public final void A(s sVar) {
        this.f28713k.setValue(this, f28702t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f28719q.setValue(this, f28702t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f28716n.setValue(this, f28702t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f28717o.getValue(this, f28702t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f28718p.setValue(this, f28702t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f28718p.getValue(this, f28702t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f28708f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f28704b, replayId);
        }
        this.f28712j = iVar;
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
        this.f28715m.set(this.f28706d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i(Date date) {
        this.f28714l.setValue(this, f28702t[1], date);
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
        return io.sentry.android.replay.capture.h.f28810a.c(this.f28705c, this.f28704b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
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
        if (s10 != null && (a10 = this.f28710h.a(event, s10)) != null) {
            CollectionsKt.B(this.f28720r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f28712j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f28720r;
    }

    public final s s() {
        return (s) this.f28713k.getValue(this, f28702t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f28712j;
        if (iVar != null) {
            iVar.close();
        }
        this.f28715m.set(0L);
        i(null);
        x EMPTY_ID = x.f29799e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f28707e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f28715m;
    }

    public l7.b v() {
        return (l7.b) this.f28719q.getValue(this, f28702t[5]);
    }

    protected final String w() {
        return (String) this.f28716n.getValue(this, f28702t[2]);
    }

    public Date x() {
        return (Date) this.f28714l.getValue(this, f28702t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f28711i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f28717o.setValue(this, f28702t[3], xVar);
    }
}
