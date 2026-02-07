package wn;

import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaRecorder;
import android.os.Build;
import android.view.Surface;
import java.io.File;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import os.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: k  reason: collision with root package name */
    public static final a f54069k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f54070l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f54071a;

    /* renamed from: b  reason: collision with root package name */
    private final l f54072b;

    /* renamed from: c  reason: collision with root package name */
    private final int f54073c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54074d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f54075e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f54076f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f54077g;

    /* renamed from: h  reason: collision with root package name */
    private File f54078h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f54079i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f54080j;

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
        int f54081d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f54081d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f54079i.start();
                } catch (IllegalStateException unused) {
                    r.this.f54079i.reset();
                    r.this.k(false);
                    r.this.f54079i.start();
                }
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54083d;

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
            wr.b.f();
            if (this.f54083d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f54079i.stop();
                    file = r.this.f54078h;
                } catch (RuntimeException unused) {
                    r.this.f54078h.delete();
                    file = null;
                }
                r.this.f54079i.release();
                r rVar = r.this;
                rVar.f54079i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f54071a = context;
        this.f54072b = cameraChoice;
        this.f54073c = i10;
        this.f54074d = i11;
        this.f54075e = z10;
        if (f54070l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f54077g = surface;
        this.f54078h = i();
        this.f54079i = j();
    }

    private final int g() {
        int width = this.f54072b.f().getWidth() * this.f54072b.f().getHeight();
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
        File cacheDir = this.f54071a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f54071a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f54078h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (rp.f.f(this.f54071a) && this.f54075e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f54079i.setVideoSource(2);
        if (z11) {
            this.f54079i.setAudioSource(1);
        }
        this.f54079i.setOutputFormat(2);
        this.f54079i.setVideoFrameRate(this.f54073c);
        this.f54079i.setVideoSize(this.f54072b.f().getWidth(), this.f54072b.f().getHeight());
        this.f54079i.setVideoEncoder(2);
        this.f54079i.setVideoEncodingBitRate(g());
        if (z11) {
            un.c a10 = un.d.a();
            if (a10 != null) {
                this.f54079i.setAudioSamplingRate(a10.a());
                this.f54079i.setAudioChannels(1);
            }
            this.f54079i.setAudioEncoder(3);
        }
        this.f54079i.setOrientationHint(this.f54074d);
        boolean z12 = f54070l;
        if (z12) {
            this.f54079i.setInputSurface(h());
        }
        this.f54079i.setOutputFile(this.f54078h.getAbsolutePath());
        this.f54079i.prepare();
        if (!z12 && !z10 && (function0 = this.f54076f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f54079i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f54078h.delete();
            throw th2;
        }
        this.f54078h.delete();
    }

    public final Surface h() {
        Surface surface = this.f54077g;
        if (surface == null) {
            Surface surface2 = this.f54079i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f54080j) {
            return;
        }
        this.f54080j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f54076f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = os.g.g(m0.a(), new b(null), continuation);
        if (g10 == wr.b.f()) {
            return g10;
        }
        return Unit.f32056a;
    }

    public final Object p(Continuation continuation) {
        return os.g.g(m0.a(), new c(null), continuation);
    }
}
