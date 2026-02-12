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
    private final BlurAlgorithm f22832b;

    /* renamed from: c  reason: collision with root package name */
    private eightbitlab.com.blurview.a f22833c;

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f22834d;

    /* renamed from: e  reason: collision with root package name */
    final View f22835e;

    /* renamed from: f  reason: collision with root package name */
    private int f22836f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f22837g;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22842l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f22843m;

    /* renamed from: a  reason: collision with root package name */
    private float f22831a = 16.0f;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f22838h = new int[2];

    /* renamed from: i  reason: collision with root package name */
    private final int[] f22839i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f22840j = new a();

    /* renamed from: k  reason: collision with root package name */
    private boolean f22841k = true;

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
        this.f22837g = viewGroup;
        this.f22835e = view;
        this.f22836f = i10;
        this.f22832b = blurAlgorithm;
        if (blurAlgorithm instanceof e) {
            ((e) blurAlgorithm).f(view.getContext());
        }
        i(view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void h() {
        this.f22834d = this.f22832b.e(this.f22834d, this.f22831a);
        if (!this.f22832b.b()) {
            this.f22833c.setBitmap(this.f22834d);
        }
    }

    private void j() {
        this.f22837g.getLocationOnScreen(this.f22838h);
        this.f22835e.getLocationOnScreen(this.f22839i);
        int[] iArr = this.f22839i;
        int i10 = iArr[0];
        int[] iArr2 = this.f22838h;
        int i11 = i10 - iArr2[0];
        int i12 = iArr[1] - iArr2[1];
        float height = this.f22835e.getHeight() / this.f22834d.getHeight();
        float width = this.f22835e.getWidth() / this.f22834d.getWidth();
        this.f22833c.translate((-i11) / width, (-i12) / height);
        this.f22833c.scale(1.0f / width, 1.0f / height);
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade a(int i10) {
        if (this.f22836f != i10) {
            this.f22836f = i10;
            this.f22835e.invalidate();
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade b(boolean z10) {
        this.f22841k = z10;
        c(z10);
        this.f22835e.invalidate();
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade c(boolean z10) {
        this.f22837g.getViewTreeObserver().removeOnPreDrawListener(this.f22840j);
        if (z10) {
            this.f22837g.getViewTreeObserver().addOnPreDrawListener(this.f22840j);
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade d(Drawable drawable) {
        this.f22843m = drawable;
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void destroy() {
        c(false);
        this.f22832b.destroy();
        this.f22842l = false;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void e() {
        i(this.f22835e.getMeasuredWidth(), this.f22835e.getMeasuredHeight());
    }

    @Override // eightbitlab.com.blurview.BlurController
    public boolean f(Canvas canvas) {
        if (this.f22841k && this.f22842l) {
            if (canvas instanceof eightbitlab.com.blurview.a) {
                return false;
            }
            float height = this.f22835e.getHeight() / this.f22834d.getHeight();
            canvas.save();
            canvas.scale(this.f22835e.getWidth() / this.f22834d.getWidth(), height);
            this.f22832b.c(canvas, this.f22834d);
            canvas.restore();
            int i10 = this.f22836f;
            if (i10 != 0) {
                canvas.drawColor(i10);
            }
        }
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade g(float f10) {
        this.f22831a = f10;
        return this;
    }

    void i(int i10, int i11) {
        c(true);
        g gVar = new g(this.f22832b.d());
        if (gVar.b(i10, i11)) {
            this.f22835e.setWillNotDraw(true);
            return;
        }
        this.f22835e.setWillNotDraw(false);
        g.a d10 = gVar.d(i10, i11);
        this.f22834d = Bitmap.createBitmap(d10.f22860a, d10.f22861b, this.f22832b.a());
        this.f22833c = new eightbitlab.com.blurview.a(this.f22834d);
        this.f22842l = true;
        k();
    }

    void k() {
        if (this.f22841k && this.f22842l) {
            Drawable drawable = this.f22843m;
            if (drawable == null) {
                this.f22834d.eraseColor(0);
            } else {
                drawable.draw(this.f22833c);
            }
            this.f22833c.save();
            j();
            this.f22837g.draw(this.f22833c);
            this.f22833c.restore();
            h();
        }
    }
}
