package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f46992a;

    /* renamed from: b  reason: collision with root package name */
    public String f46993b;

    /* renamed from: c  reason: collision with root package name */
    public float f46994c;

    /* renamed from: d  reason: collision with root package name */
    public a f46995d;

    /* renamed from: e  reason: collision with root package name */
    public int f46996e;

    /* renamed from: f  reason: collision with root package name */
    public float f46997f;

    /* renamed from: g  reason: collision with root package name */
    public float f46998g;

    /* renamed from: h  reason: collision with root package name */
    public int f46999h;

    /* renamed from: i  reason: collision with root package name */
    public int f47000i;

    /* renamed from: j  reason: collision with root package name */
    public float f47001j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f47002k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f47003l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f47004m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        LEFT_ALIGN,
        RIGHT_ALIGN,
        CENTER
    }

    public b(String str, String str2, float f10, a aVar, int i10, float f11, float f12, int i11, int i12, float f13, boolean z10, PointF pointF, PointF pointF2) {
        a(str, str2, f10, aVar, i10, f11, f12, i11, i12, f13, z10, pointF, pointF2);
    }

    public void a(String str, String str2, float f10, a aVar, int i10, float f11, float f12, int i11, int i12, float f13, boolean z10, PointF pointF, PointF pointF2) {
        this.f46992a = str;
        this.f46993b = str2;
        this.f46994c = f10;
        this.f46995d = aVar;
        this.f46996e = i10;
        this.f46997f = f11;
        this.f46998g = f12;
        this.f46999h = i11;
        this.f47000i = i12;
        this.f47001j = f13;
        this.f47002k = z10;
        this.f47003l = pointF;
        this.f47004m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f46992a.hashCode() * 31) + this.f46993b.hashCode()) * 31) + this.f46994c)) * 31) + this.f46995d.ordinal()) * 31) + this.f46996e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f46997f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f46999h;
    }

    public b() {
    }
}
