package v5;

import android.graphics.Color;
import android.graphics.PointF;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class s {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f50847a = c.a.a("x", "y");

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50848a;

        static {
            int[] iArr = new int[c.b.values().length];
            f50848a = iArr;
            try {
                iArr[c.b.NUMBER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50848a[c.b.BEGIN_ARRAY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50848a[c.b.BEGIN_OBJECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    private static PointF a(w5.c cVar, float f10) {
        cVar.u();
        float nextDouble = (float) cVar.nextDouble();
        float nextDouble2 = (float) cVar.nextDouble();
        while (cVar.n() != c.b.END_ARRAY) {
            cVar.P();
        }
        cVar.s();
        return new PointF(nextDouble * f10, nextDouble2 * f10);
    }

    private static PointF b(w5.c cVar, float f10) {
        float nextDouble = (float) cVar.nextDouble();
        float nextDouble2 = (float) cVar.nextDouble();
        while (cVar.hasNext()) {
            cVar.P();
        }
        return new PointF(nextDouble * f10, nextDouble2 * f10);
    }

    private static PointF c(w5.c cVar, float f10) {
        cVar.r();
        float f11 = 0.0f;
        float f12 = 0.0f;
        while (cVar.hasNext()) {
            int B = cVar.B(f50847a);
            if (B != 0) {
                if (B != 1) {
                    cVar.E();
                    cVar.P();
                } else {
                    f12 = g(cVar);
                }
            } else {
                f11 = g(cVar);
            }
        }
        cVar.y();
        return new PointF(f11 * f10, f12 * f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int d(w5.c cVar) {
        cVar.u();
        int nextDouble = (int) (cVar.nextDouble() * 255.0d);
        int nextDouble2 = (int) (cVar.nextDouble() * 255.0d);
        int nextDouble3 = (int) (cVar.nextDouble() * 255.0d);
        while (cVar.hasNext()) {
            cVar.P();
        }
        cVar.s();
        return Color.argb((int) SetSpanOperation.SPAN_MAX_PRIORITY, nextDouble, nextDouble2, nextDouble3);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static PointF e(w5.c cVar, float f10) {
        int i10 = a.f50848a[cVar.n().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return c(cVar, f10);
                }
                throw new IllegalArgumentException("Unknown point starts with " + cVar.n());
            }
            return a(cVar, f10);
        }
        return b(cVar, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List f(w5.c cVar, float f10) {
        ArrayList arrayList = new ArrayList();
        cVar.u();
        while (cVar.n() == c.b.BEGIN_ARRAY) {
            cVar.u();
            arrayList.add(e(cVar, f10));
            cVar.s();
        }
        cVar.s();
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float g(w5.c cVar) {
        c.b n10 = cVar.n();
        int i10 = a.f50848a[n10.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                cVar.u();
                float nextDouble = (float) cVar.nextDouble();
                while (cVar.hasNext()) {
                    cVar.P();
                }
                cVar.s();
                return nextDouble;
            }
            throw new IllegalArgumentException("Unknown value for token of type " + n10);
        }
        return (float) cVar.nextDouble();
    }
}
