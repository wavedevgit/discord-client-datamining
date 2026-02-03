package com.reactnativedocumentpicker;

import android.webkit.MimeTypeMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f18214a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final WritableMap a(boolean z10, String str, String str2) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            createMap.putNull("UTType");
            createMap.putBoolean("isKnown", z10);
            createMap.putString("preferredFilenameExtension", str);
            createMap.putString("mimeType", str2);
            return createMap;
        }

        public final WritableMap b(String kind, String value) {
            Intrinsics.checkNotNullParameter(kind, "kind");
            Intrinsics.checkNotNullParameter(value, "value");
            boolean z10 = true;
            if (Intrinsics.areEqual(kind, "mimeType")) {
                String extensionFromMimeType = MimeTypeMap.getSingleton().getExtensionFromMimeType(value);
                if (extensionFromMimeType == null) {
                    z10 = false;
                }
                if (extensionFromMimeType == null) {
                    value = null;
                }
                return a(z10, extensionFromMimeType, value);
            } else if (Intrinsics.areEqual(kind, "extension")) {
                String mimeTypeFromExtension = MimeTypeMap.getSingleton().getMimeTypeFromExtension(value);
                if (mimeTypeFromExtension == null) {
                    z10 = false;
                }
                if (mimeTypeFromExtension == null) {
                    value = null;
                }
                return a(z10, value, mimeTypeFromExtension);
            } else {
                return a(false, null, null);
            }
        }

        private a() {
        }
    }
}
