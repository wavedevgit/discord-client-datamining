package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f46509a;

    /* renamed from: b  reason: collision with root package name */
    public String f46510b;

    /* renamed from: c  reason: collision with root package name */
    public float f46511c;

    /* renamed from: d  reason: collision with root package name */
    public a f46512d;

    /* renamed from: e  reason: collision with root package name */
    public int f46513e;

    /* renamed from: f  reason: collision with root package name */
    public float f46514f;

    /* renamed from: g  reason: collision with root package name */
    public float f46515g;

    /* renamed from: h  reason: collision with root package name */
    public int f46516h;

    /* renamed from: i  reason: collision with root package name */
    public int f46517i;

    /* renamed from: j  reason: collision with root package name */
    public float f46518j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f46519k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f46520l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f46521m;

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
        this.f46509a = str;
        this.f46510b = str2;
        this.f46511c = f10;
        this.f46512d = aVar;
        this.f46513e = i10;
        this.f46514f = f11;
        this.f46515g = f12;
        this.f46516h = i11;
        this.f46517i = i12;
        this.f46518j = f13;
        this.f46519k = z10;
        this.f46520l = pointF;
        this.f46521m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f46509a.hashCode() * 31) + this.f46510b.hashCode()) * 31) + this.f46511c)) * 31) + this.f46512d.ordinal()) * 31) + this.f46513e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f46514f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f46516h;
    }

    public b() {
    }
}
