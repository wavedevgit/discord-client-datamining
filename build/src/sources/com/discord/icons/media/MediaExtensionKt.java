package com.discord.icons.media;

import android.os.Build;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0012\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\u001a\u0010\u0010\u0003\u001a\u00020\u00012\u0006\u0010\u0004\u001a\u00020\u0005H\u0000\u001a\u0012\u0010\u0006\u001a\u00020\u00052\b\u0010\u0007\u001a\u0004\u0018\u00010\u0001H\u0000\"\u000e\u0010\u0000\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000\"\u000e\u0010\u0002\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\b"}, d2 = {"ANIMATED_IMAGE_EXTENSION", "", "STATIC_IMAGE_EXTENSION", "getMediaExtension", "allowAnimation", "", "isImageHashAnimated", "imageHash", "icons_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaExtensionKt {
    @NotNull
    private static final String ANIMATED_IMAGE_EXTENSION;
    @NotNull
    private static final String STATIC_IMAGE_EXTENSION;

    static {
        String str;
        List o10 = CollectionsKt.o(28, 29);
        int i10 = Build.VERSION.SDK_INT;
        String str2 = "webp";
        if (!o10.contains(Integer.valueOf(i10))) {
            str = "webp";
        } else {
            str = "gif";
        }
        ANIMATED_IMAGE_EXTENSION = str;
        if (CollectionsKt.o(28, 29).contains(Integer.valueOf(i10))) {
            str2 = "png";
        }
        STATIC_IMAGE_EXTENSION = str2;
    }

    @NotNull
    public static final String getMediaExtension(boolean z10) {
        if (z10) {
            return ANIMATED_IMAGE_EXTENSION;
        }
        return STATIC_IMAGE_EXTENSION;
    }

    public static final boolean isImageHashAnimated(String str) {
        if (str == null) {
            return true;
        }
        return StringsKt.P(str, "a_", false, 2, null);
    }
}
