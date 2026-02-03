package com.facebook.react.uimanager.style;

import android.graphics.Shader;
import com.rnlineargradient.LinearGradientManager;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import lr.p;
import org.jetbrains.annotations.NotNull;
import sr.a;
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0014\n\u0002\b\u0004\b\u0000\u0018\u0000 \u001a2\u00020\u0001:\u0002\u001a\u001bB\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0010H\u0016J \u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u000f\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u0013H\u0002J,\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0018\u0012\u0004\u0012\u00020\u00180\u00172\u0006\u0010\u0019\u001a\u00020\u00132\u0006\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u000f\u001a\u00020\u0010H\u0002R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u001c"}, d2 = {"Lcom/facebook/react/uimanager/style/LinearGradient;", "Lcom/facebook/react/uimanager/style/Gradient;", "direction", "Lcom/facebook/react/uimanager/style/LinearGradient$Direction;", "colorStops", "", "Lcom/facebook/react/uimanager/style/ColorStop;", "<init>", "(Lcom/facebook/react/uimanager/style/LinearGradient$Direction;Ljava/util/List;)V", "getDirection", "()Lcom/facebook/react/uimanager/style/LinearGradient$Direction;", "getColorStops", "()Ljava/util/List;", "getShader", "Landroid/graphics/Shader;", "width", "", "height", "getAngleForKeyword", "", "keyword", "Lcom/facebook/react/uimanager/style/LinearGradient$Direction$KeywordType;", "endPointsFromAngle", "Lkotlin/Pair;", "", LinearGradientManager.PROP_ANGLE, "Companion", "Direction", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nLinearGradient.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LinearGradient.kt\ncom/facebook/react/uimanager/style/LinearGradient\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,190:1\n1878#2,3:191\n*S KotlinDebug\n*F\n+ 1 LinearGradient.kt\ncom/facebook/react/uimanager/style/LinearGradient\n*L\n111#1:191,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LinearGradient implements Gradient {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final List<ColorStop> colorStops;
    @NotNull
    private final Direction direction;

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u0004\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t¨\u0006\n"}, d2 = {"Lcom/facebook/react/uimanager/style/LinearGradient$Companion;", "", "<init>", "()V", "parse", "Lcom/facebook/react/uimanager/style/Gradient;", "gradientMap", "Lcom/facebook/react/bridge/ReadableMap;", "context", "Landroid/content/Context;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nLinearGradient.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LinearGradient.kt\ncom/facebook/react/uimanager/style/LinearGradient$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,190:1\n1#2:191\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX WARN: Removed duplicated region for block: B:22:0x005e  */
        /* JADX WARN: Removed duplicated region for block: B:24:0x0061  */
        /* JADX WARN: Removed duplicated region for block: B:44:0x00c0  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final com.facebook.react.uimanager.style.Gradient parse(@org.jetbrains.annotations.NotNull com.facebook.react.bridge.ReadableMap r10, @org.jetbrains.annotations.NotNull android.content.Context r11) {
            /*
                r9 = this;
                java.lang.String r0 = "gradientMap"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r10, r0)
                java.lang.String r0 = "context"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
                java.lang.String r0 = "direction"
                boolean r1 = r10.hasKey(r0)
                r2 = 0
                if (r1 == 0) goto L15
                r1 = r10
                goto L16
            L15:
                r1 = r2
            L16:
                if (r1 == 0) goto L54
                com.facebook.react.bridge.ReadableMap r0 = r1.getMap(r0)
                if (r0 != 0) goto L1f
                return r2
            L1f:
                java.lang.String r1 = "type"
                java.lang.String r1 = r0.getString(r1)
                java.lang.String r3 = "angle"
                boolean r3 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r3)
                java.lang.String r4 = "value"
                if (r3 == 0) goto L39
                double r0 = r0.getDouble(r4)
                com.facebook.react.uimanager.style.LinearGradient$Direction$Angle r3 = new com.facebook.react.uimanager.style.LinearGradient$Direction$Angle
                r3.<init>(r0)
                goto L55
            L39:
                java.lang.String r3 = "keyword"
                boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r3)
                if (r1 == 0) goto L54
                com.facebook.react.uimanager.style.LinearGradient$Direction$KeywordType$Companion r1 = com.facebook.react.uimanager.style.LinearGradient.Direction.KeywordType.Companion
                java.lang.String r0 = r0.getString(r4)
                com.facebook.react.uimanager.style.LinearGradient$Direction$KeywordType r0 = r1.fromString(r0)
                if (r0 == 0) goto L54
                com.facebook.react.uimanager.style.LinearGradient$Direction$Keyword r1 = new com.facebook.react.uimanager.style.LinearGradient$Direction$Keyword
                r1.<init>(r0)
                r3 = r1
                goto L55
            L54:
                r3 = r2
            L55:
                java.lang.String r0 = "colorStops"
                boolean r1 = r10.hasKey(r0)
                if (r1 == 0) goto L5e
                goto L5f
            L5e:
                r10 = r2
            L5f:
                if (r10 == 0) goto Lc0
                com.facebook.react.bridge.ReadableArray r10 = r10.getArray(r0)
                if (r10 != 0) goto L68
                return r2
            L68:
                java.util.ArrayList r0 = new java.util.ArrayList
                int r1 = r10.size()
                r0.<init>(r1)
                int r1 = r10.size()
                r4 = 0
            L76:
                if (r4 >= r1) goto Lc1
                com.facebook.react.bridge.ReadableMap r5 = r10.getMap(r4)
                if (r5 != 0) goto L7f
                goto Lbd
            L7f:
                java.lang.String r6 = "color"
                boolean r7 = r5.hasKey(r6)
                if (r7 == 0) goto La8
                boolean r7 = r5.isNull(r6)
                if (r7 == 0) goto L8e
                goto La8
            L8e:
                com.facebook.react.bridge.ReadableType r7 = r5.getType(r6)
                com.facebook.react.bridge.ReadableType r8 = com.facebook.react.bridge.ReadableType.Map
                if (r7 != r8) goto L9f
                com.facebook.react.bridge.ReadableMap r6 = r5.getMap(r6)
                java.lang.Integer r6 = com.facebook.react.bridge.ColorPropConverter.getColor(r6, r11)
                goto La9
            L9f:
                int r6 = r5.getInt(r6)
                java.lang.Integer r6 = java.lang.Integer.valueOf(r6)
                goto La9
            La8:
                r6 = r2
            La9:
                com.facebook.react.uimanager.LengthPercentage$Companion r7 = com.facebook.react.uimanager.LengthPercentage.Companion
                java.lang.String r8 = "position"
                com.facebook.react.bridge.Dynamic r5 = r5.getDynamic(r8)
                com.facebook.react.uimanager.LengthPercentage r5 = r7.setFromDynamic(r5)
                com.facebook.react.uimanager.style.ColorStop r7 = new com.facebook.react.uimanager.style.ColorStop
                r7.<init>(r6, r5)
                r0.add(r7)
            Lbd:
                int r4 = r4 + 1
                goto L76
            Lc0:
                r0 = r2
            Lc1:
                if (r3 == 0) goto Lcb
                if (r0 == 0) goto Lcb
                com.facebook.react.uimanager.style.LinearGradient r10 = new com.facebook.react.uimanager.style.LinearGradient
                r10.<init>(r3, r0)
                return r10
            Lcb:
                return r2
            */
            throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.style.LinearGradient.Companion.parse(com.facebook.react.bridge.ReadableMap, android.content.Context):com.facebook.react.uimanager.style.Gradient");
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0003\u0004\u0005\u0006B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0002\u0007\b¨\u0006\t"}, d2 = {"Lcom/facebook/react/uimanager/style/LinearGradient$Direction;", "", "<init>", "()V", "Angle", "Keyword", "KeywordType", "Lcom/facebook/react/uimanager/style/LinearGradient$Direction$Angle;", "Lcom/facebook/react/uimanager/style/LinearGradient$Direction$Keyword;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class Direction {

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/style/LinearGradient$Direction$Angle;", "Lcom/facebook/react/uimanager/style/LinearGradient$Direction;", LinearGradientManager.PROP_ANGLE, "", "<init>", "(D)V", "getAngle", "()D", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Angle extends Direction {
            private final double angle;

            public Angle(double d10) {
                super(null);
                this.angle = d10;
            }

            public final double getAngle() {
                return this.angle;
            }
        }

        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/style/LinearGradient$Direction$Keyword;", "Lcom/facebook/react/uimanager/style/LinearGradient$Direction;", "keyword", "Lcom/facebook/react/uimanager/style/LinearGradient$Direction$KeywordType;", "<init>", "(Lcom/facebook/react/uimanager/style/LinearGradient$Direction$KeywordType;)V", "getKeyword", "()Lcom/facebook/react/uimanager/style/LinearGradient$Direction$KeywordType;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Keyword extends Direction {
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
        @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\b\u0086\u0081\u0002\u0018\u0000 \f2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\fB\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007j\u0002\b\bj\u0002\b\tj\u0002\b\nj\u0002\b\u000b¨\u0006\r"}, d2 = {"Lcom/facebook/react/uimanager/style/LinearGradient$Direction$KeywordType;", "", "value", "", "<init>", "(Ljava/lang/String;ILjava/lang/String;)V", "getValue", "()Ljava/lang/String;", "TO_TOP_RIGHT", "TO_BOTTOM_RIGHT", "TO_TOP_LEFT", "TO_BOTTOM_LEFT", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class KeywordType {
            private static final /* synthetic */ EnumEntries $ENTRIES;
            private static final /* synthetic */ KeywordType[] $VALUES;
            @NotNull
            public static final Companion Companion;
            @NotNull
            private final String value;
            public static final KeywordType TO_TOP_RIGHT = new KeywordType("TO_TOP_RIGHT", 0, "to top right");
            public static final KeywordType TO_BOTTOM_RIGHT = new KeywordType("TO_BOTTOM_RIGHT", 1, "to bottom right");
            public static final KeywordType TO_TOP_LEFT = new KeywordType("TO_TOP_LEFT", 2, "to top left");
            public static final KeywordType TO_BOTTOM_LEFT = new KeywordType("TO_BOTTOM_LEFT", 3, "to bottom left");

            @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¨\u0006\b"}, d2 = {"Lcom/facebook/react/uimanager/style/LinearGradient$Direction$KeywordType$Companion;", "", "<init>", "()V", "fromString", "Lcom/facebook/react/uimanager/style/LinearGradient$Direction$KeywordType;", "value", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
            @SourceDebugExtension({"SMAP\nLinearGradient.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LinearGradient.kt\ncom/facebook/react/uimanager/style/LinearGradient$Direction$KeywordType$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,190:1\n1#2:191\n*E\n"})
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
                return new KeywordType[]{TO_TOP_RIGHT, TO_BOTTOM_RIGHT, TO_TOP_LEFT, TO_BOTTOM_LEFT};
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

        public /* synthetic */ Direction(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Direction() {
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[Direction.KeywordType.values().length];
            try {
                iArr[Direction.KeywordType.TO_TOP_RIGHT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Direction.KeywordType.TO_BOTTOM_RIGHT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Direction.KeywordType.TO_TOP_LEFT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[Direction.KeywordType.TO_BOTTOM_LEFT.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    public LinearGradient(@NotNull Direction direction, @NotNull List<ColorStop> colorStops) {
        Intrinsics.checkNotNullParameter(direction, "direction");
        Intrinsics.checkNotNullParameter(colorStops, "colorStops");
        this.direction = direction;
        this.colorStops = colorStops;
    }

    private final Pair<float[], float[]> endPointsFromAngle(double d10, float f10, float f11) {
        float[] fArr;
        double d11 = 360;
        double d12 = d10 % d11;
        if (d12 < 0.0d) {
            d12 += d11;
        }
        if (d12 == 0.0d) {
            return new Pair<>(new float[]{0.0f, f10}, new float[]{0.0f, 0.0f});
        }
        int i10 = (d12 > 90.0d ? 1 : (d12 == 90.0d ? 0 : -1));
        if (i10 == 0) {
            return new Pair<>(new float[]{0.0f, 0.0f}, new float[]{f11, 0.0f});
        }
        int i11 = (d12 > 180.0d ? 1 : (d12 == 180.0d ? 0 : -1));
        if (i11 == 0) {
            return new Pair<>(new float[]{0.0f, 0.0f}, new float[]{0.0f, f10});
        }
        int i12 = (d12 > 270.0d ? 1 : (d12 == 270.0d ? 0 : -1));
        if (i12 == 0) {
            return new Pair<>(new float[]{f11, 0.0f}, new float[]{0.0f, 0.0f});
        }
        float tan = (float) Math.tan(Math.toRadians(90 - d12));
        float f12 = (-1) / tan;
        float f13 = 2;
        float f14 = f10 / f13;
        float f15 = f11 / f13;
        if (i10 < 0) {
            fArr = new float[]{f15, f14};
        } else if (i11 < 0) {
            fArr = new float[]{f15, -f14};
        } else {
            fArr = i12 < 0 ? new float[]{-f15, -f14} : new float[]{-f15, f14};
        }
        float f16 = fArr[1] - (fArr[0] * f12);
        float f17 = f16 / (tan - f12);
        float f18 = (f12 * f17) + f16;
        return new Pair<>(new float[]{f15 - f17, f14 + f18}, new float[]{f15 + f17, f14 - f18});
    }

    private final double getAngleForKeyword(Direction.KeywordType keywordType, double d10, double d11) {
        double degrees;
        double d12;
        int i10;
        int i11 = WhenMappings.$EnumSwitchMapping$0[keywordType.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 == 4) {
                        degrees = Math.toDegrees(Math.atan(d11 / d10));
                        i10 = 180;
                    } else {
                        throw new p();
                    }
                } else {
                    degrees = Math.toDegrees(Math.atan(d10 / d11));
                    i10 = 270;
                }
                d12 = i10;
            } else {
                degrees = Math.toDegrees(Math.atan(d10 / d11));
                d12 = 90;
            }
            return degrees + d12;
        }
        return 90 - Math.toDegrees(Math.atan(d10 / d11));
    }

    @NotNull
    public final List<ColorStop> getColorStops() {
        return this.colorStops;
    }

    @NotNull
    public final Direction getDirection() {
        return this.direction;
    }

    @Override // com.facebook.react.uimanager.style.Gradient
    @NotNull
    public Shader getShader(float f10, float f11) {
        LinearGradient linearGradient;
        double angleForKeyword;
        Direction direction = this.direction;
        if (direction instanceof Direction.Angle) {
            angleForKeyword = ((Direction.Angle) direction).getAngle();
            linearGradient = this;
        } else if (direction instanceof Direction.Keyword) {
            linearGradient = this;
            angleForKeyword = linearGradient.getAngleForKeyword(((Direction.Keyword) direction).getKeyword(), f10, f11);
        } else {
            throw new p();
        }
        Pair<float[], float[]> endPointsFromAngle = endPointsFromAngle(angleForKeyword, f11, f10);
        float[] fArr = (float[]) endPointsFromAngle.a();
        float[] fArr2 = (float[]) endPointsFromAngle.b();
        float f12 = fArr2[0] - fArr[0];
        float f13 = fArr2[1] - fArr[1];
        List<ProcessedColorStop> fixedColorStops = ColorStopUtils.INSTANCE.getFixedColorStops(linearGradient.colorStops, (float) Math.sqrt((f12 * f12) + (f13 * f13)));
        int[] iArr = new int[fixedColorStops.size()];
        float[] fArr3 = new float[fixedColorStops.size()];
        int i10 = 0;
        for (Object obj : fixedColorStops) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            ProcessedColorStop processedColorStop = (ProcessedColorStop) obj;
            Integer color = processedColorStop.getColor();
            if (color != null && processedColorStop.getPosition() != null) {
                iArr[i10] = color.intValue();
                fArr3[i10] = processedColorStop.getPosition().floatValue();
            }
            i10 = i11;
        }
        return new android.graphics.LinearGradient(fArr[0], fArr[1], fArr2[0], fArr2[1], iArr, fArr3, Shader.TileMode.CLAMP);
    }
}
