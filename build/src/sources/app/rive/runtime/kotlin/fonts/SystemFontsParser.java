package app.rive.runtime.kotlin.fonts;

import android.util.Log;
import android.util.Xml;
import app.rive.runtime.kotlin.fonts.Fonts;
import com.facebook.react.devsupport.StackTraceHelper;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import lr.u;
import lr.v;
import org.jetbrains.annotations.NotNull;
import org.xmlpull.v1.XmlPullParser;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0007\u0018\u0000 \u00032\u00020\u0001:\u0001\u0003B\u0005¢\u0006\u0002\u0010\u0002¨\u0006\u0004"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/SystemFontsParser;", "", "()V", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SystemFontsParser {
    public static final int $stable = 0;
    @NotNull
    public static final String FALLBACK_FONTS_XML_PATH = "/system/etc/system_fallback.xml";
    @NotNull
    public static final String FONTS_XML_PATH = "/system/etc/fonts.xml";
    @NotNull
    public static final String SYSTEM_FONTS_XML_PATH = "/system/etc/system_fonts.xml";
    @NotNull
    private static final String TAG = "SystemFontsParser";
    @NotNull
    private static final List<Pair<Fonts.Weight, String>> fontFilesOrder;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final List<String> SYSTEM_FONTS_PATHS = CollectionsKt.o("/system/fonts/", "/system/font/", "/data/fonts/", "/system/product/fonts/");

    @Metadata(d1 = {"\u0000v\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010!\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010%\n\u0002\b\b\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002JR\u0010\u000f\u001a\u0014\u0012\u0004\u0012\u00020\u0010\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00110\u00070\r2\f\u0010\u0012\u001a\b\u0012\u0004\u0012\u00020\u00130\u00072\f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00040\u00072\u0006\u0010\u0015\u001a\u00020\u00042\b\u0010\u0016\u001a\u0004\u0018\u00010\u00042\b\u0010\u0017\u001a\u0004\u0018\u00010\u0004H\u0002JD\u0010\u0018\u001a\u0014\u0012\u0004\u0012\u00020\u0010\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00110\u00070\r2\u0006\u0010\u0015\u001a\u00020\u00042\f\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00072\b\u0010\u001b\u001a\u0004\u0018\u00010\u00042\b\u0010\u001c\u001a\u0004\u0018\u00010\u0004H\u0002J&\u0010\u001d\u001a\u0004\u0018\u00010\u00042\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00042\n\b\u0002\u0010!\u001a\u0004\u0018\u00010\u0004H\u0002J\u0018\u0010\"\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u0004H\u0002J\u001b\u0010#\u001a\b\u0012\u0004\u0012\u00020\u00100\u00072\u0006\u0010$\u001a\u00020%H\u0000¢\u0006\u0002\b&J!\u0010'\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00100(2\u0006\u0010$\u001a\u00020%H\u0000¢\u0006\u0002\b)J\u0012\u0010*\u001a\u0004\u0018\u00010\u00112\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J\u0010\u0010+\u001a\u00020,2\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J\u001a\u0010-\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u0015\u001a\u00020\u00042\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J \u0010.\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u001e\u001a\u00020\u001f2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u001100H\u0002J\u0016\u00101\u001a\b\u0012\u0004\u0012\u00020\u00130\u00072\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J\u0010\u00102\u001a\u00020\u001a2\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J$\u00103\u001a\u0016\u0012\u0004\u0012\u00020\u0010\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00110\u0007\u0018\u00010\r2\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J\u0016\u00104\u001a\b\u0012\u0004\u0012\u00020\u00040\u00072\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J2\u00105\u001a\u0002062\u0006\u0010\u001e\u001a\u00020\u001f2\u0012\u00107\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u0010082\f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u001100H\u0002J$\u00109\u001a\b\u0012\u0004\u0012\u00020\u00100\u00072\u0006\u0010\u001e\u001a\u00020\u001f2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u001100H\u0002J\u0016\u0010:\u001a\b\u0012\u0004\u0012\u00020\u00100\u00072\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J\u001c\u0010;\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00100(2\u0006\u0010\u001e\u001a\u00020\u001fH\u0002J\u001a\u0010<\u001a\u0004\u0018\u00010\u00102\u0006\u0010=\u001a\u00020\u00112\u0006\u0010>\u001a\u00020\u0010H\u0002J\u0010\u0010?\u001a\u0002062\u0006\u0010\u001e\u001a\u00020\u001fH\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0080T¢\u0006\u0002\n\u0000R\u001a\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00040\u0007X\u0080\u0004¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u000e\u0010\n\u001a\u00020\u0004X\u0080T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000R \u0010\f\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00040\r0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006@"}, d2 = {"Lapp/rive/runtime/kotlin/fonts/SystemFontsParser$Companion;", "", "()V", "FALLBACK_FONTS_XML_PATH", "", "FONTS_XML_PATH", "SYSTEM_FONTS_PATHS", "", "getSYSTEM_FONTS_PATHS$kotlin_release", "()Ljava/util/List;", "SYSTEM_FONTS_XML_PATH", "TAG", "fontFilesOrder", "Lkotlin/Pair;", "Lapp/rive/runtime/kotlin/fonts/Fonts$Weight;", "fromFileFonts", "Lapp/rive/runtime/kotlin/fonts/Fonts$Family;", "Lapp/rive/runtime/kotlin/fonts/Fonts$Alias;", "filesList", "Lapp/rive/runtime/kotlin/fonts/Fonts$FileFont;", "aliasNames", "familyName", "familyLang", "familyVariant", "fromFontList", "fontList", "Lapp/rive/runtime/kotlin/fonts/Fonts$Font;", "lang", "variant", "getOptionalAttribute", "parser", "Lorg/xmlpull/v1/XmlPullParser;", StackTraceHelper.NAME_KEY, "default", "getRequiredAttribute", "parseFontsXML", "xmlFileStream", "Ljava/io/InputStream;", "parseFontsXML$kotlin_release", "parseFontsXMLMap", "", "parseFontsXMLMap$kotlin_release", "readAlias", "readAxis", "Lapp/rive/runtime/kotlin/fonts/Fonts$Axis;", "readFamily", "readFamilyEntry", "aliases", "", "readFileset", "readFont", "readLegacyFamily", "readNameset", "readNestedFamilies", "", "familiesMap", "", "readNestedFamiliesList", "readRootElement", "readRootElementMap", "remapAlias", "alias", "ogFamily", "skip", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nFontHelpers.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FontHelpers.kt\napp/rive/runtime/kotlin/fonts/SystemFontsParser$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,1218:1\n1#2:1219\n1#2:1255\n1863#3,2:1220\n1557#3:1222\n1628#3,3:1223\n1863#3,2:1226\n1872#3,2:1235\n1874#3:1244\n1611#3,9:1245\n1863#3:1254\n1864#3:1256\n1620#3:1257\n1863#3:1258\n1864#3:1266\n381#4,7:1228\n381#4,7:1237\n381#4,7:1259\n*S KotlinDebug\n*F\n+ 1 FontHelpers.kt\napp/rive/runtime/kotlin/fonts/SystemFontsParser$Companion\n*L\n986#1:1255\n566#1:1220,2\n638#1:1222\n638#1:1223,3\n639#1:1226,2\n947#1:1235,2\n947#1:1244\n986#1:1245,9\n986#1:1254\n986#1:1256\n986#1:1257\n1017#1:1258\n1017#1:1266\n837#1:1228,7\n968#1:1237,7\n1026#1:1259,7\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r8v2, types: [app.rive.runtime.kotlin.fonts.Fonts$Alias] */
        private final Pair<Fonts.Family, List<Fonts.Alias>> fromFileFonts(List<Fonts.FileFont> list, List<String> list2, String str, String str2, String str3) {
            String str4;
            String str5;
            String str6;
            String str7 = str2;
            String str8 = str3;
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            int i10 = 0;
            for (Object obj : list) {
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                Fonts.FileFont fileFont = (Fonts.FileFont) obj;
                if (i10 >= SystemFontsParser.fontFilesOrder.size()) {
                    Log.w(SystemFontsParser.TAG, "Legacy family '" + str + "' has more than " + SystemFontsParser.fontFilesOrder.size() + " files in <fileset>. Ignoring extra file: '" + fileFont.getName() + "'");
                } else {
                    Pair pair = (Pair) SystemFontsParser.fontFilesOrder.get(i10);
                    Fonts.Weight weight = (Fonts.Weight) pair.a();
                    String str9 = (String) pair.b();
                    String obj2 = StringsKt.k1(fileFont.getName()).toString();
                    if (obj2.length() == 0) {
                        Log.w(SystemFontsParser.TAG, "Skipping empty filename in <fileset> for family '" + str + "'.");
                    } else {
                        Fonts.Font font = new Fonts.Font(weight, str9, obj2, null, 0, null, null, 112, null);
                        Object obj3 = linkedHashMap.get(weight);
                        if (obj3 == null) {
                            obj3 = new ArrayList();
                            linkedHashMap.put(weight, obj3);
                        }
                        ((List) obj3).add(font);
                    }
                }
                i10 = i11;
            }
            if (linkedHashMap.isEmpty()) {
                Log.e(SystemFontsParser.TAG, "Could not extract any valid fonts from <fileset> for legacy family '" + str + "'");
                return new Pair<>(new Fonts.Family(str, str8, str7, o0.i()), CollectionsKt.l());
            }
            ArrayList arrayList = new ArrayList();
            Iterator it = list2.iterator();
            while (true) {
                str4 = null;
                if (!it.hasNext()) {
                    break;
                }
                String obj4 = StringsKt.k1((String) it.next()).toString();
                if (obj4.length() > 0) {
                    str4 = new Fonts.Alias(obj4, str, null);
                }
                if (str4 != null) {
                    arrayList.add(str4);
                }
            }
            if (str8 == null) {
                Fonts.FileFont fileFont2 = (Fonts.FileFont) CollectionsKt.firstOrNull(list);
                if (fileFont2 != null) {
                    str8 = fileFont2.getVariant();
                } else {
                    str8 = null;
                }
            }
            if (str7 == null) {
                Fonts.FileFont fileFont3 = (Fonts.FileFont) CollectionsKt.firstOrNull(list);
                if (fileFont3 != null) {
                    str7 = fileFont3.getLang();
                } else {
                    str7 = null;
                }
            }
            if (str8 != null) {
                str5 = StringsKt.k1(str8).toString();
            } else {
                str5 = null;
            }
            str5 = (str5 == null || StringsKt.k0(str5)) ? null : null;
            if (str7 != null) {
                str6 = StringsKt.k1(str7).toString();
            } else {
                str6 = null;
            }
            if (str6 != null && !StringsKt.k0(str6)) {
                str4 = str6;
            }
            return new Pair<>(new Fonts.Family(str, str5, str4, linkedHashMap), arrayList);
        }

        private final Pair<Fonts.Family, List<Fonts.Alias>> fromFontList(String str, List<Fonts.Font> list, String str2, String str3) {
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            for (Fonts.Font font : list) {
                if (StringsKt.k0(font.getName())) {
                    Log.w(SystemFontsParser.TAG, "Skipping font with blank filename in family '" + str + "'.");
                } else {
                    Fonts.Weight weight = font.getWeight();
                    Object obj = linkedHashMap.get(weight);
                    if (obj == null) {
                        obj = new ArrayList();
                        linkedHashMap.put(weight, obj);
                    }
                    ((List) obj).add(font);
                }
            }
            if (linkedHashMap.isEmpty()) {
                Log.w(SystemFontsParser.TAG, "Family '" + str + "' from <font> list resulted in no valid fonts. Creating empty family.");
                return new Pair<>(new Fonts.Family(str, str3, str2, o0.i()), CollectionsKt.l());
            }
            return new Pair<>(new Fonts.Family(str, str3, str2, linkedHashMap), CollectionsKt.l());
        }

        private final String getOptionalAttribute(XmlPullParser xmlPullParser, String str, String str2) {
            String attributeValue = xmlPullParser.getAttributeValue(null, str);
            if (attributeValue == null) {
                return str2;
            }
            return attributeValue;
        }

        static /* synthetic */ String getOptionalAttribute$default(Companion companion, XmlPullParser xmlPullParser, String str, String str2, int i10, Object obj) {
            if ((i10 & 4) != 0) {
                str2 = null;
            }
            return companion.getOptionalAttribute(xmlPullParser, str, str2);
        }

        private final String getRequiredAttribute(XmlPullParser xmlPullParser, String str) {
            String attributeValue = xmlPullParser.getAttributeValue(null, str);
            if (attributeValue != null) {
                return attributeValue;
            }
            throw new IllegalArgumentException("Missing required attribute: " + str);
        }

        private final Fonts.Alias readAlias(XmlPullParser xmlPullParser) {
            XmlPullParser xmlPullParser2;
            String requiredAttribute;
            String requiredAttribute2;
            Fonts.Weight weight;
            xmlPullParser.require(2, null, "alias");
            try {
                requiredAttribute = getRequiredAttribute(xmlPullParser, StackTraceHelper.NAME_KEY);
                requiredAttribute2 = getRequiredAttribute(xmlPullParser, "to");
                xmlPullParser2 = xmlPullParser;
            } catch (IllegalArgumentException e10) {
                e = e10;
                xmlPullParser2 = xmlPullParser;
            }
            try {
                String optionalAttribute$default = getOptionalAttribute$default(this, xmlPullParser2, "weight", null, 4, null);
                if (optionalAttribute$default != null) {
                    weight = Fonts.Weight.Companion.fromString(optionalAttribute$default);
                } else {
                    weight = null;
                }
                skip(xmlPullParser2);
                if (!StringsKt.k0(requiredAttribute) && !StringsKt.k0(requiredAttribute2)) {
                    return new Fonts.Alias(StringsKt.k1(requiredAttribute).toString(), StringsKt.k1(requiredAttribute2).toString(), weight);
                }
                Log.w(SystemFontsParser.TAG, "Skipping alias with blank name ('" + requiredAttribute + "') or to ('" + requiredAttribute2 + "').");
                return null;
            } catch (IllegalArgumentException e11) {
                e = e11;
                Log.e(SystemFontsParser.TAG, "Skipping alias due to missing required attribute: " + e.getMessage());
                skip(xmlPullParser2);
                return null;
            }
        }

        private final Fonts.Axis readAxis(XmlPullParser xmlPullParser) {
            String requiredAttribute = getRequiredAttribute(xmlPullParser, "tag");
            String requiredAttribute2 = getRequiredAttribute(xmlPullParser, "stylevalue");
            skip(xmlPullParser);
            if (!StringsKt.k0(requiredAttribute) && !StringsKt.k0(requiredAttribute2)) {
                return new Fonts.Axis(requiredAttribute, requiredAttribute2);
            }
            throw new IllegalArgumentException("Axis tag found with blank 'tag' or 'stylevalue'.");
        }

        private final Fonts.Family readFamily(String str, XmlPullParser xmlPullParser) {
            Companion companion = SystemFontsParser.Companion;
            u uVar = new u(getOptionalAttribute$default(companion, xmlPullParser, "lang", null, 4, null), getOptionalAttribute$default(companion, xmlPullParser, "variant", null, 4, null), getOptionalAttribute$default(companion, xmlPullParser, "ignore", null, 4, null));
            String str2 = (String) uVar.a();
            String str3 = (String) uVar.b();
            String str4 = (String) uVar.c();
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            while (xmlPullParser.next() != 3) {
                if (xmlPullParser.getEventType() == 2) {
                    String name = xmlPullParser.getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    if (Intrinsics.areEqual(StringsKt.k1(name).toString(), "font")) {
                        try {
                            Fonts.Font readFont = readFont(xmlPullParser);
                            Fonts.Weight weight = readFont.getWeight();
                            Object obj = linkedHashMap.get(weight);
                            if (obj == null) {
                                obj = new ArrayList();
                                linkedHashMap.put(weight, obj);
                            }
                            ((List) obj).add(readFont);
                        } catch (Exception e10) {
                            String message = e10.getMessage();
                            Log.e(SystemFontsParser.TAG, "Failed to read <font> in family '" + str + "': " + message, e10);
                        }
                    } else {
                        skip(xmlPullParser);
                    }
                }
            }
            if (!CollectionsKt.d0(CollectionsKt.o("true", "1"), str4) && !linkedHashMap.isEmpty()) {
                return new Fonts.Family(str, str3, str2, linkedHashMap);
            }
            return null;
        }

        private final Fonts.Family readFamilyEntry(XmlPullParser xmlPullParser, List<Fonts.Alias> list) {
            String str;
            xmlPullParser.require(2, null, "family");
            String optionalAttribute$default = getOptionalAttribute$default(this, xmlPullParser, StackTraceHelper.NAME_KEY, null, 4, null);
            if (optionalAttribute$default != null) {
                str = StringsKt.k1(optionalAttribute$default).toString();
            } else {
                str = null;
            }
            if (str != null && str.length() > 0) {
                return readFamily(str, xmlPullParser);
            }
            Pair<Fonts.Family, List<Fonts.Alias>> readLegacyFamily = readLegacyFamily(xmlPullParser);
            if (readLegacyFamily == null) {
                return null;
            }
            Fonts.Family family = (Fonts.Family) readLegacyFamily.a();
            List list2 = (List) readLegacyFamily.b();
            if (!list2.isEmpty()) {
                Log.w(SystemFontsParser.TAG, "Legacy family generated aliases - these will be processed globally.");
                list.addAll(list2);
            }
            return family;
        }

        /* JADX WARN: Code restructure failed: missing block: B:26:0x0077, code lost:
            if (r9 == null) goto L24;
         */
        /* JADX WARN: Code restructure failed: missing block: B:32:0x00a5, code lost:
            if (kotlin.jvm.internal.Intrinsics.areEqual(kotlin.text.StringsKt.k1(r4).toString(), "file") == false) goto L38;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final java.util.List<app.rive.runtime.kotlin.fonts.Fonts.FileFont> readFileset(org.xmlpull.v1.XmlPullParser r14) {
            /*
                r13 = this;
                java.util.List r0 = kotlin.collections.CollectionsKt.c()
                java.lang.String r1 = "fileset"
                r2 = 2
                r3 = 0
                r14.require(r2, r3, r1)
            Lb:
                int r1 = r14.next()
                r4 = 3
                if (r1 == r4) goto Lec
                int r1 = r14.getEventType()
                if (r1 != r2) goto Lb
                java.lang.String r1 = r14.getName()
                java.lang.String r5 = "getName(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r5)
                java.lang.CharSequence r1 = kotlin.text.StringsKt.k1(r1)
                java.lang.String r1 = r1.toString()
                java.lang.String r6 = "file"
                boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r6)
                if (r1 == 0) goto Le5
                app.rive.runtime.kotlin.fonts.SystemFontsParser$Companion r7 = app.rive.runtime.kotlin.fonts.SystemFontsParser.Companion
                r11 = 4
                r12 = 0
                java.lang.String r9 = "variant"
                r10 = 0
                r8 = r14
                java.lang.String r14 = getOptionalAttribute$default(r7, r8, r9, r10, r11, r12)
                if (r14 == 0) goto L46
                boolean r1 = kotlin.text.StringsKt.k0(r14)
                if (r1 != 0) goto L46
                goto L47
            L46:
                r14 = r3
            L47:
                r11 = 4
                r12 = 0
                java.lang.String r9 = "lang"
                r10 = 0
                java.lang.String r1 = getOptionalAttribute$default(r7, r8, r9, r10, r11, r12)
                if (r1 == 0) goto L59
                boolean r7 = kotlin.text.StringsKt.k0(r1)
                if (r7 != 0) goto L59
                goto L5a
            L59:
                r1 = r3
            L5a:
                java.lang.StringBuilder r7 = new java.lang.StringBuilder
                r7.<init>()
                int r9 = r8.next()
                r10 = 4
                if (r9 != r10) goto L81
                java.lang.String r9 = r8.getText()
                if (r9 == 0) goto L79
                kotlin.jvm.internal.Intrinsics.checkNotNull(r9)
                java.lang.CharSequence r9 = kotlin.text.StringsKt.k1(r9)
                java.lang.String r9 = r9.toString()
                if (r9 != 0) goto L7b
            L79:
                java.lang.String r9 = ""
            L7b:
                r7.append(r9)
                r8.next()
            L81:
                java.lang.String r7 = r7.toString()
                java.lang.String r9 = "toString(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r7, r9)
                int r9 = r8.getEventType()
                java.lang.String r10 = "SystemFontsParser"
                if (r9 != r4) goto La7
                java.lang.String r4 = r8.getName()
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r4, r5)
                java.lang.CharSequence r4 = kotlin.text.StringsKt.k1(r4)
                java.lang.String r4 = r4.toString()
                boolean r4 = kotlin.jvm.internal.Intrinsics.areEqual(r4, r6)
                if (r4 != 0) goto Lcb
            La7:
                int r4 = r8.getEventType()
                java.lang.String r5 = r8.getName()
                java.lang.StringBuilder r6 = new java.lang.StringBuilder
                r6.<init>()
                java.lang.String r9 = "Expected </file> tag after reading text, found "
                r6.append(r9)
                r6.append(r4)
                java.lang.String r4 = " "
                r6.append(r4)
                r6.append(r5)
                java.lang.String r4 = r6.toString()
                android.util.Log.w(r10, r4)
            Lcb:
                int r4 = r7.length()
                if (r4 != 0) goto Ld2
                r7 = r3
            Ld2:
                if (r7 == 0) goto Ldf
                app.rive.runtime.kotlin.fonts.Fonts$FileFont r4 = new app.rive.runtime.kotlin.fonts.Fonts$FileFont
                r4.<init>(r7, r14, r1)
                r0.add(r4)
            Ldc:
                r14 = r8
                goto Lb
            Ldf:
                java.lang.String r14 = "Skipping <file> tag with empty content within <fileset>"
                android.util.Log.w(r10, r14)
                goto Ldc
            Le5:
                r8 = r14
                app.rive.runtime.kotlin.fonts.SystemFontsParser$Companion r14 = app.rive.runtime.kotlin.fonts.SystemFontsParser.Companion
                r14.skip(r8)
                goto Ldc
            Lec:
                java.util.List r14 = kotlin.collections.CollectionsKt.a(r0)
                return r14
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.SystemFontsParser.Companion.readFileset(org.xmlpull.v1.XmlPullParser):java.util.List");
        }

        private final Fonts.Font readFont(XmlPullParser xmlPullParser) {
            String str;
            int i10;
            String str2;
            String str3;
            ArrayList arrayList;
            String text;
            Integer intOrNull;
            xmlPullParser.require(2, null, "font");
            Fonts.Weight.Companion companion = Fonts.Weight.Companion;
            Fonts.Weight fromString = companion.fromString(getOptionalAttribute(xmlPullParser, "weight", String.valueOf(companion.getNORMAL().getWeight())));
            String optionalAttribute = getOptionalAttribute(xmlPullParser, "style", "normal");
            if (optionalAttribute == null) {
                str = "normal";
            } else {
                str = optionalAttribute;
            }
            String optionalAttribute$default = getOptionalAttribute$default(this, xmlPullParser, "index", null, 4, null);
            if (optionalAttribute$default != null && (intOrNull = StringsKt.toIntOrNull(optionalAttribute$default)) != null) {
                i10 = intOrNull.intValue();
            } else {
                i10 = 0;
            }
            String optionalAttribute$default2 = getOptionalAttribute$default(this, xmlPullParser, "postScriptName", null, 4, null);
            if (optionalAttribute$default2 != null && !StringsKt.k0(optionalAttribute$default2)) {
                str2 = optionalAttribute$default2;
            } else {
                str2 = null;
            }
            String optionalAttribute$default3 = getOptionalAttribute$default(this, xmlPullParser, "fallbackFor", null, 4, null);
            if (optionalAttribute$default3 != null && !StringsKt.k0(optionalAttribute$default3)) {
                str3 = optionalAttribute$default3;
            } else {
                str3 = null;
            }
            StringBuilder sb2 = new StringBuilder();
            ArrayList arrayList2 = new ArrayList();
            while (xmlPullParser.next() != 3) {
                int eventType = xmlPullParser.getEventType();
                if (eventType != 2) {
                    if (eventType == 4 && (text = xmlPullParser.getText()) != null) {
                        sb2.append(text);
                    }
                } else {
                    String name = xmlPullParser.getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    if (Intrinsics.areEqual(StringsKt.k1(name).toString(), "axis")) {
                        try {
                            arrayList2.add(readAxis(xmlPullParser));
                        } catch (Exception e10) {
                            Log.e(SystemFontsParser.TAG, "Failed to read <axis> tag: " + e10.getMessage(), e10);
                        }
                    } else {
                        skip(xmlPullParser);
                    }
                }
            }
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
            String obj = StringsKt.k1(sb3).toString();
            if (obj.length() == 0) {
                obj = null;
            }
            if (obj != null) {
                if (!arrayList2.isEmpty()) {
                    arrayList = arrayList2;
                } else {
                    arrayList = null;
                }
                return new Fonts.Font(fromString, str, obj, arrayList, i10, str2, str3);
            }
            throw new IllegalStateException("Font tag found with empty filename");
        }

        private final Pair<Fonts.Family, List<Fonts.Alias>> readLegacyFamily(XmlPullParser xmlPullParser) {
            ArrayList arrayList = new ArrayList();
            ArrayList arrayList2 = new ArrayList();
            ArrayList arrayList3 = new ArrayList();
            String optionalAttribute$default = getOptionalAttribute$default(this, xmlPullParser, "variant", null, 4, null);
            String optionalAttribute$default2 = getOptionalAttribute$default(this, xmlPullParser, "lang", null, 4, null);
            while (xmlPullParser.next() != 3) {
                if (xmlPullParser.getEventType() == 2) {
                    try {
                        String name = xmlPullParser.getName();
                        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                        String obj = StringsKt.k1(name).toString();
                        int hashCode = obj.hashCode();
                        if (hashCode != -854981274) {
                            if (hashCode != 3148879) {
                                if (hashCode == 1721971191 && obj.equals("nameset")) {
                                    arrayList.addAll(readNameset(xmlPullParser));
                                }
                            } else if (obj.equals("font")) {
                                arrayList3.add(readFont(xmlPullParser));
                            }
                        } else if (obj.equals("fileset")) {
                            arrayList2.addAll(readFileset(xmlPullParser));
                        }
                        skip(xmlPullParser);
                    } catch (Exception e10) {
                        String name2 = xmlPullParser.getName();
                        String message = e10.getMessage();
                        Log.e(SystemFontsParser.TAG, "Error reading tag '" + name2 + "' inside legacy family - Skipping tag - " + message, e10);
                    }
                }
            }
            String str = "";
            if (!arrayList3.isEmpty()) {
                if (!arrayList.isEmpty()) {
                    str = arrayList.remove(0);
                }
                return fromFontList(str, arrayList3, optionalAttribute$default2, optionalAttribute$default);
            } else if (arrayList2.isEmpty()) {
                return null;
            } else {
                if (arrayList.isEmpty()) {
                    arrayList.add("");
                }
                return fromFileFonts(arrayList2, arrayList, StringsKt.k1(arrayList.remove(0)).toString(), optionalAttribute$default2, optionalAttribute$default);
            }
        }

        /* JADX WARN: Code restructure failed: missing block: B:21:0x0069, code lost:
            if (kotlin.jvm.internal.Intrinsics.areEqual(kotlin.text.StringsKt.k1(r1).toString(), com.facebook.react.devsupport.StackTraceHelper.NAME_KEY) == false) goto L32;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private final java.util.List<java.lang.String> readNameset(org.xmlpull.v1.XmlPullParser r9) {
            /*
                r8 = this;
                r0 = 0
                java.lang.String r1 = "nameset"
                r2 = 2
                r9.require(r2, r0, r1)
                java.util.ArrayList r0 = new java.util.ArrayList
                r0.<init>()
            Lc:
                int r1 = r9.next()
                r3 = 3
                if (r1 == r3) goto La1
                int r1 = r9.getEventType()
                if (r1 != r2) goto Lc
                java.lang.String r1 = r9.getName()
                java.lang.String r4 = "getName(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r4)
                java.lang.CharSequence r1 = kotlin.text.StringsKt.k1(r1)
                java.lang.String r1 = r1.toString()
                java.lang.String r5 = "name"
                boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r5)
                if (r1 == 0) goto L9c
                int r1 = r9.next()
                r6 = 4
                java.lang.String r7 = ""
                if (r1 != r6) goto L50
                java.lang.String r1 = r9.getText()
                if (r1 == 0) goto L4d
                java.lang.CharSequence r1 = kotlin.text.StringsKt.k1(r1)
                java.lang.String r1 = r1.toString()
                if (r1 != 0) goto L4c
                goto L4d
            L4c:
                r7 = r1
            L4d:
                r9.next()
            L50:
                int r1 = r9.getEventType()
                if (r1 != r3) goto L6b
                java.lang.String r1 = r9.getName()
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r4)
                java.lang.CharSequence r1 = kotlin.text.StringsKt.k1(r1)
                java.lang.String r1 = r1.toString()
                boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r5)
                if (r1 != 0) goto L91
            L6b:
                int r1 = r9.getEventType()
                java.lang.String r3 = r9.getName()
                java.lang.StringBuilder r4 = new java.lang.StringBuilder
                r4.<init>()
                java.lang.String r5 = "Expected </name> tag after reading text, but found "
                r4.append(r5)
                r4.append(r1)
                java.lang.String r1 = " "
                r4.append(r1)
                r4.append(r3)
                java.lang.String r1 = r4.toString()
                java.lang.String r3 = "SystemFontsParser"
                android.util.Log.w(r3, r1)
            L91:
                boolean r1 = kotlin.text.StringsKt.k0(r7)
                if (r1 != 0) goto Lc
                r0.add(r7)
                goto Lc
            L9c:
                r8.skip(r9)
                goto Lc
            La1:
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.runtime.kotlin.fonts.SystemFontsParser.Companion.readNameset(org.xmlpull.v1.XmlPullParser):java.util.List");
        }

        private final void readNestedFamilies(XmlPullParser xmlPullParser, Map<String, Fonts.Family> map, List<Fonts.Alias> list) {
            String name;
            xmlPullParser.require(2, null, "familyset");
            while (xmlPullParser.next() != 3) {
                if (xmlPullParser.getEventType() == 2) {
                    String name2 = xmlPullParser.getName();
                    Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
                    String obj = StringsKt.k1(name2).toString();
                    if (Intrinsics.areEqual(obj, "family")) {
                        Fonts.Family readFamilyEntry = readFamilyEntry(xmlPullParser, list);
                        if (readFamilyEntry != null) {
                            String name3 = readFamilyEntry.getName();
                            if (name3 != null && name3.length() != 0) {
                                name = readFamilyEntry.getName();
                            } else {
                                name = ((Fonts.Font) CollectionsKt.o0(CollectionsKt.y(readFamilyEntry.getFonts().values()))).getName();
                            }
                            map.put(name, readFamilyEntry);
                        }
                    } else if (Intrinsics.areEqual(obj, "alias")) {
                        Fonts.Alias readAlias = readAlias(xmlPullParser);
                        if (readAlias != null) {
                            list.add(readAlias);
                        }
                    } else {
                        skip(xmlPullParser);
                    }
                }
            }
        }

        private final List<Fonts.Family> readNestedFamiliesList(XmlPullParser xmlPullParser, List<Fonts.Alias> list) {
            xmlPullParser.require(2, null, "familyset");
            ArrayList arrayList = new ArrayList();
            while (xmlPullParser.next() != 3) {
                if (xmlPullParser.getEventType() == 2) {
                    String name = xmlPullParser.getName();
                    Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                    String obj = StringsKt.k1(name).toString();
                    if (Intrinsics.areEqual(obj, "family")) {
                        Fonts.Family readFamilyEntry = readFamilyEntry(xmlPullParser, list);
                        if (readFamilyEntry != null) {
                            arrayList.add(readFamilyEntry);
                        }
                    } else if (Intrinsics.areEqual(obj, "alias")) {
                        Fonts.Alias readAlias = readAlias(xmlPullParser);
                        if (readAlias != null) {
                            list.add(readAlias);
                        }
                    } else {
                        skip(xmlPullParser);
                    }
                }
            }
            return arrayList;
        }

        private final List<Fonts.Family> readRootElement(XmlPullParser xmlPullParser) {
            boolean z10;
            Object obj;
            Fonts.Family remapAlias;
            Object obj2;
            xmlPullParser.require(2, null, null);
            String name = xmlPullParser.getName();
            if (!Intrinsics.areEqual(name, "familyset") && !Intrinsics.areEqual(name, "fonts-modification") && !Intrinsics.areEqual(name, "config")) {
                Log.w(SystemFontsParser.TAG, "Unexpected root tag '" + name + "' in font XML");
            }
            ArrayList<Fonts.Family> arrayList = new ArrayList();
            ArrayList<Fonts.Alias> arrayList2 = new ArrayList();
            while (xmlPullParser.next() != 3) {
                if (xmlPullParser.getEventType() == 2) {
                    String name2 = xmlPullParser.getName();
                    Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
                    String obj3 = StringsKt.k1(name2).toString();
                    int hashCode = obj3.hashCode();
                    if (hashCode != -1359677826) {
                        if (hashCode != -1281860764) {
                            if (hashCode == 92902992 && obj3.equals("alias")) {
                                Fonts.Alias readAlias = readAlias(xmlPullParser);
                                if (readAlias != null) {
                                    arrayList2.add(readAlias);
                                }
                            }
                            skip(xmlPullParser);
                        } else if (obj3.equals("family")) {
                            Fonts.Family readFamilyEntry = readFamilyEntry(xmlPullParser, arrayList2);
                            if (readFamilyEntry != null) {
                                arrayList.add(readFamilyEntry);
                            }
                        } else {
                            skip(xmlPullParser);
                        }
                    } else if (!obj3.equals("familyset")) {
                        skip(xmlPullParser);
                    } else {
                        arrayList.addAll(readNestedFamiliesList(xmlPullParser, arrayList2));
                    }
                }
            }
            ArrayList arrayList3 = new ArrayList(CollectionsKt.w(arrayList, 10));
            for (Fonts.Family family : arrayList) {
                arrayList3.add(family.getName());
            }
            Set k12 = CollectionsKt.k1(arrayList3);
            for (Fonts.Alias alias : arrayList2) {
                if (!k12.contains(alias.getName())) {
                    Iterator it = arrayList.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            obj2 = it.next();
                            if (Intrinsics.areEqual(((Fonts.Family) obj2).getName(), alias.getOriginal())) {
                                break;
                            }
                        } else {
                            obj2 = null;
                            break;
                        }
                    }
                    Fonts.Family family2 = (Fonts.Family) obj2;
                    if (family2 != null) {
                        Fonts.Family remapAlias2 = SystemFontsParser.Companion.remapAlias(alias, family2);
                        if (remapAlias2 != null) {
                            k12.add(alias.getName());
                            arrayList.add(remapAlias2);
                        } else {
                            Log.w(SystemFontsParser.TAG, "Could not remap alias '" + alias.getName() + "' because target '" + alias.getOriginal() + "' not found.");
                        }
                    }
                }
            }
            List j12 = CollectionsKt.j1(arrayList2);
            for (boolean z11 = true; z11 && !j12.isEmpty(); z11 = z10) {
                Iterator it2 = j12.iterator();
                z10 = false;
                while (it2.hasNext()) {
                    Fonts.Alias alias2 = (Fonts.Alias) it2.next();
                    if (!k12.contains(alias2.getName())) {
                        Iterator it3 = arrayList.iterator();
                        while (true) {
                            if (it3.hasNext()) {
                                obj = it3.next();
                                if (Intrinsics.areEqual(((Fonts.Family) obj).getName(), alias2.getOriginal())) {
                                    break;
                                }
                            } else {
                                obj = null;
                                break;
                            }
                        }
                        Fonts.Family family3 = (Fonts.Family) obj;
                        if (family3 != null && (remapAlias = SystemFontsParser.Companion.remapAlias(alias2, family3)) != null) {
                            k12.add(alias2.getName());
                            arrayList.add(remapAlias);
                            it2.remove();
                            z10 = true;
                        }
                    } else {
                        it2.remove();
                    }
                }
            }
            return arrayList;
        }

        private final Map<String, Fonts.Family> readRootElementMap(XmlPullParser xmlPullParser) {
            boolean z10;
            Fonts.Family remapAlias;
            String name;
            xmlPullParser.require(2, null, null);
            String name2 = xmlPullParser.getName();
            if (!Intrinsics.areEqual(name2, "familyset") && !Intrinsics.areEqual(name2, "fonts-modification") && !Intrinsics.areEqual(name2, "config")) {
                Log.w(SystemFontsParser.TAG, "Unexpected root tag '" + name2 + "' in font XML");
            }
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            ArrayList<Fonts.Alias> arrayList = new ArrayList();
            while (xmlPullParser.next() != 3) {
                if (xmlPullParser.getEventType() == 2) {
                    String name3 = xmlPullParser.getName();
                    Intrinsics.checkNotNullExpressionValue(name3, "getName(...)");
                    String obj = StringsKt.k1(name3).toString();
                    int hashCode = obj.hashCode();
                    if (hashCode != -1359677826) {
                        if (hashCode != -1281860764) {
                            if (hashCode == 92902992 && obj.equals("alias")) {
                                Fonts.Alias readAlias = readAlias(xmlPullParser);
                                if (readAlias != null) {
                                    arrayList.add(readAlias);
                                }
                            }
                            skip(xmlPullParser);
                        } else if (obj.equals("family")) {
                            Fonts.Family readFamilyEntry = readFamilyEntry(xmlPullParser, arrayList);
                            if (readFamilyEntry != null) {
                                String name4 = readFamilyEntry.getName();
                                if (name4 != null && name4.length() != 0) {
                                    name = readFamilyEntry.getName();
                                } else {
                                    name = ((Fonts.Font) CollectionsKt.o0(CollectionsKt.y(readFamilyEntry.getFonts().values()))).getName();
                                }
                                linkedHashMap.put(name, readFamilyEntry);
                            }
                        } else {
                            skip(xmlPullParser);
                        }
                    } else if (!obj.equals("familyset")) {
                        skip(xmlPullParser);
                    } else {
                        readNestedFamilies(xmlPullParser, linkedHashMap, arrayList);
                    }
                }
            }
            for (Fonts.Alias alias : arrayList) {
                if (!linkedHashMap.containsKey(alias.getName())) {
                    Fonts.Family family = linkedHashMap.get(alias.getOriginal());
                    if (family != null) {
                        Fonts.Family remapAlias2 = SystemFontsParser.Companion.remapAlias(alias, family);
                        if (remapAlias2 != null) {
                            linkedHashMap.put(alias.getName(), remapAlias2);
                        } else {
                            Log.w(SystemFontsParser.TAG, "Could not remap alias '" + alias.getName() + "' because target '" + alias.getOriginal() + "' not found.");
                        }
                    }
                } else {
                    Log.w(SystemFontsParser.TAG, "Skipping alias '" + alias.getName() + "' because a family with that name already exists.");
                }
            }
            List j12 = CollectionsKt.j1(arrayList);
            for (boolean z11 = true; z11 && !j12.isEmpty(); z11 = z10) {
                Iterator it = j12.iterator();
                z10 = false;
                while (it.hasNext()) {
                    Fonts.Alias alias2 = (Fonts.Alias) it.next();
                    if (!linkedHashMap.containsKey(alias2.getName())) {
                        Fonts.Family family2 = linkedHashMap.get(alias2.getOriginal());
                        if (family2 != null && (remapAlias = SystemFontsParser.Companion.remapAlias(alias2, family2)) != null) {
                            linkedHashMap.put(alias2.getName(), remapAlias);
                            it.remove();
                            z10 = true;
                        }
                    } else {
                        it.remove();
                    }
                }
            }
            return linkedHashMap;
        }

        private final Fonts.Family remapAlias(Fonts.Alias alias, Fonts.Family family) {
            Fonts.Weight weight = alias.getWeight();
            if (weight == null) {
                return new Fonts.Family(alias.getName(), family.getVariant(), family.getLang(), family.getFonts());
            }
            List<Fonts.Font> list = family.getFonts().get(weight);
            if (list != null && !list.isEmpty()) {
                return new Fonts.Family(alias.getName(), family.component2(), family.component3(), o0.f(v.a(weight, list)));
            }
            String name = alias.getName();
            int weight2 = weight.getWeight();
            String original = alias.getOriginal();
            Log.w(SystemFontsParser.TAG, "Alias '" + name + "' targets weight " + weight2 + " in family '" + original + "', but that doesn't exist");
            return null;
        }

        private final void skip(XmlPullParser xmlPullParser) {
            int i10 = 1;
            while (i10 > 0) {
                int next = xmlPullParser.next();
                if (next != 1) {
                    if (next != 2) {
                        if (next == 3) {
                            i10--;
                        }
                    } else {
                        i10++;
                    }
                } else {
                    return;
                }
            }
        }

        @NotNull
        public final List<String> getSYSTEM_FONTS_PATHS$kotlin_release() {
            return SystemFontsParser.SYSTEM_FONTS_PATHS;
        }

        @NotNull
        public final List<Fonts.Family> parseFontsXML$kotlin_release(@NotNull InputStream xmlFileStream) {
            Intrinsics.checkNotNullParameter(xmlFileStream, "xmlFileStream");
            XmlPullParser newPullParser = Xml.newPullParser();
            newPullParser.setFeature("http://xmlpull.org/v1/doc/features.html#process-namespaces", false);
            newPullParser.setInput(xmlFileStream, null);
            newPullParser.nextTag();
            Intrinsics.checkNotNull(newPullParser);
            return readRootElement(newPullParser);
        }

        @NotNull
        public final Map<String, Fonts.Family> parseFontsXMLMap$kotlin_release(@NotNull InputStream xmlFileStream) {
            Intrinsics.checkNotNullParameter(xmlFileStream, "xmlFileStream");
            XmlPullParser newPullParser = Xml.newPullParser();
            newPullParser.setFeature("http://xmlpull.org/v1/doc/features.html#process-namespaces", false);
            newPullParser.setInput(xmlFileStream, null);
            newPullParser.nextTag();
            Intrinsics.checkNotNull(newPullParser);
            return readRootElementMap(newPullParser);
        }

        private Companion() {
        }
    }

    static {
        Fonts.Weight.Companion companion = Fonts.Weight.Companion;
        fontFilesOrder = CollectionsKt.o(new Pair(companion.getNORMAL(), "normal"), new Pair(companion.getBOLD(), "normal"), new Pair(companion.getNORMAL(), Fonts.Font.STYLE_ITALIC), new Pair(companion.getBOLD(), Fonts.Font.STYLE_ITALIC));
    }
}
