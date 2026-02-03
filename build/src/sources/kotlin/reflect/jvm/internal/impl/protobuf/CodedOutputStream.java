package kotlin.reflect.jvm.internal.impl.protobuf;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CodedOutputStream {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f34377a;

    /* renamed from: b  reason: collision with root package name */
    private final int f34378b;

    /* renamed from: e  reason: collision with root package name */
    private final OutputStream f34381e;

    /* renamed from: d  reason: collision with root package name */
    private int f34380d = 0;

    /* renamed from: c  reason: collision with root package name */
    private int f34379c = 0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class OutOfSpaceException extends IOException {
        OutOfSpaceException() {
            super("CodedOutputStream was writing to a flat byte array and ran out of space.");
        }
    }

    private CodedOutputStream(OutputStream outputStream, byte[] bArr) {
        this.f34381e = outputStream;
        this.f34377a = bArr;
        this.f34378b = bArr.length;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int a(int i10) {
        return i10 > 4096 ? RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT : i10;
    }

    private void b() {
        OutputStream outputStream = this.f34381e;
        if (outputStream != null) {
            outputStream.write(this.f34377a, 0, this.f34379c);
            this.f34379c = 0;
            return;
        }
        throw new OutOfSpaceException();
    }

    public static int computeBoolSize(int i10, boolean z10) {
        return computeTagSize(i10) + computeBoolSizeNoTag(z10);
    }

    public static int computeBoolSizeNoTag(boolean z10) {
        return 1;
    }

    public static int computeByteArraySizeNoTag(byte[] bArr) {
        return computeRawVarint32Size(bArr.length) + bArr.length;
    }

    public static int computeBytesSize(int i10, ByteString byteString) {
        return computeTagSize(i10) + computeBytesSizeNoTag(byteString);
    }

    public static int computeBytesSizeNoTag(ByteString byteString) {
        return computeRawVarint32Size(byteString.size()) + byteString.size();
    }

    public static int computeDoubleSize(int i10, double d10) {
        return computeTagSize(i10) + computeDoubleSizeNoTag(d10);
    }

    public static int computeDoubleSizeNoTag(double d10) {
        return 8;
    }

    public static int computeEnumSize(int i10, int i11) {
        return computeTagSize(i10) + computeEnumSizeNoTag(i11);
    }

    public static int computeEnumSizeNoTag(int i10) {
        return computeInt32SizeNoTag(i10);
    }

    public static int computeFixed32SizeNoTag(int i10) {
        return 4;
    }

    public static int computeFixed64SizeNoTag(long j10) {
        return 8;
    }

    public static int computeFloatSize(int i10, float f10) {
        return computeTagSize(i10) + computeFloatSizeNoTag(f10);
    }

    public static int computeFloatSizeNoTag(float f10) {
        return 4;
    }

    public static int computeGroupSizeNoTag(MessageLite messageLite) {
        return messageLite.getSerializedSize();
    }

    public static int computeInt32Size(int i10, int i11) {
        return computeTagSize(i10) + computeInt32SizeNoTag(i11);
    }

    public static int computeInt32SizeNoTag(int i10) {
        if (i10 >= 0) {
            return computeRawVarint32Size(i10);
        }
        return 10;
    }

    public static int computeInt64SizeNoTag(long j10) {
        return computeRawVarint64Size(j10);
    }

    public static int computeLazyFieldSizeNoTag(LazyFieldLite lazyFieldLite) {
        int serializedSize = lazyFieldLite.getSerializedSize();
        return computeRawVarint32Size(serializedSize) + serializedSize;
    }

    public static int computeMessageSize(int i10, MessageLite messageLite) {
        return computeTagSize(i10) + computeMessageSizeNoTag(messageLite);
    }

    public static int computeMessageSizeNoTag(MessageLite messageLite) {
        int serializedSize = messageLite.getSerializedSize();
        return computeRawVarint32Size(serializedSize) + serializedSize;
    }

    public static int computeRawVarint32Size(int i10) {
        if ((i10 & (-128)) == 0) {
            return 1;
        }
        if ((i10 & (-16384)) == 0) {
            return 2;
        }
        if (((-2097152) & i10) == 0) {
            return 3;
        }
        return (i10 & (-268435456)) == 0 ? 4 : 5;
    }

    public static int computeRawVarint64Size(long j10) {
        if (((-128) & j10) == 0) {
            return 1;
        }
        if (((-16384) & j10) == 0) {
            return 2;
        }
        if (((-2097152) & j10) == 0) {
            return 3;
        }
        if (((-268435456) & j10) == 0) {
            return 4;
        }
        if (((-34359738368L) & j10) == 0) {
            return 5;
        }
        if (((-4398046511104L) & j10) == 0) {
            return 6;
        }
        if (((-562949953421312L) & j10) == 0) {
            return 7;
        }
        if (((-72057594037927936L) & j10) == 0) {
            return 8;
        }
        return (j10 & Long.MIN_VALUE) == 0 ? 9 : 10;
    }

    public static int computeSFixed32SizeNoTag(int i10) {
        return 4;
    }

    public static int computeSFixed64SizeNoTag(long j10) {
        return 8;
    }

    public static int computeSInt32SizeNoTag(int i10) {
        return computeRawVarint32Size(encodeZigZag32(i10));
    }

    public static int computeSInt64Size(int i10, long j10) {
        return computeTagSize(i10) + computeSInt64SizeNoTag(j10);
    }

    public static int computeSInt64SizeNoTag(long j10) {
        return computeRawVarint64Size(encodeZigZag64(j10));
    }

    public static int computeStringSizeNoTag(String str) {
        try {
            byte[] bytes = str.getBytes("UTF-8");
            return computeRawVarint32Size(bytes.length) + bytes.length;
        } catch (UnsupportedEncodingException e10) {
            throw new RuntimeException("UTF-8 not supported.", e10);
        }
    }

    public static int computeTagSize(int i10) {
        return computeRawVarint32Size(WireFormat.b(i10, 0));
    }

    public static int computeUInt32SizeNoTag(int i10) {
        return computeRawVarint32Size(i10);
    }

    public static int computeUInt64SizeNoTag(long j10) {
        return computeRawVarint64Size(j10);
    }

    public static int encodeZigZag32(int i10) {
        return (i10 >> 31) ^ (i10 << 1);
    }

    public static long encodeZigZag64(long j10) {
        return (j10 >> 63) ^ (j10 << 1);
    }

    public static CodedOutputStream newInstance(OutputStream outputStream, int i10) {
        return new CodedOutputStream(outputStream, new byte[i10]);
    }

    public void flush() {
        if (this.f34381e != null) {
            b();
        }
    }

    public void writeBool(int i10, boolean z10) {
        writeTag(i10, 0);
        writeBoolNoTag(z10);
    }

    public void writeBoolNoTag(boolean z10) {
        writeRawByte(z10 ? 1 : 0);
    }

    public void writeByteArrayNoTag(byte[] bArr) {
        writeRawVarint32(bArr.length);
        writeRawBytes(bArr);
    }

    public void writeBytes(int i10, ByteString byteString) {
        writeTag(i10, 2);
        writeBytesNoTag(byteString);
    }

    public void writeBytesNoTag(ByteString byteString) {
        writeRawVarint32(byteString.size());
        writeRawBytes(byteString);
    }

    public void writeDouble(int i10, double d10) {
        writeTag(i10, 1);
        writeDoubleNoTag(d10);
    }

    public void writeDoubleNoTag(double d10) {
        writeRawLittleEndian64(Double.doubleToRawLongBits(d10));
    }

    public void writeEnum(int i10, int i11) {
        writeTag(i10, 0);
        writeEnumNoTag(i11);
    }

    public void writeEnumNoTag(int i10) {
        writeInt32NoTag(i10);
    }

    public void writeFixed32NoTag(int i10) {
        writeRawLittleEndian32(i10);
    }

    public void writeFixed64NoTag(long j10) {
        writeRawLittleEndian64(j10);
    }

    public void writeFloat(int i10, float f10) {
        writeTag(i10, 5);
        writeFloatNoTag(f10);
    }

    public void writeFloatNoTag(float f10) {
        writeRawLittleEndian32(Float.floatToRawIntBits(f10));
    }

    public void writeGroup(int i10, MessageLite messageLite) {
        writeTag(i10, 3);
        writeGroupNoTag(messageLite);
        writeTag(i10, 4);
    }

    public void writeGroupNoTag(MessageLite messageLite) {
        messageLite.writeTo(this);
    }

    public void writeInt32(int i10, int i11) {
        writeTag(i10, 0);
        writeInt32NoTag(i11);
    }

    public void writeInt32NoTag(int i10) {
        if (i10 >= 0) {
            writeRawVarint32(i10);
        } else {
            writeRawVarint64(i10);
        }
    }

    public void writeInt64NoTag(long j10) {
        writeRawVarint64(j10);
    }

    public void writeMessage(int i10, MessageLite messageLite) {
        writeTag(i10, 2);
        writeMessageNoTag(messageLite);
    }

    public void writeMessageNoTag(MessageLite messageLite) {
        writeRawVarint32(messageLite.getSerializedSize());
        messageLite.writeTo(this);
    }

    public void writeMessageSetExtension(int i10, MessageLite messageLite) {
        writeTag(1, 3);
        writeUInt32(2, i10);
        writeMessage(3, messageLite);
        writeTag(1, 4);
    }

    public void writeRawByte(byte b10) {
        if (this.f34379c == this.f34378b) {
            b();
        }
        byte[] bArr = this.f34377a;
        int i10 = this.f34379c;
        this.f34379c = i10 + 1;
        bArr[i10] = b10;
        this.f34380d++;
    }

    public void writeRawBytes(ByteString byteString) {
        writeRawBytes(byteString, 0, byteString.size());
    }

    public void writeRawLittleEndian32(int i10) {
        writeRawByte(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    public void writeRawLittleEndian64(long j10) {
        writeRawByte(((int) j10) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte(((int) (j10 >> 8)) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte(((int) (j10 >> 16)) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte(((int) (j10 >> 24)) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte(((int) (j10 >> 32)) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte(((int) (j10 >> 40)) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte(((int) (j10 >> 48)) & SetSpanOperation.SPAN_MAX_PRIORITY);
        writeRawByte(((int) (j10 >> 56)) & SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    public void writeRawVarint32(int i10) {
        while ((i10 & (-128)) != 0) {
            writeRawByte((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            i10 >>>= 7;
        }
        writeRawByte(i10);
    }

    public void writeRawVarint64(long j10) {
        while (((-128) & j10) != 0) {
            writeRawByte((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            j10 >>>= 7;
        }
        writeRawByte((int) j10);
    }

    public void writeSFixed32NoTag(int i10) {
        writeRawLittleEndian32(i10);
    }

    public void writeSFixed64NoTag(long j10) {
        writeRawLittleEndian64(j10);
    }

    public void writeSInt32NoTag(int i10) {
        writeRawVarint32(encodeZigZag32(i10));
    }

    public void writeSInt64(int i10, long j10) {
        writeTag(i10, 0);
        writeSInt64NoTag(j10);
    }

    public void writeSInt64NoTag(long j10) {
        writeRawVarint64(encodeZigZag64(j10));
    }

    public void writeStringNoTag(String str) {
        byte[] bytes = str.getBytes("UTF-8");
        writeRawVarint32(bytes.length);
        writeRawBytes(bytes);
    }

    public void writeTag(int i10, int i11) {
        writeRawVarint32(WireFormat.b(i10, i11));
    }

    public void writeUInt32(int i10, int i11) {
        writeTag(i10, 0);
        writeUInt32NoTag(i11);
    }

    public void writeUInt32NoTag(int i10) {
        writeRawVarint32(i10);
    }

    public void writeUInt64NoTag(long j10) {
        writeRawVarint64(j10);
    }

    public void writeRawBytes(byte[] bArr) {
        writeRawBytes(bArr, 0, bArr.length);
    }

    public void writeRawBytes(byte[] bArr, int i10, int i11) {
        int i12 = this.f34378b;
        int i13 = this.f34379c;
        if (i12 - i13 >= i11) {
            System.arraycopy(bArr, i10, this.f34377a, i13, i11);
            this.f34379c += i11;
            this.f34380d += i11;
            return;
        }
        int i14 = i12 - i13;
        System.arraycopy(bArr, i10, this.f34377a, i13, i14);
        int i15 = i10 + i14;
        int i16 = i11 - i14;
        this.f34379c = this.f34378b;
        this.f34380d += i14;
        b();
        if (i16 <= this.f34378b) {
            System.arraycopy(bArr, i15, this.f34377a, 0, i16);
            this.f34379c = i16;
        } else {
            this.f34381e.write(bArr, i15, i16);
        }
        this.f34380d += i16;
    }

    public void writeRawByte(int i10) {
        writeRawByte((byte) i10);
    }

    public void writeRawBytes(ByteString byteString, int i10, int i11) {
        int i12 = this.f34378b;
        int i13 = this.f34379c;
        if (i12 - i13 >= i11) {
            byteString.copyTo(this.f34377a, i10, i13, i11);
            this.f34379c += i11;
            this.f34380d += i11;
            return;
        }
        int i14 = i12 - i13;
        byteString.copyTo(this.f34377a, i10, i13, i14);
        int i15 = i10 + i14;
        int i16 = i11 - i14;
        this.f34379c = this.f34378b;
        this.f34380d += i14;
        b();
        if (i16 <= this.f34378b) {
            byteString.copyTo(this.f34377a, i15, 0, i16);
            this.f34379c = i16;
        } else {
            byteString.i(this.f34381e, i15, i16);
        }
        this.f34380d += i16;
    }
}
