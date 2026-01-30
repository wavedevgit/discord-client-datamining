package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.OutputStream;
import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.reflect.jvm.internal.impl.protobuf.ByteString;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b extends ByteString {

    /* renamed from: d  reason: collision with root package name */
    protected final byte[] f35276d;

    /* renamed from: e  reason: collision with root package name */
    private int f35277e = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: kotlin.reflect.jvm.internal.impl.protobuf.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class C0455b implements ByteString.ByteIterator {

        /* renamed from: d  reason: collision with root package name */
        private int f35278d;

        /* renamed from: e  reason: collision with root package name */
        private final int f35279e;

        @Override // java.util.Iterator
        /* renamed from: a */
        public Byte next() {
            return Byte.valueOf(nextByte());
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f35278d < this.f35279e) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString.ByteIterator
        public byte nextByte() {
            try {
                byte[] bArr = b.this.f35276d;
                int i10 = this.f35278d;
                this.f35278d = i10 + 1;
                return bArr[i10];
            } catch (ArrayIndexOutOfBoundsException e10) {
                throw new NoSuchElementException(e10.getMessage());
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }

        private C0455b() {
            this.f35278d = 0;
            this.f35279e = b.this.size();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(byte[] bArr) {
        this.f35276d = bArr;
    }

    static int o(int i10, byte[] bArr, int i11, int i12) {
        for (int i13 = i11; i13 < i11 + i12; i13++) {
            i10 = (i10 * 31) + bArr[i13];
        }
        return i10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected void c(byte[] bArr, int i10, int i11, int i12) {
        System.arraycopy(this.f35276d, i10, bArr, i11, i12);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected int d() {
        return 0;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected boolean e() {
        return true;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof ByteString) || size() != ((ByteString) obj).size()) {
            return false;
        }
        if (size() == 0) {
            return true;
        }
        if (obj instanceof b) {
            return m((b) obj, 0, size());
        }
        if (obj instanceof c) {
            return obj.equals(this);
        }
        String valueOf = String.valueOf(obj.getClass());
        StringBuilder sb2 = new StringBuilder(valueOf.length() + 49);
        sb2.append("Has a new type of ByteString been created? Found ");
        sb2.append(valueOf);
        throw new IllegalArgumentException(sb2.toString());
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected int f(int i10, int i11, int i12) {
        return o(i10, this.f35276d, n() + i11, i12);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected int g(int i10, int i11, int i12) {
        int n10 = n() + i11;
        return e.g(i10, this.f35276d, n10, i12 + n10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    protected int h() {
        return this.f35277e;
    }

    public int hashCode() {
        int i10 = this.f35277e;
        if (i10 == 0) {
            int size = size();
            i10 = f(size, 0, size);
            if (i10 == 0) {
                i10 = 1;
            }
            this.f35277e = i10;
        }
        return i10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public boolean isValidUtf8() {
        int n10 = n();
        return e.f(this.f35276d, n10, size() + n10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    void j(OutputStream outputStream, int i10, int i11) {
        outputStream.write(this.f35276d, n() + i10, i11);
    }

    public byte k(int i10) {
        return this.f35276d[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean m(b bVar, int i10, int i11) {
        if (i11 <= bVar.size()) {
            if (i10 + i11 <= bVar.size()) {
                byte[] bArr = this.f35276d;
                byte[] bArr2 = bVar.f35276d;
                int n10 = n() + i11;
                int n11 = n();
                int n12 = bVar.n() + i10;
                while (n11 < n10) {
                    if (bArr[n11] != bArr2[n12]) {
                        return false;
                    }
                    n11++;
                    n12++;
                }
                return true;
            }
            int size = bVar.size();
            StringBuilder sb2 = new StringBuilder(59);
            sb2.append("Ran off end of other: ");
            sb2.append(i10);
            sb2.append(", ");
            sb2.append(i11);
            sb2.append(", ");
            sb2.append(size);
            throw new IllegalArgumentException(sb2.toString());
        }
        int size2 = size();
        StringBuilder sb3 = new StringBuilder(40);
        sb3.append("Length too large: ");
        sb3.append(i11);
        sb3.append(size2);
        throw new IllegalArgumentException(sb3.toString());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int n() {
        return 0;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public CodedInputStream newCodedInput() {
        return CodedInputStream.b(this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public int size() {
        return this.f35276d.length;
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString
    public String toString(String str) {
        return new String(this.f35276d, n(), size(), str);
    }

    /* JADX WARN: Can't rename method to resolve collision */
    @Override // kotlin.reflect.jvm.internal.impl.protobuf.ByteString, java.lang.Iterable
    public Iterator<Byte> iterator() {
        return new C0455b();
    }
}
