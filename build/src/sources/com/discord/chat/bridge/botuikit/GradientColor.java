package com.discord.chat.bridge.botuikit;

import at.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 (2\u00020\u0001:\u0002'(B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tB;\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\b\u0010\rJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0007HÆ\u0003J1\u0010\u0018\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u0019\u001a\u00020\u001a2\b\u0010\u001b\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001d\u001a\u00020\u001eHÖ\u0001J%\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\u00002\u0006\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020%H\u0001¢\u0006\u0002\b&R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013¨\u0006)"}, d2 = {"Lcom/discord/chat/bridge/botuikit/GradientColor;", "", "r", "", "g", "b", "a", "", "<init>", "(IIIF)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIIIFLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getR", "()I", "getG", "getB", "getA", "()F", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@xs.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GradientColor {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final float f9647a;

    /* renamed from: b  reason: collision with root package name */
    private final int f9648b;

    /* renamed from: g  reason: collision with root package name */
    private final int f9649g;

    /* renamed from: r  reason: collision with root package name */
    private final int f9650r;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/botuikit/GradientColor$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/botuikit/GradientColor;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return GradientColor$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ GradientColor(int i10, int i11, int i12, int i13, float f10, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, GradientColor$$serializer.INSTANCE.getDescriptor());
        }
        this.f9650r = i11;
        this.f9649g = i12;
        this.f9648b = i13;
        this.f9647a = f10;
    }

    public static /* synthetic */ GradientColor copy$default(GradientColor gradientColor, int i10, int i11, int i12, float f10, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            i10 = gradientColor.f9650r;
        }
        if ((i13 & 2) != 0) {
            i11 = gradientColor.f9649g;
        }
        if ((i13 & 4) != 0) {
            i12 = gradientColor.f9648b;
        }
        if ((i13 & 8) != 0) {
            f10 = gradientColor.f9647a;
        }
        return gradientColor.copy(i10, i11, i12, f10);
    }

    public static final /* synthetic */ void write$Self$chat_release(GradientColor gradientColor, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.w(serialDescriptor, 0, gradientColor.f9650r);
        compositeEncoder.w(serialDescriptor, 1, gradientColor.f9649g);
        compositeEncoder.w(serialDescriptor, 2, gradientColor.f9648b);
        compositeEncoder.s(serialDescriptor, 3, gradientColor.f9647a);
    }

    public final int component1() {
        return this.f9650r;
    }

    public final int component2() {
        return this.f9649g;
    }

    public final int component3() {
        return this.f9648b;
    }

    public final float component4() {
        return this.f9647a;
    }

    @NotNull
    public final GradientColor copy(int i10, int i11, int i12, float f10) {
        return new GradientColor(i10, i11, i12, f10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GradientColor) {
            GradientColor gradientColor = (GradientColor) obj;
            return this.f9650r == gradientColor.f9650r && this.f9649g == gradientColor.f9649g && this.f9648b == gradientColor.f9648b && Float.compare(this.f9647a, gradientColor.f9647a) == 0;
        }
        return false;
    }

    public final float getA() {
        return this.f9647a;
    }

    public final int getB() {
        return this.f9648b;
    }

    public final int getG() {
        return this.f9649g;
    }

    public final int getR() {
        return this.f9650r;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f9650r) * 31) + Integer.hashCode(this.f9649g)) * 31) + Integer.hashCode(this.f9648b)) * 31) + Float.hashCode(this.f9647a);
    }

    @NotNull
    public String toString() {
        int i10 = this.f9650r;
        int i11 = this.f9649g;
        int i12 = this.f9648b;
        float f10 = this.f9647a;
        return "GradientColor(r=" + i10 + ", g=" + i11 + ", b=" + i12 + ", a=" + f10 + ")";
    }

    public GradientColor(int i10, int i11, int i12, float f10) {
        this.f9650r = i10;
        this.f9649g = i11;
        this.f9648b = i12;
        this.f9647a = f10;
    }
}
