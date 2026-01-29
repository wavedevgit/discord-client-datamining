package com.discord.image.color_quantizer;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.util.SparseIntArray;
import com.discord.image.color_quantizer.ColorCutQuantizer;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0014\n\u0000\n\u0002\u0010\u0015\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u001e\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u0000\u0018\u0000 (2\u00020\u0001:\u0002'(B\u001b\b\u0002\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u001e\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00100\u000f2\u0006\u0010\u0016\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u0005H\u0002J\"\u0010\u0017\u001a\u00020\u00182\u0010\u0010\u0019\u001a\f\u0012\b\u0012\u00060\u001bR\u00020\u00000\u001a2\u0006\u0010\u001c\u001a\u00020\u0005H\u0002J \u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u00100\u000f2\u0010\u0010\u001e\u001a\f\u0012\b\u0012\u00060\u001bR\u00020\u00000\u001fH\u0002J \u0010 \u001a\u00020\u00182\u0006\u0010!\u001a\u00020\u00052\u0006\u0010\"\u001a\u00020\u00052\u0006\u0010#\u001a\u00020\u0005H\u0002J\u0010\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u0005H\u0002R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00100\u000fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0017\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00100\u00128F¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u0014¨\u0006)"}, d2 = {"Lcom/discord/image/color_quantizer/ColorCutQuantizer;", "", "colorHistogram", "Lcom/discord/image/color_quantizer/ColorHistogram;", "maxColors", "", "<init>", "(Lcom/discord/image/color_quantizer/ColorHistogram;I)V", "mTempHsl", "", "mColors", "", "mColorPopulations", "Landroid/util/SparseIntArray;", "mQuantizedColors", "", "Lcom/discord/image/color_quantizer/Swatch;", "quantizedColors", "", "getQuantizedColors", "()Ljava/util/List;", "quantizePixels", "maxColorIndex", "splitBoxes", "", "queue", "Ljava/util/PriorityQueue;", "Lcom/discord/image/color_quantizer/ColorCutQuantizer$Vbox;", "maxSize", "generateAverageColors", "vboxes", "", "modifySignificantOctet", "dimension", "lowIndex", "highIndex", "shouldIgnoreColor", "", ViewProps.COLOR, "Vbox", "Companion", "color_quantizer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nColorCutQuantizer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ColorCutQuantizer.kt\ncom/discord/image/color_quantizer/ColorCutQuantizer\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,391:1\n1#2:392\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ColorCutQuantizer {
    private static final float BLACK_MAX_LIGHTNESS = 0.05f;
    private static final int COMPONENT_BLUE = -1;
    private static final int COMPONENT_GREEN = -2;
    private static final int COMPONENT_RED = -3;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Comparator<Vbox> VBOX_COMPARATOR_VOLUME = new Comparator() { // from class: com.discord.image.color_quantizer.a
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int VBOX_COMPARATOR_VOLUME$lambda$2;
            VBOX_COMPARATOR_VOLUME$lambda$2 = ColorCutQuantizer.VBOX_COMPARATOR_VOLUME$lambda$2((ColorCutQuantizer.Vbox) obj, (ColorCutQuantizer.Vbox) obj2);
            return VBOX_COMPARATOR_VOLUME$lambda$2;
        }
    };
    private static final float WHITE_MIN_LIGHTNESS = 0.95f;
    @NotNull
    private final SparseIntArray mColorPopulations;
    @NotNull
    private final int[] mColors;
    @NotNull
    private final List<Swatch> mQuantizedColors;
    @NotNull
    private final float[] mTempHsl;

    @Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0014\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\bH\u0007J\u0010\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0002J\u0010\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u0015H\u0002J\u0010\u0010\u0016\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u0015H\u0002J\u0010\u0010\u0017\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u0015H\u0002J\u0010\u0010\u0018\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u0015H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u0018\u0010\u0019\u001a\f\u0012\b\u0012\u00060\u001bR\u00020\f0\u001aX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/discord/image/color_quantizer/ColorCutQuantizer$Companion;", "", "<init>", "()V", "BLACK_MAX_LIGHTNESS", "", "WHITE_MIN_LIGHTNESS", "COMPONENT_RED", "", "COMPONENT_GREEN", "COMPONENT_BLUE", "fromBitmap", "Lcom/discord/image/color_quantizer/ColorCutQuantizer;", "bitmap", "Landroid/graphics/Bitmap;", "maxColors", "shouldIgnoreColor", "", ViewProps.COLOR, "Lcom/discord/image/color_quantizer/Swatch;", "hslColor", "", "isBlack", "isWhite", "isNearRedILine", "VBOX_COMPARATOR_VOLUME", "Ljava/util/Comparator;", "Lcom/discord/image/color_quantizer/ColorCutQuantizer$Vbox;", "color_quantizer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final boolean isBlack(float[] fArr) {
            if (fArr[2] <= ColorCutQuantizer.BLACK_MAX_LIGHTNESS) {
                return true;
            }
            return false;
        }

        private final boolean isNearRedILine(float[] fArr) {
            float f10 = fArr[0];
            if (10.0f > f10 || f10 > 37.0f || fArr[1] > 0.82f) {
                return false;
            }
            return true;
        }

        private final boolean isWhite(float[] fArr) {
            if (fArr[2] >= ColorCutQuantizer.WHITE_MIN_LIGHTNESS) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean shouldIgnoreColor(Swatch swatch) {
            float[] hsl = swatch.getHsl();
            Intrinsics.checkNotNullExpressionValue(hsl, "getHsl(...)");
            return shouldIgnoreColor(hsl);
        }

        @NotNull
        public final ColorCutQuantizer fromBitmap(@NotNull Bitmap bitmap, int i10) {
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
            int width = bitmap.getWidth();
            int height = bitmap.getHeight();
            int[] iArr = new int[width * height];
            bitmap.getPixels(iArr, 0, width, 0, 0, width, height);
            return new ColorCutQuantizer(new ColorHistogram(iArr), i10, null);
        }

        private Companion() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean shouldIgnoreColor(float[] fArr) {
            return isWhite(fArr) || isBlack(fArr) || isNearRedILine(fArr);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0082\u0004\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0006\u0010\u0010\u001a\u00020\u0011J\u0006\u0010\u0014\u001a\u00020\u0015J\n\u0010\u0016\u001a\u00060\u0000R\u00020\u0017J\u0006\u0010\u001a\u001a\u00020\u0003J\u000e\u0010\u001f\u001a\u00020\u00032\u0006\u0010 \u001a\u00020\u0003R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u0011\u0010\r\u001a\u00020\u00038F¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0012\u001a\u00020\u00038F¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u000fR\u0011\u0010\u0018\u001a\u00020\u00038F¢\u0006\u0006\u001a\u0004\b\u0019\u0010\u000fR\u0011\u0010\u001b\u001a\u00020\u001c8F¢\u0006\u0006\u001a\u0004\b\u001d\u0010\u001e¨\u0006!"}, d2 = {"Lcom/discord/image/color_quantizer/ColorCutQuantizer$Vbox;", "", "lowerIndex", "", "upperIndex", "<init>", "(Lcom/discord/image/color_quantizer/ColorCutQuantizer;II)V", "minRed", "maxRed", "minGreen", "maxGreen", "minBlue", "maxBlue", "volume", "getVolume", "()I", "canSplit", "", "colorCount", "getColorCount", "fitBox", "", "splitBox", "Lcom/discord/image/color_quantizer/ColorCutQuantizer;", "longestColorDimension", "getLongestColorDimension", "findSplitPoint", "averageColor", "Lcom/discord/image/color_quantizer/Swatch;", "getAverageColor", "()Lcom/discord/image/color_quantizer/Swatch;", "midPoint", "dimension", "color_quantizer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nColorCutQuantizer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ColorCutQuantizer.kt\ncom/discord/image/color_quantizer/ColorCutQuantizer$Vbox\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,391:1\n1#2:392\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class Vbox {
        private final int lowerIndex;
        private int maxBlue;
        private int maxGreen;
        private int maxRed;
        private int minBlue;
        private int minGreen;
        private int minRed;
        private int upperIndex;

        public Vbox(int i10, int i11) {
            this.lowerIndex = i10;
            this.upperIndex = i11;
            fitBox();
        }

        public final boolean canSplit() {
            if (getColorCount() > 1) {
                return true;
            }
            return false;
        }

        public final int findSplitPoint() {
            int longestColorDimension = getLongestColorDimension();
            ColorCutQuantizer.this.modifySignificantOctet(longestColorDimension, this.lowerIndex, this.upperIndex);
            Arrays.sort(ColorCutQuantizer.this.mColors, this.lowerIndex, this.upperIndex + 1);
            ColorCutQuantizer.this.modifySignificantOctet(longestColorDimension, this.lowerIndex, this.upperIndex);
            int midPoint = midPoint(longestColorDimension);
            int i10 = this.upperIndex;
            for (int i11 = this.lowerIndex; i11 < i10; i11++) {
                int i12 = ColorCutQuantizer.this.mColors[i11];
                if (longestColorDimension != ColorCutQuantizer.COMPONENT_RED) {
                    if (longestColorDimension != ColorCutQuantizer.COMPONENT_GREEN) {
                        if (longestColorDimension == -1 && Color.blue(i12) > midPoint) {
                            return i11;
                        }
                    } else if (Color.green(i12) >= midPoint) {
                        return i11;
                    }
                } else if (Color.red(i12) >= midPoint) {
                    return i11;
                }
            }
            return this.lowerIndex;
        }

        public final void fitBox() {
            this.minBlue = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.minGreen = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.minRed = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.maxBlue = 0;
            this.maxGreen = 0;
            this.maxRed = 0;
            int i10 = this.lowerIndex;
            int i11 = this.upperIndex;
            if (i10 > i11) {
                return;
            }
            while (true) {
                int i12 = ColorCutQuantizer.this.mColors[i10];
                int red = Color.red(i12);
                int green = Color.green(i12);
                int blue = Color.blue(i12);
                if (red > this.maxRed) {
                    this.maxRed = red;
                }
                if (red < this.minRed) {
                    this.minRed = red;
                }
                if (green > this.maxGreen) {
                    this.maxGreen = green;
                }
                if (green < this.minGreen) {
                    this.minGreen = green;
                }
                if (blue > this.maxBlue) {
                    this.maxBlue = blue;
                }
                if (blue < this.minBlue) {
                    this.minBlue = blue;
                }
                if (i10 != i11) {
                    i10++;
                } else {
                    return;
                }
            }
        }

        @NotNull
        public final Swatch getAverageColor() {
            int i10;
            int i11;
            int i12;
            int i13 = this.lowerIndex;
            int i14 = this.upperIndex;
            int i15 = 0;
            if (i13 <= i14) {
                int i16 = 0;
                i11 = 0;
                i12 = 0;
                while (true) {
                    int i17 = ColorCutQuantizer.this.mColors[i13];
                    int i18 = ColorCutQuantizer.this.mColorPopulations.get(i17);
                    i15 += i18;
                    i16 += Color.red(i17) * i18;
                    i11 += Color.green(i17) * i18;
                    i12 += i18 * Color.blue(i17);
                    if (i13 == i14) {
                        break;
                    }
                    i13++;
                }
                i10 = i15;
                i15 = i16;
            } else {
                i10 = 0;
                i11 = 0;
                i12 = 0;
            }
            float f10 = i15;
            float f11 = i10;
            return new Swatch(Math.round(f10 / f11), Math.round(i11 / f11), Math.round(i12 / f11), i10);
        }

        public final int getColorCount() {
            return this.upperIndex - this.lowerIndex;
        }

        public final int getLongestColorDimension() {
            int i10 = this.maxRed - this.minRed;
            int i11 = this.maxGreen - this.minGreen;
            int i12 = this.maxBlue - this.minBlue;
            if (i10 >= i11 && i10 >= i12) {
                return ColorCutQuantizer.COMPONENT_RED;
            }
            if (i11 >= i10 && i11 >= i12) {
                return ColorCutQuantizer.COMPONENT_GREEN;
            }
            return -1;
        }

        public final int getVolume() {
            return ((this.maxRed - this.minRed) + 1) * ((this.maxGreen - this.minGreen) + 1) * ((this.maxBlue - this.minBlue) + 1);
        }

        public final int midPoint(int i10) {
            if (i10 != ColorCutQuantizer.COMPONENT_RED) {
                if (i10 != ColorCutQuantizer.COMPONENT_GREEN) {
                    if (i10 != -1) {
                        return (this.minRed + this.maxRed) / 2;
                    }
                    return (this.minBlue + this.maxBlue) / 2;
                }
                return (this.minGreen + this.maxGreen) / 2;
            }
            return (this.minRed + this.maxRed) / 2;
        }

        @NotNull
        public final Vbox splitBox() {
            if (canSplit()) {
                int findSplitPoint = findSplitPoint();
                Vbox vbox = new Vbox(findSplitPoint + 1, this.upperIndex);
                this.upperIndex = findSplitPoint;
                fitBox();
                return vbox;
            }
            throw new IllegalStateException("Can not split a box with only 1 color");
        }
    }

    public /* synthetic */ ColorCutQuantizer(ColorHistogram colorHistogram, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(colorHistogram, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int VBOX_COMPARATOR_VOLUME$lambda$2(Vbox vbox, Vbox vbox2) {
        return vbox2.getVolume() - vbox.getVolume();
    }

    @NotNull
    public static final ColorCutQuantizer fromBitmap(@NotNull Bitmap bitmap, int i10) {
        return Companion.fromBitmap(bitmap, i10);
    }

    private final List<Swatch> generateAverageColors(Collection<Vbox> collection) {
        ArrayList arrayList = new ArrayList(collection.size());
        for (Vbox vbox : collection) {
            Swatch averageColor = vbox.getAverageColor();
            if (!Companion.shouldIgnoreColor(averageColor)) {
                arrayList.add(averageColor);
            }
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void modifySignificantOctet(int i10, int i11, int i12) {
        if (i10 != COMPONENT_GREEN) {
            if (i10 == -1) {
                while (i11 <= i12) {
                    int[] iArr = this.mColors;
                    int i13 = iArr[i11];
                    iArr[i11] = Color.rgb(i13 & SetSpanOperation.SPAN_MAX_PRIORITY, (i13 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY, (i13 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                    i11++;
                }
                return;
            }
            return;
        }
        while (i11 <= i12) {
            int[] iArr2 = this.mColors;
            int i14 = iArr2[i11];
            iArr2[i11] = Color.rgb((i14 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY, (i14 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY, i14 & SetSpanOperation.SPAN_MAX_PRIORITY);
            i11++;
        }
    }

    private final List<Swatch> quantizePixels(int i10, int i11) {
        PriorityQueue<Vbox> priorityQueue = new PriorityQueue<>(i11, VBOX_COMPARATOR_VOLUME);
        priorityQueue.offer(new Vbox(0, i10));
        splitBoxes(priorityQueue, i11);
        return generateAverageColors(priorityQueue);
    }

    private final boolean shouldIgnoreColor(int i10) {
        int alpha = Color.alpha(i10);
        ColorUtils.RGBtoHSL(Color.red(i10), Color.green(i10), Color.blue(i10), this.mTempHsl);
        if (alpha >= 250 && !Companion.shouldIgnoreColor(this.mTempHsl)) {
            return false;
        }
        return true;
    }

    private final void splitBoxes(PriorityQueue<Vbox> priorityQueue, int i10) {
        Vbox poll;
        while (priorityQueue.size() < i10 && (poll = priorityQueue.poll()) != null && poll.canSplit()) {
            priorityQueue.offer(poll.splitBox());
            priorityQueue.offer(poll);
        }
    }

    @NotNull
    public final List<Swatch> getQuantizedColors() {
        return this.mQuantizedColors;
    }

    private ColorCutQuantizer(ColorHistogram colorHistogram, int i10) {
        int[] iArr;
        this.mTempHsl = new float[3];
        if (colorHistogram == null) {
            throw new IllegalArgumentException("colorHistogram can not be null");
        }
        if (i10 >= 1) {
            int numberOfColors = colorHistogram.getNumberOfColors();
            int[] colors = colorHistogram.getColors();
            int[] colorCounts = colorHistogram.getColorCounts();
            this.mColorPopulations = new SparseIntArray(numberOfColors);
            int length = colors.length;
            for (int i11 = 0; i11 < length; i11++) {
                this.mColorPopulations.append(colors[i11], colorCounts[i11]);
            }
            this.mColors = new int[numberOfColors];
            int i12 = 0;
            for (int i13 : colors) {
                if (!shouldIgnoreColor(i13)) {
                    this.mColors[i12] = i13;
                    i12++;
                }
            }
            if (i12 <= i10) {
                this.mQuantizedColors = new ArrayList();
                for (int i14 : this.mColors) {
                    ((ArrayList) this.mQuantizedColors).add(new Swatch(i14, this.mColorPopulations.get(i14)));
                }
                return;
            }
            this.mQuantizedColors = quantizePixels(i12 - 1, i10);
            return;
        }
        throw new IllegalArgumentException("maxColors must be 1 or greater");
    }
}
