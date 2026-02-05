package g2;

import android.os.Bundle;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e0 extends l {

    /* renamed from: k  reason: collision with root package name */
    public static final a f23582k = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private final String f23583i;

    /* renamed from: j  reason: collision with root package name */
    private final byte[] f23584j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Bundle a(String requestJson, byte[] bArr) {
            Intrinsics.checkNotNullParameter(requestJson, "requestJson");
            Bundle bundle = new Bundle();
            bundle.putString("androidx.credentials.BUNDLE_KEY_SUBTYPE", "androidx.credentials.BUNDLE_VALUE_SUBTYPE_GET_PUBLIC_KEY_CREDENTIAL_OPTION");
            bundle.putString("androidx.credentials.BUNDLE_KEY_REQUEST_JSON", requestJson);
            bundle.putByteArray("androidx.credentials.BUNDLE_KEY_CLIENT_DATA_HASH", bArr);
            return bundle;
        }

        private a() {
        }
    }

    /* synthetic */ e0(String str, byte[] bArr, Set set, Bundle bundle, Bundle bundle2, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, bArr, set, bundle, bundle2, (i11 & 32) != 0 ? 100 : i10);
    }

    public final String f() {
        return this.f23583i;
    }

    private e0(String str, byte[] bArr, Set set, Bundle bundle, Bundle bundle2, int i10) {
        super("androidx.credentials.TYPE_PUBLIC_KEY_CREDENTIAL", bundle, bundle2, false, true, set, i10);
        this.f23583i = str;
        this.f23584j = bArr;
        if (!k2.c.f31561a.a(str)) {
            throw new IllegalArgumentException("requestJson must not be empty, and must be a valid JSON");
        }
    }

    public /* synthetic */ e0(String str, byte[] bArr, Set set, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? null : bArr, (i10 & 4) != 0 ? x0.d() : set);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public e0(java.lang.String r11, byte[] r12, java.util.Set r13) {
        /*
            r10 = this;
            java.lang.String r0 = "requestJson"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r11, r0)
            java.lang.String r0 = "allowedProviders"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r13, r0)
            g2.e0$a r0 = g2.e0.f23582k
            android.os.Bundle r5 = r0.a(r11, r12)
            android.os.Bundle r6 = r0.a(r11, r12)
            r8 = 32
            r9 = 0
            r7 = 0
            r1 = r10
            r2 = r11
            r3 = r12
            r4 = r13
            r1.<init>(r2, r3, r4, r5, r6, r7, r8, r9)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: g2.e0.<init>(java.lang.String, byte[], java.util.Set):void");
    }
}
