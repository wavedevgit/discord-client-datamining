package ln;

import androidx.fragment.app.FragmentTransaction;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.q;
import jr.p;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f37512a;

        static {
            int[] iArr = new int[Screen.StackAnimation.values().length];
            try {
                iArr[Screen.StackAnimation.f18784d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.StackAnimation.f18785e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.StackAnimation.f18786i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.StackAnimation.f18788p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.StackAnimation.f18789q.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.StackAnimation.f18787o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.StackAnimation.f18790r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.StackAnimation.f18791s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.StackAnimation.f18792t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            f37512a = iArr;
        }
    }

    public static final void a(FragmentTransaction fragmentTransaction, Screen.StackAnimation stackAnimation, boolean z10) {
        Intrinsics.checkNotNullParameter(fragmentTransaction, "<this>");
        Intrinsics.checkNotNullParameter(stackAnimation, "stackAnimation");
        if (z10) {
            switch (a.f37512a[stackAnimation.ordinal()]) {
                case 1:
                    fragmentTransaction.r(q.f18931a, q.f18932b);
                    return;
                case 2:
                    int i10 = q.f18947q;
                    fragmentTransaction.r(i10, i10);
                    return;
                case 3:
                    fragmentTransaction.r(q.f18936f, q.f18937g);
                    return;
                case 4:
                    fragmentTransaction.r(q.f18953w, q.f18955y);
                    return;
                case 5:
                    fragmentTransaction.r(q.f18952v, q.f18956z);
                    return;
                case 6:
                    fragmentTransaction.r(q.f18951u, q.f18950t);
                    return;
                case 7:
                    fragmentTransaction.r(q.f18935e, q.f18949s);
                    return;
                case 8:
                    fragmentTransaction.r(q.f18946p, q.f18944n);
                    return;
                case 9:
                    fragmentTransaction.r(q.f18942l, q.f18940j);
                    return;
                default:
                    throw new p();
            }
        }
        switch (a.f37512a[stackAnimation.ordinal()]) {
            case 1:
                fragmentTransaction.r(q.f18933c, q.f18934d);
                return;
            case 2:
                int i11 = q.f18947q;
                fragmentTransaction.r(i11, i11);
                return;
            case 3:
                fragmentTransaction.r(q.f18936f, q.f18937g);
                return;
            case 4:
                fragmentTransaction.r(q.f18952v, q.f18956z);
                return;
            case 5:
                fragmentTransaction.r(q.f18953w, q.f18955y);
                return;
            case 6:
                fragmentTransaction.r(q.f18950t, q.f18954x);
                return;
            case 7:
                fragmentTransaction.r(q.f18948r, q.f18938h);
                return;
            case 8:
                fragmentTransaction.r(q.f18943m, q.f18945o);
                return;
            case 9:
                fragmentTransaction.r(q.f18939i, q.f18941k);
                return;
            default:
                throw new p();
        }
    }
}
