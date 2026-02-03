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
    private static final th.k0 f15298i = new th.k0("FakeAssetPackService");

    /* renamed from: j  reason: collision with root package name */
    private static final AtomicInteger f15299j = new AtomicInteger(1);

    /* renamed from: k  reason: collision with root package name */
    public static final /* synthetic */ int f15300k = 0;

    /* renamed from: a  reason: collision with root package name */
    private final String f15301a;

    /* renamed from: b  reason: collision with root package name */
    private final d0 f15302b;

    /* renamed from: c  reason: collision with root package name */
    private final b2 f15303c;

    /* renamed from: d  reason: collision with root package name */
    private final Context f15304d;

    /* renamed from: e  reason: collision with root package name */
    private final q3 f15305e;

    /* renamed from: f  reason: collision with root package name */
    private final o3 f15306f;

    /* renamed from: g  reason: collision with root package name */
    private final Handler f15307g = new Handler(Looper.getMainLooper());

    /* renamed from: h  reason: collision with root package name */
    private final th.r f15308h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b3(File file, d0 d0Var, b2 b2Var, Context context, q3 q3Var, th.r rVar, o3 o3Var) {
        this.f15301a = file.getAbsolutePath();
        this.f15302b = d0Var;
        this.f15303c = b2Var;
        this.f15304d = context;
        this.f15305e = q3Var;
        this.f15308h = rVar;
        this.f15306f = o3Var;
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
        bundle.putInt("app_version_code", this.f15305e.a());
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
            String a10 = th.l.a(file);
            bundle.putParcelableArrayList(uh.b.b("chunk_intents", str, a10), arrayList2);
            bundle.putString(uh.b.b("uncompressed_hash_sha256", str, a10), n(file));
            bundle.putLong(uh.b.b("uncompressed_size", str, a10), file.length());
            arrayList.add(a10);
        }
        bundle.putStringArrayList(uh.b.a("slice_ids", str), arrayList);
        bundle.putLong(uh.b.a("pack_version", str), this.f15305e.a());
        bundle.putInt(uh.b.a("status", str), i11);
        bundle.putInt(uh.b.a("error_code", str), 0);
        bundle.putLong(uh.b.a("bytes_downloaded", str), h(i11, j10));
        bundle.putLong(uh.b.a("total_bytes_to_download", str), j10);
        bundle.putStringArrayList("pack_names", new ArrayList<>(Arrays.asList(str)));
        bundle.putLong("bytes_downloaded", h(i11, j10));
        bundle.putLong("total_bytes_to_download", j10);
        final Intent putExtra = new Intent("com.google.android.play.core.assetpacks.receiver.ACTION_SESSION_UPDATE").putExtra("com.google.android.play.core.assetpacks.receiver.EXTRA_SESSION_STATE", bundle);
        this.f15307g.post(new Runnable() { // from class: com.google.android.play.core.assetpacks.a3
            @Override // java.lang.Runnable
            public final void run() {
                r0.f15302b.b(b3.this.f15304d, putExtra);
            }
        });
        return bundle;
    }

    private final AssetPackState m(String str, int i10) {
        long j10 = 0;
        for (File file : q(str)) {
            j10 += file.length();
        }
        return AssetPackState.a(str, i10, 0, h(i10, j10), j10, this.f15303c.a(str), 1, String.valueOf(this.f15305e.a()), this.f15306f.a(str));
    }

    private static String n(File file) {
        try {
            return d3.a(Arrays.asList(file));
        } catch (IOException e10) {
            throw new vh.a(String.format("Could not digest file: %s.", file), e10);
        } catch (NoSuchAlgorithmException e11) {
            throw new vh.a("SHA256 algorithm not supported.", e11);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final /* synthetic */ void o(int i10, String str) {
        try {
            l(i10, str, 4);
        } catch (vh.a e10) {
            f15298i.e("notifyModuleCompleted failed", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final /* synthetic */ void p(List list, wg.k kVar) {
        HashMap hashMap = new HashMap();
        Iterator it = list.iterator();
        long j10 = 0;
        while (it.hasNext()) {
            String str = (String) it.next();
            try {
                AssetPackState m10 = m(str, 1);
                j10 += m10.j();
                hashMap.put(str, m10);
            } catch (vh.a e10) {
                kVar.b(e10);
                return;
            }
        }
        Iterator it2 = list.iterator();
        while (it2.hasNext()) {
            String str2 = (String) it2.next();
            try {
                int andIncrement = f15299j.getAndIncrement();
                l(andIncrement, str2, 1);
                l(andIncrement, str2, 2);
                l(andIncrement, str2, 3);
            } catch (vh.a e11) {
                kVar.b(e11);
                return;
            }
        }
        kVar.c(new t0(j10, hashMap));
    }

    private final File[] q(final String str) {
        File file = new File(this.f15301a);
        if (file.isDirectory()) {
            File[] listFiles = file.listFiles(new FilenameFilter() { // from class: com.google.android.play.core.assetpacks.w2
                @Override // java.io.FilenameFilter
                public final boolean accept(File file2, String str2) {
                    int i10 = b3.f15300k;
                    if (str2.startsWith(String.valueOf(str).concat("-")) && str2.endsWith(".apk")) {
                        return true;
                    }
                    return false;
                }
            });
            if (listFiles != null) {
                if (listFiles.length != 0) {
                    for (File file2 : listFiles) {
                        if (th.l.a(file2).equals(str)) {
                            return listFiles;
                        }
                    }
                    throw new vh.a(String.format("No main slice available for pack '%s'.", str));
                }
                throw new vh.a(String.format("No APKs available for pack '%s'.", str));
            }
            throw new vh.a(String.format("Failed fetching APKs for pack '%s'.", str));
        }
        throw new vh.a(String.format("Local testing directory '%s' not found.", file));
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void a(int i10) {
        f15298i.d("notifySessionFailed", new Object[0]);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void b(final int i10, final String str) {
        f15298i.d("notifyModuleCompleted", new Object[0]);
        ((Executor) this.f15308h.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.x2
            @Override // java.lang.Runnable
            public final void run() {
                b3.this.o(i10, str);
            }
        });
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task c(Map map) {
        f15298i.d("syncPacks()", new Object[0]);
        return wg.m.f(new ArrayList());
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task d(int i10, String str, String str2, int i11) {
        File[] q10;
        int i12;
        f15298i.d("getChunkFileDescriptor(session=%d, %s, %s, %d)", Integer.valueOf(i10), str, str2, Integer.valueOf(i11));
        wg.k kVar = new wg.k();
        try {
        } catch (FileNotFoundException e10) {
            f15298i.e("getChunkFileDescriptor failed", e10);
            kVar.b(new vh.a("Asset Slice file not found.", e10));
        } catch (vh.a e11) {
            f15298i.e("getChunkFileDescriptor failed", e11);
            kVar.b(e11);
        }
        for (File file : q(str)) {
            if (th.l.a(file).equals(str2)) {
                kVar.c(ParcelFileDescriptor.open(file, 268435456));
                return kVar.a();
            }
        }
        throw new vh.a(String.format("Local testing slice for '%s' not found.", str2));
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final Task e(final List list, Map map) {
        f15298i.d("startDownload(%s)", list);
        final wg.k kVar = new wg.k();
        ((Executor) this.f15308h.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.z2
            @Override // java.lang.Runnable
            public final void run() {
                b3.this.p(list, kVar);
            }
        });
        return kVar.a();
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void f(List list) {
        f15298i.d("cancelDownload(%s)", list);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void g(int i10, String str, String str2, int i11) {
        f15298i.d("notifyChunkTransferred", new Object[0]);
    }

    @Override // com.google.android.play.core.assetpacks.t4
    public final void f() {
        f15298i.d("keepAlive", new Object[0]);
    }
}
