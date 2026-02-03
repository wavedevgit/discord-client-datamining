package dt;

import at.k;
import at.l;
import dt.x;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i0 {

    /* renamed from: a  reason: collision with root package name */
    private static final x.a f22414a = new x.a();

    /* renamed from: b  reason: collision with root package name */
    private static final x.a f22415b = new x.a();

    private static final Map b(SerialDescriptor serialDescriptor, Json json) {
        String str;
        String[] names;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        boolean d10 = d(json, serialDescriptor);
        m(serialDescriptor, json);
        int d11 = serialDescriptor.d();
        for (int i10 = 0; i10 < d11; i10++) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : serialDescriptor.f(i10)) {
                if (obj instanceof ct.t) {
                    arrayList.add(obj);
                }
            }
            ct.t tVar = (ct.t) CollectionsKt.S0(arrayList);
            if (tVar != null && (names = tVar.names()) != null) {
                for (String str2 : names) {
                    if (d10) {
                        str2 = str2.toLowerCase(Locale.ROOT);
                        Intrinsics.checkNotNullExpressionValue(str2, "toLowerCase(...)");
                    }
                    c(linkedHashMap, serialDescriptor, str2, i10);
                }
            }
            if (d10) {
                str = serialDescriptor.e(i10).toLowerCase(Locale.ROOT);
                Intrinsics.checkNotNullExpressionValue(str, "toLowerCase(...)");
            } else {
                str = null;
            }
            if (str != null) {
                c(linkedHashMap, serialDescriptor, str, i10);
            }
        }
        if (linkedHashMap.isEmpty()) {
            return kotlin.collections.o0.i();
        }
        return linkedHashMap;
    }

    private static final void c(Map map, SerialDescriptor serialDescriptor, String str, int i10) {
        String str2;
        if (Intrinsics.areEqual(serialDescriptor.getKind(), k.b.f6088a)) {
            str2 = "enum value";
        } else {
            str2 = "property";
        }
        if (!map.containsKey(str)) {
            map.put(str, Integer.valueOf(i10));
            return;
        }
        throw new f0("The suggested name '" + str + "' for " + str2 + ' ' + serialDescriptor.e(i10) + " is already one of the names for " + str2 + ' ' + serialDescriptor.e(((Number) kotlin.collections.o0.j(map, str)).intValue()) + " in " + serialDescriptor);
    }

    private static final boolean d(Json json, SerialDescriptor serialDescriptor) {
        if (json.e().h() && Intrinsics.areEqual(serialDescriptor.getKind(), k.b.f6088a)) {
            return true;
        }
        return false;
    }

    public static final Map e(final Json json, final SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(json, "<this>");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return (Map) ct.a0.a(json).b(descriptor, f22414a, new Function0() { // from class: dt.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Map f10;
                f10 = i0.f(SerialDescriptor.this, json);
                return f10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map f(SerialDescriptor serialDescriptor, Json json) {
        return b(serialDescriptor, json);
    }

    public static final x.a g() {
        return f22414a;
    }

    public static final String h(SerialDescriptor serialDescriptor, Json json, int i10) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(json, "json");
        m(serialDescriptor, json);
        return serialDescriptor.e(i10);
    }

    public static final int i(SerialDescriptor serialDescriptor, Json json, String name) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(name, "name");
        if (d(json, serialDescriptor)) {
            String lowerCase = name.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            return l(serialDescriptor, json, lowerCase);
        }
        m(serialDescriptor, json);
        int c10 = serialDescriptor.c(name);
        if (c10 != -3 || !json.e().o()) {
            return c10;
        }
        return l(serialDescriptor, json, name);
    }

    public static final int j(SerialDescriptor serialDescriptor, Json json, String name, String suffix) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(suffix, "suffix");
        int i10 = i(serialDescriptor, json, name);
        if (i10 != -3) {
            return i10;
        }
        throw new ys.n(serialDescriptor.h() + " does not contain element with name '" + name + '\'' + suffix);
    }

    public static /* synthetic */ int k(SerialDescriptor serialDescriptor, Json json, String str, String str2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            str2 = "";
        }
        return j(serialDescriptor, json, str, str2);
    }

    private static final int l(SerialDescriptor serialDescriptor, Json json, String str) {
        Integer num = (Integer) e(json, serialDescriptor).get(str);
        if (num != null) {
            return num.intValue();
        }
        return -3;
    }

    public static final ct.u m(SerialDescriptor serialDescriptor, Json json) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(json, "json");
        if (Intrinsics.areEqual(serialDescriptor.getKind(), l.a.f6089a)) {
            json.e().l();
        }
        return null;
    }
}
