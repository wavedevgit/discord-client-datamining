package y5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f53984a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f53985b;

    /* renamed from: c  reason: collision with root package name */
    public Object f53986c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f53987d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f53988e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f53989f;

    /* renamed from: g  reason: collision with root package name */
    public final float f53990g;

    /* renamed from: h  reason: collision with root package name */
    public Float f53991h;

    /* renamed from: i  reason: collision with root package name */
    private float f53992i;

    /* renamed from: j  reason: collision with root package name */
    private float f53993j;

    /* renamed from: k  reason: collision with root package name */
    private int f53994k;

    /* renamed from: l  reason: collision with root package name */
    private int f53995l;

    /* renamed from: m  reason: collision with root package name */
    private float f53996m;

    /* renamed from: n  reason: collision with root package name */
    private float f53997n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f53998o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f53999p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f53992i = -3987645.8f;
        this.f53993j = -3987645.8f;
        this.f53994k = 784923401;
        this.f53995l = 784923401;
        this.f53996m = Float.MIN_VALUE;
        this.f53997n = Float.MIN_VALUE;
        this.f53998o = null;
        this.f53999p = null;
        this.f53984a = iVar;
        this.f53985b = obj;
        this.f53986c = obj2;
        this.f53987d = interpolator;
        this.f53988e = null;
        this.f53989f = null;
        this.f53990g = f10;
        this.f53991h = f11;
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
        if (this.f53984a == null) {
            return 1.0f;
        }
        if (this.f53997n == Float.MIN_VALUE) {
            if (this.f53991h == null) {
                this.f53997n = 1.0f;
            } else {
                this.f53997n = f() + ((this.f53991h.floatValue() - this.f53990g) / this.f53984a.e());
            }
        }
        return this.f53997n;
    }

    public float d() {
        if (this.f53993j == -3987645.8f) {
            this.f53993j = ((Float) this.f53986c).floatValue();
        }
        return this.f53993j;
    }

    public int e() {
        if (this.f53995l == 784923401) {
            this.f53995l = ((Integer) this.f53986c).intValue();
        }
        return this.f53995l;
    }

    public float f() {
        i iVar = this.f53984a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f53996m == Float.MIN_VALUE) {
            this.f53996m = (this.f53990g - iVar.p()) / this.f53984a.e();
        }
        return this.f53996m;
    }

    public float g() {
        if (this.f53992i == -3987645.8f) {
            this.f53992i = ((Float) this.f53985b).floatValue();
        }
        return this.f53992i;
    }

    public int h() {
        if (this.f53994k == 784923401) {
            this.f53994k = ((Integer) this.f53985b).intValue();
        }
        return this.f53994k;
    }

    public boolean i() {
        if (this.f53987d == null && this.f53988e == null && this.f53989f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f53985b + ", endValue=" + this.f53986c + ", startFrame=" + this.f53990g + ", endFrame=" + this.f53991h + ", interpolator=" + this.f53987d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f53992i = -3987645.8f;
        this.f53993j = -3987645.8f;
        this.f53994k = 784923401;
        this.f53995l = 784923401;
        this.f53996m = Float.MIN_VALUE;
        this.f53997n = Float.MIN_VALUE;
        this.f53998o = null;
        this.f53999p = null;
        this.f53984a = iVar;
        this.f53985b = obj;
        this.f53986c = obj2;
        this.f53987d = null;
        this.f53988e = interpolator;
        this.f53989f = interpolator2;
        this.f53990g = f10;
        this.f53991h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f53992i = -3987645.8f;
        this.f53993j = -3987645.8f;
        this.f53994k = 784923401;
        this.f53995l = 784923401;
        this.f53996m = Float.MIN_VALUE;
        this.f53997n = Float.MIN_VALUE;
        this.f53998o = null;
        this.f53999p = null;
        this.f53984a = iVar;
        this.f53985b = obj;
        this.f53986c = obj2;
        this.f53987d = interpolator;
        this.f53988e = interpolator2;
        this.f53989f = interpolator3;
        this.f53990g = f10;
        this.f53991h = f11;
    }

    public a(Object obj) {
        this.f53992i = -3987645.8f;
        this.f53993j = -3987645.8f;
        this.f53994k = 784923401;
        this.f53995l = 784923401;
        this.f53996m = Float.MIN_VALUE;
        this.f53997n = Float.MIN_VALUE;
        this.f53998o = null;
        this.f53999p = null;
        this.f53984a = null;
        this.f53985b = obj;
        this.f53986c = obj;
        this.f53987d = null;
        this.f53988e = null;
        this.f53989f = null;
        this.f53990g = Float.MIN_VALUE;
        this.f53991h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f53992i = -3987645.8f;
        this.f53993j = -3987645.8f;
        this.f53994k = 784923401;
        this.f53995l = 784923401;
        this.f53996m = Float.MIN_VALUE;
        this.f53997n = Float.MIN_VALUE;
        this.f53998o = null;
        this.f53999p = null;
        this.f53984a = null;
        this.f53985b = obj;
        this.f53986c = obj2;
        this.f53987d = null;
        this.f53988e = null;
        this.f53989f = null;
        this.f53990g = Float.MIN_VALUE;
        this.f53991h = Float.valueOf(Float.MAX_VALUE);
    }
}
