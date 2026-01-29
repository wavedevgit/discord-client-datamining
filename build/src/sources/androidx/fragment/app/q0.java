package androidx.fragment.app;

import android.util.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.Writer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class q0 extends Writer {

    /* renamed from: d  reason: collision with root package name */
    private final String f4331d;

    /* renamed from: e  reason: collision with root package name */
    private StringBuilder f4332e = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);

    /* JADX INFO: Access modifiers changed from: package-private */
    public q0(String str) {
        this.f4331d = str;
    }

    private void a() {
        if (this.f4332e.length() > 0) {
            Log.d(this.f4331d, this.f4332e.toString());
            StringBuilder sb2 = this.f4332e;
            sb2.delete(0, sb2.length());
        }
    }

    @Override // java.io.Writer, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a();
    }

    @Override // java.io.Writer, java.io.Flushable
    public void flush() {
        a();
    }

    @Override // java.io.Writer
    public void write(char[] cArr, int i10, int i11) {
        for (int i12 = 0; i12 < i11; i12++) {
            char c10 = cArr[i10 + i12];
            if (c10 == '\n') {
                a();
            } else {
                this.f4332e.append(c10);
            }
        }
    }
}
