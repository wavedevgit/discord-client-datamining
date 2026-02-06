package h2;

import android.os.Bundle;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m extends Exception {

    /* renamed from: i  reason: collision with root package name */
    public static final a f25768i = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final String f25769d;

    /* renamed from: e  reason: collision with root package name */
    private final CharSequence f25770e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final m a(Bundle bundle) {
            Intrinsics.checkNotNullParameter(bundle, "bundle");
            String string = bundle.getString("androidx.credentials.provider.extra.CREATE_CREDENTIAL_EXCEPTION_TYPE");
            if (string != null) {
                return k2.a.c(string, bundle.getCharSequence("androidx.credentials.provider.extra.CREATE_CREDENTIAL_EXCEPTION_MESSAGE"));
            }
            throw new IllegalArgumentException("Bundle was missing exception type.");
        }

        private a() {
        }
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public m(java.lang.String r2, java.lang.CharSequence r3) {
        /*
            r1 = this;
            java.lang.String r0 = "type"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            if (r3 == 0) goto Lc
            java.lang.String r0 = r3.toString()
            goto Ld
        Lc:
            r0 = 0
        Ld:
            r1.<init>(r0)
            r1.f25769d = r2
            r1.f25770e = r3
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: h2.m.<init>(java.lang.String, java.lang.CharSequence):void");
    }
}
