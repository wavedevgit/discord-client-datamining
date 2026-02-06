package com.android.billingclient.api;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingResult {

    /* renamed from: a  reason: collision with root package name */
    private int f7826a;

    /* renamed from: b  reason: collision with root package name */
    private String f7827b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f7828a;

        /* renamed from: b  reason: collision with root package name */
        private String f7829b = "";

        /* synthetic */ a(a6.z zVar) {
        }

        public BillingResult a() {
            BillingResult billingResult = new BillingResult();
            billingResult.f7826a = this.f7828a;
            billingResult.f7827b = this.f7829b;
            return billingResult;
        }

        public a b(String str) {
            this.f7829b = str;
            return this;
        }

        public a c(int i10) {
            this.f7828a = i10;
            return this;
        }
    }

    public static a c() {
        return new a(null);
    }

    public String a() {
        return this.f7827b;
    }

    public int b() {
        return this.f7826a;
    }

    public String toString() {
        String f10 = com.google.android.gms.internal.play_billing.a0.f(this.f7826a);
        String str = this.f7827b;
        return "Response Code: " + f10 + ", Debug Message: " + str;
    }
}
