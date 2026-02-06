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
    public final ColorStateList f40683a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f40684b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f40685c;

    /* renamed from: d  reason: collision with root package name */
    public final String f40686d;

    /* renamed from: e  reason: collision with root package name */
    public final int f40687e;

    /* renamed from: f  reason: collision with root package name */
    public final int f40688f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f40689g;

    /* renamed from: h  reason: collision with root package name */
    public final float f40690h;

    /* renamed from: i  reason: collision with root package name */
    public final float f40691i;

    /* renamed from: j  reason: collision with root package name */
    public final float f40692j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f40693k;

    /* renamed from: l  reason: collision with root package name */
    public final float f40694l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f40695m;

    /* renamed from: n  reason: collision with root package name */
    private float f40696n;

    /* renamed from: o  reason: collision with root package name */
    private final int f40697o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f40698p = false;

    /* renamed from: q  reason: collision with root package name */
    private Typeface f40699q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f40700a;

        a(f fVar) {
            this.f40700a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f40698p = true;
            this.f40700a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f40699q = Typeface.create(typeface, dVar.f40687e);
            d.this.f40698p = true;
            this.f40700a.b(d.this.f40699q, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f40702a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f40703b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f40704c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f40702a = context;
            this.f40703b = textPaint;
            this.f40704c = fVar;
        }

        @Override // nh.f
        public void a(int i10) {
            this.f40704c.a(i10);
        }

        @Override // nh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.p(this.f40702a, this.f40703b, typeface);
            this.f40704c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, k.f968o6);
        l(obtainStyledAttributes.getDimension(k.f977p6, 0.0f));
        k(c.a(context, obtainStyledAttributes, k.f1004s6));
        this.f40683a = c.a(context, obtainStyledAttributes, k.f1013t6);
        this.f40684b = c.a(context, obtainStyledAttributes, k.f1022u6);
        this.f40687e = obtainStyledAttributes.getInt(k.f995r6, 0);
        this.f40688f = obtainStyledAttributes.getInt(k.f986q6, 1);
        int e10 = c.e(obtainStyledAttributes, k.A6, k.f1067z6);
        this.f40697o = obtainStyledAttributes.getResourceId(e10, 0);
        this.f40686d = obtainStyledAttributes.getString(e10);
        this.f40689g = obtainStyledAttributes.getBoolean(k.B6, false);
        this.f40685c = c.a(context, obtainStyledAttributes, k.f1031v6);
        this.f40690h = obtainStyledAttributes.getFloat(k.f1040w6, 0.0f);
        this.f40691i = obtainStyledAttributes.getFloat(k.f1049x6, 0.0f);
        this.f40692j = obtainStyledAttributes.getFloat(k.f1058y6, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, k.f1065z4);
        this.f40693k = obtainStyledAttributes2.hasValue(k.A4);
        this.f40694l = obtainStyledAttributes2.getFloat(k.A4, 0.0f);
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f40699q == null && (str = this.f40686d) != null) {
            this.f40699q = Typeface.create(str, this.f40687e);
        }
        if (this.f40699q == null) {
            int i10 = this.f40688f;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f40699q = Typeface.DEFAULT;
                    } else {
                        this.f40699q = Typeface.MONOSPACE;
                    }
                } else {
                    this.f40699q = Typeface.SERIF;
                }
            } else {
                this.f40699q = Typeface.SANS_SERIF;
            }
            this.f40699q = Typeface.create(this.f40699q, this.f40687e);
        }
    }

    private boolean m(Context context) {
        Typeface typeface;
        if (e.a()) {
            return true;
        }
        int i10 = this.f40697o;
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
        return this.f40699q;
    }

    public Typeface f(Context context) {
        if (this.f40698p) {
            return this.f40699q;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f40697o);
                this.f40699q = i10;
                if (i10 != null) {
                    this.f40699q = Typeface.create(i10, this.f40687e);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f40686d, e10);
            }
        }
        d();
        this.f40698p = true;
        return this.f40699q;
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
        int i10 = this.f40697o;
        if (i10 == 0) {
            this.f40698p = true;
        }
        if (this.f40698p) {
            fVar.b(this.f40699q, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f40698p = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f40686d, e10);
            this.f40698p = true;
            fVar.a(-3);
        }
    }

    public ColorStateList i() {
        return this.f40695m;
    }

    public float j() {
        return this.f40696n;
    }

    public void k(ColorStateList colorStateList) {
        this.f40695m = colorStateList;
    }

    public void l(float f10) {
        this.f40696n = f10;
    }

    public void n(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        o(context, textPaint, fVar);
        ColorStateList colorStateList = this.f40695m;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f40692j;
        float f11 = this.f40690h;
        float f12 = this.f40691i;
        ColorStateList colorStateList2 = this.f40685c;
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
        int i10 = this.f40687e & (~typeface.getStyle());
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
        textPaint.setTextSize(this.f40696n);
        if (this.f40693k) {
            textPaint.setLetterSpacing(this.f40694l);
        }
    }
}
