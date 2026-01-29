package y5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import l5.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final i f53993a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f53994b;

    /* renamed from: c  reason: collision with root package name */
    public Object f53995c;

    /* renamed from: d  reason: collision with root package name */
    public final Interpolator f53996d;

    /* renamed from: e  reason: collision with root package name */
    public final Interpolator f53997e;

    /* renamed from: f  reason: collision with root package name */
    public final Interpolator f53998f;

    /* renamed from: g  reason: collision with root package name */
    public final float f53999g;

    /* renamed from: h  reason: collision with root package name */
    public Float f54000h;

    /* renamed from: i  reason: collision with root package name */
    private float f54001i;

    /* renamed from: j  reason: collision with root package name */
    private float f54002j;

    /* renamed from: k  reason: collision with root package name */
    private int f54003k;

    /* renamed from: l  reason: collision with root package name */
    private int f54004l;

    /* renamed from: m  reason: collision with root package name */
    private float f54005m;

    /* renamed from: n  reason: collision with root package name */
    private float f54006n;

    /* renamed from: o  reason: collision with root package name */
    public PointF f54007o;

    /* renamed from: p  reason: collision with root package name */
    public PointF f54008p;

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, float f10, Float f11) {
        this.f54001i = -3987645.8f;
        this.f54002j = -3987645.8f;
        this.f54003k = 784923401;
        this.f54004l = 784923401;
        this.f54005m = Float.MIN_VALUE;
        this.f54006n = Float.MIN_VALUE;
        this.f54007o = null;
        this.f54008p = null;
        this.f53993a = iVar;
        this.f53994b = obj;
        this.f53995c = obj2;
        this.f53996d = interpolator;
        this.f53997e = null;
        this.f53998f = null;
        this.f53999g = f10;
        this.f54000h = f11;
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
        if (this.f53993a == null) {
            return 1.0f;
        }
        if (this.f54006n == Float.MIN_VALUE) {
            if (this.f54000h == null) {
                this.f54006n = 1.0f;
            } else {
                this.f54006n = f() + ((this.f54000h.floatValue() - this.f53999g) / this.f53993a.e());
            }
        }
        return this.f54006n;
    }

    public float d() {
        if (this.f54002j == -3987645.8f) {
            this.f54002j = ((Float) this.f53995c).floatValue();
        }
        return this.f54002j;
    }

    public int e() {
        if (this.f54004l == 784923401) {
            this.f54004l = ((Integer) this.f53995c).intValue();
        }
        return this.f54004l;
    }

    public float f() {
        i iVar = this.f53993a;
        if (iVar == null) {
            return 0.0f;
        }
        if (this.f54005m == Float.MIN_VALUE) {
            this.f54005m = (this.f53999g - iVar.p()) / this.f53993a.e();
        }
        return this.f54005m;
    }

    public float g() {
        if (this.f54001i == -3987645.8f) {
            this.f54001i = ((Float) this.f53994b).floatValue();
        }
        return this.f54001i;
    }

    public int h() {
        if (this.f54003k == 784923401) {
            this.f54003k = ((Integer) this.f53994b).intValue();
        }
        return this.f54003k;
    }

    public boolean i() {
        if (this.f53996d == null && this.f53997e == null && this.f53998f == null) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "Keyframe{startValue=" + this.f53994b + ", endValue=" + this.f53995c + ", startFrame=" + this.f53999g + ", endFrame=" + this.f54000h + ", interpolator=" + this.f53996d + '}';
    }

    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, float f10, Float f11) {
        this.f54001i = -3987645.8f;
        this.f54002j = -3987645.8f;
        this.f54003k = 784923401;
        this.f54004l = 784923401;
        this.f54005m = Float.MIN_VALUE;
        this.f54006n = Float.MIN_VALUE;
        this.f54007o = null;
        this.f54008p = null;
        this.f53993a = iVar;
        this.f53994b = obj;
        this.f53995c = obj2;
        this.f53996d = null;
        this.f53997e = interpolator;
        this.f53998f = interpolator2;
        this.f53999g = f10;
        this.f54000h = f11;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(i iVar, Object obj, Object obj2, Interpolator interpolator, Interpolator interpolator2, Interpolator interpolator3, float f10, Float f11) {
        this.f54001i = -3987645.8f;
        this.f54002j = -3987645.8f;
        this.f54003k = 784923401;
        this.f54004l = 784923401;
        this.f54005m = Float.MIN_VALUE;
        this.f54006n = Float.MIN_VALUE;
        this.f54007o = null;
        this.f54008p = null;
        this.f53993a = iVar;
        this.f53994b = obj;
        this.f53995c = obj2;
        this.f53996d = interpolator;
        this.f53997e = interpolator2;
        this.f53998f = interpolator3;
        this.f53999g = f10;
        this.f54000h = f11;
    }

    public a(Object obj) {
        this.f54001i = -3987645.8f;
        this.f54002j = -3987645.8f;
        this.f54003k = 784923401;
        this.f54004l = 784923401;
        this.f54005m = Float.MIN_VALUE;
        this.f54006n = Float.MIN_VALUE;
        this.f54007o = null;
        this.f54008p = null;
        this.f53993a = null;
        this.f53994b = obj;
        this.f53995c = obj;
        this.f53996d = null;
        this.f53997e = null;
        this.f53998f = null;
        this.f53999g = Float.MIN_VALUE;
        this.f54000h = Float.valueOf(Float.MAX_VALUE);
    }

    private a(Object obj, Object obj2) {
        this.f54001i = -3987645.8f;
        this.f54002j = -3987645.8f;
        this.f54003k = 784923401;
        this.f54004l = 784923401;
        this.f54005m = Float.MIN_VALUE;
        this.f54006n = Float.MIN_VALUE;
        this.f54007o = null;
        this.f54008p = null;
        this.f53993a = null;
        this.f53994b = obj;
        this.f53995c = obj2;
        this.f53996d = null;
        this.f53997e = null;
        this.f53998f = null;
        this.f53999g = Float.MIN_VALUE;
        this.f54000h = Float.valueOf(Float.MAX_VALUE);
    }
}
