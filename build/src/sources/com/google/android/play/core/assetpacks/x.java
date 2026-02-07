package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Parcelable;
import com.discord.js_watchdog.SharedPreferencesKey;
import com.google.android.gms.tasks.Task;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements t4 {

    /* renamed from: g  reason: collision with root package name */
    private static final xh.k0 f16061g = new xh.k0("AssetPackServiceImpl");

    /* renamed from: h  reason: collision with root package name */
    private static final Intent f16062h = new Intent("com.google.android.play.core.assetmoduleservice.BIND_ASSET_MODULE_SERVICE").setPackage("com.android.vending");

    /* renamed from: a  reason: collision with root package name */
    private final String f16063a;

    /* renamed from: b  reason: collision with root package name */
    private final b2 f16064b;

    /* renamed from: c  reason: collision with root package name */
    private final o3 f16065c;

    /* renamed from: d  reason: collision with root package name */
    private xh.v0 f16066d;

    /* renamed from: e  reason: collision with root package name */
    private xh.v0 f16067e;

    /* renamed from: f  reason: collision with root package name */
    private final AtomicBoolean f16068f = new AtomicBoolean();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Type inference failed for: r5v0, types: [wh.a] */
    /* JADX WARN: Type inference failed for: r7v0, types: [wh.a] */
    public x(Context context, b2 b2Var, o3 o3Var) {
        this.f16063a = context.getPackageName();
        this.f16064b = b2Var;
        this.f16065c = o3Var;
        if (xh.j.b(context)) {
            Context a10 = xh.h.a(context);
            xh.k0 k0Var = f16061g;
            Intent intent = f16062h;
            this.f16066d = new xh.v0(a10, k0Var, "AssetPackService", intent, new Object() { // from class: wh.a
            }, null);
            this.f16067e = new xh.v0(xh.h.a(context), k0Var, "AssetPackService-keepAlive", intent, new Object() { // from class: wh.a
            }, null);
        }
        f16061g.a("AssetPackService initiated.", new Object[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Bundle A(int i10, String str) {
        Bundle i11 = i(i10);
        i11.putString("module_name", str);
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Bundle h() {
        Bundle bundle = new Bundle();
        bundle.putInt("playcore_version_code", 20300);
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.add(0);
        arrayList.add(1);
        bundle.putIntegerArrayList("supported_compression_formats", arrayList);
        ArrayList<Integer> arrayList2 = new ArrayList<>();
        arrayList2.add(1);
        arrayList2.add(2);
        bundle.putIntegerArrayList("supported_patch_formats", arrayList2);
        return bundle;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Bundle i(int i10) {
        Bundle bundle = new Bundle();
        bundle.putInt(SharedPreferencesKey.SESSION_ID, i10);
        return bundle;
    }

    private static Task j() {
        f16061g.b("onError(%d)", -11);
        return yg.m.e(new a(-11));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void k(int i10, String str, int i11) {
        if (this.f16066d != null) {
            f16061g.d("notifyModuleCompleted", new Object[0]);
            yg.k kVar = new yg.k();
            this.f16066d.t(new k(this, kVar, i10, str, kVar, i11), kVar);
            return;
        }
        throw new w1("The Play Store app is not installed or is an unofficial version.", i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle l(int i10, String str, String str2, int i11) {
        Bundle A = A(i10, str);
        A.putString("slice_id", str2);
        A.putInt("chunk_number", i11);
        return A;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle o(Map map) {
        Bundle h10 = h();
        ArrayList<? extends Parcelable> arrayList = new ArrayList<>();
        for (Map.Entry entry : map.entrySet()) {
            Bundle bundle = new Bundle();
            bundle.putString("installed_asset_module_name", (String) entry.getKey());
            bundle.putLong("installed_asset_module_version", ((Long) entry.getValue()).longValue());
            arrayList.add(bundle);
        }
        h10.putParcelableArrayList("installed_asset_module", arrayList);
        return h10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ ArrayList w(Collection collection) {
        ArrayList arrayList = new ArrayList(collection.size());
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            Bundle bundle = new Bundle();
            bundle.putString("module_name", (String) it.next());
            arrayList.add(bundle);
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ List x(x xVar, List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            AssetPackState assetPackState = (AssetPackState) d.a((Bundle) it.next(), xVar.f16064b, xVar.f16065c).c().values().iterator().next();
            if (assetPackState == null) {
                f16061g.b("onGetSessionStates: Bundle contained no pack.", new Object[0]);
            }
            if (m0.a(assetPackState.i())) {
                arrayList.add(assetPackState.h());
            }
        }
        return arrayList;
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void a(int i10) {
        if (this.f16066d != null) {
            f16061g.d("notifySessionFailed", new Object[0]);
            yg.k kVar = new yg.k();
            this.f16066d.t(new l(this, kVar, i10, kVar), kVar);
            return;
        }
        throw new w1("The Play Store app is not installed or is an unofficial version.", i10);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void b(int i10, String str) {
        k(i10, str, 10);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task c(Map map) {
        if (this.f16066d == null) {
            return j();
        }
        f16061g.d("syncPacks", new Object[0]);
        yg.k kVar = new yg.k();
        this.f16066d.t(new i(this, kVar, map, kVar), kVar);
        return kVar.a();
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task d(int i10, String str, String str2, int i11) {
        if (this.f16066d == null) {
            return j();
        }
        f16061g.d("getChunkFileDescriptor(%s, %s, %d, session=%d)", str, str2, Integer.valueOf(i11), Integer.valueOf(i10));
        yg.k kVar = new yg.k();
        this.f16066d.t(new m(this, kVar, i10, str, str2, i11, kVar), kVar);
        return kVar.a();
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task e(List list, Map map) {
        if (this.f16066d == null) {
            return j();
        }
        f16061g.d("startDownload(%s)", list);
        yg.k kVar = new yg.k();
        this.f16066d.t(new g(this, kVar, list, map, kVar), kVar);
        kVar.a().g(new yg.g() { // from class: com.google.android.play.core.assetpacks.f
            @Override // yg.g
            public final void onSuccess(Object obj) {
                d dVar = (d) obj;
                x.this.f();
            }
        });
        return kVar.a();
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void f(List list) {
        if (this.f16066d == null) {
            return;
        }
        f16061g.d("cancelDownloads(%s)", list);
        yg.k kVar = new yg.k();
        this.f16066d.t(new h(this, kVar, list, kVar), kVar);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void g(int i10, String str, String str2, int i11) {
        if (this.f16066d != null) {
            f16061g.d("notifyChunkTransferred", new Object[0]);
            yg.k kVar = new yg.k();
            this.f16066d.t(new j(this, kVar, i10, str, str2, i11, kVar), kVar);
            return;
        }
        throw new w1("The Play Store app is not installed or is an unofficial version.", i10);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final synchronized void f() {
        if (this.f16067e == null) {
            f16061g.e("Keep alive connection manager is not initialized.", new Object[0]);
            return;
        }
        xh.k0 k0Var = f16061g;
        k0Var.d("keepAlive", new Object[0]);
        if (!this.f16068f.compareAndSet(false, true)) {
            k0Var.d("Service is already kept alive.", new Object[0]);
            return;
        }
        yg.k kVar = new yg.k();
        this.f16067e.t(new n(this, kVar, kVar), kVar);
    }
}
