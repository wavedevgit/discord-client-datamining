package kotlin.reflect.jvm.internal.impl.protobuf;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.InputStream;
import java.util.ArrayList;
import kotlin.jvm.internal.ByteCompanionObject;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CodedInputStream {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f35198a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35199b;

    /* renamed from: c  reason: collision with root package name */
    private int f35200c;

    /* renamed from: d  reason: collision with root package name */
    private int f35201d;

    /* renamed from: e  reason: collision with root package name */
    private int f35202e;

    /* renamed from: f  reason: collision with root package name */
    private final InputStream f35203f;

    /* renamed from: g  reason: collision with root package name */
    private int f35204g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f35205h;

    /* renamed from: i  reason: collision with root package name */
    private int f35206i;

    /* renamed from: j  reason: collision with root package name */
    private int f35207j;

    /* renamed from: k  reason: collision with root package name */
    private int f35208k;

    /* renamed from: l  reason: collision with root package name */
    private int f35209l;

    /* renamed from: m  reason: collision with root package name */
    private int f35210m;

    private CodedInputStream(InputStream inputStream) {
        this.f35205h = false;
        this.f35207j = Integer.MAX_VALUE;
        this.f35209l = 64;
        this.f35210m = 67108864;
        this.f35198a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
        this.f35200c = 0;
        this.f35202e = 0;
        this.f35206i = 0;
        this.f35203f = inputStream;
        this.f35199b = false;
    }

    private void a(int i10) {
        if (this.f35200c - this.f35202e < i10) {
            f(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static CodedInputStream b(b bVar) {
        CodedInputStream codedInputStream = new CodedInputStream(bVar);
        try {
            codedInputStream.pushLimit(bVar.size());
            return codedInputStream;
        } catch (InvalidProtocolBufferException e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    private byte[] c(int i10) {
        int read;
        if (i10 <= 0) {
            if (i10 == 0) {
                return Internal.EMPTY_BYTE_ARRAY;
            }
            throw InvalidProtocolBufferException.f();
        }
        int i11 = this.f35206i;
        int i12 = this.f35202e;
        int i13 = i11 + i12 + i10;
        int i14 = this.f35207j;
        if (i13 <= i14) {
            if (i10 < 4096) {
                byte[] bArr = new byte[i10];
                int i15 = this.f35200c - i12;
                System.arraycopy(this.f35198a, i12, bArr, 0, i15);
                this.f35202e = this.f35200c;
                int i16 = i10 - i15;
                a(i16);
                System.arraycopy(this.f35198a, 0, bArr, i15, i16);
                this.f35202e = i16;
                return bArr;
            }
            int i17 = this.f35200c;
            this.f35206i = i11 + i17;
            this.f35202e = 0;
            this.f35200c = 0;
            int i18 = i17 - i12;
            int i19 = i10 - i18;
            ArrayList<byte[]> arrayList = new ArrayList();
            while (i19 > 0) {
                int min = Math.min(i19, (int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                byte[] bArr2 = new byte[min];
                int i20 = 0;
                while (i20 < min) {
                    InputStream inputStream = this.f35203f;
                    if (inputStream == null) {
                        read = -1;
                    } else {
                        read = inputStream.read(bArr2, i20, min - i20);
                    }
                    if (read != -1) {
                        this.f35206i += read;
                        i20 += read;
                    } else {
                        throw InvalidProtocolBufferException.i();
                    }
                }
                i19 -= min;
                arrayList.add(bArr2);
            }
            byte[] bArr3 = new byte[i10];
            System.arraycopy(this.f35198a, i12, bArr3, 0, i18);
            for (byte[] bArr4 : arrayList) {
                System.arraycopy(bArr4, 0, bArr3, i18, bArr4.length);
                i18 += bArr4.length;
            }
            return bArr3;
        }
        skipRawBytes((i14 - i11) - i12);
        throw InvalidProtocolBufferException.i();
    }

    public static int decodeZigZag32(int i10) {
        return (-(i10 & 1)) ^ (i10 >>> 1);
    }

    public static long decodeZigZag64(long j10) {
        return (-(j10 & 1)) ^ (j10 >>> 1);
    }

    private void e() {
        int i10 = this.f35200c + this.f35201d;
        this.f35200c = i10;
        int i11 = this.f35206i + i10;
        int i12 = this.f35207j;
        if (i11 > i12) {
            int i13 = i11 - i12;
            this.f35201d = i13;
            this.f35200c = i10 - i13;
            return;
        }
        this.f35201d = 0;
    }

    private void f(int i10) {
        if (h(i10)) {
            return;
        }
        throw InvalidProtocolBufferException.i();
    }

    private void g(int i10) {
        if (i10 >= 0) {
            int i11 = this.f35206i;
            int i12 = this.f35202e;
            int i13 = i11 + i12 + i10;
            int i14 = this.f35207j;
            if (i13 <= i14) {
                int i15 = this.f35200c;
                int i16 = i15 - i12;
                this.f35202e = i15;
                f(1);
                while (true) {
                    int i17 = i10 - i16;
                    int i18 = this.f35200c;
                    if (i17 > i18) {
                        i16 += i18;
                        this.f35202e = i18;
                        f(1);
                    } else {
                        this.f35202e = i17;
                        return;
                    }
                }
            } else {
                skipRawBytes((i14 - i11) - i12);
                throw InvalidProtocolBufferException.i();
            }
        } else {
            throw InvalidProtocolBufferException.f();
        }
    }

    private boolean h(int i10) {
        int i11 = this.f35202e;
        int i12 = i11 + i10;
        int i13 = this.f35200c;
        if (i12 > i13) {
            if (this.f35206i + i11 + i10 <= this.f35207j && this.f35203f != null) {
                if (i11 > 0) {
                    if (i13 > i11) {
                        byte[] bArr = this.f35198a;
                        System.arraycopy(bArr, i11, bArr, 0, i13 - i11);
                    }
                    this.f35206i += i11;
                    this.f35200c -= i11;
                    this.f35202e = 0;
                }
                InputStream inputStream = this.f35203f;
                byte[] bArr2 = this.f35198a;
                int i14 = this.f35200c;
                int read = inputStream.read(bArr2, i14, bArr2.length - i14);
                if (read != 0 && read >= -1 && read <= this.f35198a.length) {
                    if (read > 0) {
                        this.f35200c += read;
                        if ((this.f35206i + i10) - this.f35210m <= 0) {
                            e();
                            if (this.f35200c >= i10) {
                                return true;
                            }
                            return h(i10);
                        }
                        throw InvalidProtocolBufferException.h();
                    }
                } else {
                    StringBuilder sb2 = new StringBuilder(102);
                    sb2.append("InputStream#read(byte[]) returned invalid result: ");
                    sb2.append(read);
                    sb2.append("\nThe InputStream implementation is buggy.");
                    throw new IllegalStateException(sb2.toString());
                }
            }
            return false;
        }
        StringBuilder sb3 = new StringBuilder(77);
        sb3.append("refillBuffer() called when ");
        sb3.append(i10);
        sb3.append(" bytes were already available in buffer");
        throw new IllegalStateException(sb3.toString());
    }

    public static CodedInputStream newInstance(InputStream inputStream) {
        return new CodedInputStream(inputStream);
    }

    public void checkLastTagWas(int i10) {
        if (this.f35204g == i10) {
            return;
        }
        throw InvalidProtocolBufferException.a();
    }

    long d() {
        long j10 = 0;
        for (int i10 = 0; i10 < 64; i10 += 7) {
            byte readRawByte = readRawByte();
            j10 |= (readRawByte & ByteCompanionObject.MAX_VALUE) << i10;
            if ((readRawByte & ByteCompanionObject.MIN_VALUE) == 0) {
                return j10;
            }
        }
        throw InvalidProtocolBufferException.e();
    }

    public int getBytesUntilLimit() {
        int i10 = this.f35207j;
        if (i10 == Integer.MAX_VALUE) {
            return -1;
        }
        return i10 - (this.f35206i + this.f35202e);
    }

    public boolean isAtEnd() {
        if (this.f35202e == this.f35200c && !h(1)) {
            return true;
        }
        return false;
    }

    public void popLimit(int i10) {
        this.f35207j = i10;
        e();
    }

    public int pushLimit(int i10) {
        if (i10 >= 0) {
            int i11 = i10 + this.f35206i + this.f35202e;
            int i12 = this.f35207j;
            if (i11 <= i12) {
                this.f35207j = i11;
                e();
                return i12;
            }
            throw InvalidProtocolBufferException.i();
        }
        throw InvalidProtocolBufferException.f();
    }

    public boolean readBool() {
        if (readRawVarint64() != 0) {
            return true;
        }
        return false;
    }

    public ByteString readBytes() {
        ByteString copyFrom;
        int readRawVarint32 = readRawVarint32();
        int i10 = this.f35200c;
        int i11 = this.f35202e;
        if (readRawVarint32 <= i10 - i11 && readRawVarint32 > 0) {
            if (this.f35199b && this.f35205h) {
                copyFrom = new a(this.f35198a, this.f35202e, readRawVarint32);
            } else {
                copyFrom = ByteString.copyFrom(this.f35198a, i11, readRawVarint32);
            }
            this.f35202e += readRawVarint32;
            return copyFrom;
        } else if (readRawVarint32 == 0) {
            return ByteString.EMPTY;
        } else {
            return new b(c(readRawVarint32));
        }
    }

    public double readDouble() {
        return Double.longBitsToDouble(readRawLittleEndian64());
    }

    public int readEnum() {
        return readRawVarint32();
    }

    public int readFixed32() {
        return readRawLittleEndian32();
    }

    public long readFixed64() {
        return readRawLittleEndian64();
    }

    public float readFloat() {
        return Float.intBitsToFloat(readRawLittleEndian32());
    }

    public void readGroup(int i10, MessageLite.Builder builder, ExtensionRegistryLite extensionRegistryLite) {
        int i11 = this.f35208k;
        if (i11 < this.f35209l) {
            this.f35208k = i11 + 1;
            builder.mergeFrom(this, extensionRegistryLite);
            checkLastTagWas(WireFormat.b(i10, 4));
            this.f35208k--;
            return;
        }
        throw InvalidProtocolBufferException.g();
    }

    public int readInt32() {
        return readRawVarint32();
    }

    public long readInt64() {
        return readRawVarint64();
    }

    public void readMessage(MessageLite.Builder builder, ExtensionRegistryLite extensionRegistryLite) {
        int readRawVarint32 = readRawVarint32();
        if (this.f35208k < this.f35209l) {
            int pushLimit = pushLimit(readRawVarint32);
            this.f35208k++;
            builder.mergeFrom(this, extensionRegistryLite);
            checkLastTagWas(0);
            this.f35208k--;
            popLimit(pushLimit);
            return;
        }
        throw InvalidProtocolBufferException.g();
    }

    public byte readRawByte() {
        if (this.f35202e == this.f35200c) {
            f(1);
        }
        byte[] bArr = this.f35198a;
        int i10 = this.f35202e;
        this.f35202e = i10 + 1;
        return bArr[i10];
    }

    public int readRawLittleEndian32() {
        int i10 = this.f35202e;
        if (this.f35200c - i10 < 4) {
            f(4);
            i10 = this.f35202e;
        }
        byte[] bArr = this.f35198a;
        this.f35202e = i10 + 4;
        return ((bArr[i10 + 3] & 255) << 24) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16);
    }

    public long readRawLittleEndian64() {
        int i10 = this.f35202e;
        if (this.f35200c - i10 < 8) {
            f(8);
            i10 = this.f35202e;
        }
        byte[] bArr = this.f35198a;
        this.f35202e = i10 + 8;
        return ((bArr[i10 + 7] & 255) << 56) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16) | ((bArr[i10 + 3] & 255) << 24) | ((bArr[i10 + 4] & 255) << 32) | ((bArr[i10 + 5] & 255) << 40) | ((bArr[i10 + 6] & 255) << 48);
    }

    public int readRawVarint32() {
        int i10;
        byte b10;
        int i11;
        int i12 = this.f35202e;
        int i13 = this.f35200c;
        if (i13 != i12) {
            byte[] bArr = this.f35198a;
            int i14 = i12 + 1;
            byte b11 = bArr[i12];
            if (b11 >= 0) {
                this.f35202e = i14;
                return b11;
            } else if (i13 - i14 >= 9) {
                int i15 = i12 + 2;
                int i16 = (bArr[i14] << 7) ^ b11;
                long j10 = i16;
                if (j10 < 0) {
                    i11 = (int) ((-128) ^ j10);
                } else {
                    int i17 = i12 + 3;
                    int i18 = (bArr[i15] << 14) ^ i16;
                    long j11 = i18;
                    if (j11 >= 0) {
                        i11 = (int) (16256 ^ j11);
                    } else {
                        int i19 = i12 + 4;
                        long j12 = i18 ^ (bArr[i17] << 21);
                        if (j12 < 0) {
                            i11 = (int) ((-2080896) ^ j12);
                        } else {
                            i17 = i12 + 5;
                            int i20 = (int) ((i10 ^ (b10 << 28)) ^ 266354560);
                            if (bArr[i19] < 0) {
                                i19 = i12 + 6;
                                if (bArr[i17] < 0) {
                                    i17 = i12 + 7;
                                    if (bArr[i19] < 0) {
                                        i19 = i12 + 8;
                                        if (bArr[i17] < 0) {
                                            i17 = i12 + 9;
                                            if (bArr[i19] < 0) {
                                                int i21 = i12 + 10;
                                                if (bArr[i17] >= 0) {
                                                    i15 = i21;
                                                    i11 = i20;
                                                }
                                            }
                                        }
                                    }
                                }
                                i11 = i20;
                            }
                            i11 = i20;
                        }
                        i15 = i19;
                    }
                    i15 = i17;
                }
                this.f35202e = i15;
                return i11;
            }
        }
        return (int) d();
    }

    public long readRawVarint64() {
        long j10;
        long j11;
        long j12;
        int i10 = this.f35202e;
        int i11 = this.f35200c;
        if (i11 != i10) {
            byte[] bArr = this.f35198a;
            int i12 = i10 + 1;
            byte b10 = bArr[i10];
            if (b10 >= 0) {
                this.f35202e = i12;
                return b10;
            } else if (i11 - i12 >= 9) {
                int i13 = i10 + 2;
                long j13 = (bArr[i12] << 7) ^ b10;
                if (j13 < 0) {
                    j11 = -128;
                } else {
                    int i14 = i10 + 3;
                    long j14 = j13 ^ (bArr[i13] << 14);
                    if (j14 >= 0) {
                        j12 = 16256;
                    } else {
                        i13 = i10 + 4;
                        j13 = j14 ^ (bArr[i14] << 21);
                        if (j13 < 0) {
                            j11 = -2080896;
                        } else {
                            i14 = i10 + 5;
                            j14 = j13 ^ (bArr[i13] << 28);
                            if (j14 >= 0) {
                                j12 = 266354560;
                            } else {
                                i13 = i10 + 6;
                                j13 = j14 ^ (bArr[i14] << 35);
                                if (j13 < 0) {
                                    j11 = -34093383808L;
                                } else {
                                    i14 = i10 + 7;
                                    j14 = j13 ^ (bArr[i13] << 42);
                                    if (j14 >= 0) {
                                        j12 = 4363953127296L;
                                    } else {
                                        i13 = i10 + 8;
                                        j13 = j14 ^ (bArr[i14] << 49);
                                        if (j13 < 0) {
                                            j11 = -558586000294016L;
                                        } else {
                                            i14 = i10 + 9;
                                            long j15 = (j13 ^ (bArr[i13] << 56)) ^ 71499008037633920L;
                                            if (j15 < 0) {
                                                i13 = i10 + 10;
                                                if (bArr[i14] >= 0) {
                                                    j10 = j15;
                                                    this.f35202e = i13;
                                                    return j10;
                                                }
                                            } else {
                                                j10 = j15;
                                                i13 = i14;
                                                this.f35202e = i13;
                                                return j10;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    j10 = j14 ^ j12;
                    i13 = i14;
                    this.f35202e = i13;
                    return j10;
                }
                j10 = j13 ^ j11;
                this.f35202e = i13;
                return j10;
            }
        }
        return d();
    }

    public int readSFixed32() {
        return readRawLittleEndian32();
    }

    public long readSFixed64() {
        return readRawLittleEndian64();
    }

    public int readSInt32() {
        return decodeZigZag32(readRawVarint32());
    }

    public long readSInt64() {
        return decodeZigZag64(readRawVarint64());
    }

    public String readString() {
        int readRawVarint32 = readRawVarint32();
        int i10 = this.f35200c;
        int i11 = this.f35202e;
        if (readRawVarint32 <= i10 - i11 && readRawVarint32 > 0) {
            String str = new String(this.f35198a, i11, readRawVarint32, "UTF-8");
            this.f35202e += readRawVarint32;
            return str;
        } else if (readRawVarint32 == 0) {
            return "";
        } else {
            return new String(c(readRawVarint32), "UTF-8");
        }
    }

    public String readStringRequireUtf8() {
        byte[] c10;
        int readRawVarint32 = readRawVarint32();
        int i10 = this.f35202e;
        if (readRawVarint32 <= this.f35200c - i10 && readRawVarint32 > 0) {
            c10 = this.f35198a;
            this.f35202e = i10 + readRawVarint32;
        } else if (readRawVarint32 == 0) {
            return "";
        } else {
            c10 = c(readRawVarint32);
            i10 = 0;
        }
        if (e.f(c10, i10, i10 + readRawVarint32)) {
            return new String(c10, i10, readRawVarint32, "UTF-8");
        }
        throw InvalidProtocolBufferException.c();
    }

    public int readTag() {
        if (isAtEnd()) {
            this.f35204g = 0;
            return 0;
        }
        int readRawVarint32 = readRawVarint32();
        this.f35204g = readRawVarint32;
        if (WireFormat.getTagFieldNumber(readRawVarint32) != 0) {
            return this.f35204g;
        }
        throw InvalidProtocolBufferException.b();
    }

    public int readUInt32() {
        return readRawVarint32();
    }

    public long readUInt64() {
        return readRawVarint64();
    }

    public boolean skipField(int i10, CodedOutputStream codedOutputStream) {
        int a10 = WireFormat.a(i10);
        if (a10 != 0) {
            if (a10 != 1) {
                if (a10 != 2) {
                    if (a10 != 3) {
                        if (a10 != 4) {
                            if (a10 == 5) {
                                int readRawLittleEndian32 = readRawLittleEndian32();
                                codedOutputStream.writeRawVarint32(i10);
                                codedOutputStream.writeFixed32NoTag(readRawLittleEndian32);
                                return true;
                            }
                            throw InvalidProtocolBufferException.d();
                        }
                        return false;
                    }
                    codedOutputStream.writeRawVarint32(i10);
                    skipMessage(codedOutputStream);
                    int b10 = WireFormat.b(WireFormat.getTagFieldNumber(i10), 4);
                    checkLastTagWas(b10);
                    codedOutputStream.writeRawVarint32(b10);
                    return true;
                }
                ByteString readBytes = readBytes();
                codedOutputStream.writeRawVarint32(i10);
                codedOutputStream.writeBytesNoTag(readBytes);
                return true;
            }
            long readRawLittleEndian64 = readRawLittleEndian64();
            codedOutputStream.writeRawVarint32(i10);
            codedOutputStream.writeFixed64NoTag(readRawLittleEndian64);
            return true;
        }
        long readInt64 = readInt64();
        codedOutputStream.writeRawVarint32(i10);
        codedOutputStream.writeUInt64NoTag(readInt64);
        return true;
    }

    public void skipMessage(CodedOutputStream codedOutputStream) {
        int readTag;
        do {
            readTag = readTag();
            if (readTag == 0) {
                return;
            }
        } while (skipField(readTag, codedOutputStream));
    }

    public void skipRawBytes(int i10) {
        int i11 = this.f35200c;
        int i12 = this.f35202e;
        if (i10 <= i11 - i12 && i10 >= 0) {
            this.f35202e = i12 + i10;
        } else {
            g(i10);
        }
    }

    public <T extends MessageLite> T readMessage(Parser<T> parser, ExtensionRegistryLite extensionRegistryLite) {
        int readRawVarint32 = readRawVarint32();
        if (this.f35208k < this.f35209l) {
            int pushLimit = pushLimit(readRawVarint32);
            this.f35208k++;
            T parsePartialFrom = parser.parsePartialFrom(this, extensionRegistryLite);
            checkLastTagWas(0);
            this.f35208k--;
            popLimit(pushLimit);
            return parsePartialFrom;
        }
        throw InvalidProtocolBufferException.g();
    }

    private CodedInputStream(b bVar) {
        this.f35205h = false;
        this.f35207j = Integer.MAX_VALUE;
        this.f35209l = 64;
        this.f35210m = 67108864;
        this.f35198a = bVar.f35276d;
        int n10 = bVar.n();
        this.f35202e = n10;
        this.f35200c = n10 + bVar.size();
        this.f35206i = -this.f35202e;
        this.f35203f = null;
        this.f35199b = true;
    }

    public static int readRawVarint32(int i10, InputStream inputStream) {
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            return i10;
        }
        int i11 = i10 & 127;
        int i12 = 7;
        while (i12 < 32) {
            int read = inputStream.read();
            if (read == -1) {
                throw InvalidProtocolBufferException.i();
            }
            i11 |= (read & 127) << i12;
            if ((read & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                return i11;
            }
            i12 += 7;
        }
        while (i12 < 64) {
            int read2 = inputStream.read();
            if (read2 == -1) {
                throw InvalidProtocolBufferException.i();
            }
            if ((read2 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                return i11;
            }
            i12 += 7;
        }
        throw InvalidProtocolBufferException.e();
    }
}
