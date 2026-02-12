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
                iArr[Screen.StackAnimation.f19042d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.StackAnimation.f19043e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.StackAnimation.f19044i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.StackAnimation.f19046p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.StackAnimation.f19047q.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.StackAnimation.f19045o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.StackAnimation.f19048r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.StackAnimation.f19049s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.StackAnimation.f19050t.ordinal()] = 9;
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
                    fragmentTransaction.s(r.f19310a, r.f19311b);
                    return;
                case 2:
                    int i10 = r.f19326q;
                    fragmentTransaction.s(i10, i10);
                    return;
                case 3:
                    fragmentTransaction.s(r.f19315f, r.f19316g);
                    return;
                case 4:
                    fragmentTransaction.s(r.f19332w, r.f19334y);
                    return;
                case 5:
                    fragmentTransaction.s(r.f19331v, r.f19335z);
                    return;
                case 6:
                    fragmentTransaction.s(r.f19330u, r.f19329t);
                    return;
                case 7:
                    fragmentTransaction.s(r.f19314e, r.f19328s);
                    return;
                case 8:
                    fragmentTransaction.s(r.f19325p, r.f19323n);
                    return;
                case 9:
                    fragmentTransaction.s(r.f19321l, r.f19319j);
                    return;
                default:
                    throw new p();
            }
        }
        switch (a.f8376a[stackAnimation.ordinal()]) {
            case 1:
                fragmentTransaction.s(r.f19312c, r.f19313d);
                return;
            case 2:
                int i11 = r.f19326q;
                fragmentTransaction.s(i11, i11);
                return;
            case 3:
                fragmentTransaction.s(r.f19315f, r.f19316g);
                return;
            case 4:
                fragmentTransaction.s(r.f19331v, r.f19335z);
                return;
            case 5:
                fragmentTransaction.s(r.f19332w, r.f19334y);
                return;
            case 6:
                fragmentTransaction.s(r.f19329t, r.f19333x);
                return;
            case 7:
                fragmentTransaction.s(r.f19327r, r.f19317h);
                return;
            case 8:
                fragmentTransaction.s(r.f19322m, r.f19324o);
                return;
            case 9:
                fragmentTransaction.s(r.f19318i, r.f19320k);
                return;
            default:
                throw new p();
        }
    }
}
