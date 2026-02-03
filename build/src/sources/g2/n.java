package g2;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.ServiceInfo;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: e  reason: collision with root package name */
    public static final a f25716e = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f25717a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f25718b;

    /* renamed from: c  reason: collision with root package name */
    private m f25719c;

    /* renamed from: d  reason: collision with root package name */
    private m f25720d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public n(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f25717a = context;
    }

    private final List a(Context context) {
        String string;
        PackageInfo packageInfo = context.getPackageManager().getPackageInfo(context.getPackageName(), 132);
        ArrayList arrayList = new ArrayList();
        ServiceInfo[] serviceInfoArr = packageInfo.services;
        if (serviceInfoArr != null) {
            Intrinsics.checkNotNull(serviceInfoArr);
            for (ServiceInfo serviceInfo : serviceInfoArr) {
                Bundle bundle = serviceInfo.metaData;
                if (bundle != null && (string = bundle.getString("androidx.credentials.CREDENTIAL_PROVIDER_KEY")) != null) {
                    arrayList.add(string);
                }
            }
        }
        return CollectionsKt.h1(arrayList);
    }

    public static /* synthetic */ m d(n nVar, Object obj, boolean z10, int i10, Object obj2) {
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        return nVar.b(obj, z10);
    }

    private final m e(List list, Context context) {
        Iterator it = list.iterator();
        m mVar = null;
        while (it.hasNext()) {
            try {
                Object newInstance = Class.forName((String) it.next()).getConstructor(Context.class).newInstance(context);
                Intrinsics.checkNotNull(newInstance, "null cannot be cast to non-null type androidx.credentials.CredentialProvider");
                m mVar2 = (m) newInstance;
                if (!mVar2.isAvailableOnDevice()) {
                    continue;
                } else if (mVar != null) {
                    Log.i("CredProviderFactory", "Only one active OEM CredentialProvider allowed");
                    return null;
                } else {
                    mVar = mVar2;
                }
            } catch (Throwable unused) {
            }
        }
        return mVar;
    }

    private final m f() {
        if (this.f25718b) {
            m mVar = this.f25719c;
            if (mVar == null) {
                return null;
            }
            Intrinsics.checkNotNull(mVar);
            if (!mVar.isAvailableOnDevice()) {
                return null;
            }
            return this.f25719c;
        }
        v vVar = new v(this.f25717a);
        if (!vVar.isAvailableOnDevice()) {
            return null;
        }
        return vVar;
    }

    private final m g() {
        if (this.f25718b) {
            m mVar = this.f25720d;
            if (mVar == null) {
                return null;
            }
            Intrinsics.checkNotNull(mVar);
            if (!mVar.isAvailableOnDevice()) {
                return null;
            }
            return this.f25720d;
        }
        List a10 = a(this.f25717a);
        if (a10.isEmpty()) {
            return null;
        }
        return e(a10, this.f25717a);
    }

    public final m b(Object request, boolean z10) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (Intrinsics.areEqual(request, "androidx.credentials.TYPE_CLEAR_RESTORE_CREDENTIAL")) {
            return g();
        }
        if (request instanceof c0) {
            for (l lVar : ((c0) request).a()) {
            }
        }
        return c(z10);
    }

    public final m c(boolean z10) {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            m f10 = f();
            if (f10 == null && z10) {
                return g();
            }
            return f10;
        } else if (i10 <= 33) {
            return g();
        } else {
            return null;
        }
    }
}
