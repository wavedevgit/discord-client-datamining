package com.discord.activity_invites;

import gt.m;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import kt.v1;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bB;\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J1\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001b\u001a\u00020\nHÖ\u0001J\t\u0010\u001c\u001a\u00020\u001dHÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000f¨\u0006("}, d2 = {"Lcom/discord/activity_invites/RGBAColorModel;", "", "r", "", "g", "b", "a", "<init>", "(FFFF)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IFFFFLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getR", "()F", "getG", "getB", "getA", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$activity_invites_release", "$serializer", "Companion", "activity_invites_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RGBAColorModel {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final float f8560a;

    /* renamed from: b  reason: collision with root package name */
    private final float f8561b;

    /* renamed from: g  reason: collision with root package name */
    private final float f8562g;

    /* renamed from: r  reason: collision with root package name */
    private final float f8563r;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/activity_invites/RGBAColorModel$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/activity_invites/RGBAColorModel;", "activity_invites_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return RGBAColorModel$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ RGBAColorModel(int i10, float f10, float f11, float f12, float f13, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, RGBAColorModel$$serializer.INSTANCE.getDescriptor());
        }
        this.f8563r = f10;
        this.f8562g = f11;
        this.f8561b = f12;
        this.f8560a = f13;
    }

    public static /* synthetic */ RGBAColorModel copy$default(RGBAColorModel rGBAColorModel, float f10, float f11, float f12, float f13, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            f10 = rGBAColorModel.f8563r;
        }
        if ((i10 & 2) != 0) {
            f11 = rGBAColorModel.f8562g;
        }
        if ((i10 & 4) != 0) {
            f12 = rGBAColorModel.f8561b;
        }
        if ((i10 & 8) != 0) {
            f13 = rGBAColorModel.f8560a;
        }
        return rGBAColorModel.copy(f10, f11, f12, f13);
    }

    public static final /* synthetic */ void write$Self$activity_invites_release(RGBAColorModel rGBAColorModel, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.s(serialDescriptor, 0, rGBAColorModel.f8563r);
        compositeEncoder.s(serialDescriptor, 1, rGBAColorModel.f8562g);
        compositeEncoder.s(serialDescriptor, 2, rGBAColorModel.f8561b);
        compositeEncoder.s(serialDescriptor, 3, rGBAColorModel.f8560a);
    }

    public final float component1() {
        return this.f8563r;
    }

    public final float component2() {
        return this.f8562g;
    }

    public final float component3() {
        return this.f8561b;
    }

    public final float component4() {
        return this.f8560a;
    }

    @NotNull
    public final RGBAColorModel copy(float f10, float f11, float f12, float f13) {
        return new RGBAColorModel(f10, f11, f12, f13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof RGBAColorModel) {
            RGBAColorModel rGBAColorModel = (RGBAColorModel) obj;
            return Float.compare(this.f8563r, rGBAColorModel.f8563r) == 0 && Float.compare(this.f8562g, rGBAColorModel.f8562g) == 0 && Float.compare(this.f8561b, rGBAColorModel.f8561b) == 0 && Float.compare(this.f8560a, rGBAColorModel.f8560a) == 0;
        }
        return false;
    }

    public final float getA() {
        return this.f8560a;
    }

    public final float getB() {
        return this.f8561b;
    }

    public final float getG() {
        return this.f8562g;
    }

    public final float getR() {
        return this.f8563r;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f8563r) * 31) + Float.hashCode(this.f8562g)) * 31) + Float.hashCode(this.f8561b)) * 31) + Float.hashCode(this.f8560a);
    }

    @NotNull
    public String toString() {
        float f10 = this.f8563r;
        float f11 = this.f8562g;
        float f12 = this.f8561b;
        float f13 = this.f8560a;
        return "RGBAColorModel(r=" + f10 + ", g=" + f11 + ", b=" + f12 + ", a=" + f13 + ")";
    }

    public RGBAColorModel(float f10, float f11, float f12, float f13) {
        this.f8563r = f10;
        this.f8562g = f11;
        this.f8561b = f12;
        this.f8560a = f13;
    }
}
