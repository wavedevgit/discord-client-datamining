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
    public static final C0763a f55889e = new C0763a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Map f55890f = new HashMap();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f55891a;

    /* renamed from: b  reason: collision with root package name */
    private final File f55892b;

    /* renamed from: c  reason: collision with root package name */
    private final Lock f55893c;

    /* renamed from: d  reason: collision with root package name */
    private FileChannel f55894d;

    /* renamed from: z3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0763a {
        public /* synthetic */ C0763a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Lock b(String str) {
            Lock lock;
            synchronized (a.f55890f) {
                try {
                    Map map = a.f55890f;
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

        private C0763a() {
        }
    }

    public a(String name, File lockDir, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(lockDir, "lockDir");
        this.f55891a = z10;
        File file = new File(lockDir, name + ".lck");
        this.f55892b = file;
        C0763a c0763a = f55889e;
        String absolutePath = file.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "lockFile.absolutePath");
        this.f55893c = c0763a.b(absolutePath);
    }

    public static /* synthetic */ void c(a aVar, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = aVar.f55891a;
        }
        aVar.b(z10);
    }

    public final void b(boolean z10) {
        this.f55893c.lock();
        if (z10) {
            try {
                File parentFile = this.f55892b.getParentFile();
                if (parentFile != null) {
                    parentFile.mkdirs();
                }
                FileChannel channel = new FileOutputStream(this.f55892b).getChannel();
                channel.lock();
                this.f55894d = channel;
            } catch (IOException e10) {
                this.f55894d = null;
                Log.w("SupportSQLiteLock", "Unable to grab file lock.", e10);
            }
        }
    }

    public final void d() {
        try {
            FileChannel fileChannel = this.f55894d;
            if (fileChannel != null) {
                fileChannel.close();
            }
        } catch (IOException unused) {
        }
        this.f55893c.unlock();
    }
}
