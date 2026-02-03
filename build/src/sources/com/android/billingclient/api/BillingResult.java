package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingResult {

    /* renamed from: a  reason: collision with root package name */
    private int f7542a;

    /* renamed from: b  reason: collision with root package name */
    private String f7543b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f7544a;

        /* renamed from: b  reason: collision with root package name */
        private String f7545b = "";

        /* synthetic */ a(a6.z zVar) {
        }

        public BillingResult a() {
            BillingResult billingResult = new BillingResult();
            billingResult.f7542a = this.f7544a;
            billingResult.f7543b = this.f7545b;
            return billingResult;
        }

        public a b(String str) {
            this.f7545b = str;
            return this;
        }

        public a c(int i10) {
            this.f7544a = i10;
            return this;
        }
    }

    public static a c() {
        return new a(null);
    }

    public String a() {
        return this.f7543b;
    }

    public int b() {
        return this.f7542a;
    }

    public String toString() {
        String f10 = com.google.android.gms.internal.play_billing.a0.f(this.f7542a);
        String str = this.f7543b;
        return "Response Code: " + f10 + ", Debug Message: " + str;
    }
}
