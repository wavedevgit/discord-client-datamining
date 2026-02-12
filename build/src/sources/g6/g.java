package g6;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.RectF;
import com.facebook.react.views.text.ReactFontManager;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import g6.b;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g {

    /* renamed from: g  reason: collision with root package name */
    private static boolean f25013g = true;

    /* renamed from: a  reason: collision with root package name */
    private f0 f25014a = null;

    /* renamed from: b  reason: collision with root package name */
    private String f25015b = "";

    /* renamed from: c  reason: collision with root package name */
    private String f25016c = "";

    /* renamed from: d  reason: collision with root package name */
    private float f25017d = 96.0f;

    /* renamed from: e  reason: collision with root package name */
    private b.r f25018e = new b.r();

    /* renamed from: f  reason: collision with root package name */
    private Map f25019f = new HashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f25020a;

        static {
            int[] iArr = new int[d1.values().length];
            f25020a = iArr;
            try {
                iArr[d1.px.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f25020a[d1.em.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f25020a[d1.ex.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f25020a[d1.in.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f25020a[d1.cm.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f25020a[d1.mm.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f25020a[d1.pt.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f25020a[d1.pc.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f25020a[d1.percent.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a0 extends z {
        @Override // g6.g.z, g6.g.n0
        String n() {
            return "polygon";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class a1 extends y0 {

        /* renamed from: o  reason: collision with root package name */
        List f25021o;

        /* renamed from: p  reason: collision with root package name */
        List f25022p;

        /* renamed from: q  reason: collision with root package name */
        List f25023q;

        /* renamed from: r  reason: collision with root package name */
        List f25024r;

        a1() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b0 extends l {

        /* renamed from: o  reason: collision with root package name */
        p f25029o;

        /* renamed from: p  reason: collision with root package name */
        p f25030p;

        /* renamed from: q  reason: collision with root package name */
        p f25031q;

        /* renamed from: r  reason: collision with root package name */
        p f25032r;

        /* renamed from: s  reason: collision with root package name */
        p f25033s;

        /* renamed from: t  reason: collision with root package name */
        p f25034t;

        @Override // g6.g.n0
        String n() {
            return "rect";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface b1 {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c {

        /* renamed from: a  reason: collision with root package name */
        p f25035a;

        /* renamed from: b  reason: collision with root package name */
        p f25036b;

        /* renamed from: c  reason: collision with root package name */
        p f25037c;

        /* renamed from: d  reason: collision with root package name */
        p f25038d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(p pVar, p pVar2, p pVar3, p pVar4) {
            this.f25035a = pVar;
            this.f25036b = pVar2;
            this.f25037c = pVar3;
            this.f25038d = pVar4;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c1 extends n0 implements x0 {

        /* renamed from: c  reason: collision with root package name */
        String f25039c;

        /* renamed from: d  reason: collision with root package name */
        private b1 f25040d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c1(String str) {
            this.f25039c = str;
        }

        @Override // g6.g.x0
        public b1 d() {
            return this.f25040d;
        }

        public String toString() {
            return "TextChild: '" + this.f25039c + "'";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d extends l {

        /* renamed from: o  reason: collision with root package name */
        p f25041o;

        /* renamed from: p  reason: collision with root package name */
        p f25042p;

        /* renamed from: q  reason: collision with root package name */
        p f25043q;

        @Override // g6.g.n0
        String n() {
            return "circle";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum d1 {
        px,
        em,
        ex,
        in,
        cm,
        mm,
        pt,
        pc,
        percent
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e extends m implements t {

        /* renamed from: p  reason: collision with root package name */
        Boolean f25055p;

        @Override // g6.g.m, g6.g.n0
        String n() {
            return "clipPath";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e0 implements Cloneable {
        p A;
        Integer B;
        b C;
        EnumC0341g D;
        h E;
        f F;
        Boolean G;
        c H;
        String I;
        String J;
        String K;
        Boolean L;
        Boolean M;
        o0 N;
        Float O;
        String P;
        a Q;
        String R;
        o0 S;
        Float T;
        o0 U;
        Float V;
        i W;
        e X;

        /* renamed from: d  reason: collision with root package name */
        long f25056d = 0;

        /* renamed from: e  reason: collision with root package name */
        o0 f25057e;

        /* renamed from: i  reason: collision with root package name */
        a f25058i;

        /* renamed from: o  reason: collision with root package name */
        Float f25059o;

        /* renamed from: p  reason: collision with root package name */
        o0 f25060p;

        /* renamed from: q  reason: collision with root package name */
        Float f25061q;

        /* renamed from: r  reason: collision with root package name */
        p f25062r;

        /* renamed from: s  reason: collision with root package name */
        c f25063s;

        /* renamed from: t  reason: collision with root package name */
        d f25064t;

        /* renamed from: u  reason: collision with root package name */
        Float f25065u;

        /* renamed from: v  reason: collision with root package name */
        p[] f25066v;

        /* renamed from: w  reason: collision with root package name */
        p f25067w;

        /* renamed from: x  reason: collision with root package name */
        Float f25068x;

        /* renamed from: y  reason: collision with root package name */
        f f25069y;

        /* renamed from: z  reason: collision with root package name */
        List f25070z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum a {
            NonZero,
            EvenOdd
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum b {
            Normal,
            Italic,
            Oblique
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum c {
            Butt,
            Round,
            Square
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum d {
            Miter,
            Round,
            Bevel
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum e {
            auto,
            optimizeQuality,
            optimizeSpeed
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum f {
            Start,
            Middle,
            End
        }

        /* renamed from: g6.g$e0$g  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum EnumC0341g {
            None,
            Underline,
            Overline,
            LineThrough,
            Blink
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum h {
            LTR,
            RTL
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum i {
            None,
            NonScalingStroke
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static e0 a() {
            e0 e0Var = new e0();
            e0Var.f25056d = -1L;
            f fVar = f.f25111e;
            e0Var.f25057e = fVar;
            a aVar = a.NonZero;
            e0Var.f25058i = aVar;
            Float valueOf = Float.valueOf(1.0f);
            e0Var.f25059o = valueOf;
            e0Var.f25060p = null;
            e0Var.f25061q = valueOf;
            e0Var.f25062r = new p(1.0f);
            e0Var.f25063s = c.Butt;
            e0Var.f25064t = d.Miter;
            e0Var.f25065u = Float.valueOf(4.0f);
            e0Var.f25066v = null;
            e0Var.f25067w = new p(0.0f);
            e0Var.f25068x = valueOf;
            e0Var.f25069y = fVar;
            e0Var.f25070z = null;
            e0Var.A = new p(12.0f, d1.pt);
            e0Var.B = Integer.valueOf((int) ReactFontManager.TypefaceStyle.NORMAL);
            e0Var.C = b.Normal;
            e0Var.D = EnumC0341g.None;
            e0Var.E = h.LTR;
            e0Var.F = f.Start;
            Boolean bool = Boolean.TRUE;
            e0Var.G = bool;
            e0Var.H = null;
            e0Var.I = null;
            e0Var.J = null;
            e0Var.K = null;
            e0Var.L = bool;
            e0Var.M = bool;
            e0Var.N = fVar;
            e0Var.O = valueOf;
            e0Var.P = null;
            e0Var.Q = aVar;
            e0Var.R = null;
            e0Var.S = null;
            e0Var.T = valueOf;
            e0Var.U = null;
            e0Var.V = valueOf;
            e0Var.W = i.None;
            e0Var.X = e.auto;
            return e0Var;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void b(boolean z10) {
            Float valueOf = Float.valueOf(1.0f);
            Boolean bool = Boolean.TRUE;
            this.L = bool;
            if (!z10) {
                bool = Boolean.FALSE;
            }
            this.G = bool;
            this.H = null;
            this.P = null;
            this.f25068x = valueOf;
            this.N = f.f25111e;
            this.O = valueOf;
            this.R = null;
            this.S = null;
            this.T = valueOf;
            this.U = null;
            this.V = valueOf;
            this.W = i.None;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public Object clone() {
            e0 e0Var = (e0) super.clone();
            p[] pVarArr = this.f25066v;
            if (pVarArr != null) {
                e0Var.f25066v = (p[]) pVarArr.clone();
            }
            return e0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e1 extends m {

        /* renamed from: p  reason: collision with root package name */
        String f25106p;

        /* renamed from: q  reason: collision with root package name */
        p f25107q;

        /* renamed from: r  reason: collision with root package name */
        p f25108r;

        /* renamed from: s  reason: collision with root package name */
        p f25109s;

        /* renamed from: t  reason: collision with root package name */
        p f25110t;

        @Override // g6.g.m, g6.g.n0
        String n() {
            return "use";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class f extends o0 {

        /* renamed from: e  reason: collision with root package name */
        static final f f25111e = new f(-16777216);

        /* renamed from: i  reason: collision with root package name */
        static final f f25112i = new f(0);

        /* renamed from: d  reason: collision with root package name */
        int f25113d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(int i10) {
            this.f25113d = i10;
        }

        public String toString() {
            return String.format("#%08x", Integer.valueOf(this.f25113d));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f0 extends r0 {

        /* renamed from: q  reason: collision with root package name */
        p f25114q;

        /* renamed from: r  reason: collision with root package name */
        p f25115r;

        /* renamed from: s  reason: collision with root package name */
        p f25116s;

        /* renamed from: t  reason: collision with root package name */
        p f25117t;

        /* renamed from: u  reason: collision with root package name */
        public String f25118u;

        @Override // g6.g.n0
        String n() {
            return "svg";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f1 extends r0 implements t {
        @Override // g6.g.n0
        String n() {
            return "view";
        }
    }

    /* renamed from: g6.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class C0342g extends o0 {

        /* renamed from: d  reason: collision with root package name */
        private static C0342g f25119d = new C0342g();

        private C0342g() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static C0342g a() {
            return f25119d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface g0 {
        Set a();

        String b();

        void c(Set set);

        void e(Set set);

        Set f();

        void g(Set set);

        void h(Set set);

        void j(String str);

        Set l();

        Set m();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class h extends m implements t {
        @Override // g6.g.m, g6.g.n0
        String n() {
            return "defs";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class h0 extends k0 implements j0, g0 {

        /* renamed from: i  reason: collision with root package name */
        List f25120i = new ArrayList();

        /* renamed from: j  reason: collision with root package name */
        Set f25121j = null;

        /* renamed from: k  reason: collision with root package name */
        String f25122k = null;

        /* renamed from: l  reason: collision with root package name */
        Set f25123l = null;

        /* renamed from: m  reason: collision with root package name */
        Set f25124m = null;

        /* renamed from: n  reason: collision with root package name */
        Set f25125n = null;

        h0() {
        }

        @Override // g6.g.g0
        public Set a() {
            return null;
        }

        @Override // g6.g.g0
        public String b() {
            return this.f25122k;
        }

        @Override // g6.g.g0
        public void c(Set set) {
            this.f25125n = set;
        }

        @Override // g6.g.g0
        public void e(Set set) {
            this.f25121j = set;
        }

        @Override // g6.g.g0
        public Set f() {
            return this.f25121j;
        }

        @Override // g6.g.g0
        public void g(Set set) {
            this.f25123l = set;
        }

        @Override // g6.g.j0
        public List getChildren() {
            return this.f25120i;
        }

        @Override // g6.g.g0
        public void h(Set set) {
            this.f25124m = set;
        }

        @Override // g6.g.j0
        public void i(n0 n0Var) {
            this.f25120i.add(n0Var);
        }

        @Override // g6.g.g0
        public void j(String str) {
            this.f25122k = str;
        }

        @Override // g6.g.g0
        public Set l() {
            return this.f25124m;
        }

        @Override // g6.g.g0
        public Set m() {
            return this.f25125n;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class i extends l {

        /* renamed from: o  reason: collision with root package name */
        p f25126o;

        /* renamed from: p  reason: collision with root package name */
        p f25127p;

        /* renamed from: q  reason: collision with root package name */
        p f25128q;

        /* renamed from: r  reason: collision with root package name */
        p f25129r;

        @Override // g6.g.n0
        String n() {
            return "ellipse";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class i0 extends k0 implements g0 {

        /* renamed from: i  reason: collision with root package name */
        Set f25130i = null;

        /* renamed from: j  reason: collision with root package name */
        String f25131j = null;

        /* renamed from: k  reason: collision with root package name */
        Set f25132k = null;

        /* renamed from: l  reason: collision with root package name */
        Set f25133l = null;

        /* renamed from: m  reason: collision with root package name */
        Set f25134m = null;

        i0() {
        }

        @Override // g6.g.g0
        public Set a() {
            return this.f25132k;
        }

        @Override // g6.g.g0
        public String b() {
            return this.f25131j;
        }

        @Override // g6.g.g0
        public void c(Set set) {
            this.f25134m = set;
        }

        @Override // g6.g.g0
        public void e(Set set) {
            this.f25130i = set;
        }

        @Override // g6.g.g0
        public Set f() {
            return this.f25130i;
        }

        @Override // g6.g.g0
        public void g(Set set) {
            this.f25132k = set;
        }

        @Override // g6.g.g0
        public void h(Set set) {
            this.f25133l = set;
        }

        @Override // g6.g.g0
        public void j(String str) {
            this.f25131j = str;
        }

        @Override // g6.g.g0
        public Set l() {
            return this.f25133l;
        }

        @Override // g6.g.g0
        public Set m() {
            return this.f25134m;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class j extends l0 implements j0 {

        /* renamed from: h  reason: collision with root package name */
        List f25135h = new ArrayList();

        /* renamed from: i  reason: collision with root package name */
        Boolean f25136i;

        /* renamed from: j  reason: collision with root package name */
        Matrix f25137j;

        /* renamed from: k  reason: collision with root package name */
        k f25138k;

        /* renamed from: l  reason: collision with root package name */
        String f25139l;

        j() {
        }

        @Override // g6.g.j0
        public List getChildren() {
            return this.f25135h;
        }

        @Override // g6.g.j0
        public void i(n0 n0Var) {
            if (n0Var instanceof d0) {
                this.f25135h.add(n0Var);
                return;
            }
            throw new g6.j("Gradient elements cannot contain " + n0Var + " elements.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface j0 {
        List getChildren();

        void i(n0 n0Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    enum k {
        pad,
        reflect,
        repeat
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class k0 extends l0 {

        /* renamed from: h  reason: collision with root package name */
        b f25144h = null;

        k0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class l extends i0 implements n {

        /* renamed from: n  reason: collision with root package name */
        Matrix f25145n;

        l() {
        }

        @Override // g6.g.n
        public void k(Matrix matrix) {
            this.f25145n = matrix;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class l0 extends n0 {

        /* renamed from: c  reason: collision with root package name */
        String f25146c = null;

        /* renamed from: d  reason: collision with root package name */
        Boolean f25147d = null;

        /* renamed from: e  reason: collision with root package name */
        e0 f25148e = null;

        /* renamed from: f  reason: collision with root package name */
        e0 f25149f = null;

        /* renamed from: g  reason: collision with root package name */
        List f25150g = null;

        l0() {
        }

        public String toString() {
            return n();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m extends h0 implements n {

        /* renamed from: o  reason: collision with root package name */
        Matrix f25151o;

        @Override // g6.g.n
        public void k(Matrix matrix) {
            this.f25151o = matrix;
        }

        @Override // g6.g.n0
        String n() {
            return "group";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m0 extends j {

        /* renamed from: m  reason: collision with root package name */
        p f25152m;

        /* renamed from: n  reason: collision with root package name */
        p f25153n;

        /* renamed from: o  reason: collision with root package name */
        p f25154o;

        /* renamed from: p  reason: collision with root package name */
        p f25155p;

        @Override // g6.g.n0
        String n() {
            return "linearGradient";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface n {
        void k(Matrix matrix);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class n0 {

        /* renamed from: a  reason: collision with root package name */
        g f25156a;

        /* renamed from: b  reason: collision with root package name */
        j0 f25157b;

        n0() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract String n();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class o extends p0 implements n {

        /* renamed from: p  reason: collision with root package name */
        String f25158p;

        /* renamed from: q  reason: collision with root package name */
        p f25159q;

        /* renamed from: r  reason: collision with root package name */
        p f25160r;

        /* renamed from: s  reason: collision with root package name */
        p f25161s;

        /* renamed from: t  reason: collision with root package name */
        p f25162t;

        /* renamed from: u  reason: collision with root package name */
        Matrix f25163u;

        @Override // g6.g.n
        public void k(Matrix matrix) {
            this.f25163u = matrix;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "image";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class o0 implements Cloneable {
        o0() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class p0 extends h0 {

        /* renamed from: o  reason: collision with root package name */
        g6.e f25166o = null;

        p0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class q extends l {

        /* renamed from: o  reason: collision with root package name */
        p f25167o;

        /* renamed from: p  reason: collision with root package name */
        p f25168p;

        /* renamed from: q  reason: collision with root package name */
        p f25169q;

        /* renamed from: r  reason: collision with root package name */
        p f25170r;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "line";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class q0 extends j {

        /* renamed from: m  reason: collision with root package name */
        p f25171m;

        /* renamed from: n  reason: collision with root package name */
        p f25172n;

        /* renamed from: o  reason: collision with root package name */
        p f25173o;

        /* renamed from: p  reason: collision with root package name */
        p f25174p;

        /* renamed from: q  reason: collision with root package name */
        p f25175q;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "radialGradient";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class r extends r0 implements t {

        /* renamed from: q  reason: collision with root package name */
        boolean f25176q;

        /* renamed from: r  reason: collision with root package name */
        p f25177r;

        /* renamed from: s  reason: collision with root package name */
        p f25178s;

        /* renamed from: t  reason: collision with root package name */
        p f25179t;

        /* renamed from: u  reason: collision with root package name */
        p f25180u;

        /* renamed from: v  reason: collision with root package name */
        Float f25181v;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "marker";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class r0 extends p0 {

        /* renamed from: p  reason: collision with root package name */
        b f25182p;

        r0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class s extends h0 implements t {

        /* renamed from: o  reason: collision with root package name */
        Boolean f25183o;

        /* renamed from: p  reason: collision with root package name */
        Boolean f25184p;

        /* renamed from: q  reason: collision with root package name */
        p f25185q;

        /* renamed from: r  reason: collision with root package name */
        p f25186r;

        /* renamed from: s  reason: collision with root package name */
        p f25187s;

        /* renamed from: t  reason: collision with root package name */
        p f25188t;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "mask";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class s0 extends m {
        @Override // g6.g.m, g6.g.n0
        String n() {
            return "switch";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface t {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class t0 extends r0 implements t {
        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "symbol";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class u extends o0 {

        /* renamed from: d  reason: collision with root package name */
        String f25189d;

        /* renamed from: e  reason: collision with root package name */
        o0 f25190e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public u(String str, o0 o0Var) {
            this.f25189d = str;
            this.f25190e = o0Var;
        }

        public String toString() {
            return this.f25189d + " " + this.f25190e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class u0 extends y0 implements x0 {

        /* renamed from: o  reason: collision with root package name */
        String f25191o;

        /* renamed from: p  reason: collision with root package name */
        private b1 f25192p;

        @Override // g6.g.x0
        public b1 d() {
            return this.f25192p;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "tref";
        }

        public void o(b1 b1Var) {
            this.f25192p = b1Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class v extends l {

        /* renamed from: o  reason: collision with root package name */
        w f25193o;

        /* renamed from: p  reason: collision with root package name */
        Float f25194p;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "path";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class v0 extends a1 implements x0 {

        /* renamed from: s  reason: collision with root package name */
        private b1 f25195s;

        @Override // g6.g.x0
        public b1 d() {
            return this.f25195s;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "tspan";
        }

        public void o(b1 b1Var) {
            this.f25195s = b1Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class w implements x {

        /* renamed from: b  reason: collision with root package name */
        private int f25197b = 0;

        /* renamed from: d  reason: collision with root package name */
        private int f25199d = 0;

        /* renamed from: a  reason: collision with root package name */
        private byte[] f25196a = new byte[8];

        /* renamed from: c  reason: collision with root package name */
        private float[] f25198c = new float[16];

        private void f(byte b10) {
            int i10 = this.f25197b;
            byte[] bArr = this.f25196a;
            if (i10 == bArr.length) {
                byte[] bArr2 = new byte[bArr.length * 2];
                System.arraycopy(bArr, 0, bArr2, 0, bArr.length);
                this.f25196a = bArr2;
            }
            byte[] bArr3 = this.f25196a;
            int i11 = this.f25197b;
            this.f25197b = i11 + 1;
            bArr3[i11] = b10;
        }

        private void g(int i10) {
            float[] fArr = this.f25198c;
            if (fArr.length < this.f25199d + i10) {
                float[] fArr2 = new float[fArr.length * 2];
                System.arraycopy(fArr, 0, fArr2, 0, fArr.length);
                this.f25198c = fArr2;
            }
        }

        @Override // g6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            f((byte) 3);
            g(4);
            float[] fArr = this.f25198c;
            int i10 = this.f25199d;
            int i11 = i10 + 1;
            this.f25199d = i11;
            fArr[i10] = f10;
            int i12 = i10 + 2;
            this.f25199d = i12;
            fArr[i11] = f11;
            int i13 = i10 + 3;
            this.f25199d = i13;
            fArr[i12] = f12;
            this.f25199d = i10 + 4;
            fArr[i13] = f13;
        }

        @Override // g6.g.x
        public void b(float f10, float f11) {
            f((byte) 0);
            g(2);
            float[] fArr = this.f25198c;
            int i10 = this.f25199d;
            int i11 = i10 + 1;
            this.f25199d = i11;
            fArr[i10] = f10;
            this.f25199d = i10 + 2;
            fArr[i11] = f11;
        }

        @Override // g6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            f((byte) 2);
            g(6);
            float[] fArr = this.f25198c;
            int i10 = this.f25199d;
            int i11 = i10 + 1;
            this.f25199d = i11;
            fArr[i10] = f10;
            int i12 = i10 + 2;
            this.f25199d = i12;
            fArr[i11] = f11;
            int i13 = i10 + 3;
            this.f25199d = i13;
            fArr[i12] = f12;
            int i14 = i10 + 4;
            this.f25199d = i14;
            fArr[i13] = f13;
            int i15 = i10 + 5;
            this.f25199d = i15;
            fArr[i14] = f14;
            this.f25199d = i10 + 6;
            fArr[i15] = f15;
        }

        @Override // g6.g.x
        public void close() {
            f((byte) 8);
        }

        @Override // g6.g.x
        public void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
            int i10;
            if (z10) {
                i10 = 2;
            } else {
                i10 = 0;
            }
            f((byte) (i10 | 4 | (z11 ? 1 : 0)));
            g(5);
            float[] fArr = this.f25198c;
            int i11 = this.f25199d;
            int i12 = i11 + 1;
            this.f25199d = i12;
            fArr[i11] = f10;
            int i13 = i11 + 2;
            this.f25199d = i13;
            fArr[i12] = f11;
            int i14 = i11 + 3;
            this.f25199d = i14;
            fArr[i13] = f12;
            int i15 = i11 + 4;
            this.f25199d = i15;
            fArr[i14] = f13;
            this.f25199d = i11 + 5;
            fArr[i15] = f14;
        }

        @Override // g6.g.x
        public void e(float f10, float f11) {
            f((byte) 1);
            g(2);
            float[] fArr = this.f25198c;
            int i10 = this.f25199d;
            int i11 = i10 + 1;
            this.f25199d = i11;
            fArr[i10] = f10;
            this.f25199d = i10 + 2;
            fArr[i11] = f11;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void h(x xVar) {
            boolean z10;
            boolean z11;
            int i10 = 0;
            for (int i11 = 0; i11 < this.f25197b; i11++) {
                byte b10 = this.f25196a[i11];
                if (b10 != 0) {
                    if (b10 != 1) {
                        if (b10 != 2) {
                            if (b10 != 3) {
                                if (b10 != 8) {
                                    if ((b10 & 2) != 0) {
                                        z10 = true;
                                    } else {
                                        z10 = false;
                                    }
                                    if ((b10 & 1) != 0) {
                                        z11 = true;
                                    } else {
                                        z11 = false;
                                    }
                                    float[] fArr = this.f25198c;
                                    xVar.d(fArr[i10], fArr[i10 + 1], fArr[i10 + 2], z10, z11, fArr[i10 + 3], fArr[i10 + 4]);
                                    i10 += 5;
                                } else {
                                    xVar.close();
                                }
                            } else {
                                float[] fArr2 = this.f25198c;
                                int i12 = i10 + 3;
                                i10 += 4;
                                xVar.a(fArr2[i10], fArr2[i10 + 1], fArr2[i10 + 2], fArr2[i12]);
                            }
                        } else {
                            float[] fArr3 = this.f25198c;
                            xVar.c(fArr3[i10], fArr3[i10 + 1], fArr3[i10 + 2], fArr3[i10 + 3], fArr3[i10 + 4], fArr3[i10 + 5]);
                            i10 += 6;
                        }
                    } else {
                        float[] fArr4 = this.f25198c;
                        int i13 = i10 + 1;
                        float f10 = fArr4[i10];
                        i10 += 2;
                        xVar.e(f10, fArr4[i13]);
                    }
                } else {
                    float[] fArr5 = this.f25198c;
                    int i14 = i10 + 1;
                    float f11 = fArr5[i10];
                    i10 += 2;
                    xVar.b(f11, fArr5[i14]);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean i() {
            if (this.f25197b == 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class w0 extends a1 implements b1, n {

        /* renamed from: s  reason: collision with root package name */
        Matrix f25200s;

        @Override // g6.g.n
        public void k(Matrix matrix) {
            this.f25200s = matrix;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "text";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface x {
        void a(float f10, float f11, float f12, float f13);

        void b(float f10, float f11);

        void c(float f10, float f11, float f12, float f13, float f14, float f15);

        void close();

        void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14);

        void e(float f10, float f11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface x0 {
        b1 d();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class y extends r0 implements t {

        /* renamed from: q  reason: collision with root package name */
        Boolean f25201q;

        /* renamed from: r  reason: collision with root package name */
        Boolean f25202r;

        /* renamed from: s  reason: collision with root package name */
        Matrix f25203s;

        /* renamed from: t  reason: collision with root package name */
        p f25204t;

        /* renamed from: u  reason: collision with root package name */
        p f25205u;

        /* renamed from: v  reason: collision with root package name */
        p f25206v;

        /* renamed from: w  reason: collision with root package name */
        p f25207w;

        /* renamed from: x  reason: collision with root package name */
        String f25208x;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "pattern";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class y0 extends h0 {
        y0() {
        }

        @Override // g6.g.h0, g6.g.j0
        public void i(n0 n0Var) {
            if (n0Var instanceof x0) {
                this.f25120i.add(n0Var);
                return;
            }
            throw new g6.j("Text content elements cannot contain " + n0Var + " elements.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class z extends l {

        /* renamed from: o  reason: collision with root package name */
        float[] f25209o;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "polyline";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class z0 extends y0 implements x0 {

        /* renamed from: o  reason: collision with root package name */
        String f25210o;

        /* renamed from: p  reason: collision with root package name */
        p f25211p;

        /* renamed from: q  reason: collision with root package name */
        private b1 f25212q;

        @Override // g6.g.x0
        public b1 d() {
            return this.f25212q;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "textPath";
        }

        public void o(b1 b1Var) {
            this.f25212q = b1Var;
        }
    }

    private String c(String str) {
        if (str.startsWith("\"") && str.endsWith("\"")) {
            str = str.substring(1, str.length() - 1).replace("\\\"", "\"");
        } else if (str.startsWith("'") && str.endsWith("'")) {
            str = str.substring(1, str.length() - 1).replace("\\'", "'");
        }
        return str.replace("\\\n", "").replace("\\A", ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
    }

    private b e(float f10) {
        d1 d1Var;
        d1 d1Var2;
        d1 d1Var3;
        d1 d1Var4;
        float f11;
        d1 d1Var5;
        f0 f0Var = this.f25014a;
        p pVar = f0Var.f25116s;
        p pVar2 = f0Var.f25117t;
        if (pVar != null && !pVar.h() && (d1Var = pVar.f25165e) != (d1Var2 = d1.percent) && d1Var != (d1Var3 = d1.em) && d1Var != (d1Var4 = d1.ex)) {
            float b10 = pVar.b(f10);
            if (pVar2 != null) {
                if (!pVar2.h() && (d1Var5 = pVar2.f25165e) != d1Var2 && d1Var5 != d1Var3 && d1Var5 != d1Var4) {
                    f11 = pVar2.b(f10);
                } else {
                    return new b(-1.0f, -1.0f, -1.0f, -1.0f);
                }
            } else {
                b bVar = this.f25014a.f25182p;
                if (bVar != null) {
                    f11 = (bVar.f25028d * b10) / bVar.f25027c;
                } else {
                    f11 = b10;
                }
            }
            return new b(0.0f, 0.0f, b10, f11);
        }
        return new b(-1.0f, -1.0f, -1.0f, -1.0f);
    }

    private l0 i(j0 j0Var, String str) {
        l0 i10;
        l0 l0Var = (l0) j0Var;
        if (str.equals(l0Var.f25146c)) {
            return l0Var;
        }
        for (n0 n0Var : j0Var.getChildren()) {
            if (n0Var instanceof l0) {
                l0 l0Var2 = (l0) n0Var;
                if (str.equals(l0Var2.f25146c)) {
                    return l0Var2;
                }
                if ((n0Var instanceof j0) && (i10 = i((j0) n0Var, str)) != null) {
                    return i10;
                }
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g6.i k() {
        return null;
    }

    public static g l(InputStream inputStream) {
        return new g6.k().z(inputStream, f25013g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(b.r rVar) {
        this.f25018e.b(rVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f25018e.e(b.u.RenderOptions);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List d() {
        return this.f25018e.c();
    }

    public float f() {
        if (this.f25014a != null) {
            return e(this.f25017d).f25028d;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public RectF g() {
        f0 f0Var = this.f25014a;
        if (f0Var != null) {
            b bVar = f0Var.f25182p;
            if (bVar == null) {
                return null;
            }
            return bVar.d();
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public float h() {
        if (this.f25014a != null) {
            return e(this.f25017d).f25027c;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0 j(String str) {
        if (str != null && str.length() != 0) {
            if (str.equals(this.f25014a.f25146c)) {
                return this.f25014a;
            }
            if (this.f25019f.containsKey(str)) {
                return (l0) this.f25019f.get(str);
            }
            l0 i10 = i(this.f25014a, str);
            this.f25019f.put(str, i10);
            return i10;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0 m() {
        return this.f25014a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        return !this.f25018e.d();
    }

    public void o(Canvas canvas, g6.f fVar) {
        if (fVar == null) {
            fVar = new g6.f();
        }
        if (!fVar.g()) {
            fVar.h(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
        }
        new g6.h(canvas, this.f25017d).G0(this, fVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n0 p(String str) {
        if (str == null) {
            return null;
        }
        String c10 = c(str);
        if (c10.length() <= 1 || !c10.startsWith("#")) {
            return null;
        }
        return j(c10.substring(1));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(String str) {
        this.f25016c = str;
    }

    public void r(String str) {
        f0 f0Var = this.f25014a;
        if (f0Var != null) {
            f0Var.f25117t = g6.k.o0(str);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public void s(float f10, float f11, float f12, float f13) {
        f0 f0Var = this.f25014a;
        if (f0Var != null) {
            f0Var.f25182p = new b(f10, f11, f12, f13);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public void t(String str) {
        f0 f0Var = this.f25014a;
        if (f0Var != null) {
            f0Var.f25116s = g6.k.o0(str);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(f0 f0Var) {
        this.f25014a = f0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(String str) {
        this.f25015b = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class p implements Cloneable {

        /* renamed from: d  reason: collision with root package name */
        float f25164d;

        /* renamed from: e  reason: collision with root package name */
        d1 f25165e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(float f10, d1 d1Var) {
            this.f25164d = f10;
            this.f25165e = d1Var;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float a() {
            return this.f25164d;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float b(float f10) {
            int i10 = a.f25020a[this.f25165e.ordinal()];
            if (i10 != 1) {
                switch (i10) {
                    case 4:
                        return this.f25164d * f10;
                    case 5:
                        return (this.f25164d * f10) / 2.54f;
                    case 6:
                        return (this.f25164d * f10) / 25.4f;
                    case 7:
                        return (this.f25164d * f10) / 72.0f;
                    case 8:
                        return (this.f25164d * f10) / 6.0f;
                    default:
                        return this.f25164d;
                }
            }
            return this.f25164d;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float c(g6.h hVar) {
            if (this.f25165e == d1.percent) {
                b S = hVar.S();
                if (S == null) {
                    return this.f25164d;
                }
                float f10 = S.f25027c;
                float f11 = S.f25028d;
                if (f10 == f11) {
                    return (this.f25164d * f10) / 100.0f;
                }
                return (this.f25164d * ((float) (Math.sqrt((f10 * f10) + (f11 * f11)) / 1.414213562373095d))) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float d(g6.h hVar, float f10) {
            if (this.f25165e == d1.percent) {
                return (this.f25164d * f10) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float e(g6.h hVar) {
            switch (a.f25020a[this.f25165e.ordinal()]) {
                case 1:
                    return this.f25164d;
                case 2:
                    return this.f25164d * hVar.Q();
                case 3:
                    return this.f25164d * hVar.R();
                case 4:
                    return this.f25164d * hVar.T();
                case 5:
                    return (this.f25164d * hVar.T()) / 2.54f;
                case 6:
                    return (this.f25164d * hVar.T()) / 25.4f;
                case 7:
                    return (this.f25164d * hVar.T()) / 72.0f;
                case 8:
                    return (this.f25164d * hVar.T()) / 6.0f;
                case 9:
                    b S = hVar.S();
                    if (S == null) {
                        return this.f25164d;
                    }
                    return (this.f25164d * S.f25027c) / 100.0f;
                default:
                    return this.f25164d;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float f(g6.h hVar) {
            if (this.f25165e == d1.percent) {
                b S = hVar.S();
                if (S == null) {
                    return this.f25164d;
                }
                return (this.f25164d * S.f25028d) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean g() {
            if (this.f25164d < 0.0f) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean h() {
            if (this.f25164d == 0.0f) {
                return true;
            }
            return false;
        }

        public String toString() {
            return String.valueOf(this.f25164d) + this.f25165e;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(float f10) {
            this.f25164d = f10;
            this.f25165e = d1.px;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        float f25025a;

        /* renamed from: b  reason: collision with root package name */
        float f25026b;

        /* renamed from: c  reason: collision with root package name */
        float f25027c;

        /* renamed from: d  reason: collision with root package name */
        float f25028d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(float f10, float f11, float f12, float f13) {
            this.f25025a = f10;
            this.f25026b = f11;
            this.f25027c = f12;
            this.f25028d = f13;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static b a(float f10, float f11, float f12, float f13) {
            return new b(f10, f11, f12 - f10, f13 - f11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float b() {
            return this.f25025a + this.f25027c;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float c() {
            return this.f25026b + this.f25028d;
        }

        RectF d() {
            return new RectF(this.f25025a, this.f25026b, b(), c());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void e(b bVar) {
            float f10 = bVar.f25025a;
            if (f10 < this.f25025a) {
                this.f25025a = f10;
            }
            float f11 = bVar.f25026b;
            if (f11 < this.f25026b) {
                this.f25026b = f11;
            }
            if (bVar.b() > b()) {
                this.f25027c = bVar.b() - this.f25025a;
            }
            if (bVar.c() > c()) {
                this.f25028d = bVar.c() - this.f25026b;
            }
        }

        public String toString() {
            return "[" + this.f25025a + " " + this.f25026b + " " + this.f25027c + " " + this.f25028d + "]";
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(b bVar) {
            this.f25025a = bVar.f25025a;
            this.f25026b = bVar.f25026b;
            this.f25027c = bVar.f25027c;
            this.f25028d = bVar.f25028d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c0 extends l0 implements j0 {
        @Override // g6.g.j0
        public List getChildren() {
            return Collections.EMPTY_LIST;
        }

        @Override // g6.g.n0
        String n() {
            return "solidColor";
        }

        @Override // g6.g.j0
        public void i(n0 n0Var) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d0 extends l0 implements j0 {

        /* renamed from: h  reason: collision with root package name */
        Float f25044h;

        @Override // g6.g.j0
        public List getChildren() {
            return Collections.EMPTY_LIST;
        }

        @Override // g6.g.n0
        String n() {
            return "stop";
        }

        @Override // g6.g.j0
        public void i(n0 n0Var) {
        }
    }
}
