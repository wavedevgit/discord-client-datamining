package o4;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j extends h {

    /* renamed from: f  reason: collision with root package name */
    private final ConnectivityManager f41469f;

    /* renamed from: g  reason: collision with root package name */
    private final a f41470g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends ConnectivityManager.NetworkCallback {
        a() {
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onCapabilitiesChanged(Network network, NetworkCapabilities capabilities) {
            String str;
            Intrinsics.checkNotNullParameter(network, "network");
            Intrinsics.checkNotNullParameter(capabilities, "capabilities");
            k4.m e10 = k4.m.e();
            str = k.f41472a;
            e10.a(str, "Network capabilities changed: " + capabilities);
            j jVar = j.this;
            jVar.g(k.c(jVar.f41469f));
        }

        @Override // android.net.ConnectivityManager.NetworkCallback
        public void onLost(Network network) {
            String str;
            Intrinsics.checkNotNullParameter(network, "network");
            k4.m e10 = k4.m.e();
            str = k.f41472a;
            e10.a(str, "Network connection lost");
            j jVar = j.this;
            jVar.g(k.c(jVar.f41469f));
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(Context context, r4.b taskExecutor) {
        super(context, taskExecutor);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        Object systemService = d().getSystemService("connectivity");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.net.ConnectivityManager");
        this.f41469f = (ConnectivityManager) systemService;
        this.f41470g = new a();
    }

    @Override // o4.h
    public void h() {
        String str;
        String str2;
        String str3;
        try {
            k4.m e10 = k4.m.e();
            str3 = k.f41472a;
            e10.a(str3, "Registering network callback");
            q4.l.a(this.f41469f, this.f41470g);
        } catch (IllegalArgumentException e11) {
            k4.m e12 = k4.m.e();
            str2 = k.f41472a;
            e12.d(str2, "Received exception while registering network callback", e11);
        } catch (SecurityException e13) {
            k4.m e14 = k4.m.e();
            str = k.f41472a;
            e14.d(str, "Received exception while registering network callback", e13);
        }
    }

    @Override // o4.h
    public void i() {
        String str;
        String str2;
        String str3;
        try {
            k4.m e10 = k4.m.e();
            str3 = k.f41472a;
            e10.a(str3, "Unregistering network callback");
            q4.j.c(this.f41469f, this.f41470g);
        } catch (IllegalArgumentException e11) {
            k4.m e12 = k4.m.e();
            str2 = k.f41472a;
            e12.d(str2, "Received exception while unregistering network callback", e11);
        } catch (SecurityException e13) {
            k4.m e14 = k4.m.e();
            str = k.f41472a;
            e14.d(str, "Received exception while unregistering network callback", e13);
        }
    }

    @Override // o4.h
    /* renamed from: k */
    public m4.c e() {
        return k.c(this.f41469f);
    }
}
