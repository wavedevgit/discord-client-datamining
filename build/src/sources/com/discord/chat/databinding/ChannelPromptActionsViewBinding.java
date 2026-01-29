package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.core.DCDButton;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelPromptActionsViewBinding implements ViewBinding {
    @NonNull
    public final DCDButton cameraButton;
    @NonNull
    public final DCDButton emojiButton;
    @NonNull
    public final DCDButton gamingStatsButton;
    @NonNull
    public final DCDButton gifButton;
    @NonNull
    private final View rootView;

    private ChannelPromptActionsViewBinding(@NonNull View view, @NonNull DCDButton dCDButton, @NonNull DCDButton dCDButton2, @NonNull DCDButton dCDButton3, @NonNull DCDButton dCDButton4) {
        this.rootView = view;
        this.cameraButton = dCDButton;
        this.emojiButton = dCDButton2;
        this.gamingStatsButton = dCDButton3;
        this.gifButton = dCDButton4;
    }

    @NonNull
    public static ChannelPromptActionsViewBinding bind(@NonNull View view) {
        int i10 = R.id.camera_button;
        DCDButton dCDButton = (DCDButton) a.a(view, i10);
        if (dCDButton != null) {
            i10 = R.id.emoji_button;
            DCDButton dCDButton2 = (DCDButton) a.a(view, i10);
            if (dCDButton2 != null) {
                i10 = R.id.gaming_stats_button;
                DCDButton dCDButton3 = (DCDButton) a.a(view, i10);
                if (dCDButton3 != null) {
                    i10 = R.id.gif_button;
                    DCDButton dCDButton4 = (DCDButton) a.a(view, i10);
                    if (dCDButton4 != null) {
                        return new ChannelPromptActionsViewBinding(view, dCDButton, dCDButton2, dCDButton3, dCDButton4);
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static ChannelPromptActionsViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.channel_prompt_actions_view, viewGroup);
            return bind(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public View getRoot() {
        return this.rootView;
    }
}
