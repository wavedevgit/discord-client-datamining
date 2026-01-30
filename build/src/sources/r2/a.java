package r2;

import android.content.Intent;
import android.credentials.Credential;
import android.credentials.GetCredentialException;
import android.credentials.GetCredentialResponse;
import android.os.Build;
import android.os.Bundle;
import g2.d0;
import g2.h;
import h2.m;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public static final c f47836a = new c(null);

    /* renamed from: r2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0576a {

        /* renamed from: a  reason: collision with root package name */
        public static final C0577a f47837a = new C0577a(null);

        /* renamed from: r2.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0577a {
            public /* synthetic */ C0577a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final m a(Intent intent) {
                Intrinsics.checkNotNullParameter(intent, "intent");
                m.a aVar = m.f27341i;
                Bundle bundleExtra = intent.getBundleExtra("android.service.credentials.extra.GET_CREDENTIAL_EXCEPTION");
                if (bundleExtra == null) {
                    return null;
                }
                return aVar.a(bundleExtra);
            }

            public final d0 b(Intent intent) {
                Intrinsics.checkNotNullParameter(intent, "intent");
                d0.a aVar = d0.f25588b;
                Bundle bundleExtra = intent.getBundleExtra("android.service.credentials.extra.GET_CREDENTIAL_RESPONSE");
                if (bundleExtra == null) {
                    return null;
                }
                return aVar.a(bundleExtra);
            }

            private C0577a() {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public static final C0578a f47838a = new C0578a(null);

        /* renamed from: r2.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0578a {
            public /* synthetic */ C0578a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final m a(Intent intent) {
                Intrinsics.checkNotNullParameter(intent, "intent");
                GetCredentialException serializableExtra = intent.getSerializableExtra("android.service.credentials.extra.GET_CREDENTIAL_EXCEPTION", GetCredentialException.class);
                if (serializableExtra == null) {
                    return null;
                }
                String type = serializableExtra.getType();
                Intrinsics.checkNotNullExpressionValue(type, "ex.type");
                return k2.a.c(type, serializableExtra.getMessage());
            }

            public final d0 b(Intent intent) {
                Intrinsics.checkNotNullParameter(intent, "intent");
                GetCredentialResponse getCredentialResponse = (GetCredentialResponse) intent.getParcelableExtra("android.service.credentials.extra.GET_CREDENTIAL_RESPONSE", GetCredentialResponse.class);
                if (getCredentialResponse == null) {
                    return null;
                }
                h.a aVar = h.f25602c;
                Credential credential = getCredentialResponse.getCredential();
                Intrinsics.checkNotNullExpressionValue(credential, "response.credential");
                return new d0(aVar.a(credential));
            }

            private C0578a() {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {
        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final m a(Intent intent) {
            Intrinsics.checkNotNullParameter(intent, "intent");
            if (Build.VERSION.SDK_INT >= 34) {
                return b.f47838a.a(intent);
            }
            return C0576a.f47837a.a(intent);
        }

        public final d0 b(Intent intent) {
            Intrinsics.checkNotNullParameter(intent, "intent");
            if (Build.VERSION.SDK_INT >= 34) {
                return b.f47838a.b(intent);
            }
            return C0576a.f47837a.b(intent);
        }

        private c() {
        }
    }
}
