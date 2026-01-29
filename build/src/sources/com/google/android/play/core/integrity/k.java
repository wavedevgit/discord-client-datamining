package com.google.android.play.core.integrity;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcelable;
import android.util.Base64;
import com.google.android.gms.tasks.Task;
import gi.p0;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private final gi.t0 f17207a;

    /* renamed from: b  reason: collision with root package name */
    private final String f17208b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f17209c;

    /* renamed from: d  reason: collision with root package name */
    private final r f17210d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f17211e;

    /* renamed from: f  reason: collision with root package name */
    final gi.f f17212f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Context context, gi.t0 t0Var, r rVar, x0 x0Var) {
        this.f17208b = context.getPackageName();
        this.f17207a = t0Var;
        this.f17210d = rVar;
        this.f17211e = x0Var;
        this.f17209c = context;
        if (!gi.j.b(context)) {
            t0Var.a("Phonesky is not installed.", new Object[0]);
            this.f17212f = null;
            return;
        }
        this.f17212f = new gi.f(context, t0Var, "IntegrityService", l.f17214a, new gi.a1() { // from class: wh.b
            @Override // gi.a1
            public final Object a(IBinder iBinder) {
                return p0.f(iBinder);
            }
        }, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle a(k kVar, byte[] bArr, Long l10, Parcelable parcelable) {
        Bundle bundle = new Bundle();
        bundle.putString("package.name", kVar.f17208b);
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
        gi.g0.b(3, arrayList);
        bundle.putParcelableArrayList("event_timestamps", new ArrayList<>(gi.g0.a(arrayList)));
        return bundle;
    }

    public final Task b(IntegrityTokenRequest integrityTokenRequest) {
        if (this.f17212f != null) {
            if (gi.j.a(this.f17209c) >= 82380000) {
                try {
                    byte[] decode = Base64.decode(integrityTokenRequest.b(), 10);
                    Long a10 = integrityTokenRequest.a();
                    if (integrityTokenRequest instanceof o) {
                        o oVar = (o) integrityTokenRequest;
                    }
                    this.f17207a.c("requestIntegrityToken(%s)", integrityTokenRequest);
                    wg.k kVar = new wg.k();
                    this.f17212f.t(new h(this, kVar, decode, a10, null, kVar, integrityTokenRequest), kVar);
                    return kVar.a();
                } catch (IllegalArgumentException e10) {
                    return wg.m.e(new a(-13, e10));
                }
            }
            return wg.m.e(new a(-14, null));
        }
        return wg.m.e(new a(-2, null));
    }
}
