package lm;

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
    private final Uri f36469a;

    /* renamed from: b  reason: collision with root package name */
    private String f36470b;

    /* renamed from: c  reason: collision with root package name */
    private Long f36471c;

    /* renamed from: d  reason: collision with root package name */
    private String f36472d;

    /* renamed from: e  reason: collision with root package name */
    private String f36473e;

    /* renamed from: f  reason: collision with root package name */
    private String[] f36474f;

    /* renamed from: g  reason: collision with root package name */
    private String f36475g;

    /* renamed from: h  reason: collision with root package name */
    private String f36476h;

    /* renamed from: i  reason: collision with root package name */
    private Boolean f36477i;

    public a(Uri forUri) {
        Intrinsics.checkNotNullParameter(forUri, "forUri");
        this.f36469a = forUri;
    }

    private final ReadableMap d() {
        Long l10;
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString(StackTraceHelper.NAME_KEY, this.f36470b);
        createMap.putString("uri", this.f36469a.toString());
        if (this.f36471c != null) {
            createMap.putDouble("size", l10.longValue());
        } else {
            createMap.putNull("size");
        }
        String str2 = this.f36472d;
        String str3 = null;
        if (str2 != null) {
            str = str2.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(str, "toLowerCase(...)");
        } else {
            str = null;
        }
        createMap.putString("type", str);
        String str4 = this.f36472d;
        if (str4 != null) {
            str3 = str4.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(str3, "toLowerCase(...)");
        }
        createMap.putString("nativeType", str3);
        String[] strArr = this.f36474f;
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
        createMap.putString("error", this.f36473e);
        Boolean bool = this.f36477i;
        if (bool != null) {
            createMap.putBoolean("isVirtual", bool.booleanValue());
        } else {
            createMap.putNull("isVirtual");
        }
        String str6 = this.f36475g;
        if (str6 != null) {
            byte[] bytes = str6.getBytes(Charsets.UTF_8);
            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
            String encodeToString = Base64.encodeToString(bytes, 0);
            createMap.putString("bookmarkStatus", "success");
            createMap.putString("bookmark", encodeToString);
            return createMap;
        }
        String str7 = this.f36476h;
        if (str7 != null) {
            createMap.putString("bookmarkStatus", "error");
            createMap.putString("bookmarkError", str7);
        }
        return createMap;
    }

    public final a a(Uri bookmark) {
        Intrinsics.checkNotNullParameter(bookmark, "bookmark");
        this.f36475g = bookmark.toString();
        return this;
    }

    public final a b(String str) {
        this.f36476h = str;
        return this;
    }

    public final ReadableMap c() {
        return d();
    }

    public final Uri e() {
        return this.f36469a;
    }

    public final boolean f() {
        if (this.f36472d != null) {
            return true;
        }
        return false;
    }

    public final a g(String str) {
        this.f36473e = str;
        return this;
    }

    public final a h(String str) {
        this.f36472d = str;
        return this;
    }

    public final a i(String str) {
        this.f36470b = str;
        return this;
    }

    public final a j(String[] strArr) {
        this.f36474f = strArr;
        return this;
    }

    public final a k(Long l10) {
        this.f36471c = l10;
        return this;
    }

    public final a l(boolean z10) {
        this.f36477i = Boolean.valueOf(z10);
        return this;
    }
}
