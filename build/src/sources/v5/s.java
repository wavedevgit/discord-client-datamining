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
    private static final c.a f51861a = c.a.a("x", "y");

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51862a;

        static {
            int[] iArr = new int[c.b.values().length];
            f51862a = iArr;
            try {
                iArr[c.b.NUMBER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51862a[c.b.BEGIN_ARRAY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f51862a[c.b.BEGIN_OBJECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    private static PointF a(w5.c cVar, float f10) {
        cVar.v();
        float nextDouble = (float) cVar.nextDouble();
        float nextDouble2 = (float) cVar.nextDouble();
        while (cVar.m() != c.b.END_ARRAY) {
            cVar.P();
        }
        cVar.t();
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
        cVar.s();
        float f11 = 0.0f;
        float f12 = 0.0f;
        while (cVar.hasNext()) {
            int y10 = cVar.y(f51861a);
            if (y10 != 0) {
                if (y10 != 1) {
                    cVar.E();
                    cVar.P();
                } else {
                    f12 = g(cVar);
                }
            } else {
                f11 = g(cVar);
            }
        }
        cVar.z();
        return new PointF(f11 * f10, f12 * f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int d(w5.c cVar) {
        cVar.v();
        int nextDouble = (int) (cVar.nextDouble() * 255.0d);
        int nextDouble2 = (int) (cVar.nextDouble() * 255.0d);
        int nextDouble3 = (int) (cVar.nextDouble() * 255.0d);
        while (cVar.hasNext()) {
            cVar.P();
        }
        cVar.t();
        return Color.argb((int) SetSpanOperation.SPAN_MAX_PRIORITY, nextDouble, nextDouble2, nextDouble3);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static PointF e(w5.c cVar, float f10) {
        int i10 = a.f51862a[cVar.m().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    return c(cVar, f10);
                }
                throw new IllegalArgumentException("Unknown point starts with " + cVar.m());
            }
            return a(cVar, f10);
        }
        return b(cVar, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List f(w5.c cVar, float f10) {
        ArrayList arrayList = new ArrayList();
        cVar.v();
        while (cVar.m() == c.b.BEGIN_ARRAY) {
            cVar.v();
            arrayList.add(e(cVar, f10));
            cVar.t();
        }
        cVar.t();
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float g(w5.c cVar) {
        c.b m10 = cVar.m();
        int i10 = a.f51862a[m10.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                cVar.v();
                float nextDouble = (float) cVar.nextDouble();
                while (cVar.hasNext()) {
                    cVar.P();
                }
                cVar.t();
                return nextDouble;
            }
            throw new IllegalArgumentException("Unknown value for token of type " + m10);
        }
        return (float) cVar.nextDouble();
    }
}
