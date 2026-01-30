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
    public final ColorStateList f37362a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f37363b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f37364c;

    /* renamed from: d  reason: collision with root package name */
    public final String f37365d;

    /* renamed from: e  reason: collision with root package name */
    public final int f37366e;

    /* renamed from: f  reason: collision with root package name */
    public final int f37367f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f37368g;

    /* renamed from: h  reason: collision with root package name */
    public final float f37369h;

    /* renamed from: i  reason: collision with root package name */
    public final float f37370i;

    /* renamed from: j  reason: collision with root package name */
    public final float f37371j;

    /* renamed from: k  reason: collision with root package name */
    public final boolean f37372k;

    /* renamed from: l  reason: collision with root package name */
    public final float f37373l;

    /* renamed from: m  reason: collision with root package name */
    private ColorStateList f37374m;

    /* renamed from: n  reason: collision with root package name */
    private float f37375n;

    /* renamed from: o  reason: collision with root package name */
    private final int f37376o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f37377p = false;

    /* renamed from: q  reason: collision with root package name */
    private Typeface f37378q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f37379a;

        a(f fVar) {
            this.f37379a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f37377p = true;
            this.f37379a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f37378q = Typeface.create(typeface, dVar.f37366e);
            d.this.f37377p = true;
            this.f37379a.b(d.this.f37378q, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f37381a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f37382b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f37383c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f37381a = context;
            this.f37382b = textPaint;
            this.f37383c = fVar;
        }

        @Override // lh.f
        public void a(int i10) {
            this.f37383c.a(i10);
        }

        @Override // lh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.p(this.f37381a, this.f37382b, typeface);
            this.f37383c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, k.f54685o6);
        l(obtainStyledAttributes.getDimension(k.f54694p6, 0.0f));
        k(c.a(context, obtainStyledAttributes, k.f54721s6));
        this.f37362a = c.a(context, obtainStyledAttributes, k.f54730t6);
        this.f37363b = c.a(context, obtainStyledAttributes, k.f54739u6);
        this.f37366e = obtainStyledAttributes.getInt(k.f54712r6, 0);
        this.f37367f = obtainStyledAttributes.getInt(k.f54703q6, 1);
        int e10 = c.e(obtainStyledAttributes, k.A6, k.f54784z6);
        this.f37376o = obtainStyledAttributes.getResourceId(e10, 0);
        this.f37365d = obtainStyledAttributes.getString(e10);
        this.f37368g = obtainStyledAttributes.getBoolean(k.B6, false);
        this.f37364c = c.a(context, obtainStyledAttributes, k.f54748v6);
        this.f37369h = obtainStyledAttributes.getFloat(k.f54757w6, 0.0f);
        this.f37370i = obtainStyledAttributes.getFloat(k.f54766x6, 0.0f);
        this.f37371j = obtainStyledAttributes.getFloat(k.f54775y6, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, k.f54782z4);
        this.f37372k = obtainStyledAttributes2.hasValue(k.A4);
        this.f37373l = obtainStyledAttributes2.getFloat(k.A4, 0.0f);
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f37378q == null && (str = this.f37365d) != null) {
            this.f37378q = Typeface.create(str, this.f37366e);
        }
        if (this.f37378q == null) {
            int i10 = this.f37367f;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f37378q = Typeface.DEFAULT;
                    } else {
                        this.f37378q = Typeface.MONOSPACE;
                    }
                } else {
                    this.f37378q = Typeface.SERIF;
                }
            } else {
                this.f37378q = Typeface.SANS_SERIF;
            }
            this.f37378q = Typeface.create(this.f37378q, this.f37366e);
        }
    }

    private boolean m(Context context) {
        Typeface typeface;
        if (e.a()) {
            return true;
        }
        int i10 = this.f37376o;
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
        return this.f37378q;
    }

    public Typeface f(Context context) {
        if (this.f37377p) {
            return this.f37378q;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f37376o);
                this.f37378q = i10;
                if (i10 != null) {
                    this.f37378q = Typeface.create(i10, this.f37366e);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f37365d, e10);
            }
        }
        d();
        this.f37377p = true;
        return this.f37378q;
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
        int i10 = this.f37376o;
        if (i10 == 0) {
            this.f37377p = true;
        }
        if (this.f37377p) {
            fVar.b(this.f37378q, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f37377p = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f37365d, e10);
            this.f37377p = true;
            fVar.a(-3);
        }
    }

    public ColorStateList i() {
        return this.f37374m;
    }

    public float j() {
        return this.f37375n;
    }

    public void k(ColorStateList colorStateList) {
        this.f37374m = colorStateList;
    }

    public void l(float f10) {
        this.f37375n = f10;
    }

    public void n(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        o(context, textPaint, fVar);
        ColorStateList colorStateList = this.f37374m;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f37371j;
        float f11 = this.f37369h;
        float f12 = this.f37370i;
        ColorStateList colorStateList2 = this.f37364c;
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
        int i10 = this.f37366e & (~typeface.getStyle());
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
        textPaint.setTextSize(this.f37375n);
        if (this.f37372k) {
            textPaint.setLetterSpacing(this.f37373l);
        }
    }
}
