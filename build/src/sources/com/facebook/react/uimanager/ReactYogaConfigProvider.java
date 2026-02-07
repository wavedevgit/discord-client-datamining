package com.facebook.react.uimanager;

import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.yoga.YogaConfig;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u001b\u0010\u0004\u001a\u00020\u00058FX\u0086\u0084\u0002¢\u0006\f\n\u0004\b\b\u0010\t\u001a\u0004\b\u0006\u0010\u0007¨\u0006\n"}, d2 = {"Lcom/facebook/react/uimanager/ReactYogaConfigProvider;", "", "<init>", "()V", "yogaConfig", "Lcom/facebook/yoga/YogaConfig;", "getYogaConfig", "()Lcom/facebook/yoga/YogaConfig;", "yogaConfig$delegate", "Lkotlin/Lazy;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactYogaConfigProvider {
    @NotNull
    public static final ReactYogaConfigProvider INSTANCE = new ReactYogaConfigProvider();
    @NotNull
    private static final Lazy yogaConfig$delegate;

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture$default("ReactYogaConfigProvider", null, 2, null);
        yogaConfig$delegate = qr.l.b(qr.o.f48093i, new Function0() { // from class: com.facebook.react.uimanager.v
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                YogaConfig yogaConfig_delegate$lambda$1;
                yogaConfig_delegate$lambda$1 = ReactYogaConfigProvider.yogaConfig_delegate$lambda$1();
                return yogaConfig_delegate$lambda$1;
            }
        });
    }

    private ReactYogaConfigProvider() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final YogaConfig yogaConfig_delegate$lambda$1() {
        YogaConfig a10 = com.facebook.yoga.a.a();
        a10.b(0.0f);
        a10.a(com.facebook.yoga.f.ALL);
        return a10;
    }

    @NotNull
    public final YogaConfig getYogaConfig() {
        Object value = yogaConfig$delegate.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (YogaConfig) value;
    }
}
