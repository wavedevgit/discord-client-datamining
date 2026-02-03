package o5;

import android.view.animation.Interpolator;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: c  reason: collision with root package name */
    private final d f42351c;

    /* renamed from: e  reason: collision with root package name */
    protected y5.c f42353e;

    /* renamed from: a  reason: collision with root package name */
    final List f42349a = new ArrayList(1);

    /* renamed from: b  reason: collision with root package name */
    private boolean f42350b = false;

    /* renamed from: d  reason: collision with root package name */
    protected float f42352d = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private Object f42354f = null;

    /* renamed from: g  reason: collision with root package name */
    private float f42355g = -1.0f;

    /* renamed from: h  reason: collision with root package name */
    private float f42356h = -1.0f;

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
        private final List f42357a;

        /* renamed from: c  reason: collision with root package name */
        private y5.a f42359c = null;

        /* renamed from: d  reason: collision with root package name */
        private float f42360d = -1.0f;

        /* renamed from: b  reason: collision with root package name */
        private y5.a f42358b = f(0.0f);

        e(List list) {
            this.f42357a = list;
        }

        private y5.a f(float f10) {
            List list = this.f42357a;
            y5.a aVar = (y5.a) list.get(list.size() - 1);
            if (f10 >= aVar.f()) {
                return aVar;
            }
            for (int size = this.f42357a.size() - 2; size >= 1; size--) {
                y5.a aVar2 = (y5.a) this.f42357a.get(size);
                if (this.f42358b != aVar2 && aVar2.a(f10)) {
                    return aVar2;
                }
            }
            return (y5.a) this.f42357a.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            y5.a aVar = this.f42359c;
            y5.a aVar2 = this.f42358b;
            if (aVar == aVar2 && this.f42360d == f10) {
                return true;
            }
            this.f42359c = aVar2;
            this.f42360d = f10;
            return false;
        }

        @Override // o5.a.d
        public y5.a b() {
            return this.f42358b;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            if (this.f42358b.a(f10)) {
                return !this.f42358b.i();
            }
            this.f42358b = f(f10);
            return true;
        }

        @Override // o5.a.d
        public float d() {
            return ((y5.a) this.f42357a.get(0)).f();
        }

        @Override // o5.a.d
        public float e() {
            List list = this.f42357a;
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
        private final y5.a f42361a;

        /* renamed from: b  reason: collision with root package name */
        private float f42362b = -1.0f;

        f(List list) {
            this.f42361a = (y5.a) list.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            if (this.f42362b == f10) {
                return true;
            }
            this.f42362b = f10;
            return false;
        }

        @Override // o5.a.d
        public y5.a b() {
            return this.f42361a;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            return !this.f42361a.i();
        }

        @Override // o5.a.d
        public float d() {
            return this.f42361a.f();
        }

        @Override // o5.a.d
        public float e() {
            return this.f42361a.c();
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(List list) {
        this.f42351c = p(list);
    }

    private float g() {
        if (this.f42355g == -1.0f) {
            this.f42355g = this.f42351c.d();
        }
        return this.f42355g;
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
        this.f42349a.add(bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public y5.a b() {
        l5.e.b("BaseKeyframeAnimation#getCurrentKeyframe");
        y5.a b10 = this.f42351c.b();
        l5.e.c("BaseKeyframeAnimation#getCurrentKeyframe");
        return b10;
    }

    float c() {
        if (this.f42356h == -1.0f) {
            this.f42356h = this.f42351c.e();
        }
        return this.f42356h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public float d() {
        y5.a b10 = b();
        if (b10 != null && !b10.i()) {
            return b10.f53745d.getInterpolation(e());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        if (this.f42350b) {
            return 0.0f;
        }
        y5.a b10 = b();
        if (b10.i()) {
            return 0.0f;
        }
        return (this.f42352d - b10.f()) / (b10.c() - b10.f());
    }

    public float f() {
        return this.f42352d;
    }

    public Object h() {
        Object i10;
        float e10 = e();
        if (this.f42353e == null && this.f42351c.a(e10)) {
            return this.f42354f;
        }
        y5.a b10 = b();
        Interpolator interpolator = b10.f53746e;
        if (interpolator != null && b10.f53747f != null) {
            i10 = j(b10, e10, interpolator.getInterpolation(e10), b10.f53747f.getInterpolation(e10));
        } else {
            i10 = i(b10, d());
        }
        this.f42354f = i10;
        return i10;
    }

    abstract Object i(y5.a aVar, float f10);

    protected Object j(y5.a aVar, float f10, float f11, float f12) {
        throw new UnsupportedOperationException("This animation does not support split dimensions!");
    }

    public boolean k() {
        if (this.f42353e != null) {
            return true;
        }
        return false;
    }

    public void l() {
        l5.e.b("BaseKeyframeAnimation#notifyListeners");
        for (int i10 = 0; i10 < this.f42349a.size(); i10++) {
            ((b) this.f42349a.get(i10)).a();
        }
        l5.e.c("BaseKeyframeAnimation#notifyListeners");
    }

    public void m() {
        this.f42350b = true;
    }

    public void n(float f10) {
        l5.e.b("BaseKeyframeAnimation#setProgress");
        if (this.f42351c.isEmpty()) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
            return;
        }
        if (f10 < g()) {
            f10 = g();
        } else if (f10 > c()) {
            f10 = c();
        }
        if (f10 == this.f42352d) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
            return;
        }
        this.f42352d = f10;
        if (this.f42351c.c(f10)) {
            l();
        }
        l5.e.c("BaseKeyframeAnimation#setProgress");
    }

    public void o(y5.c cVar) {
        y5.c cVar2 = this.f42353e;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f42353e = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
