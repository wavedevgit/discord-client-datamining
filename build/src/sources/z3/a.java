package z3;

import android.util.Log;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    public static final C0772a f55302e = new C0772a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Map f55303f = new HashMap();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f55304a;

    /* renamed from: b  reason: collision with root package name */
    private final File f55305b;

    /* renamed from: c  reason: collision with root package name */
    private final Lock f55306c;

    /* renamed from: d  reason: collision with root package name */
    private FileChannel f55307d;

    /* renamed from: z3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0772a {
        public /* synthetic */ C0772a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Lock b(String str) {
            Lock lock;
            synchronized (a.f55303f) {
                try {
                    Map map = a.f55303f;
                    Object obj = map.get(str);
                    if (obj == null) {
                        obj = new ReentrantLock();
                        map.put(str, obj);
                    }
                    lock = (Lock) obj;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return lock;
        }

        private C0772a() {
        }
    }

    public a(String name, File lockDir, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(lockDir, "lockDir");
        this.f55304a = z10;
        File file = new File(lockDir, name + ".lck");
        this.f55305b = file;
        C0772a c0772a = f55302e;
        String absolutePath = file.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "lockFile.absolutePath");
        this.f55306c = c0772a.b(absolutePath);
    }

    public static /* synthetic */ void c(a aVar, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = aVar.f55304a;
        }
        aVar.b(z10);
    }

    public final void b(boolean z10) {
        this.f55306c.lock();
        if (z10) {
            try {
                File parentFile = this.f55305b.getParentFile();
                if (parentFile != null) {
                    parentFile.mkdirs();
                }
                FileChannel channel = new FileOutputStream(this.f55305b).getChannel();
                channel.lock();
                this.f55307d = channel;
            } catch (IOException e10) {
                this.f55307d = null;
                Log.w("SupportSQLiteLock", "Unable to grab file lock.", e10);
            }
        }
    }

    public final void d() {
        try {
            FileChannel fileChannel = this.f55307d;
            if (fileChannel != null) {
                fileChannel.close();
            }
        } catch (IOException unused) {
        }
        this.f55306c.unlock();
    }
}
