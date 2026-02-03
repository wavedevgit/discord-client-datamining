package eightbitlab.com.blurview;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import eightbitlab.com.blurview.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements BlurController {

    /* renamed from: b  reason: collision with root package name */
    private final BlurAlgorithm f22859b;

    /* renamed from: c  reason: collision with root package name */
    private eightbitlab.com.blurview.a f22860c;

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f22861d;

    /* renamed from: e  reason: collision with root package name */
    final View f22862e;

    /* renamed from: f  reason: collision with root package name */
    private int f22863f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f22864g;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22869l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f22870m;

    /* renamed from: a  reason: collision with root package name */
    private float f22858a = 16.0f;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f22865h = new int[2];

    /* renamed from: i  reason: collision with root package name */
    private final int[] f22866i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f22867j = new a();

    /* renamed from: k  reason: collision with root package name */
    private boolean f22868k = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ViewTreeObserver.OnPreDrawListener {
        a() {
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            c.this.k();
            return true;
        }
    }

    public c(View view, ViewGroup viewGroup, int i10, BlurAlgorithm blurAlgorithm) {
        this.f22864g = viewGroup;
        this.f22862e = view;
        this.f22863f = i10;
        this.f22859b = blurAlgorithm;
        if (blurAlgorithm instanceof e) {
            ((e) blurAlgorithm).f(view.getContext());
        }
        i(view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void h() {
        this.f22861d = this.f22859b.e(this.f22861d, this.f22858a);
        if (!this.f22859b.b()) {
            this.f22860c.setBitmap(this.f22861d);
        }
    }

    private void j() {
        this.f22864g.getLocationOnScreen(this.f22865h);
        this.f22862e.getLocationOnScreen(this.f22866i);
        int[] iArr = this.f22866i;
        int i10 = iArr[0];
        int[] iArr2 = this.f22865h;
        int i11 = i10 - iArr2[0];
        int i12 = iArr[1] - iArr2[1];
        float height = this.f22862e.getHeight() / this.f22861d.getHeight();
        float width = this.f22862e.getWidth() / this.f22861d.getWidth();
        this.f22860c.translate((-i11) / width, (-i12) / height);
        this.f22860c.scale(1.0f / width, 1.0f / height);
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade a(int i10) {
        if (this.f22863f != i10) {
            this.f22863f = i10;
            this.f22862e.invalidate();
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade b(boolean z10) {
        this.f22868k = z10;
        c(z10);
        this.f22862e.invalidate();
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade c(boolean z10) {
        this.f22864g.getViewTreeObserver().removeOnPreDrawListener(this.f22867j);
        if (z10) {
            this.f22864g.getViewTreeObserver().addOnPreDrawListener(this.f22867j);
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade d(Drawable drawable) {
        this.f22870m = drawable;
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void destroy() {
        c(false);
        this.f22859b.destroy();
        this.f22869l = false;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void e() {
        i(this.f22862e.getMeasuredWidth(), this.f22862e.getMeasuredHeight());
    }

    @Override // eightbitlab.com.blurview.BlurController
    public boolean f(Canvas canvas) {
        if (this.f22868k && this.f22869l) {
            if (canvas instanceof eightbitlab.com.blurview.a) {
                return false;
            }
            float height = this.f22862e.getHeight() / this.f22861d.getHeight();
            canvas.save();
            canvas.scale(this.f22862e.getWidth() / this.f22861d.getWidth(), height);
            this.f22859b.c(canvas, this.f22861d);
            canvas.restore();
            int i10 = this.f22863f;
            if (i10 != 0) {
                canvas.drawColor(i10);
            }
        }
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade g(float f10) {
        this.f22858a = f10;
        return this;
    }

    void i(int i10, int i11) {
        c(true);
        g gVar = new g(this.f22859b.d());
        if (gVar.b(i10, i11)) {
            this.f22862e.setWillNotDraw(true);
            return;
        }
        this.f22862e.setWillNotDraw(false);
        g.a d10 = gVar.d(i10, i11);
        this.f22861d = Bitmap.createBitmap(d10.f22887a, d10.f22888b, this.f22859b.a());
        this.f22860c = new eightbitlab.com.blurview.a(this.f22861d);
        this.f22869l = true;
        k();
    }

    void k() {
        if (this.f22868k && this.f22869l) {
            Drawable drawable = this.f22870m;
            if (drawable == null) {
                this.f22861d.eraseColor(0);
            } else {
                drawable.draw(this.f22860c);
            }
            this.f22860c.save();
            j();
            this.f22864g.draw(this.f22860c);
            this.f22860c.restore();
            h();
        }
    }
}
