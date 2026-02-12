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
    private final AssetManager f43981d;

    /* renamed from: e  reason: collision with root package name */
    private l5.b f43982e;

    /* renamed from: a  reason: collision with root package name */
    private final i f43978a = new i();

    /* renamed from: b  reason: collision with root package name */
    private final Map f43979b = new HashMap();

    /* renamed from: c  reason: collision with root package name */
    private final Map f43980c = new HashMap();

    /* renamed from: f  reason: collision with root package name */
    private String f43983f = ".ttf";

    public a(Drawable.Callback callback, l5.b bVar) {
        this.f43982e = bVar;
        if (!(callback instanceof View)) {
            d.c("LottieDrawable must be inside of a view for images to work.");
            this.f43981d = null;
            return;
        }
        this.f43981d = ((View) callback).getContext().getAssets();
    }

    private Typeface a(c cVar) {
        Typeface typeface;
        String a10 = cVar.a();
        Typeface typeface2 = (Typeface) this.f43980c.get(a10);
        if (typeface2 != null) {
            return typeface2;
        }
        String c10 = cVar.c();
        String b10 = cVar.b();
        l5.b bVar = this.f43982e;
        if (bVar != null) {
            typeface = bVar.b(a10, c10, b10);
            if (typeface == null) {
                typeface = this.f43982e.a(a10);
            }
        } else {
            typeface = null;
        }
        l5.b bVar2 = this.f43982e;
        if (bVar2 != null && typeface == null) {
            String d10 = bVar2.d(a10, c10, b10);
            if (d10 == null) {
                d10 = this.f43982e.c(a10);
            }
            if (d10 != null) {
                typeface = Typeface.createFromAsset(this.f43981d, d10);
            }
        }
        if (cVar.d() != null) {
            return cVar.d();
        }
        if (typeface == null) {
            typeface = Typeface.createFromAsset(this.f43981d, "fonts/" + a10 + this.f43983f);
        }
        this.f43980c.put(a10, typeface);
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
        this.f43978a.b(cVar.a(), cVar.c());
        Typeface typeface = (Typeface) this.f43979b.get(this.f43978a);
        if (typeface != null) {
            return typeface;
        }
        Typeface e10 = e(a(cVar), cVar.c());
        this.f43979b.put(this.f43978a, e10);
        return e10;
    }

    public void c(String str) {
        this.f43983f = str;
    }

    public void d(l5.b bVar) {
        this.f43982e = bVar;
    }
}
