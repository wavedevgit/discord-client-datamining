package r1;

import android.content.ContentResolver;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Typeface;
import android.graphics.fonts.Font;
import android.graphics.fonts.FontFamily;
import android.graphics.fonts.FontStyle;
import android.os.CancellationSignal;
import android.os.ParcelFileDescriptor;
import android.text.TextUtils;
import android.util.Log;
import com.facebook.react.views.text.ReactFontManager;
import java.io.IOException;
import java.util.List;
import q1.g;
import z1.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p extends r {
    private Font i(FontFamily fontFamily, int i10) {
        int i11;
        int i12;
        if ((i10 & 1) != 0) {
            i11 = ReactFontManager.TypefaceStyle.BOLD;
        } else {
            i11 = ReactFontManager.TypefaceStyle.NORMAL;
        }
        if ((i10 & 2) != 0) {
            i12 = 1;
        } else {
            i12 = 0;
        }
        FontStyle fontStyle = new FontStyle(i11, i12);
        Font font = fontFamily.getFont(0);
        int n10 = n(fontStyle, font.getStyle());
        for (int i13 = 1; i13 < fontFamily.getSize(); i13++) {
            Font font2 = fontFamily.getFont(i13);
            int n11 = n(fontStyle, font2.getStyle());
            if (n11 < n10) {
                font = font2;
                n10 = n11;
            }
        }
        return font;
    }

    private Font j(CancellationSignal cancellationSignal, g.b bVar, ContentResolver contentResolver) {
        if (bVar.i()) {
            return m(bVar);
        }
        return l(cancellationSignal, bVar, contentResolver);
    }

    private Font l(CancellationSignal cancellationSignal, g.b bVar, ContentResolver contentResolver) {
        try {
            ParcelFileDescriptor openFileDescriptor = contentResolver.openFileDescriptor(bVar.e(), "r", cancellationSignal);
            if (openFileDescriptor == null) {
                if (openFileDescriptor == null) {
                    return null;
                }
                openFileDescriptor.close();
                return null;
            }
            Font.Builder ttcIndex = new Font.Builder(openFileDescriptor).setWeight(bVar.g()).setSlant(bVar.h() ? 1 : 0).setTtcIndex(bVar.d());
            if (!TextUtils.isEmpty(bVar.f())) {
                ttcIndex.setFontVariationSettings(bVar.f());
            }
            Font build = ttcIndex.build();
            openFileDescriptor.close();
            return build;
        } catch (IOException e10) {
            Log.w("TypefaceCompatApi29Impl", "Font load failed", e10);
            return null;
        }
    }

    private static int n(FontStyle fontStyle, FontStyle fontStyle2) {
        int i10;
        int abs = Math.abs(fontStyle.getWeight() - fontStyle2.getWeight()) / 100;
        if (fontStyle.getSlant() == fontStyle2.getSlant()) {
            i10 = 0;
        } else {
            i10 = 2;
        }
        return abs + i10;
    }

    @Override // r1.r
    public Typeface a(Context context, g.c cVar, Resources resources, int i10) {
        g.d[] a10;
        try {
            FontFamily.Builder builder = null;
            for (g.d dVar : cVar.a()) {
                try {
                    Font build = new Font.Builder(resources, dVar.b()).setWeight(dVar.e()).setSlant(dVar.f() ? 1 : 0).setTtcIndex(dVar.c()).setFontVariationSettings(dVar.d()).build();
                    if (builder == null) {
                        builder = new FontFamily.Builder(build);
                    } else {
                        builder.addFont(build);
                    }
                } catch (IOException unused) {
                }
            }
            if (builder == null) {
                return null;
            }
            FontFamily build2 = builder.build();
            return new Typeface.CustomFallbackBuilder(build2).setStyle(i(build2, i10).getStyle()).build();
        } catch (Exception e10) {
            Log.w("TypefaceCompatApi29Impl", "Font load failed", e10);
            return null;
        }
    }

    @Override // r1.r
    public Typeface b(Context context, CancellationSignal cancellationSignal, g.b[] bVarArr, int i10) {
        try {
            FontFamily k10 = k(cancellationSignal, bVarArr, context.getContentResolver());
            if (k10 == null) {
                return null;
            }
            return new Typeface.CustomFallbackBuilder(k10).setStyle(i(k10, i10).getStyle()).build();
        } catch (Exception e10) {
            Log.w("TypefaceCompatApi29Impl", "Font load failed", e10);
            return null;
        }
    }

    @Override // r1.r
    public Typeface c(Context context, CancellationSignal cancellationSignal, List list, int i10) {
        ContentResolver contentResolver = context.getContentResolver();
        try {
            FontFamily k10 = k(cancellationSignal, (g.b[]) list.get(0), contentResolver);
            if (k10 == null) {
                return null;
            }
            Typeface.CustomFallbackBuilder customFallbackBuilder = new Typeface.CustomFallbackBuilder(k10);
            for (int i11 = 1; i11 < list.size(); i11++) {
                FontFamily k11 = k(cancellationSignal, (g.b[]) list.get(i11), contentResolver);
                if (k11 != null) {
                    customFallbackBuilder.addCustomFallback(k11);
                }
            }
            return customFallbackBuilder.setStyle(i(k10, i10).getStyle()).build();
        } catch (Exception e10) {
            Log.w("TypefaceCompatApi29Impl", "Font load failed", e10);
            return null;
        }
    }

    @Override // r1.r
    public Typeface e(Context context, Resources resources, int i10, String str, int i11) {
        try {
            Font build = new Font.Builder(resources, i10).build();
            return new Typeface.CustomFallbackBuilder(new FontFamily.Builder(build).build()).setStyle(build.getStyle()).build();
        } catch (Exception e10) {
            Log.w("TypefaceCompatApi29Impl", "Font load failed", e10);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // r1.r
    public g.b h(g.b[] bVarArr, int i10) {
        throw new RuntimeException("Do not use this function in API 29 or later.");
    }

    protected FontFamily k(CancellationSignal cancellationSignal, g.b[] bVarArr, ContentResolver contentResolver) {
        FontFamily.Builder builder = null;
        for (g.b bVar : bVarArr) {
            Font j10 = j(cancellationSignal, bVar, contentResolver);
            if (j10 != null) {
                if (builder == null) {
                    builder = new FontFamily.Builder(j10);
                } else {
                    builder.addFont(j10);
                }
            }
        }
        if (builder == null) {
            return null;
        }
        return builder.build();
    }

    protected Font m(g.b bVar) {
        throw new UnsupportedOperationException("Getting font from Typeface is not supported before API31");
    }
}
