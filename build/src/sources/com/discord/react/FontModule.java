package com.discord.react;

import com.discord.codegen.NativeFontModuleSpec;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.jakewharton.processphoenix.ProcessPhoenix;
import jr.v;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u000b\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0006\u001a\u00020\u0007H\u0016J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000e"}, d2 = {"Lcom/discord/react/FontModule;", "Lcom/discord/codegen/NativeFontModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getCustomFontScale", "Lcom/facebook/react/bridge/WritableMap;", "setCustomFontScale", "", "fontScale", "", "isClassicChatFontScaleEnabled", "", "fonts_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FontModule extends NativeFontModuleSpec {
    @NotNull
    private final ReactApplicationContext reactContext;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FontModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
    }

    @Override // com.discord.codegen.NativeFontModuleSpec
    @NotNull
    public WritableMap getCustomFontScale() {
        FontManager fontManager = FontManager.INSTANCE;
        return NativeMapExtensionsKt.nativeMapOf(v.a("fontScale", Float.valueOf(fontManager.getFontScale(this.reactContext))), v.a("isClassicChatFontScaleEnabled", Boolean.valueOf(fontManager.getIsClassicChatFontScaleEnabled(this.reactContext))));
    }

    @Override // com.discord.codegen.NativeFontModuleSpec
    public void setCustomFontScale(double d10, boolean z10) {
        FontManager.INSTANCE.setFontSize(this.reactContext, (float) d10, z10);
        ProcessPhoenix.b(this.reactContext);
    }
}
