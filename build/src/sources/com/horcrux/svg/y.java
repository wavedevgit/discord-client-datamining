package com.horcrux.svg;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.ReactFontManager;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class y {

    /* renamed from: p  reason: collision with root package name */
    static final y f17726p = new y();

    /* renamed from: a  reason: collision with root package name */
    final double f17727a;

    /* renamed from: b  reason: collision with root package name */
    final String f17728b;

    /* renamed from: c  reason: collision with root package name */
    final z0 f17729c;

    /* renamed from: d  reason: collision with root package name */
    final ReadableMap f17730d;

    /* renamed from: e  reason: collision with root package name */
    b1 f17731e;

    /* renamed from: f  reason: collision with root package name */
    int f17732f;

    /* renamed from: g  reason: collision with root package name */
    final String f17733g;

    /* renamed from: h  reason: collision with root package name */
    final String f17734h;

    /* renamed from: i  reason: collision with root package name */
    final a1 f17735i;

    /* renamed from: j  reason: collision with root package name */
    final c1 f17736j;

    /* renamed from: k  reason: collision with root package name */
    private final d1 f17737k;

    /* renamed from: l  reason: collision with root package name */
    final double f17738l;

    /* renamed from: m  reason: collision with root package name */
    final double f17739m;

    /* renamed from: n  reason: collision with root package name */
    final double f17740n;

    /* renamed from: o  reason: collision with root package name */
    final boolean f17741o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private static final b1[] f17742a;

        /* renamed from: b  reason: collision with root package name */
        private static final int[] f17743b;

        static {
            b1 b1Var = b1.w100;
            b1 b1Var2 = b1.w200;
            b1 b1Var3 = b1.w300;
            b1 b1Var4 = b1.Normal;
            b1 b1Var5 = b1.w500;
            b1 b1Var6 = b1.w600;
            b1 b1Var7 = b1.Bold;
            b1 b1Var8 = b1.w800;
            b1 b1Var9 = b1.w900;
            f17742a = new b1[]{b1Var, b1Var, b1Var2, b1Var3, b1Var4, b1Var5, b1Var6, b1Var7, b1Var8, b1Var9, b1Var9};
            f17743b = new int[]{ReactFontManager.TypefaceStyle.NORMAL, ReactFontManager.TypefaceStyle.BOLD, 100, androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS, ReactFontManager.TypefaceStyle.NORMAL, 500, 600, ReactFontManager.TypefaceStyle.BOLD, 800, 900};
        }

        private static int a(int i10) {
            if (i10 < 350) {
                return ReactFontManager.TypefaceStyle.NORMAL;
            }
            if (i10 < 550) {
                return ReactFontManager.TypefaceStyle.BOLD;
            }
            if (i10 < 900) {
                return 900;
            }
            return i10;
        }

        static int b(b1 b1Var, y yVar) {
            if (b1Var == b1.Bolder) {
                return a(yVar.f17732f);
            }
            if (b1Var == b1.Lighter) {
                return c(yVar.f17732f);
            }
            return f17743b[b1Var.ordinal()];
        }

        private static int c(int i10) {
            if (i10 < 100) {
                return i10;
            }
            if (i10 < 550) {
                return 100;
            }
            return i10 < 750 ? ReactFontManager.TypefaceStyle.NORMAL : ReactFontManager.TypefaceStyle.BOLD;
        }

        static b1 d(int i10) {
            return f17742a[Math.round(i10 / 100.0f)];
        }
    }

    private y() {
        this.f17730d = null;
        this.f17728b = "";
        this.f17729c = z0.normal;
        this.f17731e = b1.Normal;
        this.f17732f = ReactFontManager.TypefaceStyle.NORMAL;
        this.f17733g = "";
        this.f17734h = "";
        this.f17735i = a1.normal;
        this.f17736j = c1.start;
        this.f17737k = d1.None;
        this.f17741o = false;
        this.f17738l = 0.0d;
        this.f17727a = 12.0d;
        this.f17739m = 0.0d;
        this.f17740n = 0.0d;
    }

    private void a(y yVar, double d10) {
        long round = Math.round(d10);
        if (round >= 1 && round <= 1000) {
            int i10 = (int) round;
            this.f17732f = i10;
            this.f17731e = a.d(i10);
            return;
        }
        b(yVar);
    }

    private void b(y yVar) {
        this.f17732f = yVar.f17732f;
        this.f17731e = yVar.f17731e;
    }

    private double c(ReadableMap readableMap, String str, double d10, double d11, double d12) {
        if (readableMap.getType(str) == ReadableType.Number) {
            return readableMap.getDouble(str);
        }
        return n0.b(readableMap.getString(str), d12, d10, d11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(ReadableMap readableMap, y yVar, double d10) {
        String str;
        String str2;
        a1 a1Var;
        c1 c1Var;
        d1 d1Var;
        double d11;
        double d12;
        double d13 = yVar.f17727a;
        if (readableMap.hasKey(ViewProps.FONT_SIZE)) {
            this.f17727a = c(readableMap, ViewProps.FONT_SIZE, 1.0d, d13, d13);
        } else {
            this.f17727a = d13;
        }
        if (readableMap.hasKey(ViewProps.FONT_WEIGHT)) {
            if (readableMap.getType(ViewProps.FONT_WEIGHT) == ReadableType.Number) {
                a(yVar, readableMap.getDouble(ViewProps.FONT_WEIGHT));
            } else {
                String string = readableMap.getString(ViewProps.FONT_WEIGHT);
                if (b1.e(string)) {
                    int b10 = a.b(b1.d(string), yVar);
                    this.f17732f = b10;
                    this.f17731e = a.d(b10);
                } else if (string != null) {
                    a(yVar, Double.parseDouble(string));
                } else {
                    b(yVar);
                }
            }
        } else {
            b(yVar);
        }
        this.f17730d = readableMap.hasKey("fontData") ? readableMap.getMap("fontData") : yVar.f17730d;
        this.f17728b = readableMap.hasKey(ViewProps.FONT_FAMILY) ? readableMap.getString(ViewProps.FONT_FAMILY) : yVar.f17728b;
        this.f17729c = readableMap.hasKey(ViewProps.FONT_STYLE) ? z0.valueOf(readableMap.getString(ViewProps.FONT_STYLE)) : yVar.f17729c;
        if (readableMap.hasKey("fontFeatureSettings")) {
            str = readableMap.getString("fontFeatureSettings");
        } else {
            str = yVar.f17733g;
        }
        this.f17733g = str;
        if (readableMap.hasKey("fontVariationSettings")) {
            str2 = readableMap.getString("fontVariationSettings");
        } else {
            str2 = yVar.f17734h;
        }
        this.f17734h = str2;
        if (readableMap.hasKey("fontVariantLigatures")) {
            a1Var = a1.valueOf(readableMap.getString("fontVariantLigatures"));
        } else {
            a1Var = yVar.f17735i;
        }
        this.f17735i = a1Var;
        if (readableMap.hasKey("textAnchor")) {
            c1Var = c1.valueOf(readableMap.getString("textAnchor"));
        } else {
            c1Var = yVar.f17736j;
        }
        this.f17736j = c1Var;
        if (readableMap.hasKey("textDecoration")) {
            d1Var = d1.d(readableMap.getString("textDecoration"));
        } else {
            d1Var = yVar.f17737k;
        }
        this.f17737k = d1Var;
        boolean hasKey = readableMap.hasKey("kerning");
        this.f17741o = hasKey || yVar.f17741o;
        this.f17738l = hasKey ? c(readableMap, "kerning", d10, this.f17727a, 0.0d) : yVar.f17738l;
        if (readableMap.hasKey("wordSpacing")) {
            d11 = c(readableMap, "wordSpacing", d10, this.f17727a, 0.0d);
        } else {
            d11 = yVar.f17739m;
        }
        this.f17739m = d11;
        if (readableMap.hasKey(ViewProps.LETTER_SPACING)) {
            d12 = c(readableMap, ViewProps.LETTER_SPACING, d10, this.f17727a, 0.0d);
        } else {
            d12 = yVar.f17740n;
        }
        this.f17740n = d12;
    }
}
