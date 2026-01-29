package com.discord.progress_dots.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.progress_dots.ProgressDot;
import com.discord.progress_dots.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ProgressDotsViewBinding implements ViewBinding {
    @NonNull
    private final View rootView;
    @NonNull
    public final ProgressDot viewProgressDots1;
    @NonNull
    public final ProgressDot viewProgressDots2;
    @NonNull
    public final ProgressDot viewProgressDots3;

    private ProgressDotsViewBinding(@NonNull View view, @NonNull ProgressDot progressDot, @NonNull ProgressDot progressDot2, @NonNull ProgressDot progressDot3) {
        this.rootView = view;
        this.viewProgressDots1 = progressDot;
        this.viewProgressDots2 = progressDot2;
        this.viewProgressDots3 = progressDot3;
    }

    @NonNull
    public static ProgressDotsViewBinding bind(@NonNull View view) {
        int i10 = R.id.view_progress_dots_1;
        ProgressDot progressDot = (ProgressDot) a.a(view, i10);
        if (progressDot != null) {
            i10 = R.id.view_progress_dots_2;
            ProgressDot progressDot2 = (ProgressDot) a.a(view, i10);
            if (progressDot2 != null) {
                i10 = R.id.view_progress_dots_3;
                ProgressDot progressDot3 = (ProgressDot) a.a(view, i10);
                if (progressDot3 != null) {
                    return new ProgressDotsViewBinding(view, progressDot, progressDot2, progressDot3);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static ProgressDotsViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.progress_dots_view, viewGroup);
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
