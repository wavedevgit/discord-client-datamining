package androidx.camera.view;

import a0.d0;
import a0.e0;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.hardware.display.DisplayManager;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.util.AttributeSet;
import android.util.Rational;
import android.util.Size;
import android.view.Display;
import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import androidx.camera.view.PreviewView;
import androidx.camera.view.i;
import androidx.camera.view.internal.compat.quirk.SurfaceViewNotCroppedByParentQuirk;
import androidx.camera.view.internal.compat.quirk.SurfaceViewStretchedQuirk;
import androidx.core.view.h0;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import com.facebook.react.uimanager.ViewProps;
import java.util.concurrent.atomic.AtomicReference;
import q0.a;
import x.c1;
import x.g1;
import x.n0;
import x.w1;
import x.y0;
import x.z1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PreviewView extends FrameLayout {

    /* renamed from: z  reason: collision with root package name */
    private static final c f2165z = c.PERFORMANCE;

    /* renamed from: d  reason: collision with root package name */
    c f2166d;

    /* renamed from: e  reason: collision with root package name */
    i f2167e;

    /* renamed from: i  reason: collision with root package name */
    final p0.h f2168i;

    /* renamed from: o  reason: collision with root package name */
    final androidx.camera.view.e f2169o;

    /* renamed from: p  reason: collision with root package name */
    boolean f2170p;

    /* renamed from: q  reason: collision with root package name */
    final MutableLiveData f2171q;

    /* renamed from: r  reason: collision with root package name */
    final AtomicReference f2172r;

    /* renamed from: s  reason: collision with root package name */
    j f2173s;

    /* renamed from: t  reason: collision with root package name */
    private final q0.a f2174t;

    /* renamed from: u  reason: collision with root package name */
    d0 f2175u;

    /* renamed from: v  reason: collision with root package name */
    private MotionEvent f2176v;

    /* renamed from: w  reason: collision with root package name */
    private final b f2177w;

    /* renamed from: x  reason: collision with root package name */
    private final View.OnLayoutChangeListener f2178x;

    /* renamed from: y  reason: collision with root package name */
    final g1.c f2179y;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements g1.c {
        a() {
        }

        public static /* synthetic */ void c(a aVar, androidx.camera.view.d dVar, e0 e0Var) {
            if (p0.d.a(PreviewView.this.f2172r, dVar, null)) {
                dVar.i(e.IDLE);
            }
            dVar.f();
            e0Var.c().b(dVar);
        }

        public static /* synthetic */ void d(a aVar, e0 e0Var, w1 w1Var, w1.h hVar) {
            boolean z10;
            PreviewView previewView;
            i iVar;
            aVar.getClass();
            y0.a("PreviewView", "Preview transformation info updated. " + hVar);
            if (e0Var.l().c() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            PreviewView.this.f2169o.r(hVar, w1Var.o(), z10);
            if (hVar.d() != -1 && ((iVar = (previewView = PreviewView.this).f2167e) == null || !(iVar instanceof n))) {
                previewView.f2170p = false;
            } else {
                PreviewView.this.f2170p = true;
            }
            PreviewView.this.d();
        }

        @Override // x.g1.c
        public void a(final w1 w1Var) {
            i nVar;
            if (!b0.p.c()) {
                androidx.core.content.a.h(PreviewView.this.getContext()).execute(new Runnable() { // from class: androidx.camera.view.f
                    @Override // java.lang.Runnable
                    public final void run() {
                        PreviewView.this.f2179y.a(w1Var);
                    }
                });
                return;
            }
            y0.a("PreviewView", "Surface requested by Preview.");
            final e0 l10 = w1Var.l();
            PreviewView.this.f2175u = l10.l();
            PreviewView.this.f2173s.g(l10.f().d());
            w1Var.t(androidx.core.content.a.h(PreviewView.this.getContext()), new w1.i() { // from class: androidx.camera.view.g
                @Override // x.w1.i
                public final void a(w1.h hVar) {
                    PreviewView.a.d(PreviewView.a.this, l10, w1Var, hVar);
                }
            });
            PreviewView previewView = PreviewView.this;
            if (!PreviewView.e(previewView.f2167e, w1Var, previewView.f2166d)) {
                PreviewView previewView2 = PreviewView.this;
                if (PreviewView.f(w1Var, previewView2.f2166d)) {
                    PreviewView previewView3 = PreviewView.this;
                    nVar = new t(previewView3, previewView3.f2169o);
                } else {
                    PreviewView previewView4 = PreviewView.this;
                    nVar = new n(previewView4, previewView4.f2169o);
                }
                previewView2.f2167e = nVar;
            }
            d0 l11 = l10.l();
            PreviewView previewView5 = PreviewView.this;
            final androidx.camera.view.d dVar = new androidx.camera.view.d(l11, previewView5.f2171q, previewView5.f2167e);
            PreviewView.this.f2172r.set(dVar);
            l10.c().a(androidx.core.content.a.h(PreviewView.this.getContext()), dVar);
            PreviewView.this.f2167e.g(w1Var, new i.a() { // from class: androidx.camera.view.h
                @Override // androidx.camera.view.i.a
                public final void a() {
                    PreviewView.a.c(PreviewView.a.this, dVar, l10);
                }
            });
            PreviewView previewView6 = PreviewView.this;
            if (previewView6.indexOfChild(previewView6.f2168i) == -1) {
                PreviewView previewView7 = PreviewView.this;
                previewView7.addView(previewView7.f2168i);
            }
            PreviewView.this.getClass();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements DisplayManager.DisplayListener {
        b() {
        }

        @Override // android.hardware.display.DisplayManager.DisplayListener
        public void onDisplayAdded(int i10) {
        }

        @Override // android.hardware.display.DisplayManager.DisplayListener
        public void onDisplayChanged(int i10) {
            Display display = PreviewView.this.getDisplay();
            if (display != null && display.getDisplayId() == i10) {
                PreviewView.this.d();
            }
        }

        @Override // android.hardware.display.DisplayManager.DisplayListener
        public void onDisplayRemoved(int i10) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        PERFORMANCE(0),
        COMPATIBLE(1);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f2185d;

        c(int i10) {
            this.f2185d = i10;
        }

        static c d(int i10) {
            c[] values;
            for (c cVar : values()) {
                if (cVar.f2185d == i10) {
                    return cVar;
                }
            }
            throw new IllegalArgumentException("Unknown implementation mode id " + i10);
        }

        int e() {
            return this.f2185d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum d {
        FILL_START(0),
        FILL_CENTER(1),
        FILL_END(2),
        FIT_START(3),
        FIT_CENTER(4),
        FIT_END(5);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f2193d;

        d(int i10) {
            this.f2193d = i10;
        }

        static d d(int i10) {
            d[] values;
            for (d dVar : values()) {
                if (dVar.f2193d == i10) {
                    return dVar;
                }
            }
            throw new IllegalArgumentException("Unknown scale type id " + i10);
        }

        int e() {
            return this.f2193d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum e {
        IDLE,
        STREAMING
    }

    public PreviewView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public static /* synthetic */ void a(PreviewView previewView, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        previewView.getClass();
        if (i12 - i10 == i16 - i14 && i13 - i11 == i17 - i15) {
            return;
        }
        previewView.d();
        previewView.b(true);
    }

    private void b(boolean z10) {
        b0.p.a();
        getViewPort();
    }

    static boolean e(i iVar, w1 w1Var, c cVar) {
        if ((iVar instanceof n) && !f(w1Var, cVar)) {
            return true;
        }
        return false;
    }

    static boolean f(w1 w1Var, c cVar) {
        boolean z10;
        boolean equals = w1Var.l().l().i().equals("androidx.camera.camera2.legacy");
        if (androidx.camera.view.internal.compat.quirk.a.b(SurfaceViewStretchedQuirk.class) == null && androidx.camera.view.internal.compat.quirk.a.b(SurfaceViewNotCroppedByParentQuirk.class) == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (Build.VERSION.SDK_INT <= 24 || equals || z10) {
            return true;
        }
        int ordinal = cVar.ordinal();
        if (ordinal == 0) {
            return false;
        }
        if (ordinal == 1) {
            return true;
        }
        throw new IllegalArgumentException("Invalid implementation mode: " + cVar);
    }

    private void g() {
        DisplayManager displayManager = getDisplayManager();
        if (displayManager == null) {
            return;
        }
        displayManager.registerDisplayListener(this.f2177w, new Handler(Looper.getMainLooper()));
    }

    private DisplayManager getDisplayManager() {
        Context context = getContext();
        if (context == null) {
            return null;
        }
        return (DisplayManager) context.getApplicationContext().getSystemService(ViewProps.DISPLAY);
    }

    private n0.i getScreenFlashInternal() {
        return this.f2168i.getScreenFlash();
    }

    private int getViewPortScaleType() {
        int ordinal = getScaleType().ordinal();
        if (ordinal != 0) {
            int i10 = 1;
            if (ordinal != 1) {
                i10 = 2;
                if (ordinal != 2) {
                    i10 = 3;
                    if (ordinal != 3 && ordinal != 4 && ordinal != 5) {
                        throw new IllegalStateException("Unexpected scale type: " + getScaleType());
                    }
                }
            }
            return i10;
        }
        return 0;
    }

    private void h() {
        DisplayManager displayManager = getDisplayManager();
        if (displayManager == null) {
            return;
        }
        displayManager.unregisterDisplayListener(this.f2177w);
    }

    private void setScreenFlashUiInfo(n0.i iVar) {
        y0.a("PreviewView", "setScreenFlashUiInfo: mCameraController is null!");
    }

    public z1 c(int i10) {
        b0.p.a();
        if (getWidth() != 0 && getHeight() != 0) {
            return new z1.a(new Rational(getWidth(), getHeight()), i10).c(getViewPortScaleType()).b(getLayoutDirection()).a();
        }
        return null;
    }

    void d() {
        b0.p.a();
        if (this.f2167e != null) {
            i();
            this.f2167e.h();
        }
        this.f2173s.f(new Size(getWidth(), getHeight()), getLayoutDirection());
    }

    public Bitmap getBitmap() {
        b0.p.a();
        i iVar = this.f2167e;
        if (iVar == null) {
            return null;
        }
        return iVar.a();
    }

    public p0.a getController() {
        b0.p.a();
        return null;
    }

    @NonNull
    public c getImplementationMode() {
        b0.p.a();
        return this.f2166d;
    }

    @NonNull
    public c1 getMeteringPointFactory() {
        b0.p.a();
        return this.f2173s;
    }

    public s0.a getOutputTransform() {
        Matrix matrix;
        b0.p.a();
        try {
            matrix = this.f2169o.j(new Size(getWidth(), getHeight()), getLayoutDirection());
        } catch (IllegalStateException unused) {
            matrix = null;
        }
        Rect i10 = this.f2169o.i();
        if (matrix != null && i10 != null) {
            matrix.preConcat(b0.q.b(i10));
            if (this.f2167e instanceof t) {
                matrix.postConcat(getMatrix());
            } else if (!getMatrix().isIdentity()) {
                y0.l("PreviewView", "PreviewView needs to be in COMPATIBLE mode for the transform to work correctly.");
            }
            return new s0.a(matrix, new Size(i10.width(), i10.height()));
        }
        y0.a("PreviewView", "Transform info is not ready");
        return null;
    }

    @NonNull
    public LiveData getPreviewStreamState() {
        return this.f2171q;
    }

    @NonNull
    public d getScaleType() {
        b0.p.a();
        return this.f2169o.g();
    }

    public n0.i getScreenFlash() {
        return getScreenFlashInternal();
    }

    public Matrix getSensorToViewTransform() {
        b0.p.a();
        if (getWidth() != 0 && getHeight() != 0) {
            return this.f2169o.h(new Size(getWidth(), getHeight()), getLayoutDirection());
        }
        return null;
    }

    @NonNull
    public g1.c getSurfaceProvider() {
        b0.p.a();
        return this.f2179y;
    }

    public z1 getViewPort() {
        b0.p.a();
        if (getDisplay() == null) {
            return null;
        }
        return c(getDisplay().getRotation());
    }

    void i() {
        Display display;
        d0 d0Var;
        if (this.f2170p && (display = getDisplay()) != null && (d0Var = this.f2175u) != null) {
            this.f2169o.o(d0Var.j(display.getRotation()), display.getRotation());
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        g();
        addOnLayoutChangeListener(this.f2178x);
        i iVar = this.f2167e;
        if (iVar != null) {
            iVar.d();
        }
        b(true);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        removeOnLayoutChangeListener(this.f2178x);
        i iVar = this.f2167e;
        if (iVar != null) {
            iVar.e();
        }
        h();
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        return super.onTouchEvent(motionEvent);
    }

    @Override // android.view.View
    public boolean performClick() {
        this.f2176v = null;
        return super.performClick();
    }

    public void setController(p0.a aVar) {
        b0.p.a();
        b(false);
        setScreenFlashUiInfo(getScreenFlashInternal());
    }

    public void setImplementationMode(@NonNull c cVar) {
        b0.p.a();
        this.f2166d = cVar;
        c cVar2 = c.PERFORMANCE;
    }

    public void setScaleType(@NonNull d dVar) {
        b0.p.a();
        this.f2169o.q(dVar);
        d();
        b(false);
    }

    public void setScreenFlashOverlayColor(int i10) {
        this.f2168i.setBackgroundColor(i10);
    }

    public void setScreenFlashWindow(Window window) {
        b0.p.a();
        this.f2168i.setScreenFlashWindow(window);
        setScreenFlashUiInfo(getScreenFlashInternal());
    }

    public PreviewView(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, 0);
    }

    public PreviewView(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        c cVar = f2165z;
        this.f2166d = cVar;
        androidx.camera.view.e eVar = new androidx.camera.view.e();
        this.f2169o = eVar;
        this.f2170p = true;
        this.f2171q = new MutableLiveData(e.IDLE);
        this.f2172r = new AtomicReference();
        this.f2173s = new j(eVar);
        this.f2177w = new b();
        this.f2178x = new View.OnLayoutChangeListener() { // from class: p0.b
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i12, int i13, int i14, int i15, int i16, int i17, int i18, int i19) {
                PreviewView.a(PreviewView.this, view, i12, i13, i14, i15, i16, i17, i18, i19);
            }
        };
        this.f2179y = new a();
        b0.p.a();
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet, p0.e.f44761a, i10, i11);
        h0.l0(this, context, p0.e.f44761a, attributeSet, obtainStyledAttributes, i10, i11);
        try {
            setScaleType(d.d(obtainStyledAttributes.getInteger(p0.e.f44763c, eVar.g().e())));
            setImplementationMode(c.d(obtainStyledAttributes.getInteger(p0.e.f44762b, cVar.e())));
            obtainStyledAttributes.recycle();
            this.f2174t = new q0.a(context, new a.b() { // from class: p0.c
            });
            if (getBackground() == null) {
                setBackgroundColor(androidx.core.content.a.c(getContext(), 17170444));
            }
            p0.h hVar = new p0.h(context);
            this.f2168i = hVar;
            hVar.setLayoutParams(new LinearLayout.LayoutParams(-1, -1));
        } catch (Throwable th2) {
            obtainStyledAttributes.recycle();
            throw th2;
        }
    }
}
