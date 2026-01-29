package com.discord.fonts;

import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Typeface;
import app.rive.runtime.kotlin.fonts.Fonts;
import com.facebook.react.views.text.ReactFontManager;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import pr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u001f\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0081\u0002\u0018\u0000 *2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001*B+\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\nJ\u000e\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020)R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010j\u0002\b\u0012j\u0002\b\u0013j\u0002\b\u0014j\u0002\b\u0015j\u0002\b\u0016j\u0002\b\u0017j\u0002\b\u0018j\u0002\b\u0019j\u0002\b\u001aj\u0002\b\u001bj\u0002\b\u001cj\u0002\b\u001dj\u0002\b\u001ej\u0002\b\u001fj\u0002\b j\u0002\b!j\u0002\b\"j\u0002\b#j\u0002\b$j\u0002\b%¨\u0006+"}, d2 = {"Lcom/discord/fonts/DiscordFont;", "", "rawName", "", "weight", "", Fonts.Font.STYLE_ITALIC, "", "monospace", "<init>", "(Ljava/lang/String;ILjava/lang/String;IZZ)V", "getRawName", "()Ljava/lang/String;", "getWeight", "()I", "getItalic", "()Z", "getMonospace", "CodeNormal", "CodeBold", "PrimaryNormal", "PrimaryNormalItalic", "PrimaryMedium", "PrimaryMediumItalic", "PrimarySemibold", "PrimarySemiboldItalic", "PrimaryBold", "PrimaryBoldItalic", "PrimaryExtraBold", "PrimaryExtraBoldItalic", "DisplayExtraBold", "ChicleNormal", "CherryBombOneNormal", "MuseoModernoMedium", "NeoCastelNormal", "PixelifySansNormal", "SinistreNormal", "ZillaSlabSemibold", "typeface", "Landroid/graphics/Typeface;", "context", "Landroid/content/Context;", "Companion", "fonts_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DiscordFont {
    private static final /* synthetic */ EnumEntries $ENTRIES;
    private static final /* synthetic */ DiscordFont[] $VALUES;
    @NotNull
    public static final Companion Companion;
    @NotNull
    private static final ConcurrentHashMap<DiscordFont, Typeface> typefaces;
    private final boolean italic;
    private final boolean monospace;
    @NotNull
    private final String rawName;
    private final int weight;
    public static final DiscordFont CodeNormal = new DiscordFont("CodeNormal", 0, "ggmono-Normal, SourceCodePro-Normal", ReactFontManager.TypefaceStyle.NORMAL, false, true);
    public static final DiscordFont CodeBold = new DiscordFont("CodeBold", 1, "ggmono-Bold, SourceCodePro-Bold", ReactFontManager.TypefaceStyle.BOLD, false, true);
    public static final DiscordFont PrimaryNormal = new DiscordFont("PrimaryNormal", 2, "ggsans-Normal, NotoSans-Normal", ReactFontManager.TypefaceStyle.NORMAL, false, false, 8, null);
    public static final DiscordFont PrimaryNormalItalic = new DiscordFont("PrimaryNormalItalic", 3, "ggsans-NormalItalic, NotoSans-NormalItalic", ReactFontManager.TypefaceStyle.NORMAL, true, false, 8, null);
    public static final DiscordFont PrimaryMedium = new DiscordFont("PrimaryMedium", 4, "ggsans-Medium, NotoSans-Medium", 500, false, false, 8, null);
    public static final DiscordFont PrimaryMediumItalic = new DiscordFont("PrimaryMediumItalic", 5, "ggsans-MediumItalic, NotoSans-MediumItalic", 500, true, false, 8, null);
    public static final DiscordFont PrimarySemibold = new DiscordFont("PrimarySemibold", 6, "ggsans-Semibold, NotoSans-Semibold", 600, false, false, 8, null);
    public static final DiscordFont PrimarySemiboldItalic = new DiscordFont("PrimarySemiboldItalic", 7, "ggsans-SemiboldItalic, NotoSans-SemiboldItalic", 600, true, false, 8, null);
    public static final DiscordFont PrimaryBold = new DiscordFont("PrimaryBold", 8, "ggsans-Bold, NotoSans-Bold", ReactFontManager.TypefaceStyle.BOLD, false, false, 8, null);
    public static final DiscordFont PrimaryBoldItalic = new DiscordFont("PrimaryBoldItalic", 9, "ggsans-BoldItalic, NotoSans-BoldItalic", ReactFontManager.TypefaceStyle.BOLD, true, false, 8, null);
    public static final DiscordFont PrimaryExtraBold = new DiscordFont("PrimaryExtraBold", 10, "ggsans-ExtraBold, NotoSans-ExtraBold", 800, false, false, 8, null);
    public static final DiscordFont PrimaryExtraBoldItalic = new DiscordFont("PrimaryExtraBoldItalic", 11, "ggsans-ExtraBoldItalic, NotoSans-ExtraBoldItalic", 800, true, false, 8, null);
    public static final DiscordFont DisplayExtraBold = new DiscordFont("DisplayExtraBold", 12, "ABCGintoNord-ExtraBold, ggsans-ExtraBold, NotoSans-ExtraBold", 800, false, false, 8, null);
    public static final DiscordFont ChicleNormal = new DiscordFont("ChicleNormal", 13, "Chicle-Normal, ggsans-Normal, NotoSans-Normal", ReactFontManager.TypefaceStyle.NORMAL, false, false, 8, null);
    public static final DiscordFont CherryBombOneNormal = new DiscordFont("CherryBombOneNormal", 14, "CherryBombOne-Normal, ggsans-Normal, NotoSans-Normal", ReactFontManager.TypefaceStyle.NORMAL, false, false, 8, null);
    public static final DiscordFont MuseoModernoMedium = new DiscordFont("MuseoModernoMedium", 15, "MuseoModerno-Medium, ggsans-Normal, NotoSans-Normal", 500, false, false, 8, null);
    public static final DiscordFont NeoCastelNormal = new DiscordFont("NeoCastelNormal", 16, "NeoCastel-Normal, ggsans-Normal, NotoSans-Normal", ReactFontManager.TypefaceStyle.NORMAL, false, false, 8, null);
    public static final DiscordFont PixelifySansNormal = new DiscordFont("PixelifySansNormal", 17, "PixelifySans-Normal, ggsans-Normal, NotoSans-Normal", ReactFontManager.TypefaceStyle.NORMAL, false, false, 8, null);
    public static final DiscordFont SinistreNormal = new DiscordFont("SinistreNormal", 18, "Sinistre-Normal, ggsans-Normal, NotoSans-Normal", ReactFontManager.TypefaceStyle.NORMAL, false, false, 8, null);
    public static final DiscordFont ZillaSlabSemibold = new DiscordFont("ZillaSlabSemibold", 19, "ZillaSlab-SemiBold, ggsans-Normal, NotoSans-Normal", 600, false, false, 8, null);

    @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u0006H\u0002J\u0012\u0010\f\u001a\u0004\u0018\u00010\u00062\b\u0010\r\u001a\u0004\u0018\u00010\u0007J\"\u0010\u000e\u001a\u0004\u0018\u00010\u00062\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u00122\b\b\u0002\u0010\u0013\u001a\u00020\u0012R\u001a\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/discord/fonts/DiscordFont$Companion;", "", "<init>", "()V", "typefaces", "Ljava/util/concurrent/ConcurrentHashMap;", "Lcom/discord/fonts/DiscordFont;", "Landroid/graphics/Typeface;", "getFontFromRN", "context", "Landroid/content/Context;", "font", "fromTypeface", "typeface", "findByStyle", "weight", "", Fonts.Font.STYLE_ITALIC, "", "monospace", "fonts_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nDiscordFont.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DiscordFont.kt\ncom/discord/fonts/DiscordFont$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,157:1\n1#2:158\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ DiscordFont findByStyle$default(Companion companion, int i10, boolean z10, boolean z11, int i11, Object obj) {
            if ((i11 & 4) != 0) {
                z11 = false;
            }
            return companion.findByStyle(i10, z10, z11);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Typeface getFontFromRN(Context context, DiscordFont discordFont) {
            ReactFontManager companion = ReactFontManager.Companion.getInstance();
            String rawName = discordFont.getRawName();
            AssetManager assets = context.getAssets();
            Intrinsics.checkNotNullExpressionValue(assets, "getAssets(...)");
            Typeface typeface = companion.getTypeface(rawName, 0, assets);
            if (!Intrinsics.areEqual(typeface, Typeface.DEFAULT)) {
                return typeface;
            }
            throw new IllegalStateException(("Cannot find typeface " + typeface + ".rawName").toString());
        }

        public final DiscordFont findByStyle(int i10, boolean z10, boolean z11) {
            Object obj;
            Iterator<E> it = DiscordFont.getEntries().iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    DiscordFont discordFont = (DiscordFont) obj;
                    if (discordFont.getWeight() == i10 && discordFont.getItalic() == z10 && discordFont.getMonospace() == z11) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            return (DiscordFont) obj;
        }

        public final DiscordFont fromTypeface(Typeface typeface) {
            Object obj;
            if (typeface == null) {
                return null;
            }
            Set entrySet = DiscordFont.typefaces.entrySet();
            Intrinsics.checkNotNullExpressionValue(entrySet, "<get-entries>(...)");
            Iterator it = entrySet.iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (Intrinsics.areEqual(((Map.Entry) obj).getValue(), typeface)) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            Map.Entry entry = (Map.Entry) obj;
            if (entry == null) {
                return null;
            }
            return (DiscordFont) entry.getKey();
        }

        private Companion() {
        }
    }

    private static final /* synthetic */ DiscordFont[] $values() {
        return new DiscordFont[]{CodeNormal, CodeBold, PrimaryNormal, PrimaryNormalItalic, PrimaryMedium, PrimaryMediumItalic, PrimarySemibold, PrimarySemiboldItalic, PrimaryBold, PrimaryBoldItalic, PrimaryExtraBold, PrimaryExtraBoldItalic, DisplayExtraBold, ChicleNormal, CherryBombOneNormal, MuseoModernoMedium, NeoCastelNormal, PixelifySansNormal, SinistreNormal, ZillaSlabSemibold};
    }

    static {
        DiscordFont[] $values = $values();
        $VALUES = $values;
        $ENTRIES = a.a($values);
        Companion = new Companion(null);
        typefaces = new ConcurrentHashMap<>();
    }

    private DiscordFont(String str, int i10, String str2, int i11, boolean z10, boolean z11) {
        this.rawName = str2;
        this.weight = i11;
        this.italic = z10;
        this.monospace = z11;
    }

    @NotNull
    public static EnumEntries getEntries() {
        return $ENTRIES;
    }

    public static DiscordFont valueOf(String str) {
        return (DiscordFont) Enum.valueOf(DiscordFont.class, str);
    }

    public static DiscordFont[] values() {
        return (DiscordFont[]) $VALUES.clone();
    }

    public final boolean getItalic() {
        return this.italic;
    }

    public final boolean getMonospace() {
        return this.monospace;
    }

    @NotNull
    public final String getRawName() {
        return this.rawName;
    }

    public final int getWeight() {
        return this.weight;
    }

    @NotNull
    public final Typeface typeface(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        ConcurrentHashMap<DiscordFont, Typeface> concurrentHashMap = typefaces;
        if (concurrentHashMap.get(this) == null) {
            Typeface fontFromRN = Companion.getFontFromRN(context, this);
            concurrentHashMap.put(this, fontFromRN);
            return fontFromRN;
        }
        Typeface typeface = concurrentHashMap.get(this);
        Intrinsics.checkNotNull(typeface);
        return typeface;
    }

    /* synthetic */ DiscordFont(String str, int i10, String str2, int i11, boolean z10, boolean z11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10, str2, i11, z10, (i12 & 8) != 0 ? false : z11);
    }
}
