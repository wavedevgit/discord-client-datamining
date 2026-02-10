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
    private final k7 f28703b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f28704c;

    /* renamed from: d  reason: collision with root package name */
    private final p f28705d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f28706e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f28707f;

    /* renamed from: g  reason: collision with root package name */
    private final Lazy f28708g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.android.replay.gestures.b f28709h;

    /* renamed from: i  reason: collision with root package name */
    private final AtomicBoolean f28710i;

    /* renamed from: j  reason: collision with root package name */
    private io.sentry.android.replay.i f28711j;

    /* renamed from: k  reason: collision with root package name */
    private final ReadWriteProperty f28712k;

    /* renamed from: l  reason: collision with root package name */
    private final ReadWriteProperty f28713l;

    /* renamed from: m  reason: collision with root package name */
    private final AtomicLong f28714m;

    /* renamed from: n  reason: collision with root package name */
    private final ReadWriteProperty f28715n;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f28716o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f28717p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f28718q;

    /* renamed from: r  reason: collision with root package name */
    private final Deque f28719r;

    /* renamed from: t  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f28701t = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "recorderConfig", "getRecorderConfig$sentry_android_replay_release()Lio/sentry/android/replay/ScreenshotRecorderConfig;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "segmentTimestamp", "getSegmentTimestamp()Ljava/util/Date;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "screenAtStart", "getScreenAtStart()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentReplayId", "getCurrentReplayId()Lio/sentry/protocol/SentryId;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "currentSegment", "getCurrentSegment()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "replayType", "getReplayType()Lio/sentry/SentryReplayEvent$ReplayType;", 0))};

    /* renamed from: s  reason: collision with root package name */
    public static final C0386a f28700s = new C0386a(null);

    /* renamed from: u  reason: collision with root package name */
    public static final int f28702u = 8;

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
        private int f28720a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayPersister-");
            int i10 = this.f28720a;
            this.f28720a = i10 + 1;
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
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, a.this.f28703b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28722a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28723b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28724c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28725d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28726e;

        /* renamed from: io.sentry.android.replay.capture.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0387a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28727d;

            public RunnableC0387a(Function0 function0) {
                this.f28727d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28727d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28728d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28729e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28730i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28731o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28732p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28728d = str;
                this.f28729e = obj;
                this.f28730i = obj2;
                this.f28731o = aVar;
                this.f28732p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1177invoke();
                return Unit.f31987a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1177invoke() {
                Object obj = this.f28730i;
                io.sentry.android.replay.i p10 = this.f28731o.p();
                if (p10 != null) {
                    p10.z0(this.f28732p, String.valueOf(obj));
                }
            }
        }

        public d(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28723b = aVar;
            this.f28724c = str;
            this.f28725d = aVar2;
            this.f28726e = str2;
            this.f28722a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28723b.f28703b.getThreadChecker().a()) {
                this.f28723b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0387a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28723b.f28703b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28722a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28722a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28724c, andSet, obj2, this.f28725d, this.f28726e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28733a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28734b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28735c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28736d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28737e;

        /* renamed from: io.sentry.android.replay.capture.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0388a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28738d;

            public RunnableC0388a(Function0 function0) {
                this.f28738d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28738d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28739d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28740e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28741i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28742o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28743p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28739d = str;
                this.f28740e = obj;
                this.f28741i = obj2;
                this.f28742o = aVar;
                this.f28743p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1178invoke();
                return Unit.f31987a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1178invoke() {
                Object obj = this.f28741i;
                io.sentry.android.replay.i p10 = this.f28742o.p();
                if (p10 != null) {
                    p10.z0(this.f28743p, String.valueOf(obj));
                }
            }
        }

        public e(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28734b = aVar;
            this.f28735c = str;
            this.f28736d = aVar2;
            this.f28737e = str2;
            this.f28733a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28734b.f28703b.getThreadChecker().a()) {
                this.f28734b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0388a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28734b.f28703b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28733a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28733a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28735c, andSet, obj2, this.f28736d, this.f28737e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28744a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28745b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28746c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28747d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28748e;

        /* renamed from: io.sentry.android.replay.capture.a$f$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0389a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28749d;

            public RunnableC0389a(Function0 function0) {
                this.f28749d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28749d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28750d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28751e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28752i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28753o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28754p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28750d = str;
                this.f28751e = obj;
                this.f28752i = obj2;
                this.f28753o = aVar;
                this.f28754p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1179invoke();
                return Unit.f31987a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1179invoke() {
                Object obj = this.f28752i;
                io.sentry.android.replay.i p10 = this.f28753o.p();
                if (p10 != null) {
                    p10.z0(this.f28754p, String.valueOf(obj));
                }
            }
        }

        public f(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28745b = aVar;
            this.f28746c = str;
            this.f28747d = aVar2;
            this.f28748e = str2;
            this.f28744a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28745b.f28703b.getThreadChecker().a()) {
                this.f28745b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0389a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28745b.f28703b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28744a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28744a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28746c, andSet, obj2, this.f28747d, this.f28748e));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28755a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28756b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28757c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28758d;

        /* renamed from: io.sentry.android.replay.capture.a$g$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0390a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28759d;

            public RunnableC0390a(Function0 function0) {
                this.f28759d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28759d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28760d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28761e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28762i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28763o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f28760d = str;
                this.f28761e = obj;
                this.f28762i = obj2;
                this.f28763o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1180invoke();
                return Unit.f31987a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1180invoke() {
                Object obj = this.f28761e;
                s sVar = (s) this.f28762i;
                s sVar2 = (s) obj;
                if (sVar == null) {
                    return;
                }
                io.sentry.android.replay.i p10 = this.f28763o.p();
                if (p10 != null) {
                    p10.z0("config.height", String.valueOf(sVar.c()));
                }
                io.sentry.android.replay.i p11 = this.f28763o.p();
                if (p11 != null) {
                    p11.z0("config.width", String.valueOf(sVar.d()));
                }
                io.sentry.android.replay.i p12 = this.f28763o.p();
                if (p12 != null) {
                    p12.z0("config.frame-rate", String.valueOf(sVar.b()));
                }
                io.sentry.android.replay.i p13 = this.f28763o.p();
                if (p13 != null) {
                    p13.z0("config.bit-rate", String.valueOf(sVar.a()));
                }
            }
        }

        public g(Object obj, a aVar, String str, a aVar2) {
            this.f28756b = aVar;
            this.f28757c = str;
            this.f28758d = aVar2;
            this.f28755a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28756b.f28703b.getThreadChecker().a()) {
                this.f28756b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0390a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28756b.f28703b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28755a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28755a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28757c, andSet, obj2, this.f28758d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28764a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28765b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28766c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28767d;

        /* renamed from: io.sentry.android.replay.capture.a$h$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0391a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28768d;

            public RunnableC0391a(Function0 function0) {
                this.f28768d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28768d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28769d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28770e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28771i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28772o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar) {
                super(0);
                this.f28769d = str;
                this.f28770e = obj;
                this.f28771i = obj2;
                this.f28772o = aVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1181invoke();
                return Unit.f31987a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1181invoke() {
                Object obj = this.f28770e;
                Date date = (Date) this.f28771i;
                Date date2 = (Date) obj;
                io.sentry.android.replay.i p10 = this.f28772o.p();
                if (p10 != null) {
                    p10.z0("segment.timestamp", date == null ? null : io.sentry.k.h(date));
                }
            }
        }

        public h(Object obj, a aVar, String str, a aVar2) {
            this.f28765b = aVar;
            this.f28766c = str;
            this.f28767d = aVar2;
            this.f28764a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28765b.f28703b.getThreadChecker().a()) {
                this.f28765b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0391a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28765b.f28703b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28764a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28764a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28766c, andSet, obj2, this.f28767d));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements ReadWriteProperty {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicReference f28773a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ a f28774b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ String f28775c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ a f28776d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f28777e;

        /* renamed from: io.sentry.android.replay.capture.a$i$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class RunnableC0392a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f28778d;

            public RunnableC0392a(Function0 function0) {
                this.f28778d = function0;
            }

            @Override // java.lang.Runnable
            public final void run() {
                this.f28778d.invoke();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f28779d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object f28780e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Object f28781i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ a f28782o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ String f28783p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(String str, Object obj, Object obj2, a aVar, String str2) {
                super(0);
                this.f28779d = str;
                this.f28780e = obj;
                this.f28781i = obj2;
                this.f28782o = aVar;
                this.f28783p = str2;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1182invoke();
                return Unit.f31987a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1182invoke() {
                Object obj = this.f28781i;
                io.sentry.android.replay.i p10 = this.f28782o.p();
                if (p10 != null) {
                    p10.z0(this.f28783p, String.valueOf(obj));
                }
            }
        }

        public i(Object obj, a aVar, String str, a aVar2, String str2) {
            this.f28774b = aVar;
            this.f28775c = str;
            this.f28776d = aVar2;
            this.f28777e = str2;
            this.f28773a = new AtomicReference(obj);
        }

        private final void a(Function0 function0) {
            if (this.f28774b.f28703b.getThreadChecker().a()) {
                this.f28774b.r().submit(new io.sentry.android.replay.util.j("CaptureStrategy.runInBackground", new RunnableC0392a(function0)));
                return;
            }
            try {
                function0.invoke();
            } catch (Throwable th2) {
                this.f28774b.f28703b.getLogger().b(SentryLevel.ERROR, "Failed to execute task CaptureStrategy.runInBackground", th2);
            }
        }

        @Override // kotlin.properties.ReadWriteProperty, kotlin.properties.d
        public Object getValue(Object obj, KProperty property) {
            Intrinsics.checkNotNullParameter(property, "property");
            return this.f28773a.get();
        }

        @Override // kotlin.properties.ReadWriteProperty
        public void setValue(Object obj, KProperty property, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            Object andSet = this.f28773a.getAndSet(obj2);
            if (!Intrinsics.areEqual(andSet, obj2)) {
                a(new b(this.f28775c, andSet, obj2, this.f28776d, this.f28777e));
            }
        }
    }

    public a(k7 options, w0 w0Var, p dateProvider, ScheduledExecutorService replayExecutor, Function1 function1) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        Intrinsics.checkNotNullParameter(replayExecutor, "replayExecutor");
        this.f28703b = options;
        this.f28704c = w0Var;
        this.f28705d = dateProvider;
        this.f28706e = replayExecutor;
        this.f28707f = function1;
        this.f28708g = as.l.b(new c());
        this.f28709h = new io.sentry.android.replay.gestures.b(dateProvider);
        this.f28710i = new AtomicBoolean(false);
        this.f28712k = new g(null, this, "", this);
        this.f28713l = new h(null, this, "segment.timestamp", this);
        this.f28714m = new AtomicLong();
        this.f28715n = new i(null, this, "replay.screen-at-start", this, "replay.screen-at-start");
        this.f28716o = new d(x.f29798e, this, "replay.id", this, "replay.id");
        this.f28717p = new e(-1, this, "segment.id", this, "segment.id");
        this.f28718q = new f(null, this, "replay.type", this, "replay.type");
        this.f28719r = new ConcurrentLinkedDeque();
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
                iVar2 = aVar.f28711j;
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
                deque2 = aVar.f28719r;
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
        return (ScheduledExecutorService) this.f28708g.getValue();
    }

    public final void A(s sVar) {
        this.f28712k.setValue(this, f28701t[0], sVar);
    }

    public void B(l7.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f28718q.setValue(this, f28701t[5], bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void C(String str) {
        this.f28715n.setValue(this, f28701t[2], str);
    }

    @Override // io.sentry.android.replay.capture.h
    public x a() {
        return (x) this.f28716o.getValue(this, f28701t[3]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void b() {
    }

    @Override // io.sentry.android.replay.capture.h
    public void c(int i10) {
        this.f28717p.setValue(this, f28701t[4], Integer.valueOf(i10));
    }

    @Override // io.sentry.android.replay.capture.h
    public int d() {
        return ((Number) this.f28717p.getValue(this, f28701t[4])).intValue();
    }

    @Override // io.sentry.android.replay.capture.h
    public void h(int i10, x replayId, l7.b bVar) {
        io.sentry.android.replay.i iVar;
        Intrinsics.checkNotNullParameter(replayId, "replayId");
        Function1 function1 = this.f28707f;
        if (function1 == null || (iVar = (io.sentry.android.replay.i) function1.invoke(replayId)) == null) {
            iVar = new io.sentry.android.replay.i(this.f28703b, replayId);
        }
        this.f28711j = iVar;
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
        this.f28714m.set(this.f28705d.a());
    }

    @Override // io.sentry.android.replay.capture.h
    public void i(Date date) {
        this.f28713l.setValue(this, f28701t[1], date);
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
        return io.sentry.android.replay.capture.h.f28809a.c(this.f28704c, this.f28703b, j10, currentSegmentTimestamp, replayId, i10, i11, i12, replayType, iVar, i13, i14, str, list, events);
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
        if (s10 != null && (a10 = this.f28709h.a(event, s10)) != null) {
            CollectionsKt.B(this.f28719r, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final io.sentry.android.replay.i p() {
        return this.f28711j;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Deque q() {
        return this.f28719r;
    }

    public final s s() {
        return (s) this.f28712k.getValue(this, f28701t[0]);
    }

    @Override // io.sentry.android.replay.capture.h
    public void stop() {
        io.sentry.android.replay.i iVar = this.f28711j;
        if (iVar != null) {
            iVar.close();
        }
        this.f28714m.set(0L);
        i(null);
        x EMPTY_ID = x.f29798e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        z(EMPTY_ID);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ScheduledExecutorService t() {
        return this.f28706e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicLong u() {
        return this.f28714m;
    }

    public l7.b v() {
        return (l7.b) this.f28718q.getValue(this, f28701t[5]);
    }

    protected final String w() {
        return (String) this.f28715n.getValue(this, f28701t[2]);
    }

    public Date x() {
        return (Date) this.f28713l.getValue(this, f28701t[1]);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AtomicBoolean y() {
        return this.f28710i;
    }

    public void z(x xVar) {
        Intrinsics.checkNotNullParameter(xVar, "<set-?>");
        this.f28716o.setValue(this, f28701t[3], xVar);
    }
}
