package r1;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.graphics.fonts.Font;
import android.graphics.fonts.FontFamily;
import android.graphics.text.PositionedGlyphs;
import android.graphics.text.TextRunShaper;
import android.os.Build;
import android.os.CancellationSignal;
import android.os.Handler;
import android.text.TextUtils;
import android.util.Log;
import androidx.collection.LruCache;
import java.io.IOException;
import java.util.List;
import q1.g;
import q1.j;
import z1.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private static final r f48016a;

    /* renamed from: b  reason: collision with root package name */
    private static final LruCache f48017b;

    /* renamed from: c  reason: collision with root package name */
    private static Paint f48018c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends g.c {

        /* renamed from: a  reason: collision with root package name */
        private j.f f48019a;

        public a(j.f fVar) {
            this.f48019a = fVar;
        }

        @Override // z1.g.c
        public void a(int i10) {
            j.f fVar = this.f48019a;
            if (fVar != null) {
                fVar.f(i10);
            }
        }

        @Override // z1.g.c
        public void b(Typeface typeface) {
            j.f fVar = this.f48019a;
            if (fVar != null) {
                fVar.g(typeface);
            }
        }
    }

    static {
        c4.a.c("TypefaceCompat static init");
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 31) {
            f48016a = new q();
        } else if (i10 >= 29) {
            f48016a = new p();
        } else if (i10 >= 28) {
            f48016a = new o();
        } else if (i10 >= 26) {
            f48016a = new n();
        } else if (m.k()) {
            f48016a = new m();
        } else {
            f48016a = new l();
        }
        f48017b = new LruCache(16);
        f48018c = null;
        c4.a.f();
    }

    public static Typeface a(Context context, Typeface typeface, int i10) {
        if (context != null) {
            return Typeface.create(typeface, i10);
        }
        throw new IllegalArgumentException("Context cannot be null");
    }

    public static Typeface b(Context context, CancellationSignal cancellationSignal, g.b[] bVarArr, int i10) {
        c4.a.c("TypefaceCompat.createFromFontInfo");
        try {
            return f48016a.b(context, cancellationSignal, bVarArr, i10);
        } finally {
            c4.a.f();
        }
    }

    public static Typeface c(Context context, CancellationSignal cancellationSignal, List list, int i10) {
        c4.a.c("TypefaceCompat.createFromFontInfoWithFallback");
        try {
            return f48016a.c(context, cancellationSignal, list, i10);
        } finally {
            c4.a.f();
        }
    }

    public static Typeface d(Context context, g.b bVar, Resources resources, int i10, String str, int i11, int i12, j.f fVar, Handler handler, boolean z10) {
        Typeface a10;
        boolean z11;
        int i13;
        if (bVar instanceof g.e) {
            g.e eVar = (g.e) bVar;
            Typeface i14 = i(eVar);
            if (i14 != null) {
                if (fVar != null) {
                    fVar.d(i14, handler);
                }
                f48017b.f(f(resources, i10, str, i11, i12), i14);
                return i14;
            }
            if (!z10 ? fVar == null : eVar.a() == 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z10) {
                i13 = eVar.d();
            } else {
                i13 = -1;
            }
            a10 = z1.g.c(context, eVar.b(), i12, z11, i13, j.f.e(handler), new a(fVar));
        } else {
            a10 = f48016a.a(context, (g.c) bVar, resources, i12);
            if (fVar != null) {
                if (a10 != null) {
                    fVar.d(a10, handler);
                } else {
                    fVar.c(-3, handler);
                }
            }
        }
        if (a10 != null) {
            f48017b.f(f(resources, i10, str, i11, i12), a10);
        }
        return a10;
    }

    public static Typeface e(Context context, Resources resources, int i10, String str, int i11, int i12) {
        Typeface e10 = f48016a.e(context, resources, i10, str, i12);
        if (e10 != null) {
            f48017b.f(f(resources, i10, str, i11, i12), e10);
        }
        return e10;
    }

    private static String f(Resources resources, int i10, String str, int i11, int i12) {
        return resources.getResourcePackageName(i10) + '-' + str + '-' + i11 + '-' + i10 + '-' + i12;
    }

    public static Typeface g(Resources resources, int i10, String str, int i11, int i12) {
        return (Typeface) f48017b.d(f(resources, i10, str, i11, i12));
    }

    public static Typeface h(String str) {
        if (str != null && !str.isEmpty()) {
            Typeface create = Typeface.create(str, 0);
            Typeface create2 = Typeface.create(Typeface.DEFAULT, 0);
            if (create != null && !create.equals(create2)) {
                return create;
            }
        }
        return null;
    }

    private static Typeface i(g.e eVar) {
        FontFamily build;
        Typeface h10;
        String c10 = eVar.c();
        if (!TextUtils.isEmpty(c10) && (h10 = h(c10)) != null) {
            return h10;
        }
        List b10 = eVar.b();
        int i10 = 0;
        if (b10.size() == 1) {
            return h(((z1.e) b10.get(0)).h());
        }
        if (Build.VERSION.SDK_INT < 31) {
            return null;
        }
        for (int i11 = 0; i11 < b10.size(); i11++) {
            if (h(((z1.e) b10.get(i11)).h()) == null) {
                return null;
            }
        }
        Typeface.CustomFallbackBuilder customFallbackBuilder = null;
        while (true) {
            if (i10 >= b10.size()) {
                break;
            }
            z1.e eVar2 = (z1.e) b10.get(i10);
            if (i10 == b10.size() - 1 && TextUtils.isEmpty(eVar2.i())) {
                customFallbackBuilder.setSystemFallback(eVar2.h());
                break;
            }
            Font j10 = j(h(eVar2.h()));
            if (j10 == null) {
                Log.w("TypefaceCompat", "Unable identify the primary font for " + eVar2.h() + ". Falling back to provider font.");
                return null;
            }
            if (TextUtils.isEmpty(eVar2.i())) {
                try {
                    i.a();
                    j.a();
                    build = g.a(f.a(j10).setFontVariationSettings(eVar2.i()).build()).build();
                } catch (IOException unused) {
                    Log.e("TypefaceCompat", "Failed to clone Font instance. Fall back to provider font.");
                    return null;
                }
            } else {
                build = g.a(j10).build();
            }
            if (customFallbackBuilder == null) {
                customFallbackBuilder = h.a(build);
            } else {
                customFallbackBuilder.addCustomFallback(build);
            }
            i10++;
        }
        return customFallbackBuilder.build();
    }

    public static Font j(Typeface typeface) {
        if (f48018c == null) {
            f48018c = new Paint();
        }
        f48018c.setTextSize(10.0f);
        f48018c.setTypeface(typeface);
        PositionedGlyphs shapeTextRun = TextRunShaper.shapeTextRun((CharSequence) " ", 0, 1, 0, 1, 0.0f, 0.0f, false, f48018c);
        if (shapeTextRun.glyphCount() == 0) {
            return null;
        }
        return shapeTextRun.getFont(0);
    }
}
