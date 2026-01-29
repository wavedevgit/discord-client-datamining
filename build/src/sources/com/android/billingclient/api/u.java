package com.android.billingclient.api;

import com.android.billingclient.api.BillingResult;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class u {
    static final BillingResult A;
    static final BillingResult B;
    static final BillingResult C;
    static final BillingResult D;
    static final BillingResult E;
    static final BillingResult F;

    /* renamed from: a  reason: collision with root package name */
    static final BillingResult f9121a;

    /* renamed from: b  reason: collision with root package name */
    static final BillingResult f9122b;

    /* renamed from: c  reason: collision with root package name */
    static final BillingResult f9123c;

    /* renamed from: d  reason: collision with root package name */
    static final BillingResult f9124d;

    /* renamed from: e  reason: collision with root package name */
    static final BillingResult f9125e;

    /* renamed from: f  reason: collision with root package name */
    static final BillingResult f9126f;

    /* renamed from: g  reason: collision with root package name */
    static final BillingResult f9127g;

    /* renamed from: h  reason: collision with root package name */
    static final BillingResult f9128h;

    /* renamed from: i  reason: collision with root package name */
    static final BillingResult f9129i;

    /* renamed from: j  reason: collision with root package name */
    static final BillingResult f9130j;

    /* renamed from: k  reason: collision with root package name */
    static final BillingResult f9131k;

    /* renamed from: l  reason: collision with root package name */
    static final BillingResult f9132l;

    /* renamed from: m  reason: collision with root package name */
    static final BillingResult f9133m;

    /* renamed from: n  reason: collision with root package name */
    static final BillingResult f9134n;

    /* renamed from: o  reason: collision with root package name */
    static final BillingResult f9135o;

    /* renamed from: p  reason: collision with root package name */
    static final BillingResult f9136p;

    /* renamed from: q  reason: collision with root package name */
    static final BillingResult f9137q;

    /* renamed from: r  reason: collision with root package name */
    static final BillingResult f9138r;

    /* renamed from: s  reason: collision with root package name */
    static final BillingResult f9139s;

    /* renamed from: t  reason: collision with root package name */
    static final BillingResult f9140t;

    /* renamed from: u  reason: collision with root package name */
    static final BillingResult f9141u;

    /* renamed from: v  reason: collision with root package name */
    static final BillingResult f9142v;

    /* renamed from: w  reason: collision with root package name */
    static final BillingResult f9143w;

    /* renamed from: x  reason: collision with root package name */
    static final BillingResult f9144x;

    /* renamed from: y  reason: collision with root package name */
    static final BillingResult f9145y;

    /* renamed from: z  reason: collision with root package name */
    static final BillingResult f9146z;

    static {
        BillingResult.a c10 = BillingResult.c();
        c10.c(3);
        c10.b("Google Play In-app Billing API version is less than 3");
        f9121a = c10.a();
        BillingResult.a c11 = BillingResult.c();
        c11.c(3);
        c11.b("Google Play In-app Billing API version is less than 9");
        f9122b = c11.a();
        BillingResult.a c12 = BillingResult.c();
        c12.c(3);
        c12.b("Billing service unavailable on device.");
        f9123c = c12.a();
        BillingResult.a c13 = BillingResult.c();
        c13.c(5);
        c13.b("Client is already in the process of connecting to billing service.");
        f9124d = c13.a();
        BillingResult.a c14 = BillingResult.c();
        c14.c(5);
        c14.b("The list of SKUs can't be empty.");
        f9125e = c14.a();
        BillingResult.a c15 = BillingResult.c();
        c15.c(5);
        c15.b("SKU type can't be empty.");
        f9126f = c15.a();
        BillingResult.a c16 = BillingResult.c();
        c16.c(5);
        c16.b("Product type can't be empty.");
        f9127g = c16.a();
        BillingResult.a c17 = BillingResult.c();
        c17.c(-2);
        c17.b("Client does not support extra params.");
        f9128h = c17.a();
        BillingResult.a c18 = BillingResult.c();
        c18.c(5);
        c18.b("Invalid purchase token.");
        f9129i = c18.a();
        BillingResult.a c19 = BillingResult.c();
        c19.c(6);
        c19.b("An internal error occurred.");
        f9130j = c19.a();
        BillingResult.a c20 = BillingResult.c();
        c20.c(5);
        c20.b("SKU can't be null.");
        f9131k = c20.a();
        BillingResult.a c21 = BillingResult.c();
        c21.c(0);
        f9132l = c21.a();
        BillingResult.a c22 = BillingResult.c();
        c22.c(-1);
        c22.b("Service connection is disconnected.");
        f9133m = c22.a();
        BillingResult.a c23 = BillingResult.c();
        c23.c(2);
        c23.b("Timeout communicating with service.");
        f9134n = c23.a();
        BillingResult.a c24 = BillingResult.c();
        c24.c(-2);
        c24.b("Client does not support subscriptions.");
        f9135o = c24.a();
        BillingResult.a c25 = BillingResult.c();
        c25.c(-2);
        c25.b("Client does not support subscriptions update.");
        f9136p = c25.a();
        BillingResult.a c26 = BillingResult.c();
        c26.c(-2);
        c26.b("Client does not support get purchase history.");
        f9137q = c26.a();
        BillingResult.a c27 = BillingResult.c();
        c27.c(-2);
        c27.b("Client does not support price change confirmation.");
        f9138r = c27.a();
        BillingResult.a c28 = BillingResult.c();
        c28.c(-2);
        c28.b("Play Store version installed does not support cross selling products.");
        f9139s = c28.a();
        BillingResult.a c29 = BillingResult.c();
        c29.c(-2);
        c29.b("Client does not support multi-item purchases.");
        f9140t = c29.a();
        BillingResult.a c30 = BillingResult.c();
        c30.c(-2);
        c30.b("Client does not support offer_id_token.");
        f9141u = c30.a();
        BillingResult.a c31 = BillingResult.c();
        c31.c(-2);
        c31.b("Client does not support ProductDetails.");
        f9142v = c31.a();
        BillingResult.a c32 = BillingResult.c();
        c32.c(-2);
        c32.b("Client does not support in-app messages.");
        f9143w = c32.a();
        BillingResult.a c33 = BillingResult.c();
        c33.c(-2);
        c33.b("Client does not support user choice billing.");
        f9144x = c33.a();
        BillingResult.a c34 = BillingResult.c();
        c34.c(-2);
        c34.b("Play Store version installed does not support external offer.");
        f9145y = c34.a();
        BillingResult.a c35 = BillingResult.c();
        c35.c(5);
        c35.b("Unknown feature");
        f9146z = c35.a();
        BillingResult.a c36 = BillingResult.c();
        c36.c(-2);
        c36.b("Play Store version installed does not support get billing config.");
        A = c36.a();
        BillingResult.a c37 = BillingResult.c();
        c37.c(-2);
        c37.b("Query product details with serialized docid is not supported.");
        B = c37.a();
        BillingResult.a c38 = BillingResult.c();
        c38.c(4);
        c38.b("Item is unavailable for purchase.");
        C = c38.a();
        BillingResult.a c39 = BillingResult.c();
        c39.c(-2);
        c39.b("Query product details with developer specified account is not supported.");
        D = c39.a();
        BillingResult.a c40 = BillingResult.c();
        c40.c(-2);
        c40.b("Play Store version installed does not support alternative billing only.");
        E = c40.a();
        BillingResult.a c41 = BillingResult.c();
        c41.c(5);
        c41.b("To use this API you must specify a PurchasesUpdateListener when initializing a BillingClient.");
        F = c41.a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static BillingResult a(int i10, String str) {
        BillingResult.a c10 = BillingResult.c();
        c10.c(i10);
        c10.b(str);
        return c10.a();
    }
}
