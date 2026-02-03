package kotlin.reflect.jvm.internal.impl.protobuf;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class ByteString implements Iterable<Byte> {
    public static final ByteString EMPTY = new b(new byte[0]);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ByteIterator extends Iterator<Byte> {
        byte nextByte();
    }

    private static ByteString b(Iterator it, int i10) {
        if (i10 == 1) {
            return (ByteString) it.next();
        }
        int i11 = i10 >>> 1;
        return b(it, i11).concat(b(it, i10 - i11));
    }

    public static ByteString copyFrom(byte[] bArr, int i10, int i11) {
        byte[] bArr2 = new byte[i11];
        System.arraycopy(bArr, i10, bArr2, 0, i11);
        return new b(bArr2);
    }

    public static ByteString copyFromUtf8(String str) {
        try {
            return new b(str.getBytes("UTF-8"));
        } catch (UnsupportedEncodingException e10) {
            throw new RuntimeException("UTF-8 not supported?", e10);
        }
    }

    public static Output newOutput() {
        return new Output(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void c(byte[] bArr, int i10, int i11, int i12);

    public ByteString concat(ByteString byteString) {
        int size = size();
        int size2 = byteString.size();
        if (size + size2 < 2147483647L) {
            return c.o(this, byteString);
        }
        StringBuilder sb2 = new StringBuilder(53);
        sb2.append("ByteString would be too long: ");
        sb2.append(size);
        sb2.append("+");
        sb2.append(size2);
        throw new IllegalArgumentException(sb2.toString());
    }

    public void copyTo(byte[] bArr, int i10, int i11, int i12) {
        if (i10 >= 0) {
            if (i11 >= 0) {
                if (i12 >= 0) {
                    int i13 = i10 + i12;
                    if (i13 <= size()) {
                        int i14 = i11 + i12;
                        if (i14 <= bArr.length) {
                            if (i12 > 0) {
                                c(bArr, i10, i11, i12);
                                return;
                            }
                            return;
                        }
                        StringBuilder sb2 = new StringBuilder(34);
                        sb2.append("Target end offset < 0: ");
                        sb2.append(i14);
                        throw new IndexOutOfBoundsException(sb2.toString());
                    }
                    StringBuilder sb3 = new StringBuilder(34);
                    sb3.append("Source end offset < 0: ");
                    sb3.append(i13);
                    throw new IndexOutOfBoundsException(sb3.toString());
                }
                StringBuilder sb4 = new StringBuilder(23);
                sb4.append("Length < 0: ");
                sb4.append(i12);
                throw new IndexOutOfBoundsException(sb4.toString());
            }
            StringBuilder sb5 = new StringBuilder(30);
            sb5.append("Target offset < 0: ");
            sb5.append(i11);
            throw new IndexOutOfBoundsException(sb5.toString());
        }
        StringBuilder sb6 = new StringBuilder(30);
        sb6.append("Source offset < 0: ");
        sb6.append(i10);
        throw new IndexOutOfBoundsException(sb6.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int d();

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract boolean e();

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int f(int i10, int i11, int i12);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int g(int i10, int i11, int i12);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int h();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(OutputStream outputStream, int i10, int i11) {
        if (i10 >= 0) {
            if (i11 >= 0) {
                int i12 = i10 + i11;
                if (i12 <= size()) {
                    if (i11 > 0) {
                        j(outputStream, i10, i11);
                        return;
                    }
                    return;
                }
                StringBuilder sb2 = new StringBuilder(39);
                sb2.append("Source end offset exceeded: ");
                sb2.append(i12);
                throw new IndexOutOfBoundsException(sb2.toString());
            }
            StringBuilder sb3 = new StringBuilder(23);
            sb3.append("Length < 0: ");
            sb3.append(i11);
            throw new IndexOutOfBoundsException(sb3.toString());
        }
        StringBuilder sb4 = new StringBuilder(30);
        sb4.append("Source offset < 0: ");
        sb4.append(i10);
        throw new IndexOutOfBoundsException(sb4.toString());
    }

    public boolean isEmpty() {
        if (size() == 0) {
            return true;
        }
        return false;
    }

    public abstract boolean isValidUtf8();

    @Override // java.lang.Iterable
    public abstract Iterator<Byte> iterator();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void j(OutputStream outputStream, int i10, int i11);

    public abstract CodedInputStream newCodedInput();

    public abstract int size();

    public byte[] toByteArray() {
        int size = size();
        if (size == 0) {
            return Internal.EMPTY_BYTE_ARRAY;
        }
        byte[] bArr = new byte[size];
        c(bArr, 0, 0, size);
        return bArr;
    }

    public String toString() {
        return String.format("<ByteString@%s size=%d>", Integer.toHexString(System.identityHashCode(this)), Integer.valueOf(size()));
    }

    public abstract String toString(String str);

    public String toStringUtf8() {
        try {
            return toString("UTF-8");
        } catch (UnsupportedEncodingException e10) {
            throw new RuntimeException("UTF-8 not supported?", e10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Output extends OutputStream {

        /* renamed from: q  reason: collision with root package name */
        private static final byte[] f34358q = new byte[0];

        /* renamed from: d  reason: collision with root package name */
        private final int f34359d;

        /* renamed from: e  reason: collision with root package name */
        private final ArrayList f34360e;

        /* renamed from: i  reason: collision with root package name */
        private int f34361i;

        /* renamed from: o  reason: collision with root package name */
        private byte[] f34362o;

        /* renamed from: p  reason: collision with root package name */
        private int f34363p;

        Output(int i10) {
            if (i10 >= 0) {
                this.f34359d = i10;
                this.f34360e = new ArrayList();
                this.f34362o = new byte[i10];
                return;
            }
            throw new IllegalArgumentException("Buffer size < 0");
        }

        private byte[] a(byte[] bArr, int i10) {
            byte[] bArr2 = new byte[i10];
            System.arraycopy(bArr, 0, bArr2, 0, Math.min(bArr.length, i10));
            return bArr2;
        }

        private void h(int i10) {
            this.f34360e.add(new b(this.f34362o));
            int length = this.f34361i + this.f34362o.length;
            this.f34361i = length;
            this.f34362o = new byte[Math.max(this.f34359d, Math.max(i10, length >>> 1))];
            this.f34363p = 0;
        }

        private void l() {
            int i10 = this.f34363p;
            byte[] bArr = this.f34362o;
            if (i10 < bArr.length) {
                if (i10 > 0) {
                    this.f34360e.add(new b(a(bArr, i10)));
                }
            } else {
                this.f34360e.add(new b(this.f34362o));
                this.f34362o = f34358q;
            }
            this.f34361i += this.f34363p;
            this.f34363p = 0;
        }

        public synchronized int size() {
            return this.f34361i + this.f34363p;
        }

        public synchronized ByteString toByteString() {
            l();
            return ByteString.copyFrom(this.f34360e);
        }

        public String toString() {
            return String.format("<ByteString.Output@%s size=%d>", Integer.toHexString(System.identityHashCode(this)), Integer.valueOf(size()));
        }

        @Override // java.io.OutputStream
        public synchronized void write(int i10) {
            try {
                if (this.f34363p == this.f34362o.length) {
                    h(1);
                }
                byte[] bArr = this.f34362o;
                int i11 = this.f34363p;
                this.f34363p = i11 + 1;
                bArr[i11] = (byte) i10;
            } catch (Throwable th2) {
                throw th2;
            }
        }

        @Override // java.io.OutputStream
        public synchronized void write(byte[] bArr, int i10, int i11) {
            try {
                byte[] bArr2 = this.f34362o;
                int length = bArr2.length;
                int i12 = this.f34363p;
                if (i11 <= length - i12) {
                    System.arraycopy(bArr, i10, bArr2, i12, i11);
                    this.f34363p += i11;
                } else {
                    int length2 = bArr2.length - i12;
                    System.arraycopy(bArr, i10, bArr2, i12, length2);
                    int i13 = i11 - length2;
                    h(i13);
                    System.arraycopy(bArr, i10 + length2, this.f34362o, 0, i13);
                    this.f34363p = i13;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static ByteString copyFrom(byte[] bArr) {
        return copyFrom(bArr, 0, bArr.length);
    }

    public static ByteString copyFrom(Iterable<ByteString> iterable) {
        Collection collection;
        if (!(iterable instanceof Collection)) {
            collection = new ArrayList();
            for (ByteString byteString : iterable) {
                collection.add(byteString);
            }
        } else {
            collection = (Collection) iterable;
        }
        if (collection.isEmpty()) {
            return EMPTY;
        }
        return b(collection.iterator(), collection.size());
    }
}
