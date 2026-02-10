package jv;

import android.os.ParcelFileDescriptor;
import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import org.chromium.net.UploadDataProvider;
import org.chromium.net.UploadDataSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: jv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class C0459a implements d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ File f30527a;

        C0459a(File file) {
            this.f30527a = file;
        }

        @Override // jv.a.d
        public FileChannel g() {
            return new FileInputStream(this.f30527a).getChannel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class b implements d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ParcelFileDescriptor f30528a;

        b(ParcelFileDescriptor parcelFileDescriptor) {
            this.f30528a = parcelFileDescriptor;
        }

        @Override // jv.a.d
        public FileChannel g() {
            if (this.f30528a.getStatSize() != -1) {
                return new ParcelFileDescriptor.AutoCloseInputStream(this.f30528a).getChannel();
            }
            this.f30528a.close();
            String valueOf = String.valueOf(this.f30528a);
            throw new IllegalArgumentException("Not a file: " + valueOf);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends UploadDataProvider {

        /* renamed from: d  reason: collision with root package name */
        private final ByteBuffer f30529d;

        @Override // org.chromium.net.UploadDataProvider
        public long getLength() {
            return this.f30529d.limit();
        }

        @Override // org.chromium.net.UploadDataProvider
        public void read(UploadDataSink uploadDataSink, ByteBuffer byteBuffer) {
            if (byteBuffer.hasRemaining()) {
                if (byteBuffer.remaining() >= this.f30529d.remaining()) {
                    byteBuffer.put(this.f30529d);
                } else {
                    int limit = this.f30529d.limit();
                    ByteBuffer byteBuffer2 = this.f30529d;
                    ByteBuffer byteBuffer3 = (ByteBuffer) byteBuffer2.limit(byteBuffer2.position() + byteBuffer.remaining());
                    byteBuffer.put(this.f30529d);
                    ByteBuffer byteBuffer4 = (ByteBuffer) this.f30529d.limit(limit);
                }
                uploadDataSink.onReadSucceeded(false);
                return;
            }
            throw new IllegalStateException("Cronet passed a buffer with no bytes remaining");
        }

        @Override // org.chromium.net.UploadDataProvider
        public void rewind(UploadDataSink uploadDataSink) {
            ByteBuffer byteBuffer = (ByteBuffer) this.f30529d.position(0);
            uploadDataSink.onRewindSucceeded();
        }

        private c(ByteBuffer byteBuffer) {
            this.f30529d = byteBuffer;
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
        private volatile FileChannel f30530d;

        /* renamed from: e  reason: collision with root package name */
        private final d f30531e;

        /* renamed from: i  reason: collision with root package name */
        private final Object f30532i;

        private FileChannel a() {
            if (this.f30530d == null) {
                synchronized (this.f30532i) {
                    try {
                        if (this.f30530d == null) {
                            this.f30530d = this.f30531e.g();
                        }
                    } finally {
                    }
                }
            }
            return this.f30530d;
        }

        @Override // org.chromium.net.UploadDataProvider, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            FileChannel fileChannel = this.f30530d;
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
            this.f30532i = new Object();
            this.f30531e = dVar;
        }
    }

    public static UploadDataProvider a(ParcelFileDescriptor parcelFileDescriptor) {
        return new e(new b(parcelFileDescriptor));
    }

    public static UploadDataProvider b(File file) {
        return new e(new C0459a(file));
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
