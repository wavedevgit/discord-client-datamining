package mh;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Typeface;
import android.text.TextPaint;
import android.util.Log;
import q1.j;
import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final ColorStateList f38520a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f38521b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f38522c;

    /* renamed from: d  reason: collision with root package name */
    public final String f38523d;

    /* renamed from: e  reason: collision with root package name */
    public final int f38524e;

    /* renamed from: f  reason: collision with root package name */
    public final int f38525f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f38526g;

    /* renamed from: h  reason: collision with root package name */
    public final float f38527h;

    /* renamed from: i  reason: collision with root package name */
    public final float f38528i;

    /* renamed from: j  reason: collision with root package name */
    public final float f38529j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f38530k;

    /* renamed from: l  reason: collision with root package name */
    public final float f38531l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f38532m;

    /* renamed from: n  reason: collision with root package name */
    private float f38533n;

    /* renamed from: o  reason: collision with root package name */
    private final int f38534o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f38535p = false;

    /* renamed from: q  reason: collision with root package name */
    private Typeface f38536q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f38537a;

        a(f fVar) {
            this.f38537a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f38535p = true;
            this.f38537a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f38536q = Typeface.create(typeface, dVar.f38524e);
            d.this.f38535p = true;
            this.f38537a.b(d.this.f38536q, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f38539a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f38540b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f38541c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f38539a = context;
            this.f38540b = textPaint;
            this.f38541c = fVar;
        }

        @Override // mh.f
        public void a(int i10) {
            this.f38541c.a(i10);
        }

        @Override // mh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.p(this.f38539a, this.f38540b, typeface);
            this.f38541c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, k.f55873o6);
        l(obtainStyledAttributes.getDimension(k.f55882p6, 0.0f));
        k(c.a(context, obtainStyledAttributes, k.f55909s6));
        this.f38520a = c.a(context, obtainStyledAttributes, k.f55918t6);
        this.f38521b = c.a(context, obtainStyledAttributes, k.f55927u6);
        this.f38524e = obtainStyledAttributes.getInt(k.f55900r6, 0);
        this.f38525f = obtainStyledAttributes.getInt(k.f55891q6, 1);
        int e10 = c.e(obtainStyledAttributes, k.A6, k.f55972z6);
        this.f38534o = obtainStyledAttributes.getResourceId(e10, 0);
        this.f38523d = obtainStyledAttributes.getString(e10);
        this.f38526g = obtainStyledAttributes.getBoolean(k.B6, false);
        this.f38522c = c.a(context, obtainStyledAttributes, k.f55936v6);
        this.f38527h = obtainStyledAttributes.getFloat(k.f55945w6, 0.0f);
        this.f38528i = obtainStyledAttributes.getFloat(k.f55954x6, 0.0f);
        this.f38529j = obtainStyledAttributes.getFloat(k.f55963y6, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, k.f55970z4);
        this.f38530k = obtainStyledAttributes2.hasValue(k.A4);
        this.f38531l = obtainStyledAttributes2.getFloat(k.A4, 0.0f);
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f38536q == null && (str = this.f38523d) != null) {
            this.f38536q = Typeface.create(str, this.f38524e);
        }
        if (this.f38536q == null) {
            int i10 = this.f38525f;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f38536q = Typeface.DEFAULT;
                    } else {
                        this.f38536q = Typeface.MONOSPACE;
                    }
                } else {
                    this.f38536q = Typeface.SERIF;
                }
            } else {
                this.f38536q = Typeface.SANS_SERIF;
            }
            this.f38536q = Typeface.create(this.f38536q, this.f38524e);
        }
    }

    private boolean m(Context context) {
        Typeface typeface;
        if (e.a()) {
            return true;
        }
        int i10 = this.f38534o;
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
        return this.f38536q;
    }

    public Typeface f(Context context) {
        if (this.f38535p) {
            return this.f38536q;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f38534o);
                this.f38536q = i10;
                if (i10 != null) {
                    this.f38536q = Typeface.create(i10, this.f38524e);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f38523d, e10);
            }
        }
        d();
        this.f38535p = true;
        return this.f38536q;
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
        int i10 = this.f38534o;
        if (i10 == 0) {
            this.f38535p = true;
        }
        if (this.f38535p) {
            fVar.b(this.f38536q, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f38535p = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f38523d, e10);
            this.f38535p = true;
            fVar.a(-3);
        }
    }

    public ColorStateList i() {
        return this.f38532m;
    }

    public float j() {
        return this.f38533n;
    }

    public void k(ColorStateList colorStateList) {
        this.f38532m = colorStateList;
    }

    public void l(float f10) {
        this.f38533n = f10;
    }

    public void n(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        o(context, textPaint, fVar);
        ColorStateList colorStateList = this.f38532m;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f38529j;
        float f11 = this.f38527h;
        float f12 = this.f38528i;
        ColorStateList colorStateList2 = this.f38522c;
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
        int i10 = this.f38524e & (~typeface.getStyle());
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
        textPaint.setTextSize(this.f38533n);
        if (this.f38530k) {
            textPaint.setLetterSpacing(this.f38531l);
        }
    }
}
