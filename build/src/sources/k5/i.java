package k5;

import android.graphics.drawable.Drawable;
import android.widget.ImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final g5.c f31637a = new g5.c(null, null, null, null, null, null, null, false, false, null, null, null, null, null, null, 32767, null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f31638a;

        static {
            int[] iArr = new int[h5.e.values().length];
            try {
                iArr[h5.e.f25660d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[h5.e.f25661e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[h5.e.f25662i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f31638a = iArr;
        }
    }

    public static final boolean a(g5.h hVar) {
        int i10 = a.f31638a[hVar.H().ordinal()];
        if (i10 == 1) {
            return false;
        }
        if (i10 == 2) {
            return true;
        }
        if (i10 == 3) {
            if (hVar.q().m() == null && (hVar.K() instanceof h5.d)) {
                return true;
            }
            if (!(hVar.M() instanceof i5.d) || !(hVar.K() instanceof h5.l) || !(((i5.d) hVar.M()).getView() instanceof ImageView) || ((i5.d) hVar.M()).getView() != ((h5.l) hVar.K()).getView()) {
                return false;
            }
            return true;
        }
        throw new or.p();
    }

    public static final g5.c b() {
        return f31637a;
    }

    public static final Drawable c(g5.h hVar, Drawable drawable, Integer num, Drawable drawable2) {
        if (drawable == null) {
            if (num != null) {
                if (num.intValue() == 0) {
                    return null;
                }
                return d.a(hVar.l(), num.intValue());
            }
            return drawable2;
        }
        return drawable;
    }
}
