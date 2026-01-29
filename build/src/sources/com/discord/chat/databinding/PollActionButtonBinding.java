package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.core.DCDButton;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PollActionButtonBinding implements ViewBinding {
    @NonNull
    public final DCDButton actionButton;
    @NonNull
    public final TextView actionText;
    @NonNull
    private final View rootView;

    private PollActionButtonBinding(@NonNull View view, @NonNull DCDButton dCDButton, @NonNull TextView textView) {
        this.rootView = view;
        this.actionButton = dCDButton;
        this.actionText = textView;
    }

    @NonNull
    public static PollActionButtonBinding bind(@NonNull View view) {
        int i10 = R.id.action_button;
        DCDButton dCDButton = (DCDButton) a.a(view, i10);
        if (dCDButton != null) {
            i10 = R.id.action_text;
            TextView textView = (TextView) a.a(view, i10);
            if (textView != null) {
                return new PollActionButtonBinding(view, dCDButton, textView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static PollActionButtonBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.poll_action_button, viewGroup);
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
