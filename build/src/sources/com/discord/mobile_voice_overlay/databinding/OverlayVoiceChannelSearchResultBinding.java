package com.discord.mobile_voice_overlay.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.mobile_voice_overlay.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OverlayVoiceChannelSearchResultBinding implements ViewBinding {
    @NonNull
    public final TextView categoryName;
    @NonNull
    public final TextView channelName;
    @NonNull
    public final ConstraintLayout container;
    @NonNull
    public final TextView guildName;
    @NonNull
    private final ConstraintLayout rootView;

    private OverlayVoiceChannelSearchResultBinding(@NonNull ConstraintLayout constraintLayout, @NonNull TextView textView, @NonNull TextView textView2, @NonNull ConstraintLayout constraintLayout2, @NonNull TextView textView3) {
        this.rootView = constraintLayout;
        this.categoryName = textView;
        this.channelName = textView2;
        this.container = constraintLayout2;
        this.guildName = textView3;
    }

    @NonNull
    public static OverlayVoiceChannelSearchResultBinding bind(@NonNull View view) {
        int i10 = R.id.category_name;
        TextView textView = (TextView) a.a(view, i10);
        if (textView != null) {
            i10 = R.id.channel_name;
            TextView textView2 = (TextView) a.a(view, i10);
            if (textView2 != null) {
                ConstraintLayout constraintLayout = (ConstraintLayout) view;
                i10 = R.id.guild_name;
                TextView textView3 = (TextView) a.a(view, i10);
                if (textView3 != null) {
                    return new OverlayVoiceChannelSearchResultBinding(constraintLayout, textView, textView2, constraintLayout, textView3);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static OverlayVoiceChannelSearchResultBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static OverlayVoiceChannelSearchResultBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.overlay_voice_channel_search_result, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public ConstraintLayout getRoot() {
        return this.rootView;
    }
}
