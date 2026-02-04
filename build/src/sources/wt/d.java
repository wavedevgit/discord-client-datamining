package wt;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f52754a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f52755b;

    public d(String scheme, Map authParams) {
        String str;
        Intrinsics.checkNotNullParameter(scheme, "scheme");
        Intrinsics.checkNotNullParameter(authParams, "authParams");
        this.f52754a = scheme;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Map.Entry entry : authParams.entrySet()) {
            String str2 = (String) entry.getKey();
            String str3 = (String) entry.getValue();
            if (str2 != null) {
                Locale US = Locale.US;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                str = str2.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(str, "this as java.lang.String).toLowerCase(locale)");
            } else {
                str = null;
            }
            linkedHashMap.put(str, str3);
        }
        Map unmodifiableMap = Collections.unmodifiableMap(linkedHashMap);
        Intrinsics.checkNotNullExpressionValue(unmodifiableMap, "unmodifiableMap<String?, String>(newAuthParams)");
        this.f52755b = unmodifiableMap;
    }

    public final Charset a() {
        String str = (String) this.f52755b.get("charset");
        if (str != null) {
            try {
                Charset forName = Charset.forName(str);
                Intrinsics.checkNotNullExpressionValue(forName, "forName(charset)");
                return forName;
            } catch (Exception unused) {
            }
        }
        Charset ISO_8859_1 = StandardCharsets.ISO_8859_1;
        Intrinsics.checkNotNullExpressionValue(ISO_8859_1, "ISO_8859_1");
        return ISO_8859_1;
    }

    public final String b() {
        return (String) this.f52755b.get("realm");
    }

    public final String c() {
        return this.f52754a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (Intrinsics.areEqual(dVar.f52754a, this.f52754a) && Intrinsics.areEqual(dVar.f52755b, this.f52755b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return ((899 + this.f52754a.hashCode()) * 31) + this.f52755b.hashCode();
    }

    public String toString() {
        return this.f52754a + " authParams=" + this.f52755b;
    }
}
