package com.budiyev.android.codescanner;

import android.content.Context;
import android.hardware.Camera;
import android.os.Handler;
import android.os.Process;
import android.view.SurfaceHolder;
import com.budiyev.android.codescanner.CodeScannerView;
import com.budiyev.android.codescanner.f;
import java.lang.Thread;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CodeScanner {
    public static final List K;
    public static final List L;
    public static final List M;
    private static final List N;
    private static final m O;
    private static final com.budiyev.android.codescanner.a P;

    /* renamed from: b  reason: collision with root package name */
    private final Context f9390b;

    /* renamed from: d  reason: collision with root package name */
    private final CodeScannerView f9392d;

    /* renamed from: e  reason: collision with root package name */
    private final SurfaceHolder f9393e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f9389a = new Object();

    /* renamed from: n  reason: collision with root package name */
    private volatile List f9402n = N;

    /* renamed from: o  reason: collision with root package name */
    private volatile m f9403o = O;

    /* renamed from: p  reason: collision with root package name */
    private volatile com.budiyev.android.codescanner.a f9404p = P;

    /* renamed from: q  reason: collision with root package name */
    private volatile com.budiyev.android.codescanner.d f9405q = null;

    /* renamed from: r  reason: collision with root package name */
    private volatile com.budiyev.android.codescanner.h f9406r = null;

    /* renamed from: s  reason: collision with root package name */
    private volatile com.budiyev.android.codescanner.g f9407s = null;

    /* renamed from: t  reason: collision with root package name */
    private volatile boolean f9408t = false;

    /* renamed from: u  reason: collision with root package name */
    private volatile boolean f9409u = false;

    /* renamed from: v  reason: collision with root package name */
    private volatile boolean f9410v = false;

    /* renamed from: w  reason: collision with root package name */
    private volatile boolean f9411w = true;

    /* renamed from: x  reason: collision with root package name */
    private volatile boolean f9412x = false;

    /* renamed from: y  reason: collision with root package name */
    private volatile long f9413y = 2000;

    /* renamed from: z  reason: collision with root package name */
    private volatile int f9414z = -1;
    private volatile int A = 0;
    private boolean B = true;
    private boolean C = false;
    private boolean D = false;
    private boolean E = false;
    private boolean F = false;
    private boolean G = false;
    private int H = 0;
    private int I = 0;
    private int J = 0;

    /* renamed from: c  reason: collision with root package name */
    private final Handler f9391c = new Handler();

    /* renamed from: f  reason: collision with root package name */
    private final SurfaceHolder.Callback f9394f = new k();

    /* renamed from: g  reason: collision with root package name */
    private final Camera.PreviewCallback f9395g = new f();

    /* renamed from: h  reason: collision with root package name */
    private final Camera.AutoFocusCallback f9396h = new l();

    /* renamed from: i  reason: collision with root package name */
    private final Camera.AutoFocusCallback f9397i = new g();

    /* renamed from: j  reason: collision with root package name */
    private final Runnable f9398j = new h();

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f9399k = new j();

    /* renamed from: l  reason: collision with root package name */
    private final b f9400l = new b();

    /* renamed from: m  reason: collision with root package name */
    private final c f9401m = new c();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class b implements f.c {
        private b() {
        }

        @Override // com.budiyev.android.codescanner.f.c
        public boolean a(f.b bVar) {
            if (bVar == f.b.DECODED) {
                m mVar = CodeScanner.this.f9403o;
                if (mVar == m.PREVIEW) {
                    return false;
                }
                if (mVar == m.SINGLE) {
                    CodeScanner.this.f9410v = true;
                    CodeScanner.this.f9391c.post(CodeScanner.this.f9399k);
                }
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class c implements Thread.UncaughtExceptionHandler {
        private c() {
        }

        @Override // java.lang.Thread.UncaughtExceptionHandler
        public void uncaughtException(Thread thread, Throwable th2) {
            CodeScanner.this.V();
            com.budiyev.android.codescanner.h hVar = CodeScanner.this.f9406r;
            if (hVar != null) {
                hVar.onError(th2);
                return;
            }
            throw new com.budiyev.android.codescanner.c(th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final com.budiyev.android.codescanner.i f9417d;

        @Override // java.lang.Runnable
        public void run() {
            if (!CodeScanner.this.f9409u) {
                return;
            }
            CodeScanner.this.f9392d.setPreviewSize(this.f9417d);
            CodeScanner.this.f9392d.setAutoFocusEnabled(CodeScanner.this.O());
            CodeScanner.this.f9392d.setFlashEnabled(CodeScanner.this.Q());
            CodeScanner.this.g0();
        }

        private d(com.budiyev.android.codescanner.i iVar) {
            this.f9417d = iVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class e extends Thread {

        /* renamed from: d  reason: collision with root package name */
        private final int f9419d;

        /* renamed from: e  reason: collision with root package name */
        private final int f9420e;

        public e(int i10, int i11) {
            super("cs-init");
            this.f9419d = i10;
            this.f9420e = i11;
        }

        private void a() {
            int i10;
            Camera camera;
            int i11;
            int i12;
            int i13;
            int i14;
            boolean z10;
            boolean z11;
            Camera.CameraInfo cameraInfo = new Camera.CameraInfo();
            int i15 = CodeScanner.this.f9414z;
            if (i15 != -1 && i15 != -2) {
                camera = Camera.open(i15);
                Camera.getCameraInfo(i15, cameraInfo);
            } else {
                int numberOfCameras = Camera.getNumberOfCameras();
                if (i15 == -1) {
                    i10 = 0;
                } else {
                    i10 = 1;
                }
                int i16 = 0;
                while (true) {
                    if (i16 < numberOfCameras) {
                        Camera.getCameraInfo(i16, cameraInfo);
                        if (cameraInfo.facing == i10) {
                            Camera open = Camera.open(i16);
                            CodeScanner.this.f9414z = i16;
                            camera = open;
                            break;
                        }
                        i16++;
                    } else {
                        camera = null;
                        break;
                    }
                }
            }
            Camera camera2 = camera;
            if (camera2 != null) {
                Camera.Parameters parameters = camera2.getParameters();
                if (parameters != null) {
                    int k10 = n.k(CodeScanner.this.f9390b, cameraInfo);
                    boolean o10 = n.o(k10);
                    if (o10) {
                        i11 = this.f9420e;
                    } else {
                        i11 = this.f9419d;
                    }
                    if (o10) {
                        i12 = this.f9419d;
                    } else {
                        i12 = this.f9420e;
                    }
                    com.budiyev.android.codescanner.i j10 = n.j(parameters, i11, i12);
                    int a10 = j10.a();
                    int b10 = j10.b();
                    parameters.setPreviewSize(a10, b10);
                    parameters.setPreviewFormat(17);
                    if (o10) {
                        i13 = b10;
                    } else {
                        i13 = a10;
                    }
                    if (o10) {
                        i14 = a10;
                    } else {
                        i14 = b10;
                    }
                    com.budiyev.android.codescanner.i n10 = n.n(i13, i14, this.f9419d, this.f9420e);
                    List<String> supportedFocusModes = parameters.getSupportedFocusModes();
                    if (supportedFocusModes != null && (supportedFocusModes.contains("auto") || supportedFocusModes.contains("continuous-picture"))) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (!z10) {
                        CodeScanner.this.f9411w = false;
                    }
                    com.budiyev.android.codescanner.i iVar = new com.budiyev.android.codescanner.i(this.f9419d, this.f9420e);
                    if (z10 && CodeScanner.this.f9411w) {
                        n.r(parameters, CodeScanner.this.f9404p);
                        com.budiyev.android.codescanner.l frameRect = CodeScanner.this.f9392d.getFrameRect();
                        if (frameRect != null) {
                            n.b(parameters, frameRect, n10, iVar, a10, b10, k10);
                        }
                    }
                    List<String> supportedFlashModes = parameters.getSupportedFlashModes();
                    if (supportedFlashModes != null && supportedFlashModes.contains("torch")) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    if (!z11) {
                        CodeScanner.this.f9412x = false;
                    }
                    int i17 = CodeScanner.this.A;
                    if (i17 != 0) {
                        n.t(parameters, i17);
                    }
                    n.e(parameters);
                    n.f(parameters);
                    n.g(parameters);
                    camera2.setParameters(parameters);
                    camera2.setDisplayOrientation(k10);
                    synchronized (CodeScanner.this.f9389a) {
                        com.budiyev.android.codescanner.f fVar = new com.budiyev.android.codescanner.f(CodeScanner.this.f9400l, CodeScanner.this.f9401m, CodeScanner.this.f9402n, CodeScanner.this.f9405q);
                        CodeScanner.this.f9407s = new com.budiyev.android.codescanner.g(camera2, cameraInfo, fVar, j10, n10, iVar, k10, z10, z11);
                        fVar.m();
                        CodeScanner.this.f9408t = false;
                        CodeScanner.this.f9409u = true;
                    }
                    CodeScanner.this.f9391c.post(new d(n10));
                    return;
                }
                throw new com.budiyev.android.codescanner.c("Unable to configure camera");
            }
            throw new com.budiyev.android.codescanner.c("Unable to access camera");
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            Process.setThreadPriority(10);
            a();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class f implements Camera.PreviewCallback {
        private f() {
        }

        @Override // android.hardware.Camera.PreviewCallback
        public void onPreviewFrame(byte[] bArr, Camera camera) {
            com.budiyev.android.codescanner.g gVar;
            com.budiyev.android.codescanner.l frameRect;
            if (CodeScanner.this.f9409u && !CodeScanner.this.f9410v && CodeScanner.this.f9403o != m.PREVIEW && bArr != null && (gVar = CodeScanner.this.f9407s) != null) {
                com.budiyev.android.codescanner.f b10 = gVar.b();
                if (b10.h() == f.b.IDLE && (frameRect = CodeScanner.this.f9392d.getFrameRect()) != null && frameRect.h() >= 1 && frameRect.d() >= 1) {
                    b10.g(new com.budiyev.android.codescanner.e(bArr, gVar.d(), gVar.e(), gVar.f(), frameRect, gVar.c(), gVar.j()));
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class g implements Camera.AutoFocusCallback {
        private g() {
        }

        @Override // android.hardware.Camera.AutoFocusCallback
        public void onAutoFocus(boolean z10, Camera camera) {
            CodeScanner.this.E = false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class h implements Runnable {
        private h() {
        }

        @Override // java.lang.Runnable
        public void run() {
            CodeScanner.this.F = false;
            if (CodeScanner.this.f9404p == com.budiyev.android.codescanner.a.SAFE) {
                CodeScanner.this.W();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class i implements CodeScannerView.e {
        private i() {
        }

        @Override // com.budiyev.android.codescanner.CodeScannerView.e
        public void a(int i10, int i11) {
            synchronized (CodeScanner.this.f9389a) {
                try {
                    if (i10 == CodeScanner.this.I) {
                        if (i11 != CodeScanner.this.J) {
                        }
                    }
                    boolean z10 = CodeScanner.this.D;
                    if (CodeScanner.this.f9409u) {
                        CodeScanner.this.U();
                    }
                    if (z10 || CodeScanner.this.G) {
                        CodeScanner.this.N(i10, i11);
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class j implements Runnable {
        private j() {
        }

        @Override // java.lang.Runnable
        public void run() {
            CodeScanner.this.j0();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class k implements SurfaceHolder.Callback {
        private k() {
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder surfaceHolder, int i10, int i11, int i12) {
            if (surfaceHolder.getSurface() == null) {
                CodeScanner.this.D = false;
                return;
            }
            CodeScanner.this.l0();
            CodeScanner.this.i0();
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder surfaceHolder) {
            CodeScanner.this.i0();
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder surfaceHolder) {
            CodeScanner.this.l0();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private final class l implements Camera.AutoFocusCallback {
        private l() {
        }

        @Override // android.hardware.Camera.AutoFocusCallback
        public void onAutoFocus(boolean z10, Camera camera) {
            CodeScanner.this.C = false;
        }
    }

    static {
        List unmodifiableList = Collections.unmodifiableList(Arrays.asList(ck.a.values()));
        K = unmodifiableList;
        L = Collections.unmodifiableList(Arrays.asList(ck.a.CODABAR, ck.a.CODE_39, ck.a.CODE_93, ck.a.CODE_128, ck.a.EAN_8, ck.a.EAN_13, ck.a.ITF, ck.a.RSS_14, ck.a.RSS_EXPANDED, ck.a.UPC_A, ck.a.UPC_E, ck.a.UPC_EAN_EXTENSION));
        M = Collections.unmodifiableList(Arrays.asList(ck.a.AZTEC, ck.a.DATA_MATRIX, ck.a.MAXICODE, ck.a.PDF_417, ck.a.QR_CODE));
        N = unmodifiableList;
        O = m.SINGLE;
        P = com.budiyev.android.codescanner.a.SAFE;
    }

    public CodeScanner(Context context, CodeScannerView codeScannerView) {
        this.f9390b = context;
        this.f9392d = codeScannerView;
        this.f9393e = codeScannerView.getPreviewView().getHolder();
        codeScannerView.setCodeScanner(this);
        codeScannerView.setSizeListener(new i());
    }

    private void M() {
        N(this.f9392d.getWidth(), this.f9392d.getHeight());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void N(int i10, int i11) {
        this.I = i10;
        this.J = i11;
        if (i10 > 0 && i11 > 0) {
            this.f9408t = true;
            this.G = false;
            e eVar = new e(i10, i11);
            eVar.setUncaughtExceptionHandler(this.f9401m);
            eVar.start();
            return;
        }
        this.G = true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V() {
        this.f9409u = false;
        this.f9408t = false;
        this.f9410v = false;
        this.D = false;
        this.E = false;
        com.budiyev.android.codescanner.g gVar = this.f9407s;
        if (gVar != null) {
            this.f9407s = null;
            gVar.i();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void W() {
        com.budiyev.android.codescanner.g gVar;
        int i10;
        if (this.f9409u && this.D && (gVar = this.f9407s) != null && gVar.g() && this.f9411w) {
            if (this.E && (i10 = this.H) < 2) {
                this.H = i10 + 1;
            } else {
                try {
                    Camera a10 = gVar.a();
                    a10.cancelAutoFocus();
                    a10.autoFocus(this.f9397i);
                    this.H = 0;
                    this.E = true;
                } catch (Exception unused) {
                    this.E = false;
                }
            }
            X();
        }
    }

    private void X() {
        if (this.F) {
            return;
        }
        this.F = true;
        this.f9391c.postDelayed(this.f9398j, this.f9413y);
    }

    private void Z(boolean z10) {
        com.budiyev.android.codescanner.l frameRect;
        try {
            com.budiyev.android.codescanner.g gVar = this.f9407s;
            if (gVar != null) {
                Camera a10 = gVar.a();
                a10.cancelAutoFocus();
                this.C = false;
                Camera.Parameters parameters = a10.getParameters();
                com.budiyev.android.codescanner.a aVar = this.f9404p;
                if (z10) {
                    n.r(parameters, aVar);
                } else {
                    n.i(parameters);
                }
                if (z10 && (frameRect = this.f9392d.getFrameRect()) != null) {
                    n.a(parameters, gVar, frameRect);
                }
                a10.setParameters(parameters);
                if (z10) {
                    this.H = 0;
                    this.E = false;
                    if (aVar == com.budiyev.android.codescanner.a.SAFE) {
                        X();
                    }
                }
            }
        } catch (Exception unused) {
        }
    }

    private void e0(boolean z10) {
        Camera a10;
        Camera.Parameters parameters;
        try {
            com.budiyev.android.codescanner.g gVar = this.f9407s;
            if (gVar != null && (parameters = (a10 = gVar.a()).getParameters()) != null) {
                if (z10) {
                    n.s(parameters, "torch");
                } else {
                    n.s(parameters, "off");
                }
                a10.setParameters(parameters);
            }
        } catch (Exception unused) {
        }
    }

    private void h0(boolean z10) {
        try {
            com.budiyev.android.codescanner.g gVar = this.f9407s;
            if (gVar != null) {
                Camera a10 = gVar.a();
                a10.setPreviewCallback(this.f9395g);
                a10.setPreviewDisplay(this.f9393e);
                if (!z10 && gVar.h() && this.f9412x) {
                    e0(true);
                }
                a10.startPreview();
                this.f9410v = false;
                this.D = true;
                this.E = false;
                this.H = 0;
                if (gVar.g() && this.f9411w) {
                    com.budiyev.android.codescanner.l frameRect = this.f9392d.getFrameRect();
                    if (frameRect != null) {
                        Camera.Parameters parameters = a10.getParameters();
                        n.a(parameters, gVar, frameRect);
                        a10.setParameters(parameters);
                    }
                    if (this.f9404p == com.budiyev.android.codescanner.a.SAFE) {
                        X();
                    }
                }
            }
        } catch (Exception unused) {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i0() {
        if (this.f9409u && !this.D) {
            h0(true);
        }
    }

    private void k0(boolean z10) {
        try {
            com.budiyev.android.codescanner.g gVar = this.f9407s;
            if (gVar != null) {
                Camera a10 = gVar.a();
                a10.cancelAutoFocus();
                Camera.Parameters parameters = a10.getParameters();
                if (!z10 && gVar.h() && this.f9412x) {
                    n.s(parameters, "off");
                }
                a10.setParameters(parameters);
                a10.setPreviewCallback(null);
                a10.stopPreview();
            }
        } catch (Exception unused) {
        }
        this.f9410v = false;
        this.D = false;
        this.E = false;
        this.H = 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l0() {
        if (this.f9409u && this.D) {
            k0(true);
        }
    }

    public boolean O() {
        return this.f9411w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean P() {
        com.budiyev.android.codescanner.g gVar = this.f9407s;
        if (gVar != null && !gVar.g()) {
            return false;
        }
        return true;
    }

    public boolean Q() {
        return this.f9412x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean R() {
        com.budiyev.android.codescanner.g gVar = this.f9407s;
        if (gVar != null && !gVar.h()) {
            return false;
        }
        return true;
    }

    public boolean S() {
        return this.B;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void T(com.budiyev.android.codescanner.l lVar) {
        synchronized (this.f9389a) {
            if (this.f9409u && this.D && !this.C) {
                try {
                    Y(false);
                    com.budiyev.android.codescanner.g gVar = this.f9407s;
                    if (this.D && gVar != null && gVar.g()) {
                        com.budiyev.android.codescanner.i d10 = gVar.d();
                        int a10 = d10.a();
                        int b10 = d10.b();
                        int c10 = gVar.c();
                        if (c10 == 90 || c10 == 270) {
                            a10 = b10;
                            b10 = a10;
                        }
                        com.budiyev.android.codescanner.l m10 = n.m(a10, b10, lVar, gVar.e(), gVar.f());
                        Camera a11 = gVar.a();
                        a11.cancelAutoFocus();
                        Camera.Parameters parameters = a11.getParameters();
                        n.c(parameters, m10, a10, b10, c10);
                        n.d(parameters);
                        a11.setParameters(parameters);
                        a11.autoFocus(this.f9396h);
                        this.C = true;
                    }
                } catch (Exception unused) {
                }
            }
        }
    }

    public void U() {
        if (this.f9409u) {
            if (this.D) {
                j0();
            }
            V();
        }
    }

    public void Y(boolean z10) {
        boolean z11;
        synchronized (this.f9389a) {
            try {
                if (this.f9411w != z10) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f9411w = z10;
                this.f9392d.setAutoFocusEnabled(z10);
                com.budiyev.android.codescanner.g gVar = this.f9407s;
                if (this.f9409u && this.D && z11 && gVar != null && gVar.g()) {
                    Z(z10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void a0(int i10) {
        synchronized (this.f9389a) {
            try {
                if (this.f9414z != i10) {
                    this.f9414z = i10;
                    if (this.f9409u) {
                        boolean z10 = this.D;
                        U();
                        if (z10) {
                            M();
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void b0(com.budiyev.android.codescanner.d dVar) {
        com.budiyev.android.codescanner.g gVar;
        synchronized (this.f9389a) {
            try {
                this.f9405q = dVar;
                if (this.f9409u && (gVar = this.f9407s) != null) {
                    gVar.b().i(dVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void c0(com.budiyev.android.codescanner.h hVar) {
        this.f9406r = hVar;
    }

    public void d0(boolean z10) {
        boolean z11;
        synchronized (this.f9389a) {
            try {
                if (this.f9412x != z10) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f9412x = z10;
                this.f9392d.setFlashEnabled(z10);
                com.budiyev.android.codescanner.g gVar = this.f9407s;
                if (this.f9409u && this.D && z11 && gVar != null && gVar.h()) {
                    e0(z10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void f0(List list) {
        com.budiyev.android.codescanner.g gVar;
        synchronized (this.f9389a) {
            try {
                Objects.requireNonNull(list);
                this.f9402n = list;
                if (this.f9409u && (gVar = this.f9407s) != null) {
                    gVar.b().j(list);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void g0() {
        synchronized (this.f9389a) {
            try {
                if (!this.f9409u && !this.f9408t) {
                    M();
                } else if (!this.D) {
                    this.f9393e.addCallback(this.f9394f);
                    h0(false);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j0() {
        if (this.f9409u && this.D) {
            this.f9393e.removeCallback(this.f9394f);
            k0(false);
        }
    }
}
