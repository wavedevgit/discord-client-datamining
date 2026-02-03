package f6;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.RectF;
import com.facebook.react.views.text.ReactFontManager;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import f6.b;
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
    private static boolean f23709g = true;

    /* renamed from: a  reason: collision with root package name */
    private f0 f23710a = null;

    /* renamed from: b  reason: collision with root package name */
    private String f23711b = "";

    /* renamed from: c  reason: collision with root package name */
    private String f23712c = "";

    /* renamed from: d  reason: collision with root package name */
    private float f23713d = 96.0f;

    /* renamed from: e  reason: collision with root package name */
    private b.r f23714e = new b.r();

    /* renamed from: f  reason: collision with root package name */
    private Map f23715f = new HashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f23716a;

        static {
            int[] iArr = new int[d1.values().length];
            f23716a = iArr;
            try {
                iArr[d1.px.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f23716a[d1.em.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f23716a[d1.ex.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f23716a[d1.in.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f23716a[d1.cm.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f23716a[d1.mm.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f23716a[d1.pt.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f23716a[d1.pc.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f23716a[d1.percent.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a0 extends z {
        @Override // f6.g.z, f6.g.n0
        String n() {
            return "polygon";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class a1 extends y0 {

        /* renamed from: o  reason: collision with root package name */
        List f23717o;

        /* renamed from: p  reason: collision with root package name */
        List f23718p;

        /* renamed from: q  reason: collision with root package name */
        List f23719q;

        /* renamed from: r  reason: collision with root package name */
        List f23720r;

        a1() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b0 extends l {

        /* renamed from: o  reason: collision with root package name */
        p f23725o;

        /* renamed from: p  reason: collision with root package name */
        p f23726p;

        /* renamed from: q  reason: collision with root package name */
        p f23727q;

        /* renamed from: r  reason: collision with root package name */
        p f23728r;

        /* renamed from: s  reason: collision with root package name */
        p f23729s;

        /* renamed from: t  reason: collision with root package name */
        p f23730t;

        @Override // f6.g.n0
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
        p f23731a;

        /* renamed from: b  reason: collision with root package name */
        p f23732b;

        /* renamed from: c  reason: collision with root package name */
        p f23733c;

        /* renamed from: d  reason: collision with root package name */
        p f23734d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(p pVar, p pVar2, p pVar3, p pVar4) {
            this.f23731a = pVar;
            this.f23732b = pVar2;
            this.f23733c = pVar3;
            this.f23734d = pVar4;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c1 extends n0 implements x0 {

        /* renamed from: c  reason: collision with root package name */
        String f23735c;

        /* renamed from: d  reason: collision with root package name */
        private b1 f23736d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c1(String str) {
            this.f23735c = str;
        }

        @Override // f6.g.x0
        public b1 d() {
            return this.f23736d;
        }

        public String toString() {
            return "TextChild: '" + this.f23735c + "'";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d extends l {

        /* renamed from: o  reason: collision with root package name */
        p f23737o;

        /* renamed from: p  reason: collision with root package name */
        p f23738p;

        /* renamed from: q  reason: collision with root package name */
        p f23739q;

        @Override // f6.g.n0
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
        Boolean f23751p;

        @Override // f6.g.m, f6.g.n0
        String n() {
            return "clipPath";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e0 implements Cloneable {
        p A;
        Integer B;
        b C;
        EnumC0314g D;
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
        long f23752d = 0;

        /* renamed from: e  reason: collision with root package name */
        o0 f23753e;

        /* renamed from: i  reason: collision with root package name */
        a f23754i;

        /* renamed from: o  reason: collision with root package name */
        Float f23755o;

        /* renamed from: p  reason: collision with root package name */
        o0 f23756p;

        /* renamed from: q  reason: collision with root package name */
        Float f23757q;

        /* renamed from: r  reason: collision with root package name */
        p f23758r;

        /* renamed from: s  reason: collision with root package name */
        c f23759s;

        /* renamed from: t  reason: collision with root package name */
        d f23760t;

        /* renamed from: u  reason: collision with root package name */
        Float f23761u;

        /* renamed from: v  reason: collision with root package name */
        p[] f23762v;

        /* renamed from: w  reason: collision with root package name */
        p f23763w;

        /* renamed from: x  reason: collision with root package name */
        Float f23764x;

        /* renamed from: y  reason: collision with root package name */
        f f23765y;

        /* renamed from: z  reason: collision with root package name */
        List f23766z;

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

        /* renamed from: f6.g$e0$g  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum EnumC0314g {
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
            e0Var.f23752d = -1L;
            f fVar = f.f23807e;
            e0Var.f23753e = fVar;
            a aVar = a.NonZero;
            e0Var.f23754i = aVar;
            Float valueOf = Float.valueOf(1.0f);
            e0Var.f23755o = valueOf;
            e0Var.f23756p = null;
            e0Var.f23757q = valueOf;
            e0Var.f23758r = new p(1.0f);
            e0Var.f23759s = c.Butt;
            e0Var.f23760t = d.Miter;
            e0Var.f23761u = Float.valueOf(4.0f);
            e0Var.f23762v = null;
            e0Var.f23763w = new p(0.0f);
            e0Var.f23764x = valueOf;
            e0Var.f23765y = fVar;
            e0Var.f23766z = null;
            e0Var.A = new p(12.0f, d1.pt);
            e0Var.B = Integer.valueOf((int) ReactFontManager.TypefaceStyle.NORMAL);
            e0Var.C = b.Normal;
            e0Var.D = EnumC0314g.None;
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
            this.f23764x = valueOf;
            this.N = f.f23807e;
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
            p[] pVarArr = this.f23762v;
            if (pVarArr != null) {
                e0Var.f23762v = (p[]) pVarArr.clone();
            }
            return e0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e1 extends m {

        /* renamed from: p  reason: collision with root package name */
        String f23802p;

        /* renamed from: q  reason: collision with root package name */
        p f23803q;

        /* renamed from: r  reason: collision with root package name */
        p f23804r;

        /* renamed from: s  reason: collision with root package name */
        p f23805s;

        /* renamed from: t  reason: collision with root package name */
        p f23806t;

        @Override // f6.g.m, f6.g.n0
        String n() {
            return "use";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class f extends o0 {

        /* renamed from: e  reason: collision with root package name */
        static final f f23807e = new f(-16777216);

        /* renamed from: i  reason: collision with root package name */
        static final f f23808i = new f(0);

        /* renamed from: d  reason: collision with root package name */
        int f23809d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(int i10) {
            this.f23809d = i10;
        }

        public String toString() {
            return String.format("#%08x", Integer.valueOf(this.f23809d));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f0 extends r0 {

        /* renamed from: q  reason: collision with root package name */
        p f23810q;

        /* renamed from: r  reason: collision with root package name */
        p f23811r;

        /* renamed from: s  reason: collision with root package name */
        p f23812s;

        /* renamed from: t  reason: collision with root package name */
        p f23813t;

        /* renamed from: u  reason: collision with root package name */
        public String f23814u;

        @Override // f6.g.n0
        String n() {
            return "svg";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f1 extends r0 implements t {
        @Override // f6.g.n0
        String n() {
            return "view";
        }
    }

    /* renamed from: f6.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class C0315g extends o0 {

        /* renamed from: d  reason: collision with root package name */
        private static C0315g f23815d = new C0315g();

        private C0315g() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static C0315g a() {
            return f23815d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface g0 {
        Set a();

        String b();

        void c(Set set);

        void e(Set set);

        Set f();

        void h(Set set);

        void i(Set set);

        void j(String str);

        Set l();

        Set m();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class h extends m implements t {
        @Override // f6.g.m, f6.g.n0
        String n() {
            return "defs";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class h0 extends k0 implements j0, g0 {

        /* renamed from: i  reason: collision with root package name */
        List f23816i = new ArrayList();

        /* renamed from: j  reason: collision with root package name */
        Set f23817j = null;

        /* renamed from: k  reason: collision with root package name */
        String f23818k = null;

        /* renamed from: l  reason: collision with root package name */
        Set f23819l = null;

        /* renamed from: m  reason: collision with root package name */
        Set f23820m = null;

        /* renamed from: n  reason: collision with root package name */
        Set f23821n = null;

        h0() {
        }

        @Override // f6.g.g0
        public Set a() {
            return null;
        }

        @Override // f6.g.g0
        public String b() {
            return this.f23818k;
        }

        @Override // f6.g.g0
        public void c(Set set) {
            this.f23821n = set;
        }

        @Override // f6.g.g0
        public void e(Set set) {
            this.f23817j = set;
        }

        @Override // f6.g.g0
        public Set f() {
            return this.f23817j;
        }

        @Override // f6.g.j0
        public void g(n0 n0Var) {
            this.f23816i.add(n0Var);
        }

        @Override // f6.g.j0
        public List getChildren() {
            return this.f23816i;
        }

        @Override // f6.g.g0
        public void h(Set set) {
            this.f23819l = set;
        }

        @Override // f6.g.g0
        public void i(Set set) {
            this.f23820m = set;
        }

        @Override // f6.g.g0
        public void j(String str) {
            this.f23818k = str;
        }

        @Override // f6.g.g0
        public Set l() {
            return this.f23820m;
        }

        @Override // f6.g.g0
        public Set m() {
            return this.f23821n;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class i extends l {

        /* renamed from: o  reason: collision with root package name */
        p f23822o;

        /* renamed from: p  reason: collision with root package name */
        p f23823p;

        /* renamed from: q  reason: collision with root package name */
        p f23824q;

        /* renamed from: r  reason: collision with root package name */
        p f23825r;

        @Override // f6.g.n0
        String n() {
            return "ellipse";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class i0 extends k0 implements g0 {

        /* renamed from: i  reason: collision with root package name */
        Set f23826i = null;

        /* renamed from: j  reason: collision with root package name */
        String f23827j = null;

        /* renamed from: k  reason: collision with root package name */
        Set f23828k = null;

        /* renamed from: l  reason: collision with root package name */
        Set f23829l = null;

        /* renamed from: m  reason: collision with root package name */
        Set f23830m = null;

        i0() {
        }

        @Override // f6.g.g0
        public Set a() {
            return this.f23828k;
        }

        @Override // f6.g.g0
        public String b() {
            return this.f23827j;
        }

        @Override // f6.g.g0
        public void c(Set set) {
            this.f23830m = set;
        }

        @Override // f6.g.g0
        public void e(Set set) {
            this.f23826i = set;
        }

        @Override // f6.g.g0
        public Set f() {
            return this.f23826i;
        }

        @Override // f6.g.g0
        public void h(Set set) {
            this.f23828k = set;
        }

        @Override // f6.g.g0
        public void i(Set set) {
            this.f23829l = set;
        }

        @Override // f6.g.g0
        public void j(String str) {
            this.f23827j = str;
        }

        @Override // f6.g.g0
        public Set l() {
            return this.f23829l;
        }

        @Override // f6.g.g0
        public Set m() {
            return this.f23830m;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class j extends l0 implements j0 {

        /* renamed from: h  reason: collision with root package name */
        List f23831h = new ArrayList();

        /* renamed from: i  reason: collision with root package name */
        Boolean f23832i;

        /* renamed from: j  reason: collision with root package name */
        Matrix f23833j;

        /* renamed from: k  reason: collision with root package name */
        k f23834k;

        /* renamed from: l  reason: collision with root package name */
        String f23835l;

        j() {
        }

        @Override // f6.g.j0
        public void g(n0 n0Var) {
            if (n0Var instanceof d0) {
                this.f23831h.add(n0Var);
                return;
            }
            throw new f6.j("Gradient elements cannot contain " + n0Var + " elements.");
        }

        @Override // f6.g.j0
        public List getChildren() {
            return this.f23831h;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface j0 {
        void g(n0 n0Var);

        List getChildren();
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
        b f23840h = null;

        k0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class l extends i0 implements n {

        /* renamed from: n  reason: collision with root package name */
        Matrix f23841n;

        l() {
        }

        @Override // f6.g.n
        public void k(Matrix matrix) {
            this.f23841n = matrix;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class l0 extends n0 {

        /* renamed from: c  reason: collision with root package name */
        String f23842c = null;

        /* renamed from: d  reason: collision with root package name */
        Boolean f23843d = null;

        /* renamed from: e  reason: collision with root package name */
        e0 f23844e = null;

        /* renamed from: f  reason: collision with root package name */
        e0 f23845f = null;

        /* renamed from: g  reason: collision with root package name */
        List f23846g = null;

        l0() {
        }

        public String toString() {
            return n();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m extends h0 implements n {

        /* renamed from: o  reason: collision with root package name */
        Matrix f23847o;

        @Override // f6.g.n
        public void k(Matrix matrix) {
            this.f23847o = matrix;
        }

        @Override // f6.g.n0
        String n() {
            return "group";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m0 extends j {

        /* renamed from: m  reason: collision with root package name */
        p f23848m;

        /* renamed from: n  reason: collision with root package name */
        p f23849n;

        /* renamed from: o  reason: collision with root package name */
        p f23850o;

        /* renamed from: p  reason: collision with root package name */
        p f23851p;

        @Override // f6.g.n0
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
        g f23852a;

        /* renamed from: b  reason: collision with root package name */
        j0 f23853b;

        n0() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract String n();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class o extends p0 implements n {

        /* renamed from: p  reason: collision with root package name */
        String f23854p;

        /* renamed from: q  reason: collision with root package name */
        p f23855q;

        /* renamed from: r  reason: collision with root package name */
        p f23856r;

        /* renamed from: s  reason: collision with root package name */
        p f23857s;

        /* renamed from: t  reason: collision with root package name */
        p f23858t;

        /* renamed from: u  reason: collision with root package name */
        Matrix f23859u;

        @Override // f6.g.n
        public void k(Matrix matrix) {
            this.f23859u = matrix;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
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
        f6.e f23862o = null;

        p0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class q extends l {

        /* renamed from: o  reason: collision with root package name */
        p f23863o;

        /* renamed from: p  reason: collision with root package name */
        p f23864p;

        /* renamed from: q  reason: collision with root package name */
        p f23865q;

        /* renamed from: r  reason: collision with root package name */
        p f23866r;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "line";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class q0 extends j {

        /* renamed from: m  reason: collision with root package name */
        p f23867m;

        /* renamed from: n  reason: collision with root package name */
        p f23868n;

        /* renamed from: o  reason: collision with root package name */
        p f23869o;

        /* renamed from: p  reason: collision with root package name */
        p f23870p;

        /* renamed from: q  reason: collision with root package name */
        p f23871q;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "radialGradient";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class r extends r0 implements t {

        /* renamed from: q  reason: collision with root package name */
        boolean f23872q;

        /* renamed from: r  reason: collision with root package name */
        p f23873r;

        /* renamed from: s  reason: collision with root package name */
        p f23874s;

        /* renamed from: t  reason: collision with root package name */
        p f23875t;

        /* renamed from: u  reason: collision with root package name */
        p f23876u;

        /* renamed from: v  reason: collision with root package name */
        Float f23877v;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "marker";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class r0 extends p0 {

        /* renamed from: p  reason: collision with root package name */
        b f23878p;

        r0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class s extends h0 implements t {

        /* renamed from: o  reason: collision with root package name */
        Boolean f23879o;

        /* renamed from: p  reason: collision with root package name */
        Boolean f23880p;

        /* renamed from: q  reason: collision with root package name */
        p f23881q;

        /* renamed from: r  reason: collision with root package name */
        p f23882r;

        /* renamed from: s  reason: collision with root package name */
        p f23883s;

        /* renamed from: t  reason: collision with root package name */
        p f23884t;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "mask";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class s0 extends m {
        @Override // f6.g.m, f6.g.n0
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
        @Override // f6.g.n0
        public String n() {
            return "symbol";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class u extends o0 {

        /* renamed from: d  reason: collision with root package name */
        String f23885d;

        /* renamed from: e  reason: collision with root package name */
        o0 f23886e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public u(String str, o0 o0Var) {
            this.f23885d = str;
            this.f23886e = o0Var;
        }

        public String toString() {
            return this.f23885d + " " + this.f23886e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class u0 extends y0 implements x0 {

        /* renamed from: o  reason: collision with root package name */
        String f23887o;

        /* renamed from: p  reason: collision with root package name */
        private b1 f23888p;

        @Override // f6.g.x0
        public b1 d() {
            return this.f23888p;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "tref";
        }

        public void o(b1 b1Var) {
            this.f23888p = b1Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class v extends l {

        /* renamed from: o  reason: collision with root package name */
        w f23889o;

        /* renamed from: p  reason: collision with root package name */
        Float f23890p;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "path";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class v0 extends a1 implements x0 {

        /* renamed from: s  reason: collision with root package name */
        private b1 f23891s;

        @Override // f6.g.x0
        public b1 d() {
            return this.f23891s;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "tspan";
        }

        public void o(b1 b1Var) {
            this.f23891s = b1Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class w implements x {

        /* renamed from: b  reason: collision with root package name */
        private int f23893b = 0;

        /* renamed from: d  reason: collision with root package name */
        private int f23895d = 0;

        /* renamed from: a  reason: collision with root package name */
        private byte[] f23892a = new byte[8];

        /* renamed from: c  reason: collision with root package name */
        private float[] f23894c = new float[16];

        private void f(byte b10) {
            int i10 = this.f23893b;
            byte[] bArr = this.f23892a;
            if (i10 == bArr.length) {
                byte[] bArr2 = new byte[bArr.length * 2];
                System.arraycopy(bArr, 0, bArr2, 0, bArr.length);
                this.f23892a = bArr2;
            }
            byte[] bArr3 = this.f23892a;
            int i11 = this.f23893b;
            this.f23893b = i11 + 1;
            bArr3[i11] = b10;
        }

        private void g(int i10) {
            float[] fArr = this.f23894c;
            if (fArr.length < this.f23895d + i10) {
                float[] fArr2 = new float[fArr.length * 2];
                System.arraycopy(fArr, 0, fArr2, 0, fArr.length);
                this.f23894c = fArr2;
            }
        }

        @Override // f6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            f((byte) 3);
            g(4);
            float[] fArr = this.f23894c;
            int i10 = this.f23895d;
            int i11 = i10 + 1;
            this.f23895d = i11;
            fArr[i10] = f10;
            int i12 = i10 + 2;
            this.f23895d = i12;
            fArr[i11] = f11;
            int i13 = i10 + 3;
            this.f23895d = i13;
            fArr[i12] = f12;
            this.f23895d = i10 + 4;
            fArr[i13] = f13;
        }

        @Override // f6.g.x
        public void b(float f10, float f11) {
            f((byte) 0);
            g(2);
            float[] fArr = this.f23894c;
            int i10 = this.f23895d;
            int i11 = i10 + 1;
            this.f23895d = i11;
            fArr[i10] = f10;
            this.f23895d = i10 + 2;
            fArr[i11] = f11;
        }

        @Override // f6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            f((byte) 2);
            g(6);
            float[] fArr = this.f23894c;
            int i10 = this.f23895d;
            int i11 = i10 + 1;
            this.f23895d = i11;
            fArr[i10] = f10;
            int i12 = i10 + 2;
            this.f23895d = i12;
            fArr[i11] = f11;
            int i13 = i10 + 3;
            this.f23895d = i13;
            fArr[i12] = f12;
            int i14 = i10 + 4;
            this.f23895d = i14;
            fArr[i13] = f13;
            int i15 = i10 + 5;
            this.f23895d = i15;
            fArr[i14] = f14;
            this.f23895d = i10 + 6;
            fArr[i15] = f15;
        }

        @Override // f6.g.x
        public void close() {
            f((byte) 8);
        }

        @Override // f6.g.x
        public void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
            int i10;
            if (z10) {
                i10 = 2;
            } else {
                i10 = 0;
            }
            f((byte) (i10 | 4 | (z11 ? 1 : 0)));
            g(5);
            float[] fArr = this.f23894c;
            int i11 = this.f23895d;
            int i12 = i11 + 1;
            this.f23895d = i12;
            fArr[i11] = f10;
            int i13 = i11 + 2;
            this.f23895d = i13;
            fArr[i12] = f11;
            int i14 = i11 + 3;
            this.f23895d = i14;
            fArr[i13] = f12;
            int i15 = i11 + 4;
            this.f23895d = i15;
            fArr[i14] = f13;
            this.f23895d = i11 + 5;
            fArr[i15] = f14;
        }

        @Override // f6.g.x
        public void e(float f10, float f11) {
            f((byte) 1);
            g(2);
            float[] fArr = this.f23894c;
            int i10 = this.f23895d;
            int i11 = i10 + 1;
            this.f23895d = i11;
            fArr[i10] = f10;
            this.f23895d = i10 + 2;
            fArr[i11] = f11;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void h(x xVar) {
            boolean z10;
            boolean z11;
            int i10 = 0;
            for (int i11 = 0; i11 < this.f23893b; i11++) {
                byte b10 = this.f23892a[i11];
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
                                    float[] fArr = this.f23894c;
                                    xVar.d(fArr[i10], fArr[i10 + 1], fArr[i10 + 2], z10, z11, fArr[i10 + 3], fArr[i10 + 4]);
                                    i10 += 5;
                                } else {
                                    xVar.close();
                                }
                            } else {
                                float[] fArr2 = this.f23894c;
                                int i12 = i10 + 3;
                                i10 += 4;
                                xVar.a(fArr2[i10], fArr2[i10 + 1], fArr2[i10 + 2], fArr2[i12]);
                            }
                        } else {
                            float[] fArr3 = this.f23894c;
                            xVar.c(fArr3[i10], fArr3[i10 + 1], fArr3[i10 + 2], fArr3[i10 + 3], fArr3[i10 + 4], fArr3[i10 + 5]);
                            i10 += 6;
                        }
                    } else {
                        float[] fArr4 = this.f23894c;
                        int i13 = i10 + 1;
                        float f10 = fArr4[i10];
                        i10 += 2;
                        xVar.e(f10, fArr4[i13]);
                    }
                } else {
                    float[] fArr5 = this.f23894c;
                    int i14 = i10 + 1;
                    float f11 = fArr5[i10];
                    i10 += 2;
                    xVar.b(f11, fArr5[i14]);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean i() {
            if (this.f23893b == 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class w0 extends a1 implements b1, n {

        /* renamed from: s  reason: collision with root package name */
        Matrix f23896s;

        @Override // f6.g.n
        public void k(Matrix matrix) {
            this.f23896s = matrix;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
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
        Boolean f23897q;

        /* renamed from: r  reason: collision with root package name */
        Boolean f23898r;

        /* renamed from: s  reason: collision with root package name */
        Matrix f23899s;

        /* renamed from: t  reason: collision with root package name */
        p f23900t;

        /* renamed from: u  reason: collision with root package name */
        p f23901u;

        /* renamed from: v  reason: collision with root package name */
        p f23902v;

        /* renamed from: w  reason: collision with root package name */
        p f23903w;

        /* renamed from: x  reason: collision with root package name */
        String f23904x;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "pattern";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class y0 extends h0 {
        y0() {
        }

        @Override // f6.g.h0, f6.g.j0
        public void g(n0 n0Var) {
            if (n0Var instanceof x0) {
                this.f23816i.add(n0Var);
                return;
            }
            throw new f6.j("Text content elements cannot contain " + n0Var + " elements.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class z extends l {

        /* renamed from: o  reason: collision with root package name */
        float[] f23905o;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "polyline";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class z0 extends y0 implements x0 {

        /* renamed from: o  reason: collision with root package name */
        String f23906o;

        /* renamed from: p  reason: collision with root package name */
        p f23907p;

        /* renamed from: q  reason: collision with root package name */
        private b1 f23908q;

        @Override // f6.g.x0
        public b1 d() {
            return this.f23908q;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "textPath";
        }

        public void o(b1 b1Var) {
            this.f23908q = b1Var;
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
        f0 f0Var = this.f23710a;
        p pVar = f0Var.f23812s;
        p pVar2 = f0Var.f23813t;
        if (pVar != null && !pVar.i() && (d1Var = pVar.f23861e) != (d1Var2 = d1.percent) && d1Var != (d1Var3 = d1.em) && d1Var != (d1Var4 = d1.ex)) {
            float b10 = pVar.b(f10);
            if (pVar2 != null) {
                if (!pVar2.i() && (d1Var5 = pVar2.f23861e) != d1Var2 && d1Var5 != d1Var3 && d1Var5 != d1Var4) {
                    f11 = pVar2.b(f10);
                } else {
                    return new b(-1.0f, -1.0f, -1.0f, -1.0f);
                }
            } else {
                b bVar = this.f23710a.f23878p;
                if (bVar != null) {
                    f11 = (bVar.f23724d * b10) / bVar.f23723c;
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
        if (str.equals(l0Var.f23842c)) {
            return l0Var;
        }
        for (n0 n0Var : j0Var.getChildren()) {
            if (n0Var instanceof l0) {
                l0 l0Var2 = (l0) n0Var;
                if (str.equals(l0Var2.f23842c)) {
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
    public static f6.i k() {
        return null;
    }

    public static g l(InputStream inputStream) {
        return new f6.k().z(inputStream, f23709g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(b.r rVar) {
        this.f23714e.b(rVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f23714e.e(b.u.RenderOptions);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List d() {
        return this.f23714e.c();
    }

    public float f() {
        if (this.f23710a != null) {
            return e(this.f23713d).f23724d;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public RectF g() {
        f0 f0Var = this.f23710a;
        if (f0Var != null) {
            b bVar = f0Var.f23878p;
            if (bVar == null) {
                return null;
            }
            return bVar.d();
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public float h() {
        if (this.f23710a != null) {
            return e(this.f23713d).f23723c;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0 j(String str) {
        if (str != null && str.length() != 0) {
            if (str.equals(this.f23710a.f23842c)) {
                return this.f23710a;
            }
            if (this.f23715f.containsKey(str)) {
                return (l0) this.f23715f.get(str);
            }
            l0 i10 = i(this.f23710a, str);
            this.f23715f.put(str, i10);
            return i10;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0 m() {
        return this.f23710a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        return !this.f23714e.d();
    }

    public void o(Canvas canvas, f6.f fVar) {
        if (fVar == null) {
            fVar = new f6.f();
        }
        if (!fVar.g()) {
            fVar.h(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
        }
        new f6.h(canvas, this.f23713d).G0(this, fVar);
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
        this.f23712c = str;
    }

    public void r(String str) {
        f0 f0Var = this.f23710a;
        if (f0Var != null) {
            f0Var.f23813t = f6.k.o0(str);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public void s(float f10, float f11, float f12, float f13) {
        f0 f0Var = this.f23710a;
        if (f0Var != null) {
            f0Var.f23878p = new b(f10, f11, f12, f13);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public void t(String str) {
        f0 f0Var = this.f23710a;
        if (f0Var != null) {
            f0Var.f23812s = f6.k.o0(str);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(f0 f0Var) {
        this.f23710a = f0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(String str) {
        this.f23711b = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class p implements Cloneable {

        /* renamed from: d  reason: collision with root package name */
        float f23860d;

        /* renamed from: e  reason: collision with root package name */
        d1 f23861e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(float f10, d1 d1Var) {
            this.f23860d = f10;
            this.f23861e = d1Var;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float a() {
            return this.f23860d;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float b(float f10) {
            int i10 = a.f23716a[this.f23861e.ordinal()];
            if (i10 != 1) {
                switch (i10) {
                    case 4:
                        return this.f23860d * f10;
                    case 5:
                        return (this.f23860d * f10) / 2.54f;
                    case 6:
                        return (this.f23860d * f10) / 25.4f;
                    case 7:
                        return (this.f23860d * f10) / 72.0f;
                    case 8:
                        return (this.f23860d * f10) / 6.0f;
                    default:
                        return this.f23860d;
                }
            }
            return this.f23860d;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float c(f6.h hVar) {
            if (this.f23861e == d1.percent) {
                b S = hVar.S();
                if (S == null) {
                    return this.f23860d;
                }
                float f10 = S.f23723c;
                float f11 = S.f23724d;
                if (f10 == f11) {
                    return (this.f23860d * f10) / 100.0f;
                }
                return (this.f23860d * ((float) (Math.sqrt((f10 * f10) + (f11 * f11)) / 1.414213562373095d))) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float d(f6.h hVar, float f10) {
            if (this.f23861e == d1.percent) {
                return (this.f23860d * f10) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float e(f6.h hVar) {
            switch (a.f23716a[this.f23861e.ordinal()]) {
                case 1:
                    return this.f23860d;
                case 2:
                    return this.f23860d * hVar.Q();
                case 3:
                    return this.f23860d * hVar.R();
                case 4:
                    return this.f23860d * hVar.T();
                case 5:
                    return (this.f23860d * hVar.T()) / 2.54f;
                case 6:
                    return (this.f23860d * hVar.T()) / 25.4f;
                case 7:
                    return (this.f23860d * hVar.T()) / 72.0f;
                case 8:
                    return (this.f23860d * hVar.T()) / 6.0f;
                case 9:
                    b S = hVar.S();
                    if (S == null) {
                        return this.f23860d;
                    }
                    return (this.f23860d * S.f23723c) / 100.0f;
                default:
                    return this.f23860d;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float f(f6.h hVar) {
            if (this.f23861e == d1.percent) {
                b S = hVar.S();
                if (S == null) {
                    return this.f23860d;
                }
                return (this.f23860d * S.f23724d) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean g() {
            if (this.f23860d < 0.0f) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean i() {
            if (this.f23860d == 0.0f) {
                return true;
            }
            return false;
        }

        public String toString() {
            return String.valueOf(this.f23860d) + this.f23861e;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(float f10) {
            this.f23860d = f10;
            this.f23861e = d1.px;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        float f23721a;

        /* renamed from: b  reason: collision with root package name */
        float f23722b;

        /* renamed from: c  reason: collision with root package name */
        float f23723c;

        /* renamed from: d  reason: collision with root package name */
        float f23724d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(float f10, float f11, float f12, float f13) {
            this.f23721a = f10;
            this.f23722b = f11;
            this.f23723c = f12;
            this.f23724d = f13;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static b a(float f10, float f11, float f12, float f13) {
            return new b(f10, f11, f12 - f10, f13 - f11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float b() {
            return this.f23721a + this.f23723c;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float c() {
            return this.f23722b + this.f23724d;
        }

        RectF d() {
            return new RectF(this.f23721a, this.f23722b, b(), c());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void e(b bVar) {
            float f10 = bVar.f23721a;
            if (f10 < this.f23721a) {
                this.f23721a = f10;
            }
            float f11 = bVar.f23722b;
            if (f11 < this.f23722b) {
                this.f23722b = f11;
            }
            if (bVar.b() > b()) {
                this.f23723c = bVar.b() - this.f23721a;
            }
            if (bVar.c() > c()) {
                this.f23724d = bVar.c() - this.f23722b;
            }
        }

        public String toString() {
            return "[" + this.f23721a + " " + this.f23722b + " " + this.f23723c + " " + this.f23724d + "]";
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(b bVar) {
            this.f23721a = bVar.f23721a;
            this.f23722b = bVar.f23722b;
            this.f23723c = bVar.f23723c;
            this.f23724d = bVar.f23724d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c0 extends l0 implements j0 {
        @Override // f6.g.j0
        public List getChildren() {
            return Collections.EMPTY_LIST;
        }

        @Override // f6.g.n0
        String n() {
            return "solidColor";
        }

        @Override // f6.g.j0
        public void g(n0 n0Var) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d0 extends l0 implements j0 {

        /* renamed from: h  reason: collision with root package name */
        Float f23740h;

        @Override // f6.g.j0
        public List getChildren() {
            return Collections.EMPTY_LIST;
        }

        @Override // f6.g.n0
        String n() {
            return "stop";
        }

        @Override // f6.g.j0
        public void g(n0 n0Var) {
        }
    }
}
