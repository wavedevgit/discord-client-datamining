package e0;

import a0.a0;
import a0.b0;
import a0.d0;
import a0.e0;
import a0.e1;
import a0.f2;
import a0.g2;
import a0.m2;
import a0.r0;
import a0.r1;
import a0.w;
import a0.x2;
import a0.y2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.SurfaceTexture;
import android.util.Log;
import android.util.Pair;
import android.util.Size;
import android.view.Surface;
import androidx.core.util.Consumer;
import b0.q;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import x.g1;
import x.n0;
import x.w1;
import x.x0;
import x.x1;
import x.y0;
import x.z;
import x.z1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements x.i {
    private n0.f A;
    private final f2 B;
    private final g2 C;
    private final g2 D;
    private final x0 E;
    private final x0 F;

    /* renamed from: d  reason: collision with root package name */
    private final e0 f22490d;

    /* renamed from: e  reason: collision with root package name */
    private final e0 f22491e;

    /* renamed from: i  reason: collision with root package name */
    private final b0 f22492i;

    /* renamed from: o  reason: collision with root package name */
    private final y2 f22493o;

    /* renamed from: p  reason: collision with root package name */
    private final b f22494p;

    /* renamed from: s  reason: collision with root package name */
    private final y.a f22497s;

    /* renamed from: t  reason: collision with root package name */
    private z1 f22498t;

    /* renamed from: v  reason: collision with root package name */
    private final w f22500v;

    /* renamed from: z  reason: collision with root package name */
    private x1 f22504z;

    /* renamed from: q  reason: collision with root package name */
    private final List f22495q = new ArrayList();

    /* renamed from: r  reason: collision with root package name */
    private final List f22496r = new ArrayList();

    /* renamed from: u  reason: collision with root package name */
    private List f22499u = Collections.EMPTY_LIST;

    /* renamed from: w  reason: collision with root package name */
    private final Object f22501w = new Object();

    /* renamed from: x  reason: collision with root package name */
    private boolean f22502x = true;

    /* renamed from: y  reason: collision with root package name */
    private r0 f22503y = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends Exception {
        public a(Throwable th2) {
            super(th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        public static b a(String str, e1 e1Var) {
            return new e0.a(str, e1Var);
        }

        public abstract e1 b();

        public abstract String c();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        x2 f22505a;

        /* renamed from: b  reason: collision with root package name */
        x2 f22506b;

        c(x2 x2Var, x2 x2Var2) {
            this.f22505a = x2Var;
            this.f22506b = x2Var2;
        }
    }

    public f(e0 e0Var, e0 e0Var2, g2 g2Var, g2 g2Var2, x0 x0Var, x0 x0Var2, y.a aVar, b0 b0Var, y2 y2Var) {
        this.f22490d = e0Var;
        this.f22491e = e0Var2;
        this.E = x0Var;
        this.F = x0Var2;
        this.f22497s = aVar;
        this.f22492i = b0Var;
        this.f22493o = y2Var;
        w l10 = g2Var.l();
        this.f22500v = l10;
        l10.C(null);
        this.B = new f2(e0Var.f(), null);
        this.C = g2Var;
        this.D = g2Var2;
        this.f22494p = B(g2Var, g2Var2);
    }

    public static b B(g2 g2Var, g2 g2Var2) {
        String b10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(g2Var.b());
        if (g2Var2 == null) {
            b10 = "";
        } else {
            b10 = g2Var2.b();
        }
        sb2.append(b10);
        return b.a(sb2.toString(), g2Var.l().N());
    }

    private static x2 C(y2 y2Var, n0.f fVar) {
        x2 k10 = new g1.a().c().k(false, y2Var);
        if (k10 == null) {
            return null;
        }
        r1 a02 = r1.a0(k10);
        a02.b0(m.G);
        return fVar.z(a02).b();
    }

    private int E() {
        synchronized (this.f22501w) {
            try {
                if (this.f22497s.c() == 2) {
                    return 1;
                }
                return 0;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static Map F(Collection collection, y2 y2Var, y2 y2Var2) {
        x2 k10;
        HashMap hashMap = new HashMap();
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            if (n0.f.o0(x1Var)) {
                k10 = C(y2Var, (n0.f) x1Var);
            } else {
                k10 = x1Var.k(false, y2Var);
            }
            hashMap.put(x1Var, new c(k10, x1Var.k(true, y2Var2)));
        }
        return hashMap;
    }

    private int H(boolean z10) {
        int i10;
        synchronized (this.f22501w) {
            try {
                Iterator it = this.f22499u.iterator();
                if (!it.hasNext()) {
                    if (z10) {
                        i10 = 3;
                    } else {
                        i10 = 0;
                    }
                } else {
                    android.support.v4.media.session.b.a(it.next());
                    throw null;
                }
            } finally {
            }
        }
        return i10;
    }

    private Set I(Collection collection, boolean z10) {
        HashSet hashSet = new HashSet();
        int H = H(z10);
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            b2.e.b(!n0.f.o0(x1Var), "Only support one level of sharing for now.");
            if (x1Var.B(H)) {
                hashSet.add(x1Var);
            }
        }
        return hashSet;
    }

    private boolean K() {
        synchronized (this.f22501w) {
            this.f22500v.C(null);
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:8:0x002e  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static boolean L(a0.m2 r4, a0.i2 r5) {
        /*
            a0.r0 r4 = r4.d()
            a0.r0 r0 = r5.f()
            java.util.Set r1 = r4.b()
            int r1 = r1.size()
            a0.r0 r5 = r5.f()
            java.util.Set r5 = r5.b()
            int r5 = r5.size()
            r2 = 1
            if (r1 == r5) goto L20
            return r2
        L20:
            java.util.Set r5 = r4.b()
            java.util.Iterator r5 = r5.iterator()
        L28:
            boolean r1 = r5.hasNext()
            if (r1 == 0) goto L49
            java.lang.Object r1 = r5.next()
            a0.r0$a r1 = (a0.r0.a) r1
            boolean r3 = r0.h(r1)
            if (r3 == 0) goto L48
            java.lang.Object r3 = r0.a(r1)
            java.lang.Object r1 = r4.a(r1)
            boolean r1 = java.util.Objects.equals(r3, r1)
            if (r1 != 0) goto L28
        L48:
            return r2
        L49:
            r4 = 0
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: e0.f.L(a0.m2, a0.i2):boolean");
    }

    private static boolean M(Collection collection) {
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            if (T(((x1) it.next()).j().B())) {
                return true;
            }
        }
        return false;
    }

    private static boolean N(Collection collection) {
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            if (S(x1Var)) {
                x2 j10 = x1Var.j();
                r0.a aVar = a0.g1.N;
                if (j10.h(aVar) && ((Integer) b2.e.g((Integer) j10.a(aVar))).intValue() == 1) {
                    return true;
                }
            }
        }
        return false;
    }

    private static boolean O(Collection collection) {
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            if (W((x1) it.next())) {
                return true;
            }
        }
        return false;
    }

    private boolean P() {
        boolean z10;
        synchronized (this.f22501w) {
            z10 = true;
            if (this.f22500v.r() != 1) {
                z10 = false;
            }
        }
        return z10;
    }

    private static boolean Q(Collection collection) {
        Iterator it = collection.iterator();
        boolean z10 = false;
        boolean z11 = false;
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            if (!U(x1Var) && !n0.f.o0(x1Var)) {
                if (S(x1Var)) {
                    z11 = true;
                }
            } else {
                z10 = true;
            }
        }
        if (!z10 || z11) {
            return false;
        }
        return true;
    }

    private static boolean R(Collection collection) {
        Iterator it = collection.iterator();
        boolean z10 = false;
        boolean z11 = false;
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            if (!U(x1Var) && !n0.f.o0(x1Var)) {
                if (S(x1Var)) {
                    z10 = true;
                }
            } else {
                z11 = true;
            }
        }
        if (!z10 || z11) {
            return false;
        }
        return true;
    }

    private static boolean S(x1 x1Var) {
        return x1Var instanceof n0;
    }

    private static boolean T(z zVar) {
        boolean z10;
        boolean z11;
        if (zVar.a() == 10) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (zVar.b() != 1 && zVar.b() != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (!z10 && !z11) {
            return false;
        }
        return true;
    }

    private static boolean U(x1 x1Var) {
        return x1Var instanceof g1;
    }

    static boolean V(Collection collection) {
        int[] iArr = {1, 2, 4};
        HashSet hashSet = new HashSet();
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            x1 x1Var = (x1) it.next();
            for (int i10 = 0; i10 < 3; i10++) {
                int i11 = iArr[i10];
                if (x1Var.B(i11)) {
                    if (hashSet.contains(Integer.valueOf(i11))) {
                        return false;
                    }
                    hashSet.add(Integer.valueOf(i11));
                }
            }
        }
        return true;
    }

    private static boolean W(x1 x1Var) {
        if (x1Var != null) {
            if (x1Var.j().h(x2.B)) {
                if (x1Var.j().L() != y2.b.VIDEO_CAPTURE) {
                    return false;
                }
                return true;
            }
            Log.e("CameraUseCaseAdapter", x1Var + " UseCase does not have capture type.");
        }
        return false;
    }

    private void Y() {
        synchronized (this.f22501w) {
            try {
                if (this.f22503y != null) {
                    this.f22490d.f().k(this.f22503y);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static List a0(List list, Collection collection) {
        ArrayList arrayList = new ArrayList(list);
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            ((x1) it.next()).R(null);
            Iterator it2 = list.iterator();
            if (it2.hasNext()) {
                android.support.v4.media.session.b.a(it2.next());
                throw null;
            }
        }
        return arrayList;
    }

    static void c0(List list, Collection collection, Collection collection2) {
        List a02 = a0(list, collection);
        ArrayList arrayList = new ArrayList(collection2);
        arrayList.removeAll(collection);
        List a03 = a0(a02, arrayList);
        if (a03.size() > 0) {
            y0.l("CameraUseCaseAdapter", "Unused effects: " + a03);
        }
    }

    public static /* synthetic */ void d(w1 w1Var) {
        final SurfaceTexture surfaceTexture = new SurfaceTexture(0);
        surfaceTexture.setDefaultBufferSize(w1Var.o().getWidth(), w1Var.o().getHeight());
        surfaceTexture.detachFromGLContext();
        final Surface surface = new Surface(surfaceTexture);
        w1Var.s(surface, c0.a.a(), new Consumer() { // from class: e0.d
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                f.e(surface, surfaceTexture, (w1.g) obj);
            }
        });
    }

    public static /* synthetic */ void e(Surface surface, SurfaceTexture surfaceTexture, w1.g gVar) {
        surface.release();
        surfaceTexture.release();
    }

    private void e0(Map map, Collection collection) {
        Map map2;
        boolean z10;
        synchronized (this.f22501w) {
            try {
                if (this.f22498t != null && !collection.isEmpty()) {
                    if (this.f22490d.m().c() == 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    map2 = map;
                    Map a10 = o.a(this.f22490d.f().d(), z10, this.f22498t.a(), this.f22490d.m().j(this.f22498t.c()), this.f22498t.d(), this.f22498t.b(), map2);
                    Iterator it = collection.iterator();
                    while (it.hasNext()) {
                        x1 x1Var = (x1) it.next();
                        x1Var.T((Rect) b2.e.g((Rect) a10.get(x1Var)));
                    }
                } else {
                    map2 = map;
                }
                Iterator it2 = collection.iterator();
                while (it2.hasNext()) {
                    x1 x1Var2 = (x1) it2.next();
                    x1Var2.S(u(this.f22490d.f().d(), ((m2) b2.e.g((m2) map2.get(x1Var2))).e()));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void n() {
        synchronized (this.f22501w) {
            a0 f10 = this.f22490d.f();
            this.f22503y = f10.g();
            f10.j();
        }
    }

    static Collection s(Collection collection, x1 x1Var, n0.f fVar) {
        ArrayList arrayList = new ArrayList(collection);
        if (x1Var != null) {
            arrayList.add(x1Var);
        }
        if (fVar != null) {
            arrayList.add(fVar);
            arrayList.removeAll(fVar.i0());
        }
        return arrayList;
    }

    private x1 t(Collection collection, n0.f fVar) {
        x1 x1Var;
        synchronized (this.f22501w) {
            try {
                ArrayList arrayList = new ArrayList(collection);
                if (fVar != null) {
                    arrayList.add(fVar);
                    arrayList.removeAll(fVar.i0());
                }
                if (P()) {
                    if (R(arrayList)) {
                        if (U(this.f22504z)) {
                            x1Var = this.f22504z;
                        } else {
                            x1Var = y();
                        }
                    } else if (Q(arrayList)) {
                        if (S(this.f22504z)) {
                            x1Var = this.f22504z;
                        } else {
                            x1Var = x();
                        }
                    }
                }
                x1Var = null;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return x1Var;
    }

    private static Matrix u(Rect rect, Size size) {
        boolean z10;
        if (rect.width() > 0 && rect.height() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.b(z10, "Cannot compute viewport crop rects zero sized sensor rect.");
        RectF rectF = new RectF(rect);
        Matrix matrix = new Matrix();
        matrix.setRectToRect(new RectF(0.0f, 0.0f, size.getWidth(), size.getHeight()), rectF, Matrix.ScaleToFit.CENTER);
        matrix.invert(matrix);
        return matrix;
    }

    private Map v(int i10, d0 d0Var, Collection collection, Collection collection2, Map map) {
        Size size;
        Rect rect;
        ArrayList arrayList = new ArrayList();
        String b10 = d0Var.b();
        HashMap hashMap = new HashMap();
        HashMap hashMap2 = new HashMap();
        Iterator it = collection2.iterator();
        while (true) {
            size = null;
            if (!it.hasNext()) {
                break;
            }
            x1 x1Var = (x1) it.next();
            a0.a a10 = a0.a.a(this.f22492i.b(i10, b10, x1Var.m(), x1Var.f()), x1Var.m(), x1Var.f(), ((m2) b2.e.g(x1Var.e())).b(), n0.f.g0(x1Var), x1Var.e().d(), x1Var.j().u(null));
            arrayList.add(a10);
            hashMap2.put(a10, x1Var);
            hashMap.put(x1Var, x1Var.e());
        }
        if (!collection.isEmpty()) {
            HashMap hashMap3 = new HashMap();
            HashMap hashMap4 = new HashMap();
            try {
                rect = this.f22490d.f().d();
            } catch (NullPointerException unused) {
                rect = null;
            }
            if (rect != null) {
                size = q.m(rect);
            }
            k kVar = new k(d0Var, size);
            Iterator it2 = collection.iterator();
            boolean z10 = false;
            while (it2.hasNext()) {
                x1 x1Var2 = (x1) it2.next();
                c cVar = (c) map.get(x1Var2);
                x2 D = x1Var2.D(d0Var, cVar.f22505a, cVar.f22506b);
                hashMap3.put(D, x1Var2);
                hashMap4.put(D, kVar.m(D));
                if (x1Var2.j() instanceof a0.x1) {
                    if (((a0.x1) x1Var2.j()).y() == 2) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                }
            }
            Pair a11 = this.f22492i.a(i10, b10, arrayList, hashMap4, z10, O(collection));
            for (Map.Entry entry : hashMap3.entrySet()) {
                hashMap.put((x1) entry.getValue(), (m2) ((Map) a11.first).get(entry.getKey()));
            }
            for (Map.Entry entry2 : ((Map) a11.second).entrySet()) {
                if (hashMap2.containsKey(entry2.getKey())) {
                    hashMap.put((x1) hashMap2.get(entry2.getKey()), (m2) entry2.getValue());
                }
            }
        }
        return hashMap;
    }

    private void w(Collection collection) {
        if (K()) {
            if (!M(collection)) {
                if (N(collection)) {
                    throw new IllegalArgumentException("Extensions are not supported for use with Ultra HDR image capture.");
                }
            } else {
                throw new IllegalArgumentException("Extensions are only supported for use with standard dynamic range.");
            }
        }
        synchronized (this.f22501w) {
            try {
                if (!this.f22499u.isEmpty() && N(collection)) {
                    throw new IllegalArgumentException("Ultra HDR image capture does not support for use with CameraEffect.");
                }
            } finally {
            }
        }
    }

    private n0 x() {
        return new n0.b().n("ImageCapture-Extra").c();
    }

    private g1 y() {
        g1 c10 = new g1.a().l("Preview-Extra").c();
        c10.h0(new g1.c() { // from class: e0.e
            @Override // x.g1.c
            public final void a(w1 w1Var) {
                f.d(w1Var);
            }
        });
        return c10;
    }

    private n0.f z(Collection collection, boolean z10) {
        synchronized (this.f22501w) {
            try {
                Set I = I(collection, z10);
                if (I.size() >= 2 || (K() && O(I))) {
                    n0.f fVar = this.A;
                    if (fVar != null && fVar.i0().equals(I)) {
                        n0.f fVar2 = this.A;
                        Objects.requireNonNull(fVar2);
                        return fVar2;
                    } else if (!V(I)) {
                        return null;
                    } else {
                        return new n0.f(this.f22490d, this.f22491e, this.E, this.F, I, this.f22493o);
                    }
                }
                return null;
            } finally {
            }
        }
    }

    public void A() {
        synchronized (this.f22501w) {
            try {
                if (this.f22502x) {
                    this.f22490d.l(new ArrayList(this.f22496r));
                    e0 e0Var = this.f22491e;
                    if (e0Var != null) {
                        e0Var.l(new ArrayList(this.f22496r));
                    }
                    n();
                    this.f22502x = false;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public b D() {
        return this.f22494p;
    }

    public x.o G() {
        return this.D;
    }

    public List J() {
        ArrayList arrayList;
        synchronized (this.f22501w) {
            arrayList = new ArrayList(this.f22495q);
        }
        return arrayList;
    }

    public void X(Collection collection) {
        boolean z10;
        synchronized (this.f22501w) {
            LinkedHashSet linkedHashSet = new LinkedHashSet(this.f22495q);
            linkedHashSet.removeAll(collection);
            e0 e0Var = this.f22491e;
            boolean z11 = false;
            if (e0Var != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (e0Var != null) {
                z11 = true;
            }
            d0(linkedHashSet, z10, z11);
        }
    }

    public void Z(List list) {
        synchronized (this.f22501w) {
            this.f22499u = list;
        }
    }

    @Override // x.i
    public x.j a() {
        return this.B;
    }

    @Override // x.i
    public x.o b() {
        return this.C;
    }

    public void b0(z1 z1Var) {
        synchronized (this.f22501w) {
            this.f22498t = z1Var;
        }
    }

    void d0(Collection collection, boolean z10, boolean z11) {
        m2 m2Var;
        r0 d10;
        synchronized (this.f22501w) {
            try {
                w(collection);
                if (!z10 && K() && O(collection)) {
                    d0(collection, true, z11);
                    return;
                }
                n0.f z12 = z(collection, z10);
                x1 t10 = t(collection, z12);
                Collection s10 = s(collection, t10, z12);
                ArrayList<x1> arrayList = new ArrayList(s10);
                arrayList.removeAll(this.f22496r);
                ArrayList<x1> arrayList2 = new ArrayList(s10);
                arrayList2.retainAll(this.f22496r);
                ArrayList<x1> arrayList3 = new ArrayList(this.f22496r);
                arrayList3.removeAll(s10);
                Map F = F(arrayList, this.f22500v.k(), this.f22493o);
                Map map = Collections.EMPTY_MAP;
                try {
                    Map v10 = v(E(), this.f22490d.m(), arrayList, arrayList2, F);
                    if (this.f22491e != null) {
                        int E = E();
                        e0 e0Var = this.f22491e;
                        Objects.requireNonNull(e0Var);
                        map = v(E, e0Var.m(), arrayList, arrayList2, F);
                    }
                    e0(v10, s10);
                    c0(this.f22499u, s10, collection);
                    for (x1 x1Var : arrayList3) {
                        x1Var.U(this.f22490d);
                    }
                    this.f22490d.l(arrayList3);
                    if (this.f22491e != null) {
                        for (x1 x1Var2 : arrayList3) {
                            e0 e0Var2 = this.f22491e;
                            Objects.requireNonNull(e0Var2);
                            x1Var2.U(e0Var2);
                        }
                        e0 e0Var3 = this.f22491e;
                        Objects.requireNonNull(e0Var3);
                        e0Var3.l(arrayList3);
                    }
                    if (arrayList3.isEmpty()) {
                        for (x1 x1Var3 : arrayList2) {
                            if (v10.containsKey(x1Var3) && (d10 = (m2Var = (m2) v10.get(x1Var3)).d()) != null && L(m2Var, x1Var3.w())) {
                                x1Var3.X(d10);
                                if (this.f22502x) {
                                    this.f22490d.d(x1Var3);
                                    e0 e0Var4 = this.f22491e;
                                    if (e0Var4 != null) {
                                        Objects.requireNonNull(e0Var4);
                                        e0Var4.d(x1Var3);
                                    }
                                }
                            }
                        }
                    }
                    for (x1 x1Var4 : arrayList) {
                        c cVar = (c) F.get(x1Var4);
                        Objects.requireNonNull(cVar);
                        e0 e0Var5 = this.f22491e;
                        if (e0Var5 != null) {
                            e0 e0Var6 = this.f22490d;
                            Objects.requireNonNull(e0Var5);
                            x1Var4.b(e0Var6, e0Var5, cVar.f22505a, cVar.f22506b);
                            x1Var4.W((m2) b2.e.g((m2) v10.get(x1Var4)), (m2) map.get(x1Var4));
                        } else {
                            x1Var4.b(this.f22490d, null, cVar.f22505a, cVar.f22506b);
                            x1Var4.W((m2) b2.e.g((m2) v10.get(x1Var4)), null);
                        }
                    }
                    if (this.f22502x) {
                        this.f22490d.k(arrayList);
                        e0 e0Var7 = this.f22491e;
                        if (e0Var7 != null) {
                            Objects.requireNonNull(e0Var7);
                            e0Var7.k(arrayList);
                        }
                    }
                    for (x1 x1Var5 : arrayList) {
                        x1Var5.H();
                    }
                    this.f22495q.clear();
                    this.f22495q.addAll(collection);
                    this.f22496r.clear();
                    this.f22496r.addAll(s10);
                    this.f22504z = t10;
                    this.A = z12;
                } catch (IllegalArgumentException e10) {
                    if (!z10 && !K() && this.f22497s.c() != 2) {
                        d0(collection, true, z11);
                        return;
                    }
                    throw e10;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void g(Collection collection) {
        boolean z10;
        synchronized (this.f22501w) {
            try {
                this.f22490d.p(this.f22500v);
                e0 e0Var = this.f22491e;
                if (e0Var != null) {
                    e0Var.p(this.f22500v);
                }
                LinkedHashSet linkedHashSet = new LinkedHashSet(this.f22495q);
                linkedHashSet.addAll(collection);
                try {
                    e0 e0Var2 = this.f22491e;
                    boolean z11 = false;
                    if (e0Var2 != null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (e0Var2 != null) {
                        z11 = true;
                    }
                    d0(linkedHashSet, z10, z11);
                } catch (IllegalArgumentException e10) {
                    throw new a(e10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void h() {
        synchronized (this.f22501w) {
            try {
                if (!this.f22502x) {
                    if (!this.f22496r.isEmpty()) {
                        this.f22490d.p(this.f22500v);
                        e0 e0Var = this.f22491e;
                        if (e0Var != null) {
                            e0Var.p(this.f22500v);
                        }
                    }
                    this.f22490d.k(this.f22496r);
                    e0 e0Var2 = this.f22491e;
                    if (e0Var2 != null) {
                        e0Var2.k(this.f22496r);
                    }
                    Y();
                    for (x1 x1Var : this.f22496r) {
                        x1Var.H();
                    }
                    this.f22502x = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void j(boolean z10) {
        this.f22490d.j(z10);
    }
}
