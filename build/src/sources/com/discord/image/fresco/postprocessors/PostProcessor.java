package com.discord.image.fresco.postprocessors;

import com.discord.image.fresco.postprocessors.processors.CompositePostprocessor;
import com.discord.image.fresco.postprocessors.processors.GradientPostprocessor;
import com.discord.image.fresco.postprocessors.processors.GrayscalePostprocessor;
import com.discord.image.fresco.postprocessors.processors.SafeRoundAsCirclePostprocessor;
import com.facebook.imagepipeline.request.BasePostprocessor;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import lr.p;
import org.jetbrains.annotations.NotNull;
import sr.a;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bv\u0018\u0000 \b2\u00020\u0001:\u0005\u0004\u0005\u0006\u0007\bJ\b\u0010\u0002\u001a\u00020\u0003H\u0016\u0082\u0001\u0004\t\n\u000b\f¨\u0006\r"}, d2 = {"Lcom/discord/image/fresco/postprocessors/PostProcessor;", "", "create", "Lcom/facebook/imagepipeline/request/BasePostprocessor;", "Composite", "Circle", "Grayscale", "Gradient", "Companion", "Lcom/discord/image/fresco/postprocessors/PostProcessor$Circle;", "Lcom/discord/image/fresco/postprocessors/PostProcessor$Composite;", "Lcom/discord/image/fresco/postprocessors/PostProcessor$Gradient;", "Lcom/discord/image/fresco/postprocessors/PostProcessor$Grayscale;", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface PostProcessor {
    @NotNull
    public static final Companion Companion = Companion.$$INSTANCE;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/image/fresco/postprocessors/PostProcessor$Circle;", "Lcom/discord/image/fresco/postprocessors/PostProcessor;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Circle implements PostProcessor {
        @NotNull
        public static final Circle INSTANCE = new Circle();

        private Circle() {
        }

        @Override // com.discord.image.fresco.postprocessors.PostProcessor
        @NotNull
        public BasePostprocessor create() {
            return DefaultImpls.create(this);
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof Circle);
        }

        public int hashCode() {
            return 1231636723;
        }

        @NotNull
        public String toString() {
            return "Circle";
        }
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/discord/image/fresco/postprocessors/PostProcessor$Companion;", "", "<init>", "()V", "create", "Lcom/facebook/imagepipeline/request/BasePostprocessor;", "processor", "Lcom/discord/image/fresco/postprocessors/PostProcessor;", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nPostProcessor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PostProcessor.kt\ncom/discord/image/fresco/postprocessors/PostProcessor$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,48:1\n1563#2:49\n1634#2,3:50\n*S KotlinDebug\n*F\n+ 1 PostProcessor.kt\ncom/discord/image/fresco/postprocessors/PostProcessor$Companion\n*L\n41#1:49\n41#1:50,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        static final /* synthetic */ Companion $$INSTANCE = new Companion();

        private Companion() {
        }

        @NotNull
        public final BasePostprocessor create(@NotNull PostProcessor processor) {
            Intrinsics.checkNotNullParameter(processor, "processor");
            if (processor instanceof Composite) {
                List<PostProcessor> postprocessors = ((Composite) processor).getPostprocessors();
                ArrayList arrayList = new ArrayList(CollectionsKt.w(postprocessors, 10));
                for (PostProcessor postProcessor : postprocessors) {
                    arrayList.add($$INSTANCE.create(postProcessor));
                }
                return new CompositePostprocessor(arrayList);
            } else if (processor instanceof Circle) {
                return new SafeRoundAsCirclePostprocessor();
            } else {
                if (processor instanceof Grayscale) {
                    return GrayscalePostprocessor.INSTANCE;
                }
                if (processor instanceof Gradient) {
                    return new GradientPostprocessor((Gradient) processor);
                }
                throw new p();
            }
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class DefaultImpls {
        @NotNull
        public static BasePostprocessor create(@NotNull PostProcessor postProcessor) {
            return PostProcessor.Companion.create(postProcessor);
        }
    }

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/image/fresco/postprocessors/PostProcessor$Grayscale;", "Lcom/discord/image/fresco/postprocessors/PostProcessor;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Grayscale implements PostProcessor {
        @NotNull
        public static final Grayscale INSTANCE = new Grayscale();

        private Grayscale() {
        }

        @Override // com.discord.image.fresco.postprocessors.PostProcessor
        @NotNull
        public BasePostprocessor create() {
            return DefaultImpls.create(this);
        }

        public boolean equals(Object obj) {
            return this == obj || (obj instanceof Grayscale);
        }

        public int hashCode() {
            return -1916771900;
        }

        @NotNull
        public String toString() {
            return "Grayscale";
        }
    }

    @NotNull
    BasePostprocessor create();

    @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0015\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005B\u001d\b\u0016\u0012\u0012\u0010\u0002\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00010\u0006\"\u00020\u0001¢\u0006\u0004\b\u0004\u0010\u0007J\u000f\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00010\u0003HÆ\u0003J\u0019\u0010\u000b\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00010\u0003HÆ\u0001J\u0013\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000fHÖ\u0003J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001R\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\t¨\u0006\u0014"}, d2 = {"Lcom/discord/image/fresco/postprocessors/PostProcessor$Composite;", "Lcom/discord/image/fresco/postprocessors/PostProcessor;", "postprocessors", "", "<init>", "(Ljava/util/List;)V", "", "([Lcom/discord/image/fresco/postprocessors/PostProcessor;)V", "getPostprocessors", "()Ljava/util/List;", "component1", "copy", "equals", "", "other", "", "hashCode", "", "toString", "", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Composite implements PostProcessor {
        @NotNull
        private final List<PostProcessor> postprocessors;

        /* JADX WARN: Multi-variable type inference failed */
        public Composite(@NotNull List<? extends PostProcessor> postprocessors) {
            Intrinsics.checkNotNullParameter(postprocessors, "postprocessors");
            this.postprocessors = postprocessors;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ Composite copy$default(Composite composite, List list, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                list = composite.postprocessors;
            }
            return composite.copy(list);
        }

        @NotNull
        public final List<PostProcessor> component1() {
            return this.postprocessors;
        }

        @NotNull
        public final Composite copy(@NotNull List<? extends PostProcessor> postprocessors) {
            Intrinsics.checkNotNullParameter(postprocessors, "postprocessors");
            return new Composite(postprocessors);
        }

        @Override // com.discord.image.fresco.postprocessors.PostProcessor
        @NotNull
        public BasePostprocessor create() {
            return DefaultImpls.create(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof Composite) && Intrinsics.areEqual(this.postprocessors, ((Composite) obj).postprocessors);
        }

        @NotNull
        public final List<PostProcessor> getPostprocessors() {
            return this.postprocessors;
        }

        public int hashCode() {
            return this.postprocessors.hashCode();
        }

        @NotNull
        public String toString() {
            List<PostProcessor> list = this.postprocessors;
            return "Composite(postprocessors=" + list + ")";
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Composite(@NotNull PostProcessor... postprocessors) {
            this(i.R0(postprocessors));
            Intrinsics.checkNotNullParameter(postprocessors, "postprocessors");
        }
    }

    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0012\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001:\u0001!B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0001\u0010\u0004\u001a\u00020\u0005\u0012\b\b\u0001\u0010\u0006\u001a\u00020\u0005\u0012\b\b\u0003\u0010\u0007\u001a\u00020\b\u0012\b\b\u0003\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0017\u001a\u00020\bHÆ\u0003J\t\u0010\u0018\u001a\u00020\bHÆ\u0003J;\u0010\u0019\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0003\u0010\u0004\u001a\u00020\u00052\b\b\u0003\u0010\u0006\u001a\u00020\u00052\b\b\u0003\u0010\u0007\u001a\u00020\b2\b\b\u0003\u0010\t\u001a\u00020\bHÆ\u0001J\u0013\u0010\u001a\u001a\u00020\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dHÖ\u0003J\t\u0010\u001e\u001a\u00020\u0005HÖ\u0001J\t\u0010\u001f\u001a\u00020 HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\t\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012¨\u0006\""}, d2 = {"Lcom/discord/image/fresco/postprocessors/PostProcessor$Gradient;", "Lcom/discord/image/fresco/postprocessors/PostProcessor;", "direction", "Lcom/discord/image/fresco/postprocessors/PostProcessor$Gradient$Direction;", "startColor", "", "endColor", "startPosition", "", "endPosition", "<init>", "(Lcom/discord/image/fresco/postprocessors/PostProcessor$Gradient$Direction;IIFF)V", "getDirection", "()Lcom/discord/image/fresco/postprocessors/PostProcessor$Gradient$Direction;", "getStartColor", "()I", "getEndColor", "getStartPosition", "()F", "getEndPosition", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "", "other", "", "hashCode", "toString", "", "Direction", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Gradient implements PostProcessor {
        @NotNull
        private final Direction direction;
        private final int endColor;
        private final float endPosition;
        private final int startColor;
        private final float startPosition;

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0007\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006j\u0002\b\u0007¨\u0006\b"}, d2 = {"Lcom/discord/image/fresco/postprocessors/PostProcessor$Gradient$Direction;", "", "<init>", "(Ljava/lang/String;I)V", "LeftToRight", "RightToLeft", "TopToBottom", "BottomToTop", "fresco_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Direction {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ Direction[] $VALUES;
            public static final Direction LeftToRight = new Direction("LeftToRight", 0);
            public static final Direction RightToLeft = new Direction("RightToLeft", 1);
            public static final Direction TopToBottom = new Direction("TopToBottom", 2);
            public static final Direction BottomToTop = new Direction("BottomToTop", 3);

            private static final /* synthetic */ Direction[] $values() {
                return new Direction[]{LeftToRight, RightToLeft, TopToBottom, BottomToTop};
            }

            static {
                Direction[] $values = $values();
                $VALUES = $values;
                $ENTRIES = a.a($values);
            }

            private Direction(String str, int i10) {
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static Direction valueOf(String str) {
                return (Direction) Enum.valueOf(Direction.class, str);
            }

            public static Direction[] values() {
                return (Direction[]) $VALUES.clone();
            }
        }

        public Gradient(@NotNull Direction direction, int i10, int i11, float f10, float f11) {
            Intrinsics.checkNotNullParameter(direction, "direction");
            this.direction = direction;
            this.startColor = i10;
            this.endColor = i11;
            this.startPosition = f10;
            this.endPosition = f11;
        }

        public static /* synthetic */ Gradient copy$default(Gradient gradient, Direction direction, int i10, int i11, float f10, float f11, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                direction = gradient.direction;
            }
            if ((i12 & 2) != 0) {
                i10 = gradient.startColor;
            }
            if ((i12 & 4) != 0) {
                i11 = gradient.endColor;
            }
            if ((i12 & 8) != 0) {
                f10 = gradient.startPosition;
            }
            if ((i12 & 16) != 0) {
                f11 = gradient.endPosition;
            }
            float f12 = f11;
            int i13 = i11;
            return gradient.copy(direction, i10, i13, f10, f12);
        }

        @NotNull
        public final Direction component1() {
            return this.direction;
        }

        public final int component2() {
            return this.startColor;
        }

        public final int component3() {
            return this.endColor;
        }

        public final float component4() {
            return this.startPosition;
        }

        public final float component5() {
            return this.endPosition;
        }

        @NotNull
        public final Gradient copy(@NotNull Direction direction, int i10, int i11, float f10, float f11) {
            Intrinsics.checkNotNullParameter(direction, "direction");
            return new Gradient(direction, i10, i11, f10, f11);
        }

        @Override // com.discord.image.fresco.postprocessors.PostProcessor
        @NotNull
        public BasePostprocessor create() {
            return DefaultImpls.create(this);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Gradient) {
                Gradient gradient = (Gradient) obj;
                return this.direction == gradient.direction && this.startColor == gradient.startColor && this.endColor == gradient.endColor && Float.compare(this.startPosition, gradient.startPosition) == 0 && Float.compare(this.endPosition, gradient.endPosition) == 0;
            }
            return false;
        }

        @NotNull
        public final Direction getDirection() {
            return this.direction;
        }

        public final int getEndColor() {
            return this.endColor;
        }

        public final float getEndPosition() {
            return this.endPosition;
        }

        public final int getStartColor() {
            return this.startColor;
        }

        public final float getStartPosition() {
            return this.startPosition;
        }

        public int hashCode() {
            return (((((((this.direction.hashCode() * 31) + Integer.hashCode(this.startColor)) * 31) + Integer.hashCode(this.endColor)) * 31) + Float.hashCode(this.startPosition)) * 31) + Float.hashCode(this.endPosition);
        }

        @NotNull
        public String toString() {
            Direction direction = this.direction;
            int i10 = this.startColor;
            int i11 = this.endColor;
            float f10 = this.startPosition;
            float f11 = this.endPosition;
            return "Gradient(direction=" + direction + ", startColor=" + i10 + ", endColor=" + i11 + ", startPosition=" + f10 + ", endPosition=" + f11 + ")";
        }

        public /* synthetic */ Gradient(Direction direction, int i10, int i11, float f10, float f11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
            this(direction, i10, i11, (i12 & 8) != 0 ? 0.0f : f10, (i12 & 16) != 0 ? 1.0f : f11);
        }
    }
}
