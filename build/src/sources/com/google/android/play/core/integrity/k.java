package com.google.android.play.core.integrity;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcelable;
import android.util.Base64;
import com.google.android.gms.tasks.Task;
import java.util.ArrayList;
import ji.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private final ji.t0 f16198a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16199b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f16200c;

    /* renamed from: d  reason: collision with root package name */
    private final r f16201d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f16202e;

    /* renamed from: f  reason: collision with root package name */
    final ji.f f16203f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Context context, ji.t0 t0Var, r rVar, x0 x0Var) {
        this.f16199b = context.getPackageName();
        this.f16198a = t0Var;
        this.f16201d = rVar;
        this.f16202e = x0Var;
        this.f16200c = context;
        if (!ji.j.b(context)) {
            t0Var.a("Phonesky is not installed.", new Object[0]);
            this.f16203f = null;
            return;
        }
        this.f16203f = new ji.f(context, t0Var, "IntegrityService", l.f16205a, new ji.a1() { // from class: zh.b
            @Override // ji.a1
            public final Object a(IBinder iBinder) {
                return p0.f(iBinder);
            }
        }, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle a(k kVar, byte[] bArr, Long l10, Parcelable parcelable) {
        Bundle bundle = new Bundle();
        bundle.putString("package.name", kVar.f16199b);
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
        ji.g0.b(3, arrayList);
        bundle.putParcelableArrayList("event_timestamps", new ArrayList<>(ji.g0.a(arrayList)));
        return bundle;
    }

    public final Task b(IntegrityTokenRequest integrityTokenRequest) {
        if (this.f16203f != null) {
            if (ji.j.a(this.f16200c) >= 82380000) {
                try {
                    byte[] decode = Base64.decode(integrityTokenRequest.b(), 10);
                    Long a10 = integrityTokenRequest.a();
                    if (integrityTokenRequest instanceof o) {
                        o oVar = (o) integrityTokenRequest;
                    }
                    this.f16198a.c("requestIntegrityToken(%s)", integrityTokenRequest);
                    xg.k kVar = new xg.k();
                    this.f16203f.t(new h(this, kVar, decode, a10, null, kVar, integrityTokenRequest), kVar);
                    return kVar.a();
                } catch (IllegalArgumentException e10) {
                    return xg.m.e(new a(-13, e10));
                }
            }
            return xg.m.e(new a(-14, null));
        }
        return xg.m.e(new a(-2, null));
    }
}
