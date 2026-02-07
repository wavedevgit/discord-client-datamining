package y5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f55027a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f55028b;

    /* renamed from: c  reason: collision with root package name */
    public Object f55029c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f55030d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f55031e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f55032f;

    /* renamed from: g  reason: collision with root package name */
    public final float f55033g;

    /* renamed from: h  reason: collision with root package name */
    public Float f55034h;

    /* renamed from: i  reason: collision with root package name */
    private float f55035i;

    /* renamed from: j  reason: collision with root package name */
    private float f55036j;

    /* renamed from: k  reason: collision with root package name */
    private int f55037k;

    /* renamed from: l  reason: collision with root package name */
    private int f55038l;

    /* renamed from: m  reason: collision with root package name */
    private float f55039m;

    /* renamed from: n  reason: collision with root package name */
    private float f55040n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f55041o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f55042p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f55035i = -3987645.8f;
        this.f55036j = -3987645.8f;
        this.f55037k = 784923401;
        this.f55038l = 784923401;
        this.f55039m = Float.MIN_VALUE;
        this.f55040n = Float.MIN_VALUE;
        this.f55041o = null;
        this.f55042p = null;
        this.f55027a = iVar;
        this.f55028b = obj;
        this.f55029c = obj2;
        this.f55030d = interpolator;
        this.f55031e = null;
        this.f55032f = null;
        this.f55033g = f10;
        this.f55034h = f11;
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
        if (this.f55027a == null) {
            return 1.0f;
        }
        if (this.f55040n == Float.MIN_VALUE) {
            if (this.f55034h == null) {
                this.f55040n = 1.0f;
            } else {
                this.f55040n = f() + ((this.f55034h.floatValue() - this.f55033g) / this.f55027a.e());
            }
        }
        return this.f55040n;
    }

    public float d() {
        if (this.f55036j == -3987645.8f) {
            this.f55036j = ((Float) this.f55029c).floatValue();
        }
        return this.f55036j;
    }

    public int e() {
        if (this.f55038l == 784923401) {
            this.f55038l = ((Integer) this.f55029c).intValue();
        }
        return this.f55038l;
    }

    public float f() {
        i iVar = this.f55027a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f55039m == Float.MIN_VALUE) {
            this.f55039m = (this.f55033g - iVar.p()) / this.f55027a.e();
        }
        return this.f55039m;
    }

    public float g() {
        if (this.f55035i == -3987645.8f) {
            this.f55035i = ((Float) this.f55028b).floatValue();
        }
        return this.f55035i;
    }

    public int h() {
        if (this.f55037k == 784923401) {
            this.f55037k = ((Integer) this.f55028b).intValue();
        }
        return this.f55037k;
    }

    public boolean i() {
        if (this.f55030d == null && this.f55031e == null && this.f55032f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f55028b + ", endValue=" + this.f55029c + ", startFrame=" + this.f55033g + ", endFrame=" + this.f55034h + ", interpolator=" + this.f55030d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f55035i = -3987645.8f;
        this.f55036j = -3987645.8f;
        this.f55037k = 784923401;
        this.f55038l = 784923401;
        this.f55039m = Float.MIN_VALUE;
        this.f55040n = Float.MIN_VALUE;
        this.f55041o = null;
        this.f55042p = null;
        this.f55027a = iVar;
        this.f55028b = obj;
        this.f55029c = obj2;
        this.f55030d = null;
        this.f55031e = interpolator;
        this.f55032f = interpolator2;
        this.f55033g = f10;
        this.f55034h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f55035i = -3987645.8f;
        this.f55036j = -3987645.8f;
        this.f55037k = 784923401;
        this.f55038l = 784923401;
        this.f55039m = Float.MIN_VALUE;
        this.f55040n = Float.MIN_VALUE;
        this.f55041o = null;
        this.f55042p = null;
        this.f55027a = iVar;
        this.f55028b = obj;
        this.f55029c = obj2;
        this.f55030d = interpolator;
        this.f55031e = interpolator2;
        this.f55032f = interpolator3;
        this.f55033g = f10;
        this.f55034h = f11;
    }

    public a(Object obj) {
        this.f55035i = -3987645.8f;
        this.f55036j = -3987645.8f;
        this.f55037k = 784923401;
        this.f55038l = 784923401;
        this.f55039m = Float.MIN_VALUE;
        this.f55040n = Float.MIN_VALUE;
        this.f55041o = null;
        this.f55042p = null;
        this.f55027a = null;
        this.f55028b = obj;
        this.f55029c = obj;
        this.f55030d = null;
        this.f55031e = null;
        this.f55032f = null;
        this.f55033g = Float.MIN_VALUE;
        this.f55034h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f55035i = -3987645.8f;
        this.f55036j = -3987645.8f;
        this.f55037k = 784923401;
        this.f55038l = 784923401;
        this.f55039m = Float.MIN_VALUE;
        this.f55040n = Float.MIN_VALUE;
        this.f55041o = null;
        this.f55042p = null;
        this.f55027a = null;
        this.f55028b = obj;
        this.f55029c = obj2;
        this.f55030d = null;
        this.f55031e = null;
        this.f55032f = null;
        this.f55033g = Float.MIN_VALUE;
        this.f55034h = Float.valueOf(Float.MAX_VALUE);
    }
}
