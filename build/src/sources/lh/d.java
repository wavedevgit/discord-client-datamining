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
    public final ColorStateList f36945a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f36946b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f36947c;

    /* renamed from: d  reason: collision with root package name */
    public final String f36948d;

    /* renamed from: e  reason: collision with root package name */
    public final int f36949e;

    /* renamed from: f  reason: collision with root package name */
    public final int f36950f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f36951g;

    /* renamed from: h  reason: collision with root package name */
    public final float f36952h;

    /* renamed from: i  reason: collision with root package name */
    public final float f36953i;

    /* renamed from: j  reason: collision with root package name */
    public final float f36954j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f36955k;

    /* renamed from: l  reason: collision with root package name */
    public final float f36956l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f36957m;

    /* renamed from: n  reason: collision with root package name */
    private float f36958n;

    /* renamed from: o  reason: collision with root package name */
    private final int f36959o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f36960p = false;

    /* renamed from: q  reason: collision with root package name */
    private Typeface f36961q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f36962a;

        a(f fVar) {
            this.f36962a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f36960p = true;
            this.f36962a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f36961q = Typeface.create(typeface, dVar.f36949e);
            d.this.f36960p = true;
            this.f36962a.b(d.this.f36961q, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f36964a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f36965b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f36966c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f36964a = context;
            this.f36965b = textPaint;
            this.f36966c = fVar;
        }

        @Override // lh.f
        public void a(int i10) {
            this.f36966c.a(i10);
        }

        @Override // lh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.p(this.f36964a, this.f36965b, typeface);
            this.f36966c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, k.f54418o6);
        l(obtainStyledAttributes.getDimension(k.f54427p6, 0.0f));
        k(c.a(context, obtainStyledAttributes, k.f54454s6));
        this.f36945a = c.a(context, obtainStyledAttributes, k.f54463t6);
        this.f36946b = c.a(context, obtainStyledAttributes, k.f54472u6);
        this.f36949e = obtainStyledAttributes.getInt(k.f54445r6, 0);
        this.f36950f = obtainStyledAttributes.getInt(k.f54436q6, 1);
        int e10 = c.e(obtainStyledAttributes, k.A6, k.f54517z6);
        this.f36959o = obtainStyledAttributes.getResourceId(e10, 0);
        this.f36948d = obtainStyledAttributes.getString(e10);
        this.f36951g = obtainStyledAttributes.getBoolean(k.B6, false);
        this.f36947c = c.a(context, obtainStyledAttributes, k.f54481v6);
        this.f36952h = obtainStyledAttributes.getFloat(k.f54490w6, 0.0f);
        this.f36953i = obtainStyledAttributes.getFloat(k.f54499x6, 0.0f);
        this.f36954j = obtainStyledAttributes.getFloat(k.f54508y6, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, k.f54515z4);
        this.f36955k = obtainStyledAttributes2.hasValue(k.A4);
        this.f36956l = obtainStyledAttributes2.getFloat(k.A4, 0.0f);
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f36961q == null && (str = this.f36948d) != null) {
            this.f36961q = Typeface.create(str, this.f36949e);
        }
        if (this.f36961q == null) {
            int i10 = this.f36950f;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f36961q = Typeface.DEFAULT;
                    } else {
                        this.f36961q = Typeface.MONOSPACE;
                    }
                } else {
                    this.f36961q = Typeface.SERIF;
                }
            } else {
                this.f36961q = Typeface.SANS_SERIF;
            }
            this.f36961q = Typeface.create(this.f36961q, this.f36949e);
        }
    }

    private boolean m(Context context) {
        Typeface typeface;
        if (e.a()) {
            return true;
        }
        int i10 = this.f36959o;
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
        return this.f36961q;
    }

    public Typeface f(Context context) {
        if (this.f36960p) {
            return this.f36961q;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f36959o);
                this.f36961q = i10;
                if (i10 != null) {
                    this.f36961q = Typeface.create(i10, this.f36949e);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f36948d, e10);
            }
        }
        d();
        this.f36960p = true;
        return this.f36961q;
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
        int i10 = this.f36959o;
        if (i10 == 0) {
            this.f36960p = true;
        }
        if (this.f36960p) {
            fVar.b(this.f36961q, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f36960p = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f36948d, e10);
            this.f36960p = true;
            fVar.a(-3);
        }
    }

    public ColorStateList i() {
        return this.f36957m;
    }

    public float j() {
        return this.f36958n;
    }

    public void k(ColorStateList colorStateList) {
        this.f36957m = colorStateList;
    }

    public void l(float f10) {
        this.f36958n = f10;
    }

    public void n(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        o(context, textPaint, fVar);
        ColorStateList colorStateList = this.f36957m;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f36954j;
        float f11 = this.f36952h;
        float f12 = this.f36953i;
        ColorStateList colorStateList2 = this.f36947c;
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
        int i10 = this.f36949e & (~typeface.getStyle());
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
        textPaint.setTextSize(this.f36958n);
        if (this.f36955k) {
            textPaint.setLetterSpacing(this.f36956l);
        }
    }
}
