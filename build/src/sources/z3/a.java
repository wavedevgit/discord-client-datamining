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
    public static final C0790a f56072e = new C0790a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Map f56073f = new HashMap();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f56074a;

    /* renamed from: b  reason: collision with root package name */
    private final File f56075b;

    /* renamed from: c  reason: collision with root package name */
    private final Lock f56076c;

    /* renamed from: d  reason: collision with root package name */
    private FileChannel f56077d;

    /* renamed from: z3.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0790a {
        public /* synthetic */ C0790a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Lock b(String str) {
            Lock lock;
            synchronized (a.f56073f) {
                try {
                    Map map = a.f56073f;
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

        private C0790a() {
        }
    }

    public a(String name, File lockDir, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(lockDir, "lockDir");
        this.f56074a = z10;
        File file = new File(lockDir, name + ".lck");
        this.f56075b = file;
        C0790a c0790a = f56072e;
        String absolutePath = file.getAbsolutePath();
        Intrinsics.checkNotNullExpressionValue(absolutePath, "lockFile.absolutePath");
        this.f56076c = c0790a.b(absolutePath);
    }

    public static /* synthetic */ void c(a aVar, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = aVar.f56074a;
        }
        aVar.b(z10);
    }

    public final void b(boolean z10) {
        this.f56076c.lock();
        if (z10) {
            try {
                File parentFile = this.f56075b.getParentFile();
                if (parentFile != null) {
                    parentFile.mkdirs();
                }
                FileChannel channel = new FileOutputStream(this.f56075b).getChannel();
                channel.lock();
                this.f56077d = channel;
            } catch (IOException e10) {
                this.f56077d = null;
                Log.w("SupportSQLiteLock", "Unable to grab file lock.", e10);
            }
        }
    }

    public final void d() {
        try {
            FileChannel fileChannel = this.f56077d;
            if (fileChannel != null) {
                fileChannel.close();
            }
        } catch (IOException unused) {
        }
        this.f56076c.unlock();
    }
}
