package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.RandomAccessFile;
import java.util.Properties;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b4 {

    /* renamed from: h  reason: collision with root package name */
    private static final th.k0 f15309h = new th.k0("SliceMetadataManager");

    /* renamed from: b  reason: collision with root package name */
    private final n0 f15311b;

    /* renamed from: c  reason: collision with root package name */
    private final String f15312c;

    /* renamed from: d  reason: collision with root package name */
    private final int f15313d;

    /* renamed from: e  reason: collision with root package name */
    private final long f15314e;

    /* renamed from: f  reason: collision with root package name */
    private final String f15315f;

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f15310a = new byte[8192];

    /* renamed from: g  reason: collision with root package name */
    private int f15316g = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b4(n0 n0Var, String str, int i10, long j10, String str2) {
        this.f15311b = n0Var;
        this.f15312c = str;
        this.f15313d = i10;
        this.f15314e = j10;
        this.f15315f = str2;
    }

    private final File n() {
        File B = this.f15311b.B(this.f15312c, this.f15313d, this.f15314e, this.f15315f);
        if (!B.exists()) {
            B.mkdirs();
        }
        return B;
    }

    private final File o() {
        File A = this.f15311b.A(this.f15312c, this.f15313d, this.f15314e, this.f15315f);
        A.getParentFile().mkdirs();
        A.createNewFile();
        return A;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int a() {
        File A = this.f15311b.A(this.f15312c, this.f15313d, this.f15314e, this.f15315f);
        if (!A.exists()) {
            return 0;
        }
        FileInputStream fileInputStream = new FileInputStream(A);
        try {
            Properties properties = new Properties();
            properties.load(fileInputStream);
            fileInputStream.close();
            if (Integer.parseInt(properties.getProperty("fileStatus", "-1")) == 4) {
                return -1;
            }
            if (properties.getProperty("previousChunk") != null) {
                return Integer.parseInt(properties.getProperty("previousChunk")) + 1;
            }
            throw new w1("Slice checkpoint file corrupt.");
        } catch (Throwable th2) {
            try {
                fileInputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final a4 b() {
        File A = this.f15311b.A(this.f15312c, this.f15313d, this.f15314e, this.f15315f);
        if (A.exists()) {
            Properties properties = new Properties();
            FileInputStream fileInputStream = new FileInputStream(A);
            try {
                properties.load(fileInputStream);
                fileInputStream.close();
                if (properties.getProperty("fileStatus") != null && properties.getProperty("previousChunk") != null) {
                    try {
                        int parseInt = Integer.parseInt(properties.getProperty("fileStatus"));
                        String property = properties.getProperty("fileName");
                        long parseLong = Long.parseLong(properties.getProperty("fileOffset", "-1"));
                        long parseLong2 = Long.parseLong(properties.getProperty("remainingBytes", "-1"));
                        int parseInt2 = Integer.parseInt(properties.getProperty("previousChunk"));
                        this.f15316g = Integer.parseInt(properties.getProperty("metadataFileCounter", "0"));
                        return new u0(parseInt, property, parseLong, parseLong2, parseInt2);
                    } catch (NumberFormatException e10) {
                        throw new w1("Slice checkpoint file corrupt.", e10);
                    }
                }
                throw new w1("Slice checkpoint file corrupt.");
            } catch (Throwable th2) {
                try {
                    fileInputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }
        throw new w1("Slice checkpoint file does not exist.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final File c() {
        return new File(n(), String.format("%s-NAM.dat", Integer.valueOf(this.f15316g)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void d(InputStream inputStream, long j10) {
        int read;
        RandomAccessFile randomAccessFile = new RandomAccessFile(c(), "rw");
        try {
            randomAccessFile.seek(j10);
            do {
                read = inputStream.read(this.f15310a);
                if (read > 0) {
                    randomAccessFile.write(this.f15310a, 0, read);
                    continue;
                }
            } while (read >= 0);
            randomAccessFile.close();
        } catch (Throwable th2) {
            try {
                randomAccessFile.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void e(long j10, byte[] bArr, int i10, int i11) {
        RandomAccessFile randomAccessFile = new RandomAccessFile(c(), "rw");
        try {
            randomAccessFile.seek(j10);
            randomAccessFile.write(bArr, i10, i11);
            randomAccessFile.close();
        } catch (Throwable th2) {
            try {
                randomAccessFile.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f(int i10) {
        Properties properties = new Properties();
        properties.put("fileStatus", "3");
        properties.put("fileOffset", String.valueOf(c().length()));
        properties.put("previousChunk", String.valueOf(i10));
        properties.put("metadataFileCounter", String.valueOf(this.f15316g));
        FileOutputStream fileOutputStream = new FileOutputStream(o());
        try {
            properties.store(fileOutputStream, (String) null);
            fileOutputStream.close();
        } catch (Throwable th2) {
            try {
                fileOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(String str, long j10, long j11, int i10) {
        Properties properties = new Properties();
        properties.put("fileStatus", "1");
        properties.put("fileName", str);
        properties.put("fileOffset", String.valueOf(j10));
        properties.put("remainingBytes", String.valueOf(j11));
        properties.put("previousChunk", String.valueOf(i10));
        properties.put("metadataFileCounter", String.valueOf(this.f15316g));
        FileOutputStream fileOutputStream = new FileOutputStream(o());
        try {
            properties.store(fileOutputStream, (String) null);
            fileOutputStream.close();
        } catch (Throwable th2) {
            try {
                fileOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void h(byte[] bArr, int i10) {
        Properties properties = new Properties();
        properties.put("fileStatus", "2");
        properties.put("previousChunk", String.valueOf(i10));
        properties.put("metadataFileCounter", String.valueOf(this.f15316g));
        FileOutputStream fileOutputStream = new FileOutputStream(o());
        try {
            properties.store(fileOutputStream, (String) null);
            fileOutputStream.close();
            File z10 = this.f15311b.z(this.f15312c, this.f15313d, this.f15314e, this.f15315f);
            if (z10.exists()) {
                z10.delete();
            }
            fileOutputStream = new FileOutputStream(z10);
            try {
                fileOutputStream.write(bArr);
                fileOutputStream.close();
            } finally {
            }
        } finally {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void i(int i10) {
        Properties properties = new Properties();
        properties.put("fileStatus", "4");
        properties.put("previousChunk", String.valueOf(i10));
        properties.put("metadataFileCounter", String.valueOf(this.f15316g));
        FileOutputStream fileOutputStream = new FileOutputStream(o());
        try {
            properties.store(fileOutputStream, (String) null);
            fileOutputStream.close();
        } catch (Throwable th2) {
            try {
                fileOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void j(byte[] bArr) {
        this.f15316g++;
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(new File(n(), String.format("%s-LFH.dat", Integer.valueOf(this.f15316g))));
            fileOutputStream.write(bArr);
            fileOutputStream.close();
        } catch (IOException e10) {
            throw new w1("Could not write metadata file.", e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void k(byte[] bArr, InputStream inputStream) {
        this.f15316g++;
        FileOutputStream fileOutputStream = new FileOutputStream(c());
        try {
            fileOutputStream.write(bArr);
            int read = inputStream.read(this.f15310a);
            while (read > 0) {
                fileOutputStream.write(this.f15310a, 0, read);
                read = inputStream.read(this.f15310a);
            }
            fileOutputStream.close();
        } catch (Throwable th2) {
            try {
                fileOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void l(byte[] bArr, int i10, int i11) {
        this.f15316g++;
        FileOutputStream fileOutputStream = new FileOutputStream(c());
        try {
            fileOutputStream.write(bArr, 0, i11);
            fileOutputStream.close();
        } catch (Throwable th2) {
            try {
                fileOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        File A = this.f15311b.A(this.f15312c, this.f15313d, this.f15314e, this.f15315f);
        if (!A.exists()) {
            return false;
        }
        try {
            FileInputStream fileInputStream = new FileInputStream(A);
            Properties properties = new Properties();
            properties.load(fileInputStream);
            fileInputStream.close();
            if (properties.getProperty("fileStatus") == null) {
                f15309h.b("Slice checkpoint file corrupt while checking if extraction finished.", new Object[0]);
                return false;
            } else if (Integer.parseInt(properties.getProperty("fileStatus")) != 4) {
                return false;
            } else {
                return true;
            }
        } catch (IOException e10) {
            f15309h.b("Could not read checkpoint while checking if extraction finished. %s", e10);
            return false;
        }
    }
}
