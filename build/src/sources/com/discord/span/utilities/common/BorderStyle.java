package com.discord.span.utilities.common;

import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001b\u0012\b\b\u0001\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\n\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\f\u001a\u00020\u00002\b\b\u0003\u0010\u0002\u001a\u00020\u00032\b\b\u0003\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0010\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0013"}, d2 = {"Lcom/discord/span/utilities/common/BorderStyle;", "", ViewProps.COLOR, "", "width", "<init>", "(II)V", "getColor", "()I", "getWidth", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "", "span_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BorderStyle {
    private final int color;
    private final int width;

    public BorderStyle(int i10, int i11) {
        this.color = i10;
        this.width = i11;
    }

    public static /* synthetic */ BorderStyle copy$default(BorderStyle borderStyle, int i10, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = borderStyle.color;
        }
        if ((i12 & 2) != 0) {
            i11 = borderStyle.width;
        }
        return borderStyle.copy(i10, i11);
    }

    public final int component1() {
        return this.color;
    }

    public final int component2() {
        return this.width;
    }

    @NotNull
    public final BorderStyle copy(int i10, int i11) {
        return new BorderStyle(i10, i11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BorderStyle) {
            BorderStyle borderStyle = (BorderStyle) obj;
            return this.color == borderStyle.color && this.width == borderStyle.width;
        }
        return false;
    }

    public final int getColor() {
        return this.color;
    }

    public final int getWidth() {
        return this.width;
    }

    public int hashCode() {
        return (Integer.hashCode(this.color) * 31) + Integer.hashCode(this.width);
    }

    @NotNull
    public String toString() {
        int i10 = this.color;
        int i11 = this.width;
        return "BorderStyle(color=" + i10 + ", width=" + i11 + ")";
    }
}
