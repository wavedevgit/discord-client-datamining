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
    private final BlurAlgorithm f22827b;

    /* renamed from: c  reason: collision with root package name */
    private eightbitlab.com.blurview.a f22828c;

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f22829d;

    /* renamed from: e  reason: collision with root package name */
    final View f22830e;

    /* renamed from: f  reason: collision with root package name */
    private int f22831f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f22832g;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22837l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f22838m;

    /* renamed from: a  reason: collision with root package name */
    private float f22826a = 16.0f;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f22833h = new int[2];

    /* renamed from: i  reason: collision with root package name */
    private final int[] f22834i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f22835j = new a();

    /* renamed from: k  reason: collision with root package name */
    private boolean f22836k = true;

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
        this.f22832g = viewGroup;
        this.f22830e = view;
        this.f22831f = i10;
        this.f22827b = blurAlgorithm;
        if (blurAlgorithm instanceof e) {
            ((e) blurAlgorithm).f(view.getContext());
        }
        i(view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void h() {
        this.f22829d = this.f22827b.e(this.f22829d, this.f22826a);
        if (!this.f22827b.b()) {
            this.f22828c.setBitmap(this.f22829d);
        }
    }

    private void j() {
        this.f22832g.getLocationOnScreen(this.f22833h);
        this.f22830e.getLocationOnScreen(this.f22834i);
        int[] iArr = this.f22834i;
        int i10 = iArr[0];
        int[] iArr2 = this.f22833h;
        int i11 = i10 - iArr2[0];
        int i12 = iArr[1] - iArr2[1];
        float height = this.f22830e.getHeight() / this.f22829d.getHeight();
        float width = this.f22830e.getWidth() / this.f22829d.getWidth();
        this.f22828c.translate((-i11) / width, (-i12) / height);
        this.f22828c.scale(1.0f / width, 1.0f / height);
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade a(int i10) {
        if (this.f22831f != i10) {
            this.f22831f = i10;
            this.f22830e.invalidate();
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade b(boolean z10) {
        this.f22836k = z10;
        c(z10);
        this.f22830e.invalidate();
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade c(boolean z10) {
        this.f22832g.getViewTreeObserver().removeOnPreDrawListener(this.f22835j);
        if (z10) {
            this.f22832g.getViewTreeObserver().addOnPreDrawListener(this.f22835j);
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade d(Drawable drawable) {
        this.f22838m = drawable;
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void destroy() {
        c(false);
        this.f22827b.destroy();
        this.f22837l = false;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void e() {
        i(this.f22830e.getMeasuredWidth(), this.f22830e.getMeasuredHeight());
    }

    @Override // eightbitlab.com.blurview.BlurController
    public boolean f(Canvas canvas) {
        if (this.f22836k && this.f22837l) {
            if (canvas instanceof eightbitlab.com.blurview.a) {
                return false;
            }
            float height = this.f22830e.getHeight() / this.f22829d.getHeight();
            canvas.save();
            canvas.scale(this.f22830e.getWidth() / this.f22829d.getWidth(), height);
            this.f22827b.c(canvas, this.f22829d);
            canvas.restore();
            int i10 = this.f22831f;
            if (i10 != 0) {
                canvas.drawColor(i10);
            }
        }
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade g(float f10) {
        this.f22826a = f10;
        return this;
    }

    void i(int i10, int i11) {
        c(true);
        g gVar = new g(this.f22827b.d());
        if (gVar.b(i10, i11)) {
            this.f22830e.setWillNotDraw(true);
            return;
        }
        this.f22830e.setWillNotDraw(false);
        g.a d10 = gVar.d(i10, i11);
        this.f22829d = Bitmap.createBitmap(d10.f22855a, d10.f22856b, this.f22827b.a());
        this.f22828c = new eightbitlab.com.blurview.a(this.f22829d);
        this.f22837l = true;
        k();
    }

    void k() {
        if (this.f22836k && this.f22837l) {
            Drawable drawable = this.f22838m;
            if (drawable == null) {
                this.f22829d.eraseColor(0);
            } else {
                drawable.draw(this.f22828c);
            }
            this.f22828c.save();
            j();
            this.f22832g.draw(this.f22828c);
            this.f22828c.restore();
            h();
        }
    }
}
