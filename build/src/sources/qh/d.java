package qh;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.content.res.XmlResourceParser;
import android.graphics.Typeface;
import android.os.Build;
import android.text.TextPaint;
import android.util.Log;
import android.util.Xml;
import bh.l;
import q1.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final ColorStateList f45242a;

    /* renamed from: b  reason: collision with root package name */
    public final ColorStateList f45243b;

    /* renamed from: c  reason: collision with root package name */
    public final ColorStateList f45244c;

    /* renamed from: d  reason: collision with root package name */
    public final String f45245d;

    /* renamed from: e  reason: collision with root package name */
    public String f45246e;

    /* renamed from: f  reason: collision with root package name */
    public final int f45247f;

    /* renamed from: g  reason: collision with root package name */
    public final int f45248g;

    /* renamed from: h  reason: collision with root package name */
    public final boolean f45249h;

    /* renamed from: i  reason: collision with root package name */
    public final float f45250i;

    /* renamed from: j  reason: collision with root package name */
    public final float f45251j;

    /* renamed from: k  reason: collision with root package name */
    public final float f45252k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f45253l;

    /* renamed from: m  reason: collision with root package name */
    public final float f45254m;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f45255n;

    /* renamed from: o  reason: collision with root package name */
    private float f45256o;

    /* renamed from: p  reason: collision with root package name */
    private final int f45257p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f45258q = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f45259r = false;

    /* renamed from: s  reason: collision with root package name */
    private Typeface f45260s;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends j.f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ f f45261a;

        a(f fVar) {
            this.f45261a = fVar;
        }

        @Override // q1.j.f
        public void f(int i10) {
            d.this.f45258q = true;
            this.f45261a.a(i10);
        }

        @Override // q1.j.f
        public void g(Typeface typeface) {
            d dVar = d.this;
            dVar.f45260s = Typeface.create(typeface, dVar.f45247f);
            d.this.f45258q = true;
            this.f45261a.b(d.this.f45260s, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Context f45263a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ TextPaint f45264b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ f f45265c;

        b(Context context, TextPaint textPaint, f fVar) {
            this.f45263a = context;
            this.f45264b = textPaint;
            this.f45265c = fVar;
        }

        @Override // qh.f
        public void a(int i10) {
            this.f45265c.a(i10);
        }

        @Override // qh.f
        public void b(Typeface typeface, boolean z10) {
            d.this.r(this.f45263a, this.f45264b, typeface);
            this.f45265c.b(typeface, z10);
        }
    }

    public d(Context context, int i10) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(i10, f.j.S2);
        o(obtainStyledAttributes.getDimension(f.j.T2, 0.0f));
        n(c.a(context, obtainStyledAttributes, f.j.W2));
        this.f45242a = c.a(context, obtainStyledAttributes, f.j.X2);
        this.f45243b = c.a(context, obtainStyledAttributes, f.j.Y2);
        this.f45247f = obtainStyledAttributes.getInt(f.j.V2, 0);
        this.f45248g = obtainStyledAttributes.getInt(f.j.U2, 1);
        int g10 = c.g(obtainStyledAttributes, f.j.f23445f3, f.j.f23435d3);
        this.f45257p = obtainStyledAttributes.getResourceId(g10, 0);
        this.f45245d = obtainStyledAttributes.getString(g10);
        this.f45249h = obtainStyledAttributes.getBoolean(f.j.f23455h3, false);
        this.f45244c = c.a(context, obtainStyledAttributes, f.j.Z2);
        this.f45250i = obtainStyledAttributes.getFloat(f.j.f23420a3, 0.0f);
        this.f45251j = obtainStyledAttributes.getFloat(f.j.f23425b3, 0.0f);
        this.f45252k = obtainStyledAttributes.getFloat(f.j.f23430c3, 0.0f);
        obtainStyledAttributes.recycle();
        TypedArray obtainStyledAttributes2 = context.obtainStyledAttributes(i10, l.G4);
        this.f45253l = obtainStyledAttributes2.hasValue(l.H4);
        this.f45254m = obtainStyledAttributes2.getFloat(l.H4, 0.0f);
        if (Build.VERSION.SDK_INT >= 26) {
            this.f45246e = obtainStyledAttributes2.getString(c.g(obtainStyledAttributes2, l.K4, l.I4));
        }
        obtainStyledAttributes2.recycle();
    }

    private void d() {
        String str;
        if (this.f45260s == null && (str = this.f45245d) != null) {
            this.f45260s = Typeface.create(str, this.f45247f);
        }
        if (this.f45260s == null) {
            int i10 = this.f45248g;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        this.f45260s = Typeface.DEFAULT;
                    } else {
                        this.f45260s = Typeface.MONOSPACE;
                    }
                } else {
                    this.f45260s = Typeface.SERIF;
                }
            } else {
                this.f45260s = Typeface.SANS_SERIF;
            }
            this.f45260s = Typeface.create(this.f45260s, this.f45247f);
        }
    }

    private Typeface i(Context context) {
        Typeface create;
        if (this.f45259r) {
            return null;
        }
        this.f45259r = true;
        String m10 = m(context, this.f45257p);
        if (m10 == null || (create = Typeface.create(m10, 0)) == Typeface.DEFAULT) {
            return null;
        }
        return Typeface.create(create, this.f45247f);
    }

    private boolean l(Context context) {
        if (e.a()) {
            f(context);
            return true;
        } else if (this.f45258q) {
            return true;
        } else {
            int i10 = this.f45257p;
            if (i10 == 0) {
                return false;
            }
            Typeface c10 = j.c(context, i10);
            if (c10 != null) {
                this.f45260s = c10;
                this.f45258q = true;
                return true;
            }
            Typeface i11 = i(context);
            if (i11 == null) {
                return false;
            }
            this.f45260s = i11;
            this.f45258q = true;
            return true;
        }
    }

    private static String m(Context context, int i10) {
        Resources resources = context.getResources();
        if (i10 != 0 && resources.getResourceTypeName(i10).equals("font")) {
            try {
                XmlResourceParser xml = resources.getXml(i10);
                while (xml.getEventType() != 1) {
                    if (xml.getEventType() == 2 && xml.getName().equals("font-family")) {
                        TypedArray obtainAttributes = resources.obtainAttributes(Xml.asAttributeSet(xml), o1.g.f38469h);
                        String string = obtainAttributes.getString(o1.g.f38477p);
                        obtainAttributes.recycle();
                        return string;
                    }
                    xml.next();
                }
            } catch (Throwable unused) {
            }
        }
        return null;
    }

    public Typeface e() {
        d();
        return this.f45260s;
    }

    public Typeface f(Context context) {
        if (this.f45258q) {
            return this.f45260s;
        }
        if (!context.isRestricted()) {
            try {
                Typeface i10 = j.i(context, this.f45257p);
                this.f45260s = i10;
                if (i10 != null) {
                    this.f45260s = Typeface.create(i10, this.f45247f);
                }
            } catch (Resources.NotFoundException | UnsupportedOperationException unused) {
            } catch (Exception e10) {
                Log.d("TextAppearance", "Error loading font " + this.f45245d, e10);
            }
        }
        d();
        this.f45258q = true;
        return this.f45260s;
    }

    public void g(Context context, TextPaint textPaint, f fVar) {
        r(context, textPaint, e());
        h(context, new b(context, textPaint, fVar));
    }

    public void h(Context context, f fVar) {
        if (!l(context)) {
            d();
        }
        int i10 = this.f45257p;
        if (i10 == 0) {
            this.f45258q = true;
        }
        if (this.f45258q) {
            fVar.b(this.f45260s, true);
            return;
        }
        try {
            j.k(context, i10, new a(fVar), null);
        } catch (Resources.NotFoundException unused) {
            this.f45258q = true;
            fVar.a(1);
        } catch (Exception e10) {
            Log.d("TextAppearance", "Error loading font " + this.f45245d, e10);
            this.f45258q = true;
            fVar.a(-3);
        }
    }

    public ColorStateList j() {
        return this.f45255n;
    }

    public float k() {
        return this.f45256o;
    }

    public void n(ColorStateList colorStateList) {
        this.f45255n = colorStateList;
    }

    public void o(float f10) {
        this.f45256o = f10;
    }

    public void p(Context context, TextPaint textPaint, f fVar) {
        int i10;
        int i11;
        q(context, textPaint, fVar);
        ColorStateList colorStateList = this.f45255n;
        if (colorStateList != null) {
            i10 = colorStateList.getColorForState(textPaint.drawableState, colorStateList.getDefaultColor());
        } else {
            i10 = -16777216;
        }
        textPaint.setColor(i10);
        float f10 = this.f45252k;
        float f11 = this.f45250i;
        float f12 = this.f45251j;
        ColorStateList colorStateList2 = this.f45244c;
        if (colorStateList2 != null) {
            i11 = colorStateList2.getColorForState(textPaint.drawableState, colorStateList2.getDefaultColor());
        } else {
            i11 = 0;
        }
        textPaint.setShadowLayer(f10, f11, f12, i11);
    }

    public void q(Context context, TextPaint textPaint, f fVar) {
        Typeface typeface;
        if (l(context) && this.f45258q && (typeface = this.f45260s) != null) {
            r(context, textPaint, typeface);
        } else {
            g(context, textPaint, fVar);
        }
    }

    public void r(Context context, TextPaint textPaint, Typeface typeface) {
        boolean z10;
        float f10;
        Typeface a10 = h.a(context, typeface);
        if (a10 != null) {
            typeface = a10;
        }
        textPaint.setTypeface(typeface);
        int i10 = this.f45247f & (~typeface.getStyle());
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
        textPaint.setTextSize(this.f45256o);
        if (Build.VERSION.SDK_INT >= 26) {
            textPaint.setFontVariationSettings(this.f45246e);
        }
        if (this.f45253l) {
            textPaint.setLetterSpacing(this.f45254m);
        }
    }
}
