package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e extends g {

    /* renamed from: i  reason: collision with root package name */
    private final s5.d f42372i;

    public e(List list) {
        super(list);
        int i10 = 0;
        for (int i11 = 0; i11 < list.size(); i11++) {
            s5.d dVar = (s5.d) ((y5.a) list.get(i11)).f53740b;
            if (dVar != null) {
                i10 = Math.max(i10, dVar.f());
            }
        }
        this.f42372i = new s5.d(new float[i10], new int[i10]);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: q */
    public s5.d i(y5.a aVar, float f10) {
        this.f42372i.g((s5.d) aVar.f53740b, (s5.d) aVar.f53741c, f10);
        return this.f42372i;
    }
}
