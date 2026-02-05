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
    private final BlurAlgorithm f21597b;

    /* renamed from: c  reason: collision with root package name */
    private eightbitlab.com.blurview.a f21598c;

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f21599d;

    /* renamed from: e  reason: collision with root package name */
    final View f21600e;

    /* renamed from: f  reason: collision with root package name */
    private int f21601f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f21602g;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21607l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f21608m;

    /* renamed from: a  reason: collision with root package name */
    private float f21596a = 16.0f;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f21603h = new int[2];

    /* renamed from: i  reason: collision with root package name */
    private final int[] f21604i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f21605j = new a();

    /* renamed from: k  reason: collision with root package name */
    private boolean f21606k = true;

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
        this.f21602g = viewGroup;
        this.f21600e = view;
        this.f21601f = i10;
        this.f21597b = blurAlgorithm;
        if (blurAlgorithm instanceof e) {
            ((e) blurAlgorithm).f(view.getContext());
        }
        i(view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void h() {
        this.f21599d = this.f21597b.e(this.f21599d, this.f21596a);
        if (!this.f21597b.b()) {
            this.f21598c.setBitmap(this.f21599d);
        }
    }

    private void j() {
        this.f21602g.getLocationOnScreen(this.f21603h);
        this.f21600e.getLocationOnScreen(this.f21604i);
        int[] iArr = this.f21604i;
        int i10 = iArr[0];
        int[] iArr2 = this.f21603h;
        int i11 = i10 - iArr2[0];
        int i12 = iArr[1] - iArr2[1];
        float height = this.f21600e.getHeight() / this.f21599d.getHeight();
        float width = this.f21600e.getWidth() / this.f21599d.getWidth();
        this.f21598c.translate((-i11) / width, (-i12) / height);
        this.f21598c.scale(1.0f / width, 1.0f / height);
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade a(int i10) {
        if (this.f21601f != i10) {
            this.f21601f = i10;
            this.f21600e.invalidate();
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade b(boolean z10) {
        this.f21606k = z10;
        c(z10);
        this.f21600e.invalidate();
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade c(boolean z10) {
        this.f21602g.getViewTreeObserver().removeOnPreDrawListener(this.f21605j);
        if (z10) {
            this.f21602g.getViewTreeObserver().addOnPreDrawListener(this.f21605j);
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade d(Drawable drawable) {
        this.f21608m = drawable;
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void destroy() {
        c(false);
        this.f21597b.destroy();
        this.f21607l = false;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void e() {
        i(this.f21600e.getMeasuredWidth(), this.f21600e.getMeasuredHeight());
    }

    @Override // eightbitlab.com.blurview.BlurController
    public boolean f(Canvas canvas) {
        if (this.f21606k && this.f21607l) {
            if (canvas instanceof eightbitlab.com.blurview.a) {
                return false;
            }
            float height = this.f21600e.getHeight() / this.f21599d.getHeight();
            canvas.save();
            canvas.scale(this.f21600e.getWidth() / this.f21599d.getWidth(), height);
            this.f21597b.c(canvas, this.f21599d);
            canvas.restore();
            int i10 = this.f21601f;
            if (i10 != 0) {
                canvas.drawColor(i10);
            }
        }
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade g(float f10) {
        this.f21596a = f10;
        return this;
    }

    void i(int i10, int i11) {
        c(true);
        g gVar = new g(this.f21597b.d());
        if (gVar.b(i10, i11)) {
            this.f21600e.setWillNotDraw(true);
            return;
        }
        this.f21600e.setWillNotDraw(false);
        g.a d10 = gVar.d(i10, i11);
        this.f21599d = Bitmap.createBitmap(d10.f21625a, d10.f21626b, this.f21597b.a());
        this.f21598c = new eightbitlab.com.blurview.a(this.f21599d);
        this.f21607l = true;
        k();
    }

    void k() {
        if (this.f21606k && this.f21607l) {
            Drawable drawable = this.f21608m;
            if (drawable == null) {
                this.f21599d.eraseColor(0);
            } else {
                drawable.draw(this.f21598c);
            }
            this.f21598c.save();
            j();
            this.f21602g.draw(this.f21598c);
            this.f21598c.restore();
            h();
        }
    }
}
