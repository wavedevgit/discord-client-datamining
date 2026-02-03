package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingResult {

    /* renamed from: a  reason: collision with root package name */
    private int f8574a;

    /* renamed from: b  reason: collision with root package name */
    private String f8575b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f8576a;

        /* renamed from: b  reason: collision with root package name */
        private String f8577b = "";

        /* synthetic */ a(a6.z zVar) {
        }

        public BillingResult a() {
            BillingResult billingResult = new BillingResult();
            billingResult.f8574a = this.f8576a;
            billingResult.f8575b = this.f8577b;
            return billingResult;
        }

        public a b(String str) {
            this.f8577b = str;
            return this;
        }

        public a c(int i10) {
            this.f8576a = i10;
            return this;
        }
    }

    public static a c() {
        return new a(null);
    }

    public String a() {
        return this.f8575b;
    }

    public int b() {
        return this.f8574a;
    }

    public String toString() {
        String f10 = com.google.android.gms.internal.play_billing.a0.f(this.f8574a);
        String str = this.f8575b;
        return "Response Code: " + f10 + ", Debug Message: " + str;
    }
}
