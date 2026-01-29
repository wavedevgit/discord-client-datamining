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
    public static final a f44580k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f44581l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f44582a;

    /* renamed from: b  reason: collision with root package name */
    private final l f44583b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44584c;

    /* renamed from: d  reason: collision with root package name */
    private final int f44585d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f44586e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f44587f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f44588g;

    /* renamed from: h  reason: collision with root package name */
    private File f44589h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f44590i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f44591j;

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
        int f44592d;

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
            if (this.f44592d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f44590i.start();
                } catch (IllegalStateException unused) {
                    r.this.f44590i.reset();
                    r.this.k(false);
                    r.this.f44590i.start();
                }
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f44594d;

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
            if (this.f44594d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f44590i.stop();
                    file = r.this.f44589h;
                } catch (RuntimeException unused) {
                    r.this.f44589h.delete();
                    file = null;
                }
                r.this.f44590i.release();
                r rVar = r.this;
                rVar.f44590i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f44582a = context;
        this.f44583b = cameraChoice;
        this.f44584c = i10;
        this.f44585d = i11;
        this.f44586e = z10;
        if (f44581l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f44588g = surface;
        this.f44589h = i();
        this.f44590i = j();
    }

    private final int g() {
        int width = this.f44583b.f().getWidth() * this.f44583b.f().getHeight();
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
        File cacheDir = this.f44582a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f44582a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f44589h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (jp.f.f(this.f44582a) && this.f44586e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f44590i.setVideoSource(2);
        if (z11) {
            this.f44590i.setAudioSource(1);
        }
        this.f44590i.setOutputFormat(2);
        this.f44590i.setVideoFrameRate(this.f44584c);
        this.f44590i.setVideoSize(this.f44583b.f().getWidth(), this.f44583b.f().getHeight());
        this.f44590i.setVideoEncoder(2);
        this.f44590i.setVideoEncodingBitRate(g());
        if (z11) {
            mn.c a10 = mn.d.a();
            if (a10 != null) {
                this.f44590i.setAudioSamplingRate(a10.a());
                this.f44590i.setAudioChannels(1);
            }
            this.f44590i.setAudioEncoder(3);
        }
        this.f44590i.setOrientationHint(this.f44585d);
        boolean z12 = f44581l;
        if (z12) {
            this.f44590i.setInputSurface(h());
        }
        this.f44590i.setOutputFile(this.f44589h.getAbsolutePath());
        this.f44590i.prepare();
        if (!z12 && !z10 && (function0 = this.f44587f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f44590i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f44589h.delete();
            throw th2;
        }
        this.f44589h.delete();
    }

    public final Surface h() {
        Surface surface = this.f44588g;
        if (surface == null) {
            Surface surface2 = this.f44590i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f44591j) {
            return;
        }
        this.f44591j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f44587f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = gs.g.g(m0.a(), new b(null), continuation);
        if (g10 == or.b.f()) {
            return g10;
        }
        return Unit.f33282a;
    }

    public final Object p(Continuation continuation) {
        return gs.g.g(m0.a(), new c(null), continuation);
    }
}
