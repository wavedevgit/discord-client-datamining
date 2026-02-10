package cb;

import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import q1.j;
import ra.c;
import ta.e;
import ta.k;
import ta.o;
import x8.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f7345c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Resources f7346a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f7347b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public b(Resources resources) {
        Intrinsics.checkNotNullParameter(resources, "resources");
        this.f7346a = resources;
        this.f7347b = new ConcurrentHashMap();
    }

    private final int b(String str) {
        Map map = this.f7347b;
        Object obj = map.get(str);
        if (obj == null) {
            Uri parse = Uri.parse(str);
            Intrinsics.checkNotNullExpressionValue(parse, "parse(...)");
            obj = Integer.valueOf(c(parse));
            map.put(str, obj);
        }
        return ((Number) obj).intValue();
    }

    private final int c(Uri uri) {
        Integer intOrNull;
        if (!f.o(uri) && !f.q(uri)) {
            throw new IllegalStateException(("Unsupported uri " + uri).toString());
        }
        List<String> pathSegments = uri.getPathSegments();
        Intrinsics.checkNotNullExpressionValue(pathSegments, "getPathSegments(...)");
        String str = (String) CollectionsKt.B0(pathSegments);
        if (str != null && (intOrNull = StringsKt.toIntOrNull(str)) != null) {
            return intOrNull.intValue();
        }
        String path = uri.getPath();
        throw new IllegalStateException(("Unable to read resource ID from " + path).toString());
    }

    @Override // ra.c
    public e a(k encodedImage, int i10, o qualityInfo, ImageDecodeOptions options) {
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        Intrinsics.checkNotNullParameter(qualityInfo, "qualityInfo");
        Intrinsics.checkNotNullParameter(options, "options");
        try {
            String Z = encodedImage.Z();
            if (Z != null) {
                Drawable f10 = j.f(this.f7346a, b(Z), null);
                if (f10 == null) {
                    return null;
                }
                return new ta.j(f10);
            }
            throw new IllegalStateException("No source in encoded image");
        } catch (Throwable th2) {
            q8.a.n("XmlFormatDecoder", "Cannot decode xml", th2);
            return null;
        }
    }
}
