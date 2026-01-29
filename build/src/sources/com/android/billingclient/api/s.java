package com.android.billingclient.api;

import com.google.android.gms.internal.play_billing.b5;
import com.google.android.gms.internal.play_billing.q4;
import com.google.android.gms.internal.play_billing.r4;
import com.google.android.gms.internal.play_billing.u4;
import com.google.android.gms.internal.play_billing.v4;
import com.google.android.gms.internal.play_billing.x4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract /* synthetic */ class s {

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ int f9119a = 0;

    static {
        com.google.android.gms.internal.play_billing.m mVar = t.f9120a;
    }

    public static r4 a(int i10, int i11, BillingResult billingResult) {
        try {
            q4 F = r4.F();
            x4 F2 = b5.F();
            F2.p(billingResult.b());
            F2.o(billingResult.a());
            F2.q(i10);
            F.m(F2);
            F.p(i11);
            return (r4) F.f();
        } catch (Exception e10) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to create logging payload", e10);
            return null;
        }
    }

    public static r4 b(int i10, int i11, BillingResult billingResult, String str) {
        try {
            x4 F = b5.F();
            F.p(billingResult.b());
            F.o(billingResult.a());
            F.q(i10);
            if (str != null) {
                F.m(str);
            }
            q4 F2 = r4.F();
            F2.m(F);
            F2.p(i11);
            return (r4) F2.f();
        } catch (Exception e10) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to create logging payload", e10);
            return null;
        }
    }

    public static v4 c(int i10) {
        try {
            u4 D = v4.D();
            D.o(i10);
            return (v4) D.f();
        } catch (Exception e10) {
            com.google.android.gms.internal.play_billing.a0.j("BillingLogger", "Unable to create logging payload", e10);
            return null;
        }
    }
}
