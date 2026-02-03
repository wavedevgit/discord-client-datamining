package o5;

import android.view.animation.Interpolator;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: c  reason: collision with root package name */
    private final d f42551c;

    /* renamed from: e  reason: collision with root package name */
    protected y5.c f42553e;

    /* renamed from: a  reason: collision with root package name */
    final List f42549a = new ArrayList(1);

    /* renamed from: b  reason: collision with root package name */
    private boolean f42550b = false;

    /* renamed from: d  reason: collision with root package name */
    protected float f42552d = 0.0f;

    /* renamed from: f  reason: collision with root package name */
    private Object f42554f = null;

    /* renamed from: g  reason: collision with root package name */
    private float f42555g = -1.0f;

    /* renamed from: h  reason: collision with root package name */
    private float f42556h = -1.0f;

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
        private final List f42557a;

        /* renamed from: c  reason: collision with root package name */
        private y5.a f42559c = null;

        /* renamed from: d  reason: collision with root package name */
        private float f42560d = -1.0f;

        /* renamed from: b  reason: collision with root package name */
        private y5.a f42558b = f(0.0f);

        e(List list) {
            this.f42557a = list;
        }

        private y5.a f(float f10) {
            List list = this.f42557a;
            y5.a aVar = (y5.a) list.get(list.size() - 1);
            if (f10 >= aVar.f()) {
                return aVar;
            }
            for (int size = this.f42557a.size() - 2; size >= 1; size--) {
                y5.a aVar2 = (y5.a) this.f42557a.get(size);
                if (this.f42558b != aVar2 && aVar2.a(f10)) {
                    return aVar2;
                }
            }
            return (y5.a) this.f42557a.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            y5.a aVar = this.f42559c;
            y5.a aVar2 = this.f42558b;
            if (aVar == aVar2 && this.f42560d == f10) {
                return true;
            }
            this.f42559c = aVar2;
            this.f42560d = f10;
            return false;
        }

        @Override // o5.a.d
        public y5.a b() {
            return this.f42558b;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            if (this.f42558b.a(f10)) {
                return !this.f42558b.i();
            }
            this.f42558b = f(f10);
            return true;
        }

        @Override // o5.a.d
        public float d() {
            return ((y5.a) this.f42557a.get(0)).f();
        }

        @Override // o5.a.d
        public float e() {
            List list = this.f42557a;
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
        private final y5.a f42561a;

        /* renamed from: b  reason: collision with root package name */
        private float f42562b = -1.0f;

        f(List list) {
            this.f42561a = (y5.a) list.get(0);
        }

        @Override // o5.a.d
        public boolean a(float f10) {
            if (this.f42562b == f10) {
                return true;
            }
            this.f42562b = f10;
            return false;
        }

        @Override // o5.a.d
        public y5.a b() {
            return this.f42561a;
        }

        @Override // o5.a.d
        public boolean c(float f10) {
            return !this.f42561a.i();
        }

        @Override // o5.a.d
        public float d() {
            return this.f42561a.f();
        }

        @Override // o5.a.d
        public float e() {
            return this.f42561a.c();
        }

        @Override // o5.a.d
        public boolean isEmpty() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(List list) {
        this.f42551c = p(list);
    }

    private float g() {
        if (this.f42555g == -1.0f) {
            this.f42555g = this.f42551c.d();
        }
        return this.f42555g;
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
        this.f42549a.add(bVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public y5.a b() {
        l5.e.b("BaseKeyframeAnimation#getCurrentKeyframe");
        y5.a b10 = this.f42551c.b();
        l5.e.c("BaseKeyframeAnimation#getCurrentKeyframe");
        return b10;
    }

    float c() {
        if (this.f42556h == -1.0f) {
            this.f42556h = this.f42551c.e();
        }
        return this.f42556h;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public float d() {
        y5.a b10 = b();
        if (b10 != null && !b10.i()) {
            return b10.f53987d.getInterpolation(e());
        }
        return 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float e() {
        if (this.f42550b) {
            return 0.0f;
        }
        y5.a b10 = b();
        if (b10.i()) {
            return 0.0f;
        }
        return (this.f42552d - b10.f()) / (b10.c() - b10.f());
    }

    public float f() {
        return this.f42552d;
    }

    public Object h() {
        Object i10;
        float e10 = e();
        if (this.f42553e == null && this.f42551c.a(e10)) {
            return this.f42554f;
        }
        y5.a b10 = b();
        Interpolator interpolator = b10.f53988e;
        if (interpolator != null && b10.f53989f != null) {
            i10 = j(b10, e10, interpolator.getInterpolation(e10), b10.f53989f.getInterpolation(e10));
        } else {
            i10 = i(b10, d());
        }
        this.f42554f = i10;
        return i10;
    }

    abstract Object i(y5.a aVar, float f10);

    protected Object j(y5.a aVar, float f10, float f11, float f12) {
        throw new UnsupportedOperationException("This animation does not support split dimensions!");
    }

    public boolean k() {
        if (this.f42553e != null) {
            return true;
        }
        return false;
    }

    public void l() {
        l5.e.b("BaseKeyframeAnimation#notifyListeners");
        for (int i10 = 0; i10 < this.f42549a.size(); i10++) {
            ((b) this.f42549a.get(i10)).a();
        }
        l5.e.c("BaseKeyframeAnimation#notifyListeners");
    }

    public void m() {
        this.f42550b = true;
    }

    public void n(float f10) {
        l5.e.b("BaseKeyframeAnimation#setProgress");
        if (this.f42551c.isEmpty()) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
            return;
        }
        if (f10 < g()) {
            f10 = g();
        } else if (f10 > c()) {
            f10 = c();
        }
        if (f10 == this.f42552d) {
            l5.e.c("BaseKeyframeAnimation#setProgress");
            return;
        }
        this.f42552d = f10;
        if (this.f42551c.c(f10)) {
            l();
        }
        l5.e.c("BaseKeyframeAnimation#setProgress");
    }

    public void o(y5.c cVar) {
        y5.c cVar2 = this.f42553e;
        if (cVar2 != null) {
            cVar2.c(null);
        }
        this.f42553e = cVar;
        if (cVar != null) {
            cVar.c(this);
        }
    }
}
