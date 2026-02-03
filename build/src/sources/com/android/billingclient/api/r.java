package com.android.billingclient.api;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    private final List f8746a;

    /* renamed from: b  reason: collision with root package name */
    private final BillingResult f8747b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(BillingResult billingResult, List list) {
        this.f8746a = list;
        this.f8747b = billingResult;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final BillingResult a() {
        return this.f8747b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final List b() {
        return this.f8746a;
    }
}
