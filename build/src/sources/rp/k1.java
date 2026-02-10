package rp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f47629a;

        static {
            int[] iArr = new int[d0.values().length];
            try {
                iArr[d0.f47574d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[d0.f47575e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[d0.f47576i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[d0.f47577o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            f47629a = iArr;
        }
    }

    public static final b0 a(d0 d0Var) {
        Intrinsics.checkNotNullParameter(d0Var, "<this>");
        int i10 = a.f47629a[d0Var.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        return b0.f47529o;
                    }
                    throw new as.p();
                }
                return b0.f47528i;
            }
            return b0.f47527e;
        }
        return b0.f47526d;
    }

    public static final String b(d0 d0Var) {
        Intrinsics.checkNotNullParameter(d0Var, "<this>");
        int i10 = a.f47629a[d0Var.ordinal()];
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
