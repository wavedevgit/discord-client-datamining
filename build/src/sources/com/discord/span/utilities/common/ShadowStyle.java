package com.discord.span.utilities.common;

import android.util.SizeF;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B!\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0007HÆ\u0003J'\u0010\u0013\u001a\u00020\u00002\b\b\u0003\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u001a"}, d2 = {"Lcom/discord/span/utilities/common/ShadowStyle;", "", ViewProps.COLOR, "", "radius", "", "offset", "Landroid/util/SizeF;", "<init>", "(IFLandroid/util/SizeF;)V", "getColor", "()I", "getRadius", "()F", "getOffset", "()Landroid/util/SizeF;", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "toString", "", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ShadowStyle {
    private final int color;
    @NotNull
    private final SizeF offset;
    private final float radius;

    public ShadowStyle(int i10, float f10, @NotNull SizeF offset) {
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.color = i10;
        this.radius = f10;
        this.offset = offset;
    }

    public static /* synthetic */ ShadowStyle copy$default(ShadowStyle shadowStyle, int i10, float f10, SizeF sizeF, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = shadowStyle.color;
        }
        if ((i11 & 2) != 0) {
            f10 = shadowStyle.radius;
        }
        if ((i11 & 4) != 0) {
            sizeF = shadowStyle.offset;
        }
        return shadowStyle.copy(i10, f10, sizeF);
    }

    public final int component1() {
        return this.color;
    }

    public final float component2() {
        return this.radius;
    }

    @NotNull
    public final SizeF component3() {
        return this.offset;
    }

    @NotNull
    public final ShadowStyle copy(int i10, float f10, @NotNull SizeF offset) {
        Intrinsics.checkNotNullParameter(offset, "offset");
        return new ShadowStyle(i10, f10, offset);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ShadowStyle) {
            ShadowStyle shadowStyle = (ShadowStyle) obj;
            return this.color == shadowStyle.color && Float.compare(this.radius, shadowStyle.radius) == 0 && Intrinsics.areEqual(this.offset, shadowStyle.offset);
        }
        return false;
    }

    public final int getColor() {
        return this.color;
    }

    @NotNull
    public final SizeF getOffset() {
        return this.offset;
    }

    public final float getRadius() {
        return this.radius;
    }

    public int hashCode() {
        return (((Integer.hashCode(this.color) * 31) + Float.hashCode(this.radius)) * 31) + this.offset.hashCode();
    }

    @NotNull
    public String toString() {
        int i10 = this.color;
        float f10 = this.radius;
        SizeF sizeF = this.offset;
        return "ShadowStyle(color=" + i10 + ", radius=" + f10 + ", offset=" + sizeF + ")";
    }
}
