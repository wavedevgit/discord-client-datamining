package jm;

import android.net.Uri;
import android.util.Base64;
import android.webkit.MimeTypeMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.Locale;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final Uri f30244a;

    /* renamed from: b  reason: collision with root package name */
    private String f30245b;

    /* renamed from: c  reason: collision with root package name */
    private Long f30246c;

    /* renamed from: d  reason: collision with root package name */
    private String f30247d;

    /* renamed from: e  reason: collision with root package name */
    private String f30248e;

    /* renamed from: f  reason: collision with root package name */
    private String[] f30249f;

    /* renamed from: g  reason: collision with root package name */
    private String f30250g;

    /* renamed from: h  reason: collision with root package name */
    private String f30251h;

    /* renamed from: i  reason: collision with root package name */
    private Boolean f30252i;

    public a(Uri forUri) {
        Intrinsics.checkNotNullParameter(forUri, "forUri");
        this.f30244a = forUri;
    }

    private final ReadableMap d() {
        Long l10;
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString(StackTraceHelper.NAME_KEY, this.f30245b);
        createMap.putString("uri", this.f30244a.toString());
        if (this.f30246c != null) {
            createMap.putDouble("size", l10.longValue());
        } else {
            createMap.putNull("size");
        }
        String str2 = this.f30247d;
        String str3 = null;
        if (str2 != null) {
            str = str2.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(str, "toLowerCase(...)");
        } else {
            str = null;
        }
        createMap.putString("type", str);
        String str4 = this.f30247d;
        if (str4 != null) {
            str3 = str4.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(str3, "toLowerCase(...)");
        }
        createMap.putString("nativeType", str3);
        String[] strArr = this.f30249f;
        if (strArr != null) {
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            for (String str5 : strArr) {
                WritableMap createMap2 = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
                String extensionFromMimeType = MimeTypeMap.getSingleton().getExtensionFromMimeType(str5);
                createMap2.putString("mimeType", str5);
                createMap2.putString("extension", extensionFromMimeType);
                createArray.pushMap(createMap2);
            }
            createMap.putArray("convertibleToMimeTypes", createArray);
        } else {
            createMap.putNull("convertibleToMimeTypes");
        }
        createMap.putString("error", this.f30248e);
        Boolean bool = this.f30252i;
        if (bool != null) {
            createMap.putBoolean("isVirtual", bool.booleanValue());
        } else {
            createMap.putNull("isVirtual");
        }
        String str6 = this.f30250g;
        if (str6 != null) {
            byte[] bytes = str6.getBytes(Charsets.UTF_8);
            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
            String encodeToString = Base64.encodeToString(bytes, 0);
            createMap.putString("bookmarkStatus", "success");
            createMap.putString("bookmark", encodeToString);
            return createMap;
        }
        String str7 = this.f30251h;
        if (str7 != null) {
            createMap.putString("bookmarkStatus", "error");
            createMap.putString("bookmarkError", str7);
        }
        return createMap;
    }

    public final a a(Uri bookmark) {
        Intrinsics.checkNotNullParameter(bookmark, "bookmark");
        this.f30250g = bookmark.toString();
        return this;
    }

    public final a b(String str) {
        this.f30251h = str;
        return this;
    }

    public final ReadableMap c() {
        return d();
    }

    public final Uri e() {
        return this.f30244a;
    }

    public final boolean f() {
        if (this.f30247d != null) {
            return true;
        }
        return false;
    }

    public final a g(String str) {
        this.f30248e = str;
        return this;
    }

    public final a h(String str) {
        this.f30247d = str;
        return this;
    }

    public final a i(String str) {
        this.f30245b = str;
        return this;
    }

    public final a j(String[] strArr) {
        this.f30249f = strArr;
        return this;
    }

    public final a k(Long l10) {
        this.f30246c = l10;
        return this;
    }

    public final a l(boolean z10) {
        this.f30252i = Boolean.valueOf(z10);
        return this;
    }
}
