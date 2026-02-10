package o5;

import android.view.animation.Interpolator;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: c  reason: collision with root package name */
    private final d f38584c;

    /* renamed from: e  reason: collision with root package name */
    protected z5.c f38586e;

    /* renamed from: a  reason: collision with root package name */
    final List f38582a = new ArrayList(1);

    /* renamed from: b  reason: collision with root package name */
    private boolean f38583b = false;

    /* renamed from: d  reason: collision with root package name */
    protected float f38585d = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private Object f38587f = null;

    /* renamed from: g  reason: collision with root package name */
    private float f38588g = -1.0f;

    /* renamed from: h  reason: collision with root package name */
    private float f38589h = -1.0f;

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
        private final List f38590a;

        /* renamed from: c  reason: collision with root package name */
        private z5.a f38592c = null;

        /* renamed from: d  reason: collision with root package name */
        private float f38593d = -1.0f;

        /* renamed from: b  reason: collision with root package name */
        private z5.a f38591b = f(0.0f);

        e(List list) {
            this.f38590a = list;
        }

        private z5.a f(float f10) {
            List list = this.f38590a;
            z5.a aVar = (z5.a) list.get(list.size() - 1);
            if (f10 >= aVar.f()) {
                return aVar;
            }
            for (int size = this.f38590a.size() - 2; size >= 1; size--) {
                z5.a aVar2 = (z5.a) this.f38590a.get(size);
                if (this.f38591b != aVar2 && aVar2.a(f10)) {
                    return aVar2;
                }
            }
            return (z5.a) this.f38590a.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            z5.a aVar = this.f38592c;
            z5.a aVar2 = this.f38591b;
            if (aVar == aVar2 && this.f38593d == f10) {
                return true;
            }
            this.f38592c = aVar2;
            this.f38593d = f10;
            return false;
        }

        @Override // o5.a.d
        public z5.a b() {
            return this.f38591b;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            if (this.f38591b.a(f10)) {
                return !this.f38591b.i();
            }
            this.f38591b = f(f10);
            return true;
        }

        @Override // o5.a.d
        public float d() {
            return ((z5.a) this.f38590a.get(0)).f();
        }

        @Override // o5.a.d
        public float e() {
            List list = this.f38590a;
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
        private final z5.a f38594a;

        /* renamed from: b  reason: collision with root package name */
        private float f38595b = -1.0f;

        f(List list) {
            this.f38594a = (z5.a) list.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            if (this.f38595b == f10) {
                return true;
            }
            this.f38595b = f10;
            return false;
        }

        @Override // o5.a.d
        public z5.a b() {
            return this.f38594a;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            return !this.f38594a.i();
        }

        @Override // o5.a.d
        public float d() {
            return this.f38594a.f();
        }

        @Override // o5.a.d
        public float e() {
            return this.f38594a.c();
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(List list) {
        this.f38584c = p(list);
    }

    private float g() {
        if (this.f38588g == -1.0f) {
            this.f38588g = this.f38584c.d();
        }
        return this.f38588g;
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
        this.f38582a.add(bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public z5.a b() {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#getCurrentKeyframe");
        }
        z5.a b10 = this.f38584c.b();
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#getCurrentKeyframe");
        }
        return b10;
    }

    float c() {
        if (this.f38589h == -1.0f) {
            this.f38589h = this.f38584c.e();
        }
        return this.f38589h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public float d() {
        Interpolator interpolator;
        z5.a b10 = b();
        if (b10 != null && !b10.i() && (interpolator = b10.f56094d) != null) {
            return interpolator.getInterpolation(e());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        if (this.f38583b) {
            return 0.0f;
        }
        z5.a b10 = b();
        if (b10.i()) {
            return 0.0f;
        }
        return (this.f38585d - b10.f()) / (b10.c() - b10.f());
    }

    public float f() {
        return this.f38585d;
    }

    public Object h() {
        Object i10;
        float e10 = e();
        if (this.f38586e == null && this.f38584c.a(e10)) {
            return this.f38587f;
        }
        z5.a b10 = b();
        Interpolator interpolator = b10.f56095e;
        if (interpolator != null && b10.f56096f != null) {
            i10 = j(b10, e10, interpolator.getInterpolation(e10), b10.f56096f.getInterpolation(e10));
        } else {
            i10 = i(b10, d());
        }
        this.f38587f = i10;
        return i10;
    }

    abstract Object i(z5.a aVar, float f10);

    protected Object j(z5.a aVar, float f10, float f11, float f12) {
        throw new UnsupportedOperationException("This animation does not support split dimensions!");
    }

    public boolean k() {
        if (this.f38586e != null) {
            return true;
        }
        return false;
    }

    public void l() {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#notifyListeners");
        }
        for (int i10 = 0; i10 < this.f38582a.size(); i10++) {
            ((b) this.f38582a.get(i10)).a();
        }
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#notifyListeners");
        }
    }

    public void m() {
        this.f38583b = true;
    }

    public void n(float f10) {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#setProgress");
        }
        if (this.f38584c.isEmpty()) {
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
        if (f10 == this.f38585d) {
            if (l5.e.h()) {
                l5.e.c("BaseKeyframeAnimation#setProgress");
                return;
            }
            return;
        }
        this.f38585d = f10;
        if (this.f38584c.c(f10)) {
            l();
        }
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
        }
    }

    public void o(z5.c cVar) {
        z5.c cVar2 = this.f38586e;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f38586e = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
