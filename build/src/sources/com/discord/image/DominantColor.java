package com.discord.image;

import android.graphics.Bitmap;
import com.discord.image.color_quantizer.ColorCutQuantizer;
import com.discord.image.color_quantizer.Swatch;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import r1.c;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001\nB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0006\u0018\u00010\u00052\u0006\u0010\u0007\u001a\u00020\bH\u0007J\u0016\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00060\u00052\u0006\u0010\u0007\u001a\u00020\bH\u0002¨\u0006\u000b"}, d2 = {"Lcom/discord/image/DominantColor;", "", "<init>", "()V", "getRepresentativeColors", "", "", "bitmap", "Landroid/graphics/Bitmap;", "getPrimaryColorsForBitmap", "NoSwatchesFoundException", "color_quantizer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDominantColor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DominantColor.kt\ncom/discord/image/DominantColor\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,35:1\n1563#2:36\n1634#2,3:37\n1563#2:40\n1634#2,3:41\n*S KotlinDebug\n*F\n+ 1 DominantColor.kt\ncom/discord/image/DominantColor\n*L\n17#1:36\n17#1:37,3\n27#1:40\n27#1:41,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DominantColor {
    @NotNull
    public static final DominantColor INSTANCE = new DominantColor();

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0002\u0018\u00002\u00060\u0001j\u0002`\u0002B\u0007¢\u0006\u0004\b\u0003\u0010\u0004¨\u0006\u0005"}, d2 = {"Lcom/discord/image/DominantColor$NoSwatchesFoundException;", "Ljava/lang/RuntimeException;", "Lkotlin/RuntimeException;", "<init>", "()V", "color_quantizer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class NoSwatchesFoundException extends RuntimeException {
    }

    private DominantColor() {
    }

    private final List<Integer> getPrimaryColorsForBitmap(Bitmap bitmap) {
        List<Swatch> quantizedColors = ColorCutQuantizer.Companion.fromBitmap(bitmap, 5).getQuantizedColors();
        if (!quantizedColors.isEmpty()) {
            List<Swatch> list = quantizedColors;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (Swatch swatch : list) {
                arrayList.add(Integer.valueOf(swatch.getRgb()));
            }
            return arrayList;
        }
        throw new NoSwatchesFoundException();
    }

    public final List<Integer> getRepresentativeColors(@NotNull Bitmap bitmap) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        try {
            List<Integer> primaryColorsForBitmap = getPrimaryColorsForBitmap(bitmap);
            if (primaryColorsForBitmap.isEmpty()) {
                return null;
            }
            List<Integer> list = primaryColorsForBitmap;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (Number number : list) {
                arrayList.add(Integer.valueOf(c.l(number.intValue(), SetSpanOperation.SPAN_MAX_PRIORITY)));
            }
            return arrayList;
        } catch (Exception unused) {
            return null;
        }
    }
}
