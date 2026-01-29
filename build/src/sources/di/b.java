package di;

import android.content.Context;
import android.content.res.AssetManager;
import android.util.Log;
import fi.d0;
import java.io.File;
import java.util.Iterator;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final f f22167a;

    public b(f fVar) {
        this.f22167a = fVar;
    }

    public static final int c(AssetManager assetManager, File file) {
        int intValue = ((Integer) d0.d(assetManager, "addAssetPath", Integer.class, String.class, file.getPath())).intValue();
        Log.d("SplitCompat", "addAssetPath completed with " + intValue);
        return intValue;
    }

    public final synchronized void a(Context context, Set set) {
        AssetManager assets = context.getAssets();
        Iterator it = set.iterator();
        while (it.hasNext()) {
            c(assets, (File) it.next());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0028 A[Catch: all -> 0x0038, Exception -> 0x003a, LOOP:0: B:14:0x0022->B:16:0x0028, LOOP_END, TryCatch #2 {Exception -> 0x003a, blocks: (B:13:0x0019, B:14:0x0022, B:16:0x0028, B:21:0x003c), top: B:43:0x0019, outer: #3 }] */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0041 A[Catch: all -> 0x000c, TRY_ENTER, TRY_LEAVE, TryCatch #4 {, blocks: (B:3:0x0001, B:4:0x0005, B:23:0x0041, B:29:0x0050, B:12:0x0012, B:13:0x0019, B:14:0x0022, B:16:0x0028, B:21:0x003c, B:27:0x0047), top: B:39:0x0001 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final synchronized boolean b(android.content.Context r5, java.util.Set r6) {
        /*
            r4 = this;
            monitor-enter(r4)
            android.os.StrictMode$ThreadPolicy r0 = android.os.StrictMode.getThreadPolicy()     // Catch: java.lang.Throwable -> Lc java.lang.Exception -> L10
            android.os.StrictMode.allowThreadDiskReads()     // Catch: java.lang.Throwable -> Lc java.lang.Exception -> Le
            android.os.StrictMode.allowThreadDiskWrites()     // Catch: java.lang.Throwable -> Lc java.lang.Exception -> Le
            goto L19
        Lc:
            r5 = move-exception
            goto L5d
        Le:
            r1 = move-exception
            goto L12
        L10:
            r1 = move-exception
            r0 = 0
        L12:
            java.lang.String r2 = "SplitCompat"
            java.lang.String r3 = "Unable to set up strict mode."
            android.util.Log.i(r2, r3, r1)     // Catch: java.lang.Throwable -> Lc
        L19:
            java.util.HashSet r1 = new java.util.HashSet     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            r1.<init>()     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            java.util.Iterator r6 = r6.iterator()     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
        L22:
            boolean r2 = r6.hasNext()     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            if (r2 == 0) goto L3c
            java.lang.Object r2 = r6.next()     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            java.lang.String r2 = (java.lang.String) r2     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            di.f r3 = r4.f22167a     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            java.io.File r2 = r3.g(r2)     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            r1.add(r2)     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            goto L22
        L38:
            r5 = move-exception
            goto L56
        L3a:
            r5 = move-exception
            goto L47
        L3c:
            r4.a(r5, r1)     // Catch: java.lang.Throwable -> L38 java.lang.Exception -> L3a
            if (r0 == 0) goto L44
            android.os.StrictMode.setThreadPolicy(r0)     // Catch: java.lang.Throwable -> Lc
        L44:
            monitor-exit(r4)
            r5 = 1
            return r5
        L47:
            java.lang.String r6 = "SplitCompat"
            java.lang.String r1 = "Error installing additional splits"
            android.util.Log.e(r6, r1, r5)     // Catch: java.lang.Throwable -> L38
            if (r0 == 0) goto L53
            android.os.StrictMode.setThreadPolicy(r0)     // Catch: java.lang.Throwable -> Lc
        L53:
            monitor-exit(r4)
            r5 = 0
            return r5
        L56:
            if (r0 != 0) goto L59
            goto L5c
        L59:
            android.os.StrictMode.setThreadPolicy(r0)     // Catch: java.lang.Throwable -> Lc
        L5c:
            throw r5     // Catch: java.lang.Throwable -> Lc
        L5d:
            monitor-exit(r4)     // Catch: java.lang.Throwable -> Lc
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: di.b.b(android.content.Context, java.util.Set):boolean");
    }
}
