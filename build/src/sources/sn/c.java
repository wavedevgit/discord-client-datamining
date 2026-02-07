package sn;

import androidx.fragment.app.FragmentTransaction;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.q;
import kotlin.jvm.internal.Intrinsics;
import qr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f50044a;

        static {
            int[] iArr = new int[Screen.StackAnimation.values().length];
            try {
                iArr[Screen.StackAnimation.f18152d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Screen.StackAnimation.f18153e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Screen.StackAnimation.f18154i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Screen.StackAnimation.f18156p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[Screen.StackAnimation.f18157q.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[Screen.StackAnimation.f18155o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[Screen.StackAnimation.f18158r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[Screen.StackAnimation.f18159s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[Screen.StackAnimation.f18160t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            f50044a = iArr;
        }
    }

    public static final void a(FragmentTransaction fragmentTransaction, Screen.StackAnimation stackAnimation, boolean z10) {
        Intrinsics.checkNotNullParameter(fragmentTransaction, "<this>");
        Intrinsics.checkNotNullParameter(stackAnimation, "stackAnimation");
        if (z10) {
            switch (a.f50044a[stackAnimation.ordinal()]) {
                case 1:
                    fragmentTransaction.r(q.f18299a, q.f18300b);
                    return;
                case 2:
                    int i10 = q.f18315q;
                    fragmentTransaction.r(i10, i10);
                    return;
                case 3:
                    fragmentTransaction.r(q.f18304f, q.f18305g);
                    return;
                case 4:
                    fragmentTransaction.r(q.f18321w, q.f18323y);
                    return;
                case 5:
                    fragmentTransaction.r(q.f18320v, q.f18324z);
                    return;
                case 6:
                    fragmentTransaction.r(q.f18319u, q.f18318t);
                    return;
                case 7:
                    fragmentTransaction.r(q.f18303e, q.f18317s);
                    return;
                case 8:
                    fragmentTransaction.r(q.f18314p, q.f18312n);
                    return;
                case 9:
                    fragmentTransaction.r(q.f18310l, q.f18308j);
                    return;
                default:
                    throw new p();
            }
        }
        switch (a.f50044a[stackAnimation.ordinal()]) {
            case 1:
                fragmentTransaction.r(q.f18301c, q.f18302d);
                return;
            case 2:
                int i11 = q.f18315q;
                fragmentTransaction.r(i11, i11);
                return;
            case 3:
                fragmentTransaction.r(q.f18304f, q.f18305g);
                return;
            case 4:
                fragmentTransaction.r(q.f18320v, q.f18324z);
                return;
            case 5:
                fragmentTransaction.r(q.f18321w, q.f18323y);
                return;
            case 6:
                fragmentTransaction.r(q.f18318t, q.f18322x);
                return;
            case 7:
                fragmentTransaction.r(q.f18316r, q.f18306h);
                return;
            case 8:
                fragmentTransaction.r(q.f18311m, q.f18313o);
                return;
            case 9:
                fragmentTransaction.r(q.f18307i, q.f18309k);
                return;
            default:
                throw new p();
        }
    }
}
