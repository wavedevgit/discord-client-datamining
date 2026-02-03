package com.discord.fastest_list.android.placeholder;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.fastest_list.android.placeholder.FastestListPlaceholderAlignment;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
import sr.a;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b0\u0018\u0000 \u00072\u00020\u0001:\u0004\u0004\u0005\u0006\u0007B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0003\b\t\n¨\u0006\u000b"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType;", "", "<init>", "()V", "None", "Shape", "FeedItem", "Companion", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$FeedItem;", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$None;", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape;", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class FastestListPlaceholderType {
    @NotNull
    public static final Companion Companion = new Companion(null);

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Companion;", "", "<init>", "()V", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b2\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B«\u0001\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0005\u0012\b\b\u0001\u0010\b\u001a\u00020\u0005\u0012\b\b\u0001\u0010\t\u001a\u00020\u0005\u0012\b\b\u0001\u0010\n\u001a\u00020\u0003\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\b\u0001\u0010\r\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u000e\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u000f\u001a\u00020\u0005\u0012\u0006\u0010\u0010\u001a\u00020\u0005\u0012\u0006\u0010\u0011\u001a\u00020\u0012\u0012\u0006\u0010\u0013\u001a\u00020\u0005\u0012\u0006\u0010\u0014\u001a\u00020\u0005\u0012\u0006\u0010\u0015\u001a\u00020\u0005\u0012\u0006\u0010\u0016\u001a\u00020\u0005\u0012\u0006\u0010\u0017\u001a\u00020\u0005¢\u0006\u0004\b\u0018\u0010\u0019J\t\u00100\u001a\u00020\u0003HÆ\u0003J\t\u00101\u001a\u00020\u0005HÆ\u0003J\t\u00102\u001a\u00020\u0005HÆ\u0003J\t\u00103\u001a\u00020\u0005HÆ\u0003J\t\u00104\u001a\u00020\u0005HÆ\u0003J\t\u00105\u001a\u00020\u0005HÆ\u0003J\t\u00106\u001a\u00020\u0003HÆ\u0003J\t\u00107\u001a\u00020\fHÆ\u0003J\t\u00108\u001a\u00020\u0003HÆ\u0003J\t\u00109\u001a\u00020\u0005HÆ\u0003J\t\u0010:\u001a\u00020\u0005HÆ\u0003J\t\u0010;\u001a\u00020\u0005HÆ\u0003J\t\u0010<\u001a\u00020\u0012HÆ\u0003J\t\u0010=\u001a\u00020\u0005HÆ\u0003J\t\u0010>\u001a\u00020\u0005HÆ\u0003J\t\u0010?\u001a\u00020\u0005HÆ\u0003J\t\u0010@\u001a\u00020\u0005HÆ\u0003J\t\u0010A\u001a\u00020\u0005HÆ\u0003J½\u0001\u0010B\u001a\u00020\u00002\b\b\u0003\u0010\u0002\u001a\u00020\u00032\b\b\u0003\u0010\u0004\u001a\u00020\u00052\b\b\u0003\u0010\u0006\u001a\u00020\u00052\b\b\u0003\u0010\u0007\u001a\u00020\u00052\b\b\u0003\u0010\b\u001a\u00020\u00052\b\b\u0003\u0010\t\u001a\u00020\u00052\b\b\u0003\u0010\n\u001a\u00020\u00032\b\b\u0002\u0010\u000b\u001a\u00020\f2\b\b\u0003\u0010\r\u001a\u00020\u00032\b\b\u0003\u0010\u000e\u001a\u00020\u00052\b\b\u0003\u0010\u000f\u001a\u00020\u00052\b\b\u0002\u0010\u0010\u001a\u00020\u00052\b\b\u0002\u0010\u0011\u001a\u00020\u00122\b\b\u0002\u0010\u0013\u001a\u00020\u00052\b\b\u0002\u0010\u0014\u001a\u00020\u00052\b\b\u0002\u0010\u0015\u001a\u00020\u00052\b\b\u0002\u0010\u0016\u001a\u00020\u00052\b\b\u0002\u0010\u0017\u001a\u00020\u0005HÆ\u0001J\u0013\u0010C\u001a\u00020\f2\b\u0010D\u001a\u0004\u0018\u00010EHÖ\u0003J\t\u0010F\u001a\u00020\u0003HÖ\u0001J\t\u0010G\u001a\u00020HHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001dR\u0011\u0010\u0007\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u001dR\u0011\u0010\b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u001dR\u0011\u0010\t\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u001dR\u0011\u0010\n\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010\u001bR\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0011\u0010\r\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u001bR\u0011\u0010\u000e\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b&\u0010\u001dR\u0011\u0010\u000f\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\u001dR\u0011\u0010\u0010\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b(\u0010\u001dR\u0011\u0010\u0011\u001a\u00020\u0012¢\u0006\b\n\u0000\u001a\u0004\b)\u0010*R\u0011\u0010\u0013\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b+\u0010\u001dR\u0011\u0010\u0014\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b,\u0010\u001dR\u0011\u0010\u0015\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b-\u0010\u001dR\u0011\u0010\u0016\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b.\u0010\u001dR\u0011\u0010\u0017\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b/\u0010\u001d¨\u0006I"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$FeedItem;", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType;", ViewProps.BACKGROUND_COLOR, "", "borderRadius", "", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius", ViewProps.COLOR, "divider", "", "dividerColor", "dividerPaddingLeft", "dividerPaddingRight", ViewProps.PADDING, "shapeType", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type;", "shapeSize", "labelPadding", "labelPaddingInnerRatio", "labelSize", "labelSecondarySize", "<init>", "(IFFFFFIZIFFFLcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type;FFFFF)V", "getBackgroundColor", "()I", "getBorderRadius", "()F", "getBorderTopLeftRadius", "getBorderTopRightRadius", "getBorderBottomLeftRadius", "getBorderBottomRightRadius", "getColor", "getDivider", "()Z", "getDividerColor", "getDividerPaddingLeft", "getDividerPaddingRight", "getPadding", "getShapeType", "()Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type;", "getShapeSize", "getLabelPadding", "getLabelPaddingInnerRatio", "getLabelSize", "getLabelSecondarySize", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "copy", "equals", "other", "", "hashCode", "toString", "", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class FeedItem extends FastestListPlaceholderType {
        private final int backgroundColor;
        private final float borderBottomLeftRadius;
        private final float borderBottomRightRadius;
        private final float borderRadius;
        private final float borderTopLeftRadius;
        private final float borderTopRightRadius;
        private final int color;
        private final boolean divider;
        private final int dividerColor;
        private final float dividerPaddingLeft;
        private final float dividerPaddingRight;
        private final float labelPadding;
        private final float labelPaddingInnerRatio;
        private final float labelSecondarySize;
        private final float labelSize;
        private final float padding;
        private final float shapeSize;
        @NotNull
        private final Shape.Type shapeType;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public FeedItem(int i10, float f10, float f11, float f12, float f13, float f14, int i11, boolean z10, int i12, float f15, float f16, float f17, @NotNull Shape.Type shapeType, float f18, float f19, float f20, float f21, float f22) {
            super(null);
            Intrinsics.checkNotNullParameter(shapeType, "shapeType");
            this.backgroundColor = i10;
            this.borderRadius = f10;
            this.borderTopLeftRadius = f11;
            this.borderTopRightRadius = f12;
            this.borderBottomLeftRadius = f13;
            this.borderBottomRightRadius = f14;
            this.color = i11;
            this.divider = z10;
            this.dividerColor = i12;
            this.dividerPaddingLeft = f15;
            this.dividerPaddingRight = f16;
            this.padding = f17;
            this.shapeType = shapeType;
            this.shapeSize = f18;
            this.labelPadding = f19;
            this.labelPaddingInnerRatio = f20;
            this.labelSize = f21;
            this.labelSecondarySize = f22;
        }

        public static /* synthetic */ FeedItem copy$default(FeedItem feedItem, int i10, float f10, float f11, float f12, float f13, float f14, int i11, boolean z10, int i12, float f15, float f16, float f17, Shape.Type type, float f18, float f19, float f20, float f21, float f22, int i13, Object obj) {
            float f23;
            float f24;
            int i14 = (i13 & 1) != 0 ? feedItem.backgroundColor : i10;
            float f25 = (i13 & 2) != 0 ? feedItem.borderRadius : f10;
            float f26 = (i13 & 4) != 0 ? feedItem.borderTopLeftRadius : f11;
            float f27 = (i13 & 8) != 0 ? feedItem.borderTopRightRadius : f12;
            float f28 = (i13 & 16) != 0 ? feedItem.borderBottomLeftRadius : f13;
            float f29 = (i13 & 32) != 0 ? feedItem.borderBottomRightRadius : f14;
            int i15 = (i13 & 64) != 0 ? feedItem.color : i11;
            boolean z11 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? feedItem.divider : z10;
            int i16 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? feedItem.dividerColor : i12;
            float f30 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? feedItem.dividerPaddingLeft : f15;
            float f31 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? feedItem.dividerPaddingRight : f16;
            float f32 = (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? feedItem.padding : f17;
            Shape.Type type2 = (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? feedItem.shapeType : type;
            float f33 = (i13 & 8192) != 0 ? feedItem.shapeSize : f18;
            int i17 = i14;
            float f34 = (i13 & 16384) != 0 ? feedItem.labelPadding : f19;
            float f35 = (i13 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? feedItem.labelPaddingInnerRatio : f20;
            float f36 = (i13 & 65536) != 0 ? feedItem.labelSize : f21;
            if ((i13 & 131072) != 0) {
                f24 = f36;
                f23 = feedItem.labelSecondarySize;
            } else {
                f23 = f22;
                f24 = f36;
            }
            return feedItem.copy(i17, f25, f26, f27, f28, f29, i15, z11, i16, f30, f31, f32, type2, f33, f34, f35, f24, f23);
        }

        public final int component1() {
            return this.backgroundColor;
        }

        public final float component10() {
            return this.dividerPaddingLeft;
        }

        public final float component11() {
            return this.dividerPaddingRight;
        }

        public final float component12() {
            return this.padding;
        }

        @NotNull
        public final Shape.Type component13() {
            return this.shapeType;
        }

        public final float component14() {
            return this.shapeSize;
        }

        public final float component15() {
            return this.labelPadding;
        }

        public final float component16() {
            return this.labelPaddingInnerRatio;
        }

        public final float component17() {
            return this.labelSize;
        }

        public final float component18() {
            return this.labelSecondarySize;
        }

        public final float component2() {
            return this.borderRadius;
        }

        public final float component3() {
            return this.borderTopLeftRadius;
        }

        public final float component4() {
            return this.borderTopRightRadius;
        }

        public final float component5() {
            return this.borderBottomLeftRadius;
        }

        public final float component6() {
            return this.borderBottomRightRadius;
        }

        public final int component7() {
            return this.color;
        }

        public final boolean component8() {
            return this.divider;
        }

        public final int component9() {
            return this.dividerColor;
        }

        @NotNull
        public final FeedItem copy(int i10, float f10, float f11, float f12, float f13, float f14, int i11, boolean z10, int i12, float f15, float f16, float f17, @NotNull Shape.Type shapeType, float f18, float f19, float f20, float f21, float f22) {
            Intrinsics.checkNotNullParameter(shapeType, "shapeType");
            return new FeedItem(i10, f10, f11, f12, f13, f14, i11, z10, i12, f15, f16, f17, shapeType, f18, f19, f20, f21, f22);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof FeedItem) {
                FeedItem feedItem = (FeedItem) obj;
                return this.backgroundColor == feedItem.backgroundColor && Float.compare(this.borderRadius, feedItem.borderRadius) == 0 && Float.compare(this.borderTopLeftRadius, feedItem.borderTopLeftRadius) == 0 && Float.compare(this.borderTopRightRadius, feedItem.borderTopRightRadius) == 0 && Float.compare(this.borderBottomLeftRadius, feedItem.borderBottomLeftRadius) == 0 && Float.compare(this.borderBottomRightRadius, feedItem.borderBottomRightRadius) == 0 && this.color == feedItem.color && this.divider == feedItem.divider && this.dividerColor == feedItem.dividerColor && Float.compare(this.dividerPaddingLeft, feedItem.dividerPaddingLeft) == 0 && Float.compare(this.dividerPaddingRight, feedItem.dividerPaddingRight) == 0 && Float.compare(this.padding, feedItem.padding) == 0 && this.shapeType == feedItem.shapeType && Float.compare(this.shapeSize, feedItem.shapeSize) == 0 && Float.compare(this.labelPadding, feedItem.labelPadding) == 0 && Float.compare(this.labelPaddingInnerRatio, feedItem.labelPaddingInnerRatio) == 0 && Float.compare(this.labelSize, feedItem.labelSize) == 0 && Float.compare(this.labelSecondarySize, feedItem.labelSecondarySize) == 0;
            }
            return false;
        }

        public final int getBackgroundColor() {
            return this.backgroundColor;
        }

        public final float getBorderBottomLeftRadius() {
            return this.borderBottomLeftRadius;
        }

        public final float getBorderBottomRightRadius() {
            return this.borderBottomRightRadius;
        }

        public final float getBorderRadius() {
            return this.borderRadius;
        }

        public final float getBorderTopLeftRadius() {
            return this.borderTopLeftRadius;
        }

        public final float getBorderTopRightRadius() {
            return this.borderTopRightRadius;
        }

        public final int getColor() {
            return this.color;
        }

        public final boolean getDivider() {
            return this.divider;
        }

        public final int getDividerColor() {
            return this.dividerColor;
        }

        public final float getDividerPaddingLeft() {
            return this.dividerPaddingLeft;
        }

        public final float getDividerPaddingRight() {
            return this.dividerPaddingRight;
        }

        public final float getLabelPadding() {
            return this.labelPadding;
        }

        public final float getLabelPaddingInnerRatio() {
            return this.labelPaddingInnerRatio;
        }

        public final float getLabelSecondarySize() {
            return this.labelSecondarySize;
        }

        public final float getLabelSize() {
            return this.labelSize;
        }

        public final float getPadding() {
            return this.padding;
        }

        public final float getShapeSize() {
            return this.shapeSize;
        }

        @NotNull
        public final Shape.Type getShapeType() {
            return this.shapeType;
        }

        public int hashCode() {
            return (((((((((((((((((((((((((((((((((Integer.hashCode(this.backgroundColor) * 31) + Float.hashCode(this.borderRadius)) * 31) + Float.hashCode(this.borderTopLeftRadius)) * 31) + Float.hashCode(this.borderTopRightRadius)) * 31) + Float.hashCode(this.borderBottomLeftRadius)) * 31) + Float.hashCode(this.borderBottomRightRadius)) * 31) + Integer.hashCode(this.color)) * 31) + Boolean.hashCode(this.divider)) * 31) + Integer.hashCode(this.dividerColor)) * 31) + Float.hashCode(this.dividerPaddingLeft)) * 31) + Float.hashCode(this.dividerPaddingRight)) * 31) + Float.hashCode(this.padding)) * 31) + this.shapeType.hashCode()) * 31) + Float.hashCode(this.shapeSize)) * 31) + Float.hashCode(this.labelPadding)) * 31) + Float.hashCode(this.labelPaddingInnerRatio)) * 31) + Float.hashCode(this.labelSize)) * 31) + Float.hashCode(this.labelSecondarySize);
        }

        @NotNull
        public String toString() {
            int i10 = this.backgroundColor;
            float f10 = this.borderRadius;
            float f11 = this.borderTopLeftRadius;
            float f12 = this.borderTopRightRadius;
            float f13 = this.borderBottomLeftRadius;
            float f14 = this.borderBottomRightRadius;
            int i11 = this.color;
            boolean z10 = this.divider;
            int i12 = this.dividerColor;
            float f15 = this.dividerPaddingLeft;
            float f16 = this.dividerPaddingRight;
            float f17 = this.padding;
            Shape.Type type = this.shapeType;
            float f18 = this.shapeSize;
            float f19 = this.labelPadding;
            float f20 = this.labelPaddingInnerRatio;
            float f21 = this.labelSize;
            float f22 = this.labelSecondarySize;
            return "FeedItem(backgroundColor=" + i10 + ", borderRadius=" + f10 + ", borderTopLeftRadius=" + f11 + ", borderTopRightRadius=" + f12 + ", borderBottomLeftRadius=" + f13 + ", borderBottomRightRadius=" + f14 + ", color=" + i11 + ", divider=" + z10 + ", dividerColor=" + i12 + ", dividerPaddingLeft=" + f15 + ", dividerPaddingRight=" + f16 + ", padding=" + f17 + ", shapeType=" + type + ", shapeSize=" + f18 + ", labelPadding=" + f19 + ", labelPaddingInnerRatio=" + f20 + ", labelSize=" + f21 + ", labelSecondarySize=" + f22 + ")";
        }
    }

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$None;", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class None extends FastestListPlaceholderType {
        @NotNull
        public static final None INSTANCE = new None();

        private None() {
            super(null);
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof None);
        }

        public int hashCode() {
            return 1223619387;
        }

        @NotNull
        public String toString() {
            return "None";
        }
    }

    @Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\"\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001:\u0001:Bq\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0003\u0012\b\b\u0001\u0010\b\u001a\u00020\u0003\u0012\b\b\u0001\u0010\t\u001a\u00020\u0003\u0012\n\b\u0001\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0001\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\f\u001a\u00020\r\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\u0006\u0010\u0010\u001a\u00020\u0011¢\u0006\u0004\b\u0012\u0010\u0013J\t\u0010&\u001a\u00020\u0003HÆ\u0003J\t\u0010'\u001a\u00020\u0005HÆ\u0003J\t\u0010(\u001a\u00020\u0005HÆ\u0003J\t\u0010)\u001a\u00020\u0003HÆ\u0003J\t\u0010*\u001a\u00020\u0003HÆ\u0003J\t\u0010+\u001a\u00020\u0003HÆ\u0003J\u0010\u0010,\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u001dJ\u0010\u0010-\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u001dJ\t\u0010.\u001a\u00020\rHÆ\u0003J\t\u0010/\u001a\u00020\u000fHÆ\u0003J\t\u00100\u001a\u00020\u0011HÆ\u0003J\u0080\u0001\u00101\u001a\u00020\u00002\b\b\u0003\u0010\u0002\u001a\u00020\u00032\b\b\u0003\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0003\u0010\u0007\u001a\u00020\u00032\b\b\u0003\u0010\b\u001a\u00020\u00032\b\b\u0003\u0010\t\u001a\u00020\u00032\n\b\u0003\u0010\n\u001a\u0004\u0018\u00010\u00032\n\b\u0003\u0010\u000b\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\f\u001a\u00020\r2\b\b\u0002\u0010\u000e\u001a\u00020\u000f2\b\b\u0002\u0010\u0010\u001a\u00020\u0011HÆ\u0001¢\u0006\u0002\u00102J\u0013\u00103\u001a\u0002042\b\u00105\u001a\u0004\u0018\u000106HÖ\u0003J\t\u00107\u001a\u00020\u0005HÖ\u0001J\t\u00108\u001a\u000209HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0017R\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0015R\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0015R\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0015R\u0015\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u001e\u001a\u0004\b\u001c\u0010\u001dR\u0015\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u001e\u001a\u0004\b\u001f\u0010\u001dR\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0011\u0010\u000e\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#R\u0011\u0010\u0010\u001a\u00020\u0011¢\u0006\b\n\u0000\u001a\u0004\b$\u0010%¨\u0006;"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape;", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType;", "borderRadius", "", ViewProps.COLOR, "", "count", ViewProps.GAP, ViewProps.PADDING_HORIZONTAL, ViewProps.PADDING_VERTICAL, "width", "height", "type", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type;", "verticalAlignment", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderAlignment$Vertical;", "horizontalAlignment", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderAlignment$Horizontal;", "<init>", "(FIIFFFLjava/lang/Float;Ljava/lang/Float;Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type;Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderAlignment$Vertical;Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderAlignment$Horizontal;)V", "getBorderRadius", "()F", "getColor", "()I", "getCount", "getGap", "getPaddingHorizontal", "getPaddingVertical", "getWidth", "()Ljava/lang/Float;", "Ljava/lang/Float;", "getHeight", "getType", "()Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type;", "getVerticalAlignment", "()Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderAlignment$Vertical;", "getHorizontalAlignment", "()Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderAlignment$Horizontal;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "copy", "(FIIFFFLjava/lang/Float;Ljava/lang/Float;Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type;Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderAlignment$Vertical;Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderAlignment$Horizontal;)Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape;", "equals", "", "other", "", "hashCode", "toString", "", "Type", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Shape extends FastestListPlaceholderType {
        private final float borderRadius;
        private final int color;
        private final int count;
        private final float gap;
        private final Float height;
        @NotNull
        private final FastestListPlaceholderAlignment.Horizontal horizontalAlignment;
        private final float paddingHorizontal;
        private final float paddingVertical;
        @NotNull
        private final Type type;
        @NotNull
        private final FastestListPlaceholderAlignment.Vertical verticalAlignment;
        private final Float width;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0086\u0081\u0002\u0018\u0000 \u00062\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0006B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type;", "", "<init>", "(Ljava/lang/String;I)V", "CIRCLE", "RECT", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Type {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ Type[] $VALUES;
            @NotNull
            public static final Companion Companion;
            public static final Type CIRCLE = new Type("CIRCLE", 0);
            public static final Type RECT = new Type("RECT", 1);

            @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape$Type$Companion;", "", "<init>", "()V", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class Companion {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                private Companion() {
                }
            }

            private static final /* synthetic */ Type[] $values() {
                return new Type[]{CIRCLE, RECT};
            }

            static {
                Type[] $values = $values();
                $VALUES = $values;
                $ENTRIES = a.a($values);
                Companion = new Companion(null);
            }

            private Type(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static Type valueOf(String str) {
                return (Type) Enum.valueOf(Type.class, str);
            }

            public static Type[] values() {
                return (Type[]) $VALUES.clone();
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public Shape(float f10, int i10, int i11, float f11, float f12, float f13, Float f14, Float f15, @NotNull Type type, @NotNull FastestListPlaceholderAlignment.Vertical verticalAlignment, @NotNull FastestListPlaceholderAlignment.Horizontal horizontalAlignment) {
            super(null);
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(verticalAlignment, "verticalAlignment");
            Intrinsics.checkNotNullParameter(horizontalAlignment, "horizontalAlignment");
            this.borderRadius = f10;
            this.color = i10;
            this.count = i11;
            this.gap = f11;
            this.paddingHorizontal = f12;
            this.paddingVertical = f13;
            this.width = f14;
            this.height = f15;
            this.type = type;
            this.verticalAlignment = verticalAlignment;
            this.horizontalAlignment = horizontalAlignment;
        }

        public static /* synthetic */ Shape copy$default(Shape shape, float f10, int i10, int i11, float f11, float f12, float f13, Float f14, Float f15, Type type, FastestListPlaceholderAlignment.Vertical vertical, FastestListPlaceholderAlignment.Horizontal horizontal, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                f10 = shape.borderRadius;
            }
            if ((i12 & 2) != 0) {
                i10 = shape.color;
            }
            if ((i12 & 4) != 0) {
                i11 = shape.count;
            }
            if ((i12 & 8) != 0) {
                f11 = shape.gap;
            }
            if ((i12 & 16) != 0) {
                f12 = shape.paddingHorizontal;
            }
            if ((i12 & 32) != 0) {
                f13 = shape.paddingVertical;
            }
            if ((i12 & 64) != 0) {
                f14 = shape.width;
            }
            if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                f15 = shape.height;
            }
            if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                type = shape.type;
            }
            if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
                vertical = shape.verticalAlignment;
            }
            if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
                horizontal = shape.horizontalAlignment;
            }
            FastestListPlaceholderAlignment.Vertical vertical2 = vertical;
            FastestListPlaceholderAlignment.Horizontal horizontal2 = horizontal;
            Float f16 = f15;
            Type type2 = type;
            float f17 = f13;
            Float f18 = f14;
            float f19 = f12;
            int i13 = i11;
            return shape.copy(f10, i10, i13, f11, f19, f17, f18, f16, type2, vertical2, horizontal2);
        }

        public final float component1() {
            return this.borderRadius;
        }

        @NotNull
        public final FastestListPlaceholderAlignment.Vertical component10() {
            return this.verticalAlignment;
        }

        @NotNull
        public final FastestListPlaceholderAlignment.Horizontal component11() {
            return this.horizontalAlignment;
        }

        public final int component2() {
            return this.color;
        }

        public final int component3() {
            return this.count;
        }

        public final float component4() {
            return this.gap;
        }

        public final float component5() {
            return this.paddingHorizontal;
        }

        public final float component6() {
            return this.paddingVertical;
        }

        public final Float component7() {
            return this.width;
        }

        public final Float component8() {
            return this.height;
        }

        @NotNull
        public final Type component9() {
            return this.type;
        }

        @NotNull
        public final Shape copy(float f10, int i10, int i11, float f11, float f12, float f13, Float f14, Float f15, @NotNull Type type, @NotNull FastestListPlaceholderAlignment.Vertical verticalAlignment, @NotNull FastestListPlaceholderAlignment.Horizontal horizontalAlignment) {
            Intrinsics.checkNotNullParameter(type, "type");
            Intrinsics.checkNotNullParameter(verticalAlignment, "verticalAlignment");
            Intrinsics.checkNotNullParameter(horizontalAlignment, "horizontalAlignment");
            return new Shape(f10, i10, i11, f11, f12, f13, f14, f15, type, verticalAlignment, horizontalAlignment);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Shape) {
                Shape shape = (Shape) obj;
                return Float.compare(this.borderRadius, shape.borderRadius) == 0 && this.color == shape.color && this.count == shape.count && Float.compare(this.gap, shape.gap) == 0 && Float.compare(this.paddingHorizontal, shape.paddingHorizontal) == 0 && Float.compare(this.paddingVertical, shape.paddingVertical) == 0 && Intrinsics.areEqual((Object) this.width, (Object) shape.width) && Intrinsics.areEqual((Object) this.height, (Object) shape.height) && this.type == shape.type && this.verticalAlignment == shape.verticalAlignment && this.horizontalAlignment == shape.horizontalAlignment;
            }
            return false;
        }

        public final float getBorderRadius() {
            return this.borderRadius;
        }

        public final int getColor() {
            return this.color;
        }

        public final int getCount() {
            return this.count;
        }

        public final float getGap() {
            return this.gap;
        }

        public final Float getHeight() {
            return this.height;
        }

        @NotNull
        public final FastestListPlaceholderAlignment.Horizontal getHorizontalAlignment() {
            return this.horizontalAlignment;
        }

        public final float getPaddingHorizontal() {
            return this.paddingHorizontal;
        }

        public final float getPaddingVertical() {
            return this.paddingVertical;
        }

        @NotNull
        public final Type getType() {
            return this.type;
        }

        @NotNull
        public final FastestListPlaceholderAlignment.Vertical getVerticalAlignment() {
            return this.verticalAlignment;
        }

        public final Float getWidth() {
            return this.width;
        }

        public int hashCode() {
            int hashCode = ((((((((((Float.hashCode(this.borderRadius) * 31) + Integer.hashCode(this.color)) * 31) + Integer.hashCode(this.count)) * 31) + Float.hashCode(this.gap)) * 31) + Float.hashCode(this.paddingHorizontal)) * 31) + Float.hashCode(this.paddingVertical)) * 31;
            Float f10 = this.width;
            int hashCode2 = (hashCode + (f10 == null ? 0 : f10.hashCode())) * 31;
            Float f11 = this.height;
            return ((((((hashCode2 + (f11 != null ? f11.hashCode() : 0)) * 31) + this.type.hashCode()) * 31) + this.verticalAlignment.hashCode()) * 31) + this.horizontalAlignment.hashCode();
        }

        @NotNull
        public String toString() {
            float f10 = this.borderRadius;
            int i10 = this.color;
            int i11 = this.count;
            float f11 = this.gap;
            float f12 = this.paddingHorizontal;
            float f13 = this.paddingVertical;
            Float f14 = this.width;
            Float f15 = this.height;
            Type type = this.type;
            FastestListPlaceholderAlignment.Vertical vertical = this.verticalAlignment;
            FastestListPlaceholderAlignment.Horizontal horizontal = this.horizontalAlignment;
            return "Shape(borderRadius=" + f10 + ", color=" + i10 + ", count=" + i11 + ", gap=" + f11 + ", paddingHorizontal=" + f12 + ", paddingVertical=" + f13 + ", width=" + f14 + ", height=" + f15 + ", type=" + type + ", verticalAlignment=" + vertical + ", horizontalAlignment=" + horizontal + ")";
        }
    }

    public /* synthetic */ FastestListPlaceholderType(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    private FastestListPlaceholderType() {
    }
}
