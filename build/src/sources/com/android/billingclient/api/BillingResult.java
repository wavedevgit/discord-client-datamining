package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingResult {

    /* renamed from: a  reason: collision with root package name */
    private int f8945a;

    /* renamed from: b  reason: collision with root package name */
    private String f8946b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f8947a;

        /* renamed from: b  reason: collision with root package name */
        private String f8948b = "";

        /* synthetic */ a(a6.z zVar) {
        }

        public BillingResult a() {
            BillingResult billingResult = new BillingResult();
            billingResult.f8945a = this.f8947a;
            billingResult.f8946b = this.f8948b;
            return billingResult;
        }

        public a b(String str) {
            this.f8948b = str;
            return this;
        }

        public a c(int i10) {
            this.f8947a = i10;
            return this;
        }
    }

    public static a c() {
        return new a(null);
    }

    public String a() {
        return this.f8946b;
    }

    public int b() {
        return this.f8945a;
    }

    public String toString() {
        String f10 = com.google.android.gms.internal.play_billing.a0.f(this.f8945a);
        String str = this.f8946b;
        return "Response Code: " + f10 + ", Debug Message: " + str;
    }
}
