package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingResult {

    /* renamed from: a  reason: collision with root package name */
    private int f8544a;

    /* renamed from: b  reason: collision with root package name */
    private String f8545b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f8546a;

        /* renamed from: b  reason: collision with root package name */
        private String f8547b = "";

        /* synthetic */ a(b6.z zVar) {
        }

        public BillingResult a() {
            BillingResult billingResult = new BillingResult();
            billingResult.f8544a = this.f8546a;
            billingResult.f8545b = this.f8547b;
            return billingResult;
        }

        public a b(String str) {
            this.f8547b = str;
            return this;
        }

        public a c(int i10) {
            this.f8546a = i10;
            return this;
        }
    }

    public static a c() {
        return new a(null);
    }

    public String a() {
        return this.f8545b;
    }

    public int b() {
        return this.f8544a;
    }

    public String toString() {
        String f10 = com.google.android.gms.internal.play_billing.a0.f(this.f8544a);
        String str = this.f8545b;
        return "Response Code: " + f10 + ", Debug Message: " + str;
    }
}
