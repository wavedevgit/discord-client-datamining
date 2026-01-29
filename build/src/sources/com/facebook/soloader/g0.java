package com.facebook.soloader;

import android.content.Context;
import android.os.Parcel;
import java.io.Closeable;
import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.InputStream;
import java.io.RandomAccessFile;
import java.io.SyncFailedException;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g0 extends f implements com.facebook.soloader.b {

    /* renamed from: d  reason: collision with root package name */
    protected final Context f12447d;

    /* renamed from: e  reason: collision with root package name */
    private String[] f12448e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements FilenameFilter {
        a() {
        }

        @Override // java.io.FilenameFilter
        public boolean accept(File file, String str) {
            if (!str.equals("dso_state") && !str.equals("dso_lock") && !str.equals("dso_deps")) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ boolean f12450d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ File f12451e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ n f12452i;

        b(boolean z10, File file, n nVar) {
            this.f12450d = z10;
            this.f12451e = file;
            this.f12452i = nVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            p.f("fb-UnpackingSoSource", "starting syncer worker");
            try {
                if (this.f12450d) {
                    SysUtil.f(g0.this.f12444a);
                }
                g0.u(this.f12451e, (byte) 1, this.f12450d);
                p.f("fb-UnpackingSoSource", "releasing dso store lock for " + g0.this.f12444a + " (from syncer thread)");
                this.f12452i.close();
            } catch (IOException e10) {
                throw new RuntimeException(e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: d  reason: collision with root package name */
        public final String f12454d;

        /* renamed from: e  reason: collision with root package name */
        public final String f12455e;

        public c(String str, String str2) {
            this.f12454d = str;
            this.f12455e = str2;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    protected static final class d implements Closeable {

        /* renamed from: d  reason: collision with root package name */
        private final c f12456d;

        /* renamed from: e  reason: collision with root package name */
        private final InputStream f12457e;

        public d(c cVar, InputStream inputStream) {
            this.f12456d = cVar;
            this.f12457e = inputStream;
        }

        public int available() {
            return this.f12457e.available();
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f12457e.close();
        }

        public c h() {
            return this.f12456d;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class e implements Closeable {
        public void a(d dVar, byte[] bArr, File file) {
            boolean exists;
            boolean writable;
            p.d("fb-UnpackingSoSource", "extracting DSO " + dVar.h().f12454d);
            File file2 = new File(file, dVar.h().f12454d);
            try {
                try {
                    RandomAccessFile randomAccessFile = new RandomAccessFile(file2, "rw");
                    try {
                        int available = dVar.available();
                        if (available > 1) {
                            SysUtil.d(randomAccessFile.getFD(), available);
                        }
                        SysUtil.a(randomAccessFile, dVar.f12457e, Integer.MAX_VALUE, bArr);
                        randomAccessFile.setLength(randomAccessFile.getFilePointer());
                        if (file2.setExecutable(true, false)) {
                            randomAccessFile.close();
                            if (exists) {
                                if (!writable) {
                                    return;
                                }
                                return;
                            }
                            return;
                        }
                        throw new IOException("cannot make file executable: " + file2);
                    } catch (Throwable th2) {
                        try {
                            randomAccessFile.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                        throw th2;
                    }
                } catch (IOException e10) {
                    p.b("fb-UnpackingSoSource", "error extracting dso  " + file2 + " due to: " + e10);
                    SysUtil.c(file2);
                    throw e10;
                }
            } finally {
                if (file2.exists() && !file2.setWritable(false)) {
                    p.b("SoLoader", "Error removing " + file2 + " write permission from directory " + file + " (writable: " + file.canWrite() + ")");
                }
            }
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }

        public abstract c[] h();

        public abstract void l(File file);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public g0(Context context, String str, boolean z10) {
        super(p(context, str), z10 ? 1 : 0);
        this.f12447d = context;
    }

    private void j() {
        File[] listFiles = this.f12444a.listFiles(new a());
        if (listFiles != null) {
            for (File file : listFiles) {
                p.f("fb-UnpackingSoSource", "Deleting " + file);
                SysUtil.c(file);
            }
            return;
        }
        throw new IOException("unable to list directory " + this.f12444a);
    }

    private static boolean m(int i10) {
        return (i10 & 2) != 0;
    }

    public static File p(Context context, String str) {
        return new File(context.getApplicationInfo().dataDir + "/" + str);
    }

    private boolean r(n nVar, int i10) {
        byte b10;
        boolean z10;
        RandomAccessFile randomAccessFile;
        File file = new File(this.f12444a, "dso_state");
        byte[] n10 = n();
        if (!m(i10) && !k(n10)) {
            randomAccessFile = new RandomAccessFile(file, "rw");
            try {
                if (randomAccessFile.length() == 1) {
                    try {
                        b10 = randomAccessFile.readByte();
                    } catch (IOException e10) {
                        p.f("fb-UnpackingSoSource", "dso store " + this.f12444a + " regeneration interrupted: " + e10.getMessage());
                    }
                    if (b10 == 1) {
                        p.f("fb-UnpackingSoSource", "dso store " + this.f12444a + " regeneration not needed: state file clean");
                        randomAccessFile.close();
                    }
                }
                b10 = 0;
                randomAccessFile.close();
            } catch (Throwable th2) {
                throw th2;
            }
        } else {
            b10 = 0;
        }
        if (b10 == 1) {
            return false;
        }
        if ((i10 & 4) == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        p.f("fb-UnpackingSoSource", "so store dirty: regenerating");
        u(file, (byte) 0, z10);
        j();
        e q10 = q();
        try {
            q10.l(this.f12444a);
            q10.close();
            randomAccessFile = new RandomAccessFile(new File(this.f12444a, "dso_deps"), "rw");
            try {
                randomAccessFile.write(n10);
                randomAccessFile.setLength(randomAccessFile.getFilePointer());
                randomAccessFile.close();
                b bVar = new b(z10, file, nVar);
                if (s(i10)) {
                    new Thread(bVar, "SoSync:" + this.f12444a.getName()).start();
                } else {
                    bVar.run();
                }
                return true;
            } finally {
                try {
                    randomAccessFile.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
        } catch (Throwable th4) {
            if (q10 != null) {
                try {
                    q10.close();
                } catch (Throwable th5) {
                    th4.addSuppressed(th5);
                }
            }
            throw th4;
        }
    }

    private static boolean s(int i10) {
        return (i10 & 1) != 0;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void u(File file, byte b10, boolean z10) {
        try {
            RandomAccessFile randomAccessFile = new RandomAccessFile(file, "rw");
            randomAccessFile.seek(0L);
            randomAccessFile.write(b10);
            randomAccessFile.setLength(randomAccessFile.getFilePointer());
            if (z10) {
                randomAccessFile.getFD().sync();
            }
            randomAccessFile.close();
        } catch (SyncFailedException e10) {
            p.h("fb-UnpackingSoSource", "state file sync failed", e10);
        }
    }

    @Override // com.facebook.soloader.b
    public void a() {
        try {
            n i10 = SysUtil.i(this.f12444a, new File(this.f12444a, "dso_lock"));
            if (i10 != null) {
                i10.close();
            }
        } catch (Exception e10) {
            p.c("fb-UnpackingSoSource", "Encountered exception during wait for unpacking trying to acquire file lock for " + getClass().getName() + " (" + this.f12444a + "): ", e10);
        }
    }

    @Override // com.facebook.soloader.e0
    public void e(int i10) {
        SysUtil.m(this.f12444a);
        if (!this.f12444a.canWrite() && !this.f12444a.setWritable(true)) {
            throw new IOException("error adding " + this.f12444a.getCanonicalPath() + " write permission");
        }
        n nVar = null;
        try {
            try {
                n i11 = SysUtil.i(this.f12444a, new File(this.f12444a, "dso_lock"));
                try {
                    p.f("fb-UnpackingSoSource", "locked dso store " + this.f12444a);
                    if (!this.f12444a.canWrite() && !this.f12444a.setWritable(true)) {
                        throw new IOException("error adding " + this.f12444a.getCanonicalPath() + " write permission");
                    }
                    if (!r(i11, i10)) {
                        p.d("fb-UnpackingSoSource", "dso store is up-to-date: " + this.f12444a);
                        nVar = i11;
                    }
                    if (nVar != null) {
                        p.f("fb-UnpackingSoSource", "releasing dso store lock for " + this.f12444a);
                        nVar.close();
                    } else {
                        p.f("fb-UnpackingSoSource", "not releasing dso store lock for " + this.f12444a + " (syncer thread started)");
                    }
                    if (this.f12444a.canWrite() && !this.f12444a.setWritable(false)) {
                        throw new IOException("error removing " + this.f12444a.getCanonicalPath() + " write permission");
                    }
                } catch (Throwable th2) {
                    th = th2;
                    nVar = i11;
                    if (nVar != null) {
                        p.f("fb-UnpackingSoSource", "releasing dso store lock for " + this.f12444a);
                        nVar.close();
                    } else {
                        p.f("fb-UnpackingSoSource", "not releasing dso store lock for " + this.f12444a + " (syncer thread started)");
                    }
                    throw th;
                }
            } catch (Throwable th3) {
                if (this.f12444a.canWrite() && !this.f12444a.setWritable(false)) {
                    throw new IOException("error removing " + this.f12444a.getCanonicalPath() + " write permission");
                }
                throw th3;
            }
        } catch (Throwable th4) {
            th = th4;
        }
    }

    protected boolean k(byte[] bArr) {
        try {
            RandomAccessFile randomAccessFile = new RandomAccessFile(new File(this.f12444a, "dso_deps"), "rw");
            if (randomAccessFile.length() != 0) {
                int length = (int) randomAccessFile.length();
                byte[] bArr2 = new byte[length];
                if (randomAccessFile.read(bArr2) != length) {
                    p.f("fb-UnpackingSoSource", "short read of so store deps file: marking unclean");
                } else {
                    boolean l10 = l(bArr2, bArr);
                    randomAccessFile.close();
                    return l10;
                }
            }
            randomAccessFile.close();
            return true;
        } catch (IOException e10) {
            p.h("fb-UnpackingSoSource", "failed to compare whether deps changed", e10);
            return true;
        }
    }

    protected boolean l(byte[] bArr, byte[] bArr2) {
        return !Arrays.equals(bArr, bArr2);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public byte[] n() {
        Parcel obtain = Parcel.obtain();
        e q10 = q();
        try {
            c[] h10 = q10.h();
            obtain.writeInt(h10.length);
            for (c cVar : h10) {
                obtain.writeString(cVar.f12454d);
                obtain.writeString(cVar.f12455e);
            }
            q10.close();
            byte[] marshall = obtain.marshall();
            obtain.recycle();
            return marshall;
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

    public c[] o() {
        e q10 = q();
        try {
            c[] h10 = q10.h();
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

    protected abstract e q();

    public void t(String[] strArr) {
        this.f12448e = strArr;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public g0(Context context, String str) {
        this(context, str, true);
    }
}
