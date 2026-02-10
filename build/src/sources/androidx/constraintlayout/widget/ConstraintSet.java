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
    private static final int[] f2633g = {0, 4, 8};

    /* renamed from: h  reason: collision with root package name */
    private static SparseIntArray f2634h = new SparseIntArray();

    /* renamed from: i  reason: collision with root package name */
    private static SparseIntArray f2635i = new SparseIntArray();

    /* renamed from: a  reason: collision with root package name */
    public String f2636a = "";

    /* renamed from: b  reason: collision with root package name */
    private String[] f2637b = new String[0];

    /* renamed from: c  reason: collision with root package name */
    public int f2638c = 0;

    /* renamed from: d  reason: collision with root package name */
    private HashMap f2639d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private boolean f2640e = true;

    /* renamed from: f  reason: collision with root package name */
    private HashMap f2641f = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        int f2642a;

        /* renamed from: b  reason: collision with root package name */
        String f2643b;

        /* renamed from: c  reason: collision with root package name */
        public final d f2644c = new d();

        /* renamed from: d  reason: collision with root package name */
        public final c f2645d = new c();

        /* renamed from: e  reason: collision with root package name */
        public final b f2646e = new b();

        /* renamed from: f  reason: collision with root package name */
        public final e f2647f = new e();

        /* renamed from: g  reason: collision with root package name */
        public HashMap f2648g = new HashMap();

        /* renamed from: h  reason: collision with root package name */
        C0030a f2649h;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.constraintlayout.widget.ConstraintSet$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class C0030a {

            /* renamed from: a  reason: collision with root package name */
            int[] f2650a = new int[10];

            /* renamed from: b  reason: collision with root package name */
            int[] f2651b = new int[10];

            /* renamed from: c  reason: collision with root package name */
            int f2652c = 0;

            /* renamed from: d  reason: collision with root package name */
            int[] f2653d = new int[10];

            /* renamed from: e  reason: collision with root package name */
            float[] f2654e = new float[10];

            /* renamed from: f  reason: collision with root package name */
            int f2655f = 0;

            /* renamed from: g  reason: collision with root package name */
            int[] f2656g = new int[5];

            /* renamed from: h  reason: collision with root package name */
            String[] f2657h = new String[5];

            /* renamed from: i  reason: collision with root package name */
            int f2658i = 0;

            /* renamed from: j  reason: collision with root package name */
            int[] f2659j = new int[4];

            /* renamed from: k  reason: collision with root package name */
            boolean[] f2660k = new boolean[4];

            /* renamed from: l  reason: collision with root package name */
            int f2661l = 0;

            C0030a() {
            }

            void a(int i10, float f10) {
                int i11 = this.f2655f;
                int[] iArr = this.f2653d;
                if (i11 >= iArr.length) {
                    this.f2653d = Arrays.copyOf(iArr, iArr.length * 2);
                    float[] fArr = this.f2654e;
                    this.f2654e = Arrays.copyOf(fArr, fArr.length * 2);
                }
                int[] iArr2 = this.f2653d;
                int i12 = this.f2655f;
                iArr2[i12] = i10;
                float[] fArr2 = this.f2654e;
                this.f2655f = i12 + 1;
                fArr2[i12] = f10;
            }

            void b(int i10, int i11) {
                int i12 = this.f2652c;
                int[] iArr = this.f2650a;
                if (i12 >= iArr.length) {
                    this.f2650a = Arrays.copyOf(iArr, iArr.length * 2);
                    int[] iArr2 = this.f2651b;
                    this.f2651b = Arrays.copyOf(iArr2, iArr2.length * 2);
                }
                int[] iArr3 = this.f2650a;
                int i13 = this.f2652c;
                iArr3[i13] = i10;
                int[] iArr4 = this.f2651b;
                this.f2652c = i13 + 1;
                iArr4[i13] = i11;
            }

            void c(int i10, String str) {
                int i11 = this.f2658i;
                int[] iArr = this.f2656g;
                if (i11 >= iArr.length) {
                    this.f2656g = Arrays.copyOf(iArr, iArr.length * 2);
                    String[] strArr = this.f2657h;
                    this.f2657h = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                }
                int[] iArr2 = this.f2656g;
                int i12 = this.f2658i;
                iArr2[i12] = i10;
                String[] strArr2 = this.f2657h;
                this.f2658i = i12 + 1;
                strArr2[i12] = str;
            }

            void d(int i10, boolean z10) {
                int i11 = this.f2661l;
                int[] iArr = this.f2659j;
                if (i11 >= iArr.length) {
                    this.f2659j = Arrays.copyOf(iArr, iArr.length * 2);
                    boolean[] zArr = this.f2660k;
                    this.f2660k = Arrays.copyOf(zArr, zArr.length * 2);
                }
                int[] iArr2 = this.f2659j;
                int i12 = this.f2661l;
                iArr2[i12] = i10;
                boolean[] zArr2 = this.f2660k;
                this.f2661l = i12 + 1;
                zArr2[i12] = z10;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void d(int i10, ConstraintLayout.LayoutParams layoutParams) {
            this.f2642a = i10;
            b bVar = this.f2646e;
            bVar.f2681j = layoutParams.f2565e;
            bVar.f2683k = layoutParams.f2567f;
            bVar.f2685l = layoutParams.f2569g;
            bVar.f2687m = layoutParams.f2571h;
            bVar.f2689n = layoutParams.f2573i;
            bVar.f2691o = layoutParams.f2575j;
            bVar.f2693p = layoutParams.f2577k;
            bVar.f2695q = layoutParams.f2579l;
            bVar.f2697r = layoutParams.f2581m;
            bVar.f2698s = layoutParams.f2583n;
            bVar.f2699t = layoutParams.f2585o;
            bVar.f2700u = layoutParams.f2593s;
            bVar.f2701v = layoutParams.f2595t;
            bVar.f2702w = layoutParams.f2597u;
            bVar.f2703x = layoutParams.f2599v;
            bVar.f2704y = layoutParams.G;
            bVar.f2705z = layoutParams.H;
            bVar.A = layoutParams.I;
            bVar.B = layoutParams.f2587p;
            bVar.C = layoutParams.f2589q;
            bVar.D = layoutParams.f2591r;
            bVar.E = layoutParams.X;
            bVar.F = layoutParams.Y;
            bVar.G = layoutParams.Z;
            bVar.f2677h = layoutParams.f2561c;
            bVar.f2673f = layoutParams.f2557a;
            bVar.f2675g = layoutParams.f2559b;
            bVar.f2669d = ((ViewGroup.MarginLayoutParams) layoutParams).width;
            bVar.f2671e = ((ViewGroup.MarginLayoutParams) layoutParams).height;
            bVar.H = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin;
            bVar.I = ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
            bVar.J = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin;
            bVar.K = ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
            bVar.N = layoutParams.D;
            bVar.V = layoutParams.M;
            bVar.W = layoutParams.L;
            bVar.Y = layoutParams.O;
            bVar.X = layoutParams.N;
            bVar.f2690n0 = layoutParams.f2558a0;
            bVar.f2692o0 = layoutParams.f2560b0;
            bVar.Z = layoutParams.P;
            bVar.f2664a0 = layoutParams.Q;
            bVar.f2666b0 = layoutParams.T;
            bVar.f2668c0 = layoutParams.U;
            bVar.f2670d0 = layoutParams.R;
            bVar.f2672e0 = layoutParams.S;
            bVar.f2674f0 = layoutParams.V;
            bVar.f2676g0 = layoutParams.W;
            bVar.f2688m0 = layoutParams.f2562c0;
            bVar.P = layoutParams.f2603x;
            bVar.R = layoutParams.f2605z;
            bVar.O = layoutParams.f2601w;
            bVar.Q = layoutParams.f2604y;
            bVar.T = layoutParams.A;
            bVar.S = layoutParams.B;
            bVar.U = layoutParams.C;
            bVar.f2696q0 = layoutParams.f2564d0;
            bVar.L = layoutParams.getMarginEnd();
            this.f2646e.M = layoutParams.getMarginStart();
        }

        public void b(ConstraintLayout.LayoutParams layoutParams) {
            b bVar = this.f2646e;
            layoutParams.f2565e = bVar.f2681j;
            layoutParams.f2567f = bVar.f2683k;
            layoutParams.f2569g = bVar.f2685l;
            layoutParams.f2571h = bVar.f2687m;
            layoutParams.f2573i = bVar.f2689n;
            layoutParams.f2575j = bVar.f2691o;
            layoutParams.f2577k = bVar.f2693p;
            layoutParams.f2579l = bVar.f2695q;
            layoutParams.f2581m = bVar.f2697r;
            layoutParams.f2583n = bVar.f2698s;
            layoutParams.f2585o = bVar.f2699t;
            layoutParams.f2593s = bVar.f2700u;
            layoutParams.f2595t = bVar.f2701v;
            layoutParams.f2597u = bVar.f2702w;
            layoutParams.f2599v = bVar.f2703x;
            ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin = bVar.H;
            ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin = bVar.I;
            ((ViewGroup.MarginLayoutParams) layoutParams).topMargin = bVar.J;
            ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin = bVar.K;
            layoutParams.A = bVar.T;
            layoutParams.B = bVar.S;
            layoutParams.f2603x = bVar.P;
            layoutParams.f2605z = bVar.R;
            layoutParams.G = bVar.f2704y;
            layoutParams.H = bVar.f2705z;
            layoutParams.f2587p = bVar.B;
            layoutParams.f2589q = bVar.C;
            layoutParams.f2591r = bVar.D;
            layoutParams.I = bVar.A;
            layoutParams.X = bVar.E;
            layoutParams.Y = bVar.F;
            layoutParams.M = bVar.V;
            layoutParams.L = bVar.W;
            layoutParams.O = bVar.Y;
            layoutParams.N = bVar.X;
            layoutParams.f2558a0 = bVar.f2690n0;
            layoutParams.f2560b0 = bVar.f2692o0;
            layoutParams.P = bVar.Z;
            layoutParams.Q = bVar.f2664a0;
            layoutParams.T = bVar.f2666b0;
            layoutParams.U = bVar.f2668c0;
            layoutParams.R = bVar.f2670d0;
            layoutParams.S = bVar.f2672e0;
            layoutParams.V = bVar.f2674f0;
            layoutParams.W = bVar.f2676g0;
            layoutParams.Z = bVar.G;
            layoutParams.f2561c = bVar.f2677h;
            layoutParams.f2557a = bVar.f2673f;
            layoutParams.f2559b = bVar.f2675g;
            ((ViewGroup.MarginLayoutParams) layoutParams).width = bVar.f2669d;
            ((ViewGroup.MarginLayoutParams) layoutParams).height = bVar.f2671e;
            String str = bVar.f2688m0;
            if (str != null) {
                layoutParams.f2562c0 = str;
            }
            layoutParams.f2564d0 = bVar.f2696q0;
            layoutParams.setMarginStart(bVar.M);
            layoutParams.setMarginEnd(this.f2646e.L);
            layoutParams.a();
        }

        /* renamed from: c */
        public a clone() {
            a aVar = new a();
            aVar.f2646e.a(this.f2646e);
            aVar.f2645d.a(this.f2645d);
            aVar.f2644c.a(this.f2644c);
            aVar.f2647f.a(this.f2647f);
            aVar.f2642a = this.f2642a;
            aVar.f2649h = this.f2649h;
            return aVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: r0  reason: collision with root package name */
        private static SparseIntArray f2662r0;

        /* renamed from: d  reason: collision with root package name */
        public int f2669d;

        /* renamed from: e  reason: collision with root package name */
        public int f2671e;

        /* renamed from: k0  reason: collision with root package name */
        public int[] f2684k0;

        /* renamed from: l0  reason: collision with root package name */
        public String f2686l0;

        /* renamed from: m0  reason: collision with root package name */
        public String f2688m0;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2663a = false;

        /* renamed from: b  reason: collision with root package name */
        public boolean f2665b = false;

        /* renamed from: c  reason: collision with root package name */
        public boolean f2667c = false;

        /* renamed from: f  reason: collision with root package name */
        public int f2673f = -1;

        /* renamed from: g  reason: collision with root package name */
        public int f2675g = -1;

        /* renamed from: h  reason: collision with root package name */
        public float f2677h = -1.0f;

        /* renamed from: i  reason: collision with root package name */
        public boolean f2679i = true;

        /* renamed from: j  reason: collision with root package name */
        public int f2681j = -1;

        /* renamed from: k  reason: collision with root package name */
        public int f2683k = -1;

        /* renamed from: l  reason: collision with root package name */
        public int f2685l = -1;

        /* renamed from: m  reason: collision with root package name */
        public int f2687m = -1;

        /* renamed from: n  reason: collision with root package name */
        public int f2689n = -1;

        /* renamed from: o  reason: collision with root package name */
        public int f2691o = -1;

        /* renamed from: p  reason: collision with root package name */
        public int f2693p = -1;

        /* renamed from: q  reason: collision with root package name */
        public int f2695q = -1;

        /* renamed from: r  reason: collision with root package name */
        public int f2697r = -1;

        /* renamed from: s  reason: collision with root package name */
        public int f2698s = -1;

        /* renamed from: t  reason: collision with root package name */
        public int f2699t = -1;

        /* renamed from: u  reason: collision with root package name */
        public int f2700u = -1;

        /* renamed from: v  reason: collision with root package name */
        public int f2701v = -1;

        /* renamed from: w  reason: collision with root package name */
        public int f2702w = -1;

        /* renamed from: x  reason: collision with root package name */
        public int f2703x = -1;

        /* renamed from: y  reason: collision with root package name */
        public float f2704y = 0.5f;

        /* renamed from: z  reason: collision with root package name */
        public float f2705z = 0.5f;
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
        public int f2664a0 = 0;

        /* renamed from: b0  reason: collision with root package name */
        public int f2666b0 = 0;

        /* renamed from: c0  reason: collision with root package name */
        public int f2668c0 = 0;

        /* renamed from: d0  reason: collision with root package name */
        public int f2670d0 = 0;

        /* renamed from: e0  reason: collision with root package name */
        public int f2672e0 = 0;

        /* renamed from: f0  reason: collision with root package name */
        public float f2674f0 = 1.0f;

        /* renamed from: g0  reason: collision with root package name */
        public float f2676g0 = 1.0f;

        /* renamed from: h0  reason: collision with root package name */
        public int f2678h0 = -1;

        /* renamed from: i0  reason: collision with root package name */
        public int f2680i0 = 0;

        /* renamed from: j0  reason: collision with root package name */
        public int f2682j0 = -1;

        /* renamed from: n0  reason: collision with root package name */
        public boolean f2690n0 = false;

        /* renamed from: o0  reason: collision with root package name */
        public boolean f2692o0 = false;

        /* renamed from: p0  reason: collision with root package name */
        public boolean f2694p0 = true;

        /* renamed from: q0  reason: collision with root package name */
        public int f2696q0 = 0;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2662r0 = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.C5, 24);
            f2662r0.append(androidx.constraintlayout.widget.d.D5, 25);
            f2662r0.append(androidx.constraintlayout.widget.d.F5, 28);
            f2662r0.append(androidx.constraintlayout.widget.d.G5, 29);
            f2662r0.append(androidx.constraintlayout.widget.d.L5, 35);
            f2662r0.append(androidx.constraintlayout.widget.d.K5, 34);
            f2662r0.append(androidx.constraintlayout.widget.d.f2866l5, 4);
            f2662r0.append(androidx.constraintlayout.widget.d.f2858k5, 3);
            f2662r0.append(androidx.constraintlayout.widget.d.f2842i5, 1);
            f2662r0.append(androidx.constraintlayout.widget.d.T5, 6);
            f2662r0.append(androidx.constraintlayout.widget.d.U5, 7);
            f2662r0.append(androidx.constraintlayout.widget.d.f2922s5, 17);
            f2662r0.append(androidx.constraintlayout.widget.d.f2930t5, 18);
            f2662r0.append(androidx.constraintlayout.widget.d.f2938u5, 19);
            f2662r0.append(androidx.constraintlayout.widget.d.f2810e5, 90);
            f2662r0.append(androidx.constraintlayout.widget.d.Q4, 26);
            f2662r0.append(androidx.constraintlayout.widget.d.H5, 31);
            f2662r0.append(androidx.constraintlayout.widget.d.I5, 32);
            f2662r0.append(androidx.constraintlayout.widget.d.f2914r5, 10);
            f2662r0.append(androidx.constraintlayout.widget.d.f2906q5, 9);
            f2662r0.append(androidx.constraintlayout.widget.d.X5, 13);
            f2662r0.append(androidx.constraintlayout.widget.d.f2777a6, 16);
            f2662r0.append(androidx.constraintlayout.widget.d.Y5, 14);
            f2662r0.append(androidx.constraintlayout.widget.d.V5, 11);
            f2662r0.append(androidx.constraintlayout.widget.d.Z5, 15);
            f2662r0.append(androidx.constraintlayout.widget.d.W5, 12);
            f2662r0.append(androidx.constraintlayout.widget.d.O5, 38);
            f2662r0.append(androidx.constraintlayout.widget.d.A5, 37);
            f2662r0.append(androidx.constraintlayout.widget.d.f2978z5, 39);
            f2662r0.append(androidx.constraintlayout.widget.d.N5, 40);
            f2662r0.append(androidx.constraintlayout.widget.d.f2970y5, 20);
            f2662r0.append(androidx.constraintlayout.widget.d.M5, 36);
            f2662r0.append(androidx.constraintlayout.widget.d.f2898p5, 5);
            f2662r0.append(androidx.constraintlayout.widget.d.B5, 91);
            f2662r0.append(androidx.constraintlayout.widget.d.J5, 91);
            f2662r0.append(androidx.constraintlayout.widget.d.E5, 91);
            f2662r0.append(androidx.constraintlayout.widget.d.f2850j5, 91);
            f2662r0.append(androidx.constraintlayout.widget.d.f2834h5, 91);
            f2662r0.append(androidx.constraintlayout.widget.d.T4, 23);
            f2662r0.append(androidx.constraintlayout.widget.d.V4, 27);
            f2662r0.append(androidx.constraintlayout.widget.d.X4, 30);
            f2662r0.append(androidx.constraintlayout.widget.d.Y4, 8);
            f2662r0.append(androidx.constraintlayout.widget.d.U4, 33);
            f2662r0.append(androidx.constraintlayout.widget.d.W4, 2);
            f2662r0.append(androidx.constraintlayout.widget.d.R4, 22);
            f2662r0.append(androidx.constraintlayout.widget.d.S4, 21);
            f2662r0.append(androidx.constraintlayout.widget.d.P5, 41);
            f2662r0.append(androidx.constraintlayout.widget.d.f2946v5, 42);
            f2662r0.append(androidx.constraintlayout.widget.d.f2826g5, 87);
            f2662r0.append(androidx.constraintlayout.widget.d.f2818f5, 88);
            f2662r0.append(androidx.constraintlayout.widget.d.f2786b6, 76);
            f2662r0.append(androidx.constraintlayout.widget.d.f2874m5, 61);
            f2662r0.append(androidx.constraintlayout.widget.d.f2890o5, 62);
            f2662r0.append(androidx.constraintlayout.widget.d.f2882n5, 63);
            f2662r0.append(androidx.constraintlayout.widget.d.S5, 69);
            f2662r0.append(androidx.constraintlayout.widget.d.f2962x5, 70);
            f2662r0.append(androidx.constraintlayout.widget.d.f2794c5, 71);
            f2662r0.append(androidx.constraintlayout.widget.d.f2776a5, 72);
            f2662r0.append(androidx.constraintlayout.widget.d.f2785b5, 73);
            f2662r0.append(androidx.constraintlayout.widget.d.f2802d5, 74);
            f2662r0.append(androidx.constraintlayout.widget.d.Z4, 75);
            f2662r0.append(androidx.constraintlayout.widget.d.Q5, 84);
            f2662r0.append(androidx.constraintlayout.widget.d.R5, 86);
            f2662r0.append(androidx.constraintlayout.widget.d.Q5, 83);
            f2662r0.append(androidx.constraintlayout.widget.d.f2954w5, 85);
            f2662r0.append(androidx.constraintlayout.widget.d.P5, 87);
            f2662r0.append(androidx.constraintlayout.widget.d.f2946v5, 88);
            f2662r0.append(androidx.constraintlayout.widget.d.f2919s2, 89);
            f2662r0.append(androidx.constraintlayout.widget.d.f2810e5, 90);
        }

        public void a(b bVar) {
            this.f2663a = bVar.f2663a;
            this.f2669d = bVar.f2669d;
            this.f2665b = bVar.f2665b;
            this.f2671e = bVar.f2671e;
            this.f2673f = bVar.f2673f;
            this.f2675g = bVar.f2675g;
            this.f2677h = bVar.f2677h;
            this.f2679i = bVar.f2679i;
            this.f2681j = bVar.f2681j;
            this.f2683k = bVar.f2683k;
            this.f2685l = bVar.f2685l;
            this.f2687m = bVar.f2687m;
            this.f2689n = bVar.f2689n;
            this.f2691o = bVar.f2691o;
            this.f2693p = bVar.f2693p;
            this.f2695q = bVar.f2695q;
            this.f2697r = bVar.f2697r;
            this.f2698s = bVar.f2698s;
            this.f2699t = bVar.f2699t;
            this.f2700u = bVar.f2700u;
            this.f2701v = bVar.f2701v;
            this.f2702w = bVar.f2702w;
            this.f2703x = bVar.f2703x;
            this.f2704y = bVar.f2704y;
            this.f2705z = bVar.f2705z;
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
            this.f2664a0 = bVar.f2664a0;
            this.f2666b0 = bVar.f2666b0;
            this.f2668c0 = bVar.f2668c0;
            this.f2670d0 = bVar.f2670d0;
            this.f2672e0 = bVar.f2672e0;
            this.f2674f0 = bVar.f2674f0;
            this.f2676g0 = bVar.f2676g0;
            this.f2678h0 = bVar.f2678h0;
            this.f2680i0 = bVar.f2680i0;
            this.f2682j0 = bVar.f2682j0;
            this.f2688m0 = bVar.f2688m0;
            int[] iArr = bVar.f2684k0;
            if (iArr != null && bVar.f2686l0 == null) {
                this.f2684k0 = Arrays.copyOf(iArr, iArr.length);
            } else {
                this.f2684k0 = null;
            }
            this.f2686l0 = bVar.f2686l0;
            this.f2690n0 = bVar.f2690n0;
            this.f2692o0 = bVar.f2692o0;
            this.f2694p0 = bVar.f2694p0;
            this.f2696q0 = bVar.f2696q0;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.P4);
            this.f2665b = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                int i11 = f2662r0.get(index);
                switch (i11) {
                    case 1:
                        this.f2697r = ConstraintSet.u(obtainStyledAttributes, index, this.f2697r);
                        break;
                    case 2:
                        this.K = obtainStyledAttributes.getDimensionPixelSize(index, this.K);
                        break;
                    case 3:
                        this.f2695q = ConstraintSet.u(obtainStyledAttributes, index, this.f2695q);
                        break;
                    case 4:
                        this.f2693p = ConstraintSet.u(obtainStyledAttributes, index, this.f2693p);
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
                        this.f2703x = ConstraintSet.u(obtainStyledAttributes, index, this.f2703x);
                        break;
                    case 10:
                        this.f2702w = ConstraintSet.u(obtainStyledAttributes, index, this.f2702w);
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
                        this.f2673f = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2673f);
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        this.f2675g = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2675g);
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        this.f2677h = obtainStyledAttributes.getFloat(index, this.f2677h);
                        break;
                    case 20:
                        this.f2704y = obtainStyledAttributes.getFloat(index, this.f2704y);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        this.f2671e = obtainStyledAttributes.getLayoutDimension(index, this.f2671e);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        this.f2669d = obtainStyledAttributes.getLayoutDimension(index, this.f2669d);
                        break;
                    case 23:
                        this.H = obtainStyledAttributes.getDimensionPixelSize(index, this.H);
                        break;
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        this.f2681j = ConstraintSet.u(obtainStyledAttributes, index, this.f2681j);
                        break;
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                        this.f2683k = ConstraintSet.u(obtainStyledAttributes, index, this.f2683k);
                        break;
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                        this.G = obtainStyledAttributes.getInt(index, this.G);
                        break;
                    case 27:
                        this.I = obtainStyledAttributes.getDimensionPixelSize(index, this.I);
                        break;
                    case 28:
                        this.f2685l = ConstraintSet.u(obtainStyledAttributes, index, this.f2685l);
                        break;
                    case 29:
                        this.f2687m = ConstraintSet.u(obtainStyledAttributes, index, this.f2687m);
                        break;
                    case 30:
                        this.M = obtainStyledAttributes.getDimensionPixelSize(index, this.M);
                        break;
                    case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                        this.f2700u = ConstraintSet.u(obtainStyledAttributes, index, this.f2700u);
                        break;
                    case 32:
                        this.f2701v = ConstraintSet.u(obtainStyledAttributes, index, this.f2701v);
                        break;
                    case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                        this.J = obtainStyledAttributes.getDimensionPixelSize(index, this.J);
                        break;
                    case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                        this.f2691o = ConstraintSet.u(obtainStyledAttributes, index, this.f2691o);
                        break;
                    case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                        this.f2689n = ConstraintSet.u(obtainStyledAttributes, index, this.f2689n);
                        break;
                    case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                        this.f2705z = obtainStyledAttributes.getFloat(index, this.f2705z);
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
                                        this.f2674f0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 70:
                                        this.f2676g0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 71:
                                        Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                                        continue;
                                    case 72:
                                        this.f2678h0 = obtainStyledAttributes.getInt(index, this.f2678h0);
                                        continue;
                                    case 73:
                                        this.f2680i0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2680i0);
                                        continue;
                                    case 74:
                                        this.f2686l0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 75:
                                        this.f2694p0 = obtainStyledAttributes.getBoolean(index, this.f2694p0);
                                        continue;
                                    case 76:
                                        this.f2696q0 = obtainStyledAttributes.getInt(index, this.f2696q0);
                                        continue;
                                    case 77:
                                        this.f2698s = ConstraintSet.u(obtainStyledAttributes, index, this.f2698s);
                                        continue;
                                    case 78:
                                        this.f2699t = ConstraintSet.u(obtainStyledAttributes, index, this.f2699t);
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
                                        this.f2664a0 = obtainStyledAttributes.getInt(index, this.f2664a0);
                                        continue;
                                    case 83:
                                        this.f2668c0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2668c0);
                                        continue;
                                    case 84:
                                        this.f2666b0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2666b0);
                                        continue;
                                    case 85:
                                        this.f2672e0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2672e0);
                                        continue;
                                    case 86:
                                        this.f2670d0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2670d0);
                                        continue;
                                    case 87:
                                        this.f2690n0 = obtainStyledAttributes.getBoolean(index, this.f2690n0);
                                        continue;
                                    case 88:
                                        this.f2692o0 = obtainStyledAttributes.getBoolean(index, this.f2692o0);
                                        continue;
                                    case 89:
                                        this.f2688m0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 90:
                                        this.f2679i = obtainStyledAttributes.getBoolean(index, this.f2679i);
                                        continue;
                                    case 91:
                                        Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2662r0.get(index));
                                        continue;
                                    default:
                                        Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2662r0.get(index));
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
        private static SparseIntArray f2706o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2707a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f2708b = -1;

        /* renamed from: c  reason: collision with root package name */
        public int f2709c = 0;

        /* renamed from: d  reason: collision with root package name */
        public String f2710d = null;

        /* renamed from: e  reason: collision with root package name */
        public int f2711e = -1;

        /* renamed from: f  reason: collision with root package name */
        public int f2712f = 0;

        /* renamed from: g  reason: collision with root package name */
        public float f2713g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public int f2714h = -1;

        /* renamed from: i  reason: collision with root package name */
        public float f2715i = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        public float f2716j = Float.NaN;

        /* renamed from: k  reason: collision with root package name */
        public int f2717k = -1;

        /* renamed from: l  reason: collision with root package name */
        public String f2718l = null;

        /* renamed from: m  reason: collision with root package name */
        public int f2719m = -3;

        /* renamed from: n  reason: collision with root package name */
        public int f2720n = -1;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2706o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.f2835h6, 1);
            f2706o.append(androidx.constraintlayout.widget.d.f2851j6, 2);
            f2706o.append(androidx.constraintlayout.widget.d.f2883n6, 3);
            f2706o.append(androidx.constraintlayout.widget.d.f2827g6, 4);
            f2706o.append(androidx.constraintlayout.widget.d.f2819f6, 5);
            f2706o.append(androidx.constraintlayout.widget.d.f2811e6, 6);
            f2706o.append(androidx.constraintlayout.widget.d.f2843i6, 7);
            f2706o.append(androidx.constraintlayout.widget.d.f2875m6, 8);
            f2706o.append(androidx.constraintlayout.widget.d.f2867l6, 9);
            f2706o.append(androidx.constraintlayout.widget.d.f2859k6, 10);
        }

        public void a(c cVar) {
            this.f2707a = cVar.f2707a;
            this.f2708b = cVar.f2708b;
            this.f2710d = cVar.f2710d;
            this.f2711e = cVar.f2711e;
            this.f2712f = cVar.f2712f;
            this.f2715i = cVar.f2715i;
            this.f2713g = cVar.f2713g;
            this.f2714h = cVar.f2714h;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f2803d6);
            this.f2707a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f2706o.get(index)) {
                    case 1:
                        this.f2715i = obtainStyledAttributes.getFloat(index, this.f2715i);
                        break;
                    case 2:
                        this.f2711e = obtainStyledAttributes.getInt(index, this.f2711e);
                        break;
                    case 3:
                        if (obtainStyledAttributes.peekValue(index).type == 3) {
                            this.f2710d = obtainStyledAttributes.getString(index);
                            break;
                        } else {
                            this.f2710d = i1.a.f26631c[obtainStyledAttributes.getInteger(index, 0)];
                            break;
                        }
                    case 4:
                        this.f2712f = obtainStyledAttributes.getInt(index, 0);
                        break;
                    case 5:
                        this.f2708b = ConstraintSet.u(obtainStyledAttributes, index, this.f2708b);
                        break;
                    case 6:
                        this.f2709c = obtainStyledAttributes.getInteger(index, this.f2709c);
                        break;
                    case 7:
                        this.f2713g = obtainStyledAttributes.getFloat(index, this.f2713g);
                        break;
                    case 8:
                        this.f2717k = obtainStyledAttributes.getInteger(index, this.f2717k);
                        break;
                    case 9:
                        this.f2716j = obtainStyledAttributes.getFloat(index, this.f2716j);
                        break;
                    case 10:
                        int i11 = obtainStyledAttributes.peekValue(index).type;
                        if (i11 == 1) {
                            int resourceId = obtainStyledAttributes.getResourceId(index, -1);
                            this.f2720n = resourceId;
                            if (resourceId != -1) {
                                this.f2719m = -2;
                                break;
                            } else {
                                break;
                            }
                        } else if (i11 == 3) {
                            String string = obtainStyledAttributes.getString(index);
                            this.f2718l = string;
                            if (string.indexOf("/") > 0) {
                                this.f2720n = obtainStyledAttributes.getResourceId(index, -1);
                                this.f2719m = -2;
                                break;
                            } else {
                                this.f2719m = -1;
                                break;
                            }
                        } else {
                            this.f2719m = obtainStyledAttributes.getInteger(index, this.f2720n);
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
        public boolean f2721a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f2722b = 0;

        /* renamed from: c  reason: collision with root package name */
        public int f2723c = 0;

        /* renamed from: d  reason: collision with root package name */
        public float f2724d = 1.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f2725e = Float.NaN;

        public void a(d dVar) {
            this.f2721a = dVar.f2721a;
            this.f2722b = dVar.f2722b;
            this.f2724d = dVar.f2724d;
            this.f2725e = dVar.f2725e;
            this.f2723c = dVar.f2723c;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f2955w6);
            this.f2721a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == androidx.constraintlayout.widget.d.f2971y6) {
                    this.f2724d = obtainStyledAttributes.getFloat(index, this.f2724d);
                } else if (index == androidx.constraintlayout.widget.d.f2963x6) {
                    this.f2722b = obtainStyledAttributes.getInt(index, this.f2722b);
                    this.f2722b = ConstraintSet.f2633g[this.f2722b];
                } else if (index == androidx.constraintlayout.widget.d.A6) {
                    this.f2723c = obtainStyledAttributes.getInt(index, this.f2723c);
                } else if (index == androidx.constraintlayout.widget.d.f2979z6) {
                    this.f2725e = obtainStyledAttributes.getFloat(index, this.f2725e);
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: o  reason: collision with root package name */
        private static SparseIntArray f2726o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2727a = false;

        /* renamed from: b  reason: collision with root package name */
        public float f2728b = 0.0f;

        /* renamed from: c  reason: collision with root package name */
        public float f2729c = 0.0f;

        /* renamed from: d  reason: collision with root package name */
        public float f2730d = 0.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f2731e = 1.0f;

        /* renamed from: f  reason: collision with root package name */
        public float f2732f = 1.0f;

        /* renamed from: g  reason: collision with root package name */
        public float f2733g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public float f2734h = Float.NaN;

        /* renamed from: i  reason: collision with root package name */
        public int f2735i = -1;

        /* renamed from: j  reason: collision with root package name */
        public float f2736j = 0.0f;

        /* renamed from: k  reason: collision with root package name */
        public float f2737k = 0.0f;

        /* renamed from: l  reason: collision with root package name */
        public float f2738l = 0.0f;

        /* renamed from: m  reason: collision with root package name */
        public boolean f2739m = false;

        /* renamed from: n  reason: collision with root package name */
        public float f2740n = 0.0f;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2726o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.N6, 1);
            f2726o.append(androidx.constraintlayout.widget.d.O6, 2);
            f2726o.append(androidx.constraintlayout.widget.d.P6, 3);
            f2726o.append(androidx.constraintlayout.widget.d.L6, 4);
            f2726o.append(androidx.constraintlayout.widget.d.M6, 5);
            f2726o.append(androidx.constraintlayout.widget.d.H6, 6);
            f2726o.append(androidx.constraintlayout.widget.d.I6, 7);
            f2726o.append(androidx.constraintlayout.widget.d.J6, 8);
            f2726o.append(androidx.constraintlayout.widget.d.K6, 9);
            f2726o.append(androidx.constraintlayout.widget.d.Q6, 10);
            f2726o.append(androidx.constraintlayout.widget.d.R6, 11);
            f2726o.append(androidx.constraintlayout.widget.d.S6, 12);
        }

        public void a(e eVar) {
            this.f2727a = eVar.f2727a;
            this.f2728b = eVar.f2728b;
            this.f2729c = eVar.f2729c;
            this.f2730d = eVar.f2730d;
            this.f2731e = eVar.f2731e;
            this.f2732f = eVar.f2732f;
            this.f2733g = eVar.f2733g;
            this.f2734h = eVar.f2734h;
            this.f2735i = eVar.f2735i;
            this.f2736j = eVar.f2736j;
            this.f2737k = eVar.f2737k;
            this.f2738l = eVar.f2738l;
            this.f2739m = eVar.f2739m;
            this.f2740n = eVar.f2740n;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.G6);
            this.f2727a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f2726o.get(index)) {
                    case 1:
                        this.f2728b = obtainStyledAttributes.getFloat(index, this.f2728b);
                        break;
                    case 2:
                        this.f2729c = obtainStyledAttributes.getFloat(index, this.f2729c);
                        break;
                    case 3:
                        this.f2730d = obtainStyledAttributes.getFloat(index, this.f2730d);
                        break;
                    case 4:
                        this.f2731e = obtainStyledAttributes.getFloat(index, this.f2731e);
                        break;
                    case 5:
                        this.f2732f = obtainStyledAttributes.getFloat(index, this.f2732f);
                        break;
                    case 6:
                        this.f2733g = obtainStyledAttributes.getDimension(index, this.f2733g);
                        break;
                    case 7:
                        this.f2734h = obtainStyledAttributes.getDimension(index, this.f2734h);
                        break;
                    case 8:
                        this.f2736j = obtainStyledAttributes.getDimension(index, this.f2736j);
                        break;
                    case 9:
                        this.f2737k = obtainStyledAttributes.getDimension(index, this.f2737k);
                        break;
                    case 10:
                        this.f2738l = obtainStyledAttributes.getDimension(index, this.f2738l);
                        break;
                    case 11:
                        this.f2739m = true;
                        this.f2740n = obtainStyledAttributes.getDimension(index, this.f2740n);
                        break;
                    case 12:
                        this.f2735i = ConstraintSet.u(obtainStyledAttributes, index, this.f2735i);
                        break;
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    static {
        f2634h.append(androidx.constraintlayout.widget.d.f2837i0, 25);
        f2634h.append(androidx.constraintlayout.widget.d.f2845j0, 26);
        f2634h.append(androidx.constraintlayout.widget.d.f2861l0, 29);
        f2634h.append(androidx.constraintlayout.widget.d.f2869m0, 30);
        f2634h.append(androidx.constraintlayout.widget.d.f2917s0, 36);
        f2634h.append(androidx.constraintlayout.widget.d.f2909r0, 35);
        f2634h.append(androidx.constraintlayout.widget.d.P, 4);
        f2634h.append(androidx.constraintlayout.widget.d.O, 3);
        f2634h.append(androidx.constraintlayout.widget.d.K, 1);
        f2634h.append(androidx.constraintlayout.widget.d.M, 91);
        f2634h.append(androidx.constraintlayout.widget.d.L, 92);
        f2634h.append(androidx.constraintlayout.widget.d.B0, 6);
        f2634h.append(androidx.constraintlayout.widget.d.C0, 7);
        f2634h.append(androidx.constraintlayout.widget.d.W, 17);
        f2634h.append(androidx.constraintlayout.widget.d.X, 18);
        f2634h.append(androidx.constraintlayout.widget.d.Y, 19);
        f2634h.append(androidx.constraintlayout.widget.d.G, 99);
        f2634h.append(androidx.constraintlayout.widget.d.f2788c, 27);
        f2634h.append(androidx.constraintlayout.widget.d.f2877n0, 32);
        f2634h.append(androidx.constraintlayout.widget.d.f2885o0, 33);
        f2634h.append(androidx.constraintlayout.widget.d.V, 10);
        f2634h.append(androidx.constraintlayout.widget.d.U, 9);
        f2634h.append(androidx.constraintlayout.widget.d.F0, 13);
        f2634h.append(androidx.constraintlayout.widget.d.I0, 16);
        f2634h.append(androidx.constraintlayout.widget.d.G0, 14);
        f2634h.append(androidx.constraintlayout.widget.d.D0, 11);
        f2634h.append(androidx.constraintlayout.widget.d.H0, 15);
        f2634h.append(androidx.constraintlayout.widget.d.E0, 12);
        f2634h.append(androidx.constraintlayout.widget.d.f2941v0, 40);
        f2634h.append(androidx.constraintlayout.widget.d.f2821g0, 39);
        f2634h.append(androidx.constraintlayout.widget.d.f2813f0, 41);
        f2634h.append(androidx.constraintlayout.widget.d.f2933u0, 42);
        f2634h.append(androidx.constraintlayout.widget.d.f2805e0, 20);
        f2634h.append(androidx.constraintlayout.widget.d.f2925t0, 37);
        f2634h.append(androidx.constraintlayout.widget.d.T, 5);
        f2634h.append(androidx.constraintlayout.widget.d.f2829h0, 87);
        f2634h.append(androidx.constraintlayout.widget.d.f2901q0, 87);
        f2634h.append(androidx.constraintlayout.widget.d.f2853k0, 87);
        f2634h.append(androidx.constraintlayout.widget.d.N, 87);
        f2634h.append(androidx.constraintlayout.widget.d.J, 87);
        f2634h.append(androidx.constraintlayout.widget.d.f2828h, 24);
        f2634h.append(androidx.constraintlayout.widget.d.f2844j, 28);
        f2634h.append(androidx.constraintlayout.widget.d.f2940v, 31);
        f2634h.append(androidx.constraintlayout.widget.d.f2948w, 8);
        f2634h.append(androidx.constraintlayout.widget.d.f2836i, 34);
        f2634h.append(androidx.constraintlayout.widget.d.f2852k, 2);
        f2634h.append(androidx.constraintlayout.widget.d.f2812f, 23);
        f2634h.append(androidx.constraintlayout.widget.d.f2820g, 21);
        f2634h.append(androidx.constraintlayout.widget.d.f2949w0, 95);
        f2634h.append(androidx.constraintlayout.widget.d.Z, 96);
        f2634h.append(androidx.constraintlayout.widget.d.f2804e, 22);
        f2634h.append(androidx.constraintlayout.widget.d.f2860l, 43);
        f2634h.append(androidx.constraintlayout.widget.d.f2964y, 44);
        f2634h.append(androidx.constraintlayout.widget.d.f2924t, 45);
        f2634h.append(androidx.constraintlayout.widget.d.f2932u, 46);
        f2634h.append(androidx.constraintlayout.widget.d.f2916s, 60);
        f2634h.append(androidx.constraintlayout.widget.d.f2900q, 47);
        f2634h.append(androidx.constraintlayout.widget.d.f2908r, 48);
        f2634h.append(androidx.constraintlayout.widget.d.f2868m, 49);
        f2634h.append(androidx.constraintlayout.widget.d.f2876n, 50);
        f2634h.append(androidx.constraintlayout.widget.d.f2884o, 51);
        f2634h.append(androidx.constraintlayout.widget.d.f2892p, 52);
        f2634h.append(androidx.constraintlayout.widget.d.f2956x, 53);
        f2634h.append(androidx.constraintlayout.widget.d.f2957x0, 54);
        f2634h.append(androidx.constraintlayout.widget.d.f2771a0, 55);
        f2634h.append(androidx.constraintlayout.widget.d.f2965y0, 56);
        f2634h.append(androidx.constraintlayout.widget.d.f2780b0, 57);
        f2634h.append(androidx.constraintlayout.widget.d.f2973z0, 58);
        f2634h.append(androidx.constraintlayout.widget.d.f2789c0, 59);
        f2634h.append(androidx.constraintlayout.widget.d.Q, 61);
        f2634h.append(androidx.constraintlayout.widget.d.S, 62);
        f2634h.append(androidx.constraintlayout.widget.d.R, 63);
        f2634h.append(androidx.constraintlayout.widget.d.f2972z, 64);
        f2634h.append(androidx.constraintlayout.widget.d.S0, 65);
        f2634h.append(androidx.constraintlayout.widget.d.F, 66);
        f2634h.append(androidx.constraintlayout.widget.d.T0, 67);
        f2634h.append(androidx.constraintlayout.widget.d.L0, 79);
        f2634h.append(androidx.constraintlayout.widget.d.f2796d, 38);
        f2634h.append(androidx.constraintlayout.widget.d.K0, 68);
        f2634h.append(androidx.constraintlayout.widget.d.A0, 69);
        f2634h.append(androidx.constraintlayout.widget.d.f2797d0, 70);
        f2634h.append(androidx.constraintlayout.widget.d.J0, 97);
        f2634h.append(androidx.constraintlayout.widget.d.D, 71);
        f2634h.append(androidx.constraintlayout.widget.d.B, 72);
        f2634h.append(androidx.constraintlayout.widget.d.C, 73);
        f2634h.append(androidx.constraintlayout.widget.d.E, 74);
        f2634h.append(androidx.constraintlayout.widget.d.A, 75);
        f2634h.append(androidx.constraintlayout.widget.d.M0, 76);
        f2634h.append(androidx.constraintlayout.widget.d.f2893p0, 77);
        f2634h.append(androidx.constraintlayout.widget.d.U0, 78);
        f2634h.append(androidx.constraintlayout.widget.d.I, 80);
        f2634h.append(androidx.constraintlayout.widget.d.H, 81);
        f2634h.append(androidx.constraintlayout.widget.d.N0, 82);
        f2634h.append(androidx.constraintlayout.widget.d.R0, 83);
        f2634h.append(androidx.constraintlayout.widget.d.Q0, 84);
        f2634h.append(androidx.constraintlayout.widget.d.P0, 85);
        f2634h.append(androidx.constraintlayout.widget.d.O0, 86);
        f2635i.append(androidx.constraintlayout.widget.d.Y3, 6);
        f2635i.append(androidx.constraintlayout.widget.d.Y3, 7);
        f2635i.append(androidx.constraintlayout.widget.d.T2, 27);
        f2635i.append(androidx.constraintlayout.widget.d.f2784b4, 13);
        f2635i.append(androidx.constraintlayout.widget.d.f2809e4, 16);
        f2635i.append(androidx.constraintlayout.widget.d.f2793c4, 14);
        f2635i.append(androidx.constraintlayout.widget.d.Z3, 11);
        f2635i.append(androidx.constraintlayout.widget.d.f2801d4, 15);
        f2635i.append(androidx.constraintlayout.widget.d.f2775a4, 12);
        f2635i.append(androidx.constraintlayout.widget.d.S3, 40);
        f2635i.append(androidx.constraintlayout.widget.d.L3, 39);
        f2635i.append(androidx.constraintlayout.widget.d.K3, 41);
        f2635i.append(androidx.constraintlayout.widget.d.R3, 42);
        f2635i.append(androidx.constraintlayout.widget.d.J3, 20);
        f2635i.append(androidx.constraintlayout.widget.d.Q3, 37);
        f2635i.append(androidx.constraintlayout.widget.d.D3, 5);
        f2635i.append(androidx.constraintlayout.widget.d.M3, 87);
        f2635i.append(androidx.constraintlayout.widget.d.P3, 87);
        f2635i.append(androidx.constraintlayout.widget.d.N3, 87);
        f2635i.append(androidx.constraintlayout.widget.d.A3, 87);
        f2635i.append(androidx.constraintlayout.widget.d.f2976z3, 87);
        f2635i.append(androidx.constraintlayout.widget.d.Y2, 24);
        f2635i.append(androidx.constraintlayout.widget.d.f2774a3, 28);
        f2635i.append(androidx.constraintlayout.widget.d.f2872m3, 31);
        f2635i.append(androidx.constraintlayout.widget.d.f2880n3, 8);
        f2635i.append(androidx.constraintlayout.widget.d.Z2, 34);
        f2635i.append(androidx.constraintlayout.widget.d.f2783b3, 2);
        f2635i.append(androidx.constraintlayout.widget.d.W2, 23);
        f2635i.append(androidx.constraintlayout.widget.d.X2, 21);
        f2635i.append(androidx.constraintlayout.widget.d.T3, 95);
        f2635i.append(androidx.constraintlayout.widget.d.E3, 96);
        f2635i.append(androidx.constraintlayout.widget.d.V2, 22);
        f2635i.append(androidx.constraintlayout.widget.d.f2792c3, 43);
        f2635i.append(androidx.constraintlayout.widget.d.f2896p3, 44);
        f2635i.append(androidx.constraintlayout.widget.d.f2856k3, 45);
        f2635i.append(androidx.constraintlayout.widget.d.f2864l3, 46);
        f2635i.append(androidx.constraintlayout.widget.d.f2848j3, 60);
        f2635i.append(androidx.constraintlayout.widget.d.f2832h3, 47);
        f2635i.append(androidx.constraintlayout.widget.d.f2840i3, 48);
        f2635i.append(androidx.constraintlayout.widget.d.f2800d3, 49);
        f2635i.append(androidx.constraintlayout.widget.d.f2808e3, 50);
        f2635i.append(androidx.constraintlayout.widget.d.f2816f3, 51);
        f2635i.append(androidx.constraintlayout.widget.d.f2824g3, 52);
        f2635i.append(androidx.constraintlayout.widget.d.f2888o3, 53);
        f2635i.append(androidx.constraintlayout.widget.d.U3, 54);
        f2635i.append(androidx.constraintlayout.widget.d.F3, 55);
        f2635i.append(androidx.constraintlayout.widget.d.V3, 56);
        f2635i.append(androidx.constraintlayout.widget.d.G3, 57);
        f2635i.append(androidx.constraintlayout.widget.d.W3, 58);
        f2635i.append(androidx.constraintlayout.widget.d.H3, 59);
        f2635i.append(androidx.constraintlayout.widget.d.C3, 62);
        f2635i.append(androidx.constraintlayout.widget.d.B3, 63);
        f2635i.append(androidx.constraintlayout.widget.d.f2904q3, 64);
        f2635i.append(androidx.constraintlayout.widget.d.f2897p4, 65);
        f2635i.append(androidx.constraintlayout.widget.d.f2952w3, 66);
        f2635i.append(androidx.constraintlayout.widget.d.f2905q4, 67);
        f2635i.append(androidx.constraintlayout.widget.d.f2833h4, 79);
        f2635i.append(androidx.constraintlayout.widget.d.U2, 38);
        f2635i.append(androidx.constraintlayout.widget.d.f2841i4, 98);
        f2635i.append(androidx.constraintlayout.widget.d.f2825g4, 68);
        f2635i.append(androidx.constraintlayout.widget.d.X3, 69);
        f2635i.append(androidx.constraintlayout.widget.d.I3, 70);
        f2635i.append(androidx.constraintlayout.widget.d.f2936u3, 71);
        f2635i.append(androidx.constraintlayout.widget.d.f2920s3, 72);
        f2635i.append(androidx.constraintlayout.widget.d.f2928t3, 73);
        f2635i.append(androidx.constraintlayout.widget.d.f2944v3, 74);
        f2635i.append(androidx.constraintlayout.widget.d.f2912r3, 75);
        f2635i.append(androidx.constraintlayout.widget.d.f2849j4, 76);
        f2635i.append(androidx.constraintlayout.widget.d.O3, 77);
        f2635i.append(androidx.constraintlayout.widget.d.f2913r4, 78);
        f2635i.append(androidx.constraintlayout.widget.d.f2968y3, 80);
        f2635i.append(androidx.constraintlayout.widget.d.f2960x3, 81);
        f2635i.append(androidx.constraintlayout.widget.d.f2857k4, 82);
        f2635i.append(androidx.constraintlayout.widget.d.f2889o4, 83);
        f2635i.append(androidx.constraintlayout.widget.d.f2881n4, 84);
        f2635i.append(androidx.constraintlayout.widget.d.f2873m4, 85);
        f2635i.append(androidx.constraintlayout.widget.d.f2865l4, 86);
        f2635i.append(androidx.constraintlayout.widget.d.f2817f4, 97);
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
            iArr = androidx.constraintlayout.widget.d.f2779b;
        }
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, iArr);
        y(aVar, obtainStyledAttributes, z10);
        obtainStyledAttributes.recycle();
        return aVar;
    }

    private a r(int i10) {
        if (!this.f2641f.containsKey(Integer.valueOf(i10))) {
            this.f2641f.put(Integer.valueOf(i10), new a());
        }
        return (a) this.f2641f.get(Integer.valueOf(i10));
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
            r4.f2558a0 = r5
            return
        L3d:
            r4.height = r2
            r4.f2560b0 = r5
            return
        L42:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.b
            if (r6 == 0) goto L54
            androidx.constraintlayout.widget.ConstraintSet$b r4 = (androidx.constraintlayout.widget.ConstraintSet.b) r4
            if (r7 != 0) goto L4f
            r4.f2669d = r2
            r4.f2690n0 = r5
            return
        L4f:
            r4.f2671e = r2
            r4.f2692o0 = r5
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
                                    bVar.f2669d = 0;
                                    bVar.W = parseFloat;
                                    return;
                                }
                                bVar.f2671e = 0;
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
                                    bVar2.f2669d = 0;
                                    bVar2.f2674f0 = max;
                                    bVar2.Z = 2;
                                    return;
                                }
                                bVar2.f2671e = 0;
                                bVar2.f2676g0 = max;
                                bVar2.f2664a0 = 2;
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
            if (index != androidx.constraintlayout.widget.d.f2796d && androidx.constraintlayout.widget.d.f2940v != index && androidx.constraintlayout.widget.d.f2948w != index) {
                aVar.f2645d.f2707a = true;
                aVar.f2646e.f2665b = true;
                aVar.f2644c.f2721a = true;
                aVar.f2647f.f2727a = true;
            }
            switch (f2634h.get(index)) {
                case 1:
                    b bVar = aVar.f2646e;
                    bVar.f2697r = u(typedArray, index, bVar.f2697r);
                    break;
                case 2:
                    b bVar2 = aVar.f2646e;
                    bVar2.K = typedArray.getDimensionPixelSize(index, bVar2.K);
                    break;
                case 3:
                    b bVar3 = aVar.f2646e;
                    bVar3.f2695q = u(typedArray, index, bVar3.f2695q);
                    break;
                case 4:
                    b bVar4 = aVar.f2646e;
                    bVar4.f2693p = u(typedArray, index, bVar4.f2693p);
                    break;
                case 5:
                    aVar.f2646e.A = typedArray.getString(index);
                    break;
                case 6:
                    b bVar5 = aVar.f2646e;
                    bVar5.E = typedArray.getDimensionPixelOffset(index, bVar5.E);
                    break;
                case 7:
                    b bVar6 = aVar.f2646e;
                    bVar6.F = typedArray.getDimensionPixelOffset(index, bVar6.F);
                    break;
                case 8:
                    b bVar7 = aVar.f2646e;
                    bVar7.L = typedArray.getDimensionPixelSize(index, bVar7.L);
                    break;
                case 9:
                    b bVar8 = aVar.f2646e;
                    bVar8.f2703x = u(typedArray, index, bVar8.f2703x);
                    break;
                case 10:
                    b bVar9 = aVar.f2646e;
                    bVar9.f2702w = u(typedArray, index, bVar9.f2702w);
                    break;
                case 11:
                    b bVar10 = aVar.f2646e;
                    bVar10.R = typedArray.getDimensionPixelSize(index, bVar10.R);
                    break;
                case 12:
                    b bVar11 = aVar.f2646e;
                    bVar11.S = typedArray.getDimensionPixelSize(index, bVar11.S);
                    break;
                case 13:
                    b bVar12 = aVar.f2646e;
                    bVar12.O = typedArray.getDimensionPixelSize(index, bVar12.O);
                    break;
                case 14:
                    b bVar13 = aVar.f2646e;
                    bVar13.Q = typedArray.getDimensionPixelSize(index, bVar13.Q);
                    break;
                case 15:
                    b bVar14 = aVar.f2646e;
                    bVar14.T = typedArray.getDimensionPixelSize(index, bVar14.T);
                    break;
                case 16:
                    b bVar15 = aVar.f2646e;
                    bVar15.P = typedArray.getDimensionPixelSize(index, bVar15.P);
                    break;
                case 17:
                    b bVar16 = aVar.f2646e;
                    bVar16.f2673f = typedArray.getDimensionPixelOffset(index, bVar16.f2673f);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    b bVar17 = aVar.f2646e;
                    bVar17.f2675g = typedArray.getDimensionPixelOffset(index, bVar17.f2675g);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    b bVar18 = aVar.f2646e;
                    bVar18.f2677h = typedArray.getFloat(index, bVar18.f2677h);
                    break;
                case 20:
                    b bVar19 = aVar.f2646e;
                    bVar19.f2704y = typedArray.getFloat(index, bVar19.f2704y);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    b bVar20 = aVar.f2646e;
                    bVar20.f2671e = typedArray.getLayoutDimension(index, bVar20.f2671e);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    d dVar = aVar.f2644c;
                    dVar.f2722b = typedArray.getInt(index, dVar.f2722b);
                    d dVar2 = aVar.f2644c;
                    dVar2.f2722b = f2633g[dVar2.f2722b];
                    break;
                case 23:
                    b bVar21 = aVar.f2646e;
                    bVar21.f2669d = typedArray.getLayoutDimension(index, bVar21.f2669d);
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    b bVar22 = aVar.f2646e;
                    bVar22.H = typedArray.getDimensionPixelSize(index, bVar22.H);
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    b bVar23 = aVar.f2646e;
                    bVar23.f2681j = u(typedArray, index, bVar23.f2681j);
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    b bVar24 = aVar.f2646e;
                    bVar24.f2683k = u(typedArray, index, bVar24.f2683k);
                    break;
                case 27:
                    b bVar25 = aVar.f2646e;
                    bVar25.G = typedArray.getInt(index, bVar25.G);
                    break;
                case 28:
                    b bVar26 = aVar.f2646e;
                    bVar26.I = typedArray.getDimensionPixelSize(index, bVar26.I);
                    break;
                case 29:
                    b bVar27 = aVar.f2646e;
                    bVar27.f2685l = u(typedArray, index, bVar27.f2685l);
                    break;
                case 30:
                    b bVar28 = aVar.f2646e;
                    bVar28.f2687m = u(typedArray, index, bVar28.f2687m);
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    b bVar29 = aVar.f2646e;
                    bVar29.M = typedArray.getDimensionPixelSize(index, bVar29.M);
                    break;
                case 32:
                    b bVar30 = aVar.f2646e;
                    bVar30.f2700u = u(typedArray, index, bVar30.f2700u);
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    b bVar31 = aVar.f2646e;
                    bVar31.f2701v = u(typedArray, index, bVar31.f2701v);
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    b bVar32 = aVar.f2646e;
                    bVar32.J = typedArray.getDimensionPixelSize(index, bVar32.J);
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    b bVar33 = aVar.f2646e;
                    bVar33.f2691o = u(typedArray, index, bVar33.f2691o);
                    break;
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    b bVar34 = aVar.f2646e;
                    bVar34.f2689n = u(typedArray, index, bVar34.f2689n);
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    b bVar35 = aVar.f2646e;
                    bVar35.f2705z = typedArray.getFloat(index, bVar35.f2705z);
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    aVar.f2642a = typedArray.getResourceId(index, aVar.f2642a);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    b bVar36 = aVar.f2646e;
                    bVar36.W = typedArray.getFloat(index, bVar36.W);
                    break;
                case 40:
                    b bVar37 = aVar.f2646e;
                    bVar37.V = typedArray.getFloat(index, bVar37.V);
                    break;
                case 41:
                    b bVar38 = aVar.f2646e;
                    bVar38.X = typedArray.getInt(index, bVar38.X);
                    break;
                case 42:
                    b bVar39 = aVar.f2646e;
                    bVar39.Y = typedArray.getInt(index, bVar39.Y);
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    d dVar3 = aVar.f2644c;
                    dVar3.f2724d = typedArray.getFloat(index, dVar3.f2724d);
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    e eVar = aVar.f2647f;
                    eVar.f2739m = true;
                    eVar.f2740n = typedArray.getDimension(index, eVar.f2740n);
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    e eVar2 = aVar.f2647f;
                    eVar2.f2729c = typedArray.getFloat(index, eVar2.f2729c);
                    break;
                case 46:
                    e eVar3 = aVar.f2647f;
                    eVar3.f2730d = typedArray.getFloat(index, eVar3.f2730d);
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    e eVar4 = aVar.f2647f;
                    eVar4.f2731e = typedArray.getFloat(index, eVar4.f2731e);
                    break;
                case 48:
                    e eVar5 = aVar.f2647f;
                    eVar5.f2732f = typedArray.getFloat(index, eVar5.f2732f);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    e eVar6 = aVar.f2647f;
                    eVar6.f2733g = typedArray.getDimension(index, eVar6.f2733g);
                    break;
                case 50:
                    e eVar7 = aVar.f2647f;
                    eVar7.f2734h = typedArray.getDimension(index, eVar7.f2734h);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    e eVar8 = aVar.f2647f;
                    eVar8.f2736j = typedArray.getDimension(index, eVar8.f2736j);
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    e eVar9 = aVar.f2647f;
                    eVar9.f2737k = typedArray.getDimension(index, eVar9.f2737k);
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    e eVar10 = aVar.f2647f;
                    eVar10.f2738l = typedArray.getDimension(index, eVar10.f2738l);
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    b bVar40 = aVar.f2646e;
                    bVar40.Z = typedArray.getInt(index, bVar40.Z);
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    b bVar41 = aVar.f2646e;
                    bVar41.f2664a0 = typedArray.getInt(index, bVar41.f2664a0);
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    b bVar42 = aVar.f2646e;
                    bVar42.f2666b0 = typedArray.getDimensionPixelSize(index, bVar42.f2666b0);
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    b bVar43 = aVar.f2646e;
                    bVar43.f2668c0 = typedArray.getDimensionPixelSize(index, bVar43.f2668c0);
                    break;
                case 58:
                    b bVar44 = aVar.f2646e;
                    bVar44.f2670d0 = typedArray.getDimensionPixelSize(index, bVar44.f2670d0);
                    break;
                case 59:
                    b bVar45 = aVar.f2646e;
                    bVar45.f2672e0 = typedArray.getDimensionPixelSize(index, bVar45.f2672e0);
                    break;
                case 60:
                    e eVar11 = aVar.f2647f;
                    eVar11.f2728b = typedArray.getFloat(index, eVar11.f2728b);
                    break;
                case 61:
                    b bVar46 = aVar.f2646e;
                    bVar46.B = u(typedArray, index, bVar46.B);
                    break;
                case 62:
                    b bVar47 = aVar.f2646e;
                    bVar47.C = typedArray.getDimensionPixelSize(index, bVar47.C);
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    b bVar48 = aVar.f2646e;
                    bVar48.D = typedArray.getFloat(index, bVar48.D);
                    break;
                case 64:
                    c cVar = aVar.f2645d;
                    cVar.f2708b = u(typedArray, index, cVar.f2708b);
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        aVar.f2645d.f2710d = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2645d.f2710d = i1.a.f26631c[typedArray.getInteger(index, 0)];
                        break;
                    }
                case 66:
                    aVar.f2645d.f2712f = typedArray.getInt(index, 0);
                    break;
                case 67:
                    c cVar2 = aVar.f2645d;
                    cVar2.f2715i = typedArray.getFloat(index, cVar2.f2715i);
                    break;
                case 68:
                    d dVar4 = aVar.f2644c;
                    dVar4.f2725e = typedArray.getFloat(index, dVar4.f2725e);
                    break;
                case 69:
                    aVar.f2646e.f2674f0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 70:
                    aVar.f2646e.f2676g0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    b bVar49 = aVar.f2646e;
                    bVar49.f2678h0 = typedArray.getInt(index, bVar49.f2678h0);
                    break;
                case 73:
                    b bVar50 = aVar.f2646e;
                    bVar50.f2680i0 = typedArray.getDimensionPixelSize(index, bVar50.f2680i0);
                    break;
                case 74:
                    aVar.f2646e.f2686l0 = typedArray.getString(index);
                    break;
                case 75:
                    b bVar51 = aVar.f2646e;
                    bVar51.f2694p0 = typedArray.getBoolean(index, bVar51.f2694p0);
                    break;
                case 76:
                    c cVar3 = aVar.f2645d;
                    cVar3.f2711e = typedArray.getInt(index, cVar3.f2711e);
                    break;
                case 77:
                    aVar.f2646e.f2688m0 = typedArray.getString(index);
                    break;
                case 78:
                    d dVar5 = aVar.f2644c;
                    dVar5.f2723c = typedArray.getInt(index, dVar5.f2723c);
                    break;
                case 79:
                    c cVar4 = aVar.f2645d;
                    cVar4.f2713g = typedArray.getFloat(index, cVar4.f2713g);
                    break;
                case 80:
                    b bVar52 = aVar.f2646e;
                    bVar52.f2690n0 = typedArray.getBoolean(index, bVar52.f2690n0);
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    b bVar53 = aVar.f2646e;
                    bVar53.f2692o0 = typedArray.getBoolean(index, bVar53.f2692o0);
                    break;
                case 82:
                    c cVar5 = aVar.f2645d;
                    cVar5.f2709c = typedArray.getInteger(index, cVar5.f2709c);
                    break;
                case 83:
                    e eVar12 = aVar.f2647f;
                    eVar12.f2735i = u(typedArray, index, eVar12.f2735i);
                    break;
                case 84:
                    c cVar6 = aVar.f2645d;
                    cVar6.f2717k = typedArray.getInteger(index, cVar6.f2717k);
                    break;
                case 85:
                    c cVar7 = aVar.f2645d;
                    cVar7.f2716j = typedArray.getFloat(index, cVar7.f2716j);
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2645d.f2720n = typedArray.getResourceId(index, -1);
                        c cVar8 = aVar.f2645d;
                        if (cVar8.f2720n != -1) {
                            cVar8.f2719m = -2;
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2645d.f2718l = typedArray.getString(index);
                        if (aVar.f2645d.f2718l.indexOf("/") > 0) {
                            aVar.f2645d.f2720n = typedArray.getResourceId(index, -1);
                            aVar.f2645d.f2719m = -2;
                            break;
                        } else {
                            aVar.f2645d.f2719m = -1;
                            break;
                        }
                    } else {
                        c cVar9 = aVar.f2645d;
                        cVar9.f2719m = typedArray.getInteger(index, cVar9.f2720n);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2634h.get(index));
                    break;
                case 88:
                case 89:
                case 90:
                default:
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2634h.get(index));
                    break;
                case 91:
                    b bVar54 = aVar.f2646e;
                    bVar54.f2698s = u(typedArray, index, bVar54.f2698s);
                    break;
                case 92:
                    b bVar55 = aVar.f2646e;
                    bVar55.f2699t = u(typedArray, index, bVar55.f2699t);
                    break;
                case 93:
                    b bVar56 = aVar.f2646e;
                    bVar56.N = typedArray.getDimensionPixelSize(index, bVar56.N);
                    break;
                case 94:
                    b bVar57 = aVar.f2646e;
                    bVar57.U = typedArray.getDimensionPixelSize(index, bVar57.U);
                    break;
                case 95:
                    v(aVar.f2646e, typedArray, index, 0);
                    break;
                case 96:
                    v(aVar.f2646e, typedArray, index, 1);
                    break;
                case 97:
                    b bVar58 = aVar.f2646e;
                    bVar58.f2696q0 = typedArray.getInt(index, bVar58.f2696q0);
                    break;
            }
        }
        b bVar59 = aVar.f2646e;
        if (bVar59.f2686l0 != null) {
            bVar59.f2684k0 = null;
        }
    }

    private static void z(a aVar, TypedArray typedArray) {
        int indexCount = typedArray.getIndexCount();
        a.C0030a c0030a = new a.C0030a();
        aVar.f2649h = c0030a;
        aVar.f2645d.f2707a = false;
        aVar.f2646e.f2665b = false;
        aVar.f2644c.f2721a = false;
        aVar.f2647f.f2727a = false;
        for (int i10 = 0; i10 < indexCount; i10++) {
            int index = typedArray.getIndex(i10);
            switch (f2635i.get(index)) {
                case 2:
                    c0030a.b(2, typedArray.getDimensionPixelSize(index, aVar.f2646e.K));
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
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2634h.get(index));
                    break;
                case 5:
                    c0030a.c(5, typedArray.getString(index));
                    break;
                case 6:
                    c0030a.b(6, typedArray.getDimensionPixelOffset(index, aVar.f2646e.E));
                    break;
                case 7:
                    c0030a.b(7, typedArray.getDimensionPixelOffset(index, aVar.f2646e.F));
                    break;
                case 8:
                    c0030a.b(8, typedArray.getDimensionPixelSize(index, aVar.f2646e.L));
                    break;
                case 11:
                    c0030a.b(11, typedArray.getDimensionPixelSize(index, aVar.f2646e.R));
                    break;
                case 12:
                    c0030a.b(12, typedArray.getDimensionPixelSize(index, aVar.f2646e.S));
                    break;
                case 13:
                    c0030a.b(13, typedArray.getDimensionPixelSize(index, aVar.f2646e.O));
                    break;
                case 14:
                    c0030a.b(14, typedArray.getDimensionPixelSize(index, aVar.f2646e.Q));
                    break;
                case 15:
                    c0030a.b(15, typedArray.getDimensionPixelSize(index, aVar.f2646e.T));
                    break;
                case 16:
                    c0030a.b(16, typedArray.getDimensionPixelSize(index, aVar.f2646e.P));
                    break;
                case 17:
                    c0030a.b(17, typedArray.getDimensionPixelOffset(index, aVar.f2646e.f2673f));
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    c0030a.b(18, typedArray.getDimensionPixelOffset(index, aVar.f2646e.f2675g));
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    c0030a.a(19, typedArray.getFloat(index, aVar.f2646e.f2677h));
                    break;
                case 20:
                    c0030a.a(20, typedArray.getFloat(index, aVar.f2646e.f2704y));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0030a.b(21, typedArray.getLayoutDimension(index, aVar.f2646e.f2671e));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0030a.b(22, f2633g[typedArray.getInt(index, aVar.f2644c.f2722b)]);
                    break;
                case 23:
                    c0030a.b(23, typedArray.getLayoutDimension(index, aVar.f2646e.f2669d));
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    c0030a.b(24, typedArray.getDimensionPixelSize(index, aVar.f2646e.H));
                    break;
                case 27:
                    c0030a.b(27, typedArray.getInt(index, aVar.f2646e.G));
                    break;
                case 28:
                    c0030a.b(28, typedArray.getDimensionPixelSize(index, aVar.f2646e.I));
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    c0030a.b(31, typedArray.getDimensionPixelSize(index, aVar.f2646e.M));
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    c0030a.b(34, typedArray.getDimensionPixelSize(index, aVar.f2646e.J));
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    c0030a.a(37, typedArray.getFloat(index, aVar.f2646e.f2705z));
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    int resourceId = typedArray.getResourceId(index, aVar.f2642a);
                    aVar.f2642a = resourceId;
                    c0030a.b(38, resourceId);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    c0030a.a(39, typedArray.getFloat(index, aVar.f2646e.W));
                    break;
                case 40:
                    c0030a.a(40, typedArray.getFloat(index, aVar.f2646e.V));
                    break;
                case 41:
                    c0030a.b(41, typedArray.getInt(index, aVar.f2646e.X));
                    break;
                case 42:
                    c0030a.b(42, typedArray.getInt(index, aVar.f2646e.Y));
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    c0030a.a(43, typedArray.getFloat(index, aVar.f2644c.f2724d));
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    c0030a.d(44, true);
                    c0030a.a(44, typedArray.getDimension(index, aVar.f2647f.f2740n));
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    c0030a.a(45, typedArray.getFloat(index, aVar.f2647f.f2729c));
                    break;
                case 46:
                    c0030a.a(46, typedArray.getFloat(index, aVar.f2647f.f2730d));
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    c0030a.a(47, typedArray.getFloat(index, aVar.f2647f.f2731e));
                    break;
                case 48:
                    c0030a.a(48, typedArray.getFloat(index, aVar.f2647f.f2732f));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    c0030a.a(49, typedArray.getDimension(index, aVar.f2647f.f2733g));
                    break;
                case 50:
                    c0030a.a(50, typedArray.getDimension(index, aVar.f2647f.f2734h));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    c0030a.a(51, typedArray.getDimension(index, aVar.f2647f.f2736j));
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    c0030a.a(52, typedArray.getDimension(index, aVar.f2647f.f2737k));
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    c0030a.a(53, typedArray.getDimension(index, aVar.f2647f.f2738l));
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    c0030a.b(54, typedArray.getInt(index, aVar.f2646e.Z));
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    c0030a.b(55, typedArray.getInt(index, aVar.f2646e.f2664a0));
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    c0030a.b(56, typedArray.getDimensionPixelSize(index, aVar.f2646e.f2666b0));
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    c0030a.b(57, typedArray.getDimensionPixelSize(index, aVar.f2646e.f2668c0));
                    break;
                case 58:
                    c0030a.b(58, typedArray.getDimensionPixelSize(index, aVar.f2646e.f2670d0));
                    break;
                case 59:
                    c0030a.b(59, typedArray.getDimensionPixelSize(index, aVar.f2646e.f2672e0));
                    break;
                case 60:
                    c0030a.a(60, typedArray.getFloat(index, aVar.f2647f.f2728b));
                    break;
                case 62:
                    c0030a.b(62, typedArray.getDimensionPixelSize(index, aVar.f2646e.C));
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    c0030a.a(63, typedArray.getFloat(index, aVar.f2646e.D));
                    break;
                case 64:
                    c0030a.b(64, u(typedArray, index, aVar.f2645d.f2708b));
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        c0030a.c(65, typedArray.getString(index));
                        break;
                    } else {
                        c0030a.c(65, i1.a.f26631c[typedArray.getInteger(index, 0)]);
                        break;
                    }
                case 66:
                    c0030a.b(66, typedArray.getInt(index, 0));
                    break;
                case 67:
                    c0030a.a(67, typedArray.getFloat(index, aVar.f2645d.f2715i));
                    break;
                case 68:
                    c0030a.a(68, typedArray.getFloat(index, aVar.f2644c.f2725e));
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
                    c0030a.b(72, typedArray.getInt(index, aVar.f2646e.f2678h0));
                    break;
                case 73:
                    c0030a.b(73, typedArray.getDimensionPixelSize(index, aVar.f2646e.f2680i0));
                    break;
                case 74:
                    c0030a.c(74, typedArray.getString(index));
                    break;
                case 75:
                    c0030a.d(75, typedArray.getBoolean(index, aVar.f2646e.f2694p0));
                    break;
                case 76:
                    c0030a.b(76, typedArray.getInt(index, aVar.f2645d.f2711e));
                    break;
                case 77:
                    c0030a.c(77, typedArray.getString(index));
                    break;
                case 78:
                    c0030a.b(78, typedArray.getInt(index, aVar.f2644c.f2723c));
                    break;
                case 79:
                    c0030a.a(79, typedArray.getFloat(index, aVar.f2645d.f2713g));
                    break;
                case 80:
                    c0030a.d(80, typedArray.getBoolean(index, aVar.f2646e.f2690n0));
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    c0030a.d(81, typedArray.getBoolean(index, aVar.f2646e.f2692o0));
                    break;
                case 82:
                    c0030a.b(82, typedArray.getInteger(index, aVar.f2645d.f2709c));
                    break;
                case 83:
                    c0030a.b(83, u(typedArray, index, aVar.f2647f.f2735i));
                    break;
                case 84:
                    c0030a.b(84, typedArray.getInteger(index, aVar.f2645d.f2717k));
                    break;
                case 85:
                    c0030a.a(85, typedArray.getFloat(index, aVar.f2645d.f2716j));
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2645d.f2720n = typedArray.getResourceId(index, -1);
                        c0030a.b(89, aVar.f2645d.f2720n);
                        c cVar = aVar.f2645d;
                        if (cVar.f2720n != -1) {
                            cVar.f2719m = -2;
                            c0030a.b(88, -2);
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2645d.f2718l = typedArray.getString(index);
                        c0030a.c(90, aVar.f2645d.f2718l);
                        if (aVar.f2645d.f2718l.indexOf("/") > 0) {
                            aVar.f2645d.f2720n = typedArray.getResourceId(index, -1);
                            c0030a.b(89, aVar.f2645d.f2720n);
                            aVar.f2645d.f2719m = -2;
                            c0030a.b(88, -2);
                            break;
                        } else {
                            aVar.f2645d.f2719m = -1;
                            c0030a.b(88, -1);
                            break;
                        }
                    } else {
                        c cVar2 = aVar.f2645d;
                        cVar2.f2719m = typedArray.getInteger(index, cVar2.f2720n);
                        c0030a.b(88, aVar.f2645d.f2719m);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2634h.get(index));
                    break;
                case 93:
                    c0030a.b(93, typedArray.getDimensionPixelSize(index, aVar.f2646e.N));
                    break;
                case 94:
                    c0030a.b(94, typedArray.getDimensionPixelSize(index, aVar.f2646e.U));
                    break;
                case 95:
                    v(c0030a, typedArray, index, 0);
                    break;
                case 96:
                    v(c0030a, typedArray, index, 1);
                    break;
                case 97:
                    c0030a.b(97, typedArray.getInt(index, aVar.f2646e.f2696q0));
                    break;
                case 98:
                    if (m1.b.f36730d) {
                        int resourceId2 = typedArray.getResourceId(index, aVar.f2642a);
                        aVar.f2642a = resourceId2;
                        if (resourceId2 == -1) {
                            aVar.f2643b = typedArray.getString(index);
                            break;
                        } else {
                            break;
                        }
                    } else if (typedArray.peekValue(index).type == 3) {
                        aVar.f2643b = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2642a = typedArray.getResourceId(index, aVar.f2642a);
                        break;
                    }
                case 99:
                    c0030a.d(99, typedArray.getBoolean(index, aVar.f2646e.f2679i));
                    break;
            }
        }
    }

    public void A(int i10, float f10) {
        r(i10).f2646e.f2704y = f10;
    }

    public void B(int i10, float f10) {
        r(i10).f2646e.W = f10;
    }

    public void C(int i10, int i11, int i12) {
        a r10 = r(i10);
        switch (i11) {
            case 1:
                r10.f2646e.H = i12;
                return;
            case 2:
                r10.f2646e.I = i12;
                return;
            case 3:
                r10.f2646e.J = i12;
                return;
            case 4:
                r10.f2646e.K = i12;
                return;
            case 5:
                r10.f2646e.N = i12;
                return;
            case 6:
                r10.f2646e.M = i12;
                return;
            case 7:
                r10.f2646e.L = i12;
                return;
            default:
                throw new IllegalArgumentException("unknown constraint");
        }
    }

    public void D(int i10, float f10) {
        r(i10).f2646e.f2705z = f10;
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
        HashSet hashSet = new HashSet(this.f2641f.keySet());
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            int id2 = childAt.getId();
            if (!this.f2641f.containsKey(Integer.valueOf(id2))) {
                Log.w("ConstraintSet", "id unknown " + m1.a.a(childAt));
            } else if (this.f2640e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            } else {
                if (id2 != -1) {
                    if (this.f2641f.containsKey(Integer.valueOf(id2))) {
                        hashSet.remove(Integer.valueOf(id2));
                        a aVar = (a) this.f2641f.get(Integer.valueOf(id2));
                        if (aVar != null) {
                            if (childAt instanceof Barrier) {
                                aVar.f2646e.f2682j0 = 1;
                                Barrier barrier = (Barrier) childAt;
                                barrier.setId(id2);
                                barrier.setType(aVar.f2646e.f2678h0);
                                barrier.setMargin(aVar.f2646e.f2680i0);
                                barrier.setAllowsGoneWidget(aVar.f2646e.f2694p0);
                                b bVar = aVar.f2646e;
                                int[] iArr = bVar.f2684k0;
                                if (iArr != null) {
                                    barrier.setReferencedIds(iArr);
                                } else {
                                    String str = bVar.f2686l0;
                                    if (str != null) {
                                        bVar.f2684k0 = o(barrier, str);
                                        barrier.setReferencedIds(aVar.f2646e.f2684k0);
                                    }
                                }
                            }
                            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
                            layoutParams.a();
                            aVar.b(layoutParams);
                            if (z10) {
                                androidx.constraintlayout.widget.a.c(childAt, aVar.f2648g);
                            }
                            childAt.setLayoutParams(layoutParams);
                            d dVar = aVar.f2644c;
                            if (dVar.f2723c == 0) {
                                childAt.setVisibility(dVar.f2722b);
                            }
                            childAt.setAlpha(aVar.f2644c.f2724d);
                            childAt.setRotation(aVar.f2647f.f2728b);
                            childAt.setRotationX(aVar.f2647f.f2729c);
                            childAt.setRotationY(aVar.f2647f.f2730d);
                            childAt.setScaleX(aVar.f2647f.f2731e);
                            childAt.setScaleY(aVar.f2647f.f2732f);
                            e eVar = aVar.f2647f;
                            if (eVar.f2735i != -1) {
                                if (((View) childAt.getParent()).findViewById(aVar.f2647f.f2735i) != null) {
                                    float top = (findViewById.getTop() + findViewById.getBottom()) / 2.0f;
                                    float left = (findViewById.getLeft() + findViewById.getRight()) / 2.0f;
                                    if (childAt.getRight() - childAt.getLeft() > 0 && childAt.getBottom() - childAt.getTop() > 0) {
                                        childAt.setPivotX(left - childAt.getLeft());
                                        childAt.setPivotY(top - childAt.getTop());
                                    }
                                }
                            } else {
                                if (!Float.isNaN(eVar.f2733g)) {
                                    childAt.setPivotX(aVar.f2647f.f2733g);
                                }
                                if (!Float.isNaN(aVar.f2647f.f2734h)) {
                                    childAt.setPivotY(aVar.f2647f.f2734h);
                                }
                            }
                            childAt.setTranslationX(aVar.f2647f.f2736j);
                            childAt.setTranslationY(aVar.f2647f.f2737k);
                            childAt.setTranslationZ(aVar.f2647f.f2738l);
                            e eVar2 = aVar.f2647f;
                            if (eVar2.f2739m) {
                                childAt.setElevation(eVar2.f2740n);
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
            a aVar2 = (a) this.f2641f.get(num);
            if (aVar2 != null) {
                if (aVar2.f2646e.f2682j0 == 1) {
                    Barrier barrier2 = new Barrier(constraintLayout.getContext());
                    barrier2.setId(num.intValue());
                    b bVar2 = aVar2.f2646e;
                    int[] iArr2 = bVar2.f2684k0;
                    if (iArr2 != null) {
                        barrier2.setReferencedIds(iArr2);
                    } else {
                        String str2 = bVar2.f2686l0;
                        if (str2 != null) {
                            bVar2.f2684k0 = o(barrier2, str2);
                            barrier2.setReferencedIds(aVar2.f2646e.f2684k0);
                        }
                    }
                    barrier2.setType(aVar2.f2646e.f2678h0);
                    barrier2.setMargin(aVar2.f2646e.f2680i0);
                    ConstraintLayout.LayoutParams generateDefaultLayoutParams = constraintLayout.generateDefaultLayoutParams();
                    barrier2.o();
                    aVar2.b(generateDefaultLayoutParams);
                    constraintLayout.addView(barrier2, generateDefaultLayoutParams);
                }
                if (aVar2.f2646e.f2663a) {
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
        this.f2641f.clear();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
            int id2 = childAt.getId();
            if (this.f2640e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            }
            if (!this.f2641f.containsKey(Integer.valueOf(id2))) {
                this.f2641f.put(Integer.valueOf(id2), new a());
            }
            a aVar = (a) this.f2641f.get(Integer.valueOf(id2));
            if (aVar != null) {
                aVar.f2648g = androidx.constraintlayout.widget.a.a(this.f2639d, childAt);
                aVar.d(id2, layoutParams);
                aVar.f2644c.f2722b = childAt.getVisibility();
                aVar.f2644c.f2724d = childAt.getAlpha();
                aVar.f2647f.f2728b = childAt.getRotation();
                aVar.f2647f.f2729c = childAt.getRotationX();
                aVar.f2647f.f2730d = childAt.getRotationY();
                aVar.f2647f.f2731e = childAt.getScaleX();
                aVar.f2647f.f2732f = childAt.getScaleY();
                float pivotX = childAt.getPivotX();
                float pivotY = childAt.getPivotY();
                if (pivotX != 0.0d || pivotY != 0.0d) {
                    e eVar = aVar.f2647f;
                    eVar.f2733g = pivotX;
                    eVar.f2734h = pivotY;
                }
                aVar.f2647f.f2736j = childAt.getTranslationX();
                aVar.f2647f.f2737k = childAt.getTranslationY();
                aVar.f2647f.f2738l = childAt.getTranslationZ();
                e eVar2 = aVar.f2647f;
                if (eVar2.f2739m) {
                    eVar2.f2740n = childAt.getElevation();
                }
                if (childAt instanceof Barrier) {
                    Barrier barrier = (Barrier) childAt;
                    aVar.f2646e.f2694p0 = barrier.getAllowsGoneWidget();
                    aVar.f2646e.f2684k0 = barrier.getReferencedIds();
                    aVar.f2646e.f2678h0 = barrier.getType();
                    aVar.f2646e.f2680i0 = barrier.getMargin();
                }
            }
        }
    }

    public void g(int i10, int i11, int i12, int i13) {
        if (!this.f2641f.containsKey(Integer.valueOf(i10))) {
            this.f2641f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2641f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2646e;
                    bVar.f2681j = i12;
                    bVar.f2683k = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2646e;
                    bVar2.f2683k = i12;
                    bVar2.f2681j = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("left to " + E(i13) + " undefined");
                }
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2646e;
                    bVar3.f2685l = i12;
                    bVar3.f2687m = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar4 = aVar.f2646e;
                    bVar4.f2687m = i12;
                    bVar4.f2685l = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2646e;
                    bVar5.f2689n = i12;
                    bVar5.f2691o = -1;
                    bVar5.f2697r = -1;
                    bVar5.f2698s = -1;
                    bVar5.f2699t = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar6 = aVar.f2646e;
                    bVar6.f2691o = i12;
                    bVar6.f2689n = -1;
                    bVar6.f2697r = -1;
                    bVar6.f2698s = -1;
                    bVar6.f2699t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2646e;
                    bVar7.f2695q = i12;
                    bVar7.f2693p = -1;
                    bVar7.f2697r = -1;
                    bVar7.f2698s = -1;
                    bVar7.f2699t = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar8 = aVar.f2646e;
                    bVar8.f2693p = i12;
                    bVar8.f2695q = -1;
                    bVar8.f2697r = -1;
                    bVar8.f2698s = -1;
                    bVar8.f2699t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2646e;
                    bVar9.f2697r = i12;
                    bVar9.f2695q = -1;
                    bVar9.f2693p = -1;
                    bVar9.f2689n = -1;
                    bVar9.f2691o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2646e;
                    bVar10.f2698s = i12;
                    bVar10.f2695q = -1;
                    bVar10.f2693p = -1;
                    bVar10.f2689n = -1;
                    bVar10.f2691o = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar11 = aVar.f2646e;
                    bVar11.f2699t = i12;
                    bVar11.f2695q = -1;
                    bVar11.f2693p = -1;
                    bVar11.f2689n = -1;
                    bVar11.f2691o = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2646e;
                    bVar12.f2701v = i12;
                    bVar12.f2700u = -1;
                    return;
                } else if (i13 == 7) {
                    b bVar13 = aVar.f2646e;
                    bVar13.f2700u = i12;
                    bVar13.f2701v = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2646e;
                    bVar14.f2703x = i12;
                    bVar14.f2702w = -1;
                    return;
                } else if (i13 == 6) {
                    b bVar15 = aVar.f2646e;
                    bVar15.f2702w = i12;
                    bVar15.f2703x = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void h(int i10, int i11, int i12, int i13, int i14) {
        if (!this.f2641f.containsKey(Integer.valueOf(i10))) {
            this.f2641f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2641f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2646e;
                    bVar.f2681j = i12;
                    bVar.f2683k = -1;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2646e;
                    bVar2.f2683k = i12;
                    bVar2.f2681j = -1;
                } else {
                    throw new IllegalArgumentException("Left to " + E(i13) + " undefined");
                }
                aVar.f2646e.H = i14;
                return;
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2646e;
                    bVar3.f2685l = i12;
                    bVar3.f2687m = -1;
                } else if (i13 != 2) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar4 = aVar.f2646e;
                    bVar4.f2687m = i12;
                    bVar4.f2685l = -1;
                }
                aVar.f2646e.I = i14;
                return;
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2646e;
                    bVar5.f2689n = i12;
                    bVar5.f2691o = -1;
                    bVar5.f2697r = -1;
                    bVar5.f2698s = -1;
                    bVar5.f2699t = -1;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar6 = aVar.f2646e;
                    bVar6.f2691o = i12;
                    bVar6.f2689n = -1;
                    bVar6.f2697r = -1;
                    bVar6.f2698s = -1;
                    bVar6.f2699t = -1;
                }
                aVar.f2646e.J = i14;
                return;
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2646e;
                    bVar7.f2695q = i12;
                    bVar7.f2693p = -1;
                    bVar7.f2697r = -1;
                    bVar7.f2698s = -1;
                    bVar7.f2699t = -1;
                } else if (i13 != 3) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar8 = aVar.f2646e;
                    bVar8.f2693p = i12;
                    bVar8.f2695q = -1;
                    bVar8.f2697r = -1;
                    bVar8.f2698s = -1;
                    bVar8.f2699t = -1;
                }
                aVar.f2646e.K = i14;
                return;
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2646e;
                    bVar9.f2697r = i12;
                    bVar9.f2695q = -1;
                    bVar9.f2693p = -1;
                    bVar9.f2689n = -1;
                    bVar9.f2691o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2646e;
                    bVar10.f2698s = i12;
                    bVar10.f2695q = -1;
                    bVar10.f2693p = -1;
                    bVar10.f2689n = -1;
                    bVar10.f2691o = -1;
                    return;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar11 = aVar.f2646e;
                    bVar11.f2699t = i12;
                    bVar11.f2695q = -1;
                    bVar11.f2693p = -1;
                    bVar11.f2689n = -1;
                    bVar11.f2691o = -1;
                    return;
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2646e;
                    bVar12.f2701v = i12;
                    bVar12.f2700u = -1;
                } else if (i13 != 7) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar13 = aVar.f2646e;
                    bVar13.f2700u = i12;
                    bVar13.f2701v = -1;
                }
                aVar.f2646e.M = i14;
                return;
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2646e;
                    bVar14.f2703x = i12;
                    bVar14.f2702w = -1;
                } else if (i13 != 6) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar15 = aVar.f2646e;
                    bVar15.f2702w = i12;
                    bVar15.f2703x = -1;
                }
                aVar.f2646e.L = i14;
                return;
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void i(int i10, int i11, int i12, float f10) {
        b bVar = r(i10).f2646e;
        bVar.B = i11;
        bVar.C = i12;
        bVar.D = f10;
    }

    public void j(int i10, int i11) {
        r(i10).f2646e.Z = i11;
    }

    public void k(int i10, int i11) {
        r(i10).f2646e.f2671e = i11;
    }

    public void l(int i10, int i11) {
        r(i10).f2646e.f2669d = i11;
    }

    public void m(int i10, boolean z10) {
        r(i10).f2646e.f2692o0 = z10;
    }

    public void n(int i10, boolean z10) {
        r(i10).f2646e.f2690n0 = z10;
    }

    public void p(int i10, int i11, int i12, int i13, int[] iArr, float[] fArr, int i14) {
        if (iArr.length >= 2) {
            if (fArr != null && fArr.length != iArr.length) {
                throw new IllegalArgumentException("must have 2 or more widgets in a chain");
            }
            if (fArr != null) {
                r(iArr[0]).f2646e.V = fArr[0];
            }
            r(iArr[0]).f2646e.Y = i14;
            h(iArr[0], 3, i10, i11, 0);
            for (int i15 = 1; i15 < iArr.length; i15++) {
                int i16 = i15 - 1;
                h(iArr[i15], 3, iArr[i16], 4, 0);
                h(iArr[i16], 4, iArr[i15], 3, 0);
                if (fArr != null) {
                    r(iArr[i15]).f2646e.V = fArr[i15];
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
                        q10.f2646e.f2663a = true;
                    }
                    this.f2641f.put(Integer.valueOf(q10.f2642a), q10);
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
