package com.horcrux.svg;

import android.content.res.AssetManager;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Region;
import android.graphics.Typeface;
import android.os.Build;
import android.text.Layout;
import android.text.SpannableString;
import android.text.StaticLayout;
import android.text.TextPaint;
import android.view.View;
import android.view.ViewParent;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.views.text.ReactFontManager;
import java.text.Bidi;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class w0 extends j1 {
    private Path B;
    String C;
    private x0 D;
    private final ArrayList E;
    private final ArrayList F;
    private final AssetManager G;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17719a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f17720b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f17721c;

        static {
            int[] iArr = new int[y0.values().length];
            f17721c = iArr;
            try {
                iArr[y0.baseline.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17721c[y0.textBottom.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17721c[y0.afterEdge.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f17721c[y0.textAfterEdge.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f17721c[y0.alphabetic.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f17721c[y0.ideographic.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f17721c[y0.middle.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f17721c[y0.central.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f17721c[y0.mathematical.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f17721c[y0.hanging.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f17721c[y0.textTop.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f17721c[y0.beforeEdge.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f17721c[y0.textBeforeEdge.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f17721c[y0.bottom.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f17721c[y0.center.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f17721c[y0.top.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            int[] iArr2 = new int[e1.values().length];
            f17720b = iArr2;
            try {
                iArr2[e1.spacing.ordinal()] = 1;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                f17720b[e1.spacingAndGlyphs.ordinal()] = 2;
            } catch (NoSuchFieldError unused18) {
            }
            int[] iArr3 = new int[c1.values().length];
            f17719a = iArr3;
            try {
                iArr3[c1.start.ordinal()] = 1;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                f17719a[c1.middle.ordinal()] = 2;
            } catch (NoSuchFieldError unused20) {
            }
            try {
                f17719a[c1.end.ordinal()] = 3;
            } catch (NoSuchFieldError unused21) {
            }
        }
    }

    public w0(ReactContext reactContext) {
        super(reactContext);
        this.E = new ArrayList();
        this.F = new ArrayList();
        this.G = this.mContext.getResources().getAssets();
    }

    private void E(Paint paint, y yVar) {
        int i10 = Build.VERSION.SDK_INT;
        double d10 = yVar.f17740n;
        paint.setLetterSpacing((float) (d10 / (yVar.f17727a * this.mScale)));
        if (d10 == 0.0d && yVar.f17735i == a1.normal) {
            paint.setFontFeatureSettings("'rlig', 'liga', 'clig', 'calt', 'locl', 'ccmp', 'mark', 'mkmk','kern', 'hlig', 'cala', " + yVar.f17733g);
        } else {
            paint.setFontFeatureSettings("'rlig', 'liga', 'clig', 'calt', 'locl', 'ccmp', 'mark', 'mkmk','kern', 'liga' 0, 'clig' 0, 'dlig' 0, 'hlig' 0, 'cala' 0, " + yVar.f17733g);
        }
        if (i10 >= 26) {
            paint.setFontVariationSettings("'wght' " + yVar.f17732f + yVar.f17734h);
        }
    }

    private void F(Paint paint, y yVar) {
        boolean z10;
        boolean z11;
        int i10 = 0;
        if (yVar.f17731e != b1.Bold && yVar.f17732f < 550) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (yVar.f17729c == z0.italic) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 && z11) {
            i10 = 3;
        } else if (z10) {
            i10 = 1;
        } else if (z11) {
            i10 = 2;
        }
        int i11 = yVar.f17732f;
        String str = yVar.f17728b;
        Typeface typeface = null;
        if (str != null && str.length() > 0) {
            String str2 = "fonts/" + str + ".otf";
            String str3 = "fonts/" + str + ".ttf";
            if (Build.VERSION.SDK_INT >= 26) {
                v0.a();
                Typeface.Builder a10 = u0.a(this.G, str2);
                a10.setFontVariationSettings("'wght' " + i11 + yVar.f17734h);
                a10.setWeight(i11);
                a10.setItalic(z11);
                typeface = a10.build();
                if (typeface == null) {
                    v0.a();
                    Typeface.Builder a11 = u0.a(this.G, str3);
                    a11.setFontVariationSettings("'wght' " + i11 + yVar.f17734h);
                    a11.setWeight(i11);
                    a11.setItalic(z11);
                    typeface = a11.build();
                }
            } else {
                try {
                    try {
                        typeface = Typeface.create(Typeface.createFromAsset(this.G, str2), i10);
                    } catch (Exception unused) {
                        typeface = Typeface.create(Typeface.createFromAsset(this.G, str3), i10);
                    }
                } catch (Exception unused2) {
                }
            }
        }
        if (typeface == null) {
            try {
                typeface = ReactFontManager.getInstance().getTypeface(str, i10, this.G);
            } catch (Exception unused3) {
            }
        }
        if (Build.VERSION.SDK_INT >= 28) {
            typeface = Typeface.create(typeface, i11, z11);
        }
        paint.setLinearText(true);
        paint.setSubpixelText(true);
        paint.setTypeface(typeface);
        paint.setTextSize((float) (yVar.f17727a * this.mScale));
        paint.setLetterSpacing(0.0f);
    }

    private void G(Canvas canvas, Paint paint) {
        Layout.Alignment alignment;
        a0 g10 = g();
        i();
        y b10 = g10.b();
        TextPaint textPaint = new TextPaint(paint);
        F(textPaint, b10);
        E(textPaint, b10);
        double c10 = g10.c();
        int i10 = a.f17719a[b10.f17736j.ordinal()];
        if (i10 != 2) {
            if (i10 != 3) {
                alignment = Layout.Alignment.ALIGN_NORMAL;
            } else {
                alignment = Layout.Alignment.ALIGN_OPPOSITE;
            }
        } else {
            alignment = Layout.Alignment.ALIGN_CENTER;
        }
        StaticLayout J = J(textPaint, alignment, true, new SpannableString(this.C), (int) n0.a(this.f17587q, canvas.getWidth(), 0.0d, this.mScale, c10));
        int lineAscent = J.getLineAscent(0);
        h();
        canvas.save();
        canvas.translate((float) g10.l(0.0d), (float) (g10.m() + lineAscent));
        J.draw(canvas);
        canvas.restore();
    }

    private double H(SVGLength sVGLength, double d10, double d11) {
        return n0.a(sVGLength, d10, 0.0d, this.mScale, d11);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Removed duplicated region for block: B:102:0x0284  */
    /* JADX WARN: Removed duplicated region for block: B:104:0x0299  */
    /* JADX WARN: Removed duplicated region for block: B:116:0x02d7  */
    /* JADX WARN: Removed duplicated region for block: B:129:0x0328  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0088  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x00a1  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x00bd  */
    /* JADX WARN: Removed duplicated region for block: B:34:0x00f9  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x0167  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x0188  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x01f9  */
    /* JADX WARN: Removed duplicated region for block: B:79:0x023a  */
    /* JADX WARN: Removed duplicated region for block: B:88:0x0258  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x0264  */
    /* JADX WARN: Removed duplicated region for block: B:96:0x0270  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private android.graphics.Path I(java.lang.String r69, android.graphics.Paint r70, android.graphics.Canvas r71) {
        /*
            Method dump skipped, instructions count: 1420
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.horcrux.svg.w0.I(java.lang.String, android.graphics.Paint, android.graphics.Canvas):android.graphics.Path");
    }

    private StaticLayout J(TextPaint textPaint, Layout.Alignment alignment, boolean z10, SpannableString spannableString, int i10) {
        return StaticLayout.Builder.obtain(spannableString, 0, spannableString.length(), textPaint, i10).setAlignment(alignment).setLineSpacing(0.0f, 1.0f).setIncludePad(z10).setBreakStrategy(1).setHyphenationFrequency(1).build();
    }

    private double K(c1 c1Var, double d10) {
        int i10 = a.f17719a[c1Var.ordinal()];
        if (i10 != 2) {
            if (i10 != 3) {
                return 0.0d;
            }
            return -d10;
        }
        return (-d10) / 2.0d;
    }

    private void M() {
        for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
            if (parent.getClass() == x0.class) {
                this.D = (x0) parent;
                return;
            } else if (!(parent instanceof j1)) {
                return;
            }
        }
    }

    public static String N(String str) {
        if (str != null && str.length() != 0) {
            Bidi bidi = new Bidi(str, -2);
            if (bidi.isLeftToRight()) {
                return str;
            }
            int runCount = bidi.getRunCount();
            byte[] bArr = new byte[runCount];
            Integer[] numArr = new Integer[runCount];
            for (int i10 = 0; i10 < runCount; i10++) {
                bArr[i10] = (byte) bidi.getRunLevel(i10);
                numArr[i10] = Integer.valueOf(i10);
            }
            Bidi.reorderVisually(bArr, 0, numArr, 0, runCount);
            StringBuilder sb2 = new StringBuilder();
            for (int i11 = 0; i11 < runCount; i11++) {
                int intValue = numArr[i11].intValue();
                int runStart = bidi.getRunStart(intValue);
                int runLimit = bidi.getRunLimit(intValue);
                if ((bArr[intValue] & 1) != 0) {
                    while (true) {
                        runLimit--;
                        if (runLimit >= runStart) {
                            sb2.append(str.charAt(runLimit));
                        }
                    }
                } else {
                    sb2.append((CharSequence) str, runStart, runLimit);
                }
            }
            return sb2.toString();
        }
        return str;
    }

    public void L(String str) {
        this.C = str;
        invalidate();
    }

    @Override // com.horcrux.svg.j1, com.horcrux.svg.VirtualView
    void clearCache() {
        this.B = null;
        super.clearCache();
    }

    @Override // com.horcrux.svg.j1, com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    void draw(Canvas canvas, Paint paint, float f10) {
        if (this.C != null) {
            SVGLength sVGLength = this.f17587q;
            if (sVGLength != null && sVGLength.f17372a != 0.0d) {
                if (setupFillPaint(paint, this.fillOpacity * f10)) {
                    G(canvas, paint);
                }
                if (setupStrokePaint(paint, f10 * this.strokeOpacity)) {
                    G(canvas, paint);
                    return;
                }
                return;
            }
            int size = this.E.size();
            if (size > 0) {
                F(paint, g().b());
                for (int i10 = 0; i10 < size; i10++) {
                    canvas.save();
                    canvas.concat((Matrix) this.F.get(i10));
                    canvas.drawText((String) this.E.get(i10), 0.0f, 0.0f, paint);
                    canvas.restore();
                }
            }
            d(canvas, paint, f10);
            return;
        }
        clip(canvas, paint);
        c(canvas, paint, f10);
    }

    @Override // com.horcrux.svg.j1, com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    Path getPath(Canvas canvas, Paint paint) {
        Path path = this.B;
        if (path != null) {
            return path;
        }
        if (this.C == null) {
            Path p10 = p(canvas, paint);
            this.B = p10;
            return p10;
        }
        M();
        i();
        this.B = I(N(this.C), paint, canvas);
        h();
        return this.B;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public int hitTest(float[] fArr) {
        Region region;
        if (this.C == null) {
            return super.hitTest(fArr);
        }
        if (this.mPath != null && this.mInvertible) {
            float[] fArr2 = new float[2];
            this.mInvMatrix.mapPoints(fArr2, fArr);
            this.mInvTransform.mapPoints(fArr2);
            int round = Math.round(fArr2[0]);
            int round2 = Math.round(fArr2[1]);
            initBounds();
            Region region2 = this.mRegion;
            if ((region2 != null && region2.contains(round, round2)) || ((region = this.mStrokeRegion) != null && region.contains(round, round2))) {
                if (getClipPath() != null && !this.mClipRegion.contains(round, round2)) {
                    return -1;
                }
                return getId();
            }
        }
        return -1;
    }

    @Override // com.horcrux.svg.j1, com.horcrux.svg.VirtualView, android.view.View
    public void invalidate() {
        this.B = null;
        super.invalidate();
    }

    @Override // com.horcrux.svg.j1
    double q(Paint paint) {
        if (!Double.isNaN(this.A)) {
            return this.A;
        }
        String str = this.C;
        double d10 = 0.0d;
        if (str == null) {
            for (int i10 = 0; i10 < getChildCount(); i10++) {
                View childAt = getChildAt(i10);
                if (childAt instanceof j1) {
                    d10 += ((j1) childAt).q(paint);
                }
            }
            this.A = d10;
            return d10;
        } else if (str.length() == 0) {
            this.A = 0.0d;
            return 0.0d;
        } else {
            y b10 = g().b();
            F(paint, b10);
            E(paint, b10);
            double measureText = paint.measureText(str);
            this.A = measureText;
            return measureText;
        }
    }
}
