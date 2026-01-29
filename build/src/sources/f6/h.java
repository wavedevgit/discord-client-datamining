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
    private static HashSet f24698i;

    /* renamed from: a  reason: collision with root package name */
    private Canvas f24699a;

    /* renamed from: b  reason: collision with root package name */
    private float f24700b;

    /* renamed from: c  reason: collision with root package name */
    private f6.g f24701c;

    /* renamed from: d  reason: collision with root package name */
    private C0323h f24702d;

    /* renamed from: e  reason: collision with root package name */
    private Stack f24703e;

    /* renamed from: f  reason: collision with root package name */
    private Stack f24704f;

    /* renamed from: g  reason: collision with root package name */
    private Stack f24705g;

    /* renamed from: h  reason: collision with root package name */
    private b.q f24706h = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f24707a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f24708b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f24709c;

        static {
            int[] iArr = new int[g.e0.d.values().length];
            f24709c = iArr;
            try {
                iArr[g.e0.d.Miter.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f24709c[g.e0.d.Round.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f24709c[g.e0.d.Bevel.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[g.e0.c.values().length];
            f24708b = iArr2;
            try {
                iArr2[g.e0.c.Butt.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f24708b[g.e0.c.Round.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f24708b[g.e0.c.Square.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            int[] iArr3 = new int[e.a.values().length];
            f24707a = iArr3;
            try {
                iArr3[e.a.xMidYMin.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f24707a[e.a.xMidYMid.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f24707a[e.a.xMidYMax.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f24707a[e.a.xMaxYMin.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f24707a[e.a.xMaxYMid.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f24707a[e.a.xMaxYMax.ordinal()] = 6;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f24707a[e.a.xMinYMid.ordinal()] = 7;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f24707a[e.a.xMinYMax.ordinal()] = 8;
            } catch (NoSuchFieldError unused14) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements g.x {

        /* renamed from: b  reason: collision with root package name */
        private float f24711b;

        /* renamed from: c  reason: collision with root package name */
        private float f24712c;

        /* renamed from: h  reason: collision with root package name */
        private boolean f24717h;

        /* renamed from: a  reason: collision with root package name */
        private List f24710a = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private c f24713d = null;

        /* renamed from: e  reason: collision with root package name */
        private boolean f24714e = false;

        /* renamed from: f  reason: collision with root package name */
        private boolean f24715f = true;

        /* renamed from: g  reason: collision with root package name */
        private int f24716g = -1;

        b(g.w wVar) {
            if (wVar != null) {
                wVar.h(this);
                if (this.f24717h) {
                    this.f24713d.b((c) this.f24710a.get(this.f24716g));
                    this.f24710a.set(this.f24716g, this.f24713d);
                    this.f24717h = false;
                }
                c cVar = this.f24713d;
                if (cVar != null) {
                    this.f24710a.add(cVar);
                }
            }
        }

        @Override // f6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            this.f24713d.a(f10, f11);
            this.f24710a.add(this.f24713d);
            this.f24713d = new c(f12, f13, f12 - f10, f13 - f11);
            this.f24717h = false;
        }

        @Override // f6.g.x
        public void b(float f10, float f11) {
            if (this.f24717h) {
                this.f24713d.b((c) this.f24710a.get(this.f24716g));
                this.f24710a.set(this.f24716g, this.f24713d);
                this.f24717h = false;
            }
            c cVar = this.f24713d;
            if (cVar != null) {
                this.f24710a.add(cVar);
            }
            this.f24711b = f10;
            this.f24712c = f11;
            this.f24713d = new c(f10, f11, 0.0f, 0.0f);
            this.f24716g = this.f24710a.size();
        }

        @Override // f6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            if (this.f24715f || this.f24714e) {
                this.f24713d.a(f10, f11);
                this.f24710a.add(this.f24713d);
                this.f24714e = false;
            }
            this.f24713d = new c(f14, f15, f14 - f12, f15 - f13);
            this.f24717h = false;
        }

        @Override // f6.g.x
        public void close() {
            this.f24710a.add(this.f24713d);
            e(this.f24711b, this.f24712c);
            this.f24717h = true;
        }

        @Override // f6.g.x
        public void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
            this.f24714e = true;
            this.f24715f = false;
            c cVar = this.f24713d;
            h.h(cVar.f24719a, cVar.f24720b, f10, f11, f12, z10, z11, f13, f14, this);
            this.f24715f = true;
            this.f24717h = false;
        }

        @Override // f6.g.x
        public void e(float f10, float f11) {
            this.f24713d.a(f10, f11);
            this.f24710a.add(this.f24713d);
            h hVar = h.this;
            c cVar = this.f24713d;
            this.f24713d = new c(f10, f11, f10 - cVar.f24719a, f11 - cVar.f24720b);
            this.f24717h = false;
        }

        List f() {
            return this.f24710a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c {

        /* renamed from: a  reason: collision with root package name */
        float f24719a;

        /* renamed from: b  reason: collision with root package name */
        float f24720b;

        /* renamed from: c  reason: collision with root package name */
        float f24721c;

        /* renamed from: d  reason: collision with root package name */
        float f24722d;

        /* renamed from: e  reason: collision with root package name */
        boolean f24723e = false;

        c(float f10, float f11, float f12, float f13) {
            this.f24721c = 0.0f;
            this.f24722d = 0.0f;
            this.f24719a = f10;
            this.f24720b = f11;
            double sqrt = Math.sqrt((f12 * f12) + (f13 * f13));
            if (sqrt != 0.0d) {
                this.f24721c = (float) (f12 / sqrt);
                this.f24722d = (float) (f13 / sqrt);
            }
        }

        void a(float f10, float f11) {
            float f12 = f10 - this.f24719a;
            float f13 = f11 - this.f24720b;
            double sqrt = Math.sqrt((f12 * f12) + (f13 * f13));
            if (sqrt != 0.0d) {
                f12 = (float) (f12 / sqrt);
                f13 = (float) (f13 / sqrt);
            }
            float f14 = this.f24721c;
            if (f12 == (-f14) && f13 == (-this.f24722d)) {
                this.f24723e = true;
                this.f24721c = -f13;
                this.f24722d = f12;
                return;
            }
            this.f24721c = f14 + f12;
            this.f24722d += f13;
        }

        void b(c cVar) {
            float f10 = cVar.f24721c;
            float f11 = this.f24721c;
            if (f10 == (-f11)) {
                float f12 = cVar.f24722d;
                if (f12 == (-this.f24722d)) {
                    this.f24723e = true;
                    this.f24721c = -f12;
                    this.f24722d = cVar.f24721c;
                    return;
                }
            }
            this.f24721c = f11 + f10;
            this.f24722d += cVar.f24722d;
        }

        public String toString() {
            return "(" + this.f24719a + "," + this.f24720b + " " + this.f24721c + "," + this.f24722d + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements g.x {

        /* renamed from: a  reason: collision with root package name */
        Path f24725a = new Path();

        /* renamed from: b  reason: collision with root package name */
        float f24726b;

        /* renamed from: c  reason: collision with root package name */
        float f24727c;

        d(g.w wVar) {
            if (wVar == null) {
                return;
            }
            wVar.h(this);
        }

        @Override // f6.g.x
        public void a(float f10, float f11, float f12, float f13) {
            this.f24725a.quadTo(f10, f11, f12, f13);
            this.f24726b = f12;
            this.f24727c = f13;
        }

        @Override // f6.g.x
        public void b(float f10, float f11) {
            this.f24725a.moveTo(f10, f11);
            this.f24726b = f10;
            this.f24727c = f11;
        }

        @Override // f6.g.x
        public void c(float f10, float f11, float f12, float f13, float f14, float f15) {
            this.f24725a.cubicTo(f10, f11, f12, f13, f14, f15);
            this.f24726b = f14;
            this.f24727c = f15;
        }

        @Override // f6.g.x
        public void close() {
            this.f24725a.close();
        }

        @Override // f6.g.x
        public void d(float f10, float f11, float f12, boolean z10, boolean z11, float f13, float f14) {
            h.h(this.f24726b, this.f24727c, f10, f11, f12, z10, z11, f13, f14, this);
            this.f24726b = f13;
            this.f24727c = f14;
        }

        @Override // f6.g.x
        public void e(float f10, float f11) {
            this.f24725a.lineTo(f10, f11);
            this.f24726b = f10;
            this.f24727c = f11;
        }

        Path f() {
            return this.f24725a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e extends f {

        /* renamed from: e  reason: collision with root package name */
        private Path f24729e;

        e(Path path, float f10, float f11) {
            super(f10, f11);
            this.f24729e = path;
        }

        @Override // f6.h.f, f6.h.j
        public void b(String str) {
            String str2;
            if (h.this.Y0()) {
                if (h.this.f24702d.f24739b) {
                    str2 = str;
                    h.this.f24699a.drawTextOnPath(str2, this.f24729e, this.f24731b, this.f24732c, h.this.f24702d.f24741d);
                } else {
                    str2 = str;
                }
                if (h.this.f24702d.f24740c) {
                    h.this.f24699a.drawTextOnPath(str2, this.f24729e, this.f24731b, this.f24732c, h.this.f24702d.f24742e);
                }
            } else {
                str2 = str;
            }
            this.f24731b += h.this.f24702d.f24741d.measureText(str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f extends j {

        /* renamed from: b  reason: collision with root package name */
        float f24731b;

        /* renamed from: c  reason: collision with root package name */
        float f24732c;

        f(float f10, float f11) {
            super(h.this, null);
            this.f24731b = f10;
            this.f24732c = f11;
        }

        @Override // f6.h.j
        public void b(String str) {
            h.y("TextSequence render", new Object[0]);
            if (h.this.Y0()) {
                if (h.this.f24702d.f24739b) {
                    h.this.f24699a.drawText(str, this.f24731b, this.f24732c, h.this.f24702d.f24741d);
                }
                if (h.this.f24702d.f24740c) {
                    h.this.f24699a.drawText(str, this.f24731b, this.f24732c, h.this.f24702d.f24742e);
                }
            }
            this.f24731b += h.this.f24702d.f24741d.measureText(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class g extends j {

        /* renamed from: b  reason: collision with root package name */
        float f24734b;

        /* renamed from: c  reason: collision with root package name */
        float f24735c;

        /* renamed from: d  reason: collision with root package name */
        Path f24736d;

        g(float f10, float f11, Path path) {
            super(h.this, null);
            this.f24734b = f10;
            this.f24735c = f11;
            this.f24736d = path;
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
                h.this.f24702d.f24741d.getTextPath(str2, 0, str.length(), this.f24734b, this.f24735c, path);
                this.f24736d.addPath(path);
            } else {
                str2 = str;
            }
            this.f24734b += h.this.f24702d.f24741d.measureText(str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class i extends j {

        /* renamed from: b  reason: collision with root package name */
        float f24747b;

        /* renamed from: c  reason: collision with root package name */
        float f24748c;

        /* renamed from: d  reason: collision with root package name */
        RectF f24749d;

        i(float f10, float f11) {
            super(h.this, null);
            this.f24749d = new RectF();
            this.f24747b = f10;
            this.f24748c = f11;
        }

        @Override // f6.h.j
        public boolean a(g.y0 y0Var) {
            if (!(y0Var instanceof g.z0)) {
                return true;
            }
            g.z0 z0Var = (g.z0) y0Var;
            g.n0 p10 = y0Var.f24641a.p(z0Var.f24695o);
            if (p10 == null) {
                h.F("TextPath path reference '%s' not found", z0Var.f24695o);
                return false;
            }
            g.v vVar = (g.v) p10;
            Path f10 = new d(vVar.f24678o).f();
            Matrix matrix = vVar.f24630n;
            if (matrix != null) {
                f10.transform(matrix);
            }
            RectF rectF = new RectF();
            f10.computeBounds(rectF, true);
            this.f24749d.union(rectF);
            return false;
        }

        @Override // f6.h.j
        public void b(String str) {
            if (h.this.Y0()) {
                Rect rect = new Rect();
                h.this.f24702d.f24741d.getTextBounds(str, 0, str.length(), rect);
                RectF rectF = new RectF(rect);
                rectF.offset(this.f24747b, this.f24748c);
                this.f24749d.union(rectF);
            }
            this.f24747b += h.this.f24702d.f24741d.measureText(str);
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
        this.f24699a = canvas;
        this.f24700b = f10;
    }

    private boolean A() {
        Boolean bool = this.f24702d.f24738a.L;
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
        g.o0 o0Var = this.f24702d.f24738a.f24542e;
        if (o0Var instanceof g.u) {
            g.n0 p10 = this.f24701c.p(((g.u) o0Var).f24674d);
            if (p10 instanceof g.y) {
                L(k0Var, path, (g.y) p10);
                return;
            }
        }
        this.f24699a.drawPath(path, this.f24702d.f24741d);
    }

    private void B0(g.s0 s0Var) {
        y("Switch render", new Object[0]);
        W0(this.f24702d, s0Var);
        if (!A()) {
            return;
        }
        Matrix matrix = s0Var.f24636o;
        if (matrix != null) {
            this.f24699a.concat(matrix);
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
        C0323h c0323h = this.f24702d;
        if (c0323h.f24738a.W == g.e0.i.NonScalingStroke) {
            Matrix matrix = this.f24699a.getMatrix();
            Path path2 = new Path();
            path.transform(matrix, path2);
            this.f24699a.setMatrix(new Matrix());
            Shader shader = this.f24702d.f24742e.getShader();
            Matrix matrix2 = new Matrix();
            if (shader != null) {
                shader.getLocalMatrix(matrix2);
                Matrix matrix3 = new Matrix(matrix2);
                matrix3.postConcat(matrix);
                shader.setLocalMatrix(matrix3);
            }
            this.f24699a.drawPath(path2, this.f24702d.f24742e);
            this.f24699a.setMatrix(matrix);
            if (shader != null) {
                shader.setLocalMatrix(matrix2);
                return;
            }
            return;
        }
        this.f24699a.drawPath(path, c0323h.f24742e);
    }

    private void C0(g.t0 t0Var, g.b bVar) {
        y("Symbol render", new Object[0]);
        if (bVar.f24512c != 0.0f && bVar.f24513d != 0.0f) {
            f6.e eVar = t0Var.f24651o;
            if (eVar == null) {
                eVar = f6.e.f24469e;
            }
            W0(this.f24702d, t0Var);
            C0323h c0323h = this.f24702d;
            c0323h.f24743f = bVar;
            if (!c0323h.f24738a.G.booleanValue()) {
                g.b bVar2 = this.f24702d.f24743f;
                O0(bVar2.f24510a, bVar2.f24511b, bVar2.f24512c, bVar2.f24513d);
            }
            g.b bVar3 = t0Var.f24667p;
            if (bVar3 != null) {
                this.f24699a.concat(o(this.f24702d.f24743f, bVar3, eVar));
                this.f24702d.f24744g = t0Var.f24667p;
            } else {
                Canvas canvas = this.f24699a;
                g.b bVar4 = this.f24702d.f24743f;
                canvas.translate(bVar4.f24510a, bVar4.f24511b);
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
        W0(this.f24702d, w0Var);
        if (A()) {
            Matrix matrix = w0Var.f24685s;
            if (matrix != null) {
                this.f24699a.concat(matrix);
            }
            List list = w0Var.f24506o;
            float f13 = 0.0f;
            if (list != null && list.size() != 0) {
                f10 = ((g.p) w0Var.f24506o.get(0)).e(this);
            } else {
                f10 = 0.0f;
            }
            List list2 = w0Var.f24507p;
            if (list2 != null && list2.size() != 0) {
                f11 = ((g.p) w0Var.f24507p.get(0)).f(this);
            } else {
                f11 = 0.0f;
            }
            List list3 = w0Var.f24508q;
            if (list3 != null && list3.size() != 0) {
                f12 = ((g.p) w0Var.f24508q.get(0)).e(this);
            } else {
                f12 = 0.0f;
            }
            List list4 = w0Var.f24509r;
            if (list4 != null && list4.size() != 0) {
                f13 = ((g.p) w0Var.f24509r.get(0)).f(this);
            }
            g.e0.f O = O();
            if (O != g.e0.f.Start) {
                float n10 = n(w0Var);
                if (O == g.e0.f.Middle) {
                    n10 /= 2.0f;
                }
                f10 -= n10;
            }
            if (w0Var.f24629h == null) {
                i iVar = new i(f10, f11);
                E(w0Var, iVar);
                RectF rectF = iVar.f24749d;
                w0Var.f24629h = new g.b(rectF.left, rectF.top, rectF.width(), iVar.f24749d.height());
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
            Iterator it = y0Var.f24605i.iterator();
            boolean z10 = true;
            while (it.hasNext()) {
                g.n0 n0Var = (g.n0) it.next();
                if (n0Var instanceof g.c1) {
                    jVar.b(T0(((g.c1) n0Var).f24524c, z10, !it.hasNext()));
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
        g.p pVar = e1Var.f24594s;
        if (pVar == null || !pVar.i()) {
            g.p pVar2 = e1Var.f24595t;
            if (pVar2 == null || !pVar2.i()) {
                W0(this.f24702d, e1Var);
                if (!A()) {
                    return;
                }
                g.n0 p10 = e1Var.f24641a.p(e1Var.f24591p);
                if (p10 == null) {
                    F("Use reference '%s' not found", e1Var.f24591p);
                    return;
                }
                Matrix matrix = e1Var.f24636o;
                if (matrix != null) {
                    this.f24699a.concat(matrix);
                }
                g.p pVar3 = e1Var.f24592q;
                float f11 = 0.0f;
                if (pVar3 != null) {
                    f10 = pVar3.e(this);
                } else {
                    f10 = 0.0f;
                }
                g.p pVar4 = e1Var.f24593r;
                if (pVar4 != null) {
                    f11 = pVar4.f(this);
                }
                this.f24699a.translate(f10, f11);
                p(e1Var);
                boolean m02 = m0();
                i0(e1Var);
                if (p10 instanceof g.f0) {
                    g.b f02 = f0(null, null, e1Var.f24594s, e1Var.f24595t);
                    S0();
                    y0((g.f0) p10, f02);
                    R0();
                } else if (p10 instanceof g.t0) {
                    g.p pVar5 = e1Var.f24594s;
                    if (pVar5 == null) {
                        pVar5 = new g.p(100.0f, g.d1.percent);
                    }
                    g.p pVar6 = e1Var.f24595t;
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
        Iterator it = y0Var.f24605i.iterator();
        boolean z10 = true;
        while (it.hasNext()) {
            g.n0 n0Var = (g.n0) it.next();
            if (n0Var instanceof g.y0) {
                G((g.y0) n0Var, sb2);
            } else if (n0Var instanceof g.c1) {
                sb2.append(T0(((g.c1) n0Var).f24524c, z10, !it.hasNext()));
            }
            z10 = false;
        }
    }

    private void H(g.j jVar, String str) {
        g.n0 p10 = jVar.f24641a.p(str);
        if (p10 == null) {
            Z0("Gradient reference '%s' not found", str);
        } else if (!(p10 instanceof g.j)) {
            F("Gradient href attributes must point to other gradient elements", new Object[0]);
        } else if (p10 == jVar) {
            F("Circular reference in gradient href attribute '%s'", str);
        } else {
            g.j jVar2 = (g.j) p10;
            if (jVar.f24621i == null) {
                jVar.f24621i = jVar2.f24621i;
            }
            if (jVar.f24622j == null) {
                jVar.f24622j = jVar2.f24622j;
            }
            if (jVar.f24623k == null) {
                jVar.f24623k = jVar2.f24623k;
            }
            if (jVar.f24620h.isEmpty()) {
                jVar.f24620h = jVar2.f24620h;
            }
            try {
                if (jVar instanceof g.m0) {
                    I((g.m0) jVar, (g.m0) p10);
                } else {
                    J((g.q0) jVar, (g.q0) p10);
                }
            } catch (ClassCastException unused) {
            }
            String str2 = jVar2.f24624l;
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
        if (m0Var.f24637m == null) {
            m0Var.f24637m = m0Var2.f24637m;
        }
        if (m0Var.f24638n == null) {
            m0Var.f24638n = m0Var2.f24638n;
        }
        if (m0Var.f24639o == null) {
            m0Var.f24639o = m0Var2.f24639o;
        }
        if (m0Var.f24640p == null) {
            m0Var.f24640p = m0Var2.f24640p;
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
        if (q0Var.f24656m == null) {
            q0Var.f24656m = q0Var2.f24656m;
        }
        if (q0Var.f24657n == null) {
            q0Var.f24657n = q0Var2.f24657n;
        }
        if (q0Var.f24658o == null) {
            q0Var.f24658o = q0Var2.f24658o;
        }
        if (q0Var.f24659p == null) {
            q0Var.f24659p = q0Var2.f24659p;
        }
        if (q0Var.f24660q == null) {
            q0Var.f24660q = q0Var2.f24660q;
        }
    }

    private void J0(g.s sVar, g.k0 k0Var, g.b bVar) {
        float f10;
        float f11;
        float f12;
        y("Mask render", new Object[0]);
        Boolean bool = sVar.f24668o;
        if (bool != null && bool.booleanValue()) {
            g.p pVar = sVar.f24672s;
            if (pVar != null) {
                f11 = pVar.e(this);
            } else {
                f11 = bVar.f24512c;
            }
            g.p pVar2 = sVar.f24673t;
            if (pVar2 != null) {
                f12 = pVar2.f(this);
            } else {
                f12 = bVar.f24513d;
            }
        } else {
            g.p pVar3 = sVar.f24672s;
            float f13 = 1.2f;
            if (pVar3 != null) {
                f10 = pVar3.d(this, 1.0f);
            } else {
                f10 = 1.2f;
            }
            g.p pVar4 = sVar.f24673t;
            if (pVar4 != null) {
                f13 = pVar4.d(this, 1.0f);
            }
            f11 = f10 * bVar.f24512c;
            f12 = f13 * bVar.f24513d;
        }
        if (f11 != 0.0f && f12 != 0.0f) {
            S0();
            C0323h M = M(sVar);
            this.f24702d = M;
            M.f24738a.f24553x = Float.valueOf(1.0f);
            boolean m02 = m0();
            this.f24699a.save();
            Boolean bool2 = sVar.f24669p;
            if (bool2 != null && !bool2.booleanValue()) {
                this.f24699a.translate(bVar.f24510a, bVar.f24511b);
                this.f24699a.scale(bVar.f24512c, bVar.f24513d);
            }
            F0(sVar, false);
            this.f24699a.restore();
            if (m02) {
                k0(k0Var, bVar);
            }
            R0();
        }
    }

    private void K(g.y yVar, String str) {
        g.n0 p10 = yVar.f24641a.p(str);
        if (p10 == null) {
            Z0("Pattern reference '%s' not found", str);
        } else if (!(p10 instanceof g.y)) {
            F("Pattern href attributes must point to other pattern elements", new Object[0]);
        } else if (p10 == yVar) {
            F("Circular reference in pattern href attribute '%s'", str);
        } else {
            g.y yVar2 = (g.y) p10;
            if (yVar.f24686q == null) {
                yVar.f24686q = yVar2.f24686q;
            }
            if (yVar.f24687r == null) {
                yVar.f24687r = yVar2.f24687r;
            }
            if (yVar.f24688s == null) {
                yVar.f24688s = yVar2.f24688s;
            }
            if (yVar.f24689t == null) {
                yVar.f24689t = yVar2.f24689t;
            }
            if (yVar.f24690u == null) {
                yVar.f24690u = yVar2.f24690u;
            }
            if (yVar.f24691v == null) {
                yVar.f24691v = yVar2.f24691v;
            }
            if (yVar.f24692w == null) {
                yVar.f24692w = yVar2.f24692w;
            }
            if (yVar.f24605i.isEmpty()) {
                yVar.f24605i = yVar2.f24605i;
            }
            if (yVar.f24667p == null) {
                yVar.f24667p = yVar2.f24667p;
            }
            if (yVar.f24651o == null) {
                yVar.f24651o = yVar2.f24651o;
            }
            String str2 = yVar2.f24693x;
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
                        if (f24698i == null) {
                            V();
                        }
                        if (!f10.isEmpty() && f24698i.containsAll(f10)) {
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
        W0(this.f24702d, z0Var);
        if (A() && Y0()) {
            g.n0 p10 = z0Var.f24641a.p(z0Var.f24695o);
            if (p10 == null) {
                F("TextPath reference '%s' not found", z0Var.f24695o);
                return;
            }
            g.v vVar = (g.v) p10;
            Path f11 = new d(vVar.f24678o).f();
            Matrix matrix = vVar.f24630n;
            if (matrix != null) {
                f11.transform(matrix);
            }
            PathMeasure pathMeasure = new PathMeasure(f11, false);
            g.p pVar = z0Var.f24696p;
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

    private C0323h M(g.n0 n0Var) {
        C0323h c0323h = new C0323h();
        V0(c0323h, g.e0.a());
        return N(n0Var, c0323h);
    }

    private boolean M0() {
        if (this.f24702d.f24738a.f24553x.floatValue() >= 1.0f && this.f24702d.f24738a.R == null) {
            return false;
        }
        return true;
    }

    private C0323h N(g.n0 n0Var, C0323h c0323h) {
        ArrayList<g.l0> arrayList = new ArrayList();
        while (true) {
            if (n0Var instanceof g.l0) {
                arrayList.add(0, (g.l0) n0Var);
            }
            g.j0 j0Var = n0Var.f24642b;
            if (j0Var == null) {
                break;
            }
            n0Var = (g.n0) j0Var;
        }
        for (g.l0 l0Var : arrayList) {
            W0(c0323h, l0Var);
        }
        C0323h c0323h2 = this.f24702d;
        c0323h.f24744g = c0323h2.f24744g;
        c0323h.f24743f = c0323h2.f24743f;
        return c0323h;
    }

    private void N0() {
        this.f24702d = new C0323h();
        this.f24703e = new Stack();
        V0(this.f24702d, g.e0.a());
        C0323h c0323h = this.f24702d;
        c0323h.f24743f = null;
        c0323h.f24745h = false;
        this.f24703e.push(new C0323h(c0323h));
        this.f24705g = new Stack();
        this.f24704f = new Stack();
    }

    private g.e0.f O() {
        g.e0.f fVar;
        g.e0 e0Var = this.f24702d.f24738a;
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
        g.c cVar = this.f24702d.f24738a.H;
        if (cVar != null) {
            f10 += cVar.f24523d.e(this);
            f11 += this.f24702d.f24738a.H.f24520a.f(this);
            f14 -= this.f24702d.f24738a.H.f24521b.e(this);
            f15 -= this.f24702d.f24738a.H.f24522c.f(this);
        }
        this.f24699a.clipRect(f10, f11, f14, f15);
    }

    private Path.FillType P() {
        g.e0.a aVar = this.f24702d.f24738a.Q;
        if (aVar != null && aVar == g.e0.a.EvenOdd) {
            return Path.FillType.EVEN_ODD;
        }
        return Path.FillType.WINDING;
    }

    private void P0(C0323h c0323h, boolean z10, g.o0 o0Var) {
        Float f10;
        int i10;
        g.e0 e0Var = c0323h.f24738a;
        if (z10) {
            f10 = e0Var.f24544o;
        } else {
            f10 = e0Var.f24546q;
        }
        float floatValue = f10.floatValue();
        if (o0Var instanceof g.f) {
            i10 = ((g.f) o0Var).f24598d;
        } else if (o0Var instanceof g.C0322g) {
            i10 = c0323h.f24738a.f24554y.f24598d;
        } else {
            return;
        }
        int x10 = x(i10, floatValue);
        if (z10) {
            c0323h.f24741d.setColor(x10);
        } else {
            c0323h.f24742e.setColor(x10);
        }
    }

    private void Q0(boolean z10, g.c0 c0Var) {
        boolean z11 = false;
        if (z10) {
            if (W(c0Var.f24633e, 2147483648L)) {
                C0323h c0323h = this.f24702d;
                g.e0 e0Var = c0323h.f24738a;
                g.o0 o0Var = c0Var.f24633e.S;
                e0Var.f24542e = o0Var;
                if (o0Var != null) {
                    z11 = true;
                }
                c0323h.f24739b = z11;
            }
            if (W(c0Var.f24633e, 4294967296L)) {
                this.f24702d.f24738a.f24544o = c0Var.f24633e.T;
            }
            if (W(c0Var.f24633e, 6442450944L)) {
                C0323h c0323h2 = this.f24702d;
                P0(c0323h2, z10, c0323h2.f24738a.f24542e);
                return;
            }
            return;
        }
        if (W(c0Var.f24633e, 2147483648L)) {
            C0323h c0323h3 = this.f24702d;
            g.e0 e0Var2 = c0323h3.f24738a;
            g.o0 o0Var2 = c0Var.f24633e.S;
            e0Var2.f24545p = o0Var2;
            if (o0Var2 != null) {
                z11 = true;
            }
            c0323h3.f24740c = z11;
        }
        if (W(c0Var.f24633e, 4294967296L)) {
            this.f24702d.f24738a.f24546q = c0Var.f24633e.T;
        }
        if (W(c0Var.f24633e, 6442450944L)) {
            C0323h c0323h4 = this.f24702d;
            P0(c0323h4, z10, c0323h4.f24738a.f24545p);
        }
    }

    private void R0() {
        this.f24699a.restore();
        this.f24702d = (C0323h) this.f24703e.pop();
    }

    private void S0() {
        this.f24699a.save();
        this.f24703e.push(this.f24702d);
        this.f24702d = new C0323h(this.f24702d);
    }

    private String T0(String str, boolean z10, boolean z11) {
        if (this.f24702d.f24745h) {
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
        g.e0.a aVar = this.f24702d.f24738a.f24543i;
        if (aVar != null && aVar == g.e0.a.EvenOdd) {
            return Path.FillType.EVEN_ODD;
        }
        return Path.FillType.WINDING;
    }

    private void U0(g.k0 k0Var) {
        if (k0Var.f24642b != null && k0Var.f24629h != null) {
            Matrix matrix = new Matrix();
            if (((Matrix) this.f24705g.peek()).invert(matrix)) {
                g.b bVar = k0Var.f24629h;
                float f10 = bVar.f24510a;
                float f11 = bVar.f24511b;
                float b10 = bVar.b();
                g.b bVar2 = k0Var.f24629h;
                float f12 = bVar2.f24511b;
                float b11 = bVar2.b();
                float c10 = k0Var.f24629h.c();
                g.b bVar3 = k0Var.f24629h;
                float[] fArr = {f10, f11, b10, f12, b11, c10, bVar3.f24510a, bVar3.c()};
                matrix.preConcat(this.f24699a.getMatrix());
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
                g.k0 k0Var2 = (g.k0) this.f24704f.peek();
                g.b bVar4 = k0Var2.f24629h;
                if (bVar4 == null) {
                    k0Var2.f24629h = g.b.a(rectF.left, rectF.top, rectF.right, rectF.bottom);
                } else {
                    bVar4.e(g.b.a(rectF.left, rectF.top, rectF.right, rectF.bottom));
                }
            }
        }
    }

    private static synchronized void V() {
        synchronized (h.class) {
            HashSet hashSet = new HashSet();
            f24698i = hashSet;
            hashSet.add("Structure");
            f24698i.add("BasicStructure");
            f24698i.add("ConditionalProcessing");
            f24698i.add("Image");
            f24698i.add("Style");
            f24698i.add("ViewportAttribute");
            f24698i.add("Shape");
            f24698i.add("BasicText");
            f24698i.add("PaintAttribute");
            f24698i.add("BasicPaintAttribute");
            f24698i.add("OpacityAttribute");
            f24698i.add("BasicGraphicsAttribute");
            f24698i.add("Marker");
            f24698i.add("Gradient");
            f24698i.add("Pattern");
            f24698i.add("Clip");
            f24698i.add("BasicClip");
            f24698i.add("Mask");
            f24698i.add("View");
        }
    }

    private void V0(C0323h c0323h, g.e0 e0Var) {
        boolean z10;
        boolean z11;
        boolean z12;
        int i10;
        boolean z13;
        boolean z14;
        if (W(e0Var, 4096L)) {
            c0323h.f24738a.f24554y = e0Var.f24554y;
        }
        if (W(e0Var, 2048L)) {
            c0323h.f24738a.f24553x = e0Var.f24553x;
        }
        boolean z15 = false;
        if (W(e0Var, 1L)) {
            c0323h.f24738a.f24542e = e0Var.f24542e;
            g.o0 o0Var = e0Var.f24542e;
            if (o0Var != null && o0Var != g.f.f24597i) {
                z14 = true;
            } else {
                z14 = false;
            }
            c0323h.f24739b = z14;
        }
        if (W(e0Var, 4L)) {
            c0323h.f24738a.f24544o = e0Var.f24544o;
        }
        if (W(e0Var, 6149L)) {
            P0(c0323h, true, c0323h.f24738a.f24542e);
        }
        if (W(e0Var, 2L)) {
            c0323h.f24738a.f24543i = e0Var.f24543i;
        }
        if (W(e0Var, 8L)) {
            c0323h.f24738a.f24545p = e0Var.f24545p;
            g.o0 o0Var2 = e0Var.f24545p;
            if (o0Var2 != null && o0Var2 != g.f.f24597i) {
                z13 = true;
            } else {
                z13 = false;
            }
            c0323h.f24740c = z13;
        }
        if (W(e0Var, 16L)) {
            c0323h.f24738a.f24546q = e0Var.f24546q;
        }
        if (W(e0Var, 6168L)) {
            P0(c0323h, false, c0323h.f24738a.f24545p);
        }
        if (W(e0Var, 34359738368L)) {
            c0323h.f24738a.W = e0Var.W;
        }
        if (W(e0Var, 32L)) {
            g.e0 e0Var2 = c0323h.f24738a;
            g.p pVar = e0Var.f24547r;
            e0Var2.f24547r = pVar;
            c0323h.f24742e.setStrokeWidth(pVar.c(this));
        }
        if (W(e0Var, 64L)) {
            c0323h.f24738a.f24548s = e0Var.f24548s;
            int i11 = a.f24708b[e0Var.f24548s.ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        c0323h.f24742e.setStrokeCap(Paint.Cap.SQUARE);
                    }
                } else {
                    c0323h.f24742e.setStrokeCap(Paint.Cap.ROUND);
                }
            } else {
                c0323h.f24742e.setStrokeCap(Paint.Cap.BUTT);
            }
        }
        if (W(e0Var, 128L)) {
            c0323h.f24738a.f24549t = e0Var.f24549t;
            int i12 = a.f24709c[e0Var.f24549t.ordinal()];
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 == 3) {
                        c0323h.f24742e.setStrokeJoin(Paint.Join.BEVEL);
                    }
                } else {
                    c0323h.f24742e.setStrokeJoin(Paint.Join.ROUND);
                }
            } else {
                c0323h.f24742e.setStrokeJoin(Paint.Join.MITER);
            }
        }
        if (W(e0Var, 256L)) {
            c0323h.f24738a.f24550u = e0Var.f24550u;
            c0323h.f24742e.setStrokeMiter(e0Var.f24550u.floatValue());
        }
        if (W(e0Var, 512L)) {
            c0323h.f24738a.f24551v = e0Var.f24551v;
        }
        if (W(e0Var, 1024L)) {
            c0323h.f24738a.f24552w = e0Var.f24552w;
        }
        Typeface typeface = null;
        if (W(e0Var, 1536L)) {
            g.p[] pVarArr = c0323h.f24738a.f24551v;
            if (pVarArr == null) {
                c0323h.f24742e.setPathEffect(null);
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
                    float c10 = c0323h.f24738a.f24551v[i13 % length].c(this);
                    fArr[i13] = c10;
                    f10 += c10;
                }
                if (f10 == 0.0f) {
                    c0323h.f24742e.setPathEffect(null);
                } else {
                    float c11 = c0323h.f24738a.f24552w.c(this);
                    if (c11 < 0.0f) {
                        c11 = (c11 % f10) + f10;
                    }
                    c0323h.f24742e.setPathEffect(new DashPathEffect(fArr, c11));
                }
            }
        }
        if (W(e0Var, 16384L)) {
            float Q = Q();
            c0323h.f24738a.A = e0Var.A;
            c0323h.f24741d.setTextSize(e0Var.A.d(this, Q));
            c0323h.f24742e.setTextSize(e0Var.A.d(this, Q));
        }
        if (W(e0Var, 8192L)) {
            c0323h.f24738a.f24555z = e0Var.f24555z;
        }
        if (W(e0Var, 32768L)) {
            if (e0Var.B.intValue() == -1 && c0323h.f24738a.B.intValue() > 100) {
                g.e0 e0Var3 = c0323h.f24738a;
                e0Var3.B = Integer.valueOf(e0Var3.B.intValue() - 100);
            } else if (e0Var.B.intValue() == 1 && c0323h.f24738a.B.intValue() < 900) {
                g.e0 e0Var4 = c0323h.f24738a;
                e0Var4.B = Integer.valueOf(e0Var4.B.intValue() + 100);
            } else {
                c0323h.f24738a.B = e0Var.B;
            }
        }
        if (W(e0Var, 65536L)) {
            c0323h.f24738a.C = e0Var.C;
        }
        if (W(e0Var, 106496L)) {
            if (c0323h.f24738a.f24555z != null && this.f24701c != null) {
                f6.g.k();
                for (String str : c0323h.f24738a.f24555z) {
                    g.e0 e0Var5 = c0323h.f24738a;
                    typeface = t(str, e0Var5.B, e0Var5.C);
                    if (typeface != null) {
                        break;
                    }
                }
            }
            if (typeface == null) {
                g.e0 e0Var6 = c0323h.f24738a;
                typeface = t("serif", e0Var6.B, e0Var6.C);
            }
            c0323h.f24741d.setTypeface(typeface);
            c0323h.f24742e.setTypeface(typeface);
        }
        if (W(e0Var, 131072L)) {
            c0323h.f24738a.D = e0Var.D;
            Paint paint = c0323h.f24741d;
            g.e0.EnumC0321g enumC0321g = e0Var.D;
            g.e0.EnumC0321g enumC0321g2 = g.e0.EnumC0321g.LineThrough;
            if (enumC0321g == enumC0321g2) {
                z10 = true;
            } else {
                z10 = false;
            }
            paint.setStrikeThruText(z10);
            Paint paint2 = c0323h.f24741d;
            g.e0.EnumC0321g enumC0321g3 = e0Var.D;
            g.e0.EnumC0321g enumC0321g4 = g.e0.EnumC0321g.Underline;
            if (enumC0321g3 == enumC0321g4) {
                z11 = true;
            } else {
                z11 = false;
            }
            paint2.setUnderlineText(z11);
            Paint paint3 = c0323h.f24742e;
            if (e0Var.D == enumC0321g2) {
                z12 = true;
            } else {
                z12 = false;
            }
            paint3.setStrikeThruText(z12);
            Paint paint4 = c0323h.f24742e;
            if (e0Var.D == enumC0321g4) {
                z15 = true;
            }
            paint4.setUnderlineText(z15);
        }
        if (W(e0Var, 68719476736L)) {
            c0323h.f24738a.E = e0Var.E;
        }
        if (W(e0Var, 262144L)) {
            c0323h.f24738a.F = e0Var.F;
        }
        if (W(e0Var, 524288L)) {
            c0323h.f24738a.G = e0Var.G;
        }
        if (W(e0Var, 2097152L)) {
            c0323h.f24738a.I = e0Var.I;
        }
        if (W(e0Var, 4194304L)) {
            c0323h.f24738a.J = e0Var.J;
        }
        if (W(e0Var, 8388608L)) {
            c0323h.f24738a.K = e0Var.K;
        }
        if (W(e0Var, 16777216L)) {
            c0323h.f24738a.L = e0Var.L;
        }
        if (W(e0Var, 33554432L)) {
            c0323h.f24738a.M = e0Var.M;
        }
        if (W(e0Var, 1048576L)) {
            c0323h.f24738a.H = e0Var.H;
        }
        if (W(e0Var, 268435456L)) {
            c0323h.f24738a.P = e0Var.P;
        }
        if (W(e0Var, 536870912L)) {
            c0323h.f24738a.Q = e0Var.Q;
        }
        if (W(e0Var, 1073741824L)) {
            c0323h.f24738a.R = e0Var.R;
        }
        if (W(e0Var, 67108864L)) {
            c0323h.f24738a.N = e0Var.N;
        }
        if (W(e0Var, 134217728L)) {
            c0323h.f24738a.O = e0Var.O;
        }
        if (W(e0Var, 8589934592L)) {
            c0323h.f24738a.U = e0Var.U;
        }
        if (W(e0Var, 17179869184L)) {
            c0323h.f24738a.V = e0Var.V;
        }
        if (W(e0Var, 137438953472L)) {
            c0323h.f24738a.X = e0Var.X;
        }
    }

    private boolean W(g.e0 e0Var, long j10) {
        if ((e0Var.f24541d & j10) != 0) {
            return true;
        }
        return false;
    }

    private void W0(C0323h c0323h, g.l0 l0Var) {
        boolean z10;
        if (l0Var.f24642b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        c0323h.f24738a.b(z10);
        g.e0 e0Var = l0Var.f24633e;
        if (e0Var != null) {
            V0(c0323h, e0Var);
        }
        if (this.f24701c.n()) {
            for (b.p pVar : this.f24701c.d()) {
                if (f6.b.l(this.f24706h, pVar.f24448a, l0Var)) {
                    V0(c0323h, pVar.f24449b);
                }
            }
        }
        g.e0 e0Var2 = l0Var.f24634f;
        if (e0Var2 != null) {
            V0(c0323h, e0Var2);
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
        String str = m0Var.f24624l;
        if (str != null) {
            H(m0Var, str);
        }
        Boolean bool = m0Var.f24621i;
        int i10 = 0;
        if (bool != null && bool.booleanValue()) {
            z11 = true;
        } else {
            z11 = false;
        }
        C0323h c0323h = this.f24702d;
        if (z10) {
            paint = c0323h.f24741d;
        } else {
            paint = c0323h.f24742e;
        }
        if (z11) {
            g.b S = S();
            g.p pVar = m0Var.f24637m;
            if (pVar != null) {
                f18 = pVar.e(this);
            } else {
                f18 = 0.0f;
            }
            g.p pVar2 = m0Var.f24638n;
            if (pVar2 != null) {
                f11 = pVar2.f(this);
            } else {
                f11 = 0.0f;
            }
            g.p pVar3 = m0Var.f24639o;
            if (pVar3 != null) {
                f19 = pVar3.e(this);
            } else {
                f19 = S.f24512c;
            }
            g.p pVar4 = m0Var.f24640p;
            if (pVar4 != null) {
                f20 = pVar4.f(this);
            } else {
                f20 = 0.0f;
            }
            f16 = f19;
            f14 = f18;
            f15 = f20;
        } else {
            g.p pVar5 = m0Var.f24637m;
            if (pVar5 != null) {
                f10 = pVar5.d(this, 1.0f);
            } else {
                f10 = 0.0f;
            }
            g.p pVar6 = m0Var.f24638n;
            if (pVar6 != null) {
                f11 = pVar6.d(this, 1.0f);
            } else {
                f11 = 0.0f;
            }
            g.p pVar7 = m0Var.f24639o;
            if (pVar7 != null) {
                f12 = pVar7.d(this, 1.0f);
            } else {
                f12 = 1.0f;
            }
            g.p pVar8 = m0Var.f24640p;
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
        this.f24702d = M(m0Var);
        Matrix matrix = new Matrix();
        if (!z11) {
            matrix.preTranslate(bVar.f24510a, bVar.f24511b);
            matrix.preScale(bVar.f24512c, bVar.f24513d);
        }
        Matrix matrix2 = m0Var.f24622j;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        int size = m0Var.f24620h.size();
        if (size == 0) {
            R0();
            if (z10) {
                this.f24702d.f24739b = false;
                return;
            } else {
                this.f24702d.f24740c = false;
                return;
            }
        }
        int[] iArr = new int[size];
        float[] fArr = new float[size];
        float f22 = -1.0f;
        for (g.n0 n0Var : m0Var.f24620h) {
            g.d0 d0Var = (g.d0) n0Var;
            Float f23 = d0Var.f24529h;
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
            W0(this.f24702d, d0Var);
            g.e0 e0Var = this.f24702d.f24738a;
            g.f fVar = (g.f) e0Var.N;
            if (fVar == null) {
                fVar = g.f.f24596e;
            }
            iArr[i10] = x(fVar.f24598d, e0Var.O.floatValue());
            i10++;
            R0();
        }
        if ((f14 == f16 && f21 == f15) || size == 1) {
            R0();
            paint.setColor(iArr[size - 1]);
            return;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        g.k kVar = m0Var.f24623k;
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
        paint.setAlpha(w(this.f24702d.f24738a.f24544o.floatValue()));
    }

    private void X0() {
        int i10;
        g.e0 e0Var = this.f24702d.f24738a;
        g.o0 o0Var = e0Var.U;
        if (o0Var instanceof g.f) {
            i10 = ((g.f) o0Var).f24598d;
        } else if (o0Var instanceof g.C0322g) {
            i10 = e0Var.f24554y.f24598d;
        } else {
            return;
        }
        Float f10 = e0Var.V;
        if (f10 != null) {
            i10 = x(i10, f10.floatValue());
        }
        this.f24699a.drawColor(i10);
    }

    private Path Y(g.d dVar) {
        float f10;
        g.p pVar = dVar.f24526o;
        float f11 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = dVar.f24527p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        }
        float f12 = f11;
        float c10 = dVar.f24528q.c(this);
        float f13 = f10 - c10;
        float f14 = f12 - c10;
        float f15 = f10 + c10;
        float f16 = f12 + c10;
        if (dVar.f24629h == null) {
            float f17 = 2.0f * c10;
            dVar.f24629h = new g.b(f13, f14, f17, f17);
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
        Boolean bool = this.f24702d.f24738a.M;
        if (bool != null) {
            return bool.booleanValue();
        }
        return true;
    }

    private Path Z(g.i iVar) {
        float f10;
        g.p pVar = iVar.f24611o;
        float f11 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = iVar.f24612p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        }
        float f12 = f11;
        float e10 = iVar.f24613q.e(this);
        float f13 = iVar.f24614r.f(this);
        float f14 = f10 - e10;
        float f15 = f12 - f13;
        float f16 = f10 + e10;
        float f17 = f12 + f13;
        if (iVar.f24629h == null) {
            iVar.f24629h = new g.b(f14, f15, e10 * 2.0f, 2.0f * f13);
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
        g.p pVar = qVar.f24652o;
        float f11 = 0.0f;
        if (pVar == null) {
            e10 = 0.0f;
        } else {
            e10 = pVar.e(this);
        }
        g.p pVar2 = qVar.f24653p;
        if (pVar2 == null) {
            f10 = 0.0f;
        } else {
            f10 = pVar2.f(this);
        }
        g.p pVar3 = qVar.f24654q;
        if (pVar3 == null) {
            e11 = 0.0f;
        } else {
            e11 = pVar3.e(this);
        }
        g.p pVar4 = qVar.f24655r;
        if (pVar4 != null) {
            f11 = pVar4.f(this);
        }
        if (qVar.f24629h == null) {
            qVar.f24629h = new g.b(Math.min(e10, e11), Math.min(f10, f11), Math.abs(e11 - e10), Math.abs(f11 - f10));
        }
        Path path = new Path();
        path.moveTo(e10, f10);
        path.lineTo(e11, f11);
        return path;
    }

    private Path b0(g.z zVar) {
        Path path = new Path();
        float[] fArr = zVar.f24694o;
        path.moveTo(fArr[0], fArr[1]);
        int i10 = 2;
        while (true) {
            float[] fArr2 = zVar.f24694o;
            if (i10 >= fArr2.length) {
                break;
            }
            path.lineTo(fArr2[i10], fArr2[i10 + 1]);
            i10 += 2;
        }
        if (zVar instanceof g.a0) {
            path.close();
        }
        if (zVar.f24629h == null) {
            zVar.f24629h = m(path);
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
        List list = w0Var.f24506o;
        float f13 = 0.0f;
        if (list != null && list.size() != 0) {
            f10 = ((g.p) w0Var.f24506o.get(0)).e(this);
        } else {
            f10 = 0.0f;
        }
        List list2 = w0Var.f24507p;
        if (list2 != null && list2.size() != 0) {
            f11 = ((g.p) w0Var.f24507p.get(0)).f(this);
        } else {
            f11 = 0.0f;
        }
        List list3 = w0Var.f24508q;
        if (list3 != null && list3.size() != 0) {
            f12 = ((g.p) w0Var.f24508q.get(0)).e(this);
        } else {
            f12 = 0.0f;
        }
        List list4 = w0Var.f24509r;
        if (list4 != null && list4.size() != 0) {
            f13 = ((g.p) w0Var.f24509r.get(0)).f(this);
        }
        if (this.f24702d.f24738a.F != g.e0.f.Start) {
            float n10 = n(w0Var);
            if (this.f24702d.f24738a.F == g.e0.f.Middle) {
                n10 /= 2.0f;
            }
            f10 -= n10;
        }
        if (w0Var.f24629h == null) {
            i iVar = new i(f10, f11);
            E(w0Var, iVar);
            RectF rectF = iVar.f24749d;
            w0Var.f24629h = new g.b(rectF.left, rectF.top, rectF.width(), iVar.f24749d.height());
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
        String str = q0Var.f24624l;
        if (str != null) {
            H(q0Var, str);
        }
        Boolean bool = q0Var.f24621i;
        int i10 = 0;
        if (bool != null && bool.booleanValue()) {
            z11 = true;
        } else {
            z11 = false;
        }
        C0323h c0323h = this.f24702d;
        if (z10) {
            paint = c0323h.f24741d;
        } else {
            paint = c0323h.f24742e;
        }
        if (z11) {
            g.p pVar = new g.p(50.0f, g.d1.percent);
            g.p pVar2 = q0Var.f24656m;
            if (pVar2 != null) {
                e10 = pVar2.e(this);
            } else {
                e10 = pVar.e(this);
            }
            g.p pVar3 = q0Var.f24657n;
            if (pVar3 != null) {
                f16 = pVar3.f(this);
            } else {
                f16 = pVar.f(this);
            }
            g.p pVar4 = q0Var.f24658o;
            if (pVar4 != null) {
                c10 = pVar4.c(this);
            } else {
                c10 = pVar.c(this);
            }
            f13 = c10;
            f12 = e10;
            f14 = f16;
        } else {
            g.p pVar5 = q0Var.f24656m;
            float f17 = 0.5f;
            if (pVar5 != null) {
                f10 = pVar5.d(this, 1.0f);
            } else {
                f10 = 0.5f;
            }
            g.p pVar6 = q0Var.f24657n;
            if (pVar6 != null) {
                f11 = pVar6.d(this, 1.0f);
            } else {
                f11 = 0.5f;
            }
            g.p pVar7 = q0Var.f24658o;
            if (pVar7 != null) {
                f17 = pVar7.d(this, 1.0f);
            }
            f12 = f10;
            f13 = f17;
            f14 = f11;
        }
        S0();
        this.f24702d = M(q0Var);
        Matrix matrix = new Matrix();
        if (!z11) {
            matrix.preTranslate(bVar.f24510a, bVar.f24511b);
            matrix.preScale(bVar.f24512c, bVar.f24513d);
        }
        Matrix matrix2 = q0Var.f24622j;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        int size = q0Var.f24620h.size();
        if (size == 0) {
            R0();
            if (z10) {
                this.f24702d.f24739b = false;
                return;
            } else {
                this.f24702d.f24740c = false;
                return;
            }
        }
        int[] iArr = new int[size];
        float[] fArr = new float[size];
        float f18 = -1.0f;
        for (g.n0 n0Var : q0Var.f24620h) {
            g.d0 d0Var = (g.d0) n0Var;
            Float f19 = d0Var.f24529h;
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
            W0(this.f24702d, d0Var);
            g.e0 e0Var = this.f24702d.f24738a;
            g.f fVar = (g.f) e0Var.N;
            if (fVar == null) {
                fVar = g.f.f24596e;
            }
            iArr[i10] = x(fVar.f24598d, e0Var.O.floatValue());
            i10++;
            R0();
        }
        if (f13 != 0.0f && size != 1) {
            Shader.TileMode tileMode = Shader.TileMode.CLAMP;
            g.k kVar = q0Var.f24623k;
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
            paint.setAlpha(w(this.f24702d.f24738a.f24544o.floatValue()));
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
            f11 = S.f24512c;
        }
        if (pVar4 != null) {
            f12 = pVar4.f(this);
        } else {
            f12 = S.f24513d;
        }
        return new g.b(f10, f13, f11, f12);
    }

    private Path g0(g.k0 k0Var, boolean z10) {
        Path d02;
        Path j10;
        this.f24703e.push(this.f24702d);
        C0323h c0323h = new C0323h(this.f24702d);
        this.f24702d = c0323h;
        W0(c0323h, k0Var);
        if (A() && Y0()) {
            if (k0Var instanceof g.e1) {
                if (!z10) {
                    F("<use> elements inside a <clipPath> cannot reference another <use>", new Object[0]);
                }
                g.e1 e1Var = (g.e1) k0Var;
                g.n0 p10 = k0Var.f24641a.p(e1Var.f24591p);
                if (p10 == null) {
                    F("Use reference '%s' not found", e1Var.f24591p);
                    this.f24702d = (C0323h) this.f24703e.pop();
                    return null;
                } else if (!(p10 instanceof g.k0)) {
                    this.f24702d = (C0323h) this.f24703e.pop();
                    return null;
                } else {
                    d02 = g0((g.k0) p10, false);
                    if (d02 == null) {
                        return null;
                    }
                    if (e1Var.f24629h == null) {
                        e1Var.f24629h = m(d02);
                    }
                    Matrix matrix = e1Var.f24636o;
                    if (matrix != null) {
                        d02.transform(matrix);
                    }
                }
            } else if (k0Var instanceof g.l) {
                g.l lVar = (g.l) k0Var;
                if (k0Var instanceof g.v) {
                    d02 = new d(((g.v) k0Var).f24678o).f();
                    if (k0Var.f24629h == null) {
                        k0Var.f24629h = m(d02);
                    }
                } else {
                    d02 = k0Var instanceof g.b0 ? c0((g.b0) k0Var) : k0Var instanceof g.d ? Y((g.d) k0Var) : k0Var instanceof g.i ? Z((g.i) k0Var) : k0Var instanceof g.z ? b0((g.z) k0Var) : null;
                }
                if (d02 == null) {
                    return null;
                }
                if (lVar.f24629h == null) {
                    lVar.f24629h = m(d02);
                }
                Matrix matrix2 = lVar.f24630n;
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
                Matrix matrix3 = w0Var.f24685s;
                if (matrix3 != null) {
                    d02.transform(matrix3);
                }
                d02.setFillType(P());
            } else {
                F("Invalid %s element found in clipPath definition", k0Var.n());
                return null;
            }
            if (this.f24702d.f24738a.P != null && (j10 = j(k0Var, k0Var.f24629h)) != null) {
                d02.op(j10, Path.Op.INTERSECT);
            }
            this.f24702d = (C0323h) this.f24703e.pop();
            return d02;
        }
        this.f24702d = (C0323h) this.f24703e.pop();
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
        this.f24704f.pop();
        this.f24705g.pop();
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
        this.f24704f.push(j0Var);
        this.f24705g.push(this.f24699a.getMatrix());
    }

    private Path j(g.k0 k0Var, g.b bVar) {
        boolean z10;
        Path g02;
        g.n0 p10 = k0Var.f24641a.p(this.f24702d.f24738a.P);
        if (p10 == null) {
            F("ClipPath reference '%s' not found", this.f24702d.f24738a.P);
            return null;
        }
        g.e eVar = (g.e) p10;
        this.f24703e.push(this.f24702d);
        this.f24702d = M(eVar);
        Boolean bool = eVar.f24540p;
        if (bool != null && !bool.booleanValue()) {
            z10 = false;
        } else {
            z10 = true;
        }
        Matrix matrix = new Matrix();
        if (!z10) {
            matrix.preTranslate(bVar.f24510a, bVar.f24511b);
            matrix.preScale(bVar.f24512c, bVar.f24513d);
        }
        Matrix matrix2 = eVar.f24636o;
        if (matrix2 != null) {
            matrix.preConcat(matrix2);
        }
        Path path = new Path();
        for (g.n0 n0Var : eVar.f24605i) {
            if ((n0Var instanceof g.k0) && (g02 = g0((g.k0) n0Var, true)) != null) {
                path.op(g02, Path.Op.UNION);
            }
        }
        if (this.f24702d.f24738a.P != null) {
            if (eVar.f24629h == null) {
                eVar.f24629h = m(path);
            }
            Path j10 = j(eVar, eVar.f24629h);
            if (j10 != null) {
                path.op(j10, Path.Op.INTERSECT);
            }
        }
        path.transform(matrix);
        this.f24702d = (C0323h) this.f24703e.pop();
        return path;
    }

    private void j0(g.k0 k0Var) {
        k0(k0Var, k0Var.f24629h);
    }

    private List k(g.q qVar) {
        float f10;
        float f11;
        float f12;
        g.p pVar = qVar.f24652o;
        float f13 = 0.0f;
        if (pVar != null) {
            f10 = pVar.e(this);
        } else {
            f10 = 0.0f;
        }
        g.p pVar2 = qVar.f24653p;
        if (pVar2 != null) {
            f11 = pVar2.f(this);
        } else {
            f11 = 0.0f;
        }
        g.p pVar3 = qVar.f24654q;
        if (pVar3 != null) {
            f12 = pVar3.e(this);
        } else {
            f12 = 0.0f;
        }
        g.p pVar4 = qVar.f24655r;
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
        if (this.f24702d.f24738a.R != null) {
            Paint paint = new Paint();
            PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
            paint.setXfermode(new PorterDuffXfermode(mode));
            this.f24699a.saveLayer(null, paint, 31);
            Paint paint2 = new Paint();
            paint2.setColorFilter(new ColorMatrixColorFilter(new ColorMatrix(new float[]{0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.2127f, 0.7151f, 0.0722f, 0.0f, 0.0f})));
            this.f24699a.saveLayer(null, paint2, 31);
            g.s sVar = (g.s) this.f24701c.p(this.f24702d.f24738a.R);
            J0(sVar, k0Var, bVar);
            this.f24699a.restore();
            Paint paint3 = new Paint();
            paint3.setXfermode(new PorterDuffXfermode(mode));
            this.f24699a.saveLayer(null, paint3, 31);
            J0(sVar, k0Var, bVar);
            this.f24699a.restore();
            this.f24699a.restore();
        }
        R0();
    }

    private List l(g.z zVar) {
        int length = zVar.f24694o.length;
        int i10 = 2;
        if (length < 2) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        float[] fArr = zVar.f24694o;
        c cVar = new c(fArr[0], fArr[1], 0.0f, 0.0f);
        float f10 = 0.0f;
        float f11 = 0.0f;
        while (i10 < length) {
            float[] fArr2 = zVar.f24694o;
            float f12 = fArr2[i10];
            float f13 = fArr2[i10 + 1];
            cVar.a(f12, f13);
            arrayList.add(cVar);
            i10 += 2;
            cVar = new c(f12, f13, f12 - cVar.f24719a, f13 - cVar.f24720b);
            f10 = f12;
            f11 = f13;
        }
        if (zVar instanceof g.a0) {
            float[] fArr3 = zVar.f24694o;
            float f14 = fArr3[0];
            if (f10 != f14) {
                float f15 = fArr3[1];
                if (f11 != f15) {
                    cVar.a(f14, f15);
                    arrayList.add(cVar);
                    c cVar2 = new c(f14, f15, f14 - cVar.f24719a, f15 - cVar.f24720b);
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
                W0(this.f24702d, v0Var);
                if (A()) {
                    List list = v0Var.f24506o;
                    if (list != null && list.size() > 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    boolean z11 = jVar instanceof f;
                    float f13 = 0.0f;
                    if (z11) {
                        if (!z10) {
                            e10 = ((f) jVar).f24731b;
                        } else {
                            e10 = ((g.p) v0Var.f24506o.get(0)).e(this);
                        }
                        List list2 = v0Var.f24507p;
                        if (list2 != null && list2.size() != 0) {
                            f11 = ((g.p) v0Var.f24507p.get(0)).f(this);
                        } else {
                            f11 = ((f) jVar).f24732c;
                        }
                        List list3 = v0Var.f24508q;
                        if (list3 != null && list3.size() != 0) {
                            f12 = ((g.p) v0Var.f24508q.get(0)).e(this);
                        } else {
                            f12 = 0.0f;
                        }
                        List list4 = v0Var.f24509r;
                        if (list4 != null && list4.size() != 0) {
                            f13 = ((g.p) v0Var.f24509r.get(0)).f(this);
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
                        fVar.f24731b = f13 + f12;
                        fVar.f24732c = f11 + f10;
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
                W0(this.f24702d, u0Var);
                if (A()) {
                    r((g.k0) u0Var.d());
                    g.n0 p10 = n0Var.f24641a.p(u0Var.f24676o);
                    if (p10 != null && (p10 instanceof g.y0)) {
                        StringBuilder sb2 = new StringBuilder();
                        G((g.y0) p10, sb2);
                        if (sb2.length() > 0) {
                            jVar.b(sb2.toString());
                        }
                    } else {
                        F("Tref reference '%s' not found", u0Var.f24676o);
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
        this.f24699a.saveLayerAlpha(null, w(this.f24702d.f24738a.f24553x.floatValue()), 31);
        this.f24703e.push(this.f24702d);
        C0323h c0323h = new C0323h(this.f24702d);
        this.f24702d = c0323h;
        String str = c0323h.f24738a.R;
        if (str != null && ((p10 = this.f24701c.p(str)) == null || !(p10 instanceof g.s))) {
            F("Mask reference '%s' not found", this.f24702d.f24738a.R);
            this.f24702d.f24738a.R = null;
        }
        return true;
    }

    private float n(g.y0 y0Var) {
        k kVar = new k(this, null);
        E(y0Var, kVar);
        return kVar.f24752b;
    }

    private c n0(c cVar, c cVar2, c cVar3) {
        float D = D(cVar2.f24721c, cVar2.f24722d, cVar2.f24719a - cVar.f24719a, cVar2.f24720b - cVar.f24720b);
        if (D == 0.0f) {
            D = D(cVar2.f24721c, cVar2.f24722d, cVar3.f24719a - cVar2.f24719a, cVar3.f24720b - cVar2.f24720b);
        }
        int i10 = (D > 0.0f ? 1 : (D == 0.0f ? 0 : -1));
        if (i10 > 0 || (i10 == 0 && (cVar2.f24721c > 0.0f || cVar2.f24722d >= 0.0f))) {
            return cVar2;
        }
        cVar2.f24721c = -cVar2.f24721c;
        cVar2.f24722d = -cVar2.f24722d;
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
            float r1 = r10.f24512c
            float r2 = r11.f24512c
            float r1 = r1 / r2
            float r2 = r10.f24513d
            float r3 = r11.f24513d
            float r2 = r2 / r3
            float r3 = r11.f24510a
            float r3 = -r3
            float r4 = r11.f24511b
            float r4 = -r4
            f6.e r5 = f6.e.f24468d
            boolean r5 = r12.equals(r5)
            if (r5 == 0) goto L35
            float r11 = r10.f24510a
            float r10 = r10.f24511b
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
            float r2 = r10.f24512c
            float r2 = r2 / r1
            float r5 = r10.f24513d
            float r5 = r5 / r1
            int[] r6 = f6.h.a.f24707a
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
            float r7 = r11.f24512c
            float r7 = r7 - r2
        L61:
            float r3 = r3 - r7
            goto L68
        L63:
            float r7 = r11.f24512c
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
            float r11 = r11.f24513d
            float r11 = r11 - r5
        L89:
            float r4 = r4 - r11
            goto L90
        L8b:
            float r11 = r11.f24513d
            float r11 = r11 - r5
            float r11 = r11 / r8
            goto L89
        L90:
            float r11 = r10.f24510a
            float r10 = r10.f24511b
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
        g.p pVar = dVar.f24528q;
        if (pVar != null && !pVar.i()) {
            W0(this.f24702d, dVar);
            if (A() && Y0()) {
                Matrix matrix = dVar.f24630n;
                if (matrix != null) {
                    this.f24699a.concat(matrix);
                }
                Path Y = Y(dVar);
                U0(dVar);
                r(dVar);
                p(dVar);
                boolean m02 = m0();
                if (this.f24702d.f24739b) {
                    B(dVar, Y);
                }
                if (this.f24702d.f24740c) {
                    C(Y);
                }
                if (m02) {
                    j0(dVar);
                }
            }
        }
    }

    private void p(g.k0 k0Var) {
        q(k0Var, k0Var.f24629h);
    }

    private void p0(g.i iVar) {
        y("Ellipse render", new Object[0]);
        g.p pVar = iVar.f24613q;
        if (pVar != null && iVar.f24614r != null && !pVar.i() && !iVar.f24614r.i()) {
            W0(this.f24702d, iVar);
            if (A() && Y0()) {
                Matrix matrix = iVar.f24630n;
                if (matrix != null) {
                    this.f24699a.concat(matrix);
                }
                Path Z = Z(iVar);
                U0(iVar);
                r(iVar);
                p(iVar);
                boolean m02 = m0();
                if (this.f24702d.f24739b) {
                    B(iVar, Z);
                }
                if (this.f24702d.f24740c) {
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
        if (this.f24702d.f24738a.P != null && (j10 = j(k0Var, bVar)) != null) {
            this.f24699a.clipPath(j10);
        }
    }

    private void q0(g.m mVar) {
        y("Group render", new Object[0]);
        W0(this.f24702d, mVar);
        if (!A()) {
            return;
        }
        Matrix matrix = mVar.f24636o;
        if (matrix != null) {
            this.f24699a.concat(matrix);
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
        g.o0 o0Var = this.f24702d.f24738a.f24542e;
        if (o0Var instanceof g.u) {
            z(true, k0Var.f24629h, (g.u) o0Var);
        }
        g.o0 o0Var2 = this.f24702d.f24738a.f24545p;
        if (o0Var2 instanceof g.u) {
            z(false, k0Var.f24629h, (g.u) o0Var2);
        }
    }

    private void r0(g.o oVar) {
        g.p pVar;
        String str;
        float f10;
        float f11;
        int i10 = 0;
        y("Image render", new Object[0]);
        g.p pVar2 = oVar.f24646s;
        if (pVar2 != null && !pVar2.i() && (pVar = oVar.f24647t) != null && !pVar.i() && (str = oVar.f24643p) != null) {
            f6.e eVar = oVar.f24651o;
            if (eVar == null) {
                eVar = f6.e.f24469e;
            }
            Bitmap s10 = s(str);
            if (s10 == null) {
                f6.g.k();
                return;
            }
            g.b bVar = new g.b(0.0f, 0.0f, s10.getWidth(), s10.getHeight());
            W0(this.f24702d, oVar);
            if (A() && Y0()) {
                Matrix matrix = oVar.f24648u;
                if (matrix != null) {
                    this.f24699a.concat(matrix);
                }
                g.p pVar3 = oVar.f24644q;
                if (pVar3 != null) {
                    f10 = pVar3.e(this);
                } else {
                    f10 = 0.0f;
                }
                g.p pVar4 = oVar.f24645r;
                if (pVar4 != null) {
                    f11 = pVar4.f(this);
                } else {
                    f11 = 0.0f;
                }
                this.f24702d.f24743f = new g.b(f10, f11, oVar.f24646s.e(this), oVar.f24647t.e(this));
                if (!this.f24702d.f24738a.G.booleanValue()) {
                    g.b bVar2 = this.f24702d.f24743f;
                    O0(bVar2.f24510a, bVar2.f24511b, bVar2.f24512c, bVar2.f24513d);
                }
                oVar.f24629h = this.f24702d.f24743f;
                U0(oVar);
                p(oVar);
                boolean m02 = m0();
                X0();
                this.f24699a.save();
                this.f24699a.concat(o(this.f24702d.f24743f, bVar, eVar));
                if (this.f24702d.f24738a.X != g.e0.e.optimizeSpeed) {
                    i10 = 2;
                }
                this.f24699a.drawBitmap(s10, 0.0f, 0.0f, new Paint(i10));
                this.f24699a.restore();
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
        W0(this.f24702d, qVar);
        if (A() && Y0() && this.f24702d.f24740c) {
            Matrix matrix = qVar.f24630n;
            if (matrix != null) {
                this.f24699a.concat(matrix);
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
        if (vVar.f24678o != null) {
            W0(this.f24702d, vVar);
            if (A() && Y0()) {
                C0323h c0323h = this.f24702d;
                if (c0323h.f24740c || c0323h.f24739b) {
                    Matrix matrix = vVar.f24630n;
                    if (matrix != null) {
                        this.f24699a.concat(matrix);
                    }
                    Path f10 = new d(vVar.f24678o).f();
                    if (vVar.f24629h == null) {
                        vVar.f24629h = m(f10);
                    }
                    U0(vVar);
                    r(vVar);
                    p(vVar);
                    boolean m02 = m0();
                    if (this.f24702d.f24739b) {
                        f10.setFillType(U());
                        B(vVar, f10);
                    }
                    if (this.f24702d.f24740c) {
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
        if ((n0Var instanceof g.l0) && (bool = ((g.l0) n0Var).f24632d) != null) {
            this.f24702d.f24745h = bool.booleanValue();
        }
    }

    private void u0(g.z zVar) {
        y("PolyLine render", new Object[0]);
        W0(this.f24702d, zVar);
        if (A() && Y0()) {
            C0323h c0323h = this.f24702d;
            if (c0323h.f24740c || c0323h.f24739b) {
                Matrix matrix = zVar.f24630n;
                if (matrix != null) {
                    this.f24699a.concat(matrix);
                }
                if (zVar.f24694o.length >= 2) {
                    Path b02 = b0(zVar);
                    U0(zVar);
                    b02.setFillType(U());
                    r(zVar);
                    p(zVar);
                    boolean m02 = m0();
                    if (this.f24702d.f24739b) {
                        B(zVar, b02);
                    }
                    if (this.f24702d.f24740c) {
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
        W0(this.f24702d, a0Var);
        if (A() && Y0()) {
            C0323h c0323h = this.f24702d;
            if (c0323h.f24740c || c0323h.f24739b) {
                Matrix matrix = a0Var.f24630n;
                if (matrix != null) {
                    this.f24699a.concat(matrix);
                }
                if (a0Var.f24694o.length >= 2) {
                    Path b02 = b0(a0Var);
                    U0(a0Var);
                    r(a0Var);
                    p(a0Var);
                    boolean m02 = m0();
                    if (this.f24702d.f24739b) {
                        B(a0Var, b02);
                    }
                    if (this.f24702d.f24740c) {
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
        g.p pVar = b0Var.f24516q;
        if (pVar != null && b0Var.f24517r != null && !pVar.i() && !b0Var.f24517r.i()) {
            W0(this.f24702d, b0Var);
            if (A() && Y0()) {
                Matrix matrix = b0Var.f24630n;
                if (matrix != null) {
                    this.f24699a.concat(matrix);
                }
                Path c02 = c0(b0Var);
                U0(b0Var);
                r(b0Var);
                p(b0Var);
                boolean m02 = m0();
                if (this.f24702d.f24739b) {
                    B(b0Var, c02);
                }
                if (this.f24702d.f24740c) {
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
        z0(f0Var, f0(f0Var.f24599q, f0Var.f24600r, f0Var.f24601s, f0Var.f24602t), f0Var.f24667p, f0Var.f24651o);
    }

    private void y0(g.f0 f0Var, g.b bVar) {
        z0(f0Var, bVar, f0Var.f24667p, f0Var.f24651o);
    }

    private void z(boolean z10, g.b bVar, g.u uVar) {
        String str;
        g.n0 p10 = this.f24701c.p(uVar.f24674d);
        if (p10 == null) {
            if (z10) {
                str = "Fill";
            } else {
                str = "Stroke";
            }
            F("%s reference '%s' not found", str, uVar.f24674d);
            g.o0 o0Var = uVar.f24675e;
            if (o0Var != null) {
                P0(this.f24702d, z10, o0Var);
            } else if (z10) {
                this.f24702d.f24739b = false;
            } else {
                this.f24702d.f24740c = false;
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
        if (bVar.f24512c != 0.0f && bVar.f24513d != 0.0f) {
            if (eVar == null && (eVar = f0Var.f24651o) == null) {
                eVar = f6.e.f24469e;
            }
            W0(this.f24702d, f0Var);
            if (A()) {
                C0323h c0323h = this.f24702d;
                c0323h.f24743f = bVar;
                if (!c0323h.f24738a.G.booleanValue()) {
                    g.b bVar3 = this.f24702d.f24743f;
                    O0(bVar3.f24510a, bVar3.f24511b, bVar3.f24512c, bVar3.f24513d);
                }
                q(f0Var, this.f24702d.f24743f);
                if (bVar2 != null) {
                    this.f24699a.concat(o(this.f24702d.f24743f, bVar2, eVar));
                    this.f24702d.f24744g = f0Var.f24667p;
                } else {
                    Canvas canvas = this.f24699a;
                    g.b bVar4 = this.f24702d.f24743f;
                    canvas.translate(bVar4.f24510a, bVar4.f24511b);
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
            this.f24701c = gVar;
            g.f0 m10 = gVar.m();
            if (m10 == null) {
                Z0("Nothing to render. Document is empty.", new Object[0]);
                return;
            }
            if (fVar.e()) {
                g.l0 j10 = this.f24701c.j(fVar.f24496e);
                if (j10 != null && (j10 instanceof g.f1)) {
                    g.f1 f1Var = (g.f1) j10;
                    bVar2 = f1Var.f24667p;
                    if (bVar2 == null) {
                        Log.w("SVGAndroidRenderer", String.format("View element with id \"%s\" is missing a viewBox attribute.", fVar.f24496e));
                        return;
                    }
                    eVar = f1Var.f24651o;
                } else {
                    Log.w("SVGAndroidRenderer", String.format("View element with id \"%s\" not found.", fVar.f24496e));
                    return;
                }
            } else {
                if (fVar.f()) {
                    bVar = fVar.f24495d;
                } else {
                    bVar = m10.f24667p;
                }
                bVar2 = bVar;
                if (fVar.c()) {
                    eVar = fVar.f24493b;
                } else {
                    eVar = m10.f24651o;
                }
            }
            if (fVar.b()) {
                gVar.a(fVar.f24492a);
            }
            if (fVar.d()) {
                b.q qVar = new b.q();
                this.f24706h = qVar;
                qVar.f24451a = gVar.j(fVar.f24494c);
            }
            N0();
            u(m10);
            S0();
            g.b bVar3 = new g.b(fVar.f24497f);
            g.p pVar = m10.f24601s;
            if (pVar != null) {
                bVar3.f24512c = pVar.d(this, bVar3.f24512c);
            }
            g.p pVar2 = m10.f24602t;
            if (pVar2 != null) {
                bVar3.f24513d = pVar2.d(this, bVar3.f24513d);
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
        return this.f24702d.f24741d.getTextSize();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float R() {
        return this.f24702d.f24741d.getTextSize() / 2.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g.b S() {
        C0323h c0323h = this.f24702d;
        g.b bVar = c0323h.f24744g;
        if (bVar != null) {
            return bVar;
        }
        return c0323h.f24743f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float T() {
        return this.f24700b;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class k extends j {

        /* renamed from: b  reason: collision with root package name */
        float f24752b;

        private k() {
            super(h.this, null);
            this.f24752b = 0.0f;
        }

        @Override // f6.h.j
        public void b(String str) {
            this.f24752b += h.this.f24702d.f24741d.measureText(str);
        }

        /* synthetic */ k(h hVar, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: f6.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0323h {

        /* renamed from: a  reason: collision with root package name */
        g.e0 f24738a;

        /* renamed from: b  reason: collision with root package name */
        boolean f24739b;

        /* renamed from: c  reason: collision with root package name */
        boolean f24740c;

        /* renamed from: d  reason: collision with root package name */
        Paint f24741d;

        /* renamed from: e  reason: collision with root package name */
        Paint f24742e;

        /* renamed from: f  reason: collision with root package name */
        g.b f24743f;

        /* renamed from: g  reason: collision with root package name */
        g.b f24744g;

        /* renamed from: h  reason: collision with root package name */
        boolean f24745h;

        C0323h() {
            Paint paint = new Paint();
            this.f24741d = paint;
            paint.setFlags(193);
            this.f24741d.setHinting(0);
            this.f24741d.setStyle(Paint.Style.FILL);
            Paint paint2 = this.f24741d;
            Typeface typeface = Typeface.DEFAULT;
            paint2.setTypeface(typeface);
            Paint paint3 = new Paint();
            this.f24742e = paint3;
            paint3.setFlags(193);
            this.f24742e.setHinting(0);
            this.f24742e.setStyle(Paint.Style.STROKE);
            this.f24742e.setTypeface(typeface);
            this.f24738a = g.e0.a();
        }

        C0323h(C0323h c0323h) {
            this.f24739b = c0323h.f24739b;
            this.f24740c = c0323h.f24740c;
            this.f24741d = new Paint(c0323h.f24741d);
            this.f24742e = new Paint(c0323h.f24742e);
            g.b bVar = c0323h.f24743f;
            if (bVar != null) {
                this.f24743f = new g.b(bVar);
            }
            g.b bVar2 = c0323h.f24744g;
            if (bVar2 != null) {
                this.f24744g = new g.b(bVar2);
            }
            this.f24745h = c0323h.f24745h;
            try {
                this.f24738a = (g.e0) c0323h.f24738a.clone();
            } catch (CloneNotSupportedException e10) {
                Log.e("SVGAndroidRenderer", "Unexpected clone error", e10);
                this.f24738a = g.e0.a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void y(String str, Object... objArr) {
    }
}
