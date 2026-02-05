package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e5 implements u1 {

    /* renamed from: a  reason: collision with root package name */
    static final u1 f14217a = new e5();

    private e5() {
    }

    @Override // com.google.android.gms.internal.play_billing.u1
    public final boolean a(int i10) {
        f5 f5Var;
        f5 f5Var2 = f5.BROADCAST_ACTION_UNSPECIFIED;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        f5Var = null;
                    } else {
                        f5Var = f5.ALTERNATIVE_BILLING_ACTION;
                    }
                } else {
                    f5Var = f5.LOCAL_PURCHASES_UPDATED_ACTION;
                }
            } else {
                f5Var = f5.PURCHASES_UPDATED_ACTION;
            }
        } else {
            f5Var = f5.BROADCAST_ACTION_UNSPECIFIED;
        }
        if (f5Var != null) {
            return true;
        }
        return false;
    }
}
