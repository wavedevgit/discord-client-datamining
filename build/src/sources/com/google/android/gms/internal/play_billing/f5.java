package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum f5 implements s1 {
    BROADCAST_ACTION_UNSPECIFIED(0),
    PURCHASES_UPDATED_ACTION(1),
    LOCAL_PURCHASES_UPDATED_ACTION(2),
    ALTERNATIVE_BILLING_ACTION(3);
    

    /* renamed from: q  reason: collision with root package name */
    private static final t1 f14190q = new t1() { // from class: com.google.android.gms.internal.play_billing.d5
    };

    /* renamed from: d  reason: collision with root package name */
    private final int f14192d;

    f5(int i10) {
        this.f14192d = i10;
    }

    @Override // java.lang.Enum
    public final String toString() {
        return Integer.toString(this.f14192d);
    }
}
