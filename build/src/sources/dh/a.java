package dh;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.FrameLayout;
import bh.k;
import com.google.android.material.internal.j;
import com.google.android.material.internal.m;
import dh.b;
import java.lang.ref.WeakReference;
import java.text.NumberFormat;
import qh.d;
import th.h;
import th.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable implements j.b {

    /* renamed from: y  reason: collision with root package name */
    private static final int f21690y = k.f6943r;

    /* renamed from: z  reason: collision with root package name */
    private static final int f21691z = bh.b.f6725b;

    /* renamed from: d  reason: collision with root package name */
    private final WeakReference f21692d;

    /* renamed from: e  reason: collision with root package name */
    private final h f21693e;

    /* renamed from: i  reason: collision with root package name */
    private final j f21694i;

    /* renamed from: o  reason: collision with root package name */
    private final Rect f21695o;

    /* renamed from: p  reason: collision with root package name */
    private final b f21696p;

    /* renamed from: q  reason: collision with root package name */
    private float f21697q;

    /* renamed from: r  reason: collision with root package name */
    private float f21698r;

    /* renamed from: s  reason: collision with root package name */
    private int f21699s;

    /* renamed from: t  reason: collision with root package name */
    private float f21700t;

    /* renamed from: u  reason: collision with root package name */
    private float f21701u;

    /* renamed from: v  reason: collision with root package name */
    private float f21702v;

    /* renamed from: w  reason: collision with root package name */
    private WeakReference f21703w;

    /* renamed from: x  reason: collision with root package name */
    private WeakReference f21704x;

    private a(Context context, int i10, int i11, int i12, b.a aVar) {
        int k10;
        int j10;
        this.f21692d = new WeakReference(context);
        m.c(context);
        this.f21695o = new Rect();
        j jVar = new j(this);
        this.f21694i = jVar;
        jVar.g().setTextAlign(Paint.Align.CENTER);
        b bVar = new b(context, i10, i11, i12, aVar);
        this.f21696p = bVar;
        if (D()) {
            k10 = bVar.o();
        } else {
            k10 = bVar.k();
        }
        if (D()) {
            j10 = bVar.n();
        } else {
            j10 = bVar.j();
        }
        this.f21693e = new h(l.b(context, k10, j10).m());
        R();
    }

    private float A(float f10) {
        return (this.f21698r - this.f21702v) + f10;
    }

    private int B() {
        int u10;
        int i10;
        if (D()) {
            u10 = this.f21696p.t();
        } else {
            u10 = this.f21696p.u();
        }
        if (this.f21696p.f21715k == 1) {
            if (D()) {
                i10 = this.f21696p.f21714j;
            } else {
                i10 = this.f21696p.f21713i;
            }
            u10 += i10;
        }
        return u10 + this.f21696p.d();
    }

    private int C() {
        int E = this.f21696p.E();
        if (D()) {
            E = this.f21696p.D();
            Context context = (Context) this.f21692d.get();
            if (context != null) {
                E = ch.a.c(E, E - this.f21696p.v(), ch.a.b(0.0f, 1.0f, 0.3f, 1.0f, qh.c.f(context) - 1.0f));
            }
        }
        if (this.f21696p.f21715k == 0) {
            E -= Math.round(this.f21702v);
        }
        return E + this.f21696p.e();
    }

    private boolean D() {
        if (!F() && !E()) {
            return false;
        }
        return true;
    }

    private void G() {
        this.f21694i.g().setAlpha(getAlpha());
        invalidateSelf();
    }

    private void H() {
        ColorStateList valueOf = ColorStateList.valueOf(this.f21696p.g());
        if (this.f21693e.D() != valueOf) {
            this.f21693e.f0(valueOf);
            invalidateSelf();
        }
    }

    private void I() {
        this.f21694i.l(true);
        K();
        a0();
        invalidateSelf();
    }

    private void J() {
        FrameLayout frameLayout;
        WeakReference weakReference = this.f21703w;
        if (weakReference != null && weakReference.get() != null) {
            View view = (View) this.f21703w.get();
            WeakReference weakReference2 = this.f21704x;
            if (weakReference2 != null) {
                frameLayout = (FrameLayout) weakReference2.get();
            } else {
                frameLayout = null;
            }
            Z(view, frameLayout);
        }
    }

    private void K() {
        int k10;
        int j10;
        Context context = (Context) this.f21692d.get();
        if (context == null) {
            return;
        }
        h hVar = this.f21693e;
        if (D()) {
            k10 = this.f21696p.o();
        } else {
            k10 = this.f21696p.k();
        }
        if (D()) {
            j10 = this.f21696p.n();
        } else {
            j10 = this.f21696p.j();
        }
        hVar.setShapeAppearanceModel(l.b(context, k10, j10).m());
        invalidateSelf();
    }

    private void L() {
        d dVar;
        Context context = (Context) this.f21692d.get();
        if (context == null || this.f21694i.e() == (dVar = new d(context, this.f21696p.C()))) {
            return;
        }
        this.f21694i.k(dVar, context);
        M();
        a0();
        invalidateSelf();
    }

    private void M() {
        this.f21694i.g().setColor(this.f21696p.l());
        invalidateSelf();
    }

    private void N() {
        b0();
        this.f21694i.l(true);
        a0();
        invalidateSelf();
    }

    private void O() {
        if (!F()) {
            I();
        }
    }

    private void P() {
        I();
    }

    private void Q() {
        setVisible(this.f21696p.I(), false);
    }

    private void R() {
        K();
        L();
        N();
        I();
        G();
        H();
        M();
        J();
        a0();
        Q();
    }

    private static void Y(View view) {
        ViewGroup viewGroup = (ViewGroup) view.getParent();
        viewGroup.setClipChildren(false);
        viewGroup.setClipToPadding(false);
    }

    private void a0() {
        View view;
        Context context = (Context) this.f21692d.get();
        WeakReference weakReference = this.f21703w;
        ViewGroup viewGroup = null;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        if (context != null && view != null) {
            Rect rect = new Rect();
            rect.set(this.f21695o);
            Rect rect2 = new Rect();
            view.getDrawingRect(rect2);
            WeakReference weakReference2 = this.f21704x;
            if (weakReference2 != null) {
                viewGroup = (ViewGroup) weakReference2.get();
            }
            if (viewGroup != null) {
                viewGroup.offsetDescendantRectToMyCoords(view, rect2);
            }
            d(rect2, view);
            c.g(this.f21695o, this.f21697q, this.f21698r, this.f21701u, this.f21702v);
            float f10 = this.f21700t;
            if (f10 != -1.0f) {
                this.f21693e.b0(f10);
            }
            if (!rect.equals(this.f21695o)) {
                this.f21693e.setBounds(this.f21695o);
            }
        }
    }

    private void b(View view) {
        ViewParent m10 = m();
        if (m10 == null) {
            m10 = view.getParent();
        }
        if ((m10 instanceof View) && (m10.getParent() instanceof View)) {
            c(view, (View) m10.getParent());
        }
    }

    private void b0() {
        if (q() != -2) {
            this.f21699s = ((int) Math.pow(10.0d, q() - 1.0d)) - 1;
        } else {
            this.f21699s = r();
        }
    }

    private void c(View view, View view2) {
        float f10;
        float f11;
        boolean z10;
        ViewParent m10 = m();
        if (m10 == null) {
            float y10 = view.getY();
            f11 = view.getX();
            m10 = view.getParent();
            f10 = y10;
        } else {
            f10 = 0.0f;
            f11 = 0.0f;
        }
        while (true) {
            z10 = m10 instanceof View;
            if (!z10 || m10 == view2) {
                break;
            }
            ViewParent parent = m10.getParent();
            if (!(parent instanceof ViewGroup) || ((ViewGroup) parent).getClipChildren()) {
                break;
            }
            View view3 = (View) m10;
            f10 += view3.getY();
            f11 += view3.getX();
            m10 = m10.getParent();
        }
        if (z10) {
            float A = A(f10);
            float p10 = p(f11);
            View view4 = (View) m10;
            float k10 = k(view4.getHeight(), f10);
            float v10 = v(view4.getWidth(), f11);
            if (A < 0.0f) {
                this.f21698r += Math.abs(A);
            }
            if (p10 < 0.0f) {
                this.f21697q += Math.abs(p10);
            }
            if (k10 > 0.0f) {
                this.f21698r -= Math.abs(k10);
            }
            if (v10 > 0.0f) {
                this.f21697q -= Math.abs(v10);
            }
        }
    }

    private void d(Rect rect, View view) {
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        if (D()) {
            f10 = this.f21696p.f21708d;
        } else {
            f10 = this.f21696p.f21707c;
        }
        this.f21700t = f10;
        if (f10 != -1.0f) {
            this.f21701u = f10;
            this.f21702v = f10;
        } else {
            if (D()) {
                f11 = this.f21696p.f21711g;
            } else {
                f11 = this.f21696p.f21709e;
            }
            this.f21701u = Math.round(f11 / 2.0f);
            if (D()) {
                f12 = this.f21696p.f21712h;
            } else {
                f12 = this.f21696p.f21710f;
            }
            this.f21702v = Math.round(f12 / 2.0f);
        }
        if (D()) {
            String j10 = j();
            this.f21701u = Math.max(this.f21701u, (this.f21694i.h(j10) / 2.0f) + this.f21696p.i());
            float max = Math.max(this.f21702v, (this.f21694i.f(j10) / 2.0f) + this.f21696p.m());
            this.f21702v = max;
            this.f21701u = Math.max(this.f21701u, max);
        }
        int C = C();
        int h10 = this.f21696p.h();
        if (h10 != 8388691 && h10 != 8388693) {
            this.f21698r = rect.top + C;
        } else {
            this.f21698r = rect.bottom - C;
        }
        int B = B();
        int h11 = this.f21696p.h();
        if (h11 != 8388659 && h11 != 8388691) {
            if (this.f21696p.f21716l == 0) {
                if (view.getLayoutDirection() == 0) {
                    f14 = (rect.right + this.f21701u) - B;
                } else {
                    f14 = (rect.left - this.f21701u) + B;
                }
            } else if (view.getLayoutDirection() == 0) {
                f14 = (rect.right - this.f21701u) + ((this.f21702v * 2.0f) - B);
            } else {
                f14 = (rect.left + this.f21701u) - ((this.f21702v * 2.0f) - B);
            }
            this.f21697q = f14;
        } else {
            if (this.f21696p.f21716l == 0) {
                if (view.getLayoutDirection() == 0) {
                    f13 = (rect.left + this.f21701u) - ((this.f21702v * 2.0f) - B);
                } else {
                    f13 = (rect.right - this.f21701u) + ((this.f21702v * 2.0f) - B);
                }
            } else if (view.getLayoutDirection() == 0) {
                f13 = (rect.left - this.f21701u) + B;
            } else {
                f13 = (rect.right + this.f21701u) - B;
            }
            this.f21697q = f13;
        }
        if (this.f21696p.H()) {
            b(view);
        } else {
            c(view, null);
        }
    }

    public static a g(Context context) {
        return new a(context, 0, f21691z, f21690y, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a h(Context context, b.a aVar) {
        return new a(context, 0, f21691z, f21690y, aVar);
    }

    private void i(Canvas canvas) {
        int round;
        String j10 = j();
        if (j10 != null) {
            Rect rect = new Rect();
            this.f21694i.g().getTextBounds(j10, 0, j10.length(), rect);
            float exactCenterY = this.f21698r - rect.exactCenterY();
            float f10 = this.f21697q;
            if (rect.bottom <= 0) {
                round = (int) exactCenterY;
            } else {
                round = Math.round(exactCenterY);
            }
            canvas.drawText(j10, f10, round, this.f21694i.g());
        }
    }

    private String j() {
        if (F()) {
            return y();
        }
        if (E()) {
            return t();
        }
        return null;
    }

    private float k(float f10, float f11) {
        return ((this.f21698r + this.f21702v) - f10) + f11;
    }

    private CharSequence n() {
        return this.f21696p.r();
    }

    private float p(float f10) {
        return (this.f21697q - this.f21701u) + f10;
    }

    private String t() {
        if (this.f21699s != -2 && s() > this.f21699s) {
            Context context = (Context) this.f21692d.get();
            if (context == null) {
                return "";
            }
            return String.format(this.f21696p.z(), context.getString(bh.j.f6915p), Integer.valueOf(this.f21699s), "+");
        }
        return NumberFormat.getInstance(this.f21696p.z()).format(s());
    }

    private String u() {
        Context context;
        if (this.f21696p.s() == 0 || (context = (Context) this.f21692d.get()) == null) {
            return null;
        }
        if (this.f21699s != -2 && s() > this.f21699s) {
            return context.getString(this.f21696p.p(), Integer.valueOf(this.f21699s));
        }
        return context.getResources().getQuantityString(this.f21696p.s(), s(), Integer.valueOf(s()));
    }

    private float v(float f10, float f11) {
        return ((this.f21697q + this.f21701u) - f10) + f11;
    }

    private String y() {
        String x10 = x();
        int q10 = q();
        if (q10 != -2 && x10 != null && x10.length() > q10) {
            Context context = (Context) this.f21692d.get();
            if (context == null) {
                return "";
            }
            return String.format(context.getString(bh.j.f6908i), x10.substring(0, q10 - 1), "…");
        }
        return x10;
    }

    private CharSequence z() {
        CharSequence q10 = this.f21696p.q();
        if (q10 != null) {
            return q10;
        }
        return x();
    }

    public boolean E() {
        if (!this.f21696p.G() && this.f21696p.F()) {
            return true;
        }
        return false;
    }

    public boolean F() {
        return this.f21696p.G();
    }

    public void S(int i10) {
        this.f21696p.L(i10);
        H();
    }

    public void T(int i10) {
        b bVar = this.f21696p;
        if (bVar.f21716l != i10) {
            bVar.f21716l = i10;
            a0();
        }
    }

    public void U(int i10) {
        if (this.f21694i.g().getColor() != i10) {
            this.f21696p.M(i10);
            M();
        }
    }

    public void V(int i10) {
        int max = Math.max(0, i10);
        if (this.f21696p.y() != max) {
            this.f21696p.N(max);
            O();
        }
    }

    public void W(String str) {
        if (!TextUtils.equals(this.f21696p.B(), str)) {
            this.f21696p.O(str);
            P();
        }
    }

    public void X(boolean z10) {
        this.f21696p.P(z10);
        Q();
    }

    public void Z(View view, FrameLayout frameLayout) {
        this.f21703w = new WeakReference(view);
        this.f21704x = new WeakReference(frameLayout);
        Y(view);
        a0();
        invalidateSelf();
    }

    @Override // com.google.android.material.internal.j.b
    public void a() {
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (!getBounds().isEmpty() && getAlpha() != 0 && isVisible()) {
            this.f21693e.draw(canvas);
            if (D()) {
                i(canvas);
            }
        }
    }

    public void e() {
        if (this.f21696p.F()) {
            this.f21696p.a();
            O();
        }
    }

    public void f() {
        if (this.f21696p.G()) {
            this.f21696p.b();
            P();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f21696p.f();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f21695o.height();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f21695o.width();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        return false;
    }

    public CharSequence l() {
        if (!isVisible()) {
            return null;
        }
        if (F()) {
            return z();
        }
        if (E()) {
            return u();
        }
        return n();
    }

    public FrameLayout m() {
        WeakReference weakReference = this.f21704x;
        if (weakReference != null) {
            return (FrameLayout) weakReference.get();
        }
        return null;
    }

    public int o() {
        return this.f21696p.u();
    }

    @Override // android.graphics.drawable.Drawable, com.google.android.material.internal.j.b
    public boolean onStateChange(int[] iArr) {
        return super.onStateChange(iArr);
    }

    public int q() {
        return this.f21696p.w();
    }

    public int r() {
        return this.f21696p.x();
    }

    public int s() {
        if (this.f21696p.F()) {
            return this.f21696p.y();
        }
        return 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f21696p.K(i10);
        G();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b.a w() {
        return this.f21696p.A();
    }

    public String x() {
        return this.f21696p.B();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
