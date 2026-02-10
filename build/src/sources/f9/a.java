package f9;

import android.content.res.Resources;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import com.facebook.drawee.drawable.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements sa.a {

    /* renamed from: a  reason: collision with root package name */
    private final Resources f22483a;

    /* renamed from: b  reason: collision with root package name */
    private final sa.a f22484b;

    /* renamed from: c  reason: collision with root package name */
    private final sa.a f22485c;

    public a(Resources resources, sa.a aVar, sa.a aVar2) {
        this.f22483a = resources;
        this.f22484b = aVar;
        this.f22485c = aVar2;
    }

    private static boolean c(ta.f fVar) {
        if (fVar.X0() != 1 && fVar.X0() != 0) {
            return true;
        }
        return false;
    }

    private static boolean d(ta.f fVar) {
        if (fVar.l1() != 0 && fVar.l1() != -1) {
            return true;
        }
        return false;
    }

    @Override // sa.a
    public boolean a(ta.e eVar) {
        return true;
    }

    @Override // sa.a
    public Drawable b(ta.e eVar) {
        try {
            if (za.b.d()) {
                za.b.a("DefaultDrawableFactory#createDrawable");
            }
            if (eVar instanceof ta.f) {
                ta.f fVar = (ta.f) eVar;
                BitmapDrawable bitmapDrawable = new BitmapDrawable(this.f22483a, fVar.L1());
                if (!d(fVar) && !c(fVar)) {
                    if (za.b.d()) {
                        za.b.b();
                    }
                    return bitmapDrawable;
                }
                g gVar = new g(bitmapDrawable, fVar.l1(), fVar.X0());
                if (za.b.d()) {
                    za.b.b();
                }
                return gVar;
            }
            sa.a aVar = this.f22484b;
            if (aVar != null && aVar.a(eVar)) {
                Drawable b10 = this.f22484b.b(eVar);
                if (za.b.d()) {
                    za.b.b();
                }
                return b10;
            }
            sa.a aVar2 = this.f22485c;
            if (aVar2 != null && aVar2.a(eVar)) {
                Drawable b11 = this.f22485c.b(eVar);
                if (za.b.d()) {
                    za.b.b();
                }
                return b11;
            }
            if (za.b.d()) {
                za.b.b();
            }
            return null;
        } catch (Throwable th2) {
            if (za.b.d()) {
                za.b.b();
            }
            throw th2;
        }
    }
}
