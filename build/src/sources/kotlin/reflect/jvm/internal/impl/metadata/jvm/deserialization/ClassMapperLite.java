package kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import yr.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ClassMapperLite {
    @NotNull
    public static final ClassMapperLite INSTANCE = new ClassMapperLite();

    /* renamed from: a  reason: collision with root package name */
    private static final String f33848a = CollectionsKt.x0(CollectionsKt.o('k', 'o', 't', 'l', 'i', 'n'), "", null, null, 0, null, null, 62, null);

    /* renamed from: b  reason: collision with root package name */
    private static final Map f33849b;

    static {
        int i10;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        List o10 = CollectionsKt.o("Boolean", "Z", "Char", "C", "Byte", "B", "Short", "S", "Int", "I", "Float", "F", "Long", "J", "Double", "D");
        int c10 = c.c(0, o10.size() - 1, 2);
        if (c10 >= 0) {
            int i11 = 0;
            while (true) {
                StringBuilder sb2 = new StringBuilder();
                String str = f33848a;
                sb2.append(str);
                sb2.append('/');
                sb2.append((String) o10.get(i11));
                linkedHashMap.put(sb2.toString(), o10.get(i11 + 1));
                linkedHashMap.put(str + '/' + ((String) o10.get(i11)) + "Array", '[' + ((String) o10.get(i10)));
                if (i11 == c10) {
                    break;
                }
                i11 += 2;
            }
        }
        linkedHashMap.put(f33848a + "/Unit", "V");
        a(linkedHashMap, "Any", "java/lang/Object");
        a(linkedHashMap, "Nothing", "java/lang/Void");
        a(linkedHashMap, "Annotation", "java/lang/annotation/Annotation");
        for (String str2 : CollectionsKt.o("String", "CharSequence", "Throwable", "Cloneable", "Number", "Comparable", "Enum")) {
            a(linkedHashMap, str2, "java/lang/" + str2);
        }
        for (String str3 : CollectionsKt.o("Iterator", "Collection", "List", "Set", "Map", "ListIterator")) {
            a(linkedHashMap, "collections/" + str3, "java/util/" + str3);
            a(linkedHashMap, "collections/Mutable" + str3, "java/util/" + str3);
        }
        a(linkedHashMap, "collections/Iterable", "java/lang/Iterable");
        a(linkedHashMap, "collections/MutableIterable", "java/lang/Iterable");
        a(linkedHashMap, "collections/Map.Entry", "java/util/Map$Entry");
        a(linkedHashMap, "collections/MutableMap.MutableEntry", "java/util/Map$Entry");
        for (int i12 = 0; i12 < 23; i12++) {
            StringBuilder sb3 = new StringBuilder();
            String str4 = f33848a;
            sb3.append(str4);
            sb3.append("/jvm/functions/Function");
            sb3.append(i12);
            a(linkedHashMap, "Function" + i12, sb3.toString());
            a(linkedHashMap, "reflect/KFunction" + i12, str4 + "/reflect/KFunction");
        }
        for (String str5 : CollectionsKt.o("Char", "Byte", "Short", "Int", "Float", "Long", "Double", "String", "Enum")) {
            a(linkedHashMap, str5 + ".Companion", f33848a + "/jvm/internal/" + str5 + "CompanionObject");
        }
        f33849b = linkedHashMap;
    }

    private ClassMapperLite() {
    }

    private static final void a(Map map, String str, String str2) {
        map.put(f33848a + '/' + str, 'L' + str2 + ';');
    }

    @NotNull
    public static final String mapClass(@NotNull String classId) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        String str = (String) f33849b.get(classId);
        if (str == null) {
            return 'L' + StringsKt.I(classId, '.', '$', false, 4, null) + ';';
        }
        return str;
    }
}
