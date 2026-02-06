package y5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f54979a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f54980b;

    /* renamed from: c  reason: collision with root package name */
    public Object f54981c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f54982d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f54983e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f54984f;

    /* renamed from: g  reason: collision with root package name */
    public final float f54985g;

    /* renamed from: h  reason: collision with root package name */
    public Float f54986h;

    /* renamed from: i  reason: collision with root package name */
    private float f54987i;

    /* renamed from: j  reason: collision with root package name */
    private float f54988j;

    /* renamed from: k  reason: collision with root package name */
    private int f54989k;

    /* renamed from: l  reason: collision with root package name */
    private int f54990l;

    /* renamed from: m  reason: collision with root package name */
    private float f54991m;

    /* renamed from: n  reason: collision with root package name */
    private float f54992n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f54993o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f54994p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f54987i = -3987645.8f;
        this.f54988j = -3987645.8f;
        this.f54989k = 784923401;
        this.f54990l = 784923401;
        this.f54991m = Float.MIN_VALUE;
        this.f54992n = Float.MIN_VALUE;
        this.f54993o = null;
        this.f54994p = null;
        this.f54979a = iVar;
        this.f54980b = obj;
        this.f54981c = obj2;
        this.f54982d = interpolator;
        this.f54983e = null;
        this.f54984f = null;
        this.f54985g = f10;
        this.f54986h = f11;
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
        if (this.f54979a == null) {
            return 1.0f;
        }
        if (this.f54992n == Float.MIN_VALUE) {
            if (this.f54986h == null) {
                this.f54992n = 1.0f;
            } else {
                this.f54992n = f() + ((this.f54986h.floatValue() - this.f54985g) / this.f54979a.e());
            }
        }
        return this.f54992n;
    }

    public float d() {
        if (this.f54988j == -3987645.8f) {
            this.f54988j = ((Float) this.f54981c).floatValue();
        }
        return this.f54988j;
    }

    public int e() {
        if (this.f54990l == 784923401) {
            this.f54990l = ((Integer) this.f54981c).intValue();
        }
        return this.f54990l;
    }

    public float f() {
        i iVar = this.f54979a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f54991m == Float.MIN_VALUE) {
            this.f54991m = (this.f54985g - iVar.p()) / this.f54979a.e();
        }
        return this.f54991m;
    }

    public float g() {
        if (this.f54987i == -3987645.8f) {
            this.f54987i = ((Float) this.f54980b).floatValue();
        }
        return this.f54987i;
    }

    public int h() {
        if (this.f54989k == 784923401) {
            this.f54989k = ((Integer) this.f54980b).intValue();
        }
        return this.f54989k;
    }

    public boolean i() {
        if (this.f54982d == null && this.f54983e == null && this.f54984f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f54980b + ", endValue=" + this.f54981c + ", startFrame=" + this.f54985g + ", endFrame=" + this.f54986h + ", interpolator=" + this.f54982d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f54987i = -3987645.8f;
        this.f54988j = -3987645.8f;
        this.f54989k = 784923401;
        this.f54990l = 784923401;
        this.f54991m = Float.MIN_VALUE;
        this.f54992n = Float.MIN_VALUE;
        this.f54993o = null;
        this.f54994p = null;
        this.f54979a = iVar;
        this.f54980b = obj;
        this.f54981c = obj2;
        this.f54982d = null;
        this.f54983e = interpolator;
        this.f54984f = interpolator2;
        this.f54985g = f10;
        this.f54986h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f54987i = -3987645.8f;
        this.f54988j = -3987645.8f;
        this.f54989k = 784923401;
        this.f54990l = 784923401;
        this.f54991m = Float.MIN_VALUE;
        this.f54992n = Float.MIN_VALUE;
        this.f54993o = null;
        this.f54994p = null;
        this.f54979a = iVar;
        this.f54980b = obj;
        this.f54981c = obj2;
        this.f54982d = interpolator;
        this.f54983e = interpolator2;
        this.f54984f = interpolator3;
        this.f54985g = f10;
        this.f54986h = f11;
    }

    public a(Object obj) {
        this.f54987i = -3987645.8f;
        this.f54988j = -3987645.8f;
        this.f54989k = 784923401;
        this.f54990l = 784923401;
        this.f54991m = Float.MIN_VALUE;
        this.f54992n = Float.MIN_VALUE;
        this.f54993o = null;
        this.f54994p = null;
        this.f54979a = null;
        this.f54980b = obj;
        this.f54981c = obj;
        this.f54982d = null;
        this.f54983e = null;
        this.f54984f = null;
        this.f54985g = Float.MIN_VALUE;
        this.f54986h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f54987i = -3987645.8f;
        this.f54988j = -3987645.8f;
        this.f54989k = 784923401;
        this.f54990l = 784923401;
        this.f54991m = Float.MIN_VALUE;
        this.f54992n = Float.MIN_VALUE;
        this.f54993o = null;
        this.f54994p = null;
        this.f54979a = null;
        this.f54980b = obj;
        this.f54981c = obj2;
        this.f54982d = null;
        this.f54983e = null;
        this.f54984f = null;
        this.f54985g = Float.MIN_VALUE;
        this.f54986h = Float.valueOf(Float.MAX_VALUE);
    }
}
