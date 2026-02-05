package com.facebook.drawee.generic;

import android.content.res.Resources;
import android.graphics.PointF;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.NinePatchDrawable;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.drawable.c;
import com.facebook.drawee.drawable.f;
import com.facebook.drawee.drawable.h;
import com.facebook.drawee.drawable.i;
import com.facebook.drawee.drawable.j;
import com.facebook.drawee.drawable.k;
import com.facebook.drawee.drawable.m;
import com.facebook.drawee.drawable.n;
import com.facebook.drawee.generic.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final Drawable f10160a = new ColorDrawable(0);

    private static Drawable a(Drawable drawable, a aVar, Resources resources) {
        if (drawable instanceof BitmapDrawable) {
            BitmapDrawable bitmapDrawable = (BitmapDrawable) drawable;
            i iVar = new i(resources, bitmapDrawable.getBitmap(), bitmapDrawable.getPaint(), aVar.k());
            b(iVar, aVar);
            return iVar;
        } else if (drawable instanceof NinePatchDrawable) {
            m mVar = new m((NinePatchDrawable) drawable);
            b(mVar, aVar);
            return mVar;
        } else if (drawable instanceof ColorDrawable) {
            j g10 = j.g((ColorDrawable) drawable);
            b(g10, aVar);
            return g10;
        } else {
            p8.a.L("WrappingUtils", "Don't know how to round that drawable: %s", drawable);
            return drawable;
        }
    }

    static void b(h hVar, a aVar) {
        hVar.a(aVar.l());
        hVar.h(aVar.f());
        hVar.setBorder(aVar.d(), aVar.e());
        hVar.b(aVar.i());
        hVar.f(aVar.n());
        hVar.e(aVar.j());
        hVar.d(aVar.k());
    }

    static c c(c cVar) {
        while (true) {
            Drawable drawable = cVar.getDrawable();
            if (drawable == cVar || !(drawable instanceof c)) {
                break;
            }
            cVar = (c) drawable;
        }
        return cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Drawable d(Drawable drawable, a aVar, Resources resources) {
        try {
            if (ya.b.d()) {
                ya.b.a("WrappingUtils#maybeApplyLeafRounding");
            }
            if (drawable != null && aVar != null && aVar.m() == a.EnumC0153a.BITMAP_ONLY) {
                if (drawable instanceof f) {
                    c c10 = c((f) drawable);
                    c10.setDrawable(a(c10.setDrawable(f10160a), aVar, resources));
                    return drawable;
                }
                Drawable a10 = a(drawable, aVar, resources);
                if (ya.b.d()) {
                    ya.b.b();
                }
                return a10;
            }
            if (ya.b.d()) {
                ya.b.b();
            }
            return drawable;
        } finally {
            if (ya.b.d()) {
                ya.b.b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Drawable e(Drawable drawable, a aVar) {
        try {
            if (ya.b.d()) {
                ya.b.a("WrappingUtils#maybeWrapWithRoundedOverlayColor");
            }
            if (drawable != null && aVar != null && aVar.m() == a.EnumC0153a.OVERLAY_COLOR) {
                k kVar = new k(drawable);
                b(kVar, aVar);
                kVar.j(aVar.h());
                return kVar;
            }
            if (ya.b.d()) {
                ya.b.b();
            }
            return drawable;
        } finally {
            if (ya.b.d()) {
                ya.b.b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Drawable f(Drawable drawable, ScalingUtils$ScaleType scalingUtils$ScaleType) {
        return g(drawable, scalingUtils$ScaleType, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Drawable g(Drawable drawable, ScalingUtils$ScaleType scalingUtils$ScaleType, PointF pointF) {
        if (ya.b.d()) {
            ya.b.a("WrappingUtils#maybeWrapWithScaleType");
        }
        if (drawable != null && scalingUtils$ScaleType != null) {
            n nVar = new n(drawable, scalingUtils$ScaleType);
            if (pointF != null) {
                nVar.m(pointF);
            }
            if (ya.b.d()) {
                ya.b.b();
            }
            return nVar;
        }
        if (ya.b.d()) {
            ya.b.b();
        }
        return drawable;
    }

    static void h(h hVar) {
        hVar.a(false);
        hVar.c(0.0f);
        hVar.setBorder(0, 0.0f);
        hVar.b(0.0f);
        hVar.f(false);
        hVar.e(false);
        hVar.d(i.n());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void i(c cVar, a aVar, Resources resources) {
        c c10 = c(cVar);
        Drawable drawable = c10.getDrawable();
        if (aVar != null && aVar.m() == a.EnumC0153a.BITMAP_ONLY) {
            if (drawable instanceof h) {
                b((h) drawable, aVar);
            } else if (drawable != null) {
                c10.setDrawable(f10160a);
                c10.setDrawable(a(drawable, aVar, resources));
            }
        } else if (drawable instanceof h) {
            h((h) drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void j(c cVar, a aVar) {
        Drawable drawable = cVar.getDrawable();
        if (aVar != null && aVar.m() == a.EnumC0153a.OVERLAY_COLOR) {
            if (drawable instanceof k) {
                k kVar = (k) drawable;
                b(kVar, aVar);
                kVar.j(aVar.h());
                return;
            }
            cVar.setDrawable(e(cVar.setDrawable(f10160a), aVar));
        } else if (drawable instanceof k) {
            Drawable drawable2 = f10160a;
            cVar.setDrawable(((k) drawable).setCurrent(drawable2));
            drawable2.setCallback(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n k(c cVar, ScalingUtils$ScaleType scalingUtils$ScaleType) {
        Drawable f10 = f(cVar.setDrawable(f10160a), scalingUtils$ScaleType);
        cVar.setDrawable(f10);
        o8.j.h(f10, "Parent has no child drawable!");
        return (n) f10;
    }
}
