package sv;

import android.os.ParcelFileDescriptor;
import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import org.chromium.net.UploadDataProvider;
import org.chromium.net.UploadDataSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: sv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class C0657a implements d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ File f48411a;

        C0657a(File file) {
            this.f48411a = file;
        }

        @Override // sv.a.d
        public FileChannel h() {
            return new FileInputStream(this.f48411a).getChannel();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class b implements d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ParcelFileDescriptor f48412a;

        b(ParcelFileDescriptor parcelFileDescriptor) {
            this.f48412a = parcelFileDescriptor;
        }

        @Override // sv.a.d
        public FileChannel h() {
            if (this.f48412a.getStatSize() != -1) {
                return new ParcelFileDescriptor.AutoCloseInputStream(this.f48412a).getChannel();
            }
            this.f48412a.close();
            String valueOf = String.valueOf(this.f48412a);
            throw new IllegalArgumentException("Not a file: " + valueOf);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends UploadDataProvider {

        /* renamed from: d  reason: collision with root package name */
        private final ByteBuffer f48413d;

        @Override // org.chromium.net.UploadDataProvider
        public long getLength() {
            return this.f48413d.limit();
        }

        @Override // org.chromium.net.UploadDataProvider
        public void read(UploadDataSink uploadDataSink, ByteBuffer byteBuffer) {
            if (byteBuffer.hasRemaining()) {
                if (byteBuffer.remaining() >= this.f48413d.remaining()) {
                    byteBuffer.put(this.f48413d);
                } else {
                    int limit = this.f48413d.limit();
                    ByteBuffer byteBuffer2 = this.f48413d;
                    ByteBuffer byteBuffer3 = (ByteBuffer) byteBuffer2.limit(byteBuffer2.position() + byteBuffer.remaining());
                    byteBuffer.put(this.f48413d);
                    ByteBuffer byteBuffer4 = (ByteBuffer) this.f48413d.limit(limit);
                }
                uploadDataSink.onReadSucceeded(false);
                return;
            }
            throw new IllegalStateException("Cronet passed a buffer with no bytes remaining");
        }

        @Override // org.chromium.net.UploadDataProvider
        public void rewind(UploadDataSink uploadDataSink) {
            ByteBuffer byteBuffer = (ByteBuffer) this.f48413d.position(0);
            uploadDataSink.onRewindSucceeded();
        }

        private c(ByteBuffer byteBuffer) {
            this.f48413d = byteBuffer;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface d {
        FileChannel h();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class e extends UploadDataProvider {

        /* renamed from: d  reason: collision with root package name */
        private volatile FileChannel f48414d;

        /* renamed from: e  reason: collision with root package name */
        private final d f48415e;

        /* renamed from: i  reason: collision with root package name */
        private final Object f48416i;

        private FileChannel a() {
            if (this.f48414d == null) {
                synchronized (this.f48416i) {
                    try {
                        if (this.f48414d == null) {
                            this.f48414d = this.f48415e.h();
                        }
                    } finally {
                    }
                }
            }
            return this.f48414d;
        }

        @Override // org.chromium.net.UploadDataProvider, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            FileChannel fileChannel = this.f48414d;
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
            this.f48416i = new Object();
            this.f48415e = dVar;
        }
    }

    public static UploadDataProvider a(ParcelFileDescriptor parcelFileDescriptor) {
        return new e(new b(parcelFileDescriptor));
    }

    public static UploadDataProvider b(File file) {
        return new e(new C0657a(file));
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
