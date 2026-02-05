package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.FilterInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractMessageLite implements MessageLite {

    /* renamed from: d  reason: collision with root package name */
    protected int f33879d = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public UninitializedMessageException a() {
        return new UninitializedMessageException(this);
    }

    public void writeDelimitedTo(OutputStream outputStream) {
        int serializedSize = getSerializedSize();
        CodedOutputStream newInstance = CodedOutputStream.newInstance(outputStream, CodedOutputStream.a(CodedOutputStream.computeRawVarint32Size(serializedSize) + serializedSize));
        newInstance.writeRawVarint32(serializedSize);
        writeTo(newInstance);
        newInstance.flush();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class Builder<BuilderType extends Builder> implements MessageLite.Builder {
        /* JADX INFO: Access modifiers changed from: protected */
        public static UninitializedMessageException a(MessageLite messageLite) {
            return new UninitializedMessageException(messageLite);
        }

        @Override // 
        public abstract BuilderType clone();

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
        public abstract BuilderType mergeFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite);

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static final class a extends FilterInputStream {

            /* renamed from: d  reason: collision with root package name */
            private int f33880d;

            /* JADX INFO: Access modifiers changed from: package-private */
            public a(InputStream inputStream, int i10) {
                super(inputStream);
                this.f33880d = i10;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int available() {
                return Math.min(super.available(), this.f33880d);
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int read() {
                if (this.f33880d <= 0) {
                    return -1;
                }
                int read = super.read();
                if (read >= 0) {
                    this.f33880d--;
                }
                return read;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public long skip(long j10) {
                long skip = super.skip(Math.min(j10, this.f33880d));
                if (skip >= 0) {
                    this.f33880d = (int) (this.f33880d - skip);
                }
                return skip;
            }

            @Override // java.io.FilterInputStream, java.io.InputStream
            public int read(byte[] bArr, int i10, int i11) {
                int i12 = this.f33880d;
                if (i12 <= 0) {
                    return -1;
                }
                int read = super.read(bArr, i10, Math.min(i11, i12));
                if (read >= 0) {
                    this.f33880d -= read;
                }
                return read;
            }
        }
    }
}
