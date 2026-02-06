package com.discord.fastest_list.react_events;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import ft.m;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import qr.v;
@m
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 *2\u00020\u0001:\u0002)*B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bB;\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\b\u0010\u0013\u001a\u00020\u0014H\u0016J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J1\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u001a\u001a\u00020\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dHÖ\u0003J\t\u0010\u001e\u001a\u00020\nHÖ\u0001J\t\u0010\u001f\u001a\u00020 HÖ\u0001J%\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00002\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0001¢\u0006\u0002\b(R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000f¨\u0006+"}, d2 = {"Lcom/discord/fastest_list/react_events/OnLayoutEvent;", "Lcom/discord/reactevents/ReactEvent;", "x", "", "y", "width", "height", "<init>", "(FFFF)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IFFFFLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getX", "()F", "getY", "getWidth", "getHeight", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$fastest_list_release", "$serializer", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OnLayoutEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final float height;
    private final float width;

    /* renamed from: x  reason: collision with root package name */
    private final float f9308x;

    /* renamed from: y  reason: collision with root package name */
    private final float f9309y;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/fastest_list/react_events/OnLayoutEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/fastest_list/react_events/OnLayoutEvent;", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return OnLayoutEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ OnLayoutEvent(int i10, float f10, float f11, float f12, float f13, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, OnLayoutEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.f9308x = f10;
        this.f9309y = f11;
        this.width = f12;
        this.height = f13;
    }

    public static /* synthetic */ OnLayoutEvent copy$default(OnLayoutEvent onLayoutEvent, float f10, float f11, float f12, float f13, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            f10 = onLayoutEvent.f9308x;
        }
        if ((i10 & 2) != 0) {
            f11 = onLayoutEvent.f9309y;
        }
        if ((i10 & 4) != 0) {
            f12 = onLayoutEvent.width;
        }
        if ((i10 & 8) != 0) {
            f13 = onLayoutEvent.height;
        }
        return onLayoutEvent.copy(f10, f11, f12, f13);
    }

    public static final /* synthetic */ void write$Self$fastest_list_release(OnLayoutEvent onLayoutEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.r(serialDescriptor, 0, onLayoutEvent.f9308x);
        compositeEncoder.r(serialDescriptor, 1, onLayoutEvent.f9309y);
        compositeEncoder.r(serialDescriptor, 2, onLayoutEvent.width);
        compositeEncoder.r(serialDescriptor, 3, onLayoutEvent.height);
    }

    public final float component1() {
        return this.f9308x;
    }

    public final float component2() {
        return this.f9309y;
    }

    public final float component3() {
        return this.width;
    }

    public final float component4() {
        return this.height;
    }

    @NotNull
    public final OnLayoutEvent copy(float f10, float f11, float f12, float f13) {
        return new OnLayoutEvent(f10, f11, f12, f13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OnLayoutEvent) {
            OnLayoutEvent onLayoutEvent = (OnLayoutEvent) obj;
            return Float.compare(this.f9308x, onLayoutEvent.f9308x) == 0 && Float.compare(this.f9309y, onLayoutEvent.f9309y) == 0 && Float.compare(this.width, onLayoutEvent.width) == 0 && Float.compare(this.height, onLayoutEvent.height) == 0;
        }
        return false;
    }

    public final float getHeight() {
        return this.height;
    }

    public final float getWidth() {
        return this.width;
    }

    public final float getX() {
        return this.f9308x;
    }

    public final float getY() {
        return this.f9309y;
    }

    public int hashCode() {
        return (((((Float.hashCode(this.f9308x) * 31) + Float.hashCode(this.f9309y)) * 31) + Float.hashCode(this.width)) * 31) + Float.hashCode(this.height);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("layout", NativeMapExtensionsKt.nativeMapOf(v.a("x", Float.valueOf(this.f9308x)), v.a("y", Float.valueOf(this.f9309y)), v.a("width", Float.valueOf(this.width)), v.a("height", Float.valueOf(this.height)))));
    }

    @NotNull
    public String toString() {
        float f10 = this.f9308x;
        float f11 = this.f9309y;
        float f12 = this.width;
        float f13 = this.height;
        return "OnLayoutEvent(x=" + f10 + ", y=" + f11 + ", width=" + f12 + ", height=" + f13 + ")";
    }

    public OnLayoutEvent(float f10, float f11, float f12, float f13) {
        this.f9308x = f10;
        this.f9309y = f11;
        this.width = f12;
        this.height = f13;
    }
}
