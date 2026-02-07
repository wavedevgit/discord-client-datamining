package com.discord.on_demand_resource;

import com.discord.codegen.NativeOnDemandResourceModuleSpec;
import com.discord.on_demand_resource.OnDemandResourceModule;
import com.discord.play_delivery.PlayAssetDelivery;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016J\u0012\u0010\b\u001a\u00020\u00072\b\u0010\t\u001a\u0004\u0018\u00010\nH\u0016J\u001c\u0010\u000b\u001a\u00020\f2\b\u0010\t\u001a\u0004\u0018\u00010\n2\b\u0010\r\u001a\u0004\u0018\u00010\u000eH\u0016¨\u0006\u000f"}, d2 = {"Lcom/discord/on_demand_resource/OnDemandResourceModule;", "Lcom/discord/codegen/NativeOnDemandResourceModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "isOnDemandResourcingAvailable", "", "hasOnDemandResource", "resourceName", "", "fetchOnDemandResource", "", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "on_demand_resource_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OnDemandResourceModule extends NativeOnDemandResourceModuleSpec {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OnDemandResourceModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit fetchOnDemandResource$lambda$1$lambda$0(Promise promise, boolean z10) {
        promise.resolve(Boolean.valueOf(z10));
        return Unit.f32056a;
    }

    @Override // com.discord.codegen.NativeOnDemandResourceModuleSpec
    public void fetchOnDemandResource(String str, final Promise promise) {
        Function1<? super Boolean, Unit> function1;
        if (str != null) {
            if (promise != null) {
                function1 = new Function1() { // from class: u7.a
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit fetchOnDemandResource$lambda$1$lambda$0;
                        fetchOnDemandResource$lambda$1$lambda$0 = OnDemandResourceModule.fetchOnDemandResource$lambda$1$lambda$0(Promise.this, ((Boolean) obj).booleanValue());
                        return fetchOnDemandResource$lambda$1$lambda$0;
                    }
                };
            } else {
                function1 = null;
            }
            PlayAssetDelivery.INSTANCE.fetchAssetPack(str, function1);
        }
    }

    @Override // com.discord.codegen.NativeOnDemandResourceModuleSpec
    public boolean hasOnDemandResource(String str) {
        if (str == null || PlayAssetDelivery.INSTANCE.getCachedAssetPackLocation(str) == null) {
            return false;
        }
        return true;
    }

    @Override // com.discord.codegen.NativeOnDemandResourceModuleSpec
    public boolean isOnDemandResourcingAvailable() {
        return PlayAssetDelivery.INSTANCE.isAssetDeliveryAvailable();
    }
}
