package com.discord.fastest_list.android.placeholder;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.ViewGroup;
import com.discord.fastest_list.android.FastestListSections;
import com.discord.fastest_list.android.placeholder.FastestListPlaceholderAlignment;
import com.discord.fastest_list.android.placeholder.FastestListPlaceholderType;
import com.discord.misc.utilities.drawable.CustomDrawDrawable;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import lr.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0000\u0018\u00002\u00020\u0001:\u0001\u000fB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rH\u0016J\u0010\u0010\u000e\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeShape;", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholder;", "config", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape;", "<init>", "(Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape;)V", ReactTextInputShadowNode.PROP_PLACEHOLDER, "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeShape$ShapeDrawable;", "onPlaceholderShouldBind", "", "view", "Landroid/view/ViewGroup;", "item", "Lcom/discord/fastest_list/android/FastestListSections$Entry;", "onPlaceholderShouldUnbind", "ShapeDrawable", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FastestListPlaceholderTypeShape extends FastestListPlaceholder {
    @NotNull
    private final ShapeDrawable placeholder;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0002\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderTypeShape$ShapeDrawable;", "Lcom/discord/misc/utilities/drawable/CustomDrawDrawable;", "config", "Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape;", "<init>", "(Lcom/discord/fastest_list/android/placeholder/FastestListPlaceholderType$Shape;)V", "paint", "Landroid/graphics/Paint;", "draw", "", "canvas", "Landroid/graphics/Canvas;", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class ShapeDrawable extends CustomDrawDrawable {
        @NotNull
        private final FastestListPlaceholderType.Shape config;
        @NotNull
        private final Paint paint;

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;
            public static final /* synthetic */ int[] $EnumSwitchMapping$1;

            static {
                int[] iArr = new int[FastestListPlaceholderAlignment.Vertical.values().length];
                try {
                    iArr[FastestListPlaceholderAlignment.Vertical.TOP.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[FastestListPlaceholderAlignment.Vertical.BOTTOM.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[FastestListPlaceholderAlignment.Vertical.CENTER.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                $EnumSwitchMapping$0 = iArr;
                int[] iArr2 = new int[FastestListPlaceholderType.Shape.Type.values().length];
                try {
                    iArr2[FastestListPlaceholderType.Shape.Type.CIRCLE.ordinal()] = 1;
                } catch (NoSuchFieldError unused4) {
                }
                try {
                    iArr2[FastestListPlaceholderType.Shape.Type.RECT.ordinal()] = 2;
                } catch (NoSuchFieldError unused5) {
                }
                $EnumSwitchMapping$1 = iArr2;
            }
        }

        public ShapeDrawable(@NotNull FastestListPlaceholderType.Shape config) {
            Intrinsics.checkNotNullParameter(config, "config");
            this.config = config;
            Paint paint = new Paint();
            paint.setAntiAlias(true);
            paint.setColor(config.getColor());
            this.paint = paint;
        }

        @Override // com.discord.misc.utilities.drawable.CustomDrawDrawable, android.graphics.drawable.Drawable
        public void draw(@NotNull Canvas canvas) {
            float paddingHorizontal;
            float paddingVertical;
            float f10;
            float f11;
            float f12;
            int i10;
            float f13;
            Intrinsics.checkNotNullParameter(canvas, "canvas");
            float width = getBounds().width();
            float height = getBounds().height();
            Float width2 = this.config.getWidth();
            if (width2 != null) {
                paddingHorizontal = width2.floatValue();
            } else {
                paddingHorizontal = ((width - (this.config.getPaddingHorizontal() * 2)) - (this.config.getGap() * (this.config.getCount() - 1))) / this.config.getCount();
            }
            float f14 = paddingHorizontal;
            Float height2 = this.config.getHeight();
            if (height2 != null) {
                paddingVertical = height2.floatValue();
            } else {
                paddingVertical = height - (this.config.getPaddingVertical() * 2);
            }
            float f15 = paddingVertical;
            if (this.config.getCount() > 1) {
                f10 = width - (this.config.getCount() * f14);
                f11 = this.config.getCount() - 1;
            } else {
                f10 = width - f14;
                f11 = 2;
            }
            float f16 = f10 / f11;
            int count = this.config.getCount();
            int i11 = 0;
            while (i11 < count) {
                if (this.config.getCount() == 1) {
                    f12 = f16;
                } else {
                    f12 = i11 * (f14 + f16);
                }
                int i12 = WhenMappings.$EnumSwitchMapping$1[this.config.getType().ordinal()];
                if (i12 != 1) {
                    if (i12 == 2) {
                        float f17 = f12 + f14;
                        int i13 = WhenMappings.$EnumSwitchMapping$0[this.config.getVerticalAlignment().ordinal()];
                        if (i13 != 1) {
                            if (i13 != 2) {
                                if (i13 == 3) {
                                    f13 = (height / 2.0f) - (f15 / 2.0f);
                                } else {
                                    throw new p();
                                }
                            } else {
                                f13 = height - f15;
                            }
                        } else {
                            f13 = 0.0f;
                        }
                        i10 = i11;
                        canvas.drawRoundRect(f12, f13, f17, f13 + f15, this.config.getBorderRadius(), this.config.getBorderRadius(), this.paint);
                    } else {
                        throw new p();
                    }
                } else {
                    i10 = i11;
                    float f18 = f12;
                    float f19 = f14 / 2.0f;
                    canvas.drawCircle(f18 + f19, height / 2.0f, f19, this.paint);
                }
                i11 = i10 + 1;
            }
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FastestListPlaceholderTypeShape(@NotNull FastestListPlaceholderType.Shape config) {
        super(null);
        Intrinsics.checkNotNullParameter(config, "config");
        this.placeholder = new ShapeDrawable(config);
    }

    @Override // com.discord.fastest_list.android.placeholder.FastestListPlaceholder
    public void onPlaceholderShouldBind(@NotNull ViewGroup view, @NotNull FastestListSections.Entry item) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(item, "item");
        view.setBackground(this.placeholder);
    }

    @Override // com.discord.fastest_list.android.placeholder.FastestListPlaceholder
    public void onPlaceholderShouldUnbind(@NotNull ViewGroup view) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setBackground(null);
    }
}
