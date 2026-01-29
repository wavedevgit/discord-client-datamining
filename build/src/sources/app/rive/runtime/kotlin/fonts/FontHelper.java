package app.rive.runtime.kotlin.fonts;

import android.util.Log;
import app.rive.runtime.kotlin.fonts.Fonts;
import ir.c;
import java.io.File;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.d;
import kotlin.sequences.Sequence;
import kotlin.sequences.k;
import kotlin.text.StringsKt;
import lr.a;
import org.jetbrains.annotations.NotNull;
import tr.j;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0007\u0018\u0000 \u00032\u00020\u0001:\u0001\u0003B\u0005¢\u0006\u0002\u0010\u0002¨\u0006\u0004"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/FontHelper;", "", "()V", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FontHelper {
    public static final int $stable = 0;
    @NotNull
    private static final String TAG = "FontHelper";
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final AtomicReference<Map<String, Fonts.Family>> familiesMapCache = new AtomicReference<>(null);
    @NotNull
    private static final AtomicReference<List<Fonts.Family>> familiesListCache = new AtomicReference<>(null);

    @Metadata(d1 = {"\u0000`\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010#\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0012\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J8\u0010\u000b\u001a\u00020\f2\f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\b0\u00072\f\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00100\u000f2\b\u0010\u0011\u001a\u0004\u0018\u00010\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0004H\u0002J\u001c\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\b0\u00072\f\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\b0\u0007H\u0002J(\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\n2\u0012\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\nH\u0002J+\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00100\u00072\f\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\b0\u00072\b\b\u0002\u0010\u0018\u001a\u00020\u0019H\u0000¢\u0006\u0002\b\u001aJ1\u0010\u0016\u001a\b\u0012\u0004\u0012\u00020\u00100\u00072\u0012\u0010\u0015\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\n2\b\b\u0002\u0010\u0018\u001a\u00020\u0019H\u0000¢\u0006\u0002\b\u001aJ\u0014\u0010\u001b\u001a\u0004\u0018\u00010\u00102\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0019J\u0014\u0010\u001c\u001a\u0004\u0018\u00010\u001d2\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0019J\u0016\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\u00100\u00072\b\b\u0002\u0010\u0018\u001a\u00020\u0019J\u0010\u0010\u001f\u001a\u0004\u0018\u00010\u001d2\u0006\u0010 \u001a\u00020\u0010J\u0010\u0010!\u001a\u0004\u0018\u00010\"2\u0006\u0010 \u001a\u00020\u0010J\f\u0010#\u001a\b\u0012\u0004\u0012\u00020\b0\u0007J\u0014\u0010$\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\nH\u0007J\u0013\u0010%\u001a\b\u0012\u0004\u0012\u00020\b0\u0007H\u0000¢\u0006\u0002\b&J\u0019\u0010'\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\nH\u0000¢\u0006\u0002\b(J:\u0010)\u001a\b\u0012\u0004\u0012\u00020\u00100\u00072\f\u0010*\u001a\b\u0012\u0004\u0012\u00020\b0+2\b\u0010,\u001a\u0004\u0018\u00010\u00042\b\u0010-\u001a\u0004\u0018\u00010\u00122\b\u0010.\u001a\u0004\u0018\u00010\u0004H\u0002J\b\u0010/\u001a\u00020\fH\u0007R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000R\u001a\u0010\u0005\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\b0\u00070\u0006X\u0082\u0004¢\u0006\u0002\n\u0000R \u0010\t\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\b0\n0\u0006X\u0082\u0004¢\u0006\u0002\n\u0000¨\u00060"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/FontHelper$Companion;", "", "()V", "TAG", "", "familiesListCache", "Ljava/util/concurrent/atomic/AtomicReference;", "", "Lapp/rive/runtime/kotlin/fonts/Fonts$Family;", "familiesMapCache", "", "filterFamilies", "", "families", "resultSet", "", "Lapp/rive/runtime/kotlin/fonts/Fonts$Font;", "weight", "Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "style", "filterNonExistingFonts", "fontFamilies", "findMatches", "fontFamiliesList", "opts", "Lapp/rive/runtime/kotlin/fonts/Fonts$FontOpts;", "findMatches$kotlin_release", "getFallbackFont", "getFallbackFontBytes", "", "getFallbackFonts", "getFontBytes", "font", "getFontFile", "Ljava/io/File;", "getSystemFontList", "getSystemFonts", "loadFontList", "loadFontList$kotlin_release", "loadFonts", "loadFonts$kotlin_release", "processMatchingFamilies", "matchingFamiliesSequence", "Lkotlin/sequences/Sequence;", "requestedLang", "requestedWeight", "requestedStyle", "resetForTesting", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nFontHelpers.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FontHelpers.kt\napp/rive/runtime/kotlin/fonts/FontHelper$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Sequences.kt\nkotlin/sequences/SequencesKt___SequencesKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 5 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,1218:1\n1#2:1219\n1#2:1273\n183#3,2:1220\n183#3,2:1222\n1317#3,2:1225\n183#3,2:1240\n1863#4:1224\n1864#4:1227\n3193#4,10:1228\n1062#4:1238\n1062#4:1239\n1202#4,2:1242\n1230#4,4:1244\n1611#4,9:1248\n1863#4:1257\n1246#4,2:1260\n774#4:1262\n865#4,2:1263\n1249#4:1265\n1864#4:1274\n1620#4:1275\n462#5:1258\n412#5:1259\n503#5,7:1266\n*S KotlinDebug\n*F\n+ 1 FontHelpers.kt\napp/rive/runtime/kotlin/fonts/FontHelper$Companion\n*L\n455#1:1273\n183#1:1220,2\n213#1:1222,2\n292#1:1225,2\n419#1:1240,2\n283#1:1224\n283#1:1227\n378#1:1228,10\n384#1:1238\n386#1:1239\n443#1:1242,2\n443#1:1244,4\n455#1:1248,9\n455#1:1257\n457#1:1260,2\n458#1:1262\n458#1:1263,2\n457#1:1265\n455#1:1274\n455#1:1275\n457#1:1258\n457#1:1259\n460#1:1266,7\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final void filterFamilies(List<Fonts.Family> list, Set<Fonts.Font> set, Fonts.Weight weight, String str) {
            Sequence<Fonts.Font> j10;
            for (Fonts.Family family : list) {
                if (weight == null) {
                    j10 = k.p(CollectionsKt.b0(family.getFonts().values()));
                } else {
                    List<Fonts.Font> list2 = family.getFonts().get(weight);
                    if (list2 == null || (j10 = CollectionsKt.b0(list2)) == null) {
                        j10 = k.j();
                    }
                }
                for (Fonts.Font font : j10) {
                    if (str == null || StringsKt.k0(str) || Intrinsics.areEqual(font.getStyle(), str)) {
                        set.add(font);
                    }
                }
            }
        }

        private final Map<String, Fonts.Family> filterNonExistingFonts(Map<String, Fonts.Family> map) {
            String name;
            if (map.isEmpty()) {
                return map;
            }
            List<Fonts.Family> filterNonExistingFonts = filterNonExistingFonts(CollectionsKt.h1(map.values()));
            LinkedHashMap linkedHashMap = new LinkedHashMap(d.d(o0.e(CollectionsKt.w(filterNonExistingFonts, 10)), 16));
            for (Object obj : filterNonExistingFonts) {
                Fonts.Family family = (Fonts.Family) obj;
                String name2 = family.getName();
                if (name2 != null && name2.length() != 0) {
                    name = family.getName();
                } else {
                    name = ((Fonts.Font) CollectionsKt.o0(CollectionsKt.y(family.getFonts().values()))).getName();
                }
                linkedHashMap.put(name, obj);
            }
            return linkedHashMap;
        }

        public static /* synthetic */ List findMatches$kotlin_release$default(Companion companion, Map map, Fonts.FontOpts fontOpts, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                fontOpts = Fonts.FontOpts.Companion.getDEFAULT();
            }
            return companion.findMatches$kotlin_release(map, fontOpts);
        }

        public static /* synthetic */ Fonts.Font getFallbackFont$default(Companion companion, Fonts.FontOpts fontOpts, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                fontOpts = null;
            }
            return companion.getFallbackFont(fontOpts);
        }

        public static /* synthetic */ byte[] getFallbackFontBytes$default(Companion companion, Fonts.FontOpts fontOpts, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                fontOpts = null;
            }
            return companion.getFallbackFontBytes(fontOpts);
        }

        public static /* synthetic */ List getFallbackFonts$default(Companion companion, Fonts.FontOpts fontOpts, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                fontOpts = Fonts.FontOpts.Companion.getDEFAULT();
            }
            return companion.getFallbackFonts(fontOpts);
        }

        private final List<Fonts.Font> processMatchingFamilies(Sequence<Fonts.Family> sequence, final String str, Fonts.Weight weight, String str2) {
            boolean z10;
            ArrayList arrayList = new ArrayList();
            ArrayList arrayList2 = new ArrayList();
            for (Object obj : k.Y(sequence)) {
                String name = ((Fonts.Family) obj).getName();
                if (name != null && !StringsKt.k0(name)) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                if (!z10) {
                    arrayList.add(obj);
                } else {
                    arrayList2.add(obj);
                }
            }
            Pair pair = new Pair(arrayList, arrayList2);
            List<Fonts.Family> W0 = CollectionsKt.W0((List) pair.a(), new Comparator() { // from class: app.rive.runtime.kotlin.fonts.FontHelper$Companion$processMatchingFamilies$$inlined$sortedByDescending$1
                @Override // java.util.Comparator
                public final int compare(T t10, T t11) {
                    return a.d(Boolean.valueOf(Intrinsics.areEqual(((Fonts.Family) t11).getLang(), str)), Boolean.valueOf(Intrinsics.areEqual(((Fonts.Family) t10).getLang(), str)));
                }
            });
            List<Fonts.Family> W02 = CollectionsKt.W0((List) pair.b(), new Comparator() { // from class: app.rive.runtime.kotlin.fonts.FontHelper$Companion$processMatchingFamilies$$inlined$sortedByDescending$2
                @Override // java.util.Comparator
                public final int compare(T t10, T t11) {
                    return a.d(Boolean.valueOf(Intrinsics.areEqual(((Fonts.Family) t11).getLang(), str)), Boolean.valueOf(Intrinsics.areEqual(((Fonts.Family) t10).getLang(), str)));
                }
            });
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            filterFamilies(W0, linkedHashSet, weight, str2);
            filterFamilies(W02, linkedHashSet, weight, str2);
            return CollectionsKt.h1(linkedHashSet);
        }

        @NotNull
        public final List<Fonts.Font> findMatches$kotlin_release(@NotNull Map<String, Fonts.Family> fontFamilies, @NotNull Fonts.FontOpts opts) {
            Intrinsics.checkNotNullParameter(fontFamilies, "fontFamilies");
            Intrinsics.checkNotNullParameter(opts, "opts");
            final String familyName = opts.getFamilyName();
            final String lang = opts.getLang();
            return processMatchingFamilies(k.R(k.F(o0.z(fontFamilies), new Function1<Map.Entry<? extends String, ? extends Fonts.Family>, Boolean>() { // from class: app.rive.runtime.kotlin.fonts.FontHelper$Companion$findMatches$matchingFamiliesSequence$1
                /* JADX INFO: Access modifiers changed from: package-private */
                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                {
                    super(1);
                }

                @Override // kotlin.jvm.functions.Function1
                @NotNull
                public final Boolean invoke(@NotNull Map.Entry<String, Fonts.Family> entry) {
                    Intrinsics.checkNotNullParameter(entry, "<name for destructuring parameter 0>");
                    Fonts.Family value = entry.getValue();
                    boolean z10 = true;
                    if ((familyName != null && !StringsKt.A(value.getName(), familyName, true)) || (lang != null && !Intrinsics.areEqual(value.getLang(), lang))) {
                        z10 = false;
                    }
                    return Boolean.valueOf(z10);
                }
            }), new Function1<Map.Entry<? extends String, ? extends Fonts.Family>, Fonts.Family>() { // from class: app.rive.runtime.kotlin.fonts.FontHelper$Companion$findMatches$matchingFamiliesSequence$2
                @Override // kotlin.jvm.functions.Function1
                @NotNull
                public final Fonts.Family invoke(@NotNull Map.Entry<String, Fonts.Family> it) {
                    Intrinsics.checkNotNullParameter(it, "it");
                    return it.getValue();
                }
            }), opts.getLang(), opts.getWeight(), opts.getStyle());
        }

        public final Fonts.Font getFallbackFont(Fonts.FontOpts fontOpts) {
            if (fontOpts == null) {
                fontOpts = Fonts.FontOpts.Companion.getDEFAULT();
            }
            return (Fonts.Font) CollectionsKt.firstOrNull(getFallbackFonts(fontOpts));
        }

        public final byte[] getFallbackFontBytes(Fonts.FontOpts fontOpts) {
            if (fontOpts == null) {
                fontOpts = Fonts.FontOpts.Companion.getDEFAULT();
            }
            Fonts.Font fallbackFont = getFallbackFont(fontOpts);
            if (fallbackFont != null) {
                return FontHelper.Companion.getFontBytes(fallbackFont);
            }
            return null;
        }

        @NotNull
        public final List<Fonts.Font> getFallbackFonts(@NotNull Fonts.FontOpts opts) {
            Intrinsics.checkNotNullParameter(opts, "opts");
            List<Fonts.Family> systemFontList = getSystemFontList();
            if (systemFontList.isEmpty()) {
                Log.e(FontHelper.TAG, "getFallbackFonts: no system font found");
                return CollectionsKt.l();
            }
            return findMatches$kotlin_release(systemFontList, opts);
        }

        public final byte[] getFontBytes(@NotNull Fonts.Font font) {
            Intrinsics.checkNotNullParameter(font, "font");
            File fontFile = getFontFile(font);
            if (fontFile != null) {
                return j.h(fontFile);
            }
            return null;
        }

        public final File getFontFile(@NotNull final Fonts.Font font) {
            Object obj;
            Intrinsics.checkNotNullParameter(font, "font");
            Iterator it = k.R(CollectionsKt.b0(SystemFontsParser.Companion.getSYSTEM_FONTS_PATHS$kotlin_release()), new Function1<String, File>() { // from class: app.rive.runtime.kotlin.fonts.FontHelper$Companion$getFontFile$1
                /* JADX INFO: Access modifiers changed from: package-private */
                {
                    super(1);
                }

                @Override // kotlin.jvm.functions.Function1
                @NotNull
                public final File invoke(@NotNull String basePath) {
                    Intrinsics.checkNotNullParameter(basePath, "basePath");
                    return new File(basePath, StringsKt.k1(Fonts.Font.this.getName()).toString());
                }
            }).iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (((File) obj).exists()) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            return (File) obj;
        }

        @NotNull
        public final List<Fonts.Family> getSystemFontList() {
            List<Fonts.Family> list;
            List<Fonts.Family> list2 = (List) FontHelper.familiesListCache.get();
            if (list2 != null) {
                return list2;
            }
            synchronized (this) {
                try {
                    list = (List) FontHelper.familiesListCache.get();
                    if (list == null) {
                        list = FontHelper.Companion.loadFontList$kotlin_release();
                    } else {
                        Intrinsics.checkNotNull(list);
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return list;
        }

        @c
        @NotNull
        public final Map<String, Fonts.Family> getSystemFonts() {
            Map<String, Fonts.Family> map;
            Map<String, Fonts.Family> map2 = (Map) FontHelper.familiesMapCache.get();
            if (map2 != null) {
                return map2;
            }
            synchronized (this) {
                try {
                    map = (Map) FontHelper.familiesMapCache.get();
                    if (map == null) {
                        map = FontHelper.Companion.loadFonts$kotlin_release();
                    } else {
                        Intrinsics.checkNotNull(map);
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return map;
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x0062, code lost:
            if (r1 != null) goto L14;
         */
        @org.jetbrains.annotations.NotNull
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.util.List<app.rive.runtime.kotlin.fonts.Fonts.Family> loadFontList$kotlin_release() {
            /*
                r7 = this;
                java.lang.String r0 = "/system/etc/system_fonts.xml"
                java.lang.String r1 = "/system/etc/system_fallback.xml"
                java.lang.String r2 = "/system/etc/fonts.xml"
                java.lang.String[] r0 = new java.lang.String[]{r2, r0, r1}
                kotlin.sequences.Sequence r0 = kotlin.sequences.k.v(r0)
                app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1 r1 = new kotlin.jvm.functions.Function1<java.lang.String, java.io.File>() { // from class: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1
                    static {
                        /*
                            app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1 r0 = new app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1
                            r0.<init>()
                            
                            // error: 0x0005: SPUT  (r0 I:app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1) app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1.INSTANCE app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1
                            return
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1.<clinit>():void");
                    }

                    {
                        /*
                            r1 = this;
                            r0 = 1
                            r1.<init>(r0)
                            return
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1.<init>():void");
                    }

                    @Override // kotlin.jvm.functions.Function1
                    @org.jetbrains.annotations.NotNull
                    public final java.io.File invoke(@org.jetbrains.annotations.NotNull java.lang.String r2) {
                        /*
                            r1 = this;
                            java.lang.String r0 = "pathStr"
                            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
                            java.io.File r0 = new java.io.File
                            r0.<init>(r2)
                            return r0
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1.invoke(java.lang.String):java.io.File");
                    }

                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ java.lang.Object invoke(java.lang.Object r1) {
                        /*
                            r0 = this;
                            java.lang.String r1 = (java.lang.String) r1
                            java.io.File r1 = r0.invoke(r1)
                            return r1
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFontList$validPath$1.invoke(java.lang.Object):java.lang.Object");
                    }
                }
                kotlin.sequences.Sequence r0 = kotlin.sequences.k.R(r0, r1)
                java.util.Iterator r0 = r0.iterator()
            L18:
                boolean r1 = r0.hasNext()
                r2 = 0
                if (r1 == 0) goto L2d
                java.lang.Object r1 = r0.next()
                r3 = r1
                java.io.File r3 = (java.io.File) r3
                boolean r3 = r3.exists()
                if (r3 == 0) goto L18
                goto L2e
            L2d:
                r1 = r2
            L2e:
                java.io.File r1 = (java.io.File) r1
                java.lang.String r0 = "FontHelper"
                if (r1 == 0) goto L6b
                java.io.FileInputStream r3 = new java.io.FileInputStream
                r3.<init>(r1)
                app.rive.runtime.kotlin.fonts.SystemFontsParser$Companion r1 = app.rive.runtime.kotlin.fonts.SystemFontsParser.Companion     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
                java.util.List r1 = r1.parseFontsXML$kotlin_release(r3)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
                goto L5f
            L40:
                r0 = move-exception
                goto L65
            L42:
                r1 = move-exception
                java.lang.String r4 = r1.getMessage()     // Catch: java.lang.Throwable -> L40
                java.lang.StringBuilder r5 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L40
                r5.<init>()     // Catch: java.lang.Throwable -> L40
                java.lang.String r6 = "Error parsing fonts XML: "
                r5.append(r6)     // Catch: java.lang.Throwable -> L40
                r5.append(r4)     // Catch: java.lang.Throwable -> L40
                java.lang.String r4 = r5.toString()     // Catch: java.lang.Throwable -> L40
                android.util.Log.e(r0, r4, r1)     // Catch: java.lang.Throwable -> L40
                java.util.List r1 = kotlin.collections.CollectionsKt.l()     // Catch: java.lang.Throwable -> L40
            L5f:
                tr.c.a(r3, r2)
                if (r1 == 0) goto L6b
                goto L74
            L65:
                throw r0     // Catch: java.lang.Throwable -> L66
            L66:
                r1 = move-exception
                tr.c.a(r3, r0)
                throw r1
            L6b:
                java.lang.String r1 = "No valid system font XML file found at expected paths."
                android.util.Log.w(r0, r1)
                java.util.List r1 = kotlin.collections.CollectionsKt.l()
            L74:
                java.util.List r0 = r7.filterNonExistingFonts(r1)
                java.util.concurrent.atomic.AtomicReference r1 = app.rive.runtime.kotlin.fonts.FontHelper.access$getFamiliesListCache$cp()
                r1.set(r0)
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper.Companion.loadFontList$kotlin_release():java.util.List");
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x0062, code lost:
            if (r1 != null) goto L14;
         */
        @org.jetbrains.annotations.NotNull
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.util.Map<java.lang.String, app.rive.runtime.kotlin.fonts.Fonts.Family> loadFonts$kotlin_release() {
            /*
                r7 = this;
                java.lang.String r0 = "/system/etc/system_fonts.xml"
                java.lang.String r1 = "/system/etc/system_fallback.xml"
                java.lang.String r2 = "/system/etc/fonts.xml"
                java.lang.String[] r0 = new java.lang.String[]{r2, r0, r1}
                kotlin.sequences.Sequence r0 = kotlin.sequences.k.v(r0)
                app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1 r1 = new kotlin.jvm.functions.Function1<java.lang.String, java.io.File>() { // from class: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1
                    static {
                        /*
                            app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1 r0 = new app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1
                            r0.<init>()
                            
                            // error: 0x0005: SPUT  (r0 I:app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1) app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1.INSTANCE app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1
                            return
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1.<clinit>():void");
                    }

                    {
                        /*
                            r1 = this;
                            r0 = 1
                            r1.<init>(r0)
                            return
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1.<init>():void");
                    }

                    @Override // kotlin.jvm.functions.Function1
                    @org.jetbrains.annotations.NotNull
                    public final java.io.File invoke(@org.jetbrains.annotations.NotNull java.lang.String r2) {
                        /*
                            r1 = this;
                            java.lang.String r0 = "pathStr"
                            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
                            java.io.File r0 = new java.io.File
                            r0.<init>(r2)
                            return r0
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1.invoke(java.lang.String):java.io.File");
                    }

                    @Override // kotlin.jvm.functions.Function1
                    public /* bridge */ /* synthetic */ java.lang.Object invoke(java.lang.Object r1) {
                        /*
                            r0 = this;
                            java.lang.String r1 = (java.lang.String) r1
                            java.io.File r1 = r0.invoke(r1)
                            return r1
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper$Companion$loadFonts$validPath$1.invoke(java.lang.Object):java.lang.Object");
                    }
                }
                kotlin.sequences.Sequence r0 = kotlin.sequences.k.R(r0, r1)
                java.util.Iterator r0 = r0.iterator()
            L18:
                boolean r1 = r0.hasNext()
                r2 = 0
                if (r1 == 0) goto L2d
                java.lang.Object r1 = r0.next()
                r3 = r1
                java.io.File r3 = (java.io.File) r3
                boolean r3 = r3.exists()
                if (r3 == 0) goto L18
                goto L2e
            L2d:
                r1 = r2
            L2e:
                java.io.File r1 = (java.io.File) r1
                java.lang.String r0 = "FontHelper"
                if (r1 == 0) goto L6b
                java.io.FileInputStream r3 = new java.io.FileInputStream
                r3.<init>(r1)
                app.rive.runtime.kotlin.fonts.SystemFontsParser$Companion r1 = app.rive.runtime.kotlin.fonts.SystemFontsParser.Companion     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
                java.util.Map r1 = r1.parseFontsXMLMap$kotlin_release(r3)     // Catch: java.lang.Throwable -> L40 java.lang.Exception -> L42
                goto L5f
            L40:
                r0 = move-exception
                goto L65
            L42:
                r1 = move-exception
                java.lang.String r4 = r1.getMessage()     // Catch: java.lang.Throwable -> L40
                java.lang.StringBuilder r5 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L40
                r5.<init>()     // Catch: java.lang.Throwable -> L40
                java.lang.String r6 = "Error parsing fonts XML: "
                r5.append(r6)     // Catch: java.lang.Throwable -> L40
                r5.append(r4)     // Catch: java.lang.Throwable -> L40
                java.lang.String r4 = r5.toString()     // Catch: java.lang.Throwable -> L40
                android.util.Log.e(r0, r4, r1)     // Catch: java.lang.Throwable -> L40
                java.util.Map r1 = kotlin.collections.o0.i()     // Catch: java.lang.Throwable -> L40
            L5f:
                tr.c.a(r3, r2)
                if (r1 == 0) goto L6b
                goto L74
            L65:
                throw r0     // Catch: java.lang.Throwable -> L66
            L66:
                r1 = move-exception
                tr.c.a(r3, r0)
                throw r1
            L6b:
                java.lang.String r1 = "No valid system font XML file found at expected paths."
                android.util.Log.w(r0, r1)
                java.util.Map r1 = kotlin.collections.o0.i()
            L74:
                java.util.Map r0 = r7.filterNonExistingFonts(r1)
                java.util.concurrent.atomic.AtomicReference r1 = app.rive.runtime.kotlin.fonts.FontHelper.access$getFamiliesMapCache$cp()
                r1.set(r0)
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.FontHelper.Companion.loadFonts$kotlin_release():java.util.Map");
        }

        public final void resetForTesting() {
            FontHelper.familiesMapCache.set(null);
            FontHelper.familiesListCache.set(null);
        }

        private Companion() {
        }

        public static /* synthetic */ List findMatches$kotlin_release$default(Companion companion, List list, Fonts.FontOpts fontOpts, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                fontOpts = Fonts.FontOpts.Companion.getDEFAULT();
            }
            return companion.findMatches$kotlin_release(list, fontOpts);
        }

        @NotNull
        public final List<Fonts.Font> findMatches$kotlin_release(@NotNull List<Fonts.Family> fontFamiliesList, @NotNull Fonts.FontOpts opts) {
            Intrinsics.checkNotNullParameter(fontFamiliesList, "fontFamiliesList");
            Intrinsics.checkNotNullParameter(opts, "opts");
            final String familyName = opts.getFamilyName();
            final String lang = opts.getLang();
            return processMatchingFamilies(k.F(CollectionsKt.b0(fontFamiliesList), new Function1<Fonts.Family, Boolean>() { // from class: app.rive.runtime.kotlin.fonts.FontHelper$Companion$findMatches$matchingFamiliesSequence$3
                /* JADX INFO: Access modifiers changed from: package-private */
                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                {
                    super(1);
                }

                @Override // kotlin.jvm.functions.Function1
                @NotNull
                public final Boolean invoke(@NotNull Fonts.Family family) {
                    Intrinsics.checkNotNullParameter(family, "family");
                    boolean z10 = true;
                    if ((familyName != null && !StringsKt.A(family.getName(), familyName, true)) || (lang != null && !Intrinsics.areEqual(family.getLang(), lang))) {
                        z10 = false;
                    }
                    return Boolean.valueOf(z10);
                }
            }), opts.getLang(), opts.getWeight(), opts.getStyle());
        }

        private final List<Fonts.Family> filterNonExistingFonts(List<Fonts.Family> list) {
            if (list.isEmpty()) {
                return list;
            }
            ArrayList arrayList = new ArrayList();
            for (Fonts.Family family : list) {
                Map<Fonts.Weight, List<Fonts.Font>> fonts = family.getFonts();
                LinkedHashMap linkedHashMap = new LinkedHashMap(o0.e(fonts.size()));
                Iterator<T> it = fonts.entrySet().iterator();
                while (it.hasNext()) {
                    Map.Entry entry = (Map.Entry) it.next();
                    Object key = entry.getKey();
                    ArrayList arrayList2 = new ArrayList();
                    for (Object obj : (List) entry.getValue()) {
                        if (FontHelper.Companion.getFontFile((Fonts.Font) obj) != null) {
                            arrayList2.add(obj);
                        }
                    }
                    linkedHashMap.put(key, arrayList2);
                }
                LinkedHashMap linkedHashMap2 = new LinkedHashMap();
                for (Map.Entry entry2 : linkedHashMap.entrySet()) {
                    if (!((List) entry2.getValue()).isEmpty()) {
                        linkedHashMap2.put(entry2.getKey(), entry2.getValue());
                    }
                }
                Fonts.Family family2 = !linkedHashMap2.isEmpty() ? new Fonts.Family(family.getName(), family.getVariant(), family.getLang(), linkedHashMap2) : null;
                if (family2 != null) {
                    arrayList.add(family2);
                }
            }
            return arrayList;
        }
    }
}
