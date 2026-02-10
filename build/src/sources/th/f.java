package th;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f extends e {

    /* renamed from: a  reason: collision with root package name */
    float f48790a = -1.0f;

    @Override // th.e
    public void a(n nVar, float f10, float f11, float f12) {
        float f13 = f12 * f11;
        nVar.o(0.0f, f13, 180.0f, 180.0f - f10);
        double d10 = f13;
        nVar.m((float) (Math.sin(Math.toRadians(f10)) * d10), (float) (Math.sin(Math.toRadians(90.0f - f10)) * d10));
    }
}
