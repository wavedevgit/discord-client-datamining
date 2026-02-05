package com.discord.key_commands;

import com.discord.codegen.NativeKeyCommandsModuleSpec;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0010\u0000\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0014\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t0\u0007H\u0014¨\u0006\n"}, d2 = {"Lcom/discord/key_commands/KeyCommandsModule;", "Lcom/discord/codegen/NativeKeyCommandsModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getTypedExportedConstants", "", "", "", "key_commands_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class KeyCommandsModule extends NativeKeyCommandsModuleSpec {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public KeyCommandsModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    @Override // com.discord.codegen.NativeKeyCommandsModuleSpec
    @NotNull
    protected Map<String, Object> getTypedExportedConstants() {
        return o0.n(v.a("keyModifierAlphaShift", 65536), v.a("keyModifierShift", 131072), v.a("keyModifierControl", 262144), v.a("keyModifierAlternate", 524288), v.a("keyModifierCommand", 1048576), v.a("keyModifierNumericPad", 2097152));
    }
}
