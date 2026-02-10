package z5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f56091a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f56092b;

    /* renamed from: c  reason: collision with root package name */
    public Object f56093c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f56094d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f56095e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f56096f;

    /* renamed from: g  reason: collision with root package name */
    public final float f56097g;

    /* renamed from: h  reason: collision with root package name */
    public Float f56098h;

    /* renamed from: i  reason: collision with root package name */
    private float f56099i;

    /* renamed from: j  reason: collision with root package name */
    private float f56100j;

    /* renamed from: k  reason: collision with root package name */
    private int f56101k;

    /* renamed from: l  reason: collision with root package name */
    private int f56102l;

    /* renamed from: m  reason: collision with root package name */
    private float f56103m;

    /* renamed from: n  reason: collision with root package name */
    private float f56104n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f56105o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f56106p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f56099i = -3987645.8f;
        this.f56100j = -3987645.8f;
        this.f56101k = 784923401;
        this.f56102l = 784923401;
        this.f56103m = Float.MIN_VALUE;
        this.f56104n = Float.MIN_VALUE;
        this.f56105o = null;
        this.f56106p = null;
        this.f56091a = iVar;
        this.f56092b = obj;
        this.f56093c = obj2;
        this.f56094d = interpolator;
        this.f56095e = null;
        this.f56096f = null;
        this.f56097g = f10;
        this.f56098h = f11;
    }

    public boolean a(float f10) {
        if (f10 >= f() && f10 < c()) {
            return true;
        }
        return false;
    }

    public a b(Object obj, Object obj2) {
        return new a(obj, obj2);
    }

    public float c() {
        if (this.f56091a == null) {
            return 1.0f;
        }
        if (this.f56104n == Float.MIN_VALUE) {
            if (this.f56098h == null) {
                this.f56104n = 1.0f;
            } else {
                this.f56104n = f() + ((this.f56098h.floatValue() - this.f56097g) / this.f56091a.e());
            }
        }
        return this.f56104n;
    }

    public float d() {
        if (this.f56100j == -3987645.8f) {
            this.f56100j = ((Float) this.f56093c).floatValue();
        }
        return this.f56100j;
    }

    public int e() {
        if (this.f56102l == 784923401) {
            this.f56102l = ((Integer) this.f56093c).intValue();
        }
        return this.f56102l;
    }

    public float f() {
        i iVar = this.f56091a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f56103m == Float.MIN_VALUE) {
            this.f56103m = (this.f56097g - iVar.p()) / this.f56091a.e();
        }
        return this.f56103m;
    }

    public float g() {
        if (this.f56099i == -3987645.8f) {
            this.f56099i = ((Float) this.f56092b).floatValue();
        }
        return this.f56099i;
    }

    public int h() {
        if (this.f56101k == 784923401) {
            this.f56101k = ((Integer) this.f56092b).intValue();
        }
        return this.f56101k;
    }

    public boolean i() {
        if (this.f56094d == null && this.f56095e == null && this.f56096f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f56092b + ", endValue=" + this.f56093c + ", startFrame=" + this.f56097g + ", endFrame=" + this.f56098h + ", interpolator=" + this.f56094d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f56099i = -3987645.8f;
        this.f56100j = -3987645.8f;
        this.f56101k = 784923401;
        this.f56102l = 784923401;
        this.f56103m = Float.MIN_VALUE;
        this.f56104n = Float.MIN_VALUE;
        this.f56105o = null;
        this.f56106p = null;
        this.f56091a = iVar;
        this.f56092b = obj;
        this.f56093c = obj2;
        this.f56094d = null;
        this.f56095e = interpolator;
        this.f56096f = interpolator2;
        this.f56097g = f10;
        this.f56098h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f56099i = -3987645.8f;
        this.f56100j = -3987645.8f;
        this.f56101k = 784923401;
        this.f56102l = 784923401;
        this.f56103m = Float.MIN_VALUE;
        this.f56104n = Float.MIN_VALUE;
        this.f56105o = null;
        this.f56106p = null;
        this.f56091a = iVar;
        this.f56092b = obj;
        this.f56093c = obj2;
        this.f56094d = interpolator;
        this.f56095e = interpolator2;
        this.f56096f = interpolator3;
        this.f56097g = f10;
        this.f56098h = f11;
    }

    public a(Object obj) {
        this.f56099i = -3987645.8f;
        this.f56100j = -3987645.8f;
        this.f56101k = 784923401;
        this.f56102l = 784923401;
        this.f56103m = Float.MIN_VALUE;
        this.f56104n = Float.MIN_VALUE;
        this.f56105o = null;
        this.f56106p = null;
        this.f56091a = null;
        this.f56092b = obj;
        this.f56093c = obj;
        this.f56094d = null;
        this.f56095e = null;
        this.f56096f = null;
        this.f56097g = Float.MIN_VALUE;
        this.f56098h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f56099i = -3987645.8f;
        this.f56100j = -3987645.8f;
        this.f56101k = 784923401;
        this.f56102l = 784923401;
        this.f56103m = Float.MIN_VALUE;
        this.f56104n = Float.MIN_VALUE;
        this.f56105o = null;
        this.f56106p = null;
        this.f56091a = null;
        this.f56092b = obj;
        this.f56093c = obj2;
        this.f56094d = null;
        this.f56095e = null;
        this.f56096f = null;
        this.f56097g = Float.MIN_VALUE;
        this.f56098h = Float.valueOf(Float.MAX_VALUE);
    }
}
