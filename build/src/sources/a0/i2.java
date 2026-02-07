package a0;

import a0.f;
import a0.i2;
import a0.p0;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.params.InputConfiguration;
import android.util.Range;
import android.util.Size;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i2 {

    /* renamed from: j  reason: collision with root package name */
    private static final List f94j = Arrays.asList(1, 5, 3);

    /* renamed from: a  reason: collision with root package name */
    private final List f95a;

    /* renamed from: b  reason: collision with root package name */
    private final f f96b;

    /* renamed from: c  reason: collision with root package name */
    private final List f97c;

    /* renamed from: d  reason: collision with root package name */
    private final List f98d;

    /* renamed from: e  reason: collision with root package name */
    private final List f99e;

    /* renamed from: f  reason: collision with root package name */
    private final d f100f;

    /* renamed from: g  reason: collision with root package name */
    private final p0 f101g;

    /* renamed from: h  reason: collision with root package name */
    private final int f102h;

    /* renamed from: i  reason: collision with root package name */
    private InputConfiguration f103i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: f  reason: collision with root package name */
        d f109f;

        /* renamed from: g  reason: collision with root package name */
        InputConfiguration f110g;

        /* renamed from: i  reason: collision with root package name */
        f f112i;

        /* renamed from: a  reason: collision with root package name */
        final Set f104a = new LinkedHashSet();

        /* renamed from: b  reason: collision with root package name */
        final p0.a f105b = new p0.a();

        /* renamed from: c  reason: collision with root package name */
        final List f106c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        final List f107d = new ArrayList();

        /* renamed from: e  reason: collision with root package name */
        final List f108e = new ArrayList();

        /* renamed from: h  reason: collision with root package name */
        int f111h = 0;

        a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends a {
        public static b p(x2 x2Var, Size size) {
            e n10 = x2Var.n(null);
            if (n10 != null) {
                b bVar = new b();
                n10.a(size, x2Var, bVar);
                return bVar;
            }
            throw new IllegalStateException("Implementation is missing option unpacker for " + x2Var.q(x2Var.toString()));
        }

        public b a(Collection collection) {
            Iterator it = collection.iterator();
            while (it.hasNext()) {
                k kVar = (k) it.next();
                this.f105b.c(kVar);
                if (!this.f108e.contains(kVar)) {
                    this.f108e.add(kVar);
                }
            }
            return this;
        }

        public b b(Collection collection) {
            Iterator it = collection.iterator();
            while (it.hasNext()) {
                f((CameraDevice.StateCallback) it.next());
            }
            return this;
        }

        public b c(Collection collection) {
            this.f105b.a(collection);
            return this;
        }

        public b d(List list) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                k((CameraCaptureSession.StateCallback) it.next());
            }
            return this;
        }

        public b e(k kVar) {
            this.f105b.c(kVar);
            if (!this.f108e.contains(kVar)) {
                this.f108e.add(kVar);
            }
            return this;
        }

        public b f(CameraDevice.StateCallback stateCallback) {
            if (this.f106c.contains(stateCallback)) {
                return this;
            }
            this.f106c.add(stateCallback);
            return this;
        }

        public b g(r0 r0Var) {
            this.f105b.e(r0Var);
            return this;
        }

        public b h(w0 w0Var) {
            return i(w0Var, x.z.f54450d);
        }

        public b i(w0 w0Var, x.z zVar) {
            this.f104a.add(f.a(w0Var).b(zVar).a());
            return this;
        }

        public b j(k kVar) {
            this.f105b.c(kVar);
            return this;
        }

        public b k(CameraCaptureSession.StateCallback stateCallback) {
            if (this.f107d.contains(stateCallback)) {
                return this;
            }
            this.f107d.add(stateCallback);
            return this;
        }

        public b l(w0 w0Var) {
            return m(w0Var, x.z.f54450d, null, -1);
        }

        public b m(w0 w0Var, x.z zVar, String str, int i10) {
            this.f104a.add(f.a(w0Var).d(str).b(zVar).c(i10).a());
            this.f105b.f(w0Var);
            return this;
        }

        public b n(String str, Object obj) {
            this.f105b.g(str, obj);
            return this;
        }

        public i2 o() {
            return new i2(new ArrayList(this.f104a), new ArrayList(this.f106c), new ArrayList(this.f107d), new ArrayList(this.f108e), this.f105b.h(), this.f109f, this.f110g, this.f111h, this.f112i);
        }

        public List q() {
            return Collections.unmodifiableList(this.f108e);
        }

        public b r(d dVar) {
            this.f109f = dVar;
            return this;
        }

        public b s(Range range) {
            this.f105b.o(range);
            return this;
        }

        public b t(r0 r0Var) {
            this.f105b.q(r0Var);
            return this;
        }

        public b u(InputConfiguration inputConfiguration) {
            this.f110g = inputConfiguration;
            return this;
        }

        public b v(w0 w0Var) {
            this.f112i = f.a(w0Var).a();
            return this;
        }

        public b w(int i10) {
            if (i10 != 0) {
                this.f105b.s(i10);
            }
            return this;
        }

        public b x(int i10) {
            this.f105b.t(i10);
            return this;
        }

        public b y(int i10) {
            if (i10 != 0) {
                this.f105b.v(i10);
            }
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements d {

        /* renamed from: a  reason: collision with root package name */
        private final AtomicBoolean f113a = new AtomicBoolean(false);

        /* renamed from: b  reason: collision with root package name */
        private final d f114b;

        public c(d dVar) {
            this.f114b = dVar;
        }

        @Override // a0.i2.d
        public void a(i2 i2Var, g gVar) {
            if (!this.f113a.get()) {
                this.f114b.a(i2Var, gVar);
            }
        }

        public void b() {
            this.f113a.set(true);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface d {
        void a(i2 i2Var, g gVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface e {
        void a(Size size, x2 x2Var, b bVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class f {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static abstract class a {
            public abstract f a();

            public abstract a b(x.z zVar);

            public abstract a c(int i10);

            public abstract a d(String str);

            public abstract a e(List list);

            public abstract a f(int i10);
        }

        public static a a(w0 w0Var) {
            return new f.b().g(w0Var).e(Collections.EMPTY_LIST).d(null).c(-1).f(-1).b(x.z.f54450d);
        }

        public abstract x.z b();

        public abstract int c();

        public abstract String d();

        public abstract List e();

        public abstract w0 f();

        public abstract int g();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum g {
        SESSION_ERROR_SURFACE_NEEDS_RESET,
        SESSION_ERROR_UNKNOWN
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class h extends a {

        /* renamed from: j  reason: collision with root package name */
        private final h0.f f118j = new h0.f();

        /* renamed from: k  reason: collision with root package name */
        private boolean f119k = true;

        /* renamed from: l  reason: collision with root package name */
        private boolean f120l = false;

        /* renamed from: m  reason: collision with root package name */
        private List f121m = new ArrayList();

        public static /* synthetic */ void a(h hVar, i2 i2Var, g gVar) {
            for (d dVar : hVar.f121m) {
                dVar.a(i2Var, gVar);
            }
        }

        private List d() {
            ArrayList arrayList = new ArrayList();
            for (f fVar : this.f104a) {
                arrayList.add(fVar.f());
                for (w0 w0Var : fVar.e()) {
                    arrayList.add(w0Var);
                }
            }
            return arrayList;
        }

        private void f(Range range) {
            Range range2 = m2.f165a;
            if (!range.equals(range2)) {
                if (this.f105b.k().equals(range2)) {
                    this.f105b.o(range);
                } else if (!this.f105b.k().equals(range)) {
                    this.f119k = false;
                    x.y0.a("ValidatingBuilder", "Different ExpectedFrameRateRange values");
                }
            }
        }

        private void g(int i10) {
            if (i10 != 0) {
                this.f105b.s(i10);
            }
        }

        private void h(int i10) {
            if (i10 != 0) {
                this.f105b.v(i10);
            }
        }

        public void b(i2 i2Var) {
            p0 j10 = i2Var.j();
            if (j10.k() != -1) {
                this.f120l = true;
                this.f105b.t(i2.e(j10.k(), this.f105b.m()));
            }
            f(j10.e());
            g(j10.h());
            h(j10.l());
            this.f105b.b(i2Var.j().j());
            this.f106c.addAll(i2Var.c());
            this.f107d.addAll(i2Var.k());
            this.f105b.a(i2Var.i());
            this.f108e.addAll(i2Var.m());
            if (i2Var.d() != null) {
                this.f121m.add(i2Var.d());
            }
            if (i2Var.g() != null) {
                this.f110g = i2Var.g();
            }
            this.f104a.addAll(i2Var.h());
            this.f105b.l().addAll(j10.i());
            if (!d().containsAll(this.f105b.l())) {
                x.y0.a("ValidatingBuilder", "Invalid configuration due to capture request surfaces are not a subset of surfaces");
                this.f119k = false;
            }
            if (i2Var.l() != this.f111h && i2Var.l() != 0 && this.f111h != 0) {
                x.y0.a("ValidatingBuilder", "Invalid configuration due to that two non-default session types are set");
                this.f119k = false;
            } else if (i2Var.l() != 0) {
                this.f111h = i2Var.l();
            }
            if (i2Var.f96b != null) {
                if (this.f112i != i2Var.f96b && this.f112i != null) {
                    x.y0.a("ValidatingBuilder", "Invalid configuration due to that two different postview output configs are set");
                    this.f119k = false;
                } else {
                    this.f112i = i2Var.f96b;
                }
            }
            this.f105b.e(j10.g());
        }

        public i2 c() {
            d dVar;
            if (this.f119k) {
                ArrayList arrayList = new ArrayList(this.f104a);
                this.f118j.c(arrayList);
                if (!this.f121m.isEmpty()) {
                    dVar = new d() { // from class: a0.j2
                        @Override // a0.i2.d
                        public final void a(i2 i2Var, i2.g gVar) {
                            i2.h.a(i2.h.this, i2Var, gVar);
                        }
                    };
                } else {
                    dVar = null;
                }
                return new i2(arrayList, new ArrayList(this.f106c), new ArrayList(this.f107d), new ArrayList(this.f108e), this.f105b.h(), dVar, this.f110g, this.f111h, this.f112i);
            }
            throw new IllegalArgumentException("Unsupported session configuration combination");
        }

        public boolean e() {
            if (this.f120l && this.f119k) {
                return true;
            }
            return false;
        }
    }

    i2(List list, List list2, List list3, List list4, p0 p0Var, d dVar, InputConfiguration inputConfiguration, int i10, f fVar) {
        this.f95a = list;
        this.f97c = Collections.unmodifiableList(list2);
        this.f98d = Collections.unmodifiableList(list3);
        this.f99e = Collections.unmodifiableList(list4);
        this.f100f = dVar;
        this.f101g = p0Var;
        this.f103i = inputConfiguration;
        this.f102h = i10;
        this.f96b = fVar;
    }

    public static i2 b() {
        return new i2(new ArrayList(), new ArrayList(0), new ArrayList(0), new ArrayList(0), new p0.a().h(), null, null, 0, null);
    }

    public static int e(int i10, int i11) {
        List list = f94j;
        if (list.indexOf(Integer.valueOf(i10)) >= list.indexOf(Integer.valueOf(i11))) {
            return i10;
        }
        return i11;
    }

    public List c() {
        return this.f97c;
    }

    public d d() {
        return this.f100f;
    }

    public r0 f() {
        return this.f101g.g();
    }

    public InputConfiguration g() {
        return this.f103i;
    }

    public List h() {
        return this.f95a;
    }

    public List i() {
        return this.f101g.c();
    }

    public p0 j() {
        return this.f101g;
    }

    public List k() {
        return this.f98d;
    }

    public int l() {
        return this.f102h;
    }

    public List m() {
        return this.f99e;
    }

    public List n() {
        ArrayList arrayList = new ArrayList();
        for (f fVar : this.f95a) {
            arrayList.add(fVar.f());
            for (w0 w0Var : fVar.e()) {
                arrayList.add(w0Var);
            }
        }
        return Collections.unmodifiableList(arrayList);
    }

    public int o() {
        return this.f101g.k();
    }
}
