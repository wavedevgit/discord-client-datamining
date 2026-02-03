package com.facebook.react.animated;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0013\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0000\u0018\u0000 \u001e2\u00020\u0001:\u0002\u001d\u001eB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0015\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0010\u001a\u00020\u0014H\u0010¢\u0006\u0002\b\u0015J\u0015\u0010\u0016\u001a\u00020\u00132\u0006\u0010\u0010\u001a\u00020\u0014H\u0010¢\u0006\u0002\b\u0017J\r\u0010\u0018\u001a\u00020\u0013H\u0010¢\u0006\u0002\b\u0019J\n\u0010\u001a\u001a\u0004\u0018\u00010\tH\u0016J\r\u0010\u001b\u001a\u00020\rH\u0010¢\u0006\u0002\b\u001cR\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u0004\u0018\u00010\tX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\f\u001a\u0004\u0018\u00010\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000e\u001a\u0004\u0018\u00010\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u000f\u001a\u0004\u0018\u00010\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0001X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0011\u001a\u0004\u0018\u00010\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001f"}, d2 = {"Lcom/facebook/react/animated/InterpolationAnimatedNode;", "Lcom/facebook/react/animated/ValueAnimatedNode;", "config", "Lcom/facebook/react/bridge/ReadableMap;", "<init>", "(Lcom/facebook/react/bridge/ReadableMap;)V", "inputRange", "", "outputRange", "", "outputType", "Lcom/facebook/react/animated/InterpolationAnimatedNode$OutputType;", "pattern", "", "extrapolateLeft", "extrapolateRight", "parent", "objectValue", "onAttachedToNode", "", "Lcom/facebook/react/animated/AnimatedNode;", "onAttachedToNode$ReactAndroid_release", "onDetachedFromNode", "onDetachedFromNode$ReactAndroid_release", "update", "update$ReactAndroid_release", "getAnimatedObject", "prettyPrint", "prettyPrint$ReactAndroid_release", "OutputType", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInterpolationAnimatedNode.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InterpolationAnimatedNode.kt\ncom/facebook/react/animated/InterpolationAnimatedNode\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,275:1\n1#2:276\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class InterpolationAnimatedNode extends ValueAnimatedNode {
    @NotNull
    private static final String COLOR_OUTPUT_TYPE = "color";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String EXTRAPOLATE_TYPE_CLAMP = "clamp";
    @NotNull
    public static final String EXTRAPOLATE_TYPE_EXTEND = "extend";
    @NotNull
    public static final String EXTRAPOLATE_TYPE_IDENTITY = "identity";
    @NotNull
    private static final Pattern numericPattern;
    private final String extrapolateLeft;
    private final String extrapolateRight;
    @NotNull
    private final double[] inputRange;
    private Object objectValue;
    private Object outputRange;
    private OutputType outputType;
    private ValueAnimatedNode parent;
    private String pattern;

    @Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0013\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0015\n\u0000\n\u0002\u0010\u0011\n\u0002\b\u0002\n\u0002\u0010\u0006\n\u0002\b\n\n\u0002\u0010\b\n\u0002\b\u0006\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u000eH\u0002J\u0012\u0010\u000f\u001a\u00020\u00102\b\u0010\r\u001a\u0004\u0018\u00010\u000eH\u0002J\u001d\u0010\u0011\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\f0\u00122\u0006\u0010\r\u001a\u00020\u000eH\u0002¢\u0006\u0002\u0010\u0013JB\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u0017\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u00152\u0006\u0010\u0019\u001a\u00020\u00152\u0006\u0010\u001a\u001a\u00020\u00152\b\u0010\u001b\u001a\u0004\u0018\u00010\u00052\b\u0010\u001c\u001a\u0004\u0018\u00010\u0005J2\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u001d\u001a\u00020\f2\u0006\u0010\u001e\u001a\u00020\f2\b\u0010\u001b\u001a\u0004\u0018\u00010\u00052\b\u0010\u001c\u001a\u0004\u0018\u00010\u0005J\u001e\u0010\u001f\u001a\u00020 2\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u001d\u001a\u00020\f2\u0006\u0010\u001e\u001a\u00020\u0010JE\u0010!\u001a\u00020\u00052\u0006\u0010\"\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010\u001d\u001a\u00020\f2\f\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\f0\u00122\b\u0010\u001b\u001a\u0004\u0018\u00010\u00052\b\u0010\u001c\u001a\u0004\u0018\u00010\u0005¢\u0006\u0002\u0010#J\u0018\u0010$\u001a\u00020 2\u0006\u0010\u0016\u001a\u00020\u00152\u0006\u0010%\u001a\u00020\fH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006&"}, d2 = {"Lcom/facebook/react/animated/InterpolationAnimatedNode$Companion;", "", "<init>", "()V", "EXTRAPOLATE_TYPE_IDENTITY", "", "EXTRAPOLATE_TYPE_CLAMP", "EXTRAPOLATE_TYPE_EXTEND", "numericPattern", "Ljava/util/regex/Pattern;", "COLOR_OUTPUT_TYPE", "fromDoubleArray", "", "array", "Lcom/facebook/react/bridge/ReadableArray;", "fromIntArray", "", "fromStringPattern", "", "(Lcom/facebook/react/bridge/ReadableArray;)[[D", "interpolate", "", "value", "inputMin", "inputMax", "outputMin", "outputMax", "extrapolateLeft", "extrapolateRight", "inputRange", "outputRange", "interpolateColor", "", "interpolateString", "pattern", "(Ljava/lang/String;D[D[[DLjava/lang/String;Ljava/lang/String;)Ljava/lang/String;", "findRangeIndex", "ranges", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final int findRangeIndex(double d10, double[] dArr) {
            int i10 = 1;
            while (i10 < dArr.length - 1 && dArr[i10] < d10) {
                i10++;
            }
            return i10 - 1;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final double[] fromDoubleArray(ReadableArray readableArray) {
            if (readableArray != null) {
                int size = readableArray.size();
                double[] dArr = new double[size];
                for (int i10 = 0; i10 < size; i10++) {
                    dArr[i10] = readableArray.getDouble(i10);
                }
                return dArr;
            }
            return new double[0];
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int[] fromIntArray(ReadableArray readableArray) {
            if (readableArray != null) {
                int size = readableArray.size();
                int[] iArr = new int[size];
                for (int i10 = 0; i10 < size; i10++) {
                    iArr[i10] = readableArray.getInt(i10);
                }
                return iArr;
            }
            return new int[0];
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final double[][] fromStringPattern(ReadableArray readableArray) {
            int size = readableArray.size();
            double[][] dArr = new double[size];
            Pattern pattern = InterpolationAnimatedNode.numericPattern;
            String string = readableArray.getString(0);
            if (string == null) {
                string = "";
            }
            Matcher matcher = pattern.matcher(string);
            ArrayList arrayList = new ArrayList();
            while (matcher.find()) {
                String group = matcher.group();
                Intrinsics.checkNotNullExpressionValue(group, "group(...)");
                arrayList.add(Double.valueOf(Double.parseDouble(group)));
            }
            int size2 = arrayList.size();
            double[] dArr2 = new double[size2];
            int size3 = arrayList.size();
            for (int i10 = 0; i10 < size3; i10++) {
                dArr2[i10] = ((Number) arrayList.get(i10)).doubleValue();
            }
            dArr[0] = dArr2;
            for (int i11 = 1; i11 < size; i11++) {
                double[] dArr3 = new double[size2];
                Pattern pattern2 = InterpolationAnimatedNode.numericPattern;
                String string2 = readableArray.getString(i11);
                if (string2 == null) {
                    string2 = "";
                }
                Matcher matcher2 = pattern2.matcher(string2);
                for (int i12 = 0; matcher2.find() && i12 < size2; i12++) {
                    String group2 = matcher2.group();
                    Intrinsics.checkNotNullExpressionValue(group2, "group(...)");
                    dArr3[i12] = Double.parseDouble(group2);
                }
                dArr[i11] = dArr3;
            }
            return dArr;
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x0038, code lost:
            if (r22.equals(com.facebook.react.animated.InterpolationAnimatedNode.EXTRAPOLATE_TYPE_EXTEND) != false) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:34:0x0079, code lost:
            if (r23.equals(com.facebook.react.animated.InterpolationAnimatedNode.EXTRAPOLATE_TYPE_EXTEND) != false) goto L36;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final double interpolate(double r12, double r14, double r16, double r18, double r20, java.lang.String r22, java.lang.String r23) {
            /*
                r11 = this;
                r0 = r22
                r1 = r23
                int r2 = (r12 > r14 ? 1 : (r12 == r14 ? 0 : -1))
                java.lang.String r3 = "Invalid extrapolation type "
                java.lang.String r4 = "extend"
                java.lang.String r5 = "identity"
                java.lang.String r6 = "clamp"
                r7 = 94742715(0x5a5a8bb, float:1.5578507E-35)
                r8 = -135761730(0xfffffffff7e870be, float:-9.428903E33)
                r9 = -1289044198(0xffffffffb32abf1a, float:-3.9755015E-8)
                if (r2 >= 0) goto L55
                if (r0 == 0) goto L3b
                int r10 = r0.hashCode()
                if (r10 == r9) goto L34
                if (r10 == r8) goto L2d
                if (r10 != r7) goto L3b
                boolean r12 = r0.equals(r6)
                if (r12 == 0) goto L3b
                r12 = r14
                goto L55
            L2d:
                boolean r1 = r0.equals(r5)
                if (r1 == 0) goto L3b
                return r12
            L34:
                boolean r10 = r0.equals(r4)
                if (r10 == 0) goto L3b
                goto L55
            L3b:
                com.facebook.react.bridge.JSApplicationIllegalArgumentException r12 = new com.facebook.react.bridge.JSApplicationIllegalArgumentException
                java.lang.StringBuilder r13 = new java.lang.StringBuilder
                r13.<init>()
                r13.append(r3)
                r13.append(r0)
                java.lang.String r0 = "for left extrapolation"
                r13.append(r0)
                java.lang.String r13 = r13.toString()
                r12.<init>(r13)
                throw r12
            L55:
                int r0 = (r12 > r16 ? 1 : (r12 == r16 ? 0 : -1))
                if (r0 <= 0) goto L96
                if (r1 == 0) goto L7c
                int r0 = r1.hashCode()
                if (r0 == r9) goto L75
                if (r0 == r8) goto L6e
                if (r0 != r7) goto L7c
                boolean r12 = r1.equals(r6)
                if (r12 == 0) goto L7c
                r12 = r16
                goto L96
            L6e:
                boolean r0 = r1.equals(r5)
                if (r0 == 0) goto L7c
                return r12
            L75:
                boolean r0 = r1.equals(r4)
                if (r0 == 0) goto L7c
                goto L96
            L7c:
                com.facebook.react.bridge.JSApplicationIllegalArgumentException r12 = new com.facebook.react.bridge.JSApplicationIllegalArgumentException
                java.lang.StringBuilder r13 = new java.lang.StringBuilder
                r13.<init>()
                r13.append(r3)
                r13.append(r1)
                java.lang.String r0 = "for right extrapolation"
                r13.append(r0)
                java.lang.String r13 = r13.toString()
                r12.<init>(r13)
                throw r12
            L96:
                int r0 = (r18 > r20 ? 1 : (r18 == r20 ? 0 : -1))
                if (r0 != 0) goto L9b
                return r18
            L9b:
                int r0 = (r14 > r16 ? 1 : (r14 == r16 ? 0 : -1))
                if (r0 != 0) goto La3
                if (r2 > 0) goto La2
                return r18
            La2:
                return r20
            La3:
                double r0 = r20 - r18
                double r12 = r12 - r14
                double r0 = r0 * r12
                double r12 = r16 - r14
                double r0 = r0 / r12
                double r12 = r18 + r0
                return r12
            */
            throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.animated.InterpolationAnimatedNode.Companion.interpolate(double, double, double, double, double, java.lang.String, java.lang.String):double");
        }

        public final int interpolateColor(double d10, @NotNull double[] inputRange, @NotNull int[] outputRange) {
            Intrinsics.checkNotNullParameter(inputRange, "inputRange");
            Intrinsics.checkNotNullParameter(outputRange, "outputRange");
            int findRangeIndex = findRangeIndex(d10, inputRange);
            int i10 = outputRange[findRangeIndex];
            int i11 = findRangeIndex + 1;
            int i12 = outputRange[i11];
            if (i10 != i12) {
                double d11 = inputRange[findRangeIndex];
                double d12 = inputRange[i11];
                if (d11 == d12) {
                    if (d10 > d11) {
                        return i12;
                    }
                } else {
                    return r1.c.c(i10, i12, (float) ((d10 - d11) / (d12 - d11)));
                }
            }
            return i10;
        }

        @NotNull
        public final String interpolateString(@NotNull String pattern, double d10, @NotNull double[] dArr, @NotNull double[][] outputRange, String str, String str2) {
            String valueOf;
            double[] inputRange = dArr;
            Intrinsics.checkNotNullParameter(pattern, "pattern");
            Intrinsics.checkNotNullParameter(inputRange, "inputRange");
            Intrinsics.checkNotNullParameter(outputRange, "outputRange");
            Companion companion = this;
            double d11 = d10;
            int findRangeIndex = companion.findRangeIndex(d11, inputRange);
            StringBuffer stringBuffer = new StringBuffer(pattern.length());
            Matcher matcher = InterpolationAnimatedNode.numericPattern.matcher(pattern);
            int i10 = 0;
            while (matcher.find()) {
                double[] dArr2 = outputRange[findRangeIndex];
                if (i10 >= dArr2.length) {
                    break;
                }
                int i11 = findRangeIndex + 1;
                StringBuffer stringBuffer2 = stringBuffer;
                int i12 = i10;
                double interpolate = companion.interpolate(d11, inputRange[findRangeIndex], inputRange[i11], dArr2[i10], outputRange[i11][i10], str, str2);
                int i13 = (int) interpolate;
                if (i13 == interpolate) {
                    valueOf = String.valueOf(i13);
                } else {
                    valueOf = String.valueOf(interpolate);
                }
                matcher.appendReplacement(stringBuffer2, valueOf);
                i10 = i12 + 1;
                companion = this;
                d11 = d10;
                stringBuffer = stringBuffer2;
                inputRange = dArr;
            }
            StringBuffer stringBuffer3 = stringBuffer;
            matcher.appendTail(stringBuffer3);
            String stringBuffer4 = stringBuffer3.toString();
            Intrinsics.checkNotNullExpressionValue(stringBuffer4, "toString(...)");
            return stringBuffer4;
        }

        private Companion() {
        }

        public final double interpolate(double d10, @NotNull double[] inputRange, @NotNull double[] outputRange, String str, String str2) {
            Intrinsics.checkNotNullParameter(inputRange, "inputRange");
            Intrinsics.checkNotNullParameter(outputRange, "outputRange");
            int findRangeIndex = findRangeIndex(d10, inputRange);
            int i10 = findRangeIndex + 1;
            return interpolate(d10, inputRange[findRangeIndex], inputRange[i10], outputRange[findRangeIndex], outputRange[i10], str, str2);
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0082\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/facebook/react/animated/InterpolationAnimatedNode$OutputType;", "", "<init>", "(Ljava/lang/String;I)V", "Number", "Color", "String", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class OutputType {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ OutputType[] $VALUES;
        public static final OutputType Number = new OutputType("Number", 0);
        public static final OutputType Color = new OutputType("Color", 1);
        public static final OutputType String = new OutputType("String", 2);

        private static final /* synthetic */ OutputType[] $values() {
            return new OutputType[]{Number, Color, String};
        }

        static {
            OutputType[] $values = $values();
            $VALUES = $values;
            $ENTRIES = sr.a.a($values);
        }

        private OutputType(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static OutputType valueOf(String str) {
            return (OutputType) Enum.valueOf(OutputType.class, str);
        }

        public static OutputType[] values() {
            return (OutputType[]) $VALUES.clone();
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[OutputType.values().length];
            try {
                iArr[OutputType.Number.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[OutputType.Color.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[OutputType.String.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    static {
        Pattern compile = Pattern.compile("[+-]?(\\d+\\.?\\d*|\\.\\d+)([eE][+-]?\\d+)?");
        Intrinsics.checkNotNullExpressionValue(compile, "compile(...)");
        numericPattern = compile;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public InterpolationAnimatedNode(@NotNull ReadableMap config) {
        super(null, 1, null);
        Intrinsics.checkNotNullParameter(config, "config");
        Companion companion = Companion;
        this.inputRange = companion.fromDoubleArray(config.getArray("inputRange"));
        this.extrapolateLeft = config.getString("extrapolateLeft");
        this.extrapolateRight = config.getString("extrapolateRight");
        ReadableArray array = config.getArray("outputRange");
        if (Intrinsics.areEqual("color", config.getString("outputType"))) {
            this.outputType = OutputType.Color;
            this.outputRange = companion.fromIntArray(array);
            return;
        }
        if ((array != null ? array.getType(0) : null) == ReadableType.String) {
            this.outputType = OutputType.String;
            this.outputRange = companion.fromStringPattern(array);
            this.pattern = array.getString(0);
            return;
        }
        this.outputType = OutputType.Number;
        this.outputRange = companion.fromDoubleArray(array);
    }

    @Override // com.facebook.react.animated.ValueAnimatedNode
    public Object getAnimatedObject() {
        return this.objectValue;
    }

    @Override // com.facebook.react.animated.AnimatedNode
    public void onAttachedToNode$ReactAndroid_release(@NotNull AnimatedNode parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        if (this.parent == null) {
            if (parent instanceof ValueAnimatedNode) {
                this.parent = (ValueAnimatedNode) parent;
                return;
            }
            throw new IllegalArgumentException("Parent is of an invalid type");
        }
        throw new IllegalStateException("Parent already attached");
    }

    @Override // com.facebook.react.animated.AnimatedNode
    public void onDetachedFromNode$ReactAndroid_release(@NotNull AnimatedNode parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        if (parent == this.parent) {
            this.parent = null;
            return;
        }
        throw new IllegalArgumentException("Invalid parent node provided");
    }

    @Override // com.facebook.react.animated.ValueAnimatedNode, com.facebook.react.animated.AnimatedNode
    @NotNull
    public String prettyPrint$ReactAndroid_release() {
        int i10 = this.tag;
        String prettyPrint$ReactAndroid_release = super.prettyPrint$ReactAndroid_release();
        return "InterpolationAnimatedNode[" + i10 + "] super: " + prettyPrint$ReactAndroid_release;
    }

    @Override // com.facebook.react.animated.AnimatedNode
    public void update$ReactAndroid_release() {
        int i10;
        String str;
        ValueAnimatedNode valueAnimatedNode = this.parent;
        if (valueAnimatedNode != null) {
            double value = valueAnimatedNode.getValue();
            OutputType outputType = this.outputType;
            if (outputType == null) {
                i10 = -1;
            } else {
                i10 = WhenMappings.$EnumSwitchMapping$0[outputType.ordinal()];
            }
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3 && (str = this.pattern) != null) {
                        Companion companion = Companion;
                        double[] dArr = this.inputRange;
                        Object obj = this.outputRange;
                        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Array<kotlin.DoubleArray>");
                        this.objectValue = companion.interpolateString(str, value, dArr, (double[][]) obj, this.extrapolateLeft, this.extrapolateRight);
                        return;
                    }
                    return;
                }
                Companion companion2 = Companion;
                double[] dArr2 = this.inputRange;
                Object obj2 = this.outputRange;
                Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.IntArray");
                this.objectValue = Integer.valueOf(companion2.interpolateColor(value, dArr2, (int[]) obj2));
                return;
            }
            Companion companion3 = Companion;
            double[] dArr3 = this.inputRange;
            Object obj3 = this.outputRange;
            Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.DoubleArray");
            this.nodeValue = companion3.interpolate(value, dArr3, (double[]) obj3, this.extrapolateLeft, this.extrapolateRight);
        }
    }
}
