package com.facebook.soloader;

import android.content.Context;
import android.os.Parcel;
import android.os.StrictMode;
import com.facebook.soloader.g0;
import com.facebook.soloader.m;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends g0 implements w {

    /* renamed from: f  reason: collision with root package name */
    private final ArrayList f12434f;

    /* renamed from: g  reason: collision with root package name */
    protected boolean f12435g;

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends g0.e {
        protected a() {
        }

        @Override // com.facebook.soloader.g0.e
        public g0.c[] h() {
            ArrayList arrayList = new ArrayList();
            Iterator it = c.this.f12434f.iterator();
            while (it.hasNext()) {
                g0.e q10 = ((m) it.next()).q();
                try {
                    arrayList.addAll(Arrays.asList(q10.h()));
                    q10.close();
                } catch (Throwable th2) {
                    if (q10 != null) {
                        try {
                            q10.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                    }
                    throw th2;
                }
            }
            return (g0.c[]) arrayList.toArray(new g0.c[arrayList.size()]);
        }

        @Override // com.facebook.soloader.g0.e
        public void l(File file) {
            Iterator it = c.this.f12434f.iterator();
            while (it.hasNext()) {
                m.b bVar = (m.b) ((m) it.next()).q();
                try {
                    bVar.l(file);
                    bVar.close();
                } catch (Throwable th2) {
                    if (bVar != null) {
                        try {
                            bVar.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                    }
                    throw th2;
                }
            }
        }
    }

    public c(Context context, String str, boolean z10) {
        super(context, str, z10);
        ArrayList arrayList = new ArrayList();
        this.f12434f = arrayList;
        this.f12435g = false;
        arrayList.add(new m(context, str, new File(context.getApplicationInfo().sourceDir), "^lib/([^/]+)/([^/]+\\.so)$"));
        w(context, str);
    }

    private void w(Context context, String str) {
        if (context.getApplicationInfo().splitSourceDirs != null) {
            try {
                for (String str2 : context.getApplicationInfo().splitSourceDirs) {
                    m mVar = new m(context, str, new File(str2), "^lib/([^/]+)/([^/]+\\.so)$");
                    if (mVar.v()) {
                        p.g("BackupSoSource", "adding backup source from split: " + mVar.toString());
                        this.f12434f.add(mVar);
                    }
                }
            } catch (IOException e10) {
                p.h("BackupSoSource", "failed to read split apks", e10);
            }
        }
    }

    @Override // com.facebook.soloader.w
    public e0 b(Context context) {
        c cVar = new c(context, this.f12444a.getName());
        try {
            cVar.e(0);
            return cVar;
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }

    @Override // com.facebook.soloader.f, com.facebook.soloader.e0
    public String c() {
        return "BackupSoSource";
    }

    @Override // com.facebook.soloader.f, com.facebook.soloader.e0
    public int d(String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        if (!this.f12435g) {
            return 0;
        }
        return super.d(str, i10, threadPolicy);
    }

    @Override // com.facebook.soloader.g0, com.facebook.soloader.e0
    public void e(int i10) {
        if ((i10 & 8) != 0) {
            return;
        }
        super.e(i10);
        this.f12435g = true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.soloader.g0
    public byte[] n() {
        Parcel obtain = Parcel.obtain();
        try {
            obtain.writeByte((byte) 3);
            obtain.writeInt(SysUtil.g(this.f12447d));
            obtain.writeInt(this.f12434f.size());
            Iterator it = this.f12434f.iterator();
            while (it.hasNext()) {
                obtain.writeByteArray(((m) it.next()).n());
            }
            String str = this.f12447d.getApplicationInfo().sourceDir;
            if (str == null) {
                obtain.writeByte((byte) 1);
                byte[] marshall = obtain.marshall();
                obtain.recycle();
                return marshall;
            }
            File canonicalFile = new File(str).getCanonicalFile();
            if (!canonicalFile.exists()) {
                obtain.writeByte((byte) 1);
                byte[] marshall2 = obtain.marshall();
                obtain.recycle();
                return marshall2;
            }
            obtain.writeByte((byte) 2);
            obtain.writeString(canonicalFile.getPath());
            obtain.writeLong(canonicalFile.lastModified());
            byte[] marshall3 = obtain.marshall();
            obtain.recycle();
            return marshall3;
        } catch (Throwable th2) {
            obtain.recycle();
            throw th2;
        }
    }

    @Override // com.facebook.soloader.g0
    public g0.c[] o() {
        g0.e q10 = ((m) this.f12434f.get(0)).q();
        try {
            g0.c[] h10 = q10.h();
            q10.close();
            return h10;
        } catch (Throwable th2) {
            if (q10 != null) {
                try {
                    q10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // com.facebook.soloader.g0
    protected g0.e q() {
        return new a();
    }

    @Override // com.facebook.soloader.f, com.facebook.soloader.e0
    public String toString() {
        String name;
        try {
            name = String.valueOf(this.f12444a.getCanonicalPath());
        } catch (IOException unused) {
            name = this.f12444a.getName();
        }
        return c() + "[root = " + name + " flags = " + this.f12445b + " apks = " + this.f12434f.toString() + "]";
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x003a, code lost:
        r9 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x001a, code lost:
        com.facebook.soloader.p.b("SoLoader", "Found " + r9 + " in " + c());
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean x(java.lang.String r9, int r10) {
        /*
            r8 = this;
            com.facebook.soloader.g0$e r0 = r8.q()
            com.facebook.soloader.g0$c[] r1 = r0.h()     // Catch: java.lang.Throwable -> L3c
            int r2 = r1.length     // Catch: java.lang.Throwable -> L3c
            r3 = 0
            r4 = r3
        Lb:
            java.lang.String r5 = "SoLoader"
            r6 = 1
            if (r4 >= r2) goto L41
            r7 = r1[r4]     // Catch: java.lang.Throwable -> L3c
            java.lang.String r7 = r7.f12454d     // Catch: java.lang.Throwable -> L3c
            boolean r7 = r7.equals(r9)     // Catch: java.lang.Throwable -> L3c
            if (r7 == 0) goto L3e
            java.lang.StringBuilder r1 = new java.lang.StringBuilder     // Catch: java.lang.Throwable -> L3c
            r1.<init>()     // Catch: java.lang.Throwable -> L3c
            java.lang.String r2 = "Found "
            r1.append(r2)     // Catch: java.lang.Throwable -> L3c
            r1.append(r9)     // Catch: java.lang.Throwable -> L3c
            java.lang.String r9 = " in "
            r1.append(r9)     // Catch: java.lang.Throwable -> L3c
            java.lang.String r9 = r8.c()     // Catch: java.lang.Throwable -> L3c
            r1.append(r9)     // Catch: java.lang.Throwable -> L3c
            java.lang.String r9 = r1.toString()     // Catch: java.lang.Throwable -> L3c
            com.facebook.soloader.p.b(r5, r9)     // Catch: java.lang.Throwable -> L3c
            r9 = r6
            goto L42
        L3c:
            r9 = move-exception
            goto L64
        L3e:
            int r4 = r4 + 1
            goto Lb
        L41:
            r9 = r3
        L42:
            r0.close()
            if (r9 != 0) goto L48
            return r3
        L48:
            java.lang.StringBuilder r9 = new java.lang.StringBuilder
            r9.<init>()
            java.lang.String r0 = "Preparing "
            r9.append(r0)
            java.lang.String r0 = r8.c()
            r9.append(r0)
            java.lang.String r9 = r9.toString()
            com.facebook.soloader.p.b(r5, r9)
            r8.e(r10)
            return r6
        L64:
            if (r0 == 0) goto L6e
            r0.close()     // Catch: java.lang.Throwable -> L6a
            goto L6e
        L6a:
            r10 = move-exception
            r9.addSuppressed(r10)
        L6e:
            throw r9
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.soloader.c.x(java.lang.String, int):boolean");
    }

    public c(Context context, String str) {
        this(context, str, true);
    }
}
