package androidx.profileinstaller;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final androidx.concurrent.futures.d f5123a = androidx.concurrent.futures.d.w();

    /* renamed from: b  reason: collision with root package name */
    private static final Object f5124b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static c f5125c = null;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static PackageInfo a(PackageManager packageManager, Context context) {
            return packageManager.getPackageInfo(context.getPackageName(), PackageManager.PackageInfoFlags.of(0L));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {

        /* renamed from: a  reason: collision with root package name */
        final int f5126a;

        /* renamed from: b  reason: collision with root package name */
        final int f5127b;

        /* renamed from: c  reason: collision with root package name */
        final long f5128c;

        /* renamed from: d  reason: collision with root package name */
        final long f5129d;

        b(int i10, int i11, long j10, long j11) {
            this.f5126a = i10;
            this.f5127b = i11;
            this.f5128c = j10;
            this.f5129d = j11;
        }

        static b a(File file) {
            DataInputStream dataInputStream = new DataInputStream(new FileInputStream(file));
            try {
                b bVar = new b(dataInputStream.readInt(), dataInputStream.readInt(), dataInputStream.readLong(), dataInputStream.readLong());
                dataInputStream.close();
                return bVar;
            } catch (Throwable th2) {
                try {
                    dataInputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }

        void b(File file) {
            file.delete();
            DataOutputStream dataOutputStream = new DataOutputStream(new FileOutputStream(file));
            try {
                dataOutputStream.writeInt(this.f5126a);
                dataOutputStream.writeInt(this.f5127b);
                dataOutputStream.writeLong(this.f5128c);
                dataOutputStream.writeLong(this.f5129d);
                dataOutputStream.close();
            } catch (Throwable th2) {
                try {
                    dataOutputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && (obj instanceof b)) {
                b bVar = (b) obj;
                if (this.f5127b == bVar.f5127b && this.f5128c == bVar.f5128c && this.f5126a == bVar.f5126a && this.f5129d == bVar.f5129d) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return Objects.hash(Integer.valueOf(this.f5127b), Long.valueOf(this.f5128c), Integer.valueOf(this.f5126a), Long.valueOf(this.f5129d));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final int f5130a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f5131b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f5132c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f5133d;

        c(int i10, boolean z10, boolean z11, boolean z12) {
            this.f5130a = i10;
            this.f5132c = z11;
            this.f5131b = z10;
            this.f5133d = z12;
        }
    }

    private static long a(Context context) {
        PackageManager packageManager = context.getApplicationContext().getPackageManager();
        if (Build.VERSION.SDK_INT >= 33) {
            return a.a(packageManager, context).lastUpdateTime;
        }
        return packageManager.getPackageInfo(context.getPackageName(), 0).lastUpdateTime;
    }

    private static c b(int i10, boolean z10, boolean z11, boolean z12) {
        c cVar = new c(i10, z10, z11, z12);
        f5125c = cVar;
        f5123a.s(cVar);
        return f5125c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Can't wrap try/catch for region: R(16:33|34|35|(2:74|75)(1:37)|38|(8:45|(1:49)|(1:56)|57|(2:64|65)|61|62|63)|(1:71)(1:(1:73))|(1:49)|(3:51|54|56)|57|(1:59)|64|65|61|62|63) */
    /* JADX WARN: Code restructure failed: missing block: B:69:0x00c7, code lost:
        r5 = 327680;
     */
    /* JADX WARN: Code restructure failed: missing block: B:91:0x00fa, code lost:
        r14 = 196608;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static androidx.profileinstaller.h.c c(android.content.Context r19, boolean r20) {
        /*
            Method dump skipped, instructions count: 276
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.profileinstaller.h.c(android.content.Context, boolean):androidx.profileinstaller.h$c");
    }
}
