package o5;

import android.view.animation.Interpolator;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: c  reason: collision with root package name */
    private final d f38585c;

    /* renamed from: e  reason: collision with root package name */
    protected z5.c f38587e;

    /* renamed from: a  reason: collision with root package name */
    final List f38583a = new ArrayList(1);

    /* renamed from: b  reason: collision with root package name */
    private boolean f38584b = false;

    /* renamed from: d  reason: collision with root package name */
    protected float f38586d = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private Object f38588f = null;

    /* renamed from: g  reason: collision with root package name */
    private float f38589g = -1.0f;

    /* renamed from: h  reason: collision with root package name */
    private float f38590h = -1.0f;

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
        private final List f38591a;

        /* renamed from: c  reason: collision with root package name */
        private z5.a f38593c = null;

        /* renamed from: d  reason: collision with root package name */
        private float f38594d = -1.0f;

        /* renamed from: b  reason: collision with root package name */
        private z5.a f38592b = f(0.0f);

        e(List list) {
            this.f38591a = list;
        }

        private z5.a f(float f10) {
            List list = this.f38591a;
            z5.a aVar = (z5.a) list.get(list.size() - 1);
            if (f10 >= aVar.f()) {
                return aVar;
            }
            for (int size = this.f38591a.size() - 2; size >= 1; size--) {
                z5.a aVar2 = (z5.a) this.f38591a.get(size);
                if (this.f38592b != aVar2 && aVar2.a(f10)) {
                    return aVar2;
                }
            }
            return (z5.a) this.f38591a.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            z5.a aVar = this.f38593c;
            z5.a aVar2 = this.f38592b;
            if (aVar == aVar2 && this.f38594d == f10) {
                return true;
            }
            this.f38593c = aVar2;
            this.f38594d = f10;
            return false;
        }

        @Override // o5.a.d
        public z5.a b() {
            return this.f38592b;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            if (this.f38592b.a(f10)) {
                return !this.f38592b.i();
            }
            this.f38592b = f(f10);
            return true;
        }

        @Override // o5.a.d
        public float d() {
            return ((z5.a) this.f38591a.get(0)).f();
        }

        @Override // o5.a.d
        public float e() {
            List list = this.f38591a;
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
        private final z5.a f38595a;

        /* renamed from: b  reason: collision with root package name */
        private float f38596b = -1.0f;

        f(List list) {
            this.f38595a = (z5.a) list.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            if (this.f38596b == f10) {
                return true;
            }
            this.f38596b = f10;
            return false;
        }

        @Override // o5.a.d
        public z5.a b() {
            return this.f38595a;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            return !this.f38595a.i();
        }

        @Override // o5.a.d
        public float d() {
            return this.f38595a.f();
        }

        @Override // o5.a.d
        public float e() {
            return this.f38595a.c();
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(List list) {
        this.f38585c = p(list);
    }

    private float g() {
        if (this.f38589g == -1.0f) {
            this.f38589g = this.f38585c.d();
        }
        return this.f38589g;
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
        this.f38583a.add(bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public z5.a b() {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#getCurrentKeyframe");
        }
        z5.a b10 = this.f38585c.b();
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#getCurrentKeyframe");
        }
        return b10;
    }

    float c() {
        if (this.f38590h == -1.0f) {
            this.f38590h = this.f38585c.e();
        }
        return this.f38590h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public float d() {
        Interpolator interpolator;
        z5.a b10 = b();
        if (b10 != null && !b10.i() && (interpolator = b10.f56095d) != null) {
            return interpolator.getInterpolation(e());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        if (this.f38584b) {
            return 0.0f;
        }
        z5.a b10 = b();
        if (b10.i()) {
            return 0.0f;
        }
        return (this.f38586d - b10.f()) / (b10.c() - b10.f());
    }

    public float f() {
        return this.f38586d;
    }

    public Object h() {
        Object i10;
        float e10 = e();
        if (this.f38587e == null && this.f38585c.a(e10)) {
            return this.f38588f;
        }
        z5.a b10 = b();
        Interpolator interpolator = b10.f56096e;
        if (interpolator != null && b10.f56097f != null) {
            i10 = j(b10, e10, interpolator.getInterpolation(e10), b10.f56097f.getInterpolation(e10));
        } else {
            i10 = i(b10, d());
        }
        this.f38588f = i10;
        return i10;
    }

    abstract Object i(z5.a aVar, float f10);

    protected Object j(z5.a aVar, float f10, float f11, float f12) {
        throw new UnsupportedOperationException("This animation does not support split dimensions!");
    }

    public boolean k() {
        if (this.f38587e != null) {
            return true;
        }
        return false;
    }

    public void l() {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#notifyListeners");
        }
        for (int i10 = 0; i10 < this.f38583a.size(); i10++) {
            ((b) this.f38583a.get(i10)).a();
        }
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#notifyListeners");
        }
    }

    public void m() {
        this.f38584b = true;
    }

    public void n(float f10) {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#setProgress");
        }
        if (this.f38585c.isEmpty()) {
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
        if (f10 == this.f38586d) {
            if (l5.e.h()) {
                l5.e.c("BaseKeyframeAnimation#setProgress");
                return;
            }
            return;
        }
        this.f38586d = f10;
        if (this.f38585c.c(f10)) {
            l();
        }
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
        }
    }

    public void o(z5.c cVar) {
        z5.c cVar2 = this.f38587e;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f38587e = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
