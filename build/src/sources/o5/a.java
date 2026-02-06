package o5;

import android.view.animation.Interpolator;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: c  reason: collision with root package name */
    private final d f41480c;

    /* renamed from: e  reason: collision with root package name */
    protected y5.c f41482e;

    /* renamed from: a  reason: collision with root package name */
    final List f41478a = new ArrayList(1);

    /* renamed from: b  reason: collision with root package name */
    private boolean f41479b = false;

    /* renamed from: d  reason: collision with root package name */
    protected float f41481d = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private Object f41483f = null;

    /* renamed from: g  reason: collision with root package name */
    private float f41484g = -1.0f;

    /* renamed from: h  reason: collision with root package name */
    private float f41485h = -1.0f;

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
        public y5.a b() {
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

        y5.a b();

        boolean c(float f10);

        float d();

        float e();

        boolean isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements d {

        /* renamed from: a  reason: collision with root package name */
        private final List f41486a;

        /* renamed from: c  reason: collision with root package name */
        private y5.a f41488c = null;

        /* renamed from: d  reason: collision with root package name */
        private float f41489d = -1.0f;

        /* renamed from: b  reason: collision with root package name */
        private y5.a f41487b = f(0.0f);

        e(List list) {
            this.f41486a = list;
        }

        private y5.a f(float f10) {
            List list = this.f41486a;
            y5.a aVar = (y5.a) list.get(list.size() - 1);
            if (f10 >= aVar.f()) {
                return aVar;
            }
            for (int size = this.f41486a.size() - 2; size >= 1; size--) {
                y5.a aVar2 = (y5.a) this.f41486a.get(size);
                if (this.f41487b != aVar2 && aVar2.a(f10)) {
                    return aVar2;
                }
            }
            return (y5.a) this.f41486a.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            y5.a aVar = this.f41488c;
            y5.a aVar2 = this.f41487b;
            if (aVar == aVar2 && this.f41489d == f10) {
                return true;
            }
            this.f41488c = aVar2;
            this.f41489d = f10;
            return false;
        }

        @Override // o5.a.d
        public y5.a b() {
            return this.f41487b;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            if (this.f41487b.a(f10)) {
                return !this.f41487b.i();
            }
            this.f41487b = f(f10);
            return true;
        }

        @Override // o5.a.d
        public float d() {
            return ((y5.a) this.f41486a.get(0)).f();
        }

        @Override // o5.a.d
        public float e() {
            List list = this.f41486a;
            return ((y5.a) list.get(list.size() - 1)).c();
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
        private final y5.a f41490a;

        /* renamed from: b  reason: collision with root package name */
        private float f41491b = -1.0f;

        f(List list) {
            this.f41490a = (y5.a) list.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            if (this.f41491b == f10) {
                return true;
            }
            this.f41491b = f10;
            return false;
        }

        @Override // o5.a.d
        public y5.a b() {
            return this.f41490a;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            return !this.f41490a.i();
        }

        @Override // o5.a.d
        public float d() {
            return this.f41490a.f();
        }

        @Override // o5.a.d
        public float e() {
            return this.f41490a.c();
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(List list) {
        this.f41480c = p(list);
    }

    private float g() {
        if (this.f41484g == -1.0f) {
            this.f41484g = this.f41480c.d();
        }
        return this.f41484g;
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
        this.f41478a.add(bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public y5.a b() {
        l5.e.b("BaseKeyframeAnimation#getCurrentKeyframe");
        y5.a b10 = this.f41480c.b();
        l5.e.c("BaseKeyframeAnimation#getCurrentKeyframe");
        return b10;
    }

    float c() {
        if (this.f41485h == -1.0f) {
            this.f41485h = this.f41480c.e();
        }
        return this.f41485h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public float d() {
        y5.a b10 = b();
        if (b10 != null && !b10.i()) {
            return b10.f54982d.getInterpolation(e());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        if (this.f41479b) {
            return 0.0f;
        }
        y5.a b10 = b();
        if (b10.i()) {
            return 0.0f;
        }
        return (this.f41481d - b10.f()) / (b10.c() - b10.f());
    }

    public float f() {
        return this.f41481d;
    }

    public Object h() {
        Object i10;
        float e10 = e();
        if (this.f41482e == null && this.f41480c.a(e10)) {
            return this.f41483f;
        }
        y5.a b10 = b();
        Interpolator interpolator = b10.f54983e;
        if (interpolator != null && b10.f54984f != null) {
            i10 = j(b10, e10, interpolator.getInterpolation(e10), b10.f54984f.getInterpolation(e10));
        } else {
            i10 = i(b10, d());
        }
        this.f41483f = i10;
        return i10;
    }

    abstract Object i(y5.a aVar, float f10);

    protected Object j(y5.a aVar, float f10, float f11, float f12) {
        throw new UnsupportedOperationException("This animation does not support split dimensions!");
    }

    public boolean k() {
        if (this.f41482e != null) {
            return true;
        }
        return false;
    }

    public void l() {
        l5.e.b("BaseKeyframeAnimation#notifyListeners");
        for (int i10 = 0; i10 < this.f41478a.size(); i10++) {
            ((b) this.f41478a.get(i10)).a();
        }
        l5.e.c("BaseKeyframeAnimation#notifyListeners");
    }

    public void m() {
        this.f41479b = true;
    }

    public void n(float f10) {
        l5.e.b("BaseKeyframeAnimation#setProgress");
        if (this.f41480c.isEmpty()) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
            return;
        }
        if (f10 < g()) {
            f10 = g();
        } else if (f10 > c()) {
            f10 = c();
        }
        if (f10 == this.f41481d) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
            return;
        }
        this.f41481d = f10;
        if (this.f41480c.c(f10)) {
            l();
        }
        l5.e.c("BaseKeyframeAnimation#setProgress");
    }

    public void o(y5.c cVar) {
        y5.c cVar2 = this.f41482e;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f41482e = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
