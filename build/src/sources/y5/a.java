package y5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f53739a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f53740b;

    /* renamed from: c  reason: collision with root package name */
    public Object f53741c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f53742d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f53743e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f53744f;

    /* renamed from: g  reason: collision with root package name */
    public final float f53745g;

    /* renamed from: h  reason: collision with root package name */
    public Float f53746h;

    /* renamed from: i  reason: collision with root package name */
    private float f53747i;

    /* renamed from: j  reason: collision with root package name */
    private float f53748j;

    /* renamed from: k  reason: collision with root package name */
    private int f53749k;

    /* renamed from: l  reason: collision with root package name */
    private int f53750l;

    /* renamed from: m  reason: collision with root package name */
    private float f53751m;

    /* renamed from: n  reason: collision with root package name */
    private float f53752n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f53753o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f53754p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f53747i = -3987645.8f;
        this.f53748j = -3987645.8f;
        this.f53749k = 784923401;
        this.f53750l = 784923401;
        this.f53751m = Float.MIN_VALUE;
        this.f53752n = Float.MIN_VALUE;
        this.f53753o = null;
        this.f53754p = null;
        this.f53739a = iVar;
        this.f53740b = obj;
        this.f53741c = obj2;
        this.f53742d = interpolator;
        this.f53743e = null;
        this.f53744f = null;
        this.f53745g = f10;
        this.f53746h = f11;
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
        if (this.f53739a == null) {
            return 1.0f;
        }
        if (this.f53752n == Float.MIN_VALUE) {
            if (this.f53746h == null) {
                this.f53752n = 1.0f;
            } else {
                this.f53752n = f() + ((this.f53746h.floatValue() - this.f53745g) / this.f53739a.e());
            }
        }
        return this.f53752n;
    }

    public float d() {
        if (this.f53748j == -3987645.8f) {
            this.f53748j = ((Float) this.f53741c).floatValue();
        }
        return this.f53748j;
    }

    public int e() {
        if (this.f53750l == 784923401) {
            this.f53750l = ((Integer) this.f53741c).intValue();
        }
        return this.f53750l;
    }

    public float f() {
        i iVar = this.f53739a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f53751m == Float.MIN_VALUE) {
            this.f53751m = (this.f53745g - iVar.p()) / this.f53739a.e();
        }
        return this.f53751m;
    }

    public float g() {
        if (this.f53747i == -3987645.8f) {
            this.f53747i = ((Float) this.f53740b).floatValue();
        }
        return this.f53747i;
    }

    public int h() {
        if (this.f53749k == 784923401) {
            this.f53749k = ((Integer) this.f53740b).intValue();
        }
        return this.f53749k;
    }

    public boolean i() {
        if (this.f53742d == null && this.f53743e == null && this.f53744f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f53740b + ", endValue=" + this.f53741c + ", startFrame=" + this.f53745g + ", endFrame=" + this.f53746h + ", interpolator=" + this.f53742d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f53747i = -3987645.8f;
        this.f53748j = -3987645.8f;
        this.f53749k = 784923401;
        this.f53750l = 784923401;
        this.f53751m = Float.MIN_VALUE;
        this.f53752n = Float.MIN_VALUE;
        this.f53753o = null;
        this.f53754p = null;
        this.f53739a = iVar;
        this.f53740b = obj;
        this.f53741c = obj2;
        this.f53742d = null;
        this.f53743e = interpolator;
        this.f53744f = interpolator2;
        this.f53745g = f10;
        this.f53746h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f53747i = -3987645.8f;
        this.f53748j = -3987645.8f;
        this.f53749k = 784923401;
        this.f53750l = 784923401;
        this.f53751m = Float.MIN_VALUE;
        this.f53752n = Float.MIN_VALUE;
        this.f53753o = null;
        this.f53754p = null;
        this.f53739a = iVar;
        this.f53740b = obj;
        this.f53741c = obj2;
        this.f53742d = interpolator;
        this.f53743e = interpolator2;
        this.f53744f = interpolator3;
        this.f53745g = f10;
        this.f53746h = f11;
    }

    public a(Object obj) {
        this.f53747i = -3987645.8f;
        this.f53748j = -3987645.8f;
        this.f53749k = 784923401;
        this.f53750l = 784923401;
        this.f53751m = Float.MIN_VALUE;
        this.f53752n = Float.MIN_VALUE;
        this.f53753o = null;
        this.f53754p = null;
        this.f53739a = null;
        this.f53740b = obj;
        this.f53741c = obj;
        this.f53742d = null;
        this.f53743e = null;
        this.f53744f = null;
        this.f53745g = Float.MIN_VALUE;
        this.f53746h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f53747i = -3987645.8f;
        this.f53748j = -3987645.8f;
        this.f53749k = 784923401;
        this.f53750l = 784923401;
        this.f53751m = Float.MIN_VALUE;
        this.f53752n = Float.MIN_VALUE;
        this.f53753o = null;
        this.f53754p = null;
        this.f53739a = null;
        this.f53740b = obj;
        this.f53741c = obj2;
        this.f53742d = null;
        this.f53743e = null;
        this.f53744f = null;
        this.f53745g = Float.MIN_VALUE;
        this.f53746h = Float.valueOf(Float.MAX_VALUE);
    }
}
