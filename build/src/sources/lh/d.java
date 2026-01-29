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
    public final ColorStateList f37346a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f37347b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f37348c;

    /* renamed from: d  reason: collision with root package name */
    public final String f37349d;

    /* renamed from: e  reason: collision with root package name */
    public final int f37350e;

    /* renamed from: f  reason: collision with root package name */
    public final int f37351f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f37352g;

    /* renamed from: h  reason: collision with root package name */
    public final float f37353h;

    /* renamed from: i  reason: collision with root package name */
    public final float f37354i;

    /* renamed from: j  reason: collision with root package name */
    public final float f37355j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f37356k;

    /* renamed from: l  reason: collision with root package name */
    public final float f37357l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f37358m;

    /* renamed from: n  reason: collision with root package name */
    private float f37359n;

    /* renamed from: o  reason: collision with root package name */
    private final int f37360o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37361p = false;

    /* renamed from: q  reason: collision with root package name */
    private Typeface f37362q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f37363a;

        a(f fVar) {
            this.f37363a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f37361p = true;
            this.f37363a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f37362q = Typeface.create(typeface, dVar.f37350e);
            d.this.f37361p = true;
            this.f37363a.b(d.this.f37362q, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f37365a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f37366b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f37367c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f37365a = context;
            this.f37366b = textPaint;
            this.f37367c = fVar;
        }

        @Override // lh.f
        public void a(int i10) {
            this.f37367c.a(i10);
        }

        @Override // lh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.p(this.f37365a, this.f37366b, typeface);
            this.f37367c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, k.f54669o6);
        l(obtainStyledAttributes.getDimension(k.f54678p6, 0.0f));
        k(c.a(context, obtainStyledAttributes, k.f54705s6));
        this.f37346a = c.a(context, obtainStyledAttributes, k.f54714t6);
        this.f37347b = c.a(context, obtainStyledAttributes, k.f54723u6);
        this.f37350e = obtainStyledAttributes.getInt(k.f54696r6, 0);
        this.f37351f = obtainStyledAttributes.getInt(k.f54687q6, 1);
        int e10 = c.e(obtainStyledAttributes, k.A6, k.f54768z6);
        this.f37360o = obtainStyledAttributes.getResourceId(e10, 0);
        this.f37349d = obtainStyledAttributes.getString(e10);
        this.f37352g = obtainStyledAttributes.getBoolean(k.B6, false);
        this.f37348c = c.a(context, obtainStyledAttributes, k.f54732v6);
        this.f37353h = obtainStyledAttributes.getFloat(k.f54741w6, 0.0f);
        this.f37354i = obtainStyledAttributes.getFloat(k.f54750x6, 0.0f);
        this.f37355j = obtainStyledAttributes.getFloat(k.f54759y6, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, k.f54766z4);
        this.f37356k = obtainStyledAttributes2.hasValue(k.A4);
        this.f37357l = obtainStyledAttributes2.getFloat(k.A4, 0.0f);
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f37362q == null && (str = this.f37349d) != null) {
            this.f37362q = Typeface.create(str, this.f37350e);
        }
        if (this.f37362q == null) {
            int i10 = this.f37351f;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f37362q = Typeface.DEFAULT;
                    } else {
                        this.f37362q = Typeface.MONOSPACE;
                    }
                } else {
                    this.f37362q = Typeface.SERIF;
                }
            } else {
                this.f37362q = Typeface.SANS_SERIF;
            }
            this.f37362q = Typeface.create(this.f37362q, this.f37350e);
        }
    }

    private boolean m(Context context) {
        Typeface typeface;
        if (e.a()) {
            return true;
        }
        int i10 = this.f37360o;
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
        return this.f37362q;
    }

    public Typeface f(Context context) {
        if (this.f37361p) {
            return this.f37362q;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f37360o);
                this.f37362q = i10;
                if (i10 != null) {
                    this.f37362q = Typeface.create(i10, this.f37350e);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f37349d, e10);
            }
        }
        d();
        this.f37361p = true;
        return this.f37362q;
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
        int i10 = this.f37360o;
        if (i10 == 0) {
            this.f37361p = true;
        }
        if (this.f37361p) {
            fVar.b(this.f37362q, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f37361p = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f37349d, e10);
            this.f37361p = true;
            fVar.a(-3);
        }
    }

    public ColorStateList i() {
        return this.f37358m;
    }

    public float j() {
        return this.f37359n;
    }

    public void k(ColorStateList colorStateList) {
        this.f37358m = colorStateList;
    }

    public void l(float f10) {
        this.f37359n = f10;
    }

    public void n(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        o(context, textPaint, fVar);
        ColorStateList colorStateList = this.f37358m;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f37355j;
        float f11 = this.f37353h;
        float f12 = this.f37354i;
        ColorStateList colorStateList2 = this.f37348c;
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
        int i10 = this.f37350e & (~typeface.getStyle());
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
        textPaint.setTextSize(this.f37359n);
        if (this.f37356k) {
            textPaint.setLetterSpacing(this.f37357l);
        }
    }
}
