package com.facebook.react.uimanager.style;

import android.content.Context;
import android.graphics.Rect;
import android.graphics.Shader;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \u000b2\u00020\u0001:\u0001\u000bB\u0007¢\u0006\u0004\b\u0002\u0010\u0003B\u0011\b\u0012\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0002\u0010\u0006J\u000e\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\nR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082.¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/facebook/react/uimanager/style/BackgroundImageLayer;", "", "<init>", "()V", "gradient", "Lcom/facebook/react/uimanager/style/Gradient;", "(Lcom/facebook/react/uimanager/style/Gradient;)V", "getShader", "Landroid/graphics/Shader;", "bounds", "Landroid/graphics/Rect;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class BackgroundImageLayer {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private Gradient gradient;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\tJ\u001a\u0010\n\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0002¨\u0006\f"}, d2 = {"Lcom/facebook/react/uimanager/style/BackgroundImageLayer$Companion;", "", "<init>", "()V", "parse", "Lcom/facebook/react/uimanager/style/BackgroundImageLayer;", "gradientMap", "Lcom/facebook/react/bridge/ReadableMap;", "context", "Landroid/content/Context;", "parseGradient", "Lcom/facebook/react/uimanager/style/Gradient;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Gradient parseGradient(ReadableMap readableMap, Context context) {
            if (readableMap.hasKey("type") && readableMap.getType("type") == ReadableType.String) {
                String string = readableMap.getString("type");
                if (Intrinsics.areEqual(string, "linear-gradient")) {
                    return LinearGradient.Companion.parse(readableMap, context);
                }
                if (Intrinsics.areEqual(string, "radial-gradient")) {
                    return RadialGradient.Companion.parse(readableMap, context);
                }
            }
            return null;
        }

        public final BackgroundImageLayer parse(ReadableMap readableMap, @NotNull Context context) {
            Gradient parseGradient;
            Intrinsics.checkNotNullParameter(context, "context");
            if (readableMap == null || (parseGradient = parseGradient(readableMap, context)) == null) {
                return null;
            }
            return new BackgroundImageLayer(parseGradient, null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ BackgroundImageLayer(Gradient gradient, DefaultConstructorMarker defaultConstructorMarker) {
        this(gradient);
    }

    @NotNull
    public final Shader getShader(@NotNull Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        Gradient gradient = this.gradient;
        if (gradient == null) {
            Intrinsics.throwUninitializedPropertyAccessException("gradient");
            gradient = null;
        }
        return gradient.getShader(bounds.width(), bounds.height());
    }

    public BackgroundImageLayer() {
    }

    private BackgroundImageLayer(Gradient gradient) {
        this();
        this.gradient = gradient;
    }
}
