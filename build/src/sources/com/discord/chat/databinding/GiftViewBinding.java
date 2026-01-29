package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.Barrier;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.Group;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.core.DCDButton;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GiftViewBinding implements ViewBinding {
    @NonNull
    public final DCDButton acceptButton;
    @NonNull
    public final View acceptButtonGradient;
    @NonNull
    public final Barrier barrier;
    @NonNull
    public final TextView body;
    @NonNull
    public final ConstraintLayout content;
    @NonNull
    public final Group gradients;
    @NonNull
    public final TextView header;
    @NonNull
    public final View headerGradient;
    @NonNull
    private final FrameLayout rootView;
    @NonNull
    public final SimpleDraweeView splash;
    @NonNull
    public final TextView subtitle;
    @NonNull
    public final View subtitleGradient;
    @NonNull
    public final SimpleDraweeView thumbnail;
    @NonNull
    public final View thumbnailGradient;
    @NonNull
    public final TextView title;
    @NonNull
    public final View titleGradient;

    private GiftViewBinding(@NonNull FrameLayout frameLayout, @NonNull DCDButton dCDButton, @NonNull View view, @NonNull Barrier barrier, @NonNull TextView textView, @NonNull ConstraintLayout constraintLayout, @NonNull Group group, @NonNull TextView textView2, @NonNull View view2, @NonNull SimpleDraweeView simpleDraweeView, @NonNull TextView textView3, @NonNull View view3, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull View view4, @NonNull TextView textView4, @NonNull View view5) {
        this.rootView = frameLayout;
        this.acceptButton = dCDButton;
        this.acceptButtonGradient = view;
        this.barrier = barrier;
        this.body = textView;
        this.content = constraintLayout;
        this.gradients = group;
        this.header = textView2;
        this.headerGradient = view2;
        this.splash = simpleDraweeView;
        this.subtitle = textView3;
        this.subtitleGradient = view3;
        this.thumbnail = simpleDraweeView2;
        this.thumbnailGradient = view4;
        this.title = textView4;
        this.titleGradient = view5;
    }

    @NonNull
    public static GiftViewBinding bind(@NonNull View view) {
        View a10;
        View a11;
        View a12;
        View a13;
        View a14;
        int i10 = R.id.acceptButton;
        DCDButton dCDButton = (DCDButton) a.a(view, i10);
        if (dCDButton != null && (a10 = a.a(view, (i10 = R.id.acceptButtonGradient))) != null) {
            i10 = R.id.barrier;
            Barrier barrier = (Barrier) a.a(view, i10);
            if (barrier != null) {
                i10 = R.id.body;
                TextView textView = (TextView) a.a(view, i10);
                if (textView != null) {
                    i10 = R.id.content;
                    ConstraintLayout constraintLayout = (ConstraintLayout) a.a(view, i10);
                    if (constraintLayout != null) {
                        i10 = R.id.gradients;
                        Group group = (Group) a.a(view, i10);
                        if (group != null) {
                            i10 = R.id.header;
                            TextView textView2 = (TextView) a.a(view, i10);
                            if (textView2 != null && (a11 = a.a(view, (i10 = R.id.headerGradient))) != null) {
                                i10 = R.id.splash;
                                SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
                                if (simpleDraweeView != null) {
                                    i10 = R.id.subtitle;
                                    TextView textView3 = (TextView) a.a(view, i10);
                                    if (textView3 != null && (a12 = a.a(view, (i10 = R.id.subtitleGradient))) != null) {
                                        i10 = R.id.thumbnail;
                                        SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                                        if (simpleDraweeView2 != null && (a13 = a.a(view, (i10 = R.id.thumbnailGradient))) != null) {
                                            i10 = R.id.title;
                                            TextView textView4 = (TextView) a.a(view, i10);
                                            if (textView4 != null && (a14 = a.a(view, (i10 = R.id.titleGradient))) != null) {
                                                return new GiftViewBinding((FrameLayout) view, dCDButton, a10, barrier, textView, constraintLayout, group, textView2, a11, simpleDraweeView, textView3, a12, simpleDraweeView2, a13, textView4, a14);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static GiftViewBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static GiftViewBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.gift_view, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public FrameLayout getRoot() {
        return this.rootView;
    }
}
