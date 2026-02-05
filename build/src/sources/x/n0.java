package x;

import a0.i2;
import a0.j1;
import a0.k2;
import a0.m2;
import a0.r0;
import a0.x2;
import a0.y2;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.graphics.Bitmap;
import android.graphics.Rect;
import android.location.Location;
import android.net.Uri;
import android.os.Looper;
import android.util.Log;
import android.util.Pair;
import android.util.Rational;
import android.util.Size;
import androidx.arch.core.util.Function;
import androidx.camera.core.internal.compat.quirk.SoftwareJpegEncodingPreferredQuirk;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.common.util.concurrent.ListenableFuture;
import java.io.File;
import java.io.OutputStream;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicReference;
import m0.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n0 extends x1 {
    public static final c B = new c();
    static final h0.b C = new h0.b();
    private final z.x A;

    /* renamed from: p  reason: collision with root package name */
    private final j1.a f53406p;

    /* renamed from: q  reason: collision with root package name */
    private final int f53407q;

    /* renamed from: r  reason: collision with root package name */
    private final AtomicReference f53408r;

    /* renamed from: s  reason: collision with root package name */
    private final int f53409s;

    /* renamed from: t  reason: collision with root package name */
    private int f53410t;

    /* renamed from: u  reason: collision with root package name */
    private Rational f53411u;

    /* renamed from: v  reason: collision with root package name */
    private e0.j f53412v;

    /* renamed from: w  reason: collision with root package name */
    i2.b f53413w;

    /* renamed from: x  reason: collision with root package name */
    private z.y f53414x;

    /* renamed from: y  reason: collision with root package name */
    private z.y0 f53415y;

    /* renamed from: z  reason: collision with root package name */
    private i2.c f53416z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements z.x {
        a() {
        }

        @Override // z.x
        public ListenableFuture a(List list) {
            return n0.this.w0(list);
        }

        @Override // z.x
        public void b() {
            n0.this.r0();
        }

        @Override // z.x
        public void c() {
            n0.this.A0();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements x2.a {

        /* renamed from: a  reason: collision with root package name */
        private final a0.r1 f53418a;

        public b() {
            this(a0.r1.Z());
        }

        public static b d(a0.r0 r0Var) {
            return new b(a0.r1.a0(r0Var));
        }

        @Override // x.a0
        public a0.q1 a() {
            return this.f53418a;
        }

        public n0 c() {
            Integer num = (Integer) a().e(a0.g1.M, null);
            if (num != null) {
                a().V(a0.h1.f76h, num);
            } else if (n0.p0(a())) {
                a().V(a0.h1.f76h, 4101);
                a().V(a0.h1.f77i, z.f53582c);
            } else {
                a().V(a0.h1.f76h, Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER));
            }
            a0.g1 b10 = b();
            a0.i1.T(b10);
            n0 n0Var = new n0(b10);
            Size size = (Size) a().e(a0.i1.f88n, null);
            if (size != null) {
                n0Var.t0(new Rational(size.getWidth(), size.getHeight()));
            }
            b2.e.h((Executor) a().e(e0.h.E, c0.a.c()), "The IO executor can't be null");
            a0.q1 a10 = a();
            r0.a aVar = a0.g1.K;
            if (a10.h(aVar)) {
                Integer num2 = (Integer) a().a(aVar);
                if (num2 != null && (num2.intValue() == 0 || num2.intValue() == 1 || num2.intValue() == 3 || num2.intValue() == 2)) {
                    if (num2.intValue() == 3 && a().e(a0.g1.T, null) == null) {
                        throw new IllegalArgumentException("The flash mode is not allowed to set to FLASH_MODE_SCREEN without setting ScreenFlash");
                    }
                } else {
                    throw new IllegalArgumentException("The flash mode is not allowed to set: " + num2);
                }
            }
            return n0Var;
        }

        @Override // a0.x2.a
        /* renamed from: e */
        public a0.g1 b() {
            return new a0.g1(a0.w1.Y(this.f53418a));
        }

        public b f(int i10) {
            a().V(a0.g1.J, Integer.valueOf(i10));
            return this;
        }

        public b g(y2.b bVar) {
            a().V(x2.B, bVar);
            return this;
        }

        public b h(z zVar) {
            a().V(a0.h1.f77i, zVar);
            return this;
        }

        public b i(int i10) {
            a().V(a0.g1.N, Integer.valueOf(i10));
            return this;
        }

        public b j(m0.c cVar) {
            a().V(a0.i1.f92r, cVar);
            return this;
        }

        public b k(int i10) {
            a().V(x2.f321x, Integer.valueOf(i10));
            return this;
        }

        public b l(int i10) {
            if (i10 == -1) {
                i10 = 0;
            }
            a().V(a0.i1.f84j, Integer.valueOf(i10));
            return this;
        }

        public b m(Class cls) {
            a().V(e0.m.G, cls);
            if (a().e(e0.m.F, null) == null) {
                n(cls.getCanonicalName() + "-" + UUID.randomUUID());
            }
            return this;
        }

        public b n(String str) {
            a().V(e0.m.F, str);
            return this;
        }

        public b o(int i10) {
            a().V(a0.i1.f85k, Integer.valueOf(i10));
            return this;
        }

        private b(a0.r1 r1Var) {
            this.f53418a = r1Var;
            Class cls = (Class) r1Var.e(e0.m.G, null);
            if (cls != null && !cls.equals(n0.class)) {
                throw new IllegalArgumentException("Invalid target class configuration for " + this + ": " + cls);
            }
            g(y2.b.IMAGE_CAPTURE);
            m(n0.class);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private static final m0.c f53419a;

        /* renamed from: b  reason: collision with root package name */
        private static final a0.g1 f53420b;

        /* renamed from: c  reason: collision with root package name */
        private static final z f53421c;

        static {
            m0.c a10 = new c.a().d(m0.a.f37226c).f(m0.d.f37238c).a();
            f53419a = a10;
            z zVar = z.f53583d;
            f53421c = zVar;
            f53420b = new b().k(4).l(0).j(a10).i(0).h(zVar).b();
        }

        public a0.g1 a() {
            return f53420b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private boolean f53422a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f53423b = false;

        /* renamed from: c  reason: collision with root package name */
        private boolean f53424c;

        /* renamed from: d  reason: collision with root package name */
        private Location f53425d;

        public Location a() {
            return this.f53425d;
        }

        public boolean b() {
            return this.f53422a;
        }

        public boolean c() {
            return this.f53424c;
        }

        public String toString() {
            return "Metadata{mIsReversedHorizontal=" + this.f53422a + ", mIsReversedVertical=" + this.f53424c + ", mLocation=" + this.f53425d + "}";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class e {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        private final File f53426a;

        /* renamed from: b  reason: collision with root package name */
        private final ContentResolver f53427b;

        /* renamed from: c  reason: collision with root package name */
        private final Uri f53428c;

        /* renamed from: d  reason: collision with root package name */
        private final ContentValues f53429d;

        /* renamed from: e  reason: collision with root package name */
        private final OutputStream f53430e;

        /* renamed from: f  reason: collision with root package name */
        private final d f53431f;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private File f53432a;

            /* renamed from: b  reason: collision with root package name */
            private ContentResolver f53433b;

            /* renamed from: c  reason: collision with root package name */
            private Uri f53434c;

            /* renamed from: d  reason: collision with root package name */
            private ContentValues f53435d;

            /* renamed from: e  reason: collision with root package name */
            private OutputStream f53436e;

            /* renamed from: f  reason: collision with root package name */
            private d f53437f;

            public a(File file) {
                this.f53432a = file;
            }

            public g a() {
                return new g(this.f53432a, this.f53433b, this.f53434c, this.f53435d, this.f53436e, this.f53437f);
            }
        }

        g(File file, ContentResolver contentResolver, Uri uri, ContentValues contentValues, OutputStream outputStream, d dVar) {
            this.f53426a = file;
            this.f53427b = contentResolver;
            this.f53428c = uri;
            this.f53429d = contentValues;
            this.f53430e = outputStream;
            this.f53431f = dVar == null ? new d() : dVar;
        }

        public ContentResolver a() {
            return this.f53427b;
        }

        public ContentValues b() {
            return this.f53429d;
        }

        public File c() {
            return this.f53426a;
        }

        public d d() {
            return this.f53431f;
        }

        public OutputStream e() {
            return this.f53430e;
        }

        public Uri f() {
            return this.f53428c;
        }

        public String toString() {
            return "OutputFileOptions{mFile=" + this.f53426a + ", mContentResolver=" + this.f53427b + ", mSaveCollection=" + this.f53428c + ", mContentValues=" + this.f53429d + ", mOutputStream=" + this.f53430e + ", mMetadata=" + this.f53431f + "}";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h {

        /* renamed from: a  reason: collision with root package name */
        private final Uri f53438a;

        public h(Uri uri) {
            this.f53438a = uri;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface i {
        void a(long j10, j jVar);

        void clear();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface j {
        void a();
    }

    n0(a0.g1 g1Var) {
        super(g1Var);
        this.f53406p = new j1.a() { // from class: x.k0
            @Override // a0.j1.a
            public final void a(a0.j1 j1Var) {
                n0.Z(j1Var);
            }
        };
        this.f53408r = new AtomicReference(null);
        this.f53410t = -1;
        this.f53411u = null;
        this.A = new a();
        a0.g1 g1Var2 = (a0.g1) j();
        if (g1Var2.h(a0.g1.J)) {
            this.f53407q = g1Var2.X();
        } else {
            this.f53407q = 1;
        }
        this.f53409s = g1Var2.Z(0);
        this.f53412v = e0.j.g(g1Var2.d0());
    }

    public static /* synthetic */ Void Y(List list) {
        return null;
    }

    public static /* synthetic */ void Z(a0.j1 j1Var) {
        try {
            androidx.camera.core.n b10 = j1Var.b();
            Log.d("ImageCapture", "Discarding ImageProxy which was inadvertently acquired: " + b10);
            if (b10 != null) {
                b10.close();
            }
        } catch (IllegalStateException e10) {
            Log.e("ImageCapture", "Failed to acquire latest image.", e10);
        }
    }

    public static /* synthetic */ void a0(n0 n0Var, i2 i2Var, i2.g gVar) {
        List a10;
        if (n0Var.g() == null) {
            return;
        }
        n0Var.f53415y.i();
        n0Var.f0(true);
        i2.b g02 = n0Var.g0(n0Var.i(), (a0.g1) n0Var.j(), (m2) b2.e.g(n0Var.e()));
        n0Var.f53413w = g02;
        a10 = d0.a(new Object[]{g02.o()});
        n0Var.V(a10);
        n0Var.G();
        n0Var.f53415y.j();
    }

    private void c0() {
        this.f53412v.f();
        z.y0 y0Var = this.f53415y;
        if (y0Var != null) {
            y0Var.e();
        }
    }

    private void e0() {
        f0(false);
    }

    private void f0(boolean z10) {
        z.y0 y0Var;
        Log.d("ImageCapture", "clearPipeline");
        b0.p.a();
        i2.c cVar = this.f53416z;
        if (cVar != null) {
            cVar.b();
            this.f53416z = null;
        }
        z.y yVar = this.f53414x;
        if (yVar != null) {
            yVar.a();
            this.f53414x = null;
        }
        if (!z10 && (y0Var = this.f53415y) != null) {
            y0Var.e();
            this.f53415y = null;
        }
    }

    private i2.b g0(String str, a0.g1 g1Var, m2 m2Var) {
        b0.p.a();
        Log.d("ImageCapture", String.format("createPipeline(cameraId: %s, streamSpec: %s)", str, m2Var));
        Size e10 = m2Var.e();
        a0.e0 g10 = g();
        Objects.requireNonNull(g10);
        boolean z10 = !g10.p();
        if (this.f53414x != null) {
            b2.e.i(z10);
            this.f53414x.a();
        }
        if (((Boolean) j().e(a0.g1.V, Boolean.FALSE)).booleanValue()) {
            m0();
        }
        l();
        this.f53414x = new z.y(g1Var, e10, null, z10, null, 35);
        if (this.f53415y == null) {
            this.f53415y = new z.y0(this.A);
        }
        this.f53415y.k(this.f53414x);
        i2.b f10 = this.f53414x.f(m2Var.e());
        if (j0() == 2 && !m2Var.f()) {
            h().b(f10);
        }
        if (m2Var.d() != null) {
            f10.g(m2Var.d());
        }
        i2.c cVar = this.f53416z;
        if (cVar != null) {
            cVar.b();
        }
        i2.c cVar2 = new i2.c(new i2.d() { // from class: x.l0
            @Override // a0.i2.d
            public final void a(i2 i2Var, i2.g gVar) {
                n0.a0(n0.this, i2Var, gVar);
            }
        });
        this.f53416z = cVar2;
        f10.r(cVar2);
        return f10;
    }

    private int i0() {
        a0.e0 g10 = g();
        if (g10 != null) {
            return g10.b().c();
        }
        return -1;
    }

    private int l0() {
        a0.g1 g1Var = (a0.g1) j();
        if (g1Var.h(a0.g1.S)) {
            return g1Var.c0();
        }
        int i10 = this.f53407q;
        if (i10 != 0) {
            if (i10 != 1 && i10 != 2) {
                throw new IllegalStateException("CaptureMode " + this.f53407q + " is invalid");
            }
            return 95;
        }
        return 100;
    }

    private k2 m0() {
        g().g().C(null);
        return null;
    }

    private Rect n0() {
        Rect A = A();
        Size f10 = f();
        Objects.requireNonNull(f10);
        if (A != null) {
            return A;
        }
        if (i0.b.h(this.f53411u)) {
            a0.e0 g10 = g();
            Objects.requireNonNull(g10);
            int q10 = q(g10);
            Rational rational = new Rational(this.f53411u.getDenominator(), this.f53411u.getNumerator());
            if (!b0.q.i(q10)) {
                rational = this.f53411u;
            }
            Rect a10 = i0.b.a(f10, rational);
            Objects.requireNonNull(a10);
            return a10;
        }
        return new Rect(0, 0, f10.getWidth(), f10.getHeight());
    }

    private static boolean o0(List list, int i10) {
        if (list == null) {
            return false;
        }
        Iterator it = list.iterator();
        while (it.hasNext()) {
            if (((Integer) ((Pair) it.next()).first).equals(Integer.valueOf(i10))) {
                return true;
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean p0(a0.q1 q1Var) {
        return Objects.equals(q1Var.e(a0.g1.N, null), 1);
    }

    private boolean q0() {
        if (g() == null) {
            return false;
        }
        g().g().C(null);
        return false;
    }

    private void s0(Executor executor, e eVar, f fVar) {
        o0 o0Var = new o0(4, "Not bound to a valid Camera [" + this + "]", null);
        if (fVar != null) {
            fVar.e(o0Var);
            return;
        }
        throw new IllegalArgumentException("Must have either in-memory or on-disk callback.");
    }

    private void u0() {
        v0(this.f53412v);
    }

    private void v0(i iVar) {
        h().e(iVar);
    }

    private void y0(Executor executor, e eVar, f fVar, g gVar) {
        b0.p.a();
        if (k0() == 3 && this.f53412v.h() == null) {
            throw new IllegalArgumentException("ScreenFlash not set for FLASH_MODE_SCREEN");
        }
        Log.d("ImageCapture", "takePictureInternal");
        a0.e0 g10 = g();
        if (g10 == null) {
            s0(executor, eVar, fVar);
            return;
        }
        z.y0 y0Var = this.f53415y;
        Objects.requireNonNull(y0Var);
        y0Var.h(z.e1.q(executor, eVar, fVar, gVar, n0(), v(), q(g10), l0(), j0(), this.f53413w.q()));
    }

    private void z0() {
        synchronized (this.f53408r) {
            try {
                if (this.f53408r.get() != null) {
                    return;
                }
                h().f(k0());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void A0() {
        synchronized (this.f53408r) {
            try {
                Integer num = (Integer) this.f53408r.getAndSet(null);
                if (num == null) {
                    return;
                }
                if (num.intValue() != k0()) {
                    z0();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // x.x1
    public void I() {
        b2.e.h(g(), "Attached camera cannot be null");
        if (k0() == 3 && i0() != 0) {
            throw new IllegalArgumentException("Not a front camera despite setting FLASH_MODE_SCREEN in ImageCapture");
        }
    }

    @Override // x.x1
    public void J() {
        y0.a("ImageCapture", "onCameraControlReady");
        z0();
        u0();
    }

    @Override // x.x1
    protected x2 K(a0.d0 d0Var, x2.a aVar) {
        boolean z10;
        int i10 = 35;
        Integer valueOf = Integer.valueOf((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER);
        if (d0Var.e().a(SoftwareJpegEncodingPreferredQuirk.class)) {
            Boolean bool = Boolean.FALSE;
            a0.q1 a10 = aVar.a();
            r0.a aVar2 = a0.g1.Q;
            Boolean bool2 = Boolean.TRUE;
            if (bool.equals(a10.e(aVar2, bool2))) {
                y0.l("ImageCapture", "Device quirk suggests software JPEG encoder, but it has been explicitly disabled.");
            } else {
                y0.e("ImageCapture", "Requesting software JPEG due to device quirk.");
                aVar.a().V(aVar2, bool2);
            }
        }
        boolean h02 = h0(aVar.a());
        Integer num = (Integer) aVar.a().e(a0.g1.M, null);
        if (num != null) {
            if (q0() && num.intValue() != 256) {
                z10 = false;
            } else {
                z10 = true;
            }
            b2.e.b(z10, "Cannot set non-JPEG buffer format with Extensions enabled.");
            a0.q1 a11 = aVar.a();
            r0.a aVar3 = a0.h1.f76h;
            if (!h02) {
                i10 = num.intValue();
            }
            a11.V(aVar3, Integer.valueOf(i10));
        } else if (p0(aVar.a())) {
            aVar.a().V(a0.h1.f76h, 4101);
            aVar.a().V(a0.h1.f77i, z.f53582c);
        } else if (h02) {
            aVar.a().V(a0.h1.f76h, 35);
        } else {
            List list = (List) aVar.a().e(a0.i1.f91q, null);
            if (list == null) {
                aVar.a().V(a0.h1.f76h, valueOf);
            } else if (o0(list, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER)) {
                aVar.a().V(a0.h1.f76h, valueOf);
            } else if (o0(list, 35)) {
                aVar.a().V(a0.h1.f76h, 35);
            }
        }
        return aVar.b();
    }

    @Override // x.x1
    public void M() {
        c0();
    }

    @Override // x.x1
    protected m2 N(a0.r0 r0Var) {
        List a10;
        this.f53413w.g(r0Var);
        a10 = d0.a(new Object[]{this.f53413w.o()});
        V(a10);
        return e().g().d(r0Var).a();
    }

    @Override // x.x1
    protected m2 O(m2 m2Var, m2 m2Var2) {
        List a10;
        i2.b g02 = g0(i(), (a0.g1) j(), m2Var);
        this.f53413w = g02;
        a10 = d0.a(new Object[]{g02.o()});
        V(a10);
        E();
        return m2Var;
    }

    @Override // x.x1
    public void P() {
        c0();
        e0();
        v0(null);
    }

    boolean h0(a0.q1 q1Var) {
        boolean z10;
        Boolean bool = Boolean.TRUE;
        r0.a aVar = a0.g1.Q;
        Boolean bool2 = Boolean.FALSE;
        boolean z11 = false;
        if (bool.equals(q1Var.e(aVar, bool2))) {
            if (q0()) {
                y0.l("ImageCapture", "Software JPEG cannot be used with Extensions.");
                z10 = false;
            } else {
                z10 = true;
            }
            Integer num = (Integer) q1Var.e(a0.g1.M, null);
            if (num != null && num.intValue() != 256) {
                y0.l("ImageCapture", "Software JPEG cannot be used with non-JPEG output buffer format.");
            } else {
                z11 = z10;
            }
            if (!z11) {
                y0.l("ImageCapture", "Unable to support software JPEG. Disabling.");
                q1Var.V(aVar, bool2);
            }
        }
        return z11;
    }

    public int j0() {
        return this.f53407q;
    }

    @Override // x.x1
    public x2 k(boolean z10, y2 y2Var) {
        c cVar = B;
        a0.r0 a10 = y2Var.a(cVar.a().L(), j0());
        if (z10) {
            a10 = a0.r0.E(a10, cVar.a());
        }
        if (a10 == null) {
            return null;
        }
        return z(a10).b();
    }

    public int k0() {
        int i10;
        synchronized (this.f53408r) {
            i10 = this.f53410t;
            if (i10 == -1) {
                i10 = ((a0.g1) j()).Y(2);
            }
        }
        return i10;
    }

    void r0() {
        synchronized (this.f53408r) {
            try {
                if (this.f53408r.get() != null) {
                    return;
                }
                this.f53408r.set(Integer.valueOf(k0()));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void t0(Rational rational) {
        this.f53411u = rational;
    }

    public String toString() {
        return "ImageCapture:" + o();
    }

    ListenableFuture w0(List list) {
        b0.p.a();
        return d0.n.x(h().c(list, this.f53407q, this.f53409s), new Function() { // from class: x.m0
            @Override // androidx.arch.core.util.Function
            public final Object apply(Object obj) {
                return n0.Y((List) obj);
            }
        }, c0.a.a());
    }

    @Override // x.x1
    public Set x() {
        HashSet hashSet = new HashSet();
        hashSet.add(4);
        return hashSet;
    }

    public void x0(final g gVar, final Executor executor, final f fVar) {
        if (Looper.getMainLooper() != Looper.myLooper()) {
            c0.a.d().execute(new Runnable() { // from class: x.j0
                @Override // java.lang.Runnable
                public final void run() {
                    n0.this.x0(gVar, executor, fVar);
                }
            });
        } else {
            y0(executor, null, fVar, gVar);
        }
    }

    @Override // x.x1
    public x2.a z(a0.r0 r0Var) {
        return b.d(r0Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface f {
        void d(h hVar);

        void e(o0 o0Var);

        default void c() {
        }

        default void a(int i10) {
        }

        default void b(Bitmap bitmap) {
        }
    }
}
