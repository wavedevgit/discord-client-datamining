package z5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f56660a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f56661b;

    /* renamed from: c  reason: collision with root package name */
    public Object f56662c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f56663d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f56664e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f56665f;

    /* renamed from: g  reason: collision with root package name */
    public final float f56666g;

    /* renamed from: h  reason: collision with root package name */
    public Float f56667h;

    /* renamed from: i  reason: collision with root package name */
    private float f56668i;

    /* renamed from: j  reason: collision with root package name */
    private float f56669j;

    /* renamed from: k  reason: collision with root package name */
    private int f56670k;

    /* renamed from: l  reason: collision with root package name */
    private int f56671l;

    /* renamed from: m  reason: collision with root package name */
    private float f56672m;

    /* renamed from: n  reason: collision with root package name */
    private float f56673n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f56674o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f56675p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f56668i = -3987645.8f;
        this.f56669j = -3987645.8f;
        this.f56670k = 784923401;
        this.f56671l = 784923401;
        this.f56672m = Float.MIN_VALUE;
        this.f56673n = Float.MIN_VALUE;
        this.f56674o = null;
        this.f56675p = null;
        this.f56660a = iVar;
        this.f56661b = obj;
        this.f56662c = obj2;
        this.f56663d = interpolator;
        this.f56664e = null;
        this.f56665f = null;
        this.f56666g = f10;
        this.f56667h = f11;
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
        if (this.f56660a == null) {
            return 1.0f;
        }
        if (this.f56673n == Float.MIN_VALUE) {
            if (this.f56667h == null) {
                this.f56673n = 1.0f;
            } else {
                this.f56673n = f() + ((this.f56667h.floatValue() - this.f56666g) / this.f56660a.e());
            }
        }
        return this.f56673n;
    }

    public float d() {
        if (this.f56669j == -3987645.8f) {
            this.f56669j = ((Float) this.f56662c).floatValue();
        }
        return this.f56669j;
    }

    public int e() {
        if (this.f56671l == 784923401) {
            this.f56671l = ((Integer) this.f56662c).intValue();
        }
        return this.f56671l;
    }

    public float f() {
        i iVar = this.f56660a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f56672m == Float.MIN_VALUE) {
            this.f56672m = (this.f56666g - iVar.p()) / this.f56660a.e();
        }
        return this.f56672m;
    }

    public float g() {
        if (this.f56668i == -3987645.8f) {
            this.f56668i = ((Float) this.f56661b).floatValue();
        }
        return this.f56668i;
    }

    public int h() {
        if (this.f56670k == 784923401) {
            this.f56670k = ((Integer) this.f56661b).intValue();
        }
        return this.f56670k;
    }

    public boolean i() {
        if (this.f56663d == null && this.f56664e == null && this.f56665f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f56661b + ", endValue=" + this.f56662c + ", startFrame=" + this.f56666g + ", endFrame=" + this.f56667h + ", interpolator=" + this.f56663d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f56668i = -3987645.8f;
        this.f56669j = -3987645.8f;
        this.f56670k = 784923401;
        this.f56671l = 784923401;
        this.f56672m = Float.MIN_VALUE;
        this.f56673n = Float.MIN_VALUE;
        this.f56674o = null;
        this.f56675p = null;
        this.f56660a = iVar;
        this.f56661b = obj;
        this.f56662c = obj2;
        this.f56663d = null;
        this.f56664e = interpolator;
        this.f56665f = interpolator2;
        this.f56666g = f10;
        this.f56667h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f56668i = -3987645.8f;
        this.f56669j = -3987645.8f;
        this.f56670k = 784923401;
        this.f56671l = 784923401;
        this.f56672m = Float.MIN_VALUE;
        this.f56673n = Float.MIN_VALUE;
        this.f56674o = null;
        this.f56675p = null;
        this.f56660a = iVar;
        this.f56661b = obj;
        this.f56662c = obj2;
        this.f56663d = interpolator;
        this.f56664e = interpolator2;
        this.f56665f = interpolator3;
        this.f56666g = f10;
        this.f56667h = f11;
    }

    public a(Object obj) {
        this.f56668i = -3987645.8f;
        this.f56669j = -3987645.8f;
        this.f56670k = 784923401;
        this.f56671l = 784923401;
        this.f56672m = Float.MIN_VALUE;
        this.f56673n = Float.MIN_VALUE;
        this.f56674o = null;
        this.f56675p = null;
        this.f56660a = null;
        this.f56661b = obj;
        this.f56662c = obj;
        this.f56663d = null;
        this.f56664e = null;
        this.f56665f = null;
        this.f56666g = Float.MIN_VALUE;
        this.f56667h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f56668i = -3987645.8f;
        this.f56669j = -3987645.8f;
        this.f56670k = 784923401;
        this.f56671l = 784923401;
        this.f56672m = Float.MIN_VALUE;
        this.f56673n = Float.MIN_VALUE;
        this.f56674o = null;
        this.f56675p = null;
        this.f56660a = null;
        this.f56661b = obj;
        this.f56662c = obj2;
        this.f56663d = null;
        this.f56664e = null;
        this.f56665f = null;
        this.f56666g = Float.MIN_VALUE;
        this.f56667h = Float.valueOf(Float.MAX_VALUE);
    }
}
