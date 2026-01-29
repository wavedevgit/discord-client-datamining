package androidx.constraintlayout.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.content.res.XmlResourceParser;
import android.util.AttributeSet;
import android.util.Log;
import android.util.SparseIntArray;
import android.util.Xml;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.api.NotificationData;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.swmansion.reanimated.BuildConfig;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import org.xmlpull.v1.XmlPullParserException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ConstraintSet {

    /* renamed from: g  reason: collision with root package name */
    private static final int[] f2482g = {0, 4, 8};

    /* renamed from: h  reason: collision with root package name */
    private static SparseIntArray f2483h = new SparseIntArray();

    /* renamed from: i  reason: collision with root package name */
    private static SparseIntArray f2484i = new SparseIntArray();

    /* renamed from: a  reason: collision with root package name */
    public String f2485a = "";

    /* renamed from: b  reason: collision with root package name */
    private String[] f2486b = new String[0];

    /* renamed from: c  reason: collision with root package name */
    public int f2487c = 0;

    /* renamed from: d  reason: collision with root package name */
    private HashMap f2488d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private boolean f2489e = true;

    /* renamed from: f  reason: collision with root package name */
    private HashMap f2490f = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        int f2491a;

        /* renamed from: b  reason: collision with root package name */
        String f2492b;

        /* renamed from: c  reason: collision with root package name */
        public final d f2493c = new d();

        /* renamed from: d  reason: collision with root package name */
        public final c f2494d = new c();

        /* renamed from: e  reason: collision with root package name */
        public final b f2495e = new b();

        /* renamed from: f  reason: collision with root package name */
        public final e f2496f = new e();

        /* renamed from: g  reason: collision with root package name */
        public HashMap f2497g = new HashMap();

        /* renamed from: h  reason: collision with root package name */
        C0027a f2498h;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.constraintlayout.widget.ConstraintSet$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class C0027a {

            /* renamed from: a  reason: collision with root package name */
            int[] f2499a = new int[10];

            /* renamed from: b  reason: collision with root package name */
            int[] f2500b = new int[10];

            /* renamed from: c  reason: collision with root package name */
            int f2501c = 0;

            /* renamed from: d  reason: collision with root package name */
            int[] f2502d = new int[10];

            /* renamed from: e  reason: collision with root package name */
            float[] f2503e = new float[10];

            /* renamed from: f  reason: collision with root package name */
            int f2504f = 0;

            /* renamed from: g  reason: collision with root package name */
            int[] f2505g = new int[5];

            /* renamed from: h  reason: collision with root package name */
            String[] f2506h = new String[5];

            /* renamed from: i  reason: collision with root package name */
            int f2507i = 0;

            /* renamed from: j  reason: collision with root package name */
            int[] f2508j = new int[4];

            /* renamed from: k  reason: collision with root package name */
            boolean[] f2509k = new boolean[4];

            /* renamed from: l  reason: collision with root package name */
            int f2510l = 0;

            C0027a() {
            }

            void a(int i10, float f10) {
                int i11 = this.f2504f;
                int[] iArr = this.f2502d;
                if (i11 >= iArr.length) {
                    this.f2502d = Arrays.copyOf(iArr, iArr.length * 2);
                    float[] fArr = this.f2503e;
                    this.f2503e = Arrays.copyOf(fArr, fArr.length * 2);
                }
                int[] iArr2 = this.f2502d;
                int i12 = this.f2504f;
                iArr2[i12] = i10;
                float[] fArr2 = this.f2503e;
                this.f2504f = i12 + 1;
                fArr2[i12] = f10;
            }

            void b(int i10, int i11) {
                int i12 = this.f2501c;
                int[] iArr = this.f2499a;
                if (i12 >= iArr.length) {
                    this.f2499a = Arrays.copyOf(iArr, iArr.length * 2);
                    int[] iArr2 = this.f2500b;
                    this.f2500b = Arrays.copyOf(iArr2, iArr2.length * 2);
                }
                int[] iArr3 = this.f2499a;
                int i13 = this.f2501c;
                iArr3[i13] = i10;
                int[] iArr4 = this.f2500b;
                this.f2501c = i13 + 1;
                iArr4[i13] = i11;
            }

            void c(int i10, String str) {
                int i11 = this.f2507i;
                int[] iArr = this.f2505g;
                if (i11 >= iArr.length) {
                    this.f2505g = Arrays.copyOf(iArr, iArr.length * 2);
                    String[] strArr = this.f2506h;
                    this.f2506h = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                }
                int[] iArr2 = this.f2505g;
                int i12 = this.f2507i;
                iArr2[i12] = i10;
                String[] strArr2 = this.f2506h;
                this.f2507i = i12 + 1;
                strArr2[i12] = str;
            }

            void d(int i10, boolean z10) {
                int i11 = this.f2510l;
                int[] iArr = this.f2508j;
                if (i11 >= iArr.length) {
                    this.f2508j = Arrays.copyOf(iArr, iArr.length * 2);
                    boolean[] zArr = this.f2509k;
                    this.f2509k = Arrays.copyOf(zArr, zArr.length * 2);
                }
                int[] iArr2 = this.f2508j;
                int i12 = this.f2510l;
                iArr2[i12] = i10;
                boolean[] zArr2 = this.f2509k;
                this.f2510l = i12 + 1;
                zArr2[i12] = z10;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void d(int i10, ConstraintLayout.LayoutParams layoutParams) {
            this.f2491a = i10;
            b bVar = this.f2495e;
            bVar.f2530j = layoutParams.f2414e;
            bVar.f2532k = layoutParams.f2416f;
            bVar.f2534l = layoutParams.f2418g;
            bVar.f2536m = layoutParams.f2420h;
            bVar.f2538n = layoutParams.f2422i;
            bVar.f2540o = layoutParams.f2424j;
            bVar.f2542p = layoutParams.f2426k;
            bVar.f2544q = layoutParams.f2428l;
            bVar.f2546r = layoutParams.f2430m;
            bVar.f2547s = layoutParams.f2432n;
            bVar.f2548t = layoutParams.f2434o;
            bVar.f2549u = layoutParams.f2442s;
            bVar.f2550v = layoutParams.f2444t;
            bVar.f2551w = layoutParams.f2446u;
            bVar.f2552x = layoutParams.f2448v;
            bVar.f2553y = layoutParams.G;
            bVar.f2554z = layoutParams.H;
            bVar.A = layoutParams.I;
            bVar.B = layoutParams.f2436p;
            bVar.C = layoutParams.f2438q;
            bVar.D = layoutParams.f2440r;
            bVar.E = layoutParams.X;
            bVar.F = layoutParams.Y;
            bVar.G = layoutParams.Z;
            bVar.f2526h = layoutParams.f2410c;
            bVar.f2522f = layoutParams.f2406a;
            bVar.f2524g = layoutParams.f2408b;
            bVar.f2518d = ((ViewGroup.MarginLayoutParams) layoutParams).width;
            bVar.f2520e = ((ViewGroup.MarginLayoutParams) layoutParams).height;
            bVar.H = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin;
            bVar.I = ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
            bVar.J = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin;
            bVar.K = ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
            bVar.N = layoutParams.D;
            bVar.V = layoutParams.M;
            bVar.W = layoutParams.L;
            bVar.Y = layoutParams.O;
            bVar.X = layoutParams.N;
            bVar.f2539n0 = layoutParams.f2407a0;
            bVar.f2541o0 = layoutParams.f2409b0;
            bVar.Z = layoutParams.P;
            bVar.f2513a0 = layoutParams.Q;
            bVar.f2515b0 = layoutParams.T;
            bVar.f2517c0 = layoutParams.U;
            bVar.f2519d0 = layoutParams.R;
            bVar.f2521e0 = layoutParams.S;
            bVar.f2523f0 = layoutParams.V;
            bVar.f2525g0 = layoutParams.W;
            bVar.f2537m0 = layoutParams.f2411c0;
            bVar.P = layoutParams.f2452x;
            bVar.R = layoutParams.f2454z;
            bVar.O = layoutParams.f2450w;
            bVar.Q = layoutParams.f2453y;
            bVar.T = layoutParams.A;
            bVar.S = layoutParams.B;
            bVar.U = layoutParams.C;
            bVar.f2545q0 = layoutParams.f2413d0;
            bVar.L = layoutParams.getMarginEnd();
            this.f2495e.M = layoutParams.getMarginStart();
        }

        public void b(ConstraintLayout.LayoutParams layoutParams) {
            b bVar = this.f2495e;
            layoutParams.f2414e = bVar.f2530j;
            layoutParams.f2416f = bVar.f2532k;
            layoutParams.f2418g = bVar.f2534l;
            layoutParams.f2420h = bVar.f2536m;
            layoutParams.f2422i = bVar.f2538n;
            layoutParams.f2424j = bVar.f2540o;
            layoutParams.f2426k = bVar.f2542p;
            layoutParams.f2428l = bVar.f2544q;
            layoutParams.f2430m = bVar.f2546r;
            layoutParams.f2432n = bVar.f2547s;
            layoutParams.f2434o = bVar.f2548t;
            layoutParams.f2442s = bVar.f2549u;
            layoutParams.f2444t = bVar.f2550v;
            layoutParams.f2446u = bVar.f2551w;
            layoutParams.f2448v = bVar.f2552x;
            ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin = bVar.H;
            ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin = bVar.I;
            ((ViewGroup.MarginLayoutParams) layoutParams).topMargin = bVar.J;
            ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin = bVar.K;
            layoutParams.A = bVar.T;
            layoutParams.B = bVar.S;
            layoutParams.f2452x = bVar.P;
            layoutParams.f2454z = bVar.R;
            layoutParams.G = bVar.f2553y;
            layoutParams.H = bVar.f2554z;
            layoutParams.f2436p = bVar.B;
            layoutParams.f2438q = bVar.C;
            layoutParams.f2440r = bVar.D;
            layoutParams.I = bVar.A;
            layoutParams.X = bVar.E;
            layoutParams.Y = bVar.F;
            layoutParams.M = bVar.V;
            layoutParams.L = bVar.W;
            layoutParams.O = bVar.Y;
            layoutParams.N = bVar.X;
            layoutParams.f2407a0 = bVar.f2539n0;
            layoutParams.f2409b0 = bVar.f2541o0;
            layoutParams.P = bVar.Z;
            layoutParams.Q = bVar.f2513a0;
            layoutParams.T = bVar.f2515b0;
            layoutParams.U = bVar.f2517c0;
            layoutParams.R = bVar.f2519d0;
            layoutParams.S = bVar.f2521e0;
            layoutParams.V = bVar.f2523f0;
            layoutParams.W = bVar.f2525g0;
            layoutParams.Z = bVar.G;
            layoutParams.f2410c = bVar.f2526h;
            layoutParams.f2406a = bVar.f2522f;
            layoutParams.f2408b = bVar.f2524g;
            ((ViewGroup.MarginLayoutParams) layoutParams).width = bVar.f2518d;
            ((ViewGroup.MarginLayoutParams) layoutParams).height = bVar.f2520e;
            String str = bVar.f2537m0;
            if (str != null) {
                layoutParams.f2411c0 = str;
            }
            layoutParams.f2413d0 = bVar.f2545q0;
            layoutParams.setMarginStart(bVar.M);
            layoutParams.setMarginEnd(this.f2495e.L);
            layoutParams.a();
        }

        /* renamed from: c */
        public a clone() {
            a aVar = new a();
            aVar.f2495e.a(this.f2495e);
            aVar.f2494d.a(this.f2494d);
            aVar.f2493c.a(this.f2493c);
            aVar.f2496f.a(this.f2496f);
            aVar.f2491a = this.f2491a;
            aVar.f2498h = this.f2498h;
            return aVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: r0  reason: collision with root package name */
        private static SparseIntArray f2511r0;

        /* renamed from: d  reason: collision with root package name */
        public int f2518d;

        /* renamed from: e  reason: collision with root package name */
        public int f2520e;

        /* renamed from: k0  reason: collision with root package name */
        public int[] f2533k0;

        /* renamed from: l0  reason: collision with root package name */
        public String f2535l0;

        /* renamed from: m0  reason: collision with root package name */
        public String f2537m0;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2512a = false;

        /* renamed from: b  reason: collision with root package name */
        public boolean f2514b = false;

        /* renamed from: c  reason: collision with root package name */
        public boolean f2516c = false;

        /* renamed from: f  reason: collision with root package name */
        public int f2522f = -1;

        /* renamed from: g  reason: collision with root package name */
        public int f2524g = -1;

        /* renamed from: h  reason: collision with root package name */
        public float f2526h = -1.0f;

        /* renamed from: i  reason: collision with root package name */
        public boolean f2528i = true;

        /* renamed from: j  reason: collision with root package name */
        public int f2530j = -1;

        /* renamed from: k  reason: collision with root package name */
        public int f2532k = -1;

        /* renamed from: l  reason: collision with root package name */
        public int f2534l = -1;

        /* renamed from: m  reason: collision with root package name */
        public int f2536m = -1;

        /* renamed from: n  reason: collision with root package name */
        public int f2538n = -1;

        /* renamed from: o  reason: collision with root package name */
        public int f2540o = -1;

        /* renamed from: p  reason: collision with root package name */
        public int f2542p = -1;

        /* renamed from: q  reason: collision with root package name */
        public int f2544q = -1;

        /* renamed from: r  reason: collision with root package name */
        public int f2546r = -1;

        /* renamed from: s  reason: collision with root package name */
        public int f2547s = -1;

        /* renamed from: t  reason: collision with root package name */
        public int f2548t = -1;

        /* renamed from: u  reason: collision with root package name */
        public int f2549u = -1;

        /* renamed from: v  reason: collision with root package name */
        public int f2550v = -1;

        /* renamed from: w  reason: collision with root package name */
        public int f2551w = -1;

        /* renamed from: x  reason: collision with root package name */
        public int f2552x = -1;

        /* renamed from: y  reason: collision with root package name */
        public float f2553y = 0.5f;

        /* renamed from: z  reason: collision with root package name */
        public float f2554z = 0.5f;
        public String A = null;
        public int B = -1;
        public int C = 0;
        public float D = 0.0f;
        public int E = -1;
        public int F = -1;
        public int G = -1;
        public int H = 0;
        public int I = 0;
        public int J = 0;
        public int K = 0;
        public int L = 0;
        public int M = 0;
        public int N = 0;
        public int O = Integer.MIN_VALUE;
        public int P = Integer.MIN_VALUE;
        public int Q = Integer.MIN_VALUE;
        public int R = Integer.MIN_VALUE;
        public int S = Integer.MIN_VALUE;
        public int T = Integer.MIN_VALUE;
        public int U = Integer.MIN_VALUE;
        public float V = -1.0f;
        public float W = -1.0f;
        public int X = 0;
        public int Y = 0;
        public int Z = 0;

        /* renamed from: a0  reason: collision with root package name */
        public int f2513a0 = 0;

        /* renamed from: b0  reason: collision with root package name */
        public int f2515b0 = 0;

        /* renamed from: c0  reason: collision with root package name */
        public int f2517c0 = 0;

        /* renamed from: d0  reason: collision with root package name */
        public int f2519d0 = 0;

        /* renamed from: e0  reason: collision with root package name */
        public int f2521e0 = 0;

        /* renamed from: f0  reason: collision with root package name */
        public float f2523f0 = 1.0f;

        /* renamed from: g0  reason: collision with root package name */
        public float f2525g0 = 1.0f;

        /* renamed from: h0  reason: collision with root package name */
        public int f2527h0 = -1;

        /* renamed from: i0  reason: collision with root package name */
        public int f2529i0 = 0;

        /* renamed from: j0  reason: collision with root package name */
        public int f2531j0 = -1;

        /* renamed from: n0  reason: collision with root package name */
        public boolean f2539n0 = false;

        /* renamed from: o0  reason: collision with root package name */
        public boolean f2541o0 = false;

        /* renamed from: p0  reason: collision with root package name */
        public boolean f2543p0 = true;

        /* renamed from: q0  reason: collision with root package name */
        public int f2545q0 = 0;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2511r0 = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.C5, 24);
            f2511r0.append(androidx.constraintlayout.widget.d.D5, 25);
            f2511r0.append(androidx.constraintlayout.widget.d.F5, 28);
            f2511r0.append(androidx.constraintlayout.widget.d.G5, 29);
            f2511r0.append(androidx.constraintlayout.widget.d.L5, 35);
            f2511r0.append(androidx.constraintlayout.widget.d.K5, 34);
            f2511r0.append(androidx.constraintlayout.widget.d.f2715l5, 4);
            f2511r0.append(androidx.constraintlayout.widget.d.f2707k5, 3);
            f2511r0.append(androidx.constraintlayout.widget.d.f2691i5, 1);
            f2511r0.append(androidx.constraintlayout.widget.d.T5, 6);
            f2511r0.append(androidx.constraintlayout.widget.d.U5, 7);
            f2511r0.append(androidx.constraintlayout.widget.d.f2771s5, 17);
            f2511r0.append(androidx.constraintlayout.widget.d.f2779t5, 18);
            f2511r0.append(androidx.constraintlayout.widget.d.f2787u5, 19);
            f2511r0.append(androidx.constraintlayout.widget.d.f2659e5, 90);
            f2511r0.append(androidx.constraintlayout.widget.d.Q4, 26);
            f2511r0.append(androidx.constraintlayout.widget.d.H5, 31);
            f2511r0.append(androidx.constraintlayout.widget.d.I5, 32);
            f2511r0.append(androidx.constraintlayout.widget.d.f2763r5, 10);
            f2511r0.append(androidx.constraintlayout.widget.d.f2755q5, 9);
            f2511r0.append(androidx.constraintlayout.widget.d.X5, 13);
            f2511r0.append(androidx.constraintlayout.widget.d.f2626a6, 16);
            f2511r0.append(androidx.constraintlayout.widget.d.Y5, 14);
            f2511r0.append(androidx.constraintlayout.widget.d.V5, 11);
            f2511r0.append(androidx.constraintlayout.widget.d.Z5, 15);
            f2511r0.append(androidx.constraintlayout.widget.d.W5, 12);
            f2511r0.append(androidx.constraintlayout.widget.d.O5, 38);
            f2511r0.append(androidx.constraintlayout.widget.d.A5, 37);
            f2511r0.append(androidx.constraintlayout.widget.d.f2827z5, 39);
            f2511r0.append(androidx.constraintlayout.widget.d.N5, 40);
            f2511r0.append(androidx.constraintlayout.widget.d.f2819y5, 20);
            f2511r0.append(androidx.constraintlayout.widget.d.M5, 36);
            f2511r0.append(androidx.constraintlayout.widget.d.f2747p5, 5);
            f2511r0.append(androidx.constraintlayout.widget.d.B5, 91);
            f2511r0.append(androidx.constraintlayout.widget.d.J5, 91);
            f2511r0.append(androidx.constraintlayout.widget.d.E5, 91);
            f2511r0.append(androidx.constraintlayout.widget.d.f2699j5, 91);
            f2511r0.append(androidx.constraintlayout.widget.d.f2683h5, 91);
            f2511r0.append(androidx.constraintlayout.widget.d.T4, 23);
            f2511r0.append(androidx.constraintlayout.widget.d.V4, 27);
            f2511r0.append(androidx.constraintlayout.widget.d.X4, 30);
            f2511r0.append(androidx.constraintlayout.widget.d.Y4, 8);
            f2511r0.append(androidx.constraintlayout.widget.d.U4, 33);
            f2511r0.append(androidx.constraintlayout.widget.d.W4, 2);
            f2511r0.append(androidx.constraintlayout.widget.d.R4, 22);
            f2511r0.append(androidx.constraintlayout.widget.d.S4, 21);
            f2511r0.append(androidx.constraintlayout.widget.d.P5, 41);
            f2511r0.append(androidx.constraintlayout.widget.d.f2795v5, 42);
            f2511r0.append(androidx.constraintlayout.widget.d.f2675g5, 87);
            f2511r0.append(androidx.constraintlayout.widget.d.f2667f5, 88);
            f2511r0.append(androidx.constraintlayout.widget.d.f2635b6, 76);
            f2511r0.append(androidx.constraintlayout.widget.d.f2723m5, 61);
            f2511r0.append(androidx.constraintlayout.widget.d.f2739o5, 62);
            f2511r0.append(androidx.constraintlayout.widget.d.f2731n5, 63);
            f2511r0.append(androidx.constraintlayout.widget.d.S5, 69);
            f2511r0.append(androidx.constraintlayout.widget.d.f2811x5, 70);
            f2511r0.append(androidx.constraintlayout.widget.d.f2643c5, 71);
            f2511r0.append(androidx.constraintlayout.widget.d.f2625a5, 72);
            f2511r0.append(androidx.constraintlayout.widget.d.f2634b5, 73);
            f2511r0.append(androidx.constraintlayout.widget.d.f2651d5, 74);
            f2511r0.append(androidx.constraintlayout.widget.d.Z4, 75);
            f2511r0.append(androidx.constraintlayout.widget.d.Q5, 84);
            f2511r0.append(androidx.constraintlayout.widget.d.R5, 86);
            f2511r0.append(androidx.constraintlayout.widget.d.Q5, 83);
            f2511r0.append(androidx.constraintlayout.widget.d.f2803w5, 85);
            f2511r0.append(androidx.constraintlayout.widget.d.P5, 87);
            f2511r0.append(androidx.constraintlayout.widget.d.f2795v5, 88);
            f2511r0.append(androidx.constraintlayout.widget.d.f2768s2, 89);
            f2511r0.append(androidx.constraintlayout.widget.d.f2659e5, 90);
        }

        public void a(b bVar) {
            this.f2512a = bVar.f2512a;
            this.f2518d = bVar.f2518d;
            this.f2514b = bVar.f2514b;
            this.f2520e = bVar.f2520e;
            this.f2522f = bVar.f2522f;
            this.f2524g = bVar.f2524g;
            this.f2526h = bVar.f2526h;
            this.f2528i = bVar.f2528i;
            this.f2530j = bVar.f2530j;
            this.f2532k = bVar.f2532k;
            this.f2534l = bVar.f2534l;
            this.f2536m = bVar.f2536m;
            this.f2538n = bVar.f2538n;
            this.f2540o = bVar.f2540o;
            this.f2542p = bVar.f2542p;
            this.f2544q = bVar.f2544q;
            this.f2546r = bVar.f2546r;
            this.f2547s = bVar.f2547s;
            this.f2548t = bVar.f2548t;
            this.f2549u = bVar.f2549u;
            this.f2550v = bVar.f2550v;
            this.f2551w = bVar.f2551w;
            this.f2552x = bVar.f2552x;
            this.f2553y = bVar.f2553y;
            this.f2554z = bVar.f2554z;
            this.A = bVar.A;
            this.B = bVar.B;
            this.C = bVar.C;
            this.D = bVar.D;
            this.E = bVar.E;
            this.F = bVar.F;
            this.G = bVar.G;
            this.H = bVar.H;
            this.I = bVar.I;
            this.J = bVar.J;
            this.K = bVar.K;
            this.L = bVar.L;
            this.M = bVar.M;
            this.N = bVar.N;
            this.O = bVar.O;
            this.P = bVar.P;
            this.Q = bVar.Q;
            this.R = bVar.R;
            this.S = bVar.S;
            this.T = bVar.T;
            this.U = bVar.U;
            this.V = bVar.V;
            this.W = bVar.W;
            this.X = bVar.X;
            this.Y = bVar.Y;
            this.Z = bVar.Z;
            this.f2513a0 = bVar.f2513a0;
            this.f2515b0 = bVar.f2515b0;
            this.f2517c0 = bVar.f2517c0;
            this.f2519d0 = bVar.f2519d0;
            this.f2521e0 = bVar.f2521e0;
            this.f2523f0 = bVar.f2523f0;
            this.f2525g0 = bVar.f2525g0;
            this.f2527h0 = bVar.f2527h0;
            this.f2529i0 = bVar.f2529i0;
            this.f2531j0 = bVar.f2531j0;
            this.f2537m0 = bVar.f2537m0;
            int[] iArr = bVar.f2533k0;
            if (iArr != null && bVar.f2535l0 == null) {
                this.f2533k0 = Arrays.copyOf(iArr, iArr.length);
            } else {
                this.f2533k0 = null;
            }
            this.f2535l0 = bVar.f2535l0;
            this.f2539n0 = bVar.f2539n0;
            this.f2541o0 = bVar.f2541o0;
            this.f2543p0 = bVar.f2543p0;
            this.f2545q0 = bVar.f2545q0;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.P4);
            this.f2514b = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                int i11 = f2511r0.get(index);
                switch (i11) {
                    case 1:
                        this.f2546r = ConstraintSet.u(obtainStyledAttributes, index, this.f2546r);
                        break;
                    case 2:
                        this.K = obtainStyledAttributes.getDimensionPixelSize(index, this.K);
                        break;
                    case 3:
                        this.f2544q = ConstraintSet.u(obtainStyledAttributes, index, this.f2544q);
                        break;
                    case 4:
                        this.f2542p = ConstraintSet.u(obtainStyledAttributes, index, this.f2542p);
                        break;
                    case 5:
                        this.A = obtainStyledAttributes.getString(index);
                        break;
                    case 6:
                        this.E = obtainStyledAttributes.getDimensionPixelOffset(index, this.E);
                        break;
                    case 7:
                        this.F = obtainStyledAttributes.getDimensionPixelOffset(index, this.F);
                        break;
                    case 8:
                        this.L = obtainStyledAttributes.getDimensionPixelSize(index, this.L);
                        break;
                    case 9:
                        this.f2552x = ConstraintSet.u(obtainStyledAttributes, index, this.f2552x);
                        break;
                    case 10:
                        this.f2551w = ConstraintSet.u(obtainStyledAttributes, index, this.f2551w);
                        break;
                    case 11:
                        this.R = obtainStyledAttributes.getDimensionPixelSize(index, this.R);
                        break;
                    case 12:
                        this.S = obtainStyledAttributes.getDimensionPixelSize(index, this.S);
                        break;
                    case 13:
                        this.O = obtainStyledAttributes.getDimensionPixelSize(index, this.O);
                        break;
                    case 14:
                        this.Q = obtainStyledAttributes.getDimensionPixelSize(index, this.Q);
                        break;
                    case 15:
                        this.T = obtainStyledAttributes.getDimensionPixelSize(index, this.T);
                        break;
                    case 16:
                        this.P = obtainStyledAttributes.getDimensionPixelSize(index, this.P);
                        break;
                    case 17:
                        this.f2522f = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2522f);
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        this.f2524g = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2524g);
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        this.f2526h = obtainStyledAttributes.getFloat(index, this.f2526h);
                        break;
                    case 20:
                        this.f2553y = obtainStyledAttributes.getFloat(index, this.f2553y);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        this.f2520e = obtainStyledAttributes.getLayoutDimension(index, this.f2520e);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        this.f2518d = obtainStyledAttributes.getLayoutDimension(index, this.f2518d);
                        break;
                    case 23:
                        this.H = obtainStyledAttributes.getDimensionPixelSize(index, this.H);
                        break;
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        this.f2530j = ConstraintSet.u(obtainStyledAttributes, index, this.f2530j);
                        break;
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                        this.f2532k = ConstraintSet.u(obtainStyledAttributes, index, this.f2532k);
                        break;
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                        this.G = obtainStyledAttributes.getInt(index, this.G);
                        break;
                    case 27:
                        this.I = obtainStyledAttributes.getDimensionPixelSize(index, this.I);
                        break;
                    case 28:
                        this.f2534l = ConstraintSet.u(obtainStyledAttributes, index, this.f2534l);
                        break;
                    case 29:
                        this.f2536m = ConstraintSet.u(obtainStyledAttributes, index, this.f2536m);
                        break;
                    case 30:
                        this.M = obtainStyledAttributes.getDimensionPixelSize(index, this.M);
                        break;
                    case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                        this.f2549u = ConstraintSet.u(obtainStyledAttributes, index, this.f2549u);
                        break;
                    case 32:
                        this.f2550v = ConstraintSet.u(obtainStyledAttributes, index, this.f2550v);
                        break;
                    case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                        this.J = obtainStyledAttributes.getDimensionPixelSize(index, this.J);
                        break;
                    case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                        this.f2540o = ConstraintSet.u(obtainStyledAttributes, index, this.f2540o);
                        break;
                    case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                        this.f2538n = ConstraintSet.u(obtainStyledAttributes, index, this.f2538n);
                        break;
                    case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                        this.f2554z = obtainStyledAttributes.getFloat(index, this.f2554z);
                        break;
                    case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                        this.W = obtainStyledAttributes.getFloat(index, this.W);
                        break;
                    case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                        this.V = obtainStyledAttributes.getFloat(index, this.V);
                        break;
                    case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                        this.X = obtainStyledAttributes.getInt(index, this.X);
                        break;
                    case 40:
                        this.Y = obtainStyledAttributes.getInt(index, this.Y);
                        break;
                    case 41:
                        ConstraintSet.v(this, obtainStyledAttributes, index, 0);
                        break;
                    case 42:
                        ConstraintSet.v(this, obtainStyledAttributes, index, 1);
                        break;
                    default:
                        switch (i11) {
                            case 61:
                                this.B = ConstraintSet.u(obtainStyledAttributes, index, this.B);
                                continue;
                            case 62:
                                this.C = obtainStyledAttributes.getDimensionPixelSize(index, this.C);
                                continue;
                            case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                                this.D = obtainStyledAttributes.getFloat(index, this.D);
                                continue;
                            default:
                                switch (i11) {
                                    case 69:
                                        this.f2523f0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 70:
                                        this.f2525g0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 71:
                                        Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                                        continue;
                                    case 72:
                                        this.f2527h0 = obtainStyledAttributes.getInt(index, this.f2527h0);
                                        continue;
                                    case 73:
                                        this.f2529i0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2529i0);
                                        continue;
                                    case 74:
                                        this.f2535l0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 75:
                                        this.f2543p0 = obtainStyledAttributes.getBoolean(index, this.f2543p0);
                                        continue;
                                    case 76:
                                        this.f2545q0 = obtainStyledAttributes.getInt(index, this.f2545q0);
                                        continue;
                                    case 77:
                                        this.f2547s = ConstraintSet.u(obtainStyledAttributes, index, this.f2547s);
                                        continue;
                                    case 78:
                                        this.f2548t = ConstraintSet.u(obtainStyledAttributes, index, this.f2548t);
                                        continue;
                                    case 79:
                                        this.U = obtainStyledAttributes.getDimensionPixelSize(index, this.U);
                                        continue;
                                    case 80:
                                        this.N = obtainStyledAttributes.getDimensionPixelSize(index, this.N);
                                        continue;
                                    case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                                        this.Z = obtainStyledAttributes.getInt(index, this.Z);
                                        continue;
                                    case 82:
                                        this.f2513a0 = obtainStyledAttributes.getInt(index, this.f2513a0);
                                        continue;
                                    case 83:
                                        this.f2517c0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2517c0);
                                        continue;
                                    case 84:
                                        this.f2515b0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2515b0);
                                        continue;
                                    case 85:
                                        this.f2521e0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2521e0);
                                        continue;
                                    case 86:
                                        this.f2519d0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2519d0);
                                        continue;
                                    case 87:
                                        this.f2539n0 = obtainStyledAttributes.getBoolean(index, this.f2539n0);
                                        continue;
                                    case 88:
                                        this.f2541o0 = obtainStyledAttributes.getBoolean(index, this.f2541o0);
                                        continue;
                                    case 89:
                                        this.f2537m0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 90:
                                        this.f2528i = obtainStyledAttributes.getBoolean(index, this.f2528i);
                                        continue;
                                    case 91:
                                        Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2511r0.get(index));
                                        continue;
                                    default:
                                        Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2511r0.get(index));
                                        continue;
                                        continue;
                                }
                        }
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: o  reason: collision with root package name */
        private static SparseIntArray f2555o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2556a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f2557b = -1;

        /* renamed from: c  reason: collision with root package name */
        public int f2558c = 0;

        /* renamed from: d  reason: collision with root package name */
        public String f2559d = null;

        /* renamed from: e  reason: collision with root package name */
        public int f2560e = -1;

        /* renamed from: f  reason: collision with root package name */
        public int f2561f = 0;

        /* renamed from: g  reason: collision with root package name */
        public float f2562g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public int f2563h = -1;

        /* renamed from: i  reason: collision with root package name */
        public float f2564i = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        public float f2565j = Float.NaN;

        /* renamed from: k  reason: collision with root package name */
        public int f2566k = -1;

        /* renamed from: l  reason: collision with root package name */
        public String f2567l = null;

        /* renamed from: m  reason: collision with root package name */
        public int f2568m = -3;

        /* renamed from: n  reason: collision with root package name */
        public int f2569n = -1;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2555o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.f2684h6, 1);
            f2555o.append(androidx.constraintlayout.widget.d.f2700j6, 2);
            f2555o.append(androidx.constraintlayout.widget.d.f2732n6, 3);
            f2555o.append(androidx.constraintlayout.widget.d.f2676g6, 4);
            f2555o.append(androidx.constraintlayout.widget.d.f2668f6, 5);
            f2555o.append(androidx.constraintlayout.widget.d.f2660e6, 6);
            f2555o.append(androidx.constraintlayout.widget.d.f2692i6, 7);
            f2555o.append(androidx.constraintlayout.widget.d.f2724m6, 8);
            f2555o.append(androidx.constraintlayout.widget.d.f2716l6, 9);
            f2555o.append(androidx.constraintlayout.widget.d.f2708k6, 10);
        }

        public void a(c cVar) {
            this.f2556a = cVar.f2556a;
            this.f2557b = cVar.f2557b;
            this.f2559d = cVar.f2559d;
            this.f2560e = cVar.f2560e;
            this.f2561f = cVar.f2561f;
            this.f2564i = cVar.f2564i;
            this.f2562g = cVar.f2562g;
            this.f2563h = cVar.f2563h;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f2652d6);
            this.f2556a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f2555o.get(index)) {
                    case 1:
                        this.f2564i = obtainStyledAttributes.getFloat(index, this.f2564i);
                        break;
                    case 2:
                        this.f2560e = obtainStyledAttributes.getInt(index, this.f2560e);
                        break;
                    case 3:
                        if (obtainStyledAttributes.peekValue(index).type == 3) {
                            this.f2559d = obtainStyledAttributes.getString(index);
                            break;
                        } else {
                            this.f2559d = i1.a.f28329c[obtainStyledAttributes.getInteger(index, 0)];
                            break;
                        }
                    case 4:
                        this.f2561f = obtainStyledAttributes.getInt(index, 0);
                        break;
                    case 5:
                        this.f2557b = ConstraintSet.u(obtainStyledAttributes, index, this.f2557b);
                        break;
                    case 6:
                        this.f2558c = obtainStyledAttributes.getInteger(index, this.f2558c);
                        break;
                    case 7:
                        this.f2562g = obtainStyledAttributes.getFloat(index, this.f2562g);
                        break;
                    case 8:
                        this.f2566k = obtainStyledAttributes.getInteger(index, this.f2566k);
                        break;
                    case 9:
                        this.f2565j = obtainStyledAttributes.getFloat(index, this.f2565j);
                        break;
                    case 10:
                        int i11 = obtainStyledAttributes.peekValue(index).type;
                        if (i11 == 1) {
                            int resourceId = obtainStyledAttributes.getResourceId(index, -1);
                            this.f2569n = resourceId;
                            if (resourceId != -1) {
                                this.f2568m = -2;
                                break;
                            } else {
                                break;
                            }
                        } else if (i11 == 3) {
                            String string = obtainStyledAttributes.getString(index);
                            this.f2567l = string;
                            if (string.indexOf("/") > 0) {
                                this.f2569n = obtainStyledAttributes.getResourceId(index, -1);
                                this.f2568m = -2;
                                break;
                            } else {
                                this.f2568m = -1;
                                break;
                            }
                        } else {
                            this.f2568m = obtainStyledAttributes.getInteger(index, this.f2569n);
                            break;
                        }
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public boolean f2570a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f2571b = 0;

        /* renamed from: c  reason: collision with root package name */
        public int f2572c = 0;

        /* renamed from: d  reason: collision with root package name */
        public float f2573d = 1.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f2574e = Float.NaN;

        public void a(d dVar) {
            this.f2570a = dVar.f2570a;
            this.f2571b = dVar.f2571b;
            this.f2573d = dVar.f2573d;
            this.f2574e = dVar.f2574e;
            this.f2572c = dVar.f2572c;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f2804w6);
            this.f2570a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == androidx.constraintlayout.widget.d.f2820y6) {
                    this.f2573d = obtainStyledAttributes.getFloat(index, this.f2573d);
                } else if (index == androidx.constraintlayout.widget.d.f2812x6) {
                    this.f2571b = obtainStyledAttributes.getInt(index, this.f2571b);
                    this.f2571b = ConstraintSet.f2482g[this.f2571b];
                } else if (index == androidx.constraintlayout.widget.d.A6) {
                    this.f2572c = obtainStyledAttributes.getInt(index, this.f2572c);
                } else if (index == androidx.constraintlayout.widget.d.f2828z6) {
                    this.f2574e = obtainStyledAttributes.getFloat(index, this.f2574e);
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: o  reason: collision with root package name */
        private static SparseIntArray f2575o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2576a = false;

        /* renamed from: b  reason: collision with root package name */
        public float f2577b = 0.0f;

        /* renamed from: c  reason: collision with root package name */
        public float f2578c = 0.0f;

        /* renamed from: d  reason: collision with root package name */
        public float f2579d = 0.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f2580e = 1.0f;

        /* renamed from: f  reason: collision with root package name */
        public float f2581f = 1.0f;

        /* renamed from: g  reason: collision with root package name */
        public float f2582g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public float f2583h = Float.NaN;

        /* renamed from: i  reason: collision with root package name */
        public int f2584i = -1;

        /* renamed from: j  reason: collision with root package name */
        public float f2585j = 0.0f;

        /* renamed from: k  reason: collision with root package name */
        public float f2586k = 0.0f;

        /* renamed from: l  reason: collision with root package name */
        public float f2587l = 0.0f;

        /* renamed from: m  reason: collision with root package name */
        public boolean f2588m = false;

        /* renamed from: n  reason: collision with root package name */
        public float f2589n = 0.0f;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2575o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.N6, 1);
            f2575o.append(androidx.constraintlayout.widget.d.O6, 2);
            f2575o.append(androidx.constraintlayout.widget.d.P6, 3);
            f2575o.append(androidx.constraintlayout.widget.d.L6, 4);
            f2575o.append(androidx.constraintlayout.widget.d.M6, 5);
            f2575o.append(androidx.constraintlayout.widget.d.H6, 6);
            f2575o.append(androidx.constraintlayout.widget.d.I6, 7);
            f2575o.append(androidx.constraintlayout.widget.d.J6, 8);
            f2575o.append(androidx.constraintlayout.widget.d.K6, 9);
            f2575o.append(androidx.constraintlayout.widget.d.Q6, 10);
            f2575o.append(androidx.constraintlayout.widget.d.R6, 11);
            f2575o.append(androidx.constraintlayout.widget.d.S6, 12);
        }

        public void a(e eVar) {
            this.f2576a = eVar.f2576a;
            this.f2577b = eVar.f2577b;
            this.f2578c = eVar.f2578c;
            this.f2579d = eVar.f2579d;
            this.f2580e = eVar.f2580e;
            this.f2581f = eVar.f2581f;
            this.f2582g = eVar.f2582g;
            this.f2583h = eVar.f2583h;
            this.f2584i = eVar.f2584i;
            this.f2585j = eVar.f2585j;
            this.f2586k = eVar.f2586k;
            this.f2587l = eVar.f2587l;
            this.f2588m = eVar.f2588m;
            this.f2589n = eVar.f2589n;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.G6);
            this.f2576a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f2575o.get(index)) {
                    case 1:
                        this.f2577b = obtainStyledAttributes.getFloat(index, this.f2577b);
                        break;
                    case 2:
                        this.f2578c = obtainStyledAttributes.getFloat(index, this.f2578c);
                        break;
                    case 3:
                        this.f2579d = obtainStyledAttributes.getFloat(index, this.f2579d);
                        break;
                    case 4:
                        this.f2580e = obtainStyledAttributes.getFloat(index, this.f2580e);
                        break;
                    case 5:
                        this.f2581f = obtainStyledAttributes.getFloat(index, this.f2581f);
                        break;
                    case 6:
                        this.f2582g = obtainStyledAttributes.getDimension(index, this.f2582g);
                        break;
                    case 7:
                        this.f2583h = obtainStyledAttributes.getDimension(index, this.f2583h);
                        break;
                    case 8:
                        this.f2585j = obtainStyledAttributes.getDimension(index, this.f2585j);
                        break;
                    case 9:
                        this.f2586k = obtainStyledAttributes.getDimension(index, this.f2586k);
                        break;
                    case 10:
                        this.f2587l = obtainStyledAttributes.getDimension(index, this.f2587l);
                        break;
                    case 11:
                        this.f2588m = true;
                        this.f2589n = obtainStyledAttributes.getDimension(index, this.f2589n);
                        break;
                    case 12:
                        this.f2584i = ConstraintSet.u(obtainStyledAttributes, index, this.f2584i);
                        break;
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    static {
        f2483h.append(androidx.constraintlayout.widget.d.f2686i0, 25);
        f2483h.append(androidx.constraintlayout.widget.d.f2694j0, 26);
        f2483h.append(androidx.constraintlayout.widget.d.f2710l0, 29);
        f2483h.append(androidx.constraintlayout.widget.d.f2718m0, 30);
        f2483h.append(androidx.constraintlayout.widget.d.f2766s0, 36);
        f2483h.append(androidx.constraintlayout.widget.d.f2758r0, 35);
        f2483h.append(androidx.constraintlayout.widget.d.P, 4);
        f2483h.append(androidx.constraintlayout.widget.d.O, 3);
        f2483h.append(androidx.constraintlayout.widget.d.K, 1);
        f2483h.append(androidx.constraintlayout.widget.d.M, 91);
        f2483h.append(androidx.constraintlayout.widget.d.L, 92);
        f2483h.append(androidx.constraintlayout.widget.d.B0, 6);
        f2483h.append(androidx.constraintlayout.widget.d.C0, 7);
        f2483h.append(androidx.constraintlayout.widget.d.W, 17);
        f2483h.append(androidx.constraintlayout.widget.d.X, 18);
        f2483h.append(androidx.constraintlayout.widget.d.Y, 19);
        f2483h.append(androidx.constraintlayout.widget.d.G, 99);
        f2483h.append(androidx.constraintlayout.widget.d.f2637c, 27);
        f2483h.append(androidx.constraintlayout.widget.d.f2726n0, 32);
        f2483h.append(androidx.constraintlayout.widget.d.f2734o0, 33);
        f2483h.append(androidx.constraintlayout.widget.d.V, 10);
        f2483h.append(androidx.constraintlayout.widget.d.U, 9);
        f2483h.append(androidx.constraintlayout.widget.d.F0, 13);
        f2483h.append(androidx.constraintlayout.widget.d.I0, 16);
        f2483h.append(androidx.constraintlayout.widget.d.G0, 14);
        f2483h.append(androidx.constraintlayout.widget.d.D0, 11);
        f2483h.append(androidx.constraintlayout.widget.d.H0, 15);
        f2483h.append(androidx.constraintlayout.widget.d.E0, 12);
        f2483h.append(androidx.constraintlayout.widget.d.f2790v0, 40);
        f2483h.append(androidx.constraintlayout.widget.d.f2670g0, 39);
        f2483h.append(androidx.constraintlayout.widget.d.f2662f0, 41);
        f2483h.append(androidx.constraintlayout.widget.d.f2782u0, 42);
        f2483h.append(androidx.constraintlayout.widget.d.f2654e0, 20);
        f2483h.append(androidx.constraintlayout.widget.d.f2774t0, 37);
        f2483h.append(androidx.constraintlayout.widget.d.T, 5);
        f2483h.append(androidx.constraintlayout.widget.d.f2678h0, 87);
        f2483h.append(androidx.constraintlayout.widget.d.f2750q0, 87);
        f2483h.append(androidx.constraintlayout.widget.d.f2702k0, 87);
        f2483h.append(androidx.constraintlayout.widget.d.N, 87);
        f2483h.append(androidx.constraintlayout.widget.d.J, 87);
        f2483h.append(androidx.constraintlayout.widget.d.f2677h, 24);
        f2483h.append(androidx.constraintlayout.widget.d.f2693j, 28);
        f2483h.append(androidx.constraintlayout.widget.d.f2789v, 31);
        f2483h.append(androidx.constraintlayout.widget.d.f2797w, 8);
        f2483h.append(androidx.constraintlayout.widget.d.f2685i, 34);
        f2483h.append(androidx.constraintlayout.widget.d.f2701k, 2);
        f2483h.append(androidx.constraintlayout.widget.d.f2661f, 23);
        f2483h.append(androidx.constraintlayout.widget.d.f2669g, 21);
        f2483h.append(androidx.constraintlayout.widget.d.f2798w0, 95);
        f2483h.append(androidx.constraintlayout.widget.d.Z, 96);
        f2483h.append(androidx.constraintlayout.widget.d.f2653e, 22);
        f2483h.append(androidx.constraintlayout.widget.d.f2709l, 43);
        f2483h.append(androidx.constraintlayout.widget.d.f2813y, 44);
        f2483h.append(androidx.constraintlayout.widget.d.f2773t, 45);
        f2483h.append(androidx.constraintlayout.widget.d.f2781u, 46);
        f2483h.append(androidx.constraintlayout.widget.d.f2765s, 60);
        f2483h.append(androidx.constraintlayout.widget.d.f2749q, 47);
        f2483h.append(androidx.constraintlayout.widget.d.f2757r, 48);
        f2483h.append(androidx.constraintlayout.widget.d.f2717m, 49);
        f2483h.append(androidx.constraintlayout.widget.d.f2725n, 50);
        f2483h.append(androidx.constraintlayout.widget.d.f2733o, 51);
        f2483h.append(androidx.constraintlayout.widget.d.f2741p, 52);
        f2483h.append(androidx.constraintlayout.widget.d.f2805x, 53);
        f2483h.append(androidx.constraintlayout.widget.d.f2806x0, 54);
        f2483h.append(androidx.constraintlayout.widget.d.f2620a0, 55);
        f2483h.append(androidx.constraintlayout.widget.d.f2814y0, 56);
        f2483h.append(androidx.constraintlayout.widget.d.f2629b0, 57);
        f2483h.append(androidx.constraintlayout.widget.d.f2822z0, 58);
        f2483h.append(androidx.constraintlayout.widget.d.f2638c0, 59);
        f2483h.append(androidx.constraintlayout.widget.d.Q, 61);
        f2483h.append(androidx.constraintlayout.widget.d.S, 62);
        f2483h.append(androidx.constraintlayout.widget.d.R, 63);
        f2483h.append(androidx.constraintlayout.widget.d.f2821z, 64);
        f2483h.append(androidx.constraintlayout.widget.d.S0, 65);
        f2483h.append(androidx.constraintlayout.widget.d.F, 66);
        f2483h.append(androidx.constraintlayout.widget.d.T0, 67);
        f2483h.append(androidx.constraintlayout.widget.d.L0, 79);
        f2483h.append(androidx.constraintlayout.widget.d.f2645d, 38);
        f2483h.append(androidx.constraintlayout.widget.d.K0, 68);
        f2483h.append(androidx.constraintlayout.widget.d.A0, 69);
        f2483h.append(androidx.constraintlayout.widget.d.f2646d0, 70);
        f2483h.append(androidx.constraintlayout.widget.d.J0, 97);
        f2483h.append(androidx.constraintlayout.widget.d.D, 71);
        f2483h.append(androidx.constraintlayout.widget.d.B, 72);
        f2483h.append(androidx.constraintlayout.widget.d.C, 73);
        f2483h.append(androidx.constraintlayout.widget.d.E, 74);
        f2483h.append(androidx.constraintlayout.widget.d.A, 75);
        f2483h.append(androidx.constraintlayout.widget.d.M0, 76);
        f2483h.append(androidx.constraintlayout.widget.d.f2742p0, 77);
        f2483h.append(androidx.constraintlayout.widget.d.U0, 78);
        f2483h.append(androidx.constraintlayout.widget.d.I, 80);
        f2483h.append(androidx.constraintlayout.widget.d.H, 81);
        f2483h.append(androidx.constraintlayout.widget.d.N0, 82);
        f2483h.append(androidx.constraintlayout.widget.d.R0, 83);
        f2483h.append(androidx.constraintlayout.widget.d.Q0, 84);
        f2483h.append(androidx.constraintlayout.widget.d.P0, 85);
        f2483h.append(androidx.constraintlayout.widget.d.O0, 86);
        f2484i.append(androidx.constraintlayout.widget.d.Y3, 6);
        f2484i.append(androidx.constraintlayout.widget.d.Y3, 7);
        f2484i.append(androidx.constraintlayout.widget.d.T2, 27);
        f2484i.append(androidx.constraintlayout.widget.d.f2633b4, 13);
        f2484i.append(androidx.constraintlayout.widget.d.f2658e4, 16);
        f2484i.append(androidx.constraintlayout.widget.d.f2642c4, 14);
        f2484i.append(androidx.constraintlayout.widget.d.Z3, 11);
        f2484i.append(androidx.constraintlayout.widget.d.f2650d4, 15);
        f2484i.append(androidx.constraintlayout.widget.d.f2624a4, 12);
        f2484i.append(androidx.constraintlayout.widget.d.S3, 40);
        f2484i.append(androidx.constraintlayout.widget.d.L3, 39);
        f2484i.append(androidx.constraintlayout.widget.d.K3, 41);
        f2484i.append(androidx.constraintlayout.widget.d.R3, 42);
        f2484i.append(androidx.constraintlayout.widget.d.J3, 20);
        f2484i.append(androidx.constraintlayout.widget.d.Q3, 37);
        f2484i.append(androidx.constraintlayout.widget.d.D3, 5);
        f2484i.append(androidx.constraintlayout.widget.d.M3, 87);
        f2484i.append(androidx.constraintlayout.widget.d.P3, 87);
        f2484i.append(androidx.constraintlayout.widget.d.N3, 87);
        f2484i.append(androidx.constraintlayout.widget.d.A3, 87);
        f2484i.append(androidx.constraintlayout.widget.d.f2825z3, 87);
        f2484i.append(androidx.constraintlayout.widget.d.Y2, 24);
        f2484i.append(androidx.constraintlayout.widget.d.f2623a3, 28);
        f2484i.append(androidx.constraintlayout.widget.d.f2721m3, 31);
        f2484i.append(androidx.constraintlayout.widget.d.f2729n3, 8);
        f2484i.append(androidx.constraintlayout.widget.d.Z2, 34);
        f2484i.append(androidx.constraintlayout.widget.d.f2632b3, 2);
        f2484i.append(androidx.constraintlayout.widget.d.W2, 23);
        f2484i.append(androidx.constraintlayout.widget.d.X2, 21);
        f2484i.append(androidx.constraintlayout.widget.d.T3, 95);
        f2484i.append(androidx.constraintlayout.widget.d.E3, 96);
        f2484i.append(androidx.constraintlayout.widget.d.V2, 22);
        f2484i.append(androidx.constraintlayout.widget.d.f2641c3, 43);
        f2484i.append(androidx.constraintlayout.widget.d.f2745p3, 44);
        f2484i.append(androidx.constraintlayout.widget.d.f2705k3, 45);
        f2484i.append(androidx.constraintlayout.widget.d.f2713l3, 46);
        f2484i.append(androidx.constraintlayout.widget.d.f2697j3, 60);
        f2484i.append(androidx.constraintlayout.widget.d.f2681h3, 47);
        f2484i.append(androidx.constraintlayout.widget.d.f2689i3, 48);
        f2484i.append(androidx.constraintlayout.widget.d.f2649d3, 49);
        f2484i.append(androidx.constraintlayout.widget.d.f2657e3, 50);
        f2484i.append(androidx.constraintlayout.widget.d.f2665f3, 51);
        f2484i.append(androidx.constraintlayout.widget.d.f2673g3, 52);
        f2484i.append(androidx.constraintlayout.widget.d.f2737o3, 53);
        f2484i.append(androidx.constraintlayout.widget.d.U3, 54);
        f2484i.append(androidx.constraintlayout.widget.d.F3, 55);
        f2484i.append(androidx.constraintlayout.widget.d.V3, 56);
        f2484i.append(androidx.constraintlayout.widget.d.G3, 57);
        f2484i.append(androidx.constraintlayout.widget.d.W3, 58);
        f2484i.append(androidx.constraintlayout.widget.d.H3, 59);
        f2484i.append(androidx.constraintlayout.widget.d.C3, 62);
        f2484i.append(androidx.constraintlayout.widget.d.B3, 63);
        f2484i.append(androidx.constraintlayout.widget.d.f2753q3, 64);
        f2484i.append(androidx.constraintlayout.widget.d.f2746p4, 65);
        f2484i.append(androidx.constraintlayout.widget.d.f2801w3, 66);
        f2484i.append(androidx.constraintlayout.widget.d.f2754q4, 67);
        f2484i.append(androidx.constraintlayout.widget.d.f2682h4, 79);
        f2484i.append(androidx.constraintlayout.widget.d.U2, 38);
        f2484i.append(androidx.constraintlayout.widget.d.f2690i4, 98);
        f2484i.append(androidx.constraintlayout.widget.d.f2674g4, 68);
        f2484i.append(androidx.constraintlayout.widget.d.X3, 69);
        f2484i.append(androidx.constraintlayout.widget.d.I3, 70);
        f2484i.append(androidx.constraintlayout.widget.d.f2785u3, 71);
        f2484i.append(androidx.constraintlayout.widget.d.f2769s3, 72);
        f2484i.append(androidx.constraintlayout.widget.d.f2777t3, 73);
        f2484i.append(androidx.constraintlayout.widget.d.f2793v3, 74);
        f2484i.append(androidx.constraintlayout.widget.d.f2761r3, 75);
        f2484i.append(androidx.constraintlayout.widget.d.f2698j4, 76);
        f2484i.append(androidx.constraintlayout.widget.d.O3, 77);
        f2484i.append(androidx.constraintlayout.widget.d.f2762r4, 78);
        f2484i.append(androidx.constraintlayout.widget.d.f2817y3, 80);
        f2484i.append(androidx.constraintlayout.widget.d.f2809x3, 81);
        f2484i.append(androidx.constraintlayout.widget.d.f2706k4, 82);
        f2484i.append(androidx.constraintlayout.widget.d.f2738o4, 83);
        f2484i.append(androidx.constraintlayout.widget.d.f2730n4, 84);
        f2484i.append(androidx.constraintlayout.widget.d.f2722m4, 85);
        f2484i.append(androidx.constraintlayout.widget.d.f2714l4, 86);
        f2484i.append(androidx.constraintlayout.widget.d.f2666f4, 97);
    }

    private String E(int i10) {
        switch (i10) {
            case 1:
                return ViewProps.LEFT;
            case 2:
                return ViewProps.RIGHT;
            case 3:
                return ViewProps.TOP;
            case 4:
                return ViewProps.BOTTOM;
            case 5:
                return "baseline";
            case 6:
                return ViewProps.START;
            case 7:
                return ViewProps.END;
            default:
                return "undefined";
        }
    }

    private int[] o(View view, String str) {
        int i10;
        Object designInformation;
        String[] split = str.split(",");
        Context context = view.getContext();
        int[] iArr = new int[split.length];
        int i11 = 0;
        int i12 = 0;
        while (i11 < split.length) {
            String trim = split[i11].trim();
            try {
                i10 = androidx.constraintlayout.widget.c.class.getField(trim).getInt(null);
            } catch (Exception unused) {
                i10 = 0;
            }
            if (i10 == 0) {
                i10 = context.getResources().getIdentifier(trim, StackTraceHelper.ID_KEY, context.getPackageName());
            }
            if (i10 == 0 && view.isInEditMode() && (view.getParent() instanceof ConstraintLayout) && (designInformation = ((ConstraintLayout) view.getParent()).getDesignInformation(0, trim)) != null && (designInformation instanceof Integer)) {
                i10 = ((Integer) designInformation).intValue();
            }
            iArr[i12] = i10;
            i11++;
            i12++;
        }
        if (i12 != split.length) {
            return Arrays.copyOf(iArr, i12);
        }
        return iArr;
    }

    private a q(Context context, AttributeSet attributeSet, boolean z10) {
        int[] iArr;
        a aVar = new a();
        if (z10) {
            iArr = androidx.constraintlayout.widget.d.S2;
        } else {
            iArr = androidx.constraintlayout.widget.d.f2628b;
        }
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, iArr);
        y(aVar, obtainStyledAttributes, z10);
        obtainStyledAttributes.recycle();
        return aVar;
    }

    private a r(int i10) {
        if (!this.f2490f.containsKey(Integer.valueOf(i10))) {
            this.f2490f.put(Integer.valueOf(i10), new a());
        }
        return (a) this.f2490f.get(Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int u(TypedArray typedArray, int i10, int i11) {
        int resourceId = typedArray.getResourceId(i10, i11);
        if (resourceId == -1) {
            return typedArray.getInt(i10, -1);
        }
        return resourceId;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:21:0x0034  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0042  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static void v(java.lang.Object r4, android.content.res.TypedArray r5, int r6, int r7) {
        /*
            if (r4 != 0) goto L4
            goto L71
        L4:
            android.util.TypedValue r0 = r5.peekValue(r6)
            int r0 = r0.type
            r1 = 3
            if (r0 == r1) goto L72
            r1 = 5
            r2 = 0
            if (r0 == r1) goto L2b
            int r5 = r5.getInt(r6, r2)
            r6 = -4
            r0 = -2
            if (r5 == r6) goto L27
            r6 = -3
            if (r5 == r6) goto L21
            if (r5 == r0) goto L23
            r6 = -1
            if (r5 == r6) goto L23
        L21:
            r5 = r2
            goto L30
        L23:
            r3 = r2
            r2 = r5
            r5 = r3
            goto L30
        L27:
            r2 = 1
            r5 = r2
            r2 = r0
            goto L30
        L2b:
            int r5 = r5.getDimensionPixelSize(r6, r2)
            goto L23
        L30:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintLayout.LayoutParams
            if (r6 == 0) goto L42
            androidx.constraintlayout.widget.ConstraintLayout$LayoutParams r4 = (androidx.constraintlayout.widget.ConstraintLayout.LayoutParams) r4
            if (r7 != 0) goto L3d
            r4.width = r2
            r4.f2407a0 = r5
            return
        L3d:
            r4.height = r2
            r4.f2409b0 = r5
            return
        L42:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.b
            if (r6 == 0) goto L54
            androidx.constraintlayout.widget.ConstraintSet$b r4 = (androidx.constraintlayout.widget.ConstraintSet.b) r4
            if (r7 != 0) goto L4f
            r4.f2518d = r2
            r4.f2539n0 = r5
            return
        L4f:
            r4.f2520e = r2
            r4.f2541o0 = r5
            return
        L54:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.a.C0027a
            if (r6 == 0) goto L71
            androidx.constraintlayout.widget.ConstraintSet$a$a r4 = (androidx.constraintlayout.widget.ConstraintSet.a.C0027a) r4
            if (r7 != 0) goto L67
            r6 = 23
            r4.b(r6, r2)
            r6 = 80
            r4.d(r6, r5)
            return
        L67:
            r6 = 21
            r4.b(r6, r2)
            r6 = 81
            r4.d(r6, r5)
        L71:
            return
        L72:
            java.lang.String r5 = r5.getString(r6)
            w(r4, r5, r7)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.widget.ConstraintSet.v(java.lang.Object, android.content.res.TypedArray, int, int):void");
    }

    static void w(Object obj, String str, int i10) {
        if (str != null) {
            int indexOf = str.indexOf(61);
            int length = str.length();
            if (indexOf > 0 && indexOf < length - 1) {
                String substring = str.substring(0, indexOf);
                String substring2 = str.substring(indexOf + 1);
                if (substring2.length() > 0) {
                    String trim = substring.trim();
                    String trim2 = substring2.trim();
                    if ("ratio".equalsIgnoreCase(trim)) {
                        if (obj instanceof ConstraintLayout.LayoutParams) {
                            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) obj;
                            if (i10 == 0) {
                                ((ViewGroup.MarginLayoutParams) layoutParams).width = 0;
                            } else {
                                ((ViewGroup.MarginLayoutParams) layoutParams).height = 0;
                            }
                            x(layoutParams, trim2);
                            return;
                        } else if (obj instanceof b) {
                            ((b) obj).A = trim2;
                            return;
                        } else if (obj instanceof a.C0027a) {
                            ((a.C0027a) obj).c(5, trim2);
                            return;
                        } else {
                            return;
                        }
                    }
                    try {
                        if ("weight".equalsIgnoreCase(trim)) {
                            float parseFloat = Float.parseFloat(trim2);
                            if (obj instanceof ConstraintLayout.LayoutParams) {
                                ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) obj;
                                if (i10 == 0) {
                                    ((ViewGroup.MarginLayoutParams) layoutParams2).width = 0;
                                    layoutParams2.L = parseFloat;
                                    return;
                                }
                                ((ViewGroup.MarginLayoutParams) layoutParams2).height = 0;
                                layoutParams2.M = parseFloat;
                            } else if (obj instanceof b) {
                                b bVar = (b) obj;
                                if (i10 == 0) {
                                    bVar.f2518d = 0;
                                    bVar.W = parseFloat;
                                    return;
                                }
                                bVar.f2520e = 0;
                                bVar.V = parseFloat;
                            } else if (obj instanceof a.C0027a) {
                                a.C0027a c0027a = (a.C0027a) obj;
                                if (i10 == 0) {
                                    c0027a.b(23, 0);
                                    c0027a.a(39, parseFloat);
                                    return;
                                }
                                c0027a.b(21, 0);
                                c0027a.a(40, parseFloat);
                            }
                        } else if ("parent".equalsIgnoreCase(trim)) {
                            float max = Math.max(0.0f, Math.min(1.0f, Float.parseFloat(trim2)));
                            if (obj instanceof ConstraintLayout.LayoutParams) {
                                ConstraintLayout.LayoutParams layoutParams3 = (ConstraintLayout.LayoutParams) obj;
                                if (i10 == 0) {
                                    ((ViewGroup.MarginLayoutParams) layoutParams3).width = 0;
                                    layoutParams3.V = max;
                                    layoutParams3.P = 2;
                                    return;
                                }
                                ((ViewGroup.MarginLayoutParams) layoutParams3).height = 0;
                                layoutParams3.W = max;
                                layoutParams3.Q = 2;
                            } else if (obj instanceof b) {
                                b bVar2 = (b) obj;
                                if (i10 == 0) {
                                    bVar2.f2518d = 0;
                                    bVar2.f2523f0 = max;
                                    bVar2.Z = 2;
                                    return;
                                }
                                bVar2.f2520e = 0;
                                bVar2.f2525g0 = max;
                                bVar2.f2513a0 = 2;
                            } else if (obj instanceof a.C0027a) {
                                a.C0027a c0027a2 = (a.C0027a) obj;
                                if (i10 == 0) {
                                    c0027a2.b(23, 0);
                                    c0027a2.b(54, 2);
                                    return;
                                }
                                c0027a2.b(21, 0);
                                c0027a2.b(55, 2);
                            }
                        }
                    } catch (NumberFormatException unused) {
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void x(ConstraintLayout.LayoutParams layoutParams, String str) {
        float f10 = Float.NaN;
        int i10 = -1;
        if (str != null) {
            int length = str.length();
            int indexOf = str.indexOf(44);
            int i11 = 0;
            if (indexOf > 0 && indexOf < length - 1) {
                String substring = str.substring(0, indexOf);
                if (substring.equalsIgnoreCase("W")) {
                    i10 = 0;
                } else if (substring.equalsIgnoreCase("H")) {
                    i10 = 1;
                }
                i11 = indexOf + 1;
            }
            int indexOf2 = str.indexOf(58);
            try {
                if (indexOf2 >= 0 && indexOf2 < length - 1) {
                    String substring2 = str.substring(i11, indexOf2);
                    String substring3 = str.substring(indexOf2 + 1);
                    if (substring2.length() > 0 && substring3.length() > 0) {
                        float parseFloat = Float.parseFloat(substring2);
                        float parseFloat2 = Float.parseFloat(substring3);
                        if (parseFloat > 0.0f && parseFloat2 > 0.0f) {
                            f10 = i10 == 1 ? Math.abs(parseFloat2 / parseFloat) : Math.abs(parseFloat / parseFloat2);
                        }
                    }
                } else {
                    String substring4 = str.substring(i11);
                    if (substring4.length() > 0) {
                        f10 = Float.parseFloat(substring4);
                    }
                }
            } catch (NumberFormatException unused) {
            }
        }
        layoutParams.I = str;
        layoutParams.J = f10;
        layoutParams.K = i10;
    }

    private void y(a aVar, TypedArray typedArray, boolean z10) {
        if (z10) {
            z(aVar, typedArray);
            return;
        }
        int indexCount = typedArray.getIndexCount();
        for (int i10 = 0; i10 < indexCount; i10++) {
            int index = typedArray.getIndex(i10);
            if (index != androidx.constraintlayout.widget.d.f2645d && androidx.constraintlayout.widget.d.f2789v != index && androidx.constraintlayout.widget.d.f2797w != index) {
                aVar.f2494d.f2556a = true;
                aVar.f2495e.f2514b = true;
                aVar.f2493c.f2570a = true;
                aVar.f2496f.f2576a = true;
            }
            switch (f2483h.get(index)) {
                case 1:
                    b bVar = aVar.f2495e;
                    bVar.f2546r = u(typedArray, index, bVar.f2546r);
                    break;
                case 2:
                    b bVar2 = aVar.f2495e;
                    bVar2.K = typedArray.getDimensionPixelSize(index, bVar2.K);
                    break;
                case 3:
                    b bVar3 = aVar.f2495e;
                    bVar3.f2544q = u(typedArray, index, bVar3.f2544q);
                    break;
                case 4:
                    b bVar4 = aVar.f2495e;
                    bVar4.f2542p = u(typedArray, index, bVar4.f2542p);
                    break;
                case 5:
                    aVar.f2495e.A = typedArray.getString(index);
                    break;
                case 6:
                    b bVar5 = aVar.f2495e;
                    bVar5.E = typedArray.getDimensionPixelOffset(index, bVar5.E);
                    break;
                case 7:
                    b bVar6 = aVar.f2495e;
                    bVar6.F = typedArray.getDimensionPixelOffset(index, bVar6.F);
                    break;
                case 8:
                    b bVar7 = aVar.f2495e;
                    bVar7.L = typedArray.getDimensionPixelSize(index, bVar7.L);
                    break;
                case 9:
                    b bVar8 = aVar.f2495e;
                    bVar8.f2552x = u(typedArray, index, bVar8.f2552x);
                    break;
                case 10:
                    b bVar9 = aVar.f2495e;
                    bVar9.f2551w = u(typedArray, index, bVar9.f2551w);
                    break;
                case 11:
                    b bVar10 = aVar.f2495e;
                    bVar10.R = typedArray.getDimensionPixelSize(index, bVar10.R);
                    break;
                case 12:
                    b bVar11 = aVar.f2495e;
                    bVar11.S = typedArray.getDimensionPixelSize(index, bVar11.S);
                    break;
                case 13:
                    b bVar12 = aVar.f2495e;
                    bVar12.O = typedArray.getDimensionPixelSize(index, bVar12.O);
                    break;
                case 14:
                    b bVar13 = aVar.f2495e;
                    bVar13.Q = typedArray.getDimensionPixelSize(index, bVar13.Q);
                    break;
                case 15:
                    b bVar14 = aVar.f2495e;
                    bVar14.T = typedArray.getDimensionPixelSize(index, bVar14.T);
                    break;
                case 16:
                    b bVar15 = aVar.f2495e;
                    bVar15.P = typedArray.getDimensionPixelSize(index, bVar15.P);
                    break;
                case 17:
                    b bVar16 = aVar.f2495e;
                    bVar16.f2522f = typedArray.getDimensionPixelOffset(index, bVar16.f2522f);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    b bVar17 = aVar.f2495e;
                    bVar17.f2524g = typedArray.getDimensionPixelOffset(index, bVar17.f2524g);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    b bVar18 = aVar.f2495e;
                    bVar18.f2526h = typedArray.getFloat(index, bVar18.f2526h);
                    break;
                case 20:
                    b bVar19 = aVar.f2495e;
                    bVar19.f2553y = typedArray.getFloat(index, bVar19.f2553y);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    b bVar20 = aVar.f2495e;
                    bVar20.f2520e = typedArray.getLayoutDimension(index, bVar20.f2520e);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    d dVar = aVar.f2493c;
                    dVar.f2571b = typedArray.getInt(index, dVar.f2571b);
                    d dVar2 = aVar.f2493c;
                    dVar2.f2571b = f2482g[dVar2.f2571b];
                    break;
                case 23:
                    b bVar21 = aVar.f2495e;
                    bVar21.f2518d = typedArray.getLayoutDimension(index, bVar21.f2518d);
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    b bVar22 = aVar.f2495e;
                    bVar22.H = typedArray.getDimensionPixelSize(index, bVar22.H);
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    b bVar23 = aVar.f2495e;
                    bVar23.f2530j = u(typedArray, index, bVar23.f2530j);
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    b bVar24 = aVar.f2495e;
                    bVar24.f2532k = u(typedArray, index, bVar24.f2532k);
                    break;
                case 27:
                    b bVar25 = aVar.f2495e;
                    bVar25.G = typedArray.getInt(index, bVar25.G);
                    break;
                case 28:
                    b bVar26 = aVar.f2495e;
                    bVar26.I = typedArray.getDimensionPixelSize(index, bVar26.I);
                    break;
                case 29:
                    b bVar27 = aVar.f2495e;
                    bVar27.f2534l = u(typedArray, index, bVar27.f2534l);
                    break;
                case 30:
                    b bVar28 = aVar.f2495e;
                    bVar28.f2536m = u(typedArray, index, bVar28.f2536m);
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    b bVar29 = aVar.f2495e;
                    bVar29.M = typedArray.getDimensionPixelSize(index, bVar29.M);
                    break;
                case 32:
                    b bVar30 = aVar.f2495e;
                    bVar30.f2549u = u(typedArray, index, bVar30.f2549u);
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    b bVar31 = aVar.f2495e;
                    bVar31.f2550v = u(typedArray, index, bVar31.f2550v);
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    b bVar32 = aVar.f2495e;
                    bVar32.J = typedArray.getDimensionPixelSize(index, bVar32.J);
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    b bVar33 = aVar.f2495e;
                    bVar33.f2540o = u(typedArray, index, bVar33.f2540o);
                    break;
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    b bVar34 = aVar.f2495e;
                    bVar34.f2538n = u(typedArray, index, bVar34.f2538n);
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    b bVar35 = aVar.f2495e;
                    bVar35.f2554z = typedArray.getFloat(index, bVar35.f2554z);
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    aVar.f2491a = typedArray.getResourceId(index, aVar.f2491a);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    b bVar36 = aVar.f2495e;
                    bVar36.W = typedArray.getFloat(index, bVar36.W);
                    break;
                case 40:
                    b bVar37 = aVar.f2495e;
                    bVar37.V = typedArray.getFloat(index, bVar37.V);
                    break;
                case 41:
                    b bVar38 = aVar.f2495e;
                    bVar38.X = typedArray.getInt(index, bVar38.X);
                    break;
                case 42:
                    b bVar39 = aVar.f2495e;
                    bVar39.Y = typedArray.getInt(index, bVar39.Y);
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    d dVar3 = aVar.f2493c;
                    dVar3.f2573d = typedArray.getFloat(index, dVar3.f2573d);
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    e eVar = aVar.f2496f;
                    eVar.f2588m = true;
                    eVar.f2589n = typedArray.getDimension(index, eVar.f2589n);
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    e eVar2 = aVar.f2496f;
                    eVar2.f2578c = typedArray.getFloat(index, eVar2.f2578c);
                    break;
                case 46:
                    e eVar3 = aVar.f2496f;
                    eVar3.f2579d = typedArray.getFloat(index, eVar3.f2579d);
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    e eVar4 = aVar.f2496f;
                    eVar4.f2580e = typedArray.getFloat(index, eVar4.f2580e);
                    break;
                case 48:
                    e eVar5 = aVar.f2496f;
                    eVar5.f2581f = typedArray.getFloat(index, eVar5.f2581f);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    e eVar6 = aVar.f2496f;
                    eVar6.f2582g = typedArray.getDimension(index, eVar6.f2582g);
                    break;
                case 50:
                    e eVar7 = aVar.f2496f;
                    eVar7.f2583h = typedArray.getDimension(index, eVar7.f2583h);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    e eVar8 = aVar.f2496f;
                    eVar8.f2585j = typedArray.getDimension(index, eVar8.f2585j);
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    e eVar9 = aVar.f2496f;
                    eVar9.f2586k = typedArray.getDimension(index, eVar9.f2586k);
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    e eVar10 = aVar.f2496f;
                    eVar10.f2587l = typedArray.getDimension(index, eVar10.f2587l);
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    b bVar40 = aVar.f2495e;
                    bVar40.Z = typedArray.getInt(index, bVar40.Z);
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    b bVar41 = aVar.f2495e;
                    bVar41.f2513a0 = typedArray.getInt(index, bVar41.f2513a0);
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    b bVar42 = aVar.f2495e;
                    bVar42.f2515b0 = typedArray.getDimensionPixelSize(index, bVar42.f2515b0);
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    b bVar43 = aVar.f2495e;
                    bVar43.f2517c0 = typedArray.getDimensionPixelSize(index, bVar43.f2517c0);
                    break;
                case 58:
                    b bVar44 = aVar.f2495e;
                    bVar44.f2519d0 = typedArray.getDimensionPixelSize(index, bVar44.f2519d0);
                    break;
                case 59:
                    b bVar45 = aVar.f2495e;
                    bVar45.f2521e0 = typedArray.getDimensionPixelSize(index, bVar45.f2521e0);
                    break;
                case 60:
                    e eVar11 = aVar.f2496f;
                    eVar11.f2577b = typedArray.getFloat(index, eVar11.f2577b);
                    break;
                case 61:
                    b bVar46 = aVar.f2495e;
                    bVar46.B = u(typedArray, index, bVar46.B);
                    break;
                case 62:
                    b bVar47 = aVar.f2495e;
                    bVar47.C = typedArray.getDimensionPixelSize(index, bVar47.C);
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    b bVar48 = aVar.f2495e;
                    bVar48.D = typedArray.getFloat(index, bVar48.D);
                    break;
                case 64:
                    c cVar = aVar.f2494d;
                    cVar.f2557b = u(typedArray, index, cVar.f2557b);
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        aVar.f2494d.f2559d = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2494d.f2559d = i1.a.f28329c[typedArray.getInteger(index, 0)];
                        break;
                    }
                case 66:
                    aVar.f2494d.f2561f = typedArray.getInt(index, 0);
                    break;
                case 67:
                    c cVar2 = aVar.f2494d;
                    cVar2.f2564i = typedArray.getFloat(index, cVar2.f2564i);
                    break;
                case 68:
                    d dVar4 = aVar.f2493c;
                    dVar4.f2574e = typedArray.getFloat(index, dVar4.f2574e);
                    break;
                case 69:
                    aVar.f2495e.f2523f0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 70:
                    aVar.f2495e.f2525g0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    b bVar49 = aVar.f2495e;
                    bVar49.f2527h0 = typedArray.getInt(index, bVar49.f2527h0);
                    break;
                case 73:
                    b bVar50 = aVar.f2495e;
                    bVar50.f2529i0 = typedArray.getDimensionPixelSize(index, bVar50.f2529i0);
                    break;
                case 74:
                    aVar.f2495e.f2535l0 = typedArray.getString(index);
                    break;
                case 75:
                    b bVar51 = aVar.f2495e;
                    bVar51.f2543p0 = typedArray.getBoolean(index, bVar51.f2543p0);
                    break;
                case 76:
                    c cVar3 = aVar.f2494d;
                    cVar3.f2560e = typedArray.getInt(index, cVar3.f2560e);
                    break;
                case 77:
                    aVar.f2495e.f2537m0 = typedArray.getString(index);
                    break;
                case 78:
                    d dVar5 = aVar.f2493c;
                    dVar5.f2572c = typedArray.getInt(index, dVar5.f2572c);
                    break;
                case 79:
                    c cVar4 = aVar.f2494d;
                    cVar4.f2562g = typedArray.getFloat(index, cVar4.f2562g);
                    break;
                case 80:
                    b bVar52 = aVar.f2495e;
                    bVar52.f2539n0 = typedArray.getBoolean(index, bVar52.f2539n0);
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    b bVar53 = aVar.f2495e;
                    bVar53.f2541o0 = typedArray.getBoolean(index, bVar53.f2541o0);
                    break;
                case 82:
                    c cVar5 = aVar.f2494d;
                    cVar5.f2558c = typedArray.getInteger(index, cVar5.f2558c);
                    break;
                case 83:
                    e eVar12 = aVar.f2496f;
                    eVar12.f2584i = u(typedArray, index, eVar12.f2584i);
                    break;
                case 84:
                    c cVar6 = aVar.f2494d;
                    cVar6.f2566k = typedArray.getInteger(index, cVar6.f2566k);
                    break;
                case 85:
                    c cVar7 = aVar.f2494d;
                    cVar7.f2565j = typedArray.getFloat(index, cVar7.f2565j);
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2494d.f2569n = typedArray.getResourceId(index, -1);
                        c cVar8 = aVar.f2494d;
                        if (cVar8.f2569n != -1) {
                            cVar8.f2568m = -2;
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2494d.f2567l = typedArray.getString(index);
                        if (aVar.f2494d.f2567l.indexOf("/") > 0) {
                            aVar.f2494d.f2569n = typedArray.getResourceId(index, -1);
                            aVar.f2494d.f2568m = -2;
                            break;
                        } else {
                            aVar.f2494d.f2568m = -1;
                            break;
                        }
                    } else {
                        c cVar9 = aVar.f2494d;
                        cVar9.f2568m = typedArray.getInteger(index, cVar9.f2569n);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2483h.get(index));
                    break;
                case 88:
                case 89:
                case 90:
                default:
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2483h.get(index));
                    break;
                case 91:
                    b bVar54 = aVar.f2495e;
                    bVar54.f2547s = u(typedArray, index, bVar54.f2547s);
                    break;
                case 92:
                    b bVar55 = aVar.f2495e;
                    bVar55.f2548t = u(typedArray, index, bVar55.f2548t);
                    break;
                case 93:
                    b bVar56 = aVar.f2495e;
                    bVar56.N = typedArray.getDimensionPixelSize(index, bVar56.N);
                    break;
                case 94:
                    b bVar57 = aVar.f2495e;
                    bVar57.U = typedArray.getDimensionPixelSize(index, bVar57.U);
                    break;
                case 95:
                    v(aVar.f2495e, typedArray, index, 0);
                    break;
                case 96:
                    v(aVar.f2495e, typedArray, index, 1);
                    break;
                case 97:
                    b bVar58 = aVar.f2495e;
                    bVar58.f2545q0 = typedArray.getInt(index, bVar58.f2545q0);
                    break;
            }
        }
        b bVar59 = aVar.f2495e;
        if (bVar59.f2535l0 != null) {
            bVar59.f2533k0 = null;
        }
    }

    private static void z(a aVar, TypedArray typedArray) {
        int indexCount = typedArray.getIndexCount();
        a.C0027a c0027a = new a.C0027a();
        aVar.f2498h = c0027a;
        aVar.f2494d.f2556a = false;
        aVar.f2495e.f2514b = false;
        aVar.f2493c.f2570a = false;
        aVar.f2496f.f2576a = false;
        for (int i10 = 0; i10 < indexCount; i10++) {
            int index = typedArray.getIndex(i10);
            switch (f2484i.get(index)) {
                case 2:
                    c0027a.b(2, typedArray.getDimensionPixelSize(index, aVar.f2495e.K));
                    break;
                case 3:
                case 4:
                case 9:
                case 10:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 29:
                case 30:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case 61:
                case 88:
                case 89:
                case 90:
                case 91:
                case 92:
                default:
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2483h.get(index));
                    break;
                case 5:
                    c0027a.c(5, typedArray.getString(index));
                    break;
                case 6:
                    c0027a.b(6, typedArray.getDimensionPixelOffset(index, aVar.f2495e.E));
                    break;
                case 7:
                    c0027a.b(7, typedArray.getDimensionPixelOffset(index, aVar.f2495e.F));
                    break;
                case 8:
                    c0027a.b(8, typedArray.getDimensionPixelSize(index, aVar.f2495e.L));
                    break;
                case 11:
                    c0027a.b(11, typedArray.getDimensionPixelSize(index, aVar.f2495e.R));
                    break;
                case 12:
                    c0027a.b(12, typedArray.getDimensionPixelSize(index, aVar.f2495e.S));
                    break;
                case 13:
                    c0027a.b(13, typedArray.getDimensionPixelSize(index, aVar.f2495e.O));
                    break;
                case 14:
                    c0027a.b(14, typedArray.getDimensionPixelSize(index, aVar.f2495e.Q));
                    break;
                case 15:
                    c0027a.b(15, typedArray.getDimensionPixelSize(index, aVar.f2495e.T));
                    break;
                case 16:
                    c0027a.b(16, typedArray.getDimensionPixelSize(index, aVar.f2495e.P));
                    break;
                case 17:
                    c0027a.b(17, typedArray.getDimensionPixelOffset(index, aVar.f2495e.f2522f));
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    c0027a.b(18, typedArray.getDimensionPixelOffset(index, aVar.f2495e.f2524g));
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    c0027a.a(19, typedArray.getFloat(index, aVar.f2495e.f2526h));
                    break;
                case 20:
                    c0027a.a(20, typedArray.getFloat(index, aVar.f2495e.f2553y));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0027a.b(21, typedArray.getLayoutDimension(index, aVar.f2495e.f2520e));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0027a.b(22, f2482g[typedArray.getInt(index, aVar.f2493c.f2571b)]);
                    break;
                case 23:
                    c0027a.b(23, typedArray.getLayoutDimension(index, aVar.f2495e.f2518d));
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    c0027a.b(24, typedArray.getDimensionPixelSize(index, aVar.f2495e.H));
                    break;
                case 27:
                    c0027a.b(27, typedArray.getInt(index, aVar.f2495e.G));
                    break;
                case 28:
                    c0027a.b(28, typedArray.getDimensionPixelSize(index, aVar.f2495e.I));
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    c0027a.b(31, typedArray.getDimensionPixelSize(index, aVar.f2495e.M));
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    c0027a.b(34, typedArray.getDimensionPixelSize(index, aVar.f2495e.J));
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    c0027a.a(37, typedArray.getFloat(index, aVar.f2495e.f2554z));
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    int resourceId = typedArray.getResourceId(index, aVar.f2491a);
                    aVar.f2491a = resourceId;
                    c0027a.b(38, resourceId);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    c0027a.a(39, typedArray.getFloat(index, aVar.f2495e.W));
                    break;
                case 40:
                    c0027a.a(40, typedArray.getFloat(index, aVar.f2495e.V));
                    break;
                case 41:
                    c0027a.b(41, typedArray.getInt(index, aVar.f2495e.X));
                    break;
                case 42:
                    c0027a.b(42, typedArray.getInt(index, aVar.f2495e.Y));
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    c0027a.a(43, typedArray.getFloat(index, aVar.f2493c.f2573d));
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    c0027a.d(44, true);
                    c0027a.a(44, typedArray.getDimension(index, aVar.f2496f.f2589n));
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    c0027a.a(45, typedArray.getFloat(index, aVar.f2496f.f2578c));
                    break;
                case 46:
                    c0027a.a(46, typedArray.getFloat(index, aVar.f2496f.f2579d));
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    c0027a.a(47, typedArray.getFloat(index, aVar.f2496f.f2580e));
                    break;
                case 48:
                    c0027a.a(48, typedArray.getFloat(index, aVar.f2496f.f2581f));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    c0027a.a(49, typedArray.getDimension(index, aVar.f2496f.f2582g));
                    break;
                case 50:
                    c0027a.a(50, typedArray.getDimension(index, aVar.f2496f.f2583h));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    c0027a.a(51, typedArray.getDimension(index, aVar.f2496f.f2585j));
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    c0027a.a(52, typedArray.getDimension(index, aVar.f2496f.f2586k));
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    c0027a.a(53, typedArray.getDimension(index, aVar.f2496f.f2587l));
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    c0027a.b(54, typedArray.getInt(index, aVar.f2495e.Z));
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    c0027a.b(55, typedArray.getInt(index, aVar.f2495e.f2513a0));
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    c0027a.b(56, typedArray.getDimensionPixelSize(index, aVar.f2495e.f2515b0));
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    c0027a.b(57, typedArray.getDimensionPixelSize(index, aVar.f2495e.f2517c0));
                    break;
                case 58:
                    c0027a.b(58, typedArray.getDimensionPixelSize(index, aVar.f2495e.f2519d0));
                    break;
                case 59:
                    c0027a.b(59, typedArray.getDimensionPixelSize(index, aVar.f2495e.f2521e0));
                    break;
                case 60:
                    c0027a.a(60, typedArray.getFloat(index, aVar.f2496f.f2577b));
                    break;
                case 62:
                    c0027a.b(62, typedArray.getDimensionPixelSize(index, aVar.f2495e.C));
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    c0027a.a(63, typedArray.getFloat(index, aVar.f2495e.D));
                    break;
                case 64:
                    c0027a.b(64, u(typedArray, index, aVar.f2494d.f2557b));
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        c0027a.c(65, typedArray.getString(index));
                        break;
                    } else {
                        c0027a.c(65, i1.a.f28329c[typedArray.getInteger(index, 0)]);
                        break;
                    }
                case 66:
                    c0027a.b(66, typedArray.getInt(index, 0));
                    break;
                case 67:
                    c0027a.a(67, typedArray.getFloat(index, aVar.f2494d.f2564i));
                    break;
                case 68:
                    c0027a.a(68, typedArray.getFloat(index, aVar.f2493c.f2574e));
                    break;
                case 69:
                    c0027a.a(69, typedArray.getFloat(index, 1.0f));
                    break;
                case 70:
                    c0027a.a(70, typedArray.getFloat(index, 1.0f));
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    c0027a.b(72, typedArray.getInt(index, aVar.f2495e.f2527h0));
                    break;
                case 73:
                    c0027a.b(73, typedArray.getDimensionPixelSize(index, aVar.f2495e.f2529i0));
                    break;
                case 74:
                    c0027a.c(74, typedArray.getString(index));
                    break;
                case 75:
                    c0027a.d(75, typedArray.getBoolean(index, aVar.f2495e.f2543p0));
                    break;
                case 76:
                    c0027a.b(76, typedArray.getInt(index, aVar.f2494d.f2560e));
                    break;
                case 77:
                    c0027a.c(77, typedArray.getString(index));
                    break;
                case 78:
                    c0027a.b(78, typedArray.getInt(index, aVar.f2493c.f2572c));
                    break;
                case 79:
                    c0027a.a(79, typedArray.getFloat(index, aVar.f2494d.f2562g));
                    break;
                case 80:
                    c0027a.d(80, typedArray.getBoolean(index, aVar.f2495e.f2539n0));
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    c0027a.d(81, typedArray.getBoolean(index, aVar.f2495e.f2541o0));
                    break;
                case 82:
                    c0027a.b(82, typedArray.getInteger(index, aVar.f2494d.f2558c));
                    break;
                case 83:
                    c0027a.b(83, u(typedArray, index, aVar.f2496f.f2584i));
                    break;
                case 84:
                    c0027a.b(84, typedArray.getInteger(index, aVar.f2494d.f2566k));
                    break;
                case 85:
                    c0027a.a(85, typedArray.getFloat(index, aVar.f2494d.f2565j));
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2494d.f2569n = typedArray.getResourceId(index, -1);
                        c0027a.b(89, aVar.f2494d.f2569n);
                        c cVar = aVar.f2494d;
                        if (cVar.f2569n != -1) {
                            cVar.f2568m = -2;
                            c0027a.b(88, -2);
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2494d.f2567l = typedArray.getString(index);
                        c0027a.c(90, aVar.f2494d.f2567l);
                        if (aVar.f2494d.f2567l.indexOf("/") > 0) {
                            aVar.f2494d.f2569n = typedArray.getResourceId(index, -1);
                            c0027a.b(89, aVar.f2494d.f2569n);
                            aVar.f2494d.f2568m = -2;
                            c0027a.b(88, -2);
                            break;
                        } else {
                            aVar.f2494d.f2568m = -1;
                            c0027a.b(88, -1);
                            break;
                        }
                    } else {
                        c cVar2 = aVar.f2494d;
                        cVar2.f2568m = typedArray.getInteger(index, cVar2.f2569n);
                        c0027a.b(88, aVar.f2494d.f2568m);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2483h.get(index));
                    break;
                case 93:
                    c0027a.b(93, typedArray.getDimensionPixelSize(index, aVar.f2495e.N));
                    break;
                case 94:
                    c0027a.b(94, typedArray.getDimensionPixelSize(index, aVar.f2495e.U));
                    break;
                case 95:
                    v(c0027a, typedArray, index, 0);
                    break;
                case 96:
                    v(c0027a, typedArray, index, 1);
                    break;
                case 97:
                    c0027a.b(97, typedArray.getInt(index, aVar.f2495e.f2545q0));
                    break;
                case 98:
                    if (m1.b.f37786d) {
                        int resourceId2 = typedArray.getResourceId(index, aVar.f2491a);
                        aVar.f2491a = resourceId2;
                        if (resourceId2 == -1) {
                            aVar.f2492b = typedArray.getString(index);
                            break;
                        } else {
                            break;
                        }
                    } else if (typedArray.peekValue(index).type == 3) {
                        aVar.f2492b = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2491a = typedArray.getResourceId(index, aVar.f2491a);
                        break;
                    }
                case 99:
                    c0027a.d(99, typedArray.getBoolean(index, aVar.f2495e.f2528i));
                    break;
            }
        }
    }

    public void A(int i10, float f10) {
        r(i10).f2495e.f2553y = f10;
    }

    public void B(int i10, float f10) {
        r(i10).f2495e.W = f10;
    }

    public void C(int i10, int i11, int i12) {
        a r10 = r(i10);
        switch (i11) {
            case 1:
                r10.f2495e.H = i12;
                return;
            case 2:
                r10.f2495e.I = i12;
                return;
            case 3:
                r10.f2495e.J = i12;
                return;
            case 4:
                r10.f2495e.K = i12;
                return;
            case 5:
                r10.f2495e.N = i12;
                return;
            case 6:
                r10.f2495e.M = i12;
                return;
            case 7:
                r10.f2495e.L = i12;
                return;
            default:
                throw new IllegalArgumentException("unknown constraint");
        }
    }

    public void D(int i10, float f10) {
        r(i10).f2495e.f2554z = f10;
    }

    public void c(ConstraintLayout constraintLayout) {
        d(constraintLayout, true);
        constraintLayout.setConstraintSet(null);
        constraintLayout.requestLayout();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ConstraintLayout constraintLayout, boolean z10) {
        View findViewById;
        int childCount = constraintLayout.getChildCount();
        HashSet hashSet = new HashSet(this.f2490f.keySet());
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            int id2 = childAt.getId();
            if (!this.f2490f.containsKey(Integer.valueOf(id2))) {
                Log.w("ConstraintSet", "id unknown " + m1.a.a(childAt));
            } else if (this.f2489e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            } else {
                if (id2 != -1) {
                    if (this.f2490f.containsKey(Integer.valueOf(id2))) {
                        hashSet.remove(Integer.valueOf(id2));
                        a aVar = (a) this.f2490f.get(Integer.valueOf(id2));
                        if (aVar != null) {
                            if (childAt instanceof Barrier) {
                                aVar.f2495e.f2531j0 = 1;
                                Barrier barrier = (Barrier) childAt;
                                barrier.setId(id2);
                                barrier.setType(aVar.f2495e.f2527h0);
                                barrier.setMargin(aVar.f2495e.f2529i0);
                                barrier.setAllowsGoneWidget(aVar.f2495e.f2543p0);
                                b bVar = aVar.f2495e;
                                int[] iArr = bVar.f2533k0;
                                if (iArr != null) {
                                    barrier.setReferencedIds(iArr);
                                } else {
                                    String str = bVar.f2535l0;
                                    if (str != null) {
                                        bVar.f2533k0 = o(barrier, str);
                                        barrier.setReferencedIds(aVar.f2495e.f2533k0);
                                    }
                                }
                            }
                            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
                            layoutParams.a();
                            aVar.b(layoutParams);
                            if (z10) {
                                androidx.constraintlayout.widget.a.c(childAt, aVar.f2497g);
                            }
                            childAt.setLayoutParams(layoutParams);
                            d dVar = aVar.f2493c;
                            if (dVar.f2572c == 0) {
                                childAt.setVisibility(dVar.f2571b);
                            }
                            childAt.setAlpha(aVar.f2493c.f2573d);
                            childAt.setRotation(aVar.f2496f.f2577b);
                            childAt.setRotationX(aVar.f2496f.f2578c);
                            childAt.setRotationY(aVar.f2496f.f2579d);
                            childAt.setScaleX(aVar.f2496f.f2580e);
                            childAt.setScaleY(aVar.f2496f.f2581f);
                            e eVar = aVar.f2496f;
                            if (eVar.f2584i != -1) {
                                if (((View) childAt.getParent()).findViewById(aVar.f2496f.f2584i) != null) {
                                    float top = (findViewById.getTop() + findViewById.getBottom()) / 2.0f;
                                    float left = (findViewById.getLeft() + findViewById.getRight()) / 2.0f;
                                    if (childAt.getRight() - childAt.getLeft() > 0 && childAt.getBottom() - childAt.getTop() > 0) {
                                        childAt.setPivotX(left - childAt.getLeft());
                                        childAt.setPivotY(top - childAt.getTop());
                                    }
                                }
                            } else {
                                if (!Float.isNaN(eVar.f2582g)) {
                                    childAt.setPivotX(aVar.f2496f.f2582g);
                                }
                                if (!Float.isNaN(aVar.f2496f.f2583h)) {
                                    childAt.setPivotY(aVar.f2496f.f2583h);
                                }
                            }
                            childAt.setTranslationX(aVar.f2496f.f2585j);
                            childAt.setTranslationY(aVar.f2496f.f2586k);
                            childAt.setTranslationZ(aVar.f2496f.f2587l);
                            e eVar2 = aVar.f2496f;
                            if (eVar2.f2588m) {
                                childAt.setElevation(eVar2.f2589n);
                            }
                        }
                    } else {
                        Log.v("ConstraintSet", "WARNING NO CONSTRAINTS for view " + id2);
                    }
                }
            }
        }
        Iterator it = hashSet.iterator();
        while (it.hasNext()) {
            Integer num = (Integer) it.next();
            a aVar2 = (a) this.f2490f.get(num);
            if (aVar2 != null) {
                if (aVar2.f2495e.f2531j0 == 1) {
                    Barrier barrier2 = new Barrier(constraintLayout.getContext());
                    barrier2.setId(num.intValue());
                    b bVar2 = aVar2.f2495e;
                    int[] iArr2 = bVar2.f2533k0;
                    if (iArr2 != null) {
                        barrier2.setReferencedIds(iArr2);
                    } else {
                        String str2 = bVar2.f2535l0;
                        if (str2 != null) {
                            bVar2.f2533k0 = o(barrier2, str2);
                            barrier2.setReferencedIds(aVar2.f2495e.f2533k0);
                        }
                    }
                    barrier2.setType(aVar2.f2495e.f2527h0);
                    barrier2.setMargin(aVar2.f2495e.f2529i0);
                    ConstraintLayout.LayoutParams generateDefaultLayoutParams = constraintLayout.generateDefaultLayoutParams();
                    barrier2.o();
                    aVar2.b(generateDefaultLayoutParams);
                    constraintLayout.addView(barrier2, generateDefaultLayoutParams);
                }
                if (aVar2.f2495e.f2512a) {
                    View guideline = new Guideline(constraintLayout.getContext());
                    guideline.setId(num.intValue());
                    ConstraintLayout.LayoutParams generateDefaultLayoutParams2 = constraintLayout.generateDefaultLayoutParams();
                    aVar2.b(generateDefaultLayoutParams2);
                    constraintLayout.addView(guideline, generateDefaultLayoutParams2);
                }
            }
        }
        for (int i11 = 0; i11 < childCount; i11++) {
            View childAt2 = constraintLayout.getChildAt(i11);
            if (childAt2 instanceof androidx.constraintlayout.widget.b) {
                ((androidx.constraintlayout.widget.b) childAt2).f(constraintLayout);
            }
        }
    }

    public void e(Context context, int i10) {
        f((ConstraintLayout) LayoutInflater.from(context).inflate(i10, (ViewGroup) null));
    }

    public void f(ConstraintLayout constraintLayout) {
        int childCount = constraintLayout.getChildCount();
        this.f2490f.clear();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
            int id2 = childAt.getId();
            if (this.f2489e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            }
            if (!this.f2490f.containsKey(Integer.valueOf(id2))) {
                this.f2490f.put(Integer.valueOf(id2), new a());
            }
            a aVar = (a) this.f2490f.get(Integer.valueOf(id2));
            if (aVar != null) {
                aVar.f2497g = androidx.constraintlayout.widget.a.a(this.f2488d, childAt);
                aVar.d(id2, layoutParams);
                aVar.f2493c.f2571b = childAt.getVisibility();
                aVar.f2493c.f2573d = childAt.getAlpha();
                aVar.f2496f.f2577b = childAt.getRotation();
                aVar.f2496f.f2578c = childAt.getRotationX();
                aVar.f2496f.f2579d = childAt.getRotationY();
                aVar.f2496f.f2580e = childAt.getScaleX();
                aVar.f2496f.f2581f = childAt.getScaleY();
                float pivotX = childAt.getPivotX();
                float pivotY = childAt.getPivotY();
                if (pivotX != 0.0d || pivotY != 0.0d) {
                    e eVar = aVar.f2496f;
                    eVar.f2582g = pivotX;
                    eVar.f2583h = pivotY;
                }
                aVar.f2496f.f2585j = childAt.getTranslationX();
                aVar.f2496f.f2586k = childAt.getTranslationY();
                aVar.f2496f.f2587l = childAt.getTranslationZ();
                e eVar2 = aVar.f2496f;
                if (eVar2.f2588m) {
                    eVar2.f2589n = childAt.getElevation();
                }
                if (childAt instanceof Barrier) {
                    Barrier barrier = (Barrier) childAt;
                    aVar.f2495e.f2543p0 = barrier.getAllowsGoneWidget();
                    aVar.f2495e.f2533k0 = barrier.getReferencedIds();
                    aVar.f2495e.f2527h0 = barrier.getType();
                    aVar.f2495e.f2529i0 = barrier.getMargin();
                }
            }
        }
    }

    public void g(int i10, int i11, int i12, int i13) {
        if (!this.f2490f.containsKey(Integer.valueOf(i10))) {
            this.f2490f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2490f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2495e;
                    bVar.f2530j = i12;
                    bVar.f2532k = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2495e;
                    bVar2.f2532k = i12;
                    bVar2.f2530j = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("left to " + E(i13) + " undefined");
                }
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2495e;
                    bVar3.f2534l = i12;
                    bVar3.f2536m = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar4 = aVar.f2495e;
                    bVar4.f2536m = i12;
                    bVar4.f2534l = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2495e;
                    bVar5.f2538n = i12;
                    bVar5.f2540o = -1;
                    bVar5.f2546r = -1;
                    bVar5.f2547s = -1;
                    bVar5.f2548t = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar6 = aVar.f2495e;
                    bVar6.f2540o = i12;
                    bVar6.f2538n = -1;
                    bVar6.f2546r = -1;
                    bVar6.f2547s = -1;
                    bVar6.f2548t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2495e;
                    bVar7.f2544q = i12;
                    bVar7.f2542p = -1;
                    bVar7.f2546r = -1;
                    bVar7.f2547s = -1;
                    bVar7.f2548t = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar8 = aVar.f2495e;
                    bVar8.f2542p = i12;
                    bVar8.f2544q = -1;
                    bVar8.f2546r = -1;
                    bVar8.f2547s = -1;
                    bVar8.f2548t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2495e;
                    bVar9.f2546r = i12;
                    bVar9.f2544q = -1;
                    bVar9.f2542p = -1;
                    bVar9.f2538n = -1;
                    bVar9.f2540o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2495e;
                    bVar10.f2547s = i12;
                    bVar10.f2544q = -1;
                    bVar10.f2542p = -1;
                    bVar10.f2538n = -1;
                    bVar10.f2540o = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar11 = aVar.f2495e;
                    bVar11.f2548t = i12;
                    bVar11.f2544q = -1;
                    bVar11.f2542p = -1;
                    bVar11.f2538n = -1;
                    bVar11.f2540o = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2495e;
                    bVar12.f2550v = i12;
                    bVar12.f2549u = -1;
                    return;
                } else if (i13 == 7) {
                    b bVar13 = aVar.f2495e;
                    bVar13.f2549u = i12;
                    bVar13.f2550v = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2495e;
                    bVar14.f2552x = i12;
                    bVar14.f2551w = -1;
                    return;
                } else if (i13 == 6) {
                    b bVar15 = aVar.f2495e;
                    bVar15.f2551w = i12;
                    bVar15.f2552x = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void h(int i10, int i11, int i12, int i13, int i14) {
        if (!this.f2490f.containsKey(Integer.valueOf(i10))) {
            this.f2490f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2490f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2495e;
                    bVar.f2530j = i12;
                    bVar.f2532k = -1;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2495e;
                    bVar2.f2532k = i12;
                    bVar2.f2530j = -1;
                } else {
                    throw new IllegalArgumentException("Left to " + E(i13) + " undefined");
                }
                aVar.f2495e.H = i14;
                return;
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2495e;
                    bVar3.f2534l = i12;
                    bVar3.f2536m = -1;
                } else if (i13 != 2) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar4 = aVar.f2495e;
                    bVar4.f2536m = i12;
                    bVar4.f2534l = -1;
                }
                aVar.f2495e.I = i14;
                return;
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2495e;
                    bVar5.f2538n = i12;
                    bVar5.f2540o = -1;
                    bVar5.f2546r = -1;
                    bVar5.f2547s = -1;
                    bVar5.f2548t = -1;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar6 = aVar.f2495e;
                    bVar6.f2540o = i12;
                    bVar6.f2538n = -1;
                    bVar6.f2546r = -1;
                    bVar6.f2547s = -1;
                    bVar6.f2548t = -1;
                }
                aVar.f2495e.J = i14;
                return;
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2495e;
                    bVar7.f2544q = i12;
                    bVar7.f2542p = -1;
                    bVar7.f2546r = -1;
                    bVar7.f2547s = -1;
                    bVar7.f2548t = -1;
                } else if (i13 != 3) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar8 = aVar.f2495e;
                    bVar8.f2542p = i12;
                    bVar8.f2544q = -1;
                    bVar8.f2546r = -1;
                    bVar8.f2547s = -1;
                    bVar8.f2548t = -1;
                }
                aVar.f2495e.K = i14;
                return;
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2495e;
                    bVar9.f2546r = i12;
                    bVar9.f2544q = -1;
                    bVar9.f2542p = -1;
                    bVar9.f2538n = -1;
                    bVar9.f2540o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2495e;
                    bVar10.f2547s = i12;
                    bVar10.f2544q = -1;
                    bVar10.f2542p = -1;
                    bVar10.f2538n = -1;
                    bVar10.f2540o = -1;
                    return;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar11 = aVar.f2495e;
                    bVar11.f2548t = i12;
                    bVar11.f2544q = -1;
                    bVar11.f2542p = -1;
                    bVar11.f2538n = -1;
                    bVar11.f2540o = -1;
                    return;
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2495e;
                    bVar12.f2550v = i12;
                    bVar12.f2549u = -1;
                } else if (i13 != 7) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar13 = aVar.f2495e;
                    bVar13.f2549u = i12;
                    bVar13.f2550v = -1;
                }
                aVar.f2495e.M = i14;
                return;
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2495e;
                    bVar14.f2552x = i12;
                    bVar14.f2551w = -1;
                } else if (i13 != 6) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar15 = aVar.f2495e;
                    bVar15.f2551w = i12;
                    bVar15.f2552x = -1;
                }
                aVar.f2495e.L = i14;
                return;
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void i(int i10, int i11, int i12, float f10) {
        b bVar = r(i10).f2495e;
        bVar.B = i11;
        bVar.C = i12;
        bVar.D = f10;
    }

    public void j(int i10, int i11) {
        r(i10).f2495e.Z = i11;
    }

    public void k(int i10, int i11) {
        r(i10).f2495e.f2520e = i11;
    }

    public void l(int i10, int i11) {
        r(i10).f2495e.f2518d = i11;
    }

    public void m(int i10, boolean z10) {
        r(i10).f2495e.f2541o0 = z10;
    }

    public void n(int i10, boolean z10) {
        r(i10).f2495e.f2539n0 = z10;
    }

    public void p(int i10, int i11, int i12, int i13, int[] iArr, float[] fArr, int i14) {
        if (iArr.length >= 2) {
            if (fArr != null && fArr.length != iArr.length) {
                throw new IllegalArgumentException("must have 2 or more widgets in a chain");
            }
            if (fArr != null) {
                r(iArr[0]).f2495e.V = fArr[0];
            }
            r(iArr[0]).f2495e.Y = i14;
            h(iArr[0], 3, i10, i11, 0);
            for (int i15 = 1; i15 < iArr.length; i15++) {
                int i16 = i15 - 1;
                h(iArr[i15], 3, iArr[i16], 4, 0);
                h(iArr[i16], 4, iArr[i15], 3, 0);
                if (fArr != null) {
                    r(iArr[i15]).f2495e.V = fArr[i15];
                }
            }
            h(iArr[iArr.length - 1], 4, i12, i13, 0);
            return;
        }
        throw new IllegalArgumentException("must have 2 or more widgets in a chain");
    }

    public void s(Context context, int i10) {
        XmlResourceParser xml = context.getResources().getXml(i10);
        try {
            for (int eventType = xml.getEventType(); eventType != 1; eventType = xml.next()) {
                if (eventType != 2) {
                    continue;
                } else {
                    String name = xml.getName();
                    a q10 = q(context, Xml.asAttributeSet(xml), false);
                    if (name.equalsIgnoreCase("Guideline")) {
                        q10.f2495e.f2512a = true;
                    }
                    this.f2490f.put(Integer.valueOf(q10.f2491a), q10);
                    continue;
                }
            }
        } catch (IOException e10) {
            Log.e("ConstraintSet", "Error parsing resource: " + i10, e10);
        } catch (XmlPullParserException e11) {
            Log.e("ConstraintSet", "Error parsing resource: " + i10, e11);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:121:0x01ae, code lost:
        continue;
     */
    /* JADX WARN: Removed duplicated region for block: B:47:0x00ac A[Catch: IOException -> 0x0033, XmlPullParserException -> 0x0036, TryCatch #2 {IOException -> 0x0033, XmlPullParserException -> 0x0036, blocks: (B:3:0x0004, B:81:0x01ae, B:12:0x0017, B:13:0x0025, B:15:0x002a, B:22:0x0039, B:30:0x0053, B:25:0x0042, B:28:0x004b, B:31:0x0061, B:35:0x0071, B:37:0x0079, B:38:0x0083, B:47:0x00ac, B:48:0x00b3, B:49:0x00cb, B:41:0x008c, B:43:0x0094, B:44:0x00a2, B:50:0x00cc, B:52:0x00d4, B:53:0x00e4, B:56:0x00ee, B:57:0x00f9, B:58:0x0111, B:59:0x0112, B:62:0x011c, B:63:0x0127, B:64:0x013f, B:65:0x0140, B:67:0x0148, B:68:0x0151, B:71:0x015b, B:72:0x0165, B:73:0x017d, B:74:0x017e, B:77:0x0188, B:78:0x0192, B:79:0x01aa, B:80:0x01ab), top: B:86:0x0004 }] */
    /* JADX WARN: Removed duplicated region for block: B:90:0x00b3 A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void t(android.content.Context r10, org.xmlpull.v1.XmlPullParser r11) {
        /*
            Method dump skipped, instructions count: 504
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.widget.ConstraintSet.t(android.content.Context, org.xmlpull.v1.XmlPullParser):void");
    }
}
