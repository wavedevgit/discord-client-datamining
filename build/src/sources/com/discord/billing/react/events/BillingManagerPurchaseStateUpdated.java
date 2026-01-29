package com.discord.billing.react.events;

import at.v1;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 !2\u00020\u0001:\u0002 !B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B+\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0006\u0010\u000bJ\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00052\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J%\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u00002\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001eH\u0001¢\u0006\u0002\b\u001fR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0004\u0010\u000e¨\u0006\""}, d2 = {"Lcom/discord/billing/react/events/BillingManagerPurchaseStateUpdated;", "Lcom/discord/reactevents/ReactEvent;", "billingResult", "", "isActivePurchase", "", "<init>", "(IZ)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBillingResult", "()I", "()Z", "component1", "component2", "copy", "equals", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$billing_release", "$serializer", "Companion", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BillingManagerPurchaseStateUpdated implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int billingResult;
    private final boolean isActivePurchase;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/billing/react/events/BillingManagerPurchaseStateUpdated$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/billing/react/events/BillingManagerPurchaseStateUpdated;", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return BillingManagerPurchaseStateUpdated$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ BillingManagerPurchaseStateUpdated(int i10, int i11, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, BillingManagerPurchaseStateUpdated$$serializer.INSTANCE.getDescriptor());
        }
        this.billingResult = i11;
        this.isActivePurchase = z10;
    }

    public static /* synthetic */ BillingManagerPurchaseStateUpdated copy$default(BillingManagerPurchaseStateUpdated billingManagerPurchaseStateUpdated, int i10, boolean z10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = billingManagerPurchaseStateUpdated.billingResult;
        }
        if ((i11 & 2) != 0) {
            z10 = billingManagerPurchaseStateUpdated.isActivePurchase;
        }
        return billingManagerPurchaseStateUpdated.copy(i10, z10);
    }

    public static final /* synthetic */ void write$Self$billing_release(BillingManagerPurchaseStateUpdated billingManagerPurchaseStateUpdated, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.w(serialDescriptor, 0, billingManagerPurchaseStateUpdated.billingResult);
        compositeEncoder.x(serialDescriptor, 1, billingManagerPurchaseStateUpdated.isActivePurchase);
    }

    public final int component1() {
        return this.billingResult;
    }

    public final boolean component2() {
        return this.isActivePurchase;
    }

    @NotNull
    public final BillingManagerPurchaseStateUpdated copy(int i10, boolean z10) {
        return new BillingManagerPurchaseStateUpdated(i10, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BillingManagerPurchaseStateUpdated) {
            BillingManagerPurchaseStateUpdated billingManagerPurchaseStateUpdated = (BillingManagerPurchaseStateUpdated) obj;
            return this.billingResult == billingManagerPurchaseStateUpdated.billingResult && this.isActivePurchase == billingManagerPurchaseStateUpdated.isActivePurchase;
        }
        return false;
    }

    public final int getBillingResult() {
        return this.billingResult;
    }

    public int hashCode() {
        return (Integer.hashCode(this.billingResult) * 31) + Boolean.hashCode(this.isActivePurchase);
    }

    public final boolean isActivePurchase() {
        return this.isActivePurchase;
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        int i10 = this.billingResult;
        boolean z10 = this.isActivePurchase;
        return "BillingManagerPurchaseStateUpdated(billingResult=" + i10 + ", isActivePurchase=" + z10 + ")";
    }

    public BillingManagerPurchaseStateUpdated(int i10, boolean z10) {
        this.billingResult = i10;
        this.isActivePurchase = z10;
    }
}
