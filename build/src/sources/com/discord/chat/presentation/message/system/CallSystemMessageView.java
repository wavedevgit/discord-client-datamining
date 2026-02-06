package com.discord.chat.presentation.message.system;

import android.content.Context;
import android.os.Bundle;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.Message;
import com.discord.chat.databinding.CallSystemMessageViewBinding;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.ChatListConstraintLayout;
import com.discord.chat.presentation.message.AddSystemMessageCardStyleKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.coroutines.AttachedViewCoroutineScope;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.overlapping_circles.OverlappingCirclesView;
import com.discord.overlapping_circles.OverlappingItem;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import os.i;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0016\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/chat/presentation/message/system/CallSystemMessageView;", "Lcom/discord/chat/presentation/list/ChatListConstraintLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "greenIconColor", "", "redIconColor", "grayIconColor", "binding", "Lcom/discord/chat/databinding/CallSystemMessageViewBinding;", "setMessage", "", "message", "Lcom/discord/chat/bridge/Message;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCallSystemMessageView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CallSystemMessageView.kt\ncom/discord/chat/presentation/message/system/CallSystemMessageView\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,158:1\n1563#2:159\n1634#2,3:160\n*S KotlinDebug\n*F\n+ 1 CallSystemMessageView.kt\ncom/discord/chat/presentation/message/system/CallSystemMessageView\n*L\n120#1:159\n120#1:160,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CallSystemMessageView extends ChatListConstraintLayout {
    @NotNull
    private final CallSystemMessageViewBinding binding;
    private final int grayIconColor;
    private final int greenIconColor;
    private final int redIconColor;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public CallSystemMessageView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setMessage$lambda$3(ChatEventHandler chatEventHandler, Message message, View view) {
        chatEventHandler.mo450onTapCallpfaIj0E(message.m237getId3Eiw7ao(), message.m234getChannelIdo4g7jtM());
    }

    public final void setMessage(@NotNull final Message message, @NotNull final ChatEventHandler eventHandler) {
        ReactAsset reactAsset;
        int i10;
        CallSystemMessageView callSystemMessageView;
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        SimpleDraweeView icon = this.binding.icon;
        Intrinsics.checkNotNullExpressionValue(icon, "icon");
        Boolean missed = message.getMissed();
        Boolean bool = Boolean.TRUE;
        if (Intrinsics.areEqual(missed, bool)) {
            reactAsset = ReactAsset.CallDisconnect;
        } else {
            reactAsset = ReactAsset.CallConnect;
        }
        ReactAssetUtilsKt.setReactAsset(icon, reactAsset);
        SimpleDraweeView icon2 = this.binding.icon;
        Intrinsics.checkNotNullExpressionValue(icon2, "icon");
        if (Intrinsics.areEqual(message.isCallActive(), bool)) {
            i10 = this.greenIconColor;
        } else if (Intrinsics.areEqual(message.getMissed(), bool)) {
            i10 = this.redIconColor;
        } else {
            i10 = this.grayIconColor;
        }
        ColorUtilsKt.setTintColor(icon2, Integer.valueOf(i10));
        this.binding.message.setText(message.getTitle());
        AttachedViewCoroutineScope attachedScope = CoroutineViewUtilsKt.getAttachedScope(this);
        String simpleName = CallSystemMessageView.class.getSimpleName();
        AttachedViewCoroutineScope.cancelAllWork$default(attachedScope, "Binding " + simpleName, null, 2, null);
        if (Intrinsics.areEqual(message.isCallActive(), bool)) {
            Long rawMilliseconds = message.getRawMilliseconds();
            Intrinsics.checkNotNull(rawMilliseconds);
            callSystemMessageView = this;
            i.d(CoroutineViewUtilsKt.getAttachedScope(this), null, null, new CallSystemMessageView$setMessage$1(callSystemMessageView, rawMilliseconds.longValue(), message, null), 3, null);
        } else {
            callSystemMessageView = this;
            callSystemMessageView.binding.info.setText(message.getDescription());
        }
        OverlappingCirclesView overlappingCirclesView = callSystemMessageView.binding.participants;
        List<String> avatarURLs = message.getAvatarURLs();
        if (avatarURLs == null) {
            avatarURLs = CollectionsKt.l();
        }
        List<String> list = avatarURLs;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (String str : list) {
            arrayList.add(new OverlappingItem(str));
        }
        overlappingCirclesView.setItems(arrayList);
        final View.OnClickListener onClickListener = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.system.d
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                CallSystemMessageView.setMessage$lambda$3(ChatEventHandler.this, message, view);
            }
        };
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested(this, true, onClickListener);
        h0.n0(this, new androidx.core.view.a() { // from class: com.discord.chat.presentation.message.system.CallSystemMessageView$setMessage$3
            @Override // androidx.core.view.a
            public void onInitializeAccessibilityNodeInfo(View host, AccessibilityNodeInfoCompat info) {
                Intrinsics.checkNotNullParameter(host, "host");
                Intrinsics.checkNotNullParameter(info, "info");
                super.onInitializeAccessibilityNodeInfo(host, info);
                Context context = CallSystemMessageView.this.getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                info.T0(I18nUtilsKt.i18nFormat$default(context, I18nMessage.A11Y_ROLE_BUTTON, null, 2, null));
            }

            @Override // androidx.core.view.a
            public boolean performAccessibilityAction(View host, int i11, Bundle bundle) {
                Intrinsics.checkNotNullParameter(host, "host");
                if (i11 == 16) {
                    onClickListener.onClick(host);
                }
                return super.performAccessibilityAction(host, i11, bundle);
            }
        });
    }

    public /* synthetic */ CallSystemMessageView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CallSystemMessageView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        this.greenIconColor = ColorUtilsKt.getColorCompat(this, R.color.green_360);
        this.redIconColor = ColorUtilsKt.getColorCompat(this, R.color.red_400);
        this.grayIconColor = ThemeManagerKt.getTheme().getInteractiveTextDefault();
        CallSystemMessageViewBinding inflate = CallSystemMessageViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        AddSystemMessageCardStyleKt.addSystemMessageCardStyle(this);
        TextView textView = inflate.message;
        Intrinsics.checkNotNull(textView);
        SetTextSizeSpKt.setTextSizeSp(textView, 16.0f);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimarySemibold);
        textView.setTextColor(ThemeManagerKt.getTheme().getMobileTextHeadingPrimary());
        TextView textView2 = inflate.info;
        Intrinsics.checkNotNull(textView2);
        SetTextSizeSpKt.setTextSizeSp(textView2, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(textView2, DiscordFont.PrimaryNormal);
        textView2.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
    }
}
