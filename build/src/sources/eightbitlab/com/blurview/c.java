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
    private final BlurAlgorithm f22831b;

    /* renamed from: c  reason: collision with root package name */
    private eightbitlab.com.blurview.a f22832c;

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f22833d;

    /* renamed from: e  reason: collision with root package name */
    final View f22834e;

    /* renamed from: f  reason: collision with root package name */
    private int f22835f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f22836g;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22841l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f22842m;

    /* renamed from: a  reason: collision with root package name */
    private float f22830a = 16.0f;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f22837h = new int[2];

    /* renamed from: i  reason: collision with root package name */
    private final int[] f22838i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f22839j = new a();

    /* renamed from: k  reason: collision with root package name */
    private boolean f22840k = true;

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
        this.f22836g = viewGroup;
        this.f22834e = view;
        this.f22835f = i10;
        this.f22831b = blurAlgorithm;
        if (blurAlgorithm instanceof e) {
            ((e) blurAlgorithm).f(view.getContext());
        }
        i(view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void h() {
        this.f22833d = this.f22831b.e(this.f22833d, this.f22830a);
        if (!this.f22831b.b()) {
            this.f22832c.setBitmap(this.f22833d);
        }
    }

    private void j() {
        this.f22836g.getLocationOnScreen(this.f22837h);
        this.f22834e.getLocationOnScreen(this.f22838i);
        int[] iArr = this.f22838i;
        int i10 = iArr[0];
        int[] iArr2 = this.f22837h;
        int i11 = i10 - iArr2[0];
        int i12 = iArr[1] - iArr2[1];
        float height = this.f22834e.getHeight() / this.f22833d.getHeight();
        float width = this.f22834e.getWidth() / this.f22833d.getWidth();
        this.f22832c.translate((-i11) / width, (-i12) / height);
        this.f22832c.scale(1.0f / width, 1.0f / height);
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade a(int i10) {
        if (this.f22835f != i10) {
            this.f22835f = i10;
            this.f22834e.invalidate();
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade b(boolean z10) {
        this.f22840k = z10;
        c(z10);
        this.f22834e.invalidate();
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade c(boolean z10) {
        this.f22836g.getViewTreeObserver().removeOnPreDrawListener(this.f22839j);
        if (z10) {
            this.f22836g.getViewTreeObserver().addOnPreDrawListener(this.f22839j);
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade d(Drawable drawable) {
        this.f22842m = drawable;
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void destroy() {
        c(false);
        this.f22831b.destroy();
        this.f22841l = false;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void e() {
        i(this.f22834e.getMeasuredWidth(), this.f22834e.getMeasuredHeight());
    }

    @Override // eightbitlab.com.blurview.BlurController
    public boolean f(Canvas canvas) {
        if (this.f22840k && this.f22841l) {
            if (canvas instanceof eightbitlab.com.blurview.a) {
                return false;
            }
            float height = this.f22834e.getHeight() / this.f22833d.getHeight();
            canvas.save();
            canvas.scale(this.f22834e.getWidth() / this.f22833d.getWidth(), height);
            this.f22831b.c(canvas, this.f22833d);
            canvas.restore();
            int i10 = this.f22835f;
            if (i10 != 0) {
                canvas.drawColor(i10);
            }
        }
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade g(float f10) {
        this.f22830a = f10;
        return this;
    }

    void i(int i10, int i11) {
        c(true);
        g gVar = new g(this.f22831b.d());
        if (gVar.b(i10, i11)) {
            this.f22834e.setWillNotDraw(true);
            return;
        }
        this.f22834e.setWillNotDraw(false);
        g.a d10 = gVar.d(i10, i11);
        this.f22833d = Bitmap.createBitmap(d10.f22859a, d10.f22860b, this.f22831b.a());
        this.f22832c = new eightbitlab.com.blurview.a(this.f22833d);
        this.f22841l = true;
        k();
    }

    void k() {
        if (this.f22840k && this.f22841l) {
            Drawable drawable = this.f22842m;
            if (drawable == null) {
                this.f22833d.eraseColor(0);
            } else {
                drawable.draw(this.f22832c);
            }
            this.f22832c.save();
            j();
            this.f22836g.draw(this.f22832c);
            this.f22832c.restore();
            h();
        }
    }
}
