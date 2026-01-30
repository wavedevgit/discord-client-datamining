package on;

import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaRecorder;
import android.os.Build;
import android.view.Surface;
import gs.m0;
import java.io.File;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: k  reason: collision with root package name */
    public static final a f44596k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f44597l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f44598a;

    /* renamed from: b  reason: collision with root package name */
    private final l f44599b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44600c;

    /* renamed from: d  reason: collision with root package name */
    private final int f44601d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f44602e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f44603f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f44604g;

    /* renamed from: h  reason: collision with root package name */
    private File f44605h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f44606i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f44607j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44608d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f44608d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f44606i.start();
                } catch (IllegalStateException unused) {
                    r.this.f44606i.reset();
                    r.this.k(false);
                    r.this.f44606i.start();
                }
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44610d;

        c(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            File file;
            or.b.f();
            if (this.f44610d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f44606i.stop();
                    file = r.this.f44605h;
                } catch (RuntimeException unused) {
                    r.this.f44605h.delete();
                    file = null;
                }
                r.this.f44606i.release();
                r rVar = r.this;
                rVar.f44606i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f44598a = context;
        this.f44599b = cameraChoice;
        this.f44600c = i10;
        this.f44601d = i11;
        this.f44602e = z10;
        if (f44597l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f44604g = surface;
        this.f44605h = i();
        this.f44606i = j();
    }

    private final int g() {
        int width = this.f44599b.f().getWidth() * this.f44599b.f().getHeight();
        if (width <= 172800) {
            return 400000;
        }
        if (width <= 409920) {
            return 500000;
        }
        if (width <= 921600) {
            return 1500000;
        }
        if (width <= 2073600) {
            return 3000000;
        }
        if (width <= 3686400) {
            return 6000000;
        }
        return 10000000;
    }

    private final File i() {
        File cacheDir = this.f44598a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f44598a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f44605h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (jp.f.f(this.f44598a) && this.f44602e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f44606i.setVideoSource(2);
        if (z11) {
            this.f44606i.setAudioSource(1);
        }
        this.f44606i.setOutputFormat(2);
        this.f44606i.setVideoFrameRate(this.f44600c);
        this.f44606i.setVideoSize(this.f44599b.f().getWidth(), this.f44599b.f().getHeight());
        this.f44606i.setVideoEncoder(2);
        this.f44606i.setVideoEncodingBitRate(g());
        if (z11) {
            mn.c a10 = mn.d.a();
            if (a10 != null) {
                this.f44606i.setAudioSamplingRate(a10.a());
                this.f44606i.setAudioChannels(1);
            }
            this.f44606i.setAudioEncoder(3);
        }
        this.f44606i.setOrientationHint(this.f44601d);
        boolean z12 = f44597l;
        if (z12) {
            this.f44606i.setInputSurface(h());
        }
        this.f44606i.setOutputFile(this.f44605h.getAbsolutePath());
        this.f44606i.prepare();
        if (!z12 && !z10 && (function0 = this.f44603f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f44606i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f44605h.delete();
            throw th2;
        }
        this.f44605h.delete();
    }

    public final Surface h() {
        Surface surface = this.f44604g;
        if (surface == null) {
            Surface surface2 = this.f44606i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f44607j) {
            return;
        }
        this.f44607j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f44603f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = gs.g.g(m0.a(), new b(null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33298a;
    }

    public final Object p(Continuation continuation) {
        return gs.g.g(m0.a(), new c(null), continuation);
    }
}
