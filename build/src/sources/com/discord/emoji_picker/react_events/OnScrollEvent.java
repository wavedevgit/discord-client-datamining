package com.discord.emoji_picker.react_events;

import com.discord.emoji_picker.EmojiPickerScroller;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import lr.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\b\u0010\u0018\u00002\u00020\u0001B9\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0003\u0012\u0006\u0010\b\u001a\u00020\u0003¢\u0006\u0004\b\t\u0010\nB\u0011\b\u0016\u0012\u0006\u0010\u000b\u001a\u00020\f¢\u0006\u0004\b\t\u0010\rJ\b\u0010\u000e\u001a\u00020\u000fH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/emoji_picker/react_events/OnScrollEvent;", "Lcom/discord/reactevents/ReactEvent;", "x", "", "y", "width", "height", "contentWidth", "contentHeight", "<init>", "(FFFFFF)V", "data", "Lcom/discord/emoji_picker/EmojiPickerScroller$ScrollEvent;", "(Lcom/discord/emoji_picker/EmojiPickerScroller$ScrollEvent;)V", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class OnScrollEvent implements ReactEvent {
    private final float contentHeight;
    private final float contentWidth;
    private final float height;
    private final float width;

    /* renamed from: x  reason: collision with root package name */
    private final float f8980x;

    /* renamed from: y  reason: collision with root package name */
    private final float f8981y;

    private OnScrollEvent(float f10, float f11, float f12, float f13, float f14, float f15) {
        this.f8980x = f10;
        this.f8981y = f11;
        this.width = f12;
        this.height = f13;
        this.contentWidth = f14;
        this.contentHeight = f15;
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("contentInset", NativeMapExtensionsKt.nativeMapOf(v.a(ViewProps.LEFT, 0), v.a(ViewProps.TOP, 0), v.a(ViewProps.BOTTOM, 0), v.a(ViewProps.RIGHT, 0))), v.a("contentOffset", NativeMapExtensionsKt.nativeMapOf(v.a("x", Float.valueOf(this.f8980x)), v.a("y", Float.valueOf(this.f8981y)))), v.a("contentSize", NativeMapExtensionsKt.nativeMapOf(v.a("width", Float.valueOf(this.contentWidth)), v.a("height", Float.valueOf(this.contentHeight)))), v.a("layoutMeasurement", NativeMapExtensionsKt.nativeMapOf(v.a("width", Float.valueOf(this.width)), v.a("height", Float.valueOf(this.height)))));
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public OnScrollEvent(@NotNull EmojiPickerScroller.ScrollEvent data) {
        this(SizeUtilsKt.getPxToDp(data.getX()), SizeUtilsKt.getPxToDp(data.getY()), SizeUtilsKt.getPxToDp(data.getWidth()), SizeUtilsKt.getPxToDp(data.getHeight()), SizeUtilsKt.getPxToDp(data.getContentWidth()), SizeUtilsKt.getPxToDp(data.getContentHeight()));
        Intrinsics.checkNotNullParameter(data, "data");
    }
}
