package o5;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e extends g {

    /* renamed from: i  reason: collision with root package name */
    private final t5.d f40284i;

    public e(List list) {
        super(list);
        int i10 = 0;
        for (int i11 = 0; i11 < list.size(); i11++) {
            t5.d dVar = (t5.d) ((z5.a) list.get(i11)).f56053b;
            if (dVar != null) {
                i10 = Math.max(i10, dVar.f());
            }
        }
        this.f40284i = new t5.d(new float[i10], new int[i10]);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // o5.a
    /* renamed from: q */
    public t5.d i(z5.a aVar, float f10) {
        this.f40284i.g((t5.d) aVar.f56053b, (t5.d) aVar.f56054c, f10);
        return this.f40284i;
    }
}
