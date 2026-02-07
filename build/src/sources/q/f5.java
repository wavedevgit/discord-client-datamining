package q;

import a0.i2;
import a0.j1;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.params.InputConfiguration;
import android.hardware.camera2.params.StreamConfigurationMap;
import android.media.Image;
import android.media.ImageWriter;
import android.util.Size;
import android.view.Surface;
import androidx.camera.camera2.internal.compat.quirk.ZslDisablerQuirk;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f5 implements b5 {

    /* renamed from: a  reason: collision with root package name */
    private final r.a0 f45923a;

    /* renamed from: b  reason: collision with root package name */
    final i0.e f45924b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f45925c = false;

    /* renamed from: d  reason: collision with root package name */
    private boolean f45926d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f45927e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f45928f;

    /* renamed from: g  reason: collision with root package name */
    androidx.camera.core.q f45929g;

    /* renamed from: h  reason: collision with root package name */
    private a0.k f45930h;

    /* renamed from: i  reason: collision with root package name */
    private a0.w0 f45931i;

    /* renamed from: j  reason: collision with root package name */
    ImageWriter f45932j;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f5(r.a0 a0Var) {
        this.f45927e = false;
        this.f45928f = false;
        this.f45923a = a0Var;
        this.f45927e = g5.a(a0Var, 4);
        this.f45928f = androidx.camera.camera2.internal.compat.quirk.b.b(ZslDisablerQuirk.class) != null;
        this.f45924b = new i0.e(3, new i0.c() { // from class: q.d5
            @Override // i0.c
            public final void a(Object obj) {
                ((androidx.camera.core.n) obj).close();
            }
        });
    }

    public static /* synthetic */ void h(f5 f5Var, a0.j1 j1Var) {
        f5Var.getClass();
        try {
            androidx.camera.core.n b10 = j1Var.b();
            if (b10 != null) {
                f5Var.f45924b.d(b10);
            }
        } catch (IllegalStateException e10) {
            x.y0.c("ZslControlImpl", "Failed to acquire latest image IllegalStateException = " + e10.getMessage());
        }
    }

    private void j() {
        i0.e eVar = this.f45924b;
        while (!eVar.c()) {
            ((androidx.camera.core.n) eVar.a()).close();
        }
        a0.w0 w0Var = this.f45931i;
        if (w0Var != null) {
            androidx.camera.core.q qVar = this.f45929g;
            if (qVar != null) {
                w0Var.k().a(new c5(qVar), c0.a.d());
                this.f45929g = null;
            }
            w0Var.d();
            this.f45931i = null;
        }
        ImageWriter imageWriter = this.f45932j;
        if (imageWriter != null) {
            imageWriter.close();
            this.f45932j = null;
        }
    }

    private Map k(r.a0 a0Var) {
        StreamConfigurationMap streamConfigurationMap;
        int[] inputFormats;
        try {
            streamConfigurationMap = (StreamConfigurationMap) a0Var.a(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP);
        } catch (AssertionError e10) {
            x.y0.c("ZslControlImpl", "Failed to retrieve StreamConfigurationMap, error = " + e10.getMessage());
            streamConfigurationMap = null;
        }
        if (streamConfigurationMap != null && streamConfigurationMap.getInputFormats() != null) {
            HashMap hashMap = new HashMap();
            for (int i10 : streamConfigurationMap.getInputFormats()) {
                Size[] inputSizes = streamConfigurationMap.getInputSizes(i10);
                if (inputSizes != null) {
                    Arrays.sort(inputSizes, new b0.d(true));
                    hashMap.put(Integer.valueOf(i10), inputSizes[0]);
                }
            }
            return hashMap;
        }
        return new HashMap();
    }

    private boolean l(r.a0 a0Var, int i10) {
        int[] validOutputFormatsForInput;
        StreamConfigurationMap streamConfigurationMap = (StreamConfigurationMap) a0Var.a(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP);
        if (streamConfigurationMap == null || (validOutputFormatsForInput = streamConfigurationMap.getValidOutputFormatsForInput(i10)) == null) {
            return false;
        }
        for (int i11 : validOutputFormatsForInput) {
            if (i11 == 256) {
                return true;
            }
        }
        return false;
    }

    @Override // q.b5
    public boolean a() {
        return this.f45925c;
    }

    @Override // q.b5
    public void b(i2.b bVar) {
        j();
        if (this.f45925c) {
            bVar.x(1);
        } else if (this.f45928f) {
            bVar.x(1);
        } else {
            Map k10 = k(this.f45923a);
            if (this.f45927e && !k10.isEmpty() && k10.containsKey(34) && l(this.f45923a, 34)) {
                Size size = (Size) k10.get(34);
                androidx.camera.core.p pVar = new androidx.camera.core.p(size.getWidth(), size.getHeight(), 34, 9);
                this.f45930h = pVar.m();
                this.f45929g = new androidx.camera.core.q(pVar);
                pVar.e(new j1.a() { // from class: q.e5
                    @Override // a0.j1.a
                    public final void a(a0.j1 j1Var) {
                        f5.h(f5.this, j1Var);
                    }
                }, c0.a.c());
                a0.k1 k1Var = new a0.k1(this.f45929g.getSurface(), new Size(this.f45929g.getWidth(), this.f45929g.getHeight()), 34);
                this.f45931i = k1Var;
                androidx.camera.core.q qVar = this.f45929g;
                ListenableFuture k11 = k1Var.k();
                Objects.requireNonNull(qVar);
                k11.a(new c5(qVar), c0.a.d());
                bVar.l(this.f45931i);
                bVar.e(this.f45930h);
                bVar.k(new a());
                bVar.u(new InputConfiguration(this.f45929g.getWidth(), this.f45929g.getHeight(), this.f45929g.c()));
                return;
            }
            bVar.x(1);
        }
    }

    @Override // q.b5
    public void c(boolean z10) {
        this.f45926d = z10;
    }

    @Override // q.b5
    public void d(boolean z10) {
        this.f45925c = z10;
    }

    @Override // q.b5
    public androidx.camera.core.n e() {
        try {
            return (androidx.camera.core.n) this.f45924b.a();
        } catch (NoSuchElementException unused) {
            x.y0.c("ZslControlImpl", "dequeueImageFromBuffer no such element");
            return null;
        }
    }

    @Override // q.b5
    public boolean f(androidx.camera.core.n nVar) {
        Image F = nVar.F();
        ImageWriter imageWriter = this.f45932j;
        if (imageWriter != null && F != null) {
            try {
                f0.a.d(imageWriter, F);
                return true;
            } catch (IllegalStateException e10) {
                x.y0.c("ZslControlImpl", "enqueueImageToImageWriter throws IllegalStateException = " + e10.getMessage());
            }
        }
        return false;
    }

    @Override // q.b5
    public boolean g() {
        return this.f45926d;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends CameraCaptureSession.StateCallback {
        a() {
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onConfigured(CameraCaptureSession cameraCaptureSession) {
            Surface inputSurface = cameraCaptureSession.getInputSurface();
            if (inputSurface != null) {
                f5.this.f45932j = f0.a.c(inputSurface, 1);
            }
        }

        @Override // android.hardware.camera2.CameraCaptureSession.StateCallback
        public void onConfigureFailed(CameraCaptureSession cameraCaptureSession) {
        }
    }
}
