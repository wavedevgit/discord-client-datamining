package b2;

import android.util.Log;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f7144a;

    /* renamed from: b  reason: collision with root package name */
    private final File f7145b;

    /* renamed from: c  reason: collision with root package name */
    private final File f7146c;

    public a(File file) {
        this.f7144a = file;
        this.f7145b = new File(file.getPath() + ".new");
        this.f7146c = new File(file.getPath() + ".bak");
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
            if (!this.f7145b.delete()) {
                Log.e("AtomicFile", "Failed to delete new file " + this.f7145b);
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
        d(this.f7145b, this.f7144a);
    }

    public File c() {
        return this.f7144a;
    }

    public FileOutputStream e() {
        if (this.f7146c.exists()) {
            d(this.f7146c, this.f7144a);
        }
        try {
            return new FileOutputStream(this.f7145b);
        } catch (FileNotFoundException unused) {
            if (this.f7145b.getParentFile().mkdirs()) {
                try {
                    return new FileOutputStream(this.f7145b);
                } catch (FileNotFoundException e10) {
                    throw new IOException("Failed to create new file " + this.f7145b, e10);
                }
            }
            throw new IOException("Failed to create directory for " + this.f7145b);
        }
    }
}
