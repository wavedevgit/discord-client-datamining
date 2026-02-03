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
    private final BlurAlgorithm f21550b;

    /* renamed from: c  reason: collision with root package name */
    private eightbitlab.com.blurview.a f21551c;

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f21552d;

    /* renamed from: e  reason: collision with root package name */
    final View f21553e;

    /* renamed from: f  reason: collision with root package name */
    private int f21554f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f21555g;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21560l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f21561m;

    /* renamed from: a  reason: collision with root package name */
    private float f21549a = 16.0f;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f21556h = new int[2];

    /* renamed from: i  reason: collision with root package name */
    private final int[] f21557i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f21558j = new a();

    /* renamed from: k  reason: collision with root package name */
    private boolean f21559k = true;

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
        this.f21555g = viewGroup;
        this.f21553e = view;
        this.f21554f = i10;
        this.f21550b = blurAlgorithm;
        if (blurAlgorithm instanceof e) {
            ((e) blurAlgorithm).f(view.getContext());
        }
        i(view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void h() {
        this.f21552d = this.f21550b.e(this.f21552d, this.f21549a);
        if (!this.f21550b.b()) {
            this.f21551c.setBitmap(this.f21552d);
        }
    }

    private void j() {
        this.f21555g.getLocationOnScreen(this.f21556h);
        this.f21553e.getLocationOnScreen(this.f21557i);
        int[] iArr = this.f21557i;
        int i10 = iArr[0];
        int[] iArr2 = this.f21556h;
        int i11 = i10 - iArr2[0];
        int i12 = iArr[1] - iArr2[1];
        float height = this.f21553e.getHeight() / this.f21552d.getHeight();
        float width = this.f21553e.getWidth() / this.f21552d.getWidth();
        this.f21551c.translate((-i11) / width, (-i12) / height);
        this.f21551c.scale(1.0f / width, 1.0f / height);
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade a(int i10) {
        if (this.f21554f != i10) {
            this.f21554f = i10;
            this.f21553e.invalidate();
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade b(boolean z10) {
        this.f21559k = z10;
        c(z10);
        this.f21553e.invalidate();
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade c(boolean z10) {
        this.f21555g.getViewTreeObserver().removeOnPreDrawListener(this.f21558j);
        if (z10) {
            this.f21555g.getViewTreeObserver().addOnPreDrawListener(this.f21558j);
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade d(Drawable drawable) {
        this.f21561m = drawable;
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void destroy() {
        c(false);
        this.f21550b.destroy();
        this.f21560l = false;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void e() {
        i(this.f21553e.getMeasuredWidth(), this.f21553e.getMeasuredHeight());
    }

    @Override // eightbitlab.com.blurview.BlurController
    public boolean f(Canvas canvas) {
        if (this.f21559k && this.f21560l) {
            if (canvas instanceof eightbitlab.com.blurview.a) {
                return false;
            }
            float height = this.f21553e.getHeight() / this.f21552d.getHeight();
            canvas.save();
            canvas.scale(this.f21553e.getWidth() / this.f21552d.getWidth(), height);
            this.f21550b.c(canvas, this.f21552d);
            canvas.restore();
            int i10 = this.f21554f;
            if (i10 != 0) {
                canvas.drawColor(i10);
            }
        }
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade g(float f10) {
        this.f21549a = f10;
        return this;
    }

    void i(int i10, int i11) {
        c(true);
        g gVar = new g(this.f21550b.d());
        if (gVar.b(i10, i11)) {
            this.f21553e.setWillNotDraw(true);
            return;
        }
        this.f21553e.setWillNotDraw(false);
        g.a d10 = gVar.d(i10, i11);
        this.f21552d = Bitmap.createBitmap(d10.f21578a, d10.f21579b, this.f21550b.a());
        this.f21551c = new eightbitlab.com.blurview.a(this.f21552d);
        this.f21560l = true;
        k();
    }

    void k() {
        if (this.f21559k && this.f21560l) {
            Drawable drawable = this.f21561m;
            if (drawable == null) {
                this.f21552d.eraseColor(0);
            } else {
                drawable.draw(this.f21551c);
            }
            this.f21551c.save();
            j();
            this.f21555g.draw(this.f21551c);
            this.f21551c.restore();
            h();
        }
    }
}
