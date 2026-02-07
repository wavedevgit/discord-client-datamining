package nh;

import ah.k;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Typeface;
import android.text.TextPaint;
import android.util.Log;
import q1.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final ColorStateList f40731a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f40732b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f40733c;

    /* renamed from: d  reason: collision with root package name */
    public final String f40734d;

    /* renamed from: e  reason: collision with root package name */
    public final int f40735e;

    /* renamed from: f  reason: collision with root package name */
    public final int f40736f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f40737g;

    /* renamed from: h  reason: collision with root package name */
    public final float f40738h;

    /* renamed from: i  reason: collision with root package name */
    public final float f40739i;

    /* renamed from: j  reason: collision with root package name */
    public final float f40740j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f40741k;

    /* renamed from: l  reason: collision with root package name */
    public final float f40742l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f40743m;

    /* renamed from: n  reason: collision with root package name */
    private float f40744n;

    /* renamed from: o  reason: collision with root package name */
    private final int f40745o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f40746p = false;

    /* renamed from: q  reason: collision with root package name */
    private Typeface f40747q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f40748a;

        a(f fVar) {
            this.f40748a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f40746p = true;
            this.f40748a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f40747q = Typeface.create(typeface, dVar.f40735e);
            d.this.f40746p = true;
            this.f40748a.b(d.this.f40747q, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f40750a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f40751b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f40752c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f40750a = context;
            this.f40751b = textPaint;
            this.f40752c = fVar;
        }

        @Override // nh.f
        public void a(int i10) {
            this.f40752c.a(i10);
        }

        @Override // nh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.p(this.f40750a, this.f40751b, typeface);
            this.f40752c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, k.f968o6);
        l(obtainStyledAttributes.getDimension(k.f977p6, 0.0f));
        k(c.a(context, obtainStyledAttributes, k.f1004s6));
        this.f40731a = c.a(context, obtainStyledAttributes, k.f1013t6);
        this.f40732b = c.a(context, obtainStyledAttributes, k.f1022u6);
        this.f40735e = obtainStyledAttributes.getInt(k.f995r6, 0);
        this.f40736f = obtainStyledAttributes.getInt(k.f986q6, 1);
        int e10 = c.e(obtainStyledAttributes, k.A6, k.f1067z6);
        this.f40745o = obtainStyledAttributes.getResourceId(e10, 0);
        this.f40734d = obtainStyledAttributes.getString(e10);
        this.f40737g = obtainStyledAttributes.getBoolean(k.B6, false);
        this.f40733c = c.a(context, obtainStyledAttributes, k.f1031v6);
        this.f40738h = obtainStyledAttributes.getFloat(k.f1040w6, 0.0f);
        this.f40739i = obtainStyledAttributes.getFloat(k.f1049x6, 0.0f);
        this.f40740j = obtainStyledAttributes.getFloat(k.f1058y6, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, k.f1065z4);
        this.f40741k = obtainStyledAttributes2.hasValue(k.A4);
        this.f40742l = obtainStyledAttributes2.getFloat(k.A4, 0.0f);
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f40747q == null && (str = this.f40734d) != null) {
            this.f40747q = Typeface.create(str, this.f40735e);
        }
        if (this.f40747q == null) {
            int i10 = this.f40736f;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f40747q = Typeface.DEFAULT;
                    } else {
                        this.f40747q = Typeface.MONOSPACE;
                    }
                } else {
                    this.f40747q = Typeface.SERIF;
                }
            } else {
                this.f40747q = Typeface.SANS_SERIF;
            }
            this.f40747q = Typeface.create(this.f40747q, this.f40735e);
        }
    }

    private boolean m(Context context) {
        Typeface typeface;
        if (e.a()) {
            return true;
        }
        int i10 = this.f40745o;
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
        return this.f40747q;
    }

    public Typeface f(Context context) {
        if (this.f40746p) {
            return this.f40747q;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f40745o);
                this.f40747q = i10;
                if (i10 != null) {
                    this.f40747q = Typeface.create(i10, this.f40735e);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f40734d, e10);
            }
        }
        d();
        this.f40746p = true;
        return this.f40747q;
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
        int i10 = this.f40745o;
        if (i10 == 0) {
            this.f40746p = true;
        }
        if (this.f40746p) {
            fVar.b(this.f40747q, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f40746p = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f40734d, e10);
            this.f40746p = true;
            fVar.a(-3);
        }
    }

    public ColorStateList i() {
        return this.f40743m;
    }

    public float j() {
        return this.f40744n;
    }

    public void k(ColorStateList colorStateList) {
        this.f40743m = colorStateList;
    }

    public void l(float f10) {
        this.f40744n = f10;
    }

    public void n(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        o(context, textPaint, fVar);
        ColorStateList colorStateList = this.f40743m;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f40740j;
        float f11 = this.f40738h;
        float f12 = this.f40739i;
        ColorStateList colorStateList2 = this.f40733c;
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
        int i10 = this.f40735e & (~typeface.getStyle());
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
        textPaint.setTextSize(this.f40744n);
        if (this.f40741k) {
            textPaint.setLetterSpacing(this.f40742l);
        }
    }
}
