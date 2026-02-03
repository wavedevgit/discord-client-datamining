package io.sentry.android.replay;

import android.content.Context;
import android.graphics.Bitmap;
import android.os.Build;
import android.view.MotionEvent;
import com.facebook.react.uimanager.ViewProps;
import io.sentry.Hint;
import io.sentry.IScope;
import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.android.replay.capture.h;
import io.sentry.android.replay.i;
import io.sentry.android.replay.s;
import io.sentry.b4;
import io.sentry.k0;
import io.sentry.k1;
import io.sentry.k2;
import io.sentry.k7;
import io.sentry.m7;
import io.sentry.t3;
import io.sentry.transport.a0;
import io.sentry.u3;
import io.sentry.u6;
import io.sentry.util.b0;
import io.sentry.w0;
import io.sentry.z0;
import java.io.Closeable;
import java.io.File;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
@Metadata(d1 = {"\u0000ð\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0017\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\b\u0007\u0018\u0000 \u009a\u00012\u00020\u00012\u00020\u00022\u00020\u00032\u00020\u00042\u00020\u00052\u00020\u00062\u00020\u00072\u00020\b:\u0004C9\u009b\u0001BA\u0012\u0006\u0010\n\u001a\u00020\t\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0010\b\u0002\u0010\u000f\u001a\n\u0012\u0004\u0012\u00020\u000e\u0018\u00010\r\u0012\u0016\b\u0002\u0010\u0013\u001a\u0010\u0012\u0004\u0012\u00020\u0011\u0012\u0004\u0012\u00020\u0012\u0018\u00010\u0010¢\u0006\u0004\b\u0014\u0010\u0015B\u0019\b\u0016\u0012\u0006\u0010\n\u001a\u00020\t\u0012\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b\u0014\u0010\u0016J\u000f\u0010\u0018\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u0018\u0010\u0019J\u000f\u0010\u001a\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u001a\u0010\u0019J\u000f\u0010\u001b\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u001b\u0010\u0019J\u000f\u0010\u001c\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u001c\u0010\u0019J\u000f\u0010\u001d\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u001d\u0010\u0019J\u0019\u0010 \u001a\u00020\u00172\b\b\u0002\u0010\u001f\u001a\u00020\u001eH\u0002¢\u0006\u0004\b \u0010!J\u000f\u0010\"\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\"\u0010\u0019J\u001f\u0010'\u001a\u00020\u00172\u0006\u0010$\u001a\u00020#2\u0006\u0010&\u001a\u00020%H\u0016¢\u0006\u0004\b'\u0010(J\u000f\u0010*\u001a\u00020)H\u0016¢\u0006\u0004\b*\u0010+J\u000f\u0010,\u001a\u00020\u0017H\u0016¢\u0006\u0004\b,\u0010\u0019J\u000f\u0010-\u001a\u00020\u0017H\u0016¢\u0006\u0004\b-\u0010\u0019J\u0019\u0010/\u001a\u00020\u00172\b\u0010.\u001a\u0004\u0018\u00010)H\u0016¢\u0006\u0004\b/\u00100J\u000f\u00101\u001a\u00020\u0011H\u0016¢\u0006\u0004\b1\u00102J\u0017\u00105\u001a\u00020\u00172\u0006\u00104\u001a\u000203H\u0016¢\u0006\u0004\b5\u00106J\u000f\u00107\u001a\u000203H\u0016¢\u0006\u0004\b7\u00108J\u000f\u00109\u001a\u00020\u0017H\u0016¢\u0006\u0004\b9\u0010\u0019J\u000f\u0010:\u001a\u00020)H\u0016¢\u0006\u0004\b:\u0010+J\u000f\u0010;\u001a\u00020\u0017H\u0016¢\u0006\u0004\b;\u0010\u0019J\u0017\u0010>\u001a\u00020\u00172\u0006\u0010=\u001a\u00020<H\u0016¢\u0006\u0004\b>\u0010?J\u000f\u0010@\u001a\u00020\u0017H\u0016¢\u0006\u0004\b@\u0010\u0019J\u0017\u0010C\u001a\u00020\u00172\u0006\u0010B\u001a\u00020AH\u0016¢\u0006\u0004\bC\u0010DJ\u0017\u0010G\u001a\u00020\u00172\u0006\u0010F\u001a\u00020EH\u0016¢\u0006\u0004\bG\u0010HJ\u0017\u0010K\u001a\u00020\u00172\u0006\u0010J\u001a\u00020IH\u0016¢\u0006\u0004\bK\u0010LJ\u001f\u0010P\u001a\u00020\u00172\u0006\u0010N\u001a\u00020M2\u0006\u0010O\u001a\u00020MH\u0016¢\u0006\u0004\bP\u0010QJ\u0015\u0010T\u001a\u00020\u00172\u0006\u0010S\u001a\u00020R¢\u0006\u0004\bT\u0010UR\u0014\u0010\n\u001a\u00020\t8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bV\u0010WR\u0014\u0010\f\u001a\u00020\u000b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bX\u0010YR\u001c\u0010\u000f\u001a\n\u0012\u0004\u0012\u00020\u000e\u0018\u00010\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010ZR\"\u0010\u0013\u001a\u0010\u0012\u0004\u0012\u00020\u0011\u0012\u0004\u0012\u00020\u0012\u0018\u00010\u00108\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b[\u0010\\R\u0016\u0010_\u001a\u00020A8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b]\u0010^R\u0016\u0010b\u001a\u00020)8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b`\u0010aR\u0016\u0010&\u001a\u00020%8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bc\u0010dR\u0018\u0010$\u001a\u0004\u0018\u00010#8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\be\u0010fR\u0018\u0010i\u001a\u0004\u0018\u00010\u000e8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bg\u0010hR\u0018\u0010m\u001a\u0004\u0018\u00010j8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bk\u0010lR\u001b\u0010s\u001a\u00020n8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\bo\u0010p\u001a\u0004\bq\u0010rR\u001b\u0010x\u001a\u00020t8@X\u0080\u0084\u0002¢\u0006\f\n\u0004\bu\u0010p\u001a\u0004\bv\u0010wR\u001b\u0010|\u001a\u00020y8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b5\u0010p\u001a\u0004\bz\u0010{R\u001d\u0010\u0082\u0001\u001a\u00020}8\u0000X\u0080\u0004¢\u0006\u000e\n\u0004\b~\u0010\u007f\u001a\u0006\b\u0080\u0001\u0010\u0081\u0001R\u001e\u0010\u0085\u0001\u001a\u00020}8\u0000X\u0080\u0004¢\u0006\u000f\n\u0005\b\u0083\u0001\u0010\u007f\u001a\u0006\b\u0084\u0001\u0010\u0081\u0001R\u001c\u0010\u0089\u0001\u001a\u0005\u0018\u00010\u0086\u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0087\u0001\u0010\u0088\u0001R\u0018\u0010\u008b\u0001\u001a\u0002038\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b/\u0010\u008a\u0001R'\u0010\u008d\u0001\u001a\u0011\u0012\u0004\u0012\u00020)\u0012\u0005\u0012\u00030\u0086\u0001\u0018\u00010\u00108\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\u008c\u0001\u0010\\R\u001a\u0010\u0091\u0001\u001a\u00030\u008e\u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008f\u0001\u0010\u0090\u0001R\u001f\u0010\u0092\u0001\u001a\n\u0012\u0004\u0012\u00020j\u0018\u00010\r8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bG\u0010ZR\u0017\u0010\u0095\u0001\u001a\u00030\u0093\u00018\u0002X\u0082\u0004¢\u0006\u0007\n\u0005\b:\u0010\u0094\u0001R\u0018\u0010\u0099\u0001\u001a\u00030\u0096\u00018\u0002X\u0082\u0004¢\u0006\b\n\u0006\b\u0097\u0001\u0010\u0098\u0001¨\u0006\u009c\u0001"}, d2 = {"Lio/sentry/android/replay/ReplayIntegration;", "Lio/sentry/k1;", "Ljava/io/Closeable;", "Lio/sentry/android/replay/r;", "Lio/sentry/android/replay/gestures/c;", "Lio/sentry/u3;", "Lio/sentry/k0$b;", "Lio/sentry/transport/a0$b;", "Lio/sentry/android/replay/t;", "Landroid/content/Context;", "context", "Lio/sentry/transport/p;", "dateProvider", "Lkotlin/Function0;", "Lio/sentry/android/replay/g;", "recorderProvider", "Lkotlin/Function1;", "Lio/sentry/protocol/x;", "Lio/sentry/android/replay/i;", "replayCacheProvider", "<init>", "(Landroid/content/Context;Lio/sentry/transport/p;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function1;)V", "(Landroid/content/Context;Lio/sentry/transport/p;)V", "", "A1", "()V", "x1", "E0", "y1", "B1", "", "unfinishedReplayId", "F0", "(Ljava/lang/String;)V", "J0", "Lio/sentry/w0;", "scopes", "Lio/sentry/k7;", "options", "h", "(Lio/sentry/w0;Lio/sentry/k7;)V", "", "Z0", "()Z", ViewProps.START, "i", "isTerminating", "B", "(Ljava/lang/Boolean;)V", "V0", "()Lio/sentry/protocol/x;", "Lio/sentry/t3;", "converter", "x", "(Lio/sentry/t3;)V", "L", "()Lio/sentry/t3;", "b", "F", "stop", "Landroid/graphics/Bitmap;", "bitmap", "n", "(Landroid/graphics/Bitmap;)V", "close", "Lio/sentry/k0$a;", "status", "a", "(Lio/sentry/k0$a;)V", "Lio/sentry/transport/a0;", "rateLimiter", "E", "(Lio/sentry/transport/a0;)V", "Landroid/view/MotionEvent;", "event", "onTouchEvent", "(Landroid/view/MotionEvent;)V", "", "width", "height", "l", "(II)V", "Lio/sentry/android/replay/s;", "config", "m", "(Lio/sentry/android/replay/s;)V", "d", "Landroid/content/Context;", "e", "Lio/sentry/transport/p;", "Lkotlin/jvm/functions/Function0;", "o", "Lkotlin/jvm/functions/Function1;", "p", "Lio/sentry/k0$a;", "lastKnownConnectionStatus", "q", "Z", "debugMaskingEnabled", "r", "Lio/sentry/k7;", "s", "Lio/sentry/w0;", "t", "Lio/sentry/android/replay/g;", "recorder", "Lio/sentry/android/replay/gestures/a;", "u", "Lio/sentry/android/replay/gestures/a;", "gestureRecorder", "Lio/sentry/util/b0;", "v", "Lkotlin/Lazy;", "L0", "()Lio/sentry/util/b0;", "random", "Lio/sentry/android/replay/p;", "w", "Y0", "()Lio/sentry/android/replay/p;", "rootViewsSpy", "Lio/sentry/android/replay/util/i;", "O0", "()Lio/sentry/android/replay/util/i;", "replayExecutor", "Ljava/util/concurrent/atomic/AtomicBoolean;", "y", "Ljava/util/concurrent/atomic/AtomicBoolean;", "isEnabled$sentry_android_replay_release", "()Ljava/util/concurrent/atomic/AtomicBoolean;", "isEnabled", "z", "isManualPause$sentry_android_replay_release", "isManualPause", "Lio/sentry/android/replay/capture/h;", "A", "Lio/sentry/android/replay/capture/h;", "captureStrategy", "Lio/sentry/t3;", "replayBreadcrumbConverter", "C", "replayCaptureStrategyProvider", "Lio/sentry/android/replay/util/g;", "D", "Lio/sentry/android/replay/util/g;", "mainLooperHandler", "gestureRecorderProvider", "Lio/sentry/util/a;", "Lio/sentry/util/a;", "lifecycleLock", "Lio/sentry/android/replay/m;", "G", "Lio/sentry/android/replay/m;", "lifecycle", "H", "c", "sentry-android-replay_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReplayIntegration.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReplayIntegration.kt\nio/sentry/android/replay/ReplayIntegration\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,515:1\n13309#2,2:516\n*S KotlinDebug\n*F\n+ 1 ReplayIntegration.kt\nio/sentry/android/replay/ReplayIntegration\n*L\n406#1:516,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ReplayIntegration implements k1, Closeable, r, io.sentry.android.replay.gestures.c, u3, k0.b, a0.b, t {
    private static final a H = new a(null);
    public static final int I = 8;
    private io.sentry.android.replay.capture.h A;
    private t3 B;
    private Function1 C;
    private io.sentry.android.replay.util.g D;
    private Function0 E;
    private final io.sentry.util.a F;
    private final m G;

    /* renamed from: d  reason: collision with root package name */
    private final Context f28918d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.transport.p f28919e;

    /* renamed from: i  reason: collision with root package name */
    private final Function0 f28920i;

    /* renamed from: o  reason: collision with root package name */
    private final Function1 f28921o;

    /* renamed from: p  reason: collision with root package name */
    private volatile k0.a f28922p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f28923q;

    /* renamed from: r  reason: collision with root package name */
    private k7 f28924r;

    /* renamed from: s  reason: collision with root package name */
    private w0 f28925s;

    /* renamed from: t  reason: collision with root package name */
    private io.sentry.android.replay.g f28926t;

    /* renamed from: u  reason: collision with root package name */
    private io.sentry.android.replay.gestures.a f28927u;

    /* renamed from: v  reason: collision with root package name */
    private final Lazy f28928v;

    /* renamed from: w  reason: collision with root package name */
    private final Lazy f28929w;

    /* renamed from: x  reason: collision with root package name */
    private final Lazy f28930x;

    /* renamed from: y  reason: collision with root package name */
    private final AtomicBoolean f28931y;

    /* renamed from: z  reason: collision with root package name */
    private final AtomicBoolean f28932z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements io.sentry.hints.c {
        @Override // io.sentry.hints.c
        public boolean a() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f28933a;

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable r10) {
            Intrinsics.checkNotNullParameter(r10, "r");
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryReplayIntegration-");
            int i10 = this.f28933a;
            this.f28933a = i10 + 1;
            sb2.append(i10);
            Thread thread = new Thread(r10, sb2.toString());
            thread.setDaemon(true);
            return thread;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {
        d() {
            super(1);
        }

        public final void a(Date newTimestamp) {
            Integer num;
            Intrinsics.checkNotNullParameter(newTimestamp, "newTimestamp");
            io.sentry.android.replay.capture.h hVar = ReplayIntegration.this.A;
            if (hVar != null) {
                io.sentry.android.replay.capture.h hVar2 = ReplayIntegration.this.A;
                if (hVar2 != null) {
                    num = Integer.valueOf(hVar2.d());
                } else {
                    num = null;
                }
                Intrinsics.checkNotNull(num);
                hVar.c(num.intValue() + 1);
            }
            io.sentry.android.replay.capture.h hVar3 = ReplayIntegration.this.A;
            if (hVar3 == null) {
                return;
            }
            hVar3.j(newTimestamp);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((Date) obj);
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class e extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Bitmap f28935d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f28936e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Bitmap bitmap, Ref.ObjectRef objectRef) {
            super(2);
            this.f28935d = bitmap;
            this.f28936e = objectRef;
        }

        public final void a(i onScreenshotRecorded, long j10) {
            Intrinsics.checkNotNullParameter(onScreenshotRecorded, "$this$onScreenshotRecorded");
            onScreenshotRecorded.B(this.f28935d, j10, (String) this.f28936e.element);
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((i) obj, ((Number) obj2).longValue());
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class f extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final f f28937d = new f();

        f() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final b0 invoke() {
            return new b0();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class g extends Lambda implements Function0 {
        g() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final io.sentry.android.replay.util.i invoke() {
            ScheduledExecutorService newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor(new c());
            Intrinsics.checkNotNull(newSingleThreadScheduledExecutor);
            k7 k7Var = ReplayIntegration.this.f28924r;
            if (k7Var == null) {
                Intrinsics.throwUninitializedPropertyAccessException("options");
                k7Var = null;
            }
            return new io.sentry.android.replay.util.i(newSingleThreadScheduledExecutor, k7Var);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class h extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final h f28939d = new h();

        h() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final p invoke() {
            return p.f29140p.b();
        }
    }

    static {
        u6.d().b("maven:io.sentry:sentry-android-replay", "8.27.0");
    }

    public ReplayIntegration(Context context, io.sentry.transport.p dateProvider, Function0 function0, Function1 function1) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        this.f28918d = context;
        this.f28919e = dateProvider;
        this.f28920i = function0;
        this.f28921o = function1;
        this.f28922p = k0.a.UNKNOWN;
        this.f28928v = jr.l.b(f.f28937d);
        this.f28929w = jr.l.b(h.f28939d);
        this.f28930x = jr.l.b(new g());
        this.f28931y = new AtomicBoolean(false);
        this.f28932z = new AtomicBoolean(false);
        k2 b10 = k2.b();
        Intrinsics.checkNotNullExpressionValue(b10, "getInstance(...)");
        this.B = b10;
        this.D = new io.sentry.android.replay.util.g(null, 1, null);
        this.F = new io.sentry.util.a();
        this.G = new m();
    }

    private final void A1() {
        w0 w0Var;
        w0 w0Var2;
        a0 j10;
        a0 j11;
        a1 a10 = this.F.a();
        try {
            if (this.f28931y.get()) {
                m mVar = this.G;
                n nVar = n.RESUMED;
                if (mVar.b(nVar)) {
                    if (!this.f28932z.get() && this.f28922p != k0.a.DISCONNECTED && (((w0Var = this.f28925s) == null || (j11 = w0Var.j()) == null || !j11.L(io.sentry.j.All)) && ((w0Var2 = this.f28925s) == null || (j10 = w0Var2.j()) == null || !j10.L(io.sentry.j.Replay)))) {
                        this.G.d(nVar);
                        io.sentry.android.replay.capture.h hVar = this.A;
                        if (hVar != null) {
                            hVar.i();
                        }
                        io.sentry.android.replay.g gVar = this.f28926t;
                        if (gVar != null) {
                            gVar.i();
                            Unit unit = Unit.f33074a;
                        }
                        vr.a.a(a10, null);
                        return;
                    }
                    vr.a.a(a10, null);
                    return;
                }
            }
            vr.a.a(a10, null);
        } finally {
        }
    }

    private final void B1() {
        if (this.f28926t instanceof io.sentry.android.replay.e) {
            CopyOnWriteArrayList n10 = Y0().n();
            io.sentry.android.replay.g gVar = this.f28926t;
            Intrinsics.checkNotNull(gVar, "null cannot be cast to non-null type io.sentry.android.replay.OnRootViewsChangedListener");
            n10.remove((io.sentry.android.replay.e) gVar);
        }
        Y0().n().remove(this.f28927u);
    }

    private final void E0() {
        w0 w0Var;
        w0 w0Var2;
        a0 j10;
        a0 j11;
        if (this.A instanceof io.sentry.android.replay.capture.m) {
            if (this.f28922p != k0.a.DISCONNECTED && (((w0Var = this.f28925s) == null || (j11 = w0Var.j()) == null || !j11.L(io.sentry.j.All)) && ((w0Var2 = this.f28925s) == null || (j10 = w0Var2.j()) == null || !j10.L(io.sentry.j.Replay)))) {
                return;
            }
            x1();
        }
    }

    private final void F0(String str) {
        File[] listFiles;
        k7 k7Var = this.f28924r;
        if (k7Var == null) {
            Intrinsics.throwUninitializedPropertyAccessException("options");
            k7Var = null;
        }
        String cacheDirPath = k7Var.getCacheDirPath();
        if (cacheDirPath != null && (listFiles = new File(cacheDirPath).listFiles()) != null) {
            Intrinsics.checkNotNull(listFiles);
            for (File file : listFiles) {
                String name = file.getName();
                Intrinsics.checkNotNull(name);
                if (StringsKt.P(name, "replay_", false, 2, null)) {
                    String xVar = V0().toString();
                    Intrinsics.checkNotNullExpressionValue(xVar, "toString(...)");
                    if (!StringsKt.V(name, xVar, false, 2, null) && (StringsKt.k0(str) || !StringsKt.V(name, str, false, 2, null))) {
                        io.sentry.util.i.a(file);
                    }
                }
            }
        }
    }

    static /* synthetic */ void G0(ReplayIntegration replayIntegration, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = "";
        }
        replayIntegration.F0(str);
    }

    private final void J0() {
        k7 k7Var = this.f28924r;
        k7 k7Var2 = null;
        if (k7Var == null) {
            Intrinsics.throwUninitializedPropertyAccessException("options");
            k7Var = null;
        }
        z0 executorService = k7Var.getExecutorService();
        Intrinsics.checkNotNullExpressionValue(executorService, "getExecutorService(...)");
        k7 k7Var3 = this.f28924r;
        if (k7Var3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("options");
        } else {
            k7Var2 = k7Var3;
        }
        io.sentry.android.replay.util.e.b(executorService, k7Var2, "ReplayIntegration.finalize_previous_replay", new Runnable() { // from class: io.sentry.android.replay.k
            @Override // java.lang.Runnable
            public final void run() {
                ReplayIntegration.K0(ReplayIntegration.this);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void K0(ReplayIntegration replayIntegration) {
        List list;
        k7 k7Var;
        k7 k7Var2 = replayIntegration.f28924r;
        if (k7Var2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("options");
            k7Var2 = null;
        }
        io.sentry.cache.u findPersistingScopeObserver = k7Var2.findPersistingScopeObserver();
        if (findPersistingScopeObserver != null) {
            k7 k7Var3 = replayIntegration.f28924r;
            if (k7Var3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("options");
                k7Var3 = null;
            }
            String str = (String) findPersistingScopeObserver.D(k7Var3, "replay.json", String.class);
            if (str != null) {
                io.sentry.protocol.x xVar = new io.sentry.protocol.x(str);
                if (Intrinsics.areEqual(xVar, io.sentry.protocol.x.f30052e)) {
                    G0(replayIntegration, null, 1, null);
                    return;
                }
                i.a aVar = i.f29113w;
                k7 k7Var4 = replayIntegration.f28924r;
                if (k7Var4 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("options");
                    k7Var4 = null;
                }
                io.sentry.android.replay.d c10 = aVar.c(k7Var4, xVar, replayIntegration.f28921o);
                if (c10 == null) {
                    G0(replayIntegration, null, 1, null);
                    return;
                }
                k7 k7Var5 = replayIntegration.f28924r;
                if (k7Var5 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("options");
                    k7Var5 = null;
                }
                Object D = findPersistingScopeObserver.D(k7Var5, "breadcrumbs.json", List.class);
                if (D instanceof List) {
                    list = (List) D;
                } else {
                    list = null;
                }
                h.a aVar2 = io.sentry.android.replay.capture.h.f29063a;
                w0 w0Var = replayIntegration.f28925s;
                k7 k7Var6 = replayIntegration.f28924r;
                if (k7Var6 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("options");
                    k7Var = null;
                } else {
                    k7Var = k7Var6;
                }
                h.c c11 = aVar2.c(w0Var, k7Var, c10.b(), c10.h(), xVar, c10.d(), c10.e().c(), c10.e().d(), c10.f(), c10.a(), c10.e().b(), c10.e().a(), c10.g(), list, new LinkedList(c10.c()));
                if (c11 instanceof h.c.a) {
                    Hint e10 = io.sentry.util.n.e(new b());
                    w0 w0Var2 = replayIntegration.f28925s;
                    Intrinsics.checkNotNull(e10);
                    ((h.c.a) c11).a(w0Var2, e10);
                }
                replayIntegration.F0(str);
                return;
            }
        }
        G0(replayIntegration, null, 1, null);
    }

    private final b0 L0() {
        return (b0) this.f28928v.getValue();
    }

    private final io.sentry.android.replay.util.i O0() {
        return (io.sentry.android.replay.util.i) this.f28930x.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Multi-variable type inference failed */
    public static final void e1(Ref.ObjectRef objectRef, IScope it) {
        Intrinsics.checkNotNullParameter(it, "it");
        String h10 = it.h();
        T t10 = 0;
        if (h10 != null) {
            t10 = StringsKt.Z0(h10, '.', null, 2, null);
        }
        objectRef.element = t10;
    }

    private final void x1() {
        a1 a10 = this.F.a();
        try {
            if (this.f28931y.get()) {
                m mVar = this.G;
                n nVar = n.PAUSED;
                if (mVar.b(nVar)) {
                    io.sentry.android.replay.g gVar = this.f28926t;
                    if (gVar != null) {
                        gVar.b();
                    }
                    io.sentry.android.replay.capture.h hVar = this.A;
                    if (hVar != null) {
                        hVar.b();
                    }
                    this.G.d(nVar);
                    Unit unit = Unit.f33074a;
                    vr.a.a(a10, null);
                    return;
                }
            }
            vr.a.a(a10, null);
        } finally {
        }
    }

    private final void y1() {
        if (this.f28926t instanceof io.sentry.android.replay.e) {
            CopyOnWriteArrayList n10 = Y0().n();
            io.sentry.android.replay.g gVar = this.f28926t;
            Intrinsics.checkNotNull(gVar, "null cannot be cast to non-null type io.sentry.android.replay.OnRootViewsChangedListener");
            n10.add((io.sentry.android.replay.e) gVar);
        }
        Y0().n().add(this.f28927u);
    }

    @Override // io.sentry.u3
    public void B(Boolean bool) {
        io.sentry.protocol.x xVar;
        if (this.f28931y.get() && Z0()) {
            io.sentry.protocol.x xVar2 = io.sentry.protocol.x.f30052e;
            io.sentry.android.replay.capture.h hVar = this.A;
            io.sentry.android.replay.capture.h hVar2 = null;
            k7 k7Var = null;
            if (hVar != null) {
                xVar = hVar.a();
            } else {
                xVar = null;
            }
            if (xVar2.equals(xVar)) {
                k7 k7Var2 = this.f28924r;
                if (k7Var2 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("options");
                } else {
                    k7Var = k7Var2;
                }
                k7Var.getLogger().c(SentryLevel.DEBUG, "Replay id is not set, not capturing for event", new Object[0]);
                return;
            }
            io.sentry.android.replay.capture.h hVar3 = this.A;
            if (hVar3 != null) {
                hVar3.e(Intrinsics.areEqual(bool, Boolean.TRUE), new d());
            }
            io.sentry.android.replay.capture.h hVar4 = this.A;
            if (hVar4 != null) {
                hVar2 = hVar4.g();
            }
            this.A = hVar2;
        }
    }

    @Override // io.sentry.transport.a0.b
    public void E(a0 rateLimiter) {
        Intrinsics.checkNotNullParameter(rateLimiter, "rateLimiter");
        if (!(this.A instanceof io.sentry.android.replay.capture.m)) {
            return;
        }
        if (!rateLimiter.L(io.sentry.j.All) && !rateLimiter.L(io.sentry.j.Replay)) {
            A1();
        } else {
            x1();
        }
    }

    @Override // io.sentry.u3
    public boolean F() {
        return this.f28923q;
    }

    @Override // io.sentry.u3
    public t3 L() {
        return this.B;
    }

    public io.sentry.protocol.x V0() {
        io.sentry.protocol.x a10;
        io.sentry.android.replay.capture.h hVar = this.A;
        if (hVar != null && (a10 = hVar.a()) != null) {
            return a10;
        }
        io.sentry.protocol.x EMPTY_ID = io.sentry.protocol.x.f30052e;
        Intrinsics.checkNotNullExpressionValue(EMPTY_ID, "EMPTY_ID");
        return EMPTY_ID;
    }

    public final p Y0() {
        return (p) this.f28929w.getValue();
    }

    public boolean Z0() {
        if (this.G.a().compareTo(n.STARTED) >= 0 && this.G.a().compareTo(n.STOPPED) < 0) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.k0.b
    public void a(k0.a status) {
        Intrinsics.checkNotNullParameter(status, "status");
        this.f28922p = status;
        if (!(this.A instanceof io.sentry.android.replay.capture.m)) {
            return;
        }
        if (status == k0.a.DISCONNECTED) {
            x1();
        } else {
            A1();
        }
    }

    @Override // io.sentry.u3
    public void b() {
        this.f28932z.set(true);
        x1();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a0 j10;
        a1 a10 = this.F.a();
        try {
            if (this.f28931y.get()) {
                m mVar = this.G;
                n nVar = n.CLOSED;
                if (mVar.b(nVar)) {
                    k7 k7Var = this.f28924r;
                    if (k7Var == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("options");
                        k7Var = null;
                    }
                    k7Var.getConnectionStatusProvider().Z1(this);
                    w0 w0Var = this.f28925s;
                    if (w0Var != null && (j10 = w0Var.j()) != null) {
                        j10.F0(this);
                    }
                    stop();
                    io.sentry.android.replay.g gVar = this.f28926t;
                    if (gVar != null) {
                        gVar.close();
                    }
                    this.f28926t = null;
                    Y0().close();
                    O0().shutdown();
                    this.G.d(nVar);
                    Unit unit = Unit.f33074a;
                    vr.a.a(a10, null);
                    return;
                }
            }
            vr.a.a(a10, null);
        } finally {
        }
    }

    @Override // io.sentry.k1
    public void h(w0 scopes, k7 options) {
        ReplayIntegration replayIntegration;
        k7 k7Var;
        io.sentry.android.replay.g vVar;
        io.sentry.android.replay.gestures.a aVar;
        Intrinsics.checkNotNullParameter(scopes, "scopes");
        Intrinsics.checkNotNullParameter(options, "options");
        this.f28924r = options;
        if (Build.VERSION.SDK_INT < 26) {
            options.getLogger().c(SentryLevel.INFO, "Session replay is only supported on API 26 and above", new Object[0]);
        } else if (!options.getSessionReplay().w() && !options.getSessionReplay().x()) {
            options.getLogger().c(SentryLevel.INFO, "Session replay is disabled, no sample rate specified", new Object[0]);
        } else {
            this.f28925s = scopes;
            Function0 function0 = this.f28920i;
            if (function0 != null && (vVar = (io.sentry.android.replay.g) function0.invoke()) != null) {
                replayIntegration = this;
                k7Var = options;
            } else {
                replayIntegration = this;
                k7Var = options;
                vVar = new v(k7Var, replayIntegration, this, this.D, O0());
            }
            replayIntegration.f28926t = vVar;
            Function0 function02 = replayIntegration.E;
            if (function02 == null || (aVar = (io.sentry.android.replay.gestures.a) function02.invoke()) == null) {
                aVar = new io.sentry.android.replay.gestures.a(k7Var, this);
            }
            replayIntegration.f28927u = aVar;
            replayIntegration.f28931y.set(true);
            k7Var.getConnectionStatusProvider().M1(this);
            a0 j10 = scopes.j();
            if (j10 != null) {
                j10.x(this);
            }
            io.sentry.util.p.a("Replay");
            J0();
        }
    }

    @Override // io.sentry.u3
    public void i() {
        this.f28932z.set(false);
        A1();
    }

    @Override // io.sentry.android.replay.t
    public void l(int i10, int i11) {
        if (this.f28931y.get() && Z0()) {
            k7 k7Var = this.f28924r;
            k7 k7Var2 = null;
            if (k7Var == null) {
                Intrinsics.throwUninitializedPropertyAccessException("options");
                k7Var = null;
            }
            if (k7Var.getSessionReplay().y()) {
                s.a aVar = s.f29158g;
                Context context = this.f28918d;
                k7 k7Var3 = this.f28924r;
                if (k7Var3 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("options");
                } else {
                    k7Var2 = k7Var3;
                }
                m7 sessionReplay = k7Var2.getSessionReplay();
                Intrinsics.checkNotNullExpressionValue(sessionReplay, "getSessionReplay(...)");
                m(aVar.b(context, sessionReplay, i10, i11));
            }
        }
    }

    public final void m(s config) {
        io.sentry.android.replay.g gVar;
        Intrinsics.checkNotNullParameter(config, "config");
        if (this.f28931y.get() && Z0()) {
            io.sentry.android.replay.capture.h hVar = this.A;
            if (hVar != null) {
                hVar.m(config);
            }
            io.sentry.android.replay.g gVar2 = this.f28926t;
            if (gVar2 != null) {
                gVar2.m(config);
            }
            if (this.G.a() == n.PAUSED && (gVar = this.f28926t) != null) {
                gVar.b();
            }
        }
    }

    @Override // io.sentry.android.replay.r
    public void n(Bitmap bitmap) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        w0 w0Var = this.f28925s;
        if (w0Var != null) {
            w0Var.o(new b4() { // from class: io.sentry.android.replay.l
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    ReplayIntegration.e1(Ref.ObjectRef.this, iScope);
                }
            });
        }
        io.sentry.android.replay.capture.h hVar = this.A;
        if (hVar != null) {
            hVar.f(bitmap, new e(bitmap, objectRef));
        }
        E0();
    }

    @Override // io.sentry.android.replay.gestures.c
    public void onTouchEvent(MotionEvent event) {
        io.sentry.android.replay.capture.h hVar;
        Intrinsics.checkNotNullParameter(event, "event");
        if (this.f28931y.get() && this.G.c() && (hVar = this.A) != null) {
            hVar.onTouchEvent(event);
        }
    }

    @Override // io.sentry.u3
    public void start() {
        io.sentry.android.replay.capture.h fVar;
        k7 k7Var;
        k7 k7Var2;
        a1 a10 = this.F.a();
        try {
            if (!this.f28931y.get()) {
                vr.a.a(a10, null);
                return;
            }
            m mVar = this.G;
            n nVar = n.STARTED;
            if (!mVar.b(nVar)) {
                k7 k7Var3 = this.f28924r;
                if (k7Var3 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("options");
                    k7Var3 = null;
                }
                k7Var3.getLogger().c(SentryLevel.DEBUG, "Session replay is already being recorded, not starting a new one", new Object[0]);
                vr.a.a(a10, null);
                return;
            }
            b0 L0 = L0();
            k7 k7Var4 = this.f28924r;
            if (k7Var4 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("options");
                k7Var4 = null;
            }
            boolean a11 = io.sentry.android.replay.util.k.a(L0, k7Var4.getSessionReplay().q());
            if (!a11) {
                k7 k7Var5 = this.f28924r;
                if (k7Var5 == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("options");
                    k7Var5 = null;
                }
                if (!k7Var5.getSessionReplay().x()) {
                    k7 k7Var6 = this.f28924r;
                    if (k7Var6 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("options");
                        k7Var6 = null;
                    }
                    k7Var6.getLogger().c(SentryLevel.INFO, "Session replay is not started, full session was not sampled and onErrorSampleRate is not specified", new Object[0]);
                    vr.a.a(a10, null);
                    return;
                }
            }
            this.G.d(nVar);
            Function1 function1 = this.C;
            if (function1 == null || (fVar = (io.sentry.android.replay.capture.h) function1.invoke(Boolean.valueOf(a11))) == null) {
                if (a11) {
                    k7 k7Var7 = this.f28924r;
                    if (k7Var7 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("options");
                        k7Var2 = null;
                    } else {
                        k7Var2 = k7Var7;
                    }
                    fVar = new io.sentry.android.replay.capture.m(k7Var2, this.f28925s, this.f28919e, O0(), this.f28921o);
                } else {
                    k7 k7Var8 = this.f28924r;
                    if (k7Var8 == null) {
                        Intrinsics.throwUninitializedPropertyAccessException("options");
                        k7Var = null;
                    } else {
                        k7Var = k7Var8;
                    }
                    fVar = new io.sentry.android.replay.capture.f(k7Var, this.f28925s, this.f28919e, L0(), O0(), this.f28921o);
                }
            }
            this.A = fVar;
            io.sentry.android.replay.g gVar = this.f28926t;
            if (gVar != null) {
                gVar.start();
            }
            io.sentry.android.replay.capture.h hVar = this.A;
            if (hVar != null) {
                h.b.a(hVar, 0, null, null, 7, null);
            }
            y1();
            Unit unit = Unit.f33074a;
            vr.a.a(a10, null);
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                vr.a.a(a10, th2);
                throw th3;
            }
        }
    }

    @Override // io.sentry.u3
    public void stop() {
        a1 a10 = this.F.a();
        try {
            if (this.f28931y.get()) {
                m mVar = this.G;
                n nVar = n.STOPPED;
                if (mVar.b(nVar)) {
                    B1();
                    io.sentry.android.replay.g gVar = this.f28926t;
                    if (gVar != null) {
                        gVar.reset();
                    }
                    io.sentry.android.replay.g gVar2 = this.f28926t;
                    if (gVar2 != null) {
                        gVar2.stop();
                    }
                    io.sentry.android.replay.gestures.a aVar = this.f28927u;
                    if (aVar != null) {
                        aVar.b();
                    }
                    io.sentry.android.replay.capture.h hVar = this.A;
                    if (hVar != null) {
                        hVar.stop();
                    }
                    this.A = null;
                    this.G.d(nVar);
                    Unit unit = Unit.f33074a;
                    vr.a.a(a10, null);
                    return;
                }
            }
            vr.a.a(a10, null);
        } finally {
        }
    }

    @Override // io.sentry.u3
    public void x(t3 converter) {
        Intrinsics.checkNotNullParameter(converter, "converter");
        this.B = converter;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ReplayIntegration(Context context, io.sentry.transport.p dateProvider) {
        this(io.sentry.android.replay.util.b.a(context), dateProvider, null, null);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
    }
}
