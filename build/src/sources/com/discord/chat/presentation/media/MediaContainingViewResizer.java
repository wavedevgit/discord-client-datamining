package com.discord.chat.presentation.media;

import android.view.View;
import android.view.ViewGroup;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import pr.a;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001\u000eB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J4\u0010\u0004\u001a\u00020\u0005*\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\b2\b\b\u0002\u0010\f\u001a\u00020\r¨\u0006\u000f"}, d2 = {"Lcom/discord/chat/presentation/media/MediaContainingViewResizer;", "", "<init>", "()V", "resizeLayoutParams", "", "Landroid/view/View;", "targetWidthPx", "", "targetHeightPx", "maxWidthPx", "maxHeightPx", ViewProps.RESIZE_MODE, "Lcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;", "ResizeMode", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaContainingViewResizer {
    @NotNull
    public static final MediaContainingViewResizer INSTANCE = new MediaContainingViewResizer();

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;", "", "<init>", "(Ljava/lang/String;I)V", "Fill", "Wrap", "Cover", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ResizeMode {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ResizeMode[] $VALUES;
        public static final ResizeMode Fill = new ResizeMode("Fill", 0);
        public static final ResizeMode Wrap = new ResizeMode("Wrap", 1);
        public static final ResizeMode Cover = new ResizeMode("Cover", 2);

        private static final /* synthetic */ ResizeMode[] $values() {
            return new ResizeMode[]{Fill, Wrap, Cover};
        }

        static {
            ResizeMode[] $values = $values();
            $VALUES = $values;
            $ENTRIES = a.a($values);
        }

        private ResizeMode(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ResizeMode valueOf(String str) {
            return (ResizeMode) Enum.valueOf(ResizeMode.class, str);
        }

        public static ResizeMode[] values() {
            return (ResizeMode[]) $VALUES.clone();
        }
    }

    private MediaContainingViewResizer() {
    }

    public static /* synthetic */ void resizeLayoutParams$default(MediaContainingViewResizer mediaContainingViewResizer, View view, int i10, int i11, int i12, int i13, ResizeMode resizeMode, int i14, Object obj) {
        if ((i14 & 16) != 0) {
            resizeMode = ResizeMode.Fill;
        }
        mediaContainingViewResizer.resizeLayoutParams(view, i10, i11, i12, i13, resizeMode);
    }

    public final void resizeLayoutParams(@NotNull View view, int i10, int i11, int i12, int i13, @NotNull ResizeMode resizeMode) {
        boolean z10;
        float f10;
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(resizeMode, "resizeMode");
        if (resizeMode != ResizeMode.Fill && resizeMode != ResizeMode.Cover && i10 <= i12 && i11 <= i13) {
            z10 = false;
        } else {
            z10 = true;
        }
        float f11 = view.getResources().getDisplayMetrics().density;
        float f12 = 1.0f;
        if (z10) {
            float f13 = i10;
            f10 = Math.min(i12, f13 * f11) / f13;
        } else {
            f10 = 1.0f;
        }
        if (z10) {
            float f14 = i11;
            f12 = Math.min(i13, f11 * f14) / f14;
        }
        float min = Math.min(f12, f10);
        int i14 = (int) (i10 * min);
        int i15 = (int) (i11 * min);
        if (resizeMode == ResizeMode.Cover) {
            i14 = Math.max(i14, i15);
            i15 = i14;
        }
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams != null) {
            if (i14 != layoutParams.width || i15 != layoutParams.height) {
                layoutParams.width = i14;
                layoutParams.height = i15;
            }
            view.setLayoutParams(layoutParams);
            return;
        }
        view.setLayoutParams(new ViewGroup.LayoutParams(i14, i15));
    }
}
