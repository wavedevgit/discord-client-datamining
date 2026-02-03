package ju;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends h {
    private final List r(c0 c0Var, boolean z10) {
        File file = c0Var.toFile();
        String[] list = file.list();
        if (list == null) {
            if (z10) {
                if (!file.exists()) {
                    throw new FileNotFoundException("no such file: " + c0Var);
                }
                throw new IOException("failed to list " + c0Var);
            }
            return null;
        }
        ArrayList arrayList = new ArrayList();
        for (String str : list) {
            Intrinsics.checkNotNull(str);
            arrayList.add(c0Var.l(str));
        }
        CollectionsKt.z(arrayList);
        return arrayList;
    }

    private final void s(c0 c0Var) {
        if (!j(c0Var)) {
            return;
        }
        throw new IOException(c0Var + " already exists.");
    }

    private final void t(c0 c0Var) {
        if (j(c0Var)) {
            return;
        }
        throw new IOException(c0Var + " doesn't exist.");
    }

    @Override // ju.h
    public Sink b(c0 file, boolean z10) {
        Intrinsics.checkNotNullParameter(file, "file");
        if (z10) {
            t(file);
        }
        return x.f(file.toFile(), true);
    }

    @Override // ju.h
    public void c(c0 source, c0 target) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(target, "target");
        if (source.toFile().renameTo(target.toFile())) {
            return;
        }
        throw new IOException("failed to move " + source + " to " + target);
    }

    @Override // ju.h
    public void g(c0 dir, boolean z10) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        if (!dir.toFile().mkdir()) {
            g m10 = m(dir);
            if (m10 != null && m10.e()) {
                if (z10) {
                    throw new IOException(dir + " already exists.");
                }
                return;
            }
            throw new IOException("failed to create directory: " + dir);
        }
    }

    @Override // ju.h
    public void i(c0 path, boolean z10) {
        Intrinsics.checkNotNullParameter(path, "path");
        if (!Thread.interrupted()) {
            File file = path.toFile();
            if (!file.delete()) {
                if (!file.exists()) {
                    if (z10) {
                        throw new FileNotFoundException("no such file: " + path);
                    }
                    return;
                }
                throw new IOException("failed to delete " + path);
            }
            return;
        }
        throw new InterruptedIOException("interrupted");
    }

    @Override // ju.h
    public List k(c0 dir) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        List r10 = r(dir, true);
        Intrinsics.checkNotNull(r10);
        return r10;
    }

    @Override // ju.h
    public g m(c0 path) {
        Intrinsics.checkNotNullParameter(path, "path");
        File file = path.toFile();
        boolean isFile = file.isFile();
        boolean isDirectory = file.isDirectory();
        long lastModified = file.lastModified();
        long length = file.length();
        if (!isFile && !isDirectory && lastModified == 0 && length == 0 && !file.exists()) {
            return null;
        }
        return new g(isFile, isDirectory, null, Long.valueOf(length), null, Long.valueOf(lastModified), null, null, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, null);
    }

    @Override // ju.h
    public f n(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        return new q(false, new RandomAccessFile(file.toFile(), "r"));
    }

    @Override // ju.h
    public Sink p(c0 file, boolean z10) {
        Sink g10;
        Intrinsics.checkNotNullParameter(file, "file");
        if (z10) {
            s(file);
        }
        g10 = y.g(file.toFile(), false, 1, null);
        return g10;
    }

    @Override // ju.h
    public Source q(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        return x.j(file.toFile());
    }

    public String toString() {
        return "JvmSystemFileSystem";
    }
}
