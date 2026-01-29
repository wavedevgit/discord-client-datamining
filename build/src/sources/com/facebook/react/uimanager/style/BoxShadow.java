package com.facebook.react.uimanager.style;

import android.content.Context;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.JSApplicationCausedNativeException;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u001b\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\b\u0018\u0000 '2\u00020\u0001:\u0001'BG\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0003\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u000b\u0010\fJ\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u001c\u001a\u0004\u0018\u00010\u0006HÆ\u0003¢\u0006\u0002\u0010\u0011J\u0010\u0010\u001d\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u0014J\u0010\u0010\u001e\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u0014J\u0010\u0010\u001f\u001a\u0004\u0018\u00010\nHÆ\u0003¢\u0006\u0002\u0010\u0018JR\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0003\u0010\u0005\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nHÆ\u0001¢\u0006\u0002\u0010!J\u0013\u0010\"\u001a\u00020\n2\b\u0010#\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010$\u001a\u00020\u0006HÖ\u0001J\t\u0010%\u001a\u00020&HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0015\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0010\u0010\u0011R\u0015\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0015\u001a\u0004\b\u0013\u0010\u0014R\u0015\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0015\u001a\u0004\b\u0016\u0010\u0014R\u0015\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\n\n\u0002\u0010\u0019\u001a\u0004\b\u0017\u0010\u0018¨\u0006("}, d2 = {"Lcom/facebook/react/uimanager/style/BoxShadow;", "", "offsetX", "", "offsetY", ViewProps.COLOR, "", "blurRadius", "spreadDistance", "inset", "", "<init>", "(FFLjava/lang/Integer;Ljava/lang/Float;Ljava/lang/Float;Ljava/lang/Boolean;)V", "getOffsetX", "()F", "getOffsetY", "getColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getBlurRadius", "()Ljava/lang/Float;", "Ljava/lang/Float;", "getSpreadDistance", "getInset", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "(FFLjava/lang/Integer;Ljava/lang/Float;Ljava/lang/Float;Ljava/lang/Boolean;)Lcom/facebook/react/uimanager/style/BoxShadow;", "equals", "other", "hashCode", "toString", "", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BoxShadow {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final Float blurRadius;
    private final Integer color;
    private final Boolean inset;
    private final float offsetX;
    private final float offsetY;
    private final Float spreadDistance;

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\tH\u0007¨\u0006\n"}, d2 = {"Lcom/facebook/react/uimanager/style/BoxShadow$Companion;", "", "<init>", "()V", "parse", "Lcom/facebook/react/uimanager/style/BoxShadow;", ViewProps.BOX_SHADOW, "Lcom/facebook/react/bridge/ReadableMap;", "context", "Landroid/content/Context;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[ReadableType.values().length];
                try {
                    iArr[ReadableType.Number.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[ReadableType.Map.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final BoxShadow parse(ReadableMap readableMap, @NotNull Context context) {
            Integer num;
            Float f10;
            Float f11;
            Integer valueOf;
            Intrinsics.checkNotNullParameter(context, "context");
            Boolean bool = null;
            if (readableMap == null || !readableMap.hasKey("offsetX") || !readableMap.hasKey("offsetY")) {
                return null;
            }
            float f12 = (float) readableMap.getDouble("offsetX");
            float f13 = (float) readableMap.getDouble("offsetY");
            if (readableMap.hasKey(ViewProps.COLOR)) {
                ReadableType type = readableMap.getType(ViewProps.COLOR);
                int i10 = WhenMappings.$EnumSwitchMapping$0[type.ordinal()];
                if (i10 != 1) {
                    if (i10 == 2) {
                        valueOf = ColorPropConverter.getColor(readableMap.getMap(ViewProps.COLOR), context);
                    } else {
                        throw new JSApplicationCausedNativeException("Unsupported color type " + type);
                    }
                } else {
                    valueOf = Integer.valueOf(readableMap.getInt(ViewProps.COLOR));
                }
                num = valueOf;
            } else {
                num = null;
            }
            if (readableMap.hasKey("blurRadius")) {
                f10 = Float.valueOf((float) readableMap.getDouble("blurRadius"));
            } else {
                f10 = null;
            }
            if (readableMap.hasKey("spreadDistance")) {
                f11 = Float.valueOf((float) readableMap.getDouble("spreadDistance"));
            } else {
                f11 = null;
            }
            if (readableMap.hasKey("inset")) {
                bool = Boolean.valueOf(readableMap.getBoolean("inset"));
            }
            return new BoxShadow(f12, f13, num, f10, f11, bool);
        }

        private Companion() {
        }
    }

    public BoxShadow(float f10, float f11, Integer num, Float f12, Float f13, Boolean bool) {
        this.offsetX = f10;
        this.offsetY = f11;
        this.color = num;
        this.blurRadius = f12;
        this.spreadDistance = f13;
        this.inset = bool;
    }

    public static /* synthetic */ BoxShadow copy$default(BoxShadow boxShadow, float f10, float f11, Integer num, Float f12, Float f13, Boolean bool, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            f10 = boxShadow.offsetX;
        }
        if ((i10 & 2) != 0) {
            f11 = boxShadow.offsetY;
        }
        if ((i10 & 4) != 0) {
            num = boxShadow.color;
        }
        if ((i10 & 8) != 0) {
            f12 = boxShadow.blurRadius;
        }
        if ((i10 & 16) != 0) {
            f13 = boxShadow.spreadDistance;
        }
        if ((i10 & 32) != 0) {
            bool = boxShadow.inset;
        }
        Float f14 = f13;
        Boolean bool2 = bool;
        return boxShadow.copy(f10, f11, num, f12, f14, bool2);
    }

    public static final BoxShadow parse(ReadableMap readableMap, @NotNull Context context) {
        return Companion.parse(readableMap, context);
    }

    public final float component1() {
        return this.offsetX;
    }

    public final float component2() {
        return this.offsetY;
    }

    public final Integer component3() {
        return this.color;
    }

    public final Float component4() {
        return this.blurRadius;
    }

    public final Float component5() {
        return this.spreadDistance;
    }

    public final Boolean component6() {
        return this.inset;
    }

    @NotNull
    public final BoxShadow copy(float f10, float f11, Integer num, Float f12, Float f13, Boolean bool) {
        return new BoxShadow(f10, f11, num, f12, f13, bool);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof BoxShadow) {
            BoxShadow boxShadow = (BoxShadow) obj;
            return Float.compare(this.offsetX, boxShadow.offsetX) == 0 && Float.compare(this.offsetY, boxShadow.offsetY) == 0 && Intrinsics.areEqual(this.color, boxShadow.color) && Intrinsics.areEqual((Object) this.blurRadius, (Object) boxShadow.blurRadius) && Intrinsics.areEqual((Object) this.spreadDistance, (Object) boxShadow.spreadDistance) && Intrinsics.areEqual(this.inset, boxShadow.inset);
        }
        return false;
    }

    public final Float getBlurRadius() {
        return this.blurRadius;
    }

    public final Integer getColor() {
        return this.color;
    }

    public final Boolean getInset() {
        return this.inset;
    }

    public final float getOffsetX() {
        return this.offsetX;
    }

    public final float getOffsetY() {
        return this.offsetY;
    }

    public final Float getSpreadDistance() {
        return this.spreadDistance;
    }

    public int hashCode() {
        int hashCode = ((Float.hashCode(this.offsetX) * 31) + Float.hashCode(this.offsetY)) * 31;
        Integer num = this.color;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Float f10 = this.blurRadius;
        int hashCode3 = (hashCode2 + (f10 == null ? 0 : f10.hashCode())) * 31;
        Float f11 = this.spreadDistance;
        int hashCode4 = (hashCode3 + (f11 == null ? 0 : f11.hashCode())) * 31;
        Boolean bool = this.inset;
        return hashCode4 + (bool != null ? bool.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        float f10 = this.offsetX;
        float f11 = this.offsetY;
        Integer num = this.color;
        Float f12 = this.blurRadius;
        Float f13 = this.spreadDistance;
        Boolean bool = this.inset;
        return "BoxShadow(offsetX=" + f10 + ", offsetY=" + f11 + ", color=" + num + ", blurRadius=" + f12 + ", spreadDistance=" + f13 + ", inset=" + bool + ")";
    }

    public /* synthetic */ BoxShadow(float f10, float f11, Integer num, Float f12, Float f13, Boolean bool, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(f10, f11, (i10 & 4) != 0 ? null : num, (i10 & 8) != 0 ? null : f12, (i10 & 16) != 0 ? null : f13, (i10 & 32) != 0 ? null : bool);
    }
}
