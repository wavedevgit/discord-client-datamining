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
    private final TextView f1893a;

    /* renamed from: b  reason: collision with root package name */
    private t0 f1894b;

    /* renamed from: c  reason: collision with root package name */
    private t0 f1895c;

    /* renamed from: d  reason: collision with root package name */
    private t0 f1896d;

    /* renamed from: e  reason: collision with root package name */
    private t0 f1897e;

    /* renamed from: f  reason: collision with root package name */
    private t0 f1898f;

    /* renamed from: g  reason: collision with root package name */
    private t0 f1899g;

    /* renamed from: h  reason: collision with root package name */
    private t0 f1900h;

    /* renamed from: i  reason: collision with root package name */
    private final w f1901i;

    /* renamed from: j  reason: collision with root package name */
    private int f1902j = 0;

    /* renamed from: k  reason: collision with root package name */
    private int f1903k = -1;

    /* renamed from: l  reason: collision with root package name */
    private Typeface f1904l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f1905m;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f1906a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f1907b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ WeakReference f1908c;

        a(int i10, int i11, WeakReference weakReference) {
            this.f1906a = i10;
            this.f1907b = i11;
            this.f1908c = weakReference;
        }

        @Override // q1.j.f
        public void f(int i10) {
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            int i10;
            boolean z10;
            if (Build.VERSION.SDK_INT >= 28 && (i10 = this.f1906a) != -1) {
                if ((this.f1907b & 2) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                typeface = e.a(typeface, i10, z10);
            }
            AppCompatTextHelper.this.n(this.f1908c, typeface);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f1910d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Typeface f1911e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f1912i;

        b(TextView textView, Typeface typeface, int i10) {
            this.f1910d = textView;
            this.f1911e = typeface;
            this.f1912i = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            this.f1910d.setTypeface(this.f1911e, this.f1912i);
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
        this.f1893a = textView;
        this.f1901i = new w(textView);
    }

    private void B(int i10, float f10) {
        this.f1901i.t(i10, f10);
    }

    private void C(Context context, v0 v0Var) {
        int i10;
        String o10;
        boolean z10;
        boolean z11;
        this.f1902j = v0Var.k(f.j.V2, this.f1902j);
        int i11 = Build.VERSION.SDK_INT;
        if (i11 >= 28) {
            int k10 = v0Var.k(f.j.Y2, -1);
            this.f1903k = k10;
            if (k10 != -1) {
                this.f1902j &= 2;
            }
        }
        boolean z12 = true;
        if (!v0Var.s(f.j.X2) && !v0Var.s(f.j.Z2)) {
            if (v0Var.s(f.j.U2)) {
                this.f1905m = false;
                int k11 = v0Var.k(f.j.U2, 1);
                if (k11 != 1) {
                    if (k11 != 2) {
                        if (k11 == 3) {
                            this.f1904l = Typeface.MONOSPACE;
                            return;
                        }
                        return;
                    }
                    this.f1904l = Typeface.SERIF;
                    return;
                }
                this.f1904l = Typeface.SANS_SERIF;
                return;
            }
            return;
        }
        this.f1904l = null;
        if (v0Var.s(f.j.Z2)) {
            i10 = f.j.Z2;
        } else {
            i10 = f.j.X2;
        }
        int i12 = this.f1903k;
        int i13 = this.f1902j;
        if (!context.isRestricted()) {
            try {
                Typeface j10 = v0Var.j(i10, this.f1902j, new a(i12, i13, new WeakReference(this.f1893a)));
                if (j10 != null) {
                    if (i11 >= 28 && this.f1903k != -1) {
                        Typeface create = Typeface.create(j10, 0);
                        int i14 = this.f1903k;
                        if ((this.f1902j & 2) != 0) {
                            z11 = true;
                        } else {
                            z11 = false;
                        }
                        this.f1904l = e.a(create, i14, z11);
                    } else {
                        this.f1904l = j10;
                    }
                }
                if (this.f1904l == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f1905m = z10;
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            }
        }
        if (this.f1904l == null && (o10 = v0Var.o(i10)) != null) {
            if (Build.VERSION.SDK_INT >= 28 && this.f1903k != -1) {
                Typeface create2 = Typeface.create(o10, 0);
                int i15 = this.f1903k;
                if ((this.f1902j & 2) == 0) {
                    z12 = false;
                }
                this.f1904l = e.a(create2, i15, z12);
                return;
            }
            this.f1904l = Typeface.create(o10, this.f1902j);
        }
    }

    private void a(Drawable drawable, t0 t0Var) {
        if (drawable != null && t0Var != null) {
            j.i(drawable, t0Var, this.f1893a.getDrawableState());
        }
    }

    private static t0 d(Context context, j jVar, int i10) {
        ColorStateList f10 = jVar.f(context, i10);
        if (f10 != null) {
            t0 t0Var = new t0();
            t0Var.f2249d = true;
            t0Var.f2246a = f10;
            return t0Var;
        }
        return null;
    }

    private void y(Drawable drawable, Drawable drawable2, Drawable drawable3, Drawable drawable4, Drawable drawable5, Drawable drawable6) {
        if (drawable5 == null && drawable6 == null) {
            if (drawable == null && drawable2 == null && drawable3 == null && drawable4 == null) {
                return;
            }
            Drawable[] compoundDrawablesRelative = this.f1893a.getCompoundDrawablesRelative();
            Drawable drawable7 = compoundDrawablesRelative[0];
            if (drawable7 == null && compoundDrawablesRelative[2] == null) {
                Drawable[] compoundDrawables = this.f1893a.getCompoundDrawables();
                TextView textView = this.f1893a;
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
            this.f1893a.setCompoundDrawablesRelativeWithIntrinsicBounds(drawable7, drawable2, compoundDrawablesRelative[2], drawable4);
            return;
        }
        Drawable[] compoundDrawablesRelative2 = this.f1893a.getCompoundDrawablesRelative();
        if (drawable5 == null) {
            drawable5 = compoundDrawablesRelative2[0];
        }
        if (drawable2 == null) {
            drawable2 = compoundDrawablesRelative2[1];
        }
        if (drawable6 == null) {
            drawable6 = compoundDrawablesRelative2[2];
        }
        TextView textView2 = this.f1893a;
        if (drawable4 == null) {
            drawable4 = compoundDrawablesRelative2[3];
        }
        textView2.setCompoundDrawablesRelativeWithIntrinsicBounds(drawable5, drawable2, drawable6, drawable4);
    }

    private void z() {
        t0 t0Var = this.f1900h;
        this.f1894b = t0Var;
        this.f1895c = t0Var;
        this.f1896d = t0Var;
        this.f1897e = t0Var;
        this.f1898f = t0Var;
        this.f1899g = t0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void A(int i10, float f10) {
        if (!g1.f2114c && !l()) {
            B(i10, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        if (this.f1894b != null || this.f1895c != null || this.f1896d != null || this.f1897e != null) {
            Drawable[] compoundDrawables = this.f1893a.getCompoundDrawables();
            a(compoundDrawables[0], this.f1894b);
            a(compoundDrawables[1], this.f1895c);
            a(compoundDrawables[2], this.f1896d);
            a(compoundDrawables[3], this.f1897e);
        }
        if (this.f1898f == null && this.f1899g == null) {
            return;
        }
        Drawable[] compoundDrawablesRelative = this.f1893a.getCompoundDrawablesRelative();
        a(compoundDrawablesRelative[0], this.f1898f);
        a(compoundDrawablesRelative[2], this.f1899g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f1901i.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f1901i.f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f1901i.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f1901i.h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int[] h() {
        return this.f1901i.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i() {
        return this.f1901i.j();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList j() {
        t0 t0Var = this.f1900h;
        if (t0Var != null) {
            return t0Var.f2246a;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode k() {
        t0 t0Var = this.f1900h;
        if (t0Var != null) {
            return t0Var.f2247b;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return this.f1901i.n();
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
        Context context = this.f1893a.getContext();
        j b10 = j.b();
        v0 v10 = v0.v(context, attributeSet, f.j.Y, i10, 0);
        TextView textView = this.f1893a;
        androidx.core.view.h0.l0(textView, textView.getContext(), f.j.Y, attributeSet, v10.r(), i10, 0);
        int n10 = v10.n(f.j.Z, -1);
        if (v10.s(f.j.f22347c0)) {
            this.f1894b = d(context, b10, v10.n(f.j.f22347c0, 0));
        }
        if (v10.s(f.j.f22337a0)) {
            this.f1895c = d(context, b10, v10.n(f.j.f22337a0, 0));
        }
        if (v10.s(f.j.f22352d0)) {
            this.f1896d = d(context, b10, v10.n(f.j.f22352d0, 0));
        }
        if (v10.s(f.j.f22342b0)) {
            this.f1897e = d(context, b10, v10.n(f.j.f22342b0, 0));
        }
        if (v10.s(f.j.f22357e0)) {
            this.f1898f = d(context, b10, v10.n(f.j.f22357e0, 0));
        }
        if (v10.s(f.j.f22362f0)) {
            this.f1899g = d(context, b10, v10.n(f.j.f22362f0, 0));
        }
        v10.x();
        boolean z13 = this.f1893a.getTransformationMethod() instanceof PasswordTransformationMethod;
        if (n10 != -1) {
            v0 t10 = v0.t(context, n10, f.j.S2);
            if (!z13 && t10.s(f.j.f22345b3)) {
                z10 = t10.a(f.j.f22345b3, false);
                z11 = true;
            } else {
                z10 = false;
                z11 = false;
            }
            C(context, t10);
            int i12 = Build.VERSION.SDK_INT;
            if (t10.s(f.j.f22350c3)) {
                str2 = t10.o(f.j.f22350c3);
            } else {
                str2 = null;
            }
            if (i12 >= 26 && t10.s(f.j.f22340a3)) {
                str = t10.o(f.j.f22340a3);
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
        if (!z13 && v11.s(f.j.f22345b3)) {
            z10 = v11.a(f.j.f22345b3, false);
            z12 = true;
        } else {
            z12 = z11;
        }
        int i13 = Build.VERSION.SDK_INT;
        if (v11.s(f.j.f22350c3)) {
            str2 = v11.o(f.j.f22350c3);
        }
        if (i13 >= 26 && v11.s(f.j.f22340a3)) {
            str = v11.o(f.j.f22340a3);
        }
        if (i13 >= 28 && v11.s(f.j.T2) && v11.f(f.j.T2, -1) == 0) {
            this.f1893a.setTextSize(0, 0.0f);
        }
        C(context, v11);
        v11.x();
        if (!z13 && z12) {
            s(z10);
        }
        Typeface typeface = this.f1904l;
        if (typeface != null) {
            if (this.f1903k == -1) {
                this.f1893a.setTypeface(typeface, this.f1902j);
            } else {
                this.f1893a.setTypeface(typeface);
            }
        }
        if (str != null) {
            d.d(this.f1893a, str);
        }
        if (str2 != null) {
            c.b(this.f1893a, c.a(str2));
        }
        this.f1901i.o(attributeSet, i10);
        if (g1.f2114c && this.f1901i.j() != 0) {
            int[] i14 = this.f1901i.i();
            if (i14.length > 0) {
                if (d.a(this.f1893a) != -1.0f) {
                    d.b(this.f1893a, this.f1901i.g(), this.f1901i.f(), this.f1901i.h(), 0);
                } else {
                    d.c(this.f1893a, i14, 0);
                }
            }
        }
        v0 u10 = v0.u(context, attributeSet, f.j.f22367g0);
        int n11 = u10.n(f.j.f22407o0, -1);
        if (n11 != -1) {
            drawable = b10.c(context, n11);
        } else {
            drawable = null;
        }
        int n12 = u10.n(f.j.f22432t0, -1);
        if (n12 != -1) {
            drawable2 = b10.c(context, n12);
        } else {
            drawable2 = null;
        }
        int n13 = u10.n(f.j.f22412p0, -1);
        if (n13 != -1) {
            drawable3 = b10.c(context, n13);
        } else {
            drawable3 = null;
        }
        int n14 = u10.n(f.j.f22397m0, -1);
        if (n14 != -1) {
            drawable4 = b10.c(context, n14);
        } else {
            drawable4 = null;
        }
        int n15 = u10.n(f.j.f22417q0, -1);
        if (n15 != -1) {
            drawable5 = b10.c(context, n15);
        } else {
            drawable5 = null;
        }
        int n16 = u10.n(f.j.f22402n0, -1);
        if (n16 != -1) {
            drawable6 = b10.c(context, n16);
        } else {
            drawable6 = null;
        }
        y(drawable, drawable2, drawable3, drawable4, drawable5, drawable6);
        if (u10.s(f.j.f22422r0)) {
            androidx.core.widget.j.k(this.f1893a, u10.c(f.j.f22422r0));
        }
        if (u10.s(f.j.f22427s0)) {
            androidx.core.widget.j.l(this.f1893a, e0.e(u10.k(f.j.f22427s0, -1), null));
        }
        int f11 = u10.f(f.j.f22442v0, -1);
        int f12 = u10.f(f.j.f22447w0, -1);
        if (u10.s(f.j.f22452x0)) {
            TypedValue w10 = u10.w(f.j.f22452x0);
            if (w10 != null && w10.type == 5) {
                i11 = b2.g.a(w10.data);
                f10 = TypedValue.complexToFloat(w10.data);
            } else {
                f10 = u10.f(f.j.f22452x0, -1);
                i11 = -1;
            }
        } else {
            i11 = -1;
            f10 = -1.0f;
        }
        u10.x();
        if (f11 != -1) {
            androidx.core.widget.j.n(this.f1893a, f11);
        }
        if (f12 != -1) {
            androidx.core.widget.j.o(this.f1893a, f12);
        }
        if (f10 != -1.0f) {
            if (i11 == -1) {
                androidx.core.widget.j.p(this.f1893a, (int) f10);
            } else {
                androidx.core.widget.j.q(this.f1893a, i11, f10);
            }
        }
    }

    void n(WeakReference weakReference, Typeface typeface) {
        if (this.f1905m) {
            this.f1904l = typeface;
            TextView textView = (TextView) weakReference.get();
            if (textView != null) {
                if (textView.isAttachedToWindow()) {
                    textView.post(new b(textView, typeface, this.f1902j));
                } else {
                    textView.setTypeface(typeface, this.f1902j);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(boolean z10, int i10, int i11, int i12, int i13) {
        if (!g1.f2114c) {
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
        if (t10.s(f.j.f22345b3)) {
            s(t10.a(f.j.f22345b3, false));
        }
        int i11 = Build.VERSION.SDK_INT;
        if (t10.s(f.j.T2) && t10.f(f.j.T2, -1) == 0) {
            this.f1893a.setTextSize(0, 0.0f);
        }
        C(context, t10);
        if (i11 >= 26 && t10.s(f.j.f22340a3) && (o10 = t10.o(f.j.f22340a3)) != null) {
            d.d(this.f1893a, o10);
        }
        t10.x();
        Typeface typeface = this.f1904l;
        if (typeface != null) {
            this.f1893a.setTypeface(typeface, this.f1902j);
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
        this.f1893a.setAllCaps(z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(int i10, int i11, int i12, int i13) {
        this.f1901i.p(i10, i11, i12, i13);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int[] iArr, int i10) {
        this.f1901i.q(iArr, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(int i10) {
        this.f1901i.r(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(ColorStateList colorStateList) {
        boolean z10;
        if (this.f1900h == null) {
            this.f1900h = new t0();
        }
        t0 t0Var = this.f1900h;
        t0Var.f2246a = colorStateList;
        if (colorStateList != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t0Var.f2249d = z10;
        z();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void x(PorterDuff.Mode mode) {
        boolean z10;
        if (this.f1900h == null) {
            this.f1900h = new t0();
        }
        t0 t0Var = this.f1900h;
        t0Var.f2247b = mode;
        if (mode != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        t0Var.f2248c = z10;
        z();
    }
}
