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
    private static final int[] f2495g = {0, 4, 8};

    /* renamed from: h  reason: collision with root package name */
    private static SparseIntArray f2496h = new SparseIntArray();

    /* renamed from: i  reason: collision with root package name */
    private static SparseIntArray f2497i = new SparseIntArray();

    /* renamed from: a  reason: collision with root package name */
    public String f2498a = "";

    /* renamed from: b  reason: collision with root package name */
    private String[] f2499b = new String[0];

    /* renamed from: c  reason: collision with root package name */
    public int f2500c = 0;

    /* renamed from: d  reason: collision with root package name */
    private HashMap f2501d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private boolean f2502e = true;

    /* renamed from: f  reason: collision with root package name */
    private HashMap f2503f = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        int f2504a;

        /* renamed from: b  reason: collision with root package name */
        String f2505b;

        /* renamed from: c  reason: collision with root package name */
        public final d f2506c = new d();

        /* renamed from: d  reason: collision with root package name */
        public final c f2507d = new c();

        /* renamed from: e  reason: collision with root package name */
        public final b f2508e = new b();

        /* renamed from: f  reason: collision with root package name */
        public final e f2509f = new e();

        /* renamed from: g  reason: collision with root package name */
        public HashMap f2510g = new HashMap();

        /* renamed from: h  reason: collision with root package name */
        C0029a f2511h;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.constraintlayout.widget.ConstraintSet$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class C0029a {

            /* renamed from: a  reason: collision with root package name */
            int[] f2512a = new int[10];

            /* renamed from: b  reason: collision with root package name */
            int[] f2513b = new int[10];

            /* renamed from: c  reason: collision with root package name */
            int f2514c = 0;

            /* renamed from: d  reason: collision with root package name */
            int[] f2515d = new int[10];

            /* renamed from: e  reason: collision with root package name */
            float[] f2516e = new float[10];

            /* renamed from: f  reason: collision with root package name */
            int f2517f = 0;

            /* renamed from: g  reason: collision with root package name */
            int[] f2518g = new int[5];

            /* renamed from: h  reason: collision with root package name */
            String[] f2519h = new String[5];

            /* renamed from: i  reason: collision with root package name */
            int f2520i = 0;

            /* renamed from: j  reason: collision with root package name */
            int[] f2521j = new int[4];

            /* renamed from: k  reason: collision with root package name */
            boolean[] f2522k = new boolean[4];

            /* renamed from: l  reason: collision with root package name */
            int f2523l = 0;

            C0029a() {
            }

            void a(int i10, float f10) {
                int i11 = this.f2517f;
                int[] iArr = this.f2515d;
                if (i11 >= iArr.length) {
                    this.f2515d = Arrays.copyOf(iArr, iArr.length * 2);
                    float[] fArr = this.f2516e;
                    this.f2516e = Arrays.copyOf(fArr, fArr.length * 2);
                }
                int[] iArr2 = this.f2515d;
                int i12 = this.f2517f;
                iArr2[i12] = i10;
                float[] fArr2 = this.f2516e;
                this.f2517f = i12 + 1;
                fArr2[i12] = f10;
            }

            void b(int i10, int i11) {
                int i12 = this.f2514c;
                int[] iArr = this.f2512a;
                if (i12 >= iArr.length) {
                    this.f2512a = Arrays.copyOf(iArr, iArr.length * 2);
                    int[] iArr2 = this.f2513b;
                    this.f2513b = Arrays.copyOf(iArr2, iArr2.length * 2);
                }
                int[] iArr3 = this.f2512a;
                int i13 = this.f2514c;
                iArr3[i13] = i10;
                int[] iArr4 = this.f2513b;
                this.f2514c = i13 + 1;
                iArr4[i13] = i11;
            }

            void c(int i10, String str) {
                int i11 = this.f2520i;
                int[] iArr = this.f2518g;
                if (i11 >= iArr.length) {
                    this.f2518g = Arrays.copyOf(iArr, iArr.length * 2);
                    String[] strArr = this.f2519h;
                    this.f2519h = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                }
                int[] iArr2 = this.f2518g;
                int i12 = this.f2520i;
                iArr2[i12] = i10;
                String[] strArr2 = this.f2519h;
                this.f2520i = i12 + 1;
                strArr2[i12] = str;
            }

            void d(int i10, boolean z10) {
                int i11 = this.f2523l;
                int[] iArr = this.f2521j;
                if (i11 >= iArr.length) {
                    this.f2521j = Arrays.copyOf(iArr, iArr.length * 2);
                    boolean[] zArr = this.f2522k;
                    this.f2522k = Arrays.copyOf(zArr, zArr.length * 2);
                }
                int[] iArr2 = this.f2521j;
                int i12 = this.f2523l;
                iArr2[i12] = i10;
                boolean[] zArr2 = this.f2522k;
                this.f2523l = i12 + 1;
                zArr2[i12] = z10;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void d(int i10, ConstraintLayout.LayoutParams layoutParams) {
            this.f2504a = i10;
            b bVar = this.f2508e;
            bVar.f2543j = layoutParams.f2427e;
            bVar.f2545k = layoutParams.f2429f;
            bVar.f2547l = layoutParams.f2431g;
            bVar.f2549m = layoutParams.f2433h;
            bVar.f2551n = layoutParams.f2435i;
            bVar.f2553o = layoutParams.f2437j;
            bVar.f2555p = layoutParams.f2439k;
            bVar.f2557q = layoutParams.f2441l;
            bVar.f2559r = layoutParams.f2443m;
            bVar.f2560s = layoutParams.f2445n;
            bVar.f2561t = layoutParams.f2447o;
            bVar.f2562u = layoutParams.f2455s;
            bVar.f2563v = layoutParams.f2457t;
            bVar.f2564w = layoutParams.f2459u;
            bVar.f2565x = layoutParams.f2461v;
            bVar.f2566y = layoutParams.G;
            bVar.f2567z = layoutParams.H;
            bVar.A = layoutParams.I;
            bVar.B = layoutParams.f2449p;
            bVar.C = layoutParams.f2451q;
            bVar.D = layoutParams.f2453r;
            bVar.E = layoutParams.X;
            bVar.F = layoutParams.Y;
            bVar.G = layoutParams.Z;
            bVar.f2539h = layoutParams.f2423c;
            bVar.f2535f = layoutParams.f2419a;
            bVar.f2537g = layoutParams.f2421b;
            bVar.f2531d = ((ViewGroup.MarginLayoutParams) layoutParams).width;
            bVar.f2533e = ((ViewGroup.MarginLayoutParams) layoutParams).height;
            bVar.H = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin;
            bVar.I = ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
            bVar.J = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin;
            bVar.K = ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
            bVar.N = layoutParams.D;
            bVar.V = layoutParams.M;
            bVar.W = layoutParams.L;
            bVar.Y = layoutParams.O;
            bVar.X = layoutParams.N;
            bVar.f2552n0 = layoutParams.f2420a0;
            bVar.f2554o0 = layoutParams.f2422b0;
            bVar.Z = layoutParams.P;
            bVar.f2526a0 = layoutParams.Q;
            bVar.f2528b0 = layoutParams.T;
            bVar.f2530c0 = layoutParams.U;
            bVar.f2532d0 = layoutParams.R;
            bVar.f2534e0 = layoutParams.S;
            bVar.f2536f0 = layoutParams.V;
            bVar.f2538g0 = layoutParams.W;
            bVar.f2550m0 = layoutParams.f2424c0;
            bVar.P = layoutParams.f2465x;
            bVar.R = layoutParams.f2467z;
            bVar.O = layoutParams.f2463w;
            bVar.Q = layoutParams.f2466y;
            bVar.T = layoutParams.A;
            bVar.S = layoutParams.B;
            bVar.U = layoutParams.C;
            bVar.f2558q0 = layoutParams.f2426d0;
            bVar.L = layoutParams.getMarginEnd();
            this.f2508e.M = layoutParams.getMarginStart();
        }

        public void b(ConstraintLayout.LayoutParams layoutParams) {
            b bVar = this.f2508e;
            layoutParams.f2427e = bVar.f2543j;
            layoutParams.f2429f = bVar.f2545k;
            layoutParams.f2431g = bVar.f2547l;
            layoutParams.f2433h = bVar.f2549m;
            layoutParams.f2435i = bVar.f2551n;
            layoutParams.f2437j = bVar.f2553o;
            layoutParams.f2439k = bVar.f2555p;
            layoutParams.f2441l = bVar.f2557q;
            layoutParams.f2443m = bVar.f2559r;
            layoutParams.f2445n = bVar.f2560s;
            layoutParams.f2447o = bVar.f2561t;
            layoutParams.f2455s = bVar.f2562u;
            layoutParams.f2457t = bVar.f2563v;
            layoutParams.f2459u = bVar.f2564w;
            layoutParams.f2461v = bVar.f2565x;
            ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin = bVar.H;
            ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin = bVar.I;
            ((ViewGroup.MarginLayoutParams) layoutParams).topMargin = bVar.J;
            ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin = bVar.K;
            layoutParams.A = bVar.T;
            layoutParams.B = bVar.S;
            layoutParams.f2465x = bVar.P;
            layoutParams.f2467z = bVar.R;
            layoutParams.G = bVar.f2566y;
            layoutParams.H = bVar.f2567z;
            layoutParams.f2449p = bVar.B;
            layoutParams.f2451q = bVar.C;
            layoutParams.f2453r = bVar.D;
            layoutParams.I = bVar.A;
            layoutParams.X = bVar.E;
            layoutParams.Y = bVar.F;
            layoutParams.M = bVar.V;
            layoutParams.L = bVar.W;
            layoutParams.O = bVar.Y;
            layoutParams.N = bVar.X;
            layoutParams.f2420a0 = bVar.f2552n0;
            layoutParams.f2422b0 = bVar.f2554o0;
            layoutParams.P = bVar.Z;
            layoutParams.Q = bVar.f2526a0;
            layoutParams.T = bVar.f2528b0;
            layoutParams.U = bVar.f2530c0;
            layoutParams.R = bVar.f2532d0;
            layoutParams.S = bVar.f2534e0;
            layoutParams.V = bVar.f2536f0;
            layoutParams.W = bVar.f2538g0;
            layoutParams.Z = bVar.G;
            layoutParams.f2423c = bVar.f2539h;
            layoutParams.f2419a = bVar.f2535f;
            layoutParams.f2421b = bVar.f2537g;
            ((ViewGroup.MarginLayoutParams) layoutParams).width = bVar.f2531d;
            ((ViewGroup.MarginLayoutParams) layoutParams).height = bVar.f2533e;
            String str = bVar.f2550m0;
            if (str != null) {
                layoutParams.f2424c0 = str;
            }
            layoutParams.f2426d0 = bVar.f2558q0;
            layoutParams.setMarginStart(bVar.M);
            layoutParams.setMarginEnd(this.f2508e.L);
            layoutParams.a();
        }

        /* renamed from: c */
        public a clone() {
            a aVar = new a();
            aVar.f2508e.a(this.f2508e);
            aVar.f2507d.a(this.f2507d);
            aVar.f2506c.a(this.f2506c);
            aVar.f2509f.a(this.f2509f);
            aVar.f2504a = this.f2504a;
            aVar.f2511h = this.f2511h;
            return aVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: r0  reason: collision with root package name */
        private static SparseIntArray f2524r0;

        /* renamed from: d  reason: collision with root package name */
        public int f2531d;

        /* renamed from: e  reason: collision with root package name */
        public int f2533e;

        /* renamed from: k0  reason: collision with root package name */
        public int[] f2546k0;

        /* renamed from: l0  reason: collision with root package name */
        public String f2548l0;

        /* renamed from: m0  reason: collision with root package name */
        public String f2550m0;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2525a = false;

        /* renamed from: b  reason: collision with root package name */
        public boolean f2527b = false;

        /* renamed from: c  reason: collision with root package name */
        public boolean f2529c = false;

        /* renamed from: f  reason: collision with root package name */
        public int f2535f = -1;

        /* renamed from: g  reason: collision with root package name */
        public int f2537g = -1;

        /* renamed from: h  reason: collision with root package name */
        public float f2539h = -1.0f;

        /* renamed from: i  reason: collision with root package name */
        public boolean f2541i = true;

        /* renamed from: j  reason: collision with root package name */
        public int f2543j = -1;

        /* renamed from: k  reason: collision with root package name */
        public int f2545k = -1;

        /* renamed from: l  reason: collision with root package name */
        public int f2547l = -1;

        /* renamed from: m  reason: collision with root package name */
        public int f2549m = -1;

        /* renamed from: n  reason: collision with root package name */
        public int f2551n = -1;

        /* renamed from: o  reason: collision with root package name */
        public int f2553o = -1;

        /* renamed from: p  reason: collision with root package name */
        public int f2555p = -1;

        /* renamed from: q  reason: collision with root package name */
        public int f2557q = -1;

        /* renamed from: r  reason: collision with root package name */
        public int f2559r = -1;

        /* renamed from: s  reason: collision with root package name */
        public int f2560s = -1;

        /* renamed from: t  reason: collision with root package name */
        public int f2561t = -1;

        /* renamed from: u  reason: collision with root package name */
        public int f2562u = -1;

        /* renamed from: v  reason: collision with root package name */
        public int f2563v = -1;

        /* renamed from: w  reason: collision with root package name */
        public int f2564w = -1;

        /* renamed from: x  reason: collision with root package name */
        public int f2565x = -1;

        /* renamed from: y  reason: collision with root package name */
        public float f2566y = 0.5f;

        /* renamed from: z  reason: collision with root package name */
        public float f2567z = 0.5f;
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
        public int f2526a0 = 0;

        /* renamed from: b0  reason: collision with root package name */
        public int f2528b0 = 0;

        /* renamed from: c0  reason: collision with root package name */
        public int f2530c0 = 0;

        /* renamed from: d0  reason: collision with root package name */
        public int f2532d0 = 0;

        /* renamed from: e0  reason: collision with root package name */
        public int f2534e0 = 0;

        /* renamed from: f0  reason: collision with root package name */
        public float f2536f0 = 1.0f;

        /* renamed from: g0  reason: collision with root package name */
        public float f2538g0 = 1.0f;

        /* renamed from: h0  reason: collision with root package name */
        public int f2540h0 = -1;

        /* renamed from: i0  reason: collision with root package name */
        public int f2542i0 = 0;

        /* renamed from: j0  reason: collision with root package name */
        public int f2544j0 = -1;

        /* renamed from: n0  reason: collision with root package name */
        public boolean f2552n0 = false;

        /* renamed from: o0  reason: collision with root package name */
        public boolean f2554o0 = false;

        /* renamed from: p0  reason: collision with root package name */
        public boolean f2556p0 = true;

        /* renamed from: q0  reason: collision with root package name */
        public int f2558q0 = 0;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2524r0 = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.C5, 24);
            f2524r0.append(androidx.constraintlayout.widget.d.D5, 25);
            f2524r0.append(androidx.constraintlayout.widget.d.F5, 28);
            f2524r0.append(androidx.constraintlayout.widget.d.G5, 29);
            f2524r0.append(androidx.constraintlayout.widget.d.L5, 35);
            f2524r0.append(androidx.constraintlayout.widget.d.K5, 34);
            f2524r0.append(androidx.constraintlayout.widget.d.f2728l5, 4);
            f2524r0.append(androidx.constraintlayout.widget.d.f2720k5, 3);
            f2524r0.append(androidx.constraintlayout.widget.d.f2704i5, 1);
            f2524r0.append(androidx.constraintlayout.widget.d.T5, 6);
            f2524r0.append(androidx.constraintlayout.widget.d.U5, 7);
            f2524r0.append(androidx.constraintlayout.widget.d.f2784s5, 17);
            f2524r0.append(androidx.constraintlayout.widget.d.f2792t5, 18);
            f2524r0.append(androidx.constraintlayout.widget.d.f2800u5, 19);
            f2524r0.append(androidx.constraintlayout.widget.d.f2672e5, 90);
            f2524r0.append(androidx.constraintlayout.widget.d.Q4, 26);
            f2524r0.append(androidx.constraintlayout.widget.d.H5, 31);
            f2524r0.append(androidx.constraintlayout.widget.d.I5, 32);
            f2524r0.append(androidx.constraintlayout.widget.d.f2776r5, 10);
            f2524r0.append(androidx.constraintlayout.widget.d.f2768q5, 9);
            f2524r0.append(androidx.constraintlayout.widget.d.X5, 13);
            f2524r0.append(androidx.constraintlayout.widget.d.f2639a6, 16);
            f2524r0.append(androidx.constraintlayout.widget.d.Y5, 14);
            f2524r0.append(androidx.constraintlayout.widget.d.V5, 11);
            f2524r0.append(androidx.constraintlayout.widget.d.Z5, 15);
            f2524r0.append(androidx.constraintlayout.widget.d.W5, 12);
            f2524r0.append(androidx.constraintlayout.widget.d.O5, 38);
            f2524r0.append(androidx.constraintlayout.widget.d.A5, 37);
            f2524r0.append(androidx.constraintlayout.widget.d.f2840z5, 39);
            f2524r0.append(androidx.constraintlayout.widget.d.N5, 40);
            f2524r0.append(androidx.constraintlayout.widget.d.f2832y5, 20);
            f2524r0.append(androidx.constraintlayout.widget.d.M5, 36);
            f2524r0.append(androidx.constraintlayout.widget.d.f2760p5, 5);
            f2524r0.append(androidx.constraintlayout.widget.d.B5, 91);
            f2524r0.append(androidx.constraintlayout.widget.d.J5, 91);
            f2524r0.append(androidx.constraintlayout.widget.d.E5, 91);
            f2524r0.append(androidx.constraintlayout.widget.d.f2712j5, 91);
            f2524r0.append(androidx.constraintlayout.widget.d.f2696h5, 91);
            f2524r0.append(androidx.constraintlayout.widget.d.T4, 23);
            f2524r0.append(androidx.constraintlayout.widget.d.V4, 27);
            f2524r0.append(androidx.constraintlayout.widget.d.X4, 30);
            f2524r0.append(androidx.constraintlayout.widget.d.Y4, 8);
            f2524r0.append(androidx.constraintlayout.widget.d.U4, 33);
            f2524r0.append(androidx.constraintlayout.widget.d.W4, 2);
            f2524r0.append(androidx.constraintlayout.widget.d.R4, 22);
            f2524r0.append(androidx.constraintlayout.widget.d.S4, 21);
            f2524r0.append(androidx.constraintlayout.widget.d.P5, 41);
            f2524r0.append(androidx.constraintlayout.widget.d.f2808v5, 42);
            f2524r0.append(androidx.constraintlayout.widget.d.f2688g5, 87);
            f2524r0.append(androidx.constraintlayout.widget.d.f2680f5, 88);
            f2524r0.append(androidx.constraintlayout.widget.d.f2648b6, 76);
            f2524r0.append(androidx.constraintlayout.widget.d.f2736m5, 61);
            f2524r0.append(androidx.constraintlayout.widget.d.f2752o5, 62);
            f2524r0.append(androidx.constraintlayout.widget.d.f2744n5, 63);
            f2524r0.append(androidx.constraintlayout.widget.d.S5, 69);
            f2524r0.append(androidx.constraintlayout.widget.d.f2824x5, 70);
            f2524r0.append(androidx.constraintlayout.widget.d.f2656c5, 71);
            f2524r0.append(androidx.constraintlayout.widget.d.f2638a5, 72);
            f2524r0.append(androidx.constraintlayout.widget.d.f2647b5, 73);
            f2524r0.append(androidx.constraintlayout.widget.d.f2664d5, 74);
            f2524r0.append(androidx.constraintlayout.widget.d.Z4, 75);
            f2524r0.append(androidx.constraintlayout.widget.d.Q5, 84);
            f2524r0.append(androidx.constraintlayout.widget.d.R5, 86);
            f2524r0.append(androidx.constraintlayout.widget.d.Q5, 83);
            f2524r0.append(androidx.constraintlayout.widget.d.f2816w5, 85);
            f2524r0.append(androidx.constraintlayout.widget.d.P5, 87);
            f2524r0.append(androidx.constraintlayout.widget.d.f2808v5, 88);
            f2524r0.append(androidx.constraintlayout.widget.d.f2781s2, 89);
            f2524r0.append(androidx.constraintlayout.widget.d.f2672e5, 90);
        }

        public void a(b bVar) {
            this.f2525a = bVar.f2525a;
            this.f2531d = bVar.f2531d;
            this.f2527b = bVar.f2527b;
            this.f2533e = bVar.f2533e;
            this.f2535f = bVar.f2535f;
            this.f2537g = bVar.f2537g;
            this.f2539h = bVar.f2539h;
            this.f2541i = bVar.f2541i;
            this.f2543j = bVar.f2543j;
            this.f2545k = bVar.f2545k;
            this.f2547l = bVar.f2547l;
            this.f2549m = bVar.f2549m;
            this.f2551n = bVar.f2551n;
            this.f2553o = bVar.f2553o;
            this.f2555p = bVar.f2555p;
            this.f2557q = bVar.f2557q;
            this.f2559r = bVar.f2559r;
            this.f2560s = bVar.f2560s;
            this.f2561t = bVar.f2561t;
            this.f2562u = bVar.f2562u;
            this.f2563v = bVar.f2563v;
            this.f2564w = bVar.f2564w;
            this.f2565x = bVar.f2565x;
            this.f2566y = bVar.f2566y;
            this.f2567z = bVar.f2567z;
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
            this.f2526a0 = bVar.f2526a0;
            this.f2528b0 = bVar.f2528b0;
            this.f2530c0 = bVar.f2530c0;
            this.f2532d0 = bVar.f2532d0;
            this.f2534e0 = bVar.f2534e0;
            this.f2536f0 = bVar.f2536f0;
            this.f2538g0 = bVar.f2538g0;
            this.f2540h0 = bVar.f2540h0;
            this.f2542i0 = bVar.f2542i0;
            this.f2544j0 = bVar.f2544j0;
            this.f2550m0 = bVar.f2550m0;
            int[] iArr = bVar.f2546k0;
            if (iArr != null && bVar.f2548l0 == null) {
                this.f2546k0 = Arrays.copyOf(iArr, iArr.length);
            } else {
                this.f2546k0 = null;
            }
            this.f2548l0 = bVar.f2548l0;
            this.f2552n0 = bVar.f2552n0;
            this.f2554o0 = bVar.f2554o0;
            this.f2556p0 = bVar.f2556p0;
            this.f2558q0 = bVar.f2558q0;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.P4);
            this.f2527b = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                int i11 = f2524r0.get(index);
                switch (i11) {
                    case 1:
                        this.f2559r = ConstraintSet.u(obtainStyledAttributes, index, this.f2559r);
                        break;
                    case 2:
                        this.K = obtainStyledAttributes.getDimensionPixelSize(index, this.K);
                        break;
                    case 3:
                        this.f2557q = ConstraintSet.u(obtainStyledAttributes, index, this.f2557q);
                        break;
                    case 4:
                        this.f2555p = ConstraintSet.u(obtainStyledAttributes, index, this.f2555p);
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
                        this.f2565x = ConstraintSet.u(obtainStyledAttributes, index, this.f2565x);
                        break;
                    case 10:
                        this.f2564w = ConstraintSet.u(obtainStyledAttributes, index, this.f2564w);
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
                        this.f2535f = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2535f);
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        this.f2537g = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2537g);
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        this.f2539h = obtainStyledAttributes.getFloat(index, this.f2539h);
                        break;
                    case 20:
                        this.f2566y = obtainStyledAttributes.getFloat(index, this.f2566y);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        this.f2533e = obtainStyledAttributes.getLayoutDimension(index, this.f2533e);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        this.f2531d = obtainStyledAttributes.getLayoutDimension(index, this.f2531d);
                        break;
                    case 23:
                        this.H = obtainStyledAttributes.getDimensionPixelSize(index, this.H);
                        break;
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        this.f2543j = ConstraintSet.u(obtainStyledAttributes, index, this.f2543j);
                        break;
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                        this.f2545k = ConstraintSet.u(obtainStyledAttributes, index, this.f2545k);
                        break;
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                        this.G = obtainStyledAttributes.getInt(index, this.G);
                        break;
                    case 27:
                        this.I = obtainStyledAttributes.getDimensionPixelSize(index, this.I);
                        break;
                    case 28:
                        this.f2547l = ConstraintSet.u(obtainStyledAttributes, index, this.f2547l);
                        break;
                    case 29:
                        this.f2549m = ConstraintSet.u(obtainStyledAttributes, index, this.f2549m);
                        break;
                    case 30:
                        this.M = obtainStyledAttributes.getDimensionPixelSize(index, this.M);
                        break;
                    case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                        this.f2562u = ConstraintSet.u(obtainStyledAttributes, index, this.f2562u);
                        break;
                    case 32:
                        this.f2563v = ConstraintSet.u(obtainStyledAttributes, index, this.f2563v);
                        break;
                    case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                        this.J = obtainStyledAttributes.getDimensionPixelSize(index, this.J);
                        break;
                    case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                        this.f2553o = ConstraintSet.u(obtainStyledAttributes, index, this.f2553o);
                        break;
                    case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                        this.f2551n = ConstraintSet.u(obtainStyledAttributes, index, this.f2551n);
                        break;
                    case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                        this.f2567z = obtainStyledAttributes.getFloat(index, this.f2567z);
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
                                        this.f2536f0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 70:
                                        this.f2538g0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 71:
                                        Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                                        continue;
                                    case 72:
                                        this.f2540h0 = obtainStyledAttributes.getInt(index, this.f2540h0);
                                        continue;
                                    case 73:
                                        this.f2542i0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2542i0);
                                        continue;
                                    case 74:
                                        this.f2548l0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 75:
                                        this.f2556p0 = obtainStyledAttributes.getBoolean(index, this.f2556p0);
                                        continue;
                                    case 76:
                                        this.f2558q0 = obtainStyledAttributes.getInt(index, this.f2558q0);
                                        continue;
                                    case 77:
                                        this.f2560s = ConstraintSet.u(obtainStyledAttributes, index, this.f2560s);
                                        continue;
                                    case 78:
                                        this.f2561t = ConstraintSet.u(obtainStyledAttributes, index, this.f2561t);
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
                                        this.f2526a0 = obtainStyledAttributes.getInt(index, this.f2526a0);
                                        continue;
                                    case 83:
                                        this.f2530c0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2530c0);
                                        continue;
                                    case 84:
                                        this.f2528b0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2528b0);
                                        continue;
                                    case 85:
                                        this.f2534e0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2534e0);
                                        continue;
                                    case 86:
                                        this.f2532d0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2532d0);
                                        continue;
                                    case 87:
                                        this.f2552n0 = obtainStyledAttributes.getBoolean(index, this.f2552n0);
                                        continue;
                                    case 88:
                                        this.f2554o0 = obtainStyledAttributes.getBoolean(index, this.f2554o0);
                                        continue;
                                    case 89:
                                        this.f2550m0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 90:
                                        this.f2541i = obtainStyledAttributes.getBoolean(index, this.f2541i);
                                        continue;
                                    case 91:
                                        Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2524r0.get(index));
                                        continue;
                                    default:
                                        Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2524r0.get(index));
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
        private static SparseIntArray f2568o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2569a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f2570b = -1;

        /* renamed from: c  reason: collision with root package name */
        public int f2571c = 0;

        /* renamed from: d  reason: collision with root package name */
        public String f2572d = null;

        /* renamed from: e  reason: collision with root package name */
        public int f2573e = -1;

        /* renamed from: f  reason: collision with root package name */
        public int f2574f = 0;

        /* renamed from: g  reason: collision with root package name */
        public float f2575g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public int f2576h = -1;

        /* renamed from: i  reason: collision with root package name */
        public float f2577i = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        public float f2578j = Float.NaN;

        /* renamed from: k  reason: collision with root package name */
        public int f2579k = -1;

        /* renamed from: l  reason: collision with root package name */
        public String f2580l = null;

        /* renamed from: m  reason: collision with root package name */
        public int f2581m = -3;

        /* renamed from: n  reason: collision with root package name */
        public int f2582n = -1;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2568o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.f2697h6, 1);
            f2568o.append(androidx.constraintlayout.widget.d.f2713j6, 2);
            f2568o.append(androidx.constraintlayout.widget.d.f2745n6, 3);
            f2568o.append(androidx.constraintlayout.widget.d.f2689g6, 4);
            f2568o.append(androidx.constraintlayout.widget.d.f2681f6, 5);
            f2568o.append(androidx.constraintlayout.widget.d.f2673e6, 6);
            f2568o.append(androidx.constraintlayout.widget.d.f2705i6, 7);
            f2568o.append(androidx.constraintlayout.widget.d.f2737m6, 8);
            f2568o.append(androidx.constraintlayout.widget.d.f2729l6, 9);
            f2568o.append(androidx.constraintlayout.widget.d.f2721k6, 10);
        }

        public void a(c cVar) {
            this.f2569a = cVar.f2569a;
            this.f2570b = cVar.f2570b;
            this.f2572d = cVar.f2572d;
            this.f2573e = cVar.f2573e;
            this.f2574f = cVar.f2574f;
            this.f2577i = cVar.f2577i;
            this.f2575g = cVar.f2575g;
            this.f2576h = cVar.f2576h;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f2665d6);
            this.f2569a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f2568o.get(index)) {
                    case 1:
                        this.f2577i = obtainStyledAttributes.getFloat(index, this.f2577i);
                        break;
                    case 2:
                        this.f2573e = obtainStyledAttributes.getInt(index, this.f2573e);
                        break;
                    case 3:
                        if (obtainStyledAttributes.peekValue(index).type == 3) {
                            this.f2572d = obtainStyledAttributes.getString(index);
                            break;
                        } else {
                            this.f2572d = i1.a.f28215c[obtainStyledAttributes.getInteger(index, 0)];
                            break;
                        }
                    case 4:
                        this.f2574f = obtainStyledAttributes.getInt(index, 0);
                        break;
                    case 5:
                        this.f2570b = ConstraintSet.u(obtainStyledAttributes, index, this.f2570b);
                        break;
                    case 6:
                        this.f2571c = obtainStyledAttributes.getInteger(index, this.f2571c);
                        break;
                    case 7:
                        this.f2575g = obtainStyledAttributes.getFloat(index, this.f2575g);
                        break;
                    case 8:
                        this.f2579k = obtainStyledAttributes.getInteger(index, this.f2579k);
                        break;
                    case 9:
                        this.f2578j = obtainStyledAttributes.getFloat(index, this.f2578j);
                        break;
                    case 10:
                        int i11 = obtainStyledAttributes.peekValue(index).type;
                        if (i11 == 1) {
                            int resourceId = obtainStyledAttributes.getResourceId(index, -1);
                            this.f2582n = resourceId;
                            if (resourceId != -1) {
                                this.f2581m = -2;
                                break;
                            } else {
                                break;
                            }
                        } else if (i11 == 3) {
                            String string = obtainStyledAttributes.getString(index);
                            this.f2580l = string;
                            if (string.indexOf("/") > 0) {
                                this.f2582n = obtainStyledAttributes.getResourceId(index, -1);
                                this.f2581m = -2;
                                break;
                            } else {
                                this.f2581m = -1;
                                break;
                            }
                        } else {
                            this.f2581m = obtainStyledAttributes.getInteger(index, this.f2582n);
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
        public boolean f2583a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f2584b = 0;

        /* renamed from: c  reason: collision with root package name */
        public int f2585c = 0;

        /* renamed from: d  reason: collision with root package name */
        public float f2586d = 1.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f2587e = Float.NaN;

        public void a(d dVar) {
            this.f2583a = dVar.f2583a;
            this.f2584b = dVar.f2584b;
            this.f2586d = dVar.f2586d;
            this.f2587e = dVar.f2587e;
            this.f2585c = dVar.f2585c;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f2817w6);
            this.f2583a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == androidx.constraintlayout.widget.d.f2833y6) {
                    this.f2586d = obtainStyledAttributes.getFloat(index, this.f2586d);
                } else if (index == androidx.constraintlayout.widget.d.f2825x6) {
                    this.f2584b = obtainStyledAttributes.getInt(index, this.f2584b);
                    this.f2584b = ConstraintSet.f2495g[this.f2584b];
                } else if (index == androidx.constraintlayout.widget.d.A6) {
                    this.f2585c = obtainStyledAttributes.getInt(index, this.f2585c);
                } else if (index == androidx.constraintlayout.widget.d.f2841z6) {
                    this.f2587e = obtainStyledAttributes.getFloat(index, this.f2587e);
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: o  reason: collision with root package name */
        private static SparseIntArray f2588o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2589a = false;

        /* renamed from: b  reason: collision with root package name */
        public float f2590b = 0.0f;

        /* renamed from: c  reason: collision with root package name */
        public float f2591c = 0.0f;

        /* renamed from: d  reason: collision with root package name */
        public float f2592d = 0.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f2593e = 1.0f;

        /* renamed from: f  reason: collision with root package name */
        public float f2594f = 1.0f;

        /* renamed from: g  reason: collision with root package name */
        public float f2595g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public float f2596h = Float.NaN;

        /* renamed from: i  reason: collision with root package name */
        public int f2597i = -1;

        /* renamed from: j  reason: collision with root package name */
        public float f2598j = 0.0f;

        /* renamed from: k  reason: collision with root package name */
        public float f2599k = 0.0f;

        /* renamed from: l  reason: collision with root package name */
        public float f2600l = 0.0f;

        /* renamed from: m  reason: collision with root package name */
        public boolean f2601m = false;

        /* renamed from: n  reason: collision with root package name */
        public float f2602n = 0.0f;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2588o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.N6, 1);
            f2588o.append(androidx.constraintlayout.widget.d.O6, 2);
            f2588o.append(androidx.constraintlayout.widget.d.P6, 3);
            f2588o.append(androidx.constraintlayout.widget.d.L6, 4);
            f2588o.append(androidx.constraintlayout.widget.d.M6, 5);
            f2588o.append(androidx.constraintlayout.widget.d.H6, 6);
            f2588o.append(androidx.constraintlayout.widget.d.I6, 7);
            f2588o.append(androidx.constraintlayout.widget.d.J6, 8);
            f2588o.append(androidx.constraintlayout.widget.d.K6, 9);
            f2588o.append(androidx.constraintlayout.widget.d.Q6, 10);
            f2588o.append(androidx.constraintlayout.widget.d.R6, 11);
            f2588o.append(androidx.constraintlayout.widget.d.S6, 12);
        }

        public void a(e eVar) {
            this.f2589a = eVar.f2589a;
            this.f2590b = eVar.f2590b;
            this.f2591c = eVar.f2591c;
            this.f2592d = eVar.f2592d;
            this.f2593e = eVar.f2593e;
            this.f2594f = eVar.f2594f;
            this.f2595g = eVar.f2595g;
            this.f2596h = eVar.f2596h;
            this.f2597i = eVar.f2597i;
            this.f2598j = eVar.f2598j;
            this.f2599k = eVar.f2599k;
            this.f2600l = eVar.f2600l;
            this.f2601m = eVar.f2601m;
            this.f2602n = eVar.f2602n;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.G6);
            this.f2589a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f2588o.get(index)) {
                    case 1:
                        this.f2590b = obtainStyledAttributes.getFloat(index, this.f2590b);
                        break;
                    case 2:
                        this.f2591c = obtainStyledAttributes.getFloat(index, this.f2591c);
                        break;
                    case 3:
                        this.f2592d = obtainStyledAttributes.getFloat(index, this.f2592d);
                        break;
                    case 4:
                        this.f2593e = obtainStyledAttributes.getFloat(index, this.f2593e);
                        break;
                    case 5:
                        this.f2594f = obtainStyledAttributes.getFloat(index, this.f2594f);
                        break;
                    case 6:
                        this.f2595g = obtainStyledAttributes.getDimension(index, this.f2595g);
                        break;
                    case 7:
                        this.f2596h = obtainStyledAttributes.getDimension(index, this.f2596h);
                        break;
                    case 8:
                        this.f2598j = obtainStyledAttributes.getDimension(index, this.f2598j);
                        break;
                    case 9:
                        this.f2599k = obtainStyledAttributes.getDimension(index, this.f2599k);
                        break;
                    case 10:
                        this.f2600l = obtainStyledAttributes.getDimension(index, this.f2600l);
                        break;
                    case 11:
                        this.f2601m = true;
                        this.f2602n = obtainStyledAttributes.getDimension(index, this.f2602n);
                        break;
                    case 12:
                        this.f2597i = ConstraintSet.u(obtainStyledAttributes, index, this.f2597i);
                        break;
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    static {
        f2496h.append(androidx.constraintlayout.widget.d.f2699i0, 25);
        f2496h.append(androidx.constraintlayout.widget.d.f2707j0, 26);
        f2496h.append(androidx.constraintlayout.widget.d.f2723l0, 29);
        f2496h.append(androidx.constraintlayout.widget.d.f2731m0, 30);
        f2496h.append(androidx.constraintlayout.widget.d.f2779s0, 36);
        f2496h.append(androidx.constraintlayout.widget.d.f2771r0, 35);
        f2496h.append(androidx.constraintlayout.widget.d.P, 4);
        f2496h.append(androidx.constraintlayout.widget.d.O, 3);
        f2496h.append(androidx.constraintlayout.widget.d.K, 1);
        f2496h.append(androidx.constraintlayout.widget.d.M, 91);
        f2496h.append(androidx.constraintlayout.widget.d.L, 92);
        f2496h.append(androidx.constraintlayout.widget.d.B0, 6);
        f2496h.append(androidx.constraintlayout.widget.d.C0, 7);
        f2496h.append(androidx.constraintlayout.widget.d.W, 17);
        f2496h.append(androidx.constraintlayout.widget.d.X, 18);
        f2496h.append(androidx.constraintlayout.widget.d.Y, 19);
        f2496h.append(androidx.constraintlayout.widget.d.G, 99);
        f2496h.append(androidx.constraintlayout.widget.d.f2650c, 27);
        f2496h.append(androidx.constraintlayout.widget.d.f2739n0, 32);
        f2496h.append(androidx.constraintlayout.widget.d.f2747o0, 33);
        f2496h.append(androidx.constraintlayout.widget.d.V, 10);
        f2496h.append(androidx.constraintlayout.widget.d.U, 9);
        f2496h.append(androidx.constraintlayout.widget.d.F0, 13);
        f2496h.append(androidx.constraintlayout.widget.d.I0, 16);
        f2496h.append(androidx.constraintlayout.widget.d.G0, 14);
        f2496h.append(androidx.constraintlayout.widget.d.D0, 11);
        f2496h.append(androidx.constraintlayout.widget.d.H0, 15);
        f2496h.append(androidx.constraintlayout.widget.d.E0, 12);
        f2496h.append(androidx.constraintlayout.widget.d.f2803v0, 40);
        f2496h.append(androidx.constraintlayout.widget.d.f2683g0, 39);
        f2496h.append(androidx.constraintlayout.widget.d.f2675f0, 41);
        f2496h.append(androidx.constraintlayout.widget.d.f2795u0, 42);
        f2496h.append(androidx.constraintlayout.widget.d.f2667e0, 20);
        f2496h.append(androidx.constraintlayout.widget.d.f2787t0, 37);
        f2496h.append(androidx.constraintlayout.widget.d.T, 5);
        f2496h.append(androidx.constraintlayout.widget.d.f2691h0, 87);
        f2496h.append(androidx.constraintlayout.widget.d.f2763q0, 87);
        f2496h.append(androidx.constraintlayout.widget.d.f2715k0, 87);
        f2496h.append(androidx.constraintlayout.widget.d.N, 87);
        f2496h.append(androidx.constraintlayout.widget.d.J, 87);
        f2496h.append(androidx.constraintlayout.widget.d.f2690h, 24);
        f2496h.append(androidx.constraintlayout.widget.d.f2706j, 28);
        f2496h.append(androidx.constraintlayout.widget.d.f2802v, 31);
        f2496h.append(androidx.constraintlayout.widget.d.f2810w, 8);
        f2496h.append(androidx.constraintlayout.widget.d.f2698i, 34);
        f2496h.append(androidx.constraintlayout.widget.d.f2714k, 2);
        f2496h.append(androidx.constraintlayout.widget.d.f2674f, 23);
        f2496h.append(androidx.constraintlayout.widget.d.f2682g, 21);
        f2496h.append(androidx.constraintlayout.widget.d.f2811w0, 95);
        f2496h.append(androidx.constraintlayout.widget.d.Z, 96);
        f2496h.append(androidx.constraintlayout.widget.d.f2666e, 22);
        f2496h.append(androidx.constraintlayout.widget.d.f2722l, 43);
        f2496h.append(androidx.constraintlayout.widget.d.f2826y, 44);
        f2496h.append(androidx.constraintlayout.widget.d.f2786t, 45);
        f2496h.append(androidx.constraintlayout.widget.d.f2794u, 46);
        f2496h.append(androidx.constraintlayout.widget.d.f2778s, 60);
        f2496h.append(androidx.constraintlayout.widget.d.f2762q, 47);
        f2496h.append(androidx.constraintlayout.widget.d.f2770r, 48);
        f2496h.append(androidx.constraintlayout.widget.d.f2730m, 49);
        f2496h.append(androidx.constraintlayout.widget.d.f2738n, 50);
        f2496h.append(androidx.constraintlayout.widget.d.f2746o, 51);
        f2496h.append(androidx.constraintlayout.widget.d.f2754p, 52);
        f2496h.append(androidx.constraintlayout.widget.d.f2818x, 53);
        f2496h.append(androidx.constraintlayout.widget.d.f2819x0, 54);
        f2496h.append(androidx.constraintlayout.widget.d.f2633a0, 55);
        f2496h.append(androidx.constraintlayout.widget.d.f2827y0, 56);
        f2496h.append(androidx.constraintlayout.widget.d.f2642b0, 57);
        f2496h.append(androidx.constraintlayout.widget.d.f2835z0, 58);
        f2496h.append(androidx.constraintlayout.widget.d.f2651c0, 59);
        f2496h.append(androidx.constraintlayout.widget.d.Q, 61);
        f2496h.append(androidx.constraintlayout.widget.d.S, 62);
        f2496h.append(androidx.constraintlayout.widget.d.R, 63);
        f2496h.append(androidx.constraintlayout.widget.d.f2834z, 64);
        f2496h.append(androidx.constraintlayout.widget.d.S0, 65);
        f2496h.append(androidx.constraintlayout.widget.d.F, 66);
        f2496h.append(androidx.constraintlayout.widget.d.T0, 67);
        f2496h.append(androidx.constraintlayout.widget.d.L0, 79);
        f2496h.append(androidx.constraintlayout.widget.d.f2658d, 38);
        f2496h.append(androidx.constraintlayout.widget.d.K0, 68);
        f2496h.append(androidx.constraintlayout.widget.d.A0, 69);
        f2496h.append(androidx.constraintlayout.widget.d.f2659d0, 70);
        f2496h.append(androidx.constraintlayout.widget.d.J0, 97);
        f2496h.append(androidx.constraintlayout.widget.d.D, 71);
        f2496h.append(androidx.constraintlayout.widget.d.B, 72);
        f2496h.append(androidx.constraintlayout.widget.d.C, 73);
        f2496h.append(androidx.constraintlayout.widget.d.E, 74);
        f2496h.append(androidx.constraintlayout.widget.d.A, 75);
        f2496h.append(androidx.constraintlayout.widget.d.M0, 76);
        f2496h.append(androidx.constraintlayout.widget.d.f2755p0, 77);
        f2496h.append(androidx.constraintlayout.widget.d.U0, 78);
        f2496h.append(androidx.constraintlayout.widget.d.I, 80);
        f2496h.append(androidx.constraintlayout.widget.d.H, 81);
        f2496h.append(androidx.constraintlayout.widget.d.N0, 82);
        f2496h.append(androidx.constraintlayout.widget.d.R0, 83);
        f2496h.append(androidx.constraintlayout.widget.d.Q0, 84);
        f2496h.append(androidx.constraintlayout.widget.d.P0, 85);
        f2496h.append(androidx.constraintlayout.widget.d.O0, 86);
        f2497i.append(androidx.constraintlayout.widget.d.Y3, 6);
        f2497i.append(androidx.constraintlayout.widget.d.Y3, 7);
        f2497i.append(androidx.constraintlayout.widget.d.T2, 27);
        f2497i.append(androidx.constraintlayout.widget.d.f2646b4, 13);
        f2497i.append(androidx.constraintlayout.widget.d.f2671e4, 16);
        f2497i.append(androidx.constraintlayout.widget.d.f2655c4, 14);
        f2497i.append(androidx.constraintlayout.widget.d.Z3, 11);
        f2497i.append(androidx.constraintlayout.widget.d.f2663d4, 15);
        f2497i.append(androidx.constraintlayout.widget.d.f2637a4, 12);
        f2497i.append(androidx.constraintlayout.widget.d.S3, 40);
        f2497i.append(androidx.constraintlayout.widget.d.L3, 39);
        f2497i.append(androidx.constraintlayout.widget.d.K3, 41);
        f2497i.append(androidx.constraintlayout.widget.d.R3, 42);
        f2497i.append(androidx.constraintlayout.widget.d.J3, 20);
        f2497i.append(androidx.constraintlayout.widget.d.Q3, 37);
        f2497i.append(androidx.constraintlayout.widget.d.D3, 5);
        f2497i.append(androidx.constraintlayout.widget.d.M3, 87);
        f2497i.append(androidx.constraintlayout.widget.d.P3, 87);
        f2497i.append(androidx.constraintlayout.widget.d.N3, 87);
        f2497i.append(androidx.constraintlayout.widget.d.A3, 87);
        f2497i.append(androidx.constraintlayout.widget.d.f2838z3, 87);
        f2497i.append(androidx.constraintlayout.widget.d.Y2, 24);
        f2497i.append(androidx.constraintlayout.widget.d.f2636a3, 28);
        f2497i.append(androidx.constraintlayout.widget.d.f2734m3, 31);
        f2497i.append(androidx.constraintlayout.widget.d.f2742n3, 8);
        f2497i.append(androidx.constraintlayout.widget.d.Z2, 34);
        f2497i.append(androidx.constraintlayout.widget.d.f2645b3, 2);
        f2497i.append(androidx.constraintlayout.widget.d.W2, 23);
        f2497i.append(androidx.constraintlayout.widget.d.X2, 21);
        f2497i.append(androidx.constraintlayout.widget.d.T3, 95);
        f2497i.append(androidx.constraintlayout.widget.d.E3, 96);
        f2497i.append(androidx.constraintlayout.widget.d.V2, 22);
        f2497i.append(androidx.constraintlayout.widget.d.f2654c3, 43);
        f2497i.append(androidx.constraintlayout.widget.d.f2758p3, 44);
        f2497i.append(androidx.constraintlayout.widget.d.f2718k3, 45);
        f2497i.append(androidx.constraintlayout.widget.d.f2726l3, 46);
        f2497i.append(androidx.constraintlayout.widget.d.f2710j3, 60);
        f2497i.append(androidx.constraintlayout.widget.d.f2694h3, 47);
        f2497i.append(androidx.constraintlayout.widget.d.f2702i3, 48);
        f2497i.append(androidx.constraintlayout.widget.d.f2662d3, 49);
        f2497i.append(androidx.constraintlayout.widget.d.f2670e3, 50);
        f2497i.append(androidx.constraintlayout.widget.d.f2678f3, 51);
        f2497i.append(androidx.constraintlayout.widget.d.f2686g3, 52);
        f2497i.append(androidx.constraintlayout.widget.d.f2750o3, 53);
        f2497i.append(androidx.constraintlayout.widget.d.U3, 54);
        f2497i.append(androidx.constraintlayout.widget.d.F3, 55);
        f2497i.append(androidx.constraintlayout.widget.d.V3, 56);
        f2497i.append(androidx.constraintlayout.widget.d.G3, 57);
        f2497i.append(androidx.constraintlayout.widget.d.W3, 58);
        f2497i.append(androidx.constraintlayout.widget.d.H3, 59);
        f2497i.append(androidx.constraintlayout.widget.d.C3, 62);
        f2497i.append(androidx.constraintlayout.widget.d.B3, 63);
        f2497i.append(androidx.constraintlayout.widget.d.f2766q3, 64);
        f2497i.append(androidx.constraintlayout.widget.d.f2759p4, 65);
        f2497i.append(androidx.constraintlayout.widget.d.f2814w3, 66);
        f2497i.append(androidx.constraintlayout.widget.d.f2767q4, 67);
        f2497i.append(androidx.constraintlayout.widget.d.f2695h4, 79);
        f2497i.append(androidx.constraintlayout.widget.d.U2, 38);
        f2497i.append(androidx.constraintlayout.widget.d.f2703i4, 98);
        f2497i.append(androidx.constraintlayout.widget.d.f2687g4, 68);
        f2497i.append(androidx.constraintlayout.widget.d.X3, 69);
        f2497i.append(androidx.constraintlayout.widget.d.I3, 70);
        f2497i.append(androidx.constraintlayout.widget.d.f2798u3, 71);
        f2497i.append(androidx.constraintlayout.widget.d.f2782s3, 72);
        f2497i.append(androidx.constraintlayout.widget.d.f2790t3, 73);
        f2497i.append(androidx.constraintlayout.widget.d.f2806v3, 74);
        f2497i.append(androidx.constraintlayout.widget.d.f2774r3, 75);
        f2497i.append(androidx.constraintlayout.widget.d.f2711j4, 76);
        f2497i.append(androidx.constraintlayout.widget.d.O3, 77);
        f2497i.append(androidx.constraintlayout.widget.d.f2775r4, 78);
        f2497i.append(androidx.constraintlayout.widget.d.f2830y3, 80);
        f2497i.append(androidx.constraintlayout.widget.d.f2822x3, 81);
        f2497i.append(androidx.constraintlayout.widget.d.f2719k4, 82);
        f2497i.append(androidx.constraintlayout.widget.d.f2751o4, 83);
        f2497i.append(androidx.constraintlayout.widget.d.f2743n4, 84);
        f2497i.append(androidx.constraintlayout.widget.d.f2735m4, 85);
        f2497i.append(androidx.constraintlayout.widget.d.f2727l4, 86);
        f2497i.append(androidx.constraintlayout.widget.d.f2679f4, 97);
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
            iArr = androidx.constraintlayout.widget.d.f2641b;
        }
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, iArr);
        y(aVar, obtainStyledAttributes, z10);
        obtainStyledAttributes.recycle();
        return aVar;
    }

    private a r(int i10) {
        if (!this.f2503f.containsKey(Integer.valueOf(i10))) {
            this.f2503f.put(Integer.valueOf(i10), new a());
        }
        return (a) this.f2503f.get(Integer.valueOf(i10));
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
            r4.f2420a0 = r5
            return
        L3d:
            r4.height = r2
            r4.f2422b0 = r5
            return
        L42:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.b
            if (r6 == 0) goto L54
            androidx.constraintlayout.widget.ConstraintSet$b r4 = (androidx.constraintlayout.widget.ConstraintSet.b) r4
            if (r7 != 0) goto L4f
            r4.f2531d = r2
            r4.f2552n0 = r5
            return
        L4f:
            r4.f2533e = r2
            r4.f2554o0 = r5
            return
        L54:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.a.C0029a
            if (r6 == 0) goto L71
            androidx.constraintlayout.widget.ConstraintSet$a$a r4 = (androidx.constraintlayout.widget.ConstraintSet.a.C0029a) r4
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
                        } else if (obj instanceof a.C0029a) {
                            ((a.C0029a) obj).c(5, trim2);
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
                                    bVar.f2531d = 0;
                                    bVar.W = parseFloat;
                                    return;
                                }
                                bVar.f2533e = 0;
                                bVar.V = parseFloat;
                            } else if (obj instanceof a.C0029a) {
                                a.C0029a c0029a = (a.C0029a) obj;
                                if (i10 == 0) {
                                    c0029a.b(23, 0);
                                    c0029a.a(39, parseFloat);
                                    return;
                                }
                                c0029a.b(21, 0);
                                c0029a.a(40, parseFloat);
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
                                    bVar2.f2531d = 0;
                                    bVar2.f2536f0 = max;
                                    bVar2.Z = 2;
                                    return;
                                }
                                bVar2.f2533e = 0;
                                bVar2.f2538g0 = max;
                                bVar2.f2526a0 = 2;
                            } else if (obj instanceof a.C0029a) {
                                a.C0029a c0029a2 = (a.C0029a) obj;
                                if (i10 == 0) {
                                    c0029a2.b(23, 0);
                                    c0029a2.b(54, 2);
                                    return;
                                }
                                c0029a2.b(21, 0);
                                c0029a2.b(55, 2);
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
            if (index != androidx.constraintlayout.widget.d.f2658d && androidx.constraintlayout.widget.d.f2802v != index && androidx.constraintlayout.widget.d.f2810w != index) {
                aVar.f2507d.f2569a = true;
                aVar.f2508e.f2527b = true;
                aVar.f2506c.f2583a = true;
                aVar.f2509f.f2589a = true;
            }
            switch (f2496h.get(index)) {
                case 1:
                    b bVar = aVar.f2508e;
                    bVar.f2559r = u(typedArray, index, bVar.f2559r);
                    break;
                case 2:
                    b bVar2 = aVar.f2508e;
                    bVar2.K = typedArray.getDimensionPixelSize(index, bVar2.K);
                    break;
                case 3:
                    b bVar3 = aVar.f2508e;
                    bVar3.f2557q = u(typedArray, index, bVar3.f2557q);
                    break;
                case 4:
                    b bVar4 = aVar.f2508e;
                    bVar4.f2555p = u(typedArray, index, bVar4.f2555p);
                    break;
                case 5:
                    aVar.f2508e.A = typedArray.getString(index);
                    break;
                case 6:
                    b bVar5 = aVar.f2508e;
                    bVar5.E = typedArray.getDimensionPixelOffset(index, bVar5.E);
                    break;
                case 7:
                    b bVar6 = aVar.f2508e;
                    bVar6.F = typedArray.getDimensionPixelOffset(index, bVar6.F);
                    break;
                case 8:
                    b bVar7 = aVar.f2508e;
                    bVar7.L = typedArray.getDimensionPixelSize(index, bVar7.L);
                    break;
                case 9:
                    b bVar8 = aVar.f2508e;
                    bVar8.f2565x = u(typedArray, index, bVar8.f2565x);
                    break;
                case 10:
                    b bVar9 = aVar.f2508e;
                    bVar9.f2564w = u(typedArray, index, bVar9.f2564w);
                    break;
                case 11:
                    b bVar10 = aVar.f2508e;
                    bVar10.R = typedArray.getDimensionPixelSize(index, bVar10.R);
                    break;
                case 12:
                    b bVar11 = aVar.f2508e;
                    bVar11.S = typedArray.getDimensionPixelSize(index, bVar11.S);
                    break;
                case 13:
                    b bVar12 = aVar.f2508e;
                    bVar12.O = typedArray.getDimensionPixelSize(index, bVar12.O);
                    break;
                case 14:
                    b bVar13 = aVar.f2508e;
                    bVar13.Q = typedArray.getDimensionPixelSize(index, bVar13.Q);
                    break;
                case 15:
                    b bVar14 = aVar.f2508e;
                    bVar14.T = typedArray.getDimensionPixelSize(index, bVar14.T);
                    break;
                case 16:
                    b bVar15 = aVar.f2508e;
                    bVar15.P = typedArray.getDimensionPixelSize(index, bVar15.P);
                    break;
                case 17:
                    b bVar16 = aVar.f2508e;
                    bVar16.f2535f = typedArray.getDimensionPixelOffset(index, bVar16.f2535f);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    b bVar17 = aVar.f2508e;
                    bVar17.f2537g = typedArray.getDimensionPixelOffset(index, bVar17.f2537g);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    b bVar18 = aVar.f2508e;
                    bVar18.f2539h = typedArray.getFloat(index, bVar18.f2539h);
                    break;
                case 20:
                    b bVar19 = aVar.f2508e;
                    bVar19.f2566y = typedArray.getFloat(index, bVar19.f2566y);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    b bVar20 = aVar.f2508e;
                    bVar20.f2533e = typedArray.getLayoutDimension(index, bVar20.f2533e);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    d dVar = aVar.f2506c;
                    dVar.f2584b = typedArray.getInt(index, dVar.f2584b);
                    d dVar2 = aVar.f2506c;
                    dVar2.f2584b = f2495g[dVar2.f2584b];
                    break;
                case 23:
                    b bVar21 = aVar.f2508e;
                    bVar21.f2531d = typedArray.getLayoutDimension(index, bVar21.f2531d);
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    b bVar22 = aVar.f2508e;
                    bVar22.H = typedArray.getDimensionPixelSize(index, bVar22.H);
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    b bVar23 = aVar.f2508e;
                    bVar23.f2543j = u(typedArray, index, bVar23.f2543j);
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    b bVar24 = aVar.f2508e;
                    bVar24.f2545k = u(typedArray, index, bVar24.f2545k);
                    break;
                case 27:
                    b bVar25 = aVar.f2508e;
                    bVar25.G = typedArray.getInt(index, bVar25.G);
                    break;
                case 28:
                    b bVar26 = aVar.f2508e;
                    bVar26.I = typedArray.getDimensionPixelSize(index, bVar26.I);
                    break;
                case 29:
                    b bVar27 = aVar.f2508e;
                    bVar27.f2547l = u(typedArray, index, bVar27.f2547l);
                    break;
                case 30:
                    b bVar28 = aVar.f2508e;
                    bVar28.f2549m = u(typedArray, index, bVar28.f2549m);
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    b bVar29 = aVar.f2508e;
                    bVar29.M = typedArray.getDimensionPixelSize(index, bVar29.M);
                    break;
                case 32:
                    b bVar30 = aVar.f2508e;
                    bVar30.f2562u = u(typedArray, index, bVar30.f2562u);
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    b bVar31 = aVar.f2508e;
                    bVar31.f2563v = u(typedArray, index, bVar31.f2563v);
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    b bVar32 = aVar.f2508e;
                    bVar32.J = typedArray.getDimensionPixelSize(index, bVar32.J);
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    b bVar33 = aVar.f2508e;
                    bVar33.f2553o = u(typedArray, index, bVar33.f2553o);
                    break;
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    b bVar34 = aVar.f2508e;
                    bVar34.f2551n = u(typedArray, index, bVar34.f2551n);
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    b bVar35 = aVar.f2508e;
                    bVar35.f2567z = typedArray.getFloat(index, bVar35.f2567z);
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    aVar.f2504a = typedArray.getResourceId(index, aVar.f2504a);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    b bVar36 = aVar.f2508e;
                    bVar36.W = typedArray.getFloat(index, bVar36.W);
                    break;
                case 40:
                    b bVar37 = aVar.f2508e;
                    bVar37.V = typedArray.getFloat(index, bVar37.V);
                    break;
                case 41:
                    b bVar38 = aVar.f2508e;
                    bVar38.X = typedArray.getInt(index, bVar38.X);
                    break;
                case 42:
                    b bVar39 = aVar.f2508e;
                    bVar39.Y = typedArray.getInt(index, bVar39.Y);
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    d dVar3 = aVar.f2506c;
                    dVar3.f2586d = typedArray.getFloat(index, dVar3.f2586d);
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    e eVar = aVar.f2509f;
                    eVar.f2601m = true;
                    eVar.f2602n = typedArray.getDimension(index, eVar.f2602n);
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    e eVar2 = aVar.f2509f;
                    eVar2.f2591c = typedArray.getFloat(index, eVar2.f2591c);
                    break;
                case 46:
                    e eVar3 = aVar.f2509f;
                    eVar3.f2592d = typedArray.getFloat(index, eVar3.f2592d);
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    e eVar4 = aVar.f2509f;
                    eVar4.f2593e = typedArray.getFloat(index, eVar4.f2593e);
                    break;
                case 48:
                    e eVar5 = aVar.f2509f;
                    eVar5.f2594f = typedArray.getFloat(index, eVar5.f2594f);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    e eVar6 = aVar.f2509f;
                    eVar6.f2595g = typedArray.getDimension(index, eVar6.f2595g);
                    break;
                case 50:
                    e eVar7 = aVar.f2509f;
                    eVar7.f2596h = typedArray.getDimension(index, eVar7.f2596h);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    e eVar8 = aVar.f2509f;
                    eVar8.f2598j = typedArray.getDimension(index, eVar8.f2598j);
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    e eVar9 = aVar.f2509f;
                    eVar9.f2599k = typedArray.getDimension(index, eVar9.f2599k);
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    e eVar10 = aVar.f2509f;
                    eVar10.f2600l = typedArray.getDimension(index, eVar10.f2600l);
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    b bVar40 = aVar.f2508e;
                    bVar40.Z = typedArray.getInt(index, bVar40.Z);
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    b bVar41 = aVar.f2508e;
                    bVar41.f2526a0 = typedArray.getInt(index, bVar41.f2526a0);
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    b bVar42 = aVar.f2508e;
                    bVar42.f2528b0 = typedArray.getDimensionPixelSize(index, bVar42.f2528b0);
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    b bVar43 = aVar.f2508e;
                    bVar43.f2530c0 = typedArray.getDimensionPixelSize(index, bVar43.f2530c0);
                    break;
                case 58:
                    b bVar44 = aVar.f2508e;
                    bVar44.f2532d0 = typedArray.getDimensionPixelSize(index, bVar44.f2532d0);
                    break;
                case 59:
                    b bVar45 = aVar.f2508e;
                    bVar45.f2534e0 = typedArray.getDimensionPixelSize(index, bVar45.f2534e0);
                    break;
                case 60:
                    e eVar11 = aVar.f2509f;
                    eVar11.f2590b = typedArray.getFloat(index, eVar11.f2590b);
                    break;
                case 61:
                    b bVar46 = aVar.f2508e;
                    bVar46.B = u(typedArray, index, bVar46.B);
                    break;
                case 62:
                    b bVar47 = aVar.f2508e;
                    bVar47.C = typedArray.getDimensionPixelSize(index, bVar47.C);
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    b bVar48 = aVar.f2508e;
                    bVar48.D = typedArray.getFloat(index, bVar48.D);
                    break;
                case 64:
                    c cVar = aVar.f2507d;
                    cVar.f2570b = u(typedArray, index, cVar.f2570b);
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        aVar.f2507d.f2572d = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2507d.f2572d = i1.a.f28215c[typedArray.getInteger(index, 0)];
                        break;
                    }
                case 66:
                    aVar.f2507d.f2574f = typedArray.getInt(index, 0);
                    break;
                case 67:
                    c cVar2 = aVar.f2507d;
                    cVar2.f2577i = typedArray.getFloat(index, cVar2.f2577i);
                    break;
                case 68:
                    d dVar4 = aVar.f2506c;
                    dVar4.f2587e = typedArray.getFloat(index, dVar4.f2587e);
                    break;
                case 69:
                    aVar.f2508e.f2536f0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 70:
                    aVar.f2508e.f2538g0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    b bVar49 = aVar.f2508e;
                    bVar49.f2540h0 = typedArray.getInt(index, bVar49.f2540h0);
                    break;
                case 73:
                    b bVar50 = aVar.f2508e;
                    bVar50.f2542i0 = typedArray.getDimensionPixelSize(index, bVar50.f2542i0);
                    break;
                case 74:
                    aVar.f2508e.f2548l0 = typedArray.getString(index);
                    break;
                case 75:
                    b bVar51 = aVar.f2508e;
                    bVar51.f2556p0 = typedArray.getBoolean(index, bVar51.f2556p0);
                    break;
                case 76:
                    c cVar3 = aVar.f2507d;
                    cVar3.f2573e = typedArray.getInt(index, cVar3.f2573e);
                    break;
                case 77:
                    aVar.f2508e.f2550m0 = typedArray.getString(index);
                    break;
                case 78:
                    d dVar5 = aVar.f2506c;
                    dVar5.f2585c = typedArray.getInt(index, dVar5.f2585c);
                    break;
                case 79:
                    c cVar4 = aVar.f2507d;
                    cVar4.f2575g = typedArray.getFloat(index, cVar4.f2575g);
                    break;
                case 80:
                    b bVar52 = aVar.f2508e;
                    bVar52.f2552n0 = typedArray.getBoolean(index, bVar52.f2552n0);
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    b bVar53 = aVar.f2508e;
                    bVar53.f2554o0 = typedArray.getBoolean(index, bVar53.f2554o0);
                    break;
                case 82:
                    c cVar5 = aVar.f2507d;
                    cVar5.f2571c = typedArray.getInteger(index, cVar5.f2571c);
                    break;
                case 83:
                    e eVar12 = aVar.f2509f;
                    eVar12.f2597i = u(typedArray, index, eVar12.f2597i);
                    break;
                case 84:
                    c cVar6 = aVar.f2507d;
                    cVar6.f2579k = typedArray.getInteger(index, cVar6.f2579k);
                    break;
                case 85:
                    c cVar7 = aVar.f2507d;
                    cVar7.f2578j = typedArray.getFloat(index, cVar7.f2578j);
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2507d.f2582n = typedArray.getResourceId(index, -1);
                        c cVar8 = aVar.f2507d;
                        if (cVar8.f2582n != -1) {
                            cVar8.f2581m = -2;
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2507d.f2580l = typedArray.getString(index);
                        if (aVar.f2507d.f2580l.indexOf("/") > 0) {
                            aVar.f2507d.f2582n = typedArray.getResourceId(index, -1);
                            aVar.f2507d.f2581m = -2;
                            break;
                        } else {
                            aVar.f2507d.f2581m = -1;
                            break;
                        }
                    } else {
                        c cVar9 = aVar.f2507d;
                        cVar9.f2581m = typedArray.getInteger(index, cVar9.f2582n);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2496h.get(index));
                    break;
                case 88:
                case 89:
                case 90:
                default:
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2496h.get(index));
                    break;
                case 91:
                    b bVar54 = aVar.f2508e;
                    bVar54.f2560s = u(typedArray, index, bVar54.f2560s);
                    break;
                case 92:
                    b bVar55 = aVar.f2508e;
                    bVar55.f2561t = u(typedArray, index, bVar55.f2561t);
                    break;
                case 93:
                    b bVar56 = aVar.f2508e;
                    bVar56.N = typedArray.getDimensionPixelSize(index, bVar56.N);
                    break;
                case 94:
                    b bVar57 = aVar.f2508e;
                    bVar57.U = typedArray.getDimensionPixelSize(index, bVar57.U);
                    break;
                case 95:
                    v(aVar.f2508e, typedArray, index, 0);
                    break;
                case 96:
                    v(aVar.f2508e, typedArray, index, 1);
                    break;
                case 97:
                    b bVar58 = aVar.f2508e;
                    bVar58.f2558q0 = typedArray.getInt(index, bVar58.f2558q0);
                    break;
            }
        }
        b bVar59 = aVar.f2508e;
        if (bVar59.f2548l0 != null) {
            bVar59.f2546k0 = null;
        }
    }

    private static void z(a aVar, TypedArray typedArray) {
        int indexCount = typedArray.getIndexCount();
        a.C0029a c0029a = new a.C0029a();
        aVar.f2511h = c0029a;
        aVar.f2507d.f2569a = false;
        aVar.f2508e.f2527b = false;
        aVar.f2506c.f2583a = false;
        aVar.f2509f.f2589a = false;
        for (int i10 = 0; i10 < indexCount; i10++) {
            int index = typedArray.getIndex(i10);
            switch (f2497i.get(index)) {
                case 2:
                    c0029a.b(2, typedArray.getDimensionPixelSize(index, aVar.f2508e.K));
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
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2496h.get(index));
                    break;
                case 5:
                    c0029a.c(5, typedArray.getString(index));
                    break;
                case 6:
                    c0029a.b(6, typedArray.getDimensionPixelOffset(index, aVar.f2508e.E));
                    break;
                case 7:
                    c0029a.b(7, typedArray.getDimensionPixelOffset(index, aVar.f2508e.F));
                    break;
                case 8:
                    c0029a.b(8, typedArray.getDimensionPixelSize(index, aVar.f2508e.L));
                    break;
                case 11:
                    c0029a.b(11, typedArray.getDimensionPixelSize(index, aVar.f2508e.R));
                    break;
                case 12:
                    c0029a.b(12, typedArray.getDimensionPixelSize(index, aVar.f2508e.S));
                    break;
                case 13:
                    c0029a.b(13, typedArray.getDimensionPixelSize(index, aVar.f2508e.O));
                    break;
                case 14:
                    c0029a.b(14, typedArray.getDimensionPixelSize(index, aVar.f2508e.Q));
                    break;
                case 15:
                    c0029a.b(15, typedArray.getDimensionPixelSize(index, aVar.f2508e.T));
                    break;
                case 16:
                    c0029a.b(16, typedArray.getDimensionPixelSize(index, aVar.f2508e.P));
                    break;
                case 17:
                    c0029a.b(17, typedArray.getDimensionPixelOffset(index, aVar.f2508e.f2535f));
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    c0029a.b(18, typedArray.getDimensionPixelOffset(index, aVar.f2508e.f2537g));
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    c0029a.a(19, typedArray.getFloat(index, aVar.f2508e.f2539h));
                    break;
                case 20:
                    c0029a.a(20, typedArray.getFloat(index, aVar.f2508e.f2566y));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0029a.b(21, typedArray.getLayoutDimension(index, aVar.f2508e.f2533e));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0029a.b(22, f2495g[typedArray.getInt(index, aVar.f2506c.f2584b)]);
                    break;
                case 23:
                    c0029a.b(23, typedArray.getLayoutDimension(index, aVar.f2508e.f2531d));
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    c0029a.b(24, typedArray.getDimensionPixelSize(index, aVar.f2508e.H));
                    break;
                case 27:
                    c0029a.b(27, typedArray.getInt(index, aVar.f2508e.G));
                    break;
                case 28:
                    c0029a.b(28, typedArray.getDimensionPixelSize(index, aVar.f2508e.I));
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    c0029a.b(31, typedArray.getDimensionPixelSize(index, aVar.f2508e.M));
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    c0029a.b(34, typedArray.getDimensionPixelSize(index, aVar.f2508e.J));
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    c0029a.a(37, typedArray.getFloat(index, aVar.f2508e.f2567z));
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    int resourceId = typedArray.getResourceId(index, aVar.f2504a);
                    aVar.f2504a = resourceId;
                    c0029a.b(38, resourceId);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    c0029a.a(39, typedArray.getFloat(index, aVar.f2508e.W));
                    break;
                case 40:
                    c0029a.a(40, typedArray.getFloat(index, aVar.f2508e.V));
                    break;
                case 41:
                    c0029a.b(41, typedArray.getInt(index, aVar.f2508e.X));
                    break;
                case 42:
                    c0029a.b(42, typedArray.getInt(index, aVar.f2508e.Y));
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    c0029a.a(43, typedArray.getFloat(index, aVar.f2506c.f2586d));
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    c0029a.d(44, true);
                    c0029a.a(44, typedArray.getDimension(index, aVar.f2509f.f2602n));
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    c0029a.a(45, typedArray.getFloat(index, aVar.f2509f.f2591c));
                    break;
                case 46:
                    c0029a.a(46, typedArray.getFloat(index, aVar.f2509f.f2592d));
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    c0029a.a(47, typedArray.getFloat(index, aVar.f2509f.f2593e));
                    break;
                case 48:
                    c0029a.a(48, typedArray.getFloat(index, aVar.f2509f.f2594f));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    c0029a.a(49, typedArray.getDimension(index, aVar.f2509f.f2595g));
                    break;
                case 50:
                    c0029a.a(50, typedArray.getDimension(index, aVar.f2509f.f2596h));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    c0029a.a(51, typedArray.getDimension(index, aVar.f2509f.f2598j));
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    c0029a.a(52, typedArray.getDimension(index, aVar.f2509f.f2599k));
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    c0029a.a(53, typedArray.getDimension(index, aVar.f2509f.f2600l));
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    c0029a.b(54, typedArray.getInt(index, aVar.f2508e.Z));
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    c0029a.b(55, typedArray.getInt(index, aVar.f2508e.f2526a0));
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    c0029a.b(56, typedArray.getDimensionPixelSize(index, aVar.f2508e.f2528b0));
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    c0029a.b(57, typedArray.getDimensionPixelSize(index, aVar.f2508e.f2530c0));
                    break;
                case 58:
                    c0029a.b(58, typedArray.getDimensionPixelSize(index, aVar.f2508e.f2532d0));
                    break;
                case 59:
                    c0029a.b(59, typedArray.getDimensionPixelSize(index, aVar.f2508e.f2534e0));
                    break;
                case 60:
                    c0029a.a(60, typedArray.getFloat(index, aVar.f2509f.f2590b));
                    break;
                case 62:
                    c0029a.b(62, typedArray.getDimensionPixelSize(index, aVar.f2508e.C));
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    c0029a.a(63, typedArray.getFloat(index, aVar.f2508e.D));
                    break;
                case 64:
                    c0029a.b(64, u(typedArray, index, aVar.f2507d.f2570b));
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        c0029a.c(65, typedArray.getString(index));
                        break;
                    } else {
                        c0029a.c(65, i1.a.f28215c[typedArray.getInteger(index, 0)]);
                        break;
                    }
                case 66:
                    c0029a.b(66, typedArray.getInt(index, 0));
                    break;
                case 67:
                    c0029a.a(67, typedArray.getFloat(index, aVar.f2507d.f2577i));
                    break;
                case 68:
                    c0029a.a(68, typedArray.getFloat(index, aVar.f2506c.f2587e));
                    break;
                case 69:
                    c0029a.a(69, typedArray.getFloat(index, 1.0f));
                    break;
                case 70:
                    c0029a.a(70, typedArray.getFloat(index, 1.0f));
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    c0029a.b(72, typedArray.getInt(index, aVar.f2508e.f2540h0));
                    break;
                case 73:
                    c0029a.b(73, typedArray.getDimensionPixelSize(index, aVar.f2508e.f2542i0));
                    break;
                case 74:
                    c0029a.c(74, typedArray.getString(index));
                    break;
                case 75:
                    c0029a.d(75, typedArray.getBoolean(index, aVar.f2508e.f2556p0));
                    break;
                case 76:
                    c0029a.b(76, typedArray.getInt(index, aVar.f2507d.f2573e));
                    break;
                case 77:
                    c0029a.c(77, typedArray.getString(index));
                    break;
                case 78:
                    c0029a.b(78, typedArray.getInt(index, aVar.f2506c.f2585c));
                    break;
                case 79:
                    c0029a.a(79, typedArray.getFloat(index, aVar.f2507d.f2575g));
                    break;
                case 80:
                    c0029a.d(80, typedArray.getBoolean(index, aVar.f2508e.f2552n0));
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    c0029a.d(81, typedArray.getBoolean(index, aVar.f2508e.f2554o0));
                    break;
                case 82:
                    c0029a.b(82, typedArray.getInteger(index, aVar.f2507d.f2571c));
                    break;
                case 83:
                    c0029a.b(83, u(typedArray, index, aVar.f2509f.f2597i));
                    break;
                case 84:
                    c0029a.b(84, typedArray.getInteger(index, aVar.f2507d.f2579k));
                    break;
                case 85:
                    c0029a.a(85, typedArray.getFloat(index, aVar.f2507d.f2578j));
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2507d.f2582n = typedArray.getResourceId(index, -1);
                        c0029a.b(89, aVar.f2507d.f2582n);
                        c cVar = aVar.f2507d;
                        if (cVar.f2582n != -1) {
                            cVar.f2581m = -2;
                            c0029a.b(88, -2);
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2507d.f2580l = typedArray.getString(index);
                        c0029a.c(90, aVar.f2507d.f2580l);
                        if (aVar.f2507d.f2580l.indexOf("/") > 0) {
                            aVar.f2507d.f2582n = typedArray.getResourceId(index, -1);
                            c0029a.b(89, aVar.f2507d.f2582n);
                            aVar.f2507d.f2581m = -2;
                            c0029a.b(88, -2);
                            break;
                        } else {
                            aVar.f2507d.f2581m = -1;
                            c0029a.b(88, -1);
                            break;
                        }
                    } else {
                        c cVar2 = aVar.f2507d;
                        cVar2.f2581m = typedArray.getInteger(index, cVar2.f2582n);
                        c0029a.b(88, aVar.f2507d.f2581m);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2496h.get(index));
                    break;
                case 93:
                    c0029a.b(93, typedArray.getDimensionPixelSize(index, aVar.f2508e.N));
                    break;
                case 94:
                    c0029a.b(94, typedArray.getDimensionPixelSize(index, aVar.f2508e.U));
                    break;
                case 95:
                    v(c0029a, typedArray, index, 0);
                    break;
                case 96:
                    v(c0029a, typedArray, index, 1);
                    break;
                case 97:
                    c0029a.b(97, typedArray.getInt(index, aVar.f2508e.f2558q0));
                    break;
                case 98:
                    if (m1.b.f37579d) {
                        int resourceId2 = typedArray.getResourceId(index, aVar.f2504a);
                        aVar.f2504a = resourceId2;
                        if (resourceId2 == -1) {
                            aVar.f2505b = typedArray.getString(index);
                            break;
                        } else {
                            break;
                        }
                    } else if (typedArray.peekValue(index).type == 3) {
                        aVar.f2505b = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2504a = typedArray.getResourceId(index, aVar.f2504a);
                        break;
                    }
                case 99:
                    c0029a.d(99, typedArray.getBoolean(index, aVar.f2508e.f2541i));
                    break;
            }
        }
    }

    public void A(int i10, float f10) {
        r(i10).f2508e.f2566y = f10;
    }

    public void B(int i10, float f10) {
        r(i10).f2508e.W = f10;
    }

    public void C(int i10, int i11, int i12) {
        a r10 = r(i10);
        switch (i11) {
            case 1:
                r10.f2508e.H = i12;
                return;
            case 2:
                r10.f2508e.I = i12;
                return;
            case 3:
                r10.f2508e.J = i12;
                return;
            case 4:
                r10.f2508e.K = i12;
                return;
            case 5:
                r10.f2508e.N = i12;
                return;
            case 6:
                r10.f2508e.M = i12;
                return;
            case 7:
                r10.f2508e.L = i12;
                return;
            default:
                throw new IllegalArgumentException("unknown constraint");
        }
    }

    public void D(int i10, float f10) {
        r(i10).f2508e.f2567z = f10;
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
        HashSet hashSet = new HashSet(this.f2503f.keySet());
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            int id2 = childAt.getId();
            if (!this.f2503f.containsKey(Integer.valueOf(id2))) {
                Log.w("ConstraintSet", "id unknown " + m1.a.a(childAt));
            } else if (this.f2502e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            } else {
                if (id2 != -1) {
                    if (this.f2503f.containsKey(Integer.valueOf(id2))) {
                        hashSet.remove(Integer.valueOf(id2));
                        a aVar = (a) this.f2503f.get(Integer.valueOf(id2));
                        if (aVar != null) {
                            if (childAt instanceof Barrier) {
                                aVar.f2508e.f2544j0 = 1;
                                Barrier barrier = (Barrier) childAt;
                                barrier.setId(id2);
                                barrier.setType(aVar.f2508e.f2540h0);
                                barrier.setMargin(aVar.f2508e.f2542i0);
                                barrier.setAllowsGoneWidget(aVar.f2508e.f2556p0);
                                b bVar = aVar.f2508e;
                                int[] iArr = bVar.f2546k0;
                                if (iArr != null) {
                                    barrier.setReferencedIds(iArr);
                                } else {
                                    String str = bVar.f2548l0;
                                    if (str != null) {
                                        bVar.f2546k0 = o(barrier, str);
                                        barrier.setReferencedIds(aVar.f2508e.f2546k0);
                                    }
                                }
                            }
                            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
                            layoutParams.a();
                            aVar.b(layoutParams);
                            if (z10) {
                                androidx.constraintlayout.widget.a.c(childAt, aVar.f2510g);
                            }
                            childAt.setLayoutParams(layoutParams);
                            d dVar = aVar.f2506c;
                            if (dVar.f2585c == 0) {
                                childAt.setVisibility(dVar.f2584b);
                            }
                            childAt.setAlpha(aVar.f2506c.f2586d);
                            childAt.setRotation(aVar.f2509f.f2590b);
                            childAt.setRotationX(aVar.f2509f.f2591c);
                            childAt.setRotationY(aVar.f2509f.f2592d);
                            childAt.setScaleX(aVar.f2509f.f2593e);
                            childAt.setScaleY(aVar.f2509f.f2594f);
                            e eVar = aVar.f2509f;
                            if (eVar.f2597i != -1) {
                                if (((View) childAt.getParent()).findViewById(aVar.f2509f.f2597i) != null) {
                                    float top = (findViewById.getTop() + findViewById.getBottom()) / 2.0f;
                                    float left = (findViewById.getLeft() + findViewById.getRight()) / 2.0f;
                                    if (childAt.getRight() - childAt.getLeft() > 0 && childAt.getBottom() - childAt.getTop() > 0) {
                                        childAt.setPivotX(left - childAt.getLeft());
                                        childAt.setPivotY(top - childAt.getTop());
                                    }
                                }
                            } else {
                                if (!Float.isNaN(eVar.f2595g)) {
                                    childAt.setPivotX(aVar.f2509f.f2595g);
                                }
                                if (!Float.isNaN(aVar.f2509f.f2596h)) {
                                    childAt.setPivotY(aVar.f2509f.f2596h);
                                }
                            }
                            childAt.setTranslationX(aVar.f2509f.f2598j);
                            childAt.setTranslationY(aVar.f2509f.f2599k);
                            childAt.setTranslationZ(aVar.f2509f.f2600l);
                            e eVar2 = aVar.f2509f;
                            if (eVar2.f2601m) {
                                childAt.setElevation(eVar2.f2602n);
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
            a aVar2 = (a) this.f2503f.get(num);
            if (aVar2 != null) {
                if (aVar2.f2508e.f2544j0 == 1) {
                    Barrier barrier2 = new Barrier(constraintLayout.getContext());
                    barrier2.setId(num.intValue());
                    b bVar2 = aVar2.f2508e;
                    int[] iArr2 = bVar2.f2546k0;
                    if (iArr2 != null) {
                        barrier2.setReferencedIds(iArr2);
                    } else {
                        String str2 = bVar2.f2548l0;
                        if (str2 != null) {
                            bVar2.f2546k0 = o(barrier2, str2);
                            barrier2.setReferencedIds(aVar2.f2508e.f2546k0);
                        }
                    }
                    barrier2.setType(aVar2.f2508e.f2540h0);
                    barrier2.setMargin(aVar2.f2508e.f2542i0);
                    ConstraintLayout.LayoutParams generateDefaultLayoutParams = constraintLayout.generateDefaultLayoutParams();
                    barrier2.o();
                    aVar2.b(generateDefaultLayoutParams);
                    constraintLayout.addView(barrier2, generateDefaultLayoutParams);
                }
                if (aVar2.f2508e.f2525a) {
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
        this.f2503f.clear();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
            int id2 = childAt.getId();
            if (this.f2502e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            }
            if (!this.f2503f.containsKey(Integer.valueOf(id2))) {
                this.f2503f.put(Integer.valueOf(id2), new a());
            }
            a aVar = (a) this.f2503f.get(Integer.valueOf(id2));
            if (aVar != null) {
                aVar.f2510g = androidx.constraintlayout.widget.a.a(this.f2501d, childAt);
                aVar.d(id2, layoutParams);
                aVar.f2506c.f2584b = childAt.getVisibility();
                aVar.f2506c.f2586d = childAt.getAlpha();
                aVar.f2509f.f2590b = childAt.getRotation();
                aVar.f2509f.f2591c = childAt.getRotationX();
                aVar.f2509f.f2592d = childAt.getRotationY();
                aVar.f2509f.f2593e = childAt.getScaleX();
                aVar.f2509f.f2594f = childAt.getScaleY();
                float pivotX = childAt.getPivotX();
                float pivotY = childAt.getPivotY();
                if (pivotX != 0.0d || pivotY != 0.0d) {
                    e eVar = aVar.f2509f;
                    eVar.f2595g = pivotX;
                    eVar.f2596h = pivotY;
                }
                aVar.f2509f.f2598j = childAt.getTranslationX();
                aVar.f2509f.f2599k = childAt.getTranslationY();
                aVar.f2509f.f2600l = childAt.getTranslationZ();
                e eVar2 = aVar.f2509f;
                if (eVar2.f2601m) {
                    eVar2.f2602n = childAt.getElevation();
                }
                if (childAt instanceof Barrier) {
                    Barrier barrier = (Barrier) childAt;
                    aVar.f2508e.f2556p0 = barrier.getAllowsGoneWidget();
                    aVar.f2508e.f2546k0 = barrier.getReferencedIds();
                    aVar.f2508e.f2540h0 = barrier.getType();
                    aVar.f2508e.f2542i0 = barrier.getMargin();
                }
            }
        }
    }

    public void g(int i10, int i11, int i12, int i13) {
        if (!this.f2503f.containsKey(Integer.valueOf(i10))) {
            this.f2503f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2503f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2508e;
                    bVar.f2543j = i12;
                    bVar.f2545k = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2508e;
                    bVar2.f2545k = i12;
                    bVar2.f2543j = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("left to " + E(i13) + " undefined");
                }
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2508e;
                    bVar3.f2547l = i12;
                    bVar3.f2549m = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar4 = aVar.f2508e;
                    bVar4.f2549m = i12;
                    bVar4.f2547l = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2508e;
                    bVar5.f2551n = i12;
                    bVar5.f2553o = -1;
                    bVar5.f2559r = -1;
                    bVar5.f2560s = -1;
                    bVar5.f2561t = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar6 = aVar.f2508e;
                    bVar6.f2553o = i12;
                    bVar6.f2551n = -1;
                    bVar6.f2559r = -1;
                    bVar6.f2560s = -1;
                    bVar6.f2561t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2508e;
                    bVar7.f2557q = i12;
                    bVar7.f2555p = -1;
                    bVar7.f2559r = -1;
                    bVar7.f2560s = -1;
                    bVar7.f2561t = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar8 = aVar.f2508e;
                    bVar8.f2555p = i12;
                    bVar8.f2557q = -1;
                    bVar8.f2559r = -1;
                    bVar8.f2560s = -1;
                    bVar8.f2561t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2508e;
                    bVar9.f2559r = i12;
                    bVar9.f2557q = -1;
                    bVar9.f2555p = -1;
                    bVar9.f2551n = -1;
                    bVar9.f2553o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2508e;
                    bVar10.f2560s = i12;
                    bVar10.f2557q = -1;
                    bVar10.f2555p = -1;
                    bVar10.f2551n = -1;
                    bVar10.f2553o = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar11 = aVar.f2508e;
                    bVar11.f2561t = i12;
                    bVar11.f2557q = -1;
                    bVar11.f2555p = -1;
                    bVar11.f2551n = -1;
                    bVar11.f2553o = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2508e;
                    bVar12.f2563v = i12;
                    bVar12.f2562u = -1;
                    return;
                } else if (i13 == 7) {
                    b bVar13 = aVar.f2508e;
                    bVar13.f2562u = i12;
                    bVar13.f2563v = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2508e;
                    bVar14.f2565x = i12;
                    bVar14.f2564w = -1;
                    return;
                } else if (i13 == 6) {
                    b bVar15 = aVar.f2508e;
                    bVar15.f2564w = i12;
                    bVar15.f2565x = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void h(int i10, int i11, int i12, int i13, int i14) {
        if (!this.f2503f.containsKey(Integer.valueOf(i10))) {
            this.f2503f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2503f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2508e;
                    bVar.f2543j = i12;
                    bVar.f2545k = -1;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2508e;
                    bVar2.f2545k = i12;
                    bVar2.f2543j = -1;
                } else {
                    throw new IllegalArgumentException("Left to " + E(i13) + " undefined");
                }
                aVar.f2508e.H = i14;
                return;
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2508e;
                    bVar3.f2547l = i12;
                    bVar3.f2549m = -1;
                } else if (i13 != 2) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar4 = aVar.f2508e;
                    bVar4.f2549m = i12;
                    bVar4.f2547l = -1;
                }
                aVar.f2508e.I = i14;
                return;
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2508e;
                    bVar5.f2551n = i12;
                    bVar5.f2553o = -1;
                    bVar5.f2559r = -1;
                    bVar5.f2560s = -1;
                    bVar5.f2561t = -1;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar6 = aVar.f2508e;
                    bVar6.f2553o = i12;
                    bVar6.f2551n = -1;
                    bVar6.f2559r = -1;
                    bVar6.f2560s = -1;
                    bVar6.f2561t = -1;
                }
                aVar.f2508e.J = i14;
                return;
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2508e;
                    bVar7.f2557q = i12;
                    bVar7.f2555p = -1;
                    bVar7.f2559r = -1;
                    bVar7.f2560s = -1;
                    bVar7.f2561t = -1;
                } else if (i13 != 3) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar8 = aVar.f2508e;
                    bVar8.f2555p = i12;
                    bVar8.f2557q = -1;
                    bVar8.f2559r = -1;
                    bVar8.f2560s = -1;
                    bVar8.f2561t = -1;
                }
                aVar.f2508e.K = i14;
                return;
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2508e;
                    bVar9.f2559r = i12;
                    bVar9.f2557q = -1;
                    bVar9.f2555p = -1;
                    bVar9.f2551n = -1;
                    bVar9.f2553o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2508e;
                    bVar10.f2560s = i12;
                    bVar10.f2557q = -1;
                    bVar10.f2555p = -1;
                    bVar10.f2551n = -1;
                    bVar10.f2553o = -1;
                    return;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar11 = aVar.f2508e;
                    bVar11.f2561t = i12;
                    bVar11.f2557q = -1;
                    bVar11.f2555p = -1;
                    bVar11.f2551n = -1;
                    bVar11.f2553o = -1;
                    return;
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2508e;
                    bVar12.f2563v = i12;
                    bVar12.f2562u = -1;
                } else if (i13 != 7) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar13 = aVar.f2508e;
                    bVar13.f2562u = i12;
                    bVar13.f2563v = -1;
                }
                aVar.f2508e.M = i14;
                return;
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2508e;
                    bVar14.f2565x = i12;
                    bVar14.f2564w = -1;
                } else if (i13 != 6) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar15 = aVar.f2508e;
                    bVar15.f2564w = i12;
                    bVar15.f2565x = -1;
                }
                aVar.f2508e.L = i14;
                return;
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void i(int i10, int i11, int i12, float f10) {
        b bVar = r(i10).f2508e;
        bVar.B = i11;
        bVar.C = i12;
        bVar.D = f10;
    }

    public void j(int i10, int i11) {
        r(i10).f2508e.Z = i11;
    }

    public void k(int i10, int i11) {
        r(i10).f2508e.f2533e = i11;
    }

    public void l(int i10, int i11) {
        r(i10).f2508e.f2531d = i11;
    }

    public void m(int i10, boolean z10) {
        r(i10).f2508e.f2554o0 = z10;
    }

    public void n(int i10, boolean z10) {
        r(i10).f2508e.f2552n0 = z10;
    }

    public void p(int i10, int i11, int i12, int i13, int[] iArr, float[] fArr, int i14) {
        if (iArr.length >= 2) {
            if (fArr != null && fArr.length != iArr.length) {
                throw new IllegalArgumentException("must have 2 or more widgets in a chain");
            }
            if (fArr != null) {
                r(iArr[0]).f2508e.V = fArr[0];
            }
            r(iArr[0]).f2508e.Y = i14;
            h(iArr[0], 3, i10, i11, 0);
            for (int i15 = 1; i15 < iArr.length; i15++) {
                int i16 = i15 - 1;
                h(iArr[i15], 3, iArr[i16], 4, 0);
                h(iArr[i16], 4, iArr[i15], 3, 0);
                if (fArr != null) {
                    r(iArr[i15]).f2508e.V = fArr[i15];
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
                        q10.f2508e.f2525a = true;
                    }
                    this.f2503f.put(Integer.valueOf(q10.f2504a), q10);
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
