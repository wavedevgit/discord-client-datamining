package app.rive.runtime.kotlin.fonts;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.views.text.ReactFontManager;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import kotlin.ranges.d;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001:\u0007\u0003\u0004\u0005\u0006\u0007\b\tB\u0005¢\u0006\u0002\u0010\u0002¨\u0006\n"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts;", "", "()V", "Alias", "Axis", "Family", "FileFont", "Font", "FontOpts", "Weight", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Fonts {
    public static final int $stable = 0;

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B\u0015\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0002\u0010\u0005J\t\u0010\t\u001a\u00020\u0003HÆ\u0003J\t\u0010\n\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\u000b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\f\u001a\u00020\r2\b\u0010\u000e\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0011\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\u0007¨\u0006\u0012"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$Axis;", "", "tag", "", "styleValue", "(Ljava/lang/String;Ljava/lang/String;)V", "getStyleValue", "()Ljava/lang/String;", "getTag", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Axis {
        public static final int $stable = 0;
        @NotNull
        private final String styleValue;
        @NotNull
        private final String tag;

        public Axis(@NotNull String tag, @NotNull String styleValue) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(styleValue, "styleValue");
            this.tag = tag;
            this.styleValue = styleValue;
        }

        public static /* synthetic */ Axis copy$default(Axis axis, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = axis.tag;
            }
            if ((i10 & 2) != 0) {
                str2 = axis.styleValue;
            }
            return axis.copy(str, str2);
        }

        @NotNull
        public final String component1() {
            return this.tag;
        }

        @NotNull
        public final String component2() {
            return this.styleValue;
        }

        @NotNull
        public final Axis copy(@NotNull String tag, @NotNull String styleValue) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(styleValue, "styleValue");
            return new Axis(tag, styleValue);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Axis) {
                Axis axis = (Axis) obj;
                return Intrinsics.areEqual(this.tag, axis.tag) && Intrinsics.areEqual(this.styleValue, axis.styleValue);
            }
            return false;
        }

        @NotNull
        public final String getStyleValue() {
            return this.styleValue;
        }

        @NotNull
        public final String getTag() {
            return this.tag;
        }

        public int hashCode() {
            return (this.tag.hashCode() * 31) + this.styleValue.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.tag;
            String str2 = this.styleValue;
            return "Axis(tag=" + str + ", styleValue=" + str2 + ")";
        }
    }

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\b\u0087\b\u0018\u0000 \u001a2\u00020\u0001:\u0001\u001aB5\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\u0002\u0010\bJ\u000b\u0010\u000f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0011\u001a\u0004\u0018\u00010\u0006HÆ\u0003J\u000b\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003J9\u0010\u0013\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001J\t\u0010\u0019\u001a\u00020\u0003HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000e¨\u0006\u001b"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$FontOpts;", "", "familyName", "", "lang", "weight", "Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "style", "(Ljava/lang/String;Ljava/lang/String;Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;Ljava/lang/String;)V", "getFamilyName", "()Ljava/lang/String;", "getLang", "getStyle", "getWeight", "()Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "", "toString", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class FontOpts {
        public static final int $stable = 0;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private static final FontOpts DEFAULT = new FontOpts("sans-serif", null, null, null, 14, null);
        private final String familyName;
        private final String lang;
        private final String style;
        private final Weight weight;

        @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002R\u0011\u0010\u0003\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u0007"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$FontOpts$Companion;", "", "()V", "DEFAULT", "Lapp/rive/runtime/kotlin/fonts/Fonts$FontOpts;", "getDEFAULT", "()Lapp/rive/runtime/kotlin/fonts/Fonts$FontOpts;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @NotNull
            public final FontOpts getDEFAULT() {
                return FontOpts.DEFAULT;
            }

            private Companion() {
            }
        }

        public FontOpts() {
            this(null, null, null, null, 15, null);
        }

        public static /* synthetic */ FontOpts copy$default(FontOpts fontOpts, String str, String str2, Weight weight, String str3, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = fontOpts.familyName;
            }
            if ((i10 & 2) != 0) {
                str2 = fontOpts.lang;
            }
            if ((i10 & 4) != 0) {
                weight = fontOpts.weight;
            }
            if ((i10 & 8) != 0) {
                str3 = fontOpts.style;
            }
            return fontOpts.copy(str, str2, weight, str3);
        }

        public final String component1() {
            return this.familyName;
        }

        public final String component2() {
            return this.lang;
        }

        public final Weight component3() {
            return this.weight;
        }

        public final String component4() {
            return this.style;
        }

        @NotNull
        public final FontOpts copy(String str, String str2, Weight weight, String str3) {
            return new FontOpts(str, str2, weight, str3);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof FontOpts) {
                FontOpts fontOpts = (FontOpts) obj;
                return Intrinsics.areEqual(this.familyName, fontOpts.familyName) && Intrinsics.areEqual(this.lang, fontOpts.lang) && Intrinsics.areEqual(this.weight, fontOpts.weight) && Intrinsics.areEqual(this.style, fontOpts.style);
            }
            return false;
        }

        public final String getFamilyName() {
            return this.familyName;
        }

        public final String getLang() {
            return this.lang;
        }

        public final String getStyle() {
            return this.style;
        }

        public final Weight getWeight() {
            return this.weight;
        }

        public int hashCode() {
            String str = this.familyName;
            int hashCode = (str == null ? 0 : str.hashCode()) * 31;
            String str2 = this.lang;
            int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
            Weight weight = this.weight;
            int hashCode3 = (hashCode2 + (weight == null ? 0 : weight.hashCode())) * 31;
            String str3 = this.style;
            return hashCode3 + (str3 != null ? str3.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            String str = this.familyName;
            String str2 = this.lang;
            Weight weight = this.weight;
            String str3 = this.style;
            return "FontOpts(familyName=" + str + ", lang=" + str2 + ", weight=" + weight + ", style=" + str3 + ")";
        }

        public FontOpts(String str, String str2, Weight weight, String str3) {
            this.familyName = str;
            this.lang = str2;
            this.weight = weight;
            this.style = str3;
        }

        public /* synthetic */ FontOpts(String str, String str2, Weight weight, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? Weight.Companion.getNORMAL() : weight, (i10 & 8) != 0 ? "normal" : str3);
        }
    }

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u000f\n\u0000\n\u0002\u0010\b\n\u0002\b\b\n\u0002\u0010\u000b\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0087\b\u0018\u0000 \u00112\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u0011B\u000f\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\u0011\u0010\u0007\u001a\u00020\u00032\u0006\u0010\b\u001a\u00020\u0000H\u0096\u0002J\t\u0010\t\u001a\u00020\u0003HÆ\u0003J\u0013\u0010\n\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u000b\u001a\u00020\f2\b\u0010\b\u001a\u0004\u0018\u00010\rHÖ\u0003J\t\u0010\u000e\u001a\u00020\u0003HÖ\u0001J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006¨\u0006\u0012"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "", "weight", "", "(I)V", "getWeight", "()I", "compareTo", "other", "component1", "copy", "equals", "", "", "hashCode", "toString", "", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Weight implements Comparable<Weight> {
        public static final int $stable = 0;
        private final int weight;
        @NotNull
        public static final Companion Companion = new Companion(null);
        @NotNull
        private static final Weight NORMAL = new Weight(ReactFontManager.TypefaceStyle.NORMAL);
        @NotNull
        private static final Weight BOLD = new Weight(ReactFontManager.TypefaceStyle.BOLD);

        @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u0010\u0010\t\u001a\u00020\u00042\b\b\u0002\u0010\n\u001a\u00020\u000bJ\u0010\u0010\f\u001a\u00020\u00042\b\u0010\r\u001a\u0004\u0018\u00010\u000eR\u0011\u0010\u0003\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0005\u0010\u0006R\u0011\u0010\u0007\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\u0006¨\u0006\u000f"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$Weight$Companion;", "", "()V", "BOLD", "Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "getBOLD", "()Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "NORMAL", "getNORMAL", "fromInt", "intValue", "", "fromString", "stringValue", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public static /* synthetic */ Weight fromInt$default(Companion companion, int i10, int i11, Object obj) {
                if ((i11 & 1) != 0) {
                    i10 = ReactFontManager.TypefaceStyle.NORMAL;
                }
                return companion.fromInt(i10);
            }

            @NotNull
            public final Weight fromInt(int i10) {
                return new Weight(d.n(i10, new IntRange(0, 1000)));
            }

            @NotNull
            public final Weight fromString(String str) {
                int i10;
                Integer intOrNull;
                if (str != null && (intOrNull = StringsKt.toIntOrNull(str)) != null) {
                    i10 = d.n(intOrNull.intValue(), new IntRange(0, 1000));
                } else {
                    i10 = ReactFontManager.TypefaceStyle.NORMAL;
                }
                return new Weight(i10);
            }

            @NotNull
            public final Weight getBOLD() {
                return Weight.BOLD;
            }

            @NotNull
            public final Weight getNORMAL() {
                return Weight.NORMAL;
            }

            private Companion() {
            }
        }

        public Weight() {
            this(0, 1, null);
        }

        public static /* synthetic */ Weight copy$default(Weight weight, int i10, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                i10 = weight.weight;
            }
            return weight.copy(i10);
        }

        public final int component1() {
            return this.weight;
        }

        @NotNull
        public final Weight copy(int i10) {
            return new Weight(i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            return (obj instanceof Weight) && this.weight == ((Weight) obj).weight;
        }

        public final int getWeight() {
            return this.weight;
        }

        public int hashCode() {
            return Integer.hashCode(this.weight);
        }

        @NotNull
        public String toString() {
            int i10 = this.weight;
            return "Weight(weight=" + i10 + ")";
        }

        public Weight(int i10) {
            this.weight = i10;
        }

        @Override // java.lang.Comparable
        public int compareTo(@NotNull Weight other) {
            Intrinsics.checkNotNullParameter(other, "other");
            return Intrinsics.compare(this.weight, other.weight);
        }

        public /* synthetic */ Weight(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this((i11 & 1) != 0 ? ReactFontManager.TypefaceStyle.NORMAL : i10);
        }
    }

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\u0002\u0010\u0007J\t\u0010\r\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u000f\u001a\u0004\u0018\u00010\u0006HÆ\u0003J)\u0010\u0010\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006HÆ\u0001J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\tR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u0017"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$Alias;", "", StackTraceHelper.NAME_KEY, "", "original", "weight", "Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "(Ljava/lang/String;Ljava/lang/String;Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;)V", "getName", "()Ljava/lang/String;", "getOriginal", "getWeight", "()Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "", "toString", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Alias {
        public static final int $stable = 0;
        @NotNull
        private final String name;
        @NotNull
        private final String original;
        private final Weight weight;

        public Alias(@NotNull String name, @NotNull String original, Weight weight) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(original, "original");
            this.name = name;
            this.original = original;
            this.weight = weight;
        }

        public static /* synthetic */ Alias copy$default(Alias alias, String str, String str2, Weight weight, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = alias.name;
            }
            if ((i10 & 2) != 0) {
                str2 = alias.original;
            }
            if ((i10 & 4) != 0) {
                weight = alias.weight;
            }
            return alias.copy(str, str2, weight);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        @NotNull
        public final String component2() {
            return this.original;
        }

        public final Weight component3() {
            return this.weight;
        }

        @NotNull
        public final Alias copy(@NotNull String name, @NotNull String original, Weight weight) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(original, "original");
            return new Alias(name, original, weight);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Alias) {
                Alias alias = (Alias) obj;
                return Intrinsics.areEqual(this.name, alias.name) && Intrinsics.areEqual(this.original, alias.original) && Intrinsics.areEqual(this.weight, alias.weight);
            }
            return false;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        @NotNull
        public final String getOriginal() {
            return this.original;
        }

        public final Weight getWeight() {
            return this.weight;
        }

        public int hashCode() {
            int hashCode = ((this.name.hashCode() * 31) + this.original.hashCode()) * 31;
            Weight weight = this.weight;
            return hashCode + (weight == null ? 0 : weight.hashCode());
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.original;
            Weight weight = this.weight;
            return "Alias(name=" + str + ", original=" + str2 + ", weight=" + weight + ")";
        }

        public /* synthetic */ Alias(String str, String str2, Weight weight, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, str2, (i10 & 4) != 0 ? Weight.Companion.getNORMAL() : weight);
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001B%\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\u0002\u0010\u0006J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003J+\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001J\t\u0010\u0014\u001a\u00020\u0003HÖ\u0001R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\bR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\b¨\u0006\u0015"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$FileFont;", "", StackTraceHelper.NAME_KEY, "", "variant", "lang", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "getLang", "()Ljava/lang/String;", "getName", "getVariant", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "", "toString", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class FileFont {
        public static final int $stable = 0;
        private final String lang;
        @NotNull
        private final String name;
        private final String variant;

        public FileFont(@NotNull String name, String str, String str2) {
            Intrinsics.checkNotNullParameter(name, "name");
            this.name = name;
            this.variant = str;
            this.lang = str2;
        }

        public static /* synthetic */ FileFont copy$default(FileFont fileFont, String str, String str2, String str3, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = fileFont.name;
            }
            if ((i10 & 2) != 0) {
                str2 = fileFont.variant;
            }
            if ((i10 & 4) != 0) {
                str3 = fileFont.lang;
            }
            return fileFont.copy(str, str2, str3);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        public final String component2() {
            return this.variant;
        }

        public final String component3() {
            return this.lang;
        }

        @NotNull
        public final FileFont copy(@NotNull String name, String str, String str2) {
            Intrinsics.checkNotNullParameter(name, "name");
            return new FileFont(name, str, str2);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof FileFont) {
                FileFont fileFont = (FileFont) obj;
                return Intrinsics.areEqual(this.name, fileFont.name) && Intrinsics.areEqual(this.variant, fileFont.variant) && Intrinsics.areEqual(this.lang, fileFont.lang);
            }
            return false;
        }

        public final String getLang() {
            return this.lang;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        public final String getVariant() {
            return this.variant;
        }

        public int hashCode() {
            int hashCode = this.name.hashCode() * 31;
            String str = this.variant;
            int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
            String str2 = this.lang;
            return hashCode2 + (str2 != null ? str2.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.variant;
            String str3 = this.lang;
            return "FileFont(name=" + str + ", variant=" + str2 + ", lang=" + str3 + ")";
        }

        public /* synthetic */ FileFont(String str, String str2, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3);
        }
    }

    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0087\b\u0018\u00002\u00020\u0001BC\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0018\u0010\u0006\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t0\u0007¢\u0006\u0002\u0010\u000bJ\u000b\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0014\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u001b\u0010\u0015\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t0\u0007HÆ\u0003JI\u0010\u0016\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\u001a\b\u0002\u0010\u0006\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t0\u0007HÆ\u0001J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001a\u001a\u00020\u001bHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001R#\u0010\u0006\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t0\u0007¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000f¨\u0006\u001d"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$Family;", "", StackTraceHelper.NAME_KEY, "", "variant", "lang", "fonts", "", "Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "", "Lapp/rive/runtime/kotlin/fonts/Fonts$Font;", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;)V", "getFonts", "()Ljava/util/Map;", "getLang", "()Ljava/lang/String;", "getName", "getVariant", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "", "toString", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Family {
        public static final int $stable = 8;
        @NotNull
        private final Map<Weight, List<Font>> fonts;
        private final String lang;
        private final String name;
        private final String variant;

        /* JADX WARN: Multi-variable type inference failed */
        public Family(String str, String str2, String str3, @NotNull Map<Weight, ? extends List<Font>> fonts) {
            Intrinsics.checkNotNullParameter(fonts, "fonts");
            this.name = str;
            this.variant = str2;
            this.lang = str3;
            this.fonts = fonts;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ Family copy$default(Family family, String str, String str2, String str3, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = family.name;
            }
            if ((i10 & 2) != 0) {
                str2 = family.variant;
            }
            if ((i10 & 4) != 0) {
                str3 = family.lang;
            }
            if ((i10 & 8) != 0) {
                map = family.fonts;
            }
            return family.copy(str, str2, str3, map);
        }

        public final String component1() {
            return this.name;
        }

        public final String component2() {
            return this.variant;
        }

        public final String component3() {
            return this.lang;
        }

        @NotNull
        public final Map<Weight, List<Font>> component4() {
            return this.fonts;
        }

        @NotNull
        public final Family copy(String str, String str2, String str3, @NotNull Map<Weight, ? extends List<Font>> fonts) {
            Intrinsics.checkNotNullParameter(fonts, "fonts");
            return new Family(str, str2, str3, fonts);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Family) {
                Family family = (Family) obj;
                return Intrinsics.areEqual(this.name, family.name) && Intrinsics.areEqual(this.variant, family.variant) && Intrinsics.areEqual(this.lang, family.lang) && Intrinsics.areEqual(this.fonts, family.fonts);
            }
            return false;
        }

        @NotNull
        public final Map<Weight, List<Font>> getFonts() {
            return this.fonts;
        }

        public final String getLang() {
            return this.lang;
        }

        public final String getName() {
            return this.name;
        }

        public final String getVariant() {
            return this.variant;
        }

        public int hashCode() {
            String str = this.name;
            int hashCode = (str == null ? 0 : str.hashCode()) * 31;
            String str2 = this.variant;
            int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
            String str3 = this.lang;
            return ((hashCode2 + (str3 != null ? str3.hashCode() : 0)) * 31) + this.fonts.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.variant;
            String str3 = this.lang;
            Map<Weight, List<Font>> map = this.fonts;
            return "Family(name=" + str + ", variant=" + str2 + ", lang=" + str3 + ", fonts=" + map + ")";
        }

        public /* synthetic */ Family(String str, String str2, String str3, Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, map);
        }
    }

    @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0017\n\u0002\u0010\u000b\n\u0002\b\u0005\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0001'BQ\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\b\b\u0002\u0010\n\u001a\u00020\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0005¢\u0006\u0002\u0010\u000eJ\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÆ\u0003J\u0011\u0010\u001d\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\bHÆ\u0003J\t\u0010\u001e\u001a\u00020\u000bHÆ\u0003J\u000b\u0010\u001f\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000b\u0010 \u001a\u0004\u0018\u00010\u0005HÆ\u0003J[\u0010!\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b2\b\b\u0002\u0010\n\u001a\u00020\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010\"\u001a\u00020#2\b\u0010$\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010%\u001a\u00020\u000bHÖ\u0001J\t\u0010&\u001a\u00020\u0005HÖ\u0001R\u0019\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012R\u0013\u0010\f\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0012R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0012R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019¨\u0006("}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$Font;", "", "weight", "Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "style", "", StackTraceHelper.NAME_KEY, "axis", "", "Lapp/rive/runtime/kotlin/fonts/Fonts$Axis;", "ttcIndex", "", "postScriptName", "fallbackFor", "(Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;ILjava/lang/String;Ljava/lang/String;)V", "getAxis", "()Ljava/util/List;", "getFallbackFor", "()Ljava/lang/String;", "getName", "getPostScriptName", "getStyle", "getTtcIndex", "()I", "getWeight", "()Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "equals", "", "other", "hashCode", "toString", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Font {
        @NotNull
        public static final String STYLE_ITALIC = "italic";
        @NotNull
        public static final String STYLE_NORMAL = "normal";
        private final List<Axis> axis;
        private final String fallbackFor;
        @NotNull
        private final String name;
        private final String postScriptName;
        @NotNull
        private final String style;
        private final int ttcIndex;
        @NotNull
        private final Weight weight;
        @NotNull
        public static final Companion Companion = new Companion(null);
        public static final int $stable = 8;

        @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/Fonts$Font$Companion;", "", "()V", "STYLE_ITALIC", "", "STYLE_NORMAL", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        public Font(@NotNull Weight weight, @NotNull String style, @NotNull String name, List<Axis> list, int i10, String str, String str2) {
            Intrinsics.checkNotNullParameter(weight, "weight");
            Intrinsics.checkNotNullParameter(style, "style");
            Intrinsics.checkNotNullParameter(name, "name");
            this.weight = weight;
            this.style = style;
            this.name = name;
            this.axis = list;
            this.ttcIndex = i10;
            this.postScriptName = str;
            this.fallbackFor = str2;
        }

        public static /* synthetic */ Font copy$default(Font font, Weight weight, String str, String str2, List list, int i10, String str3, String str4, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                weight = font.weight;
            }
            if ((i11 & 2) != 0) {
                str = font.style;
            }
            if ((i11 & 4) != 0) {
                str2 = font.name;
            }
            List<Axis> list2 = list;
            if ((i11 & 8) != 0) {
                list2 = font.axis;
            }
            if ((i11 & 16) != 0) {
                i10 = font.ttcIndex;
            }
            if ((i11 & 32) != 0) {
                str3 = font.postScriptName;
            }
            if ((i11 & 64) != 0) {
                str4 = font.fallbackFor;
            }
            String str5 = str3;
            String str6 = str4;
            int i12 = i10;
            String str7 = str2;
            return font.copy(weight, str, str7, list2, i12, str5, str6);
        }

        @NotNull
        public final Weight component1() {
            return this.weight;
        }

        @NotNull
        public final String component2() {
            return this.style;
        }

        @NotNull
        public final String component3() {
            return this.name;
        }

        public final List<Axis> component4() {
            return this.axis;
        }

        public final int component5() {
            return this.ttcIndex;
        }

        public final String component6() {
            return this.postScriptName;
        }

        public final String component7() {
            return this.fallbackFor;
        }

        @NotNull
        public final Font copy(@NotNull Weight weight, @NotNull String style, @NotNull String name, List<Axis> list, int i10, String str, String str2) {
            Intrinsics.checkNotNullParameter(weight, "weight");
            Intrinsics.checkNotNullParameter(style, "style");
            Intrinsics.checkNotNullParameter(name, "name");
            return new Font(weight, style, name, list, i10, str, str2);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Font) {
                Font font = (Font) obj;
                return Intrinsics.areEqual(this.weight, font.weight) && Intrinsics.areEqual(this.style, font.style) && Intrinsics.areEqual(this.name, font.name) && Intrinsics.areEqual(this.axis, font.axis) && this.ttcIndex == font.ttcIndex && Intrinsics.areEqual(this.postScriptName, font.postScriptName) && Intrinsics.areEqual(this.fallbackFor, font.fallbackFor);
            }
            return false;
        }

        public final List<Axis> getAxis() {
            return this.axis;
        }

        public final String getFallbackFor() {
            return this.fallbackFor;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        public final String getPostScriptName() {
            return this.postScriptName;
        }

        @NotNull
        public final String getStyle() {
            return this.style;
        }

        public final int getTtcIndex() {
            return this.ttcIndex;
        }

        @NotNull
        public final Weight getWeight() {
            return this.weight;
        }

        public int hashCode() {
            int hashCode = ((((this.weight.hashCode() * 31) + this.style.hashCode()) * 31) + this.name.hashCode()) * 31;
            List<Axis> list = this.axis;
            int hashCode2 = (((hashCode + (list == null ? 0 : list.hashCode())) * 31) + Integer.hashCode(this.ttcIndex)) * 31;
            String str = this.postScriptName;
            int hashCode3 = (hashCode2 + (str == null ? 0 : str.hashCode())) * 31;
            String str2 = this.fallbackFor;
            return hashCode3 + (str2 != null ? str2.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            Weight weight = this.weight;
            String str = this.style;
            String str2 = this.name;
            List<Axis> list = this.axis;
            int i10 = this.ttcIndex;
            String str3 = this.postScriptName;
            String str4 = this.fallbackFor;
            return "Font(weight=" + weight + ", style=" + str + ", name=" + str2 + ", axis=" + list + ", ttcIndex=" + i10 + ", postScriptName=" + str3 + ", fallbackFor=" + str4 + ")";
        }

        public /* synthetic */ Font(Weight weight, String str, String str2, List list, int i10, String str3, String str4, int i11, DefaultConstructorMarker defaultConstructorMarker) {
            this(weight, str, str2, (i11 & 8) != 0 ? null : list, (i11 & 16) != 0 ? 0 : i10, (i11 & 32) != 0 ? null : str3, (i11 & 64) != 0 ? null : str4);
        }
    }
}
