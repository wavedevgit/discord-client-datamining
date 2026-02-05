package ht;

import gt.n0;
import jt.c0;
import jt.c1;
import jt.z0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.StringCompanionObject;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.JsonArray;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonNull;
import kotlinx.serialization.json.JsonObject;
import kotlinx.serialization.json.JsonPrimitive;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final SerialDescriptor f26979a = n0.a("kotlinx.serialization.json.JsonUnquotedLiteral", et.a.E(StringCompanionObject.INSTANCE));

    public static final JsonNull a(Void r02) {
        return JsonNull.INSTANCE;
    }

    public static final JsonPrimitive b(Boolean bool) {
        if (bool == null) {
            return JsonNull.INSTANCE;
        }
        return new r(bool, false, null, 4, null);
    }

    public static final JsonPrimitive c(Number number) {
        if (number == null) {
            return JsonNull.INSTANCE;
        }
        return new r(number, false, null, 4, null);
    }

    public static final JsonPrimitive d(String str) {
        if (str == null) {
            return JsonNull.INSTANCE;
        }
        return new r(str, true, null, 4, null);
    }

    private static final Void e(JsonElement jsonElement, String str) {
        throw new IllegalArgumentException("Element " + Reflection.getOrCreateKotlinClass(jsonElement.getClass()) + " is not a " + str);
    }

    public static final boolean f(JsonPrimitive jsonPrimitive) {
        Intrinsics.checkNotNullParameter(jsonPrimitive, "<this>");
        Boolean d10 = c1.d(jsonPrimitive.b());
        if (d10 != null) {
            return d10.booleanValue();
        }
        throw new IllegalStateException(jsonPrimitive + " does not represent a Boolean");
    }

    public static final Boolean g(JsonPrimitive jsonPrimitive) {
        Intrinsics.checkNotNullParameter(jsonPrimitive, "<this>");
        return c1.d(jsonPrimitive.b());
    }

    public static final String h(JsonPrimitive jsonPrimitive) {
        Intrinsics.checkNotNullParameter(jsonPrimitive, "<this>");
        if (jsonPrimitive instanceof JsonNull) {
            return null;
        }
        return jsonPrimitive.b();
    }

    public static final double i(JsonPrimitive jsonPrimitive) {
        Intrinsics.checkNotNullParameter(jsonPrimitive, "<this>");
        return Double.parseDouble(jsonPrimitive.b());
    }

    public static final float j(JsonPrimitive jsonPrimitive) {
        Intrinsics.checkNotNullParameter(jsonPrimitive, "<this>");
        return Float.parseFloat(jsonPrimitive.b());
    }

    public static final int k(JsonPrimitive jsonPrimitive) {
        Intrinsics.checkNotNullParameter(jsonPrimitive, "<this>");
        try {
            long m10 = new z0(jsonPrimitive.b()).m();
            if (-2147483648L <= m10 && m10 <= 2147483647L) {
                return (int) m10;
            }
            throw new NumberFormatException(jsonPrimitive.b() + " is not an Int");
        } catch (c0 e10) {
            throw new NumberFormatException(e10.getMessage());
        }
    }

    public static final Integer l(JsonPrimitive jsonPrimitive) {
        Long l10;
        Intrinsics.checkNotNullParameter(jsonPrimitive, "<this>");
        try {
            l10 = Long.valueOf(new z0(jsonPrimitive.b()).m());
        } catch (c0 unused) {
            l10 = null;
        }
        if (l10 != null) {
            long longValue = l10.longValue();
            if (-2147483648L <= longValue && longValue <= 2147483647L) {
                return Integer.valueOf((int) longValue);
            }
        }
        return null;
    }

    public static final JsonArray m(JsonElement jsonElement) {
        JsonArray jsonArray;
        Intrinsics.checkNotNullParameter(jsonElement, "<this>");
        if (jsonElement instanceof JsonArray) {
            jsonArray = (JsonArray) jsonElement;
        } else {
            jsonArray = null;
        }
        if (jsonArray != null) {
            return jsonArray;
        }
        e(jsonElement, "JsonArray");
        throw new or.h();
    }

    public static final JsonObject n(JsonElement jsonElement) {
        JsonObject jsonObject;
        Intrinsics.checkNotNullParameter(jsonElement, "<this>");
        if (jsonElement instanceof JsonObject) {
            jsonObject = (JsonObject) jsonElement;
        } else {
            jsonObject = null;
        }
        if (jsonObject != null) {
            return jsonObject;
        }
        e(jsonElement, "JsonObject");
        throw new or.h();
    }

    public static final JsonPrimitive o(JsonElement jsonElement) {
        JsonPrimitive jsonPrimitive;
        Intrinsics.checkNotNullParameter(jsonElement, "<this>");
        if (jsonElement instanceof JsonPrimitive) {
            jsonPrimitive = (JsonPrimitive) jsonElement;
        } else {
            jsonPrimitive = null;
        }
        if (jsonPrimitive != null) {
            return jsonPrimitive;
        }
        e(jsonElement, "JsonPrimitive");
        throw new or.h();
    }

    public static final SerialDescriptor p() {
        return f26979a;
    }

    public static final long q(JsonPrimitive jsonPrimitive) {
        Intrinsics.checkNotNullParameter(jsonPrimitive, "<this>");
        try {
            return new z0(jsonPrimitive.b()).m();
        } catch (c0 e10) {
            throw new NumberFormatException(e10.getMessage());
        }
    }
}
