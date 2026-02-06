package cl;

import hk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f7545a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(boolean z10) {
        this.f7545a = z10;
    }

    public void a(p[] pVarArr) {
        if (this.f7545a && pVarArr != null && pVarArr.length >= 3) {
            p pVar = pVarArr[0];
            pVarArr[0] = pVarArr[2];
            pVarArr[2] = pVar;
        }
    }
}
