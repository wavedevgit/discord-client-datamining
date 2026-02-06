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
    private static boolean f22627g = true;

    /* renamed from: a  reason: collision with root package name */
    private f0 f22628a = null;

    /* renamed from: b  reason: collision with root package name */
    private String f22629b = "";

    /* renamed from: c  reason: collision with root package name */
    private String f22630c = "";

    /* renamed from: d  reason: collision with root package name */
    private float f22631d = 96.0f;

    /* renamed from: e  reason: collision with root package name */
    private b.r f22632e = new b.r();

    /* renamed from: f  reason: collision with root package name */
    private Map f22633f = new HashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f22634a;

        static {
            int[] iArr = new int[d1.values().length];
            f22634a = iArr;
            try {
                iArr[d1.px.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f22634a[d1.em.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f22634a[d1.ex.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f22634a[d1.in.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f22634a[d1.cm.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f22634a[d1.mm.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f22634a[d1.pt.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f22634a[d1.pc.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f22634a[d1.percent.ordinal()] = 9;
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
        List f22635o;

        /* renamed from: p  reason: collision with root package name */
        List f22636p;

        /* renamed from: q  reason: collision with root package name */
        List f22637q;

        /* renamed from: r  reason: collision with root package name */
        List f22638r;

        a1() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b0 extends l {

        /* renamed from: o  reason: collision with root package name */
        p f22643o;

        /* renamed from: p  reason: collision with root package name */
        p f22644p;

        /* renamed from: q  reason: collision with root package name */
        p f22645q;

        /* renamed from: r  reason: collision with root package name */
        p f22646r;

        /* renamed from: s  reason: collision with root package name */
        p f22647s;

        /* renamed from: t  reason: collision with root package name */
        p f22648t;

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
        p f22649a;

        /* renamed from: b  reason: collision with root package name */
        p f22650b;

        /* renamed from: c  reason: collision with root package name */
        p f22651c;

        /* renamed from: d  reason: collision with root package name */
        p f22652d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(p pVar, p pVar2, p pVar3, p pVar4) {
            this.f22649a = pVar;
            this.f22650b = pVar2;
            this.f22651c = pVar3;
            this.f22652d = pVar4;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c1 extends n0 implements x0 {

        /* renamed from: c  reason: collision with root package name */
        String f22653c;

        /* renamed from: d  reason: collision with root package name */
        private b1 f22654d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c1(String str) {
            this.f22653c = str;
        }

        @Override // f6.g.x0
        public b1 d() {
            return this.f22654d;
        }

        public String toString() {
            return "TextChild: '" + this.f22653c + "'";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d extends l {

        /* renamed from: o  reason: collision with root package name */
        p f22655o;

        /* renamed from: p  reason: collision with root package name */
        p f22656p;

        /* renamed from: q  reason: collision with root package name */
        p f22657q;

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
        Boolean f22669p;

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
        EnumC0319g D;
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
        long f22670d = 0;

        /* renamed from: e  reason: collision with root package name */
        o0 f22671e;

        /* renamed from: i  reason: collision with root package name */
        a f22672i;

        /* renamed from: o  reason: collision with root package name */
        Float f22673o;

        /* renamed from: p  reason: collision with root package name */
        o0 f22674p;

        /* renamed from: q  reason: collision with root package name */
        Float f22675q;

        /* renamed from: r  reason: collision with root package name */
        p f22676r;

        /* renamed from: s  reason: collision with root package name */
        c f22677s;

        /* renamed from: t  reason: collision with root package name */
        d f22678t;

        /* renamed from: u  reason: collision with root package name */
        Float f22679u;

        /* renamed from: v  reason: collision with root package name */
        p[] f22680v;

        /* renamed from: w  reason: collision with root package name */
        p f22681w;

        /* renamed from: x  reason: collision with root package name */
        Float f22682x;

        /* renamed from: y  reason: collision with root package name */
        f f22683y;

        /* renamed from: z  reason: collision with root package name */
        List f22684z;

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
        public enum EnumC0319g {
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
            e0Var.f22670d = -1L;
            f fVar = f.f22725e;
            e0Var.f22671e = fVar;
            a aVar = a.NonZero;
            e0Var.f22672i = aVar;
            Float valueOf = Float.valueOf(1.0f);
            e0Var.f22673o = valueOf;
            e0Var.f22674p = null;
            e0Var.f22675q = valueOf;
            e0Var.f22676r = new p(1.0f);
            e0Var.f22677s = c.Butt;
            e0Var.f22678t = d.Miter;
            e0Var.f22679u = Float.valueOf(4.0f);
            e0Var.f22680v = null;
            e0Var.f22681w = new p(0.0f);
            e0Var.f22682x = valueOf;
            e0Var.f22683y = fVar;
            e0Var.f22684z = null;
            e0Var.A = new p(12.0f, d1.pt);
            e0Var.B = Integer.valueOf((int) ReactFontManager.TypefaceStyle.NORMAL);
            e0Var.C = b.Normal;
            e0Var.D = EnumC0319g.None;
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
            this.f22682x = valueOf;
            this.N = f.f22725e;
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
            p[] pVarArr = this.f22680v;
            if (pVarArr != null) {
                e0Var.f22680v = (p[]) pVarArr.clone();
            }
            return e0Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e1 extends m {

        /* renamed from: p  reason: collision with root package name */
        String f22720p;

        /* renamed from: q  reason: collision with root package name */
        p f22721q;

        /* renamed from: r  reason: collision with root package name */
        p f22722r;

        /* renamed from: s  reason: collision with root package name */
        p f22723s;

        /* renamed from: t  reason: collision with root package name */
        p f22724t;

        @Override // f6.g.m, f6.g.n0
        String n() {
            return "use";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class f extends o0 {

        /* renamed from: e  reason: collision with root package name */
        static final f f22725e = new f(-16777216);

        /* renamed from: i  reason: collision with root package name */
        static final f f22726i = new f(0);

        /* renamed from: d  reason: collision with root package name */
        int f22727d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public f(int i10) {
            this.f22727d = i10;
        }

        public String toString() {
            return String.format("#%08x", Integer.valueOf(this.f22727d));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f0 extends r0 {

        /* renamed from: q  reason: collision with root package name */
        p f22728q;

        /* renamed from: r  reason: collision with root package name */
        p f22729r;

        /* renamed from: s  reason: collision with root package name */
        p f22730s;

        /* renamed from: t  reason: collision with root package name */
        p f22731t;

        /* renamed from: u  reason: collision with root package name */
        public String f22732u;

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
    static class C0320g extends o0 {

        /* renamed from: d  reason: collision with root package name */
        private static C0320g f22733d = new C0320g();

        private C0320g() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static C0320g a() {
            return f22733d;
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
        List f22734i = new ArrayList();

        /* renamed from: j  reason: collision with root package name */
        Set f22735j = null;

        /* renamed from: k  reason: collision with root package name */
        String f22736k = null;

        /* renamed from: l  reason: collision with root package name */
        Set f22737l = null;

        /* renamed from: m  reason: collision with root package name */
        Set f22738m = null;

        /* renamed from: n  reason: collision with root package name */
        Set f22739n = null;

        h0() {
        }

        @Override // f6.g.g0
        public Set a() {
            return null;
        }

        @Override // f6.g.g0
        public String b() {
            return this.f22736k;
        }

        @Override // f6.g.g0
        public void c(Set set) {
            this.f22739n = set;
        }

        @Override // f6.g.g0
        public void e(Set set) {
            this.f22735j = set;
        }

        @Override // f6.g.g0
        public Set f() {
            return this.f22735j;
        }

        @Override // f6.g.j0
        public void g(n0 n0Var) {
            this.f22734i.add(n0Var);
        }

        @Override // f6.g.j0
        public List getChildren() {
            return this.f22734i;
        }

        @Override // f6.g.g0
        public void h(Set set) {
            this.f22737l = set;
        }

        @Override // f6.g.g0
        public void i(Set set) {
            this.f22738m = set;
        }

        @Override // f6.g.g0
        public void j(String str) {
            this.f22736k = str;
        }

        @Override // f6.g.g0
        public Set l() {
            return this.f22738m;
        }

        @Override // f6.g.g0
        public Set m() {
            return this.f22739n;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class i extends l {

        /* renamed from: o  reason: collision with root package name */
        p f22740o;

        /* renamed from: p  reason: collision with root package name */
        p f22741p;

        /* renamed from: q  reason: collision with root package name */
        p f22742q;

        /* renamed from: r  reason: collision with root package name */
        p f22743r;

        @Override // f6.g.n0
        String n() {
            return "ellipse";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class i0 extends k0 implements g0 {

        /* renamed from: i  reason: collision with root package name */
        Set f22744i = null;

        /* renamed from: j  reason: collision with root package name */
        String f22745j = null;

        /* renamed from: k  reason: collision with root package name */
        Set f22746k = null;

        /* renamed from: l  reason: collision with root package name */
        Set f22747l = null;

        /* renamed from: m  reason: collision with root package name */
        Set f22748m = null;

        i0() {
        }

        @Override // f6.g.g0
        public Set a() {
            return this.f22746k;
        }

        @Override // f6.g.g0
        public String b() {
            return this.f22745j;
        }

        @Override // f6.g.g0
        public void c(Set set) {
            this.f22748m = set;
        }

        @Override // f6.g.g0
        public void e(Set set) {
            this.f22744i = set;
        }

        @Override // f6.g.g0
        public Set f() {
            return this.f22744i;
        }

        @Override // f6.g.g0
        public void h(Set set) {
            this.f22746k = set;
        }

        @Override // f6.g.g0
        public void i(Set set) {
            this.f22747l = set;
        }

        @Override // f6.g.g0
        public void j(String str) {
            this.f22745j = str;
        }

        @Override // f6.g.g0
        public Set l() {
            return this.f22747l;
        }

        @Override // f6.g.g0
        public Set m() {
            return this.f22748m;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class j extends l0 implements j0 {

        /* renamed from: h  reason: collision with root package name */
        List f22749h = new ArrayList();

        /* renamed from: i  reason: collision with root package name */
        Boolean f22750i;

        /* renamed from: j  reason: collision with root package name */
        Matrix f22751j;

        /* renamed from: k  reason: collision with root package name */
        k f22752k;

        /* renamed from: l  reason: collision with root package name */
        String f22753l;

        j() {
        }

        @Override // f6.g.j0
        public void g(n0 n0Var) {
            if (n0Var instanceof d0) {
                this.f22749h.add(n0Var);
                return;
            }
            throw new f6.j("Gradient elements cannot contain " + n0Var + " elements.");
        }

        @Override // f6.g.j0
        public List getChildren() {
            return this.f22749h;
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
        b f22758h = null;

        k0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static abstract class l extends i0 implements n {

        /* renamed from: n  reason: collision with root package name */
        Matrix f22759n;

        l() {
        }

        @Override // f6.g.n
        public void k(Matrix matrix) {
            this.f22759n = matrix;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class l0 extends n0 {

        /* renamed from: c  reason: collision with root package name */
        String f22760c = null;

        /* renamed from: d  reason: collision with root package name */
        Boolean f22761d = null;

        /* renamed from: e  reason: collision with root package name */
        e0 f22762e = null;

        /* renamed from: f  reason: collision with root package name */
        e0 f22763f = null;

        /* renamed from: g  reason: collision with root package name */
        List f22764g = null;

        l0() {
        }

        public String toString() {
            return n();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m extends h0 implements n {

        /* renamed from: o  reason: collision with root package name */
        Matrix f22765o;

        @Override // f6.g.n
        public void k(Matrix matrix) {
            this.f22765o = matrix;
        }

        @Override // f6.g.n0
        String n() {
            return "group";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class m0 extends j {

        /* renamed from: m  reason: collision with root package name */
        p f22766m;

        /* renamed from: n  reason: collision with root package name */
        p f22767n;

        /* renamed from: o  reason: collision with root package name */
        p f22768o;

        /* renamed from: p  reason: collision with root package name */
        p f22769p;

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
        g f22770a;

        /* renamed from: b  reason: collision with root package name */
        j0 f22771b;

        n0() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract String n();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class o extends p0 implements n {

        /* renamed from: p  reason: collision with root package name */
        String f22772p;

        /* renamed from: q  reason: collision with root package name */
        p f22773q;

        /* renamed from: r  reason: collision with root package name */
        p f22774r;

        /* renamed from: s  reason: collision with root package name */
        p f22775s;

        /* renamed from: t  reason: collision with root package name */
        p f22776t;

        /* renamed from: u  reason: collision with root package name */
        Matrix f22777u;

        @Override // f6.g.n
        public void k(Matrix matrix) {
            this.f22777u = matrix;
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
        f6.e f22780o = null;

        p0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class q extends l {

        /* renamed from: o  reason: collision with root package name */
        p f22781o;

        /* renamed from: p  reason: collision with root package name */
        p f22782p;

        /* renamed from: q  reason: collision with root package name */
        p f22783q;

        /* renamed from: r  reason: collision with root package name */
        p f22784r;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "line";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class q0 extends j {

        /* renamed from: m  reason: collision with root package name */
        p f22785m;

        /* renamed from: n  reason: collision with root package name */
        p f22786n;

        /* renamed from: o  reason: collision with root package name */
        p f22787o;

        /* renamed from: p  reason: collision with root package name */
        p f22788p;

        /* renamed from: q  reason: collision with root package name */
        p f22789q;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "radialGradient";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class r extends r0 implements t {

        /* renamed from: q  reason: collision with root package name */
        boolean f22790q;

        /* renamed from: r  reason: collision with root package name */
        p f22791r;

        /* renamed from: s  reason: collision with root package name */
        p f22792s;

        /* renamed from: t  reason: collision with root package name */
        p f22793t;

        /* renamed from: u  reason: collision with root package name */
        p f22794u;

        /* renamed from: v  reason: collision with root package name */
        Float f22795v;

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
        b f22796p;

        r0() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class s extends h0 implements t {

        /* renamed from: o  reason: collision with root package name */
        Boolean f22797o;

        /* renamed from: p  reason: collision with root package name */
        Boolean f22798p;

        /* renamed from: q  reason: collision with root package name */
        p f22799q;

        /* renamed from: r  reason: collision with root package name */
        p f22800r;

        /* renamed from: s  reason: collision with root package name */
        p f22801s;

        /* renamed from: t  reason: collision with root package name */
        p f22802t;

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
        String f22803d;

        /* renamed from: e  reason: collision with root package name */
        o0 f22804e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public u(String str, o0 o0Var) {
            this.f22803d = str;
            this.f22804e = o0Var;
        }

        public String toString() {
            return this.f22803d + " " + this.f22804e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class u0 extends y0 implements x0 {

        /* renamed from: o  reason: collision with root package name */
        String f22805o;

        /* renamed from: p  reason: collision with root package name */
        private b1 f22806p;

        @Override // f6.g.x0
        public b1 d() {
            return this.f22806p;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "tref";
        }

        public void o(b1 b1Var) {
            this.f22806p = b1Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class v extends l {

        /* renamed from: o  reason: collision with root package name */
        w f22807o;

        /* renamed from: p  reason: collision with root package name */
        Float f22808p;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "path";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class v0 extends a1 implements x0 {

        /* renamed from: s  reason: collision with root package name */
        private b1 f22809s;

        @Override // f6.g.x0
        public b1 d() {
            return this.f22809s;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "tspan";
        }

        public void o(b1 b1Var) {
            this.f22809s = b1Var;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class w implements x {

        /* renamed from: b  reason: collision with root package name */
        private int f22811b = 0;

        /* renamed from: d  reason: collision with root package name */
        private int f22813d = 0;

        /* renamed from: a  reason: collision with root package name */
        private byte[] f22810a = new byte[8];

        /* renamed from: c  reason: collision with root package name */
        private float[] f22812c = new float[16];

        private void f(byte b10) {
            int i10 = this.f22811b;
            byte[] bArr = this.f22810a;
            if (i10 == bArr.length) {
                byte[] bArr2 = new byte[bArr.length * 2];
                System.arraycopy(bArr, 0, bArr2, 0, bArr.length);
                this.f22810a = bArr2;
            }
            byte[] bArr3 = this.f22810a;
            int i11 = this.f22811b;
            this.f22811b = i11 + 1;
            bArr3[i11] = b10;
        }

        private void g(int i10) {
            float[] fArr = this.f22812c;
            if (fArr.length < this.f22813d + i10) {
                float[] fArr2 = new float[fArr.length * 2];
                System.arraycopy(fArr, 0, fArr2, 0, fArr.length);
                this.f22812c = fArr2;
            }
        }

        @Override // f6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            f((byte) 3);
            g(4);
            float[] fArr = this.f22812c;
            int i10 = this.f22813d;
            int i11 = i10 + 1;
            this.f22813d = i11;
            fArr[i10] = f10;
            int i12 = i10 + 2;
            this.f22813d = i12;
            fArr[i11] = f11;
            int i13 = i10 + 3;
            this.f22813d = i13;
            fArr[i12] = f12;
            this.f22813d = i10 + 4;
            fArr[i13] = f13;
        }

        @Override // f6.g.x
        public void b(float f10, float f11) {
            f((byte) 0);
            g(2);
            float[] fArr = this.f22812c;
            int i10 = this.f22813d;
            int i11 = i10 + 1;
            this.f22813d = i11;
            fArr[i10] = f10;
            this.f22813d = i10 + 2;
            fArr[i11] = f11;
        }

        @Override // f6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            f((byte) 2);
            g(6);
            float[] fArr = this.f22812c;
            int i10 = this.f22813d;
            int i11 = i10 + 1;
            this.f22813d = i11;
            fArr[i10] = f10;
            int i12 = i10 + 2;
            this.f22813d = i12;
            fArr[i11] = f11;
            int i13 = i10 + 3;
            this.f22813d = i13;
            fArr[i12] = f12;
            int i14 = i10 + 4;
            this.f22813d = i14;
            fArr[i13] = f13;
            int i15 = i10 + 5;
            this.f22813d = i15;
            fArr[i14] = f14;
            this.f22813d = i10 + 6;
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
            float[] fArr = this.f22812c;
            int i11 = this.f22813d;
            int i12 = i11 + 1;
            this.f22813d = i12;
            fArr[i11] = f10;
            int i13 = i11 + 2;
            this.f22813d = i13;
            fArr[i12] = f11;
            int i14 = i11 + 3;
            this.f22813d = i14;
            fArr[i13] = f12;
            int i15 = i11 + 4;
            this.f22813d = i15;
            fArr[i14] = f13;
            this.f22813d = i11 + 5;
            fArr[i15] = f14;
        }

        @Override // f6.g.x
        public void e(float f10, float f11) {
            f((byte) 1);
            g(2);
            float[] fArr = this.f22812c;
            int i10 = this.f22813d;
            int i11 = i10 + 1;
            this.f22813d = i11;
            fArr[i10] = f10;
            this.f22813d = i10 + 2;
            fArr[i11] = f11;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void h(x xVar) {
            boolean z10;
            boolean z11;
            int i10 = 0;
            for (int i11 = 0; i11 < this.f22811b; i11++) {
                byte b10 = this.f22810a[i11];
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
                                    float[] fArr = this.f22812c;
                                    xVar.d(fArr[i10], fArr[i10 + 1], fArr[i10 + 2], z10, z11, fArr[i10 + 3], fArr[i10 + 4]);
                                    i10 += 5;
                                } else {
                                    xVar.close();
                                }
                            } else {
                                float[] fArr2 = this.f22812c;
                                int i12 = i10 + 3;
                                i10 += 4;
                                xVar.a(fArr2[i10], fArr2[i10 + 1], fArr2[i10 + 2], fArr2[i12]);
                            }
                        } else {
                            float[] fArr3 = this.f22812c;
                            xVar.c(fArr3[i10], fArr3[i10 + 1], fArr3[i10 + 2], fArr3[i10 + 3], fArr3[i10 + 4], fArr3[i10 + 5]);
                            i10 += 6;
                        }
                    } else {
                        float[] fArr4 = this.f22812c;
                        int i13 = i10 + 1;
                        float f10 = fArr4[i10];
                        i10 += 2;
                        xVar.e(f10, fArr4[i13]);
                    }
                } else {
                    float[] fArr5 = this.f22812c;
                    int i14 = i10 + 1;
                    float f11 = fArr5[i10];
                    i10 += 2;
                    xVar.b(f11, fArr5[i14]);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean i() {
            if (this.f22811b == 0) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class w0 extends a1 implements b1, n {

        /* renamed from: s  reason: collision with root package name */
        Matrix f22814s;

        @Override // f6.g.n
        public void k(Matrix matrix) {
            this.f22814s = matrix;
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
        Boolean f22815q;

        /* renamed from: r  reason: collision with root package name */
        Boolean f22816r;

        /* renamed from: s  reason: collision with root package name */
        Matrix f22817s;

        /* renamed from: t  reason: collision with root package name */
        p f22818t;

        /* renamed from: u  reason: collision with root package name */
        p f22819u;

        /* renamed from: v  reason: collision with root package name */
        p f22820v;

        /* renamed from: w  reason: collision with root package name */
        p f22821w;

        /* renamed from: x  reason: collision with root package name */
        String f22822x;

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
                this.f22734i.add(n0Var);
                return;
            }
            throw new f6.j("Text content elements cannot contain " + n0Var + " elements.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class z extends l {

        /* renamed from: o  reason: collision with root package name */
        float[] f22823o;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "polyline";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class z0 extends y0 implements x0 {

        /* renamed from: o  reason: collision with root package name */
        String f22824o;

        /* renamed from: p  reason: collision with root package name */
        p f22825p;

        /* renamed from: q  reason: collision with root package name */
        private b1 f22826q;

        @Override // f6.g.x0
        public b1 d() {
            return this.f22826q;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // f6.g.n0
        public String n() {
            return "textPath";
        }

        public void o(b1 b1Var) {
            this.f22826q = b1Var;
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
        f0 f0Var = this.f22628a;
        p pVar = f0Var.f22730s;
        p pVar2 = f0Var.f22731t;
        if (pVar != null && !pVar.i() && (d1Var = pVar.f22779e) != (d1Var2 = d1.percent) && d1Var != (d1Var3 = d1.em) && d1Var != (d1Var4 = d1.ex)) {
            float b10 = pVar.b(f10);
            if (pVar2 != null) {
                if (!pVar2.i() && (d1Var5 = pVar2.f22779e) != d1Var2 && d1Var5 != d1Var3 && d1Var5 != d1Var4) {
                    f11 = pVar2.b(f10);
                } else {
                    return new b(-1.0f, -1.0f, -1.0f, -1.0f);
                }
            } else {
                b bVar = this.f22628a.f22796p;
                if (bVar != null) {
                    f11 = (bVar.f22642d * b10) / bVar.f22641c;
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
        if (str.equals(l0Var.f22760c)) {
            return l0Var;
        }
        for (n0 n0Var : j0Var.getChildren()) {
            if (n0Var instanceof l0) {
                l0 l0Var2 = (l0) n0Var;
                if (str.equals(l0Var2.f22760c)) {
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
        return new f6.k().z(inputStream, f22627g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(b.r rVar) {
        this.f22632e.b(rVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f22632e.e(b.u.RenderOptions);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List d() {
        return this.f22632e.c();
    }

    public float f() {
        if (this.f22628a != null) {
            return e(this.f22631d).f22642d;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public RectF g() {
        f0 f0Var = this.f22628a;
        if (f0Var != null) {
            b bVar = f0Var.f22796p;
            if (bVar == null) {
                return null;
            }
            return bVar.d();
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public float h() {
        if (this.f22628a != null) {
            return e(this.f22631d).f22641c;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0 j(String str) {
        if (str != null && str.length() != 0) {
            if (str.equals(this.f22628a.f22760c)) {
                return this.f22628a;
            }
            if (this.f22633f.containsKey(str)) {
                return (l0) this.f22633f.get(str);
            }
            l0 i10 = i(this.f22628a, str);
            this.f22633f.put(str, i10);
            return i10;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0 m() {
        return this.f22628a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n() {
        return !this.f22632e.d();
    }

    public void o(Canvas canvas, f6.f fVar) {
        if (fVar == null) {
            fVar = new f6.f();
        }
        if (!fVar.g()) {
            fVar.h(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
        }
        new f6.h(canvas, this.f22631d).G0(this, fVar);
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
        this.f22630c = str;
    }

    public void r(String str) {
        f0 f0Var = this.f22628a;
        if (f0Var != null) {
            f0Var.f22731t = f6.k.o0(str);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public void s(float f10, float f11, float f12, float f13) {
        f0 f0Var = this.f22628a;
        if (f0Var != null) {
            f0Var.f22796p = new b(f10, f11, f12, f13);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    public void t(String str) {
        f0 f0Var = this.f22628a;
        if (f0Var != null) {
            f0Var.f22730s = f6.k.o0(str);
            return;
        }
        throw new IllegalArgumentException("SVG document is empty");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(f0 f0Var) {
        this.f22628a = f0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(String str) {
        this.f22629b = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class p implements Cloneable {

        /* renamed from: d  reason: collision with root package name */
        float f22778d;

        /* renamed from: e  reason: collision with root package name */
        d1 f22779e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(float f10, d1 d1Var) {
            this.f22778d = f10;
            this.f22779e = d1Var;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float a() {
            return this.f22778d;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float b(float f10) {
            int i10 = a.f22634a[this.f22779e.ordinal()];
            if (i10 != 1) {
                switch (i10) {
                    case 4:
                        return this.f22778d * f10;
                    case 5:
                        return (this.f22778d * f10) / 2.54f;
                    case 6:
                        return (this.f22778d * f10) / 25.4f;
                    case 7:
                        return (this.f22778d * f10) / 72.0f;
                    case 8:
                        return (this.f22778d * f10) / 6.0f;
                    default:
                        return this.f22778d;
                }
            }
            return this.f22778d;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float c(f6.h hVar) {
            if (this.f22779e == d1.percent) {
                b S = hVar.S();
                if (S == null) {
                    return this.f22778d;
                }
                float f10 = S.f22641c;
                float f11 = S.f22642d;
                if (f10 == f11) {
                    return (this.f22778d * f10) / 100.0f;
                }
                return (this.f22778d * ((float) (Math.sqrt((f10 * f10) + (f11 * f11)) / 1.414213562373095d))) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float d(f6.h hVar, float f10) {
            if (this.f22779e == d1.percent) {
                return (this.f22778d * f10) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float e(f6.h hVar) {
            switch (a.f22634a[this.f22779e.ordinal()]) {
                case 1:
                    return this.f22778d;
                case 2:
                    return this.f22778d * hVar.Q();
                case 3:
                    return this.f22778d * hVar.R();
                case 4:
                    return this.f22778d * hVar.T();
                case 5:
                    return (this.f22778d * hVar.T()) / 2.54f;
                case 6:
                    return (this.f22778d * hVar.T()) / 25.4f;
                case 7:
                    return (this.f22778d * hVar.T()) / 72.0f;
                case 8:
                    return (this.f22778d * hVar.T()) / 6.0f;
                case 9:
                    b S = hVar.S();
                    if (S == null) {
                        return this.f22778d;
                    }
                    return (this.f22778d * S.f22641c) / 100.0f;
                default:
                    return this.f22778d;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float f(f6.h hVar) {
            if (this.f22779e == d1.percent) {
                b S = hVar.S();
                if (S == null) {
                    return this.f22778d;
                }
                return (this.f22778d * S.f22642d) / 100.0f;
            }
            return e(hVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean h() {
            if (this.f22778d < 0.0f) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean i() {
            if (this.f22778d == 0.0f) {
                return true;
            }
            return false;
        }

        public String toString() {
            return String.valueOf(this.f22778d) + this.f22779e;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public p(float f10) {
            this.f22778d = f10;
            this.f22779e = d1.px;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        float f22639a;

        /* renamed from: b  reason: collision with root package name */
        float f22640b;

        /* renamed from: c  reason: collision with root package name */
        float f22641c;

        /* renamed from: d  reason: collision with root package name */
        float f22642d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(float f10, float f11, float f12, float f13) {
            this.f22639a = f10;
            this.f22640b = f11;
            this.f22641c = f12;
            this.f22642d = f13;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static b a(float f10, float f11, float f12, float f13) {
            return new b(f10, f11, f12 - f10, f13 - f11);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float b() {
            return this.f22639a + this.f22641c;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public float c() {
            return this.f22640b + this.f22642d;
        }

        RectF d() {
            return new RectF(this.f22639a, this.f22640b, b(), c());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void e(b bVar) {
            float f10 = bVar.f22639a;
            if (f10 < this.f22639a) {
                this.f22639a = f10;
            }
            float f11 = bVar.f22640b;
            if (f11 < this.f22640b) {
                this.f22640b = f11;
            }
            if (bVar.b() > b()) {
                this.f22641c = bVar.b() - this.f22639a;
            }
            if (bVar.c() > c()) {
                this.f22642d = bVar.c() - this.f22640b;
            }
        }

        public String toString() {
            return "[" + this.f22639a + " " + this.f22640b + " " + this.f22641c + " " + this.f22642d + "]";
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(b bVar) {
            this.f22639a = bVar.f22639a;
            this.f22640b = bVar.f22640b;
            this.f22641c = bVar.f22641c;
            this.f22642d = bVar.f22642d;
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
        Float f22658h;

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
