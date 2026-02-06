package b2;

import android.util.Log;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f6381a;

    /* renamed from: b  reason: collision with root package name */
    private final File f6382b;

    /* renamed from: c  reason: collision with root package name */
    private final File f6383c;

    public a(File file) {
        this.f6381a = file;
        this.f6382b = new File(file.getPath() + ".new");
        this.f6383c = new File(file.getPath() + ".bak");
    }

    private static void d(File file, File file2) {
        if (file2.isDirectory() && !file2.delete()) {
            Log.e("AtomicFile", "Failed to delete file which is a directory " + file2);
        }
        if (!file.renameTo(file2)) {
            Log.e("AtomicFile", "Failed to rename " + file + " to " + file2);
        }
    }

    private static boolean f(FileOutputStream fileOutputStream) {
        try {
            fileOutputStream.getFD().sync();
            return true;
        } catch (IOException unused) {
            return false;
        }
    }

    public void a(FileOutputStream fileOutputStream) {
        if (fileOutputStream != null) {
            if (!f(fileOutputStream)) {
                Log.e("AtomicFile", "Failed to sync file output stream");
            }
            try {
                fileOutputStream.close();
            } catch (IOException e10) {
                Log.e("AtomicFile", "Failed to close file output stream", e10);
            }
            if (!this.f6382b.delete()) {
                Log.e("AtomicFile", "Failed to delete new file " + this.f6382b);
            }
        }
    }

    public void b(FileOutputStream fileOutputStream) {
        if (fileOutputStream == null) {
            return;
        }
        if (!f(fileOutputStream)) {
            Log.e("AtomicFile", "Failed to sync file output stream");
        }
        try {
            fileOutputStream.close();
        } catch (IOException e10) {
            Log.e("AtomicFile", "Failed to close file output stream", e10);
        }
        d(this.f6382b, this.f6381a);
    }

    public File c() {
        return this.f6381a;
    }

    public FileOutputStream e() {
        if (this.f6383c.exists()) {
            d(this.f6383c, this.f6381a);
        }
        try {
            return new FileOutputStream(this.f6382b);
        } catch (FileNotFoundException unused) {
            if (this.f6382b.getParentFile().mkdirs()) {
                try {
                    return new FileOutputStream(this.f6382b);
                } catch (FileNotFoundException e10) {
                    throw new IOException("Failed to create new file " + this.f6382b, e10);
                }
            }
            throw new IOException("Failed to create directory for " + this.f6382b);
        }
    }
}
