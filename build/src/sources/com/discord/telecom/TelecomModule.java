package com.discord.telecom;

import com.discord.codegen.NativeTelecomModuleSpec;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016J\u0010\u0010\n\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\fH\u0016J\"\u0010\r\u001a\u00020\u00072\u0006\u0010\u000e\u001a\u00020\t2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0016J\u0018\u0010\u0013\u001a\u00020\u00072\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\u0012H\u0016J\u0010\u0010\u0014\u001a\u00020\u00072\u0006\u0010\u000e\u001a\u00020\tH\u0016J\u0018\u0010\u0015\u001a\u00020\u00072\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\u0016\u001a\u00020\u0017H\u0016J \u0010\u0018\u001a\u00020\u00072\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\u0019\u001a\u00020\u00172\u0006\u0010\u001a\u001a\u00020\u0017H\u0016J\u0010\u0010\u001b\u001a\u00020\u00072\u0006\u0010\u0011\u001a\u00020\u0012H\u0016¨\u0006\u001c"}, d2 = {"Lcom/discord/telecom/TelecomModule;", "Lcom/discord/codegen/NativeTelecomModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "addListener", "", "eventType", "", "removeListeners", "count", "", "startCall", "callId", "options", "Lcom/facebook/react/bridge/ReadableMap;", BaseJavaModule.METHOD_TYPE_PROMISE, "Lcom/facebook/react/bridge/Promise;", "endCall", "setCallActive", "setMicMuted", "isMuted", "", "setScreenShareState", "isEnabled", "isActivated", "isAvailable", "telecom_androidRelease"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TelecomModule extends NativeTelecomModuleSpec {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TelecomModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    @Override // com.discord.codegen.NativeTelecomModuleSpec
    public void addListener(@NotNull String eventType) {
        Intrinsics.checkNotNullParameter(eventType, "eventType");
    }

    @Override // com.discord.codegen.NativeTelecomModuleSpec
    public void endCall(@NotNull String callId, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(callId, "callId");
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(Boolean.FALSE);
    }

    @Override // com.discord.codegen.NativeTelecomModuleSpec
    public void isAvailable(@NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(Boolean.FALSE);
    }

    @Override // com.discord.codegen.NativeTelecomModuleSpec
    public void removeListeners(double d10) {
    }

    @Override // com.discord.codegen.NativeTelecomModuleSpec
    public void setCallActive(@NotNull String callId) {
        Intrinsics.checkNotNullParameter(callId, "callId");
    }

    @Override // com.discord.codegen.NativeTelecomModuleSpec
    public void setMicMuted(@NotNull String callId, boolean z10) {
        Intrinsics.checkNotNullParameter(callId, "callId");
    }

    @Override // com.discord.codegen.NativeTelecomModuleSpec
    public void setScreenShareState(@NotNull String callId, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(callId, "callId");
    }

    @Override // com.discord.codegen.NativeTelecomModuleSpec
    public void startCall(@NotNull String callId, ReadableMap readableMap, @NotNull Promise promise) {
        Intrinsics.checkNotNullParameter(callId, "callId");
        Intrinsics.checkNotNullParameter(promise, "promise");
        promise.resolve(Boolean.FALSE);
    }
}
