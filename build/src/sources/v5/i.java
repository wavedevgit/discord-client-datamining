package v5;

import android.graphics.PointF;
import q5.b;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements n0 {

    /* renamed from: a  reason: collision with root package name */
    public static final i f52195a = new i();

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52196b = c.a.a("t", "f", "s", "j", "tr", "lh", "ls", "fc", "sc", "sw", "of", "ps", "sz");

    private i() {
    }

    @Override // v5.n0
    /* renamed from: b */
    public q5.b a(w5.c cVar, float f10) {
        b.a aVar = b.a.CENTER;
        cVar.u();
        b.a aVar2 = aVar;
        String str = null;
        String str2 = null;
        PointF pointF = null;
        PointF pointF2 = null;
        float f11 = 0.0f;
        float f12 = 0.0f;
        float f13 = 0.0f;
        float f14 = 0.0f;
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        boolean z10 = true;
        while (cVar.hasNext()) {
            switch (cVar.p(f52196b)) {
                case 0:
                    str = cVar.e1();
                    break;
                case 1:
                    str2 = cVar.e1();
                    break;
                case 2:
                    f11 = (float) cVar.nextDouble();
                    break;
                case 3:
                    int nextInt = cVar.nextInt();
                    aVar2 = b.a.CENTER;
                    if (nextInt <= aVar2.ordinal() && nextInt >= 0) {
                        aVar2 = b.a.values()[nextInt];
                        break;
                    }
                    break;
                case 4:
                    i10 = cVar.nextInt();
                    break;
                case 5:
                    f12 = (float) cVar.nextDouble();
                    break;
                case 6:
                    f13 = (float) cVar.nextDouble();
                    break;
                case 7:
                    i11 = s.d(cVar);
                    break;
                case 8:
                    i12 = s.d(cVar);
                    break;
                case 9:
                    f14 = (float) cVar.nextDouble();
                    break;
                case 10:
                    z10 = cVar.g();
                    break;
                case 11:
                    cVar.x();
                    PointF pointF3 = new PointF(((float) cVar.nextDouble()) * f10, ((float) cVar.nextDouble()) * f10);
                    cVar.v();
                    pointF = pointF3;
                    break;
                case 12:
                    cVar.x();
                    PointF pointF4 = new PointF(((float) cVar.nextDouble()) * f10, ((float) cVar.nextDouble()) * f10);
                    cVar.v();
                    pointF2 = pointF4;
                    break;
                default:
                    cVar.s();
                    cVar.S();
                    break;
            }
        }
        cVar.D();
        return new q5.b(str, str2, f11, aVar2, i10, f12, f13, i11, i12, f14, z10, pointF, pointF2);
    }
}
