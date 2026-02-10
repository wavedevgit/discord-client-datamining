package co;

import androidx.fragment.app.FragmentTransaction;
import as.p;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.r;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f8376a;

        static {
            int[] iArr = new int[Screen.StackAnimation.values().length];
            try {
                iArr[Screen.StackAnimation.f19041d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.StackAnimation.f19042e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.StackAnimation.f19043i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.StackAnimation.f19045p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.StackAnimation.f19046q.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.StackAnimation.f19044o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.StackAnimation.f19047r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.StackAnimation.f19048s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.StackAnimation.f19049t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            f8376a = iArr;
        }
    }

    public static final void a(FragmentTransaction fragmentTransaction, Screen.StackAnimation stackAnimation, boolean z10) {
        Intrinsics.checkNotNullParameter(fragmentTransaction, "<this>");
        Intrinsics.checkNotNullParameter(stackAnimation, "stackAnimation");
        if (z10) {
            switch (a.f8376a[stackAnimation.ordinal()]) {
                case 1:
                    fragmentTransaction.s(r.f19309a, r.f19310b);
                    return;
                case 2:
                    int i10 = r.f19325q;
                    fragmentTransaction.s(i10, i10);
                    return;
                case 3:
                    fragmentTransaction.s(r.f19314f, r.f19315g);
                    return;
                case 4:
                    fragmentTransaction.s(r.f19331w, r.f19333y);
                    return;
                case 5:
                    fragmentTransaction.s(r.f19330v, r.f19334z);
                    return;
                case 6:
                    fragmentTransaction.s(r.f19329u, r.f19328t);
                    return;
                case 7:
                    fragmentTransaction.s(r.f19313e, r.f19327s);
                    return;
                case 8:
                    fragmentTransaction.s(r.f19324p, r.f19322n);
                    return;
                case 9:
                    fragmentTransaction.s(r.f19320l, r.f19318j);
                    return;
                default:
                    throw new p();
            }
        }
        switch (a.f8376a[stackAnimation.ordinal()]) {
            case 1:
                fragmentTransaction.s(r.f19311c, r.f19312d);
                return;
            case 2:
                int i11 = r.f19325q;
                fragmentTransaction.s(i11, i11);
                return;
            case 3:
                fragmentTransaction.s(r.f19314f, r.f19315g);
                return;
            case 4:
                fragmentTransaction.s(r.f19330v, r.f19334z);
                return;
            case 5:
                fragmentTransaction.s(r.f19331w, r.f19333y);
                return;
            case 6:
                fragmentTransaction.s(r.f19328t, r.f19332x);
                return;
            case 7:
                fragmentTransaction.s(r.f19326r, r.f19316h);
                return;
            case 8:
                fragmentTransaction.s(r.f19321m, r.f19323o);
                return;
            case 9:
                fragmentTransaction.s(r.f19317i, r.f19319k);
                return;
            default:
                throw new p();
        }
    }
}
