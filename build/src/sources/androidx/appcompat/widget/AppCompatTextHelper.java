package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.graphics.PorterDuff;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.LocaleList;
import android.text.method.PasswordTransformationMethod;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputConnection;
import android.widget.TextView;
import java.lang.ref.WeakReference;
import q1.j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AppCompatTextHelper {

    /* renamed from: a  reason: collision with root package name */
    private final TextView f1439a;

    /* renamed from: b  reason: collision with root package name */
    private t0 f1440b;

    /* renamed from: c  reason: collision with root package name */
    private t0 f1441c;

    /* renamed from: d  reason: collision with root package name */
    private t0 f1442d;

    /* renamed from: e  reason: collision with root package name */
    private t0 f1443e;

    /* renamed from: f  reason: collision with root package name */
    private t0 f1444f;

    /* renamed from: g  reason: collision with root package name */
    private t0 f1445g;

    /* renamed from: h  reason: collision with root package name */
    private t0 f1446h;

    /* renamed from: i  reason: collision with root package name */
    private final w f1447i;

    /* renamed from: j  reason: collision with root package name */
    private int f1448j = 0;

    /* renamed from: k  reason: collision with root package name */
    private int f1449k = -1;

    /* renamed from: l  reason: collision with root package name */
    private Typeface f1450l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f1451m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f1452a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f1453b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ WeakReference f1454c;

        a(int i10, int i11, WeakReference weakReference) {
            this.f1452a = i10;
            this.f1453b = i11;
            this.f1454c = weakReference;
        }

        @Override // q1.j.f
        public void f(int i10) {
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            int i10;
            boolean z10;
            if (Build.VERSION.SDK_INT >= 28 && (i10 = this.f1452a) != -1) {
                if ((this.f1453b & 2) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                typeface = e.a(typeface, i10, z10);
            }
            AppCompatTextHelper.this.n(this.f1454c, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f1456d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f1457e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f1458i;

        b(TextView textView, Typeface typeface, int i10) {
            this.f1456d = textView;
            this.f1457e = typeface;
            this.f1458i = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f1456d.setTypeface(this.f1457e, this.f1458i);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static LocaleList a(String str) {
            return LocaleList.forLanguageTags(str);
        }

        static void b(TextView textView, LocaleList localeList) {
            textView.setTextLocales(localeList);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        static int a(TextView textView) {
            return textView.getAutoSizeStepGranularity();
        }

        static void b(TextView textView, int i10, int i11, int i12, int i13) {
            textView.setAutoSizeTextTypeUniformWithConfiguration(i10, i11, i12, i13);
        }

        static void c(TextView textView, int[] iArr, int i10) {
            textView.setAutoSizeTextTypeUniformWithPresetSizes(iArr, i10);
        }

        static boolean d(TextView textView, String str) {
            return textView.setFontVariationSettings(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {
        static Typeface a(Typeface typeface, int i10, boolean z10) {
            return Typeface.create(typeface, i10, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AppCompatTextHelper(TextView textView) {
        this.f1439a = textView;
        this.f1447i = new w(textView);
    }

    private void B(int i10, float f10) {
        this.f1447i.t(i10, f10);
    }

    private void C(Context context, v0 v0Var) {
        int i10;
        String o10;
        boolean z10;
        boolean z11;
        this.f1448j = v0Var.k(f.j.V2, this.f1448j);
        int i11 = Build.VERSION.SDK_INT;
        if (i11 >= 28) {
            int k10 = v0Var.k(f.j.Y2, -1);
            this.f1449k = k10;
            if (k10 != -1) {
                this.f1448j &= 2;
            }
        }
        boolean z12 = true;
        if (!v0Var.s(f.j.X2) && !v0Var.s(f.j.Z2)) {
            if (v0Var.s(f.j.U2)) {
                this.f1451m = false;
                int k11 = v0Var.k(f.j.U2, 1);
                if (k11 != 1) {
                    if (k11 != 2) {
                        if (k11 == 3) {
                            this.f1450l = Typeface.MONOSPACE;
                            return;
                        }
                        return;
                    }
                    this.f1450l = Typeface.SERIF;
                    return;
                }
                this.f1450l = Typeface.SANS_SERIF;
                return;
            }
            return;
        }
        this.f1450l = null;
        if (v0Var.s(f.j.Z2)) {
            i10 = f.j.Z2;
        } else {
            i10 = f.j.X2;
        }
        int i12 = this.f1449k;
        int i13 = this.f1448j;
        if (!context.isRestricted()) {
            try {
                Typeface j10 = v0Var.j(i10, this.f1448j, new a(i12, i13, new WeakReference(this.f1439a)));
                if (j10 != null) {
                    if (i11 >= 28 && this.f1449k != -1) {
                        Typeface create = Typeface.create(j10, 0);
                        int i14 = this.f1449k;
                        if ((this.f1448j & 2) != 0) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        this.f1450l = e.a(create, i14, z11);
                    } else {
                        this.f1450l = j10;
                    }
                }
                if (this.f1450l == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f1451m = z10;
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            }
        }
        if (this.f1450l == null && (o10 = v0Var.o(i10)) != null) {
            if (Build.VERSION.SDK_INT >= 28 && this.f1449k != -1) {
                Typeface create2 = Typeface.create(o10, 0);
                int i15 = this.f1449k;
                if ((this.f1448j & 2) == 0) {
                    z12 = false;
                }
                this.f1450l = e.a(create2, i15, z12);
                return;
            }
            this.f1450l = Typeface.create(o10, this.f1448j);
        }
    }

    private void a(Drawable drawable, t0 t0Var) {
        if (drawable != null && t0Var != null) {
            j.i(drawable, t0Var, this.f1439a.getDrawableState());
        }
    }

    private static t0 d(Context context, j jVar, int i10) {
        ColorStateList f10 = jVar.f(context, i10);
        if (f10 != null) {
            t0 t0Var = new t0();
            t0Var.f1795d = true;
            t0Var.f1792a = f10;
            return t0Var;
        }
        return null;
    }

    private void y(Drawable drawable, Drawable drawable2, Drawable drawable3, Drawable drawable4, Drawable drawable5, Drawable drawable6) {
        if (drawable5 == null && drawable6 == null) {
            if (drawable == null && drawable2 == null && drawable3 == null && drawable4 == null) {
                return;
            }
            Drawable[] compoundDrawablesRelative = this.f1439a.getCompoundDrawablesRelative();
            Drawable drawable7 = compoundDrawablesRelative[0];
            if (drawable7 == null && compoundDrawablesRelative[2] == null) {
                Drawable[] compoundDrawables = this.f1439a.getCompoundDrawables();
                TextView textView = this.f1439a;
                if (drawable == null) {
                    drawable = compoundDrawables[0];
                }
                if (drawable2 == null) {
                    drawable2 = compoundDrawables[1];
                }
                if (drawable3 == null) {
                    drawable3 = compoundDrawables[2];
                }
                if (drawable4 == null) {
                    drawable4 = compoundDrawables[3];
                }
                textView.setCompoundDrawablesWithIntrinsicBounds(drawable, drawable2, drawable3, drawable4);
                return;
            }
            if (drawable2 == null) {
                drawable2 = compoundDrawablesRelative[1];
            }
            if (drawable4 == null) {
                drawable4 = compoundDrawablesRelative[3];
            }
            this.f1439a.setCompoundDrawablesRelativeWithIntrinsicBounds(drawable7, drawable2, compoundDrawablesRelative[2], drawable4);
            return;
        }
        Drawable[] compoundDrawablesRelative2 = this.f1439a.getCompoundDrawablesRelative();
        if (drawable5 == null) {
            drawable5 = compoundDrawablesRelative2[0];
        }
        if (drawable2 == null) {
            drawable2 = compoundDrawablesRelative2[1];
        }
        if (drawable6 == null) {
            drawable6 = compoundDrawablesRelative2[2];
        }
        TextView textView2 = this.f1439a;
        if (drawable4 == null) {
            drawable4 = compoundDrawablesRelative2[3];
        }
        textView2.setCompoundDrawablesRelativeWithIntrinsicBounds(drawable5, drawable2, drawable6, drawable4);
    }

    private void z() {
        t0 t0Var = this.f1446h;
        this.f1440b = t0Var;
        this.f1441c = t0Var;
        this.f1442d = t0Var;
        this.f1443e = t0Var;
        this.f1444f = t0Var;
        this.f1445g = t0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(int i10, float f10) {
        if (!g1.f1660c && !l()) {
            B(i10, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        if (this.f1440b != null || this.f1441c != null || this.f1442d != null || this.f1443e != null) {
            Drawable[] compoundDrawables = this.f1439a.getCompoundDrawables();
            a(compoundDrawables[0], this.f1440b);
            a(compoundDrawables[1], this.f1441c);
            a(compoundDrawables[2], this.f1442d);
            a(compoundDrawables[3], this.f1443e);
        }
        if (this.f1444f == null && this.f1445g == null) {
            return;
        }
        Drawable[] compoundDrawablesRelative = this.f1439a.getCompoundDrawablesRelative();
        a(compoundDrawablesRelative[0], this.f1444f);
        a(compoundDrawablesRelative[2], this.f1445g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f1447i.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f1447i.f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f1447i.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f1447i.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int[] h() {
        return this.f1447i.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f1447i.j();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList j() {
        t0 t0Var = this.f1446h;
        if (t0Var != null) {
            return t0Var.f1792a;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode k() {
        t0 t0Var = this.f1446h;
        if (t0Var != null) {
            return t0Var.f1793b;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return this.f1447i.n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(AttributeSet attributeSet, int i10) {
        boolean z10;
        boolean z11;
        String str;
        String str2;
        boolean z12;
        Drawable drawable;
        Drawable drawable2;
        Drawable drawable3;
        Drawable drawable4;
        Drawable drawable5;
        Drawable drawable6;
        int i11;
        float f10;
        Context context = this.f1439a.getContext();
        j b10 = j.b();
        v0 v10 = v0.v(context, attributeSet, f.j.Y, i10, 0);
        TextView textView = this.f1439a;
        androidx.core.view.h0.l0(textView, textView.getContext(), f.j.Y, attributeSet, v10.r(), i10, 0);
        int n10 = v10.n(f.j.Z, -1);
        if (v10.s(f.j.f24218c0)) {
            this.f1440b = d(context, b10, v10.n(f.j.f24218c0, 0));
        }
        if (v10.s(f.j.f24208a0)) {
            this.f1441c = d(context, b10, v10.n(f.j.f24208a0, 0));
        }
        if (v10.s(f.j.f24223d0)) {
            this.f1442d = d(context, b10, v10.n(f.j.f24223d0, 0));
        }
        if (v10.s(f.j.f24213b0)) {
            this.f1443e = d(context, b10, v10.n(f.j.f24213b0, 0));
        }
        if (v10.s(f.j.f24228e0)) {
            this.f1444f = d(context, b10, v10.n(f.j.f24228e0, 0));
        }
        if (v10.s(f.j.f24233f0)) {
            this.f1445g = d(context, b10, v10.n(f.j.f24233f0, 0));
        }
        v10.x();
        boolean z13 = this.f1439a.getTransformationMethod() instanceof PasswordTransformationMethod;
        if (n10 != -1) {
            v0 t10 = v0.t(context, n10, f.j.S2);
            if (!z13 && t10.s(f.j.f24216b3)) {
                z10 = t10.a(f.j.f24216b3, false);
                z11 = true;
            } else {
                z10 = false;
                z11 = false;
            }
            C(context, t10);
            int i12 = Build.VERSION.SDK_INT;
            if (t10.s(f.j.f24221c3)) {
                str2 = t10.o(f.j.f24221c3);
            } else {
                str2 = null;
            }
            if (i12 >= 26 && t10.s(f.j.f24211a3)) {
                str = t10.o(f.j.f24211a3);
            } else {
                str = null;
            }
            t10.x();
        } else {
            z10 = false;
            z11 = false;
            str = null;
            str2 = null;
        }
        v0 v11 = v0.v(context, attributeSet, f.j.S2, i10, 0);
        if (!z13 && v11.s(f.j.f24216b3)) {
            z10 = v11.a(f.j.f24216b3, false);
            z12 = true;
        } else {
            z12 = z11;
        }
        int i13 = Build.VERSION.SDK_INT;
        if (v11.s(f.j.f24221c3)) {
            str2 = v11.o(f.j.f24221c3);
        }
        if (i13 >= 26 && v11.s(f.j.f24211a3)) {
            str = v11.o(f.j.f24211a3);
        }
        if (i13 >= 28 && v11.s(f.j.T2) && v11.f(f.j.T2, -1) == 0) {
            this.f1439a.setTextSize(0, 0.0f);
        }
        C(context, v11);
        v11.x();
        if (!z13 && z12) {
            s(z10);
        }
        Typeface typeface = this.f1450l;
        if (typeface != null) {
            if (this.f1449k == -1) {
                this.f1439a.setTypeface(typeface, this.f1448j);
            } else {
                this.f1439a.setTypeface(typeface);
            }
        }
        if (str != null) {
            d.d(this.f1439a, str);
        }
        if (str2 != null) {
            c.b(this.f1439a, c.a(str2));
        }
        this.f1447i.o(attributeSet, i10);
        if (g1.f1660c && this.f1447i.j() != 0) {
            int[] i14 = this.f1447i.i();
            if (i14.length > 0) {
                if (d.a(this.f1439a) != -1.0f) {
                    d.b(this.f1439a, this.f1447i.g(), this.f1447i.f(), this.f1447i.h(), 0);
                } else {
                    d.c(this.f1439a, i14, 0);
                }
            }
        }
        v0 u10 = v0.u(context, attributeSet, f.j.f24238g0);
        int n11 = u10.n(f.j.f24278o0, -1);
        if (n11 != -1) {
            drawable = b10.c(context, n11);
        } else {
            drawable = null;
        }
        int n12 = u10.n(f.j.f24303t0, -1);
        if (n12 != -1) {
            drawable2 = b10.c(context, n12);
        } else {
            drawable2 = null;
        }
        int n13 = u10.n(f.j.f24283p0, -1);
        if (n13 != -1) {
            drawable3 = b10.c(context, n13);
        } else {
            drawable3 = null;
        }
        int n14 = u10.n(f.j.f24268m0, -1);
        if (n14 != -1) {
            drawable4 = b10.c(context, n14);
        } else {
            drawable4 = null;
        }
        int n15 = u10.n(f.j.f24288q0, -1);
        if (n15 != -1) {
            drawable5 = b10.c(context, n15);
        } else {
            drawable5 = null;
        }
        int n16 = u10.n(f.j.f24273n0, -1);
        if (n16 != -1) {
            drawable6 = b10.c(context, n16);
        } else {
            drawable6 = null;
        }
        y(drawable, drawable2, drawable3, drawable4, drawable5, drawable6);
        if (u10.s(f.j.f24293r0)) {
            androidx.core.widget.j.k(this.f1439a, u10.c(f.j.f24293r0));
        }
        if (u10.s(f.j.f24298s0)) {
            androidx.core.widget.j.l(this.f1439a, e0.e(u10.k(f.j.f24298s0, -1), null));
        }
        int f11 = u10.f(f.j.f24313v0, -1);
        int f12 = u10.f(f.j.f24318w0, -1);
        if (u10.s(f.j.f24323x0)) {
            TypedValue w10 = u10.w(f.j.f24323x0);
            if (w10 != null && w10.type == 5) {
                i11 = b2.g.a(w10.data);
                f10 = TypedValue.complexToFloat(w10.data);
            } else {
                f10 = u10.f(f.j.f24323x0, -1);
                i11 = -1;
            }
        } else {
            i11 = -1;
            f10 = -1.0f;
        }
        u10.x();
        if (f11 != -1) {
            androidx.core.widget.j.n(this.f1439a, f11);
        }
        if (f12 != -1) {
            androidx.core.widget.j.o(this.f1439a, f12);
        }
        if (f10 != -1.0f) {
            if (i11 == -1) {
                androidx.core.widget.j.p(this.f1439a, (int) f10);
            } else {
                androidx.core.widget.j.q(this.f1439a, i11, f10);
            }
        }
    }

    void n(WeakReference weakReference, Typeface typeface) {
        if (this.f1451m) {
            this.f1450l = typeface;
            TextView textView = (TextView) weakReference.get();
            if (textView != null) {
                if (textView.isAttachedToWindow()) {
                    textView.post(new b(textView, typeface, this.f1448j));
                } else {
                    textView.setTypeface(typeface, this.f1448j);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(boolean z10, int i10, int i11, int i12, int i13) {
        if (!g1.f1660c) {
            c();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p() {
        b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(Context context, int i10) {
        String o10;
        v0 t10 = v0.t(context, i10, f.j.S2);
        if (t10.s(f.j.f24216b3)) {
            s(t10.a(f.j.f24216b3, false));
        }
        int i11 = Build.VERSION.SDK_INT;
        if (t10.s(f.j.T2) && t10.f(f.j.T2, -1) == 0) {
            this.f1439a.setTextSize(0, 0.0f);
        }
        C(context, t10);
        if (i11 >= 26 && t10.s(f.j.f24211a3) && (o10 = t10.o(f.j.f24211a3)) != null) {
            d.d(this.f1439a, o10);
        }
        t10.x();
        Typeface typeface = this.f1450l;
        if (typeface != null) {
            this.f1439a.setTypeface(typeface, this.f1448j);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(TextView textView, InputConnection inputConnection, EditorInfo editorInfo) {
        if (Build.VERSION.SDK_INT < 30 && inputConnection != null) {
            e2.c.f(editorInfo, textView.getText());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(boolean z10) {
        this.f1439a.setAllCaps(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(int i10, int i11, int i12, int i13) {
        this.f1447i.p(i10, i11, i12, i13);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int[] iArr, int i10) {
        this.f1447i.q(iArr, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(int i10) {
        this.f1447i.r(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(ColorStateList colorStateList) {
        boolean z10;
        if (this.f1446h == null) {
            this.f1446h = new t0();
        }
        t0 t0Var = this.f1446h;
        t0Var.f1792a = colorStateList;
        if (colorStateList != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t0Var.f1795d = z10;
        z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(PorterDuff.Mode mode) {
        boolean z10;
        if (this.f1446h == null) {
            this.f1446h = new t0();
        }
        t0 t0Var = this.f1446h;
        t0Var.f1793b = mode;
        if (mode != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t0Var.f1794c = z10;
        z();
    }
}
