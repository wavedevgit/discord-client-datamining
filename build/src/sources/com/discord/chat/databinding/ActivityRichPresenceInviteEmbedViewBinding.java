package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.MessageContentView;
import com.discord.core.DCDButton;
import com.discord.overlapping_circles.OverlappingCirclesView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ActivityRichPresenceInviteEmbedViewBinding implements ViewBinding {
    @NonNull
    public final LinearLayout actionWrapper;
    @NonNull
    public final SimpleDraweeView activityIcon;
    @NonNull
    public final DCDButton button;
    @NonNull
    public final ConstraintLayout contentContainer;
    @NonNull
    public final SimpleDraweeView coverImage;
    @NonNull
    public final SimpleDraweeView desktopIcon;
    @NonNull
    public final ConstraintLayout footerContainer;
    @NonNull
    public final LinearLayout footerContent;
    @NonNull
    public final TextView footerLabel;
    @NonNull
    public final View gradientBackground;
    @NonNull
    public final TextView headerText;
    @NonNull
    public final MessageContentView hiddenContent;
    @NonNull
    public final OverlappingCirclesView partyAvatars;
    @NonNull
    public final ConstraintLayout partyContainer;
    @NonNull
    public final TextView partySizeText;
    @NonNull
    public final SimpleDraweeView playstationIcon;
    @NonNull
    private final View rootView;
    @NonNull
    public final TextView subtitle;
    @NonNull
    public final ConstraintLayout subtitleContainer;
    @NonNull
    public final SimpleDraweeView subtitleIcon;
    @NonNull
    public final LinearLayout textContentWrapper;
    @NonNull
    public final TextView title;
    @NonNull
    public final SimpleDraweeView xboxIcon;

    private ActivityRichPresenceInviteEmbedViewBinding(@NonNull View view, @NonNull LinearLayout linearLayout, @NonNull SimpleDraweeView simpleDraweeView, @NonNull DCDButton dCDButton, @NonNull ConstraintLayout constraintLayout, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull SimpleDraweeView simpleDraweeView3, @NonNull ConstraintLayout constraintLayout2, @NonNull LinearLayout linearLayout2, @NonNull TextView textView, @NonNull View view2, @NonNull TextView textView2, @NonNull MessageContentView messageContentView, @NonNull OverlappingCirclesView overlappingCirclesView, @NonNull ConstraintLayout constraintLayout3, @NonNull TextView textView3, @NonNull SimpleDraweeView simpleDraweeView4, @NonNull TextView textView4, @NonNull ConstraintLayout constraintLayout4, @NonNull SimpleDraweeView simpleDraweeView5, @NonNull LinearLayout linearLayout3, @NonNull TextView textView5, @NonNull SimpleDraweeView simpleDraweeView6) {
        this.rootView = view;
        this.actionWrapper = linearLayout;
        this.activityIcon = simpleDraweeView;
        this.button = dCDButton;
        this.contentContainer = constraintLayout;
        this.coverImage = simpleDraweeView2;
        this.desktopIcon = simpleDraweeView3;
        this.footerContainer = constraintLayout2;
        this.footerContent = linearLayout2;
        this.footerLabel = textView;
        this.gradientBackground = view2;
        this.headerText = textView2;
        this.hiddenContent = messageContentView;
        this.partyAvatars = overlappingCirclesView;
        this.partyContainer = constraintLayout3;
        this.partySizeText = textView3;
        this.playstationIcon = simpleDraweeView4;
        this.subtitle = textView4;
        this.subtitleContainer = constraintLayout4;
        this.subtitleIcon = simpleDraweeView5;
        this.textContentWrapper = linearLayout3;
        this.title = textView5;
        this.xboxIcon = simpleDraweeView6;
    }

    @NonNull
    public static ActivityRichPresenceInviteEmbedViewBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.action_wrapper;
        LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
        if (linearLayout != null) {
            i10 = R.id.activity_icon;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                i10 = R.id.button;
                DCDButton dCDButton = (DCDButton) a.a(view, i10);
                if (dCDButton != null) {
                    i10 = R.id.content_container;
                    ConstraintLayout constraintLayout = (ConstraintLayout) a.a(view, i10);
                    if (constraintLayout != null) {
                        i10 = R.id.cover_image;
                        SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                        if (simpleDraweeView2 != null) {
                            i10 = R.id.desktop_icon;
                            SimpleDraweeView simpleDraweeView3 = (SimpleDraweeView) a.a(view, i10);
                            if (simpleDraweeView3 != null) {
                                i10 = R.id.footer_container;
                                ConstraintLayout constraintLayout2 = (ConstraintLayout) a.a(view, i10);
                                if (constraintLayout2 != null) {
                                    i10 = R.id.footer_content;
                                    LinearLayout linearLayout2 = (LinearLayout) a.a(view, i10);
                                    if (linearLayout2 != null) {
                                        i10 = R.id.footer_label;
                                        TextView textView = (TextView) a.a(view, i10);
                                        if (textView != null && (a10 = a.a(view, (i10 = R.id.gradient_background))) != null) {
                                            i10 = R.id.header_text;
                                            TextView textView2 = (TextView) a.a(view, i10);
                                            if (textView2 != null) {
                                                i10 = R.id.hidden_content;
                                                MessageContentView messageContentView = (MessageContentView) a.a(view, i10);
                                                if (messageContentView != null) {
                                                    i10 = R.id.party_avatars;
                                                    OverlappingCirclesView overlappingCirclesView = (OverlappingCirclesView) a.a(view, i10);
                                                    if (overlappingCirclesView != null) {
                                                        i10 = R.id.party_container;
                                                        ConstraintLayout constraintLayout3 = (ConstraintLayout) a.a(view, i10);
                                                        if (constraintLayout3 != null) {
                                                            i10 = R.id.party_size_text;
                                                            TextView textView3 = (TextView) a.a(view, i10);
                                                            if (textView3 != null) {
                                                                i10 = R.id.playstation_icon;
                                                                SimpleDraweeView simpleDraweeView4 = (SimpleDraweeView) a.a(view, i10);
                                                                if (simpleDraweeView4 != null) {
                                                                    i10 = R.id.subtitle;
                                                                    TextView textView4 = (TextView) a.a(view, i10);
                                                                    if (textView4 != null) {
                                                                        i10 = R.id.subtitle_container;
                                                                        ConstraintLayout constraintLayout4 = (ConstraintLayout) a.a(view, i10);
                                                                        if (constraintLayout4 != null) {
                                                                            i10 = R.id.subtitle_icon;
                                                                            SimpleDraweeView simpleDraweeView5 = (SimpleDraweeView) a.a(view, i10);
                                                                            if (simpleDraweeView5 != null) {
                                                                                i10 = R.id.text_content_wrapper;
                                                                                LinearLayout linearLayout3 = (LinearLayout) a.a(view, i10);
                                                                                if (linearLayout3 != null) {
                                                                                    i10 = R.id.title;
                                                                                    TextView textView5 = (TextView) a.a(view, i10);
                                                                                    if (textView5 != null) {
                                                                                        i10 = R.id.xbox_icon;
                                                                                        SimpleDraweeView simpleDraweeView6 = (SimpleDraweeView) a.a(view, i10);
                                                                                        if (simpleDraweeView6 != null) {
                                                                                            return new ActivityRichPresenceInviteEmbedViewBinding(view, linearLayout, simpleDraweeView, dCDButton, constraintLayout, simpleDraweeView2, simpleDraweeView3, constraintLayout2, linearLayout2, textView, a10, textView2, messageContentView, overlappingCirclesView, constraintLayout3, textView3, simpleDraweeView4, textView4, constraintLayout4, simpleDraweeView5, linearLayout3, textView5, simpleDraweeView6);
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
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static ActivityRichPresenceInviteEmbedViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.activity_rich_presence_invite_embed_view, viewGroup);
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
