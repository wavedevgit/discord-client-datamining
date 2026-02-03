package dm;

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
    private final Uri f20666a;

    /* renamed from: b  reason: collision with root package name */
    private String f20667b;

    /* renamed from: c  reason: collision with root package name */
    private Long f20668c;

    /* renamed from: d  reason: collision with root package name */
    private String f20669d;

    /* renamed from: e  reason: collision with root package name */
    private String f20670e;

    /* renamed from: f  reason: collision with root package name */
    private String[] f20671f;

    /* renamed from: g  reason: collision with root package name */
    private String f20672g;

    /* renamed from: h  reason: collision with root package name */
    private String f20673h;

    /* renamed from: i  reason: collision with root package name */
    private Boolean f20674i;

    public a(Uri forUri) {
        Intrinsics.checkNotNullParameter(forUri, "forUri");
        this.f20666a = forUri;
    }

    private final ReadableMap d() {
        Long l10;
        String str;
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString(StackTraceHelper.NAME_KEY, this.f20667b);
        createMap.putString("uri", this.f20666a.toString());
        if (this.f20668c != null) {
            createMap.putDouble("size", l10.longValue());
        } else {
            createMap.putNull("size");
        }
        String str2 = this.f20669d;
        String str3 = null;
        if (str2 != null) {
            str = str2.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(str, "toLowerCase(...)");
        } else {
            str = null;
        }
        createMap.putString("type", str);
        String str4 = this.f20669d;
        if (str4 != null) {
            str3 = str4.toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(str3, "toLowerCase(...)");
        }
        createMap.putString("nativeType", str3);
        String[] strArr = this.f20671f;
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
        createMap.putString("error", this.f20670e);
        Boolean bool = this.f20674i;
        if (bool != null) {
            createMap.putBoolean("isVirtual", bool.booleanValue());
        } else {
            createMap.putNull("isVirtual");
        }
        String str6 = this.f20672g;
        if (str6 != null) {
            byte[] bytes = str6.getBytes(Charsets.UTF_8);
            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
            String encodeToString = Base64.encodeToString(bytes, 0);
            createMap.putString("bookmarkStatus", "success");
            createMap.putString("bookmark", encodeToString);
            return createMap;
        }
        String str7 = this.f20673h;
        if (str7 != null) {
            createMap.putString("bookmarkStatus", "error");
            createMap.putString("bookmarkError", str7);
        }
        return createMap;
    }

    public final a a(Uri bookmark) {
        Intrinsics.checkNotNullParameter(bookmark, "bookmark");
        this.f20672g = bookmark.toString();
        return this;
    }

    public final a b(String str) {
        this.f20673h = str;
        return this;
    }

    public final ReadableMap c() {
        return d();
    }

    public final Uri e() {
        return this.f20666a;
    }

    public final boolean f() {
        if (this.f20669d != null) {
            return true;
        }
        return false;
    }

    public final a g(String str) {
        this.f20670e = str;
        return this;
    }

    public final a h(String str) {
        this.f20669d = str;
        return this;
    }

    public final a i(String str) {
        this.f20667b = str;
        return this;
    }

    public final a j(String[] strArr) {
        this.f20671f = strArr;
        return this;
    }

    public final a k(Long l10) {
        this.f20668c = l10;
        return this;
    }

    public final a l(boolean z10) {
        this.f20674i = Boolean.valueOf(z10);
        return this;
    }
}
