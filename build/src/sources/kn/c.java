package kn;

import androidx.fragment.app.FragmentTransaction;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.q;
import ir.p;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f33289a;

        static {
            int[] iArr = new int[Screen.StackAnimation.values().length];
            try {
                iArr[Screen.StackAnimation.f19151d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.StackAnimation.f19152e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.StackAnimation.f19153i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.StackAnimation.f19155p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.StackAnimation.f19156q.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.StackAnimation.f19154o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.StackAnimation.f19157r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.StackAnimation.f19158s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.StackAnimation.f19159t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            f33289a = iArr;
        }
    }

    public static final void a(FragmentTransaction fragmentTransaction, Screen.StackAnimation stackAnimation, boolean z10) {
        Intrinsics.checkNotNullParameter(fragmentTransaction, "<this>");
        Intrinsics.checkNotNullParameter(stackAnimation, "stackAnimation");
        if (z10) {
            switch (a.f33289a[stackAnimation.ordinal()]) {
                case 1:
                    fragmentTransaction.r(q.f19298a, q.f19299b);
                    return;
                case 2:
                    int i10 = q.f19314q;
                    fragmentTransaction.r(i10, i10);
                    return;
                case 3:
                    fragmentTransaction.r(q.f19303f, q.f19304g);
                    return;
                case 4:
                    fragmentTransaction.r(q.f19320w, q.f19322y);
                    return;
                case 5:
                    fragmentTransaction.r(q.f19319v, q.f19323z);
                    return;
                case 6:
                    fragmentTransaction.r(q.f19318u, q.f19317t);
                    return;
                case 7:
                    fragmentTransaction.r(q.f19302e, q.f19316s);
                    return;
                case 8:
                    fragmentTransaction.r(q.f19313p, q.f19311n);
                    return;
                case 9:
                    fragmentTransaction.r(q.f19309l, q.f19307j);
                    return;
                default:
                    throw new p();
            }
        }
        switch (a.f33289a[stackAnimation.ordinal()]) {
            case 1:
                fragmentTransaction.r(q.f19300c, q.f19301d);
                return;
            case 2:
                int i11 = q.f19314q;
                fragmentTransaction.r(i11, i11);
                return;
            case 3:
                fragmentTransaction.r(q.f19303f, q.f19304g);
                return;
            case 4:
                fragmentTransaction.r(q.f19319v, q.f19323z);
                return;
            case 5:
                fragmentTransaction.r(q.f19320w, q.f19322y);
                return;
            case 6:
                fragmentTransaction.r(q.f19317t, q.f19321x);
                return;
            case 7:
                fragmentTransaction.r(q.f19315r, q.f19305h);
                return;
            case 8:
                fragmentTransaction.r(q.f19310m, q.f19312o);
                return;
            case 9:
                fragmentTransaction.r(q.f19306i, q.f19308k);
                return;
            default:
                throw new p();
        }
    }
}
