package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingResult {

    /* renamed from: a  reason: collision with root package name */
    private int f8543a;

    /* renamed from: b  reason: collision with root package name */
    private String f8544b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f8545a;

        /* renamed from: b  reason: collision with root package name */
        private String f8546b = "";

        /* synthetic */ a(b6.z zVar) {
        }

        public BillingResult a() {
            BillingResult billingResult = new BillingResult();
            billingResult.f8543a = this.f8545a;
            billingResult.f8544b = this.f8546b;
            return billingResult;
        }

        public a b(String str) {
            this.f8546b = str;
            return this;
        }

        public a c(int i10) {
            this.f8545a = i10;
            return this;
        }
    }

    public static a c() {
        return new a(null);
    }

    public String a() {
        return this.f8544b;
    }

    public int b() {
        return this.f8543a;
    }

    public String toString() {
        String f10 = com.google.android.gms.internal.play_billing.a0.f(this.f8543a);
        String str = this.f8544b;
        return "Response Code: " + f10 + ", Debug Message: " + str;
    }
}
