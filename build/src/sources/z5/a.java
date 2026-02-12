package z5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f56092a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f56093b;

    /* renamed from: c  reason: collision with root package name */
    public Object f56094c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f56095d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f56096e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f56097f;

    /* renamed from: g  reason: collision with root package name */
    public final float f56098g;

    /* renamed from: h  reason: collision with root package name */
    public Float f56099h;

    /* renamed from: i  reason: collision with root package name */
    private float f56100i;

    /* renamed from: j  reason: collision with root package name */
    private float f56101j;

    /* renamed from: k  reason: collision with root package name */
    private int f56102k;

    /* renamed from: l  reason: collision with root package name */
    private int f56103l;

    /* renamed from: m  reason: collision with root package name */
    private float f56104m;

    /* renamed from: n  reason: collision with root package name */
    private float f56105n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f56106o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f56107p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f56100i = -3987645.8f;
        this.f56101j = -3987645.8f;
        this.f56102k = 784923401;
        this.f56103l = 784923401;
        this.f56104m = Float.MIN_VALUE;
        this.f56105n = Float.MIN_VALUE;
        this.f56106o = null;
        this.f56107p = null;
        this.f56092a = iVar;
        this.f56093b = obj;
        this.f56094c = obj2;
        this.f56095d = interpolator;
        this.f56096e = null;
        this.f56097f = null;
        this.f56098g = f10;
        this.f56099h = f11;
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
        if (this.f56092a == null) {
            return 1.0f;
        }
        if (this.f56105n == Float.MIN_VALUE) {
            if (this.f56099h == null) {
                this.f56105n = 1.0f;
            } else {
                this.f56105n = f() + ((this.f56099h.floatValue() - this.f56098g) / this.f56092a.e());
            }
        }
        return this.f56105n;
    }

    public float d() {
        if (this.f56101j == -3987645.8f) {
            this.f56101j = ((Float) this.f56094c).floatValue();
        }
        return this.f56101j;
    }

    public int e() {
        if (this.f56103l == 784923401) {
            this.f56103l = ((Integer) this.f56094c).intValue();
        }
        return this.f56103l;
    }

    public float f() {
        i iVar = this.f56092a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f56104m == Float.MIN_VALUE) {
            this.f56104m = (this.f56098g - iVar.p()) / this.f56092a.e();
        }
        return this.f56104m;
    }

    public float g() {
        if (this.f56100i == -3987645.8f) {
            this.f56100i = ((Float) this.f56093b).floatValue();
        }
        return this.f56100i;
    }

    public int h() {
        if (this.f56102k == 784923401) {
            this.f56102k = ((Integer) this.f56093b).intValue();
        }
        return this.f56102k;
    }

    public boolean i() {
        if (this.f56095d == null && this.f56096e == null && this.f56097f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f56093b + ", endValue=" + this.f56094c + ", startFrame=" + this.f56098g + ", endFrame=" + this.f56099h + ", interpolator=" + this.f56095d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f56100i = -3987645.8f;
        this.f56101j = -3987645.8f;
        this.f56102k = 784923401;
        this.f56103l = 784923401;
        this.f56104m = Float.MIN_VALUE;
        this.f56105n = Float.MIN_VALUE;
        this.f56106o = null;
        this.f56107p = null;
        this.f56092a = iVar;
        this.f56093b = obj;
        this.f56094c = obj2;
        this.f56095d = null;
        this.f56096e = interpolator;
        this.f56097f = interpolator2;
        this.f56098g = f10;
        this.f56099h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f56100i = -3987645.8f;
        this.f56101j = -3987645.8f;
        this.f56102k = 784923401;
        this.f56103l = 784923401;
        this.f56104m = Float.MIN_VALUE;
        this.f56105n = Float.MIN_VALUE;
        this.f56106o = null;
        this.f56107p = null;
        this.f56092a = iVar;
        this.f56093b = obj;
        this.f56094c = obj2;
        this.f56095d = interpolator;
        this.f56096e = interpolator2;
        this.f56097f = interpolator3;
        this.f56098g = f10;
        this.f56099h = f11;
    }

    public a(Object obj) {
        this.f56100i = -3987645.8f;
        this.f56101j = -3987645.8f;
        this.f56102k = 784923401;
        this.f56103l = 784923401;
        this.f56104m = Float.MIN_VALUE;
        this.f56105n = Float.MIN_VALUE;
        this.f56106o = null;
        this.f56107p = null;
        this.f56092a = null;
        this.f56093b = obj;
        this.f56094c = obj;
        this.f56095d = null;
        this.f56096e = null;
        this.f56097f = null;
        this.f56098g = Float.MIN_VALUE;
        this.f56099h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f56100i = -3987645.8f;
        this.f56101j = -3987645.8f;
        this.f56102k = 784923401;
        this.f56103l = 784923401;
        this.f56104m = Float.MIN_VALUE;
        this.f56105n = Float.MIN_VALUE;
        this.f56106o = null;
        this.f56107p = null;
        this.f56092a = null;
        this.f56093b = obj;
        this.f56094c = obj2;
        this.f56095d = null;
        this.f56096e = null;
        this.f56097f = null;
        this.f56098g = Float.MIN_VALUE;
        this.f56099h = Float.valueOf(Float.MAX_VALUE);
    }
}
