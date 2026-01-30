package xk;

import ck.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f53456a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(boolean z10) {
        this.f53456a = z10;
    }

    public void a(p[] pVarArr) {
        if (this.f53456a && pVarArr != null && pVarArr.length >= 3) {
            p pVar = pVarArr[0];
            pVarArr[0] = pVarArr[2];
            pVarArr[2] = pVar;
        }
    }
}
