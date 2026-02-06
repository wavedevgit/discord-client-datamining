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
    private static final int[] f2936g = {0, 4, 8};

    /* renamed from: h  reason: collision with root package name */
    private static SparseIntArray f2937h = new SparseIntArray();

    /* renamed from: i  reason: collision with root package name */
    private static SparseIntArray f2938i = new SparseIntArray();

    /* renamed from: a  reason: collision with root package name */
    public String f2939a = "";

    /* renamed from: b  reason: collision with root package name */
    private String[] f2940b = new String[0];

    /* renamed from: c  reason: collision with root package name */
    public int f2941c = 0;

    /* renamed from: d  reason: collision with root package name */
    private HashMap f2942d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private boolean f2943e = true;

    /* renamed from: f  reason: collision with root package name */
    private HashMap f2944f = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        int f2945a;

        /* renamed from: b  reason: collision with root package name */
        String f2946b;

        /* renamed from: c  reason: collision with root package name */
        public final d f2947c = new d();

        /* renamed from: d  reason: collision with root package name */
        public final c f2948d = new c();

        /* renamed from: e  reason: collision with root package name */
        public final b f2949e = new b();

        /* renamed from: f  reason: collision with root package name */
        public final e f2950f = new e();

        /* renamed from: g  reason: collision with root package name */
        public HashMap f2951g = new HashMap();

        /* renamed from: h  reason: collision with root package name */
        C0028a f2952h;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: androidx.constraintlayout.widget.ConstraintSet$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class C0028a {

            /* renamed from: a  reason: collision with root package name */
            int[] f2953a = new int[10];

            /* renamed from: b  reason: collision with root package name */
            int[] f2954b = new int[10];

            /* renamed from: c  reason: collision with root package name */
            int f2955c = 0;

            /* renamed from: d  reason: collision with root package name */
            int[] f2956d = new int[10];

            /* renamed from: e  reason: collision with root package name */
            float[] f2957e = new float[10];

            /* renamed from: f  reason: collision with root package name */
            int f2958f = 0;

            /* renamed from: g  reason: collision with root package name */
            int[] f2959g = new int[5];

            /* renamed from: h  reason: collision with root package name */
            String[] f2960h = new String[5];

            /* renamed from: i  reason: collision with root package name */
            int f2961i = 0;

            /* renamed from: j  reason: collision with root package name */
            int[] f2962j = new int[4];

            /* renamed from: k  reason: collision with root package name */
            boolean[] f2963k = new boolean[4];

            /* renamed from: l  reason: collision with root package name */
            int f2964l = 0;

            C0028a() {
            }

            void a(int i10, float f10) {
                int i11 = this.f2958f;
                int[] iArr = this.f2956d;
                if (i11 >= iArr.length) {
                    this.f2956d = Arrays.copyOf(iArr, iArr.length * 2);
                    float[] fArr = this.f2957e;
                    this.f2957e = Arrays.copyOf(fArr, fArr.length * 2);
                }
                int[] iArr2 = this.f2956d;
                int i12 = this.f2958f;
                iArr2[i12] = i10;
                float[] fArr2 = this.f2957e;
                this.f2958f = i12 + 1;
                fArr2[i12] = f10;
            }

            void b(int i10, int i11) {
                int i12 = this.f2955c;
                int[] iArr = this.f2953a;
                if (i12 >= iArr.length) {
                    this.f2953a = Arrays.copyOf(iArr, iArr.length * 2);
                    int[] iArr2 = this.f2954b;
                    this.f2954b = Arrays.copyOf(iArr2, iArr2.length * 2);
                }
                int[] iArr3 = this.f2953a;
                int i13 = this.f2955c;
                iArr3[i13] = i10;
                int[] iArr4 = this.f2954b;
                this.f2955c = i13 + 1;
                iArr4[i13] = i11;
            }

            void c(int i10, String str) {
                int i11 = this.f2961i;
                int[] iArr = this.f2959g;
                if (i11 >= iArr.length) {
                    this.f2959g = Arrays.copyOf(iArr, iArr.length * 2);
                    String[] strArr = this.f2960h;
                    this.f2960h = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                }
                int[] iArr2 = this.f2959g;
                int i12 = this.f2961i;
                iArr2[i12] = i10;
                String[] strArr2 = this.f2960h;
                this.f2961i = i12 + 1;
                strArr2[i12] = str;
            }

            void d(int i10, boolean z10) {
                int i11 = this.f2964l;
                int[] iArr = this.f2962j;
                if (i11 >= iArr.length) {
                    this.f2962j = Arrays.copyOf(iArr, iArr.length * 2);
                    boolean[] zArr = this.f2963k;
                    this.f2963k = Arrays.copyOf(zArr, zArr.length * 2);
                }
                int[] iArr2 = this.f2962j;
                int i12 = this.f2964l;
                iArr2[i12] = i10;
                boolean[] zArr2 = this.f2963k;
                this.f2964l = i12 + 1;
                zArr2[i12] = z10;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void d(int i10, ConstraintLayout.LayoutParams layoutParams) {
            this.f2945a = i10;
            b bVar = this.f2949e;
            bVar.f2984j = layoutParams.f2868e;
            bVar.f2986k = layoutParams.f2870f;
            bVar.f2988l = layoutParams.f2872g;
            bVar.f2990m = layoutParams.f2874h;
            bVar.f2992n = layoutParams.f2876i;
            bVar.f2994o = layoutParams.f2878j;
            bVar.f2996p = layoutParams.f2880k;
            bVar.f2998q = layoutParams.f2882l;
            bVar.f3000r = layoutParams.f2884m;
            bVar.f3001s = layoutParams.f2886n;
            bVar.f3002t = layoutParams.f2888o;
            bVar.f3003u = layoutParams.f2896s;
            bVar.f3004v = layoutParams.f2898t;
            bVar.f3005w = layoutParams.f2900u;
            bVar.f3006x = layoutParams.f2902v;
            bVar.f3007y = layoutParams.G;
            bVar.f3008z = layoutParams.H;
            bVar.A = layoutParams.I;
            bVar.B = layoutParams.f2890p;
            bVar.C = layoutParams.f2892q;
            bVar.D = layoutParams.f2894r;
            bVar.E = layoutParams.X;
            bVar.F = layoutParams.Y;
            bVar.G = layoutParams.Z;
            bVar.f2980h = layoutParams.f2864c;
            bVar.f2976f = layoutParams.f2860a;
            bVar.f2978g = layoutParams.f2862b;
            bVar.f2972d = ((ViewGroup.MarginLayoutParams) layoutParams).width;
            bVar.f2974e = ((ViewGroup.MarginLayoutParams) layoutParams).height;
            bVar.H = ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin;
            bVar.I = ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin;
            bVar.J = ((ViewGroup.MarginLayoutParams) layoutParams).topMargin;
            bVar.K = ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin;
            bVar.N = layoutParams.D;
            bVar.V = layoutParams.M;
            bVar.W = layoutParams.L;
            bVar.Y = layoutParams.O;
            bVar.X = layoutParams.N;
            bVar.f2993n0 = layoutParams.f2861a0;
            bVar.f2995o0 = layoutParams.f2863b0;
            bVar.Z = layoutParams.P;
            bVar.f2967a0 = layoutParams.Q;
            bVar.f2969b0 = layoutParams.T;
            bVar.f2971c0 = layoutParams.U;
            bVar.f2973d0 = layoutParams.R;
            bVar.f2975e0 = layoutParams.S;
            bVar.f2977f0 = layoutParams.V;
            bVar.f2979g0 = layoutParams.W;
            bVar.f2991m0 = layoutParams.f2865c0;
            bVar.P = layoutParams.f2906x;
            bVar.R = layoutParams.f2908z;
            bVar.O = layoutParams.f2904w;
            bVar.Q = layoutParams.f2907y;
            bVar.T = layoutParams.A;
            bVar.S = layoutParams.B;
            bVar.U = layoutParams.C;
            bVar.f2999q0 = layoutParams.f2867d0;
            bVar.L = layoutParams.getMarginEnd();
            this.f2949e.M = layoutParams.getMarginStart();
        }

        public void b(ConstraintLayout.LayoutParams layoutParams) {
            b bVar = this.f2949e;
            layoutParams.f2868e = bVar.f2984j;
            layoutParams.f2870f = bVar.f2986k;
            layoutParams.f2872g = bVar.f2988l;
            layoutParams.f2874h = bVar.f2990m;
            layoutParams.f2876i = bVar.f2992n;
            layoutParams.f2878j = bVar.f2994o;
            layoutParams.f2880k = bVar.f2996p;
            layoutParams.f2882l = bVar.f2998q;
            layoutParams.f2884m = bVar.f3000r;
            layoutParams.f2886n = bVar.f3001s;
            layoutParams.f2888o = bVar.f3002t;
            layoutParams.f2896s = bVar.f3003u;
            layoutParams.f2898t = bVar.f3004v;
            layoutParams.f2900u = bVar.f3005w;
            layoutParams.f2902v = bVar.f3006x;
            ((ViewGroup.MarginLayoutParams) layoutParams).leftMargin = bVar.H;
            ((ViewGroup.MarginLayoutParams) layoutParams).rightMargin = bVar.I;
            ((ViewGroup.MarginLayoutParams) layoutParams).topMargin = bVar.J;
            ((ViewGroup.MarginLayoutParams) layoutParams).bottomMargin = bVar.K;
            layoutParams.A = bVar.T;
            layoutParams.B = bVar.S;
            layoutParams.f2906x = bVar.P;
            layoutParams.f2908z = bVar.R;
            layoutParams.G = bVar.f3007y;
            layoutParams.H = bVar.f3008z;
            layoutParams.f2890p = bVar.B;
            layoutParams.f2892q = bVar.C;
            layoutParams.f2894r = bVar.D;
            layoutParams.I = bVar.A;
            layoutParams.X = bVar.E;
            layoutParams.Y = bVar.F;
            layoutParams.M = bVar.V;
            layoutParams.L = bVar.W;
            layoutParams.O = bVar.Y;
            layoutParams.N = bVar.X;
            layoutParams.f2861a0 = bVar.f2993n0;
            layoutParams.f2863b0 = bVar.f2995o0;
            layoutParams.P = bVar.Z;
            layoutParams.Q = bVar.f2967a0;
            layoutParams.T = bVar.f2969b0;
            layoutParams.U = bVar.f2971c0;
            layoutParams.R = bVar.f2973d0;
            layoutParams.S = bVar.f2975e0;
            layoutParams.V = bVar.f2977f0;
            layoutParams.W = bVar.f2979g0;
            layoutParams.Z = bVar.G;
            layoutParams.f2864c = bVar.f2980h;
            layoutParams.f2860a = bVar.f2976f;
            layoutParams.f2862b = bVar.f2978g;
            ((ViewGroup.MarginLayoutParams) layoutParams).width = bVar.f2972d;
            ((ViewGroup.MarginLayoutParams) layoutParams).height = bVar.f2974e;
            String str = bVar.f2991m0;
            if (str != null) {
                layoutParams.f2865c0 = str;
            }
            layoutParams.f2867d0 = bVar.f2999q0;
            layoutParams.setMarginStart(bVar.M);
            layoutParams.setMarginEnd(this.f2949e.L);
            layoutParams.a();
        }

        /* renamed from: c */
        public a clone() {
            a aVar = new a();
            aVar.f2949e.a(this.f2949e);
            aVar.f2948d.a(this.f2948d);
            aVar.f2947c.a(this.f2947c);
            aVar.f2950f.a(this.f2950f);
            aVar.f2945a = this.f2945a;
            aVar.f2952h = this.f2952h;
            return aVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: r0  reason: collision with root package name */
        private static SparseIntArray f2965r0;

        /* renamed from: d  reason: collision with root package name */
        public int f2972d;

        /* renamed from: e  reason: collision with root package name */
        public int f2974e;

        /* renamed from: k0  reason: collision with root package name */
        public int[] f2987k0;

        /* renamed from: l0  reason: collision with root package name */
        public String f2989l0;

        /* renamed from: m0  reason: collision with root package name */
        public String f2991m0;

        /* renamed from: a  reason: collision with root package name */
        public boolean f2966a = false;

        /* renamed from: b  reason: collision with root package name */
        public boolean f2968b = false;

        /* renamed from: c  reason: collision with root package name */
        public boolean f2970c = false;

        /* renamed from: f  reason: collision with root package name */
        public int f2976f = -1;

        /* renamed from: g  reason: collision with root package name */
        public int f2978g = -1;

        /* renamed from: h  reason: collision with root package name */
        public float f2980h = -1.0f;

        /* renamed from: i  reason: collision with root package name */
        public boolean f2982i = true;

        /* renamed from: j  reason: collision with root package name */
        public int f2984j = -1;

        /* renamed from: k  reason: collision with root package name */
        public int f2986k = -1;

        /* renamed from: l  reason: collision with root package name */
        public int f2988l = -1;

        /* renamed from: m  reason: collision with root package name */
        public int f2990m = -1;

        /* renamed from: n  reason: collision with root package name */
        public int f2992n = -1;

        /* renamed from: o  reason: collision with root package name */
        public int f2994o = -1;

        /* renamed from: p  reason: collision with root package name */
        public int f2996p = -1;

        /* renamed from: q  reason: collision with root package name */
        public int f2998q = -1;

        /* renamed from: r  reason: collision with root package name */
        public int f3000r = -1;

        /* renamed from: s  reason: collision with root package name */
        public int f3001s = -1;

        /* renamed from: t  reason: collision with root package name */
        public int f3002t = -1;

        /* renamed from: u  reason: collision with root package name */
        public int f3003u = -1;

        /* renamed from: v  reason: collision with root package name */
        public int f3004v = -1;

        /* renamed from: w  reason: collision with root package name */
        public int f3005w = -1;

        /* renamed from: x  reason: collision with root package name */
        public int f3006x = -1;

        /* renamed from: y  reason: collision with root package name */
        public float f3007y = 0.5f;

        /* renamed from: z  reason: collision with root package name */
        public float f3008z = 0.5f;
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
        public int f2967a0 = 0;

        /* renamed from: b0  reason: collision with root package name */
        public int f2969b0 = 0;

        /* renamed from: c0  reason: collision with root package name */
        public int f2971c0 = 0;

        /* renamed from: d0  reason: collision with root package name */
        public int f2973d0 = 0;

        /* renamed from: e0  reason: collision with root package name */
        public int f2975e0 = 0;

        /* renamed from: f0  reason: collision with root package name */
        public float f2977f0 = 1.0f;

        /* renamed from: g0  reason: collision with root package name */
        public float f2979g0 = 1.0f;

        /* renamed from: h0  reason: collision with root package name */
        public int f2981h0 = -1;

        /* renamed from: i0  reason: collision with root package name */
        public int f2983i0 = 0;

        /* renamed from: j0  reason: collision with root package name */
        public int f2985j0 = -1;

        /* renamed from: n0  reason: collision with root package name */
        public boolean f2993n0 = false;

        /* renamed from: o0  reason: collision with root package name */
        public boolean f2995o0 = false;

        /* renamed from: p0  reason: collision with root package name */
        public boolean f2997p0 = true;

        /* renamed from: q0  reason: collision with root package name */
        public int f2999q0 = 0;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f2965r0 = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.C5, 24);
            f2965r0.append(androidx.constraintlayout.widget.d.D5, 25);
            f2965r0.append(androidx.constraintlayout.widget.d.F5, 28);
            f2965r0.append(androidx.constraintlayout.widget.d.G5, 29);
            f2965r0.append(androidx.constraintlayout.widget.d.L5, 35);
            f2965r0.append(androidx.constraintlayout.widget.d.K5, 34);
            f2965r0.append(androidx.constraintlayout.widget.d.f3169l5, 4);
            f2965r0.append(androidx.constraintlayout.widget.d.f3161k5, 3);
            f2965r0.append(androidx.constraintlayout.widget.d.f3145i5, 1);
            f2965r0.append(androidx.constraintlayout.widget.d.T5, 6);
            f2965r0.append(androidx.constraintlayout.widget.d.U5, 7);
            f2965r0.append(androidx.constraintlayout.widget.d.f3225s5, 17);
            f2965r0.append(androidx.constraintlayout.widget.d.f3233t5, 18);
            f2965r0.append(androidx.constraintlayout.widget.d.f3241u5, 19);
            f2965r0.append(androidx.constraintlayout.widget.d.f3113e5, 90);
            f2965r0.append(androidx.constraintlayout.widget.d.Q4, 26);
            f2965r0.append(androidx.constraintlayout.widget.d.H5, 31);
            f2965r0.append(androidx.constraintlayout.widget.d.I5, 32);
            f2965r0.append(androidx.constraintlayout.widget.d.f3217r5, 10);
            f2965r0.append(androidx.constraintlayout.widget.d.f3209q5, 9);
            f2965r0.append(androidx.constraintlayout.widget.d.X5, 13);
            f2965r0.append(androidx.constraintlayout.widget.d.f3080a6, 16);
            f2965r0.append(androidx.constraintlayout.widget.d.Y5, 14);
            f2965r0.append(androidx.constraintlayout.widget.d.V5, 11);
            f2965r0.append(androidx.constraintlayout.widget.d.Z5, 15);
            f2965r0.append(androidx.constraintlayout.widget.d.W5, 12);
            f2965r0.append(androidx.constraintlayout.widget.d.O5, 38);
            f2965r0.append(androidx.constraintlayout.widget.d.A5, 37);
            f2965r0.append(androidx.constraintlayout.widget.d.f3281z5, 39);
            f2965r0.append(androidx.constraintlayout.widget.d.N5, 40);
            f2965r0.append(androidx.constraintlayout.widget.d.f3273y5, 20);
            f2965r0.append(androidx.constraintlayout.widget.d.M5, 36);
            f2965r0.append(androidx.constraintlayout.widget.d.f3201p5, 5);
            f2965r0.append(androidx.constraintlayout.widget.d.B5, 91);
            f2965r0.append(androidx.constraintlayout.widget.d.J5, 91);
            f2965r0.append(androidx.constraintlayout.widget.d.E5, 91);
            f2965r0.append(androidx.constraintlayout.widget.d.f3153j5, 91);
            f2965r0.append(androidx.constraintlayout.widget.d.f3137h5, 91);
            f2965r0.append(androidx.constraintlayout.widget.d.T4, 23);
            f2965r0.append(androidx.constraintlayout.widget.d.V4, 27);
            f2965r0.append(androidx.constraintlayout.widget.d.X4, 30);
            f2965r0.append(androidx.constraintlayout.widget.d.Y4, 8);
            f2965r0.append(androidx.constraintlayout.widget.d.U4, 33);
            f2965r0.append(androidx.constraintlayout.widget.d.W4, 2);
            f2965r0.append(androidx.constraintlayout.widget.d.R4, 22);
            f2965r0.append(androidx.constraintlayout.widget.d.S4, 21);
            f2965r0.append(androidx.constraintlayout.widget.d.P5, 41);
            f2965r0.append(androidx.constraintlayout.widget.d.f3249v5, 42);
            f2965r0.append(androidx.constraintlayout.widget.d.f3129g5, 87);
            f2965r0.append(androidx.constraintlayout.widget.d.f3121f5, 88);
            f2965r0.append(androidx.constraintlayout.widget.d.f3089b6, 76);
            f2965r0.append(androidx.constraintlayout.widget.d.f3177m5, 61);
            f2965r0.append(androidx.constraintlayout.widget.d.f3193o5, 62);
            f2965r0.append(androidx.constraintlayout.widget.d.f3185n5, 63);
            f2965r0.append(androidx.constraintlayout.widget.d.S5, 69);
            f2965r0.append(androidx.constraintlayout.widget.d.f3265x5, 70);
            f2965r0.append(androidx.constraintlayout.widget.d.f3097c5, 71);
            f2965r0.append(androidx.constraintlayout.widget.d.f3079a5, 72);
            f2965r0.append(androidx.constraintlayout.widget.d.f3088b5, 73);
            f2965r0.append(androidx.constraintlayout.widget.d.f3105d5, 74);
            f2965r0.append(androidx.constraintlayout.widget.d.Z4, 75);
            f2965r0.append(androidx.constraintlayout.widget.d.Q5, 84);
            f2965r0.append(androidx.constraintlayout.widget.d.R5, 86);
            f2965r0.append(androidx.constraintlayout.widget.d.Q5, 83);
            f2965r0.append(androidx.constraintlayout.widget.d.f3257w5, 85);
            f2965r0.append(androidx.constraintlayout.widget.d.P5, 87);
            f2965r0.append(androidx.constraintlayout.widget.d.f3249v5, 88);
            f2965r0.append(androidx.constraintlayout.widget.d.f3222s2, 89);
            f2965r0.append(androidx.constraintlayout.widget.d.f3113e5, 90);
        }

        public void a(b bVar) {
            this.f2966a = bVar.f2966a;
            this.f2972d = bVar.f2972d;
            this.f2968b = bVar.f2968b;
            this.f2974e = bVar.f2974e;
            this.f2976f = bVar.f2976f;
            this.f2978g = bVar.f2978g;
            this.f2980h = bVar.f2980h;
            this.f2982i = bVar.f2982i;
            this.f2984j = bVar.f2984j;
            this.f2986k = bVar.f2986k;
            this.f2988l = bVar.f2988l;
            this.f2990m = bVar.f2990m;
            this.f2992n = bVar.f2992n;
            this.f2994o = bVar.f2994o;
            this.f2996p = bVar.f2996p;
            this.f2998q = bVar.f2998q;
            this.f3000r = bVar.f3000r;
            this.f3001s = bVar.f3001s;
            this.f3002t = bVar.f3002t;
            this.f3003u = bVar.f3003u;
            this.f3004v = bVar.f3004v;
            this.f3005w = bVar.f3005w;
            this.f3006x = bVar.f3006x;
            this.f3007y = bVar.f3007y;
            this.f3008z = bVar.f3008z;
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
            this.f2967a0 = bVar.f2967a0;
            this.f2969b0 = bVar.f2969b0;
            this.f2971c0 = bVar.f2971c0;
            this.f2973d0 = bVar.f2973d0;
            this.f2975e0 = bVar.f2975e0;
            this.f2977f0 = bVar.f2977f0;
            this.f2979g0 = bVar.f2979g0;
            this.f2981h0 = bVar.f2981h0;
            this.f2983i0 = bVar.f2983i0;
            this.f2985j0 = bVar.f2985j0;
            this.f2991m0 = bVar.f2991m0;
            int[] iArr = bVar.f2987k0;
            if (iArr != null && bVar.f2989l0 == null) {
                this.f2987k0 = Arrays.copyOf(iArr, iArr.length);
            } else {
                this.f2987k0 = null;
            }
            this.f2989l0 = bVar.f2989l0;
            this.f2993n0 = bVar.f2993n0;
            this.f2995o0 = bVar.f2995o0;
            this.f2997p0 = bVar.f2997p0;
            this.f2999q0 = bVar.f2999q0;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.P4);
            this.f2968b = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                int i11 = f2965r0.get(index);
                switch (i11) {
                    case 1:
                        this.f3000r = ConstraintSet.u(obtainStyledAttributes, index, this.f3000r);
                        break;
                    case 2:
                        this.K = obtainStyledAttributes.getDimensionPixelSize(index, this.K);
                        break;
                    case 3:
                        this.f2998q = ConstraintSet.u(obtainStyledAttributes, index, this.f2998q);
                        break;
                    case 4:
                        this.f2996p = ConstraintSet.u(obtainStyledAttributes, index, this.f2996p);
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
                        this.f3006x = ConstraintSet.u(obtainStyledAttributes, index, this.f3006x);
                        break;
                    case 10:
                        this.f3005w = ConstraintSet.u(obtainStyledAttributes, index, this.f3005w);
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
                        this.f2976f = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2976f);
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        this.f2978g = obtainStyledAttributes.getDimensionPixelOffset(index, this.f2978g);
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        this.f2980h = obtainStyledAttributes.getFloat(index, this.f2980h);
                        break;
                    case 20:
                        this.f3007y = obtainStyledAttributes.getFloat(index, this.f3007y);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        this.f2974e = obtainStyledAttributes.getLayoutDimension(index, this.f2974e);
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        this.f2972d = obtainStyledAttributes.getLayoutDimension(index, this.f2972d);
                        break;
                    case 23:
                        this.H = obtainStyledAttributes.getDimensionPixelSize(index, this.H);
                        break;
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        this.f2984j = ConstraintSet.u(obtainStyledAttributes, index, this.f2984j);
                        break;
                    case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                        this.f2986k = ConstraintSet.u(obtainStyledAttributes, index, this.f2986k);
                        break;
                    case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                        this.G = obtainStyledAttributes.getInt(index, this.G);
                        break;
                    case 27:
                        this.I = obtainStyledAttributes.getDimensionPixelSize(index, this.I);
                        break;
                    case 28:
                        this.f2988l = ConstraintSet.u(obtainStyledAttributes, index, this.f2988l);
                        break;
                    case 29:
                        this.f2990m = ConstraintSet.u(obtainStyledAttributes, index, this.f2990m);
                        break;
                    case 30:
                        this.M = obtainStyledAttributes.getDimensionPixelSize(index, this.M);
                        break;
                    case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                        this.f3003u = ConstraintSet.u(obtainStyledAttributes, index, this.f3003u);
                        break;
                    case 32:
                        this.f3004v = ConstraintSet.u(obtainStyledAttributes, index, this.f3004v);
                        break;
                    case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                        this.J = obtainStyledAttributes.getDimensionPixelSize(index, this.J);
                        break;
                    case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                        this.f2994o = ConstraintSet.u(obtainStyledAttributes, index, this.f2994o);
                        break;
                    case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                        this.f2992n = ConstraintSet.u(obtainStyledAttributes, index, this.f2992n);
                        break;
                    case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                        this.f3008z = obtainStyledAttributes.getFloat(index, this.f3008z);
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
                                        this.f2977f0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 70:
                                        this.f2979g0 = obtainStyledAttributes.getFloat(index, 1.0f);
                                        continue;
                                    case 71:
                                        Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                                        continue;
                                    case 72:
                                        this.f2981h0 = obtainStyledAttributes.getInt(index, this.f2981h0);
                                        continue;
                                    case 73:
                                        this.f2983i0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2983i0);
                                        continue;
                                    case 74:
                                        this.f2989l0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 75:
                                        this.f2997p0 = obtainStyledAttributes.getBoolean(index, this.f2997p0);
                                        continue;
                                    case 76:
                                        this.f2999q0 = obtainStyledAttributes.getInt(index, this.f2999q0);
                                        continue;
                                    case 77:
                                        this.f3001s = ConstraintSet.u(obtainStyledAttributes, index, this.f3001s);
                                        continue;
                                    case 78:
                                        this.f3002t = ConstraintSet.u(obtainStyledAttributes, index, this.f3002t);
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
                                        this.f2967a0 = obtainStyledAttributes.getInt(index, this.f2967a0);
                                        continue;
                                    case 83:
                                        this.f2971c0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2971c0);
                                        continue;
                                    case 84:
                                        this.f2969b0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2969b0);
                                        continue;
                                    case 85:
                                        this.f2975e0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2975e0);
                                        continue;
                                    case 86:
                                        this.f2973d0 = obtainStyledAttributes.getDimensionPixelSize(index, this.f2973d0);
                                        continue;
                                    case 87:
                                        this.f2993n0 = obtainStyledAttributes.getBoolean(index, this.f2993n0);
                                        continue;
                                    case 88:
                                        this.f2995o0 = obtainStyledAttributes.getBoolean(index, this.f2995o0);
                                        continue;
                                    case 89:
                                        this.f2991m0 = obtainStyledAttributes.getString(index);
                                        continue;
                                    case 90:
                                        this.f2982i = obtainStyledAttributes.getBoolean(index, this.f2982i);
                                        continue;
                                    case 91:
                                        Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2965r0.get(index));
                                        continue;
                                    default:
                                        Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2965r0.get(index));
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
        private static SparseIntArray f3009o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f3010a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f3011b = -1;

        /* renamed from: c  reason: collision with root package name */
        public int f3012c = 0;

        /* renamed from: d  reason: collision with root package name */
        public String f3013d = null;

        /* renamed from: e  reason: collision with root package name */
        public int f3014e = -1;

        /* renamed from: f  reason: collision with root package name */
        public int f3015f = 0;

        /* renamed from: g  reason: collision with root package name */
        public float f3016g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public int f3017h = -1;

        /* renamed from: i  reason: collision with root package name */
        public float f3018i = Float.NaN;

        /* renamed from: j  reason: collision with root package name */
        public float f3019j = Float.NaN;

        /* renamed from: k  reason: collision with root package name */
        public int f3020k = -1;

        /* renamed from: l  reason: collision with root package name */
        public String f3021l = null;

        /* renamed from: m  reason: collision with root package name */
        public int f3022m = -3;

        /* renamed from: n  reason: collision with root package name */
        public int f3023n = -1;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f3009o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.f3138h6, 1);
            f3009o.append(androidx.constraintlayout.widget.d.f3154j6, 2);
            f3009o.append(androidx.constraintlayout.widget.d.f3186n6, 3);
            f3009o.append(androidx.constraintlayout.widget.d.f3130g6, 4);
            f3009o.append(androidx.constraintlayout.widget.d.f3122f6, 5);
            f3009o.append(androidx.constraintlayout.widget.d.f3114e6, 6);
            f3009o.append(androidx.constraintlayout.widget.d.f3146i6, 7);
            f3009o.append(androidx.constraintlayout.widget.d.f3178m6, 8);
            f3009o.append(androidx.constraintlayout.widget.d.f3170l6, 9);
            f3009o.append(androidx.constraintlayout.widget.d.f3162k6, 10);
        }

        public void a(c cVar) {
            this.f3010a = cVar.f3010a;
            this.f3011b = cVar.f3011b;
            this.f3013d = cVar.f3013d;
            this.f3014e = cVar.f3014e;
            this.f3015f = cVar.f3015f;
            this.f3018i = cVar.f3018i;
            this.f3016g = cVar.f3016g;
            this.f3017h = cVar.f3017h;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f3106d6);
            this.f3010a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f3009o.get(index)) {
                    case 1:
                        this.f3018i = obtainStyledAttributes.getFloat(index, this.f3018i);
                        break;
                    case 2:
                        this.f3014e = obtainStyledAttributes.getInt(index, this.f3014e);
                        break;
                    case 3:
                        if (obtainStyledAttributes.peekValue(index).type == 3) {
                            this.f3013d = obtainStyledAttributes.getString(index);
                            break;
                        } else {
                            this.f3013d = i1.a.f26541c[obtainStyledAttributes.getInteger(index, 0)];
                            break;
                        }
                    case 4:
                        this.f3015f = obtainStyledAttributes.getInt(index, 0);
                        break;
                    case 5:
                        this.f3011b = ConstraintSet.u(obtainStyledAttributes, index, this.f3011b);
                        break;
                    case 6:
                        this.f3012c = obtainStyledAttributes.getInteger(index, this.f3012c);
                        break;
                    case 7:
                        this.f3016g = obtainStyledAttributes.getFloat(index, this.f3016g);
                        break;
                    case 8:
                        this.f3020k = obtainStyledAttributes.getInteger(index, this.f3020k);
                        break;
                    case 9:
                        this.f3019j = obtainStyledAttributes.getFloat(index, this.f3019j);
                        break;
                    case 10:
                        int i11 = obtainStyledAttributes.peekValue(index).type;
                        if (i11 == 1) {
                            int resourceId = obtainStyledAttributes.getResourceId(index, -1);
                            this.f3023n = resourceId;
                            if (resourceId != -1) {
                                this.f3022m = -2;
                                break;
                            } else {
                                break;
                            }
                        } else if (i11 == 3) {
                            String string = obtainStyledAttributes.getString(index);
                            this.f3021l = string;
                            if (string.indexOf("/") > 0) {
                                this.f3023n = obtainStyledAttributes.getResourceId(index, -1);
                                this.f3022m = -2;
                                break;
                            } else {
                                this.f3022m = -1;
                                break;
                            }
                        } else {
                            this.f3022m = obtainStyledAttributes.getInteger(index, this.f3023n);
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
        public boolean f3024a = false;

        /* renamed from: b  reason: collision with root package name */
        public int f3025b = 0;

        /* renamed from: c  reason: collision with root package name */
        public int f3026c = 0;

        /* renamed from: d  reason: collision with root package name */
        public float f3027d = 1.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f3028e = Float.NaN;

        public void a(d dVar) {
            this.f3024a = dVar.f3024a;
            this.f3025b = dVar.f3025b;
            this.f3027d = dVar.f3027d;
            this.f3028e = dVar.f3028e;
            this.f3026c = dVar.f3026c;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.f3258w6);
            this.f3024a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                if (index == androidx.constraintlayout.widget.d.f3274y6) {
                    this.f3027d = obtainStyledAttributes.getFloat(index, this.f3027d);
                } else if (index == androidx.constraintlayout.widget.d.f3266x6) {
                    this.f3025b = obtainStyledAttributes.getInt(index, this.f3025b);
                    this.f3025b = ConstraintSet.f2936g[this.f3025b];
                } else if (index == androidx.constraintlayout.widget.d.A6) {
                    this.f3026c = obtainStyledAttributes.getInt(index, this.f3026c);
                } else if (index == androidx.constraintlayout.widget.d.f3282z6) {
                    this.f3028e = obtainStyledAttributes.getFloat(index, this.f3028e);
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {

        /* renamed from: o  reason: collision with root package name */
        private static SparseIntArray f3029o;

        /* renamed from: a  reason: collision with root package name */
        public boolean f3030a = false;

        /* renamed from: b  reason: collision with root package name */
        public float f3031b = 0.0f;

        /* renamed from: c  reason: collision with root package name */
        public float f3032c = 0.0f;

        /* renamed from: d  reason: collision with root package name */
        public float f3033d = 0.0f;

        /* renamed from: e  reason: collision with root package name */
        public float f3034e = 1.0f;

        /* renamed from: f  reason: collision with root package name */
        public float f3035f = 1.0f;

        /* renamed from: g  reason: collision with root package name */
        public float f3036g = Float.NaN;

        /* renamed from: h  reason: collision with root package name */
        public float f3037h = Float.NaN;

        /* renamed from: i  reason: collision with root package name */
        public int f3038i = -1;

        /* renamed from: j  reason: collision with root package name */
        public float f3039j = 0.0f;

        /* renamed from: k  reason: collision with root package name */
        public float f3040k = 0.0f;

        /* renamed from: l  reason: collision with root package name */
        public float f3041l = 0.0f;

        /* renamed from: m  reason: collision with root package name */
        public boolean f3042m = false;

        /* renamed from: n  reason: collision with root package name */
        public float f3043n = 0.0f;

        static {
            SparseIntArray sparseIntArray = new SparseIntArray();
            f3029o = sparseIntArray;
            sparseIntArray.append(androidx.constraintlayout.widget.d.N6, 1);
            f3029o.append(androidx.constraintlayout.widget.d.O6, 2);
            f3029o.append(androidx.constraintlayout.widget.d.P6, 3);
            f3029o.append(androidx.constraintlayout.widget.d.L6, 4);
            f3029o.append(androidx.constraintlayout.widget.d.M6, 5);
            f3029o.append(androidx.constraintlayout.widget.d.H6, 6);
            f3029o.append(androidx.constraintlayout.widget.d.I6, 7);
            f3029o.append(androidx.constraintlayout.widget.d.J6, 8);
            f3029o.append(androidx.constraintlayout.widget.d.K6, 9);
            f3029o.append(androidx.constraintlayout.widget.d.Q6, 10);
            f3029o.append(androidx.constraintlayout.widget.d.R6, 11);
            f3029o.append(androidx.constraintlayout.widget.d.S6, 12);
        }

        public void a(e eVar) {
            this.f3030a = eVar.f3030a;
            this.f3031b = eVar.f3031b;
            this.f3032c = eVar.f3032c;
            this.f3033d = eVar.f3033d;
            this.f3034e = eVar.f3034e;
            this.f3035f = eVar.f3035f;
            this.f3036g = eVar.f3036g;
            this.f3037h = eVar.f3037h;
            this.f3038i = eVar.f3038i;
            this.f3039j = eVar.f3039j;
            this.f3040k = eVar.f3040k;
            this.f3041l = eVar.f3041l;
            this.f3042m = eVar.f3042m;
            this.f3043n = eVar.f3043n;
        }

        void b(Context context, AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, androidx.constraintlayout.widget.d.G6);
            this.f3030a = true;
            int indexCount = obtainStyledAttributes.getIndexCount();
            for (int i10 = 0; i10 < indexCount; i10++) {
                int index = obtainStyledAttributes.getIndex(i10);
                switch (f3029o.get(index)) {
                    case 1:
                        this.f3031b = obtainStyledAttributes.getFloat(index, this.f3031b);
                        break;
                    case 2:
                        this.f3032c = obtainStyledAttributes.getFloat(index, this.f3032c);
                        break;
                    case 3:
                        this.f3033d = obtainStyledAttributes.getFloat(index, this.f3033d);
                        break;
                    case 4:
                        this.f3034e = obtainStyledAttributes.getFloat(index, this.f3034e);
                        break;
                    case 5:
                        this.f3035f = obtainStyledAttributes.getFloat(index, this.f3035f);
                        break;
                    case 6:
                        this.f3036g = obtainStyledAttributes.getDimension(index, this.f3036g);
                        break;
                    case 7:
                        this.f3037h = obtainStyledAttributes.getDimension(index, this.f3037h);
                        break;
                    case 8:
                        this.f3039j = obtainStyledAttributes.getDimension(index, this.f3039j);
                        break;
                    case 9:
                        this.f3040k = obtainStyledAttributes.getDimension(index, this.f3040k);
                        break;
                    case 10:
                        this.f3041l = obtainStyledAttributes.getDimension(index, this.f3041l);
                        break;
                    case 11:
                        this.f3042m = true;
                        this.f3043n = obtainStyledAttributes.getDimension(index, this.f3043n);
                        break;
                    case 12:
                        this.f3038i = ConstraintSet.u(obtainStyledAttributes, index, this.f3038i);
                        break;
                }
            }
            obtainStyledAttributes.recycle();
        }
    }

    static {
        f2937h.append(androidx.constraintlayout.widget.d.f3140i0, 25);
        f2937h.append(androidx.constraintlayout.widget.d.f3148j0, 26);
        f2937h.append(androidx.constraintlayout.widget.d.f3164l0, 29);
        f2937h.append(androidx.constraintlayout.widget.d.f3172m0, 30);
        f2937h.append(androidx.constraintlayout.widget.d.f3220s0, 36);
        f2937h.append(androidx.constraintlayout.widget.d.f3212r0, 35);
        f2937h.append(androidx.constraintlayout.widget.d.P, 4);
        f2937h.append(androidx.constraintlayout.widget.d.O, 3);
        f2937h.append(androidx.constraintlayout.widget.d.K, 1);
        f2937h.append(androidx.constraintlayout.widget.d.M, 91);
        f2937h.append(androidx.constraintlayout.widget.d.L, 92);
        f2937h.append(androidx.constraintlayout.widget.d.B0, 6);
        f2937h.append(androidx.constraintlayout.widget.d.C0, 7);
        f2937h.append(androidx.constraintlayout.widget.d.W, 17);
        f2937h.append(androidx.constraintlayout.widget.d.X, 18);
        f2937h.append(androidx.constraintlayout.widget.d.Y, 19);
        f2937h.append(androidx.constraintlayout.widget.d.G, 99);
        f2937h.append(androidx.constraintlayout.widget.d.f3091c, 27);
        f2937h.append(androidx.constraintlayout.widget.d.f3180n0, 32);
        f2937h.append(androidx.constraintlayout.widget.d.f3188o0, 33);
        f2937h.append(androidx.constraintlayout.widget.d.V, 10);
        f2937h.append(androidx.constraintlayout.widget.d.U, 9);
        f2937h.append(androidx.constraintlayout.widget.d.F0, 13);
        f2937h.append(androidx.constraintlayout.widget.d.I0, 16);
        f2937h.append(androidx.constraintlayout.widget.d.G0, 14);
        f2937h.append(androidx.constraintlayout.widget.d.D0, 11);
        f2937h.append(androidx.constraintlayout.widget.d.H0, 15);
        f2937h.append(androidx.constraintlayout.widget.d.E0, 12);
        f2937h.append(androidx.constraintlayout.widget.d.f3244v0, 40);
        f2937h.append(androidx.constraintlayout.widget.d.f3124g0, 39);
        f2937h.append(androidx.constraintlayout.widget.d.f3116f0, 41);
        f2937h.append(androidx.constraintlayout.widget.d.f3236u0, 42);
        f2937h.append(androidx.constraintlayout.widget.d.f3108e0, 20);
        f2937h.append(androidx.constraintlayout.widget.d.f3228t0, 37);
        f2937h.append(androidx.constraintlayout.widget.d.T, 5);
        f2937h.append(androidx.constraintlayout.widget.d.f3132h0, 87);
        f2937h.append(androidx.constraintlayout.widget.d.f3204q0, 87);
        f2937h.append(androidx.constraintlayout.widget.d.f3156k0, 87);
        f2937h.append(androidx.constraintlayout.widget.d.N, 87);
        f2937h.append(androidx.constraintlayout.widget.d.J, 87);
        f2937h.append(androidx.constraintlayout.widget.d.f3131h, 24);
        f2937h.append(androidx.constraintlayout.widget.d.f3147j, 28);
        f2937h.append(androidx.constraintlayout.widget.d.f3243v, 31);
        f2937h.append(androidx.constraintlayout.widget.d.f3251w, 8);
        f2937h.append(androidx.constraintlayout.widget.d.f3139i, 34);
        f2937h.append(androidx.constraintlayout.widget.d.f3155k, 2);
        f2937h.append(androidx.constraintlayout.widget.d.f3115f, 23);
        f2937h.append(androidx.constraintlayout.widget.d.f3123g, 21);
        f2937h.append(androidx.constraintlayout.widget.d.f3252w0, 95);
        f2937h.append(androidx.constraintlayout.widget.d.Z, 96);
        f2937h.append(androidx.constraintlayout.widget.d.f3107e, 22);
        f2937h.append(androidx.constraintlayout.widget.d.f3163l, 43);
        f2937h.append(androidx.constraintlayout.widget.d.f3267y, 44);
        f2937h.append(androidx.constraintlayout.widget.d.f3227t, 45);
        f2937h.append(androidx.constraintlayout.widget.d.f3235u, 46);
        f2937h.append(androidx.constraintlayout.widget.d.f3219s, 60);
        f2937h.append(androidx.constraintlayout.widget.d.f3203q, 47);
        f2937h.append(androidx.constraintlayout.widget.d.f3211r, 48);
        f2937h.append(androidx.constraintlayout.widget.d.f3171m, 49);
        f2937h.append(androidx.constraintlayout.widget.d.f3179n, 50);
        f2937h.append(androidx.constraintlayout.widget.d.f3187o, 51);
        f2937h.append(androidx.constraintlayout.widget.d.f3195p, 52);
        f2937h.append(androidx.constraintlayout.widget.d.f3259x, 53);
        f2937h.append(androidx.constraintlayout.widget.d.f3260x0, 54);
        f2937h.append(androidx.constraintlayout.widget.d.f3074a0, 55);
        f2937h.append(androidx.constraintlayout.widget.d.f3268y0, 56);
        f2937h.append(androidx.constraintlayout.widget.d.f3083b0, 57);
        f2937h.append(androidx.constraintlayout.widget.d.f3276z0, 58);
        f2937h.append(androidx.constraintlayout.widget.d.f3092c0, 59);
        f2937h.append(androidx.constraintlayout.widget.d.Q, 61);
        f2937h.append(androidx.constraintlayout.widget.d.S, 62);
        f2937h.append(androidx.constraintlayout.widget.d.R, 63);
        f2937h.append(androidx.constraintlayout.widget.d.f3275z, 64);
        f2937h.append(androidx.constraintlayout.widget.d.S0, 65);
        f2937h.append(androidx.constraintlayout.widget.d.F, 66);
        f2937h.append(androidx.constraintlayout.widget.d.T0, 67);
        f2937h.append(androidx.constraintlayout.widget.d.L0, 79);
        f2937h.append(androidx.constraintlayout.widget.d.f3099d, 38);
        f2937h.append(androidx.constraintlayout.widget.d.K0, 68);
        f2937h.append(androidx.constraintlayout.widget.d.A0, 69);
        f2937h.append(androidx.constraintlayout.widget.d.f3100d0, 70);
        f2937h.append(androidx.constraintlayout.widget.d.J0, 97);
        f2937h.append(androidx.constraintlayout.widget.d.D, 71);
        f2937h.append(androidx.constraintlayout.widget.d.B, 72);
        f2937h.append(androidx.constraintlayout.widget.d.C, 73);
        f2937h.append(androidx.constraintlayout.widget.d.E, 74);
        f2937h.append(androidx.constraintlayout.widget.d.A, 75);
        f2937h.append(androidx.constraintlayout.widget.d.M0, 76);
        f2937h.append(androidx.constraintlayout.widget.d.f3196p0, 77);
        f2937h.append(androidx.constraintlayout.widget.d.U0, 78);
        f2937h.append(androidx.constraintlayout.widget.d.I, 80);
        f2937h.append(androidx.constraintlayout.widget.d.H, 81);
        f2937h.append(androidx.constraintlayout.widget.d.N0, 82);
        f2937h.append(androidx.constraintlayout.widget.d.R0, 83);
        f2937h.append(androidx.constraintlayout.widget.d.Q0, 84);
        f2937h.append(androidx.constraintlayout.widget.d.P0, 85);
        f2937h.append(androidx.constraintlayout.widget.d.O0, 86);
        f2938i.append(androidx.constraintlayout.widget.d.Y3, 6);
        f2938i.append(androidx.constraintlayout.widget.d.Y3, 7);
        f2938i.append(androidx.constraintlayout.widget.d.T2, 27);
        f2938i.append(androidx.constraintlayout.widget.d.f3087b4, 13);
        f2938i.append(androidx.constraintlayout.widget.d.f3112e4, 16);
        f2938i.append(androidx.constraintlayout.widget.d.f3096c4, 14);
        f2938i.append(androidx.constraintlayout.widget.d.Z3, 11);
        f2938i.append(androidx.constraintlayout.widget.d.f3104d4, 15);
        f2938i.append(androidx.constraintlayout.widget.d.f3078a4, 12);
        f2938i.append(androidx.constraintlayout.widget.d.S3, 40);
        f2938i.append(androidx.constraintlayout.widget.d.L3, 39);
        f2938i.append(androidx.constraintlayout.widget.d.K3, 41);
        f2938i.append(androidx.constraintlayout.widget.d.R3, 42);
        f2938i.append(androidx.constraintlayout.widget.d.J3, 20);
        f2938i.append(androidx.constraintlayout.widget.d.Q3, 37);
        f2938i.append(androidx.constraintlayout.widget.d.D3, 5);
        f2938i.append(androidx.constraintlayout.widget.d.M3, 87);
        f2938i.append(androidx.constraintlayout.widget.d.P3, 87);
        f2938i.append(androidx.constraintlayout.widget.d.N3, 87);
        f2938i.append(androidx.constraintlayout.widget.d.A3, 87);
        f2938i.append(androidx.constraintlayout.widget.d.f3279z3, 87);
        f2938i.append(androidx.constraintlayout.widget.d.Y2, 24);
        f2938i.append(androidx.constraintlayout.widget.d.f3077a3, 28);
        f2938i.append(androidx.constraintlayout.widget.d.f3175m3, 31);
        f2938i.append(androidx.constraintlayout.widget.d.f3183n3, 8);
        f2938i.append(androidx.constraintlayout.widget.d.Z2, 34);
        f2938i.append(androidx.constraintlayout.widget.d.f3086b3, 2);
        f2938i.append(androidx.constraintlayout.widget.d.W2, 23);
        f2938i.append(androidx.constraintlayout.widget.d.X2, 21);
        f2938i.append(androidx.constraintlayout.widget.d.T3, 95);
        f2938i.append(androidx.constraintlayout.widget.d.E3, 96);
        f2938i.append(androidx.constraintlayout.widget.d.V2, 22);
        f2938i.append(androidx.constraintlayout.widget.d.f3095c3, 43);
        f2938i.append(androidx.constraintlayout.widget.d.f3199p3, 44);
        f2938i.append(androidx.constraintlayout.widget.d.f3159k3, 45);
        f2938i.append(androidx.constraintlayout.widget.d.f3167l3, 46);
        f2938i.append(androidx.constraintlayout.widget.d.f3151j3, 60);
        f2938i.append(androidx.constraintlayout.widget.d.f3135h3, 47);
        f2938i.append(androidx.constraintlayout.widget.d.f3143i3, 48);
        f2938i.append(androidx.constraintlayout.widget.d.f3103d3, 49);
        f2938i.append(androidx.constraintlayout.widget.d.f3111e3, 50);
        f2938i.append(androidx.constraintlayout.widget.d.f3119f3, 51);
        f2938i.append(androidx.constraintlayout.widget.d.f3127g3, 52);
        f2938i.append(androidx.constraintlayout.widget.d.f3191o3, 53);
        f2938i.append(androidx.constraintlayout.widget.d.U3, 54);
        f2938i.append(androidx.constraintlayout.widget.d.F3, 55);
        f2938i.append(androidx.constraintlayout.widget.d.V3, 56);
        f2938i.append(androidx.constraintlayout.widget.d.G3, 57);
        f2938i.append(androidx.constraintlayout.widget.d.W3, 58);
        f2938i.append(androidx.constraintlayout.widget.d.H3, 59);
        f2938i.append(androidx.constraintlayout.widget.d.C3, 62);
        f2938i.append(androidx.constraintlayout.widget.d.B3, 63);
        f2938i.append(androidx.constraintlayout.widget.d.f3207q3, 64);
        f2938i.append(androidx.constraintlayout.widget.d.f3200p4, 65);
        f2938i.append(androidx.constraintlayout.widget.d.f3255w3, 66);
        f2938i.append(androidx.constraintlayout.widget.d.f3208q4, 67);
        f2938i.append(androidx.constraintlayout.widget.d.f3136h4, 79);
        f2938i.append(androidx.constraintlayout.widget.d.U2, 38);
        f2938i.append(androidx.constraintlayout.widget.d.f3144i4, 98);
        f2938i.append(androidx.constraintlayout.widget.d.f3128g4, 68);
        f2938i.append(androidx.constraintlayout.widget.d.X3, 69);
        f2938i.append(androidx.constraintlayout.widget.d.I3, 70);
        f2938i.append(androidx.constraintlayout.widget.d.f3239u3, 71);
        f2938i.append(androidx.constraintlayout.widget.d.f3223s3, 72);
        f2938i.append(androidx.constraintlayout.widget.d.f3231t3, 73);
        f2938i.append(androidx.constraintlayout.widget.d.f3247v3, 74);
        f2938i.append(androidx.constraintlayout.widget.d.f3215r3, 75);
        f2938i.append(androidx.constraintlayout.widget.d.f3152j4, 76);
        f2938i.append(androidx.constraintlayout.widget.d.O3, 77);
        f2938i.append(androidx.constraintlayout.widget.d.f3216r4, 78);
        f2938i.append(androidx.constraintlayout.widget.d.f3271y3, 80);
        f2938i.append(androidx.constraintlayout.widget.d.f3263x3, 81);
        f2938i.append(androidx.constraintlayout.widget.d.f3160k4, 82);
        f2938i.append(androidx.constraintlayout.widget.d.f3192o4, 83);
        f2938i.append(androidx.constraintlayout.widget.d.f3184n4, 84);
        f2938i.append(androidx.constraintlayout.widget.d.f3176m4, 85);
        f2938i.append(androidx.constraintlayout.widget.d.f3168l4, 86);
        f2938i.append(androidx.constraintlayout.widget.d.f3120f4, 97);
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
            iArr = androidx.constraintlayout.widget.d.f3082b;
        }
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, iArr);
        y(aVar, obtainStyledAttributes, z10);
        obtainStyledAttributes.recycle();
        return aVar;
    }

    private a r(int i10) {
        if (!this.f2944f.containsKey(Integer.valueOf(i10))) {
            this.f2944f.put(Integer.valueOf(i10), new a());
        }
        return (a) this.f2944f.get(Integer.valueOf(i10));
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
            r4.f2861a0 = r5
            return
        L3d:
            r4.height = r2
            r4.f2863b0 = r5
            return
        L42:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.b
            if (r6 == 0) goto L54
            androidx.constraintlayout.widget.ConstraintSet$b r4 = (androidx.constraintlayout.widget.ConstraintSet.b) r4
            if (r7 != 0) goto L4f
            r4.f2972d = r2
            r4.f2993n0 = r5
            return
        L4f:
            r4.f2974e = r2
            r4.f2995o0 = r5
            return
        L54:
            boolean r6 = r4 instanceof androidx.constraintlayout.widget.ConstraintSet.a.C0028a
            if (r6 == 0) goto L71
            androidx.constraintlayout.widget.ConstraintSet$a$a r4 = (androidx.constraintlayout.widget.ConstraintSet.a.C0028a) r4
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
                        } else if (obj instanceof a.C0028a) {
                            ((a.C0028a) obj).c(5, trim2);
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
                                    bVar.f2972d = 0;
                                    bVar.W = parseFloat;
                                    return;
                                }
                                bVar.f2974e = 0;
                                bVar.V = parseFloat;
                            } else if (obj instanceof a.C0028a) {
                                a.C0028a c0028a = (a.C0028a) obj;
                                if (i10 == 0) {
                                    c0028a.b(23, 0);
                                    c0028a.a(39, parseFloat);
                                    return;
                                }
                                c0028a.b(21, 0);
                                c0028a.a(40, parseFloat);
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
                                    bVar2.f2972d = 0;
                                    bVar2.f2977f0 = max;
                                    bVar2.Z = 2;
                                    return;
                                }
                                bVar2.f2974e = 0;
                                bVar2.f2979g0 = max;
                                bVar2.f2967a0 = 2;
                            } else if (obj instanceof a.C0028a) {
                                a.C0028a c0028a2 = (a.C0028a) obj;
                                if (i10 == 0) {
                                    c0028a2.b(23, 0);
                                    c0028a2.b(54, 2);
                                    return;
                                }
                                c0028a2.b(21, 0);
                                c0028a2.b(55, 2);
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
            if (index != androidx.constraintlayout.widget.d.f3099d && androidx.constraintlayout.widget.d.f3243v != index && androidx.constraintlayout.widget.d.f3251w != index) {
                aVar.f2948d.f3010a = true;
                aVar.f2949e.f2968b = true;
                aVar.f2947c.f3024a = true;
                aVar.f2950f.f3030a = true;
            }
            switch (f2937h.get(index)) {
                case 1:
                    b bVar = aVar.f2949e;
                    bVar.f3000r = u(typedArray, index, bVar.f3000r);
                    break;
                case 2:
                    b bVar2 = aVar.f2949e;
                    bVar2.K = typedArray.getDimensionPixelSize(index, bVar2.K);
                    break;
                case 3:
                    b bVar3 = aVar.f2949e;
                    bVar3.f2998q = u(typedArray, index, bVar3.f2998q);
                    break;
                case 4:
                    b bVar4 = aVar.f2949e;
                    bVar4.f2996p = u(typedArray, index, bVar4.f2996p);
                    break;
                case 5:
                    aVar.f2949e.A = typedArray.getString(index);
                    break;
                case 6:
                    b bVar5 = aVar.f2949e;
                    bVar5.E = typedArray.getDimensionPixelOffset(index, bVar5.E);
                    break;
                case 7:
                    b bVar6 = aVar.f2949e;
                    bVar6.F = typedArray.getDimensionPixelOffset(index, bVar6.F);
                    break;
                case 8:
                    b bVar7 = aVar.f2949e;
                    bVar7.L = typedArray.getDimensionPixelSize(index, bVar7.L);
                    break;
                case 9:
                    b bVar8 = aVar.f2949e;
                    bVar8.f3006x = u(typedArray, index, bVar8.f3006x);
                    break;
                case 10:
                    b bVar9 = aVar.f2949e;
                    bVar9.f3005w = u(typedArray, index, bVar9.f3005w);
                    break;
                case 11:
                    b bVar10 = aVar.f2949e;
                    bVar10.R = typedArray.getDimensionPixelSize(index, bVar10.R);
                    break;
                case 12:
                    b bVar11 = aVar.f2949e;
                    bVar11.S = typedArray.getDimensionPixelSize(index, bVar11.S);
                    break;
                case 13:
                    b bVar12 = aVar.f2949e;
                    bVar12.O = typedArray.getDimensionPixelSize(index, bVar12.O);
                    break;
                case 14:
                    b bVar13 = aVar.f2949e;
                    bVar13.Q = typedArray.getDimensionPixelSize(index, bVar13.Q);
                    break;
                case 15:
                    b bVar14 = aVar.f2949e;
                    bVar14.T = typedArray.getDimensionPixelSize(index, bVar14.T);
                    break;
                case 16:
                    b bVar15 = aVar.f2949e;
                    bVar15.P = typedArray.getDimensionPixelSize(index, bVar15.P);
                    break;
                case 17:
                    b bVar16 = aVar.f2949e;
                    bVar16.f2976f = typedArray.getDimensionPixelOffset(index, bVar16.f2976f);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    b bVar17 = aVar.f2949e;
                    bVar17.f2978g = typedArray.getDimensionPixelOffset(index, bVar17.f2978g);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    b bVar18 = aVar.f2949e;
                    bVar18.f2980h = typedArray.getFloat(index, bVar18.f2980h);
                    break;
                case 20:
                    b bVar19 = aVar.f2949e;
                    bVar19.f3007y = typedArray.getFloat(index, bVar19.f3007y);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    b bVar20 = aVar.f2949e;
                    bVar20.f2974e = typedArray.getLayoutDimension(index, bVar20.f2974e);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    d dVar = aVar.f2947c;
                    dVar.f3025b = typedArray.getInt(index, dVar.f3025b);
                    d dVar2 = aVar.f2947c;
                    dVar2.f3025b = f2936g[dVar2.f3025b];
                    break;
                case 23:
                    b bVar21 = aVar.f2949e;
                    bVar21.f2972d = typedArray.getLayoutDimension(index, bVar21.f2972d);
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    b bVar22 = aVar.f2949e;
                    bVar22.H = typedArray.getDimensionPixelSize(index, bVar22.H);
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    b bVar23 = aVar.f2949e;
                    bVar23.f2984j = u(typedArray, index, bVar23.f2984j);
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    b bVar24 = aVar.f2949e;
                    bVar24.f2986k = u(typedArray, index, bVar24.f2986k);
                    break;
                case 27:
                    b bVar25 = aVar.f2949e;
                    bVar25.G = typedArray.getInt(index, bVar25.G);
                    break;
                case 28:
                    b bVar26 = aVar.f2949e;
                    bVar26.I = typedArray.getDimensionPixelSize(index, bVar26.I);
                    break;
                case 29:
                    b bVar27 = aVar.f2949e;
                    bVar27.f2988l = u(typedArray, index, bVar27.f2988l);
                    break;
                case 30:
                    b bVar28 = aVar.f2949e;
                    bVar28.f2990m = u(typedArray, index, bVar28.f2990m);
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    b bVar29 = aVar.f2949e;
                    bVar29.M = typedArray.getDimensionPixelSize(index, bVar29.M);
                    break;
                case 32:
                    b bVar30 = aVar.f2949e;
                    bVar30.f3003u = u(typedArray, index, bVar30.f3003u);
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    b bVar31 = aVar.f2949e;
                    bVar31.f3004v = u(typedArray, index, bVar31.f3004v);
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    b bVar32 = aVar.f2949e;
                    bVar32.J = typedArray.getDimensionPixelSize(index, bVar32.J);
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    b bVar33 = aVar.f2949e;
                    bVar33.f2994o = u(typedArray, index, bVar33.f2994o);
                    break;
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    b bVar34 = aVar.f2949e;
                    bVar34.f2992n = u(typedArray, index, bVar34.f2992n);
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    b bVar35 = aVar.f2949e;
                    bVar35.f3008z = typedArray.getFloat(index, bVar35.f3008z);
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    aVar.f2945a = typedArray.getResourceId(index, aVar.f2945a);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    b bVar36 = aVar.f2949e;
                    bVar36.W = typedArray.getFloat(index, bVar36.W);
                    break;
                case 40:
                    b bVar37 = aVar.f2949e;
                    bVar37.V = typedArray.getFloat(index, bVar37.V);
                    break;
                case 41:
                    b bVar38 = aVar.f2949e;
                    bVar38.X = typedArray.getInt(index, bVar38.X);
                    break;
                case 42:
                    b bVar39 = aVar.f2949e;
                    bVar39.Y = typedArray.getInt(index, bVar39.Y);
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    d dVar3 = aVar.f2947c;
                    dVar3.f3027d = typedArray.getFloat(index, dVar3.f3027d);
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    e eVar = aVar.f2950f;
                    eVar.f3042m = true;
                    eVar.f3043n = typedArray.getDimension(index, eVar.f3043n);
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    e eVar2 = aVar.f2950f;
                    eVar2.f3032c = typedArray.getFloat(index, eVar2.f3032c);
                    break;
                case 46:
                    e eVar3 = aVar.f2950f;
                    eVar3.f3033d = typedArray.getFloat(index, eVar3.f3033d);
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    e eVar4 = aVar.f2950f;
                    eVar4.f3034e = typedArray.getFloat(index, eVar4.f3034e);
                    break;
                case 48:
                    e eVar5 = aVar.f2950f;
                    eVar5.f3035f = typedArray.getFloat(index, eVar5.f3035f);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    e eVar6 = aVar.f2950f;
                    eVar6.f3036g = typedArray.getDimension(index, eVar6.f3036g);
                    break;
                case 50:
                    e eVar7 = aVar.f2950f;
                    eVar7.f3037h = typedArray.getDimension(index, eVar7.f3037h);
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    e eVar8 = aVar.f2950f;
                    eVar8.f3039j = typedArray.getDimension(index, eVar8.f3039j);
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    e eVar9 = aVar.f2950f;
                    eVar9.f3040k = typedArray.getDimension(index, eVar9.f3040k);
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    e eVar10 = aVar.f2950f;
                    eVar10.f3041l = typedArray.getDimension(index, eVar10.f3041l);
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    b bVar40 = aVar.f2949e;
                    bVar40.Z = typedArray.getInt(index, bVar40.Z);
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    b bVar41 = aVar.f2949e;
                    bVar41.f2967a0 = typedArray.getInt(index, bVar41.f2967a0);
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    b bVar42 = aVar.f2949e;
                    bVar42.f2969b0 = typedArray.getDimensionPixelSize(index, bVar42.f2969b0);
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    b bVar43 = aVar.f2949e;
                    bVar43.f2971c0 = typedArray.getDimensionPixelSize(index, bVar43.f2971c0);
                    break;
                case 58:
                    b bVar44 = aVar.f2949e;
                    bVar44.f2973d0 = typedArray.getDimensionPixelSize(index, bVar44.f2973d0);
                    break;
                case 59:
                    b bVar45 = aVar.f2949e;
                    bVar45.f2975e0 = typedArray.getDimensionPixelSize(index, bVar45.f2975e0);
                    break;
                case 60:
                    e eVar11 = aVar.f2950f;
                    eVar11.f3031b = typedArray.getFloat(index, eVar11.f3031b);
                    break;
                case 61:
                    b bVar46 = aVar.f2949e;
                    bVar46.B = u(typedArray, index, bVar46.B);
                    break;
                case 62:
                    b bVar47 = aVar.f2949e;
                    bVar47.C = typedArray.getDimensionPixelSize(index, bVar47.C);
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    b bVar48 = aVar.f2949e;
                    bVar48.D = typedArray.getFloat(index, bVar48.D);
                    break;
                case 64:
                    c cVar = aVar.f2948d;
                    cVar.f3011b = u(typedArray, index, cVar.f3011b);
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        aVar.f2948d.f3013d = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2948d.f3013d = i1.a.f26541c[typedArray.getInteger(index, 0)];
                        break;
                    }
                case 66:
                    aVar.f2948d.f3015f = typedArray.getInt(index, 0);
                    break;
                case 67:
                    c cVar2 = aVar.f2948d;
                    cVar2.f3018i = typedArray.getFloat(index, cVar2.f3018i);
                    break;
                case 68:
                    d dVar4 = aVar.f2947c;
                    dVar4.f3028e = typedArray.getFloat(index, dVar4.f3028e);
                    break;
                case 69:
                    aVar.f2949e.f2977f0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 70:
                    aVar.f2949e.f2979g0 = typedArray.getFloat(index, 1.0f);
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    b bVar49 = aVar.f2949e;
                    bVar49.f2981h0 = typedArray.getInt(index, bVar49.f2981h0);
                    break;
                case 73:
                    b bVar50 = aVar.f2949e;
                    bVar50.f2983i0 = typedArray.getDimensionPixelSize(index, bVar50.f2983i0);
                    break;
                case 74:
                    aVar.f2949e.f2989l0 = typedArray.getString(index);
                    break;
                case 75:
                    b bVar51 = aVar.f2949e;
                    bVar51.f2997p0 = typedArray.getBoolean(index, bVar51.f2997p0);
                    break;
                case 76:
                    c cVar3 = aVar.f2948d;
                    cVar3.f3014e = typedArray.getInt(index, cVar3.f3014e);
                    break;
                case 77:
                    aVar.f2949e.f2991m0 = typedArray.getString(index);
                    break;
                case 78:
                    d dVar5 = aVar.f2947c;
                    dVar5.f3026c = typedArray.getInt(index, dVar5.f3026c);
                    break;
                case 79:
                    c cVar4 = aVar.f2948d;
                    cVar4.f3016g = typedArray.getFloat(index, cVar4.f3016g);
                    break;
                case 80:
                    b bVar52 = aVar.f2949e;
                    bVar52.f2993n0 = typedArray.getBoolean(index, bVar52.f2993n0);
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    b bVar53 = aVar.f2949e;
                    bVar53.f2995o0 = typedArray.getBoolean(index, bVar53.f2995o0);
                    break;
                case 82:
                    c cVar5 = aVar.f2948d;
                    cVar5.f3012c = typedArray.getInteger(index, cVar5.f3012c);
                    break;
                case 83:
                    e eVar12 = aVar.f2950f;
                    eVar12.f3038i = u(typedArray, index, eVar12.f3038i);
                    break;
                case 84:
                    c cVar6 = aVar.f2948d;
                    cVar6.f3020k = typedArray.getInteger(index, cVar6.f3020k);
                    break;
                case 85:
                    c cVar7 = aVar.f2948d;
                    cVar7.f3019j = typedArray.getFloat(index, cVar7.f3019j);
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2948d.f3023n = typedArray.getResourceId(index, -1);
                        c cVar8 = aVar.f2948d;
                        if (cVar8.f3023n != -1) {
                            cVar8.f3022m = -2;
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2948d.f3021l = typedArray.getString(index);
                        if (aVar.f2948d.f3021l.indexOf("/") > 0) {
                            aVar.f2948d.f3023n = typedArray.getResourceId(index, -1);
                            aVar.f2948d.f3022m = -2;
                            break;
                        } else {
                            aVar.f2948d.f3022m = -1;
                            break;
                        }
                    } else {
                        c cVar9 = aVar.f2948d;
                        cVar9.f3022m = typedArray.getInteger(index, cVar9.f3023n);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2937h.get(index));
                    break;
                case 88:
                case 89:
                case 90:
                default:
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2937h.get(index));
                    break;
                case 91:
                    b bVar54 = aVar.f2949e;
                    bVar54.f3001s = u(typedArray, index, bVar54.f3001s);
                    break;
                case 92:
                    b bVar55 = aVar.f2949e;
                    bVar55.f3002t = u(typedArray, index, bVar55.f3002t);
                    break;
                case 93:
                    b bVar56 = aVar.f2949e;
                    bVar56.N = typedArray.getDimensionPixelSize(index, bVar56.N);
                    break;
                case 94:
                    b bVar57 = aVar.f2949e;
                    bVar57.U = typedArray.getDimensionPixelSize(index, bVar57.U);
                    break;
                case 95:
                    v(aVar.f2949e, typedArray, index, 0);
                    break;
                case 96:
                    v(aVar.f2949e, typedArray, index, 1);
                    break;
                case 97:
                    b bVar58 = aVar.f2949e;
                    bVar58.f2999q0 = typedArray.getInt(index, bVar58.f2999q0);
                    break;
            }
        }
        b bVar59 = aVar.f2949e;
        if (bVar59.f2989l0 != null) {
            bVar59.f2987k0 = null;
        }
    }

    private static void z(a aVar, TypedArray typedArray) {
        int indexCount = typedArray.getIndexCount();
        a.C0028a c0028a = new a.C0028a();
        aVar.f2952h = c0028a;
        aVar.f2948d.f3010a = false;
        aVar.f2949e.f2968b = false;
        aVar.f2947c.f3024a = false;
        aVar.f2950f.f3030a = false;
        for (int i10 = 0; i10 < indexCount; i10++) {
            int index = typedArray.getIndex(i10);
            switch (f2938i.get(index)) {
                case 2:
                    c0028a.b(2, typedArray.getDimensionPixelSize(index, aVar.f2949e.K));
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
                    Log.w("ConstraintSet", "Unknown attribute 0x" + Integer.toHexString(index) + "   " + f2937h.get(index));
                    break;
                case 5:
                    c0028a.c(5, typedArray.getString(index));
                    break;
                case 6:
                    c0028a.b(6, typedArray.getDimensionPixelOffset(index, aVar.f2949e.E));
                    break;
                case 7:
                    c0028a.b(7, typedArray.getDimensionPixelOffset(index, aVar.f2949e.F));
                    break;
                case 8:
                    c0028a.b(8, typedArray.getDimensionPixelSize(index, aVar.f2949e.L));
                    break;
                case 11:
                    c0028a.b(11, typedArray.getDimensionPixelSize(index, aVar.f2949e.R));
                    break;
                case 12:
                    c0028a.b(12, typedArray.getDimensionPixelSize(index, aVar.f2949e.S));
                    break;
                case 13:
                    c0028a.b(13, typedArray.getDimensionPixelSize(index, aVar.f2949e.O));
                    break;
                case 14:
                    c0028a.b(14, typedArray.getDimensionPixelSize(index, aVar.f2949e.Q));
                    break;
                case 15:
                    c0028a.b(15, typedArray.getDimensionPixelSize(index, aVar.f2949e.T));
                    break;
                case 16:
                    c0028a.b(16, typedArray.getDimensionPixelSize(index, aVar.f2949e.P));
                    break;
                case 17:
                    c0028a.b(17, typedArray.getDimensionPixelOffset(index, aVar.f2949e.f2976f));
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    c0028a.b(18, typedArray.getDimensionPixelOffset(index, aVar.f2949e.f2978g));
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    c0028a.a(19, typedArray.getFloat(index, aVar.f2949e.f2980h));
                    break;
                case 20:
                    c0028a.a(20, typedArray.getFloat(index, aVar.f2949e.f3007y));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    c0028a.b(21, typedArray.getLayoutDimension(index, aVar.f2949e.f2974e));
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    c0028a.b(22, f2936g[typedArray.getInt(index, aVar.f2947c.f3025b)]);
                    break;
                case 23:
                    c0028a.b(23, typedArray.getLayoutDimension(index, aVar.f2949e.f2972d));
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    c0028a.b(24, typedArray.getDimensionPixelSize(index, aVar.f2949e.H));
                    break;
                case 27:
                    c0028a.b(27, typedArray.getInt(index, aVar.f2949e.G));
                    break;
                case 28:
                    c0028a.b(28, typedArray.getDimensionPixelSize(index, aVar.f2949e.I));
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    c0028a.b(31, typedArray.getDimensionPixelSize(index, aVar.f2949e.M));
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    c0028a.b(34, typedArray.getDimensionPixelSize(index, aVar.f2949e.J));
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    c0028a.a(37, typedArray.getFloat(index, aVar.f2949e.f3008z));
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    int resourceId = typedArray.getResourceId(index, aVar.f2945a);
                    aVar.f2945a = resourceId;
                    c0028a.b(38, resourceId);
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    c0028a.a(39, typedArray.getFloat(index, aVar.f2949e.W));
                    break;
                case 40:
                    c0028a.a(40, typedArray.getFloat(index, aVar.f2949e.V));
                    break;
                case 41:
                    c0028a.b(41, typedArray.getInt(index, aVar.f2949e.X));
                    break;
                case 42:
                    c0028a.b(42, typedArray.getInt(index, aVar.f2949e.Y));
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    c0028a.a(43, typedArray.getFloat(index, aVar.f2947c.f3027d));
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    c0028a.d(44, true);
                    c0028a.a(44, typedArray.getDimension(index, aVar.f2950f.f3043n));
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    c0028a.a(45, typedArray.getFloat(index, aVar.f2950f.f3032c));
                    break;
                case 46:
                    c0028a.a(46, typedArray.getFloat(index, aVar.f2950f.f3033d));
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    c0028a.a(47, typedArray.getFloat(index, aVar.f2950f.f3034e));
                    break;
                case 48:
                    c0028a.a(48, typedArray.getFloat(index, aVar.f2950f.f3035f));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    c0028a.a(49, typedArray.getDimension(index, aVar.f2950f.f3036g));
                    break;
                case 50:
                    c0028a.a(50, typedArray.getDimension(index, aVar.f2950f.f3037h));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    c0028a.a(51, typedArray.getDimension(index, aVar.f2950f.f3039j));
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    c0028a.a(52, typedArray.getDimension(index, aVar.f2950f.f3040k));
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    c0028a.a(53, typedArray.getDimension(index, aVar.f2950f.f3041l));
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    c0028a.b(54, typedArray.getInt(index, aVar.f2949e.Z));
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    c0028a.b(55, typedArray.getInt(index, aVar.f2949e.f2967a0));
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    c0028a.b(56, typedArray.getDimensionPixelSize(index, aVar.f2949e.f2969b0));
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    c0028a.b(57, typedArray.getDimensionPixelSize(index, aVar.f2949e.f2971c0));
                    break;
                case 58:
                    c0028a.b(58, typedArray.getDimensionPixelSize(index, aVar.f2949e.f2973d0));
                    break;
                case 59:
                    c0028a.b(59, typedArray.getDimensionPixelSize(index, aVar.f2949e.f2975e0));
                    break;
                case 60:
                    c0028a.a(60, typedArray.getFloat(index, aVar.f2950f.f3031b));
                    break;
                case 62:
                    c0028a.b(62, typedArray.getDimensionPixelSize(index, aVar.f2949e.C));
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    c0028a.a(63, typedArray.getFloat(index, aVar.f2949e.D));
                    break;
                case 64:
                    c0028a.b(64, u(typedArray, index, aVar.f2948d.f3011b));
                    break;
                case 65:
                    if (typedArray.peekValue(index).type == 3) {
                        c0028a.c(65, typedArray.getString(index));
                        break;
                    } else {
                        c0028a.c(65, i1.a.f26541c[typedArray.getInteger(index, 0)]);
                        break;
                    }
                case 66:
                    c0028a.b(66, typedArray.getInt(index, 0));
                    break;
                case 67:
                    c0028a.a(67, typedArray.getFloat(index, aVar.f2948d.f3018i));
                    break;
                case 68:
                    c0028a.a(68, typedArray.getFloat(index, aVar.f2947c.f3028e));
                    break;
                case 69:
                    c0028a.a(69, typedArray.getFloat(index, 1.0f));
                    break;
                case 70:
                    c0028a.a(70, typedArray.getFloat(index, 1.0f));
                    break;
                case 71:
                    Log.e("ConstraintSet", "CURRENTLY UNSUPPORTED");
                    break;
                case 72:
                    c0028a.b(72, typedArray.getInt(index, aVar.f2949e.f2981h0));
                    break;
                case 73:
                    c0028a.b(73, typedArray.getDimensionPixelSize(index, aVar.f2949e.f2983i0));
                    break;
                case 74:
                    c0028a.c(74, typedArray.getString(index));
                    break;
                case 75:
                    c0028a.d(75, typedArray.getBoolean(index, aVar.f2949e.f2997p0));
                    break;
                case 76:
                    c0028a.b(76, typedArray.getInt(index, aVar.f2948d.f3014e));
                    break;
                case 77:
                    c0028a.c(77, typedArray.getString(index));
                    break;
                case 78:
                    c0028a.b(78, typedArray.getInt(index, aVar.f2947c.f3026c));
                    break;
                case 79:
                    c0028a.a(79, typedArray.getFloat(index, aVar.f2948d.f3016g));
                    break;
                case 80:
                    c0028a.d(80, typedArray.getBoolean(index, aVar.f2949e.f2993n0));
                    break;
                case BuildConfig.REACT_NATIVE_MINOR_VERSION /* 81 */:
                    c0028a.d(81, typedArray.getBoolean(index, aVar.f2949e.f2995o0));
                    break;
                case 82:
                    c0028a.b(82, typedArray.getInteger(index, aVar.f2948d.f3012c));
                    break;
                case 83:
                    c0028a.b(83, u(typedArray, index, aVar.f2950f.f3038i));
                    break;
                case 84:
                    c0028a.b(84, typedArray.getInteger(index, aVar.f2948d.f3020k));
                    break;
                case 85:
                    c0028a.a(85, typedArray.getFloat(index, aVar.f2948d.f3019j));
                    break;
                case 86:
                    int i11 = typedArray.peekValue(index).type;
                    if (i11 == 1) {
                        aVar.f2948d.f3023n = typedArray.getResourceId(index, -1);
                        c0028a.b(89, aVar.f2948d.f3023n);
                        c cVar = aVar.f2948d;
                        if (cVar.f3023n != -1) {
                            cVar.f3022m = -2;
                            c0028a.b(88, -2);
                            break;
                        } else {
                            break;
                        }
                    } else if (i11 == 3) {
                        aVar.f2948d.f3021l = typedArray.getString(index);
                        c0028a.c(90, aVar.f2948d.f3021l);
                        if (aVar.f2948d.f3021l.indexOf("/") > 0) {
                            aVar.f2948d.f3023n = typedArray.getResourceId(index, -1);
                            c0028a.b(89, aVar.f2948d.f3023n);
                            aVar.f2948d.f3022m = -2;
                            c0028a.b(88, -2);
                            break;
                        } else {
                            aVar.f2948d.f3022m = -1;
                            c0028a.b(88, -1);
                            break;
                        }
                    } else {
                        c cVar2 = aVar.f2948d;
                        cVar2.f3022m = typedArray.getInteger(index, cVar2.f3023n);
                        c0028a.b(88, aVar.f2948d.f3022m);
                        break;
                    }
                case 87:
                    Log.w("ConstraintSet", "unused attribute 0x" + Integer.toHexString(index) + "   " + f2937h.get(index));
                    break;
                case 93:
                    c0028a.b(93, typedArray.getDimensionPixelSize(index, aVar.f2949e.N));
                    break;
                case 94:
                    c0028a.b(94, typedArray.getDimensionPixelSize(index, aVar.f2949e.U));
                    break;
                case 95:
                    v(c0028a, typedArray, index, 0);
                    break;
                case 96:
                    v(c0028a, typedArray, index, 1);
                    break;
                case 97:
                    c0028a.b(97, typedArray.getInt(index, aVar.f2949e.f2999q0));
                    break;
                case 98:
                    if (m1.b.f36823d) {
                        int resourceId2 = typedArray.getResourceId(index, aVar.f2945a);
                        aVar.f2945a = resourceId2;
                        if (resourceId2 == -1) {
                            aVar.f2946b = typedArray.getString(index);
                            break;
                        } else {
                            break;
                        }
                    } else if (typedArray.peekValue(index).type == 3) {
                        aVar.f2946b = typedArray.getString(index);
                        break;
                    } else {
                        aVar.f2945a = typedArray.getResourceId(index, aVar.f2945a);
                        break;
                    }
                case 99:
                    c0028a.d(99, typedArray.getBoolean(index, aVar.f2949e.f2982i));
                    break;
            }
        }
    }

    public void A(int i10, float f10) {
        r(i10).f2949e.f3007y = f10;
    }

    public void B(int i10, float f10) {
        r(i10).f2949e.W = f10;
    }

    public void C(int i10, int i11, int i12) {
        a r10 = r(i10);
        switch (i11) {
            case 1:
                r10.f2949e.H = i12;
                return;
            case 2:
                r10.f2949e.I = i12;
                return;
            case 3:
                r10.f2949e.J = i12;
                return;
            case 4:
                r10.f2949e.K = i12;
                return;
            case 5:
                r10.f2949e.N = i12;
                return;
            case 6:
                r10.f2949e.M = i12;
                return;
            case 7:
                r10.f2949e.L = i12;
                return;
            default:
                throw new IllegalArgumentException("unknown constraint");
        }
    }

    public void D(int i10, float f10) {
        r(i10).f2949e.f3008z = f10;
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
        HashSet hashSet = new HashSet(this.f2944f.keySet());
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            int id2 = childAt.getId();
            if (!this.f2944f.containsKey(Integer.valueOf(id2))) {
                Log.w("ConstraintSet", "id unknown " + m1.a.a(childAt));
            } else if (this.f2943e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            } else {
                if (id2 != -1) {
                    if (this.f2944f.containsKey(Integer.valueOf(id2))) {
                        hashSet.remove(Integer.valueOf(id2));
                        a aVar = (a) this.f2944f.get(Integer.valueOf(id2));
                        if (aVar != null) {
                            if (childAt instanceof Barrier) {
                                aVar.f2949e.f2985j0 = 1;
                                Barrier barrier = (Barrier) childAt;
                                barrier.setId(id2);
                                barrier.setType(aVar.f2949e.f2981h0);
                                barrier.setMargin(aVar.f2949e.f2983i0);
                                barrier.setAllowsGoneWidget(aVar.f2949e.f2997p0);
                                b bVar = aVar.f2949e;
                                int[] iArr = bVar.f2987k0;
                                if (iArr != null) {
                                    barrier.setReferencedIds(iArr);
                                } else {
                                    String str = bVar.f2989l0;
                                    if (str != null) {
                                        bVar.f2987k0 = o(barrier, str);
                                        barrier.setReferencedIds(aVar.f2949e.f2987k0);
                                    }
                                }
                            }
                            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
                            layoutParams.a();
                            aVar.b(layoutParams);
                            if (z10) {
                                androidx.constraintlayout.widget.a.c(childAt, aVar.f2951g);
                            }
                            childAt.setLayoutParams(layoutParams);
                            d dVar = aVar.f2947c;
                            if (dVar.f3026c == 0) {
                                childAt.setVisibility(dVar.f3025b);
                            }
                            childAt.setAlpha(aVar.f2947c.f3027d);
                            childAt.setRotation(aVar.f2950f.f3031b);
                            childAt.setRotationX(aVar.f2950f.f3032c);
                            childAt.setRotationY(aVar.f2950f.f3033d);
                            childAt.setScaleX(aVar.f2950f.f3034e);
                            childAt.setScaleY(aVar.f2950f.f3035f);
                            e eVar = aVar.f2950f;
                            if (eVar.f3038i != -1) {
                                if (((View) childAt.getParent()).findViewById(aVar.f2950f.f3038i) != null) {
                                    float top = (findViewById.getTop() + findViewById.getBottom()) / 2.0f;
                                    float left = (findViewById.getLeft() + findViewById.getRight()) / 2.0f;
                                    if (childAt.getRight() - childAt.getLeft() > 0 && childAt.getBottom() - childAt.getTop() > 0) {
                                        childAt.setPivotX(left - childAt.getLeft());
                                        childAt.setPivotY(top - childAt.getTop());
                                    }
                                }
                            } else {
                                if (!Float.isNaN(eVar.f3036g)) {
                                    childAt.setPivotX(aVar.f2950f.f3036g);
                                }
                                if (!Float.isNaN(aVar.f2950f.f3037h)) {
                                    childAt.setPivotY(aVar.f2950f.f3037h);
                                }
                            }
                            childAt.setTranslationX(aVar.f2950f.f3039j);
                            childAt.setTranslationY(aVar.f2950f.f3040k);
                            childAt.setTranslationZ(aVar.f2950f.f3041l);
                            e eVar2 = aVar.f2950f;
                            if (eVar2.f3042m) {
                                childAt.setElevation(eVar2.f3043n);
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
            a aVar2 = (a) this.f2944f.get(num);
            if (aVar2 != null) {
                if (aVar2.f2949e.f2985j0 == 1) {
                    Barrier barrier2 = new Barrier(constraintLayout.getContext());
                    barrier2.setId(num.intValue());
                    b bVar2 = aVar2.f2949e;
                    int[] iArr2 = bVar2.f2987k0;
                    if (iArr2 != null) {
                        barrier2.setReferencedIds(iArr2);
                    } else {
                        String str2 = bVar2.f2989l0;
                        if (str2 != null) {
                            bVar2.f2987k0 = o(barrier2, str2);
                            barrier2.setReferencedIds(aVar2.f2949e.f2987k0);
                        }
                    }
                    barrier2.setType(aVar2.f2949e.f2981h0);
                    barrier2.setMargin(aVar2.f2949e.f2983i0);
                    ConstraintLayout.LayoutParams generateDefaultLayoutParams = constraintLayout.generateDefaultLayoutParams();
                    barrier2.o();
                    aVar2.b(generateDefaultLayoutParams);
                    constraintLayout.addView(barrier2, generateDefaultLayoutParams);
                }
                if (aVar2.f2949e.f2966a) {
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
        this.f2944f.clear();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = constraintLayout.getChildAt(i10);
            ConstraintLayout.LayoutParams layoutParams = (ConstraintLayout.LayoutParams) childAt.getLayoutParams();
            int id2 = childAt.getId();
            if (this.f2943e && id2 == -1) {
                throw new RuntimeException("All children of ConstraintLayout must have ids to use ConstraintSet");
            }
            if (!this.f2944f.containsKey(Integer.valueOf(id2))) {
                this.f2944f.put(Integer.valueOf(id2), new a());
            }
            a aVar = (a) this.f2944f.get(Integer.valueOf(id2));
            if (aVar != null) {
                aVar.f2951g = androidx.constraintlayout.widget.a.a(this.f2942d, childAt);
                aVar.d(id2, layoutParams);
                aVar.f2947c.f3025b = childAt.getVisibility();
                aVar.f2947c.f3027d = childAt.getAlpha();
                aVar.f2950f.f3031b = childAt.getRotation();
                aVar.f2950f.f3032c = childAt.getRotationX();
                aVar.f2950f.f3033d = childAt.getRotationY();
                aVar.f2950f.f3034e = childAt.getScaleX();
                aVar.f2950f.f3035f = childAt.getScaleY();
                float pivotX = childAt.getPivotX();
                float pivotY = childAt.getPivotY();
                if (pivotX != 0.0d || pivotY != 0.0d) {
                    e eVar = aVar.f2950f;
                    eVar.f3036g = pivotX;
                    eVar.f3037h = pivotY;
                }
                aVar.f2950f.f3039j = childAt.getTranslationX();
                aVar.f2950f.f3040k = childAt.getTranslationY();
                aVar.f2950f.f3041l = childAt.getTranslationZ();
                e eVar2 = aVar.f2950f;
                if (eVar2.f3042m) {
                    eVar2.f3043n = childAt.getElevation();
                }
                if (childAt instanceof Barrier) {
                    Barrier barrier = (Barrier) childAt;
                    aVar.f2949e.f2997p0 = barrier.getAllowsGoneWidget();
                    aVar.f2949e.f2987k0 = barrier.getReferencedIds();
                    aVar.f2949e.f2981h0 = barrier.getType();
                    aVar.f2949e.f2983i0 = barrier.getMargin();
                }
            }
        }
    }

    public void g(int i10, int i11, int i12, int i13) {
        if (!this.f2944f.containsKey(Integer.valueOf(i10))) {
            this.f2944f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2944f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2949e;
                    bVar.f2984j = i12;
                    bVar.f2986k = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2949e;
                    bVar2.f2986k = i12;
                    bVar2.f2984j = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("left to " + E(i13) + " undefined");
                }
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2949e;
                    bVar3.f2988l = i12;
                    bVar3.f2990m = -1;
                    return;
                } else if (i13 == 2) {
                    b bVar4 = aVar.f2949e;
                    bVar4.f2990m = i12;
                    bVar4.f2988l = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2949e;
                    bVar5.f2992n = i12;
                    bVar5.f2994o = -1;
                    bVar5.f3000r = -1;
                    bVar5.f3001s = -1;
                    bVar5.f3002t = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar6 = aVar.f2949e;
                    bVar6.f2994o = i12;
                    bVar6.f2992n = -1;
                    bVar6.f3000r = -1;
                    bVar6.f3001s = -1;
                    bVar6.f3002t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2949e;
                    bVar7.f2998q = i12;
                    bVar7.f2996p = -1;
                    bVar7.f3000r = -1;
                    bVar7.f3001s = -1;
                    bVar7.f3002t = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar8 = aVar.f2949e;
                    bVar8.f2996p = i12;
                    bVar8.f2998q = -1;
                    bVar8.f3000r = -1;
                    bVar8.f3001s = -1;
                    bVar8.f3002t = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2949e;
                    bVar9.f3000r = i12;
                    bVar9.f2998q = -1;
                    bVar9.f2996p = -1;
                    bVar9.f2992n = -1;
                    bVar9.f2994o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2949e;
                    bVar10.f3001s = i12;
                    bVar10.f2998q = -1;
                    bVar10.f2996p = -1;
                    bVar10.f2992n = -1;
                    bVar10.f2994o = -1;
                    return;
                } else if (i13 == 4) {
                    b bVar11 = aVar.f2949e;
                    bVar11.f3002t = i12;
                    bVar11.f2998q = -1;
                    bVar11.f2996p = -1;
                    bVar11.f2992n = -1;
                    bVar11.f2994o = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2949e;
                    bVar12.f3004v = i12;
                    bVar12.f3003u = -1;
                    return;
                } else if (i13 == 7) {
                    b bVar13 = aVar.f2949e;
                    bVar13.f3003u = i12;
                    bVar13.f3004v = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2949e;
                    bVar14.f3006x = i12;
                    bVar14.f3005w = -1;
                    return;
                } else if (i13 == 6) {
                    b bVar15 = aVar.f2949e;
                    bVar15.f3005w = i12;
                    bVar15.f3006x = -1;
                    return;
                } else {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                }
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void h(int i10, int i11, int i12, int i13, int i14) {
        if (!this.f2944f.containsKey(Integer.valueOf(i10))) {
            this.f2944f.put(Integer.valueOf(i10), new a());
        }
        a aVar = (a) this.f2944f.get(Integer.valueOf(i10));
        if (aVar == null) {
            return;
        }
        switch (i11) {
            case 1:
                if (i13 == 1) {
                    b bVar = aVar.f2949e;
                    bVar.f2984j = i12;
                    bVar.f2986k = -1;
                } else if (i13 == 2) {
                    b bVar2 = aVar.f2949e;
                    bVar2.f2986k = i12;
                    bVar2.f2984j = -1;
                } else {
                    throw new IllegalArgumentException("Left to " + E(i13) + " undefined");
                }
                aVar.f2949e.H = i14;
                return;
            case 2:
                if (i13 == 1) {
                    b bVar3 = aVar.f2949e;
                    bVar3.f2988l = i12;
                    bVar3.f2990m = -1;
                } else if (i13 != 2) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar4 = aVar.f2949e;
                    bVar4.f2990m = i12;
                    bVar4.f2988l = -1;
                }
                aVar.f2949e.I = i14;
                return;
            case 3:
                if (i13 == 3) {
                    b bVar5 = aVar.f2949e;
                    bVar5.f2992n = i12;
                    bVar5.f2994o = -1;
                    bVar5.f3000r = -1;
                    bVar5.f3001s = -1;
                    bVar5.f3002t = -1;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar6 = aVar.f2949e;
                    bVar6.f2994o = i12;
                    bVar6.f2992n = -1;
                    bVar6.f3000r = -1;
                    bVar6.f3001s = -1;
                    bVar6.f3002t = -1;
                }
                aVar.f2949e.J = i14;
                return;
            case 4:
                if (i13 == 4) {
                    b bVar7 = aVar.f2949e;
                    bVar7.f2998q = i12;
                    bVar7.f2996p = -1;
                    bVar7.f3000r = -1;
                    bVar7.f3001s = -1;
                    bVar7.f3002t = -1;
                } else if (i13 != 3) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar8 = aVar.f2949e;
                    bVar8.f2996p = i12;
                    bVar8.f2998q = -1;
                    bVar8.f3000r = -1;
                    bVar8.f3001s = -1;
                    bVar8.f3002t = -1;
                }
                aVar.f2949e.K = i14;
                return;
            case 5:
                if (i13 == 5) {
                    b bVar9 = aVar.f2949e;
                    bVar9.f3000r = i12;
                    bVar9.f2998q = -1;
                    bVar9.f2996p = -1;
                    bVar9.f2992n = -1;
                    bVar9.f2994o = -1;
                    return;
                } else if (i13 == 3) {
                    b bVar10 = aVar.f2949e;
                    bVar10.f3001s = i12;
                    bVar10.f2998q = -1;
                    bVar10.f2996p = -1;
                    bVar10.f2992n = -1;
                    bVar10.f2994o = -1;
                    return;
                } else if (i13 != 4) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar11 = aVar.f2949e;
                    bVar11.f3002t = i12;
                    bVar11.f2998q = -1;
                    bVar11.f2996p = -1;
                    bVar11.f2992n = -1;
                    bVar11.f2994o = -1;
                    return;
                }
            case 6:
                if (i13 == 6) {
                    b bVar12 = aVar.f2949e;
                    bVar12.f3004v = i12;
                    bVar12.f3003u = -1;
                } else if (i13 != 7) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar13 = aVar.f2949e;
                    bVar13.f3003u = i12;
                    bVar13.f3004v = -1;
                }
                aVar.f2949e.M = i14;
                return;
            case 7:
                if (i13 == 7) {
                    b bVar14 = aVar.f2949e;
                    bVar14.f3006x = i12;
                    bVar14.f3005w = -1;
                } else if (i13 != 6) {
                    throw new IllegalArgumentException("right to " + E(i13) + " undefined");
                } else {
                    b bVar15 = aVar.f2949e;
                    bVar15.f3005w = i12;
                    bVar15.f3006x = -1;
                }
                aVar.f2949e.L = i14;
                return;
            default:
                throw new IllegalArgumentException(E(i11) + " to " + E(i13) + " unknown");
        }
    }

    public void i(int i10, int i11, int i12, float f10) {
        b bVar = r(i10).f2949e;
        bVar.B = i11;
        bVar.C = i12;
        bVar.D = f10;
    }

    public void j(int i10, int i11) {
        r(i10).f2949e.Z = i11;
    }

    public void k(int i10, int i11) {
        r(i10).f2949e.f2974e = i11;
    }

    public void l(int i10, int i11) {
        r(i10).f2949e.f2972d = i11;
    }

    public void m(int i10, boolean z10) {
        r(i10).f2949e.f2995o0 = z10;
    }

    public void n(int i10, boolean z10) {
        r(i10).f2949e.f2993n0 = z10;
    }

    public void p(int i10, int i11, int i12, int i13, int[] iArr, float[] fArr, int i14) {
        if (iArr.length >= 2) {
            if (fArr != null && fArr.length != iArr.length) {
                throw new IllegalArgumentException("must have 2 or more widgets in a chain");
            }
            if (fArr != null) {
                r(iArr[0]).f2949e.V = fArr[0];
            }
            r(iArr[0]).f2949e.Y = i14;
            h(iArr[0], 3, i10, i11, 0);
            for (int i15 = 1; i15 < iArr.length; i15++) {
                int i16 = i15 - 1;
                h(iArr[i15], 3, iArr[i16], 4, 0);
                h(iArr[i16], 4, iArr[i15], 3, 0);
                if (fArr != null) {
                    r(iArr[i15]).f2949e.V = fArr[i15];
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
                        q10.f2949e.f2966a = true;
                    }
                    this.f2944f.put(Integer.valueOf(q10.f2945a), q10);
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
