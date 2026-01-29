package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ProgressBar;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatLoadingViewBinding implements ViewBinding {
    @NonNull
    public final Button button;
    @NonNull
    public final ProgressBar progressSpinner;
    @NonNull
    private final View rootView;

    private ChatLoadingViewBinding(@NonNull View view, @NonNull Button button, @NonNull ProgressBar progressBar) {
        this.rootView = view;
        this.button = button;
        this.progressSpinner = progressBar;
    }

    @NonNull
    public static ChatLoadingViewBinding bind(@NonNull View view) {
        int i10 = R.id.button;
        Button button = (Button) a.a(view, i10);
        if (button != null) {
            i10 = R.id.progress_spinner;
            ProgressBar progressBar = (ProgressBar) a.a(view, i10);
            if (progressBar != null) {
                return new ChatLoadingViewBinding(view, button, progressBar);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static ChatLoadingViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.chat_loading_view, viewGroup);
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
