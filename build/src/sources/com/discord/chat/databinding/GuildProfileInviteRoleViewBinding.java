package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.RoleDotView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildProfileInviteRoleViewBinding implements ViewBinding {
    @NonNull
    public final RoleDotView roleDot;
    @NonNull
    public final TextView roleEmoji;
    @NonNull
    public final SimpleDraweeView roleIcon;
    @NonNull
    public final TextView roleName;
    @NonNull
    private final View rootView;

    private GuildProfileInviteRoleViewBinding(@NonNull View view, @NonNull RoleDotView roleDotView, @NonNull TextView textView, @NonNull SimpleDraweeView simpleDraweeView, @NonNull TextView textView2) {
        this.rootView = view;
        this.roleDot = roleDotView;
        this.roleEmoji = textView;
        this.roleIcon = simpleDraweeView;
        this.roleName = textView2;
    }

    @NonNull
    public static GuildProfileInviteRoleViewBinding bind(@NonNull View view) {
        int i10 = R.id.role_dot;
        RoleDotView roleDotView = (RoleDotView) a.a(view, i10);
        if (roleDotView != null) {
            i10 = R.id.role_emoji;
            TextView textView = (TextView) a.a(view, i10);
            if (textView != null) {
                i10 = R.id.role_icon;
                SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
                if (simpleDraweeView != null) {
                    i10 = R.id.role_name;
                    TextView textView2 = (TextView) a.a(view, i10);
                    if (textView2 != null) {
                        return new GuildProfileInviteRoleViewBinding(view, roleDotView, textView, simpleDraweeView, textView2);
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static GuildProfileInviteRoleViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.guild_profile_invite_role_view, viewGroup);
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
