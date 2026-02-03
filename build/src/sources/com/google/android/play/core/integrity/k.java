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
    private final gi.t0 f15804a;

    /* renamed from: b  reason: collision with root package name */
    private final String f15805b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f15806c;

    /* renamed from: d  reason: collision with root package name */
    private final r f15807d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f15808e;

    /* renamed from: f  reason: collision with root package name */
    final gi.f f15809f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Context context, gi.t0 t0Var, r rVar, x0 x0Var) {
        this.f15805b = context.getPackageName();
        this.f15804a = t0Var;
        this.f15807d = rVar;
        this.f15808e = x0Var;
        this.f15806c = context;
        if (!gi.j.b(context)) {
            t0Var.a("Phonesky is not installed.", new Object[0]);
            this.f15809f = null;
            return;
        }
        this.f15809f = new gi.f(context, t0Var, "IntegrityService", l.f15811a, new gi.a1() { // from class: wh.b
            @Override // gi.a1
            public final Object a(IBinder iBinder) {
                return p0.f(iBinder);
            }
        }, null);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle a(k kVar, byte[] bArr, Long l10, Parcelable parcelable) {
        Bundle bundle = new Bundle();
        bundle.putString("package.name", kVar.f15805b);
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
        if (this.f15809f != null) {
            if (gi.j.a(this.f15806c) >= 82380000) {
                try {
                    byte[] decode = Base64.decode(integrityTokenRequest.b(), 10);
                    Long a10 = integrityTokenRequest.a();
                    if (integrityTokenRequest instanceof o) {
                        o oVar = (o) integrityTokenRequest;
                    }
                    this.f15804a.c("requestIntegrityToken(%s)", integrityTokenRequest);
                    wg.k kVar = new wg.k();
                    this.f15809f.t(new h(this, kVar, decode, a10, null, kVar, integrityTokenRequest), kVar);
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
