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
    private final BlurAlgorithm f21676b;

    /* renamed from: c  reason: collision with root package name */
    private eightbitlab.com.blurview.a f21677c;

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f21678d;

    /* renamed from: e  reason: collision with root package name */
    final View f21679e;

    /* renamed from: f  reason: collision with root package name */
    private int f21680f;

    /* renamed from: g  reason: collision with root package name */
    private final ViewGroup f21681g;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21686l;

    /* renamed from: m  reason: collision with root package name */
    private Drawable f21687m;

    /* renamed from: a  reason: collision with root package name */
    private float f21675a = 16.0f;

    /* renamed from: h  reason: collision with root package name */
    private final int[] f21682h = new int[2];

    /* renamed from: i  reason: collision with root package name */
    private final int[] f21683i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private final ViewTreeObserver.OnPreDrawListener f21684j = new a();

    /* renamed from: k  reason: collision with root package name */
    private boolean f21685k = true;

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
        this.f21681g = viewGroup;
        this.f21679e = view;
        this.f21680f = i10;
        this.f21676b = blurAlgorithm;
        if (blurAlgorithm instanceof e) {
            ((e) blurAlgorithm).f(view.getContext());
        }
        i(view.getMeasuredWidth(), view.getMeasuredHeight());
    }

    private void h() {
        this.f21678d = this.f21676b.e(this.f21678d, this.f21675a);
        if (!this.f21676b.b()) {
            this.f21677c.setBitmap(this.f21678d);
        }
    }

    private void j() {
        this.f21681g.getLocationOnScreen(this.f21682h);
        this.f21679e.getLocationOnScreen(this.f21683i);
        int[] iArr = this.f21683i;
        int i10 = iArr[0];
        int[] iArr2 = this.f21682h;
        int i11 = i10 - iArr2[0];
        int i12 = iArr[1] - iArr2[1];
        float height = this.f21679e.getHeight() / this.f21678d.getHeight();
        float width = this.f21679e.getWidth() / this.f21678d.getWidth();
        this.f21677c.translate((-i11) / width, (-i12) / height);
        this.f21677c.scale(1.0f / width, 1.0f / height);
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade a(int i10) {
        if (this.f21680f != i10) {
            this.f21680f = i10;
            this.f21679e.invalidate();
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade b(boolean z10) {
        this.f21685k = z10;
        c(z10);
        this.f21679e.invalidate();
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade c(boolean z10) {
        this.f21681g.getViewTreeObserver().removeOnPreDrawListener(this.f21684j);
        if (z10) {
            this.f21681g.getViewTreeObserver().addOnPreDrawListener(this.f21684j);
        }
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade d(Drawable drawable) {
        this.f21687m = drawable;
        return this;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void destroy() {
        c(false);
        this.f21676b.destroy();
        this.f21686l = false;
    }

    @Override // eightbitlab.com.blurview.BlurController
    public void e() {
        i(this.f21679e.getMeasuredWidth(), this.f21679e.getMeasuredHeight());
    }

    @Override // eightbitlab.com.blurview.BlurController
    public boolean f(Canvas canvas) {
        if (this.f21685k && this.f21686l) {
            if (canvas instanceof eightbitlab.com.blurview.a) {
                return false;
            }
            float height = this.f21679e.getHeight() / this.f21678d.getHeight();
            canvas.save();
            canvas.scale(this.f21679e.getWidth() / this.f21678d.getWidth(), height);
            this.f21676b.c(canvas, this.f21678d);
            canvas.restore();
            int i10 = this.f21680f;
            if (i10 != 0) {
                canvas.drawColor(i10);
            }
        }
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurViewFacade
    public BlurViewFacade g(float f10) {
        this.f21675a = f10;
        return this;
    }

    void i(int i10, int i11) {
        c(true);
        g gVar = new g(this.f21676b.d());
        if (gVar.b(i10, i11)) {
            this.f21679e.setWillNotDraw(true);
            return;
        }
        this.f21679e.setWillNotDraw(false);
        g.a d10 = gVar.d(i10, i11);
        this.f21678d = Bitmap.createBitmap(d10.f21704a, d10.f21705b, this.f21676b.a());
        this.f21677c = new eightbitlab.com.blurview.a(this.f21678d);
        this.f21686l = true;
        k();
    }

    void k() {
        if (this.f21685k && this.f21686l) {
            Drawable drawable = this.f21687m;
            if (drawable == null) {
                this.f21678d.eraseColor(0);
            } else {
                drawable.draw(this.f21677c);
            }
            this.f21677c.save();
            j();
            this.f21681g.draw(this.f21677c);
            this.f21677c.restore();
            h();
        }
    }
}
