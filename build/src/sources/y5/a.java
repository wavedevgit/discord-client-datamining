package y5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f54435a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f54436b;

    /* renamed from: c  reason: collision with root package name */
    public Object f54437c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f54438d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f54439e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f54440f;

    /* renamed from: g  reason: collision with root package name */
    public final float f54441g;

    /* renamed from: h  reason: collision with root package name */
    public Float f54442h;

    /* renamed from: i  reason: collision with root package name */
    private float f54443i;

    /* renamed from: j  reason: collision with root package name */
    private float f54444j;

    /* renamed from: k  reason: collision with root package name */
    private int f54445k;

    /* renamed from: l  reason: collision with root package name */
    private int f54446l;

    /* renamed from: m  reason: collision with root package name */
    private float f54447m;

    /* renamed from: n  reason: collision with root package name */
    private float f54448n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f54449o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f54450p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f54443i = -3987645.8f;
        this.f54444j = -3987645.8f;
        this.f54445k = 784923401;
        this.f54446l = 784923401;
        this.f54447m = Float.MIN_VALUE;
        this.f54448n = Float.MIN_VALUE;
        this.f54449o = null;
        this.f54450p = null;
        this.f54435a = iVar;
        this.f54436b = obj;
        this.f54437c = obj2;
        this.f54438d = interpolator;
        this.f54439e = null;
        this.f54440f = null;
        this.f54441g = f10;
        this.f54442h = f11;
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
        if (this.f54435a == null) {
            return 1.0f;
        }
        if (this.f54448n == Float.MIN_VALUE) {
            if (this.f54442h == null) {
                this.f54448n = 1.0f;
            } else {
                this.f54448n = f() + ((this.f54442h.floatValue() - this.f54441g) / this.f54435a.e());
            }
        }
        return this.f54448n;
    }

    public float d() {
        if (this.f54444j == -3987645.8f) {
            this.f54444j = ((Float) this.f54437c).floatValue();
        }
        return this.f54444j;
    }

    public int e() {
        if (this.f54446l == 784923401) {
            this.f54446l = ((Integer) this.f54437c).intValue();
        }
        return this.f54446l;
    }

    public float f() {
        i iVar = this.f54435a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f54447m == Float.MIN_VALUE) {
            this.f54447m = (this.f54441g - iVar.p()) / this.f54435a.e();
        }
        return this.f54447m;
    }

    public float g() {
        if (this.f54443i == -3987645.8f) {
            this.f54443i = ((Float) this.f54436b).floatValue();
        }
        return this.f54443i;
    }

    public int h() {
        if (this.f54445k == 784923401) {
            this.f54445k = ((Integer) this.f54436b).intValue();
        }
        return this.f54445k;
    }

    public boolean i() {
        if (this.f54438d == null && this.f54439e == null && this.f54440f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f54436b + ", endValue=" + this.f54437c + ", startFrame=" + this.f54441g + ", endFrame=" + this.f54442h + ", interpolator=" + this.f54438d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f54443i = -3987645.8f;
        this.f54444j = -3987645.8f;
        this.f54445k = 784923401;
        this.f54446l = 784923401;
        this.f54447m = Float.MIN_VALUE;
        this.f54448n = Float.MIN_VALUE;
        this.f54449o = null;
        this.f54450p = null;
        this.f54435a = iVar;
        this.f54436b = obj;
        this.f54437c = obj2;
        this.f54438d = null;
        this.f54439e = interpolator;
        this.f54440f = interpolator2;
        this.f54441g = f10;
        this.f54442h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f54443i = -3987645.8f;
        this.f54444j = -3987645.8f;
        this.f54445k = 784923401;
        this.f54446l = 784923401;
        this.f54447m = Float.MIN_VALUE;
        this.f54448n = Float.MIN_VALUE;
        this.f54449o = null;
        this.f54450p = null;
        this.f54435a = iVar;
        this.f54436b = obj;
        this.f54437c = obj2;
        this.f54438d = interpolator;
        this.f54439e = interpolator2;
        this.f54440f = interpolator3;
        this.f54441g = f10;
        this.f54442h = f11;
    }

    public a(Object obj) {
        this.f54443i = -3987645.8f;
        this.f54444j = -3987645.8f;
        this.f54445k = 784923401;
        this.f54446l = 784923401;
        this.f54447m = Float.MIN_VALUE;
        this.f54448n = Float.MIN_VALUE;
        this.f54449o = null;
        this.f54450p = null;
        this.f54435a = null;
        this.f54436b = obj;
        this.f54437c = obj;
        this.f54438d = null;
        this.f54439e = null;
        this.f54440f = null;
        this.f54441g = Float.MIN_VALUE;
        this.f54442h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f54443i = -3987645.8f;
        this.f54444j = -3987645.8f;
        this.f54445k = 784923401;
        this.f54446l = 784923401;
        this.f54447m = Float.MIN_VALUE;
        this.f54448n = Float.MIN_VALUE;
        this.f54449o = null;
        this.f54450p = null;
        this.f54435a = null;
        this.f54436b = obj;
        this.f54437c = obj2;
        this.f54438d = null;
        this.f54439e = null;
        this.f54440f = null;
        this.f54441g = Float.MIN_VALUE;
        this.f54442h = Float.valueOf(Float.MAX_VALUE);
    }
}
