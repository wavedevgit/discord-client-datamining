package oh;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Typeface;
import android.text.TextPaint;
import android.util.Log;
import bh.k;
import q1.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final ColorStateList f41756a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f41757b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f41758c;

    /* renamed from: d  reason: collision with root package name */
    public final String f41759d;

    /* renamed from: e  reason: collision with root package name */
    public final int f41760e;

    /* renamed from: f  reason: collision with root package name */
    public final int f41761f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f41762g;

    /* renamed from: h  reason: collision with root package name */
    public final float f41763h;

    /* renamed from: i  reason: collision with root package name */
    public final float f41764i;

    /* renamed from: j  reason: collision with root package name */
    public final float f41765j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f41766k;

    /* renamed from: l  reason: collision with root package name */
    public final float f41767l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f41768m;

    /* renamed from: n  reason: collision with root package name */
    private float f41769n;

    /* renamed from: o  reason: collision with root package name */
    private final int f41770o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f41771p = false;

    /* renamed from: q  reason: collision with root package name */
    private Typeface f41772q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f41773a;

        a(f fVar) {
            this.f41773a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f41771p = true;
            this.f41773a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f41772q = Typeface.create(typeface, dVar.f41760e);
            d.this.f41771p = true;
            this.f41773a.b(d.this.f41772q, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f41775a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f41776b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f41777c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f41775a = context;
            this.f41776b = textPaint;
            this.f41777c = fVar;
        }

        @Override // oh.f
        public void a(int i10) {
            this.f41777c.a(i10);
        }

        @Override // oh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.p(this.f41775a, this.f41776b, typeface);
            this.f41777c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, k.f6956o6);
        l(obtainStyledAttributes.getDimension(k.f6965p6, 0.0f));
        k(c.a(context, obtainStyledAttributes, k.f6992s6));
        this.f41756a = c.a(context, obtainStyledAttributes, k.f7001t6);
        this.f41757b = c.a(context, obtainStyledAttributes, k.f7010u6);
        this.f41760e = obtainStyledAttributes.getInt(k.f6983r6, 0);
        this.f41761f = obtainStyledAttributes.getInt(k.f6974q6, 1);
        int e10 = c.e(obtainStyledAttributes, k.A6, k.f7055z6);
        this.f41770o = obtainStyledAttributes.getResourceId(e10, 0);
        this.f41759d = obtainStyledAttributes.getString(e10);
        this.f41762g = obtainStyledAttributes.getBoolean(k.B6, false);
        this.f41758c = c.a(context, obtainStyledAttributes, k.f7019v6);
        this.f41763h = obtainStyledAttributes.getFloat(k.f7028w6, 0.0f);
        this.f41764i = obtainStyledAttributes.getFloat(k.f7037x6, 0.0f);
        this.f41765j = obtainStyledAttributes.getFloat(k.f7046y6, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, k.f7053z4);
        this.f41766k = obtainStyledAttributes2.hasValue(k.A4);
        this.f41767l = obtainStyledAttributes2.getFloat(k.A4, 0.0f);
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f41772q == null && (str = this.f41759d) != null) {
            this.f41772q = Typeface.create(str, this.f41760e);
        }
        if (this.f41772q == null) {
            int i10 = this.f41761f;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f41772q = Typeface.DEFAULT;
                    } else {
                        this.f41772q = Typeface.MONOSPACE;
                    }
                } else {
                    this.f41772q = Typeface.SERIF;
                }
            } else {
                this.f41772q = Typeface.SANS_SERIF;
            }
            this.f41772q = Typeface.create(this.f41772q, this.f41760e);
        }
    }

    private boolean m(Context context) {
        Typeface typeface;
        if (e.a()) {
            return true;
        }
        int i10 = this.f41770o;
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
        return this.f41772q;
    }

    public Typeface f(Context context) {
        if (this.f41771p) {
            return this.f41772q;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f41770o);
                this.f41772q = i10;
                if (i10 != null) {
                    this.f41772q = Typeface.create(i10, this.f41760e);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f41759d, e10);
            }
        }
        d();
        this.f41771p = true;
        return this.f41772q;
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
        int i10 = this.f41770o;
        if (i10 == 0) {
            this.f41771p = true;
        }
        if (this.f41771p) {
            fVar.b(this.f41772q, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f41771p = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f41759d, e10);
            this.f41771p = true;
            fVar.a(-3);
        }
    }

    public ColorStateList i() {
        return this.f41768m;
    }

    public float j() {
        return this.f41769n;
    }

    public void k(ColorStateList colorStateList) {
        this.f41768m = colorStateList;
    }

    public void l(float f10) {
        this.f41769n = f10;
    }

    public void n(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        o(context, textPaint, fVar);
        ColorStateList colorStateList = this.f41768m;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f41765j;
        float f11 = this.f41763h;
        float f12 = this.f41764i;
        ColorStateList colorStateList2 = this.f41758c;
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
        int i10 = this.f41760e & (~typeface.getStyle());
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
        textPaint.setTextSize(this.f41769n);
        if (this.f41766k) {
            textPaint.setLetterSpacing(this.f41767l);
        }
    }
}
