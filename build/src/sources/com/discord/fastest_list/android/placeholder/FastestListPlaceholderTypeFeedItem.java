package com.discord.fastest_list.android.placeholder;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.view.ViewGroup;
import com.discord.fastest_list.android.FastestListSections;
import com.discord.fastest_list.android.placeholder.FastestListPlaceholderType;
import com.discord.misc.utilities.drawable.CustomDrawDrawable;
import com.discord.misc.utilities.size.SizeUtilsKt;
import java.util.LinkedHashMap;
import java.util.Map;
import jr.p;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.random.c;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0000\u0018\u0000 \u00122\u00020\u0001:\u0002\u0011\u0012B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0018\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fH\u0016J\u0010\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0013"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeFeedItem;", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholder;", "config", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$FeedItem;", "<init>", "(Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$FeedItem;)V", "placeholders", "", "", "Lcom/discord/misc/utilities/drawable/CustomDrawDrawable;", "onPlaceholderShouldBind", "", "view", "Landroid/view/ViewGroup;", "item", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "onPlaceholderShouldUnbind", "FeedItemDrawable", "Companion", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFastestListPlaceholderTypeFeedItem.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FastestListPlaceholderTypeFeedItem.kt\ncom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeFeedItem\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,167:1\n384#2,7:168\n*S KotlinDebug\n*F\n+ 1 FastestListPlaceholderTypeFeedItem.kt\ncom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeFeedItem\n*L\n22#1:168,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FastestListPlaceholderTypeFeedItem extends FastestListPlaceholder {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int TOTAL_VARIANTS = 20;
    private static final float WIDTH_RATIO_MAX = 0.9f;
    private static final float WIDTH_RATIO_MIN = 0.4f;
    @NotNull
    private final FastestListPlaceholderType.FeedItem config;
    @NotNull
    private final Map<Integer, CustomDrawDrawable> placeholders;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001c\u0010\t\u001a\u00020\u00072\b\b\u0002\u0010\n\u001a\u00020\u00072\b\b\u0002\u0010\u000b\u001a\u00020\u0007H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeFeedItem$Companion;", "", "<init>", "()V", "TOTAL_VARIANTS", "", "WIDTH_RATIO_MIN", "", "WIDTH_RATIO_MAX", "getRandomWidthRatio", "ratioMin", "ratioMax", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final float getRandomWidthRatio(float f10, float f11) {
            return f10 + (c.f33164d.c() * (f11 - f10));
        }

        static /* synthetic */ float getRandomWidthRatio$default(Companion companion, float f10, float f11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                f10 = FastestListPlaceholderTypeFeedItem.WIDTH_RATIO_MIN;
            }
            if ((i10 & 2) != 0) {
                f11 = FastestListPlaceholderTypeFeedItem.WIDTH_RATIO_MAX;
            }
            return companion.getRandomWidthRatio(f10, f11);
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0014\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0002\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u0010\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0013\u001a\u00020\u0014H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeFeedItem$FeedItemDrawable;", "Lcom/discord/misc/utilities/drawable/CustomDrawDrawable;", "config", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$FeedItem;", "labelWidthRatio", "", "labelWidthRatioSecondary", "<init>", "(Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$FeedItem;FF)V", "paint", "Landroid/graphics/Paint;", "path", "Landroid/graphics/Path;", "pathRect", "Landroid/graphics/RectF;", "pathCornerRadii", "", "draw", "", "canvas", "Landroid/graphics/Canvas;", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nFastestListPlaceholderTypeFeedItem.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FastestListPlaceholderTypeFeedItem.kt\ncom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeFeedItem$FeedItemDrawable\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,167:1\n1#2:168\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class FeedItemDrawable extends CustomDrawDrawable {
        @NotNull
        private final FastestListPlaceholderType.FeedItem config;
        private final float labelWidthRatio;
        private final float labelWidthRatioSecondary;
        @NotNull
        private final Paint paint;
        @NotNull
        private final Path path;
        @NotNull
        private final float[] pathCornerRadii;
        @NotNull
        private final RectF pathRect;

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[FastestListPlaceholderType.Shape.Type.values().length];
                try {
                    iArr[FastestListPlaceholderType.Shape.Type.CIRCLE.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[FastestListPlaceholderType.Shape.Type.RECT.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public FeedItemDrawable(@NotNull FastestListPlaceholderType.FeedItem config, float f10, float f11) {
            boolean z10;
            float borderRadius;
            boolean z11;
            float borderRadius2;
            boolean z12;
            float borderRadius3;
            boolean z13;
            float borderRadius4;
            boolean z14;
            float borderRadius5;
            boolean z15;
            float borderRadius6;
            boolean z16;
            float borderRadius7;
            boolean z17;
            float borderRadius8;
            Intrinsics.checkNotNullParameter(config, "config");
            this.config = config;
            this.labelWidthRatio = f10;
            this.labelWidthRatioSecondary = f11;
            Paint paint = new Paint();
            paint.setAntiAlias(true);
            paint.setColor(config.getColor());
            this.paint = paint;
            this.path = new Path();
            this.pathRect = new RectF(0.0f, 0.0f, 0.0f, 0.0f);
            Float valueOf = Float.valueOf(config.getBorderTopLeftRadius());
            if (valueOf.floatValue() == 0.0f) {
                z10 = true;
            } else {
                z10 = false;
            }
            valueOf = z10 ? null : valueOf;
            if (valueOf != null) {
                borderRadius = valueOf.floatValue();
            } else {
                borderRadius = config.getBorderRadius();
            }
            Float valueOf2 = Float.valueOf(config.getBorderTopLeftRadius());
            if (valueOf2.floatValue() == 0.0f) {
                z11 = true;
            } else {
                z11 = false;
            }
            valueOf2 = z11 ? null : valueOf2;
            if (valueOf2 != null) {
                borderRadius2 = valueOf2.floatValue();
            } else {
                borderRadius2 = config.getBorderRadius();
            }
            Float valueOf3 = Float.valueOf(config.getBorderTopRightRadius());
            if (valueOf3.floatValue() == 0.0f) {
                z12 = true;
            } else {
                z12 = false;
            }
            valueOf3 = z12 ? null : valueOf3;
            if (valueOf3 != null) {
                borderRadius3 = valueOf3.floatValue();
            } else {
                borderRadius3 = config.getBorderRadius();
            }
            Float valueOf4 = Float.valueOf(config.getBorderTopRightRadius());
            if (valueOf4.floatValue() == 0.0f) {
                z13 = true;
            } else {
                z13 = false;
            }
            valueOf4 = z13 ? null : valueOf4;
            if (valueOf4 != null) {
                borderRadius4 = valueOf4.floatValue();
            } else {
                borderRadius4 = config.getBorderRadius();
            }
            Float valueOf5 = Float.valueOf(config.getBorderBottomRightRadius());
            if (valueOf5.floatValue() == 0.0f) {
                z14 = true;
            } else {
                z14 = false;
            }
            valueOf5 = z14 ? null : valueOf5;
            if (valueOf5 != null) {
                borderRadius5 = valueOf5.floatValue();
            } else {
                borderRadius5 = config.getBorderRadius();
            }
            Float valueOf6 = Float.valueOf(config.getBorderBottomRightRadius());
            if (valueOf6.floatValue() == 0.0f) {
                z15 = true;
            } else {
                z15 = false;
            }
            valueOf6 = z15 ? null : valueOf6;
            if (valueOf6 != null) {
                borderRadius6 = valueOf6.floatValue();
            } else {
                borderRadius6 = config.getBorderRadius();
            }
            Float valueOf7 = Float.valueOf(config.getBorderBottomLeftRadius());
            if (valueOf7.floatValue() == 0.0f) {
                z16 = true;
            } else {
                z16 = false;
            }
            valueOf7 = z16 ? null : valueOf7;
            if (valueOf7 != null) {
                borderRadius7 = valueOf7.floatValue();
            } else {
                borderRadius7 = config.getBorderRadius();
            }
            Float valueOf8 = Float.valueOf(config.getBorderBottomLeftRadius());
            if (valueOf8.floatValue() == 0.0f) {
                z17 = true;
            } else {
                z17 = false;
            }
            Float f12 = z17 ? null : valueOf8;
            if (f12 != null) {
                borderRadius8 = f12.floatValue();
            } else {
                borderRadius8 = config.getBorderRadius();
            }
            this.pathCornerRadii = new float[]{borderRadius, borderRadius2, borderRadius3, borderRadius4, borderRadius5, borderRadius6, borderRadius7, borderRadius8};
        }

        @Override // com.discord.misc.utilities.drawable.CustomDrawDrawable, android.graphics.drawable.Drawable
        public void draw(@NotNull Canvas canvas) {
            Intrinsics.checkNotNullParameter(canvas, "canvas");
            int width = getBounds().width();
            int height = getBounds().height();
            if (this.config.getBackgroundColor() != 0) {
                this.path.reset();
                this.pathRect.set(0.0f, 0.0f, width, height);
                this.path.addRoundRect(this.pathRect, this.pathCornerRadii, Path.Direction.CW);
                this.paint.setColor(this.config.getBackgroundColor());
                canvas.drawPath(this.path, this.paint);
                this.paint.setColor(this.config.getColor());
            }
            int i10 = WhenMappings.$EnumSwitchMapping$0[this.config.getShapeType().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    float padding = this.config.getPadding();
                    float shapeSize = this.config.getShapeSize();
                    float shapeSize2 = (height - this.config.getShapeSize()) / 2.0f;
                    canvas.drawRect(padding, shapeSize2, shapeSize, this.config.getShapeSize() + shapeSize2, this.paint);
                } else {
                    throw new p();
                }
            } else {
                canvas.drawCircle((this.config.getShapeSize() / 2.0f) + this.config.getPadding(), (this.config.getShapeSize() / 2.0f) + ((height - this.config.getShapeSize()) / 2.0f), this.config.getShapeSize() / 2.0f, this.paint);
            }
            float labelSize = this.config.getLabelSize();
            float labelSecondarySize = this.config.getLabelSecondarySize();
            float f10 = 2;
            float f11 = labelSize / f10;
            float f12 = labelSecondarySize / f10;
            float labelPaddingInnerRatio = (this.config.getLabelPaddingInnerRatio() * labelSize) / f10;
            float labelPaddingInnerRatio2 = (this.config.getLabelPaddingInnerRatio() * labelSecondarySize) / f10;
            float padding2 = this.config.getPadding() + this.config.getShapeSize() + this.config.getLabelPadding();
            float f13 = width;
            float padding3 = (f13 - this.config.getPadding()) - this.config.getLabelPadding();
            float f14 = height;
            float f15 = (f14 - (labelSize + labelSecondarySize)) / 2.0f;
            float f16 = f15 + labelSize;
            canvas.drawRoundRect(padding2, f15 + labelPaddingInnerRatio, this.labelWidthRatio * padding3, f16 - labelPaddingInnerRatio, f11, f11, this.paint);
            canvas.drawRoundRect(padding2, f16 + labelPaddingInnerRatio2, padding3 * this.labelWidthRatioSecondary, (f16 + labelSecondarySize) - labelPaddingInnerRatio2, f12, f12, this.paint);
            if (this.config.getDivider()) {
                this.paint.setColor(this.config.getDividerColor());
                canvas.drawRect(this.config.getDividerPaddingLeft(), f14 - SizeUtilsKt.getDpToPx(1), f13 - this.config.getDividerPaddingRight(), f14, this.paint);
                this.paint.setColor(this.config.getColor());
            }
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FastestListPlaceholderTypeFeedItem(@NotNull FastestListPlaceholderType.FeedItem config) {
        super(null);
        Intrinsics.checkNotNullParameter(config, "config");
        this.config = config;
        this.placeholders = new LinkedHashMap();
    }

    @Override // com.discord.fastest_list.android.placeholder.FastestListPlaceholder
    public void onPlaceholderShouldBind(@NotNull ViewGroup view, @NotNull FastestListSections.Entry item) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(item, "item");
        int floorMod = Math.floorMod(item.getKey().hashCode(), 20);
        Map<Integer, CustomDrawDrawable> map = this.placeholders;
        Integer valueOf = Integer.valueOf(floorMod);
        CustomDrawDrawable customDrawDrawable = map.get(valueOf);
        if (customDrawDrawable == null) {
            FastestListPlaceholderType.FeedItem feedItem = this.config;
            Companion companion = Companion;
            customDrawDrawable = new FeedItemDrawable(feedItem, Companion.getRandomWidthRatio$default(companion, 0.0f, 0.0f, 3, null), Companion.getRandomWidthRatio$default(companion, 0.0f, 0.0f, 3, null));
            map.put(valueOf, customDrawDrawable);
        }
        view.setBackground(customDrawDrawable);
    }

    @Override // com.discord.fastest_list.android.placeholder.FastestListPlaceholder
    public void onPlaceholderShouldUnbind(@NotNull ViewGroup view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBackground(null);
    }
}
