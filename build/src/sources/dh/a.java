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
    private static final int f21691y = k.f6943r;

    /* renamed from: z  reason: collision with root package name */
    private static final int f21692z = bh.b.f6725b;

    /* renamed from: d  reason: collision with root package name */
    private final WeakReference f21693d;

    /* renamed from: e  reason: collision with root package name */
    private final h f21694e;

    /* renamed from: i  reason: collision with root package name */
    private final j f21695i;

    /* renamed from: o  reason: collision with root package name */
    private final Rect f21696o;

    /* renamed from: p  reason: collision with root package name */
    private final b f21697p;

    /* renamed from: q  reason: collision with root package name */
    private float f21698q;

    /* renamed from: r  reason: collision with root package name */
    private float f21699r;

    /* renamed from: s  reason: collision with root package name */
    private int f21700s;

    /* renamed from: t  reason: collision with root package name */
    private float f21701t;

    /* renamed from: u  reason: collision with root package name */
    private float f21702u;

    /* renamed from: v  reason: collision with root package name */
    private float f21703v;

    /* renamed from: w  reason: collision with root package name */
    private WeakReference f21704w;

    /* renamed from: x  reason: collision with root package name */
    private WeakReference f21705x;

    private a(Context context, int i10, int i11, int i12, b.a aVar) {
        int k10;
        int j10;
        this.f21693d = new WeakReference(context);
        m.c(context);
        this.f21696o = new Rect();
        j jVar = new j(this);
        this.f21695i = jVar;
        jVar.g().setTextAlign(Paint.Align.CENTER);
        b bVar = new b(context, i10, i11, i12, aVar);
        this.f21697p = bVar;
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
        this.f21694e = new h(l.b(context, k10, j10).m());
        R();
    }

    private float A(float f10) {
        return (this.f21699r - this.f21703v) + f10;
    }

    private int B() {
        int u10;
        int i10;
        if (D()) {
            u10 = this.f21697p.t();
        } else {
            u10 = this.f21697p.u();
        }
        if (this.f21697p.f21716k == 1) {
            if (D()) {
                i10 = this.f21697p.f21715j;
            } else {
                i10 = this.f21697p.f21714i;
            }
            u10 += i10;
        }
        return u10 + this.f21697p.d();
    }

    private int C() {
        int E = this.f21697p.E();
        if (D()) {
            E = this.f21697p.D();
            Context context = (Context) this.f21693d.get();
            if (context != null) {
                E = ch.a.c(E, E - this.f21697p.v(), ch.a.b(0.0f, 1.0f, 0.3f, 1.0f, qh.c.f(context) - 1.0f));
            }
        }
        if (this.f21697p.f21716k == 0) {
            E -= Math.round(this.f21703v);
        }
        return E + this.f21697p.e();
    }

    private boolean D() {
        if (!F() && !E()) {
            return false;
        }
        return true;
    }

    private void G() {
        this.f21695i.g().setAlpha(getAlpha());
        invalidateSelf();
    }

    private void H() {
        ColorStateList valueOf = ColorStateList.valueOf(this.f21697p.g());
        if (this.f21694e.D() != valueOf) {
            this.f21694e.f0(valueOf);
            invalidateSelf();
        }
    }

    private void I() {
        this.f21695i.l(true);
        K();
        a0();
        invalidateSelf();
    }

    private void J() {
        FrameLayout frameLayout;
        WeakReference weakReference = this.f21704w;
        if (weakReference != null && weakReference.get() != null) {
            View view = (View) this.f21704w.get();
            WeakReference weakReference2 = this.f21705x;
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
        Context context = (Context) this.f21693d.get();
        if (context == null) {
            return;
        }
        h hVar = this.f21694e;
        if (D()) {
            k10 = this.f21697p.o();
        } else {
            k10 = this.f21697p.k();
        }
        if (D()) {
            j10 = this.f21697p.n();
        } else {
            j10 = this.f21697p.j();
        }
        hVar.setShapeAppearanceModel(l.b(context, k10, j10).m());
        invalidateSelf();
    }

    private void L() {
        d dVar;
        Context context = (Context) this.f21693d.get();
        if (context == null || this.f21695i.e() == (dVar = new d(context, this.f21697p.C()))) {
            return;
        }
        this.f21695i.k(dVar, context);
        M();
        a0();
        invalidateSelf();
    }

    private void M() {
        this.f21695i.g().setColor(this.f21697p.l());
        invalidateSelf();
    }

    private void N() {
        b0();
        this.f21695i.l(true);
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
        setVisible(this.f21697p.I(), false);
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
        Context context = (Context) this.f21693d.get();
        WeakReference weakReference = this.f21704w;
        ViewGroup viewGroup = null;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        if (context != null && view != null) {
            Rect rect = new Rect();
            rect.set(this.f21696o);
            Rect rect2 = new Rect();
            view.getDrawingRect(rect2);
            WeakReference weakReference2 = this.f21705x;
            if (weakReference2 != null) {
                viewGroup = (ViewGroup) weakReference2.get();
            }
            if (viewGroup != null) {
                viewGroup.offsetDescendantRectToMyCoords(view, rect2);
            }
            d(rect2, view);
            c.g(this.f21696o, this.f21698q, this.f21699r, this.f21702u, this.f21703v);
            float f10 = this.f21701t;
            if (f10 != -1.0f) {
                this.f21694e.b0(f10);
            }
            if (!rect.equals(this.f21696o)) {
                this.f21694e.setBounds(this.f21696o);
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
            this.f21700s = ((int) Math.pow(10.0d, q() - 1.0d)) - 1;
        } else {
            this.f21700s = r();
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
                this.f21699r += Math.abs(A);
            }
            if (p10 < 0.0f) {
                this.f21698q += Math.abs(p10);
            }
            if (k10 > 0.0f) {
                this.f21699r -= Math.abs(k10);
            }
            if (v10 > 0.0f) {
                this.f21698q -= Math.abs(v10);
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
            f10 = this.f21697p.f21709d;
        } else {
            f10 = this.f21697p.f21708c;
        }
        this.f21701t = f10;
        if (f10 != -1.0f) {
            this.f21702u = f10;
            this.f21703v = f10;
        } else {
            if (D()) {
                f11 = this.f21697p.f21712g;
            } else {
                f11 = this.f21697p.f21710e;
            }
            this.f21702u = Math.round(f11 / 2.0f);
            if (D()) {
                f12 = this.f21697p.f21713h;
            } else {
                f12 = this.f21697p.f21711f;
            }
            this.f21703v = Math.round(f12 / 2.0f);
        }
        if (D()) {
            String j10 = j();
            this.f21702u = Math.max(this.f21702u, (this.f21695i.h(j10) / 2.0f) + this.f21697p.i());
            float max = Math.max(this.f21703v, (this.f21695i.f(j10) / 2.0f) + this.f21697p.m());
            this.f21703v = max;
            this.f21702u = Math.max(this.f21702u, max);
        }
        int C = C();
        int h10 = this.f21697p.h();
        if (h10 != 8388691 && h10 != 8388693) {
            this.f21699r = rect.top + C;
        } else {
            this.f21699r = rect.bottom - C;
        }
        int B = B();
        int h11 = this.f21697p.h();
        if (h11 != 8388659 && h11 != 8388691) {
            if (this.f21697p.f21717l == 0) {
                if (view.getLayoutDirection() == 0) {
                    f14 = (rect.right + this.f21702u) - B;
                } else {
                    f14 = (rect.left - this.f21702u) + B;
                }
            } else if (view.getLayoutDirection() == 0) {
                f14 = (rect.right - this.f21702u) + ((this.f21703v * 2.0f) - B);
            } else {
                f14 = (rect.left + this.f21702u) - ((this.f21703v * 2.0f) - B);
            }
            this.f21698q = f14;
        } else {
            if (this.f21697p.f21717l == 0) {
                if (view.getLayoutDirection() == 0) {
                    f13 = (rect.left + this.f21702u) - ((this.f21703v * 2.0f) - B);
                } else {
                    f13 = (rect.right - this.f21702u) + ((this.f21703v * 2.0f) - B);
                }
            } else if (view.getLayoutDirection() == 0) {
                f13 = (rect.left - this.f21702u) + B;
            } else {
                f13 = (rect.right + this.f21702u) - B;
            }
            this.f21698q = f13;
        }
        if (this.f21697p.H()) {
            b(view);
        } else {
            c(view, null);
        }
    }

    public static a g(Context context) {
        return new a(context, 0, f21692z, f21691y, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a h(Context context, b.a aVar) {
        return new a(context, 0, f21692z, f21691y, aVar);
    }

    private void i(Canvas canvas) {
        int round;
        String j10 = j();
        if (j10 != null) {
            Rect rect = new Rect();
            this.f21695i.g().getTextBounds(j10, 0, j10.length(), rect);
            float exactCenterY = this.f21699r - rect.exactCenterY();
            float f10 = this.f21698q;
            if (rect.bottom <= 0) {
                round = (int) exactCenterY;
            } else {
                round = Math.round(exactCenterY);
            }
            canvas.drawText(j10, f10, round, this.f21695i.g());
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
        return ((this.f21699r + this.f21703v) - f10) + f11;
    }

    private CharSequence n() {
        return this.f21697p.r();
    }

    private float p(float f10) {
        return (this.f21698q - this.f21702u) + f10;
    }

    private String t() {
        if (this.f21700s != -2 && s() > this.f21700s) {
            Context context = (Context) this.f21693d.get();
            if (context == null) {
                return "";
            }
            return String.format(this.f21697p.z(), context.getString(bh.j.f6915p), Integer.valueOf(this.f21700s), "+");
        }
        return NumberFormat.getInstance(this.f21697p.z()).format(s());
    }

    private String u() {
        Context context;
        if (this.f21697p.s() == 0 || (context = (Context) this.f21693d.get()) == null) {
            return null;
        }
        if (this.f21700s != -2 && s() > this.f21700s) {
            return context.getString(this.f21697p.p(), Integer.valueOf(this.f21700s));
        }
        return context.getResources().getQuantityString(this.f21697p.s(), s(), Integer.valueOf(s()));
    }

    private float v(float f10, float f11) {
        return ((this.f21698q + this.f21702u) - f10) + f11;
    }

    private String y() {
        String x10 = x();
        int q10 = q();
        if (q10 != -2 && x10 != null && x10.length() > q10) {
            Context context = (Context) this.f21693d.get();
            if (context == null) {
                return "";
            }
            return String.format(context.getString(bh.j.f6908i), x10.substring(0, q10 - 1), "…");
        }
        return x10;
    }

    private CharSequence z() {
        CharSequence q10 = this.f21697p.q();
        if (q10 != null) {
            return q10;
        }
        return x();
    }

    public boolean E() {
        if (!this.f21697p.G() && this.f21697p.F()) {
            return true;
        }
        return false;
    }

    public boolean F() {
        return this.f21697p.G();
    }

    public void S(int i10) {
        this.f21697p.L(i10);
        H();
    }

    public void T(int i10) {
        b bVar = this.f21697p;
        if (bVar.f21717l != i10) {
            bVar.f21717l = i10;
            a0();
        }
    }

    public void U(int i10) {
        if (this.f21695i.g().getColor() != i10) {
            this.f21697p.M(i10);
            M();
        }
    }

    public void V(int i10) {
        int max = Math.max(0, i10);
        if (this.f21697p.y() != max) {
            this.f21697p.N(max);
            O();
        }
    }

    public void W(String str) {
        if (!TextUtils.equals(this.f21697p.B(), str)) {
            this.f21697p.O(str);
            P();
        }
    }

    public void X(boolean z10) {
        this.f21697p.P(z10);
        Q();
    }

    public void Z(View view, FrameLayout frameLayout) {
        this.f21704w = new WeakReference(view);
        this.f21705x = new WeakReference(frameLayout);
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
            this.f21694e.draw(canvas);
            if (D()) {
                i(canvas);
            }
        }
    }

    public void e() {
        if (this.f21697p.F()) {
            this.f21697p.a();
            O();
        }
    }

    public void f() {
        if (this.f21697p.G()) {
            this.f21697p.b();
            P();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f21697p.f();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f21696o.height();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f21696o.width();
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
        WeakReference weakReference = this.f21705x;
        if (weakReference != null) {
            return (FrameLayout) weakReference.get();
        }
        return null;
    }

    public int o() {
        return this.f21697p.u();
    }

    @Override // android.graphics.drawable.Drawable, com.google.android.material.internal.j.b
    public boolean onStateChange(int[] iArr) {
        return super.onStateChange(iArr);
    }

    public int q() {
        return this.f21697p.w();
    }

    public int r() {
        return this.f21697p.x();
    }

    public int s() {
        if (this.f21697p.F()) {
            return this.f21697p.y();
        }
        return 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f21697p.K(i10);
        G();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b.a w() {
        return this.f21697p.A();
    }

    public String x() {
        return this.f21697p.B();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
