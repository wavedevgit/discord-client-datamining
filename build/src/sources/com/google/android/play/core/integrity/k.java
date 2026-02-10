package com.google.android.play.core.integrity;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcelable;
import android.util.Base64;
import com.google.android.gms.tasks.Task;
import java.util.ArrayList;
import li.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private final li.t0 f16318a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16319b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f16320c;

    /* renamed from: d  reason: collision with root package name */
    private final r f16321d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f16322e;

    /* renamed from: f  reason: collision with root package name */
    final li.f f16323f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Context context, li.t0 t0Var, r rVar, x0 x0Var) {
        this.f16319b = context.getPackageName();
        this.f16318a = t0Var;
        this.f16321d = rVar;
        this.f16322e = x0Var;
        this.f16320c = context;
        if (!li.j.b(context)) {
            t0Var.a("Phonesky is not installed.", new Object[0]);
            this.f16323f = null;
            return;
        }
        this.f16323f = new li.f(context, t0Var, "IntegrityService", l.f16325a, new li.a1() { // from class: bi.b
            @Override // li.a1
            public final Object a(IBinder iBinder) {
                return p0.f(iBinder);
            }
        }, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle a(k kVar, byte[] bArr, Long l10, Parcelable parcelable) {
        Bundle bundle = new Bundle();
        bundle.putString("package.name", kVar.f16319b);
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
        li.g0.b(3, arrayList);
        bundle.putParcelableArrayList("event_timestamps", new ArrayList<>(li.g0.a(arrayList)));
        return bundle;
    }

    public final Task b(IntegrityTokenRequest integrityTokenRequest) {
        if (this.f16323f != null) {
            if (li.j.a(this.f16320c) >= 82380000) {
                try {
                    byte[] decode = Base64.decode(integrityTokenRequest.b(), 10);
                    Long a10 = integrityTokenRequest.a();
                    if (integrityTokenRequest instanceof o) {
                        o oVar = (o) integrityTokenRequest;
                    }
                    this.f16318a.c("requestIntegrityToken(%s)", integrityTokenRequest);
                    zg.k kVar = new zg.k();
                    this.f16323f.t(new h(this, kVar, decode, a10, null, kVar, integrityTokenRequest), kVar);
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
