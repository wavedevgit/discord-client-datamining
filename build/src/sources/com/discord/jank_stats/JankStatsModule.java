package com.discord.jank_stats;

import com.discord.codegen.NativeJankStatsModuleSpec;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016J\b\u0010\b\u001a\u00020\u0007H\u0016J\u0010\u0010\t\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000bH\u0016J\b\u0010\f\u001a\u00020\rH\u0016¨\u0006\u000e"}, d2 = {"Lcom/discord/jank_stats/JankStatsModule;", "Lcom/discord/codegen/NativeJankStatsModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "stopTracking", "", "startTracking", "setJankHeuristicMultiplier", "jankHeuristicMultiplier", "", "requestReport", "Lcom/facebook/react/bridge/WritableMap;", "jank_stats_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class JankStatsModule extends NativeJankStatsModuleSpec {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public JankStatsModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    @Override // com.discord.codegen.NativeJankStatsModuleSpec
    @NotNull
    public WritableMap requestReport() {
        JankReport issueJankReport$default = JankStatsAggregator.issueJankReport$default(JankStatsAggregator.INSTANCE, null, 1, null);
        return NativeMapExtensionsKt.nativeMapOf(v.a("totalFrameCount", Integer.valueOf(issueJankReport$default.getNumFrames())), v.a("jankFrameCount", Integer.valueOf(issueJankReport$default.getNumJankFrames())));
    }

    @Override // com.discord.codegen.NativeJankStatsModuleSpec
    public void setJankHeuristicMultiplier(double d10) {
        JankStatsAggregator.INSTANCE.setJankHeuristicMultiplier((float) d10);
    }

    @Override // com.discord.codegen.NativeJankStatsModuleSpec
    public void startTracking() {
        JankStatsAggregator.INSTANCE.enableTracking();
    }

    @Override // com.discord.codegen.NativeJankStatsModuleSpec
    public void stopTracking() {
        JankStatsAggregator.INSTANCE.disableTracking();
    }
}
