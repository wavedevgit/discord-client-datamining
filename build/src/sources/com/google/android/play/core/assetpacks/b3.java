package com.google.android.play.core.assetpacks;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.ParcelFileDescriptor;
import android.os.Parcelable;
import com.discord.js_watchdog.SharedPreferencesKey;
import com.google.android.gms.tasks.Task;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FilenameFilter;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b3 implements t4 {

    /* renamed from: i  reason: collision with root package name */
    private static final yh.k0 f15812i = new yh.k0("FakeAssetPackService");

    /* renamed from: j  reason: collision with root package name */
    private static final AtomicInteger f15813j = new AtomicInteger(1);

    /* renamed from: k  reason: collision with root package name */
    public static final /* synthetic */ int f15814k = 0;

    /* renamed from: a  reason: collision with root package name */
    private final String f15815a;

    /* renamed from: b  reason: collision with root package name */
    private final d0 f15816b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f15817c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f15818d;

    /* renamed from: e  reason: collision with root package name */
    private final q3 f15819e;

    /* renamed from: f  reason: collision with root package name */
    private final o3 f15820f;

    /* renamed from: g  reason: collision with root package name */
    private final Handler f15821g = new Handler(Looper.getMainLooper());

    /* renamed from: h  reason: collision with root package name */
    private final yh.r f15822h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b3(File file, d0 d0Var, b2 b2Var, Context context, q3 q3Var, yh.r rVar, o3 o3Var) {
        this.f15815a = file.getAbsolutePath();
        this.f15816b = d0Var;
        this.f15817c = b2Var;
        this.f15818d = context;
        this.f15819e = q3Var;
        this.f15822h = rVar;
        this.f15820f = o3Var;
    }

    static long h(int i10, long j10) {
        if (i10 != 2) {
            if (i10 == 3 || i10 == 4) {
                return j10;
            }
            return 0L;
        }
        return j10 / 2;
    }

    private final Bundle l(int i10, String str, int i11) {
        Intent intent;
        Bundle bundle = new Bundle();
        bundle.putInt("app_version_code", this.f15819e.a());
        bundle.putInt(SharedPreferencesKey.SESSION_ID, i10);
        File[] q10 = q(str);
        ArrayList<String> arrayList = new ArrayList<>();
        long j10 = 0;
        for (File file : q10) {
            j10 += file.length();
            ArrayList<? extends Parcelable> arrayList2 = new ArrayList<>();
            if (i11 == 3) {
                intent = new Intent().setData(Uri.EMPTY);
            } else {
                intent = null;
            }
            arrayList2.add(intent);
            String a10 = yh.l.a(file);
            bundle.putParcelableArrayList(zh.b.b("chunk_intents", str, a10), arrayList2);
            bundle.putString(zh.b.b("uncompressed_hash_sha256", str, a10), n(file));
            bundle.putLong(zh.b.b("uncompressed_size", str, a10), file.length());
            arrayList.add(a10);
        }
        bundle.putStringArrayList(zh.b.a("slice_ids", str), arrayList);
        bundle.putLong(zh.b.a("pack_version", str), this.f15819e.a());
        bundle.putInt(zh.b.a("status", str), i11);
        bundle.putInt(zh.b.a("error_code", str), 0);
        bundle.putLong(zh.b.a("bytes_downloaded", str), h(i11, j10));
        bundle.putLong(zh.b.a("total_bytes_to_download", str), j10);
        bundle.putStringArrayList("pack_names", new ArrayList<>(Arrays.asList(str)));
        bundle.putLong("bytes_downloaded", h(i11, j10));
        bundle.putLong("total_bytes_to_download", j10);
        final Intent putExtra = new Intent("com.google.android.play.core.assetpacks.receiver.ACTION_SESSION_UPDATE").putExtra("com.google.android.play.core.assetpacks.receiver.EXTRA_SESSION_STATE", bundle);
        this.f15821g.post(new Runnable() { // from class: com.google.android.play.core.assetpacks.a3
            @Override // java.lang.Runnable
            public final void run() {
                r0.f15816b.b(b3.this.f15818d, putExtra);
            }
        });
        return bundle;
    }

    private final AssetPackState m(String str, int i10) {
        long j10 = 0;
        for (File file : q(str)) {
            j10 += file.length();
        }
        return AssetPackState.a(str, i10, 0, h(i10, j10), j10, this.f15817c.a(str), 1, String.valueOf(this.f15819e.a()), this.f15820f.a(str));
    }

    private static String n(File file) {
        try {
            return d3.a(Arrays.asList(file));
        } catch (IOException e10) {
            throw new ai.a(String.format("Could not digest file: %s.", file), e10);
        } catch (NoSuchAlgorithmException e11) {
            throw new ai.a("SHA256 algorithm not supported.", e11);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final /* synthetic */ void o(int i10, String str) {
        try {
            l(i10, str, 4);
        } catch (ai.a e10) {
            f15812i.e("notifyModuleCompleted failed", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final /* synthetic */ void p(List list, zg.k kVar) {
        HashMap hashMap = new HashMap();
        Iterator it = list.iterator();
        long j10 = 0;
        while (it.hasNext()) {
            String str = (String) it.next();
            try {
                AssetPackState m10 = m(str, 1);
                j10 += m10.j();
                hashMap.put(str, m10);
            } catch (ai.a e10) {
                kVar.b(e10);
                return;
            }
        }
        Iterator it2 = list.iterator();
        while (it2.hasNext()) {
            String str2 = (String) it2.next();
            try {
                int andIncrement = f15813j.getAndIncrement();
                l(andIncrement, str2, 1);
                l(andIncrement, str2, 2);
                l(andIncrement, str2, 3);
            } catch (ai.a e11) {
                kVar.b(e11);
                return;
            }
        }
        kVar.c(new t0(j10, hashMap));
    }

    private final File[] q(final String str) {
        File file = new File(this.f15815a);
        if (file.isDirectory()) {
            File[] listFiles = file.listFiles(new FilenameFilter() { // from class: com.google.android.play.core.assetpacks.w2
                @Override // java.io.FilenameFilter
                public final boolean accept(File file2, String str2) {
                    int i10 = b3.f15814k;
                    if (str2.startsWith(String.valueOf(str).concat("-")) && str2.endsWith(".apk")) {
                        return true;
                    }
                    return false;
                }
            });
            if (listFiles != null) {
                if (listFiles.length != 0) {
                    for (File file2 : listFiles) {
                        if (yh.l.a(file2).equals(str)) {
                            return listFiles;
                        }
                    }
                    throw new ai.a(String.format("No main slice available for pack '%s'.", str));
                }
                throw new ai.a(String.format("No APKs available for pack '%s'.", str));
            }
            throw new ai.a(String.format("Failed fetching APKs for pack '%s'.", str));
        }
        throw new ai.a(String.format("Local testing directory '%s' not found.", file));
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void a(int i10) {
        f15812i.d("notifySessionFailed", new Object[0]);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void b(final int i10, final String str) {
        f15812i.d("notifyModuleCompleted", new Object[0]);
        ((Executor) this.f15822h.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.x2
            @Override // java.lang.Runnable
            public final void run() {
                b3.this.o(i10, str);
            }
        });
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task c(Map map) {
        f15812i.d("syncPacks()", new Object[0]);
        return zg.m.f(new ArrayList());
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task d(int i10, String str, String str2, int i11) {
        File[] q10;
        int i12;
        f15812i.d("getChunkFileDescriptor(session=%d, %s, %s, %d)", Integer.valueOf(i10), str, str2, Integer.valueOf(i11));
        zg.k kVar = new zg.k();
        try {
        } catch (ai.a e10) {
            f15812i.e("getChunkFileDescriptor failed", e10);
            kVar.b(e10);
        } catch (FileNotFoundException e11) {
            f15812i.e("getChunkFileDescriptor failed", e11);
            kVar.b(new ai.a("Asset Slice file not found.", e11));
        }
        for (File file : q(str)) {
            if (yh.l.a(file).equals(str2)) {
                kVar.c(ParcelFileDescriptor.open(file, 268435456));
                return kVar.a();
            }
        }
        throw new ai.a(String.format("Local testing slice for '%s' not found.", str2));
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task e(final List list, Map map) {
        f15812i.d("startDownload(%s)", list);
        final zg.k kVar = new zg.k();
        ((Executor) this.f15822h.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.z2
            @Override // java.lang.Runnable
            public final void run() {
                b3.this.p(list, kVar);
            }
        });
        return kVar.a();
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void f(List list) {
        f15812i.d("cancelDownload(%s)", list);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void g(int i10, String str, String str2, int i11) {
        f15812i.d("notifyChunkTransferred", new Object[0]);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void f() {
        f15812i.d("keepAlive", new Object[0]);
    }
}
