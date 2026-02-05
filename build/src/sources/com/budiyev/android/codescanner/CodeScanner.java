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
    private final Context f8372b;

    /* renamed from: d  reason: collision with root package name */
    private final CodeScannerView f8374d;

    /* renamed from: e  reason: collision with root package name */
    private final SurfaceHolder f8375e;

    /* renamed from: a  reason: collision with root package name */
    private final Object f8371a = new Object();

    /* renamed from: n  reason: collision with root package name */
    private volatile List f8384n = N;

    /* renamed from: o  reason: collision with root package name */
    private volatile m f8385o = O;

    /* renamed from: p  reason: collision with root package name */
    private volatile com.budiyev.android.codescanner.a f8386p = P;

    /* renamed from: q  reason: collision with root package name */
    private volatile com.budiyev.android.codescanner.d f8387q = null;

    /* renamed from: r  reason: collision with root package name */
    private volatile com.budiyev.android.codescanner.h f8388r = null;

    /* renamed from: s  reason: collision with root package name */
    private volatile com.budiyev.android.codescanner.g f8389s = null;

    /* renamed from: t  reason: collision with root package name */
    private volatile boolean f8390t = false;

    /* renamed from: u  reason: collision with root package name */
    private volatile boolean f8391u = false;

    /* renamed from: v  reason: collision with root package name */
    private volatile boolean f8392v = false;

    /* renamed from: w  reason: collision with root package name */
    private volatile boolean f8393w = true;

    /* renamed from: x  reason: collision with root package name */
    private volatile boolean f8394x = false;

    /* renamed from: y  reason: collision with root package name */
    private volatile long f8395y = 2000;

    /* renamed from: z  reason: collision with root package name */
    private volatile int f8396z = -1;
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
    private final Handler f8373c = new Handler();

    /* renamed from: f  reason: collision with root package name */
    private final SurfaceHolder.Callback f8376f = new k();

    /* renamed from: g  reason: collision with root package name */
    private final Camera.PreviewCallback f8377g = new f();

    /* renamed from: h  reason: collision with root package name */
    private final Camera.AutoFocusCallback f8378h = new l();

    /* renamed from: i  reason: collision with root package name */
    private final Camera.AutoFocusCallback f8379i = new g();

    /* renamed from: j  reason: collision with root package name */
    private final Runnable f8380j = new h();

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f8381k = new j();

    /* renamed from: l  reason: collision with root package name */
    private final b f8382l = new b();

    /* renamed from: m  reason: collision with root package name */
    private final c f8383m = new c();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class b implements f.c {
        private b() {
        }

        @Override // com.budiyev.android.codescanner.f.c
        public boolean a(f.b bVar) {
            if (bVar == f.b.DECODED) {
                m mVar = CodeScanner.this.f8385o;
                if (mVar == m.PREVIEW) {
                    return false;
                }
                if (mVar == m.SINGLE) {
                    CodeScanner.this.f8392v = true;
                    CodeScanner.this.f8373c.post(CodeScanner.this.f8381k);
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
            com.budiyev.android.codescanner.h hVar = CodeScanner.this.f8388r;
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
        private final com.budiyev.android.codescanner.i f8399d;

        @Override // java.lang.Runnable
        public void run() {
            if (!CodeScanner.this.f8391u) {
                return;
            }
            CodeScanner.this.f8374d.setPreviewSize(this.f8399d);
            CodeScanner.this.f8374d.setAutoFocusEnabled(CodeScanner.this.O());
            CodeScanner.this.f8374d.setFlashEnabled(CodeScanner.this.Q());
            CodeScanner.this.g0();
        }

        private d(com.budiyev.android.codescanner.i iVar) {
            this.f8399d = iVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class e extends Thread {

        /* renamed from: d  reason: collision with root package name */
        private final int f8401d;

        /* renamed from: e  reason: collision with root package name */
        private final int f8402e;

        public e(int i10, int i11) {
            super("cs-init");
            this.f8401d = i10;
            this.f8402e = i11;
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
            int i15 = CodeScanner.this.f8396z;
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
                            CodeScanner.this.f8396z = i16;
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
                    int k10 = n.k(CodeScanner.this.f8372b, cameraInfo);
                    boolean o10 = n.o(k10);
                    if (o10) {
                        i11 = this.f8402e;
                    } else {
                        i11 = this.f8401d;
                    }
                    if (o10) {
                        i12 = this.f8401d;
                    } else {
                        i12 = this.f8402e;
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
                    com.budiyev.android.codescanner.i n10 = n.n(i13, i14, this.f8401d, this.f8402e);
                    List<String> supportedFocusModes = parameters.getSupportedFocusModes();
                    if (supportedFocusModes != null && (supportedFocusModes.contains("auto") || supportedFocusModes.contains("continuous-picture"))) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (!z10) {
                        CodeScanner.this.f8393w = false;
                    }
                    com.budiyev.android.codescanner.i iVar = new com.budiyev.android.codescanner.i(this.f8401d, this.f8402e);
                    if (z10 && CodeScanner.this.f8393w) {
                        n.r(parameters, CodeScanner.this.f8386p);
                        com.budiyev.android.codescanner.l frameRect = CodeScanner.this.f8374d.getFrameRect();
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
                        CodeScanner.this.f8394x = false;
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
                    synchronized (CodeScanner.this.f8371a) {
                        com.budiyev.android.codescanner.f fVar = new com.budiyev.android.codescanner.f(CodeScanner.this.f8382l, CodeScanner.this.f8383m, CodeScanner.this.f8384n, CodeScanner.this.f8387q);
                        CodeScanner.this.f8389s = new com.budiyev.android.codescanner.g(camera2, cameraInfo, fVar, j10, n10, iVar, k10, z10, z11);
                        fVar.m();
                        CodeScanner.this.f8390t = false;
                        CodeScanner.this.f8391u = true;
                    }
                    CodeScanner.this.f8373c.post(new d(n10));
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
            if (CodeScanner.this.f8391u && !CodeScanner.this.f8392v && CodeScanner.this.f8385o != m.PREVIEW && bArr != null && (gVar = CodeScanner.this.f8389s) != null) {
                com.budiyev.android.codescanner.f b10 = gVar.b();
                if (b10.h() == f.b.IDLE && (frameRect = CodeScanner.this.f8374d.getFrameRect()) != null && frameRect.h() >= 1 && frameRect.d() >= 1) {
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
            if (CodeScanner.this.f8386p == com.budiyev.android.codescanner.a.SAFE) {
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
            synchronized (CodeScanner.this.f8371a) {
                try {
                    if (i10 == CodeScanner.this.I) {
                        if (i11 != CodeScanner.this.J) {
                        }
                    }
                    boolean z10 = CodeScanner.this.D;
                    if (CodeScanner.this.f8391u) {
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
        List unmodifiableList = Collections.unmodifiableList(Arrays.asList(fk.a.values()));
        K = unmodifiableList;
        L = Collections.unmodifiableList(Arrays.asList(fk.a.CODABAR, fk.a.CODE_39, fk.a.CODE_93, fk.a.CODE_128, fk.a.EAN_8, fk.a.EAN_13, fk.a.ITF, fk.a.RSS_14, fk.a.RSS_EXPANDED, fk.a.UPC_A, fk.a.UPC_E, fk.a.UPC_EAN_EXTENSION));
        M = Collections.unmodifiableList(Arrays.asList(fk.a.AZTEC, fk.a.DATA_MATRIX, fk.a.MAXICODE, fk.a.PDF_417, fk.a.QR_CODE));
        N = unmodifiableList;
        O = m.SINGLE;
        P = com.budiyev.android.codescanner.a.SAFE;
    }

    public CodeScanner(Context context, CodeScannerView codeScannerView) {
        this.f8372b = context;
        this.f8374d = codeScannerView;
        this.f8375e = codeScannerView.getPreviewView().getHolder();
        codeScannerView.setCodeScanner(this);
        codeScannerView.setSizeListener(new i());
    }

    private void M() {
        N(this.f8374d.getWidth(), this.f8374d.getHeight());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void N(int i10, int i11) {
        this.I = i10;
        this.J = i11;
        if (i10 > 0 && i11 > 0) {
            this.f8390t = true;
            this.G = false;
            e eVar = new e(i10, i11);
            eVar.setUncaughtExceptionHandler(this.f8383m);
            eVar.start();
            return;
        }
        this.G = true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V() {
        this.f8391u = false;
        this.f8390t = false;
        this.f8392v = false;
        this.D = false;
        this.E = false;
        com.budiyev.android.codescanner.g gVar = this.f8389s;
        if (gVar != null) {
            this.f8389s = null;
            gVar.i();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void W() {
        com.budiyev.android.codescanner.g gVar;
        int i10;
        if (this.f8391u && this.D && (gVar = this.f8389s) != null && gVar.g() && this.f8393w) {
            if (this.E && (i10 = this.H) < 2) {
                this.H = i10 + 1;
            } else {
                try {
                    Camera a10 = gVar.a();
                    a10.cancelAutoFocus();
                    a10.autoFocus(this.f8379i);
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
        this.f8373c.postDelayed(this.f8380j, this.f8395y);
    }

    private void Z(boolean z10) {
        com.budiyev.android.codescanner.l frameRect;
        try {
            com.budiyev.android.codescanner.g gVar = this.f8389s;
            if (gVar != null) {
                Camera a10 = gVar.a();
                a10.cancelAutoFocus();
                this.C = false;
                Camera.Parameters parameters = a10.getParameters();
                com.budiyev.android.codescanner.a aVar = this.f8386p;
                if (z10) {
                    n.r(parameters, aVar);
                } else {
                    n.i(parameters);
                }
                if (z10 && (frameRect = this.f8374d.getFrameRect()) != null) {
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
            com.budiyev.android.codescanner.g gVar = this.f8389s;
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
            com.budiyev.android.codescanner.g gVar = this.f8389s;
            if (gVar != null) {
                Camera a10 = gVar.a();
                a10.setPreviewCallback(this.f8377g);
                a10.setPreviewDisplay(this.f8375e);
                if (!z10 && gVar.h() && this.f8394x) {
                    e0(true);
                }
                a10.startPreview();
                this.f8392v = false;
                this.D = true;
                this.E = false;
                this.H = 0;
                if (gVar.g() && this.f8393w) {
                    com.budiyev.android.codescanner.l frameRect = this.f8374d.getFrameRect();
                    if (frameRect != null) {
                        Camera.Parameters parameters = a10.getParameters();
                        n.a(parameters, gVar, frameRect);
                        a10.setParameters(parameters);
                    }
                    if (this.f8386p == com.budiyev.android.codescanner.a.SAFE) {
                        X();
                    }
                }
            }
        } catch (Exception unused) {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void i0() {
        if (this.f8391u && !this.D) {
            h0(true);
        }
    }

    private void k0(boolean z10) {
        try {
            com.budiyev.android.codescanner.g gVar = this.f8389s;
            if (gVar != null) {
                Camera a10 = gVar.a();
                a10.cancelAutoFocus();
                Camera.Parameters parameters = a10.getParameters();
                if (!z10 && gVar.h() && this.f8394x) {
                    n.s(parameters, "off");
                }
                a10.setParameters(parameters);
                a10.setPreviewCallback(null);
                a10.stopPreview();
            }
        } catch (Exception unused) {
        }
        this.f8392v = false;
        this.D = false;
        this.E = false;
        this.H = 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l0() {
        if (this.f8391u && this.D) {
            k0(true);
        }
    }

    public boolean O() {
        return this.f8393w;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean P() {
        com.budiyev.android.codescanner.g gVar = this.f8389s;
        if (gVar != null && !gVar.g()) {
            return false;
        }
        return true;
    }

    public boolean Q() {
        return this.f8394x;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean R() {
        com.budiyev.android.codescanner.g gVar = this.f8389s;
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
        synchronized (this.f8371a) {
            if (this.f8391u && this.D && !this.C) {
                try {
                    Y(false);
                    com.budiyev.android.codescanner.g gVar = this.f8389s;
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
                        a11.autoFocus(this.f8378h);
                        this.C = true;
                    }
                } catch (Exception unused) {
                }
            }
        }
    }

    public void U() {
        if (this.f8391u) {
            if (this.D) {
                j0();
            }
            V();
        }
    }

    public void Y(boolean z10) {
        boolean z11;
        synchronized (this.f8371a) {
            try {
                if (this.f8393w != z10) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f8393w = z10;
                this.f8374d.setAutoFocusEnabled(z10);
                com.budiyev.android.codescanner.g gVar = this.f8389s;
                if (this.f8391u && this.D && z11 && gVar != null && gVar.g()) {
                    Z(z10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void a0(int i10) {
        synchronized (this.f8371a) {
            try {
                if (this.f8396z != i10) {
                    this.f8396z = i10;
                    if (this.f8391u) {
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
        synchronized (this.f8371a) {
            try {
                this.f8387q = dVar;
                if (this.f8391u && (gVar = this.f8389s) != null) {
                    gVar.b().i(dVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void c0(com.budiyev.android.codescanner.h hVar) {
        this.f8388r = hVar;
    }

    public void d0(boolean z10) {
        boolean z11;
        synchronized (this.f8371a) {
            try {
                if (this.f8394x != z10) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f8394x = z10;
                this.f8374d.setFlashEnabled(z10);
                com.budiyev.android.codescanner.g gVar = this.f8389s;
                if (this.f8391u && this.D && z11 && gVar != null && gVar.h()) {
                    e0(z10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void f0(List list) {
        com.budiyev.android.codescanner.g gVar;
        synchronized (this.f8371a) {
            try {
                Objects.requireNonNull(list);
                this.f8384n = list;
                if (this.f8391u && (gVar = this.f8389s) != null) {
                    gVar.b().j(list);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void g0() {
        synchronized (this.f8371a) {
            try {
                if (!this.f8391u && !this.f8390t) {
                    M();
                } else if (!this.D) {
                    this.f8375e.addCallback(this.f8376f);
                    h0(false);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j0() {
        if (this.f8391u && this.D) {
            this.f8375e.removeCallback(this.f8376f);
            k0(false);
        }
    }
}
