package r5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f46698a;

    /* renamed from: b  reason: collision with root package name */
    public String f46699b;

    /* renamed from: c  reason: collision with root package name */
    public float f46700c;

    /* renamed from: d  reason: collision with root package name */
    public a f46701d;

    /* renamed from: e  reason: collision with root package name */
    public int f46702e;

    /* renamed from: f  reason: collision with root package name */
    public float f46703f;

    /* renamed from: g  reason: collision with root package name */
    public float f46704g;

    /* renamed from: h  reason: collision with root package name */
    public int f46705h;

    /* renamed from: i  reason: collision with root package name */
    public int f46706i;

    /* renamed from: j  reason: collision with root package name */
    public float f46707j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f46708k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f46709l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f46710m;

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
        this.f46698a = str;
        this.f46699b = str2;
        this.f46700c = f10;
        this.f46701d = aVar;
        this.f46702e = i10;
        this.f46703f = f11;
        this.f46704g = f12;
        this.f46705h = i11;
        this.f46706i = i12;
        this.f46707j = f13;
        this.f46708k = z10;
        this.f46709l = pointF;
        this.f46710m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f46698a.hashCode() * 31) + this.f46699b.hashCode()) * 31) + this.f46700c)) * 31) + this.f46701d.ordinal()) * 31) + this.f46702e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f46703f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f46705h;
    }

    public b() {
    }
}
