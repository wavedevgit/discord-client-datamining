package o5;

import android.view.animation.Interpolator;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: c  reason: collision with root package name */
    private final d f39153c;

    /* renamed from: e  reason: collision with root package name */
    protected z5.c f39155e;

    /* renamed from: a  reason: collision with root package name */
    final List f39151a = new ArrayList(1);

    /* renamed from: b  reason: collision with root package name */
    private boolean f39152b = false;

    /* renamed from: d  reason: collision with root package name */
    protected float f39154d = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private Object f39156f = null;

    /* renamed from: g  reason: collision with root package name */
    private float f39157g = -1.0f;

    /* renamed from: h  reason: collision with root package name */
    private float f39158h = -1.0f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements d {
        private c() {
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            throw new IllegalStateException("not implemented");
        }

        @Override // o5.a.d
        public z5.a b() {
            throw new IllegalStateException("not implemented");
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            return false;
        }

        @Override // o5.a.d
        public float d() {
            return 0.0f;
        }

        @Override // o5.a.d
        public float e() {
            return 1.0f;
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface d {
        boolean a(float f10);

        z5.a b();

        boolean c(float f10);

        float d();

        float e();

        boolean isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements d {

        /* renamed from: a  reason: collision with root package name */
        private final List f39159a;

        /* renamed from: c  reason: collision with root package name */
        private z5.a f39161c = null;

        /* renamed from: d  reason: collision with root package name */
        private float f39162d = -1.0f;

        /* renamed from: b  reason: collision with root package name */
        private z5.a f39160b = f(0.0f);

        e(List list) {
            this.f39159a = list;
        }

        private z5.a f(float f10) {
            List list = this.f39159a;
            z5.a aVar = (z5.a) list.get(list.size() - 1);
            if (f10 >= aVar.f()) {
                return aVar;
            }
            for (int size = this.f39159a.size() - 2; size >= 1; size--) {
                z5.a aVar2 = (z5.a) this.f39159a.get(size);
                if (this.f39160b != aVar2 && aVar2.a(f10)) {
                    return aVar2;
                }
            }
            return (z5.a) this.f39159a.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            z5.a aVar = this.f39161c;
            z5.a aVar2 = this.f39160b;
            if (aVar == aVar2 && this.f39162d == f10) {
                return true;
            }
            this.f39161c = aVar2;
            this.f39162d = f10;
            return false;
        }

        @Override // o5.a.d
        public z5.a b() {
            return this.f39160b;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            if (this.f39160b.a(f10)) {
                return !this.f39160b.i();
            }
            this.f39160b = f(f10);
            return true;
        }

        @Override // o5.a.d
        public float d() {
            return ((z5.a) this.f39159a.get(0)).f();
        }

        @Override // o5.a.d
        public float e() {
            List list = this.f39159a;
            return ((z5.a) list.get(list.size() - 1)).c();
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f implements d {

        /* renamed from: a  reason: collision with root package name */
        private final z5.a f39163a;

        /* renamed from: b  reason: collision with root package name */
        private float f39164b = -1.0f;

        f(List list) {
            this.f39163a = (z5.a) list.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            if (this.f39164b == f10) {
                return true;
            }
            this.f39164b = f10;
            return false;
        }

        @Override // o5.a.d
        public z5.a b() {
            return this.f39163a;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            return !this.f39163a.i();
        }

        @Override // o5.a.d
        public float d() {
            return this.f39163a.f();
        }

        @Override // o5.a.d
        public float e() {
            return this.f39163a.c();
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(List list) {
        this.f39153c = p(list);
    }

    private float g() {
        if (this.f39157g == -1.0f) {
            this.f39157g = this.f39153c.d();
        }
        return this.f39157g;
    }

    private static d p(List list) {
        if (list.isEmpty()) {
            return new c();
        }
        if (list.size() == 1) {
            return new f(list);
        }
        return new e(list);
    }

    public void a(b bVar) {
        this.f39151a.add(bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public z5.a b() {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#getCurrentKeyframe");
        }
        z5.a b10 = this.f39153c.b();
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#getCurrentKeyframe");
        }
        return b10;
    }

    float c() {
        if (this.f39158h == -1.0f) {
            this.f39158h = this.f39153c.e();
        }
        return this.f39158h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public float d() {
        Interpolator interpolator;
        z5.a b10 = b();
        if (b10 != null && !b10.i() && (interpolator = b10.f56663d) != null) {
            return interpolator.getInterpolation(e());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        if (this.f39152b) {
            return 0.0f;
        }
        z5.a b10 = b();
        if (b10.i()) {
            return 0.0f;
        }
        return (this.f39154d - b10.f()) / (b10.c() - b10.f());
    }

    public float f() {
        return this.f39154d;
    }

    public Object h() {
        Object i10;
        float e10 = e();
        if (this.f39155e == null && this.f39153c.a(e10)) {
            return this.f39156f;
        }
        z5.a b10 = b();
        Interpolator interpolator = b10.f56664e;
        if (interpolator != null && b10.f56665f != null) {
            i10 = j(b10, e10, interpolator.getInterpolation(e10), b10.f56665f.getInterpolation(e10));
        } else {
            i10 = i(b10, d());
        }
        this.f39156f = i10;
        return i10;
    }

    abstract Object i(z5.a aVar, float f10);

    protected Object j(z5.a aVar, float f10, float f11, float f12) {
        throw new UnsupportedOperationException("This animation does not support split dimensions!");
    }

    public boolean k() {
        if (this.f39155e != null) {
            return true;
        }
        return false;
    }

    public void l() {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#notifyListeners");
        }
        for (int i10 = 0; i10 < this.f39151a.size(); i10++) {
            ((b) this.f39151a.get(i10)).a();
        }
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#notifyListeners");
        }
    }

    public void m() {
        this.f39152b = true;
    }

    public void n(float f10) {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#setProgress");
        }
        if (this.f39153c.isEmpty()) {
            if (l5.e.h()) {
                l5.e.c("BaseKeyframeAnimation#setProgress");
                return;
            }
            return;
        }
        if (f10 < g()) {
            f10 = g();
        } else if (f10 > c()) {
            f10 = c();
        }
        if (f10 == this.f39154d) {
            if (l5.e.h()) {
                l5.e.c("BaseKeyframeAnimation#setProgress");
                return;
            }
            return;
        }
        this.f39154d = f10;
        if (this.f39153c.c(f10)) {
            l();
        }
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
        }
    }

    public void o(z5.c cVar) {
        z5.c cVar2 = this.f39155e;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f39155e = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
