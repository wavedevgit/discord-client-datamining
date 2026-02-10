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
    private static boolean f25012g = true;

    /* renamed from: a  reason: collision with root package name */
    private f0 f25013a = null;

    /* renamed from: b  reason: collision with root package name */
    private String f25014b = "";

    /* renamed from: c  reason: collision with root package name */
    private String f25015c = "";

    /* renamed from: d  reason: collision with root package name */
    private float f25016d = 96.0f;

    /* renamed from: e  reason: collision with root package name */
    private b.r f25017e = new b.r();

    /* renamed from: f  reason: collision with root package name */
    private Map f25018f = new HashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f25019a;

        static {
            int[] iArr = new int[d1.values().length];
            f25019a = iArr;
            try {
                iArr[d1.px.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f25019a[d1.em.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f25019a[d1.ex.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f25019a[d1.in.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f25019a[d1.cm.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f25019a[d1.mm.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f25019a[d1.pt.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f25019a[d1.pc.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f25019a[d1.percent.ordinal()] = 9;
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
        List f25020o;

        /* renamed from: p  reason: collision with root package name */
        List f25021p;

        /* renamed from: q  reason: collision with root package name */
        List f25022q;

        /* renamed from: r  reason: collision with root package name */
        List f25023r;

        a1() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b0 extends l {

        /* renamed from: o  reason: collision with root package name */
        p f25028o;

        /* renamed from: p  reason: collision with root package name */
        p f25029p;

        /* renamed from: q  reason: collision with root package name */
        p f25030q;

        /* renamed from: r  reason: collision with root package name */
        p f25031r;

        /* renamed from: s  reason: collision with root package name */
        p f25032s;

        /* renamed from: t  reason: collision with root package name */
        p f25033t;

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
        p f25034a;

        /* renamed from: b  reason: collision with root package name */
        p f25035b;

        /* renamed from: c  reason: collision with root package name */
        p f25036c;

        /* renamed from: d  reason: collision with root package name */
        p f25037d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(p pVar, p pVar2, p pVar3, p pVar4) {
            this.f25034a = pVar;
            this.f25035b = pVar2;
            this.f25036c = pVar3;
            this.f25037d = pVar4;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c1 extends n0 implements x0 {

        /* renamed from: c  reason: collision with root package name */
        String f25038c;

        /* renamed from: d  reason: collision with root package name */
        private b1 f25039d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c1(String str) {
            this.f25038c = str;
        }

        @Override // g6.g.x0
        public b1 d() {
            return this.f25039d;
        }

        public String toString() {
            return "TextChild: '" + this.f25038c + "'";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d extends l {

        /* renamed from: o  reason: collision with root package name */
        p f25040o;

        /* renamed from: p  reason: collision with root package name */
        p f25041p;

        /* renamed from: q  reason: collision with root package name */
        p f25042q;

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
        Boolean f25054p;

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
        long f25055d = 0;

        /* renamed from: e  reason: collision with root package name */
        o0 f25056e;

        /* renamed from: i  reason: collision with root package name */
        a f25057i;

        /* renamed from: o  reason: collision with root package name */
        Float f25058o;

        /* renamed from: p  reason: collision with root package name */
        o0 f25059p;

        /* renamed from: q  reason: collision with root package name */
        Float f25060q;

        /* renamed from: r  reason: collision with root package name */
        p f25061r;

        /* renamed from: s  reason: collision with root package name */
        c f25062s;

        /* renamed from: t  reason: collision with root package name */
        d f25063t;

        /* renamed from: u  reason: collision with root package name */
        Float f25064u;

        /* renamed from: v  reason: collision with root package name */
        p[] f25065v;

        /* renamed from: w  reason: collision with root package name */
        p f25066w;

        /* renamed from: x  reason: collision with root package name */
        Float f25067x;

        /* renamed from: y  reason: collision with root package name */
        f f25068y;

        /* renamed from: z  reason: collision with root package name */
        List f25069z;

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
            e0Var.f25055d = -1L;
            f fVar = f.f25110e;
            e0Var.f25056e = fVar;
            a aVar = a.NonZero;
            e0Var.f25057i = aVar;
            Float valueOf = Float.valueOf(1.0f);
            e0Var.f25058o = valueOf;
            e0Var.f25059p = null;
            e0Var.f25060q = valueOf;
            e0Var.f25061r = new p(1.0f);
            e0Var.f25062s = c.Butt;
            e0Var.f25063t = d.Miter;
            e0Var.f25064u = Float.valueOf(4.0f);
            e0Var.f25065v = null;
            e0Var.f25066w = new p(0.0f);
            e0Var.f25067x = valueOf;
            e0Var.f25068y = fVar;
            e0Var.f25069z = null;
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
            this.f25067x = valueOf;
            this.N = f.f25110e;
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
            p[] pVarArr = this.f25065v;
            if (pVarArr != null) {
                e0Var.f25065v = (p[]) pVarArr.clone();
            }
            return e0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e1 extends m {

        /* renamed from: p  reason: collision with root package name */
        String f25105p;

        /* renamed from: q  reason: collision with root package name */
        p f25106q;

        /* renamed from: r  reason: collision with root package name */
        p f25107r;

        /* renamed from: s  reason: collision with root package name */
        p f25108s;

        /* renamed from: t  reason: collision with root package name */
        p f25109t;

        @Override // g6.g.m, g6.g.n0
        String n() {
            return "use";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class f extends o0 {

        /* renamed from: e  reason: collision with root package name */
        static final f f25110e = new f(-16777216);

        /* renamed from: i  reason: collision with root package name */
        static final f f25111i = new f(0);

        /* renamed from: d  reason: collision with root package name */
        int f25112d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(int i10) {
            this.f25112d = i10;
        }

        public String toString() {
            return String.format("#%08x", Integer.valueOf(this.f25112d));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f0 extends r0 {

        /* renamed from: q  reason: collision with root package name */
        p f25113q;

        /* renamed from: r  reason: collision with root package name */
        p f25114r;

        /* renamed from: s  reason: collision with root package name */
        p f25115s;

        /* renamed from: t  reason: collision with root package name */
        p f25116t;

        /* renamed from: u  reason: collision with root package name */
        public String f25117u;

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
        private static C0342g f25118d = new C0342g();

        private C0342g() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static C0342g a() {
            return f25118d;
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
        List f25119i = new ArrayList();

        /* renamed from: j  reason: collision with root package name */
        Set f25120j = null;

        /* renamed from: k  reason: collision with root package name */
        String f25121k = null;

        /* renamed from: l  reason: collision with root package name */
        Set f25122l = null;

        /* renamed from: m  reason: collision with root package name */
        Set f25123m = null;

        /* renamed from: n  reason: collision with root package name */
        Set f25124n = null;

        h0() {
        }

        @Override // g6.g.g0
        public Set a() {
            return null;
        }

        @Override // g6.g.g0
        public String b() {
            return this.f25121k;
        }

        @Override // g6.g.g0
        public void c(Set set) {
            this.f25124n = set;
        }

        @Override // g6.g.g0
        public void e(Set set) {
            this.f25120j = set;
        }

        @Override // g6.g.g0
        public Set f() {
            return this.f25120j;
        }

        @Override // g6.g.g0
        public void g(Set set) {
            this.f25122l = set;
        }

        @Override // g6.g.j0
        public List getChildren() {
            return this.f25119i;
        }

        @Override // g6.g.g0
        public void h(Set set) {
            this.f25123m = set;
        }

        @Override // g6.g.j0
        public void i(n0 n0Var) {
            this.f25119i.add(n0Var);
        }

        @Override // g6.g.g0
        public void j(String str) {
            this.f25121k = str;
        }

        @Override // g6.g.g0
        public Set l() {
            return this.f25123m;
        }

        @Override // g6.g.g0
        public Set m() {
            return this.f25124n;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class i extends l {

        /* renamed from: o  reason: collision with root package name */
        p f25125o;

        /* renamed from: p  reason: collision with root package name */
        p f25126p;

        /* renamed from: q  reason: collision with root package name */
        p f25127q;

        /* renamed from: r  reason: collision with root package name */
        p f25128r;

        @Override // g6.g.n0
        String n() {
            return "ellipse";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class i0 extends k0 implements g0 {

        /* renamed from: i  reason: collision with root package name */
        Set f25129i = null;

        /* renamed from: j  reason: collision with root package name */
        String f25130j = null;

        /* renamed from: k  reason: collision with root package name */
        Set f25131k = null;

        /* renamed from: l  reason: collision with root package name */
        Set f25132l = null;

        /* renamed from: m  reason: collision with root package name */
        Set f25133m = null;

        i0() {
        }

        @Override // g6.g.g0
        public Set a() {
            return this.f25131k;
        }

        @Override // g6.g.g0
        public String b() {
            return this.f25130j;
        }

        @Override // g6.g.g0
        public void c(Set set) {
            this.f25133m = set;
        }

        @Override // g6.g.g0
        public void e(Set set) {
            this.f25129i = set;
        }

        @Override // g6.g.g0
        public Set f() {
            return this.f25129i;
        }

        @Override // g6.g.g0
        public void g(Set set) {
            this.f25131k = set;
        }

        @Override // g6.g.g0
        public void h(Set set) {
            this.f25132l = set;
        }

        @Override // g6.g.g0
        public void j(String str) {
            this.f25130j = str;
        }

        @Override // g6.g.g0
        public Set l() {
            return this.f25132l;
        }

        @Override // g6.g.g0
        public Set m() {
            return this.f25133m;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class j extends l0 implements j0 {

        /* renamed from: h  reason: collision with root package name */
        List f25134h = new ArrayList();

        /* renamed from: i  reason: collision with root package name */
        Boolean f25135i;

        /* renamed from: j  reason: collision with root package name */
        Matrix f25136j;

        /* renamed from: k  reason: collision with root package name */
        k f25137k;

        /* renamed from: l  reason: collision with root package name */
        String f25138l;

        j() {
        }

        @Override // g6.g.j0
        public List getChildren() {
            return this.f25134h;
        }

        @Override // g6.g.j0
        public void i(n0 n0Var) {
            if (n0Var instanceof d0) {
                this.f25134h.add(n0Var);
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
        b f25143h = null;

        k0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class l extends i0 implements n {

        /* renamed from: n  reason: collision with root package name */
        Matrix f25144n;

        l() {
        }

        @Override // g6.g.n
        public void k(Matrix matrix) {
            this.f25144n = matrix;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class l0 extends n0 {

        /* renamed from: c  reason: collision with root package name */
        String f25145c = null;

        /* renamed from: d  reason: collision with root package name */
        Boolean f25146d = null;

        /* renamed from: e  reason: collision with root package name */
        e0 f25147e = null;

        /* renamed from: f  reason: collision with root package name */
        e0 f25148f = null;

        /* renamed from: g  reason: collision with root package name */
        List f25149g = null;

        l0() {
        }

        public String toString() {
            return n();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m extends h0 implements n {

        /* renamed from: o  reason: collision with root package name */
        Matrix f25150o;

        @Override // g6.g.n
        public void k(Matrix matrix) {
            this.f25150o = matrix;
        }

        @Override // g6.g.n0
        String n() {
            return "group";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m0 extends j {

        /* renamed from: m  reason: collision with root package name */
        p f25151m;

        /* renamed from: n  reason: collision with root package name */
        p f25152n;

        /* renamed from: o  reason: collision with root package name */
        p f25153o;

        /* renamed from: p  reason: collision with root package name */
        p f25154p;

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
        g f25155a;

        /* renamed from: b  reason: collision with root package name */
        j0 f25156b;

        n0() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract String n();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class o extends p0 implements n {

        /* renamed from: p  reason: collision with root package name */
        String f25157p;

        /* renamed from: q  reason: collision with root package name */
        p f25158q;

        /* renamed from: r  reason: collision with root package name */
        p f25159r;

        /* renamed from: s  reason: collision with root package name */
        p f25160s;

        /* renamed from: t  reason: collision with root package name */
        p f25161t;

        /* renamed from: u  reason: collision with root package name */
        Matrix f25162u;

        @Override // g6.g.n
        public void k(Matrix matrix) {
            this.f25162u = matrix;
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
        g6.e f25165o = null;

        p0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class q extends l {

        /* renamed from: o  reason: collision with root package name */
        p f25166o;

        /* renamed from: p  reason: collision with root package name */
        p f25167p;

        /* renamed from: q  reason: collision with root package name */
        p f25168q;

        /* renamed from: r  reason: collision with root package name */
        p f25169r;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "line";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class q0 extends j {

        /* renamed from: m  reason: collision with root package name */
        p f25170m;

        /* renamed from: n  reason: collision with root package name */
        p f25171n;

        /* renamed from: o  reason: collision with root package name */
        p f25172o;

        /* renamed from: p  reason: collision with root package name */
        p f25173p;

        /* renamed from: q  reason: collision with root package name */
        p f25174q;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "radialGradient";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class r extends r0 implements t {

        /* renamed from: q  reason: collision with root package name */
        boolean f25175q;

        /* renamed from: r  reason: collision with root package name */
        p f25176r;

        /* renamed from: s  reason: collision with root package name */
        p f25177s;

        /* renamed from: t  reason: collision with root package name */
        p f25178t;

        /* renamed from: u  reason: collision with root package name */
        p f25179u;

        /* renamed from: v  reason: collision with root package name */
        Float f25180v;

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
        b f25181p;

        r0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class s extends h0 implements t {

        /* renamed from: o  reason: collision with root package name */
        Boolean f25182o;

        /* renamed from: p  reason: collision with root package name */
        Boolean f25183p;

        /* renamed from: q  reason: collision with root package name */
        p f25184q;

        /* renamed from: r  reason: collision with root package name */
        p f25185r;

        /* renamed from: s  reason: collision with root package name */
        p f25186s;

        /* renamed from: t  reason: collision with root package name */
        p f25187t;

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
        String f25188d;

        /* renamed from: e  reason: collision with root package name */
        o0 f25189e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public u(String str, o0 o0Var) {
            this.f25188d = str;
            this.f25189e = o0Var;
        }

        public String toString() {
            return this.f25188d + " " + this.f25189e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class u0 extends y0 implements x0 {

        /* renamed from: o  reason: collision with root package name */
        String f25190o;

        /* renamed from: p  reason: collision with root package name */
        private b1 f25191p;

        @Override // g6.g.x0
        public b1 d() {
            return this.f25191p;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "tref";
        }

        public void o(b1 b1Var) {
            this.f25191p = b1Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class v extends l {

        /* renamed from: o  reason: collision with root package name */
        w f25192o;

        /* renamed from: p  reason: collision with root package name */
        Float f25193p;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "path";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class v0 extends a1 implements x0 {

        /* renamed from: s  reason: collision with root package name */
        private b1 f25194s;

        @Override // g6.g.x0
        public b1 d() {
            return this.f25194s;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "tspan";
        }

        public void o(b1 b1Var) {
            this.f25194s = b1Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class w implements x {

        /* renamed from: b  reason: collision with root package name */
        private int f25196b = 0;

        /* renamed from: d  reason: collision with root package name */
        private int f25198d = 0;

        /* renamed from: a  reason: collision with root package name */
        private byte[] f25195a = new byte[8];

        /* renamed from: c  reason: collision with root package name */
        private float[] f25197c = new float[16];

        private void f(byte b10) {
            int i10 = this.f25196b;
            byte[] bArr = this.f25195a;
            if (i10 == bArr.length) {
                byte[] bArr2 = new byte[bArr.length * 2];
                System.arraycopy(bArr, 0, bArr2, 0, bArr.length);
                this.f25195a = bArr2;
            }
            byte[] bArr3 = this.f25195a;
            int i11 = this.f25196b;
            this.f25196b = i11 + 1;
            bArr3[i11] = b10;
        }

        private void g(int i10) {
            float[] fArr = this.f25197c;
            if (fArr.length < this.f25198d + i10) {
                float[] fArr2 = new float[fArr.length * 2];
                System.arraycopy(fArr, 0, fArr2, 0, fArr.length);
                this.f25197c = fArr2;
            }
        }

        @Override // g6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            f((byte) 3);
            g(4);
            float[] fArr = this.f25197c;
            int i10 = this.f25198d;
            int i11 = i10 + 1;
            this.f25198d = i11;
            fArr[i10] = f10;
            int i12 = i10 + 2;
            this.f25198d = i12;
            fArr[i11] = f11;
            int i13 = i10 + 3;
            this.f25198d = i13;
            fArr[i12] = f12;
            this.f25198d = i10 + 4;
            fArr[i13] = f13;
        }

        @Override // g6.g.x
        public void b(float f10, float f11) {
            f((byte) 0);
            g(2);
            float[] fArr = this.f25197c;
            int i10 = this.f25198d;
            int i11 = i10 + 1;
            this.f25198d = i11;
            fArr[i10] = f10;
            this.f25198d = i10 + 2;
            fArr[i11] = f11;
        }

        @Override // g6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            f((byte) 2);
            g(6);
            float[] fArr = this.f25197c;
            int i10 = this.f25198d;
            int i11 = i10 + 1;
            this.f25198d = i11;
            fArr[i10] = f10;
            int i12 = i10 + 2;
            this.f25198d = i12;
            fArr[i11] = f11;
            int i13 = i10 + 3;
            this.f25198d = i13;
            fArr[i12] = f12;
            int i14 = i10 + 4;
            this.f25198d = i14;
            fArr[i13] = f13;
            int i15 = i10 + 5;
            this.f25198d = i15;
            fArr[i14] = f14;
            this.f25198d = i10 + 6;
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
            float[] fArr = this.f25197c;
            int i11 = this.f25198d;
            int i12 = i11 + 1;
            this.f25198d = i12;
            fArr[i11] = f10;
            int i13 = i11 + 2;
            this.f25198d = i13;
            fArr[i12] = f11;
            int i14 = i11 + 3;
            this.f25198d = i14;
            fArr[i13] = f12;
            int i15 = i11 + 4;
            this.f25198d = i15;
            fArr[i14] = f13;
            this.f25198d = i11 + 5;
            fArr[i15] = f14;
        }

        @Override // g6.g.x
        public void e(float f10, float f11) {
            f((byte) 1);
            g(2);
            float[] fArr = this.f25197c;
            int i10 = this.f25198d;
            int i11 = i10 + 1;
            this.f25198d = i11;
            fArr[i10] = f10;
            this.f25198d = i10 + 2;
            fArr[i11] = f11;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void h(x xVar) {
            boolean z10;
            boolean z11;
            int i10 = 0;
            for (int i11 = 0; i11 < this.f25196b; i11++) {
                byte b10 = this.f25195a[i11];
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
                                    float[] fArr = this.f25197c;
                                    xVar.d(fArr[i10], fArr[i10 + 1], fArr[i10 + 2], z10, z11, fArr[i10 + 3], fArr[i10 + 4]);
                                    i10 += 5;
                                } else {
                                    xVar.close();
                                }
                            } else {
                                float[] fArr2 = this.f25197c;
                                int i12 = i10 + 3;
                                i10 += 4;
                                xVar.a(fArr2[i10], fArr2[i10 + 1], fArr2[i10 + 2], fArr2[i12]);
                            }
                        } else {
                            float[] fArr3 = this.f25197c;
                            xVar.c(fArr3[i10], fArr3[i10 + 1], fArr3[i10 + 2], fArr3[i10 + 3], fArr3[i10 + 4], fArr3[i10 + 5]);
                            i10 += 6;
                        }
                    } else {
                        float[] fArr4 = this.f25197c;
                        int i13 = i10 + 1;
                        float f10 = fArr4[i10];
                        i10 += 2;
                        xVar.e(f10, fArr4[i13]);
                    }
                } else {
                    float[] fArr5 = this.f25197c;
                    int i14 = i10 + 1;
                    float f11 = fArr5[i10];
                    i10 += 2;
                    xVar.b(f11, fArr5[i14]);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean i() {
            if (this.f25196b == 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class w0 extends a1 implements b1, n {

        /* renamed from: s  reason: collision with root package name */
        Matrix f25199s;

        @Override // g6.g.n
        public void k(Matrix matrix) {
            this.f25199s = matrix;
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
        Boolean f25200q;

        /* renamed from: r  reason: collision with root package name */
        Boolean f25201r;

        /* renamed from: s  reason: collision with root package name */
        Matrix f25202s;

        /* renamed from: t  reason: collision with root package name */
        p f25203t;

        /* renamed from: u  reason: collision with root package name */
        p f25204u;

        /* renamed from: v  reason: collision with root package name */
        p f25205v;

        /* renamed from: w  reason: collision with root package name */
        p f25206w;

        /* renamed from: x  reason: collision with root package name */
        String f25207x;

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
                this.f25119i.add(n0Var);
                return;
            }
            throw new g6.j("Text content elements cannot contain " + n0Var + " elements.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class z extends l {

        /* renamed from: o  reason: collision with root package name */
        float[] f25208o;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "polyline";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class z0 extends y0 implements x0 {

        /* renamed from: o  reason: collision with root package name */
        String f25209o;

        /* renamed from: p  reason: collision with root package name */
        p f25210p;

        /* renamed from: q  reason: collision with root package name */
        private b1 f25211q;

        @Override // g6.g.x0
        public b1 d() {
            return this.f25211q;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // g6.g.n0
        public String n() {
            return "textPath";
        }

        public void o(b1 b1Var) {
            this.f25211q = b1Var;
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
        f0 f0Var = this.f25013a;
        p pVar = f0Var.f25115s;
        p pVar2 = f0Var.f25116t;
        if (pVar != null && !pVar.h() && (d1Var = pVar.f25164e) != (d1Var2 = d1.percent) && d1Var != (d1Var3 = d1.em) && d1Var != (d1Var4 = d1.ex)) {
            float b10 = pVar.b(f10);
            if (pVar2 != null) {
                if (!pVar2.h() && (d1Var5 = pVar2.f25164e) != d1Var2 && d1Var5 != d1Var3 && d1Var5 != d1Var4) {
                    f11 = pVar2.b(f10);
                } else {
                    return new b(-1.0f, -1.0f, -1.0f, -1.0f);
                }
            } else {
                b bVar = this.f25013a.f25181p;
                if (bVar != null) {
                    f11 = (bVar.f25027d * b10) / bVar.f25026c;
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
        if (str.equals(l0Var.f25145c)) {
            return l0Var;
        }
        for (n0 n0Var : j0Var.getChildren()) {
            if (n0Var instanceof l0) {
                l0 l0Var2 = (l0) n0Var;
                if (str.equals(l0Var2.f25145c)) {
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
        return new g6.k().z(inputStream, f25012g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(b.r rVar) {
        this.f25017e.b(rVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f25017e.e(b.u.RenderOptions);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List d() {
        return this.f25017e.c();
    }

    public float f() {
        if (this.f25013a != null) {
            return e(this.f25016d).f25027d;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public RectF g() {
        f0 f0Var = this.f25013a;
        if (f0Var != null) {
            b bVar = f0Var.f25181p;
            if (bVar == null) {
                return null;
            }
            return bVar.d();
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public float h() {
        if (this.f25013a != null) {
            return e(this.f25016d).f25026c;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0 j(String str) {
        if (str != null && str.length() != 0) {
            if (str.equals(this.f25013a.f25145c)) {
                return this.f25013a;
            }
            if (this.f25018f.containsKey(str)) {
                return (l0) this.f25018f.get(str);
            }
            l0 i10 = i(this.f25013a, str);
            this.f25018f.put(str, i10);
            return i10;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0 m() {
        return this.f25013a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        return !this.f25017e.d();
    }

    public void o(Canvas canvas, g6.f fVar) {
        if (fVar == null) {
            fVar = new g6.f();
        }
        if (!fVar.g()) {
            fVar.h(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
        }
        new g6.h(canvas, this.f25016d).G0(this, fVar);
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
        this.f25015c = str;
    }

    public void r(String str) {
        f0 f0Var = this.f25013a;
        if (f0Var != null) {
            f0Var.f25116t = g6.k.o0(str);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public void s(float f10, float f11, float f12, float f13) {
        f0 f0Var = this.f25013a;
        if (f0Var != null) {
            f0Var.f25181p = new b(f10, f11, f12, f13);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public void t(String str) {
        f0 f0Var = this.f25013a;
        if (f0Var != null) {
            f0Var.f25115s = g6.k.o0(str);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(f0 f0Var) {
        this.f25013a = f0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(String str) {
        this.f25014b = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class p implements Cloneable {

        /* renamed from: d  reason: collision with root package name */
        float f25163d;

        /* renamed from: e  reason: collision with root package name */
        d1 f25164e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(float f10, d1 d1Var) {
            this.f25163d = f10;
            this.f25164e = d1Var;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float a() {
            return this.f25163d;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float b(float f10) {
            int i10 = a.f25019a[this.f25164e.ordinal()];
            if (i10 != 1) {
                switch (i10) {
                    case 4:
                        return this.f25163d * f10;
                    case 5:
                        return (this.f25163d * f10) / 2.54f;
                    case 6:
                        return (this.f25163d * f10) / 25.4f;
                    case 7:
                        return (this.f25163d * f10) / 72.0f;
                    case 8:
                        return (this.f25163d * f10) / 6.0f;
                    default:
                        return this.f25163d;
                }
            }
            return this.f25163d;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float c(g6.h hVar) {
            if (this.f25164e == d1.percent) {
                b S = hVar.S();
                if (S == null) {
                    return this.f25163d;
                }
                float f10 = S.f25026c;
                float f11 = S.f25027d;
                if (f10 == f11) {
                    return (this.f25163d * f10) / 100.0f;
                }
                return (this.f25163d * ((float) (Math.sqrt((f10 * f10) + (f11 * f11)) / 1.414213562373095d))) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float d(g6.h hVar, float f10) {
            if (this.f25164e == d1.percent) {
                return (this.f25163d * f10) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float e(g6.h hVar) {
            switch (a.f25019a[this.f25164e.ordinal()]) {
                case 1:
                    return this.f25163d;
                case 2:
                    return this.f25163d * hVar.Q();
                case 3:
                    return this.f25163d * hVar.R();
                case 4:
                    return this.f25163d * hVar.T();
                case 5:
                    return (this.f25163d * hVar.T()) / 2.54f;
                case 6:
                    return (this.f25163d * hVar.T()) / 25.4f;
                case 7:
                    return (this.f25163d * hVar.T()) / 72.0f;
                case 8:
                    return (this.f25163d * hVar.T()) / 6.0f;
                case 9:
                    b S = hVar.S();
                    if (S == null) {
                        return this.f25163d;
                    }
                    return (this.f25163d * S.f25026c) / 100.0f;
                default:
                    return this.f25163d;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float f(g6.h hVar) {
            if (this.f25164e == d1.percent) {
                b S = hVar.S();
                if (S == null) {
                    return this.f25163d;
                }
                return (this.f25163d * S.f25027d) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean g() {
            if (this.f25163d < 0.0f) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean h() {
            if (this.f25163d == 0.0f) {
                return true;
            }
            return false;
        }

        public String toString() {
            return String.valueOf(this.f25163d) + this.f25164e;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(float f10) {
            this.f25163d = f10;
            this.f25164e = d1.px;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        float f25024a;

        /* renamed from: b  reason: collision with root package name */
        float f25025b;

        /* renamed from: c  reason: collision with root package name */
        float f25026c;

        /* renamed from: d  reason: collision with root package name */
        float f25027d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(float f10, float f11, float f12, float f13) {
            this.f25024a = f10;
            this.f25025b = f11;
            this.f25026c = f12;
            this.f25027d = f13;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static b a(float f10, float f11, float f12, float f13) {
            return new b(f10, f11, f12 - f10, f13 - f11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float b() {
            return this.f25024a + this.f25026c;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float c() {
            return this.f25025b + this.f25027d;
        }

        RectF d() {
            return new RectF(this.f25024a, this.f25025b, b(), c());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void e(b bVar) {
            float f10 = bVar.f25024a;
            if (f10 < this.f25024a) {
                this.f25024a = f10;
            }
            float f11 = bVar.f25025b;
            if (f11 < this.f25025b) {
                this.f25025b = f11;
            }
            if (bVar.b() > b()) {
                this.f25026c = bVar.b() - this.f25024a;
            }
            if (bVar.c() > c()) {
                this.f25027d = bVar.c() - this.f25025b;
            }
        }

        public String toString() {
            return "[" + this.f25024a + " " + this.f25025b + " " + this.f25026c + " " + this.f25027d + "]";
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(b bVar) {
            this.f25024a = bVar.f25024a;
            this.f25025b = bVar.f25025b;
            this.f25026c = bVar.f25026c;
            this.f25027d = bVar.f25027d;
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
        Float f25043h;

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
