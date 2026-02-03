package com.discord.span.utilities.common;

import bt.v1;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.m;
@m
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 #2\u00020\u0001:\u0002\"#B#\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007B3\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0006\u0010\u000bJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J'\u0010\u0013\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001J%\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00002\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 H\u0001¢\u0006\u0002\b!R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\rR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\r¨\u0006$"}, d2 = {"Lcom/discord/span/utilities/common/BackgroundStyle;", "", ViewProps.BACKGROUND_COLOR, "", "cornerRadius", ViewProps.MARGIN_VERTICAL, "<init>", "(III)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIIILkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getBackgroundColor", "()I", "getCornerRadius", "getMarginVertical", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$span_utilities_release", "$serializer", "Companion", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BackgroundStyle {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int backgroundColor;
    private final int cornerRadius;
    private final int marginVertical;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/span/utilities/common/BackgroundStyle$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/span/utilities/common/BackgroundStyle;", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return BackgroundStyle$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ BackgroundStyle(int i10, int i11, int i12, int i13, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, BackgroundStyle$$serializer.INSTANCE.getDescriptor());
        }
        this.backgroundColor = i11;
        if ((i10 & 2) == 0) {
            this.cornerRadius = 0;
        } else {
            this.cornerRadius = i12;
        }
        if ((i10 & 4) == 0) {
            this.marginVertical = 0;
        } else {
            this.marginVertical = i13;
        }
    }

    public static /* synthetic */ BackgroundStyle copy$default(BackgroundStyle backgroundStyle, int i10, int i11, int i12, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            i10 = backgroundStyle.backgroundColor;
        }
        if ((i13 & 2) != 0) {
            i11 = backgroundStyle.cornerRadius;
        }
        if ((i13 & 4) != 0) {
            i12 = backgroundStyle.marginVertical;
        }
        return backgroundStyle.copy(i10, i11, i12);
    }

    public static final /* synthetic */ void write$Self$span_utilities_release(BackgroundStyle backgroundStyle, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, backgroundStyle.backgroundColor);
        if (compositeEncoder.y(serialDescriptor, 1) || backgroundStyle.cornerRadius != 0) {
            compositeEncoder.v(serialDescriptor, 1, backgroundStyle.cornerRadius);
        }
        if (compositeEncoder.y(serialDescriptor, 2) || backgroundStyle.marginVertical != 0) {
            compositeEncoder.v(serialDescriptor, 2, backgroundStyle.marginVertical);
        }
    }

    public final int component1() {
        return this.backgroundColor;
    }

    public final int component2() {
        return this.cornerRadius;
    }

    public final int component3() {
        return this.marginVertical;
    }

    @NotNull
    public final BackgroundStyle copy(int i10, int i11, int i12) {
        return new BackgroundStyle(i10, i11, i12);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BackgroundStyle) {
            BackgroundStyle backgroundStyle = (BackgroundStyle) obj;
            return this.backgroundColor == backgroundStyle.backgroundColor && this.cornerRadius == backgroundStyle.cornerRadius && this.marginVertical == backgroundStyle.marginVertical;
        }
        return false;
    }

    public final int getBackgroundColor() {
        return this.backgroundColor;
    }

    public final int getCornerRadius() {
        return this.cornerRadius;
    }

    public final int getMarginVertical() {
        return this.marginVertical;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.backgroundColor) * 31) + Integer.hashCode(this.cornerRadius)) * 31) + Integer.hashCode(this.marginVertical);
    }

    @NotNull
    public String toString() {
        int i10 = this.backgroundColor;
        int i11 = this.cornerRadius;
        int i12 = this.marginVertical;
        return "BackgroundStyle(backgroundColor=" + i10 + ", cornerRadius=" + i11 + ", marginVertical=" + i12 + ")";
    }

    public BackgroundStyle(int i10, int i11, int i12) {
        this.backgroundColor = i10;
        this.cornerRadius = i11;
        this.marginVertical = i12;
    }

    public /* synthetic */ BackgroundStyle(int i10, int i11, int i12, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, (i13 & 2) != 0 ? 0 : i11, (i13 & 4) != 0 ? 0 : i12);
    }
}
