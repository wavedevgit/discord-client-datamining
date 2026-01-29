package com.discord.command_clipboard;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Intent;
import androidx.core.content.a;
import com.discord.codegen.NativeCommandClipboardModuleSpec;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J&\u0010\u0006\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\b\u0010\n\u001a\u0004\u0018\u00010\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\tH\u0016¨\u0006\f"}, d2 = {"Lcom/discord/command_clipboard/CommandClipboardModule;", "Lcom/discord/codegen/NativeCommandClipboardModuleSpec;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "setItem", "", "item", "", "type", "text", "command_clipboard_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CommandClipboardModule extends NativeCommandClipboardModuleSpec {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CommandClipboardModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
    }

    @Override // com.discord.codegen.NativeCommandClipboardModuleSpec
    public void setItem(String str, String str2, String str3) {
        ClipboardManager clipboardManager = (ClipboardManager) a.j(getReactApplicationContext().getApplicationContext(), ClipboardManager.class);
        if (clipboardManager != null && str != null && str2 != null && str3 != null) {
            Intent intent = new Intent();
            intent.putExtra("data", str);
            intent.setType(str2);
            ClipData clipData = new ClipData(str3, new String[]{str2}, new ClipData.Item(intent));
            clipData.addItem(new ClipData.Item(str3));
            clipboardManager.setPrimaryClip(clipData);
        }
    }
}
