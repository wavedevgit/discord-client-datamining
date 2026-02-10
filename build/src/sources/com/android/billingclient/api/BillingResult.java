package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingResult {

    /* renamed from: a  reason: collision with root package name */
    private int f7966a;

    /* renamed from: b  reason: collision with root package name */
    private String f7967b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f7968a;

        /* renamed from: b  reason: collision with root package name */
        private String f7969b = "";

        /* synthetic */ a(b6.z zVar) {
        }

        public BillingResult a() {
            BillingResult billingResult = new BillingResult();
            billingResult.f7966a = this.f7968a;
            billingResult.f7967b = this.f7969b;
            return billingResult;
        }

        public a b(String str) {
            this.f7969b = str;
            return this;
        }

        public a c(int i10) {
            this.f7968a = i10;
            return this;
        }
    }

    public static a c() {
        return new a(null);
    }

    public String a() {
        return this.f7967b;
    }

    public int b() {
        return this.f7966a;
    }

    public String toString() {
        String f10 = com.google.android.gms.internal.play_billing.a0.f(this.f7966a);
        String str = this.f7967b;
        return "Response Code: " + f10 + ", Debug Message: " + str;
    }
}
