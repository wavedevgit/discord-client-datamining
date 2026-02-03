package lh;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Typeface;
import android.text.TextPaint;
import android.util.Log;
import q1.j;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final ColorStateList f37476a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f37477b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f37478c;

    /* renamed from: d  reason: collision with root package name */
    public final String f37479d;

    /* renamed from: e  reason: collision with root package name */
    public final int f37480e;

    /* renamed from: f  reason: collision with root package name */
    public final int f37481f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f37482g;

    /* renamed from: h  reason: collision with root package name */
    public final float f37483h;

    /* renamed from: i  reason: collision with root package name */
    public final float f37484i;

    /* renamed from: j  reason: collision with root package name */
    public final float f37485j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f37486k;

    /* renamed from: l  reason: collision with root package name */
    public final float f37487l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f37488m;

    /* renamed from: n  reason: collision with root package name */
    private float f37489n;

    /* renamed from: o  reason: collision with root package name */
    private final int f37490o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37491p = false;

    /* renamed from: q  reason: collision with root package name */
    private Typeface f37492q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f37493a;

        a(f fVar) {
            this.f37493a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f37491p = true;
            this.f37493a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f37492q = Typeface.create(typeface, dVar.f37480e);
            d.this.f37491p = true;
            this.f37493a.b(d.this.f37492q, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f37495a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f37496b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f37497c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f37495a = context;
            this.f37496b = textPaint;
            this.f37497c = fVar;
        }

        @Override // lh.f
        public void a(int i10) {
            this.f37497c.a(i10);
        }

        @Override // lh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.p(this.f37495a, this.f37496b, typeface);
            this.f37497c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, k.f54660o6);
        l(obtainStyledAttributes.getDimension(k.f54669p6, 0.0f));
        k(c.a(context, obtainStyledAttributes, k.f54696s6));
        this.f37476a = c.a(context, obtainStyledAttributes, k.f54705t6);
        this.f37477b = c.a(context, obtainStyledAttributes, k.f54714u6);
        this.f37480e = obtainStyledAttributes.getInt(k.f54687r6, 0);
        this.f37481f = obtainStyledAttributes.getInt(k.f54678q6, 1);
        int e10 = c.e(obtainStyledAttributes, k.A6, k.f54759z6);
        this.f37490o = obtainStyledAttributes.getResourceId(e10, 0);
        this.f37479d = obtainStyledAttributes.getString(e10);
        this.f37482g = obtainStyledAttributes.getBoolean(k.B6, false);
        this.f37478c = c.a(context, obtainStyledAttributes, k.f54723v6);
        this.f37483h = obtainStyledAttributes.getFloat(k.f54732w6, 0.0f);
        this.f37484i = obtainStyledAttributes.getFloat(k.f54741x6, 0.0f);
        this.f37485j = obtainStyledAttributes.getFloat(k.f54750y6, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, k.f54757z4);
        this.f37486k = obtainStyledAttributes2.hasValue(k.A4);
        this.f37487l = obtainStyledAttributes2.getFloat(k.A4, 0.0f);
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f37492q == null && (str = this.f37479d) != null) {
            this.f37492q = Typeface.create(str, this.f37480e);
        }
        if (this.f37492q == null) {
            int i10 = this.f37481f;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f37492q = Typeface.DEFAULT;
                    } else {
                        this.f37492q = Typeface.MONOSPACE;
                    }
                } else {
                    this.f37492q = Typeface.SERIF;
                }
            } else {
                this.f37492q = Typeface.SANS_SERIF;
            }
            this.f37492q = Typeface.create(this.f37492q, this.f37480e);
        }
    }

    private boolean m(Context context) {
        Typeface typeface;
        if (e.a()) {
            return true;
        }
        int i10 = this.f37490o;
        if (i10 != 0) {
            typeface = j.c(context, i10);
        } else {
            typeface = null;
        }
        if (typeface != null) {
            return true;
        }
        return false;
    }

    public Typeface e() {
        d();
        return this.f37492q;
    }

    public Typeface f(Context context) {
        if (this.f37491p) {
            return this.f37492q;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f37490o);
                this.f37492q = i10;
                if (i10 != null) {
                    this.f37492q = Typeface.create(i10, this.f37480e);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f37479d, e10);
            }
        }
        d();
        this.f37491p = true;
        return this.f37492q;
    }

    public void g(Context context, TextPaint textPaint, f fVar) {
        p(context, textPaint, e());
        h(context, new b(context, textPaint, fVar));
    }

    public void h(Context context, f fVar) {
        if (m(context)) {
            f(context);
        } else {
            d();
        }
        int i10 = this.f37490o;
        if (i10 == 0) {
            this.f37491p = true;
        }
        if (this.f37491p) {
            fVar.b(this.f37492q, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f37491p = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f37479d, e10);
            this.f37491p = true;
            fVar.a(-3);
        }
    }

    public ColorStateList i() {
        return this.f37488m;
    }

    public float j() {
        return this.f37489n;
    }

    public void k(ColorStateList colorStateList) {
        this.f37488m = colorStateList;
    }

    public void l(float f10) {
        this.f37489n = f10;
    }

    public void n(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        o(context, textPaint, fVar);
        ColorStateList colorStateList = this.f37488m;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f37485j;
        float f11 = this.f37483h;
        float f12 = this.f37484i;
        ColorStateList colorStateList2 = this.f37478c;
        if (colorStateList2 != null) {
            i11 = colorStateList2.getColorForState(textPaint.drawableState, colorStateList2.getDefaultColor());
        } else {
            i11 = 0;
        }
        textPaint.setShadowLayer(f10, f11, f12, i11);
    }

    public void o(Context context, TextPaint textPaint, f fVar) {
        if (m(context)) {
            p(context, textPaint, f(context));
        } else {
            g(context, textPaint, fVar);
        }
    }

    public void p(Context context, TextPaint textPaint, Typeface typeface) {
        boolean z10;
        float f10;
        Typeface a10 = h.a(context, typeface);
        if (a10 != null) {
            typeface = a10;
        }
        textPaint.setTypeface(typeface);
        int i10 = this.f37480e & (~typeface.getStyle());
        if ((i10 & 1) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        textPaint.setFakeBoldText(z10);
        if ((i10 & 2) != 0) {
            f10 = -0.25f;
        } else {
            f10 = 0.0f;
        }
        textPaint.setTextSkewX(f10);
        textPaint.setTextSize(this.f37489n);
        if (this.f37486k) {
            textPaint.setLetterSpacing(this.f37487l);
        }
    }
}
