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
    private static final int[] f2607g = {0, 4, 8};

    /* renamed from: h  reason: collision with root package name */
    private static SparseIntArray f2608h = new SparseIntArray();

    /* renamed from: i  reason: collision with root package name */
    private static SparseIntArray f2609i = new SparseIntArray();

    /* renamed from: a  reason: collision with root package name */
    public String f2610a = "";

    /* renamed from: b  reason: collision with root package name */
    private String[] f2611b = new String[0];

    /* renamed from: c  reason: collision with root package name */
    public int f2612c = 0;

    /* renamed from: d  reason: collision with root package name */
    private HashMap f2613d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private boolean f2614e = true;

    /* renamed from: f  reason: collision with root package name */
    private HashMap f2615f = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        int f2616a;

        /* renamed from: b  reason: collision with root package name */
        String f2617b;

        /* renamed from: c  reason: collision with root package name */
        public final d f2618c = new d();

        /* renamed from: d  reason: collision with root package name */
        public final c f2619d = new c();

        /* renamed from: e  reason: collision with root package name */
        public final b f2620e = new b();

        /* renamed from: f  reason: collision with root package name */
        public final e f2621f = new e();

        /* renamed from: g  reason: collision with root package name */
        public HashMap f2622g = new HashMap();

        /* renamed from: h  reason: collision with root package name */
        C0030a f2623h;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.constraintlayout.widget.ConstraintSet$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class C0030a {

            /* renamed from: a  reason: collision with root package name */
            int[] f2624a = new int[10];

            /* renamed from: b  reason: collision with root package name */
            int[] f2625b = new int[10];

            /* renamed from: c  reason: collision with root package name */
            int f2626c = 0;

            /* renamed from: d  reason: collision with root package name */
            int[] f2627d = new int[10];

            /* renamed from: e  reason: collision with root package name */
            float[] f2628e = new float[10];

            /* renamed from: f  reason: collision with root package name */
            int f2629f = 0;

            /* renamed from: g  reason: collision with root package name */
            int[] f2630g = new int[5];

            /* renamed from: h  reason: collision with root package name */
            String[] f2631h = new String[5];

            /* renamed from: i  reason: collision with root package name */
            int f2632i = 0;

            /* renamed from: j  reason: collision with root package name */
            int[] f2633j = new int[4];

            /* renamed from: k  reason: collision with root package name */
            boolean[] f2634k = new boolean[4];

            /* renamed from: l  reason: collision with root package name */
            int f2635l = 0;

            C0030a() {
            }

            void a(int i10, float f10) {
                int i11 = this.f2629f;
                int[] iArr = this.f2627d;
                if (i11 >= iArr.length) {
                    this.f2627d = Arrays.copyOf(iArr, iArr.length * 2);
                    float[] fArr = this.f2628e;
                    this.f2628e = Arrays.copyOf(fArr, fArr.length * 2);
                }
                int[] iArr2 = this.f2627d;
                int i12 = this.f2629f;
                iArr2[i12] = i10;
                float[] fArr2 = this.f2628e;
                this.f2629f = i12 + 1;
                fArr2[i12] = f10;
            }

            void b(int i10, int i11) {
                int i12 = this.f2626c;
                int[] iArr = this.f2624a;
                if (i12 >= iArr.length) {
                    this.f2624a = Arrays.copyOf(iArr, iArr.length * 2);
                    int[] iArr2 = this.f2625b;
                    this.f2625b = Arrays.copyOf(iArr2, iArr2.length * 2);
                }
                int[] iArr3 = this.f2624a;
                int i13 = this.f2626c;
                iArr3[i13] = i10;
                int[] iArr4 = this.f2625b;
                this.f2626c = i13 + 1;
                iArr4[i13] = i11;
            }

            void c(int i10, String str) {
                int i11 = this.f2632i;
                int[] iArr = this.f2630g;
                if (i11 >= iArr.length) {
                    this.f2630g = Arrays.copyOf(iArr, iArr.length * 2);
                    String[] strArr = this.f2631h;
                    this.f2631h = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                }
                int[] iArr2 = this.f2630g;
                int i12 = this.f2632i;
                iArr2[i12] = i10;
                String[] strArr2 = this.f2631h;
                this.f2632i = i12 + 1;
                strArr2[i12] = str;
            }

            void d(int i10, boolean z10) {
                int i11 = this.f2635l;
                int[] iArr = this.f2633j;
                if (i11 >= iArr.length) {
                    this.f2633j = Arrays.copyOf(iArr, iArr.length * 2);
                    boolean[] zArr = this.f2634k;
                    this.f2634k = Arrays.copyOf(zArr, zArr.length * 2);
                }
                int[] iArr2 = this.f2633j;
                int i12 = this.f2635l;
                iArr2[i12] = i10;
                boolean[] zArr2 = this.f2634k;
                this.f2635l = i12 + 1;
                zArr2[i12] = z10;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void d(int i10, ConstraintLayout.LayoutParams layoutParams) {
            this.f2616a = i10;
            b bVar = this.f2620e;
            bVar.f2655j = layoutParams.f2539e;
            bVar.f2657k = layoutParams.f2541f;
            bVar.f2659l = layoutParams.f2543g;
            bVar.f2661m = layoutParams.f2545h;
            bVar.f2663n = layoutParams.f2547i;
            bVar.f2665o = layoutParams.f2549j;
            bVar.f2667p = layoutParams.f2551k;
            bVar.f2669q = layoutParams.f2553l;
            bVar.f2671r = layoutParams.f2555m;
            bVar.f2672s = layoutParams.f2557n;
            bVar.f2673t = layoutParams.f2559o;
            bVar.f2674u = layoutParams.f2567s;
            bVar.f2675v = layoutParams.f2569t;
            bVar.f2676w = layoutParams.f2571u;
            bVar.f2677x = layoutParams.f2573v;
            bVar.f2678y = layoutParams.G;
            bVar.f2679z = layoutParams.H;
            bVar.A = layoutParams.I;
            bVar.B = layoutParams.f2561p;
            bVar.C = layoutParams.f2563q;
            bVar.D = layoutParams.f2565r;
            bVar.E = layoutParams.X;
            bVar.F = layoutParams.Y;
            bVar.G = layoutParams.Z;
            bVar.f2651h = layoutParams.f2535c;
            bVar.f2647f = layoutParams.f2531a;
            bVar.f2649g = layoutParams.f2533b;
            bVar.f2643d = ((ViewGroup.MarginLayoutParams) layoutParams).width;
            bVar.f2645e = ((ViewGroup.MarginLayoutParams) layoutParams).height;
            bVar.H = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin;
            bVar.I = ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
            bVar.J = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin;
            bVar.K = ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
            bVar.N = layoutParams.D;
            bVar.V = layoutParams.M;
            bVar.W = layoutParams.L;
            bVar.Y = layoutParams.O;
            bVar.X = layoutParams.N;
            bVar.f2664n0 = layoutParams.f2532a0;
            bVar.f2666o0 = layoutParams.f2534b0;
            bVar.Z = layoutParams.P;
            bVar.f2638a0 = layoutParams.Q;
            bVar.f2640b0 = layoutParams.T;
            bVar.f2642c0 = layoutParams.U;
            bVar.f2644d0 = layoutParams.R;
            bVar.f2646e0 = layoutParams.S;
            bVar.f2648f0 = layoutParams.V;
            bVar.f2650g0 = layoutParams.W;
            bVar.f2662m0 = layoutParams.f2536c0;
            bVar.P = layoutParams.f2577x;
            bVar.R = layoutParams.f2579z;
            bVar.O = layoutParams.f2575w;
            bVar.Q = layoutParams.f2578y;
            bVar.T = layoutParams.A;
            bVar.S = layoutParams.B;
            bVar.U = layoutParams.C;
            bVar.f2670q0 = layoutParams.f2538d0;
            bVar.L = layoutParams.getMarginEnd();
            this.f2620e.M = layoutParams.getMarginStart();
        }

        public void b(ConstraintLayout.LayoutParams layoutParams) {
            b bVar = this.f2620e;
            layoutParams.f2539e = bVar.f2655j;
            layoutParams.f2541f = bVar.f2657k;
            layoutParams.f2543g = bVar.f2659l;
            layoutParams.f2545h = bVar.f2661m;
            layoutParams.f2547i = bVar.f2663n;
            layoutParams.f2549j = bVar.f2665o;
            layoutParams.f2551k = bVar.f2667p;
            layoutParams.f2553l = bVar.f2669q;
            layoutParams.f2555m = bVar.f2671r;
            layoutParams.f2557n = bVar.f2672s;
            layoutParams.f2559o = bVar.f2673t;
            layoutParams.f2567s = bVar.f2674u;
            layoutParams.f2569t = bVar.f2675v;
            layoutParams.f2571u = bVar.f2676w;
            layoutParams.f2573v = bVar.f2677x;
            ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin = bVar.H;
            ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin = bVar.I;
            ((ViewGroup.MarginLayoutParams) layoutParams).topMargin = bVar.J;
            ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin = bVar.K;
            layoutParams.A = bVar.T;
            layoutParams.B = bVar.S;
            layoutParams.f2577x = bVar.P;
            layoutParams.f2579z = bVar.R;
            layoutParams.G = bVar.f2678y;
            layoutParams.H = bVar.f2679z;
            layoutParams.f2561p = bVar.B;
            layoutParams.f2563q = bVar.C;
            layoutParams.f2565r = bVar.D;
            layoutParams.I = bVar.A;
            layoutParams.X = bVar.E;
            layoutParams.Y = bVar.F;
            layoutParams.M = bVar.V;
            layoutParams.L = bVar.W;
            layoutParams.O = bVar.Y;
            layoutParams.N = bVar.X;
            layoutParams.f2532a0 = bVar.f2664n0;
            layoutParams.f2534b0 = bVar.f2666o0;
            layoutParams.P = bVar.Z;
            layoutParams.Q = bVar.f2638a0;
            layoutParams.T = bVar.f2640b0;
            layoutParams.U = bVar.f2642c0;
            layoutParams.R = bVar.f2644d0;
            layoutParams.S = bVar.f2646e0;
            layoutParams.V = bVar.f2648f0;
            layoutParams.W = bVar.f2650g0;
            layoutParams.Z = bVar.G;
            layoutParams.f2535c = bVar.f2651h;
            layoutParams.f2531a = bVar.f2647f;
            layoutParams.f2533b = bVar.f2649g;
            ((ViewGroup.MarginLayoutParams) layoutParams).width = bVar.f2643d;
            ((ViewGroup.MarginLayoutParams) layoutParams).height = bVar.f2645e;
            String str = bVar.f2662m0;
            if (str != null) {
                layoutParams.f2536c0 = str;
            }
            layoutParams.f2538d0 = bVar.f2670q0;
            layoutParams.setMarginStart(bVar.M);
            layoutParams.setMarginEnd(this.f2620e.L);
            layoutParams.a();
        }

        /* renamed from: c */
        public a clone() {
            a aVar = new a();
            aVar.f2620e.a(this.f2620e);
            aVar.f2619d.a(this.f2619d);
            aVar.f2618c.a(this.f2618c);
            aVar.f2621f.a(this.f2621f);
            aVar.f2616a = this.f2616a;
            aVar.f2623h = this.f2623h;
            return aVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: r0  reason: collision with root package name */
        private static SparseIntArray f2636r0;

        /* renamed from: d  reason: collision with root package name */
        public int f2643d;

        /* renamed from: e  reason: collision with root package name */
        public int f2645e;

        /* renamed from: k0  reason: collision with root package name */
        public int[] f2658k0;

        /* renamed from: l0  reason: collision with root package name */
        public String f2660l0;

        /* renamed from: m0  reason: collision with root package name */
        public String f2662m0;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2637a = false;

        /* renamed from: b  reason: collision with root package name */
        public boolean f2639b = false;

        /* renamed from: c  reason: collision with root package name */
        public boolean f2641c = false;

        /* renamed from: f  reason: collision with root package name */
        public int f2647f = -1;

        /* renamed from: g  reason: collision with root package name */
        public int f2649g = -1;

        /* renamed from: h  reason: collision with root package name */
        public float f2651h = -1.0f;

        /* renamed from: i  reason: collision with root package name */
        public boolean f2653i = true;

        /* renamed from: j  reason: collision with root package name */
        public int f2655j = -1;

        /* renamed from: k  reason: collision with root package name */
        public int f2657k = -1;

        /* renamed from: l  reason: collision with root package name */
        public int f2659l = -1;

        /* renamed from: m  reason: collision with root package name */
        public int f2661m = -1;

        /* renamed from: n  reason: collision with root package name */
        public int f2663n = -1;

        /* renamed from: o  reason: collision with root package name */
        public int f2665o = -1;

        /* renamed from: p  reason: collision with root package name */
        public int f2667p = -1;

        /* renamed from: q  reason: collision with root package name */
        public int f2669q = -1;

        /* renamed from: r  reason: collision with root package name */
        public int f2671r = -1;

        /* renamed from: s  reason: collision with root package name */
        public int f2672s = -1;

        /* renamed from: t  reason: collision with root package name */
        public int f2673t = -1;

        /* renamed from: u  reason: collision with root package name */
        public int f2674u = -1;

        /* renamed from: v  reason: collision with root package name */
        public int f2675v = -1;

        /* renamed from: w  reason: collision with root package name */
        public int f2676w = -1;

        /* renamed from: x  reason: collision with root package name */
        public int f2677x = -1;

        /* renamed from: y  reason: collision with root package name */
        public float f2678y = 0.5f;

        /* renamed from: z  reason: collision with root package name */
        public float f2679z = 0.5f;
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
        public int f2638a0 = 0;

        /* renamed from: b0  reason: collision with root package name */
        public int f2640b0 = 0;

        /* renamed from: c0  reason: collision with root package name */
        public int f2642c0 = 0;

        /* renamed from: d0  reason: collision with root package name */
        public int f2644d0 = 0;

        /* renamed from: e0  reason: collision with root package name */
        public int f2646e0 = 0;

        /* renamed from: f0  reason: collision with root package name */
        public float f2648f0 = 1.0f;

        /* renamed from: g0  reason: collision with root package name */
        public float f2650g0 = 1.0f;

        /* renamed from: h0  reason: collision with root package name */
        public int f2652h0 = -1;

        /* renamed from: i0  reason: collision with root package name */
        public int f2654i0 = 0;

        /* renamed from: j0  reason: collision with root package name */
        public int f2656j0 = -1;

        /* renamed from: n0  reason: collision with root package name */
        public boolean f2664n0 = false;

        /* renamed from: o0  reason: collision with root package name */
        public boolean f2666o0 = false;

        /* renamed from: p0  reason: collision with root package name */
        public boolean f2668p0 = true;

        /* renamed from: q0  reason: collision with root package name */
        public int f2670q0 = 0;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2636r0 = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.C5, 24);
            f2636r0.append(androidx.constraintlayout.widget.d.D5, 25);
            f2636r0.append(androidx.constraintlayout.widget.d.F5, 28);
            f2636r0.append(androidx.constraintlayout.widget.d.G5, 29);
            f2636r0.append(androidx.constraintlayout.widget.d.L5, 35);
            f2636r0.append(androidx.constraintlayout.widget.d.K5, 34);
            f2636r0.append(androidx.constraintlayout.widget.d.f2840l5, 4);
            f2636r0.append(androidx.constraintlayout.widget.d.f2832k5, 3);
            f2636r0.append(androidx.constraintlayout.widget.d.f2816i5, 1);
            f2636r0.append(androidx.constraintlayout.widget.d.T5, 6);
            f2636r0.append(androidx.constraintlayout.widget.d.U5, 7);
            f2636r0.append(androidx.constraintlayout.widget.d.f2896s5, 17);
            f2636r0.append(androidx.constraintlayout.widget.d.f2904t5, 18);
            f2636r0.append(androidx.constraintlayout.widget.d.f2912u5, 19);
            f2636r0.append(androidx.constraintlayout.widget.d.f2784e5, 90);
            f2636r0.append(androidx.constraintlayout.widget.d.Q4, 26);
            f2636r0.append(androidx.constraintlayout.widget.d.H5, 31);
            f2636r0.append(androidx.constraintlayout.widget.d.I5, 32);
            f2636r0.append(androidx.constraintlayout.widget.d.f2888r5, 10);
            f2636r0.append(androidx.constraintlayout.widget.d.f2880q5, 9);
            f2636r0.append(androidx.constraintlayout.widget.d.X5, 13);
            f2636r0.append(androidx.constraintlayout.widget.d.f2751a6, 16);
            f2636r0.append(androidx.constraintlayout.widget.d.Y5, 14);
            f2636r0.append(androidx.constraintlayout.widget.d.V5, 11);
            f2636r0.append(androidx.constraintlayout.widget.d.Z5, 15);
            f2636r0.append(androidx.constraintlayout.widget.d.W5, 12);
            f2636r0.append(androidx.constraintlayout.widget.d.O5, 38);
            f2636r0.append(androidx.constraintlayout.widget.d.A5, 37);
            f2636r0.append(androidx.constraintlayout.widget.d.f2952z5, 39);
            f2636r0.append(androidx.constraintlayout.widget.d.N5, 40);
            f2636r0.append(androidx.constraintlayout.widget.d.f2944y5, 20);
            f2636r0.append(androidx.constraintlayout.widget.d.M5, 36);
            f2636r0.append(androidx.constraintlayout.widget.d.f2872p5, 5);
            f2636r0.append(androidx.constraintlayout.widget.d.B5, 91);
            f2636r0.append(androidx.constraintlayout.widget.d.J5, 91);
            f2636r0.append(androidx.constraintlayout.widget.d.E5, 91);
            f2636r0.append(androidx.constraintlayout.widget.d.f2824j5, 91);
            f2636r0.append(androidx.constraintlayout.widget.d.f2808h5, 91);
            f2636r0.append(androidx.constraintlayout.widget.d.T4, 23);
            f2636r0.append(androidx.constraintlayout.widget.d.V4, 27);
            f2636r0.append(androidx.constraintlayout.widget.d.X4, 30);
            f2636r0.append(androidx.constraintlayout.widget.d.Y4, 8);
            f2636r0.append(androidx.constraintlayout.widget.d.U4, 33);
            f2636r0.append(androidx.constraintlayout.widget.d.W4, 2);
            f2636r0.append(androidx.constraintlayout.widget.d.R4, 22);
            f2636r0.append(androidx.constraintlayout.widget.d.S4, 21);
            f2636r0.append(androidx.constraintlayout.widget.d.P5, 41);
            f2636r0.append(androidx.constraintlayout.widget.d.f2920v5, 42);
            f2636r0.append(androidx.constraintlayout.widget.d.f2800g5, 87);
            f2636r0.append(androidx.constraintlayout.widget.d.f2792f5, 88);
            f2636r0.append(androidx.constraintlayout.widget.d.f2760b6, 76);
            f2636r0.append(androidx.constraintlayout.widget.d.f2848m5, 61);
            f2636r0.append(androidx.constraintlayout.widget.d.f2864o5, 62);
            f2636r0.append(androidx.constraintlayout.widget.d.f2856n5, 63);
            f2636r0.append(androidx.constraintlayout.widget.d.S5, 69);
            f2636r0.append(androidx.constraintlayout.widget.d.f2936x5, 70);
            f2636r0.append(androidx.constraintlayout.widget.d.f2768c5, 71);
            f2636r0.append(androidx.constraintlayout.widget.d.f2750a5, 72);
            f2636r0.append(androidx.constraintlayout.widget.d.f2759b5, 73);
            f2636r0.append(androidx.constraintlayout.widget.d.f2776d5, 74);
            f2636r0.append(androidx.constraintlayout.widget.d.Z4, 75);
            f2636r0.append(androidx.constraintlayout.widget.d.Q5, 84);
            f2636r0.append(androidx.constraintlayout.widget.d.R5, 86);
            f2636r0.append(androidx.constraintlayout.widget.d.Q5, 83);
            f2636r0.append(androidx.constraintlayout.widget.d.f2928w5, 85);
            f2636r0.append(androidx.constraintlayout.widget.d.P5, 87);
            f2636r0.append(androidx.constraintlayout.widget.d.f2920v5, 88);
            f2636r0.append(androidx.constraintlayout.widget.d.f2893s2, 89);
            f2636r0.append(androidx.constraintlayout.widget.d.f2784e5, 90);
        }

        public void a(b bVar) {
            this.f2637a = bVar.f2637a;
            this.f2643d = bVar.f2643d;
            this.f2639b = bVar.f2639b;
            this.f2645e = bVar.f2645e;
            this.f2647f = bVar.f2647f;
            this.f2649g = bVar.f2649g;
            this.f2651h = bVar.f2651h;
            this.f2653i = bVar.f2653i;
            this.f2655j = bVar.f2655j;
            this.f2657k = bVar.f2657k;
            this.f2659l = bVar.f2659l;
            this.f2661m = bVar.f2661m;
            this.f2663n = bVar.f2663n;
            this.f2665o = bVar.f2665o;
            this.f2667p = bVar.f2667p;
            this.f2669q = bVar.f2669q;
            this.f2671r = bVar.f2671r;
            this.f2672s = bVar.f2672s;
            this.f2673t = bVar.f2673t;
            this.f2674u = bVar.f2674u;
            this.f2675v = bVar.f2675v;
            this.f2676w = bVar.f2676w;
            this.f2677x = bVar.f2677x;
            this.f2678y = bVar.f2678y;
            this.f2679z = bVar.f2679z;
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
            this.f2638a0 = bVar.f2638a0;
            this.f2640b0 = bVar.f2640b0;
            this.f2642c0 = bVar.f2642c0;
            this.f2644d0 = bVar.f2644d0;
            this.f2646e0 = bVar.f2646e0;
            this.f2648f0 = bVar.f2648f0;
            this.f2650g0 = bVar.f2650g0;
            this.f2652h0 = bVar.f2652h0;
            this.f2654i0 = bVar.f2654i0;
            this.f2656j0 = bVar.f2656j0;
            this.f2662m0 = bVar.f2662m0;
            int[] iArr = bVar.f2658k0;
            if (iArr != null && bVar.f2660l0 == null) {
                this.f2658k0 = Arrays.copyOf(iArr, iArr.length);
            } else {
                this.f2658k0 = null;
            }
            this.f2660l0 = bVar.f2660l0;
            this.f2664n0 = bVar.f2664n0;
            this.f2666o0 = bVar.f2666o0;
            this.f2668p0 = bVar.f2668p0;
            this.f2670q0 = bVar.f2670q0;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.P4);
            this.f2639b = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                int i11 = f2636r0.get(index);
                switch (i11) {
                    case 1:
                        this.f2671r = ConstraintSet.u(obtainStyledAttributes, index, this.f2671r);
                        break;
                    case 2:
                        this.K = obtainStyledAttributes.getDimensionPixelSize(index, this.K);
                        break;
                    case 3:
                        this.f2669q = ConstraintSet.u(obtainStyledAttributes, index, this.f2669q);
                        break;
                    case 4:
                        this.f2667p = ConstraintSet.u(obtainStyledAttributes, index, this.f2667p);
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
                        this.f2677x = ConstraintSet.u(obtainStyledAttributes, index, this.f2677x);
                        break;
                    case 10:
                        this.f2676w = ConstraintSet.u(obtainStyledAttributes, index, this.f2676w);
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
                        this.f2647f = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2647f);
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        this.f2649g = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2649g);
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        this.f2651h = obtainStyledAttributes.getFloat(index, this.f2651h);
                        break;
                    case 20:
                        this.f2678y = obtainStyledAttributes.getFloat(index, this.f2678y);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        this.f2645e = obtainStyledAttributes.getLayoutDimension(index, this.f2645e);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        this.f2643d = obtainStyledAttributes.getLayoutDimension(index, this.f2643d);
                        break;
                    case 23:
                        this.H = obtainStyledAttributes.getDimensionPixelSize(index, this.H);
                        break;
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        this.f2655j = ConstraintSet.u(obtainStyledAttributes, index, this.f2655j);
                        break;
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                        this.f2657k = ConstraintSet.u(obtainStyledAttributes, index, this.f2657k);
                        break;
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                        this.G = obtainStyledAttributes.getInt(index, this.G);
                        break;
                    case 27:
                        this.I = obtainStyledAttributes.getDimensionPixelSize(index, this.I);
                        break;
                    case 28:
                        this.f2659l = ConstraintSet.u(obtainStyledAttributes, index, this.f2659l);
                        break;
                    case 29:
                        this.f2661m = ConstraintSet.u(obtainStyledAttributes, index, this.f2661m);
                        break;
                    case 30:
                        this.M = obtainStyledAttributes.getDimensionPixelSize(index, this.M);
                        break;
                    case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                        this.f2674u = ConstraintSet.u(obtainStyledAttributes, index, this.f2674u);
                        break;
                    case 32:
                        this.f2675v = ConstraintSet.u(obtainStyledAttributes, index, this.f2675v);
                        break;
                    case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                        this.J = obtainStyledAttributes.getDimensionPixelSize(index, this.J);
                        break;
                    case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                        this.f2665o = ConstraintSet.u(obtainStyledAttributes, index, this.f2665o);
                        break;
                    case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                        this.f2663n = ConstraintSet.u(obtainStyledAttributes, index, this.f2663n);
                        break;
                    case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                        this.f2679z = obtainStyledAttributes.getFloat(index, this.f2679z);
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
                                        this.f2648f0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 70:
                                        this.f2650g0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 71:
                                        Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                                        continue;
                                    case 72:
                                        this.f2652h0 = obtainStyledAttributes.getInt(index, this.f2652h0);
                                        continue;
                                    case 73:
                                        this.f2654i0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2654i0);
                                        continue;
                                    case 74:
                                        this.f2660l0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 75:
                                        this.f2668p0 = obtainStyledAttributes.getBoolean(index, this.f2668p0);
                                        continue;
                                    case 76:
                                        this.f2670q0 = obtainStyledAttributes.getInt(index, this.f2670q0);
                                        continue;
                                    case 77:
                                        this.f2672s = ConstraintSet.u(obtainStyledAttributes, index, this.f2672s);
                                        continue;
                                    case 78:
                                        this.f2673t = ConstraintSet.u(obtainStyledAttributes, index, this.f2673t);
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
                                        this.f2638a0 = obtainStyledAttributes.getInt(index, this.f2638a0);
                                        continue;
                                    case 83:
                                        this.f2642c0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2642c0);
                                        continue;
                                    case 84:
                                        this.f2640b0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2640b0);
                                        continue;
                                    case 85:
                                        this.f2646e0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2646e0);
                                        continue;
                                    case 86:
                                        this.f2644d0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2644d0);
                                        continue;
                                    case 87:
                                        this.f2664n0 = obtainStyledAttributes.getBoolean(index, this.f2664n0);
                                        continue;
                                    case 88:
                                        this.f2666o0 = obtainStyledAttributes.getBoolean(index, this.f2666o0);
                                        continue;
                                    case 89:
                                        this.f2662m0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 90:
                                        this.f2653i = obtainStyledAttributes.getBoolean(index, this.f2653i);
                                        continue;
                                    case 91:
                                        Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2636r0.get(index));
                                        continue;
                                    default:
                                        Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2636r0.get(index));
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
        private static SparseIntArray f2680o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2681a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f2682b = -1;

        /* renamed from: c  reason: collision with root package name */
        public int f2683c = 0;

        /* renamed from: d  reason: collision with root package name */
        public String f2684d = null;

        /* renamed from: e  reason: collision with root package name */
        public int f2685e = -1;

        /* renamed from: f  reason: collision with root package name */
        public int f2686f = 0;

        /* renamed from: g  reason: collision with root package name */
        public float f2687g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public int f2688h = -1;

        /* renamed from: i  reason: collision with root package name */
        public float f2689i = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        public float f2690j = Float.NaN;

        /* renamed from: k  reason: collision with root package name */
        public int f2691k = -1;

        /* renamed from: l  reason: collision with root package name */
        public String f2692l = null;

        /* renamed from: m  reason: collision with root package name */
        public int f2693m = -3;

        /* renamed from: n  reason: collision with root package name */
        public int f2694n = -1;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2680o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.f2809h6, 1);
            f2680o.append(androidx.constraintlayout.widget.d.f2825j6, 2);
            f2680o.append(androidx.constraintlayout.widget.d.f2857n6, 3);
            f2680o.append(androidx.constraintlayout.widget.d.f2801g6, 4);
            f2680o.append(androidx.constraintlayout.widget.d.f2793f6, 5);
            f2680o.append(androidx.constraintlayout.widget.d.f2785e6, 6);
            f2680o.append(androidx.constraintlayout.widget.d.f2817i6, 7);
            f2680o.append(androidx.constraintlayout.widget.d.f2849m6, 8);
            f2680o.append(androidx.constraintlayout.widget.d.f2841l6, 9);
            f2680o.append(androidx.constraintlayout.widget.d.f2833k6, 10);
        }

        public void a(c cVar) {
            this.f2681a = cVar.f2681a;
            this.f2682b = cVar.f2682b;
            this.f2684d = cVar.f2684d;
            this.f2685e = cVar.f2685e;
            this.f2686f = cVar.f2686f;
            this.f2689i = cVar.f2689i;
            this.f2687g = cVar.f2687g;
            this.f2688h = cVar.f2688h;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f2777d6);
            this.f2681a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f2680o.get(index)) {
                    case 1:
                        this.f2689i = obtainStyledAttributes.getFloat(index, this.f2689i);
                        break;
                    case 2:
                        this.f2685e = obtainStyledAttributes.getInt(index, this.f2685e);
                        break;
                    case 3:
                        if (obtainStyledAttributes.peekValue(index).type == 3) {
                            this.f2684d = obtainStyledAttributes.getString(index);
                            break;
                        } else {
                            this.f2684d = i1.a.f27204c[obtainStyledAttributes.getInteger(index, 0)];
                            break;
                        }
                    case 4:
                        this.f2686f = obtainStyledAttributes.getInt(index, 0);
                        break;
                    case 5:
                        this.f2682b = ConstraintSet.u(obtainStyledAttributes, index, this.f2682b);
                        break;
                    case 6:
                        this.f2683c = obtainStyledAttributes.getInteger(index, this.f2683c);
                        break;
                    case 7:
                        this.f2687g = obtainStyledAttributes.getFloat(index, this.f2687g);
                        break;
                    case 8:
                        this.f2691k = obtainStyledAttributes.getInteger(index, this.f2691k);
                        break;
                    case 9:
                        this.f2690j = obtainStyledAttributes.getFloat(index, this.f2690j);
                        break;
                    case 10:
                        int i11 = obtainStyledAttributes.peekValue(index).type;
                        if (i11 == 1) {
                            int resourceId = obtainStyledAttributes.getResourceId(index, -1);
                            this.f2694n = resourceId;
                            if (resourceId != -1) {
                                this.f2693m = -2;
                                break;
                            } else {
                                break;
                            }
                        } else if (i11 == 3) {
                            String string = obtainStyledAttributes.getString(index);
                            this.f2692l = string;
                            if (string.indexOf("/") > 0) {
                                this.f2694n = obtainStyledAttributes.getResourceId(index, -1);
                                this.f2693m = -2;
                                break;
                            } else {
                                this.f2693m = -1;
                                break;
                            }
                        } else {
                            this.f2693m = obtainStyledAttributes.getInteger(index, this.f2694n);
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
        public boolean f2695a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f2696b = 0;

        /* renamed from: c  reason: collision with root package name */
        public int f2697c = 0;

        /* renamed from: d  reason: collision with root package name */
        public float f2698d = 1.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f2699e = Float.NaN;

        public void a(d dVar) {
            this.f2695a = dVar.f2695a;
            this.f2696b = dVar.f2696b;
            this.f2698d = dVar.f2698d;
            this.f2699e = dVar.f2699e;
            this.f2697c = dVar.f2697c;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f2929w6);
            this.f2695a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == androidx.constraintlayout.widget.d.f2945y6) {
                    this.f2698d = obtainStyledAttributes.getFloat(index, this.f2698d);
                } else if (index == androidx.constraintlayout.widget.d.f2937x6) {
                    this.f2696b = obtainStyledAttributes.getInt(index, this.f2696b);
                    this.f2696b = ConstraintSet.f2607g[this.f2696b];
                } else if (index == androidx.constraintlayout.widget.d.A6) {
                    this.f2697c = obtainStyledAttributes.getInt(index, this.f2697c);
                } else if (index == androidx.constraintlayout.widget.d.f2953z6) {
                    this.f2699e = obtainStyledAttributes.getFloat(index, this.f2699e);
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: o  reason: collision with root package name */
        private static SparseIntArray f2700o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2701a = false;

        /* renamed from: b  reason: collision with root package name */
        public float f2702b = 0.0f;

        /* renamed from: c  reason: collision with root package name */
        public float f2703c = 0.0f;

        /* renamed from: d  reason: collision with root package name */
        public float f2704d = 0.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f2705e = 1.0f;

        /* renamed from: f  reason: collision with root package name */
        public float f2706f = 1.0f;

        /* renamed from: g  reason: collision with root package name */
        public float f2707g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public float f2708h = Float.NaN;

        /* renamed from: i  reason: collision with root package name */
        public int f2709i = -1;

        /* renamed from: j  reason: collision with root package name */
        public float f2710j = 0.0f;

        /* renamed from: k  reason: collision with root package name */
        public float f2711k = 0.0f;

        /* renamed from: l  reason: collision with root package name */
        public float f2712l = 0.0f;

        /* renamed from: m  reason: collision with root package name */
        public boolean f2713m = false;

        /* renamed from: n  reason: collision with root package name */
        public float f2714n = 0.0f;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2700o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.N6, 1);
            f2700o.append(androidx.constraintlayout.widget.d.O6, 2);
            f2700o.append(androidx.constraintlayout.widget.d.P6, 3);
            f2700o.append(androidx.constraintlayout.widget.d.L6, 4);
            f2700o.append(androidx.constraintlayout.widget.d.M6, 5);
            f2700o.append(androidx.constraintlayout.widget.d.H6, 6);
            f2700o.append(androidx.constraintlayout.widget.d.I6, 7);
            f2700o.append(androidx.constraintlayout.widget.d.J6, 8);
            f2700o.append(androidx.constraintlayout.widget.d.K6, 9);
            f2700o.append(androidx.constraintlayout.widget.d.Q6, 10);
            f2700o.append(androidx.constraintlayout.widget.d.R6, 11);
            f2700o.append(androidx.constraintlayout.widget.d.S6, 12);
        }

        public void a(e eVar) {
            this.f2701a = eVar.f2701a;
            this.f2702b = eVar.f2702b;
            this.f2703c = eVar.f2703c;
            this.f2704d = eVar.f2704d;
            this.f2705e = eVar.f2705e;
            this.f2706f = eVar.f2706f;
            this.f2707g = eVar.f2707g;
            this.f2708h = eVar.f2708h;
            this.f2709i = eVar.f2709i;
            this.f2710j = eVar.f2710j;
            this.f2711k = eVar.f2711k;
            this.f2712l = eVar.f2712l;
            this.f2713m = eVar.f2713m;
            this.f2714n = eVar.f2714n;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.G6);
            this.f2701a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f2700o.get(index)) {
                    case 1:
                        this.f2702b = obtainStyledAttributes.getFloat(index, this.f2702b);
                        break;
                    case 2:
                        this.f2703c = obtainStyledAttributes.getFloat(index, this.f2703c);
                        break;
                    case 3:
                        this.f2704d = obtainStyledAttributes.getFloat(index, this.f2704d);
                        break;
                    case 4:
                        this.f2705e = obtainStyledAttributes.getFloat(index, this.f2705e);
                        break;
                    case 5:
                        this.f2706f = obtainStyledAttributes.getFloat(index, this.f2706f);
                        break;
                    case 6:
                        this.f2707g = obtainStyledAttributes.getDimension(index, this.f2707g);
                        break;
                    case 7:
                        this.f2708h = obtainStyledAttributes.getDimension(index, this.f2708h);
                        break;
                    case 8:
                        this.f2710j = obtainStyledAttributes.getDimension(index, this.f2710j);
                        break;
                    case 9:
                        this.f2711k = obtainStyledAttributes.getDimension(index, this.f2711k);
                        break;
                    case 10:
                        this.f2712l = obtainStyledAttributes.getDimension(index, this.f2712l);
                        break;
                    case 11:
                        this.f2713m = true;
                        this.f2714n = obtainStyledAttributes.getDimension(index, this.f2714n);
                        break;
                    case 12:
                        this.f2709i = ConstraintSet.u(obtainStyledAttributes, index, this.f2709i);
                        break;
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    static {
        f2608h.append(androidx.constraintlayout.widget.d.f2811i0, 25);
        f2608h.append(androidx.constraintlayout.widget.d.f2819j0, 26);
        f2608h.append(androidx.constraintlayout.widget.d.f2835l0, 29);
        f2608h.append(androidx.constraintlayout.widget.d.f2843m0, 30);
        f2608h.append(androidx.constraintlayout.widget.d.f2891s0, 36);
        f2608h.append(androidx.constraintlayout.widget.d.f2883r0, 35);
        f2608h.append(androidx.constraintlayout.widget.d.P, 4);
        f2608h.append(androidx.constraintlayout.widget.d.O, 3);
        f2608h.append(androidx.constraintlayout.widget.d.K, 1);
        f2608h.append(androidx.constraintlayout.widget.d.M, 91);
        f2608h.append(androidx.constraintlayout.widget.d.L, 92);
        f2608h.append(androidx.constraintlayout.widget.d.B0, 6);
        f2608h.append(androidx.constraintlayout.widget.d.C0, 7);
        f2608h.append(androidx.constraintlayout.widget.d.W, 17);
        f2608h.append(androidx.constraintlayout.widget.d.X, 18);
        f2608h.append(androidx.constraintlayout.widget.d.Y, 19);
        f2608h.append(androidx.constraintlayout.widget.d.G, 99);
        f2608h.append(androidx.constraintlayout.widget.d.f2762c, 27);
        f2608h.append(androidx.constraintlayout.widget.d.f2851n0, 32);
        f2608h.append(androidx.constraintlayout.widget.d.f2859o0, 33);
        f2608h.append(androidx.constraintlayout.widget.d.V, 10);
        f2608h.append(androidx.constraintlayout.widget.d.U, 9);
        f2608h.append(androidx.constraintlayout.widget.d.F0, 13);
        f2608h.append(androidx.constraintlayout.widget.d.I0, 16);
        f2608h.append(androidx.constraintlayout.widget.d.G0, 14);
        f2608h.append(androidx.constraintlayout.widget.d.D0, 11);
        f2608h.append(androidx.constraintlayout.widget.d.H0, 15);
        f2608h.append(androidx.constraintlayout.widget.d.E0, 12);
        f2608h.append(androidx.constraintlayout.widget.d.f2915v0, 40);
        f2608h.append(androidx.constraintlayout.widget.d.f2795g0, 39);
        f2608h.append(androidx.constraintlayout.widget.d.f2787f0, 41);
        f2608h.append(androidx.constraintlayout.widget.d.f2907u0, 42);
        f2608h.append(androidx.constraintlayout.widget.d.f2779e0, 20);
        f2608h.append(androidx.constraintlayout.widget.d.f2899t0, 37);
        f2608h.append(androidx.constraintlayout.widget.d.T, 5);
        f2608h.append(androidx.constraintlayout.widget.d.f2803h0, 87);
        f2608h.append(androidx.constraintlayout.widget.d.f2875q0, 87);
        f2608h.append(androidx.constraintlayout.widget.d.f2827k0, 87);
        f2608h.append(androidx.constraintlayout.widget.d.N, 87);
        f2608h.append(androidx.constraintlayout.widget.d.J, 87);
        f2608h.append(androidx.constraintlayout.widget.d.f2802h, 24);
        f2608h.append(androidx.constraintlayout.widget.d.f2818j, 28);
        f2608h.append(androidx.constraintlayout.widget.d.f2914v, 31);
        f2608h.append(androidx.constraintlayout.widget.d.f2922w, 8);
        f2608h.append(androidx.constraintlayout.widget.d.f2810i, 34);
        f2608h.append(androidx.constraintlayout.widget.d.f2826k, 2);
        f2608h.append(androidx.constraintlayout.widget.d.f2786f, 23);
        f2608h.append(androidx.constraintlayout.widget.d.f2794g, 21);
        f2608h.append(androidx.constraintlayout.widget.d.f2923w0, 95);
        f2608h.append(androidx.constraintlayout.widget.d.Z, 96);
        f2608h.append(androidx.constraintlayout.widget.d.f2778e, 22);
        f2608h.append(androidx.constraintlayout.widget.d.f2834l, 43);
        f2608h.append(androidx.constraintlayout.widget.d.f2938y, 44);
        f2608h.append(androidx.constraintlayout.widget.d.f2898t, 45);
        f2608h.append(androidx.constraintlayout.widget.d.f2906u, 46);
        f2608h.append(androidx.constraintlayout.widget.d.f2890s, 60);
        f2608h.append(androidx.constraintlayout.widget.d.f2874q, 47);
        f2608h.append(androidx.constraintlayout.widget.d.f2882r, 48);
        f2608h.append(androidx.constraintlayout.widget.d.f2842m, 49);
        f2608h.append(androidx.constraintlayout.widget.d.f2850n, 50);
        f2608h.append(androidx.constraintlayout.widget.d.f2858o, 51);
        f2608h.append(androidx.constraintlayout.widget.d.f2866p, 52);
        f2608h.append(androidx.constraintlayout.widget.d.f2930x, 53);
        f2608h.append(androidx.constraintlayout.widget.d.f2931x0, 54);
        f2608h.append(androidx.constraintlayout.widget.d.f2745a0, 55);
        f2608h.append(androidx.constraintlayout.widget.d.f2939y0, 56);
        f2608h.append(androidx.constraintlayout.widget.d.f2754b0, 57);
        f2608h.append(androidx.constraintlayout.widget.d.f2947z0, 58);
        f2608h.append(androidx.constraintlayout.widget.d.f2763c0, 59);
        f2608h.append(androidx.constraintlayout.widget.d.Q, 61);
        f2608h.append(androidx.constraintlayout.widget.d.S, 62);
        f2608h.append(androidx.constraintlayout.widget.d.R, 63);
        f2608h.append(androidx.constraintlayout.widget.d.f2946z, 64);
        f2608h.append(androidx.constraintlayout.widget.d.S0, 65);
        f2608h.append(androidx.constraintlayout.widget.d.F, 66);
        f2608h.append(androidx.constraintlayout.widget.d.T0, 67);
        f2608h.append(androidx.constraintlayout.widget.d.L0, 79);
        f2608h.append(androidx.constraintlayout.widget.d.f2770d, 38);
        f2608h.append(androidx.constraintlayout.widget.d.K0, 68);
        f2608h.append(androidx.constraintlayout.widget.d.A0, 69);
        f2608h.append(androidx.constraintlayout.widget.d.f2771d0, 70);
        f2608h.append(androidx.constraintlayout.widget.d.J0, 97);
        f2608h.append(androidx.constraintlayout.widget.d.D, 71);
        f2608h.append(androidx.constraintlayout.widget.d.B, 72);
        f2608h.append(androidx.constraintlayout.widget.d.C, 73);
        f2608h.append(androidx.constraintlayout.widget.d.E, 74);
        f2608h.append(androidx.constraintlayout.widget.d.A, 75);
        f2608h.append(androidx.constraintlayout.widget.d.M0, 76);
        f2608h.append(androidx.constraintlayout.widget.d.f2867p0, 77);
        f2608h.append(androidx.constraintlayout.widget.d.U0, 78);
        f2608h.append(androidx.constraintlayout.widget.d.I, 80);
        f2608h.append(androidx.constraintlayout.widget.d.H, 81);
        f2608h.append(androidx.constraintlayout.widget.d.N0, 82);
        f2608h.append(androidx.constraintlayout.widget.d.R0, 83);
        f2608h.append(androidx.constraintlayout.widget.d.Q0, 84);
        f2608h.append(androidx.constraintlayout.widget.d.P0, 85);
        f2608h.append(androidx.constraintlayout.widget.d.O0, 86);
        f2609i.append(androidx.constraintlayout.widget.d.Y3, 6);
        f2609i.append(androidx.constraintlayout.widget.d.Y3, 7);
        f2609i.append(androidx.constraintlayout.widget.d.T2, 27);
        f2609i.append(androidx.constraintlayout.widget.d.f2758b4, 13);
        f2609i.append(androidx.constraintlayout.widget.d.f2783e4, 16);
        f2609i.append(androidx.constraintlayout.widget.d.f2767c4, 14);
        f2609i.append(androidx.constraintlayout.widget.d.Z3, 11);
        f2609i.append(androidx.constraintlayout.widget.d.f2775d4, 15);
        f2609i.append(androidx.constraintlayout.widget.d.f2749a4, 12);
        f2609i.append(androidx.constraintlayout.widget.d.S3, 40);
        f2609i.append(androidx.constraintlayout.widget.d.L3, 39);
        f2609i.append(androidx.constraintlayout.widget.d.K3, 41);
        f2609i.append(androidx.constraintlayout.widget.d.R3, 42);
        f2609i.append(androidx.constraintlayout.widget.d.J3, 20);
        f2609i.append(androidx.constraintlayout.widget.d.Q3, 37);
        f2609i.append(androidx.constraintlayout.widget.d.D3, 5);
        f2609i.append(androidx.constraintlayout.widget.d.M3, 87);
        f2609i.append(androidx.constraintlayout.widget.d.P3, 87);
        f2609i.append(androidx.constraintlayout.widget.d.N3, 87);
        f2609i.append(androidx.constraintlayout.widget.d.A3, 87);
        f2609i.append(androidx.constraintlayout.widget.d.f2950z3, 87);
        f2609i.append(androidx.constraintlayout.widget.d.Y2, 24);
        f2609i.append(androidx.constraintlayout.widget.d.f2748a3, 28);
        f2609i.append(androidx.constraintlayout.widget.d.f2846m3, 31);
        f2609i.append(androidx.constraintlayout.widget.d.f2854n3, 8);
        f2609i.append(androidx.constraintlayout.widget.d.Z2, 34);
        f2609i.append(androidx.constraintlayout.widget.d.f2757b3, 2);
        f2609i.append(androidx.constraintlayout.widget.d.W2, 23);
        f2609i.append(androidx.constraintlayout.widget.d.X2, 21);
        f2609i.append(androidx.constraintlayout.widget.d.T3, 95);
        f2609i.append(androidx.constraintlayout.widget.d.E3, 96);
        f2609i.append(androidx.constraintlayout.widget.d.V2, 22);
        f2609i.append(androidx.constraintlayout.widget.d.f2766c3, 43);
        f2609i.append(androidx.constraintlayout.widget.d.f2870p3, 44);
        f2609i.append(androidx.constraintlayout.widget.d.f2830k3, 45);
        f2609i.append(androidx.constraintlayout.widget.d.f2838l3, 46);
        f2609i.append(androidx.constraintlayout.widget.d.f2822j3, 60);
        f2609i.append(androidx.constraintlayout.widget.d.f2806h3, 47);
        f2609i.append(androidx.constraintlayout.widget.d.f2814i3, 48);
        f2609i.append(androidx.constraintlayout.widget.d.f2774d3, 49);
        f2609i.append(androidx.constraintlayout.widget.d.f2782e3, 50);
        f2609i.append(androidx.constraintlayout.widget.d.f2790f3, 51);
        f2609i.append(androidx.constraintlayout.widget.d.f2798g3, 52);
        f2609i.append(androidx.constraintlayout.widget.d.f2862o3, 53);
        f2609i.append(androidx.constraintlayout.widget.d.U3, 54);
        f2609i.append(androidx.constraintlayout.widget.d.F3, 55);
        f2609i.append(androidx.constraintlayout.widget.d.V3, 56);
        f2609i.append(androidx.constraintlayout.widget.d.G3, 57);
        f2609i.append(androidx.constraintlayout.widget.d.W3, 58);
        f2609i.append(androidx.constraintlayout.widget.d.H3, 59);
        f2609i.append(androidx.constraintlayout.widget.d.C3, 62);
        f2609i.append(androidx.constraintlayout.widget.d.B3, 63);
        f2609i.append(androidx.constraintlayout.widget.d.f2878q3, 64);
        f2609i.append(androidx.constraintlayout.widget.d.f2871p4, 65);
        f2609i.append(androidx.constraintlayout.widget.d.f2926w3, 66);
        f2609i.append(androidx.constraintlayout.widget.d.f2879q4, 67);
        f2609i.append(androidx.constraintlayout.widget.d.f2807h4, 79);
        f2609i.append(androidx.constraintlayout.widget.d.U2, 38);
        f2609i.append(androidx.constraintlayout.widget.d.f2815i4, 98);
        f2609i.append(androidx.constraintlayout.widget.d.f2799g4, 68);
        f2609i.append(androidx.constraintlayout.widget.d.X3, 69);
        f2609i.append(androidx.constraintlayout.widget.d.I3, 70);
        f2609i.append(androidx.constraintlayout.widget.d.f2910u3, 71);
        f2609i.append(androidx.constraintlayout.widget.d.f2894s3, 72);
        f2609i.append(androidx.constraintlayout.widget.d.f2902t3, 73);
        f2609i.append(androidx.constraintlayout.widget.d.f2918v3, 74);
        f2609i.append(androidx.constraintlayout.widget.d.f2886r3, 75);
        f2609i.append(androidx.constraintlayout.widget.d.f2823j4, 76);
        f2609i.append(androidx.constraintlayout.widget.d.O3, 77);
        f2609i.append(androidx.constraintlayout.widget.d.f2887r4, 78);
        f2609i.append(androidx.constraintlayout.widget.d.f2942y3, 80);
        f2609i.append(androidx.constraintlayout.widget.d.f2934x3, 81);
        f2609i.append(androidx.constraintlayout.widget.d.f2831k4, 82);
        f2609i.append(androidx.constraintlayout.widget.d.f2863o4, 83);
        f2609i.append(androidx.constraintlayout.widget.d.f2855n4, 84);
        f2609i.append(androidx.constraintlayout.widget.d.f2847m4, 85);
        f2609i.append(androidx.constraintlayout.widget.d.f2839l4, 86);
        f2609i.append(androidx.constraintlayout.widget.d.f2791f4, 97);
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
            iArr = androidx.constraintlayout.widget.d.f2753b;
        }
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, iArr);
        y(aVar, obtainStyledAttributes, z10);
        obtainStyledAttributes.recycle();
        return aVar;
    }

    private a r(int i10) {
        if (!this.f2615f.containsKey(Integer.valueOf(i10))) {
            this.f2615f.put(Integer.valueOf(i10), new a());
        }
        return (a) this.f2615f.get(Integer.valueOf(i10));
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
            r4.f2532a0 = r5
            return
        L3d:
            r4.height = r2
            r4.f2534b0 = r5
            return
        L42:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.b
            if (r6 == 0) goto L54
            androidx.constraintlayout.widget.ConstraintSet$b r4 = (androidx.constraintlayout.widget.ConstraintSet.b) r4
            if (r7 != 0) goto L4f
            r4.f2643d = r2
            r4.f2664n0 = r5
            return
        L4f:
            r4.f2645e = r2
            r4.f2666o0 = r5
            return
        L54:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.a.C0030a
            if (r6 == 0) goto L71
            androidx.constraintlayout.widget.ConstraintSet$a$a r4 = (androidx.constraintlayout.widget.ConstraintSet.a.C0030a) r4
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
                        } else if (obj instanceof a.C0030a) {
                            ((a.C0030a) obj).c(5, trim2);
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
                                    bVar.f2643d = 0;
                                    bVar.W = parseFloat;
                                    return;
                                }
                                bVar.f2645e = 0;
                                bVar.V = parseFloat;
                            } else if (obj instanceof a.C0030a) {
                                a.C0030a c0030a = (a.C0030a) obj;
                                if (i10 == 0) {
                                    c0030a.b(23, 0);
                                    c0030a.a(39, parseFloat);
                                    return;
                                }
                                c0030a.b(21, 0);
                                c0030a.a(40, parseFloat);
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
                                    bVar2.f2643d = 0;
                                    bVar2.f2648f0 = max;
                                    bVar2.Z = 2;
                                    return;
                                }
                                bVar2.f2645e = 0;
                                bVar2.f2650g0 = max;
                                bVar2.f2638a0 = 2;
                            } else if (obj instanceof a.C0030a) {
                                a.C0030a c0030a2 = (a.C0030a) obj;
                                if (i10 == 0) {
                                    c0030a2.b(23, 0);
                                    c0030a2.b(54, 2);
                                    return;
                                }
                                c0030a2.b(21, 0);
                                c0030a2.b(55, 2);
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
            if (index != androidx.constraintlayout.widget.d.f2770d && androidx.constraintlayout.widget.d.f2914v != index && androidx.constraintlayout.widget.d.f2922w != index) {
                aVar.f2619d.f2681a = true;
                aVar.f2620e.f2639b = true;
                aVar.f2618c.f2695a = true;
                aVar.f2621f.f2701a = true;
            }
            switch (f2608h.get(index)) {
                case 1:
                    b bVar = aVar.f2620e;
                    bVar.f2671r = u(typedArray, index, bVar.f2671r);
                    break;
                case 2:
                    b bVar2 = aVar.f2620e;
                    bVar2.K = typedArray.getDimensionPixelSize(index, bVar2.K);
                    break;
                case 3:
                    b bVar3 = aVar.f2620e;
                    bVar3.f2669q = u(typedArray, index, bVar3.f2669q);
                    break;
                case 4:
                    b bVar4 = aVar.f2620e;
                    bVar4.f2667p = u(typedArray, index, bVar4.f2667p);
                    break;
                case 5:
                    aVar.f2620e.A = typedArray.getString(index);
                    break;
                case 6:
                    b bVar5 = aVar.f2620e;
                    bVar5.E = typedArray.getDimensionPixelOffset(index, bVar5.E);
                    break;
                case 7:
                    b bVar6 = aVar.f2620e;
                    bVar6.F = typedArray.getDimensionPixelOffset(index, bVar6.F);
                    break;
                case 8:
                    b bVar7 = aVar.f2620e;
                    bVar7.L = typedArray.getDimensionPixelSize(index, bVar7.L);
                    break;
                case 9:
                    b bVar8 = aVar.f2620e;
                    bVar8.f2677x = u(typedArray, index, bVar8.f2677x);
                    break;
                case 10:
                    b bVar9 = aVar.f2620e;
                    bVar9.f2676w = u(typedArray, index, bVar9.f2676w);
                    break;
                case 11:
                    b bVar10 = aVar.f2620e;
                    bVar10.R = typedArray.getDimensionPixelSize(index, bVar10.R);
                    break;
                case 12:
                    b bVar11 = aVar.f2620e;
                    bVar11.S = typedArray.getDimensionPixelSize(index, bVar11.S);
                    break;
                case 13:
                    b bVar12 = aVar.f2620e;
                    bVar12.O = typedArray.getDimensionPixelSize(index, bVar12.O);
                    break;
                case 14:
                    b bVar13 = aVar.f2620e;
                    bVar13.Q = typedArray.getDimensionPixelSize(index, bVar13.Q);
                    break;
                case 15:
                    b bVar14 = aVar.f2620e;
                    bVar14.T = typedArray.getDimensionPixelSize(index, bVar14.T);
                    break;
                case 16:
                    b bVar15 = aVar.f2620e;
                    bVar15.P = typedArray.getDimensionPixelSize(index, bVar15.P);
                    break;
                case 17:
                    b bVar16 = aVar.f2620e;
                    bVar16.f2647f = typedArray.getDimensionPixelOffset(index, bVar16.f2647f);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    b bVar17 = aVar.f2620e;
                    bVar17.f2649g = typedArray.getDimensionPixelOffset(index, bVar17.f2649g);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    b bVar18 = aVar.f2620e;
                    bVar18.f2651h = typedArray.getFloat(index, bVar18.f2651h);
                    break;
                case 20:
                    b bVar19 = aVar.f2620e;
                    bVar19.f2678y = typedArray.getFloat(index, bVar19.f2678y);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    b bVar20 = aVar.f2620e;
                    bVar20.f2645e = typedArray.getLayoutDimension(index, bVar20.f2645e);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    d dVar = aVar.f2618c;
                    dVar.f2696b = typedArray.getInt(index, dVar.f2696b);
                    d dVar2 = aVar.f2618c;
                    dVar2.f2696b = f2607g[dVar2.f2696b];
                    break;
                case 23:
                    b bVar21 = aVar.f2620e;
                    bVar21.f2643d = typedArray.getLayoutDimension(index, bVar21.f2643d);
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    b bVar22 = aVar.f2620e;
                    bVar22.H = typedArray.getDimensionPixelSize(index, bVar22.H);
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    b bVar23 = aVar.f2620e;
                    bVar23.f2655j = u(typedArray, index, bVar23.f2655j);
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    b bVar24 = aVar.f2620e;
                    bVar24.f2657k = u(typedArray, index, bVar24.f2657k);
                    break;
                case 27:
                    b bVar25 = aVar.f2620e;
                    bVar25.G = typedArray.getInt(index, bVar25.G);
                    break;
                case 28:
                    b bVar26 = aVar.f2620e;
                    bVar26.I = typedArray.getDimensionPixelSize(index, bVar26.I);
                    break;
                case 29:
                    b bVar27 = aVar.f2620e;
                    bVar27.f2659l = u(typedArray, index, bVar27.f2659l);
                    break;
                case 30:
                    b bVar28 = aVar.f2620e;
                    bVar28.f2661m = u(typedArray, index, bVar28.f2661m);
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    b bVar29 = aVar.f2620e;
                    bVar29.M = typedArray.getDimensionPixelSize(index, bVar29.M);
                    break;
                case 32:
                    b bVar30 = aVar.f2620e;
                    bVar30.f2674u = u(typedArray, index, bVar30.f2674u);
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    b bVar31 = aVar.f2620e;
                    bVar31.f2675v = u(typedArray, index, bVar31.f2675v);
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    b bVar32 = aVar.f2620e;
                    bVar32.J = typedArray.getDimensionPixelSize(index, bVar32.J);
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    b bVar33 = aVar.f2620e;
                    bVar33.f2665o = u(typedArray, index, bVar33.f2665o);
                    break;
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    b bVar34 = aVar.f2620e;
                    bVar34.f2663n = u(typedArray, index, bVar34.f2663n);
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    b bVar35 = aVar.f2620e;
                    bVar35.f2679z = typedArray.getFloat(index, bVar35.f2679z);
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    aVar.f2616a = typedArray.getResourceId(index, aVar.f2616a);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    b bVar36 = aVar.f2620e;
                    bVar36.W = typedArray.getFloat(index, bVar36.W);
                    break;
                case 40:
                    b bVar37 = aVar.f2620e;
                    bVar37.V = typedArray.getFloat(index, bVar37.V);
                    break;
                case 41:
                    b bVar38 = aVar.f2620e;
                    bVar38.X = typedArray.getInt(index, bVar38.X);
                    break;
                case 42:
                    b bVar39 = aVar.f2620e;
                    bVar39.Y = typedArray.getInt(index, bVar39.Y);
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    d dVar3 = aVar.f2618c;
                    dVar3.f2698d = typedArray.getFloat(index, dVar3.f2698d);
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    e eVar = aVar.f2621f;
                    eVar.f2713m = true;
                    eVar.f2714n = typedArray.getDimension(index, eVar.f2714n);
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    e eVar2 = aVar.f2621f;
                    eVar2.f2703c = typedArray.getFloat(index, eVar2.f2703c);
                    break;
                case 46:
                    e eVar3 = aVar.f2621f;
                    eVar3.f2704d = typedArray.getFloat(index, eVar3.f2704d);
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    e eVar4 = aVar.f2621f;
                    eVar4.f2705e = typedArray.getFloat(index, eVar4.f2705e);
                    break;
                case 48:
                    e eVar5 = aVar.f2621f;
                    eVar5.f2706f = typedArray.getFloat(index, eVar5.f2706f);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    e eVar6 = aVar.f2621f;
                    eVar6.f2707g = typedArray.getDimension(index, eVar6.f2707g);
                    break;
                case 50:
                    e eVar7 = aVar.f2621f;
                    eVar7.f2708h = typedArray.getDimension(index, eVar7.f2708h);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    e eVar8 = aVar.f2621f;
                    eVar8.f2710j = typedArray.getDimension(index, eVar8.f2710j);
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    e eVar9 = aVar.f2621f;
                    eVar9.f2711k = typedArray.getDimension(index, eVar9.f2711k);
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    e eVar10 = aVar.f2621f;
                    eVar10.f2712l = typedArray.getDimension(index, eVar10.f2712l);
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    b bVar40 = aVar.f2620e;
                    bVar40.Z = typedArray.getInt(index, bVar40.Z);
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    b bVar41 = aVar.f2620e;
                    bVar41.f2638a0 = typedArray.getInt(index, bVar41.f2638a0);
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    b bVar42 = aVar.f2620e;
                    bVar42.f2640b0 = typedArray.getDimensionPixelSize(index, bVar42.f2640b0);
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    b bVar43 = aVar.f2620e;
                    bVar43.f2642c0 = typedArray.getDimensionPixelSize(index, bVar43.f2642c0);
                    break;
                case 58:
                    b bVar44 = aVar.f2620e;
                    bVar44.f2644d0 = typedArray.getDimensionPixelSize(index, bVar44.f2644d0);
                    break;
                case 59:
                    b bVar45 = aVar.f2620e;
                    bVar45.f2646e0 = typedArray.getDimensionPixelSize(index, bVar45.f2646e0);
                    break;
                case 60:
                    e eVar11 = aVar.f2621f;
                    eVar11.f2702b = typedArray.getFloat(index, eVar11.f2702b);
                    break;
                case 61:
                    b bVar46 = aVar.f2620e;
                    bVar46.B = u(typedArray, index, bVar46.B);
                    break;
                case 62:
                    b bVar47 = aVar.f2620e;
                    bVar47.C = typedArray.getDimensionPixelSize(index, bVar47.C);
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    b bVar48 = aVar.f2620e;
                    bVar48.D = typedArray.getFloat(index, bVar48.D);
                    break;
                case 64:
                    c cVar = aVar.f2619d;
                    cVar.f2682b = u(typedArray, index, cVar.f2682b);
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        aVar.f2619d.f2684d = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2619d.f2684d = i1.a.f27204c[typedArray.getInteger(index, 0)];
                        break;
                    }
                case 66:
                    aVar.f2619d.f2686f = typedArray.getInt(index, 0);
                    break;
                case 67:
                    c cVar2 = aVar.f2619d;
                    cVar2.f2689i = typedArray.getFloat(index, cVar2.f2689i);
                    break;
                case 68:
                    d dVar4 = aVar.f2618c;
                    dVar4.f2699e = typedArray.getFloat(index, dVar4.f2699e);
                    break;
                case 69:
                    aVar.f2620e.f2648f0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 70:
                    aVar.f2620e.f2650g0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    b bVar49 = aVar.f2620e;
                    bVar49.f2652h0 = typedArray.getInt(index, bVar49.f2652h0);
                    break;
                case 73:
                    b bVar50 = aVar.f2620e;
                    bVar50.f2654i0 = typedArray.getDimensionPixelSize(index, bVar50.f2654i0);
                    break;
                case 74:
                    aVar.f2620e.f2660l0 = typedArray.getString(index);
                    break;
                case 75:
                    b bVar51 = aVar.f2620e;
                    bVar51.f2668p0 = typedArray.getBoolean(index, bVar51.f2668p0);
                    break;
                case 76:
                    c cVar3 = aVar.f2619d;
                    cVar3.f2685e = typedArray.getInt(index, cVar3.f2685e);
                    break;
                case 77:
                    aVar.f2620e.f2662m0 = typedArray.getString(index);
                    break;
                case 78:
                    d dVar5 = aVar.f2618c;
                    dVar5.f2697c = typedArray.getInt(index, dVar5.f2697c);
                    break;
                case 79:
                    c cVar4 = aVar.f2619d;
                    cVar4.f2687g = typedArray.getFloat(index, cVar4.f2687g);
                    break;
                case 80:
                    b bVar52 = aVar.f2620e;
                    bVar52.f2664n0 = typedArray.getBoolean(index, bVar52.f2664n0);
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    b bVar53 = aVar.f2620e;
                    bVar53.f2666o0 = typedArray.getBoolean(index, bVar53.f2666o0);
                    break;
                case 82:
                    c cVar5 = aVar.f2619d;
                    cVar5.f2683c = typedArray.getInteger(index, cVar5.f2683c);
                    break;
                case 83:
                    e eVar12 = aVar.f2621f;
                    eVar12.f2709i = u(typedArray, index, eVar12.f2709i);
                    break;
                case 84:
                    c cVar6 = aVar.f2619d;
                    cVar6.f2691k = typedArray.getInteger(index, cVar6.f2691k);
                    break;
                case 85:
                    c cVar7 = aVar.f2619d;
                    cVar7.f2690j = typedArray.getFloat(index, cVar7.f2690j);
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2619d.f2694n = typedArray.getResourceId(index, -1);
                        c cVar8 = aVar.f2619d;
                        if (cVar8.f2694n != -1) {
                            cVar8.f2693m = -2;
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2619d.f2692l = typedArray.getString(index);
                        if (aVar.f2619d.f2692l.indexOf("/") > 0) {
                            aVar.f2619d.f2694n = typedArray.getResourceId(index, -1);
                            aVar.f2619d.f2693m = -2;
                            break;
                        } else {
                            aVar.f2619d.f2693m = -1;
                            break;
                        }
                    } else {
                        c cVar9 = aVar.f2619d;
                        cVar9.f2693m = typedArray.getInteger(index, cVar9.f2694n);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2608h.get(index));
                    break;
                case 88:
                case 89:
                case 90:
                default:
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2608h.get(index));
                    break;
                case 91:
                    b bVar54 = aVar.f2620e;
                    bVar54.f2672s = u(typedArray, index, bVar54.f2672s);
                    break;
                case 92:
                    b bVar55 = aVar.f2620e;
                    bVar55.f2673t = u(typedArray, index, bVar55.f2673t);
                    break;
                case 93:
                    b bVar56 = aVar.f2620e;
                    bVar56.N = typedArray.getDimensionPixelSize(index, bVar56.N);
                    break;
                case 94:
                    b bVar57 = aVar.f2620e;
                    bVar57.U = typedArray.getDimensionPixelSize(index, bVar57.U);
                    break;
                case 95:
                    v(aVar.f2620e, typedArray, index, 0);
                    break;
                case 96:
                    v(aVar.f2620e, typedArray, index, 1);
                    break;
                case 97:
                    b bVar58 = aVar.f2620e;
                    bVar58.f2670q0 = typedArray.getInt(index, bVar58.f2670q0);
                    break;
            }
        }
        b bVar59 = aVar.f2620e;
        if (bVar59.f2660l0 != null) {
            bVar59.f2658k0 = null;
        }
    }

    private static void z(a aVar, TypedArray typedArray) {
        int indexCount = typedArray.getIndexCount();
        a.C0030a c0030a = new a.C0030a();
        aVar.f2623h = c0030a;
        aVar.f2619d.f2681a = false;
        aVar.f2620e.f2639b = false;
        aVar.f2618c.f2695a = false;
        aVar.f2621f.f2701a = false;
        for (int i10 = 0; i10 < indexCount; i10++) {
            int index = typedArray.getIndex(i10);
            switch (f2609i.get(index)) {
                case 2:
                    c0030a.b(2, typedArray.getDimensionPixelSize(index, aVar.f2620e.K));
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
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2608h.get(index));
                    break;
                case 5:
                    c0030a.c(5, typedArray.getString(index));
                    break;
                case 6:
                    c0030a.b(6, typedArray.getDimensionPixelOffset(index, aVar.f2620e.E));
                    break;
                case 7:
                    c0030a.b(7, typedArray.getDimensionPixelOffset(index, aVar.f2620e.F));
                    break;
                case 8:
                    c0030a.b(8, typedArray.getDimensionPixelSize(index, aVar.f2620e.L));
                    break;
                case 11:
                    c0030a.b(11, typedArray.getDimensionPixelSize(index, aVar.f2620e.R));
                    break;
                case 12:
                    c0030a.b(12, typedArray.getDimensionPixelSize(index, aVar.f2620e.S));
                    break;
                case 13:
                    c0030a.b(13, typedArray.getDimensionPixelSize(index, aVar.f2620e.O));
                    break;
                case 14:
                    c0030a.b(14, typedArray.getDimensionPixelSize(index, aVar.f2620e.Q));
                    break;
                case 15:
                    c0030a.b(15, typedArray.getDimensionPixelSize(index, aVar.f2620e.T));
                    break;
                case 16:
                    c0030a.b(16, typedArray.getDimensionPixelSize(index, aVar.f2620e.P));
                    break;
                case 17:
                    c0030a.b(17, typedArray.getDimensionPixelOffset(index, aVar.f2620e.f2647f));
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    c0030a.b(18, typedArray.getDimensionPixelOffset(index, aVar.f2620e.f2649g));
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    c0030a.a(19, typedArray.getFloat(index, aVar.f2620e.f2651h));
                    break;
                case 20:
                    c0030a.a(20, typedArray.getFloat(index, aVar.f2620e.f2678y));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0030a.b(21, typedArray.getLayoutDimension(index, aVar.f2620e.f2645e));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0030a.b(22, f2607g[typedArray.getInt(index, aVar.f2618c.f2696b)]);
                    break;
                case 23:
                    c0030a.b(23, typedArray.getLayoutDimension(index, aVar.f2620e.f2643d));
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    c0030a.b(24, typedArray.getDimensionPixelSize(index, aVar.f2620e.H));
                    break;
                case 27:
                    c0030a.b(27, typedArray.getInt(index, aVar.f2620e.G));
                    break;
                case 28:
                    c0030a.b(28, typedArray.getDimensionPixelSize(index, aVar.f2620e.I));
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    c0030a.b(31, typedArray.getDimensionPixelSize(index, aVar.f2620e.M));
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    c0030a.b(34, typedArray.getDimensionPixelSize(index, aVar.f2620e.J));
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    c0030a.a(37, typedArray.getFloat(index, aVar.f2620e.f2679z));
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    int resourceId = typedArray.getResourceId(index, aVar.f2616a);
                    aVar.f2616a = resourceId;
                    c0030a.b(38, resourceId);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    c0030a.a(39, typedArray.getFloat(index, aVar.f2620e.W));
                    break;
                case 40:
                    c0030a.a(40, typedArray.getFloat(index, aVar.f2620e.V));
                    break;
                case 41:
                    c0030a.b(41, typedArray.getInt(index, aVar.f2620e.X));
                    break;
                case 42:
                    c0030a.b(42, typedArray.getInt(index, aVar.f2620e.Y));
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    c0030a.a(43, typedArray.getFloat(index, aVar.f2618c.f2698d));
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    c0030a.d(44, true);
                    c0030a.a(44, typedArray.getDimension(index, aVar.f2621f.f2714n));
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    c0030a.a(45, typedArray.getFloat(index, aVar.f2621f.f2703c));
                    break;
                case 46:
                    c0030a.a(46, typedArray.getFloat(index, aVar.f2621f.f2704d));
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    c0030a.a(47, typedArray.getFloat(index, aVar.f2621f.f2705e));
                    break;
                case 48:
                    c0030a.a(48, typedArray.getFloat(index, aVar.f2621f.f2706f));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    c0030a.a(49, typedArray.getDimension(index, aVar.f2621f.f2707g));
                    break;
                case 50:
                    c0030a.a(50, typedArray.getDimension(index, aVar.f2621f.f2708h));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    c0030a.a(51, typedArray.getDimension(index, aVar.f2621f.f2710j));
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    c0030a.a(52, typedArray.getDimension(index, aVar.f2621f.f2711k));
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    c0030a.a(53, typedArray.getDimension(index, aVar.f2621f.f2712l));
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    c0030a.b(54, typedArray.getInt(index, aVar.f2620e.Z));
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    c0030a.b(55, typedArray.getInt(index, aVar.f2620e.f2638a0));
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    c0030a.b(56, typedArray.getDimensionPixelSize(index, aVar.f2620e.f2640b0));
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    c0030a.b(57, typedArray.getDimensionPixelSize(index, aVar.f2620e.f2642c0));
                    break;
                case 58:
                    c0030a.b(58, typedArray.getDimensionPixelSize(index, aVar.f2620e.f2644d0));
                    break;
                case 59:
                    c0030a.b(59, typedArray.getDimensionPixelSize(index, aVar.f2620e.f2646e0));
                    break;
                case 60:
                    c0030a.a(60, typedArray.getFloat(index, aVar.f2621f.f2702b));
                    break;
                case 62:
                    c0030a.b(62, typedArray.getDimensionPixelSize(index, aVar.f2620e.C));
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    c0030a.a(63, typedArray.getFloat(index, aVar.f2620e.D));
                    break;
                case 64:
                    c0030a.b(64, u(typedArray, index, aVar.f2619d.f2682b));
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        c0030a.c(65, typedArray.getString(index));
                        break;
                    } else {
                        c0030a.c(65, i1.a.f27204c[typedArray.getInteger(index, 0)]);
                        break;
                    }
                case 66:
                    c0030a.b(66, typedArray.getInt(index, 0));
                    break;
                case 67:
                    c0030a.a(67, typedArray.getFloat(index, aVar.f2619d.f2689i));
                    break;
                case 68:
                    c0030a.a(68, typedArray.getFloat(index, aVar.f2618c.f2699e));
                    break;
                case 69:
                    c0030a.a(69, typedArray.getFloat(index, 1.0f));
                    break;
                case 70:
                    c0030a.a(70, typedArray.getFloat(index, 1.0f));
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    c0030a.b(72, typedArray.getInt(index, aVar.f2620e.f2652h0));
                    break;
                case 73:
                    c0030a.b(73, typedArray.getDimensionPixelSize(index, aVar.f2620e.f2654i0));
                    break;
                case 74:
                    c0030a.c(74, typedArray.getString(index));
                    break;
                case 75:
                    c0030a.d(75, typedArray.getBoolean(index, aVar.f2620e.f2668p0));
                    break;
                case 76:
                    c0030a.b(76, typedArray.getInt(index, aVar.f2619d.f2685e));
                    break;
                case 77:
                    c0030a.c(77, typedArray.getString(index));
                    break;
                case 78:
                    c0030a.b(78, typedArray.getInt(index, aVar.f2618c.f2697c));
                    break;
                case 79:
                    c0030a.a(79, typedArray.getFloat(index, aVar.f2619d.f2687g));
                    break;
                case 80:
                    c0030a.d(80, typedArray.getBoolean(index, aVar.f2620e.f2664n0));
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    c0030a.d(81, typedArray.getBoolean(index, aVar.f2620e.f2666o0));
                    break;
                case 82:
                    c0030a.b(82, typedArray.getInteger(index, aVar.f2619d.f2683c));
                    break;
                case 83:
                    c0030a.b(83, u(typedArray, index, aVar.f2621f.f2709i));
                    break;
                case 84:
                    c0030a.b(84, typedArray.getInteger(index, aVar.f2619d.f2691k));
                    break;
                case 85:
                    c0030a.a(85, typedArray.getFloat(index, aVar.f2619d.f2690j));
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2619d.f2694n = typedArray.getResourceId(index, -1);
                        c0030a.b(89, aVar.f2619d.f2694n);
                        c cVar = aVar.f2619d;
                        if (cVar.f2694n != -1) {
                            cVar.f2693m = -2;
                            c0030a.b(88, -2);
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2619d.f2692l = typedArray.getString(index);
                        c0030a.c(90, aVar.f2619d.f2692l);
                        if (aVar.f2619d.f2692l.indexOf("/") > 0) {
                            aVar.f2619d.f2694n = typedArray.getResourceId(index, -1);
                            c0030a.b(89, aVar.f2619d.f2694n);
                            aVar.f2619d.f2693m = -2;
                            c0030a.b(88, -2);
                            break;
                        } else {
                            aVar.f2619d.f2693m = -1;
                            c0030a.b(88, -1);
                            break;
                        }
                    } else {
                        c cVar2 = aVar.f2619d;
                        cVar2.f2693m = typedArray.getInteger(index, cVar2.f2694n);
                        c0030a.b(88, aVar.f2619d.f2693m);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2608h.get(index));
                    break;
                case 93:
                    c0030a.b(93, typedArray.getDimensionPixelSize(index, aVar.f2620e.N));
                    break;
                case 94:
                    c0030a.b(94, typedArray.getDimensionPixelSize(index, aVar.f2620e.U));
                    break;
                case 95:
                    v(c0030a, typedArray, index, 0);
                    break;
                case 96:
                    v(c0030a, typedArray, index, 1);
                    break;
                case 97:
                    c0030a.b(97, typedArray.getInt(index, aVar.f2620e.f2670q0));
                    break;
                case 98:
                    if (m1.b.f37241d) {
                        int resourceId2 = typedArray.getResourceId(index, aVar.f2616a);
                        aVar.f2616a = resourceId2;
                        if (resourceId2 == -1) {
                            aVar.f2617b = typedArray.getString(index);
                            break;
                        } else {
                            break;
                        }
                    } else if (typedArray.peekValue(index).type == 3) {
                        aVar.f2617b = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2616a = typedArray.getResourceId(index, aVar.f2616a);
                        break;
                    }
                case 99:
                    c0030a.d(99, typedArray.getBoolean(index, aVar.f2620e.f2653i));
                    break;
            }
        }
    }

    public void A(int i10, float f10) {
        r(i10).f2620e.f2678y = f10;
    }

    public void B(int i10, float f10) {
        r(i10).f2620e.W = f10;
    }

    public void C(int i10, int i11, int i12) {
        a r10 = r(i10);
        switch (i11) {
            case 1:
                r10.f2620e.H = i12;
                return;
            case 2:
                r10.f2620e.I = i12;
                return;
            case 3:
                r10.f2620e.J = i12;
                return;
            case 4:
                r10.f2620e.K = i12;
                return;
            case 5:
                r10.f2620e.N = i12;
                return;
            case 6:
                r10.f2620e.M = i12;
                return;
            case 7:
                r10.f2620e.L = i12;
                return;
            default:
                throw new IllegalArgumentException("unknown constraint");
        }
    }

    public void D(int i10, float f10) {
        r(i10).f2620e.f2679z = f10;
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
        HashSet hashSet = new HashSet(this.f2615f.keySet());
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            int id2 = childAt.getId();
            if (!this.f2615f.containsKey(Integer.valueOf(id2))) {
                Log.w("ConstraintSet", "id unknown " + m1.a.a(childAt));
            } else if (this.f2614e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            } else {
                if (id2 != -1) {
                    if (this.f2615f.containsKey(Integer.valueOf(id2))) {
                        hashSet.remove(Integer.valueOf(id2));
                        a aVar = (a) this.f2615f.get(Integer.valueOf(id2));
                        if (aVar != null) {
                            if (childAt instanceof Barrier) {
                                aVar.f2620e.f2656j0 = 1;
                                Barrier barrier = (Barrier) childAt;
                                barrier.setId(id2);
                                barrier.setType(aVar.f2620e.f2652h0);
                                barrier.setMargin(aVar.f2620e.f2654i0);
                                barrier.setAllowsGoneWidget(aVar.f2620e.f2668p0);
                                b bVar = aVar.f2620e;
                                int[] iArr = bVar.f2658k0;
                                if (iArr != null) {
                                    barrier.setReferencedIds(iArr);
                                } else {
                                    String str = bVar.f2660l0;
                                    if (str != null) {
                                        bVar.f2658k0 = o(barrier, str);
                                        barrier.setReferencedIds(aVar.f2620e.f2658k0);
                                    }
                                }
                            }
                            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
                            layoutParams.a();
                            aVar.b(layoutParams);
                            if (z10) {
                                androidx.constraintlayout.widget.a.c(childAt, aVar.f2622g);
                            }
                            childAt.setLayoutParams(layoutParams);
                            d dVar = aVar.f2618c;
                            if (dVar.f2697c == 0) {
                                childAt.setVisibility(dVar.f2696b);
                            }
                            childAt.setAlpha(aVar.f2618c.f2698d);
                            childAt.setRotation(aVar.f2621f.f2702b);
                            childAt.setRotationX(aVar.f2621f.f2703c);
                            childAt.setRotationY(aVar.f2621f.f2704d);
                            childAt.setScaleX(aVar.f2621f.f2705e);
                            childAt.setScaleY(aVar.f2621f.f2706f);
                            e eVar = aVar.f2621f;
                            if (eVar.f2709i != -1) {
                                if (((View) childAt.getParent()).findViewById(aVar.f2621f.f2709i) != null) {
                                    float top = (findViewById.getTop() + findViewById.getBottom()) / 2.0f;
                                    float left = (findViewById.getLeft() + findViewById.getRight()) / 2.0f;
                                    if (childAt.getRight() - childAt.getLeft() > 0 && childAt.getBottom() - childAt.getTop() > 0) {
                                        childAt.setPivotX(left - childAt.getLeft());
                                        childAt.setPivotY(top - childAt.getTop());
                                    }
                                }
                            } else {
                                if (!Float.isNaN(eVar.f2707g)) {
                                    childAt.setPivotX(aVar.f2621f.f2707g);
                                }
                                if (!Float.isNaN(aVar.f2621f.f2708h)) {
                                    childAt.setPivotY(aVar.f2621f.f2708h);
                                }
                            }
                            childAt.setTranslationX(aVar.f2621f.f2710j);
                            childAt.setTranslationY(aVar.f2621f.f2711k);
                            childAt.setTranslationZ(aVar.f2621f.f2712l);
                            e eVar2 = aVar.f2621f;
                            if (eVar2.f2713m) {
                                childAt.setElevation(eVar2.f2714n);
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
            a aVar2 = (a) this.f2615f.get(num);
            if (aVar2 != null) {
                if (aVar2.f2620e.f2656j0 == 1) {
                    Barrier barrier2 = new Barrier(constraintLayout.getContext());
                    barrier2.setId(num.intValue());
                    b bVar2 = aVar2.f2620e;
                    int[] iArr2 = bVar2.f2658k0;
                    if (iArr2 != null) {
                        barrier2.setReferencedIds(iArr2);
                    } else {
                        String str2 = bVar2.f2660l0;
                        if (str2 != null) {
                            bVar2.f2658k0 = o(barrier2, str2);
                            barrier2.setReferencedIds(aVar2.f2620e.f2658k0);
                        }
                    }
                    barrier2.setType(aVar2.f2620e.f2652h0);
                    barrier2.setMargin(aVar2.f2620e.f2654i0);
                    ConstraintLayout.LayoutParams generateDefaultLayoutParams = constraintLayout.generateDefaultLayoutParams();
                    barrier2.o();
                    aVar2.b(generateDefaultLayoutParams);
                    constraintLayout.addView(barrier2, generateDefaultLayoutParams);
                }
                if (aVar2.f2620e.f2637a) {
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
        this.f2615f.clear();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
            int id2 = childAt.getId();
            if (this.f2614e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            }
            if (!this.f2615f.containsKey(Integer.valueOf(id2))) {
                this.f2615f.put(Integer.valueOf(id2), new a());
            }
            a aVar = (a) this.f2615f.get(Integer.valueOf(id2));
            if (aVar != null) {
                aVar.f2622g = androidx.constraintlayout.widget.a.a(this.f2613d, childAt);
                aVar.d(id2, layoutParams);
                aVar.f2618c.f2696b = childAt.getVisibility();
                aVar.f2618c.f2698d = childAt.getAlpha();
                aVar.f2621f.f2702b = childAt.getRotation();
                aVar.f2621f.f2703c = childAt.getRotationX();
                aVar.f2621f.f2704d = childAt.getRotationY();
                aVar.f2621f.f2705e = childAt.getScaleX();
                aVar.f2621f.f2706f = childAt.getScaleY();
                float pivotX = childAt.getPivotX();
                float pivotY = childAt.getPivotY();
                if (pivotX != 0.0d || pivotY != 0.0d) {
                    e eVar = aVar.f2621f;
                    eVar.f2707g = pivotX;
                    eVar.f2708h = pivotY;
                }
                aVar.f2621f.f2710j = childAt.getTranslationX();
                aVar.f2621f.f2711k = childAt.getTranslationY();
                aVar.f2621f.f2712l = childAt.getTranslationZ();
                e eVar2 = aVar.f2621f;
                if (eVar2.f2713m) {
                    eVar2.f2714n = childAt.getElevation();
                }
                if (childAt instanceof Barrier) {
                    Barrier barrier = (Barrier) childAt;
                    aVar.f2620e.f2668p0 = barrier.getAllowsGoneWidget();
                    aVar.f2620e.f2658k0 = barrier.getReferencedIds();
                    aVar.f2620e.f2652h0 = barrier.getType();
                    aVar.f2620e.f2654i0 = barrier.getMargin();
                }
            }
        }
    }

    public void g(int i10, int i11, int i12, int i13) {
        if (!this.f2615f.containsKey(Integer.valueOf(i10))) {
            this.f2615f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2615f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2620e;
                    bVar.f2655j = i12;
                    bVar.f2657k = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2620e;
                    bVar2.f2657k = i12;
                    bVar2.f2655j = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("left to " + E(i13) + " undefined");
                }
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2620e;
                    bVar3.f2659l = i12;
                    bVar3.f2661m = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar4 = aVar.f2620e;
                    bVar4.f2661m = i12;
                    bVar4.f2659l = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2620e;
                    bVar5.f2663n = i12;
                    bVar5.f2665o = -1;
                    bVar5.f2671r = -1;
                    bVar5.f2672s = -1;
                    bVar5.f2673t = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar6 = aVar.f2620e;
                    bVar6.f2665o = i12;
                    bVar6.f2663n = -1;
                    bVar6.f2671r = -1;
                    bVar6.f2672s = -1;
                    bVar6.f2673t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2620e;
                    bVar7.f2669q = i12;
                    bVar7.f2667p = -1;
                    bVar7.f2671r = -1;
                    bVar7.f2672s = -1;
                    bVar7.f2673t = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar8 = aVar.f2620e;
                    bVar8.f2667p = i12;
                    bVar8.f2669q = -1;
                    bVar8.f2671r = -1;
                    bVar8.f2672s = -1;
                    bVar8.f2673t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2620e;
                    bVar9.f2671r = i12;
                    bVar9.f2669q = -1;
                    bVar9.f2667p = -1;
                    bVar9.f2663n = -1;
                    bVar9.f2665o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2620e;
                    bVar10.f2672s = i12;
                    bVar10.f2669q = -1;
                    bVar10.f2667p = -1;
                    bVar10.f2663n = -1;
                    bVar10.f2665o = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar11 = aVar.f2620e;
                    bVar11.f2673t = i12;
                    bVar11.f2669q = -1;
                    bVar11.f2667p = -1;
                    bVar11.f2663n = -1;
                    bVar11.f2665o = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2620e;
                    bVar12.f2675v = i12;
                    bVar12.f2674u = -1;
                    return;
                } else if (i13 == 7) {
                    b bVar13 = aVar.f2620e;
                    bVar13.f2674u = i12;
                    bVar13.f2675v = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2620e;
                    bVar14.f2677x = i12;
                    bVar14.f2676w = -1;
                    return;
                } else if (i13 == 6) {
                    b bVar15 = aVar.f2620e;
                    bVar15.f2676w = i12;
                    bVar15.f2677x = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void h(int i10, int i11, int i12, int i13, int i14) {
        if (!this.f2615f.containsKey(Integer.valueOf(i10))) {
            this.f2615f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2615f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2620e;
                    bVar.f2655j = i12;
                    bVar.f2657k = -1;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2620e;
                    bVar2.f2657k = i12;
                    bVar2.f2655j = -1;
                } else {
                    throw new IllegalArgumentException("Left to " + E(i13) + " undefined");
                }
                aVar.f2620e.H = i14;
                return;
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2620e;
                    bVar3.f2659l = i12;
                    bVar3.f2661m = -1;
                } else if (i13 != 2) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar4 = aVar.f2620e;
                    bVar4.f2661m = i12;
                    bVar4.f2659l = -1;
                }
                aVar.f2620e.I = i14;
                return;
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2620e;
                    bVar5.f2663n = i12;
                    bVar5.f2665o = -1;
                    bVar5.f2671r = -1;
                    bVar5.f2672s = -1;
                    bVar5.f2673t = -1;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar6 = aVar.f2620e;
                    bVar6.f2665o = i12;
                    bVar6.f2663n = -1;
                    bVar6.f2671r = -1;
                    bVar6.f2672s = -1;
                    bVar6.f2673t = -1;
                }
                aVar.f2620e.J = i14;
                return;
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2620e;
                    bVar7.f2669q = i12;
                    bVar7.f2667p = -1;
                    bVar7.f2671r = -1;
                    bVar7.f2672s = -1;
                    bVar7.f2673t = -1;
                } else if (i13 != 3) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar8 = aVar.f2620e;
                    bVar8.f2667p = i12;
                    bVar8.f2669q = -1;
                    bVar8.f2671r = -1;
                    bVar8.f2672s = -1;
                    bVar8.f2673t = -1;
                }
                aVar.f2620e.K = i14;
                return;
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2620e;
                    bVar9.f2671r = i12;
                    bVar9.f2669q = -1;
                    bVar9.f2667p = -1;
                    bVar9.f2663n = -1;
                    bVar9.f2665o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2620e;
                    bVar10.f2672s = i12;
                    bVar10.f2669q = -1;
                    bVar10.f2667p = -1;
                    bVar10.f2663n = -1;
                    bVar10.f2665o = -1;
                    return;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar11 = aVar.f2620e;
                    bVar11.f2673t = i12;
                    bVar11.f2669q = -1;
                    bVar11.f2667p = -1;
                    bVar11.f2663n = -1;
                    bVar11.f2665o = -1;
                    return;
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2620e;
                    bVar12.f2675v = i12;
                    bVar12.f2674u = -1;
                } else if (i13 != 7) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar13 = aVar.f2620e;
                    bVar13.f2674u = i12;
                    bVar13.f2675v = -1;
                }
                aVar.f2620e.M = i14;
                return;
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2620e;
                    bVar14.f2677x = i12;
                    bVar14.f2676w = -1;
                } else if (i13 != 6) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar15 = aVar.f2620e;
                    bVar15.f2676w = i12;
                    bVar15.f2677x = -1;
                }
                aVar.f2620e.L = i14;
                return;
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void i(int i10, int i11, int i12, float f10) {
        b bVar = r(i10).f2620e;
        bVar.B = i11;
        bVar.C = i12;
        bVar.D = f10;
    }

    public void j(int i10, int i11) {
        r(i10).f2620e.Z = i11;
    }

    public void k(int i10, int i11) {
        r(i10).f2620e.f2645e = i11;
    }

    public void l(int i10, int i11) {
        r(i10).f2620e.f2643d = i11;
    }

    public void m(int i10, boolean z10) {
        r(i10).f2620e.f2666o0 = z10;
    }

    public void n(int i10, boolean z10) {
        r(i10).f2620e.f2664n0 = z10;
    }

    public void p(int i10, int i11, int i12, int i13, int[] iArr, float[] fArr, int i14) {
        if (iArr.length >= 2) {
            if (fArr != null && fArr.length != iArr.length) {
                throw new IllegalArgumentException("must have 2 or more widgets in a chain");
            }
            if (fArr != null) {
                r(iArr[0]).f2620e.V = fArr[0];
            }
            r(iArr[0]).f2620e.Y = i14;
            h(iArr[0], 3, i10, i11, 0);
            for (int i15 = 1; i15 < iArr.length; i15++) {
                int i16 = i15 - 1;
                h(iArr[i15], 3, iArr[i16], 4, 0);
                h(iArr[i16], 4, iArr[i15], 3, 0);
                if (fArr != null) {
                    r(iArr[i15]).f2620e.V = fArr[i15];
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
                        q10.f2620e.f2637a = true;
                    }
                    this.f2615f.put(Integer.valueOf(q10.f2616a), q10);
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
