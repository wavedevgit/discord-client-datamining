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
    private final BlurAlgorithm f21558b;

    /* renamed from: c  reason: collision with root package name */
    private eightbitlab.com.blurview.a f21559c;

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f21560d;

    /* renamed from: e  reason: collision with root package name */
    final View f21561e;

    /* renamed from: f  reason: collision with root package name */
    private int f21562f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f21563g;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21568l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f21569m;

    /* renamed from: a  reason: collision with root package name */
    private float f21557a = 16.0f;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f21564h = new int[2];

    /* renamed from: i  reason: collision with root package name */
    private final int[] f21565i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f21566j = new a();

    /* renamed from: k  reason: collision with root package name */
    private boolean f21567k = true;

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
        this.f21563g = viewGroup;
        this.f21561e = view;
        this.f21562f = i10;
        this.f21558b = blurAlgorithm;
        if (blurAlgorithm instanceof e) {
            ((e) blurAlgorithm).f(view.getContext());
        }
        i(view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void h() {
        this.f21560d = this.f21558b.e(this.f21560d, this.f21557a);
        if (!this.f21558b.b()) {
            this.f21559c.setBitmap(this.f21560d);
        }
    }

    private void j() {
        this.f21563g.getLocationOnScreen(this.f21564h);
        this.f21561e.getLocationOnScreen(this.f21565i);
        int[] iArr = this.f21565i;
        int i10 = iArr[0];
        int[] iArr2 = this.f21564h;
        int i11 = i10 - iArr2[0];
        int i12 = iArr[1] - iArr2[1];
        float height = this.f21561e.getHeight() / this.f21560d.getHeight();
        float width = this.f21561e.getWidth() / this.f21560d.getWidth();
        this.f21559c.translate((-i11) / width, (-i12) / height);
        this.f21559c.scale(1.0f / width, 1.0f / height);
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade a(int i10) {
        if (this.f21562f != i10) {
            this.f21562f = i10;
            this.f21561e.invalidate();
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade b(boolean z10) {
        this.f21567k = z10;
        c(z10);
        this.f21561e.invalidate();
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade c(boolean z10) {
        this.f21563g.getViewTreeObserver().removeOnPreDrawListener(this.f21566j);
        if (z10) {
            this.f21563g.getViewTreeObserver().addOnPreDrawListener(this.f21566j);
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade d(Drawable drawable) {
        this.f21569m = drawable;
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void destroy() {
        c(false);
        this.f21558b.destroy();
        this.f21568l = false;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void e() {
        i(this.f21561e.getMeasuredWidth(), this.f21561e.getMeasuredHeight());
    }

    @Override // eightbitlab.com.blurview.BlurController
    public boolean f(Canvas canvas) {
        if (this.f21567k && this.f21568l) {
            if (canvas instanceof eightbitlab.com.blurview.a) {
                return false;
            }
            float height = this.f21561e.getHeight() / this.f21560d.getHeight();
            canvas.save();
            canvas.scale(this.f21561e.getWidth() / this.f21560d.getWidth(), height);
            this.f21558b.c(canvas, this.f21560d);
            canvas.restore();
            int i10 = this.f21562f;
            if (i10 != 0) {
                canvas.drawColor(i10);
            }
        }
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade g(float f10) {
        this.f21557a = f10;
        return this;
    }

    void i(int i10, int i11) {
        c(true);
        g gVar = new g(this.f21558b.d());
        if (gVar.b(i10, i11)) {
            this.f21561e.setWillNotDraw(true);
            return;
        }
        this.f21561e.setWillNotDraw(false);
        g.a d10 = gVar.d(i10, i11);
        this.f21560d = Bitmap.createBitmap(d10.f21586a, d10.f21587b, this.f21558b.a());
        this.f21559c = new eightbitlab.com.blurview.a(this.f21560d);
        this.f21568l = true;
        k();
    }

    void k() {
        if (this.f21567k && this.f21568l) {
            Drawable drawable = this.f21569m;
            if (drawable == null) {
                this.f21560d.eraseColor(0);
            } else {
                drawable.draw(this.f21559c);
            }
            this.f21559c.save();
            j();
            this.f21563g.draw(this.f21559c);
            this.f21559c.restore();
            h();
        }
    }
}
