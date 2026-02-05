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
    public static final C0775a f55158e = new C0775a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Map f55159f = new HashMap();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f55160a;

    /* renamed from: b  reason: collision with root package name */
    private final File f55161b;

    /* renamed from: c  reason: collision with root package name */
    private final Lock f55162c;

    /* renamed from: d  reason: collision with root package name */
    private FileChannel f55163d;

    /* renamed from: z3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0775a {
        public /* synthetic */ C0775a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Lock b(String str) {
            Lock lock;
            synchronized (a.f55159f) {
                try {
                    Map map = a.f55159f;
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

        private C0775a() {
        }
    }

    public a(String name, File lockDir, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(lockDir, "lockDir");
        this.f55160a = z10;
        File file = new File(lockDir, name + ".lck");
        this.f55161b = file;
        C0775a c0775a = f55158e;
        String absolutePath = file.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "lockFile.absolutePath");
        this.f55162c = c0775a.b(absolutePath);
    }

    public static /* synthetic */ void c(a aVar, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = aVar.f55160a;
        }
        aVar.b(z10);
    }

    public final void b(boolean z10) {
        this.f55162c.lock();
        if (z10) {
            try {
                File parentFile = this.f55161b.getParentFile();
                if (parentFile != null) {
                    parentFile.mkdirs();
                }
                FileChannel channel = new FileOutputStream(this.f55161b).getChannel();
                channel.lock();
                this.f55163d = channel;
            } catch (IOException e10) {
                this.f55163d = null;
                Log.w("SupportSQLiteLock", "Unable to grab file lock.", e10);
            }
        }
    }

    public final void d() {
        try {
            FileChannel fileChannel = this.f55163d;
            if (fileChannel != null) {
                fileChannel.close();
            }
        } catch (IOException unused) {
        }
        this.f55162c.unlock();
    }
}
