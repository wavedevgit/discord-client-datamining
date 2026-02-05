package p5;

import android.content.res.AssetManager;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.view.View;
import java.util.HashMap;
import java.util.Map;
import q5.c;
import q5.i;
import x5.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: d  reason: collision with root package name */
    private final AssetManager f44953d;

    /* renamed from: e  reason: collision with root package name */
    private l5.b f44954e;

    /* renamed from: a  reason: collision with root package name */
    private final i f44950a = new i();

    /* renamed from: b  reason: collision with root package name */
    private final Map f44951b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Map f44952c = new HashMap();

    /* renamed from: f  reason: collision with root package name */
    private String f44955f = ".ttf";

    public a(Drawable.Callback callback, l5.b bVar) {
        this.f44954e = bVar;
        if (!(callback instanceof View)) {
            d.c("LottieDrawable must be inside of a view for images to work.");
            this.f44953d = null;
            return;
        }
        this.f44953d = ((View) callback).getContext().getAssets();
    }

    private Typeface a(c cVar) {
        Typeface typeface;
        String a10 = cVar.a();
        Typeface typeface2 = (Typeface) this.f44952c.get(a10);
        if (typeface2 != null) {
            return typeface2;
        }
        String c10 = cVar.c();
        String b10 = cVar.b();
        l5.b bVar = this.f44954e;
        if (bVar != null) {
            typeface = bVar.b(a10, c10, b10);
            if (typeface == null) {
                typeface = this.f44954e.a(a10);
            }
        } else {
            typeface = null;
        }
        l5.b bVar2 = this.f44954e;
        if (bVar2 != null && typeface == null) {
            String d10 = bVar2.d(a10, c10, b10);
            if (d10 == null) {
                d10 = this.f44954e.c(a10);
            }
            if (d10 != null) {
                typeface = Typeface.createFromAsset(this.f44953d, d10);
            }
        }
        if (cVar.d() != null) {
            return cVar.d();
        }
        if (typeface == null) {
            typeface = Typeface.createFromAsset(this.f44953d, "fonts/" + a10 + this.f44955f);
        }
        this.f44952c.put(a10, typeface);
        return typeface;
    }

    private Typeface e(Typeface typeface, String str) {
        int i10;
        boolean contains = str.contains("Italic");
        boolean contains2 = str.contains("Bold");
        if (contains && contains2) {
            i10 = 3;
        } else if (contains) {
            i10 = 2;
        } else if (contains2) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (typeface.getStyle() == i10) {
            return typeface;
        }
        return Typeface.create(typeface, i10);
    }

    public Typeface b(c cVar) {
        this.f44950a.b(cVar.a(), cVar.c());
        Typeface typeface = (Typeface) this.f44951b.get(this.f44950a);
        if (typeface != null) {
            return typeface;
        }
        Typeface e10 = e(a(cVar), cVar.c());
        this.f44951b.put(this.f44950a, e10);
        return e10;
    }

    public void c(String str) {
        this.f44955f = str;
    }

    public void d(l5.b bVar) {
        this.f44954e = bVar;
    }
}
