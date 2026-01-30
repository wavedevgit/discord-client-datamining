package y5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f54009a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f54010b;

    /* renamed from: c  reason: collision with root package name */
    public Object f54011c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f54012d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f54013e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f54014f;

    /* renamed from: g  reason: collision with root package name */
    public final float f54015g;

    /* renamed from: h  reason: collision with root package name */
    public Float f54016h;

    /* renamed from: i  reason: collision with root package name */
    private float f54017i;

    /* renamed from: j  reason: collision with root package name */
    private float f54018j;

    /* renamed from: k  reason: collision with root package name */
    private int f54019k;

    /* renamed from: l  reason: collision with root package name */
    private int f54020l;

    /* renamed from: m  reason: collision with root package name */
    private float f54021m;

    /* renamed from: n  reason: collision with root package name */
    private float f54022n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f54023o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f54024p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f54017i = -3987645.8f;
        this.f54018j = -3987645.8f;
        this.f54019k = 784923401;
        this.f54020l = 784923401;
        this.f54021m = Float.MIN_VALUE;
        this.f54022n = Float.MIN_VALUE;
        this.f54023o = null;
        this.f54024p = null;
        this.f54009a = iVar;
        this.f54010b = obj;
        this.f54011c = obj2;
        this.f54012d = interpolator;
        this.f54013e = null;
        this.f54014f = null;
        this.f54015g = f10;
        this.f54016h = f11;
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
        if (this.f54009a == null) {
            return 1.0f;
        }
        if (this.f54022n == Float.MIN_VALUE) {
            if (this.f54016h == null) {
                this.f54022n = 1.0f;
            } else {
                this.f54022n = f() + ((this.f54016h.floatValue() - this.f54015g) / this.f54009a.e());
            }
        }
        return this.f54022n;
    }

    public float d() {
        if (this.f54018j == -3987645.8f) {
            this.f54018j = ((Float) this.f54011c).floatValue();
        }
        return this.f54018j;
    }

    public int e() {
        if (this.f54020l == 784923401) {
            this.f54020l = ((Integer) this.f54011c).intValue();
        }
        return this.f54020l;
    }

    public float f() {
        i iVar = this.f54009a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f54021m == Float.MIN_VALUE) {
            this.f54021m = (this.f54015g - iVar.p()) / this.f54009a.e();
        }
        return this.f54021m;
    }

    public float g() {
        if (this.f54017i == -3987645.8f) {
            this.f54017i = ((Float) this.f54010b).floatValue();
        }
        return this.f54017i;
    }

    public int h() {
        if (this.f54019k == 784923401) {
            this.f54019k = ((Integer) this.f54010b).intValue();
        }
        return this.f54019k;
    }

    public boolean i() {
        if (this.f54012d == null && this.f54013e == null && this.f54014f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f54010b + ", endValue=" + this.f54011c + ", startFrame=" + this.f54015g + ", endFrame=" + this.f54016h + ", interpolator=" + this.f54012d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f54017i = -3987645.8f;
        this.f54018j = -3987645.8f;
        this.f54019k = 784923401;
        this.f54020l = 784923401;
        this.f54021m = Float.MIN_VALUE;
        this.f54022n = Float.MIN_VALUE;
        this.f54023o = null;
        this.f54024p = null;
        this.f54009a = iVar;
        this.f54010b = obj;
        this.f54011c = obj2;
        this.f54012d = null;
        this.f54013e = interpolator;
        this.f54014f = interpolator2;
        this.f54015g = f10;
        this.f54016h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f54017i = -3987645.8f;
        this.f54018j = -3987645.8f;
        this.f54019k = 784923401;
        this.f54020l = 784923401;
        this.f54021m = Float.MIN_VALUE;
        this.f54022n = Float.MIN_VALUE;
        this.f54023o = null;
        this.f54024p = null;
        this.f54009a = iVar;
        this.f54010b = obj;
        this.f54011c = obj2;
        this.f54012d = interpolator;
        this.f54013e = interpolator2;
        this.f54014f = interpolator3;
        this.f54015g = f10;
        this.f54016h = f11;
    }

    public a(Object obj) {
        this.f54017i = -3987645.8f;
        this.f54018j = -3987645.8f;
        this.f54019k = 784923401;
        this.f54020l = 784923401;
        this.f54021m = Float.MIN_VALUE;
        this.f54022n = Float.MIN_VALUE;
        this.f54023o = null;
        this.f54024p = null;
        this.f54009a = null;
        this.f54010b = obj;
        this.f54011c = obj;
        this.f54012d = null;
        this.f54013e = null;
        this.f54014f = null;
        this.f54015g = Float.MIN_VALUE;
        this.f54016h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f54017i = -3987645.8f;
        this.f54018j = -3987645.8f;
        this.f54019k = 784923401;
        this.f54020l = 784923401;
        this.f54021m = Float.MIN_VALUE;
        this.f54022n = Float.MIN_VALUE;
        this.f54023o = null;
        this.f54024p = null;
        this.f54009a = null;
        this.f54010b = obj;
        this.f54011c = obj2;
        this.f54012d = null;
        this.f54013e = null;
        this.f54014f = null;
        this.f54015g = Float.MIN_VALUE;
        this.f54016h = Float.valueOf(Float.MAX_VALUE);
    }
}
