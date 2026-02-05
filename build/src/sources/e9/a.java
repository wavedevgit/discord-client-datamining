package e9;

import android.content.res.Resources;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import com.facebook.drawee.drawable.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements ra.a {

    /* renamed from: a  reason: collision with root package name */
    private final Resources f21442a;

    /* renamed from: b  reason: collision with root package name */
    private final ra.a f21443b;

    /* renamed from: c  reason: collision with root package name */
    private final ra.a f21444c;

    public a(Resources resources, ra.a aVar, ra.a aVar2) {
        this.f21442a = resources;
        this.f21443b = aVar;
        this.f21444c = aVar2;
    }

    private static boolean c(sa.f fVar) {
        if (fVar.b1() != 1 && fVar.b1() != 0) {
            return true;
        }
        return false;
    }

    private static boolean d(sa.f fVar) {
        if (fVar.q1() != 0 && fVar.q1() != -1) {
            return true;
        }
        return false;
    }

    @Override // ra.a
    public Drawable a(sa.e eVar) {
        try {
            if (ya.b.d()) {
                ya.b.a("DefaultDrawableFactory#createDrawable");
            }
            if (eVar instanceof sa.f) {
                sa.f fVar = (sa.f) eVar;
                BitmapDrawable bitmapDrawable = new BitmapDrawable(this.f21442a, fVar.N1());
                if (!d(fVar) && !c(fVar)) {
                    if (ya.b.d()) {
                        ya.b.b();
                    }
                    return bitmapDrawable;
                }
                g gVar = new g(bitmapDrawable, fVar.q1(), fVar.b1());
                if (ya.b.d()) {
                    ya.b.b();
                }
                return gVar;
            }
            ra.a aVar = this.f21443b;
            if (aVar != null && aVar.b(eVar)) {
                Drawable a10 = this.f21443b.a(eVar);
                if (ya.b.d()) {
                    ya.b.b();
                }
                return a10;
            }
            ra.a aVar2 = this.f21444c;
            if (aVar2 != null && aVar2.b(eVar)) {
                Drawable a11 = this.f21444c.a(eVar);
                if (ya.b.d()) {
                    ya.b.b();
                }
                return a11;
            }
            if (ya.b.d()) {
                ya.b.b();
            }
            return null;
        } catch (Throwable th2) {
            if (ya.b.d()) {
                ya.b.b();
            }
            throw th2;
        }
    }

    @Override // ra.a
    public boolean b(sa.e eVar) {
        return true;
    }
}
