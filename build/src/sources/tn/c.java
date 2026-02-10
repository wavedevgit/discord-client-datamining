package tn;

import androidx.fragment.app.FragmentTransaction;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.q;
import kotlin.jvm.internal.Intrinsics;
import rr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f50888a;

        static {
            int[] iArr = new int[Screen.StackAnimation.values().length];
            try {
                iArr[Screen.StackAnimation.f18292d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.StackAnimation.f18293e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.StackAnimation.f18294i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.StackAnimation.f18296p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.StackAnimation.f18297q.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.StackAnimation.f18295o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.StackAnimation.f18298r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.StackAnimation.f18299s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.StackAnimation.f18300t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            f50888a = iArr;
        }
    }

    public static final void a(FragmentTransaction fragmentTransaction, Screen.StackAnimation stackAnimation, boolean z10) {
        Intrinsics.checkNotNullParameter(fragmentTransaction, "<this>");
        Intrinsics.checkNotNullParameter(stackAnimation, "stackAnimation");
        if (z10) {
            switch (a.f50888a[stackAnimation.ordinal()]) {
                case 1:
                    fragmentTransaction.r(q.f18439a, q.f18440b);
                    return;
                case 2:
                    int i10 = q.f18455q;
                    fragmentTransaction.r(i10, i10);
                    return;
                case 3:
                    fragmentTransaction.r(q.f18444f, q.f18445g);
                    return;
                case 4:
                    fragmentTransaction.r(q.f18461w, q.f18463y);
                    return;
                case 5:
                    fragmentTransaction.r(q.f18460v, q.f18464z);
                    return;
                case 6:
                    fragmentTransaction.r(q.f18459u, q.f18458t);
                    return;
                case 7:
                    fragmentTransaction.r(q.f18443e, q.f18457s);
                    return;
                case 8:
                    fragmentTransaction.r(q.f18454p, q.f18452n);
                    return;
                case 9:
                    fragmentTransaction.r(q.f18450l, q.f18448j);
                    return;
                default:
                    throw new p();
            }
        }
        switch (a.f50888a[stackAnimation.ordinal()]) {
            case 1:
                fragmentTransaction.r(q.f18441c, q.f18442d);
                return;
            case 2:
                int i11 = q.f18455q;
                fragmentTransaction.r(i11, i11);
                return;
            case 3:
                fragmentTransaction.r(q.f18444f, q.f18445g);
                return;
            case 4:
                fragmentTransaction.r(q.f18460v, q.f18464z);
                return;
            case 5:
                fragmentTransaction.r(q.f18461w, q.f18463y);
                return;
            case 6:
                fragmentTransaction.r(q.f18458t, q.f18462x);
                return;
            case 7:
                fragmentTransaction.r(q.f18456r, q.f18446h);
                return;
            case 8:
                fragmentTransaction.r(q.f18451m, q.f18453o);
                return;
            case 9:
                fragmentTransaction.r(q.f18447i, q.f18449k);
                return;
            default:
                throw new p();
        }
    }
}
