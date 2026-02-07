package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f46557a;

    /* renamed from: b  reason: collision with root package name */
    public String f46558b;

    /* renamed from: c  reason: collision with root package name */
    public float f46559c;

    /* renamed from: d  reason: collision with root package name */
    public a f46560d;

    /* renamed from: e  reason: collision with root package name */
    public int f46561e;

    /* renamed from: f  reason: collision with root package name */
    public float f46562f;

    /* renamed from: g  reason: collision with root package name */
    public float f46563g;

    /* renamed from: h  reason: collision with root package name */
    public int f46564h;

    /* renamed from: i  reason: collision with root package name */
    public int f46565i;

    /* renamed from: j  reason: collision with root package name */
    public float f46566j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f46567k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f46568l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f46569m;

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
        this.f46557a = str;
        this.f46558b = str2;
        this.f46559c = f10;
        this.f46560d = aVar;
        this.f46561e = i10;
        this.f46562f = f11;
        this.f46563g = f12;
        this.f46564h = i11;
        this.f46565i = i12;
        this.f46566j = f13;
        this.f46567k = z10;
        this.f46568l = pointF;
        this.f46569m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f46557a.hashCode() * 31) + this.f46558b.hashCode()) * 31) + this.f46559c)) * 31) + this.f46560d.ordinal()) * 31) + this.f46561e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f46562f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f46564h;
    }

    public b() {
    }
}
