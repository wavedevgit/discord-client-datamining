package z1;

import android.content.ContentProviderClient;
import android.content.ContentUris;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.pm.ProviderInfo;
import android.content.pm.Signature;
import android.content.res.Resources;
import android.database.Cursor;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.Build;
import android.os.CancellationSignal;
import android.os.RemoteException;
import android.util.Log;
import androidx.collection.LruCache;
import com.facebook.react.views.text.ReactFontManager;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import r1.k;
import z1.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final LruCache f55505a = new LruCache(2);

    /* renamed from: b  reason: collision with root package name */
    private static final Comparator f55506b = new Comparator() { // from class: z1.c
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return d.a((byte[]) obj, (byte[]) obj2);
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        static a a(Context context, Uri uri) {
            return new b(context, uri);
        }

        Cursor b(Uri uri, String[] strArr, String str, String[] strArr2, String str2, CancellationSignal cancellationSignal);

        void close();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements a {

        /* renamed from: a  reason: collision with root package name */
        private final ContentProviderClient f55507a;

        b(Context context, Uri uri) {
            this.f55507a = context.getContentResolver().acquireUnstableContentProviderClient(uri);
        }

        @Override // z1.d.a
        public Cursor b(Uri uri, String[] strArr, String str, String[] strArr2, String str2, CancellationSignal cancellationSignal) {
            ContentProviderClient contentProviderClient = this.f55507a;
            if (contentProviderClient == null) {
                return null;
            }
            try {
                return contentProviderClient.query(uri, strArr, str, strArr2, str2, cancellationSignal);
            } catch (RemoteException e10) {
                Log.w("FontsProvider", "Unable to query the content provider", e10);
                return null;
            }
        }

        @Override // z1.d.a
        public void close() {
            ContentProviderClient contentProviderClient = this.f55507a;
            if (contentProviderClient != null) {
                contentProviderClient.close();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        String f55508a;

        /* renamed from: b  reason: collision with root package name */
        String f55509b;

        /* renamed from: c  reason: collision with root package name */
        List f55510c;

        c(String str, String str2, List list) {
            this.f55508a = str;
            this.f55509b = str2;
            this.f55510c = list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Objects.equals(this.f55508a, cVar.f55508a) && Objects.equals(this.f55509b, cVar.f55509b) && Objects.equals(this.f55510c, cVar.f55510c)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Objects.hash(this.f55508a, this.f55509b, this.f55510c);
        }
    }

    public static /* synthetic */ int a(byte[] bArr, byte[] bArr2) {
        if (bArr.length != bArr2.length) {
            return bArr.length - bArr2.length;
        }
        for (int i10 = 0; i10 < bArr.length; i10++) {
            byte b10 = bArr[i10];
            byte b11 = bArr2[i10];
            if (b10 != b11) {
                return b10 - b11;
            }
        }
        return 0;
    }

    private static List b(Signature[] signatureArr) {
        ArrayList arrayList = new ArrayList();
        for (Signature signature : signatureArr) {
            arrayList.add(signature.toByteArray());
        }
        return arrayList;
    }

    private static boolean c(List list, List list2) {
        if (list.size() != list2.size()) {
            return false;
        }
        for (int i10 = 0; i10 < list.size(); i10++) {
            if (!Arrays.equals((byte[]) list.get(i10), (byte[]) list2.get(i10))) {
                return false;
            }
        }
        return true;
    }

    private static List d(e eVar, Resources resources) {
        if (eVar.b() != null) {
            return eVar.b();
        }
        return q1.g.c(resources, eVar.c());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g.a e(Context context, List list, CancellationSignal cancellationSignal) {
        String h10;
        Typeface h11;
        c4.a.c("FontProvider.getFontFamilyResult");
        try {
            ArrayList arrayList = new ArrayList();
            for (int i10 = 0; i10 < list.size(); i10++) {
                e eVar = (e) list.get(i10);
                if (Build.VERSION.SDK_INT >= 31 && (h11 = k.h((h10 = eVar.h()))) != null && k.j(h11) != null) {
                    arrayList.add(new g.b[]{new g.b(h10, eVar.i())});
                } else {
                    ProviderInfo f10 = f(context.getPackageManager(), eVar, context.getResources());
                    if (f10 == null) {
                        return g.a.b(1, null);
                    }
                    arrayList.add(g(context, eVar, f10.authority, cancellationSignal));
                }
            }
            return g.a.a(0, arrayList);
        } finally {
            c4.a.f();
        }
    }

    static ProviderInfo f(PackageManager packageManager, e eVar, Resources resources) {
        c4.a.c("FontProvider.getProvider");
        try {
            List d10 = d(eVar, resources);
            c cVar = new c(eVar.e(), eVar.f(), d10);
            ProviderInfo providerInfo = (ProviderInfo) f55505a.d(cVar);
            if (providerInfo != null) {
                return providerInfo;
            }
            String e10 = eVar.e();
            ProviderInfo resolveContentProvider = packageManager.resolveContentProvider(e10, 0);
            if (resolveContentProvider != null) {
                if (resolveContentProvider.packageName.equals(eVar.f())) {
                    List b10 = b(packageManager.getPackageInfo(resolveContentProvider.packageName, 64).signatures);
                    Collections.sort(b10, f55506b);
                    for (int i10 = 0; i10 < d10.size(); i10++) {
                        ArrayList arrayList = new ArrayList((Collection) d10.get(i10));
                        Collections.sort(arrayList, f55506b);
                        if (c(b10, arrayList)) {
                            f55505a.f(cVar, resolveContentProvider);
                            return resolveContentProvider;
                        }
                    }
                    c4.a.f();
                    return null;
                }
                throw new PackageManager.NameNotFoundException("Found content provider " + e10 + ", but package was not " + eVar.f());
            }
            throw new PackageManager.NameNotFoundException("No package found for authority: " + e10);
        } finally {
            c4.a.f();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r16v1 */
    /* JADX WARN: Type inference failed for: r16v11 */
    /* JADX WARN: Type inference failed for: r16v2, types: [z1.d$a] */
    static g.b[] g(Context context, e eVar, String str, CancellationSignal cancellationSignal) {
        ?? r16;
        String[] strArr;
        a aVar;
        int i10;
        int i11;
        a aVar2;
        Uri withAppendedId;
        int i12;
        boolean z10;
        c4.a.c("FontProvider.query");
        try {
            ArrayList arrayList = new ArrayList();
            Uri build = new Uri.Builder().scheme("content").authority(str).build();
            Uri build2 = new Uri.Builder().scheme("content").authority(str).appendPath("file").build();
            a a10 = a.a(context, build);
            Cursor cursor = null;
            try {
                strArr = new String[]{"_id", "file_id", "font_ttc_index", "font_variation_settings", "font_weight", "font_italic", "result_code"};
                c4.a.c("ContentQueryWrapper.query");
            } catch (Throwable th2) {
                th = th2;
                r16 = a10;
            }
            try {
                Cursor b10 = a10.b(build, strArr, "query = ?", new String[]{eVar.g()}, null, cancellationSignal);
                if (b10 != null && b10.getCount() > 0) {
                    int columnIndex = b10.getColumnIndex("result_code");
                    ArrayList arrayList2 = new ArrayList();
                    int columnIndex2 = b10.getColumnIndex("_id");
                    int columnIndex3 = b10.getColumnIndex("file_id");
                    int columnIndex4 = b10.getColumnIndex("font_ttc_index");
                    int columnIndex5 = b10.getColumnIndex("font_weight");
                    int columnIndex6 = b10.getColumnIndex("font_italic");
                    while (b10.moveToNext()) {
                        if (columnIndex != -1) {
                            i10 = b10.getInt(columnIndex);
                        } else {
                            i10 = 0;
                        }
                        if (columnIndex4 != -1) {
                            i11 = b10.getInt(columnIndex4);
                        } else {
                            i11 = 0;
                        }
                        if (columnIndex3 == -1) {
                            context = a10;
                            withAppendedId = ContentUris.withAppendedId(build, b10.getLong(columnIndex2));
                            aVar2 = context;
                        } else {
                            aVar2 = a10;
                            withAppendedId = ContentUris.withAppendedId(build2, b10.getLong(columnIndex3));
                        }
                        if (columnIndex5 != -1) {
                            i12 = b10.getInt(columnIndex5);
                        } else {
                            i12 = ReactFontManager.TypefaceStyle.NORMAL;
                        }
                        if (columnIndex6 != -1) {
                            z10 = true;
                            if (b10.getInt(columnIndex6) == 1) {
                                arrayList2.add(g.b.a(withAppendedId, i11, i12, z10, i10));
                                a10 = aVar2;
                            }
                        }
                        z10 = false;
                        arrayList2.add(g.b.a(withAppendedId, i11, i12, z10, i10));
                        a10 = aVar2;
                    }
                    aVar = a10;
                    arrayList = arrayList2;
                } else {
                    aVar = a10;
                }
                if (b10 != null) {
                    b10.close();
                }
                aVar.close();
                return (g.b[]) arrayList.toArray(new g.b[0]);
            } catch (Throwable th3) {
                th = th3;
                r16 = context;
                if (0 != 0) {
                    cursor.close();
                }
                r16.close();
                throw th;
            }
        } finally {
            c4.a.f();
        }
    }
}
