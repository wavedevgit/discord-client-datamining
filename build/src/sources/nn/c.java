package nn;

import androidx.fragment.app.FragmentTransaction;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.q;
import kotlin.jvm.internal.Intrinsics;
import lr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f41912a;

        static {
            int[] iArr = new int[Screen.StackAnimation.values().length];
            try {
                iArr[Screen.StackAnimation.f17766d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.StackAnimation.f17767e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.StackAnimation.f17768i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.StackAnimation.f17770p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.StackAnimation.f17771q.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.StackAnimation.f17769o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.StackAnimation.f17772r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.StackAnimation.f17773s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.StackAnimation.f17774t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            f41912a = iArr;
        }
    }

    public static final void a(FragmentTransaction fragmentTransaction, Screen.StackAnimation stackAnimation, boolean z10) {
        Intrinsics.checkNotNullParameter(fragmentTransaction, "<this>");
        Intrinsics.checkNotNullParameter(stackAnimation, "stackAnimation");
        if (z10) {
            switch (a.f41912a[stackAnimation.ordinal()]) {
                case 1:
                    fragmentTransaction.r(q.f17913a, q.f17914b);
                    return;
                case 2:
                    int i10 = q.f17929q;
                    fragmentTransaction.r(i10, i10);
                    return;
                case 3:
                    fragmentTransaction.r(q.f17918f, q.f17919g);
                    return;
                case 4:
                    fragmentTransaction.r(q.f17935w, q.f17937y);
                    return;
                case 5:
                    fragmentTransaction.r(q.f17934v, q.f17938z);
                    return;
                case 6:
                    fragmentTransaction.r(q.f17933u, q.f17932t);
                    return;
                case 7:
                    fragmentTransaction.r(q.f17917e, q.f17931s);
                    return;
                case 8:
                    fragmentTransaction.r(q.f17928p, q.f17926n);
                    return;
                case 9:
                    fragmentTransaction.r(q.f17924l, q.f17922j);
                    return;
                default:
                    throw new p();
            }
        }
        switch (a.f41912a[stackAnimation.ordinal()]) {
            case 1:
                fragmentTransaction.r(q.f17915c, q.f17916d);
                return;
            case 2:
                int i11 = q.f17929q;
                fragmentTransaction.r(i11, i11);
                return;
            case 3:
                fragmentTransaction.r(q.f17918f, q.f17919g);
                return;
            case 4:
                fragmentTransaction.r(q.f17934v, q.f17938z);
                return;
            case 5:
                fragmentTransaction.r(q.f17935w, q.f17937y);
                return;
            case 6:
                fragmentTransaction.r(q.f17932t, q.f17936x);
                return;
            case 7:
                fragmentTransaction.r(q.f17930r, q.f17920h);
                return;
            case 8:
                fragmentTransaction.r(q.f17925m, q.f17927o);
                return;
            case 9:
                fragmentTransaction.r(q.f17921i, q.f17923k);
                return;
            default:
                throw new p();
        }
    }
}
