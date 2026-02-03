package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f47397a;

    /* renamed from: b  reason: collision with root package name */
    public String f47398b;

    /* renamed from: c  reason: collision with root package name */
    public float f47399c;

    /* renamed from: d  reason: collision with root package name */
    public a f47400d;

    /* renamed from: e  reason: collision with root package name */
    public int f47401e;

    /* renamed from: f  reason: collision with root package name */
    public float f47402f;

    /* renamed from: g  reason: collision with root package name */
    public float f47403g;

    /* renamed from: h  reason: collision with root package name */
    public int f47404h;

    /* renamed from: i  reason: collision with root package name */
    public int f47405i;

    /* renamed from: j  reason: collision with root package name */
    public float f47406j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f47407k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f47408l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f47409m;

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
        this.f47397a = str;
        this.f47398b = str2;
        this.f47399c = f10;
        this.f47400d = aVar;
        this.f47401e = i10;
        this.f47402f = f11;
        this.f47403g = f12;
        this.f47404h = i11;
        this.f47405i = i12;
        this.f47406j = f13;
        this.f47407k = z10;
        this.f47408l = pointF;
        this.f47409m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f47397a.hashCode() * 31) + this.f47398b.hashCode()) * 31) + this.f47399c)) * 31) + this.f47400d.ordinal()) * 31) + this.f47401e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f47402f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f47404h;
    }

    public b() {
    }
}
