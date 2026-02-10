package o5;

import android.view.animation.Interpolator;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: c  reason: collision with root package name */
    private final d f40258c;

    /* renamed from: e  reason: collision with root package name */
    protected z5.c f40260e;

    /* renamed from: a  reason: collision with root package name */
    final List f40256a = new ArrayList(1);

    /* renamed from: b  reason: collision with root package name */
    private boolean f40257b = false;

    /* renamed from: d  reason: collision with root package name */
    protected float f40259d = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private Object f40261f = null;

    /* renamed from: g  reason: collision with root package name */
    private float f40262g = -1.0f;

    /* renamed from: h  reason: collision with root package name */
    private float f40263h = -1.0f;

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
        private final List f40264a;

        /* renamed from: c  reason: collision with root package name */
        private z5.a f40266c = null;

        /* renamed from: d  reason: collision with root package name */
        private float f40267d = -1.0f;

        /* renamed from: b  reason: collision with root package name */
        private z5.a f40265b = f(0.0f);

        e(List list) {
            this.f40264a = list;
        }

        private z5.a f(float f10) {
            List list = this.f40264a;
            z5.a aVar = (z5.a) list.get(list.size() - 1);
            if (f10 >= aVar.f()) {
                return aVar;
            }
            for (int size = this.f40264a.size() - 2; size >= 1; size--) {
                z5.a aVar2 = (z5.a) this.f40264a.get(size);
                if (this.f40265b != aVar2 && aVar2.a(f10)) {
                    return aVar2;
                }
            }
            return (z5.a) this.f40264a.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            z5.a aVar = this.f40266c;
            z5.a aVar2 = this.f40265b;
            if (aVar == aVar2 && this.f40267d == f10) {
                return true;
            }
            this.f40266c = aVar2;
            this.f40267d = f10;
            return false;
        }

        @Override // o5.a.d
        public z5.a b() {
            return this.f40265b;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            if (this.f40265b.a(f10)) {
                return !this.f40265b.i();
            }
            this.f40265b = f(f10);
            return true;
        }

        @Override // o5.a.d
        public float d() {
            return ((z5.a) this.f40264a.get(0)).f();
        }

        @Override // o5.a.d
        public float e() {
            List list = this.f40264a;
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
        private final z5.a f40268a;

        /* renamed from: b  reason: collision with root package name */
        private float f40269b = -1.0f;

        f(List list) {
            this.f40268a = (z5.a) list.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            if (this.f40269b == f10) {
                return true;
            }
            this.f40269b = f10;
            return false;
        }

        @Override // o5.a.d
        public z5.a b() {
            return this.f40268a;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            return !this.f40268a.i();
        }

        @Override // o5.a.d
        public float d() {
            return this.f40268a.f();
        }

        @Override // o5.a.d
        public float e() {
            return this.f40268a.c();
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(List list) {
        this.f40258c = p(list);
    }

    private float g() {
        if (this.f40262g == -1.0f) {
            this.f40262g = this.f40258c.d();
        }
        return this.f40262g;
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
        this.f40256a.add(bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public z5.a b() {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#getCurrentKeyframe");
        }
        z5.a b10 = this.f40258c.b();
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#getCurrentKeyframe");
        }
        return b10;
    }

    float c() {
        if (this.f40263h == -1.0f) {
            this.f40263h = this.f40258c.e();
        }
        return this.f40263h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public float d() {
        Interpolator interpolator;
        z5.a b10 = b();
        if (b10 != null && !b10.i() && (interpolator = b10.f56055d) != null) {
            return interpolator.getInterpolation(e());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        if (this.f40257b) {
            return 0.0f;
        }
        z5.a b10 = b();
        if (b10.i()) {
            return 0.0f;
        }
        return (this.f40259d - b10.f()) / (b10.c() - b10.f());
    }

    public float f() {
        return this.f40259d;
    }

    public Object h() {
        Object i10;
        float e10 = e();
        if (this.f40260e == null && this.f40258c.a(e10)) {
            return this.f40261f;
        }
        z5.a b10 = b();
        Interpolator interpolator = b10.f56056e;
        if (interpolator != null && b10.f56057f != null) {
            i10 = j(b10, e10, interpolator.getInterpolation(e10), b10.f56057f.getInterpolation(e10));
        } else {
            i10 = i(b10, d());
        }
        this.f40261f = i10;
        return i10;
    }

    abstract Object i(z5.a aVar, float f10);

    protected Object j(z5.a aVar, float f10, float f11, float f12) {
        throw new UnsupportedOperationException("This animation does not support split dimensions!");
    }

    public boolean k() {
        if (this.f40260e != null) {
            return true;
        }
        return false;
    }

    public void l() {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#notifyListeners");
        }
        for (int i10 = 0; i10 < this.f40256a.size(); i10++) {
            ((b) this.f40256a.get(i10)).a();
        }
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#notifyListeners");
        }
    }

    public void m() {
        this.f40257b = true;
    }

    public void n(float f10) {
        if (l5.e.h()) {
            l5.e.b("BaseKeyframeAnimation#setProgress");
        }
        if (this.f40258c.isEmpty()) {
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
        if (f10 == this.f40259d) {
            if (l5.e.h()) {
                l5.e.c("BaseKeyframeAnimation#setProgress");
                return;
            }
            return;
        }
        this.f40259d = f10;
        if (this.f40258c.c(f10)) {
            l();
        }
        if (l5.e.h()) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
        }
    }

    public void o(z5.c cVar) {
        z5.c cVar2 = this.f40260e;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f40260e = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
