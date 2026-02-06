package com.facebook.react.uimanager.style;

import com.facebook.react.bridge.ReadableType;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.LengthPercentageType;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import qr.p;
import xr.a;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0000\u0018\u0000 &2\u00020\u0001:\u0004&'()B-\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\u0004\b\u000b\u0010\fJ\u0018\u0010\u0015\u001a\u00020\u00162\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u0018H\u0016J<\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00180\u001b2\u0006\u0010\u001c\u001a\u00020\u00182\u0006\u0010\u001d\u001a\u00020\u00182\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J,\u0010 \u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00180\u001b2\u0006\u0010!\u001a\u00020\u00182\u0006\u0010\"\u001a\u00020\u00182\u0006\u0010#\u001a\u00020\u0018H\u0002J<\u0010$\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00180\u001b2\u0006\u0010\u001c\u001a\u00020\u00182\u0006\u0010\u001d\u001a\u00020\u00182\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J4\u0010%\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00180\u001b2\u0006\u0010\u001c\u001a\u00020\u00182\u0006\u0010\u001d\u001a\u00020\u00182\u0006\u0010\u0017\u001a\u00020\u00182\u0006\u0010\u0019\u001a\u00020\u0018H\u0002R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0017\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014¨\u0006*"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient;", "Lcom/facebook/react/uimanager/style/Gradient;", "shape", "Lcom/facebook/react/uimanager/style/RadialGradient$Shape;", "size", "Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize;", ViewProps.POSITION, "Lcom/facebook/react/uimanager/style/RadialGradient$Position;", "colorStops", "", "Lcom/facebook/react/uimanager/style/ColorStop;", "<init>", "(Lcom/facebook/react/uimanager/style/RadialGradient$Shape;Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize;Lcom/facebook/react/uimanager/style/RadialGradient$Position;Ljava/util/List;)V", "getShape", "()Lcom/facebook/react/uimanager/style/RadialGradient$Shape;", "getSize", "()Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize;", "getPosition", "()Lcom/facebook/react/uimanager/style/RadialGradient$Position;", "getColorStops", "()Ljava/util/List;", "getShader", "Landroid/graphics/Shader;", "width", "", "height", "radiusToSide", "Lkotlin/Pair;", "centerX", "centerY", "sizeKeyword", "Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$KeywordType;", "calculateEllipseRadius", "offsetX", "offsetY", ViewProps.ASPECT_RATIO, "radiusToCorner", "calculateRadius", "Companion", "Shape", "GradientSize", "Position", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRadialGradient.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RadialGradient.kt\ncom/facebook/react/uimanager/style/RadialGradient\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,376:1\n1878#2,3:377\n*S KotlinDebug\n*F\n+ 1 RadialGradient.kt\ncom/facebook/react/uimanager/style/RadialGradient\n*L\n202#1:377,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RadialGradient implements Gradient {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final List<ColorStop> colorStops;
    @NotNull
    private final Position position;
    @NotNull
    private final Shape shape;
    @NotNull
    private final GradientSize size;

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t¨\u0006\n"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$Companion;", "", "<init>", "()V", "parse", "Lcom/facebook/react/uimanager/style/Gradient;", "gradientMap", "Lcom/facebook/react/bridge/ReadableMap;", "context", "Landroid/content/Context;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nRadialGradient.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RadialGradient.kt\ncom/facebook/react/uimanager/style/RadialGradient$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,376:1\n1#2:377\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[ReadableType.values().length];
                try {
                    iArr[ReadableType.String.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[ReadableType.Map.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX WARN: Removed duplicated region for block: B:40:0x0098  */
        /* JADX WARN: Removed duplicated region for block: B:41:0x009a  */
        /* JADX WARN: Removed duplicated region for block: B:43:0x009d  */
        /* JADX WARN: Removed duplicated region for block: B:60:0x00fb  */
        /* JADX WARN: Removed duplicated region for block: B:64:0x0105  */
        /* JADX WARN: Removed duplicated region for block: B:66:0x0108  */
        /* JADX WARN: Removed duplicated region for block: B:86:0x0165  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final com.facebook.react.uimanager.style.Gradient parse(@org.jetbrains.annotations.NotNull com.facebook.react.bridge.ReadableMap r13, @org.jetbrains.annotations.NotNull android.content.Context r14) {
            /*
                Method dump skipped, instructions count: 373
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.style.RadialGradient.Companion.parse(com.facebook.react.bridge.ReadableMap, android.content.Context):com.facebook.react.uimanager.style.Gradient");
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0003\u0004\u0005\u0006B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0002\u0007\b¨\u0006\t"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize;", "", "<init>", "()V", "Keyword", "Dimensions", "KeywordType", "Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$Dimensions;", "Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$Keyword;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class GradientSize {

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\n"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$Dimensions;", "Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize;", "x", "Lcom/facebook/react/uimanager/LengthPercentage;", "y", "<init>", "(Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;)V", "getX", "()Lcom/facebook/react/uimanager/LengthPercentage;", "getY", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Dimensions extends GradientSize {
            @NotNull

            /* renamed from: x  reason: collision with root package name */
            private final LengthPercentage f11249x;
            @NotNull

            /* renamed from: y  reason: collision with root package name */
            private final LengthPercentage f11250y;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public Dimensions(@NotNull LengthPercentage x10, @NotNull LengthPercentage y10) {
                super(null);
                Intrinsics.checkNotNullParameter(x10, "x");
                Intrinsics.checkNotNullParameter(y10, "y");
                this.f11249x = x10;
                this.f11250y = y10;
            }

            @NotNull
            public final LengthPercentage getX() {
                return this.f11249x;
            }

            @NotNull
            public final LengthPercentage getY() {
                return this.f11250y;
            }
        }

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$Keyword;", "Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize;", "keyword", "Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$KeywordType;", "<init>", "(Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$KeywordType;)V", "getKeyword", "()Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$KeywordType;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Keyword extends GradientSize {
            @NotNull
            private final KeywordType keyword;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public Keyword(@NotNull KeywordType keyword) {
                super(null);
                Intrinsics.checkNotNullParameter(keyword, "keyword");
                this.keyword = keyword;
            }

            @NotNull
            public final KeywordType getKeyword() {
                return this.keyword;
            }
        }

        /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
        /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\b\u0086\u0081\u0002\u0018\u0000 \f2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\fB\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000b¨\u0006\r"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$KeywordType;", "", "value", "", "<init>", "(Ljava/lang/String;ILjava/lang/String;)V", "getValue", "()Ljava/lang/String;", "CLOSEST_SIDE", "FARTHEST_SIDE", "CLOSEST_CORNER", "FARTHEST_CORNER", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class KeywordType {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ KeywordType[] $VALUES;
            @NotNull
            public static final Companion Companion;
            @NotNull
            private final String value;
            public static final KeywordType CLOSEST_SIDE = new KeywordType("CLOSEST_SIDE", 0, "closest-side");
            public static final KeywordType FARTHEST_SIDE = new KeywordType("FARTHEST_SIDE", 1, "farthest-side");
            public static final KeywordType CLOSEST_CORNER = new KeywordType("CLOSEST_CORNER", 2, "closest-corner");
            public static final KeywordType FARTHEST_CORNER = new KeywordType("FARTHEST_CORNER", 3, "farthest-corner");

            @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$KeywordType$Companion;", "", "<init>", "()V", "fromString", "Lcom/facebook/react/uimanager/style/RadialGradient$GradientSize$KeywordType;", "value", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            @SourceDebugExtension({"SMAP\nRadialGradient.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RadialGradient.kt\ncom/facebook/react/uimanager/style/RadialGradient$GradientSize$KeywordType$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,376:1\n1#2:377\n*E\n"})
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class Companion {
                public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                    this();
                }

                public final KeywordType fromString(String str) {
                    KeywordType[] values;
                    for (KeywordType keywordType : KeywordType.values()) {
                        if (Intrinsics.areEqual(keywordType.getValue(), str)) {
                            return keywordType;
                        }
                    }
                    return null;
                }

                private Companion() {
                }
            }

            private static final /* synthetic */ KeywordType[] $values() {
                return new KeywordType[]{CLOSEST_SIDE, FARTHEST_SIDE, CLOSEST_CORNER, FARTHEST_CORNER};
            }

            static {
                KeywordType[] $values = $values();
                $VALUES = $values;
                $ENTRIES = a.a($values);
                Companion = new Companion(null);
            }

            private KeywordType(String str, int i10, String str2) {
                this.value = str2;
            }

            @NotNull
            public static EnumEntries getEntries() {
                return $ENTRIES;
            }

            public static KeywordType valueOf(String str) {
                return (KeywordType) Enum.valueOf(KeywordType.class, str);
            }

            public static KeywordType[] values() {
                return (KeywordType[]) $VALUES.clone();
            }

            @NotNull
            public final String getValue() {
                return this.value;
            }
        }

        public /* synthetic */ GradientSize(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private GradientSize() {
        }
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0000\u0018\u00002\u00020\u0001B7\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\n¨\u0006\u000e"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$Position;", "", ViewProps.TOP, "Lcom/facebook/react/uimanager/LengthPercentage;", ViewProps.LEFT, ViewProps.RIGHT, ViewProps.BOTTOM, "<init>", "(Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;Lcom/facebook/react/uimanager/LengthPercentage;)V", "getTop", "()Lcom/facebook/react/uimanager/LengthPercentage;", "getLeft", "getRight", "getBottom", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Position {
        private final LengthPercentage bottom;
        private final LengthPercentage left;
        private final LengthPercentage right;
        private final LengthPercentage top;

        public Position() {
            this(null, null, null, null, 15, null);
        }

        public final LengthPercentage getBottom() {
            return this.bottom;
        }

        public final LengthPercentage getLeft() {
            return this.left;
        }

        public final LengthPercentage getRight() {
            return this.right;
        }

        public final LengthPercentage getTop() {
            return this.top;
        }

        public Position(LengthPercentage lengthPercentage, LengthPercentage lengthPercentage2, LengthPercentage lengthPercentage3, LengthPercentage lengthPercentage4) {
            this.top = lengthPercentage;
            this.left = lengthPercentage2;
            this.right = lengthPercentage3;
            this.bottom = lengthPercentage4;
        }

        public /* synthetic */ Position(LengthPercentage lengthPercentage, LengthPercentage lengthPercentage2, LengthPercentage lengthPercentage3, LengthPercentage lengthPercentage4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : lengthPercentage, (i10 & 2) != 0 ? null : lengthPercentage2, (i10 & 4) != 0 ? null : lengthPercentage3, (i10 & 8) != 0 ? null : lengthPercentage4);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0080\u0081\u0002\u0018\u0000 \u00062\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0006B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0007"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$Shape;", "", "<init>", "(Ljava/lang/String;I)V", "CIRCLE", "ELLIPSE", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Shape {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ Shape[] $VALUES;
        @NotNull
        public static final Companion Companion;
        public static final Shape CIRCLE = new Shape("CIRCLE", 0);
        public static final Shape ELLIPSE = new Shape("ELLIPSE", 1);

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/style/RadialGradient$Shape$Companion;", "", "<init>", "()V", "fromString", "Lcom/facebook/react/uimanager/style/RadialGradient$Shape;", "value", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final Shape fromString(@NotNull String value) {
                Intrinsics.checkNotNullParameter(value, "value");
                if (Intrinsics.areEqual(value, "circle")) {
                    return Shape.CIRCLE;
                }
                if (Intrinsics.areEqual(value, "ellipse")) {
                    return Shape.ELLIPSE;
                }
                return null;
            }

            private Companion() {
            }
        }

        private static final /* synthetic */ Shape[] $values() {
            return new Shape[]{CIRCLE, ELLIPSE};
        }

        static {
            Shape[] $values = $values();
            $VALUES = $values;
            $ENTRIES = a.a($values);
            Companion = new Companion(null);
        }

        private Shape(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static Shape valueOf(String str) {
            return (Shape) Enum.valueOf(Shape.class, str);
        }

        public static Shape[] values() {
            return (Shape[]) $VALUES.clone();
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[GradientSize.KeywordType.values().length];
            try {
                iArr[GradientSize.KeywordType.CLOSEST_SIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[GradientSize.KeywordType.FARTHEST_SIDE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[GradientSize.KeywordType.CLOSEST_CORNER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[GradientSize.KeywordType.FARTHEST_CORNER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public RadialGradient(@NotNull Shape shape, @NotNull GradientSize size, @NotNull Position position, @NotNull List<ColorStop> colorStops) {
        Intrinsics.checkNotNullParameter(shape, "shape");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(position, "position");
        Intrinsics.checkNotNullParameter(colorStops, "colorStops");
        this.shape = shape;
        this.size = size;
        this.position = position;
        this.colorStops = colorStops;
    }

    private final Pair<Float, Float> calculateEllipseRadius(float f10, float f11, float f12) {
        Float valueOf = Float.valueOf(0.0f);
        if (f12 != 0.0f && Math.abs(f12) <= Float.MAX_VALUE) {
            float sqrt = (float) Math.sqrt((f10 * f10) + (f11 * f11 * f12 * f12));
            return new Pair<>(Float.valueOf(sqrt), Float.valueOf(sqrt / f12));
        }
        return new Pair<>(valueOf, valueOf);
    }

    private final Pair<Float, Float> calculateRadius(float f10, float f11, float f12, float f13) {
        float dpToPx;
        float dpToPx2;
        GradientSize gradientSize = this.size;
        if (gradientSize instanceof GradientSize.Keyword) {
            GradientSize.KeywordType keyword = ((GradientSize.Keyword) gradientSize).getKeyword();
            int i10 = WhenMappings.$EnumSwitchMapping$0[keyword.ordinal()];
            if (i10 != 1 && i10 != 2) {
                if (i10 != 3 && i10 != 4) {
                    throw new p();
                }
                return radiusToCorner(f10, f11, f12, f13, keyword);
            }
            return radiusToSide(f10, f11, f12, f13, keyword);
        } else if (gradientSize instanceof GradientSize.Dimensions) {
            LengthPercentageType type = ((GradientSize.Dimensions) gradientSize).getX().getType();
            LengthPercentageType lengthPercentageType = LengthPercentageType.PERCENT;
            if (type == lengthPercentageType) {
                dpToPx = ((GradientSize.Dimensions) this.size).getX().resolve(f12);
            } else {
                dpToPx = PixelUtil.INSTANCE.dpToPx(((GradientSize.Dimensions) this.size).getX().resolve(f12));
            }
            if (((GradientSize.Dimensions) this.size).getY().getType() == lengthPercentageType) {
                dpToPx2 = ((GradientSize.Dimensions) this.size).getY().resolve(f13);
            } else {
                dpToPx2 = PixelUtil.INSTANCE.dpToPx(((GradientSize.Dimensions) this.size).getY().resolve(f13));
            }
            if (this.shape == Shape.CIRCLE) {
                float max = Math.max(dpToPx, dpToPx2);
                return new Pair<>(Float.valueOf(max), Float.valueOf(max));
            }
            return new Pair<>(Float.valueOf(dpToPx), Float.valueOf(dpToPx2));
        } else {
            return radiusToCorner(f10, f11, f12, f13, GradientSize.KeywordType.FARTHEST_CORNER);
        }
    }

    private final Pair<Float, Float> radiusToCorner(float f10, float f11, float f12, float f13, GradientSize.KeywordType keywordType) {
        boolean z10;
        GradientSize.KeywordType keywordType2;
        Float valueOf = Float.valueOf(0.0f);
        Pair[] pairArr = {new Pair(valueOf, valueOf), new Pair(Float.valueOf(f12), valueOf), new Pair(Float.valueOf(f12), Float.valueOf(f13)), new Pair(valueOf, Float.valueOf(f13))};
        int i10 = 0;
        double d10 = 2;
        float sqrt = (float) Math.sqrt(((float) Math.pow(f10 - ((Number) pairArr[0].c()).floatValue(), d10)) + ((float) Math.pow(f11 - ((Number) pairArr[0].d()).floatValue(), d10)));
        if (keywordType == GradientSize.KeywordType.CLOSEST_CORNER) {
            z10 = true;
        } else {
            z10 = false;
        }
        for (int i11 = 1; i11 < 4; i11++) {
            float sqrt2 = (float) Math.sqrt(((float) Math.pow(f10 - ((Number) pairArr[i11].c()).floatValue(), d10)) + ((float) Math.pow(f11 - ((Number) pairArr[i11].d()).floatValue(), d10)));
            if (z10) {
                if (sqrt2 >= sqrt) {
                }
                sqrt = sqrt2;
                i10 = i11;
            } else {
                if (sqrt2 <= sqrt) {
                }
                sqrt = sqrt2;
                i10 = i11;
            }
        }
        if (this.shape == Shape.CIRCLE) {
            return new Pair<>(Float.valueOf(sqrt), Float.valueOf(sqrt));
        }
        if (z10) {
            keywordType2 = GradientSize.KeywordType.CLOSEST_SIDE;
        } else {
            keywordType2 = GradientSize.KeywordType.FARTHEST_SIDE;
        }
        Pair<Float, Float> radiusToSide = radiusToSide(f10, f11, f12, f13, keywordType2);
        return calculateEllipseRadius(((Number) pairArr[i10].c()).floatValue() - f10, ((Number) pairArr[i10].d()).floatValue() - f11, ((Number) radiusToSide.c()).floatValue() / ((Number) radiusToSide.d()).floatValue());
    }

    private final Pair<Float, Float> radiusToSide(float f10, float f11, float f12, float f13, GradientSize.KeywordType keywordType) {
        float max;
        float max2;
        float max3;
        float f14 = f12 - f10;
        float f15 = f13 - f11;
        GradientSize.KeywordType keywordType2 = GradientSize.KeywordType.CLOSEST_SIDE;
        if (keywordType == keywordType2) {
            max = Math.min(f10, f14);
            max2 = Math.min(f11, f15);
        } else {
            max = Math.max(f10, f14);
            max2 = Math.max(f11, f15);
        }
        if (this.shape == Shape.CIRCLE) {
            if (keywordType == keywordType2) {
                max3 = Math.min(max, max2);
            } else {
                max3 = Math.max(max, max2);
            }
            return new Pair<>(Float.valueOf(max3), Float.valueOf(max3));
        }
        return new Pair<>(Float.valueOf(max), Float.valueOf(max2));
    }

    @NotNull
    public final List<ColorStop> getColorStops() {
        return this.colorStops;
    }

    @NotNull
    public final Position getPosition() {
        return this.position;
    }

    /* JADX WARN: Removed duplicated region for block: B:34:0x0113  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x0152 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:46:0x0153  */
    @Override // com.facebook.react.uimanager.style.Gradient
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public android.graphics.Shader getShader(float r11, float r12) {
        /*
            Method dump skipped, instructions count: 360
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.style.RadialGradient.getShader(float, float):android.graphics.Shader");
    }

    @NotNull
    public final Shape getShape() {
        return this.shape;
    }

    @NotNull
    public final GradientSize getSize() {
        return this.size;
    }
}
