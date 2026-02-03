package g2;

import android.os.Bundle;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import g2.b;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends b {

    /* renamed from: l  reason: collision with root package name */
    public static final a f25689l = new a(null);

    /* renamed from: j  reason: collision with root package name */
    private final String f25690j;

    /* renamed from: k  reason: collision with root package name */
    private final byte[] f25691k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ b.C0348b b(a aVar, String str, String str2, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                str2 = null;
            }
            return aVar.a(str, str2);
        }

        public final b.C0348b a(String requestJson, String str) {
            String string;
            Intrinsics.checkNotNullParameter(requestJson, "requestJson");
            try {
                JSONObject jSONObject = new JSONObject(requestJson).getJSONObject("user");
                String userName = jSONObject.getString(StackTraceHelper.NAME_KEY);
                if (jSONObject.isNull("displayName")) {
                    string = null;
                } else {
                    string = jSONObject.getString("displayName");
                }
                Intrinsics.checkNotNullExpressionValue(userName, "userName");
                return new b.C0348b(userName, string, null, str);
            } catch (Exception unused) {
                throw new IllegalArgumentException("user.name must be defined in requestJson");
            }
        }

        public final Bundle c(String requestJson, byte[] bArr) {
            Intrinsics.checkNotNullParameter(requestJson, "requestJson");
            Bundle bundle = new Bundle();
            bundle.putString("androidx.credentials.BUNDLE_KEY_SUBTYPE", "androidx.credentials.BUNDLE_VALUE_SUBTYPE_CREATE_PUBLIC_KEY_CREDENTIAL_REQUEST");
            bundle.putString("androidx.credentials.BUNDLE_KEY_REQUEST_JSON", requestJson);
            bundle.putByteArray("androidx.credentials.BUNDLE_KEY_CLIENT_DATA_HASH", bArr);
            return bundle;
        }

        public final Bundle d(String requestJson, byte[] bArr) {
            Intrinsics.checkNotNullParameter(requestJson, "requestJson");
            Bundle bundle = new Bundle();
            bundle.putString("androidx.credentials.BUNDLE_KEY_SUBTYPE", "androidx.credentials.BUNDLE_VALUE_SUBTYPE_CREATE_PUBLIC_KEY_CREDENTIAL_REQUEST");
            bundle.putString("androidx.credentials.BUNDLE_KEY_REQUEST_JSON", requestJson);
            bundle.putByteArray("androidx.credentials.BUNDLE_KEY_CLIENT_DATA_HASH", bArr);
            return bundle;
        }

        private a() {
        }
    }

    /* synthetic */ f(String str, byte[] bArr, boolean z10, boolean z11, b.C0348b c0348b, String str2, Bundle bundle, Bundle bundle2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bArr, z10, z11, c0348b, (i10 & 32) != 0 ? null : str2, (i10 & 64) != 0 ? f25689l.d(str, bArr) : bundle, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? f25689l.c(str, bArr) : bundle2);
    }

    public final String g() {
        return this.f25690j;
    }

    private f(String str, byte[] bArr, boolean z10, boolean z11, b.C0348b c0348b, String str2, Bundle bundle, Bundle bundle2) {
        super("androidx.credentials.TYPE_PUBLIC_KEY_CREDENTIAL", bundle, bundle2, false, z10, c0348b, str2, z11);
        this.f25690j = str;
        this.f25691k = bArr;
        if (!k2.c.f32700a.a(str)) {
            throw new IllegalArgumentException("requestJson must not be empty, and must be a valid JSON");
        }
    }

    public /* synthetic */ f(String str, byte[] bArr, boolean z10, String str2, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? null : bArr, (i10 & 4) != 0 ? false : z10, (i10 & 8) != 0 ? null : str2, (i10 & 16) != 0 ? false : z11);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public f(String requestJson, byte[] bArr, boolean z10, String str, boolean z11) {
        this(requestJson, bArr, z11, z10, a.b(f25689l, requestJson, null, 2, null), str, null, null, 192, null);
        Intrinsics.checkNotNullParameter(requestJson, "requestJson");
    }
}
