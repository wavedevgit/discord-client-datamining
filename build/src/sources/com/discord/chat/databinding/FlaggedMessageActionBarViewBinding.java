package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.core.DCDButton;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FlaggedMessageActionBarViewBinding implements ViewBinding {
    @NonNull
    public final DCDButton actionsButton;
    @NonNull
    public final DCDButton feedbackButton;
    @NonNull
    private final View rootView;
    @NonNull
    public final ImageView separatorDot;

    private FlaggedMessageActionBarViewBinding(@NonNull View view, @NonNull DCDButton dCDButton, @NonNull DCDButton dCDButton2, @NonNull ImageView imageView) {
        this.rootView = view;
        this.actionsButton = dCDButton;
        this.feedbackButton = dCDButton2;
        this.separatorDot = imageView;
    }

    @NonNull
    public static FlaggedMessageActionBarViewBinding bind(@NonNull View view) {
        int i10 = R.id.actions_button;
        DCDButton dCDButton = (DCDButton) a.a(view, i10);
        if (dCDButton != null) {
            i10 = R.id.feedback_button;
            DCDButton dCDButton2 = (DCDButton) a.a(view, i10);
            if (dCDButton2 != null) {
                i10 = R.id.separator_dot;
                ImageView imageView = (ImageView) a.a(view, i10);
                if (imageView != null) {
                    return new FlaggedMessageActionBarViewBinding(view, dCDButton, dCDButton2, imageView);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static FlaggedMessageActionBarViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.flagged_message_action_bar_view, viewGroup);
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
