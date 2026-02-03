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
    static final y f16694p = new y();

    /* renamed from: a  reason: collision with root package name */
    final double f16695a;

    /* renamed from: b  reason: collision with root package name */
    final String f16696b;

    /* renamed from: c  reason: collision with root package name */
    final z0 f16697c;

    /* renamed from: d  reason: collision with root package name */
    final ReadableMap f16698d;

    /* renamed from: e  reason: collision with root package name */
    b1 f16699e;

    /* renamed from: f  reason: collision with root package name */
    int f16700f;

    /* renamed from: g  reason: collision with root package name */
    final String f16701g;

    /* renamed from: h  reason: collision with root package name */
    final String f16702h;

    /* renamed from: i  reason: collision with root package name */
    final a1 f16703i;

    /* renamed from: j  reason: collision with root package name */
    final c1 f16704j;

    /* renamed from: k  reason: collision with root package name */
    private final d1 f16705k;

    /* renamed from: l  reason: collision with root package name */
    final double f16706l;

    /* renamed from: m  reason: collision with root package name */
    final double f16707m;

    /* renamed from: n  reason: collision with root package name */
    final double f16708n;

    /* renamed from: o  reason: collision with root package name */
    final boolean f16709o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private static final b1[] f16710a;

        /* renamed from: b  reason: collision with root package name */
        private static final int[] f16711b;

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
            f16710a = new b1[]{b1Var, b1Var, b1Var2, b1Var3, b1Var4, b1Var5, b1Var6, b1Var7, b1Var8, b1Var9, b1Var9};
            f16711b = new int[]{ReactFontManager.TypefaceStyle.NORMAL, ReactFontManager.TypefaceStyle.BOLD, 100, androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS, ReactFontManager.TypefaceStyle.NORMAL, 500, 600, ReactFontManager.TypefaceStyle.BOLD, 800, 900};
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
                return a(yVar.f16700f);
            }
            if (b1Var == b1.Lighter) {
                return c(yVar.f16700f);
            }
            return f16711b[b1Var.ordinal()];
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
            return f16710a[Math.round(i10 / 100.0f)];
        }
    }

    private y() {
        this.f16698d = null;
        this.f16696b = "";
        this.f16697c = z0.normal;
        this.f16699e = b1.Normal;
        this.f16700f = ReactFontManager.TypefaceStyle.NORMAL;
        this.f16701g = "";
        this.f16702h = "";
        this.f16703i = a1.normal;
        this.f16704j = c1.start;
        this.f16705k = d1.None;
        this.f16709o = false;
        this.f16706l = 0.0d;
        this.f16695a = 12.0d;
        this.f16707m = 0.0d;
        this.f16708n = 0.0d;
    }

    private void a(y yVar, double d10) {
        long round = Math.round(d10);
        if (round >= 1 && round <= 1000) {
            int i10 = (int) round;
            this.f16700f = i10;
            this.f16699e = a.d(i10);
            return;
        }
        b(yVar);
    }

    private void b(y yVar) {
        this.f16700f = yVar.f16700f;
        this.f16699e = yVar.f16699e;
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
        double d13 = yVar.f16695a;
        if (readableMap.hasKey(ViewProps.FONT_SIZE)) {
            this.f16695a = c(readableMap, ViewProps.FONT_SIZE, 1.0d, d13, d13);
        } else {
            this.f16695a = d13;
        }
        if (readableMap.hasKey(ViewProps.FONT_WEIGHT)) {
            if (readableMap.getType(ViewProps.FONT_WEIGHT) == ReadableType.Number) {
                a(yVar, readableMap.getDouble(ViewProps.FONT_WEIGHT));
            } else {
                String string = readableMap.getString(ViewProps.FONT_WEIGHT);
                if (b1.e(string)) {
                    int b10 = a.b(b1.d(string), yVar);
                    this.f16700f = b10;
                    this.f16699e = a.d(b10);
                } else if (string != null) {
                    a(yVar, Double.parseDouble(string));
                } else {
                    b(yVar);
                }
            }
        } else {
            b(yVar);
        }
        this.f16698d = readableMap.hasKey("fontData") ? readableMap.getMap("fontData") : yVar.f16698d;
        this.f16696b = readableMap.hasKey(ViewProps.FONT_FAMILY) ? readableMap.getString(ViewProps.FONT_FAMILY) : yVar.f16696b;
        this.f16697c = readableMap.hasKey(ViewProps.FONT_STYLE) ? z0.valueOf(readableMap.getString(ViewProps.FONT_STYLE)) : yVar.f16697c;
        if (readableMap.hasKey("fontFeatureSettings")) {
            str = readableMap.getString("fontFeatureSettings");
        } else {
            str = yVar.f16701g;
        }
        this.f16701g = str;
        if (readableMap.hasKey("fontVariationSettings")) {
            str2 = readableMap.getString("fontVariationSettings");
        } else {
            str2 = yVar.f16702h;
        }
        this.f16702h = str2;
        if (readableMap.hasKey("fontVariantLigatures")) {
            a1Var = a1.valueOf(readableMap.getString("fontVariantLigatures"));
        } else {
            a1Var = yVar.f16703i;
        }
        this.f16703i = a1Var;
        if (readableMap.hasKey("textAnchor")) {
            c1Var = c1.valueOf(readableMap.getString("textAnchor"));
        } else {
            c1Var = yVar.f16704j;
        }
        this.f16704j = c1Var;
        if (readableMap.hasKey("textDecoration")) {
            d1Var = d1.d(readableMap.getString("textDecoration"));
        } else {
            d1Var = yVar.f16705k;
        }
        this.f16705k = d1Var;
        boolean hasKey = readableMap.hasKey("kerning");
        this.f16709o = hasKey || yVar.f16709o;
        this.f16706l = hasKey ? c(readableMap, "kerning", d10, this.f16695a, 0.0d) : yVar.f16706l;
        if (readableMap.hasKey("wordSpacing")) {
            d11 = c(readableMap, "wordSpacing", d10, this.f16695a, 0.0d);
        } else {
            d11 = yVar.f16707m;
        }
        this.f16707m = d11;
        if (readableMap.hasKey(ViewProps.LETTER_SPACING)) {
            d12 = c(readableMap, ViewProps.LETTER_SPACING, d10, this.f16695a, 0.0d);
        } else {
            d12 = yVar.f16708n;
        }
        this.f16708n = d12;
    }
}
