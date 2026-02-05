package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import com.discord.js_watchdog.SharedPreferencesKey;
import com.google.android.gms.tasks.Task;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k4 implements AssetPackManager {

    /* renamed from: m  reason: collision with root package name */
    private static final wh.k0 f15855m = new wh.k0("AssetPackManager");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15856a;

    /* renamed from: b  reason: collision with root package name */
    private final d0 f15857b;

    /* renamed from: c  reason: collision with root package name */
    private final i0 f15858c;

    /* renamed from: d  reason: collision with root package name */
    private final wh.e f15859d;

    /* renamed from: e  reason: collision with root package name */
    private final r2 f15860e;

    /* renamed from: f  reason: collision with root package name */
    private final b2 f15861f;

    /* renamed from: g  reason: collision with root package name */
    private final g1 f15862g;

    /* renamed from: h  reason: collision with root package name */
    private final o3 f15863h;

    /* renamed from: i  reason: collision with root package name */
    private final Handler f15864i = new Handler(Looper.getMainLooper());

    /* renamed from: j  reason: collision with root package name */
    private boolean f15865j;

    /* renamed from: k  reason: collision with root package name */
    private final wh.r f15866k;

    /* renamed from: l  reason: collision with root package name */
    private final wh.r f15867l;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k4(n0 n0Var, wh.r rVar, d0 d0Var, i0 i0Var, wh.e eVar, r2 r2Var, b2 b2Var, g1 g1Var, wh.r rVar2, o3 o3Var) {
        this.f15856a = n0Var;
        this.f15866k = rVar;
        this.f15857b = d0Var;
        this.f15858c = i0Var;
        this.f15859d = eVar;
        this.f15860e = r2Var;
        this.f15861f = b2Var;
        this.f15862g = g1Var;
        this.f15867l = rVar2;
        this.f15863h = o3Var;
    }

    public static /* synthetic */ void e(k4 k4Var) {
        k4Var.f15856a.K();
        k4Var.f15856a.I();
        k4Var.f15856a.J();
    }

    public static /* synthetic */ void f(k4 k4Var) {
        final n0 n0Var = k4Var.f15856a;
        Objects.requireNonNull(n0Var);
        ((t4) k4Var.f15866k.a()).c(k4Var.f15856a.G()).f((Executor) k4Var.f15867l.a(), new xg.g() { // from class: com.google.android.play.core.assetpacks.y2
            @Override // xg.g
            public final void onSuccess(Object obj) {
                n0.this.c((List) obj);
            }
        }).d((Executor) k4Var.f15867l.a(), new xg.f() { // from class: com.google.android.play.core.assetpacks.x3
            @Override // xg.f
            public final void onFailure(Exception exc) {
                k4.f15855m.e(String.format("Could not sync active asset packs. %s", exc), new Object[0]);
            }
        });
    }

    private final void i() {
        ((Executor) this.f15867l.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.i4
            @Override // java.lang.Runnable
            public final void run() {
                k4.f(k4.this);
            }
        });
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final synchronized void a(AssetPackStateUpdateListener assetPackStateUpdateListener) {
        this.f15858c.a(assetPackStateUpdateListener);
        d0 d0Var = this.f15857b;
        boolean f10 = d0Var.f();
        d0Var.c(assetPackStateUpdateListener);
        if (!f10) {
            i();
        }
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final Task b(List list) {
        Map G = this.f15856a.G();
        ArrayList arrayList = new ArrayList(list);
        if (arrayList.isEmpty()) {
            Bundle bundle = new Bundle();
            bundle.putInt(SharedPreferencesKey.SESSION_ID, 0);
            bundle.putInt("error_code", 0);
            Iterator it = list.iterator();
            while (it.hasNext()) {
                String str = (String) it.next();
                bundle.putInt(xh.b.a("status", str), 4);
                bundle.putInt(xh.b.a("error_code", str), 0);
                bundle.putLong(xh.b.a("total_bytes_to_download", str), 0L);
                bundle.putLong(xh.b.a("bytes_downloaded", str), 0L);
            }
            bundle.putStringArrayList("pack_names", new ArrayList<>(list));
            bundle.putLong("total_bytes_to_download", 0L);
            bundle.putLong("bytes_downloaded", 0L);
            return xg.m.f(d.a(bundle, this.f15861f, this.f15863h));
        }
        return ((t4) this.f15866k.a()).e(arrayList, G);
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final b c(String str) {
        if (!this.f15865j) {
            ((Executor) this.f15867l.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.j4
                @Override // java.lang.Runnable
                public final void run() {
                    k4.e(k4.this);
                }
            });
            this.f15865j = true;
        }
        if (this.f15856a.f(str)) {
            try {
                return this.f15856a.s(str);
            } catch (IOException unused) {
                return null;
            }
        } else if (!this.f15859d.a().contains(str)) {
            return null;
        } else {
            return b.a();
        }
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackManager
    public final d d(List list) {
        int intValue;
        Map h10 = this.f15860e.h(list);
        HashMap hashMap = new HashMap();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            Integer num = (Integer) h10.get(str);
            if (num == null) {
                intValue = 0;
            } else {
                intValue = num.intValue();
            }
            hashMap.put(str, AssetPackState.a(str, intValue, 0, 0L, 0L, 0.0d, 0, "", ""));
        }
        ((t4) this.f15866k.a()).f(list);
        return new t0(0L, hashMap);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void h(boolean z10) {
        d0 d0Var = this.f15857b;
        boolean f10 = d0Var.f();
        d0Var.d(z10);
        if (z10 && !f10) {
            i();
        }
    }
}
