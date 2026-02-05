package qn;

import androidx.fragment.app.FragmentTransaction;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.q;
import kotlin.jvm.internal.Intrinsics;
import or.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f47972a;

        static {
            int[] iArr = new int[Screen.StackAnimation.values().length];
            try {
                iArr[Screen.StackAnimation.f18172d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.StackAnimation.f18173e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.StackAnimation.f18174i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.StackAnimation.f18176p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.StackAnimation.f18177q.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.StackAnimation.f18175o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.StackAnimation.f18178r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.StackAnimation.f18179s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.StackAnimation.f18180t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            f47972a = iArr;
        }
    }

    public static final void a(FragmentTransaction fragmentTransaction, Screen.StackAnimation stackAnimation, boolean z10) {
        Intrinsics.checkNotNullParameter(fragmentTransaction, "<this>");
        Intrinsics.checkNotNullParameter(stackAnimation, "stackAnimation");
        if (z10) {
            switch (a.f47972a[stackAnimation.ordinal()]) {
                case 1:
                    fragmentTransaction.r(q.f18319a, q.f18320b);
                    return;
                case 2:
                    int i10 = q.f18335q;
                    fragmentTransaction.r(i10, i10);
                    return;
                case 3:
                    fragmentTransaction.r(q.f18324f, q.f18325g);
                    return;
                case 4:
                    fragmentTransaction.r(q.f18341w, q.f18343y);
                    return;
                case 5:
                    fragmentTransaction.r(q.f18340v, q.f18344z);
                    return;
                case 6:
                    fragmentTransaction.r(q.f18339u, q.f18338t);
                    return;
                case 7:
                    fragmentTransaction.r(q.f18323e, q.f18337s);
                    return;
                case 8:
                    fragmentTransaction.r(q.f18334p, q.f18332n);
                    return;
                case 9:
                    fragmentTransaction.r(q.f18330l, q.f18328j);
                    return;
                default:
                    throw new p();
            }
        }
        switch (a.f47972a[stackAnimation.ordinal()]) {
            case 1:
                fragmentTransaction.r(q.f18321c, q.f18322d);
                return;
            case 2:
                int i11 = q.f18335q;
                fragmentTransaction.r(i11, i11);
                return;
            case 3:
                fragmentTransaction.r(q.f18324f, q.f18325g);
                return;
            case 4:
                fragmentTransaction.r(q.f18340v, q.f18344z);
                return;
            case 5:
                fragmentTransaction.r(q.f18341w, q.f18343y);
                return;
            case 6:
                fragmentTransaction.r(q.f18338t, q.f18342x);
                return;
            case 7:
                fragmentTransaction.r(q.f18336r, q.f18326h);
                return;
            case 8:
                fragmentTransaction.r(q.f18331m, q.f18333o);
                return;
            case 9:
                fragmentTransaction.r(q.f18327i, q.f18329k);
                return;
            default:
                throw new p();
        }
    }
}
