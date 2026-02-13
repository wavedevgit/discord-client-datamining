package rp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f48198a;

        static {
            int[] iArr = new int[d0.values().length];
            try {
                iArr[d0.f48143d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.f48144e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.f48145i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d0.f48146o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f48198a = iArr;
        }
    }

    public static final b0 a(d0 d0Var) {
        Intrinsics.checkNotNullParameter(d0Var, "<this>");
        int i10 = a.f48198a[d0Var.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return b0.f48098o;
                    }
                    throw new as.p();
                }
                return b0.f48097i;
            }
            return b0.f48096e;
        }
        return b0.f48095d;
    }

    public static final String b(d0 d0Var) {
        Intrinsics.checkNotNullParameter(d0Var, "<this>");
        int i10 = a.f48198a[d0Var.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return "android.permission.ACCESS_FINE_LOCATION";
                    }
                    throw new as.p();
                }
                return "android.permission.ACCESS_COARSE_LOCATION";
            }
            return "android.permission.RECORD_AUDIO";
        }
        return "android.permission.CAMERA";
    }
}
