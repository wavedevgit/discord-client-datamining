package com.facebook.react.bridge;

import com.facebook.yoga.YogaUnit;
import com.facebook.yoga.YogaValue;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0000\u0018\u0000 \u00042\u00020\u0001:\u0001\u0004B\u0007¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0005"}, d2 = {"Lcom/facebook/react/bridge/DimensionPropConverter;", "", "<init>", "()V", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DimensionPropConverter {
    @NotNull
    public static final Companion Companion = new Companion(null);

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0001H\u0007¨\u0006\u0007"}, d2 = {"Lcom/facebook/react/bridge/DimensionPropConverter$Companion;", "", "<init>", "()V", "getDimension", "Lcom/facebook/yoga/YogaValue;", "value", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final YogaValue getDimension(Object obj) {
            if (obj == null) {
                return null;
            }
            if (obj instanceof Double) {
                return new YogaValue((float) ((Number) obj).doubleValue(), YogaUnit.POINT);
            }
            if (obj instanceof String) {
                return YogaValue.a((String) obj);
            }
            throw new JSApplicationCausedNativeException("DimensionValue: the value must be a number or string.");
        }

        private Companion() {
        }
    }

    public static final YogaValue getDimension(Object obj) {
        return Companion.getDimension(obj);
    }
}
