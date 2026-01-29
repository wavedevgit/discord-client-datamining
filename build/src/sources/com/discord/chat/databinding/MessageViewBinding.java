package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewStub;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.Barrier;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.list.MaskedShadowView;
import com.discord.chat.presentation.message.ClanTagChipletView;
import com.discord.chat.presentation.message.ConnectionsRoleTagView;
import com.discord.chat.presentation.message.GameIconView;
import com.discord.chat.presentation.message.MessageAccessoriesView;
import com.discord.chat.presentation.message.MessageTagView;
import com.discord.chat.presentation.message.RoleDotView;
import com.discord.chat.presentation.message.RoleIconView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageViewBinding implements ViewBinding {
    @NonNull
    public final MessageAccessoriesView accessoriesView;
    @NonNull
    public final SimpleDraweeView authorAvatar;
    @NonNull
    public final SimpleDraweeView authorAvatarDecoration;
    @NonNull
    public final TextView authorName;
    @NonNull
    public final ClanTagChipletView clanTagChiplet;
    @NonNull
    public final ConnectionsRoleTagView connectionsRoleTag;
    @NonNull
    public final GameIconView gameIcon;
    @NonNull
    public final SimpleDraweeView guildCommunicationDisabledIcon;
    @NonNull
    public final LinearLayout header;
    @NonNull
    public final Barrier messageHeaderBarrier;
    @NonNull
    public final View messageHeaderDivider;
    @NonNull
    public final MessageTagView messageTagView;
    @NonNull
    public final ViewStub replyPreviewView;
    @NonNull
    public final RoleDotView roleDot;
    @NonNull
    public final RoleIconView roleIcon;
    @NonNull
    private final View rootView;
    @NonNull
    public final MaskedShadowView shadowView;
    @NonNull
    public final SimpleDraweeView suppressNotificationsIcon;
    @NonNull
    public final TextView timestamp;

    private MessageViewBinding(@NonNull View view, @NonNull MessageAccessoriesView messageAccessoriesView, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull TextView textView, @NonNull ClanTagChipletView clanTagChipletView, @NonNull ConnectionsRoleTagView connectionsRoleTagView, @NonNull GameIconView gameIconView, @NonNull SimpleDraweeView simpleDraweeView3, @NonNull LinearLayout linearLayout, @NonNull Barrier barrier, @NonNull View view2, @NonNull MessageTagView messageTagView, @NonNull ViewStub viewStub, @NonNull RoleDotView roleDotView, @NonNull RoleIconView roleIconView, @NonNull MaskedShadowView maskedShadowView, @NonNull SimpleDraweeView simpleDraweeView4, @NonNull TextView textView2) {
        this.rootView = view;
        this.accessoriesView = messageAccessoriesView;
        this.authorAvatar = simpleDraweeView;
        this.authorAvatarDecoration = simpleDraweeView2;
        this.authorName = textView;
        this.clanTagChiplet = clanTagChipletView;
        this.connectionsRoleTag = connectionsRoleTagView;
        this.gameIcon = gameIconView;
        this.guildCommunicationDisabledIcon = simpleDraweeView3;
        this.header = linearLayout;
        this.messageHeaderBarrier = barrier;
        this.messageHeaderDivider = view2;
        this.messageTagView = messageTagView;
        this.replyPreviewView = viewStub;
        this.roleDot = roleDotView;
        this.roleIcon = roleIconView;
        this.shadowView = maskedShadowView;
        this.suppressNotificationsIcon = simpleDraweeView4;
        this.timestamp = textView2;
    }

    @NonNull
    public static MessageViewBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.accessories_view;
        MessageAccessoriesView messageAccessoriesView = (MessageAccessoriesView) a.a(view, i10);
        if (messageAccessoriesView != null) {
            i10 = R.id.author_avatar;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                i10 = R.id.author_avatar_decoration;
                SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                if (simpleDraweeView2 != null) {
                    i10 = R.id.author_name;
                    TextView textView = (TextView) a.a(view, i10);
                    if (textView != null) {
                        i10 = R.id.clan_tag_chiplet;
                        ClanTagChipletView clanTagChipletView = (ClanTagChipletView) a.a(view, i10);
                        if (clanTagChipletView != null) {
                            i10 = R.id.connections_role_tag;
                            ConnectionsRoleTagView connectionsRoleTagView = (ConnectionsRoleTagView) a.a(view, i10);
                            if (connectionsRoleTagView != null) {
                                i10 = R.id.game_icon;
                                GameIconView gameIconView = (GameIconView) a.a(view, i10);
                                if (gameIconView != null) {
                                    i10 = R.id.guild_communication_disabled_icon;
                                    SimpleDraweeView simpleDraweeView3 = (SimpleDraweeView) a.a(view, i10);
                                    if (simpleDraweeView3 != null) {
                                        i10 = R.id.header;
                                        LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
                                        if (linearLayout != null) {
                                            i10 = R.id.message_header_barrier;
                                            Barrier barrier = (Barrier) a.a(view, i10);
                                            if (barrier != null && (a10 = a.a(view, (i10 = R.id.message_header_divider))) != null) {
                                                i10 = R.id.message_tag_view;
                                                MessageTagView messageTagView = (MessageTagView) a.a(view, i10);
                                                if (messageTagView != null) {
                                                    i10 = R.id.reply_preview_view;
                                                    ViewStub viewStub = (ViewStub) a.a(view, i10);
                                                    if (viewStub != null) {
                                                        i10 = R.id.role_dot;
                                                        RoleDotView roleDotView = (RoleDotView) a.a(view, i10);
                                                        if (roleDotView != null) {
                                                            i10 = R.id.role_icon;
                                                            RoleIconView roleIconView = (RoleIconView) a.a(view, i10);
                                                            if (roleIconView != null) {
                                                                i10 = R.id.shadow_view;
                                                                MaskedShadowView maskedShadowView = (MaskedShadowView) a.a(view, i10);
                                                                if (maskedShadowView != null) {
                                                                    i10 = R.id.suppress_notifications_icon;
                                                                    SimpleDraweeView simpleDraweeView4 = (SimpleDraweeView) a.a(view, i10);
                                                                    if (simpleDraweeView4 != null) {
                                                                        i10 = R.id.timestamp;
                                                                        TextView textView2 = (TextView) a.a(view, i10);
                                                                        if (textView2 != null) {
                                                                            return new MessageViewBinding(view, messageAccessoriesView, simpleDraweeView, simpleDraweeView2, textView, clanTagChipletView, connectionsRoleTagView, gameIconView, simpleDraweeView3, linearLayout, barrier, a10, messageTagView, viewStub, roleDotView, roleIconView, maskedShadowView, simpleDraweeView4, textView2);
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
    public static MessageViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.message_view, viewGroup);
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
