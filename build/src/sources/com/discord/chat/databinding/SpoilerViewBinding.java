package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.ObscureOverlayView;
import com.discord.chat.presentation.message.view.SpoilerOverlayView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SpoilerViewBinding implements ViewBinding {
    @NonNull
    public final ObscureOverlayView obscure;
    @NonNull
    private final View rootView;
    @NonNull
    public final SpoilerOverlayView spoiler;

    private SpoilerViewBinding(@NonNull View view, @NonNull ObscureOverlayView obscureOverlayView, @NonNull SpoilerOverlayView spoilerOverlayView) {
        this.rootView = view;
        this.obscure = obscureOverlayView;
        this.spoiler = spoilerOverlayView;
    }

    @NonNull
    public static SpoilerViewBinding bind(@NonNull View view) {
        int i10 = R.id.obscure;
        ObscureOverlayView obscureOverlayView = (ObscureOverlayView) a.a(view, i10);
        if (obscureOverlayView != null) {
            i10 = R.id.spoiler;
            SpoilerOverlayView spoilerOverlayView = (SpoilerOverlayView) a.a(view, i10);
            if (spoilerOverlayView != null) {
                return new SpoilerViewBinding(view, obscureOverlayView, spoilerOverlayView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static SpoilerViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.spoiler_view, viewGroup);
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
