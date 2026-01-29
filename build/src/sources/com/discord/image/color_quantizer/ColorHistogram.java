package com.discord.image.color_quantizer;

import com.rnlineargradient.LinearGradientManager;
import java.util.Arrays;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0015\n\u0002\b\b\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\b\u0000\u0018\u0000 \u00112\u00020\u0001:\u0001\u0011B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0002\u001a\u00020\u0003H\u0002R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\t\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\bR\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000e¨\u0006\u0012"}, d2 = {"Lcom/discord/image/color_quantizer/ColorHistogram;", "", "pixels", "", "<init>", "([I)V", LinearGradientManager.PROP_COLORS, "getColors", "()[I", "colorCounts", "getColorCounts", "numberOfColors", "", "getNumberOfColors", "()I", "countFrequencies", "", "Companion", "color_quantizer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ColorHistogram {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final int[] colorCounts;
    @NotNull
    private final int[] colors;
    private final int numberOfColors;

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0015\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0002¨\u0006\b"}, d2 = {"Lcom/discord/image/color_quantizer/ColorHistogram$Companion;", "", "<init>", "()V", "countDistinctColors", "", "pixels", "", "color_quantizer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int countDistinctColors(int[] iArr) {
            if (iArr.length < 2) {
                return iArr.length;
            }
            int i10 = iArr[0];
            int length = iArr.length;
            int i11 = 1;
            for (int i12 = 1; i12 < length; i12++) {
                int i13 = iArr[i12];
                if (i13 != i10) {
                    i11++;
                    i10 = i13;
                }
            }
            return i11;
        }

        private Companion() {
        }
    }

    public ColorHistogram(@NotNull int[] pixels) {
        Intrinsics.checkNotNullParameter(pixels, "pixels");
        Arrays.sort(pixels);
        int countDistinctColors = Companion.countDistinctColors(pixels);
        this.numberOfColors = countDistinctColors;
        this.colors = new int[countDistinctColors];
        this.colorCounts = new int[countDistinctColors];
        countFrequencies(pixels);
    }

    private final void countFrequencies(int[] iArr) {
        if (iArr.length == 0) {
            return;
        }
        int i10 = 0;
        int i11 = iArr[0];
        this.colors[0] = i11;
        this.colorCounts[0] = 1;
        if (iArr.length != 1) {
            int length = iArr.length;
            for (int i12 = 1; i12 < length; i12++) {
                int i13 = iArr[i12];
                if (i13 == i11) {
                    int[] iArr2 = this.colorCounts;
                    iArr2[i10] = iArr2[i10] + 1;
                } else {
                    i10++;
                    this.colors[i10] = i13;
                    this.colorCounts[i10] = 1;
                    i11 = i13;
                }
            }
        }
    }

    @NotNull
    public final int[] getColorCounts() {
        return this.colorCounts;
    }

    @NotNull
    public final int[] getColors() {
        return this.colors;
    }

    public final int getNumberOfColors() {
        return this.numberOfColors;
    }
}
