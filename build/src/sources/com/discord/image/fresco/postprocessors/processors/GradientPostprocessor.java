package com.discord.image.fresco.postprocessors.processors;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.Shader;
import com.discord.image.fresco.postprocessors.PostProcessor;
import com.facebook.imagepipeline.request.BasePostprocessor;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import qr.p;
import qr.v;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0000\u0018\u0000 \n2\u00020\u0001:\u0001\nB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lcom/discord/image/fresco/postprocessors/processors/GradientPostprocessor;", "Lcom/facebook/imagepipeline/request/BasePostprocessor;", "gradient", "Lcom/discord/image/fresco/postprocessors/PostProcessor$Gradient;", "<init>", "(Lcom/discord/image/fresco/postprocessors/PostProcessor$Gradient;)V", "process", "", "bitmap", "Landroid/graphics/Bitmap;", "Companion", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class GradientPostprocessor extends BasePostprocessor {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final PostProcessor.Gradient gradient;

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\b\u0086\u0003\u0018\u00002\u00020\u0001:\u0001\u0004B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0005"}, d2 = {"Lcom/discord/image/fresco/postprocessors/processors/GradientPostprocessor$Companion;", "", "<init>", "()V", "Point", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {

        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0007\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0082\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\n\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0014"}, d2 = {"Lcom/discord/image/fresco/postprocessors/processors/GradientPostprocessor$Companion$Point;", "", "x", "", "y", "<init>", "(FF)V", "getX", "()F", "getY", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        private static final class Point {

            /* renamed from: x  reason: collision with root package name */
            private final float f9338x;

            /* renamed from: y  reason: collision with root package name */
            private final float f9339y;

            public Point(float f10, float f11) {
                this.f9338x = f10;
                this.f9339y = f11;
            }

            public static /* synthetic */ Point copy$default(Point point, float f10, float f11, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    f10 = point.f9338x;
                }
                if ((i10 & 2) != 0) {
                    f11 = point.f9339y;
                }
                return point.copy(f10, f11);
            }

            public final float component1() {
                return this.f9338x;
            }

            public final float component2() {
                return this.f9339y;
            }

            @NotNull
            public final Point copy(float f10, float f11) {
                return new Point(f10, f11);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof Point) {
                    Point point = (Point) obj;
                    return Float.compare(this.f9338x, point.f9338x) == 0 && Float.compare(this.f9339y, point.f9339y) == 0;
                }
                return false;
            }

            public final float getX() {
                return this.f9338x;
            }

            public final float getY() {
                return this.f9339y;
            }

            public int hashCode() {
                return (Float.hashCode(this.f9338x) * 31) + Float.hashCode(this.f9339y);
            }

            @NotNull
            public String toString() {
                float f10 = this.f9338x;
                float f11 = this.f9339y;
                return "Point(x=" + f10 + ", y=" + f11 + ")";
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[PostProcessor.Gradient.Direction.values().length];
            try {
                iArr[PostProcessor.Gradient.Direction.LeftToRight.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[PostProcessor.Gradient.Direction.RightToLeft.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[PostProcessor.Gradient.Direction.TopToBottom.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[PostProcessor.Gradient.Direction.BottomToTop.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public GradientPostprocessor(@NotNull PostProcessor.Gradient gradient) {
        Intrinsics.checkNotNullParameter(gradient, "gradient");
        this.gradient = gradient;
    }

    @Override // com.facebook.imagepipeline.request.BasePostprocessor
    public void process(@NotNull Bitmap bitmap) {
        Pair a10;
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        int i10 = WhenMappings.$EnumSwitchMapping$0[this.gradient.getDirection().ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 == 4) {
                        a10 = v.a(new Companion.Point(bitmap.getWidth() / 2.0f, bitmap.getHeight()), new Companion.Point(bitmap.getWidth() / 2.0f, 0.0f));
                    } else {
                        throw new p();
                    }
                } else {
                    a10 = v.a(new Companion.Point(bitmap.getWidth() / 2.0f, 0.0f), new Companion.Point(bitmap.getWidth() / 2.0f, bitmap.getHeight()));
                }
            } else {
                a10 = v.a(new Companion.Point(bitmap.getWidth(), bitmap.getHeight() / 2.0f), new Companion.Point(0.0f, bitmap.getHeight() / 2.0f));
            }
        } else {
            a10 = v.a(new Companion.Point(0.0f, bitmap.getHeight() / 2.0f), new Companion.Point(bitmap.getWidth(), bitmap.getHeight() / 2.0f));
        }
        Companion.Point point = (Companion.Point) a10.a();
        Companion.Point point2 = (Companion.Point) a10.b();
        float height = bitmap.getHeight();
        Paint paint = new Paint();
        paint.setShader(new LinearGradient(point.getX(), point.getY(), point2.getX(), point2.getY(), new int[]{this.gradient.getStartColor(), this.gradient.getEndColor()}, new float[]{this.gradient.getStartPosition(), this.gradient.getEndPosition()}, Shader.TileMode.CLAMP));
        Unit unit = Unit.f32056a;
        new Canvas(bitmap).drawRect(0.0f, 0.0f, bitmap.getWidth(), height, paint);
    }
}
