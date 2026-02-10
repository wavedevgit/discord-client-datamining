package com.google.android.play.core.integrity;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcelable;
import android.util.Base64;
import com.google.android.gms.tasks.Task;
import java.util.ArrayList;
import ni.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private final ni.t0 f17067a;

    /* renamed from: b  reason: collision with root package name */
    private final String f17068b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f17069c;

    /* renamed from: d  reason: collision with root package name */
    private final r f17070d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f17071e;

    /* renamed from: f  reason: collision with root package name */
    final ni.f f17072f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Context context, ni.t0 t0Var, r rVar, x0 x0Var) {
        this.f17068b = context.getPackageName();
        this.f17067a = t0Var;
        this.f17070d = rVar;
        this.f17071e = x0Var;
        this.f17069c = context;
        if (!ni.j.b(context)) {
            t0Var.a("Phonesky is not installed.", new Object[0]);
            this.f17072f = null;
            return;
        }
        this.f17072f = new ni.f(context, t0Var, "IntegrityService", l.f17074a, new ni.a1() { // from class: di.b
            @Override // ni.a1
            public final Object a(IBinder iBinder) {
                return p0.f(iBinder);
            }
        }, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle a(k kVar, byte[] bArr, Long l10, Parcelable parcelable) {
        Bundle bundle = new Bundle();
        bundle.putString("package.name", kVar.f17068b);
        bundle.putByteArray("nonce", bArr);
        bundle.putInt("playcore.integrity.version.major", 1);
        bundle.putInt("playcore.integrity.version.minor", 4);
        bundle.putInt("playcore.integrity.version.patch", 0);
        if (l10 != null) {
            bundle.putLong("cloud.prj", l10.longValue());
        }
        if (parcelable != null) {
            bundle.putParcelable("network", parcelable);
        }
        ArrayList arrayList = new ArrayList();
        ni.g0.b(3, arrayList);
        bundle.putParcelableArrayList("event_timestamps", new ArrayList<>(ni.g0.a(arrayList)));
        return bundle;
    }

    public final Task b(IntegrityTokenRequest integrityTokenRequest) {
        if (this.f17072f != null) {
            if (ni.j.a(this.f17069c) >= 82380000) {
                try {
                    byte[] decode = Base64.decode(integrityTokenRequest.b(), 10);
                    Long a10 = integrityTokenRequest.a();
                    if (integrityTokenRequest instanceof o) {
                        o oVar = (o) integrityTokenRequest;
                    }
                    this.f17067a.c("requestIntegrityToken(%s)", integrityTokenRequest);
                    zg.k kVar = new zg.k();
                    this.f17072f.t(new h(this, kVar, decode, a10, null, kVar, integrityTokenRequest), kVar);
                    return kVar.a();
                } catch (IllegalArgumentException e10) {
                    return zg.m.e(new a(-13, e10));
                }
            }
            return zg.m.e(new a(-14, null));
        }
        return zg.m.e(new a(-2, null));
    }
}
