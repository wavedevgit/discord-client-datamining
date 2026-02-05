package f6;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.ColorMatrix;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.DashPathEffect;
import android.graphics.LinearGradient;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.RadialGradient;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.Typeface;
import android.util.Base64;
import android.util.Log;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import f6.b;
import f6.e;
import f6.g;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.Stack;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: i  reason: collision with root package name */
    private static HashSet f22526i;

    /* renamed from: a  reason: collision with root package name */
    private Canvas f22527a;

    /* renamed from: b  reason: collision with root package name */
    private float f22528b;

    /* renamed from: c  reason: collision with root package name */
    private f6.g f22529c;

    /* renamed from: d  reason: collision with root package name */
    private C0310h f22530d;

    /* renamed from: e  reason: collision with root package name */
    private Stack f22531e;

    /* renamed from: f  reason: collision with root package name */
    private Stack f22532f;

    /* renamed from: g  reason: collision with root package name */
    private Stack f22533g;

    /* renamed from: h  reason: collision with root package name */
    private b.q f22534h = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f22535a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f22536b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f22537c;

        static {
            int[] iArr = new int[g.e0.d.values().length];
            f22537c = iArr;
            try {
                iArr[g.e0.d.Miter.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f22537c[g.e0.d.Round.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f22537c[g.e0.d.Bevel.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[g.e0.c.values().length];
            f22536b = iArr2;
            try {
                iArr2[g.e0.c.Butt.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f22536b[g.e0.c.Round.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f22536b[g.e0.c.Square.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            int[] iArr3 = new int[e.a.values().length];
            f22535a = iArr3;
            try {
                iArr3[e.a.xMidYMin.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f22535a[e.a.xMidYMid.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f22535a[e.a.xMidYMax.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f22535a[e.a.xMaxYMin.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f22535a[e.a.xMaxYMid.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f22535a[e.a.xMaxYMax.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f22535a[e.a.xMinYMid.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f22535a[e.a.xMinYMax.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements g.x {

        /* renamed from: b  reason: collision with root package name */
        private float f22539b;

        /* renamed from: c  reason: collision with root package name */
        private float f22540c;

        /* renamed from: h  reason: collision with root package name */
        private boolean f22545h;

        /* renamed from: a  reason: collision with root package name */
        private List f22538a = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private c f22541d = null;

        /* renamed from: e  reason: collision with root package name */
        private boolean f22542e = false;

        /* renamed from: f  reason: collision with root package name */
        private boolean f22543f = true;

        /* renamed from: g  reason: collision with root package name */
        private int f22544g = -1;

        b(g.w wVar) {
            if (wVar != null) {
                wVar.h(this);
                if (this.f22545h) {
                    this.f22541d.b((c) this.f22538a.get(this.f22544g));
                    this.f22538a.set(this.f22544g, this.f22541d);
                    this.f22545h = false;
                }
                c cVar = this.f22541d;
                if (cVar != null) {
                    this.f22538a.add(cVar);
                }
            }
        }

        @Override // f6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            this.f22541d.a(f10, f11);
            this.f22538a.add(this.f22541d);
            this.f22541d = new c(f12, f13, f12 - f10, f13 - f11);
            this.f22545h = false;
        }

        @Override // f6.g.x
        public void b(float f10, float f11) {
            if (this.f22545h) {
                this.f22541d.b((c) this.f22538a.get(this.f22544g));
                this.f22538a.set(this.f22544g, this.f22541d);
                this.f22545h = false;
            }
            c cVar = this.f22541d;
            if (cVar != null) {
                this.f22538a.add(cVar);
            }
            this.f22539b = f10;
            this.f22540c = f11;
            this.f22541d = new c(f10, f11, 0.0f, 0.0f);
            this.f22544g = this.f22538a.size();
        }

        @Override // f6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            if (this.f22543f || this.f22542e) {
                this.f22541d.a(f10, f11);
                this.f22538a.add(this.f22541d);
                this.f22542e = false;
            }
            this.f22541d = new c(f14, f15, f14 - f12, f15 - f13);
            this.f22545h = false;
        }

        @Override // f6.g.x
        public void close() {
            this.f22538a.add(this.f22541d);
            e(this.f22539b, this.f22540c);
            this.f22545h = true;
        }

        @Override // f6.g.x
        public void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
            this.f22542e = true;
            this.f22543f = false;
            c cVar = this.f22541d;
            h.h(cVar.f22547a, cVar.f22548b, f10, f11, f12, z10, z11, f13, f14, this);
            this.f22543f = true;
            this.f22545h = false;
        }

        @Override // f6.g.x
        public void e(float f10, float f11) {
            this.f22541d.a(f10, f11);
            this.f22538a.add(this.f22541d);
            h hVar = h.this;
            c cVar = this.f22541d;
            this.f22541d = new c(f10, f11, f10 - cVar.f22547a, f11 - cVar.f22548b);
            this.f22545h = false;
        }

        List f() {
            return this.f22538a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c {

        /* renamed from: a  reason: collision with root package name */
        float f22547a;

        /* renamed from: b  reason: collision with root package name */
        float f22548b;

        /* renamed from: c  reason: collision with root package name */
        float f22549c;

        /* renamed from: d  reason: collision with root package name */
        float f22550d;

        /* renamed from: e  reason: collision with root package name */
        boolean f22551e = false;

        c(float f10, float f11, float f12, float f13) {
            this.f22549c = 0.0f;
            this.f22550d = 0.0f;
            this.f22547a = f10;
            this.f22548b = f11;
            double sqrt = Math.sqrt((f12 * f12) + (f13 * f13));
            if (sqrt != 0.0d) {
                this.f22549c = (float) (f12 / sqrt);
                this.f22550d = (float) (f13 / sqrt);
            }
        }

        void a(float f10, float f11) {
            float f12 = f10 - this.f22547a;
            float f13 = f11 - this.f22548b;
            double sqrt = Math.sqrt((f12 * f12) + (f13 * f13));
            if (sqrt != 0.0d) {
                f12 = (float) (f12 / sqrt);
                f13 = (float) (f13 / sqrt);
            }
            float f14 = this.f22549c;
            if (f12 == (-f14) && f13 == (-this.f22550d)) {
                this.f22551e = true;
                this.f22549c = -f13;
                this.f22550d = f12;
                return;
            }
            this.f22549c = f14 + f12;
            this.f22550d += f13;
        }

        void b(c cVar) {
            float f10 = cVar.f22549c;
            float f11 = this.f22549c;
            if (f10 == (-f11)) {
                float f12 = cVar.f22550d;
                if (f12 == (-this.f22550d)) {
                    this.f22551e = true;
                    this.f22549c = -f12;
                    this.f22550d = cVar.f22549c;
                    return;
                }
            }
            this.f22549c = f11 + f10;
            this.f22550d += cVar.f22550d;
        }

        public String toString() {
            return "(" + this.f22547a + "," + this.f22548b + " " + this.f22549c + "," + this.f22550d + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements g.x {

        /* renamed from: a  reason: collision with root package name */
        Path f22553a = new Path();

        /* renamed from: b  reason: collision with root package name */
        float f22554b;

        /* renamed from: c  reason: collision with root package name */
        float f22555c;

        d(g.w wVar) {
            if (wVar == null) {
                return;
            }
            wVar.h(this);
        }

        @Override // f6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            this.f22553a.quadTo(f10, f11, f12, f13);
            this.f22554b = f12;
            this.f22555c = f13;
        }

        @Override // f6.g.x
        public void b(float f10, float f11) {
            this.f22553a.moveTo(f10, f11);
            this.f22554b = f10;
            this.f22555c = f11;
        }

        @Override // f6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            this.f22553a.cubicTo(f10, f11, f12, f13, f14, f15);
            this.f22554b = f14;
            this.f22555c = f15;
        }

        @Override // f6.g.x
        public void close() {
            this.f22553a.close();
        }

        @Override // f6.g.x
        public void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
            h.h(this.f22554b, this.f22555c, f10, f11, f12, z10, z11, f13, f14, this);
            this.f22554b = f13;
            this.f22555c = f14;
        }

        @Override // f6.g.x
        public void e(float f10, float f11) {
            this.f22553a.lineTo(f10, f11);
            this.f22554b = f10;
            this.f22555c = f11;
        }

        Path f() {
            return this.f22553a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e extends f {

        /* renamed from: e  reason: collision with root package name */
        private Path f22557e;

        e(Path path, float f10, float f11) {
            super(f10, f11);
            this.f22557e = path;
        }

        @Override // f6.h.f, f6.h.j
        public void b(String str) {
            String str2;
            if (h.this.Y0()) {
                if (h.this.f22530d.f22567b) {
                    str2 = str;
                    h.this.f22527a.drawTextOnPath(str2, this.f22557e, this.f22559b, this.f22560c, h.this.f22530d.f22569d);
                } else {
                    str2 = str;
                }
                if (h.this.f22530d.f22568c) {
                    h.this.f22527a.drawTextOnPath(str2, this.f22557e, this.f22559b, this.f22560c, h.this.f22530d.f22570e);
                }
            } else {
                str2 = str;
            }
            this.f22559b += h.this.f22530d.f22569d.measureText(str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f extends j {

        /* renamed from: b  reason: collision with root package name */
        float f22559b;

        /* renamed from: c  reason: collision with root package name */
        float f22560c;

        f(float f10, float f11) {
            super(h.this, null);
            this.f22559b = f10;
            this.f22560c = f11;
        }

        @Override // f6.h.j
        public void b(String str) {
            h.y("TextSequence render", new Object[0]);
            if (h.this.Y0()) {
                if (h.this.f22530d.f22567b) {
                    h.this.f22527a.drawText(str, this.f22559b, this.f22560c, h.this.f22530d.f22569d);
                }
                if (h.this.f22530d.f22568c) {
                    h.this.f22527a.drawText(str, this.f22559b, this.f22560c, h.this.f22530d.f22570e);
                }
            }
            this.f22559b += h.this.f22530d.f22569d.measureText(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class g extends j {

        /* renamed from: b  reason: collision with root package name */
        float f22562b;

        /* renamed from: c  reason: collision with root package name */
        float f22563c;

        /* renamed from: d  reason: collision with root package name */
        Path f22564d;

        g(float f10, float f11, Path path) {
            super(h.this, null);
            this.f22562b = f10;
            this.f22563c = f11;
            this.f22564d = path;
        }

        @Override // f6.h.j
        public boolean a(g.y0 y0Var) {
            if (y0Var instanceof g.z0) {
                h.Z0("Using <textPath> elements in a clip path is not supported.", new Object[0]);
                return false;
            }
            return true;
        }

        @Override // f6.h.j
        public void b(String str) {
            String str2;
            if (h.this.Y0()) {
                Path path = new Path();
                str2 = str;
                h.this.f22530d.f22569d.getTextPath(str2, 0, str.length(), this.f22562b, this.f22563c, path);
                this.f22564d.addPath(path);
            } else {
                str2 = str;
            }
            this.f22562b += h.this.f22530d.f22569d.measureText(str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class i extends j {

        /* renamed from: b  reason: collision with root package name */
        float f22575b;

        /* renamed from: c  reason: collision with root package name */
        float f22576c;

        /* renamed from: d  reason: collision with root package name */
        RectF f22577d;

        i(float f10, float f11) {
            super(h.this, null);
            this.f22577d = new RectF();
            this.f22575b = f10;
            this.f22576c = f11;
        }

        @Override // f6.h.j
        public boolean a(g.y0 y0Var) {
            if (!(y0Var instanceof g.z0)) {
                return true;
            }
            g.z0 z0Var = (g.z0) y0Var;
            g.n0 p10 = y0Var.f22469a.p(z0Var.f22523o);
            if (p10 == null) {
                h.F("TextPath path reference '%s' not found", z0Var.f22523o);
                return false;
            }
            g.v vVar = (g.v) p10;
            Path f10 = new d(vVar.f22506o).f();
            Matrix matrix = vVar.f22458n;
            if (matrix != null) {
                f10.transform(matrix);
            }
            RectF rectF = new RectF();
            f10.computeBounds(rectF, true);
            this.f22577d.union(rectF);
            return false;
        }

        @Override // f6.h.j
        public void b(String str) {
            if (h.this.Y0()) {
                Rect rect = new Rect();
                h.this.f22530d.f22569d.getTextBounds(str, 0, str.length(), rect);
                RectF rectF = new RectF(rect);
                rectF.offset(this.f22575b, this.f22576c);
                this.f22577d.union(rectF);
            }
            this.f22575b += h.this.f22530d.f22569d.measureText(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public abstract class j {
        private j() {
        }

        public boolean a(g.y0 y0Var) {
            return true;
        }

        public abstract void b(String str);

        /* synthetic */ j(h hVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(Canvas canvas, float f10) {
        this.f22527a = canvas;
        this.f22528b = f10;
    }

    private boolean A() {
        Boolean bool = this.f22530d.f22566a.L;
        if (bool != null) {
            return bool.booleanValue();
        }
        return true;
    }

    private void A0(g.n0 n0Var) {
        if (n0Var instanceof g.t) {
            return;
        }
        S0();
        u(n0Var);
        if (n0Var instanceof g.f0) {
            x0((g.f0) n0Var);
        } else if (n0Var instanceof g.e1) {
            E0((g.e1) n0Var);
        } else if (n0Var instanceof g.s0) {
            B0((g.s0) n0Var);
        } else if (n0Var instanceof g.m) {
            q0((g.m) n0Var);
        } else if (n0Var instanceof g.o) {
            r0((g.o) n0Var);
        } else if (n0Var instanceof g.v) {
            t0((g.v) n0Var);
        } else if (n0Var instanceof g.b0) {
            w0((g.b0) n0Var);
        } else if (n0Var instanceof g.d) {
            o0((g.d) n0Var);
        } else if (n0Var instanceof g.i) {
            p0((g.i) n0Var);
        } else if (n0Var instanceof g.q) {
            s0((g.q) n0Var);
        } else if (n0Var instanceof g.a0) {
            v0((g.a0) n0Var);
        } else if (n0Var instanceof g.z) {
            u0((g.z) n0Var);
        } else if (n0Var instanceof g.w0) {
            D0((g.w0) n0Var);
        }
        R0();
    }

    private void B(g.k0 k0Var, Path path) {
        g.o0 o0Var = this.f22530d.f22566a.f22370e;
        if (o0Var instanceof g.u) {
            g.n0 p10 = this.f22529c.p(((g.u) o0Var).f22502d);
            if (p10 instanceof g.y) {
                L(k0Var, path, (g.y) p10);
                return;
            }
        }
        this.f22527a.drawPath(path, this.f22530d.f22569d);
    }

    private void B0(g.s0 s0Var) {
        y("Switch render", new Object[0]);
        W0(this.f22530d, s0Var);
        if (!A()) {
            return;
        }
        Matrix matrix = s0Var.f22464o;
        if (matrix != null) {
            this.f22527a.concat(matrix);
        }
        p(s0Var);
        boolean m02 = m0();
        K0(s0Var);
        if (m02) {
            j0(s0Var);
        }
        U0(s0Var);
    }

    private void C(Path path) {
        C0310h c0310h = this.f22530d;
        if (c0310h.f22566a.W == g.e0.i.NonScalingStroke) {
            Matrix matrix = this.f22527a.getMatrix();
            Path path2 = new Path();
            path.transform(matrix, path2);
            this.f22527a.setMatrix(new Matrix());
            Shader shader = this.f22530d.f22570e.getShader();
            Matrix matrix2 = new Matrix();
            if (shader != null) {
                shader.getLocalMatrix(matrix2);
                Matrix matrix3 = new Matrix(matrix2);
                matrix3.postConcat(matrix);
                shader.setLocalMatrix(matrix3);
            }
            this.f22527a.drawPath(path2, this.f22530d.f22570e);
            this.f22527a.setMatrix(matrix);
            if (shader != null) {
                shader.setLocalMatrix(matrix2);
                return;
            }
            return;
        }
        this.f22527a.drawPath(path, c0310h.f22570e);
    }

    private void C0(g.t0 t0Var, g.b bVar) {
        y("Symbol render", new Object[0]);
        if (bVar.f22340c != 0.0f && bVar.f22341d != 0.0f) {
            f6.e eVar = t0Var.f22479o;
            if (eVar == null) {
                eVar = f6.e.f22297e;
            }
            W0(this.f22530d, t0Var);
            C0310h c0310h = this.f22530d;
            c0310h.f22571f = bVar;
            if (!c0310h.f22566a.G.booleanValue()) {
                g.b bVar2 = this.f22530d.f22571f;
                O0(bVar2.f22338a, bVar2.f22339b, bVar2.f22340c, bVar2.f22341d);
            }
            g.b bVar3 = t0Var.f22495p;
            if (bVar3 != null) {
                this.f22527a.concat(o(this.f22530d.f22571f, bVar3, eVar));
                this.f22530d.f22572g = t0Var.f22495p;
            } else {
                Canvas canvas = this.f22527a;
                g.b bVar4 = this.f22530d.f22571f;
                canvas.translate(bVar4.f22338a, bVar4.f22339b);
            }
            boolean m02 = m0();
            F0(t0Var, true);
            if (m02) {
                j0(t0Var);
            }
            U0(t0Var);
        }
    }

    private float D(float f10, float f11, float f12, float f13) {
        return (f10 * f12) + (f11 * f13);
    }

    private void D0(g.w0 w0Var) {
        float f10;
        float f11;
        float f12;
        y("Text render", new Object[0]);
        W0(this.f22530d, w0Var);
        if (A()) {
            Matrix matrix = w0Var.f22513s;
            if (matrix != null) {
                this.f22527a.concat(matrix);
            }
            List list = w0Var.f22334o;
            float f13 = 0.0f;
            if (list != null && list.size() != 0) {
                f10 = ((g.p) w0Var.f22334o.get(0)).e(this);
            } else {
                f10 = 0.0f;
            }
            List list2 = w0Var.f22335p;
            if (list2 != null && list2.size() != 0) {
                f11 = ((g.p) w0Var.f22335p.get(0)).f(this);
            } else {
                f11 = 0.0f;
            }
            List list3 = w0Var.f22336q;
            if (list3 != null && list3.size() != 0) {
                f12 = ((g.p) w0Var.f22336q.get(0)).e(this);
            } else {
                f12 = 0.0f;
            }
            List list4 = w0Var.f22337r;
            if (list4 != null && list4.size() != 0) {
                f13 = ((g.p) w0Var.f22337r.get(0)).f(this);
            }
            g.e0.f O = O();
            if (O != g.e0.f.Start) {
                float n10 = n(w0Var);
                if (O == g.e0.f.Middle) {
                    n10 /= 2.0f;
                }
                f10 -= n10;
            }
            if (w0Var.f22457h == null) {
                i iVar = new i(f10, f11);
                E(w0Var, iVar);
                RectF rectF = iVar.f22577d;
                w0Var.f22457h = new g.b(rectF.left, rectF.top, rectF.width(), iVar.f22577d.height());
            }
            U0(w0Var);
            r(w0Var);
            p(w0Var);
            boolean m02 = m0();
            E(w0Var, new f(f10 + f12, f11 + f13));
            if (m02) {
                j0(w0Var);
            }
        }
    }

    private void E(g.y0 y0Var, j jVar) {
        if (A()) {
            Iterator it = y0Var.f22433i.iterator();
            boolean z10 = true;
            while (it.hasNext()) {
                g.n0 n0Var = (g.n0) it.next();
                if (n0Var instanceof g.c1) {
                    jVar.b(T0(((g.c1) n0Var).f22352c, z10, !it.hasNext()));
                } else {
                    l0(n0Var, jVar);
                }
                z10 = false;
            }
        }
    }

    private void E0(g.e1 e1Var) {
        float f10;
        y("Use render", new Object[0]);
        g.p pVar = e1Var.f22422s;
        if (pVar == null || !pVar.i()) {
            g.p pVar2 = e1Var.f22423t;
            if (pVar2 == null || !pVar2.i()) {
                W0(this.f22530d, e1Var);
                if (!A()) {
                    return;
                }
                g.n0 p10 = e1Var.f22469a.p(e1Var.f22419p);
                if (p10 == null) {
                    F("Use reference '%s' not found", e1Var.f22419p);
                    return;
                }
                Matrix matrix = e1Var.f22464o;
                if (matrix != null) {
                    this.f22527a.concat(matrix);
                }
                g.p pVar3 = e1Var.f22420q;
                float f11 = 0.0f;
                if (pVar3 != null) {
                    f10 = pVar3.e(this);
                } else {
                    f10 = 0.0f;
                }
                g.p pVar4 = e1Var.f22421r;
                if (pVar4 != null) {
                    f11 = pVar4.f(this);
                }
                this.f22527a.translate(f10, f11);
                p(e1Var);
                boolean m02 = m0();
                i0(e1Var);
                if (p10 instanceof g.f0) {
                    g.b f02 = f0(null, null, e1Var.f22422s, e1Var.f22423t);
                    S0();
                    y0((g.f0) p10, f02);
                    R0();
                } else if (p10 instanceof g.t0) {
                    g.p pVar5 = e1Var.f22422s;
                    if (pVar5 == null) {
                        pVar5 = new g.p(100.0f, g.d1.percent);
                    }
                    g.p pVar6 = e1Var.f22423t;
                    if (pVar6 == null) {
                        pVar6 = new g.p(100.0f, g.d1.percent);
                    }
                    g.b f03 = f0(null, null, pVar5, pVar6);
                    S0();
                    C0((g.t0) p10, f03);
                    R0();
                } else {
                    A0(p10);
                }
                h0();
                if (m02) {
                    j0(e1Var);
                }
                U0(e1Var);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void F(String str, Object... objArr) {
        Log.e("SVGAndroidRenderer", String.format(str, objArr));
    }

    private void F0(g.j0 j0Var, boolean z10) {
        if (z10) {
            i0(j0Var);
        }
        for (g.n0 n0Var : j0Var.getChildren()) {
            A0(n0Var);
        }
        if (z10) {
            h0();
        }
    }

    private void G(g.y0 y0Var, StringBuilder sb2) {
        Iterator it = y0Var.f22433i.iterator();
        boolean z10 = true;
        while (it.hasNext()) {
            g.n0 n0Var = (g.n0) it.next();
            if (n0Var instanceof g.y0) {
                G((g.y0) n0Var, sb2);
            } else if (n0Var instanceof g.c1) {
                sb2.append(T0(((g.c1) n0Var).f22352c, z10, !it.hasNext()));
            }
            z10 = false;
        }
    }

    private void H(g.j jVar, String str) {
        g.n0 p10 = jVar.f22469a.p(str);
        if (p10 == null) {
            Z0("Gradient reference '%s' not found", str);
        } else if (!(p10 instanceof g.j)) {
            F("Gradient href attributes must point to other gradient elements", new Object[0]);
        } else if (p10 == jVar) {
            F("Circular reference in gradient href attribute '%s'", str);
        } else {
            g.j jVar2 = (g.j) p10;
            if (jVar.f22449i == null) {
                jVar.f22449i = jVar2.f22449i;
            }
            if (jVar.f22450j == null) {
                jVar.f22450j = jVar2.f22450j;
            }
            if (jVar.f22451k == null) {
                jVar.f22451k = jVar2.f22451k;
            }
            if (jVar.f22448h.isEmpty()) {
                jVar.f22448h = jVar2.f22448h;
            }
            try {
                if (jVar instanceof g.m0) {
                    I((g.m0) jVar, (g.m0) p10);
                } else {
                    J((g.q0) jVar, (g.q0) p10);
                }
            } catch (ClassCastException unused) {
            }
            String str2 = jVar2.f22452l;
            if (str2 != null) {
                H(jVar, str2);
            }
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:63:0x0101, code lost:
        if (r7 != 8) goto L53;
     */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0038  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0063  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0068  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x006d  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0072  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0079  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x007e  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0083  */
    /* JADX WARN: Removed duplicated region for block: B:34:0x008b  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x0118  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0127  */
    /* JADX WARN: Removed duplicated region for block: B:77:0x014a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void H0(f6.g.r r12, f6.h.c r13) {
        /*
            Method dump skipped, instructions count: 354
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.H0(f6.g$r, f6.h$c):void");
    }

    private void I(g.m0 m0Var, g.m0 m0Var2) {
        if (m0Var.f22465m == null) {
            m0Var.f22465m = m0Var2.f22465m;
        }
        if (m0Var.f22466n == null) {
            m0Var.f22466n = m0Var2.f22466n;
        }
        if (m0Var.f22467o == null) {
            m0Var.f22467o = m0Var2.f22467o;
        }
        if (m0Var.f22468p == null) {
            m0Var.f22468p = m0Var2.f22468p;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:18:0x0038  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0059  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x0076  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0084  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x0098  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x00ac  */
    /* JADX WARN: Removed duplicated region for block: B:52:0x00d0  */
    /* JADX WARN: Removed duplicated region for block: B:58:0x00e9  */
    /* JADX WARN: Removed duplicated region for block: B:63:? A[RETURN, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:65:? A[ADDED_TO_REGION, RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void I0(f6.g.l r10) {
        /*
            Method dump skipped, instructions count: 244
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.I0(f6.g$l):void");
    }

    private void J(g.q0 q0Var, g.q0 q0Var2) {
        if (q0Var.f22484m == null) {
            q0Var.f22484m = q0Var2.f22484m;
        }
        if (q0Var.f22485n == null) {
            q0Var.f22485n = q0Var2.f22485n;
        }
        if (q0Var.f22486o == null) {
            q0Var.f22486o = q0Var2.f22486o;
        }
        if (q0Var.f22487p == null) {
            q0Var.f22487p = q0Var2.f22487p;
        }
        if (q0Var.f22488q == null) {
            q0Var.f22488q = q0Var2.f22488q;
        }
    }

    private void J0(g.s sVar, g.k0 k0Var, g.b bVar) {
        float f10;
        float f11;
        float f12;
        y("Mask render", new Object[0]);
        Boolean bool = sVar.f22496o;
        if (bool != null && bool.booleanValue()) {
            g.p pVar = sVar.f22500s;
            if (pVar != null) {
                f11 = pVar.e(this);
            } else {
                f11 = bVar.f22340c;
            }
            g.p pVar2 = sVar.f22501t;
            if (pVar2 != null) {
                f12 = pVar2.f(this);
            } else {
                f12 = bVar.f22341d;
            }
        } else {
            g.p pVar3 = sVar.f22500s;
            float f13 = 1.2f;
            if (pVar3 != null) {
                f10 = pVar3.d(this, 1.0f);
            } else {
                f10 = 1.2f;
            }
            g.p pVar4 = sVar.f22501t;
            if (pVar4 != null) {
                f13 = pVar4.d(this, 1.0f);
            }
            f11 = f10 * bVar.f22340c;
            f12 = f13 * bVar.f22341d;
        }
        if (f11 != 0.0f && f12 != 0.0f) {
            S0();
            C0310h M = M(sVar);
            this.f22530d = M;
            M.f22566a.f22381x = Float.valueOf(1.0f);
            boolean m02 = m0();
            this.f22527a.save();
            Boolean bool2 = sVar.f22497p;
            if (bool2 != null && !bool2.booleanValue()) {
                this.f22527a.translate(bVar.f22338a, bVar.f22339b);
                this.f22527a.scale(bVar.f22340c, bVar.f22341d);
            }
            F0(sVar, false);
            this.f22527a.restore();
            if (m02) {
                k0(k0Var, bVar);
            }
            R0();
        }
    }

    private void K(g.y yVar, String str) {
        g.n0 p10 = yVar.f22469a.p(str);
        if (p10 == null) {
            Z0("Pattern reference '%s' not found", str);
        } else if (!(p10 instanceof g.y)) {
            F("Pattern href attributes must point to other pattern elements", new Object[0]);
        } else if (p10 == yVar) {
            F("Circular reference in pattern href attribute '%s'", str);
        } else {
            g.y yVar2 = (g.y) p10;
            if (yVar.f22514q == null) {
                yVar.f22514q = yVar2.f22514q;
            }
            if (yVar.f22515r == null) {
                yVar.f22515r = yVar2.f22515r;
            }
            if (yVar.f22516s == null) {
                yVar.f22516s = yVar2.f22516s;
            }
            if (yVar.f22517t == null) {
                yVar.f22517t = yVar2.f22517t;
            }
            if (yVar.f22518u == null) {
                yVar.f22518u = yVar2.f22518u;
            }
            if (yVar.f22519v == null) {
                yVar.f22519v = yVar2.f22519v;
            }
            if (yVar.f22520w == null) {
                yVar.f22520w = yVar2.f22520w;
            }
            if (yVar.f22433i.isEmpty()) {
                yVar.f22433i = yVar2.f22433i;
            }
            if (yVar.f22495p == null) {
                yVar.f22495p = yVar2.f22495p;
            }
            if (yVar.f22479o == null) {
                yVar.f22479o = yVar2.f22479o;
            }
            String str2 = yVar2.f22521x;
            if (str2 != null) {
                K(yVar, str2);
            }
        }
    }

    private void K0(g.s0 s0Var) {
        Set a10;
        String language = Locale.getDefault().getLanguage();
        f6.g.k();
        for (g.n0 n0Var : s0Var.getChildren()) {
            if (n0Var instanceof g.g0) {
                g.g0 g0Var = (g.g0) n0Var;
                if (g0Var.b() == null && ((a10 = g0Var.a()) == null || (!a10.isEmpty() && a10.contains(language)))) {
                    Set f10 = g0Var.f();
                    if (f10 != null) {
                        if (f22526i == null) {
                            V();
                        }
                        if (!f10.isEmpty() && f22526i.containsAll(f10)) {
                        }
                    }
                    Set l10 = g0Var.l();
                    if (l10 != null) {
                        l10.isEmpty();
                    } else {
                        Set m10 = g0Var.m();
                        if (m10 != null) {
                            m10.isEmpty();
                        } else {
                            A0(n0Var);
                            return;
                        }
                    }
                }
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:106:0x020b  */
    /* JADX WARN: Removed duplicated region for block: B:79:0x0190  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void L(f6.g.k0 r21, android.graphics.Path r22, f6.g.y r23) {
        /*
            Method dump skipped, instructions count: 530
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.L(f6.g$k0, android.graphics.Path, f6.g$y):void");
    }

    private void L0(g.z0 z0Var) {
        float f10;
        y("TextPath render", new Object[0]);
        W0(this.f22530d, z0Var);
        if (A() && Y0()) {
            g.n0 p10 = z0Var.f22469a.p(z0Var.f22523o);
            if (p10 == null) {
                F("TextPath reference '%s' not found", z0Var.f22523o);
                return;
            }
            g.v vVar = (g.v) p10;
            Path f11 = new d(vVar.f22506o).f();
            Matrix matrix = vVar.f22458n;
            if (matrix != null) {
                f11.transform(matrix);
            }
            PathMeasure pathMeasure = new PathMeasure(f11, false);
            g.p pVar = z0Var.f22524p;
            if (pVar != null) {
                f10 = pVar.d(this, pathMeasure.getLength());
            } else {
                f10 = 0.0f;
            }
            g.e0.f O = O();
            if (O != g.e0.f.Start) {
                float n10 = n(z0Var);
                if (O == g.e0.f.Middle) {
                    n10 /= 2.0f;
                }
                f10 -= n10;
            }
            r((g.k0) z0Var.d());
            boolean m02 = m0();
            E(z0Var, new e(f11, f10, 0.0f));
            if (m02) {
                j0(z0Var);
            }
        }
    }

    private C0310h M(g.n0 n0Var) {
        C0310h c0310h = new C0310h();
        V0(c0310h, g.e0.a());
        return N(n0Var, c0310h);
    }

    private boolean M0() {
        if (this.f22530d.f22566a.f22381x.floatValue() >= 1.0f && this.f22530d.f22566a.R == null) {
            return false;
        }
        return true;
    }

    private C0310h N(g.n0 n0Var, C0310h c0310h) {
        ArrayList<g.l0> arrayList = new ArrayList();
        while (true) {
            if (n0Var instanceof g.l0) {
                arrayList.add(0, (g.l0) n0Var);
            }
            g.j0 j0Var = n0Var.f22470b;
            if (j0Var == null) {
                break;
            }
            n0Var = (g.n0) j0Var;
        }
        for (g.l0 l0Var : arrayList) {
            W0(c0310h, l0Var);
        }
        C0310h c0310h2 = this.f22530d;
        c0310h.f22572g = c0310h2.f22572g;
        c0310h.f22571f = c0310h2.f22571f;
        return c0310h;
    }

    private void N0() {
        this.f22530d = new C0310h();
        this.f22531e = new Stack();
        V0(this.f22530d, g.e0.a());
        C0310h c0310h = this.f22530d;
        c0310h.f22571f = null;
        c0310h.f22573h = false;
        this.f22531e.push(new C0310h(c0310h));
        this.f22533g = new Stack();
        this.f22532f = new Stack();
    }

    private g.e0.f O() {
        g.e0.f fVar;
        g.e0 e0Var = this.f22530d.f22566a;
        if (e0Var.E != g.e0.h.LTR && (fVar = e0Var.F) != g.e0.f.Middle) {
            g.e0.f fVar2 = g.e0.f.Start;
            if (fVar == fVar2) {
                return g.e0.f.End;
            }
            return fVar2;
        }
        return e0Var.F;
    }

    private void O0(float f10, float f11, float f12, float f13) {
        float f14 = f12 + f10;
        float f15 = f13 + f11;
        g.c cVar = this.f22530d.f22566a.H;
        if (cVar != null) {
            f10 += cVar.f22351d.e(this);
            f11 += this.f22530d.f22566a.H.f22348a.f(this);
            f14 -= this.f22530d.f22566a.H.f22349b.e(this);
            f15 -= this.f22530d.f22566a.H.f22350c.f(this);
        }
        this.f22527a.clipRect(f10, f11, f14, f15);
    }

    private Path.FillType P() {
        g.e0.a aVar = this.f22530d.f22566a.Q;
        if (aVar != null && aVar == g.e0.a.EvenOdd) {
            return Path.FillType.EVEN_ODD;
        }
        return Path.FillType.WINDING;
    }

    private void P0(C0310h c0310h, boolean z10, g.o0 o0Var) {
        Float f10;
        int i10;
        g.e0 e0Var = c0310h.f22566a;
        if (z10) {
            f10 = e0Var.f22372o;
        } else {
            f10 = e0Var.f22374q;
        }
        float floatValue = f10.floatValue();
        if (o0Var instanceof g.f) {
            i10 = ((g.f) o0Var).f22426d;
        } else if (o0Var instanceof g.C0309g) {
            i10 = c0310h.f22566a.f22382y.f22426d;
        } else {
            return;
        }
        int x10 = x(i10, floatValue);
        if (z10) {
            c0310h.f22569d.setColor(x10);
        } else {
            c0310h.f22570e.setColor(x10);
        }
    }

    private void Q0(boolean z10, g.c0 c0Var) {
        boolean z11 = false;
        if (z10) {
            if (W(c0Var.f22461e, 2147483648L)) {
                C0310h c0310h = this.f22530d;
                g.e0 e0Var = c0310h.f22566a;
                g.o0 o0Var = c0Var.f22461e.S;
                e0Var.f22370e = o0Var;
                if (o0Var != null) {
                    z11 = true;
                }
                c0310h.f22567b = z11;
            }
            if (W(c0Var.f22461e, 4294967296L)) {
                this.f22530d.f22566a.f22372o = c0Var.f22461e.T;
            }
            if (W(c0Var.f22461e, 6442450944L)) {
                C0310h c0310h2 = this.f22530d;
                P0(c0310h2, z10, c0310h2.f22566a.f22370e);
                return;
            }
            return;
        }
        if (W(c0Var.f22461e, 2147483648L)) {
            C0310h c0310h3 = this.f22530d;
            g.e0 e0Var2 = c0310h3.f22566a;
            g.o0 o0Var2 = c0Var.f22461e.S;
            e0Var2.f22373p = o0Var2;
            if (o0Var2 != null) {
                z11 = true;
            }
            c0310h3.f22568c = z11;
        }
        if (W(c0Var.f22461e, 4294967296L)) {
            this.f22530d.f22566a.f22374q = c0Var.f22461e.T;
        }
        if (W(c0Var.f22461e, 6442450944L)) {
            C0310h c0310h4 = this.f22530d;
            P0(c0310h4, z10, c0310h4.f22566a.f22373p);
        }
    }

    private void R0() {
        this.f22527a.restore();
        this.f22530d = (C0310h) this.f22531e.pop();
    }

    private void S0() {
        this.f22527a.save();
        this.f22531e.push(this.f22530d);
        this.f22530d = new C0310h(this.f22530d);
    }

    private String T0(String str, boolean z10, boolean z11) {
        if (this.f22530d.f22573h) {
            return str.replaceAll("[\\n\\t]", " ");
        }
        String replaceAll = str.replaceAll("\\n", "").replaceAll("\\t", " ");
        if (z10) {
            replaceAll = replaceAll.replaceAll("^\\s+", "");
        }
        if (z11) {
            replaceAll = replaceAll.replaceAll("\\s+$", "");
        }
        return replaceAll.replaceAll("\\s{2,}", " ");
    }

    private Path.FillType U() {
        g.e0.a aVar = this.f22530d.f22566a.f22371i;
        if (aVar != null && aVar == g.e0.a.EvenOdd) {
            return Path.FillType.EVEN_ODD;
        }
        return Path.FillType.WINDING;
    }

    private void U0(g.k0 k0Var) {
        if (k0Var.f22470b != null && k0Var.f22457h != null) {
            Matrix matrix = new Matrix();
            if (((Matrix) this.f22533g.peek()).invert(matrix)) {
                g.b bVar = k0Var.f22457h;
                float f10 = bVar.f22338a;
                float f11 = bVar.f22339b;
                float b10 = bVar.b();
                g.b bVar2 = k0Var.f22457h;
                float f12 = bVar2.f22339b;
                float b11 = bVar2.b();
                float c10 = k0Var.f22457h.c();
                g.b bVar3 = k0Var.f22457h;
                float[] fArr = {f10, f11, b10, f12, b11, c10, bVar3.f22338a, bVar3.c()};
                matrix.preConcat(this.f22527a.getMatrix());
                matrix.mapPoints(fArr);
                float f13 = fArr[0];
                float f14 = fArr[1];
                RectF rectF = new RectF(f13, f14, f13, f14);
                for (int i10 = 2; i10 <= 6; i10 += 2) {
                    float f15 = fArr[i10];
                    if (f15 < rectF.left) {
                        rectF.left = f15;
                    }
                    if (f15 > rectF.right) {
                        rectF.right = f15;
                    }
                    float f16 = fArr[i10 + 1];
                    if (f16 < rectF.top) {
                        rectF.top = f16;
                    }
                    if (f16 > rectF.bottom) {
                        rectF.bottom = f16;
                    }
                }
                g.k0 k0Var2 = (g.k0) this.f22532f.peek();
                g.b bVar4 = k0Var2.f22457h;
                if (bVar4 == null) {
                    k0Var2.f22457h = g.b.a(rectF.left, rectF.top, rectF.right, rectF.bottom);
                } else {
                    bVar4.e(g.b.a(rectF.left, rectF.top, rectF.right, rectF.bottom));
                }
            }
        }
    }

    private static synchronized void V() {
        synchronized (h.class) {
            HashSet hashSet = new HashSet();
            f22526i = hashSet;
            hashSet.add("Structure");
            f22526i.add("BasicStructure");
            f22526i.add("ConditionalProcessing");
            f22526i.add("Image");
            f22526i.add("Style");
            f22526i.add("ViewportAttribute");
            f22526i.add("Shape");
            f22526i.add("BasicText");
            f22526i.add("PaintAttribute");
            f22526i.add("BasicPaintAttribute");
            f22526i.add("OpacityAttribute");
            f22526i.add("BasicGraphicsAttribute");
            f22526i.add("Marker");
            f22526i.add("Gradient");
            f22526i.add("Pattern");
            f22526i.add("Clip");
            f22526i.add("BasicClip");
            f22526i.add("Mask");
            f22526i.add("View");
        }
    }

    private void V0(C0310h c0310h, g.e0 e0Var) {
        boolean z10;
        boolean z11;
        boolean z12;
        int i10;
        boolean z13;
        boolean z14;
        if (W(e0Var, 4096L)) {
            c0310h.f22566a.f22382y = e0Var.f22382y;
        }
        if (W(e0Var, 2048L)) {
            c0310h.f22566a.f22381x = e0Var.f22381x;
        }
        boolean z15 = false;
        if (W(e0Var, 1L)) {
            c0310h.f22566a.f22370e = e0Var.f22370e;
            g.o0 o0Var = e0Var.f22370e;
            if (o0Var != null && o0Var != g.f.f22425i) {
                z14 = true;
            } else {
                z14 = false;
            }
            c0310h.f22567b = z14;
        }
        if (W(e0Var, 4L)) {
            c0310h.f22566a.f22372o = e0Var.f22372o;
        }
        if (W(e0Var, 6149L)) {
            P0(c0310h, true, c0310h.f22566a.f22370e);
        }
        if (W(e0Var, 2L)) {
            c0310h.f22566a.f22371i = e0Var.f22371i;
        }
        if (W(e0Var, 8L)) {
            c0310h.f22566a.f22373p = e0Var.f22373p;
            g.o0 o0Var2 = e0Var.f22373p;
            if (o0Var2 != null && o0Var2 != g.f.f22425i) {
                z13 = true;
            } else {
                z13 = false;
            }
            c0310h.f22568c = z13;
        }
        if (W(e0Var, 16L)) {
            c0310h.f22566a.f22374q = e0Var.f22374q;
        }
        if (W(e0Var, 6168L)) {
            P0(c0310h, false, c0310h.f22566a.f22373p);
        }
        if (W(e0Var, 34359738368L)) {
            c0310h.f22566a.W = e0Var.W;
        }
        if (W(e0Var, 32L)) {
            g.e0 e0Var2 = c0310h.f22566a;
            g.p pVar = e0Var.f22375r;
            e0Var2.f22375r = pVar;
            c0310h.f22570e.setStrokeWidth(pVar.c(this));
        }
        if (W(e0Var, 64L)) {
            c0310h.f22566a.f22376s = e0Var.f22376s;
            int i11 = a.f22536b[e0Var.f22376s.ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        c0310h.f22570e.setStrokeCap(Paint.Cap.SQUARE);
                    }
                } else {
                    c0310h.f22570e.setStrokeCap(Paint.Cap.ROUND);
                }
            } else {
                c0310h.f22570e.setStrokeCap(Paint.Cap.BUTT);
            }
        }
        if (W(e0Var, 128L)) {
            c0310h.f22566a.f22377t = e0Var.f22377t;
            int i12 = a.f22537c[e0Var.f22377t.ordinal()];
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 == 3) {
                        c0310h.f22570e.setStrokeJoin(Paint.Join.BEVEL);
                    }
                } else {
                    c0310h.f22570e.setStrokeJoin(Paint.Join.ROUND);
                }
            } else {
                c0310h.f22570e.setStrokeJoin(Paint.Join.MITER);
            }
        }
        if (W(e0Var, 256L)) {
            c0310h.f22566a.f22378u = e0Var.f22378u;
            c0310h.f22570e.setStrokeMiter(e0Var.f22378u.floatValue());
        }
        if (W(e0Var, 512L)) {
            c0310h.f22566a.f22379v = e0Var.f22379v;
        }
        if (W(e0Var, 1024L)) {
            c0310h.f22566a.f22380w = e0Var.f22380w;
        }
        Typeface typeface = null;
        if (W(e0Var, 1536L)) {
            g.p[] pVarArr = c0310h.f22566a.f22379v;
            if (pVarArr == null) {
                c0310h.f22570e.setPathEffect(null);
            } else {
                int length = pVarArr.length;
                if (length % 2 == 0) {
                    i10 = length;
                } else {
                    i10 = length * 2;
                }
                float[] fArr = new float[i10];
                float f10 = 0.0f;
                for (int i13 = 0; i13 < i10; i13++) {
                    float c10 = c0310h.f22566a.f22379v[i13 % length].c(this);
                    fArr[i13] = c10;
                    f10 += c10;
                }
                if (f10 == 0.0f) {
                    c0310h.f22570e.setPathEffect(null);
                } else {
                    float c11 = c0310h.f22566a.f22380w.c(this);
                    if (c11 < 0.0f) {
                        c11 = (c11 % f10) + f10;
                    }
                    c0310h.f22570e.setPathEffect(new DashPathEffect(fArr, c11));
                }
            }
        }
        if (W(e0Var, 16384L)) {
            float Q = Q();
            c0310h.f22566a.A = e0Var.A;
            c0310h.f22569d.setTextSize(e0Var.A.d(this, Q));
            c0310h.f22570e.setTextSize(e0Var.A.d(this, Q));
        }
        if (W(e0Var, 8192L)) {
            c0310h.f22566a.f22383z = e0Var.f22383z;
        }
        if (W(e0Var, 32768L)) {
            if (e0Var.B.intValue() == -1 && c0310h.f22566a.B.intValue() > 100) {
                g.e0 e0Var3 = c0310h.f22566a;
                e0Var3.B = Integer.valueOf(e0Var3.B.intValue() - 100);
            } else if (e0Var.B.intValue() == 1 && c0310h.f22566a.B.intValue() < 900) {
                g.e0 e0Var4 = c0310h.f22566a;
                e0Var4.B = Integer.valueOf(e0Var4.B.intValue() + 100);
            } else {
                c0310h.f22566a.B = e0Var.B;
            }
        }
        if (W(e0Var, 65536L)) {
            c0310h.f22566a.C = e0Var.C;
        }
        if (W(e0Var, 106496L)) {
            if (c0310h.f22566a.f22383z != null && this.f22529c != null) {
                f6.g.k();
                for (String str : c0310h.f22566a.f22383z) {
                    g.e0 e0Var5 = c0310h.f22566a;
                    typeface = t(str, e0Var5.B, e0Var5.C);
                    if (typeface != null) {
                        break;
                    }
                }
            }
            if (typeface == null) {
                g.e0 e0Var6 = c0310h.f22566a;
                typeface = t("serif", e0Var6.B, e0Var6.C);
            }
            c0310h.f22569d.setTypeface(typeface);
            c0310h.f22570e.setTypeface(typeface);
        }
        if (W(e0Var, 131072L)) {
            c0310h.f22566a.D = e0Var.D;
            Paint paint = c0310h.f22569d;
            g.e0.EnumC0308g enumC0308g = e0Var.D;
            g.e0.EnumC0308g enumC0308g2 = g.e0.EnumC0308g.LineThrough;
            if (enumC0308g == enumC0308g2) {
                z10 = true;
            } else {
                z10 = false;
            }
            paint.setStrikeThruText(z10);
            Paint paint2 = c0310h.f22569d;
            g.e0.EnumC0308g enumC0308g3 = e0Var.D;
            g.e0.EnumC0308g enumC0308g4 = g.e0.EnumC0308g.Underline;
            if (enumC0308g3 == enumC0308g4) {
                z11 = true;
            } else {
                z11 = false;
            }
            paint2.setUnderlineText(z11);
            Paint paint3 = c0310h.f22570e;
            if (e0Var.D == enumC0308g2) {
                z12 = true;
            } else {
                z12 = false;
            }
            paint3.setStrikeThruText(z12);
            Paint paint4 = c0310h.f22570e;
            if (e0Var.D == enumC0308g4) {
                z15 = true;
            }
            paint4.setUnderlineText(z15);
        }
        if (W(e0Var, 68719476736L)) {
            c0310h.f22566a.E = e0Var.E;
        }
        if (W(e0Var, 262144L)) {
            c0310h.f22566a.F = e0Var.F;
        }
        if (W(e0Var, 524288L)) {
            c0310h.f22566a.G = e0Var.G;
        }
        if (W(e0Var, 2097152L)) {
            c0310h.f22566a.I = e0Var.I;
        }
        if (W(e0Var, 4194304L)) {
            c0310h.f22566a.J = e0Var.J;
        }
        if (W(e0Var, 8388608L)) {
            c0310h.f22566a.K = e0Var.K;
        }
        if (W(e0Var, 16777216L)) {
            c0310h.f22566a.L = e0Var.L;
        }
        if (W(e0Var, 33554432L)) {
            c0310h.f22566a.M = e0Var.M;
        }
        if (W(e0Var, 1048576L)) {
            c0310h.f22566a.H = e0Var.H;
        }
        if (W(e0Var, 268435456L)) {
            c0310h.f22566a.P = e0Var.P;
        }
        if (W(e0Var, 536870912L)) {
            c0310h.f22566a.Q = e0Var.Q;
        }
        if (W(e0Var, 1073741824L)) {
            c0310h.f22566a.R = e0Var.R;
        }
        if (W(e0Var, 67108864L)) {
            c0310h.f22566a.N = e0Var.N;
        }
        if (W(e0Var, 134217728L)) {
            c0310h.f22566a.O = e0Var.O;
        }
        if (W(e0Var, 8589934592L)) {
            c0310h.f22566a.U = e0Var.U;
        }
        if (W(e0Var, 17179869184L)) {
            c0310h.f22566a.V = e0Var.V;
        }
        if (W(e0Var, 137438953472L)) {
            c0310h.f22566a.X = e0Var.X;
        }
    }

    private boolean W(g.e0 e0Var, long j10) {
        if ((e0Var.f22369d & j10) != 0) {
            return true;
        }
        return false;
    }

    private void W0(C0310h c0310h, g.l0 l0Var) {
        boolean z10;
        if (l0Var.f22470b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c0310h.f22566a.b(z10);
        g.e0 e0Var = l0Var.f22461e;
        if (e0Var != null) {
            V0(c0310h, e0Var);
        }
        if (this.f22529c.n()) {
            for (b.p pVar : this.f22529c.d()) {
                if (f6.b.l(this.f22534h, pVar.f22276a, l0Var)) {
                    V0(c0310h, pVar.f22277b);
                }
            }
        }
        g.e0 e0Var2 = l0Var.f22462f;
        if (e0Var2 != null) {
            V0(c0310h, e0Var2);
        }
    }

    private void X(boolean z10, g.b bVar, g.m0 m0Var) {
        boolean z11;
        Paint paint;
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        float f15;
        float f16;
        float f17;
        float f18;
        float f19;
        float f20;
        String str = m0Var.f22452l;
        if (str != null) {
            H(m0Var, str);
        }
        Boolean bool = m0Var.f22449i;
        int i10 = 0;
        if (bool != null && bool.booleanValue()) {
            z11 = true;
        } else {
            z11 = false;
        }
        C0310h c0310h = this.f22530d;
        if (z10) {
            paint = c0310h.f22569d;
        } else {
            paint = c0310h.f22570e;
        }
        if (z11) {
            g.b S = S();
            g.p pVar = m0Var.f22465m;
            if (pVar != null) {
                f18 = pVar.e(this);
            } else {
                f18 = 0.0f;
            }
            g.p pVar2 = m0Var.f22466n;
            if (pVar2 != null) {
                f11 = pVar2.f(this);
            } else {
                f11 = 0.0f;
            }
            g.p pVar3 = m0Var.f22467o;
            if (pVar3 != null) {
                f19 = pVar3.e(this);
            } else {
                f19 = S.f22340c;
            }
            g.p pVar4 = m0Var.f22468p;
            if (pVar4 != null) {
                f20 = pVar4.f(this);
            } else {
                f20 = 0.0f;
            }
            f16 = f19;
            f14 = f18;
            f15 = f20;
        } else {
            g.p pVar5 = m0Var.f22465m;
            if (pVar5 != null) {
                f10 = pVar5.d(this, 1.0f);
            } else {
                f10 = 0.0f;
            }
            g.p pVar6 = m0Var.f22466n;
            if (pVar6 != null) {
                f11 = pVar6.d(this, 1.0f);
            } else {
                f11 = 0.0f;
            }
            g.p pVar7 = m0Var.f22467o;
            if (pVar7 != null) {
                f12 = pVar7.d(this, 1.0f);
            } else {
                f12 = 1.0f;
            }
            g.p pVar8 = m0Var.f22468p;
            if (pVar8 != null) {
                f13 = pVar8.d(this, 1.0f);
            } else {
                f13 = 0.0f;
            }
            f14 = f10;
            f15 = f13;
            f16 = f12;
        }
        float f21 = f11;
        S0();
        this.f22530d = M(m0Var);
        Matrix matrix = new Matrix();
        if (!z11) {
            matrix.preTranslate(bVar.f22338a, bVar.f22339b);
            matrix.preScale(bVar.f22340c, bVar.f22341d);
        }
        Matrix matrix2 = m0Var.f22450j;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        int size = m0Var.f22448h.size();
        if (size == 0) {
            R0();
            if (z10) {
                this.f22530d.f22567b = false;
                return;
            } else {
                this.f22530d.f22568c = false;
                return;
            }
        }
        int[] iArr = new int[size];
        float[] fArr = new float[size];
        float f22 = -1.0f;
        for (g.n0 n0Var : m0Var.f22448h) {
            g.d0 d0Var = (g.d0) n0Var;
            Float f23 = d0Var.f22357h;
            if (f23 != null) {
                f17 = f23.floatValue();
            } else {
                f17 = 0.0f;
            }
            if (i10 != 0 && f17 < f22) {
                fArr[i10] = f22;
            } else {
                fArr[i10] = f17;
                f22 = f17;
            }
            S0();
            W0(this.f22530d, d0Var);
            g.e0 e0Var = this.f22530d.f22566a;
            g.f fVar = (g.f) e0Var.N;
            if (fVar == null) {
                fVar = g.f.f22424e;
            }
            iArr[i10] = x(fVar.f22426d, e0Var.O.floatValue());
            i10++;
            R0();
        }
        if ((f14 == f16 && f21 == f15) || size == 1) {
            R0();
            paint.setColor(iArr[size - 1]);
            return;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        g.k kVar = m0Var.f22451k;
        if (kVar != null) {
            if (kVar == g.k.reflect) {
                tileMode = Shader.TileMode.MIRROR;
            } else if (kVar == g.k.repeat) {
                tileMode = Shader.TileMode.REPEAT;
            }
        }
        Shader.TileMode tileMode2 = tileMode;
        R0();
        LinearGradient linearGradient = new LinearGradient(f14, f21, f16, f15, iArr, fArr, tileMode2);
        linearGradient.setLocalMatrix(matrix);
        paint.setShader(linearGradient);
        paint.setAlpha(w(this.f22530d.f22566a.f22372o.floatValue()));
    }

    private void X0() {
        int i10;
        g.e0 e0Var = this.f22530d.f22566a;
        g.o0 o0Var = e0Var.U;
        if (o0Var instanceof g.f) {
            i10 = ((g.f) o0Var).f22426d;
        } else if (o0Var instanceof g.C0309g) {
            i10 = e0Var.f22382y.f22426d;
        } else {
            return;
        }
        Float f10 = e0Var.V;
        if (f10 != null) {
            i10 = x(i10, f10.floatValue());
        }
        this.f22527a.drawColor(i10);
    }

    private Path Y(g.d dVar) {
        float f10;
        g.p pVar = dVar.f22354o;
        float f11 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = dVar.f22355p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        }
        float f12 = f11;
        float c10 = dVar.f22356q.c(this);
        float f13 = f10 - c10;
        float f14 = f12 - c10;
        float f15 = f10 + c10;
        float f16 = f12 + c10;
        if (dVar.f22457h == null) {
            float f17 = 2.0f * c10;
            dVar.f22457h = new g.b(f13, f14, f17, f17);
        }
        float f18 = c10 * 0.5522848f;
        Path path = new Path();
        path.moveTo(f10, f14);
        float f19 = f10 + f18;
        float f20 = f12 - f18;
        path.cubicTo(f19, f14, f15, f20, f15, f12);
        float f21 = f12 + f18;
        path.cubicTo(f15, f21, f19, f16, f10, f16);
        float f22 = f10 - f18;
        path.cubicTo(f22, f16, f13, f21, f13, f12);
        path.cubicTo(f13, f20, f22, f14, f10, f14);
        path.close();
        return path;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean Y0() {
        Boolean bool = this.f22530d.f22566a.M;
        if (bool != null) {
            return bool.booleanValue();
        }
        return true;
    }

    private Path Z(g.i iVar) {
        float f10;
        g.p pVar = iVar.f22439o;
        float f11 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = iVar.f22440p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        }
        float f12 = f11;
        float e10 = iVar.f22441q.e(this);
        float f13 = iVar.f22442r.f(this);
        float f14 = f10 - e10;
        float f15 = f12 - f13;
        float f16 = f10 + e10;
        float f17 = f12 + f13;
        if (iVar.f22457h == null) {
            iVar.f22457h = new g.b(f14, f15, e10 * 2.0f, 2.0f * f13);
        }
        float f18 = e10 * 0.5522848f;
        float f19 = f13 * 0.5522848f;
        Path path = new Path();
        path.moveTo(f10, f15);
        float f20 = f10 + f18;
        float f21 = f12 - f19;
        path.cubicTo(f20, f15, f16, f21, f16, f12);
        float f22 = f12 + f19;
        path.cubicTo(f16, f22, f20, f17, f10, f17);
        float f23 = f10 - f18;
        path.cubicTo(f23, f17, f14, f22, f14, f12);
        path.cubicTo(f14, f21, f23, f15, f10, f15);
        path.close();
        return path;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void Z0(String str, Object... objArr) {
        Log.w("SVGAndroidRenderer", String.format(str, objArr));
    }

    private Path a0(g.q qVar) {
        float e10;
        float f10;
        float e11;
        g.p pVar = qVar.f22480o;
        float f11 = 0.0f;
        if (pVar == null) {
            e10 = 0.0f;
        } else {
            e10 = pVar.e(this);
        }
        g.p pVar2 = qVar.f22481p;
        if (pVar2 == null) {
            f10 = 0.0f;
        } else {
            f10 = pVar2.f(this);
        }
        g.p pVar3 = qVar.f22482q;
        if (pVar3 == null) {
            e11 = 0.0f;
        } else {
            e11 = pVar3.e(this);
        }
        g.p pVar4 = qVar.f22483r;
        if (pVar4 != null) {
            f11 = pVar4.f(this);
        }
        if (qVar.f22457h == null) {
            qVar.f22457h = new g.b(Math.min(e10, e11), Math.min(f10, f11), Math.abs(e11 - e10), Math.abs(f11 - f10));
        }
        Path path = new Path();
        path.moveTo(e10, f10);
        path.lineTo(e11, f11);
        return path;
    }

    private Path b0(g.z zVar) {
        Path path = new Path();
        float[] fArr = zVar.f22522o;
        path.moveTo(fArr[0], fArr[1]);
        int i10 = 2;
        while (true) {
            float[] fArr2 = zVar.f22522o;
            if (i10 >= fArr2.length) {
                break;
            }
            path.lineTo(fArr2[i10], fArr2[i10 + 1]);
            i10 += 2;
        }
        if (zVar instanceof g.a0) {
            path.close();
        }
        if (zVar.f22457h == null) {
            zVar.f22457h = m(path);
        }
        return path;
    }

    /* JADX WARN: Removed duplicated region for block: B:16:0x0048  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x004e  */
    /* JADX WARN: Removed duplicated region for block: B:20:0x0053  */
    /* JADX WARN: Removed duplicated region for block: B:21:0x0059  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private android.graphics.Path c0(f6.g.b0 r20) {
        /*
            Method dump skipped, instructions count: 224
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.c0(f6.g$b0):android.graphics.Path");
    }

    private Path d0(g.w0 w0Var) {
        float f10;
        float f11;
        float f12;
        List list = w0Var.f22334o;
        float f13 = 0.0f;
        if (list != null && list.size() != 0) {
            f10 = ((g.p) w0Var.f22334o.get(0)).e(this);
        } else {
            f10 = 0.0f;
        }
        List list2 = w0Var.f22335p;
        if (list2 != null && list2.size() != 0) {
            f11 = ((g.p) w0Var.f22335p.get(0)).f(this);
        } else {
            f11 = 0.0f;
        }
        List list3 = w0Var.f22336q;
        if (list3 != null && list3.size() != 0) {
            f12 = ((g.p) w0Var.f22336q.get(0)).e(this);
        } else {
            f12 = 0.0f;
        }
        List list4 = w0Var.f22337r;
        if (list4 != null && list4.size() != 0) {
            f13 = ((g.p) w0Var.f22337r.get(0)).f(this);
        }
        if (this.f22530d.f22566a.F != g.e0.f.Start) {
            float n10 = n(w0Var);
            if (this.f22530d.f22566a.F == g.e0.f.Middle) {
                n10 /= 2.0f;
            }
            f10 -= n10;
        }
        if (w0Var.f22457h == null) {
            i iVar = new i(f10, f11);
            E(w0Var, iVar);
            RectF rectF = iVar.f22577d;
            w0Var.f22457h = new g.b(rectF.left, rectF.top, rectF.width(), iVar.f22577d.height());
        }
        Path path = new Path();
        E(w0Var, new g(f10 + f12, f11 + f13, path));
        return path;
    }

    private void e0(boolean z10, g.b bVar, g.q0 q0Var) {
        boolean z11;
        Paint paint;
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        float f15;
        float e10;
        float f16;
        float c10;
        String str = q0Var.f22452l;
        if (str != null) {
            H(q0Var, str);
        }
        Boolean bool = q0Var.f22449i;
        int i10 = 0;
        if (bool != null && bool.booleanValue()) {
            z11 = true;
        } else {
            z11 = false;
        }
        C0310h c0310h = this.f22530d;
        if (z10) {
            paint = c0310h.f22569d;
        } else {
            paint = c0310h.f22570e;
        }
        if (z11) {
            g.p pVar = new g.p(50.0f, g.d1.percent);
            g.p pVar2 = q0Var.f22484m;
            if (pVar2 != null) {
                e10 = pVar2.e(this);
            } else {
                e10 = pVar.e(this);
            }
            g.p pVar3 = q0Var.f22485n;
            if (pVar3 != null) {
                f16 = pVar3.f(this);
            } else {
                f16 = pVar.f(this);
            }
            g.p pVar4 = q0Var.f22486o;
            if (pVar4 != null) {
                c10 = pVar4.c(this);
            } else {
                c10 = pVar.c(this);
            }
            f13 = c10;
            f12 = e10;
            f14 = f16;
        } else {
            g.p pVar5 = q0Var.f22484m;
            float f17 = 0.5f;
            if (pVar5 != null) {
                f10 = pVar5.d(this, 1.0f);
            } else {
                f10 = 0.5f;
            }
            g.p pVar6 = q0Var.f22485n;
            if (pVar6 != null) {
                f11 = pVar6.d(this, 1.0f);
            } else {
                f11 = 0.5f;
            }
            g.p pVar7 = q0Var.f22486o;
            if (pVar7 != null) {
                f17 = pVar7.d(this, 1.0f);
            }
            f12 = f10;
            f13 = f17;
            f14 = f11;
        }
        S0();
        this.f22530d = M(q0Var);
        Matrix matrix = new Matrix();
        if (!z11) {
            matrix.preTranslate(bVar.f22338a, bVar.f22339b);
            matrix.preScale(bVar.f22340c, bVar.f22341d);
        }
        Matrix matrix2 = q0Var.f22450j;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        int size = q0Var.f22448h.size();
        if (size == 0) {
            R0();
            if (z10) {
                this.f22530d.f22567b = false;
                return;
            } else {
                this.f22530d.f22568c = false;
                return;
            }
        }
        int[] iArr = new int[size];
        float[] fArr = new float[size];
        float f18 = -1.0f;
        for (g.n0 n0Var : q0Var.f22448h) {
            g.d0 d0Var = (g.d0) n0Var;
            Float f19 = d0Var.f22357h;
            if (f19 != null) {
                f15 = f19.floatValue();
            } else {
                f15 = 0.0f;
            }
            if (i10 != 0 && f15 < f18) {
                fArr[i10] = f18;
            } else {
                fArr[i10] = f15;
                f18 = f15;
            }
            S0();
            W0(this.f22530d, d0Var);
            g.e0 e0Var = this.f22530d.f22566a;
            g.f fVar = (g.f) e0Var.N;
            if (fVar == null) {
                fVar = g.f.f22424e;
            }
            iArr[i10] = x(fVar.f22426d, e0Var.O.floatValue());
            i10++;
            R0();
        }
        if (f13 != 0.0f && size != 1) {
            Shader.TileMode tileMode = Shader.TileMode.CLAMP;
            g.k kVar = q0Var.f22451k;
            if (kVar != null) {
                if (kVar == g.k.reflect) {
                    tileMode = Shader.TileMode.MIRROR;
                } else if (kVar == g.k.repeat) {
                    tileMode = Shader.TileMode.REPEAT;
                }
            }
            Shader.TileMode tileMode2 = tileMode;
            R0();
            RadialGradient radialGradient = new RadialGradient(f12, f14, f13, iArr, fArr, tileMode2);
            radialGradient.setLocalMatrix(matrix);
            paint.setShader(radialGradient);
            paint.setAlpha(w(this.f22530d.f22566a.f22372o.floatValue()));
            return;
        }
        R0();
        paint.setColor(iArr[size - 1]);
    }

    private g.b f0(g.p pVar, g.p pVar2, g.p pVar3, g.p pVar4) {
        float f10;
        float f11;
        float f12;
        float f13 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        if (pVar2 != null) {
            f13 = pVar2.f(this);
        }
        g.b S = S();
        if (pVar3 != null) {
            f11 = pVar3.e(this);
        } else {
            f11 = S.f22340c;
        }
        if (pVar4 != null) {
            f12 = pVar4.f(this);
        } else {
            f12 = S.f22341d;
        }
        return new g.b(f10, f13, f11, f12);
    }

    private Path g0(g.k0 k0Var, boolean z10) {
        Path d02;
        Path j10;
        this.f22531e.push(this.f22530d);
        C0310h c0310h = new C0310h(this.f22530d);
        this.f22530d = c0310h;
        W0(c0310h, k0Var);
        if (A() && Y0()) {
            if (k0Var instanceof g.e1) {
                if (!z10) {
                    F("<use> elements inside a <clipPath> cannot reference another <use>", new Object[0]);
                }
                g.e1 e1Var = (g.e1) k0Var;
                g.n0 p10 = k0Var.f22469a.p(e1Var.f22419p);
                if (p10 == null) {
                    F("Use reference '%s' not found", e1Var.f22419p);
                    this.f22530d = (C0310h) this.f22531e.pop();
                    return null;
                } else if (!(p10 instanceof g.k0)) {
                    this.f22530d = (C0310h) this.f22531e.pop();
                    return null;
                } else {
                    d02 = g0((g.k0) p10, false);
                    if (d02 == null) {
                        return null;
                    }
                    if (e1Var.f22457h == null) {
                        e1Var.f22457h = m(d02);
                    }
                    Matrix matrix = e1Var.f22464o;
                    if (matrix != null) {
                        d02.transform(matrix);
                    }
                }
            } else if (k0Var instanceof g.l) {
                g.l lVar = (g.l) k0Var;
                if (k0Var instanceof g.v) {
                    d02 = new d(((g.v) k0Var).f22506o).f();
                    if (k0Var.f22457h == null) {
                        k0Var.f22457h = m(d02);
                    }
                } else {
                    d02 = k0Var instanceof g.b0 ? c0((g.b0) k0Var) : k0Var instanceof g.d ? Y((g.d) k0Var) : k0Var instanceof g.i ? Z((g.i) k0Var) : k0Var instanceof g.z ? b0((g.z) k0Var) : null;
                }
                if (d02 == null) {
                    return null;
                }
                if (lVar.f22457h == null) {
                    lVar.f22457h = m(d02);
                }
                Matrix matrix2 = lVar.f22458n;
                if (matrix2 != null) {
                    d02.transform(matrix2);
                }
                d02.setFillType(P());
            } else if (k0Var instanceof g.w0) {
                g.w0 w0Var = (g.w0) k0Var;
                d02 = d0(w0Var);
                if (d02 == null) {
                    return null;
                }
                Matrix matrix3 = w0Var.f22513s;
                if (matrix3 != null) {
                    d02.transform(matrix3);
                }
                d02.setFillType(P());
            } else {
                F("Invalid %s element found in clipPath definition", k0Var.n());
                return null;
            }
            if (this.f22530d.f22566a.P != null && (j10 = j(k0Var, k0Var.f22457h)) != null) {
                d02.op(j10, Path.Op.INTERSECT);
            }
            this.f22530d = (C0310h) this.f22531e.pop();
            return d02;
        }
        this.f22530d = (C0310h) this.f22531e.pop();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void h(float f10, float f11, float f12, float f13, float f14, boolean z10, boolean z11, float f15, float f16, g.x xVar) {
        double d10;
        double d11;
        if (f10 != f15 || f11 != f16) {
            if (f12 != 0.0f && f13 != 0.0f) {
                float abs = Math.abs(f12);
                float abs2 = Math.abs(f13);
                double radians = Math.toRadians(f14 % 360.0d);
                double cos = Math.cos(radians);
                double sin = Math.sin(radians);
                double d12 = (f10 - f15) / 2.0d;
                double d13 = (f11 - f16) / 2.0d;
                double d14 = (cos * d12) + (sin * d13);
                double d15 = ((-sin) * d12) + (cos * d13);
                double d16 = abs * abs;
                double d17 = abs2 * abs2;
                double d18 = d14 * d14;
                double d19 = d15 * d15;
                double d20 = (d18 / d16) + (d19 / d17);
                if (d20 > 0.99999d) {
                    double sqrt = Math.sqrt(d20) * 1.00001d;
                    abs = (float) (abs * sqrt);
                    abs2 = (float) (sqrt * abs2);
                    d16 = abs * abs;
                    d17 = abs2 * abs2;
                }
                double d21 = 1.0d;
                if (z10 == z11) {
                    d10 = -1.0d;
                } else {
                    d10 = 1.0d;
                }
                double d22 = d16 * d17;
                double d23 = d16 * d19;
                double d24 = d17 * d18;
                double d25 = ((d22 - d23) - d24) / (d23 + d24);
                if (d25 < 0.0d) {
                    d25 = 0.0d;
                }
                double sqrt2 = d10 * Math.sqrt(d25);
                double d26 = abs;
                double d27 = abs2;
                double d28 = ((d26 * d15) / d27) * sqrt2;
                double d29 = (-((d27 * d14) / d26)) * sqrt2;
                double d30 = ((f10 + f15) / 2.0d) + ((cos * d28) - (sin * d29));
                double d31 = ((f11 + f16) / 2.0d) + (sin * d28) + (cos * d29);
                double d32 = (d14 - d28) / d26;
                double d33 = (d15 - d29) / d27;
                double d34 = ((-d14) - d28) / d26;
                double d35 = ((-d15) - d29) / d27;
                double d36 = (d32 * d32) + (d33 * d33);
                double sqrt3 = Math.sqrt(d36);
                if (d33 < 0.0d) {
                    d11 = -1.0d;
                } else {
                    d11 = 1.0d;
                }
                double acos = d11 * Math.acos(d32 / sqrt3);
                double sqrt4 = Math.sqrt(d36 * ((d34 * d34) + (d35 * d35)));
                double d37 = (d32 * d34) + (d33 * d35);
                if ((d32 * d35) - (d33 * d34) < 0.0d) {
                    d21 = -1.0d;
                }
                double v10 = d21 * v(d37 / sqrt4);
                if (!z11 && v10 > 0.0d) {
                    v10 -= 6.283185307179586d;
                } else if (z11 && v10 < 0.0d) {
                    v10 += 6.283185307179586d;
                }
                float[] i10 = i(acos % 6.283185307179586d, v10 % 6.283185307179586d);
                Matrix matrix = new Matrix();
                matrix.postScale(abs, abs2);
                matrix.postRotate(f14);
                matrix.postTranslate((float) d30, (float) d31);
                matrix.mapPoints(i10);
                i10[i10.length - 2] = f15;
                i10[i10.length - 1] = f16;
                for (int i11 = 0; i11 < i10.length; i11 += 6) {
                    xVar.c(i10[i11], i10[i11 + 1], i10[i11 + 2], i10[i11 + 3], i10[i11 + 4], i10[i11 + 5]);
                }
                return;
            }
            xVar.e(f15, f16);
        }
    }

    private void h0() {
        this.f22532f.pop();
        this.f22533g.pop();
    }

    private static float[] i(double d10, double d11) {
        int ceil = (int) Math.ceil((Math.abs(d11) * 2.0d) / 3.141592653589793d);
        double d12 = d11 / ceil;
        double d13 = d12 / 2.0d;
        double sin = (Math.sin(d13) * 1.3333333333333333d) / (Math.cos(d13) + 1.0d);
        float[] fArr = new float[ceil * 6];
        int i10 = 0;
        int i11 = 0;
        while (i10 < ceil) {
            double d14 = d10 + (i10 * d12);
            double cos = Math.cos(d14);
            double sin2 = Math.sin(d14);
            float[] fArr2 = fArr;
            fArr2[i11] = (float) (cos - (sin * sin2));
            fArr2[i11 + 1] = (float) (sin2 + (cos * sin));
            double d15 = d14 + d12;
            double cos2 = Math.cos(d15);
            double sin3 = Math.sin(d15);
            fArr2[i11 + 2] = (float) ((sin * sin3) + cos2);
            fArr2[i11 + 3] = (float) (sin3 - (sin * cos2));
            int i12 = i11 + 5;
            fArr2[i11 + 4] = (float) cos2;
            i11 += 6;
            fArr2[i12] = (float) sin3;
            i10++;
            fArr = fArr2;
            ceil = ceil;
        }
        return fArr;
    }

    private void i0(g.j0 j0Var) {
        this.f22532f.push(j0Var);
        this.f22533g.push(this.f22527a.getMatrix());
    }

    private Path j(g.k0 k0Var, g.b bVar) {
        boolean z10;
        Path g02;
        g.n0 p10 = k0Var.f22469a.p(this.f22530d.f22566a.P);
        if (p10 == null) {
            F("ClipPath reference '%s' not found", this.f22530d.f22566a.P);
            return null;
        }
        g.e eVar = (g.e) p10;
        this.f22531e.push(this.f22530d);
        this.f22530d = M(eVar);
        Boolean bool = eVar.f22368p;
        if (bool != null && !bool.booleanValue()) {
            z10 = false;
        } else {
            z10 = true;
        }
        Matrix matrix = new Matrix();
        if (!z10) {
            matrix.preTranslate(bVar.f22338a, bVar.f22339b);
            matrix.preScale(bVar.f22340c, bVar.f22341d);
        }
        Matrix matrix2 = eVar.f22464o;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        Path path = new Path();
        for (g.n0 n0Var : eVar.f22433i) {
            if ((n0Var instanceof g.k0) && (g02 = g0((g.k0) n0Var, true)) != null) {
                path.op(g02, Path.Op.UNION);
            }
        }
        if (this.f22530d.f22566a.P != null) {
            if (eVar.f22457h == null) {
                eVar.f22457h = m(path);
            }
            Path j10 = j(eVar, eVar.f22457h);
            if (j10 != null) {
                path.op(j10, Path.Op.INTERSECT);
            }
        }
        path.transform(matrix);
        this.f22530d = (C0310h) this.f22531e.pop();
        return path;
    }

    private void j0(g.k0 k0Var) {
        k0(k0Var, k0Var.f22457h);
    }

    private List k(g.q qVar) {
        float f10;
        float f11;
        float f12;
        g.p pVar = qVar.f22480o;
        float f13 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = qVar.f22481p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        } else {
            f11 = 0.0f;
        }
        g.p pVar3 = qVar.f22482q;
        if (pVar3 != null) {
            f12 = pVar3.e(this);
        } else {
            f12 = 0.0f;
        }
        g.p pVar4 = qVar.f22483r;
        if (pVar4 != null) {
            f13 = pVar4.f(this);
        }
        float f14 = f13;
        ArrayList arrayList = new ArrayList(2);
        float f15 = f12 - f10;
        float f16 = f14 - f11;
        arrayList.add(new c(f10, f11, f15, f16));
        arrayList.add(new c(f12, f14, f15, f16));
        return arrayList;
    }

    private void k0(g.k0 k0Var, g.b bVar) {
        if (this.f22530d.f22566a.R != null) {
            Paint paint = new Paint();
            PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
            paint.setXfermode(new PorterDuffXfermode(mode));
            this.f22527a.saveLayer(null, paint, 31);
            Paint paint2 = new Paint();
            paint2.setColorFilter(new ColorMatrixColorFilter(new ColorMatrix(new float[]{0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.2127f, 0.7151f, 0.0722f, 0.0f, 0.0f})));
            this.f22527a.saveLayer(null, paint2, 31);
            g.s sVar = (g.s) this.f22529c.p(this.f22530d.f22566a.R);
            J0(sVar, k0Var, bVar);
            this.f22527a.restore();
            Paint paint3 = new Paint();
            paint3.setXfermode(new PorterDuffXfermode(mode));
            this.f22527a.saveLayer(null, paint3, 31);
            J0(sVar, k0Var, bVar);
            this.f22527a.restore();
            this.f22527a.restore();
        }
        R0();
    }

    private List l(g.z zVar) {
        int length = zVar.f22522o.length;
        int i10 = 2;
        if (length < 2) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        float[] fArr = zVar.f22522o;
        c cVar = new c(fArr[0], fArr[1], 0.0f, 0.0f);
        float f10 = 0.0f;
        float f11 = 0.0f;
        while (i10 < length) {
            float[] fArr2 = zVar.f22522o;
            float f12 = fArr2[i10];
            float f13 = fArr2[i10 + 1];
            cVar.a(f12, f13);
            arrayList.add(cVar);
            i10 += 2;
            cVar = new c(f12, f13, f12 - cVar.f22547a, f13 - cVar.f22548b);
            f10 = f12;
            f11 = f13;
        }
        if (zVar instanceof g.a0) {
            float[] fArr3 = zVar.f22522o;
            float f14 = fArr3[0];
            if (f10 != f14) {
                float f15 = fArr3[1];
                if (f11 != f15) {
                    cVar.a(f14, f15);
                    arrayList.add(cVar);
                    c cVar2 = new c(f14, f15, f14 - cVar.f22547a, f15 - cVar.f22548b);
                    cVar2.b((c) arrayList.get(0));
                    arrayList.add(cVar2);
                    arrayList.set(0, cVar2);
                }
            }
            return arrayList;
        }
        arrayList.add(cVar);
        return arrayList;
    }

    private void l0(g.n0 n0Var, j jVar) {
        boolean z10;
        float f10;
        float f11;
        float f12;
        g.e0.f O;
        float e10;
        if (jVar.a((g.y0) n0Var)) {
            if (n0Var instanceof g.z0) {
                S0();
                L0((g.z0) n0Var);
                R0();
            } else if (n0Var instanceof g.v0) {
                y("TSpan render", new Object[0]);
                S0();
                g.v0 v0Var = (g.v0) n0Var;
                W0(this.f22530d, v0Var);
                if (A()) {
                    List list = v0Var.f22334o;
                    if (list != null && list.size() > 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    boolean z11 = jVar instanceof f;
                    float f13 = 0.0f;
                    if (z11) {
                        if (!z10) {
                            e10 = ((f) jVar).f22559b;
                        } else {
                            e10 = ((g.p) v0Var.f22334o.get(0)).e(this);
                        }
                        List list2 = v0Var.f22335p;
                        if (list2 != null && list2.size() != 0) {
                            f11 = ((g.p) v0Var.f22335p.get(0)).f(this);
                        } else {
                            f11 = ((f) jVar).f22560c;
                        }
                        List list3 = v0Var.f22336q;
                        if (list3 != null && list3.size() != 0) {
                            f12 = ((g.p) v0Var.f22336q.get(0)).e(this);
                        } else {
                            f12 = 0.0f;
                        }
                        List list4 = v0Var.f22337r;
                        if (list4 != null && list4.size() != 0) {
                            f13 = ((g.p) v0Var.f22337r.get(0)).f(this);
                        }
                        f10 = f13;
                        f13 = e10;
                    } else {
                        f10 = 0.0f;
                        f11 = 0.0f;
                        f12 = 0.0f;
                    }
                    if (z10 && (O = O()) != g.e0.f.Start) {
                        float n10 = n(v0Var);
                        if (O == g.e0.f.Middle) {
                            n10 /= 2.0f;
                        }
                        f13 -= n10;
                    }
                    r((g.k0) v0Var.d());
                    if (z11) {
                        f fVar = (f) jVar;
                        fVar.f22559b = f13 + f12;
                        fVar.f22560c = f11 + f10;
                    }
                    boolean m02 = m0();
                    E(v0Var, jVar);
                    if (m02) {
                        j0(v0Var);
                    }
                }
                R0();
            } else if (n0Var instanceof g.u0) {
                S0();
                g.u0 u0Var = (g.u0) n0Var;
                W0(this.f22530d, u0Var);
                if (A()) {
                    r((g.k0) u0Var.d());
                    g.n0 p10 = n0Var.f22469a.p(u0Var.f22504o);
                    if (p10 != null && (p10 instanceof g.y0)) {
                        StringBuilder sb2 = new StringBuilder();
                        G((g.y0) p10, sb2);
                        if (sb2.length() > 0) {
                            jVar.b(sb2.toString());
                        }
                    } else {
                        F("Tref reference '%s' not found", u0Var.f22504o);
                    }
                }
                R0();
            }
        }
    }

    private g.b m(Path path) {
        RectF rectF = new RectF();
        path.computeBounds(rectF, true);
        return new g.b(rectF.left, rectF.top, rectF.width(), rectF.height());
    }

    private boolean m0() {
        g.n0 p10;
        if (!M0()) {
            return false;
        }
        this.f22527a.saveLayerAlpha(null, w(this.f22530d.f22566a.f22381x.floatValue()), 31);
        this.f22531e.push(this.f22530d);
        C0310h c0310h = new C0310h(this.f22530d);
        this.f22530d = c0310h;
        String str = c0310h.f22566a.R;
        if (str != null && ((p10 = this.f22529c.p(str)) == null || !(p10 instanceof g.s))) {
            F("Mask reference '%s' not found", this.f22530d.f22566a.R);
            this.f22530d.f22566a.R = null;
        }
        return true;
    }

    private float n(g.y0 y0Var) {
        k kVar = new k(this, null);
        E(y0Var, kVar);
        return kVar.f22580b;
    }

    private c n0(c cVar, c cVar2, c cVar3) {
        float D = D(cVar2.f22549c, cVar2.f22550d, cVar2.f22547a - cVar.f22547a, cVar2.f22548b - cVar.f22548b);
        if (D == 0.0f) {
            D = D(cVar2.f22549c, cVar2.f22550d, cVar3.f22547a - cVar2.f22547a, cVar3.f22548b - cVar2.f22548b);
        }
        int i10 = (D > 0.0f ? 1 : (D == 0.0f ? 0 : -1));
        if (i10 > 0 || (i10 == 0 && (cVar2.f22549c > 0.0f || cVar2.f22550d >= 0.0f))) {
            return cVar2;
        }
        cVar2.f22549c = -cVar2.f22549c;
        cVar2.f22550d = -cVar2.f22550d;
        return cVar2;
    }

    /* JADX WARN: Code restructure failed: missing block: B:32:0x0083, code lost:
        if (r12 != 8) goto L30;
     */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0075  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private android.graphics.Matrix o(f6.g.b r10, f6.g.b r11, f6.e r12) {
        /*
            r9 = this;
            android.graphics.Matrix r0 = new android.graphics.Matrix
            r0.<init>()
            if (r12 == 0) goto L9d
            f6.e$a r1 = r12.a()
            if (r1 != 0) goto Lf
            goto L9d
        Lf:
            float r1 = r10.f22340c
            float r2 = r11.f22340c
            float r1 = r1 / r2
            float r2 = r10.f22341d
            float r3 = r11.f22341d
            float r2 = r2 / r3
            float r3 = r11.f22338a
            float r3 = -r3
            float r4 = r11.f22339b
            float r4 = -r4
            f6.e r5 = f6.e.f22296d
            boolean r5 = r12.equals(r5)
            if (r5 == 0) goto L35
            float r11 = r10.f22338a
            float r10 = r10.f22339b
            r0.preTranslate(r11, r10)
            r0.preScale(r1, r2)
            r0.preTranslate(r3, r4)
            return r0
        L35:
            f6.e$b r5 = r12.b()
            f6.e$b r6 = f6.e.b.slice
            if (r5 != r6) goto L42
            float r1 = java.lang.Math.max(r1, r2)
            goto L46
        L42:
            float r1 = java.lang.Math.min(r1, r2)
        L46:
            float r2 = r10.f22340c
            float r2 = r2 / r1
            float r5 = r10.f22341d
            float r5 = r5 / r1
            int[] r6 = f6.h.a.f22535a
            f6.e$a r7 = r12.a()
            int r7 = r7.ordinal()
            r7 = r6[r7]
            r8 = 1073741824(0x40000000, float:2.0)
            switch(r7) {
                case 1: goto L63;
                case 2: goto L63;
                case 3: goto L63;
                case 4: goto L5e;
                case 5: goto L5e;
                case 6: goto L5e;
                default: goto L5d;
            }
        L5d:
            goto L68
        L5e:
            float r7 = r11.f22340c
            float r7 = r7 - r2
        L61:
            float r3 = r3 - r7
            goto L68
        L63:
            float r7 = r11.f22340c
            float r7 = r7 - r2
            float r7 = r7 / r8
            goto L61
        L68:
            f6.e$a r12 = r12.a()
            int r12 = r12.ordinal()
            r12 = r6[r12]
            r2 = 2
            if (r12 == r2) goto L8b
            r2 = 3
            if (r12 == r2) goto L86
            r2 = 5
            if (r12 == r2) goto L8b
            r2 = 6
            if (r12 == r2) goto L86
            r2 = 7
            if (r12 == r2) goto L8b
            r2 = 8
            if (r12 == r2) goto L86
            goto L90
        L86:
            float r11 = r11.f22341d
            float r11 = r11 - r5
        L89:
            float r4 = r4 - r11
            goto L90
        L8b:
            float r11 = r11.f22341d
            float r11 = r11 - r5
            float r11 = r11 / r8
            goto L89
        L90:
            float r11 = r10.f22338a
            float r10 = r10.f22339b
            r0.preTranslate(r11, r10)
            r0.preScale(r1, r1)
            r0.preTranslate(r3, r4)
        L9d:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.o(f6.g$b, f6.g$b, f6.e):android.graphics.Matrix");
    }

    private void o0(g.d dVar) {
        y("Circle render", new Object[0]);
        g.p pVar = dVar.f22356q;
        if (pVar != null && !pVar.i()) {
            W0(this.f22530d, dVar);
            if (A() && Y0()) {
                Matrix matrix = dVar.f22458n;
                if (matrix != null) {
                    this.f22527a.concat(matrix);
                }
                Path Y = Y(dVar);
                U0(dVar);
                r(dVar);
                p(dVar);
                boolean m02 = m0();
                if (this.f22530d.f22567b) {
                    B(dVar, Y);
                }
                if (this.f22530d.f22568c) {
                    C(Y);
                }
                if (m02) {
                    j0(dVar);
                }
            }
        }
    }

    private void p(g.k0 k0Var) {
        q(k0Var, k0Var.f22457h);
    }

    private void p0(g.i iVar) {
        y("Ellipse render", new Object[0]);
        g.p pVar = iVar.f22441q;
        if (pVar != null && iVar.f22442r != null && !pVar.i() && !iVar.f22442r.i()) {
            W0(this.f22530d, iVar);
            if (A() && Y0()) {
                Matrix matrix = iVar.f22458n;
                if (matrix != null) {
                    this.f22527a.concat(matrix);
                }
                Path Z = Z(iVar);
                U0(iVar);
                r(iVar);
                p(iVar);
                boolean m02 = m0();
                if (this.f22530d.f22567b) {
                    B(iVar, Z);
                }
                if (this.f22530d.f22568c) {
                    C(Z);
                }
                if (m02) {
                    j0(iVar);
                }
            }
        }
    }

    private void q(g.k0 k0Var, g.b bVar) {
        Path j10;
        if (this.f22530d.f22566a.P != null && (j10 = j(k0Var, bVar)) != null) {
            this.f22527a.clipPath(j10);
        }
    }

    private void q0(g.m mVar) {
        y("Group render", new Object[0]);
        W0(this.f22530d, mVar);
        if (!A()) {
            return;
        }
        Matrix matrix = mVar.f22464o;
        if (matrix != null) {
            this.f22527a.concat(matrix);
        }
        p(mVar);
        boolean m02 = m0();
        F0(mVar, true);
        if (m02) {
            j0(mVar);
        }
        U0(mVar);
    }

    private void r(g.k0 k0Var) {
        g.o0 o0Var = this.f22530d.f22566a.f22370e;
        if (o0Var instanceof g.u) {
            z(true, k0Var.f22457h, (g.u) o0Var);
        }
        g.o0 o0Var2 = this.f22530d.f22566a.f22373p;
        if (o0Var2 instanceof g.u) {
            z(false, k0Var.f22457h, (g.u) o0Var2);
        }
    }

    private void r0(g.o oVar) {
        g.p pVar;
        String str;
        float f10;
        float f11;
        int i10 = 0;
        y("Image render", new Object[0]);
        g.p pVar2 = oVar.f22474s;
        if (pVar2 != null && !pVar2.i() && (pVar = oVar.f22475t) != null && !pVar.i() && (str = oVar.f22471p) != null) {
            f6.e eVar = oVar.f22479o;
            if (eVar == null) {
                eVar = f6.e.f22297e;
            }
            Bitmap s10 = s(str);
            if (s10 == null) {
                f6.g.k();
                return;
            }
            g.b bVar = new g.b(0.0f, 0.0f, s10.getWidth(), s10.getHeight());
            W0(this.f22530d, oVar);
            if (A() && Y0()) {
                Matrix matrix = oVar.f22476u;
                if (matrix != null) {
                    this.f22527a.concat(matrix);
                }
                g.p pVar3 = oVar.f22472q;
                if (pVar3 != null) {
                    f10 = pVar3.e(this);
                } else {
                    f10 = 0.0f;
                }
                g.p pVar4 = oVar.f22473r;
                if (pVar4 != null) {
                    f11 = pVar4.f(this);
                } else {
                    f11 = 0.0f;
                }
                this.f22530d.f22571f = new g.b(f10, f11, oVar.f22474s.e(this), oVar.f22475t.e(this));
                if (!this.f22530d.f22566a.G.booleanValue()) {
                    g.b bVar2 = this.f22530d.f22571f;
                    O0(bVar2.f22338a, bVar2.f22339b, bVar2.f22340c, bVar2.f22341d);
                }
                oVar.f22457h = this.f22530d.f22571f;
                U0(oVar);
                p(oVar);
                boolean m02 = m0();
                X0();
                this.f22527a.save();
                this.f22527a.concat(o(this.f22530d.f22571f, bVar, eVar));
                if (this.f22530d.f22566a.X != g.e0.e.optimizeSpeed) {
                    i10 = 2;
                }
                this.f22527a.drawBitmap(s10, 0.0f, 0.0f, new Paint(i10));
                this.f22527a.restore();
                if (m02) {
                    j0(oVar);
                }
            }
        }
    }

    private Bitmap s(String str) {
        int indexOf;
        if (!str.startsWith("data:") || str.length() < 14 || (indexOf = str.indexOf(44)) < 12 || !";base64".equals(str.substring(indexOf - 7, indexOf))) {
            return null;
        }
        try {
            byte[] decode = Base64.decode(str.substring(indexOf + 1), 0);
            return BitmapFactory.decodeByteArray(decode, 0, decode.length);
        } catch (Exception e10) {
            Log.e("SVGAndroidRenderer", "Could not decode bad Data URL", e10);
            return null;
        }
    }

    private void s0(g.q qVar) {
        y("Line render", new Object[0]);
        W0(this.f22530d, qVar);
        if (A() && Y0() && this.f22530d.f22568c) {
            Matrix matrix = qVar.f22458n;
            if (matrix != null) {
                this.f22527a.concat(matrix);
            }
            Path a02 = a0(qVar);
            U0(qVar);
            r(qVar);
            p(qVar);
            boolean m02 = m0();
            C(a02);
            I0(qVar);
            if (m02) {
                j0(qVar);
            }
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x005d, code lost:
        if (r6.equals("sans-serif") == false) goto L10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private android.graphics.Typeface t(java.lang.String r6, java.lang.Integer r7, f6.g.e0.b r8) {
        /*
            r5 = this;
            f6.g$e0$b r0 = f6.g.e0.b.Italic
            r1 = 0
            r2 = 1
            if (r8 != r0) goto L8
            r8 = r2
            goto L9
        L8:
            r8 = r1
        L9:
            int r7 = r7.intValue()
            r0 = 500(0x1f4, float:7.0E-43)
            r3 = 2
            r4 = 3
            if (r7 <= r0) goto L19
            if (r8 == 0) goto L17
            r7 = r4
            goto L1e
        L17:
            r7 = r2
            goto L1e
        L19:
            if (r8 == 0) goto L1d
            r7 = r3
            goto L1e
        L1d:
            r7 = r1
        L1e:
            r6.getClass()
            int r8 = r6.hashCode()
            r0 = -1
            switch(r8) {
                case -1536685117: goto L57;
                case -1431958525: goto L4c;
                case -1081737434: goto L41;
                case 109326717: goto L36;
                case 1126973893: goto L2b;
                default: goto L29;
            }
        L29:
            r1 = r0
            goto L60
        L2b:
            java.lang.String r8 = "cursive"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L34
            goto L29
        L34:
            r1 = 4
            goto L60
        L36:
            java.lang.String r8 = "serif"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L3f
            goto L29
        L3f:
            r1 = r4
            goto L60
        L41:
            java.lang.String r8 = "fantasy"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L4a
            goto L29
        L4a:
            r1 = r3
            goto L60
        L4c:
            java.lang.String r8 = "monospace"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L55
            goto L29
        L55:
            r1 = r2
            goto L60
        L57:
            java.lang.String r8 = "sans-serif"
            boolean r6 = r6.equals(r8)
            if (r6 != 0) goto L60
            goto L29
        L60:
            switch(r1) {
                case 0: goto L81;
                case 1: goto L7a;
                case 2: goto L73;
                case 3: goto L6c;
                case 4: goto L65;
                default: goto L63;
            }
        L63:
            r6 = 0
            return r6
        L65:
            android.graphics.Typeface r6 = android.graphics.Typeface.SANS_SERIF
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        L6c:
            android.graphics.Typeface r6 = android.graphics.Typeface.SERIF
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        L73:
            android.graphics.Typeface r6 = android.graphics.Typeface.SANS_SERIF
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        L7a:
            android.graphics.Typeface r6 = android.graphics.Typeface.MONOSPACE
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        L81:
            android.graphics.Typeface r6 = android.graphics.Typeface.SANS_SERIF
            android.graphics.Typeface r6 = android.graphics.Typeface.create(r6, r7)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: f6.h.t(java.lang.String, java.lang.Integer, f6.g$e0$b):android.graphics.Typeface");
    }

    private void t0(g.v vVar) {
        y("Path render", new Object[0]);
        if (vVar.f22506o != null) {
            W0(this.f22530d, vVar);
            if (A() && Y0()) {
                C0310h c0310h = this.f22530d;
                if (c0310h.f22568c || c0310h.f22567b) {
                    Matrix matrix = vVar.f22458n;
                    if (matrix != null) {
                        this.f22527a.concat(matrix);
                    }
                    Path f10 = new d(vVar.f22506o).f();
                    if (vVar.f22457h == null) {
                        vVar.f22457h = m(f10);
                    }
                    U0(vVar);
                    r(vVar);
                    p(vVar);
                    boolean m02 = m0();
                    if (this.f22530d.f22567b) {
                        f10.setFillType(U());
                        B(vVar, f10);
                    }
                    if (this.f22530d.f22568c) {
                        C(f10);
                    }
                    I0(vVar);
                    if (m02) {
                        j0(vVar);
                    }
                }
            }
        }
    }

    private void u(g.n0 n0Var) {
        Boolean bool;
        if ((n0Var instanceof g.l0) && (bool = ((g.l0) n0Var).f22460d) != null) {
            this.f22530d.f22573h = bool.booleanValue();
        }
    }

    private void u0(g.z zVar) {
        y("PolyLine render", new Object[0]);
        W0(this.f22530d, zVar);
        if (A() && Y0()) {
            C0310h c0310h = this.f22530d;
            if (c0310h.f22568c || c0310h.f22567b) {
                Matrix matrix = zVar.f22458n;
                if (matrix != null) {
                    this.f22527a.concat(matrix);
                }
                if (zVar.f22522o.length >= 2) {
                    Path b02 = b0(zVar);
                    U0(zVar);
                    b02.setFillType(U());
                    r(zVar);
                    p(zVar);
                    boolean m02 = m0();
                    if (this.f22530d.f22567b) {
                        B(zVar, b02);
                    }
                    if (this.f22530d.f22568c) {
                        C(b02);
                    }
                    I0(zVar);
                    if (m02) {
                        j0(zVar);
                    }
                }
            }
        }
    }

    private static double v(double d10) {
        if (d10 < -1.0d) {
            return 3.141592653589793d;
        }
        if (d10 > 1.0d) {
            return 0.0d;
        }
        return Math.acos(d10);
    }

    private void v0(g.a0 a0Var) {
        y("Polygon render", new Object[0]);
        W0(this.f22530d, a0Var);
        if (A() && Y0()) {
            C0310h c0310h = this.f22530d;
            if (c0310h.f22568c || c0310h.f22567b) {
                Matrix matrix = a0Var.f22458n;
                if (matrix != null) {
                    this.f22527a.concat(matrix);
                }
                if (a0Var.f22522o.length >= 2) {
                    Path b02 = b0(a0Var);
                    U0(a0Var);
                    r(a0Var);
                    p(a0Var);
                    boolean m02 = m0();
                    if (this.f22530d.f22567b) {
                        B(a0Var, b02);
                    }
                    if (this.f22530d.f22568c) {
                        C(b02);
                    }
                    I0(a0Var);
                    if (m02) {
                        j0(a0Var);
                    }
                }
            }
        }
    }

    private static int w(float f10) {
        int i10 = (int) (f10 * 256.0f);
        if (i10 < 0) {
            return 0;
        }
        if (i10 > 255) {
            return SetSpanOperation.SPAN_MAX_PRIORITY;
        }
        return i10;
    }

    private void w0(g.b0 b0Var) {
        y("Rect render", new Object[0]);
        g.p pVar = b0Var.f22344q;
        if (pVar != null && b0Var.f22345r != null && !pVar.i() && !b0Var.f22345r.i()) {
            W0(this.f22530d, b0Var);
            if (A() && Y0()) {
                Matrix matrix = b0Var.f22458n;
                if (matrix != null) {
                    this.f22527a.concat(matrix);
                }
                Path c02 = c0(b0Var);
                U0(b0Var);
                r(b0Var);
                p(b0Var);
                boolean m02 = m0();
                if (this.f22530d.f22567b) {
                    B(b0Var, c02);
                }
                if (this.f22530d.f22568c) {
                    C(c02);
                }
                if (m02) {
                    j0(b0Var);
                }
            }
        }
    }

    private static int x(int i10, float f10) {
        int i11 = SetSpanOperation.SPAN_MAX_PRIORITY;
        int round = Math.round(((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) * f10);
        if (round < 0) {
            i11 = 0;
        } else if (round <= 255) {
            i11 = round;
        }
        return (i10 & 16777215) | (i11 << 24);
    }

    private void x0(g.f0 f0Var) {
        z0(f0Var, f0(f0Var.f22427q, f0Var.f22428r, f0Var.f22429s, f0Var.f22430t), f0Var.f22495p, f0Var.f22479o);
    }

    private void y0(g.f0 f0Var, g.b bVar) {
        z0(f0Var, bVar, f0Var.f22495p, f0Var.f22479o);
    }

    private void z(boolean z10, g.b bVar, g.u uVar) {
        String str;
        g.n0 p10 = this.f22529c.p(uVar.f22502d);
        if (p10 == null) {
            if (z10) {
                str = "Fill";
            } else {
                str = "Stroke";
            }
            F("%s reference '%s' not found", str, uVar.f22502d);
            g.o0 o0Var = uVar.f22503e;
            if (o0Var != null) {
                P0(this.f22530d, z10, o0Var);
            } else if (z10) {
                this.f22530d.f22567b = false;
            } else {
                this.f22530d.f22568c = false;
            }
        } else if (p10 instanceof g.m0) {
            X(z10, bVar, (g.m0) p10);
        } else if (p10 instanceof g.q0) {
            e0(z10, bVar, (g.q0) p10);
        } else if (p10 instanceof g.c0) {
            Q0(z10, (g.c0) p10);
        }
    }

    private void z0(g.f0 f0Var, g.b bVar, g.b bVar2, f6.e eVar) {
        y("Svg render", new Object[0]);
        if (bVar.f22340c != 0.0f && bVar.f22341d != 0.0f) {
            if (eVar == null && (eVar = f0Var.f22479o) == null) {
                eVar = f6.e.f22297e;
            }
            W0(this.f22530d, f0Var);
            if (A()) {
                C0310h c0310h = this.f22530d;
                c0310h.f22571f = bVar;
                if (!c0310h.f22566a.G.booleanValue()) {
                    g.b bVar3 = this.f22530d.f22571f;
                    O0(bVar3.f22338a, bVar3.f22339b, bVar3.f22340c, bVar3.f22341d);
                }
                q(f0Var, this.f22530d.f22571f);
                if (bVar2 != null) {
                    this.f22527a.concat(o(this.f22530d.f22571f, bVar2, eVar));
                    this.f22530d.f22572g = f0Var.f22495p;
                } else {
                    Canvas canvas = this.f22527a;
                    g.b bVar4 = this.f22530d.f22571f;
                    canvas.translate(bVar4.f22338a, bVar4.f22339b);
                }
                boolean m02 = m0();
                X0();
                F0(f0Var, true);
                if (m02) {
                    j0(f0Var);
                }
                U0(f0Var);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G0(f6.g gVar, f6.f fVar) {
        g.b bVar;
        g.b bVar2;
        f6.e eVar;
        if (fVar != null) {
            this.f22529c = gVar;
            g.f0 m10 = gVar.m();
            if (m10 == null) {
                Z0("Nothing to render. Document is empty.", new Object[0]);
                return;
            }
            if (fVar.e()) {
                g.l0 j10 = this.f22529c.j(fVar.f22324e);
                if (j10 != null && (j10 instanceof g.f1)) {
                    g.f1 f1Var = (g.f1) j10;
                    bVar2 = f1Var.f22495p;
                    if (bVar2 == null) {
                        Log.w("SVGAndroidRenderer", String.format("View element with id \"%s\" is missing a viewBox attribute.", fVar.f22324e));
                        return;
                    }
                    eVar = f1Var.f22479o;
                } else {
                    Log.w("SVGAndroidRenderer", String.format("View element with id \"%s\" not found.", fVar.f22324e));
                    return;
                }
            } else {
                if (fVar.f()) {
                    bVar = fVar.f22323d;
                } else {
                    bVar = m10.f22495p;
                }
                bVar2 = bVar;
                if (fVar.c()) {
                    eVar = fVar.f22321b;
                } else {
                    eVar = m10.f22479o;
                }
            }
            if (fVar.b()) {
                gVar.a(fVar.f22320a);
            }
            if (fVar.d()) {
                b.q qVar = new b.q();
                this.f22534h = qVar;
                qVar.f22279a = gVar.j(fVar.f22322c);
            }
            N0();
            u(m10);
            S0();
            g.b bVar3 = new g.b(fVar.f22325f);
            g.p pVar = m10.f22429s;
            if (pVar != null) {
                bVar3.f22340c = pVar.d(this, bVar3.f22340c);
            }
            g.p pVar2 = m10.f22430t;
            if (pVar2 != null) {
                bVar3.f22341d = pVar2.d(this, bVar3.f22341d);
            }
            z0(m10, bVar3, bVar2, eVar);
            R0();
            if (fVar.b()) {
                gVar.b();
                return;
            }
            return;
        }
        throw new NullPointerException("renderOptions shouldn't be null");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float Q() {
        return this.f22530d.f22569d.getTextSize();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float R() {
        return this.f22530d.f22569d.getTextSize() / 2.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g.b S() {
        C0310h c0310h = this.f22530d;
        g.b bVar = c0310h.f22572g;
        if (bVar != null) {
            return bVar;
        }
        return c0310h.f22571f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float T() {
        return this.f22528b;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class k extends j {

        /* renamed from: b  reason: collision with root package name */
        float f22580b;

        private k() {
            super(h.this, null);
            this.f22580b = 0.0f;
        }

        @Override // f6.h.j
        public void b(String str) {
            this.f22580b += h.this.f22530d.f22569d.measureText(str);
        }

        /* synthetic */ k(h hVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: f6.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0310h {

        /* renamed from: a  reason: collision with root package name */
        g.e0 f22566a;

        /* renamed from: b  reason: collision with root package name */
        boolean f22567b;

        /* renamed from: c  reason: collision with root package name */
        boolean f22568c;

        /* renamed from: d  reason: collision with root package name */
        Paint f22569d;

        /* renamed from: e  reason: collision with root package name */
        Paint f22570e;

        /* renamed from: f  reason: collision with root package name */
        g.b f22571f;

        /* renamed from: g  reason: collision with root package name */
        g.b f22572g;

        /* renamed from: h  reason: collision with root package name */
        boolean f22573h;

        C0310h() {
            Paint paint = new Paint();
            this.f22569d = paint;
            paint.setFlags(193);
            this.f22569d.setHinting(0);
            this.f22569d.setStyle(Paint.Style.FILL);
            Paint paint2 = this.f22569d;
            Typeface typeface = Typeface.DEFAULT;
            paint2.setTypeface(typeface);
            Paint paint3 = new Paint();
            this.f22570e = paint3;
            paint3.setFlags(193);
            this.f22570e.setHinting(0);
            this.f22570e.setStyle(Paint.Style.STROKE);
            this.f22570e.setTypeface(typeface);
            this.f22566a = g.e0.a();
        }

        C0310h(C0310h c0310h) {
            this.f22567b = c0310h.f22567b;
            this.f22568c = c0310h.f22568c;
            this.f22569d = new Paint(c0310h.f22569d);
            this.f22570e = new Paint(c0310h.f22570e);
            g.b bVar = c0310h.f22571f;
            if (bVar != null) {
                this.f22571f = new g.b(bVar);
            }
            g.b bVar2 = c0310h.f22572g;
            if (bVar2 != null) {
                this.f22572g = new g.b(bVar2);
            }
            this.f22573h = c0310h.f22573h;
            try {
                this.f22566a = (g.e0) c0310h.f22566a.clone();
            } catch (CloneNotSupportedException e10) {
                Log.e("SVGAndroidRenderer", "Unexpected clone error", e10);
                this.f22566a = g.e0.a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void y(String str, Object... objArr) {
    }
}
