package z5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f56052a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f56053b;

    /* renamed from: c  reason: collision with root package name */
    public Object f56054c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f56055d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f56056e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f56057f;

    /* renamed from: g  reason: collision with root package name */
    public final float f56058g;

    /* renamed from: h  reason: collision with root package name */
    public Float f56059h;

    /* renamed from: i  reason: collision with root package name */
    private float f56060i;

    /* renamed from: j  reason: collision with root package name */
    private float f56061j;

    /* renamed from: k  reason: collision with root package name */
    private int f56062k;

    /* renamed from: l  reason: collision with root package name */
    private int f56063l;

    /* renamed from: m  reason: collision with root package name */
    private float f56064m;

    /* renamed from: n  reason: collision with root package name */
    private float f56065n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f56066o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f56067p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f56060i = -3987645.8f;
        this.f56061j = -3987645.8f;
        this.f56062k = 784923401;
        this.f56063l = 784923401;
        this.f56064m = Float.MIN_VALUE;
        this.f56065n = Float.MIN_VALUE;
        this.f56066o = null;
        this.f56067p = null;
        this.f56052a = iVar;
        this.f56053b = obj;
        this.f56054c = obj2;
        this.f56055d = interpolator;
        this.f56056e = null;
        this.f56057f = null;
        this.f56058g = f10;
        this.f56059h = f11;
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
        if (this.f56052a == null) {
            return 1.0f;
        }
        if (this.f56065n == Float.MIN_VALUE) {
            if (this.f56059h == null) {
                this.f56065n = 1.0f;
            } else {
                this.f56065n = f() + ((this.f56059h.floatValue() - this.f56058g) / this.f56052a.e());
            }
        }
        return this.f56065n;
    }

    public float d() {
        if (this.f56061j == -3987645.8f) {
            this.f56061j = ((Float) this.f56054c).floatValue();
        }
        return this.f56061j;
    }

    public int e() {
        if (this.f56063l == 784923401) {
            this.f56063l = ((Integer) this.f56054c).intValue();
        }
        return this.f56063l;
    }

    public float f() {
        i iVar = this.f56052a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f56064m == Float.MIN_VALUE) {
            this.f56064m = (this.f56058g - iVar.p()) / this.f56052a.e();
        }
        return this.f56064m;
    }

    public float g() {
        if (this.f56060i == -3987645.8f) {
            this.f56060i = ((Float) this.f56053b).floatValue();
        }
        return this.f56060i;
    }

    public int h() {
        if (this.f56062k == 784923401) {
            this.f56062k = ((Integer) this.f56053b).intValue();
        }
        return this.f56062k;
    }

    public boolean i() {
        if (this.f56055d == null && this.f56056e == null && this.f56057f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f56053b + ", endValue=" + this.f56054c + ", startFrame=" + this.f56058g + ", endFrame=" + this.f56059h + ", interpolator=" + this.f56055d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f56060i = -3987645.8f;
        this.f56061j = -3987645.8f;
        this.f56062k = 784923401;
        this.f56063l = 784923401;
        this.f56064m = Float.MIN_VALUE;
        this.f56065n = Float.MIN_VALUE;
        this.f56066o = null;
        this.f56067p = null;
        this.f56052a = iVar;
        this.f56053b = obj;
        this.f56054c = obj2;
        this.f56055d = null;
        this.f56056e = interpolator;
        this.f56057f = interpolator2;
        this.f56058g = f10;
        this.f56059h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f56060i = -3987645.8f;
        this.f56061j = -3987645.8f;
        this.f56062k = 784923401;
        this.f56063l = 784923401;
        this.f56064m = Float.MIN_VALUE;
        this.f56065n = Float.MIN_VALUE;
        this.f56066o = null;
        this.f56067p = null;
        this.f56052a = iVar;
        this.f56053b = obj;
        this.f56054c = obj2;
        this.f56055d = interpolator;
        this.f56056e = interpolator2;
        this.f56057f = interpolator3;
        this.f56058g = f10;
        this.f56059h = f11;
    }

    public a(Object obj) {
        this.f56060i = -3987645.8f;
        this.f56061j = -3987645.8f;
        this.f56062k = 784923401;
        this.f56063l = 784923401;
        this.f56064m = Float.MIN_VALUE;
        this.f56065n = Float.MIN_VALUE;
        this.f56066o = null;
        this.f56067p = null;
        this.f56052a = null;
        this.f56053b = obj;
        this.f56054c = obj;
        this.f56055d = null;
        this.f56056e = null;
        this.f56057f = null;
        this.f56058g = Float.MIN_VALUE;
        this.f56059h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f56060i = -3987645.8f;
        this.f56061j = -3987645.8f;
        this.f56062k = 784923401;
        this.f56063l = 784923401;
        this.f56064m = Float.MIN_VALUE;
        this.f56065n = Float.MIN_VALUE;
        this.f56066o = null;
        this.f56067p = null;
        this.f56052a = null;
        this.f56053b = obj;
        this.f56054c = obj2;
        this.f56055d = null;
        this.f56056e = null;
        this.f56057f = null;
        this.f56058g = Float.MIN_VALUE;
        this.f56059h = Float.valueOf(Float.MAX_VALUE);
    }
}
