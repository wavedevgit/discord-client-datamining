package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.reflect.jvm.internal.impl.protobuf.ByteString;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a extends kotlin.reflect.jvm.internal.impl.protobuf.b {

    /* renamed from: i  reason: collision with root package name */
    private final int f33981i;

    /* renamed from: o  reason: collision with root package name */
    private final int f33982o;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class b implements ByteString.ByteIterator {

        /* renamed from: d  reason: collision with root package name */
        private int f33983d;

        /* renamed from: e  reason: collision with root package name */
        private final int f33984e;

        @Override // java.util.Iterator
        /* renamed from: a */
        public Byte next() {
            return Byte.valueOf(nextByte());
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f33983d < this.f33984e) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString.ByteIterator
        public byte nextByte() {
            int i10 = this.f33983d;
            if (i10 < this.f33984e) {
                byte[] bArr = a.this.f33986d;
                this.f33983d = i10 + 1;
                return bArr[i10];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }

        private b() {
            int p10 = a.this.p();
            this.f33983d = p10;
            this.f33984e = p10 + a.this.size();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(byte[] bArr, int i10, int i11) {
        super(bArr);
        if (i10 >= 0) {
            if (i11 >= 0) {
                if (i10 + i11 <= bArr.length) {
                    this.f33981i = i10;
                    this.f33982o = i11;
                    return;
                }
                StringBuilder sb2 = new StringBuilder(48);
                sb2.append("Offset+Length too large: ");
                sb2.append(i10);
                sb2.append("+");
                sb2.append(i11);
                throw new IllegalArgumentException(sb2.toString());
            }
            StringBuilder sb3 = new StringBuilder(29);
            sb3.append("Length too small: ");
            sb3.append(i10);
            throw new IllegalArgumentException(sb3.toString());
        }
        StringBuilder sb4 = new StringBuilder(29);
        sb4.append("Offset too small: ");
        sb4.append(i10);
        throw new IllegalArgumentException(sb4.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.protobuf.b, kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public void c(byte[] bArr, int i10, int i11, int i12) {
        System.arraycopy(this.f33986d, p() + i10, bArr, i11, i12);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.b
    public byte l(int i10) {
        if (i10 >= 0) {
            if (i10 < size()) {
                return this.f33986d[this.f33981i + i10];
            }
            int size = size();
            StringBuilder sb2 = new StringBuilder(41);
            sb2.append("Index too large: ");
            sb2.append(i10);
            sb2.append(", ");
            sb2.append(size);
            throw new ArrayIndexOutOfBoundsException(sb2.toString());
        }
        StringBuilder sb3 = new StringBuilder(28);
        sb3.append("Index too small: ");
        sb3.append(i10);
        throw new ArrayIndexOutOfBoundsException(sb3.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.protobuf.b
    public int p() {
        return this.f33981i;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.b, kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public int size() {
        return this.f33982o;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.b, kotlin.reflect.jvm.internal.impl.protobuf.ByteString, java.lang.Iterable
    public Iterator<Byte> iterator() {
        return new b();
    }
}
