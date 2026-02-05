package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingResult {

    /* renamed from: a  reason: collision with root package name */
    private int f7927a;

    /* renamed from: b  reason: collision with root package name */
    private String f7928b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f7929a;

        /* renamed from: b  reason: collision with root package name */
        private String f7930b = "";

        /* synthetic */ a(a6.z zVar) {
        }

        public BillingResult a() {
            BillingResult billingResult = new BillingResult();
            billingResult.f7927a = this.f7929a;
            billingResult.f7928b = this.f7930b;
            return billingResult;
        }

        public a b(String str) {
            this.f7930b = str;
            return this;
        }

        public a c(int i10) {
            this.f7929a = i10;
            return this;
        }
    }

    public static a c() {
        return new a(null);
    }

    public String a() {
        return this.f7928b;
    }

    public int b() {
        return this.f7927a;
    }

    public String toString() {
        String f10 = com.google.android.gms.internal.play_billing.a0.f(this.f7927a);
        String str = this.f7928b;
        return "Response Code: " + f10 + ", Debug Message: " + str;
    }
}
