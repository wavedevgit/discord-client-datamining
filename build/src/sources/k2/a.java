package k2;

import android.content.Context;
import android.graphics.drawable.Icon;
import android.os.Bundle;
import g2.f;
import g2.i0;
import h2.d;
import h2.e;
import h2.g;
import h2.h;
import h2.i;
import h2.j;
import h2.k;
import h2.l;
import h2.m;
import h2.n;
import h2.o;
import h2.p;
import h2.q;
import h2.r;
import j2.b;
import j2.e;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {
    public static final Bundle a(g2.b request, Context context) {
        int i10;
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(context, "context");
        Bundle b10 = request.b();
        Bundle a10 = request.c().a();
        if (request instanceof f) {
            i10 = i0.f23852b;
        } else {
            i10 = i0.f23851a;
        }
        a10.putParcelable("androidx.credentials.BUNDLE_KEY_CREDENTIAL_TYPE_ICON", Icon.createWithResource(context, i10));
        b10.putBundle("androidx.credentials.BUNDLE_KEY_REQUEST_DISPLAY_INFO", a10);
        return b10;
    }

    public static final e b(String errorType, CharSequence charSequence) {
        Intrinsics.checkNotNullParameter(errorType, "errorType");
        switch (errorType.hashCode()) {
            case -2055374133:
                if (errorType.equals("android.credentials.CreateCredentialException.TYPE_USER_CANCELED")) {
                    return new h2.c(charSequence);
                }
                break;
            case -1166690414:
                if (errorType.equals("androidx.credentials.TYPE_CREATE_CREDENTIAL_UNSUPPORTED_EXCEPTION")) {
                    return new j(charSequence);
                }
                break;
            case -580283253:
                if (errorType.equals("androidx.credentials.TYPE_CREATE_CREDENTIAL_PROVIDER_CONFIGURATION_EXCEPTION")) {
                    return new h(charSequence);
                }
                break;
            case 1316905704:
                if (errorType.equals("android.credentials.CreateCredentialException.TYPE_UNKNOWN")) {
                    return new i(charSequence);
                }
                break;
            case 2092588512:
                if (errorType.equals("android.credentials.CreateCredentialException.TYPE_INTERRUPTED")) {
                    return new h2.f(charSequence);
                }
                break;
            case 2131915191:
                if (errorType.equals("android.credentials.CreateCredentialException.TYPE_NO_CREATE_OPTIONS")) {
                    return new g(charSequence);
                }
                break;
        }
        String str = null;
        if (StringsKt.P(errorType, "androidx.credentials.TYPE_CREATE_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION", false, 2, null)) {
            b.a aVar = j2.b.f29754p;
            if (charSequence != null) {
                str = charSequence.toString();
            }
            return aVar.a(errorType, str);
        }
        return new d(errorType, charSequence);
    }

    public static final m c(String errorType, CharSequence charSequence) {
        Intrinsics.checkNotNullParameter(errorType, "errorType");
        switch (errorType.hashCode()) {
            case -781118336:
                if (errorType.equals("android.credentials.GetCredentialException.TYPE_UNKNOWN")) {
                    return new p(charSequence);
                }
                break;
            case -408155724:
                if (errorType.equals("androidx.credentials.TYPE_GET_CREDENTIAL_UNSUPPORTED_EXCEPTION")) {
                    return new q(charSequence);
                }
                break;
            case -45448328:
                if (errorType.equals("android.credentials.GetCredentialException.TYPE_INTERRUPTED")) {
                    return new n(charSequence);
                }
                break;
            case 580557411:
                if (errorType.equals("android.credentials.GetCredentialException.TYPE_USER_CANCELED")) {
                    return new k(charSequence);
                }
                break;
            case 627896683:
                if (errorType.equals("android.credentials.GetCredentialException.TYPE_NO_CREDENTIAL")) {
                    return new r(charSequence);
                }
                break;
            case 1594095913:
                if (errorType.equals("androidx.credentials.TYPE_GET_CREDENTIAL_PROVIDER_CONFIGURATION_EXCEPTION")) {
                    return new o(charSequence);
                }
                break;
        }
        String str = null;
        if (StringsKt.P(errorType, "androidx.credentials.TYPE_GET_PUBLIC_KEY_CREDENTIAL_DOM_EXCEPTION", false, 2, null)) {
            e.a aVar = j2.e.f29759p;
            if (charSequence != null) {
                str = charSequence.toString();
            }
            return aVar.a(errorType, str);
        }
        return new l(errorType, charSequence);
    }
}
