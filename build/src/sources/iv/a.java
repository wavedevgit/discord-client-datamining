package iv;

import android.os.ParcelFileDescriptor;
import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import org.chromium.net.UploadDataProvider;
import org.chromium.net.UploadDataSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: iv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class C0412a implements d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ File f29413a;

        C0412a(File file) {
            this.f29413a = file;
        }

        @Override // iv.a.d
        public FileChannel g() {
            return new FileInputStream(this.f29413a).getChannel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class b implements d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ParcelFileDescriptor f29414a;

        b(ParcelFileDescriptor parcelFileDescriptor) {
            this.f29414a = parcelFileDescriptor;
        }

        @Override // iv.a.d
        public FileChannel g() {
            if (this.f29414a.getStatSize() != -1) {
                return new ParcelFileDescriptor.AutoCloseInputStream(this.f29414a).getChannel();
            }
            this.f29414a.close();
            String valueOf = String.valueOf(this.f29414a);
            throw new IllegalArgumentException("Not a file: " + valueOf);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends UploadDataProvider {

        /* renamed from: d  reason: collision with root package name */
        private final ByteBuffer f29415d;

        @Override // org.chromium.net.UploadDataProvider
        public long getLength() {
            return this.f29415d.limit();
        }

        @Override // org.chromium.net.UploadDataProvider
        public void read(UploadDataSink uploadDataSink, ByteBuffer byteBuffer) {
            if (byteBuffer.hasRemaining()) {
                if (byteBuffer.remaining() >= this.f29415d.remaining()) {
                    byteBuffer.put(this.f29415d);
                } else {
                    int limit = this.f29415d.limit();
                    ByteBuffer byteBuffer2 = this.f29415d;
                    ByteBuffer byteBuffer3 = (ByteBuffer) byteBuffer2.limit(byteBuffer2.position() + byteBuffer.remaining());
                    byteBuffer.put(this.f29415d);
                    ByteBuffer byteBuffer4 = (ByteBuffer) this.f29415d.limit(limit);
                }
                uploadDataSink.onReadSucceeded(false);
                return;
            }
            throw new IllegalStateException("Cronet passed a buffer with no bytes remaining");
        }

        @Override // org.chromium.net.UploadDataProvider
        public void rewind(UploadDataSink uploadDataSink) {
            ByteBuffer byteBuffer = (ByteBuffer) this.f29415d.position(0);
            uploadDataSink.onRewindSucceeded();
        }

        private c(ByteBuffer byteBuffer) {
            this.f29415d = byteBuffer;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface d {
        FileChannel g();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class e extends UploadDataProvider {

        /* renamed from: d  reason: collision with root package name */
        private volatile FileChannel f29416d;

        /* renamed from: e  reason: collision with root package name */
        private final d f29417e;

        /* renamed from: i  reason: collision with root package name */
        private final Object f29418i;

        private FileChannel a() {
            if (this.f29416d == null) {
                synchronized (this.f29418i) {
                    try {
                        if (this.f29416d == null) {
                            this.f29416d = this.f29417e.g();
                        }
                    } finally {
                    }
                }
            }
            return this.f29416d;
        }

        @Override // org.chromium.net.UploadDataProvider, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            FileChannel fileChannel = this.f29416d;
            if (fileChannel != null) {
                fileChannel.close();
            }
        }

        @Override // org.chromium.net.UploadDataProvider
        public long getLength() {
            return a().size();
        }

        @Override // org.chromium.net.UploadDataProvider
        public void read(UploadDataSink uploadDataSink, ByteBuffer byteBuffer) {
            if (byteBuffer.hasRemaining()) {
                FileChannel a10 = a();
                int i10 = 0;
                while (i10 == 0) {
                    int read = a10.read(byteBuffer);
                    if (read == -1) {
                        break;
                    }
                    i10 += read;
                }
                uploadDataSink.onReadSucceeded(false);
                return;
            }
            throw new IllegalStateException("Cronet passed a buffer with no bytes remaining");
        }

        @Override // org.chromium.net.UploadDataProvider
        public void rewind(UploadDataSink uploadDataSink) {
            a().position(0L);
            uploadDataSink.onRewindSucceeded();
        }

        private e(d dVar) {
            this.f29418i = new Object();
            this.f29417e = dVar;
        }
    }

    public static UploadDataProvider a(ParcelFileDescriptor parcelFileDescriptor) {
        return new e(new b(parcelFileDescriptor));
    }

    public static UploadDataProvider b(File file) {
        return new e(new C0412a(file));
    }

    public static UploadDataProvider c(ByteBuffer byteBuffer) {
        return new c(byteBuffer.slice());
    }

    public static UploadDataProvider d(byte[] bArr) {
        return e(bArr, 0, bArr.length);
    }

    public static UploadDataProvider e(byte[] bArr, int i10, int i11) {
        return new c(ByteBuffer.wrap(bArr, i10, i11).slice());
    }
}
