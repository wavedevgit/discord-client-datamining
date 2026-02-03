package y5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f53742a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f53743b;

    /* renamed from: c  reason: collision with root package name */
    public Object f53744c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f53745d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f53746e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f53747f;

    /* renamed from: g  reason: collision with root package name */
    public final float f53748g;

    /* renamed from: h  reason: collision with root package name */
    public Float f53749h;

    /* renamed from: i  reason: collision with root package name */
    private float f53750i;

    /* renamed from: j  reason: collision with root package name */
    private float f53751j;

    /* renamed from: k  reason: collision with root package name */
    private int f53752k;

    /* renamed from: l  reason: collision with root package name */
    private int f53753l;

    /* renamed from: m  reason: collision with root package name */
    private float f53754m;

    /* renamed from: n  reason: collision with root package name */
    private float f53755n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f53756o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f53757p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f53750i = -3987645.8f;
        this.f53751j = -3987645.8f;
        this.f53752k = 784923401;
        this.f53753l = 784923401;
        this.f53754m = Float.MIN_VALUE;
        this.f53755n = Float.MIN_VALUE;
        this.f53756o = null;
        this.f53757p = null;
        this.f53742a = iVar;
        this.f53743b = obj;
        this.f53744c = obj2;
        this.f53745d = interpolator;
        this.f53746e = null;
        this.f53747f = null;
        this.f53748g = f10;
        this.f53749h = f11;
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
        if (this.f53742a == null) {
            return 1.0f;
        }
        if (this.f53755n == Float.MIN_VALUE) {
            if (this.f53749h == null) {
                this.f53755n = 1.0f;
            } else {
                this.f53755n = f() + ((this.f53749h.floatValue() - this.f53748g) / this.f53742a.e());
            }
        }
        return this.f53755n;
    }

    public float d() {
        if (this.f53751j == -3987645.8f) {
            this.f53751j = ((Float) this.f53744c).floatValue();
        }
        return this.f53751j;
    }

    public int e() {
        if (this.f53753l == 784923401) {
            this.f53753l = ((Integer) this.f53744c).intValue();
        }
        return this.f53753l;
    }

    public float f() {
        i iVar = this.f53742a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f53754m == Float.MIN_VALUE) {
            this.f53754m = (this.f53748g - iVar.p()) / this.f53742a.e();
        }
        return this.f53754m;
    }

    public float g() {
        if (this.f53750i == -3987645.8f) {
            this.f53750i = ((Float) this.f53743b).floatValue();
        }
        return this.f53750i;
    }

    public int h() {
        if (this.f53752k == 784923401) {
            this.f53752k = ((Integer) this.f53743b).intValue();
        }
        return this.f53752k;
    }

    public boolean i() {
        if (this.f53745d == null && this.f53746e == null && this.f53747f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f53743b + ", endValue=" + this.f53744c + ", startFrame=" + this.f53748g + ", endFrame=" + this.f53749h + ", interpolator=" + this.f53745d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f53750i = -3987645.8f;
        this.f53751j = -3987645.8f;
        this.f53752k = 784923401;
        this.f53753l = 784923401;
        this.f53754m = Float.MIN_VALUE;
        this.f53755n = Float.MIN_VALUE;
        this.f53756o = null;
        this.f53757p = null;
        this.f53742a = iVar;
        this.f53743b = obj;
        this.f53744c = obj2;
        this.f53745d = null;
        this.f53746e = interpolator;
        this.f53747f = interpolator2;
        this.f53748g = f10;
        this.f53749h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f53750i = -3987645.8f;
        this.f53751j = -3987645.8f;
        this.f53752k = 784923401;
        this.f53753l = 784923401;
        this.f53754m = Float.MIN_VALUE;
        this.f53755n = Float.MIN_VALUE;
        this.f53756o = null;
        this.f53757p = null;
        this.f53742a = iVar;
        this.f53743b = obj;
        this.f53744c = obj2;
        this.f53745d = interpolator;
        this.f53746e = interpolator2;
        this.f53747f = interpolator3;
        this.f53748g = f10;
        this.f53749h = f11;
    }

    public a(Object obj) {
        this.f53750i = -3987645.8f;
        this.f53751j = -3987645.8f;
        this.f53752k = 784923401;
        this.f53753l = 784923401;
        this.f53754m = Float.MIN_VALUE;
        this.f53755n = Float.MIN_VALUE;
        this.f53756o = null;
        this.f53757p = null;
        this.f53742a = null;
        this.f53743b = obj;
        this.f53744c = obj;
        this.f53745d = null;
        this.f53746e = null;
        this.f53747f = null;
        this.f53748g = Float.MIN_VALUE;
        this.f53749h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f53750i = -3987645.8f;
        this.f53751j = -3987645.8f;
        this.f53752k = 784923401;
        this.f53753l = 784923401;
        this.f53754m = Float.MIN_VALUE;
        this.f53755n = Float.MIN_VALUE;
        this.f53756o = null;
        this.f53757p = null;
        this.f53742a = null;
        this.f53743b = obj;
        this.f53744c = obj2;
        this.f53745d = null;
        this.f53746e = null;
        this.f53747f = null;
        this.f53748g = Float.MIN_VALUE;
        this.f53749h = Float.valueOf(Float.MAX_VALUE);
    }
}
