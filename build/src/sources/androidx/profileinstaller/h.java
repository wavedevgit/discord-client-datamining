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
    private static final androidx.concurrent.futures.d f4794a = androidx.concurrent.futures.d.w();

    /* renamed from: b  reason: collision with root package name */
    private static final Object f4795b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static c f4796c = null;

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
        final int f4797a;

        /* renamed from: b  reason: collision with root package name */
        final int f4798b;

        /* renamed from: c  reason: collision with root package name */
        final long f4799c;

        /* renamed from: d  reason: collision with root package name */
        final long f4800d;

        b(int i10, int i11, long j10, long j11) {
            this.f4797a = i10;
            this.f4798b = i11;
            this.f4799c = j10;
            this.f4800d = j11;
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
                dataOutputStream.writeInt(this.f4797a);
                dataOutputStream.writeInt(this.f4798b);
                dataOutputStream.writeLong(this.f4799c);
                dataOutputStream.writeLong(this.f4800d);
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
                if (this.f4798b == bVar.f4798b && this.f4799c == bVar.f4799c && this.f4797a == bVar.f4797a && this.f4800d == bVar.f4800d) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return Objects.hash(Integer.valueOf(this.f4798b), Long.valueOf(this.f4799c), Integer.valueOf(this.f4797a), Long.valueOf(this.f4800d));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final int f4801a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f4802b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f4803c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f4804d;

        c(int i10, boolean z10, boolean z11, boolean z12) {
            this.f4801a = i10;
            this.f4803c = z11;
            this.f4802b = z10;
            this.f4804d = z12;
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
        f4796c = cVar;
        f4794a.s(cVar);
        return f4796c;
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
