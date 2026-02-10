package ki;

import android.util.Log;
import androidx.recyclerview.widget.RecyclerView;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.Set;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements m {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Set f31763a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ u f31764b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ ZipFile f31765c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(o oVar, Set set, u uVar, ZipFile zipFile) {
        this.f31763a = set;
        this.f31764b = uVar;
        this.f31765c = zipFile;
    }

    @Override // ki.m
    public final void a(n nVar, File file, boolean z10) {
        this.f31763a.add(file);
        if (!z10) {
            Log.i("SplitCompat", String.format("NativeLibraryExtractor: split '%s' has native library '%s' that does not exist; extracting from '%s!%s' to '%s'", this.f31764b.b(), nVar.f31766a, this.f31764b.a().getAbsolutePath(), nVar.f31767b.getName(), file.getAbsolutePath()));
            ZipFile zipFile = this.f31765c;
            ZipEntry zipEntry = nVar.f31767b;
            byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
            if (file.exists()) {
                file.delete();
            }
            InputStream inputStream = zipFile.getInputStream(zipEntry);
            try {
                FileOutputStream fileOutputStream = new FileOutputStream(file);
                f.m(file);
                while (true) {
                    int read = inputStream.read(bArr);
                    if (read > 0) {
                        fileOutputStream.write(bArr, 0, read);
                    } else {
                        fileOutputStream.close();
                        inputStream.close();
                        return;
                    }
                }
            } catch (Throwable th2) {
                if (inputStream != null) {
                    try {
                        inputStream.close();
                    } catch (Throwable th3) {
                        Throwable.class.getDeclaredMethod("addSuppressed", Throwable.class).invoke(th2, th3);
                    }
                }
                throw th2;
            }
        }
    }
}
