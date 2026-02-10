package q5;

import android.content.res.AssetManager;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.view.View;
import java.util.HashMap;
import java.util.Map;
import r5.c;
import r5.i;
import y5.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: d  reason: collision with root package name */
    private final AssetManager f45312d;

    /* renamed from: e  reason: collision with root package name */
    private l5.b f45313e;

    /* renamed from: a  reason: collision with root package name */
    private final i f45309a = new i();

    /* renamed from: b  reason: collision with root package name */
    private final Map f45310b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Map f45311c = new HashMap();

    /* renamed from: f  reason: collision with root package name */
    private String f45314f = ".ttf";

    public a(Drawable.Callback callback, l5.b bVar) {
        this.f45313e = bVar;
        if (!(callback instanceof View)) {
            d.c("LottieDrawable must be inside of a view for images to work.");
            this.f45312d = null;
            return;
        }
        this.f45312d = ((View) callback).getContext().getAssets();
    }

    private Typeface a(c cVar) {
        Typeface typeface;
        String a10 = cVar.a();
        Typeface typeface2 = (Typeface) this.f45311c.get(a10);
        if (typeface2 != null) {
            return typeface2;
        }
        String c10 = cVar.c();
        String b10 = cVar.b();
        l5.b bVar = this.f45313e;
        if (bVar != null) {
            typeface = bVar.b(a10, c10, b10);
            if (typeface == null) {
                typeface = this.f45313e.a(a10);
            }
        } else {
            typeface = null;
        }
        l5.b bVar2 = this.f45313e;
        if (bVar2 != null && typeface == null) {
            String d10 = bVar2.d(a10, c10, b10);
            if (d10 == null) {
                d10 = this.f45313e.c(a10);
            }
            if (d10 != null) {
                typeface = Typeface.createFromAsset(this.f45312d, d10);
            }
        }
        if (cVar.d() != null) {
            return cVar.d();
        }
        if (typeface == null) {
            typeface = Typeface.createFromAsset(this.f45312d, "fonts/" + a10 + this.f45314f);
        }
        this.f45311c.put(a10, typeface);
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
        this.f45309a.b(cVar.a(), cVar.c());
        Typeface typeface = (Typeface) this.f45310b.get(this.f45309a);
        if (typeface != null) {
            return typeface;
        }
        Typeface e10 = e(a(cVar), cVar.c());
        this.f45310b.put(this.f45309a, e10);
        return e10;
    }

    public void c(String str) {
        this.f45314f = str;
    }

    public void d(l5.b bVar) {
        this.f45313e = bVar;
    }
}
