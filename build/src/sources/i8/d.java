package i8;

import com.facebook.cache.common.CacheKey;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f26657a = new d();

    private d() {
    }

    public static final String a(CacheKey key) {
        Intrinsics.checkNotNullParameter(key, "key");
        try {
            if (key instanceof e) {
                List d10 = ((e) key).d();
                Intrinsics.checkNotNullExpressionValue(d10, "getCacheKeys(...)");
                d dVar = f26657a;
                Object obj = d10.get(0);
                Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
                return dVar.c((CacheKey) obj);
            }
            return f26657a.c(key);
        } catch (UnsupportedEncodingException e10) {
            throw new RuntimeException(e10);
        }
    }

    public static final List b(CacheKey key) {
        String c10;
        Intrinsics.checkNotNullParameter(key, "key");
        try {
            if (key instanceof e) {
                List d10 = ((e) key).d();
                Intrinsics.checkNotNullExpressionValue(d10, "getCacheKeys(...)");
                ArrayList arrayList = new ArrayList(d10.size());
                int size = d10.size();
                for (int i10 = 0; i10 < size; i10++) {
                    d dVar = f26657a;
                    Object obj = d10.get(i10);
                    Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
                    arrayList.add(dVar.c((CacheKey) obj));
                }
                return arrayList;
            }
            ArrayList arrayList2 = new ArrayList(1);
            if (key.c()) {
                c10 = key.a();
            } else {
                c10 = f26657a.c(key);
            }
            arrayList2.add(c10);
            return arrayList2;
        } catch (UnsupportedEncodingException e10) {
            throw new RuntimeException(e10);
        }
    }

    private final String c(CacheKey cacheKey) {
        String a10 = cacheKey.a();
        Intrinsics.checkNotNullExpressionValue(a10, "getUriString(...)");
        Charset forName = Charset.forName("UTF-8");
        Intrinsics.checkNotNullExpressionValue(forName, "forName(...)");
        byte[] bytes = a10.getBytes(forName);
        Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
        String a11 = w8.c.a(bytes);
        Intrinsics.checkNotNullExpressionValue(a11, "makeSHA1HashBase64(...)");
        return a11;
    }
}
