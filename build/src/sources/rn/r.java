package rn;

import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaRecorder;
import android.os.Build;
import android.view.Surface;
import java.io.File;
import js.m0;
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
    public static final a f49019k = new a(null);

    /* renamed from: l  reason: collision with root package name */
    private static final boolean f49020l = true;

    /* renamed from: a  reason: collision with root package name */
    private final Context f49021a;

    /* renamed from: b  reason: collision with root package name */
    private final l f49022b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49023c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49024d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49025e;

    /* renamed from: f  reason: collision with root package name */
    private Function0 f49026f;

    /* renamed from: g  reason: collision with root package name */
    private final Surface f49027g;

    /* renamed from: h  reason: collision with root package name */
    private File f49028h;

    /* renamed from: i  reason: collision with root package name */
    private MediaRecorder f49029i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f49030j;

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
        int f49031d;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f49031d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f49029i.start();
                } catch (IllegalStateException unused) {
                    r.this.f49029i.reset();
                    r.this.k(false);
                    r.this.f49029i.start();
                }
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f49033d;

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
            rr.b.f();
            if (this.f49033d == 0) {
                kotlin.c.b(obj);
                try {
                    r.this.f49029i.stop();
                    file = r.this.f49028h;
                } catch (RuntimeException unused) {
                    r.this.f49028h.delete();
                    file = null;
                }
                r.this.f49029i.release();
                r rVar = r.this;
                rVar.f49029i = rVar.j();
                r.this.k(false);
                return file;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public r(Context context, l cameraChoice, int i10, int i11, boolean z10) {
        Surface surface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraChoice, "cameraChoice");
        this.f49021a = context;
        this.f49022b = cameraChoice;
        this.f49023c = i10;
        this.f49024d = i11;
        this.f49025e = z10;
        if (f49020l) {
            surface = MediaCodec.createPersistentInputSurface();
        } else {
            surface = null;
        }
        this.f49027g = surface;
        this.f49028h = i();
        this.f49029i = j();
    }

    private final int g() {
        int width = this.f49022b.f().getWidth() * this.f49022b.f().getHeight();
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
        File cacheDir = this.f49021a.getCacheDir();
        long currentTimeMillis = System.currentTimeMillis();
        return new File(cacheDir, "video_recording_" + currentTimeMillis + ".mp4");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final MediaRecorder j() {
        if (Build.VERSION.SDK_INT >= 31) {
            q.a();
            return p.a(this.f49021a);
        }
        return new MediaRecorder();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(boolean z10) {
        if (!z10) {
            this.f49028h = i();
        }
        m(z10);
    }

    private final void m(boolean z10) {
        boolean z11;
        Function0 function0;
        if (mp.f.f(this.f49021a) && this.f49025e) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f49029i.setVideoSource(2);
        if (z11) {
            this.f49029i.setAudioSource(1);
        }
        this.f49029i.setOutputFormat(2);
        this.f49029i.setVideoFrameRate(this.f49023c);
        this.f49029i.setVideoSize(this.f49022b.f().getWidth(), this.f49022b.f().getHeight());
        this.f49029i.setVideoEncoder(2);
        this.f49029i.setVideoEncodingBitRate(g());
        if (z11) {
            pn.c a10 = pn.d.a();
            if (a10 != null) {
                this.f49029i.setAudioSamplingRate(a10.a());
                this.f49029i.setAudioChannels(1);
            }
            this.f49029i.setAudioEncoder(3);
        }
        this.f49029i.setOrientationHint(this.f49024d);
        boolean z12 = f49020l;
        if (z12) {
            this.f49029i.setInputSurface(h());
        }
        this.f49029i.setOutputFile(this.f49028h.getAbsolutePath());
        this.f49029i.prepare();
        if (!z12 && !z10 && (function0 = this.f49026f) != null) {
            function0.invoke();
        }
    }

    public final void f() {
        try {
            h().release();
        } catch (RuntimeException unused) {
        }
        try {
            this.f49029i.stop();
        } catch (RuntimeException unused2) {
        } catch (Throwable th2) {
            this.f49028h.delete();
            throw th2;
        }
        this.f49028h.delete();
    }

    public final Surface h() {
        Surface surface = this.f49027g;
        if (surface == null) {
            Surface surface2 = this.f49029i.getSurface();
            Intrinsics.checkNotNullExpressionValue(surface2, "getSurface(...)");
            return surface2;
        }
        return surface;
    }

    public final void l() {
        if (this.f49030j) {
            return;
        }
        this.f49030j = true;
        k(true);
    }

    public final void n(Function0 function0) {
        this.f49026f = function0;
    }

    public final Object o(Continuation continuation) {
        Object g10 = js.g.g(m0.a(), new b(null), continuation);
        if (g10 == rr.b.f()) {
            return g10;
        }
        return Unit.f32464a;
    }

    public final Object p(Continuation continuation) {
        return js.g.g(m0.a(), new c(null), continuation);
    }
}
