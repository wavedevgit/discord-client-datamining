package kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization;

import ir.p;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.d;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJvmNameResolverBase.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JvmNameResolverBase.kt\norg/jetbrains/kotlin/metadata/jvm/deserialization/JvmNameResolverBase\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,106:1\n1222#2,2:107\n1252#2,4:109\n*S KotlinDebug\n*F\n+ 1 JvmNameResolverBase.kt\norg/jetbrains/kotlin/metadata/jvm/deserialization/JvmNameResolverBase\n*L\n101#1:107,2\n101#1:109,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JvmNameResolverBase implements NameResolver {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private static final String f35100d;

    /* renamed from: e  reason: collision with root package name */
    private static final List f35101e;

    /* renamed from: f  reason: collision with root package name */
    private static final Map f35102f;

    /* renamed from: a  reason: collision with root package name */
    private final String[] f35103a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f35104b;

    /* renamed from: c  reason: collision with root package name */
    private final List f35105c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[JvmProtoBuf.StringTableTypes.Record.Operation.values().length];
            try {
                iArr[JvmProtoBuf.StringTableTypes.Record.Operation.NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[JvmProtoBuf.StringTableTypes.Record.Operation.INTERNAL_TO_CLASS_ID.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[JvmProtoBuf.StringTableTypes.Record.Operation.DESC_TO_CLASS_ID.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    static {
        String x02 = CollectionsKt.x0(CollectionsKt.o('k', 'o', 't', 'l', 'i', 'n'), "", null, null, 0, null, null, 62, null);
        f35100d = x02;
        List o10 = CollectionsKt.o(x02 + "/Any", x02 + "/Nothing", x02 + "/Unit", x02 + "/Throwable", x02 + "/Number", x02 + "/Byte", x02 + "/Double", x02 + "/Float", x02 + "/Int", x02 + "/Long", x02 + "/Short", x02 + "/Boolean", x02 + "/Char", x02 + "/CharSequence", x02 + "/String", x02 + "/Comparable", x02 + "/Enum", x02 + "/Array", x02 + "/ByteArray", x02 + "/DoubleArray", x02 + "/FloatArray", x02 + "/IntArray", x02 + "/LongArray", x02 + "/ShortArray", x02 + "/BooleanArray", x02 + "/CharArray", x02 + "/Cloneable", x02 + "/Annotation", x02 + "/collections/Iterable", x02 + "/collections/MutableIterable", x02 + "/collections/Collection", x02 + "/collections/MutableCollection", x02 + "/collections/List", x02 + "/collections/MutableList", x02 + "/collections/Set", x02 + "/collections/MutableSet", x02 + "/collections/Map", x02 + "/collections/MutableMap", x02 + "/collections/Map.Entry", x02 + "/collections/MutableMap.MutableEntry", x02 + "/collections/Iterator", x02 + "/collections/MutableIterator", x02 + "/collections/ListIterator", x02 + "/collections/MutableListIterator");
        f35101e = o10;
        Iterable<IndexedValue> n12 = CollectionsKt.n1(o10);
        LinkedHashMap linkedHashMap = new LinkedHashMap(d.d(o0.e(CollectionsKt.w(n12, 10)), 16));
        for (IndexedValue indexedValue : n12) {
            linkedHashMap.put((String) indexedValue.d(), Integer.valueOf(indexedValue.c()));
        }
        f35102f = linkedHashMap;
    }

    public JvmNameResolverBase(@NotNull String[] strings, @NotNull Set<Integer> localNameIndices, @NotNull List<JvmProtoBuf.StringTableTypes.Record> records) {
        Intrinsics.checkNotNullParameter(strings, "strings");
        Intrinsics.checkNotNullParameter(localNameIndices, "localNameIndices");
        Intrinsics.checkNotNullParameter(records, "records");
        this.f35103a = strings;
        this.f35104b = localNameIndices;
        this.f35105c = records;
    }

    @Override // kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver
    @NotNull
    public String getQualifiedClassName(int i10) {
        return getString(i10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver
    @NotNull
    public String getString(int i10) {
        String str;
        JvmProtoBuf.StringTableTypes.Record record = (JvmProtoBuf.StringTableTypes.Record) this.f35105c.get(i10);
        if (record.hasString()) {
            str = record.getString();
        } else {
            if (record.hasPredefinedIndex()) {
                List list = f35101e;
                int size = list.size();
                int predefinedIndex = record.getPredefinedIndex();
                if (predefinedIndex >= 0 && predefinedIndex < size) {
                    str = (String) list.get(record.getPredefinedIndex());
                }
            }
            str = this.f35103a[i10];
        }
        if (record.getSubstringIndexCount() >= 2) {
            List<Integer> substringIndexList = record.getSubstringIndexList();
            Intrinsics.checkNotNull(substringIndexList);
            Integer num = substringIndexList.get(0);
            Integer num2 = substringIndexList.get(1);
            if (num.intValue() >= 0 && num.intValue() <= num2.intValue() && num2.intValue() <= str.length()) {
                Intrinsics.checkNotNull(str);
                Intrinsics.checkNotNull(num);
                int intValue = num.intValue();
                Intrinsics.checkNotNull(num2);
                str = str.substring(intValue, num2.intValue());
                Intrinsics.checkNotNullExpressionValue(str, "substring(...)");
            }
        }
        String str2 = str;
        if (record.getReplaceCharCount() >= 2) {
            List<Integer> replaceCharList = record.getReplaceCharList();
            Intrinsics.checkNotNull(replaceCharList);
            Intrinsics.checkNotNull(str2);
            str2 = StringsKt.I(str2, (char) replaceCharList.get(0).intValue(), (char) replaceCharList.get(1).intValue(), false, 4, null);
        }
        String str3 = str2;
        JvmProtoBuf.StringTableTypes.Record.Operation operation = record.getOperation();
        if (operation == null) {
            operation = JvmProtoBuf.StringTableTypes.Record.Operation.NONE;
        }
        int i11 = WhenMappings.$EnumSwitchMapping$0[operation.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    if (str3.length() >= 2) {
                        Intrinsics.checkNotNull(str3);
                        str3 = str3.substring(1, str3.length() - 1);
                        Intrinsics.checkNotNullExpressionValue(str3, "substring(...)");
                    }
                    String str4 = str3;
                    Intrinsics.checkNotNull(str4);
                    str3 = StringsKt.I(str4, '$', '.', false, 4, null);
                } else {
                    throw new p();
                }
            } else {
                Intrinsics.checkNotNull(str3);
                str3 = StringsKt.I(str3, '$', '.', false, 4, null);
            }
        }
        Intrinsics.checkNotNull(str3);
        return str3;
    }

    @Override // kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver
    public boolean isLocalClassName(int i10) {
        return this.f35104b.contains(Integer.valueOf(i10));
    }
}
