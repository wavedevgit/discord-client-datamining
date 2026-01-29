package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.botuikit.components.ContentInventoryComponentView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageComponentContentInventoryViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView contentInventoryComponentAvatarImage;
    @NonNull
    public final SimpleDraweeView contentInventoryComponentBadgeIcon;
    @NonNull
    public final SimpleDraweeView contentInventoryComponentMediaImage;
    @NonNull
    public final SimpleDraweeView contentInventoryComponentPlatformIcon;
    @NonNull
    public final TextView contentInventoryComponentSubtitle;
    @NonNull
    public final TextView contentInventoryComponentTitle;
    @NonNull
    public final TextView contentInventoryComponentUsername;
    @NonNull
    private final ContentInventoryComponentView rootView;

    private MessageComponentContentInventoryViewBinding(@NonNull ContentInventoryComponentView contentInventoryComponentView, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull SimpleDraweeView simpleDraweeView3, @NonNull SimpleDraweeView simpleDraweeView4, @NonNull TextView textView, @NonNull TextView textView2, @NonNull TextView textView3) {
        this.rootView = contentInventoryComponentView;
        this.contentInventoryComponentAvatarImage = simpleDraweeView;
        this.contentInventoryComponentBadgeIcon = simpleDraweeView2;
        this.contentInventoryComponentMediaImage = simpleDraweeView3;
        this.contentInventoryComponentPlatformIcon = simpleDraweeView4;
        this.contentInventoryComponentSubtitle = textView;
        this.contentInventoryComponentTitle = textView2;
        this.contentInventoryComponentUsername = textView3;
    }

    @NonNull
    public static MessageComponentContentInventoryViewBinding bind(@NonNull View view) {
        int i10 = R.id.content_inventory_component_avatar_image;
        SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
        if (simpleDraweeView != null) {
            i10 = R.id.content_inventory_component_badge_icon;
            SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView2 != null) {
                i10 = R.id.content_inventory_component_media_image;
                SimpleDraweeView simpleDraweeView3 = (SimpleDraweeView) a.a(view, i10);
                if (simpleDraweeView3 != null) {
                    i10 = R.id.content_inventory_component_platform_icon;
                    SimpleDraweeView simpleDraweeView4 = (SimpleDraweeView) a.a(view, i10);
                    if (simpleDraweeView4 != null) {
                        i10 = R.id.content_inventory_component_subtitle;
                        TextView textView = (TextView) a.a(view, i10);
                        if (textView != null) {
                            i10 = R.id.content_inventory_component_title;
                            TextView textView2 = (TextView) a.a(view, i10);
                            if (textView2 != null) {
                                i10 = R.id.content_inventory_component_username;
                                TextView textView3 = (TextView) a.a(view, i10);
                                if (textView3 != null) {
                                    return new MessageComponentContentInventoryViewBinding((ContentInventoryComponentView) view, simpleDraweeView, simpleDraweeView2, simpleDraweeView3, simpleDraweeView4, textView, textView2, textView3);
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
    public static MessageComponentContentInventoryViewBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static MessageComponentContentInventoryViewBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.message_component_content_inventory_view, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public ContentInventoryComponentView getRoot() {
        return this.rootView;
    }
}
