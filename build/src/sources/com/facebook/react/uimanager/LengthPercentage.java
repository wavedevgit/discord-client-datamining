package com.facebook.react.uimanager;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.common.ReactConstants;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\b\u0018\u0000 \u00172\u00020\u0001:\u0001\u0017B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B\t\b\u0016¢\u0006\u0004\b\u0006\u0010\bJ\u000e\u0010\u000b\u001a\u00020\u00032\u0006\u0010\f\u001a\u00020\u0003J\t\u0010\r\u001a\u00020\u0003HÂ\u0003J\t\u0010\u000e\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u000f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001J\t\u0010\u0015\u001a\u00020\u0016HÖ\u0001R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0018"}, d2 = {"Lcom/facebook/react/uimanager/LengthPercentage;", "", "value", "", "type", "Lcom/facebook/react/uimanager/LengthPercentageType;", "<init>", "(FLcom/facebook/react/uimanager/LengthPercentageType;)V", "()V", "getType", "()Lcom/facebook/react/uimanager/LengthPercentageType;", "resolve", "referenceLength", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LengthPercentage {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final LengthPercentageType type;
    private final float value;

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/LengthPercentage$Companion;", "", "<init>", "()V", "setFromDynamic", "Lcom/facebook/react/uimanager/LengthPercentage;", "dynamic", "Lcom/facebook/react/bridge/Dynamic;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
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
                    iArr[ReadableType.String.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final LengthPercentage setFromDynamic(@NotNull Dynamic dynamic) {
            Intrinsics.checkNotNullParameter(dynamic, "dynamic");
            int i10 = WhenMappings.$EnumSwitchMapping$0[dynamic.getType().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    ReadableType type = dynamic.getType();
                    p8.a.J(ReactConstants.TAG, "Unsupported type for radius property: " + type);
                    return null;
                }
                String asString = dynamic.asString();
                if (asString != null && StringsKt.z(asString, "%", false, 2, null)) {
                    try {
                        String substring = asString.substring(0, asString.length() - 1);
                        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                        float parseFloat = Float.parseFloat(substring);
                        if (parseFloat < 0.0f) {
                            return null;
                        }
                        return new LengthPercentage(parseFloat, LengthPercentageType.PERCENT);
                    } catch (NumberFormatException unused) {
                        p8.a.J(ReactConstants.TAG, "Invalid percentage format: " + asString);
                        return null;
                    }
                }
                p8.a.J(ReactConstants.TAG, "Invalid string value: " + asString);
                return null;
            }
            double asDouble = dynamic.asDouble();
            if (asDouble < 0.0d) {
                return null;
            }
            return new LengthPercentage((float) asDouble, LengthPercentageType.POINT);
        }

        private Companion() {
        }
    }

    public LengthPercentage(float f10, @NotNull LengthPercentageType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.value = f10;
        this.type = type;
    }

    private final float component1() {
        return this.value;
    }

    public static /* synthetic */ LengthPercentage copy$default(LengthPercentage lengthPercentage, float f10, LengthPercentageType lengthPercentageType, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            f10 = lengthPercentage.value;
        }
        if ((i10 & 2) != 0) {
            lengthPercentageType = lengthPercentage.type;
        }
        return lengthPercentage.copy(f10, lengthPercentageType);
    }

    public static final LengthPercentage setFromDynamic(@NotNull Dynamic dynamic) {
        return Companion.setFromDynamic(dynamic);
    }

    @NotNull
    public final LengthPercentageType component2() {
        return this.type;
    }

    @NotNull
    public final LengthPercentage copy(float f10, @NotNull LengthPercentageType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        return new LengthPercentage(f10, type);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LengthPercentage) {
            LengthPercentage lengthPercentage = (LengthPercentage) obj;
            return Float.compare(this.value, lengthPercentage.value) == 0 && this.type == lengthPercentage.type;
        }
        return false;
    }

    @NotNull
    public final LengthPercentageType getType() {
        return this.type;
    }

    public int hashCode() {
        return (Float.hashCode(this.value) * 31) + this.type.hashCode();
    }

    public final float resolve(float f10) {
        if (this.type == LengthPercentageType.PERCENT) {
            return (this.value / 100) * f10;
        }
        return this.value;
    }

    @NotNull
    public String toString() {
        float f10 = this.value;
        LengthPercentageType lengthPercentageType = this.type;
        return "LengthPercentage(value=" + f10 + ", type=" + lengthPercentageType + ")";
    }

    public LengthPercentage() {
        this(0.0f, LengthPercentageType.POINT);
    }
}
